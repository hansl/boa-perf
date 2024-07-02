# boa-perf
A simple MRE for boa performance issues

To use, build the project and run the following command:

```bash
npm install
npm run build
cd $PATH_TO_BOA
cargo run --release --features boa_engine/profiler $PATH_TO_THIS_PROJECT/dist/index.ts
```
