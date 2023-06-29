const OrderModel = require('./schema'); 

exports.createOrder = async (req, res) => {
  try {
    const { id_user,id_restaurant,price,number,payment,status,address,deliverer,menus,items } = req.body;

    const newOrder = new OrderModel({
      id_user,
      id_restaurant,
      price,
      number,
      payment,
      status,
      date: {
        start: Date.now(),
        end: null
      },
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

    const order = await OrderModel.findById(orderId);

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

    const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, updates, { new: true });

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

    const deletedOrder = await OrderModel.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error while deleting the order:', error);
    res.status(500).json({ message: 'Error while deleting the order' });
  }
};

exports.getAllOrdersByStatus = async (req, res) => {
  try {
    const status = req.params.status;

    // Fetch all orders with the given status
    const orders = await OrderModel.find({ status });

    if (!orders) {
      return res.status(404).json({ message: 'No orders found with the given status' });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error while retrieving the orders:', error);
    res.status(500).json({ message: 'Error while retrieving the orders' });
  }
};

exports.getDeliveredOrdersByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const orders = await OrderModel.find({ id_user: userId, status: 'delivered' });

    if (!orders) {
      return res.status(404).json({ message: 'No delivered orders found for this user' });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error while retrieving the orders:', error);
    res.status(500).json({ message: 'Error while retrieving the orders' });
  }
};

exports.getOrdersByStatusAndRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const status = req.params.status;

    const orders = await OrderModel.find({ id_restaurant: restaurantId, status: status });

    if (!orders) {
      return res.status(404).json({ message: `No orders with status ${status} found for this restaurant` });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error while retrieving the orders:', error);
    res.status(500).json({ message: 'Error while retrieving the orders' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({});

    if (!orders) {
      return res.status(404).json({ message: 'No orders found' });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error while retrieving the orders:', error);
    res.status(500).json({ message: 'Error while retrieving the orders' });
  }
};

exports.getOrdersExcludeStatuses = async (req, res) => {
  try {
    const excludedStatuses = ['accepted_order', 'ordering'];

    const orders = await OrderModel.find({ status: { $nin: excludedStatuses } });

    if (!orders) {
      return res.status(404).json({ message: 'No orders found excluding the given statuses' });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error while retrieving the orders:', error);
    res.status(500).json({ message: 'Error while retrieving the orders' });
  }
};

