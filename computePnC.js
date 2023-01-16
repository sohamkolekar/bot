import React from 'react';
import {View,Text, TextInput, TouchableOpacity,Alert} from 'react-native';
import db from './database'

export default class PnC extends React.Component{
    constructor(){
        super()
        this.state={
            permission:false,
            n:0,
            r:0,
            permission1:false,
            text:'',
            permit:true,
            permit1:true,
            permit2:true,
            permissionToRemove:false,
            render:false,
           
        }
    }
   
    letterToItsRank=(arr)=>{
        var output=[]
        var Array=arr
       
        for(var i=0;i<Array.length;i++){
            if(db["alphabet"][Array[i]]!==undefined){
                output.push(db["alphabet"][Array[i]])
            }
            else {
                Alert.alert("given spelling is incorrect")
               
                
            }
        }
        return output
    }

    numberArraytoNumber=(input)=>{
        var newArray=[]
       
        for(var j=0;j<input.length;j++){
        var o=input[0]
        input.shift()
        var key=0
          for (var i=0;i<input.length;i++){
           if(o>input[i]){
               key=key+1
           }
          
          }
          console.log(key)
          newArray.push(key+1)
            input.push(o)  
       }  
   
       return newArray
    }
    removeDuplicates=(array_)=>{
      
        var ret_array = new Array();
        for (var a = array_.length - 1; a >= 0; a--) {
            for (var b = array_.length - 1; b >= 0; b--) {
                if(array_[a] == array_[b] && a != b){
                    delete array_[b];
                }
            };
            if(array_[a] != undefined)
                ret_array.push(array_[a]);
        };
        return ret_array;
    }
    mapping=(Array)=>{
        var output=[]
        var Output=[]
        for(var i=0;i<Array.length;i++){
            if(db["alphabet"][Array[i]]!==undefined){
                output.push(db["alphabet"][Array[i]])
            }
            else {
                Alert.alert("given spelling is incorrect")
                i=Array.length 
                
            }
        }
      //  console.log(output)
      output.sort(function(a,b){return a-b})
       
        for(var j=1;j<=output.length;j++){
            if(db["numbers"][output[j-1]]!==undefined){
                Output.push(db["numbers"][output[j-1]])
            }
        }
       
        return Output 

    }
    mostRepeated=(array)=>{
        var answer=[]
        if(array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        answer.push(maxEl)
        answer.push(maxCount)
        return answer;

    }

     permutator = (inputArr) => {
        let result = [];
      
        const permute = (arr, m = []) => {
          if (arr.length === 0) {
            result.push(m)
          } else {
            for (let i = 0; i < arr.length; i++) {
              let curr = arr.slice();
              let next = curr.splice(i, 1);
              permute(curr.slice(), m.concat(next))
           }
         }
       }
      
       permute(inputArr)
      
       return result;
    }

    find=(array,res)=>{
        var result=[]
        var k=0
        for(var i=0;i<res.length;i++){
          for(var j=0;j<array.length;j++){
             if(res[i][j]===array[j]){
                console.log("hurray")
                 k+=1
                 result.push(i+1)
            }  
            else{
               //result.pop(i+1)
                break
                
            } 
          }  
        }
       // console.log(result)
      //  var r=[]
        var r=this.mostRepeated(result)
        console.log(r)
        return r
    }
    
    power10=(number)=>{
        var output=1;
        for(var i=1;i<=number;i++){
            output=output*10
        }
        return output
    }
    findadv=async(array)=>{
        var Arr=[]
        var key=[]
        const ArrLength=array.length
   // console.log(array)
        for(var i=0;i<ArrLength;i++){
            console.log(array.length)
           this.setState({
               permit1:true,
               permit2:true
           })
                Arr.push(array[0])
               // console.log(Arr)
              //  console.log(i)
                array.shift()
              //  console.log(array)
                
                for(var j=0;j<ArrLength;j++){
                    //console.log(array[j])
                    if(Arr[0]===array[j]){
                        await this.setState({
                            permit:false
                        })
                       if(this.state.permit2){ 
                            for(var k=1;k<=key.length;k++){
                                if(Arr[0]===key[k-1]){
                                    await this.setState({
                                        permit1:false,
                                        permit2:false
                                    })
                                    
                                }
                                else{
                                   
                                }
                                
                            }
                        }

                        if(this.state.permit1){
                            key.push(Arr[0])
                        }


                    }
                    else{
                       
                    }
                }       
                console.log(this.state.permit)
                if(this.state.permit){
                    array.push(Arr[0])
                    console.log(array)
                   
                }
                else if(!this.state.permit){
                    console.log(array)
                }
                
                await this.setState({
                    permit:true
                })
                Arr=[]
               
        }
        console.log(key)
        console.log(array)
        return key
    }
    findMaster=async(array)=>{
       
        var i=this.power10(3)
        console.log(i)

      var rank=this.letterToItsRank(array)
      var newArray=this.numberArraytoNumber(rank)


      
        console.log(newArray)
        
        
        

        newArray.sort(function(a,b){return a-b})
        
        var permutedArray=this.permutator(newArray)
        //console.log(permutedArray)

       

        var finalOutput=[]
        var FinalOutput=[]
        for(var s=0;s<permutedArray.length;s++){
           for(var r=0;r<permutedArray[0].length;r++){
               finalOutput.push(this.power10(permutedArray[0].length-(r+1))*permutedArray[s][r])
           }
           FinalOutput.push(finalOutput)
           finalOutput=[]
       }
       //console.log(FinalOutput)

       var result=0
       var OutputArray=[]
       for(var z=0;z<FinalOutput.length;z++){
           for(var u=0;u<FinalOutput[0].length;u++){
               result=result+FinalOutput[z][u]
           }
           OutputArray.push(result)
          
           
           result=0
       }    
      // console.log(OutputArray)

       var render=this.removeDuplicates(OutputArray)
     
       render.reverse()
       console.log(render)

      
       var get=this.letterToItsRank(array)
       var out=this.numberArraytoNumber(get)
      
   
       var a=[]
       for(var r=0;r<out.length;r++){
         a.push(this.power10(out.length-(r+1))*out[r])
       }

       var now=0
         for(var u=0;u<a.length;u++){
            now=now+a[u]
         }
        //console.log(now)
         var r=0
        for(var d=0;d<render.length;d++){
            if(now===render[d]){
                r=d+1
            }
        }
        console.log(r)
        return r
    }

    findExpert=async(re,array)=>{
        var experimentArray=re
        // console.log(experimentArray[0].length)
        var output=[]
        var Output=[]
        
        for(var l=0;l<experimentArray.length;l++){
            for(var i=0;i<experimentArray[0].length;i++){
                if(db["alphabet"][experimentArray[l][i]]!==undefined){
                    output.push(db["alphabet"][experimentArray[l][i]])
                }
                else {
                    Alert.alert("given spelling is incorrect")
                
                    
                }
            }
            
            Output.push(output)
            output=[]
            
        }
      //  console.log(Output)

        var fullArray=[];
        var newArray=[]

        for(var q=0;q<Output.length;q++){
            for(var j=0;j<Output[0].length;j++){
                var o=Output[q][0]
                Output[q].shift()
                var key=0
                for(var p=0;p<Output[0].length;p++){
                    if(o>Output[q][p]){
                        key=key+1
                    }
                }
               // console.log(key)
                newArray.push(key+1)
                Output[q].push(o)
            }
            fullArray.push(newArray)
           // console.log(newArray)
            newArray=[]
        }
       console.log(fullArray)

         var finalOutput=[]
         var FinalOutput=[]
         for(var s=0;s<fullArray.length;s++){
            for(var r=0;r<fullArray[0].length;r++){
                finalOutput.push(this.power10(fullArray[0].length-(r+1))*fullArray[s][r])
            }
            FinalOutput.push(finalOutput)
            finalOutput=[]
        }
        console.log(FinalOutput)

        var result=0
        var resultArray=[]
        for(var z=0;z<FinalOutput.length;z++){
            for(var u=0;u<FinalOutput[0].length;u++){
                result=result+FinalOutput[z][u]
            }
            resultArray.push(result)
           
            
            result=0
        }    
        console.log(resultArray)

        var find=this.findMaster(array)
       var answerArray=[]
        for(var v=0;v<resultArray.length;v++){
            var w=resultArray[v] 
            resultArray.shift()
            //console.log(resultArray)
            var key=0
            for(var x=0;x<resultArray.length;x++){
                if(w===resultArray[x]){
                    key=key+1
                    this.setState({
                        permissionToRemove:true
                    })
                }
                else{

                }
                

            }
            console.log(key)
            if(!this.state.permissionToRemove){
                resultArray.push(w)

            }
            else{

            }
            this.setState({
                permissionToRemove:false
            })

        }
        console.log(resultArray)
    }
    
    readPnC=(text)=>{
        var tet=text.split
        var Text=text.split(' ')
        var Line=[]
        Line=Text
        console.log(Line)

        var keyword=[]
        var get;
        
        for(var i=0;i<Line.length;i++){

            get=db[Line[i]]
            if(get!==undefined){
            keyword.push(get)
            }
        }
        
       console.log(keyword) 

    }
    read=(text)=>{
        var text=text.split('')
        //console.log(text)
        return text
    }
  
    computePnC=(n,r)=>{
        const N=n;
        

        var fact=["factorial of given number"]
        
        //ncr=n!/(n-r)! r!
        var NCR=["NcR of given number"]
        //npr=n!/(n-r)!
        var NPR=["NpR of given no"]
        var a=1
        var b=1
        var c=1
        
    if(n>=1){
        for(var i=1; i<=n ; i++){
             a=a*i
            
        }
        fact.push(a)
        console.log(fact)

        for(var j=1; j<=r;j++){
            b=b*j
        }
      

        for(var k=1;k<=n-r;k++){
            c=c*k
        }

        NPR.push(a/c)
        
        NCR.push(a/(b*c))
       
        
        var result=[fact,NPR,NCR]
       return result
    }   
    else{
        var fact=["factorial of given number:undefined"]
        
        //ncr=n!/(n-r)! r!
        var NCR=["NcR of given number:undefined"]
        //npr=n!/(n-r)!
        var NPR=["NpR of given no:undefined"]
    }
       var result=[fact,NPR,NCR]
       return result
      
    }
    render(){
        return(
            <View>
             <Text>Compute screen</Text>
             <TextInput
             placeholder="type n"
             style={{width:200,height:50}}
             onChangeText={text=>{  
                this.setState({ 
                    n:text,
                   permission:false
                })
             }}
            />
            <TextInput
             placeholder="type r"
             style={{width:200,height:50}}
             onChangeText={text=>{  
                this.setState({ 
                    r:text,
                   permission:false
                })
             }}
            />
            <TouchableOpacity
            style={{width:100,height:30,borderStartColor:"black"}}
            onPress={()=>{
                this.setState({
                    permission:true
                })
            }}
            >
                
                <Text>Enter</Text>
            </TouchableOpacity>
             <Text>{this.state.permission?this.computePnC(this.state.n,this.state.r)[0]:undefined}</Text>
             <Text>{this.state.permission?this.computePnC(this.state.n,this.state.r)[1]:undefined}</Text>
             <Text>{this.state.permission?this.computePnC(this.state.n,this.state.r)[2]:undefined}</Text>

             <TextInput
             placeholder="type line"
             style={{width:200,height:50}}
             onChangeText={text=>{  
                this.setState({
                    permission1:true,
                    text:text
                })
             }}
            />

            <TouchableOpacity
            style={{width:100,height:30,borderStartColor:"black"}}
            onPress={()=>{
              
                var array=this.read(this.state.text)
                console.log(array)
                var response= this.mapping(array)
                console.log(response)
                var permutedResult=this.permutator(response)
                console.log(permutedResult)
                var Result=[]
                Result=this.find(array,permutedResult)
                console.log(Result[0])
            }}
            >
                
                <Text>Enter</Text>
            </TouchableOpacity>
            <Text>{this.state.permission1?this.read(this.state.text):undefined}</Text>

           

            <TouchableOpacity
            style={{width:100,height:30,borderStartColor:"black"}}
            onPress={()=>{
                var Array=this.read(this.state.text)
               // console.log(Array)
              
               var response= this.mapping(Array)
               console.log(response)
               var permutedResult=this.permutator(response)
               console.log(permutedResult)
               var respond= this.findMaster(Array)
               console.log(respond)
               this.setState({
                   render:true
               })
               
               
  
            }} >
                <Text>Enter</Text>
            </TouchableOpacity>
           
            </View>
        )
    }
}
 

// <Text>{this.state.render?this.findMaster(this.state.Array):undefined}</Text>
//how many two digit nos can be formed from 0-9
  /*   var arr=[];
        var key=[]
        const ArrayLength=re.length
        const ArrayBranchLength=re[0].length
       
        var r=[]
        var test=[[0,1,2,3],[0,1,2],["apple"]]*/
       
       
       
       // console.log(re)
       /* for(var k=0;k<ArrayLength;k++){
         
                arr.push(re[0])
                var Arr=arr[0]
                console.log(Arr)
               console.log(arr[0])

                re.shift()
                
                console.log(re)
            for(var i=0;i<ArrayLength;i++){
                for(var j=0;j<arr[0].length;j++){
                    if(arr[0][j]===re[i][j]){
                        console.log("hurray")
                        key.push(i)
                        
                    }
                    else{
                        i=i+1
                    }
                }

            }
           console.log(key)
            r=this.mostRepeated(key)
            console.log(r)  
            if(r[1]===ArrayBranchLength){
                await this.setState({
                    permitMaster:false
                })
            }
            if(this.state.permitMaster){
                re.push(arr[0])
               // console.log(re)
            
            }
            else{
                console.log(re)
            }
            arr=[]

        }*/   
        
        //bot closed
