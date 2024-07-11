System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, VideoPlayer, log, assetManager, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AssetManagerVideoPlayer;

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
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "effb0GW0y5KW6jFqSm3JsR1", "AssetManagerVideoPlayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'VideoPlayer', 'log', 'assetManager', 'VideoClip', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssetManagerVideoPlayer", AssetManagerVideoPlayer = (_dec = ccclass('AssetManagerVideoPlayer'), _dec2 = property(VideoPlayer), _dec(_class = (_class2 = class AssetManagerVideoPlayer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "videoPlayer", _descriptor, this);
        }

        onLoad() {
          if (this.videoPlayer) {
            //服务器加载
            assetManager.loadRemote('SceneryVideo', {
              reloadAsset: true
            }, (err, clip) => {
              if (err) {
                log(`Failed to load video: ${err.message}`);
                return;
              } // 转换为 VideoClip 类型


              const videoClip = clip; // 设置 VideoPlayer 的 clip

              this.videoPlayer.clip = videoClip; // 添加事件监听

              this.videoPlayer.node.on('ready-to-play', this.onReadyToPlay, this);
              this.videoPlayer.node.on('playing', this.onPlaying, this);
              this.videoPlayer.node.on('paused', this.onPaused, this);
              this.videoPlayer.node.on('stopped', this.onStopped, this);
              this.videoPlayer.node.on('completed', this.onCompleted, this);
              this.videoPlayer.node.on('meta-loaded', this.onMetaLoaded, this);
              this.videoPlayer.node.on('clicked', this.onClicked, this);
              this.videoPlayer.node.on('error', this.onError, this); // 手动调用 ready-to-play 事件

              this.onReadyToPlay();
            }); ////本地文件加载
            // resources.load('SceneryVideo', (err, clip) => {
            //     if (err) {
            //         log(`Failed to load video: ${err.message}`);
            //         return;
            //     }
            //     // 转换为 VideoClip 类型
            //     const videoClip: VideoClip = clip as VideoClip;
            //     // 设置 VideoPlayer 的 clip
            //     this.videoPlayer!.clip = videoClip;
            //     this.videoPlayer.play();
            // });
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
//# sourceMappingURL=4e07495f02b8f527b16b0b6daabb5143eabf71e4.js.map