import { _decorator, Component, VideoPlayer, log } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('VideoPlayerController')
export class VideoPlayerController extends Component {
    @property(VideoPlayer)
    videoPlayer: VideoPlayer | null = null;

    onLoad() {
        if (this.videoPlayer) {
            // 设置视频 URL
            this.videoPlayer.resourceType = VideoPlayer.ResourceType.REMOTE;
            this.videoPlayer.remoteURL = "http://example.com/video.mp4";

            // 添加事件监听
            this.videoPlayer.node.on('ready-to-play', this.onReadyToPlay, this);
            this.videoPlayer.node.on('playing', this.onPlaying, this);
            this.videoPlayer.node.on('paused', this.onPaused, this);
            this.videoPlayer.node.on('stopped', this.onStopped, this);
            this.videoPlayer.node.on('completed', this.onCompleted, this);
            this.videoPlayer.node.on('meta-loaded', this.onMetaLoaded, this);
            this.videoPlayer.node.on('clicked', this.onClicked, this);
            this.videoPlayer.node.on('error', this.onError, this);
        }
    }

    onReadyToPlay() {
        log('Video is ready to play');
        if (this.videoPlayer) {
            this.videoPlayer.play();
        }
    }

    onPlaying() {
        log('Video is playing');
    }

    onPaused() {
        log('Video is paused');
    }

    onStopped() {
        log('Video is stopped');
    }

    onCompleted() {
        log('Video play completed');
    }

    onMetaLoaded() {
        log('Video meta data loaded');
    }

    onClicked() {
        log('Video is clicked');
    }

    onError() {
        log('Video player encountered an error');
    }
}
