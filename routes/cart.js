const Cart = require("../models/Cart")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

//create

router.post("/", verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err)
    }
})
//update
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true }
        );

        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
})

//delete
router.delete(":id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted")
    } catch {
        res.status(500).json(err);
    }
})

//get user cart
router.get("/find/:iuserId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.find({ userId: req.params.userID })
        res.status(200).json(cart);
    } catch {
        res.status(500).json(err);
    }
})

//GET ALL

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;