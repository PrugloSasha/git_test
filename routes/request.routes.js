const {Router} = require('express')
const Problem = require('../models/Problem')
const router = Router()

router.post('/add', async (req, res) => {
    try {
        const {FIO,email,KTnumber,position,phone,classroom,explaining,building}=req.body
        //console.log(FIO+"!"+email+"!"+KTnumber+"!"+position+"!"+phone+"!"+classroom+"!"+explaining+"!"+building);

        const p = new Problem({
            FIO:FIO,
            email:email,
            KTnumber:KTnumber,
            position:position,
            phone:phone,
            classroom:classroom,
            explaining:explaining,
            building:building
        })
        await p.save()

        res.status(201).json({ p })

    } catch(e) {
        res.status(500).json({message: 'Something went wrong' }) 
    }
})

module.exports = router // экспортируем объект router 