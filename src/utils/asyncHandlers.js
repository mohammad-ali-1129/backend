// const asyncHandlers = () => {

// }


export {asyncHandlers}


// Original code using try/catch:
const asyncHandlers = (fn) => async (req, res, next) => {
    try {
        await fn(req,res, next) 
    } catch (error) {
        res.status(err.code || 500).json({
            success : false,
            message : err.message
        })
    }
}



// const asyncHandlers = (fn) => async (req, res, next) => {
//     return Promise.resolve(fn(req, res, next)).catch((error) => {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     })
// }
