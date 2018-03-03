#include "shaders/deferred-simple.frag"

precision mediump float;

uniform vec4 uColor;

void main() {
  vec3 c = uColor.rgb * uColor.a;

  writeLight(c);
}
