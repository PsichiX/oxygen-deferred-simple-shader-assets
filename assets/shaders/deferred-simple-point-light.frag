#include "shaders/deferred-simple.frag"

precision mediump float;

uniform vec4 uColor;

varying vec2 vTexCoord;

void main() {
  float l = length(vTexCoord);
  float d = 1.0 - min(1.0, l);
  vec3 c = uColor.rgb * uColor.a * d;

  writeLight(c);
}
