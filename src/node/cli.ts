import cac from "cac";

const cli = cac();

cli
    .command("[root]", "Run the development server") // [] 中的内容为可选参数，即当仅输入 `vite` 命令下会执行下面的逻辑
    .alias("serve")
    .alias("dev")
    .action(async () => {
        console.log('测试 cli~');
    });

cli.help();

cli.parse();