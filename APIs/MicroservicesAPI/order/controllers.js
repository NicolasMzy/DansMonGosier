const orderModel = require('./schema'); 

exports.createOrder = async (req, res) => {
  try {
    const { id_user, id_restaurant,price,number,payment,status,date,address,deliverer,menus,items } = req.body;

    const newOrder = new orderModel({
      id_user,
      id_restaurant,
      price,
      number,
      payment,
      status,
      date,
      address,
      deliverer,
      menus,
      items
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error('Error while creating a new order:', error);
    res.status(500).json({ message: 'Error while creating a new order' });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error('Error while retrieving the order:', error);
    res.status(500).json({ message: 'Error while retrieving the order' });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const updates = req.body;

    const updatedOrder = await orderModel.findByIdAndUpdate(orderId, updates, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error('Error while updating the order:', error);
    res.status(500).json({ message: 'Error while updating the order' });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const deletedOrder = await orderModel.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error while deleting the order:', error);
    res.status(500).json({ message: 'Error while deleting the order' });
  }
};

