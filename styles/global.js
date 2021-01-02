import { StyleSheet }  from "react-native";

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        
    },
    containerAll:{
        flex:1,
        margin:15
        
    },
    home:{
        fontFamily: 'nunito-regular'
    },

    modelToggle:{
       alignSelf:"center",
       marginBottom:50
  
        
    },
    modelToggleAdd:{
        alignSelf:"center",
        margin:10,
        backgroundColor:"tomato",
        padding:10,
        borderRadius:50
        
    },


    modelToggleremove:{
        alignSelf:"flex-end",
        backgroundColor:"tomato",
        padding:5,
        borderRadius:50
        
    },
    modal:{
     flex:1,
    flexDirection: "column",
    justifyContent:"space-between",


    },
    input:{
        padding:5,
        borderBottomWidth:1,
        marginBottom:10,
        borderBottomColor:"gray"
    },
    inputDetail:{
        padding:5,
        borderBottomWidth:1,
        marginTop:50,
        marginBottom:10,
        borderBottomColor:"gray"
    },

    card: {
          
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
      },
      cardContent: {
        
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal:15,
        marginVertical: 15,
      }
   

});

 export const images = {
        ratings: {
          '1': require('../assets/rating-1.png'),
          '2': require('../assets/rating-2.png'),
          '3': require('../assets/rating-3.png'),
          '4': require('../assets/rating-4.png'),
          '5': require('../assets/rating-5.png'),
        }
    }


       
     