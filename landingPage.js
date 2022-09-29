import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,TouchableOpacity, FlatList, ScrollView
} from "react-native";
import React, { useEffect } from "react";

const Landing = () => {
    const [filteredData,setFilteredData]=React.useState("");
  const data = [
    {
      name: "Beef burger",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80",
      size: "medium",
      description:
        "Ground beef, onion, cheese, soy sauce, Worcestershire sauce, egg, onion soup mix, garlic, garlic powder, parsley, basil, oregano, rosemary, salt, and pepper.",
      category:'Burgers'
    },
    {
      name: "Cheese burger",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      size: "medium",
      description:
        "Ground beef, onion, cheese, soy sauce, Worcestershire sauce, egg, onion soup mix, garlic, garlic powder, parsley, basil, oregano, rosemary, salt, and pepper.",
        category:'Burgers'
    },
    {
      name: "Chicken burger",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
      size: "medium",
      description:
        "Ground beef, onion, cheese, soy sauce, Worcestershire sauce, egg, onion soup mix, garlic, garlic powder, parsley, basil, oregano, rosemary, salt, and pepper.",
        category:'Burgers'
    },
    {
      name: "Buffalo wings",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1614398750956-402891a7dce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      size: "medium",
      description:
        "Ground beef, onion, cheese, soy sauce, Worcestershire sauce, egg, onion soup mix, garlic, garlic powder, parsley, basil, oregano, rosemary, salt, and pepper.",
        category:'Wings'
    },
    {
      name: "Family feast 1",
      price: 170,
      image:
        "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1140&q=80",
      size: "medium",
      description:
        "Ground beef, onion, cheese, soy sauce, Worcestershire sauce, egg, onion soup mix, garlic, garlic powder, parsley, basil, oregano, rosemary, salt, and pepper.",
        category:'Family deals'
    },
    {
      name: "Family feast 2",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1526016650454-68a6f488910a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      size: "medium",
      description:
        "Ground beef, onion, cheese, soy sauce, Worcestershire sauce, egg, onion soup mix, garlic, garlic powder, parsley, basil, oregano, rosemary, salt, and pepper.",
        category:'Family deals'
    },
    {
        name: "Family feast 3",
        price: 270,
        image:
          "https://images.unsplash.com/photo-1526016650454-68a6f488910a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        size: "medium",
        description:
          "Ground beef, onion, cheese, soy sauce, Worcestershire sauce, egg, onion soup mix, garlic, garlic powder, parsley, basil, oregano, rosemary, salt, and pepper.",
          category:'Promotions'
      },
    
  ];
  useEffect(() => {
    setFilteredData(data.filter((dat)=>{return dat}))
  }, []);
 const filtering=["All meals","Burgers","Promotions","Wings","Family deals"]
 const handleFilter=(index,x)=>
 
 {

    setFilteredData(data.filter((type,i)=>{
        
            
    
         if (index == "All meals") {
       
            return type

        }
        else if (data[i].category==index) 
       {
         return type;
       }

     })  
     
    ) 
    console.log(filtering[x])
 
 }
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <View
        style={{width: "100%", height: "25%", backgroundColor: "white", alignItems: "center", justifyContent: "center"}}
      >
        <Image
          source={
            "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          }
          style={styles.logo}
        />
        <TouchableOpacity style={styles.back}>

        </TouchableOpacity>
        <TouchableOpacity style={styles.search}>

        </TouchableOpacity>
        <TouchableOpacity style={styles.cart}>

        </TouchableOpacity>
      </View>

      <View style={styles.wrapper}>
        <Text style={{ fontWeight: 700, fontSize: 20,marginLeft:-200}}>PLK Kitchen</Text>
        <View style={{width:'88%',overflow:'scroll',marginTop:15, disply:'flex',flexDirection:'row'}}>
           {filtering.map((type,index)=>(
                       <TouchableOpacity key={index} style={styles.filter} onPress={()=>handleFilter(type,index)}>
                       <Text style={{fontWeight:500}}>{type}</Text>
                       </TouchableOpacity>
           ))}
        </View>
    <FlatList
      data={filteredData}
      renderItem={({item,index}) =>(
        <TouchableOpacity key={index} style={{margin:18,marginTop:20,alignItems:'center'}}>
        <Image source={item.image} style={{ width: 140, height: 140, borderRadius:15}} />
        <View style={{display:'fex', flexDirection: 'row',alignItems: 'center'}}>
        <View>
        <Text style={{fontWeight:500}}> {item.name}</Text>
        <Text style={{fontWeight:500}}> R{item.price}.00</Text>
        </View>
        <TouchableOpacity style={styles.btnAdd}>
            <Text style={{fontSize:23}}>+</Text>
        </TouchableOpacity>
        </View>
      </TouchableOpacity>        
      )}  numColumns={2}/>   
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={{color:'white',fontWeight:500}}>Checkout</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  wrapper:{
    width: "100%",
    height: "78%",
    backgroundColor: "white",
    borderTopEndRadius: 21,
    borderTopStartRadius: 21,
    padding: 25,
    position: "absolute",
    bottom: 0, 
    alignItems:'center'
  },
  btnAdd:{
    borderWidth:2,
    borderColor:'#E85800',
    width:40,
    height:40,
    borderRadius:"50%",
    marginLeft:6,
    marginTop:4,
    textAlign:"center",
  },
  filter:
  {width:100,
    height:30,
    textAlign:'center'},
    bottomView:{
    position: 'absolute',
    width: '100%',
    height: '80px',
    left: '0px',
    bottom: 0,
    backgroundColor: '#2B2C34',
    borderTopLeftRadius:10,
    borderTopRightRadius:10
    },
    checkoutBtn:
    {
    position: 'absolute',
    width: 110,
    height: 34,
    right:30,
    bottom: 22,
    backgroundColor: '#E85800',
    borderRadius: 8,
    textAlign:'center',
    padding:'1.6%'
    },
    back:{
      position: 'absolute',
      width: '52px',
      height: '52px',
      left: '24px',
      top: '41px',
      borderRadius:'50%',
      backgroundColor: 'rgba(217, 217, 217, 0.75)'
    },
    search:{
      position: 'absolute',
      width: '52px',
      height: '52px',
      left: '166px',
      top: '41px',
      borderRadius:'50%',
      backgroundColor: 'rgba(217, 217, 217, 0.75)'
    },
    cart:{
      position: 'absolute',
      width: '52px',
      height: '52px',
      left: '229px',
      top: '41px',
      borderRadius:'50%',
      backgroundColor: 'rgba(217, 217, 217, 0.75)'
    }
});

export default Landing;
