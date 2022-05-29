const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    console.log(e);
    const {key, keyCode, code, which} = e;

    insert.innerHTML = `
    <div class = topBox>
        ${key}
    </div>


    <div class = "mainBox">

            <div>
                <div class = "textInfo">
                    Code
                </div>

                <div  class = "key">
                    ${code}
                </div>
            </div>

            <div>
                <div class = "textInfo">
                    Which Value
                </div>

                <div class = "key">
                    ${which}
                </div>
                
            </div>

            </div>

    </div>
    `


});