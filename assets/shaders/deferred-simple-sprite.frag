#include "shaders/deferred-simple.frag"

precision mediump float;

uniform sampler2D sBase;
uniform vec4 uColor;

varying vec2 vTexCoord;

void main() {
  vec4 albedo = texture2D(sBase, vTexCoord) * uColor;

  writeMaterial(albedo);
}
