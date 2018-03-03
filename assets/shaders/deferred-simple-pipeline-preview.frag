precision mediump float;

uniform sampler2D sGBufferAlbedo;
uniform sampler2D sLBufferLightEmission;
uniform float uMode;

varying vec2 vTexCoord;

void main() {
  vec3 albedo = texture2D(sGBufferAlbedo, vTexCoord).xyz;
  vec3 lightEmission = texture2D(sLBufferLightEmission, vTexCoord).xyz;

  if (uMode >= 0.0 && uMode < 1.0) {
    gl_FragColor = vec4(albedo, 1.0);
  } else if (uMode >= 1.0 && uMode < 2.0) {
    gl_FragColor = vec4(lightEmission, 1.0);
  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
}
