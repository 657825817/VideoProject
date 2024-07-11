import { _decorator, Component, VideoPlayer, log, assetManager, VideoClip, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('VideoController')
export class VideoController extends Component {
    @property(VideoPlayer)
    videoPlayer: VideoPlayer | null = null;

    onLoad() {
        if (this.videoPlayer) {

            // //服务器加载
            // assetManager.loadRemote('SceneryVideo', { reloadAsset: true }, (err, clip) => {
            //     if (err) {
            //         log(`Failed to load video: ${err.message}`);
            //         return;
            //     }

            //     // 转换为 VideoClip 类型
            //     const videoClip: VideoClip = clip as VideoClip;

            //     // 设置 VideoPlayer 的 clip
            //     this.videoPlayer!.clip = videoClip;

            //     // 添加事件监听
            //     this.videoPlayer!.node.on('ready-to-play', this.onReadyToPlay, this);
            //     this.videoPlayer!.node.on('playing', this.onPlaying, this);
            //     this.videoPlayer!.node.on('paused', this.onPaused, this);
            //     this.videoPlayer!.node.on('stopped', this.onStopped, this);
            //     this.videoPlayer!.node.on('completed', this.onCompleted, this);
            //     this.videoPlayer!.node.on('meta-loaded', this.onMetaLoaded, this);
            //     this.videoPlayer!.node.on('clicked', this.onClicked, this);
            //     this.videoPlayer!.node.on('error', this.onError, this);

            //     // 手动调用 ready-to-play 事件
            //     this.onReadyToPlay();
            // });

            //本地文件加载
            resources.load('SceneryVideo', (err, clip) => {
                if (err) {
                    log(`Failed to load video: ${err.message}`);
                    return;
                }
                // 转换为 VideoClip 类型
                const videoClip: VideoClip = clip as VideoClip;
                // 设置 VideoPlayer 的 clip
                this.videoPlayer.clip = videoClip;
                this.videoPlayer.play();
            });
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
