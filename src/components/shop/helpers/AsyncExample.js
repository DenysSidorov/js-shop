class AsyncExample extends React.Component {

    componentDidMount() {
        console.log('START TEST');

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
            console.log(k, 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
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