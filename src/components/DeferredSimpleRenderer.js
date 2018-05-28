import { DeferredRenderer } from 'oxygen-core';

export default class DeferredSimpleRenderer extends DeferredRenderer {

  static get propsTypes() {
    return {
      shader: DeferredRenderer.propsTypes.shader,
      overrideUniforms: DeferredRenderer.propsTypes.overrideUniforms,
      overrideSamplers: DeferredRenderer.propsTypes.overrideSamplers,
      gBufferId: DeferredRenderer.propsTypes.gBufferId,
      lBufferid: DeferredRenderer.propsTypes.lBufferid,
      gBufferLayer: DeferredRenderer.propsTypes.gBufferLayer,
      lBufferLayer: DeferredRenderer.propsTypes.lBufferLayer
    };
  }

  static factory() {
    return new DeferredSimpleRenderer();
  }

  constructor() {
    super();

    this.gBufferId = '#simple-deferred-g-buffer';
    this.lBufferId = '#simple-deferred-l-buffer';
    this.gBufferTargets = { float: false, mipmap: false, count: 0 };
    this.lBufferTargets = { float: false, mipmap: false, count: 0 };
  }

}
