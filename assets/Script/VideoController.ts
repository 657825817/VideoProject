import { _decorator, Component, VideoPlayer, assetManager, VideoClip } from 'cc';
const { ccclass, property } = _decorator;

@ccclass
export default class VideoController extends Component {

    @property(VideoPlayer)
    videoPlayer: VideoPlayer = null;

    start() {
        // 在开始时播放默认视频
        this.playVideo('resources/video1.mp4');
    }

    playVideo(videoUrl: string) {
        assetManager.loadRemote(videoUrl, { ext: '.mp4' }, (err, videoAsset) => {
            if (err) {
                console.error('Failed to load video asset:', err);
                return;
            }
            // 转换为 VideoClip 类型
            const videoClip: VideoClip = videoAsset as VideoClip;
            // 设置给 videoPlayer.clip
            this.videoPlayer.clip = videoClip;
            // 播放视频
            this.videoPlayer.play();
        });
    }

    // 示例方法，用于在运行时更换视频
    changeVideo(event, customEventData) {
        this.playVideo(customEventData);
    }
}
