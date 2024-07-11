System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, VideoPlayer, log, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, VideoPlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      VideoPlayer = _cc.VideoPlayer;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2568fuKKXFLMKyn+al29L+z", "VideoPlayerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'VideoPlayer', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("VideoPlayerController", VideoPlayerController = (_dec = ccclass('VideoPlayerController'), _dec2 = property(VideoPlayer), _dec(_class = (_class2 = class VideoPlayerController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "videoPlayer", _descriptor, this);
        }

        onLoad() {
          if (this.videoPlayer) {
            // 设置视频 URL
            this.videoPlayer.resourceType = VideoPlayer.ResourceType.REMOTE;
            this.videoPlayer.remoteURL = "http://example.com/video.mp4"; // 添加事件监听

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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "videoPlayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b5759057ea07a1a7aaee2644e8dc20331007e8e9.js.map