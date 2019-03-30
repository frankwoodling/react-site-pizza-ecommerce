import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const styles = {
    buttonCart: {
        fontSize: 12,
        color: 'white',
        background: '#f04a3c',
        boxShadow: 'none',
        borderRadius: 50,
        margin: '30px',
        textTransform: 'capitalize',
    },
    shoppingCart: {
        paddingRight: '10px'
    }
}

const ButtonCart: React.FC = () => {
    return (
            <Button
                style={styles.buttonCart}
                size="large"
                variant="raised">
            <ShoppingCart style={styles.shoppingCart} />
            Add to Cart
            </Button>     
    )
}

ButtonCart.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export { ButtonCart };