import { useState } from 'react';
import { Text, Button } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Text>Counter</Text>
            <Text >{count}</Text>
            <Button 
                onPress={() => setCount(count + 1)} 
                title='Click me' />
        </>
    )
}

export default Counter;