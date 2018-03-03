precision mediump float;

uniform sampler2D sGBufferAlbedo;
uniform sampler2D sLBufferLightEmission;

uniform vec4 uAmbientLight;

varying vec2 vTexCoord;

void main() {
  vec3 albedo = texture2D(sGBufferAlbedo, vTexCoord).xyz;
  vec3 lightEmission = texture2D(sLBufferLightEmission, vTexCoord).xyz;

  vec3 al = uAmbientLight.rgb * uAmbientLight.a;
  vec3 lc = lightEmission + al;
  vec3 sc = albedo * lc;

  gl_FragColor = vec4(sc, 1.0);
}
