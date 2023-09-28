import { StyleSheet, Text, View, Button, TextInput,ScrollView } from 'react-native';
import React ,{ useState} from 'react'; 
export default function TodoList () 
{
  const [ToDoItemS,setToDoItem] = useState([]);
  const[item,SetItem]=useState('');

  const handleChangeText =(text) => {  
        SetItem(text);
  }
  const handleAddToList = () => {
      
      const arr=[] 
      setToDoItem([...ToDoItemS,item]); 
      SetItem('')
  }
  return (
      <View style={styles.appContainer}>
       <Text style={{fontSize:25}}>Taktokaa's ToDo List</Text>
          
          <View style={styles.inputContainer  }>
          <TextInput style={styles.textInput} value={item} onChangeText={handleChangeText}
          placeholder="  Enter your task here"/>
          <Button  title="Add Task" onPress={handleAddToList}/>
          </View>
          <View style={styles.TaskContainer}>
          <ScrollView> 
            <Text>Your Tasks ....</Text>
            
           {
              ToDoItemS.map((item) => {
                  return (
                      <Text key={item} style={styles.TaskStyle}>{item}</Text>
                  )
              })    
           } 
          </ScrollView>
          </View>
      </View>
      )
}  
const styles=StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
  textInput:{
    borderColor:'#cccccc',
    borderWidth:1,
    width:'70%',
    marginRight:8,
    padding:8
  },
  TaskContainer:{
    flex:5,
  },
  TaskStyle:{
    margin:8,
    borderRadius:6,
    backgroundColor:'pink',
    color:'black',
    padding:8,
  }
});