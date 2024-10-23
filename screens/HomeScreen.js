import {Text, View, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';
import {baseUrl} from '../shared/baseUrl';
import { useSelector } from 'react-redux';

const FeaturedItem = ({item}) => {
if (item){
    return (
        <Card
        containerStyle = {{
            padding: 0
        }}
        >
            <Card.Image
            source={{uri: baseUrl + item.image}}
            >
                <View
                style={{justifyContent: 'center', flex:1}}
                >
                    <Text
                    style={
                        {color: 'white', 
                        textAlign: 'center', 
                        fontSize: 20}}
                    >{item.name}</Text>
                </View>
            </Card.Image>
            <Text
            style={{margin: 20}}
            >{item.description}</Text>
        </Card>
    );
}
return <View/>
};

const HomeScreen = () => {
    const campsites = useSelector((state)=> state.campsites);
    const partners = useSelector((state)=> state.partners);
    const promotions = useSelector((state)=> state.promotions);

    const featCampsite = campsites.campsitesArray.find((item)=> item.featured);
    const featPromotion = promotions.promotionsArray.find((item)=> item.featured);
    const featPartner = partners.partnersArray.find((item)=> item.featured);

return(
    <ScrollView>
        <FeaturedItem
        item={featCampsite}
        />
        <FeaturedItem
        item={featPromotion}
        />
        <FeaturedItem
        item={featPartner}
        />
    </ScrollView>
);
};

export default HomeScreen;