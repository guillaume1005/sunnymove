import React from 'react' ;

export default function SocialMedias () {

    return (
        <div style={{display:'flex', flexDirection:'row', backgroundColor:'#fff', borderRadius:20, padding:30}}>
            <div style={{flex:1, marginRight:10}}> 
                <i style={{fontSize:30}} class="fab fa-facebook"></i>
            </div>
            <div style={{flex:1, marginRight:10}}> 
                 <i style={{fontSize:30}} class="fab fa-instagram"></i>
            </div>
            <div style={{flex:1, marginRight:10}}> 
                <i style={{fontSize:30}} class="fab fa-youtube"></i>
            </div>
            <div style={{flex:1, marginRight:10}}> 
                <i style={{fontSize:30}} class="fab fa-linkedin"></i>
            </div>
            <div style={{flex:1}}> 
                <i style={{fontSize:30}} class="fab fa-twitter"></i>
            </div>
        </div>
    )
}