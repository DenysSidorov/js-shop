// https://medium.com/@kkomaz/react-to-async-await-553c43f243e2
import React from 'react';
class AsyncExample extends React.Component {

    componentDidMount() {

        async function b(a) {
            return new Promise(function (resolve, reject) {
                setTimeout(()=> {
                    resolve(a * a);
                }, 1000);
            })
        }
        async function d(){
            var k =1 ;
            try {
                k = await b(100);
            } catch (e){
                console.log(e, 'errroR');
            }
            return k
        }
        d().then(res=> console.log(res, 'resp'), e=> console.log(e, 'err'));
    }
    state = {a: 5}
    render() {
        return (
            <div>Hi</div>
        )
    }
}