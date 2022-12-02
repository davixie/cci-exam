const FragmentShader = () => {
  return `
    varying float x;
    varying float y;
    varying float z;
    varying vec3 vUv;

    uniform float u_time;


    void main() {
      gl_FragColor = vec4((32.0 - abs(x)) / 32.0, (32.0 - abs(y)) / 32.0, (abs(x + y) / 2.0) / 32.0, 1.0);
    }
  `;
};

export default FragmentShader
