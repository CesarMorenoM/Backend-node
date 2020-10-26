import app from './app'
import '@babel/polyfill'

async function main(){
    await app.listen(5555)
    console.log('Server on port 555')
}

main()