export async function getJson(ip) {
    let flag = false;
    return new Promise(resolve => {
        fetch(ip)
            .then(res => {
                flag = true;
                if (res.status == 200) {
                    resolve({
                        success: true,
                        res: res,
                    });
                }
            })
            .catch(() => {
                flag = true;
                resolve({
                    success: false,
                });
            });
        setTimeout(function () {
            if (!flag) {
                flag = false;
                resolve({
                    success: false,
                });
            }
        }, 1500);
    });
}
