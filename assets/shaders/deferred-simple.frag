void writeMaterial(vec4 albedo) {
  gl_FragColor = albedo;
}

void writeLight(vec3 emission) {
  gl_FragColor = vec4(emission, 1.0);
}
