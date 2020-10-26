import Runner from '../models/Runner'

const adduser = async (req,res)=>{
    const {name,email,km} =req.body
    try {
        console.log(req.body)
        if (req.body.name == '') {
            return res.status(400).send('The name is required');
          }
          if (req.body.km == null || req.body.km < 0) {
            return res.status(400).send('The km is required');
          }
          if (req.body.email == '') {
            return res.status(400).send('The email is required');
          }
          if(req.body.km <4 )
            res.send('Debes de caminar más')
          const response = await Runner.create({
              name,
              email,
              km
          },{
            fields: ['name','email','km']
          })

          if(response){
            return res.json({
                 message:'Project create Successfully',
                 data: response
             })
         }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'SOmething goes wrong',
            data:{}
        })
    }
}
const getUsers = async (req,res)=>{
    try {
          const response = await Runner.findAll()
          res.send(response)
    } catch (error) {
        return res.status(500)
    }
}




const createRunner = async (req,res) =>{
    console.log(req.body)
    res.send('received')
}
export  {adduser,getUsers}