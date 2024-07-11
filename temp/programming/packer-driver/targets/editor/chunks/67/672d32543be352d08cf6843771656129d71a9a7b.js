System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, VideoPlayer, assetManager, _dec, _class, _class2, _descriptor, _crd, ccclass, property, VideoController;

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
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69802FiylBLD5nEUePbStSU", "VideoController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'VideoPlayer', 'assetManager', 'VideoClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", VideoController = (_dec = property(VideoPlayer), ccclass(_class = (_class2 = class VideoController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "videoPlayer", _descriptor, this);
        }

        start() {
          // 在开始时播放默认视频
          this.playVideo('resources/video1.mp4');
        }

        playVideo(videoUrl) {
          assetManager.loadRemote(videoUrl, {
            ext: '.mp4'
          }, (err, videoAsset) => {
            if (err) {
              console.error('Failed to load video asset:', err);
              return;
            } // 转换为 VideoClip 类型


            const videoClip = videoAsset; // 设置给 videoPlayer.clip

            this.videoPlayer.clip = videoClip; // 播放视频

            this.videoPlayer.play();
          });
        } // 示例方法，用于在运行时更换视频


        changeVideo(event, customEventData) {
          this.playVideo(customEventData);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "videoPlayer", [_dec], {
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
//# sourceMappingURL=672d32543be352d08cf6843771656129d71a9a7b.js.map