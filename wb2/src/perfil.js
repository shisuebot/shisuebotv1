const perfil =(nameuser,usernum, usertime, userdesc, usertype, oner, prefix, sender,getLevelingLevel,rpt,usergroup, groupName, user, apoia1, blocked, date, time,getLevelingXp,idadeuser) => {
	let sen =  sender.split("@")[0]
	
if ( getLevelingLevel === undefined){getLevelingLevel ='menos que 0'}
	return `
╔════════✪〘 Perfil Do Usúario 〙✪════════╗
║                                  
╠➫ *Nome:* ${nameuser}                                        
║  
╠➫ *Idade:* ${idadeuser}
║                                               
╠➫ *Level:* ${getLevelingLevel}   
║                               
╠➫ *Xp:* ${getLevelingXp}                        
║                              
╠➫ *Numero:* wa.me/${sen}               
║                              
╠➫ *ADM?:* ${rpt}                
║                                       
╠➫  *DESCRIÇÃO:* ${userdesc}         
║                              
╠➫ *TIPO DE CONTA:* ${usertype}           
║                           
╠➫ *DATA DE REGISTRO:*  ${usertime.split(' ')[0]}                            
║
╠➫ *HORA DO REGISTRO:* ${usertime.split(' ')[1]} 
║
╠➫ *GRUPO DE REGISTRO:* *${usergroup}* 
║ 
║
╚════════✪〘  Perfil Do Usúario 〙✪════════╝
`
}

exports.perfil = perfil
