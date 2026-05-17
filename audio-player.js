class AudioPlayerWidget {
  constructor() {
    this.audio = new Audio();
    this.isPlaying = false;
    this.currentTrack = null;
    this.savedVolume = 0.7;
    this.initWidget();
  }

  initWidget() {
    const widget = document.getElementById('audio-player-widget');
    if (!widget) return;

    const playBtn = widget.querySelector('.audio-play-btn');
    const pauseBtn = widget.querySelector('.audio-pause-btn');
    const closeBtn = widget.querySelector('.audio-close-btn');
    const muteBtn = widget.querySelector('.audio-mute-btn');
    const volumeSlider = widget.querySelector('.audio-volume-slider');
    const trackNameEl = widget.querySelector('.audio-track-name');
    const progressBar = widget.querySelector('.audio-progress-bar');
    const timeDisplay = widget.querySelector('.audio-time-display');

    this.audio.volume = volumeSlider ? parseFloat(volumeSlider.value) : 0.7;
    this.savedVolume = this.audio.volume;
    if (volumeSlider) {
      volumeSlider.addEventListener('input', () => {
        this.audio.volume = parseFloat(volumeSlider.value);
        if (this.audio.volume > 0) {
          this.savedVolume = this.audio.volume;
          muteBtn.textContent = '🔈';
        }
      });
    }

    // Mute button
    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        if (this.audio.volume > 0) {
          this.savedVolume = this.audio.volume;
          this.audio.volume = 0;
          volumeSlider.value = 0;
          muteBtn.textContent = '🔇';
        } else {
          this.audio.volume = this.savedVolume;
          volumeSlider.value = this.savedVolume;
          muteBtn.textContent = '🔈';
        }
      });
    }

    widget.classList.remove('visible');

    // Play button
    playBtn.addEventListener('click', () => {
      if (this.currentTrack) {
        this.audio.play();
        this.isPlaying = true;
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
      }
    });

    // Pause button
    pauseBtn.addEventListener('click', () => {
      this.audio.pause();
      this.isPlaying = false;
      playBtn.style.display = 'inline-block';
      pauseBtn.style.display = 'none';
    });

    // Close button
    closeBtn.addEventListener('click', () => this.close());

    // Update progress bar as audio plays
    this.audio.addEventListener('timeupdate', () => {
      if (this.audio.duration) {
        const percent = (this.audio.currentTime / this.audio.duration) * 100;
        progressBar.style.setProperty('--progress', `${percent}%`);
        timeDisplay.textContent = this.formatTime(this.audio.currentTime);
      }
    });

    // Reset when audio ends
    this.audio.addEventListener('ended', () => {
      this.close();
    });

    // Load metadata to display duration
    this.audio.addEventListener('loadedmetadata', () => {
      const duration = widget.querySelector('.audio-duration');
      if (duration) {
        duration.textContent = this.formatTime(this.audio.duration);
      }
    });
  }

  play(mp3Url, trackName = 'Now Playing') {
    const widget = document.getElementById('audio-player-widget');
    if (!widget) return;

    this.currentTrack = trackName;
    const trackNameEl = widget.querySelector('.audio-track-name');
    trackNameEl.textContent = trackName;

    this.audio.src = mp3Url;
    this.audio.play();
    this.isPlaying = true;

    const playBtn = widget.querySelector('.audio-play-btn');
    const pauseBtn = widget.querySelector('.audio-pause-btn');
    widget.classList.add('visible');
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
  }

  close() {
    const widget = document.getElementById('audio-player-widget');
    if (!widget) return;

    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.src = '';
    this.isPlaying = false;
    this.currentTrack = null;

    const playBtn = widget.querySelector('.audio-play-btn');
    const pauseBtn = widget.querySelector('.audio-pause-btn');
    const progressBar = widget.querySelector('.audio-progress-bar');
    const trackNameEl = widget.querySelector('.audio-track-name');
    const duration = widget.querySelector('.audio-duration');
    const timeDisplay = widget.querySelector('.audio-time-display');

    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    progressBar.style.setProperty('--progress', '0%');
    trackNameEl.innerHTML = '<i>click some music to play</i>';
    if (duration) duration.textContent = '0:00';
    if (timeDisplay) timeDisplay.textContent = '0:00';
    widget.classList.remove('visible');
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
}

// Initialize player when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.audioPlayer = new AudioPlayerWidget();
  });
} else {
  window.audioPlayer = new AudioPlayerWidget();
}
