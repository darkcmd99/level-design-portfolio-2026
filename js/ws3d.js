var WS3D=(()=>{var tl=Object.defineProperty;var Bd=Object.getOwnPropertyDescriptor;var Hd=Object.getOwnPropertyNames;var kd=Object.prototype.hasOwnProperty;var Vd=(i,t)=>{for(var e in t)tl(i,e,{get:t[e],enumerable:!0})},Gd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Hd(t))!kd.call(i,s)&&s!==e&&tl(i,s,{get:()=>t[s],enumerable:!(n=Bd(t,s))||n.enumerable});return i};var Wd=i=>Gd(tl({},"__esModule",{value:!0}),i);var j1={};Vd(j1,{GROUPS:()=>gr,VIEWS:()=>xr,createShow:()=>Rd,createStage:()=>Dd,mount:()=>yd});var Ru=0,Hl=1,Cu=2;var kl=1,Da=2,hi=3,bi=0,_n=1,wn=2,wi=0,ls=1,Vl=2,Gl=3,Wl=4,Iu=5,Hi=100,Pu=101,Du=102,Lu=103,Fu=104,Uu=200,Nu=201,Ou=202,zu=203,ea=204,na=205,Bu=206,Hu=207,ku=208,Vu=209,Gu=210,Wu=211,Xu=212,qu=213,Yu=214,La=0,Fa=1,Ua=2,hs=3,Na=4,Oa=5,za=6,Ba=7,Xl=0,Zu=1,Ju=2,Ti=0,$u=1,Qu=2,ju=3,Ku=4,tf=5,ef=6,Ha=7;var ql=300,ms=301,gs=302,ka=303,Va=304,ho=306,ia=1e3,Bi=1001,sa=1002,Sn=1003,nf=1004;var uo=1005;var jn=1006,Ga=1007;var qi=1008;var ni=1009,Yl=1010,Zl=1011,sr=1012,Wa=1013,Yi=1014,ii=1015,rr=1016,Xa=1017,qa=1018,or=1020,Jl=35902,$l=35899,Ql=1021,jl=1022,Xn=1023,Ys=1026,ar=1027,Ya=1028,Za=1029,Kl=1030,Ja=1031;var $a=1033,fo=33776,po=33777,mo=33778,go=33779,Qa=35840,ja=35841,Ka=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37808,rc=37809,oc=37810,ac=37811,cc=37812,lc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,xc=37821,_c=36492,yc=36494,vc=36495,Mc=36283,bc=36284,Sc=36285,Ec=36286;var Lr=2300,ra=2301,ta=2302,Rl=2400,Cl=2401,Il=2402;var sf=3200,rf=3201;var th=0,of=1,Ai="",xn="srgb",us="srgb-linear",Fr="linear",_e="srgb";var cs=7680;var Pl=519,af=512,cf=513,lf=514,eh=515,hf=516,uf=517,ff=518,df=519,Dl=35044;var nh="300 es",Qn=2e3,Ur=2001;var Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var el=Math.PI/180,oa=180/Math.PI;function xo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function Xd(i,t){return(i%t+t)%t}function nl(i,t,e){return(1-e)*i+e*t}function Sr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-a,p=l*d+c*f+u*m+h*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let M=Math.sqrt(y),T=Math.atan2(M,p*v);g=Math.sin(g*T)/M,a=Math.sin(a*T)/M}let x=a*v;if(l=l*g+d*x,c=c*g+f*x,u=u*g+m*x,h=h*g+_*x,g===1-a){let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-a*f,t[e+2]=c*m+u*f+a*d-l*h,t[e+3]=u*m-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return il.copy(this).projectOnVector(t),this.sub(il)}reflect(t){return this.sub(il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new H,eu=new Un,jt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],v=s[1],y=s[4],x=s[7],M=s[2],T=s[5],C=s[8];return r[0]=o*_+a*v+l*M,r[3]=o*g+a*y+l*T,r[6]=o*p+a*x+l*C,r[1]=c*_+u*v+h*M,r[4]=c*g+u*y+h*T,r[7]=c*p+u*x+h*C,r[2]=d*_+f*v+m*M,r[5]=d*g+f*y+m*T,r[8]=d*p+f*x+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=e*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sl=new jt;function ih(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pf(){let i=Nr("canvas");return i.style.display="block",i}var nu={};function Zs(i){i in nu||(nu[i]=!0,console.warn(i))}function mf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var iu=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qd(){let i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:t,whitePoint:n,transfer:Fr,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:iu,fromXYZ:su,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}var ce=qd();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ls,aa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ls===void 0&&(Ls=Nr("canvas")),Ls.width=t.width,Ls.height=t.height;let s=Ls.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ls}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yd=0,Js=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?aa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zd=0,ol=new H,En=class i extends Si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bi,s=Bi,r=jn,o=qi,a=Xn,l=ni,c=i.DEFAULT_ANISOTROPY,u=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=xo(),this.name="",this.source=new Js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=ql;En.DEFAULT_ANISOTROPY=1;var Le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(f+1)/2,M=(p+1)/2,T=(u+d)/4,C=(h+_)/4,L=(m+g)/4;return y>x&&y>M?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=C/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=L/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=C/r,s=L/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends Si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new En(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Js(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Or=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var la=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Do.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(t.matrixWorld),this.union(Do)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),Lo.subVectors(this.max,Er),Fs.subVectors(t.a,Er),Us.subVectors(t.b,Er),Ns.subVectors(t.c,Er),Di.subVectors(Us,Fs),Li.subVectors(Ns,Us),ss.subVectors(Fs,Ns);let e=[0,-Di.z,Di.y,0,-Li.z,Li.y,0,-ss.z,ss.y,Di.z,0,-Di.x,Li.z,0,-Li.x,ss.z,0,-ss.x,-Di.y,Di.x,0,-Li.y,Li.x,0,-ss.y,ss.x,0];return!al(e,Fs,Us,Ns,Lo)||(e=[1,0,0,0,1,0,0,0,1],!al(e,Fs,Us,Ns,Lo))?!1:(Fo.crossVectors(Di,Li),e=[Fo.x,Fo.y,Fo.z],al(e,Fs,Us,Ns,Lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},gi=[new H,new H,new H,new H,new H,new H,new H,new H],Zn=new H,Do=new Gn,Fs=new H,Us=new H,Ns=new H,Di=new H,Li=new H,ss=new H,Er=new H,Lo=new H,Fo=new H,rs=new H;function al(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rs.fromArray(i,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Jd=new Gn,wr=new H,cl=new H,ki=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(cl)),this.expandByPoint(wr.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xi=new H,ll=new H,Uo=new H,Fi=new H,hl=new H,No=new H,ul=new H,zr=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ll.copy(t).add(e).multiplyScalar(.5),Uo.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(ll);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Uo),a=Fi.dot(this.direction),l=-Fi.dot(Uo),c=Fi.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ll).addScaledVector(Uo,d),f}intersectSphere(t,e){xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,s,r){hl.subVectors(e,t),No.subVectors(n,t),ul.crossVectors(hl,No);let o=this.direction.dot(ul),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,t);let l=a*this.direction.dot(No.crossVectors(Fi,No));if(l<0)return null;let c=a*this.direction.dot(hl.cross(Fi));if(c<0||l+c>o)return null;let u=-a*Fi.dot(ul);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class i{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,m,_,g)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=o*u,f=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,f=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=m*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-_*h}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($d,t,Qd)}lookAt(t,e,n){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ui.crossVectors(n,Ln),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ui.crossVectors(n,Ln)),Ui.normalize(),Oo.crossVectors(Ln,Ui),s[0]=Ui.x,s[4]=Oo.x,s[8]=Ln.x,s[1]=Ui.y,s[5]=Oo.y,s[9]=Ln.y,s[2]=Ui.z,s[6]=Oo.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],x=n[11],M=n[15],T=s[0],C=s[4],L=s[8],E=s[12],b=s[1],F=s[5],z=s[9],V=s[13],w=s[2],D=s[6],S=s[10],R=s[14],I=s[3],U=s[7],k=s[11],W=s[15];return r[0]=o*T+a*b+l*w+c*I,r[4]=o*C+a*F+l*D+c*U,r[8]=o*L+a*z+l*S+c*k,r[12]=o*E+a*V+l*R+c*W,r[1]=u*T+h*b+d*w+f*I,r[5]=u*C+h*F+d*D+f*U,r[9]=u*L+h*z+d*S+f*k,r[13]=u*E+h*V+d*R+f*W,r[2]=m*T+_*b+g*w+p*I,r[6]=m*C+_*F+g*D+p*U,r[10]=m*L+_*z+g*S+p*k,r[14]=m*E+_*V+g*R+p*W,r[3]=v*T+y*b+x*w+M*I,r[7]=v*C+y*F+x*D+M*U,r[11]=v*L+y*z+x*S+M*k,r[15]=v*E+y*V+x*R+M*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=h*g*c-_*d*c+_*l*f-a*g*f-h*l*p+a*d*p,y=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,x=u*_*c-m*h*c+m*a*f-o*_*f-u*a*p+o*h*p,M=m*h*l-u*_*l-m*a*d+o*_*d+u*a*g-o*h*g,T=e*v+n*y+s*x+r*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=v*C,t[1]=(_*d*r-h*g*r-_*s*f+n*g*f+h*s*p-n*d*p)*C,t[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*p+n*l*p)*C,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*C,t[4]=y*C,t[5]=(u*g*r-m*d*r+m*s*f-e*g*f-u*s*p+e*d*p)*C,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*C,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*C,t[8]=x*C,t[9]=(m*h*r-u*_*r-m*n*f+e*_*f+u*n*p-e*h*p)*C,t[10]=(o*_*r-m*a*r+m*n*c-e*_*c-o*n*p+e*a*p)*C,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*C,t[12]=M*C,t[13]=(u*_*s-m*h*s+m*n*d-e*_*d-u*n*g+e*h*g)*C,t[14]=(m*a*s-o*_*s-m*n*l+e*_*l+o*n*g-e*a*g)*C,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,_=o*u,g=o*h,p=a*h,v=l*c,y=l*u,x=l*h,M=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*M,s[1]=(f+x)*M,s[2]=(m-y)*M,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(m+y)*C,s[9]=(g-v)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);let c=1/r,u=1/o,h=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,e.setFromRotationMatrix(Jn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Qn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ur)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Qn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ur)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Os=new H,Jn=new ye,$d=new H(0,0,0),Qd=new H(1,1,1),Ui=new H,Oo=new H,Ln=new H,ru=new ye,ou=new Un,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jd=0,au=new H,zs=new Un,_i=new ye,zo=new H,Tr=new H,Kd=new H,tp=new Un,cu=new H(1,0,0),lu=new H(0,1,0),hu=new H(0,0,1),uu={type:"added"},ep={type:"removed"},Bs={type:"childadded",child:null},fl={type:"childremoved",child:null},dn=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Kn,n=new Un,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new jt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.multiply(zs),this}rotateOnWorldAxis(t,e){return zs.setFromAxisAngle(t,e),this.quaternion.premultiply(zs),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zo.copy(t):zo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Tr,zo,this.up):_i.lookAt(zo,Tr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(_i),this.quaternion.premultiply(zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ep),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};dn.DEFAULT_UP=new H(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new H,yi=new H,dl=new H,vi=new H,Hs=new H,ks=new H,fu=new H,pl=new H,ml=new H,gl=new H,xl=new Le,_l=new Le,yl=new Le,zi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),yi.subVectors(n,e),dl.subVectors(t,e);let o=$n.dot($n),a=$n.dot(yi),l=$n.dot(dl),c=yi.dot(yi),u=yi.dot(dl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return xl.setScalar(0),_l.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,n),yl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(_l,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),yi.subVectors(t,e),$n.cross(yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),$n.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Hs.subVectors(s,n),ks.subVectors(r,n),pl.subVectors(t,n);let l=Hs.dot(pl),c=ks.dot(pl);if(l<=0&&c<=0)return e.copy(n);ml.subVectors(t,s);let u=Hs.dot(ml),h=ks.dot(ml);if(u>=0&&h<=u)return e.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Hs,o);gl.subVectors(t,r);let f=Hs.dot(gl),m=ks.dot(gl);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ks,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return fu.subVectors(r,s),a=(h-u)/(h-u+(f-m)),e.copy(s).addScaledVector(fu,a);let p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Hs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function vl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Xd(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vl(o,r,t+1/3),this.g=vl(o,r,t),this.b=vl(o,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){let n=gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return ce.workingToColorSpace(un.copy(this),t),Math.round(ie(un.r*255,0,255))*65536+Math.round(ie(un.g*255,0,255))*256+Math.round(ie(un.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(un.copy(this),e);let n=un.r,s=un.g,r=un.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=xn){ce.workingToColorSpace(un.copy(this),t);let e=un.r,n=un.g,s=un.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(Bo);let n=nl(Ni.h,Bo.h,e),s=nl(Ni.s,Bo.s,e),r=nl(Ni.l,Bo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new te;te.NAMES=gf;var np=0,Vi=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=ls,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=na,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},tn=class extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ge=new H,Ho=new Dt,ip=0,ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ip++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dl,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ho.fromBufferAttribute(this,e),Ho.applyMatrix3(t),this.setXY(e,Ho.x,Ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),s=bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),s=bn(s,this.array),r=bn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dl&&(t.usage=this.usage),t}};var Br=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hr=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},sp=0,Vn=new ye,Ml=new dn,Vs=new H,Fn=new Gn,Ar=new Gn,Ke=new H,qe=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ih(t)?Hr:Br)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(Fn.min,Ar.min),Fn.expandByPoint(Ke),Ke.addVectors(Fn.max,Ar.max),Fn.expandByPoint(Ke)):(Fn.expandByPoint(Ar.min),Fn.expandByPoint(Ar.max))}Fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ke.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(t,c),Ke.add(Vs)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new H,l[L]=new H;let c=new H,u=new H,h=new H,d=new Dt,f=new Dt,m=new Dt,_=new H,g=new H;function p(L,E,b){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let F=1/(f.x*m.y-m.x*f.y);isFinite(F)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(F),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(F),a[L].add(_),a[E].add(_),a[b].add(_),l[L].add(g),l[E].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,E=v.length;L<E;++L){let b=v[L],F=b.start,z=b.count;for(let V=F,w=F+z;V<w;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let y=new H,x=new H,M=new H,T=new H;function C(L){M.fromBufferAttribute(s,L),T.copy(M);let E=a[L];y.copy(E),y.sub(M.multiplyScalar(M.dot(E))).normalize(),x.crossVectors(T,E);let F=x.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,F)}for(let L=0,E=v.length;L<E;++L){let b=v[L],F=b.start,z=b.count;for(let V=F,w=F+z;V<w;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new ze(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},du=new ye,os=new zr,ko=new ki,pu=new H,Vo=new H,Go=new H,Wo=new H,bl=new H,Xo=new H,mu=new H,qo=new H,oe=class extends dn{constructor(t=new qe,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(bl.fromBufferAttribute(h,t),o?Xo.addScaledVector(bl,u):Xo.addScaledVector(bl.sub(e),u))}e.add(Xo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(ko.containsPoint(os.origin)===!1&&(os.intersectSphere(ko,pu)===null||os.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(du.copy(r).invert(),os.copy(t.ray).applyMatrix4(du),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,M=y;x<M;x+=3){let T=a.getX(x),C=a.getX(x+1),L=a.getX(x+2);s=Yo(this,p,t,n,c,u,h,T,C,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=Yo(this,o,t,n,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,M=y;x<M;x+=3){let T=x,C=x+1,L=x+2;s=Yo(this,p,t,n,c,u,h,T,C,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let v=g,y=g+1,x=g+2;s=Yo(this,o,t,n,c,u,h,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function rp(i,t,e,n,s,r,o,a){let l;if(t.side===_n?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===bi,a),l===null)return null;qo.copy(a),qo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qo);return c<e.near||c>e.far?null:{distance:c,point:qo.clone(),object:i}}function Yo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vo),i.getVertexPosition(l,Go),i.getVertexPosition(c,Wo);let u=rp(i,t,e,n,Vo,Go,Wo,mu);if(u){let h=new H;zi.getBarycoord(mu,Vo,Go,Wo,h),s&&(u.uv=zi.getInterpolatedAttribute(s,a,l,c,h,new Dt)),r&&(u.uv1=zi.getInterpolatedAttribute(r,a,l,c,h,new Dt)),o&&(u.normal=zi.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new H,materialIndex:0};zi.getNormal(Vo,Go,Wo,d.normal),u.face=d,u.barycoord=h}return u}var ti=class i extends qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(h,2));function m(_,g,p,v,y,x,M,T,C,L,E){let b=x/C,F=M/L,z=x/2,V=M/2,w=T/2,D=C+1,S=L+1,R=0,I=0,U=new H;for(let k=0;k<S;k++){let W=k*F-V;for(let K=0;K<D;K++){let at=K*b-z;U[_]=at*v,U[g]=W*y,U[p]=w,c.push(U.x,U.y,U.z),U[_]=0,U[g]=0,U[p]=T>0?1:-1,u.push(U.x,U.y,U.z),h.push(K/C),h.push(1-k/L),R+=1}}for(let k=0;k<L;k++)for(let W=0;W<C;W++){let K=d+W+D*k,at=d+W+D*(k+1),tt=d+(W+1)+D*(k+1),et=d+(W+1)+D*k;l.push(K,at,et),l.push(at,tt,et),I+=6}a.addGroup(f,I,E),f+=I,d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){let t={};for(let e=0;e<i.length;e++){let n=xs(i[e]);for(let s in n)t[s]=n[s]}return t}function op(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var xf={clone:xs,merge:pn},ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ap,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},kr=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new H,gu=new Dt,xu=new Dt,fn=class extends kr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,gu,xu),e.subVectors(xu,gu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(el*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gs=-90,Ws=1,ha=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(Gs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new fn(Gs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new fn(Gs,Ws,t,e);o.layers=this.layers,this.add(o);let a=new fn(Gs,Ws,t,e);a.layers=this.layers,this.add(a);let l=new fn(Gs,Ws,t,e);l.layers=this.layers,this.add(l);let c=new fn(Gs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Vr=class extends En{constructor(t=[],e=ms,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ua=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ti(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:wi});r.uniforms.tEquirect.value=e;let o=new oe(s,r),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=jn),new ha(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},me=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lp={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Gr=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var fa=class extends En{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Sn,u=Sn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wr=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Xs=new ye,_u=new ye,Zo=[],yu=new Gn,hp=new ye,Rr=new oe,Cr=new ki,Xr=class extends oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),yu.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(yu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Cr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),_u.multiplyMatrices(n,Xs),Rr.matrixWorld=_u,Rr.raycast(t,Zo);for(let o=0,a=Zo.length;o<a;o++){let l=Zo[o];l.instanceId=r,l.object=this,e.push(l)}Zo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fa(new Float32Array(s*this.count),s,this.count,Ya,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sl=new H,up=new H,fp=new jt,cn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Sl.subVectors(n,e).cross(up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Sl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fp.getNormalMatrix(t),s=this.coplanarPoint(Sl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new ki,dp=new Dt(.5,.5),Jo=new H,js=class{constructor(t=new cn,e=new cn,n=new cn,s=new cn,r=new cn,o=new cn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],v=r[12],y=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-o,f-u,p-m,M-v).normalize(),s[1].setComponents(c+o,f+u,p+m,M+v).normalize(),s[2].setComponents(c+a,f+h,p+_,M+y).normalize(),s[3].setComponents(c-a,f-h,p-_,M-y).normalize(),n)s[4].setComponents(l,d,g,x).normalize(),s[5].setComponents(c-l,f-d,p-g,M-x).normalize();else if(s[4].setComponents(c-l,f-d,p-g,M-x).normalize(),e===Qn)s[5].setComponents(c+l,f+d,p+g,M+x).normalize();else if(e===Ur)s[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=dp.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Jo.x=s.normal.x>0?t.max.x:t.min.x,Jo.y=s.normal.y>0?t.max.y:t.min.y,Jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qr=class extends En{constructor(t,e,n=Yi,s,r,o,a=Sn,l=Sn,c,u=Ys,h=1){if(u!==Ys&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yr=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zr=class i extends qe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=e/2,h=Math.PI/2*t,d=e,f=2*h+d,m=n*2+r,_=s+1,g=new H,p=new H;for(let v=0;v<=m;v++){let y=0,x=0,M=0,T=0;if(v<=n){let E=v/n,b=E*Math.PI/2;x=-u-t*Math.cos(b),M=t*Math.sin(b),T=-t*Math.cos(b),y=E*h}else if(v<=n+r){let E=(v-n)/r;x=-u+E*e,M=t,T=0,y=h+E*d}else{let E=(v-n-r)/n,b=E*Math.PI/2;x=u+t*Math.sin(b),M=t*Math.cos(b),T=t*Math.sin(b),y=h+d+E*h}let C=Math.max(0,Math.min(1,y/f)),L=0;v===0?L=.5/s:v===m&&(L=-.5/s);for(let E=0;E<=s;E++){let b=E/s,F=b*Math.PI*2,z=Math.sin(F),V=Math.cos(F);p.x=-M*V,p.y=x,p.z=M*z,a.push(p.x,p.y,p.z),g.set(-M*V,T,M*z),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+L,C)}if(v>0){let E=(v-1)*_;for(let b=0;b<s;b++){let F=E+b,z=E+b+1,V=v*_+b,w=v*_+b+1;o.push(F,z,V),o.push(z,w,V)}}}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Jr=class i extends qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new H,u=new Dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ei=class i extends qe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,_=[],g=n/2,p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function v(){let x=new H,M=new H,T=0,C=(e-t)/n;for(let L=0;L<=r;L++){let E=[],b=L/r,F=b*(e-t)+t;for(let z=0;z<=s;z++){let V=z/s,w=V*l+a,D=Math.sin(w),S=Math.cos(w);M.x=F*D,M.y=-b*n+g,M.z=F*S,h.push(M.x,M.y,M.z),x.set(D,C,S).normalize(),d.push(x.x,x.y,x.z),f.push(V,1-b),E.push(m++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){let b=_[E][L],F=_[E+1][L],z=_[E+1][L+1],V=_[E][L+1];(t>0||E!==0)&&(u.push(b,F,V),T+=3),(e>0||E!==r-1)&&(u.push(F,z,V),T+=3)}c.addGroup(p,T,0),p+=T}function y(x){let M=m,T=new Dt,C=new H,L=0,E=x===!0?t:e,b=x===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;let F=m;for(let z=0;z<=s;z++){let w=z/s*l+a,D=Math.cos(w),S=Math.sin(w);C.x=E*S,C.y=g*b,C.z=E*D,h.push(C.x,C.y,C.z),d.push(0,b,0),T.x=D*.5+.5,T.y=S*.5*b+.5,f.push(T.x,T.y),m++}for(let z=0;z<s;z++){let V=M+z,w=F+z;x===!0?u.push(w,w+1,V):u.push(w+1,w,V),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ks=class i extends Ei{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},da=class i extends qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new H,x=new H,M=new H;for(let T=0;T<e.length;T+=3)f(e[T+0],y),f(e[T+1],x),f(e[T+2],M),l(y,x,M,v)}function l(v,y,x,M){let T=M+1,C=[];for(let L=0;L<=T;L++){C[L]=[];let E=v.clone().lerp(x,L/T),b=y.clone().lerp(x,L/T),F=T-L;for(let z=0;z<=F;z++)z===0&&L===T?C[L][z]=E:C[L][z]=E.clone().lerp(b,z/F)}for(let L=0;L<T;L++)for(let E=0;E<2*(T-L)-1;E++){let b=Math.floor(E/2);E%2===0?(d(C[L][b+1]),d(C[L+1][b]),d(C[L][b])):(d(C[L][b+1]),d(C[L+1][b+1]),d(C[L+1][b]))}}function c(v){let y=new H;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){let v=new H;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let x=g(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;o.push(x,1-M)}m(),h()}function h(){for(let v=0;v<o.length;v+=6){let y=o[v+0],x=o[v+2],M=o[v+4],T=Math.max(y,x,M),C=Math.min(y,x,M);T>.9&&C<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){let x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){let v=new H,y=new H,x=new H,M=new H,T=new Dt,C=new Dt,L=new Dt;for(let E=0,b=0;E<r.length;E+=9,b+=6){v.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),T.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),M.copy(v).add(y).add(x).divideScalar(3);let F=g(M);_(T,b+0,v,F),_(C,b+2,y,F),_(L,b+4,x,F)}}function _(v,y,x,M){M<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=M/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Dt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new H,s=[],r=[],o=[],a=new H,l=new ye;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$r=class extends Wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},pa=class extends $r{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var $o=new H,El=new rh,wl=new rh,Tl=new rh,fs=class extends Wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new H){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:($o.subVectors(s[0],s[1]).add(s[0]),c=$o);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:($o.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=$o),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),El.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,_,g),wl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,_,g),Tl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(El.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),wl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Tl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(El.calc(l),wl.calc(l),Tl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function pp(i,t){let e=1-i;return e*e*t}function mp(i,t){return 2*(1-i)*i*t}function gp(i,t){return i*i*t}function Pr(i,t,e,n){return pp(i,t)+mp(i,e)+gp(i,n)}function xp(i,t){let e=1-i;return e*e*e*t}function _p(i,t){let e=1-i;return 3*e*e*i*t}function yp(i,t){return 3*(1-i)*i*i*t}function vp(i,t){return i*i*i*t}function Dr(i,t,e,n,s){return xp(i,t)+_p(i,e)+yp(i,n)+vp(i,s)}var ma=class extends Wn{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(t,s.x,r.x,o.x,a.x),Dr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ga=class extends Wn{constructor(t=new H,e=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(t,s.x,r.x,o.x,a.x),Dr(t,s.y,r.y,o.y,a.y),Dr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xa=class extends Wn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tr=class extends Wn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends Wn{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Pr(t,s.x,r.x,o.x),Pr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends Wn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Pr(t,s.x,r.x,o.x),Pr(t,s.y,r.y,o.y),Pr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(vu(a,l.x,c.x,u.x,h.x),vu(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}},Mp=Object.freeze({__proto__:null,ArcCurve:pa,CatmullRomCurve3:fs,CubicBezierCurve:ma,CubicBezierCurve3:ga,EllipseCurve:$r,LineCurve:xa,LineCurve3:tr,QuadraticBezierCurve:_a,QuadraticBezierCurve3:Qr,SplineCurve:ya});function bp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_f(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ap(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=e;d<s;d+=e){let f=i[d],m=i[d+1];f<a&&(a=f),m<l&&(l=m),f>u&&(u=f),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return jr(r,o,e,a,l,c,0),o}function _f(i,t,e,n,s){let r;if(s===zp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Mu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Mu(o/n|0,i[o],i[o+1],r);return r&&er(r,r.next)&&(to(r),r=r.next),r}function ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(er(e,e.next)||De(e.prev,e,e.next)===0)){if(to(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Dp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ep(i,n,s,r):Sp(i)){t.push(l.i,i.i,c.i),to(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=wp(ds(i),t),jr(i,t,e,n,s,r,2)):o===2&&Tp(i,t,e,n,s,r):jr(ds(i),t,e,n,s,r,1);break}}}function Sp(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Ir(s,a,r,l,o,c,m.x,m.y)&&De(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ep(i,t,e,n){let s=i.prev,r=i,o=i.next;if(De(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(u,h,d),_=Math.max(a,l,c),g=Math.max(u,h,d),p=Ll(f,m,t,e,n),v=Ll(_,g,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Ir(a,u,l,h,c,d,y.x,y.y)&&De(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Ir(a,u,l,h,c,d,x.x,x.y)&&De(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Ir(a,u,l,h,c,d,y.x,y.y)&&De(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Ir(a,u,l,h,c,d,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!er(n,s)&&vf(n,e,e.next,s)&&Kr(n,s)&&Kr(s,n)&&(t.push(n.i,e.i,s.i),to(e),to(e.next),e=i=s),e=e.next}while(e!==i);return ds(e)}function Tp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Up(o,a)){let l=Mf(o,a);o=ds(o,o.next),l=ds(l,l.next),jr(o,t,e,n,s,r,0),jr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ap(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=_f(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fp(c))}s.sort(Rp);for(let r=0;r<s.length;r++)e=Cp(s[r],e);return e}function Rp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Cp(i,t){let e=Ip(i,t);if(!e)return t;let n=Mf(e,i);return ds(n,n.next),ds(e,e.next)}function Ip(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(er(i,e))return e;do{if(er(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&yf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);Kr(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Pp(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Pp(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function Dp(i,t,e,n){let s=i;do s.z===0&&(s.z=Ll(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Lp(s)}function Lp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ll(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function yf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ir(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&yf(i,t,e,n,s,r,o,a)}function Up(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Np(i,t)&&(Kr(i,t)&&Kr(t,i)&&Op(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||er(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function er(i,t){return i.x===t.x&&i.y===t.y}function vf(i,t,e,n){let s=jo(De(i,t,e)),r=jo(De(i,t,n)),o=jo(De(e,n,i)),a=jo(De(e,n,t));return!!(s!==r&&o!==a||s===0&&Qo(i,e,t)||r===0&&Qo(i,n,t)||o===0&&Qo(e,i,n)||a===0&&Qo(e,t,n))}function Qo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function jo(i){return i>0?1:i<0?-1:0}function Np(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Kr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function Op(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Mf(i,t){let e=Fl(i.i,i.x,i.y),n=Fl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mu(i,t,e,n){let s=Fl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function to(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ul=class{static triangulate(t,e,n=2){return bp(t,e,n)}},eo=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bu(t),Su(n,t);let o=t.length;e.forEach(bu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Su(n,e[l]);let a=Ul.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Su(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Gi=class i extends da{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var no=class i extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let v=p*d-o;for(let y=0;y<c;y++){let x=y*h-r;m.push(x,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let y=v+c*p,x=v+c*(p+1),M=v+1+c*(p+1),T=v+1+c*p;f.push(y,x,T),f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},nr=class i extends qe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=t,d=(e-t)/s,f=new H,m=new Dt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let v=p+g,y=v,x=v+n+1,M=v+n+2,T=v+1;a.push(y,x,T),a.push(x,M,T)}}this.setIndex(a),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var io=class i extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,d=new H,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let v=[],y=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let T=M/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(T+x,1-y),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let y=u[p][v+1],x=u[p][v],M=u[p+1][v],T=u[p+1][v+1];(p!==0||o>0)&&f.push(y,x,T),(p!==n-1||l<Math.PI)&&f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ir=class i extends qe{constructor(t=new Qr(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,c=new Dt,u=new H,h=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function _(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),v(),p()}function g(y){u=t.getPointAt(y/e,u);let x=o.normals[y],M=o.binormals[y];for(let T=0;T<=s;T++){let C=T/s*Math.PI*2,L=Math.sin(C),E=-Math.cos(C);l.x=E*x.x+L*M.x,l.y=E*x.y+L*M.y,l.z=E*x.z+L*M.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let M=(s+1)*(y-1)+(x-1),T=(s+1)*y+(x-1),C=(s+1)*y+x,L=(s+1)*(y-1)+x;m.push(M,T,L),m.push(T,C,L)}}function v(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Mp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var li=class extends Vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=th,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var va=class extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ma=class extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ko(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Bp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ba=class extends ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cl:r=t,a=2*e-n;break;case Il:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cl:o=t,l=2*n-e;break;case Il:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let M=0;M!==a;++M)r[M]=p*o[u+M]+v*o[c+M]+y*o[l+M]+x*o[h+M];return r}},Sa=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Ea=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ko(e,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ko(t.times,Array),values:Ko(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ba(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case ra:e=this.InterpolantFactoryMethodLinear;break;case ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Bp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let _=e[h+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=ra;var Wi=class extends Nn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Lr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="color";var Ta=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};Ta.prototype.ValueTypeName="number";var Aa=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,l);return r}},so=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Nn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Lr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Nn{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="vector";var Ca=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},bf=new Ca,Ia=class{constructor(t){this.manager=t!==void 0?t:bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var ro=class extends dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},oo=class extends ro{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Al=new ye,Eu=new H,wu=new H,Nl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eu),wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wu),e.updateMatrixWorld(),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ao=class extends kr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ol=class extends Nl{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},co=class extends ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Ol}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Pa=class extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var oh="\\[\\]\\.:\\/",Hp=new RegExp("["+oh+"]","g"),ah="[^"+oh+"]",kp="[^"+oh.replace("\\.","")+"]",Vp=/((?:WC+[\/:])*)/.source.replace("WC",ah),Gp=/(WCOD+)?/.source.replace("WCOD",kp),Wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),Xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),qp=new RegExp("^"+Vp+Gp+Wp+Xp+"$"),Yp=["material","materials","bones","map"],zl=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(t){let e=qp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=zl;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t_=new Float32Array(1);var Tu=new ye,lo=class{constructor(t,e,n=0,s=1/0){this.ray=new zr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Tu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tu),this}intersectObject(t,e=!0,n=[]){return Bl(t,this,n,e),n.sort(Au),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Bl(t[s],this,n,e);return n.sort(Au),n}};function Au(i,t){return i.distance-t.distance}function Bl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Bl(r[o],t,e,!0)}}function ch(i,t,e,n){let s=Zp(n);switch(e){case Ql:return i*t;case Ya:return i*t/s.components*s.byteLength;case Za:return i*t/s.components*s.byteLength;case Kl:return i*t*2/s.components*s.byteLength;case Ja:return i*t*2/s.components*s.byteLength;case jl:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case $a:return i*t*4/s.components*s.byteLength;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case tc:return Math.max(i,16)*Math.max(t,8)/4;case Qa:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case ec:case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _c:case yc:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Mc:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sc:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zp(i){switch(i){case ni:case Yl:return{byteLength:1,components:1};case sr:case Zl:case rr:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case Yi:case Wa:case ii:return{byteLength:4,components:1};case Jl:case $l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function qf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $p(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,um=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Am="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_g=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Qp,alphahash_pars_fragment:jp,alphamap_fragment:Kp,alphamap_pars_fragment:tm,alphatest_fragment:em,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:sm,batching_pars_vertex:rm,batching_vertex:om,begin_vertex:am,beginnormal_vertex:cm,bsdfs:lm,iridescence_fragment:hm,bumpmap_pars_fragment:um,clipping_planes_fragment:fm,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:pm,clipping_planes_vertex:mm,color_fragment:gm,color_pars_fragment:xm,color_pars_vertex:_m,color_vertex:ym,common:vm,cube_uv_reflection_fragment:Mm,defaultnormal_vertex:bm,displacementmap_pars_vertex:Sm,displacementmap_vertex:Em,emissivemap_fragment:wm,emissivemap_pars_fragment:Tm,colorspace_fragment:Am,colorspace_pars_fragment:Rm,envmap_fragment:Cm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Pm,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Gm,envmap_vertex:Lm,fog_vertex:Fm,fog_pars_vertex:Um,fog_fragment:Nm,fog_pars_fragment:Om,gradientmap_pars_fragment:zm,lightmap_pars_fragment:Bm,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:km,lights_pars_begin:Vm,lights_toon_fragment:Wm,lights_toon_pars_fragment:Xm,lights_phong_fragment:qm,lights_phong_pars_fragment:Ym,lights_physical_fragment:Zm,lights_physical_pars_fragment:Jm,lights_fragment_begin:$m,lights_fragment_maps:Qm,lights_fragment_end:jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:o0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:c0,morphinstance_vertex:l0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:f0,morphtarget_vertex:d0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:x0,normal_vertex:_0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:S0,opaque_fragment:E0,packing:w0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:L0,shadowmap_vertex:F0,shadowmask_pars_fragment:U0,skinbase_vertex:N0,skinning_pars_vertex:O0,skinning_vertex:z0,skinnormal_vertex:B0,specularmap_fragment:H0,specularmap_pars_fragment:k0,tonemapping_fragment:V0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:q0,uv_pars_vertex:Y0,uv_vertex:Z0,worldpos_vertex:J0,background_vert:$0,background_frag:Q0,backgroundCube_vert:j0,backgroundCube_frag:K0,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:rg,equirect_vert:og,equirect_frag:ag,linedashed_vert:cg,linedashed_frag:lg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:fg,meshlambert_frag:dg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:xg,meshphong_vert:_g,meshphong_frag:yg,meshphysical_vert:vg,meshphysical_frag:Mg,meshtoon_vert:bg,meshtoon_frag:Sg,points_vert:Eg,points_frag:wg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},xt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ui={basic:{uniforms:pn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:pn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new te(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:pn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:pn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:pn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new te(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:pn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:pn([xt.points,xt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:pn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:pn([xt.common,xt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:pn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:pn([xt.sprite,xt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:pn([xt.common,xt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:pn([xt.lights,xt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ui.physical={uniforms:pn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var wc={r:0,b:0,g:0},_s=new Kn,Ig=new ye;function Pg(i,t,e,n,s,r,o){let a=new te(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,M=m(y);M===null?p(a,l):M&&M.isColor&&(p(M,1),x=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){let M=m(x);M&&(M.isCubeTexture||M.mapping===ho)?(u===void 0&&(u=new oe(new ti(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:xs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_s.copy(x.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(_s)),u.material.toneMapped=ce.getTransfer(M.colorSpace)!==_e,(h!==M||d!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new oe(new no(2,2),new ei({name:"BackgroundMaterial",uniforms:xs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ce.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(wc,sh(i)),n.buffers.color.setClear(wc.r,wc.g,wc.b,x,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:g,dispose:v}}function Dg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,F,z,V,w){let D=!1,S=h(V,z,F);r!==S&&(r=S,c(r.object)),D=f(b,V,z,w),D&&m(b,V,z,w),w!==null&&t.update(w,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,x(b,F,z,V),w!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(w).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,F,z){let V=z.wireframe===!0,w=n[b.id];w===void 0&&(w={},n[b.id]=w);let D=w[F.id];D===void 0&&(D={},w[F.id]=D);let S=D[V];return S===void 0&&(S=d(l()),D[V]=S),S}function d(b){let F=[],z=[],V=[];for(let w=0;w<e;w++)F[w]=0,z[w]=0,V[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:V,object:b,attributes:{},index:null}}function f(b,F,z,V){let w=r.attributes,D=F.attributes,S=0,R=z.getAttributes();for(let I in R)if(R[I].location>=0){let k=w[I],W=D[I];if(W===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),k===void 0||k.attribute!==W||W&&k.data!==W.data)return!0;S++}return r.attributesNum!==S||r.index!==V}function m(b,F,z,V){let w={},D=F.attributes,S=0,R=z.getAttributes();for(let I in R)if(R[I].location>=0){let k=D[I];k===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(k=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(k=b.instanceColor));let W={};W.attribute=k,k&&k.data&&(W.data=k.data),w[I]=W,S++}r.attributes=w,r.attributesNum=S,r.index=V}function _(){let b=r.newAttributes;for(let F=0,z=b.length;F<z;F++)b[F]=0}function g(b){p(b,0)}function p(b,F){let z=r.newAttributes,V=r.enabledAttributes,w=r.attributeDivisors;z[b]=1,V[b]===0&&(i.enableVertexAttribArray(b),V[b]=1),w[b]!==F&&(i.vertexAttribDivisor(b,F),w[b]=F)}function v(){let b=r.newAttributes,F=r.enabledAttributes;for(let z=0,V=F.length;z<V;z++)F[z]!==b[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function y(b,F,z,V,w,D,S){S===!0?i.vertexAttribIPointer(b,F,z,w,D):i.vertexAttribPointer(b,F,z,V,w,D)}function x(b,F,z,V){_();let w=V.attributes,D=z.getAttributes(),S=F.defaultAttributeValues;for(let R in D){let I=D[R];if(I.location>=0){let U=w[R];if(U===void 0&&(R==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),R==="instanceColor"&&b.instanceColor&&(U=b.instanceColor)),U!==void 0){let k=U.normalized,W=U.itemSize,K=t.get(U);if(K===void 0)continue;let at=K.buffer,tt=K.type,et=K.bytesPerElement,q=tt===i.INT||tt===i.UNSIGNED_INT||U.gpuType===Wa;if(U.isInterleavedBufferAttribute){let Q=U.data,J=Q.stride,ot=U.offset;if(Q.isInstancedInterleavedBuffer){for(let dt=0;dt<I.locationSize;dt++)p(I.location+dt,Q.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let dt=0;dt<I.locationSize;dt++)g(I.location+dt);i.bindBuffer(i.ARRAY_BUFFER,at);for(let dt=0;dt<I.locationSize;dt++)y(I.location+dt,W/I.locationSize,tt,k,J*et,(ot+W/I.locationSize*dt)*et,q)}else{if(U.isInstancedBufferAttribute){for(let Q=0;Q<I.locationSize;Q++)p(I.location+Q,U.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Q=0;Q<I.locationSize;Q++)g(I.location+Q);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Q=0;Q<I.locationSize;Q++)y(I.location+Q,W/I.locationSize,tt,k,W*et,W/I.locationSize*Q*et,q)}}else if(S!==void 0){let k=S[R];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(I.location,k);break;case 3:i.vertexAttrib3fv(I.location,k);break;case 4:i.vertexAttrib4fv(I.location,k);break;default:i.vertexAttrib1fv(I.location,k)}}}}v()}function M(){L();for(let b in n){let F=n[b];for(let z in F){let V=F[z];for(let w in V)u(V[w].object),delete V[w];delete F[z]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let F=n[b.id];for(let z in F){let V=F[z];for(let w in V)u(V[w].object),delete V[w];delete F[z]}delete n[b.id]}function C(b){for(let F in n){let z=n[F];if(z[b.id]===void 0)continue;let V=z[b.id];for(let w in V)u(V[w].object),delete V[w];delete z[b.id]}}function L(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Lg(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ni&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:M,maxSamples:T}}function Ug(i){let t=this,e=null,n=0,s=!1,r=!1,o=new cn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let v=r?0:n,y=v*4,x=p.clippingState||null;l.value=x,x=u(m,d,y,f);for(let M=0;M!==y;++M)x[M]=e[M];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Ng(i){let t=new WeakMap;function e(o,a){return a===ka?o.mapping=ms:a===Va&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ka||a===Va)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ua(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var lr=4,Sf=[.125,.215,.35,.446,.526,.582],Ms=20,lh=new ao,Ef=new te,hh=null,uh=0,fh=0,dh=!1,vs=(1+Math.sqrt(5))/2,cr=1/vs,wf=[new H(-vs,cr,0),new H(vs,cr,0),new H(-cr,0,vs),new H(cr,0,vs),new H(0,vs,-cr),new H(0,vs,cr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Og=new H,Rc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Og}=r;hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,uh,fh),this._renderer.xr.enabled=dh,t.scissorTest=!1,Tc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:rr,format:Xn,colorSpace:us,depthBuffer:!1},s=Tf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Bg(r,t,e)}return s}_compileMaterial(t){let e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,lh)}_sceneToCubeUV(t,e,n,s,r){let l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ef),h.toneMapping=Ti,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let _=new tn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new oe(new ti,_),p=!1,v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,p=!0):(_.color.copy(Ef),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));let M=this._cubeSize;Tc(s,x*M,y>2?M:0,M,M),h.setRenderTarget(s),p&&h.render(g,l),h.render(t,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Af());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Tc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,lh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wf[(s-r-1)%wf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new oe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ms-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Ms;g>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ms}`);let p=[],v=0;for(let C=0;C<Ms;++C){let L=C/_,E=Math.exp(-L*L/2);p.push(E),C===0?v+=E:C<g&&(v+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let x=this._sizeLods[s],M=3*x*(s>y-lr?s-y+lr:0),T=4*(this._cubeSize-x);Tc(e,M,T,3*x,2*x),l.setRenderTarget(e),l.render(h,lh)}};function zg(i){let t=[],e=[],n=[],s=i,r=i-lr+1+Sf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-lr?l=Sf[o-i+lr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,L=T>2?0:-1,E=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(E,_*m*T),y.set(d,g*m*T);let b=[T,T,T,T,T,T];x.set(b,p*m*T)}let M=new qe;M.setAttribute("position",new ze(v,_)),M.setAttribute("uv",new ze(y,g)),M.setAttribute("faceIndex",new ze(x,p)),t.push(M),s>lr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Tf(i,t,e){let n=new ci(i,t,e);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bg(i,t,e){let n=new Float32Array(Ms),s=new H(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Af(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Rf(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ka||l===Va,u=l===ms||l===gs;if(c||u){let h=t.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Rc(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Rc(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function kg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vg(i,t,e,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,m=h.attributes.position,_=0;if(f!==null){let v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){let M=v[y+0],T=v[y+1],C=v[y+2];d.push(M,T,T,C,C,M)}}else if(m!==void 0){let v=m.array;_=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let M=y+0,T=y+1,C=y+2;d.push(M,T,T,C,C,M)}}else return;let g=new(ih(d)?Hr:Br)(d,1);g.version=_;let p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Gg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function u(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function h(d,f,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Wg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xg(i,t,e){let n=new WeakMap,s=new Le;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*M*4*h),C=new Or(T,x,M,h);C.type=ii,C.needsUpdate=!0;let L=y*4;for(let b=0;b<h;b++){let F=g[b],z=p[b],V=v[b],w=x*M*4*b;for(let D=0;D<F.count;D++){let S=D*L;f===!0&&(s.fromBufferAttribute(F,D),T[w+S+0]=s.x,T[w+S+1]=s.y,T[w+S+2]=s.z,T[w+S+3]=0),m===!0&&(s.fromBufferAttribute(z,D),T[w+S+4]=s.x,T[w+S+5]=s.y,T[w+S+6]=s.z,T[w+S+7]=0),_===!0&&(s.fromBufferAttribute(V,D),T[w+S+8]=s.x,T[w+S+9]=s.y,T[w+S+10]=s.z,T[w+S+11]=V.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new Dt(x,M)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qg(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Yf=new En,Cf=new qr(1,1),Zf=new Or,Jf=new la,$f=new Vr,If=[],Pf=[],Df=new Float32Array(16),Lf=new Float32Array(9),Ff=new Float32Array(4);function ur(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=If[s];if(r===void 0&&(r=new Float32Array(s),If[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ic(i,t){let e=Pf[t];e===void 0&&(e=new Int32Array(t),Pf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Ff.set(n),i.uniformMatrix2fv(this.addr,!1,Ff),Ze(e,n)}}function jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Lf.set(n),i.uniformMatrix3fv(this.addr,!1,Lf),Ze(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;Df.set(n),i.uniformMatrix4fv(this.addr,!1,Df),Ze(e,n)}}function tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cf.compareFunction=eh,r=Cf):r=Yf,e.setTexture2D(t||r,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jf,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$f,s)}function ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zf,s)}function fx(i){switch(i){case 5126:return Yg;case 35664:return Zg;case 35665:return Jg;case 35666:return $g;case 35674:return Qg;case 35675:return jg;case 35676:return Kg;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}function dx(i,t){i.uniform1fv(this.addr,t)}function px(i,t){let e=ur(t,this.size,2);i.uniform2fv(this.addr,e)}function mx(i,t){let e=ur(t,this.size,3);i.uniform3fv(this.addr,e)}function gx(i,t){let e=ur(t,this.size,4);i.uniform4fv(this.addr,e)}function xx(i,t){let e=ur(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _x(i,t){let e=ur(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yx(i,t){let e=ur(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vx(i,t){i.uniform1iv(this.addr,t)}function Mx(i,t){i.uniform2iv(this.addr,t)}function bx(i,t){i.uniform3iv(this.addr,t)}function Sx(i,t){i.uniform4iv(this.addr,t)}function Ex(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function Tx(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Rx(i,t,e){let n=this.cache,s=t.length,r=Ic(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Yf,r[o])}function Cx(i,t,e){let n=this.cache,s=t.length,r=Ic(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Jf,r[o])}function Ix(i,t,e){let n=this.cache,s=t.length,r=Ic(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$f,r[o])}function Px(i,t,e){let n=this.cache,s=t.length,r=Ic(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Zf,r[o])}function Dx(i){switch(i){case 5126:return dx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return xx;case 35675:return _x;case 35676:return yx;case 5124:case 35670:return vx;case 35667:case 35671:return Mx;case 35668:case 35672:return bx;case 35669:case 35673:return Sx;case 5125:return Ex;case 36294:return wx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Px}}var mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fx(e.type)}},gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dx(e.type)}},xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ph=/(\w+)(\])?(\[|\.)?/g;function Uf(i,t){i.seq.push(t),i.map[t.id]=t}function Lx(i,t,e){let n=i.name,s=n.length;for(ph.lastIndex=0;;){let r=ph.exec(n),o=ph.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Uf(e,c===void 0?new mh(a,i,t):new gh(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new xh(a),Uf(e,h)),e=h}}}var hr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Lx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Nf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Fx=37297,Ux=0;function Nx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Of=new jt;function Ox(i){ce._getMatrix(Of,ce.workingColorSpace,i);let t=`mat3( ${Of.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Fr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Nx(i.getShaderSource(t),a)}else return r}function zx(i,t){let e=Ox(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bx(i,t){let e;switch(t){case $u:e="Linear";break;case Qu:e="Reinhard";break;case ju:e="Cineon";break;case Ku:e="ACESFilmic";break;case ef:e="AgX";break;case Ha:e="Neutral";break;case tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ac=new H;function Hx(){ce.getLuminanceCoefficients(Ac);let i=Ac.x.toFixed(4),t=Ac.y.toFixed(4),e=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_o).join(`
`)}function Vx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function _o(i){return i!==""}function Bf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(Wx,qx)}var Xx=new Map;function qx(i,t){let e=ee[t];if(e===void 0){let n=Xx.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _h(e)}var Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kf(i){return i.replace(Yx,Zx)}function Zx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Da?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function $x(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function jx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xl:t="ENVMAP_BLENDING_MULTIPLY";break;case Zu:t="ENVMAP_BLENDING_MIX";break;case Ju:t="ENVMAP_BLENDING_ADD";break}return t}function Kx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function t1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Jx(e),c=$x(e),u=Qx(e),h=jx(e),d=Kx(e),f=kx(e),m=Vx(r),_=s.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(_o).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(_o).join(`
`),p.length>0&&(p+=`
`)):(g=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),p=[Vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?ee.tonemapping_pars_fragment:"",e.toneMapping!==Ti?Bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,zx("linearToOutputTexel",e.outputColorSpace),Hx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_o).join(`
`)),o=_h(o),o=Bf(o,e),o=Hf(o,e),a=_h(a),a=Bf(a,e),a=Hf(a,e),o=kf(o),a=kf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+g+o,x=v+p+a,M=Nf(s,s.VERTEX_SHADER,y),T=Nf(s,s.FRAGMENT_SHADER,x);s.attachShader(_,M),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(F){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(M)||"",w=s.getShaderInfoLog(T)||"",D=z.trim(),S=V.trim(),R=w.trim(),I=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,T);else{let k=zf(s,M,"vertex"),W=zf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+D+`
`+k+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(S===""||R==="")&&(U=!1);U&&(F.diagnostics={runnable:I,programLog:D,vertexShader:{log:S,prefix:g},fragmentShader:{log:R,prefix:p}})}s.deleteShader(M),s.deleteShader(T),L=new hr(s,_),E=Gx(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Fx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ux++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var e1=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vh(t),e.set(t,n)),n}},vh=class{constructor(t){this.id=e1++,this.code=t,this.usedTimes=0}};function n1(i,t,e,n,s,r,o){let a=new $s,l=new yh,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,b,F,z,V){let w=z.fog,D=V.geometry,S=E.isMeshStandardMaterial?z.environment:null,R=(E.isMeshStandardMaterial?e:t).get(E.envMap||S),I=R&&R.mapping===ho?R.image.height:null,U=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let k=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,W=k!==void 0?k.length:0,K=0;D.morphAttributes.position!==void 0&&(K=1),D.morphAttributes.normal!==void 0&&(K=2),D.morphAttributes.color!==void 0&&(K=3);let at,tt,et,q;if(U){let pe=ui[U];at=pe.vertexShader,tt=pe.fragmentShader}else at=E.vertexShader,tt=E.fragmentShader,l.update(E),et=l.getVertexShaderID(E),q=l.getFragmentShaderID(E);let Q=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),ot=V.isInstancedMesh===!0,dt=V.isBatchedMesh===!0,Ct=!!E.map,Ot=!!E.matcap,B=!!R,Jt=!!E.aoMap,It=!!E.lightMap,St=!!E.bumpMap,yt=!!E.normalMap,xe=!!E.displacementMap,Mt=!!E.emissiveMap,Wt=!!E.metalnessMap,Oe=!!E.roughnessMap,Ee=E.anisotropy>0,N=E.clearcoat>0,A=E.dispersion>0,Z=E.iridescence>0,it=E.sheen>0,ct=E.transmission>0,nt=Ee&&!!E.anisotropyMap,Nt=N&&!!E.clearcoatMap,mt=N&&!!E.clearcoatNormalMap,Lt=N&&!!E.clearcoatRoughnessMap,Ft=Z&&!!E.iridescenceMap,ut=Z&&!!E.iridescenceThicknessMap,bt=it&&!!E.sheenColorMap,qt=it&&!!E.sheenRoughnessMap,Ut=!!E.specularMap,_t=!!E.specularColorMap,Kt=!!E.specularIntensityMap,G=ct&&!!E.transmissionMap,ft=ct&&!!E.thicknessMap,gt=!!E.gradientMap,Tt=!!E.alphaMap,lt=E.alphaTest>0,rt=!!E.alphaHash,Pt=!!E.extensions,Qt=Ti;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Qt=i.toneMapping);let we={shaderID:U,shaderType:E.type,shaderName:E.name,vertexShader:at,fragmentShader:tt,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:dt,batchingColor:dt&&V._colorsTexture!==null,instancing:ot,instancingColor:ot&&V.instanceColor!==null,instancingMorph:ot&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:us,alphaToCoverage:!!E.alphaToCoverage,map:Ct,matcap:Ot,envMap:B,envMapMode:B&&R.mapping,envMapCubeUVHeight:I,aoMap:Jt,lightMap:It,bumpMap:St,normalMap:yt,displacementMap:d&&xe,emissiveMap:Mt,normalMapObjectSpace:yt&&E.normalMapType===of,normalMapTangentSpace:yt&&E.normalMapType===th,metalnessMap:Wt,roughnessMap:Oe,anisotropy:Ee,anisotropyMap:nt,clearcoat:N,clearcoatMap:Nt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Lt,dispersion:A,iridescence:Z,iridescenceMap:Ft,iridescenceThicknessMap:ut,sheen:it,sheenColorMap:bt,sheenRoughnessMap:qt,specularMap:Ut,specularColorMap:_t,specularIntensityMap:Kt,transmission:ct,transmissionMap:G,thicknessMap:ft,gradientMap:gt,opaque:E.transparent===!1&&E.blending===ls&&E.alphaToCoverage===!1,alphaMap:Tt,alphaTest:lt,alphaHash:rt,combine:E.combine,mapUv:Ct&&_(E.map.channel),aoMapUv:Jt&&_(E.aoMap.channel),lightMapUv:It&&_(E.lightMap.channel),bumpMapUv:St&&_(E.bumpMap.channel),normalMapUv:yt&&_(E.normalMap.channel),displacementMapUv:xe&&_(E.displacementMap.channel),emissiveMapUv:Mt&&_(E.emissiveMap.channel),metalnessMapUv:Wt&&_(E.metalnessMap.channel),roughnessMapUv:Oe&&_(E.roughnessMap.channel),anisotropyMapUv:nt&&_(E.anisotropyMap.channel),clearcoatMapUv:Nt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:qt&&_(E.sheenRoughnessMap.channel),specularMapUv:Ut&&_(E.specularMap.channel),specularColorMapUv:_t&&_(E.specularColorMap.channel),specularIntensityMapUv:Kt&&_(E.specularIntensityMap.channel),transmissionMapUv:G&&_(E.transmissionMap.channel),thicknessMapUv:ft&&_(E.thicknessMap.channel),alphaMapUv:Tt&&_(E.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(yt||Ee),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!D.attributes.uv&&(Ct||Tt),fog:!!w,useFog:E.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:J,skinning:V.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Ct&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===_e,decodeVideoTextureEmissive:Mt&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===_e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&E.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function p(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let F in E.defines)b.push(F),b.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(v(b,E),y(b,E),b.push(i.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function v(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function y(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){let b=m[E.type],F;if(b){let z=ui[b];F=xf.clone(z.uniforms)}else F=E.uniforms;return F}function M(E,b){let F;for(let z=0,V=u.length;z<V;z++){let w=u[z];if(w.cacheKey===b){F=w,++F.usedTimes;break}}return F===void 0&&(F=new t1(i,b,E,r),u.push(F)),F}function T(E){if(--E.usedTimes===0){let b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:L}}function i1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Gf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,d,f,m,_,g){let p=o(h,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,m,_,g){let p=o(h,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||s1),n.length>1&&n.sort(d||Gf),s.length>1&&s.sort(d||Gf)}function u(){for(let h=t,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function r1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Wf,i.set(n,[o])):s>=r.length?(o=new Wf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function o1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new te};break;case"SpotLight":e={position:new H,direction:new H,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function a1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var c1=0;function l1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h1(i){let t=new o1,e=a1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new ye,o=new ye;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,y=0,x=0,M=0,T=0,C=0;c.sort(l1);for(let E=0,b=c.length;E<b;E++){let F=c[E],z=F.color,V=F.intensity,w=F.distance,D=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=z.r*V,h+=z.g*V,d+=z.b*V;else if(F.isLightProbe){for(let S=0;S<9;S++)n.probe[S].addScaledVector(F.sh.coefficients[S],V);C++}else if(F.isDirectionalLight){let S=t.get(F);if(S.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let R=F.shadow,I=e.get(F);I.shadowIntensity=R.intensity,I.shadowBias=R.bias,I.shadowNormalBias=R.normalBias,I.shadowRadius=R.radius,I.shadowMapSize=R.mapSize,n.directionalShadow[f]=I,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=F.shadow.matrix,v++}n.directional[f]=S,f++}else if(F.isSpotLight){let S=t.get(F);S.position.setFromMatrixPosition(F.matrixWorld),S.color.copy(z).multiplyScalar(V),S.distance=w,S.coneCos=Math.cos(F.angle),S.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),S.decay=F.decay,n.spot[_]=S;let R=F.shadow;if(F.map&&(n.spotLightMap[M]=F.map,M++,R.updateMatrices(F),F.castShadow&&T++),n.spotLightMatrix[_]=R.matrix,F.castShadow){let I=e.get(F);I.shadowIntensity=R.intensity,I.shadowBias=R.bias,I.shadowNormalBias=R.normalBias,I.shadowRadius=R.radius,I.shadowMapSize=R.mapSize,n.spotShadow[_]=I,n.spotShadowMap[_]=D,x++}_++}else if(F.isRectAreaLight){let S=t.get(F);S.color.copy(z).multiplyScalar(V),S.halfWidth.set(F.width*.5,0,0),S.halfHeight.set(0,F.height*.5,0),n.rectArea[g]=S,g++}else if(F.isPointLight){let S=t.get(F);if(S.color.copy(F.color).multiplyScalar(F.intensity),S.distance=F.distance,S.decay=F.decay,F.castShadow){let R=F.shadow,I=e.get(F);I.shadowIntensity=R.intensity,I.shadowBias=R.bias,I.shadowNormalBias=R.normalBias,I.shadowRadius=R.radius,I.shadowMapSize=R.mapSize,I.shadowCameraNear=R.camera.near,I.shadowCameraFar=R.camera.far,n.pointShadow[m]=I,n.pointShadowMap[m]=D,n.pointShadowMatrix[m]=F.shadow.matrix,y++}n.point[m]=S,m++}else if(F.isHemisphereLight){let S=t.get(F);S.skyColor.copy(F.color).multiplyScalar(V),S.groundColor.copy(F.groundColor).multiplyScalar(V),n.hemi[p]=S,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==M||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.directionalLength=f,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=M,L.numLightProbes=C,n.version=c1++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0,g=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let y=c[p];if(y.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Xf(i){let t=new h1(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function u1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Xf(i),t.set(s,[a])):r>=o.length?(a=new Xf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p1(i,t,e){let n=new js,s=new Dt,r=new Dt,o=new Le,a=new va({depthPacking:rf}),l=new Ma,c={},u=e.maxTextureSize,h={[bi]:_n,[_n]:bi,[wn]:wn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:f1,fragmentShader:d1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new qe;m.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new oe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let p=this.type;this.render=function(T,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let E=i.getRenderTarget(),b=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(wi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=p!==hi&&this.type===hi,w=p===hi&&this.type!==hi;for(let D=0,S=T.length;D<S;D++){let R=T[D],I=R.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);let U=I.getFrameExtents();if(s.multiply(U),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/U.x),s.x=r.x*U.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/U.y),s.y=r.y*U.y,I.mapSize.y=r.y)),I.map===null||V===!0||w===!0){let W=this.type!==hi?{minFilter:Sn,magFilter:Sn}:{};I.map!==null&&I.map.dispose(),I.map=new ci(s.x,s.y,W),I.map.texture.name=R.name+".shadowMap",I.camera.updateProjectionMatrix()}i.setRenderTarget(I.map),i.clear();let k=I.getViewportCount();for(let W=0;W<k;W++){let K=I.getViewport(W);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(o),I.updateMatrices(R,W),n=I.getFrustum(),x(C,L,I.camera,R,this.type)}I.isPointLightShadow!==!0&&this.type===hi&&v(I,L),I.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,b,F)};function v(T,C){let L=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,L,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,L,f,_,null)}function y(T,C,L,E){let b=null,F=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)b=F;else if(b=L.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=b.uuid,V=C.uuid,w=c[z];w===void 0&&(w={},c[z]=w);let D=w[V];D===void 0&&(D=b.clone(),w[V]=D,C.addEventListener("dispose",M)),b=D}if(b.visible=C.visible,b.wireframe=C.wireframe,E===hi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=i.properties.get(b);z.light=L}return b}function x(T,C,L,E,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===hi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let V=t.update(T),w=T.material;if(Array.isArray(w)){let D=V.groups;for(let S=0,R=D.length;S<R;S++){let I=D[S],U=w[I.materialIndex];if(U&&U.visible){let k=y(T,U,E,b);T.onBeforeShadow(i,T,C,L,V,k,I),i.renderBufferDirect(L,null,V,k,T,I),T.onAfterShadow(i,T,C,L,V,k,I)}}}else if(w.visible){let D=y(T,w,E,b);T.onBeforeShadow(i,T,C,L,V,D,null),i.renderBufferDirect(L,null,V,D,T,null),T.onAfterShadow(i,T,C,L,V,D,null)}}let z=T.children;for(let V=0,w=z.length;V<w;V++)x(z[V],C,L,E,b)}function M(T){T.target.removeEventListener("dispose",M);for(let L in c){let E=c[L],b=T.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var m1={[La]:Fa,[Ua]:za,[Na]:Ba,[hs]:Oa,[Fa]:La,[za]:Ua,[Ba]:Na,[Oa]:hs};function g1(i,t){function e(){let G=!1,ft=new Le,gt=null,Tt=new Le(0,0,0,0);return{setMask:function(lt){gt!==lt&&!G&&(i.colorMask(lt,lt,lt,lt),gt=lt)},setLocked:function(lt){G=lt},setClear:function(lt,rt,Pt,Qt,we){we===!0&&(lt*=Qt,rt*=Qt,Pt*=Qt),ft.set(lt,rt,Pt,Qt),Tt.equals(ft)===!1&&(i.clearColor(lt,rt,Pt,Qt),Tt.copy(ft))},reset:function(){G=!1,gt=null,Tt.set(-1,0,0,0)}}}function n(){let G=!1,ft=!1,gt=null,Tt=null,lt=null;return{setReversed:function(rt){if(ft!==rt){let Pt=t.get("EXT_clip_control");rt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ft=rt;let Qt=lt;lt=null,this.setClear(Qt)}},getReversed:function(){return ft},setTest:function(rt){rt?Q(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(rt){gt!==rt&&!G&&(i.depthMask(rt),gt=rt)},setFunc:function(rt){if(ft&&(rt=m1[rt]),Tt!==rt){switch(rt){case La:i.depthFunc(i.NEVER);break;case Fa:i.depthFunc(i.ALWAYS);break;case Ua:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case Na:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=rt}},setLocked:function(rt){G=rt},setClear:function(rt){lt!==rt&&(ft&&(rt=1-rt),i.clearDepth(rt),lt=rt)},reset:function(){G=!1,gt=null,Tt=null,lt=null,ft=!1}}}function s(){let G=!1,ft=null,gt=null,Tt=null,lt=null,rt=null,Pt=null,Qt=null,we=null;return{setTest:function(pe){G||(pe?Q(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(pe){ft!==pe&&!G&&(i.stencilMask(pe),ft=pe)},setFunc:function(pe,mi,ai){(gt!==pe||Tt!==mi||lt!==ai)&&(i.stencilFunc(pe,mi,ai),gt=pe,Tt=mi,lt=ai)},setOp:function(pe,mi,ai){(rt!==pe||Pt!==mi||Qt!==ai)&&(i.stencilOp(pe,mi,ai),rt=pe,Pt=mi,Qt=ai)},setLocked:function(pe){G=pe},setClear:function(pe){we!==pe&&(i.clearStencil(pe),we=pe)},reset:function(){G=!1,ft=null,gt=null,Tt=null,lt=null,rt=null,Pt=null,Qt=null,we=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,M=null,T=null,C=new te(0,0,0),L=0,E=!1,b=null,F=null,z=null,V=null,w=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),S=!1,R=0,I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(I)[1]),S=R>=1):I.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),S=R>=2);let U=null,k={},W=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),at=new Le().fromArray(W),tt=new Le().fromArray(K);function et(G,ft,gt,Tt){let lt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(G,rt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<gt;Pt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ft+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return rt}let q={};q[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(hs),St(!1),yt(Hl),Q(i.CULL_FACE),Jt(wi);function Q(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function J(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function ot(G,ft){return h[G]!==ft?(i.bindFramebuffer(G,ft),h[G]=ft,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function dt(G,ft){let gt=f,Tt=!1;if(G){gt=d.get(ft),gt===void 0&&(gt=[],d.set(ft,gt));let lt=G.textures;if(gt.length!==lt.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Pt=lt.length;rt<Pt;rt++)gt[rt]=i.COLOR_ATTACHMENT0+rt;gt.length=lt.length,Tt=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(gt)}function Ct(G){return m!==G?(i.useProgram(G),m=G,!0):!1}let Ot={[Hi]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};Ot[Lu]=i.MIN,Ot[Fu]=i.MAX;let B={[Uu]:i.ZERO,[Nu]:i.ONE,[Ou]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[Gu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[Bu]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function Jt(G,ft,gt,Tt,lt,rt,Pt,Qt,we,pe){if(G===wi){_===!0&&(J(i.BLEND),_=!1);return}if(_===!1&&(Q(i.BLEND),_=!0),G!==Iu){if(G!==g||pe!==E){if((p!==Hi||x!==Hi)&&(i.blendEquation(i.FUNC_ADD),p=Hi,x=Hi),pe)switch(G){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,y=null,M=null,T=null,C.set(0,0,0),L=0,g=G,E=pe}return}lt=lt||ft,rt=rt||gt,Pt=Pt||Tt,(ft!==p||lt!==x)&&(i.blendEquationSeparate(Ot[ft],Ot[lt]),p=ft,x=lt),(gt!==v||Tt!==y||rt!==M||Pt!==T)&&(i.blendFuncSeparate(B[gt],B[Tt],B[rt],B[Pt]),v=gt,y=Tt,M=rt,T=Pt),(Qt.equals(C)===!1||we!==L)&&(i.blendColor(Qt.r,Qt.g,Qt.b,we),C.copy(Qt),L=we),g=G,E=!1}function It(G,ft){G.side===wn?J(i.CULL_FACE):Q(i.CULL_FACE);let gt=G.side===_n;ft&&(gt=!gt),St(gt),G.blending===ls&&G.transparent===!1?Jt(wi):Jt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let Tt=G.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Mt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function yt(G){G!==Ru?(Q(i.CULL_FACE),G!==F&&(G===Hl?i.cullFace(i.BACK):G===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),F=G}function xe(G){G!==z&&(S&&i.lineWidth(G),z=G)}function Mt(G,ft,gt){G?(Q(i.POLYGON_OFFSET_FILL),(V!==ft||w!==gt)&&(i.polygonOffset(ft,gt),V=ft,w=gt)):J(i.POLYGON_OFFSET_FILL)}function Wt(G){G?Q(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function Oe(G){G===void 0&&(G=i.TEXTURE0+D-1),U!==G&&(i.activeTexture(G),U=G)}function Ee(G,ft,gt){gt===void 0&&(U===null?gt=i.TEXTURE0+D-1:gt=U);let Tt=k[gt];Tt===void 0&&(Tt={type:void 0,texture:void 0},k[gt]=Tt),(Tt.type!==G||Tt.texture!==ft)&&(U!==gt&&(i.activeTexture(gt),U=gt),i.bindTexture(G,ft||q[G]),Tt.type=G,Tt.texture=ft)}function N(){let G=k[U];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ut(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(G){at.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),at.copy(G))}function qt(G){tt.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),tt.copy(G))}function Ut(G,ft){let gt=c.get(ft);gt===void 0&&(gt=new WeakMap,c.set(ft,gt));let Tt=gt.get(G);Tt===void 0&&(Tt=i.getUniformBlockIndex(ft,G.name),gt.set(G,Tt))}function _t(G,ft){let Tt=c.get(ft).get(G);l.get(ft)!==Tt&&(i.uniformBlockBinding(ft,Tt,G.__bindingPointIndex),l.set(ft,Tt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},U=null,k={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,M=null,T=null,C=new te(0,0,0),L=0,E=!1,b=null,F=null,z=null,V=null,w=null,at.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:J,bindFramebuffer:ot,drawBuffers:dt,useProgram:Ct,setBlending:Jt,setMaterial:It,setFlipSided:St,setCullFace:yt,setLineWidth:xe,setPolygonOffset:Mt,setScissorTest:Wt,activeTexture:Oe,bindTexture:Ee,unbindTexture:N,compressedTexImage2D:A,compressedTexImage3D:Z,texImage2D:Ft,texImage3D:ut,updateUBOMapping:Ut,uniformBlockBinding:_t,texStorage2D:mt,texStorage3D:Lt,texSubImage2D:it,texSubImage3D:ct,compressedTexSubImage2D:nt,compressedTexSubImage3D:Nt,scissor:bt,viewport:qt,reset:Kt}}function x1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return f?new OffscreenCanvas(N,A):Nr("canvas")}function _(N,A,Z){let it=1,ct=Ee(N);if((ct.width>Z||ct.height>Z)&&(it=Z/Math.max(ct.width,ct.height)),it<1)if(typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&N instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&N instanceof ImageBitmap||typeof VideoFrame!="undefined"&&N instanceof VideoFrame){let nt=Math.floor(it*ct.width),Nt=Math.floor(it*ct.height);h===void 0&&(h=m(nt,Nt));let mt=A?m(nt,Nt):h;return mt.width=nt,mt.height=Nt,mt.getContext("2d").drawImage(N,0,0,nt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+nt+"x"+Nt+")."),mt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),N;return N}function g(N){return N.generateMipmaps}function p(N){i.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(N,A,Z,it,ct=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let nt=A;if(A===i.RED&&(Z===i.FLOAT&&(nt=i.R32F),Z===i.HALF_FLOAT&&(nt=i.R16F),Z===i.UNSIGNED_BYTE&&(nt=i.R8)),A===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(nt=i.R8UI),Z===i.UNSIGNED_SHORT&&(nt=i.R16UI),Z===i.UNSIGNED_INT&&(nt=i.R32UI),Z===i.BYTE&&(nt=i.R8I),Z===i.SHORT&&(nt=i.R16I),Z===i.INT&&(nt=i.R32I)),A===i.RG&&(Z===i.FLOAT&&(nt=i.RG32F),Z===i.HALF_FLOAT&&(nt=i.RG16F),Z===i.UNSIGNED_BYTE&&(nt=i.RG8)),A===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(nt=i.RG8UI),Z===i.UNSIGNED_SHORT&&(nt=i.RG16UI),Z===i.UNSIGNED_INT&&(nt=i.RG32UI),Z===i.BYTE&&(nt=i.RG8I),Z===i.SHORT&&(nt=i.RG16I),Z===i.INT&&(nt=i.RG32I)),A===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),Z===i.UNSIGNED_INT&&(nt=i.RGB32UI),Z===i.BYTE&&(nt=i.RGB8I),Z===i.SHORT&&(nt=i.RGB16I),Z===i.INT&&(nt=i.RGB32I)),A===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),Z===i.UNSIGNED_INT&&(nt=i.RGBA32UI),Z===i.BYTE&&(nt=i.RGBA8I),Z===i.SHORT&&(nt=i.RGBA16I),Z===i.INT&&(nt=i.RGBA32I)),A===i.RGB&&(Z===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),A===i.RGBA){let Nt=ct?Fr:ce.getTransfer(it);Z===i.FLOAT&&(nt=i.RGBA32F),Z===i.HALF_FLOAT&&(nt=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(nt=Nt===_e?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function x(N,A){let Z;return N?A===null||A===Yi||A===or?Z=i.DEPTH24_STENCIL8:A===ii?Z=i.DEPTH32F_STENCIL8:A===sr&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Yi||A===or?Z=i.DEPTH_COMPONENT24:A===ii?Z=i.DEPTH_COMPONENT32F:A===sr&&(Z=i.DEPTH_COMPONENT16),Z}function M(N,A){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==Sn&&N.minFilter!==jn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function T(N){let A=N.target;A.removeEventListener("dispose",T),L(A),A.isVideoTexture&&u.delete(A)}function C(N){let A=N.target;A.removeEventListener("dispose",C),b(A)}function L(N){let A=n.get(N);if(A.__webglInit===void 0)return;let Z=N.source,it=d.get(Z);if(it){let ct=it[A.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(N),Object.keys(it).length===0&&d.delete(Z)}n.remove(N)}function E(N){let A=n.get(N);i.deleteTexture(A.__webglTexture);let Z=N.source,it=d.get(Z);delete it[A.__cacheKey],o.memory.textures--}function b(N){let A=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(A.__webglFramebuffer[it]))for(let ct=0;ct<A.__webglFramebuffer[it].length;ct++)i.deleteFramebuffer(A.__webglFramebuffer[it][ct]);else i.deleteFramebuffer(A.__webglFramebuffer[it]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[it])}else{if(Array.isArray(A.__webglFramebuffer))for(let it=0;it<A.__webglFramebuffer.length;it++)i.deleteFramebuffer(A.__webglFramebuffer[it]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let it=0;it<A.__webglColorRenderbuffer.length;it++)A.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[it]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Z=N.textures;for(let it=0,ct=Z.length;it<ct;it++){let nt=n.get(Z[it]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(Z[it])}n.remove(N)}let F=0;function z(){F=0}function V(){let N=F;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),F+=1,N}function w(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function D(N,A){let Z=n.get(N);if(N.isVideoTexture&&Wt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){let it=N.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(Z,N,A);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+A)}function S(N,A){let Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){q(Z,N,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+A)}function R(N,A){let Z=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){q(Z,N,A);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+A)}function I(N,A){let Z=n.get(N);if(N.version>0&&Z.__version!==N.version){Q(Z,N,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+A)}let U={[ia]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},k={[Sn]:i.NEAREST,[nf]:i.NEAREST_MIPMAP_NEAREST,[uo]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Ga]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},W={[af]:i.NEVER,[df]:i.ALWAYS,[cf]:i.LESS,[eh]:i.LEQUAL,[lf]:i.EQUAL,[ff]:i.GEQUAL,[hf]:i.GREATER,[uf]:i.NOTEQUAL};function K(N,A){if(A.type===ii&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===jn||A.magFilter===Ga||A.magFilter===uo||A.magFilter===qi||A.minFilter===jn||A.minFilter===Ga||A.minFilter===uo||A.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,U[A.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,U[A.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,U[A.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,k[A.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,k[A.minFilter]),A.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,W[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Sn||A.minFilter!==uo&&A.minFilter!==qi||A.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function at(N,A){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",T));let it=A.source,ct=d.get(it);ct===void 0&&(ct={},d.set(it,ct));let nt=w(A);if(nt!==N.__cacheKey){ct[nt]===void 0&&(ct[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ct[nt].usedTimes++;let Nt=ct[N.__cacheKey];Nt!==void 0&&(ct[N.__cacheKey].usedTimes--,Nt.usedTimes===0&&E(A)),N.__cacheKey=nt,N.__webglTexture=ct[nt].texture}return Z}function tt(N,A,Z){return Math.floor(Math.floor(N/Z)/A)}function et(N,A,Z,it){let nt=N.updateRanges;if(nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Z,it,A.data);else{nt.sort((ut,bt)=>ut.start-bt.start);let Nt=0;for(let ut=1;ut<nt.length;ut++){let bt=nt[Nt],qt=nt[ut],Ut=bt.start+bt.count,_t=tt(qt.start,A.width,4),Kt=tt(bt.start,A.width,4);qt.start<=Ut+1&&_t===Kt&&tt(qt.start+qt.count-1,A.width,4)===_t?bt.count=Math.max(bt.count,qt.start+qt.count-bt.start):(++Nt,nt[Nt]=qt)}nt.length=Nt+1;let mt=i.getParameter(i.UNPACK_ROW_LENGTH),Lt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ft=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let ut=0,bt=nt.length;ut<bt;ut++){let qt=nt[ut],Ut=Math.floor(qt.start/4),_t=Math.ceil(qt.count/4),Kt=Ut%A.width,G=Math.floor(Ut/A.width),ft=_t,gt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),e.texSubImage2D(i.TEXTURE_2D,0,Kt,G,ft,gt,Z,it,A.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function q(N,A,Z){let it=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(it=i.TEXTURE_3D);let ct=at(N,A),nt=A.source;e.bindTexture(it,N.__webglTexture,i.TEXTURE0+Z);let Nt=n.get(nt);if(nt.version!==Nt.__version||ct===!0){e.activeTexture(i.TEXTURE0+Z);let mt=ce.getPrimaries(ce.workingColorSpace),Lt=A.colorSpace===Ai?null:ce.getPrimaries(A.colorSpace),Ft=A.colorSpace===Ai||mt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let ut=_(A.image,!1,s.maxTextureSize);ut=Oe(A,ut);let bt=r.convert(A.format,A.colorSpace),qt=r.convert(A.type),Ut=y(A.internalFormat,bt,qt,A.colorSpace,A.isVideoTexture);K(it,A);let _t,Kt=A.mipmaps,G=A.isVideoTexture!==!0,ft=Nt.__version===void 0||ct===!0,gt=nt.dataReady,Tt=M(A,ut);if(A.isDepthTexture)Ut=x(A.format===ar,A.type),ft&&(G?e.texStorage2D(i.TEXTURE_2D,1,Ut,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,bt,qt,null));else if(A.isDataTexture)if(Kt.length>0){G&&ft&&e.texStorage2D(i.TEXTURE_2D,Tt,Ut,Kt[0].width,Kt[0].height);for(let lt=0,rt=Kt.length;lt<rt;lt++)_t=Kt[lt],G?gt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,_t.width,_t.height,bt,qt,_t.data):e.texImage2D(i.TEXTURE_2D,lt,Ut,_t.width,_t.height,0,bt,qt,_t.data);A.generateMipmaps=!1}else G?(ft&&e.texStorage2D(i.TEXTURE_2D,Tt,Ut,ut.width,ut.height),gt&&et(A,ut,bt,qt)):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,bt,qt,ut.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){G&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Ut,Kt[0].width,Kt[0].height,ut.depth);for(let lt=0,rt=Kt.length;lt<rt;lt++)if(_t=Kt[lt],A.format!==Xn)if(bt!==null)if(G){if(gt)if(A.layerUpdates.size>0){let Pt=ch(_t.width,_t.height,A.format,A.type);for(let Qt of A.layerUpdates){let we=_t.data.subarray(Qt*Pt/_t.data.BYTES_PER_ELEMENT,(Qt+1)*Pt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Qt,_t.width,_t.height,1,bt,we)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,_t.width,_t.height,ut.depth,bt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Ut,_t.width,_t.height,ut.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,_t.width,_t.height,ut.depth,bt,qt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Ut,_t.width,_t.height,ut.depth,0,bt,qt,_t.data)}else{G&&ft&&e.texStorage2D(i.TEXTURE_2D,Tt,Ut,Kt[0].width,Kt[0].height);for(let lt=0,rt=Kt.length;lt<rt;lt++)_t=Kt[lt],A.format!==Xn?bt!==null?G?gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,_t.width,_t.height,bt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Ut,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?gt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,_t.width,_t.height,bt,qt,_t.data):e.texImage2D(i.TEXTURE_2D,lt,Ut,_t.width,_t.height,0,bt,qt,_t.data)}else if(A.isDataArrayTexture)if(G){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Ut,ut.width,ut.height,ut.depth),gt)if(A.layerUpdates.size>0){let lt=ch(ut.width,ut.height,A.format,A.type);for(let rt of A.layerUpdates){let Pt=ut.data.subarray(rt*lt/ut.data.BYTES_PER_ELEMENT,(rt+1)*lt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ut.width,ut.height,1,bt,qt,Pt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,bt,qt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ut.width,ut.height,ut.depth,0,bt,qt,ut.data);else if(A.isData3DTexture)G?(ft&&e.texStorage3D(i.TEXTURE_3D,Tt,Ut,ut.width,ut.height,ut.depth),gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,bt,qt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ut.width,ut.height,ut.depth,0,bt,qt,ut.data);else if(A.isFramebufferTexture){if(ft)if(G)e.texStorage2D(i.TEXTURE_2D,Tt,Ut,ut.width,ut.height);else{let lt=ut.width,rt=ut.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Ut,lt,rt,0,bt,qt,null),lt>>=1,rt>>=1}}else if(Kt.length>0){if(G&&ft){let lt=Ee(Kt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Ut,lt.width,lt.height)}for(let lt=0,rt=Kt.length;lt<rt;lt++)_t=Kt[lt],G?gt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,bt,qt,_t):e.texImage2D(i.TEXTURE_2D,lt,Ut,bt,qt,_t);A.generateMipmaps=!1}else if(G){if(ft){let lt=Ee(ut);e.texStorage2D(i.TEXTURE_2D,Tt,Ut,lt.width,lt.height)}gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,qt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Ut,bt,qt,ut);g(A)&&p(it),Nt.__version=nt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Q(N,A,Z){if(A.image.length!==6)return;let it=at(N,A),ct=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Z);let nt=n.get(ct);if(ct.version!==nt.__version||it===!0){e.activeTexture(i.TEXTURE0+Z);let Nt=ce.getPrimaries(ce.workingColorSpace),mt=A.colorSpace===Ai?null:ce.getPrimaries(A.colorSpace),Lt=A.colorSpace===Ai||Nt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Ft=A.isCompressedTexture||A.image[0].isCompressedTexture,ut=A.image[0]&&A.image[0].isDataTexture,bt=[];for(let rt=0;rt<6;rt++)!Ft&&!ut?bt[rt]=_(A.image[rt],!0,s.maxCubemapSize):bt[rt]=ut?A.image[rt].image:A.image[rt],bt[rt]=Oe(A,bt[rt]);let qt=bt[0],Ut=r.convert(A.format,A.colorSpace),_t=r.convert(A.type),Kt=y(A.internalFormat,Ut,_t,A.colorSpace),G=A.isVideoTexture!==!0,ft=nt.__version===void 0||it===!0,gt=ct.dataReady,Tt=M(A,qt);K(i.TEXTURE_CUBE_MAP,A);let lt;if(Ft){G&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Kt,qt.width,qt.height);for(let rt=0;rt<6;rt++){lt=bt[rt].mipmaps;for(let Pt=0;Pt<lt.length;Pt++){let Qt=lt[Pt];A.format!==Xn?Ut!==null?G?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,Qt.width,Qt.height,Ut,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,Kt,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,0,0,Qt.width,Qt.height,Ut,_t,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt,Kt,Qt.width,Qt.height,0,Ut,_t,Qt.data)}}}else{if(lt=A.mipmaps,G&&ft){lt.length>0&&Tt++;let rt=Ee(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ut){G?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,bt[rt].width,bt[rt].height,Ut,_t,bt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,bt[rt].width,bt[rt].height,0,Ut,_t,bt[rt].data);for(let Pt=0;Pt<lt.length;Pt++){let we=lt[Pt].image[rt].image;G?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,we.width,we.height,Ut,_t,we.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,Kt,we.width,we.height,0,Ut,_t,we.data)}}else{G?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ut,_t,bt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,Ut,_t,bt[rt]);for(let Pt=0;Pt<lt.length;Pt++){let Qt=lt[Pt];G?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,0,0,Ut,_t,Qt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Pt+1,Kt,Ut,_t,Qt.image[rt])}}}g(A)&&p(i.TEXTURE_CUBE_MAP),nt.__version=ct.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function J(N,A,Z,it,ct,nt){let Nt=r.convert(Z.format,Z.colorSpace),mt=r.convert(Z.type),Lt=y(Z.internalFormat,Nt,mt,Z.colorSpace),Ft=n.get(A),ut=n.get(Z);if(ut.__renderTarget=A,!Ft.__hasExternalTextures){let bt=Math.max(1,A.width>>nt),qt=Math.max(1,A.height>>nt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,nt,Lt,bt,qt,A.depth,0,Nt,mt,null):e.texImage2D(ct,nt,Lt,bt,qt,0,Nt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Mt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ct,ut.__webglTexture,0,xe(A)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ct,ut.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(N,A,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,N),A.depthBuffer){let it=A.depthTexture,ct=it&&it.isDepthTexture?it.type:null,nt=x(A.stencilBuffer,ct),Nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=xe(A);Mt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,nt,A.width,A.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,nt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,nt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,N)}else{let it=A.textures;for(let ct=0;ct<it.length;ct++){let nt=it[ct],Nt=r.convert(nt.format,nt.colorSpace),mt=r.convert(nt.type),Lt=y(nt.internalFormat,Nt,mt,nt.colorSpace),Ft=xe(A);Z&&Mt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,Lt,A.width,A.height):Mt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,Lt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=n.get(A.depthTexture);it.__renderTarget=A,(!it.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),D(A.depthTexture,0);let ct=it.__webglTexture,nt=xe(A);if(A.depthTexture.format===Ys)Mt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(A.depthTexture.format===ar)Mt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Ct(N){let A=n.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let it=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),it){let ct=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,it.removeEventListener("dispose",ct)};it.addEventListener("dispose",ct),A.__depthDisposeCallback=ct}A.__boundDepthTexture=it}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");let it=N.texture.mipmaps;it&&it.length>0?dt(A.__webglFramebuffer[0],N):dt(A.__webglFramebuffer,N)}else if(Z){A.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[it]),A.__webglDepthbuffer[it]===void 0)A.__webglDepthbuffer[it]=i.createRenderbuffer(),ot(A.__webglDepthbuffer[it],N,!1);else{let ct=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=A.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,nt)}}else{let it=N.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ot(A.__webglDepthbuffer,N,!1);else{let ct=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(N,A,Z){let it=n.get(N);A!==void 0&&J(it.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Ct(N)}function B(N){let A=N.texture,Z=n.get(N),it=n.get(A);N.addEventListener("dispose",C);let ct=N.textures,nt=N.isWebGLCubeRenderTarget===!0,Nt=ct.length>1;if(Nt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=A.version,o.memory.textures++),nt){Z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[mt]=[];for(let Lt=0;Lt<A.mipmaps.length;Lt++)Z.__webglFramebuffer[mt][Lt]=i.createFramebuffer()}else Z.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let mt=0;mt<A.mipmaps.length;mt++)Z.__webglFramebuffer[mt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let mt=0,Lt=ct.length;mt<Lt;mt++){let Ft=n.get(ct[mt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Mt(N)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let mt=0;mt<ct.length;mt++){let Lt=ct[mt];Z.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[mt]);let Ft=r.convert(Lt.format,Lt.colorSpace),ut=r.convert(Lt.type),bt=y(Lt.internalFormat,Ft,ut,Lt.colorSpace,N.isXRRenderTarget===!0),qt=xe(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,bt,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(Z.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),K(i.TEXTURE_CUBE_MAP,A);for(let mt=0;mt<6;mt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Lt=0;Lt<A.mipmaps.length;Lt++)J(Z.__webglFramebuffer[mt][Lt],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt);else J(Z.__webglFramebuffer[mt],N,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(A)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let mt=0,Lt=ct.length;mt<Lt;mt++){let Ft=ct[mt],ut=n.get(Ft),bt=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(bt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,ut.__webglTexture),K(bt,Ft),J(Z.__webglFramebuffer,N,Ft,i.COLOR_ATTACHMENT0+mt,bt,0),g(Ft)&&p(bt)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(mt=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,it.__webglTexture),K(mt,A),A.mipmaps&&A.mipmaps.length>0)for(let Lt=0;Lt<A.mipmaps.length;Lt++)J(Z.__webglFramebuffer[Lt],N,A,i.COLOR_ATTACHMENT0,mt,Lt);else J(Z.__webglFramebuffer,N,A,i.COLOR_ATTACHMENT0,mt,0);g(A)&&p(mt),e.unbindTexture()}N.depthBuffer&&Ct(N)}function Jt(N){let A=N.textures;for(let Z=0,it=A.length;Z<it;Z++){let ct=A[Z];if(g(ct)){let nt=v(N),Nt=n.get(ct).__webglTexture;e.bindTexture(nt,Nt),p(nt),e.unbindTexture()}}}let It=[],St=[];function yt(N){if(N.samples>0){if(Mt(N)===!1){let A=N.textures,Z=N.width,it=N.height,ct=i.COLOR_BUFFER_BIT,nt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(N),mt=A.length>1;if(mt)for(let Ft=0;Ft<A.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);let Lt=N.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ft=0;Ft<A.length;Ft++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ft]);let ut=n.get(A[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,Z,it,0,0,Z,it,ct,i.NEAREST),l===!0&&(It.length=0,St.length=0,It.push(i.COLOR_ATTACHMENT0+Ft),N.depthBuffer&&N.resolveDepthBuffer===!1&&(It.push(nt),St.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Ft=0;Ft<A.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ft]);let ut=n.get(A[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let A=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function xe(N){return Math.min(s.maxSamples,N.samples)}function Mt(N){let A=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Wt(N){let A=o.render.frame;u.get(N)!==A&&(u.set(N,A),N.update())}function Oe(N,A){let Z=N.colorSpace,it=N.format,ct=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==us&&Z!==Ai&&(ce.getTransfer(Z)===_e?(it!==Xn||ct!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function Ee(N){return typeof HTMLImageElement!="undefined"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame!="undefined"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=D,this.setTexture2DArray=S,this.setTexture3D=R,this.setTextureCube=I,this.rebindTextures=Ot,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Mt}function _1(i,t){function e(n,s=Ai){let r,o=ce.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yl)return i.BYTE;if(n===Zl)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Wa)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===Ql)return i.ALPHA;if(n===jl)return i.RGB;if(n===Xn)return i.RGBA;if(n===Ys)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Ya)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===Kl)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===ja||n===Ka||n===tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ec||n===nc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_c||n===yc||n===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_c)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===bc||n===Sc||n===Ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ei({vertexShader:y1,fragmentShader:v1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new no(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bh=class extends Si{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,_=typeof XRWebGLBinding!="undefined",g=new Mh,p={},v=e.getContextAttributes(),y=null,x=null,M=[],T=[],C=new Dt,L=null,E=new fn;E.viewport=new Le;let b=new fn;b.viewport=new Le;let F=[E,b],z=new Pa,V=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=M[q];return Q===void 0&&(Q=new Qs,M[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=M[q];return Q===void 0&&(Q=new Qs,M[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=M[q];return Q===void 0&&(Q=new Qs,M[q]=Q),Q.getHandSpace()};function D(q){let Q=T.indexOf(q.inputSource);if(Q===-1)return;let J=M[Q];J!==void 0&&(J.update(q.inputSource,q.frame,c||o),J.dispatchEvent({type:q.type,data:q.inputSource}))}function S(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",S),s.removeEventListener("inputsourceschange",R);for(let q=0;q<M.length;q++){let Q=T[q];Q!==null&&(T[q]=null,M[q].disconnect(Q))}V=null,w=null,g.reset();for(let q in p)delete p[q];t.setRenderTarget(y),f=null,d=null,h=null,s=null,x=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",S),s.addEventListener("inputsourceschange",R),v.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,ot=null,dt=null;v.depth&&(dt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=v.stencil?ar:Ys,ot=v.stencil?or:Yi);let Ct={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ci(d.textureWidth,d.textureHeight,{format:Xn,type:ni,depthTexture:new qr(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let J={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ci(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function R(q){for(let Q=0;Q<q.removed.length;Q++){let J=q.removed[Q],ot=T.indexOf(J);ot>=0&&(T[ot]=null,M[ot].disconnect(J))}for(let Q=0;Q<q.added.length;Q++){let J=q.added[Q],ot=T.indexOf(J);if(ot===-1){for(let Ct=0;Ct<M.length;Ct++)if(Ct>=T.length){T.push(J),ot=Ct;break}else if(T[Ct]===null){T[Ct]=J,ot=Ct;break}if(ot===-1)break}let dt=M[ot];dt&&dt.connect(J)}}let I=new H,U=new H;function k(q,Q,J){I.setFromMatrixPosition(Q.matrixWorld),U.setFromMatrixPosition(J.matrixWorld);let ot=I.distanceTo(U),dt=Q.projectionMatrix.elements,Ct=J.projectionMatrix.elements,Ot=dt[14]/(dt[10]-1),B=dt[14]/(dt[10]+1),Jt=(dt[9]+1)/dt[5],It=(dt[9]-1)/dt[5],St=(dt[8]-1)/dt[0],yt=(Ct[8]+1)/Ct[0],xe=Ot*St,Mt=Ot*yt,Wt=ot/(-St+yt),Oe=Wt*-St;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Oe),q.translateZ(Wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),dt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ee=Ot+Wt,N=B+Wt,A=xe-Oe,Z=Mt+(ot-Oe),it=Jt*B/N*Ee,ct=It*B/N*Ee;q.projectionMatrix.makePerspective(A,Z,it,ct,Ee,N),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function W(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,J=q.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(J=g.depthFar)),z.near=b.near=E.near=Q,z.far=b.far=E.far=J,(V!==z.near||w!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,w=z.far),z.layers.mask=q.layers.mask|6,E.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;let ot=q.parent,dt=z.cameras;W(z,ot);for(let Ct=0;Ct<dt.length;Ct++)W(dt[Ct],ot);dt.length===2?k(z,E,b):z.projectionMatrix.copy(E.projectionMatrix),K(q,z,ot)};function K(q,Q,J){J===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(J.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=oa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(q){return p[q]};let at=null;function tt(q,Q){if(u=Q.getViewerPose(c||o),m=Q,u!==null){let J=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ot=!1;J.length!==z.cameras.length&&(z.cameras.length=0,ot=!0);for(let B=0;B<J.length;B++){let Jt=J[B],It=null;if(f!==null)It=f.getViewport(Jt);else{let yt=h.getViewSubImage(d,Jt);It=yt.viewport,B===0&&(t.setRenderTargetTextures(x,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(x))}let St=F[B];St===void 0&&(St=new fn,St.layers.enable(B),St.viewport=new Le,F[B]=St),St.matrix.fromArray(Jt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Jt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(It.x,It.y,It.width,It.height),B===0&&(z.matrix.copy(St.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ot===!0&&z.cameras.push(St)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let B=h.getDepthInformation(J[0]);B&&B.isValid&&B.texture&&g.init(B,s.renderState)}if(dt&&dt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let B=0;B<J.length;B++){let Jt=J[B].camera;if(Jt){let It=p[Jt];It||(It=new Yr,p[Jt]=It);let St=h.getCameraImage(Jt);It.sourceTexture=St}}}}for(let J=0;J<M.length;J++){let ot=T[J],dt=M[J];ot!==null&&dt!==void 0&&dt.update(ot,Q,c||o)}at&&at(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let et=new qf;et.setAnimationLoop(tt),this.setAnimationLoop=function(q){at=q},this.dispose=function(){}}},ys=new Kn,M1=new ye;function b1(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,sh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===_n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===_n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,ys.copy(x),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),g.envMapRotation.value.setFromMatrix4(M1.makeRotationFromEuler(ys)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=s[v.id];x===void 0&&(m(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",g));let M=y.program;n.updateUBOMapping(v,M);let T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){let y=h();v.__bindingPointIndex=y;let x=i.createBuffer(),M=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],x=v.uniforms,M=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,C=x.length;T<C;T++){let L=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,b=L.length;E<b;E++){let F=L[E];if(f(F,T,E,M)===!0){let z=F.__offset,V=Array.isArray(F.value)?F.value:[F.value],w=0;for(let D=0;D<V.length;D++){let S=V[D],R=_(S);typeof S=="number"||typeof S=="boolean"?(F.__data[0]=S,i.bufferSubData(i.UNIFORM_BUFFER,z+w,F.__data)):S.isMatrix3?(F.__data[0]=S.elements[0],F.__data[1]=S.elements[1],F.__data[2]=S.elements[2],F.__data[3]=0,F.__data[4]=S.elements[3],F.__data[5]=S.elements[4],F.__data[6]=S.elements[5],F.__data[7]=0,F.__data[8]=S.elements[6],F.__data[9]=S.elements[7],F.__data[10]=S.elements[8],F.__data[11]=0):(S.toArray(F.__data,w),w+=R.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,M){let T=v.value,C=y+"_"+x;if(M[C]===void 0)return typeof T=="number"||typeof T=="boolean"?M[C]=T:M[C]=T.clone(),!0;{let L=M[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return M[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function m(v){let y=v.uniforms,x=0,M=16;for(let C=0,L=y.length;C<L;C++){let E=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,F=E.length;b<F;b++){let z=E[b],V=Array.isArray(z.value)?z.value:[z.value];for(let w=0,D=V.length;w<D;w++){let S=V[w],R=_(S),I=x%M,U=I%R.boundary,k=I+U;x+=U,k!==0&&M-k<R.storage&&(x+=M-k),z.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=R.storage}}}let T=x%M;return T>0&&(x+=M-T),v.__size=x,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){let y=v.target;y.removeEventListener("dispose",g);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Cc=class{constructor(t={}){let{canvas:e=pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,M=!1;this._outputColorSpace=xn;let T=0,C=0,L=null,E=-1,b=null,F=new Le,z=new Le,V=null,w=new te(0),D=0,S=e.width,R=e.height,I=1,U=null,k=null,W=new Le(0,0,S,R),K=new Le(0,0,S,R),at=!1,tt=new js,et=!1,q=!1,Q=new ye,J=new H,ot=new Le,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Ot(){return L===null?I:1}let B=n;function Jt(P,X){return e.getContext(P,X)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),B===null){let X="webgl2";if(B=Jt(X,P),B===null)throw Jt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let It,St,yt,xe,Mt,Wt,Oe,Ee,N,A,Z,it,ct,nt,Nt,mt,Lt,Ft,ut,bt,qt,Ut,_t,Kt;function G(){It=new kg(B),It.init(),Ut=new _1(B,It),St=new Fg(B,It,t,Ut),yt=new g1(B,It),St.reversedDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),xe=new Wg(B),Mt=new i1,Wt=new x1(B,It,yt,Mt,St,Ut,xe),Oe=new Ng(x),Ee=new Hg(x),N=new $p(B),_t=new Dg(B,N),A=new Vg(B,N,xe,_t),Z=new qg(B,A,N,xe),ut=new Xg(B,St,Wt),mt=new Ug(Mt),it=new n1(x,Oe,Ee,It,St,_t,mt),ct=new b1(x,Mt),nt=new r1,Nt=new u1(It),Ft=new Pg(x,Oe,Ee,yt,Z,f,l),Lt=new p1(x,Z,St),Kt=new S1(B,xe,St,yt),bt=new Lg(B,It,xe),qt=new Gg(B,It,xe),xe.programs=it.programs,x.capabilities=St,x.extensions=It,x.properties=Mt,x.renderLists=nt,x.shadowMap=Lt,x.state=yt,x.info=xe}G();let ft=new bh(x,B);this.xr=ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let P=It.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=It.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(P){P!==void 0&&(I=P,this.setSize(S,R,!1))},this.getSize=function(P){return P.set(S,R)},this.setSize=function(P,X,$=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=P,R=X,e.width=Math.floor(P*I),e.height=Math.floor(X*I),$===!0&&(e.style.width=P+"px",e.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(S*I,R*I).floor()},this.setDrawingBufferSize=function(P,X,$){S=P,R=X,I=$,e.width=Math.floor(P*$),e.height=Math.floor(X*$),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(F)},this.getViewport=function(P){return P.copy(W)},this.setViewport=function(P,X,$,j){P.isVector4?W.set(P.x,P.y,P.z,P.w):W.set(P,X,$,j),yt.viewport(F.copy(W).multiplyScalar(I).round())},this.getScissor=function(P){return P.copy(K)},this.setScissor=function(P,X,$,j){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,X,$,j),yt.scissor(z.copy(K).multiplyScalar(I).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(P){yt.setScissorTest(at=P)},this.setOpaqueSort=function(P){U=P},this.setTransparentSort=function(P){k=P},this.getClearColor=function(P){return P.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(P=!0,X=!0,$=!0){let j=0;if(P){let Y=!1;if(L!==null){let ht=L.texture.format;Y=ht===$a||ht===Ja||ht===Za}if(Y){let ht=L.texture.type,vt=ht===ni||ht===Yi||ht===sr||ht===or||ht===Xa||ht===qa,Rt=Ft.getClearColor(),Et=Ft.getClearAlpha(),Xt=Rt.r,Yt=Rt.g,zt=Rt.b;vt?(m[0]=Xt,m[1]=Yt,m[2]=zt,m[3]=Et,B.clearBufferuiv(B.COLOR,0,m)):(_[0]=Xt,_[1]=Yt,_[2]=zt,_[3]=Et,B.clearBufferiv(B.COLOR,0,_))}else j|=B.COLOR_BUFFER_BIT}X&&(j|=B.DEPTH_BUFFER_BIT),$&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Ft.dispose(),nt.dispose(),Nt.dispose(),Mt.dispose(),Oe.dispose(),Ee.dispose(),Z.dispose(),_t.dispose(),Kt.dispose(),it.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",ai),ft.removeEventListener("sessionend",Jh),ns.stop()};function gt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let P=xe.autoReset,X=Lt.enabled,$=Lt.autoUpdate,j=Lt.needsUpdate,Y=Lt.type;G(),xe.autoReset=P,Lt.enabled=X,Lt.autoUpdate=$,Lt.needsUpdate=j,Lt.type=Y}function lt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function rt(P){let X=P.target;X.removeEventListener("dispose",rt),Pt(X)}function Pt(P){Qt(P),Mt.remove(P)}function Qt(P){let X=Mt.get(P).programs;X!==void 0&&(X.forEach(function($){it.releaseProgram($)}),P.isShaderMaterial&&it.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,$,j,Y,ht){X===null&&(X=dt);let vt=Y.isMesh&&Y.matrixWorld.determinant()<0,Rt=Ld(P,X,$,j,Y);yt.setMaterial(j,vt);let Et=$.index,Xt=1;if(j.wireframe===!0){if(Et=A.getWireframeAttribute($),Et===void 0)return;Xt=2}let Yt=$.drawRange,zt=$.attributes.position,re=Yt.start*Xt,Me=(Yt.start+Yt.count)*Xt;ht!==null&&(re=Math.max(re,ht.start*Xt),Me=Math.min(Me,(ht.start+ht.count)*Xt)),Et!==null?(re=Math.max(re,0),Me=Math.min(Me,Et.count)):zt!=null&&(re=Math.max(re,0),Me=Math.min(Me,zt.count));let Fe=Me-re;if(Fe<0||Fe===1/0)return;_t.setup(Y,j,Rt,$,Et);let Re,be=bt;if(Et!==null&&(Re=N.get(Et),be=qt,be.setIndex(Re)),Y.isMesh)j.wireframe===!0?(yt.setLineWidth(j.wireframeLinewidth*Ot()),be.setMode(B.LINES)):be.setMode(B.TRIANGLES);else if(Y.isLine){let Vt=j.linewidth;Vt===void 0&&(Vt=1),yt.setLineWidth(Vt*Ot()),Y.isLineSegments?be.setMode(B.LINES):Y.isLineLoop?be.setMode(B.LINE_LOOP):be.setMode(B.LINE_STRIP)}else Y.isPoints?be.setMode(B.POINTS):Y.isSprite&&be.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))be.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Vt=Y._multiDrawStarts,Ie=Y._multiDrawCounts,he=Y._multiDrawCount,Pn=Et?N.get(Et).bytesPerElement:1,Ds=Mt.get(j).currentProgram.getUniforms();for(let Dn=0;Dn<he;Dn++)Ds.setValue(B,"_gl_DrawID",Dn),be.render(Vt[Dn]/Pn,Ie[Dn])}else if(Y.isInstancedMesh)be.renderInstances(re,Fe,Y.count);else if($.isInstancedBufferGeometry){let Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ie=Math.min($.instanceCount,Vt);be.renderInstances(re,Fe,Ie)}else be.render(re,Fe)};function we(P,X,$){P.transparent===!0&&P.side===wn&&P.forceSinglePass===!1?(P.side=_n,P.needsUpdate=!0,Po(P,X,$),P.side=bi,P.needsUpdate=!0,Po(P,X,$),P.side=wn):Po(P,X,$)}this.compile=function(P,X,$=null){$===null&&($=P),p=Nt.get($),p.init(X),y.push(p),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),P!==$&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();let j=new Set;return P.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ht=Y.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){let Rt=ht[vt];we(Rt,$,Y),j.add(Rt)}else we(ht,$,Y),j.add(ht)}),p=y.pop(),j},this.compileAsync=function(P,X,$=null){let j=this.compile(P,X,$);return new Promise(Y=>{function ht(){if(j.forEach(function(vt){Mt.get(vt).currentProgram.isReady()&&j.delete(vt)}),j.size===0){Y(P);return}setTimeout(ht,10)}It.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let pe=null;function mi(P){pe&&pe(P)}function ai(){ns.stop()}function Jh(){ns.start()}let ns=new qf;ns.setAnimationLoop(mi),typeof self!="undefined"&&ns.setContext(self),this.setAnimationLoop=function(P){pe=P,ft.setAnimationLoop(P),P===null?ns.stop():ns.start()},ft.addEventListener("sessionstart",ai),ft.addEventListener("sessionend",Jh),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(X),X=ft.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,X,L),p=Nt.get(P,y.length),p.init(X),y.push(p),Q.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),tt.setFromProjectionMatrix(Q,Qn,X.reversedDepth),q=this.localClippingEnabled,et=mt.init(this.clippingPlanes,q),g=nt.get(P,v.length),g.init(),v.push(g),ft.enabled===!0&&ft.isPresenting===!0){let ht=x.xr.getDepthSensingMesh();ht!==null&&jc(ht,X,-1/0,x.sortObjects)}jc(P,X,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(U,k),Ct=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ct&&Ft.addToRenderList(g,P),this.info.render.frame++,et===!0&&mt.beginShadows();let $=p.state.shadowsArray;Lt.render($,P,X),et===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,Y=g.transmissive;if(p.setupLights(),X.isArrayCamera){let ht=X.cameras;if(Y.length>0)for(let vt=0,Rt=ht.length;vt<Rt;vt++){let Et=ht[vt];Qh(j,Y,P,Et)}Ct&&Ft.render(P);for(let vt=0,Rt=ht.length;vt<Rt;vt++){let Et=ht[vt];$h(g,P,Et,Et.viewport)}}else Y.length>0&&Qh(j,Y,P,X),Ct&&Ft.render(P),$h(g,P,X);L!==null&&C===0&&(Wt.updateMultisampleRenderTarget(L),Wt.updateRenderTargetMipmap(L)),P.isScene===!0&&P.onAfterRender(x,P,X),_t.resetDefaultState(),E=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],et===!0&&mt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function jc(P,X,$,j){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||tt.intersectsSprite(P)){j&&ot.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Q);let vt=Z.update(P),Rt=P.material;Rt.visible&&g.push(P,vt,Rt,$,ot.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||tt.intersectsObject(P))){let vt=Z.update(P),Rt=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ot.copy(P.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),ot.copy(vt.boundingSphere.center)),ot.applyMatrix4(P.matrixWorld).applyMatrix4(Q)),Array.isArray(Rt)){let Et=vt.groups;for(let Xt=0,Yt=Et.length;Xt<Yt;Xt++){let zt=Et[Xt],re=Rt[zt.materialIndex];re&&re.visible&&g.push(P,vt,re,$,ot.z,zt)}}else Rt.visible&&g.push(P,vt,Rt,$,ot.z,null)}}let ht=P.children;for(let vt=0,Rt=ht.length;vt<Rt;vt++)jc(ht[vt],X,$,j)}function $h(P,X,$,j){let Y=P.opaque,ht=P.transmissive,vt=P.transparent;p.setupLightsView($),et===!0&&mt.setGlobalState(x.clippingPlanes,$),j&&yt.viewport(F.copy(j)),Y.length>0&&Io(Y,X,$),ht.length>0&&Io(ht,X,$),vt.length>0&&Io(vt,X,$),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Qh(P,X,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ci(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?rr:ni,minFilter:qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let ht=p.state.transmissionRenderTarget[j.id],vt=j.viewport||F;ht.setSize(vt.z*x.transmissionResolutionScale,vt.w*x.transmissionResolutionScale);let Rt=x.getRenderTarget(),Et=x.getActiveCubeFace(),Xt=x.getActiveMipmapLevel();x.setRenderTarget(ht),x.getClearColor(w),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),Ct&&Ft.render($);let Yt=x.toneMapping;x.toneMapping=Ti;let zt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),et===!0&&mt.setGlobalState(x.clippingPlanes,j),Io(P,$,j),Wt.updateMultisampleRenderTarget(ht),Wt.updateRenderTargetMipmap(ht),It.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Me=0,Fe=X.length;Me<Fe;Me++){let Re=X[Me],be=Re.object,Vt=Re.geometry,Ie=Re.material,he=Re.group;if(Ie.side===wn&&be.layers.test(j.layers)){let Pn=Ie.side;Ie.side=_n,Ie.needsUpdate=!0,jh(be,$,j,Vt,Ie,he),Ie.side=Pn,Ie.needsUpdate=!0,re=!0}}re===!0&&(Wt.updateMultisampleRenderTarget(ht),Wt.updateRenderTargetMipmap(ht))}x.setRenderTarget(Rt,Et,Xt),x.setClearColor(w,D),zt!==void 0&&(j.viewport=zt),x.toneMapping=Yt}function Io(P,X,$){let j=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,ht=P.length;Y<ht;Y++){let vt=P[Y],Rt=vt.object,Et=vt.geometry,Xt=vt.group,Yt=vt.material;Yt.allowOverride===!0&&j!==null&&(Yt=j),Rt.layers.test($.layers)&&jh(Rt,X,$,Et,Yt,Xt)}}function jh(P,X,$,j,Y,ht){P.onBeforeRender(x,X,$,j,Y,ht),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(x,X,$,j,P,ht),Y.transparent===!0&&Y.side===wn&&Y.forceSinglePass===!1?(Y.side=_n,Y.needsUpdate=!0,x.renderBufferDirect($,X,j,Y,P,ht),Y.side=bi,Y.needsUpdate=!0,x.renderBufferDirect($,X,j,Y,P,ht),Y.side=wn):x.renderBufferDirect($,X,j,Y,P,ht),P.onAfterRender(x,X,$,j,Y,ht)}function Po(P,X,$){X.isScene!==!0&&(X=dt);let j=Mt.get(P),Y=p.state.lights,ht=p.state.shadowsArray,vt=Y.state.version,Rt=it.getParameters(P,Y.state,ht,X,$),Et=it.getProgramCacheKey(Rt),Xt=j.programs;j.environment=P.isMeshStandardMaterial?X.environment:null,j.fog=X.fog,j.envMap=(P.isMeshStandardMaterial?Ee:Oe).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,Xt===void 0&&(P.addEventListener("dispose",rt),Xt=new Map,j.programs=Xt);let Yt=Xt.get(Et);if(Yt!==void 0){if(j.currentProgram===Yt&&j.lightsStateVersion===vt)return tu(P,Rt),Yt}else Rt.uniforms=it.getUniforms(P),P.onBeforeCompile(Rt,x),Yt=it.acquireProgram(Rt,Et),Xt.set(Et,Yt),j.uniforms=Rt.uniforms;let zt=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(zt.clippingPlanes=mt.uniform),tu(P,Rt),j.needsLights=Ud(P),j.lightsStateVersion=vt,j.needsLights&&(zt.ambientLightColor.value=Y.state.ambient,zt.lightProbe.value=Y.state.probe,zt.directionalLights.value=Y.state.directional,zt.directionalLightShadows.value=Y.state.directionalShadow,zt.spotLights.value=Y.state.spot,zt.spotLightShadows.value=Y.state.spotShadow,zt.rectAreaLights.value=Y.state.rectArea,zt.ltc_1.value=Y.state.rectAreaLTC1,zt.ltc_2.value=Y.state.rectAreaLTC2,zt.pointLights.value=Y.state.point,zt.pointLightShadows.value=Y.state.pointShadow,zt.hemisphereLights.value=Y.state.hemi,zt.directionalShadowMap.value=Y.state.directionalShadowMap,zt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,zt.spotShadowMap.value=Y.state.spotShadowMap,zt.spotLightMatrix.value=Y.state.spotLightMatrix,zt.spotLightMap.value=Y.state.spotLightMap,zt.pointShadowMap.value=Y.state.pointShadowMap,zt.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.currentProgram=Yt,j.uniformsList=null,Yt}function Kh(P){if(P.uniformsList===null){let X=P.currentProgram.getUniforms();P.uniformsList=hr.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function tu(P,X){let $=Mt.get(P);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function Ld(P,X,$,j,Y){X.isScene!==!0&&(X=dt),Wt.resetTextureUnits();let ht=X.fog,vt=j.isMeshStandardMaterial?X.environment:null,Rt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:us,Et=(j.isMeshStandardMaterial?Ee:Oe).get(j.envMap||vt),Xt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Yt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),zt=!!$.morphAttributes.position,re=!!$.morphAttributes.normal,Me=!!$.morphAttributes.color,Fe=Ti;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Fe=x.toneMapping);let Re=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,be=Re!==void 0?Re.length:0,Vt=Mt.get(j),Ie=p.state.lights;if(et===!0&&(q===!0||P!==b)){let gn=P===b&&j.id===E;mt.setState(j,P,gn)}let he=!1;j.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ie.state.version||Vt.outputColorSpace!==Rt||Y.isBatchedMesh&&Vt.batching===!1||!Y.isBatchedMesh&&Vt.batching===!0||Y.isBatchedMesh&&Vt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Vt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Vt.instancing===!1||!Y.isInstancedMesh&&Vt.instancing===!0||Y.isSkinnedMesh&&Vt.skinning===!1||!Y.isSkinnedMesh&&Vt.skinning===!0||Y.isInstancedMesh&&Vt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Vt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Vt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Vt.instancingMorph===!1&&Y.morphTexture!==null||Vt.envMap!==Et||j.fog===!0&&Vt.fog!==ht||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==mt.numPlanes||Vt.numIntersection!==mt.numIntersection)||Vt.vertexAlphas!==Xt||Vt.vertexTangents!==Yt||Vt.morphTargets!==zt||Vt.morphNormals!==re||Vt.morphColors!==Me||Vt.toneMapping!==Fe||Vt.morphTargetsCount!==be)&&(he=!0):(he=!0,Vt.__version=j.version);let Pn=Vt.currentProgram;he===!0&&(Pn=Po(j,X,Y));let Ds=!1,Dn=!1,br=!1,Pe=Pn.getUniforms(),Hn=Vt.uniforms;if(yt.useProgram(Pn.program)&&(Ds=!0,Dn=!0,br=!0),j.id!==E&&(E=j.id,Dn=!0),Ds||b!==P){yt.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Pe.setValue(B,"projectionMatrix",P.projectionMatrix),Pe.setValue(B,"viewMatrix",P.matrixWorldInverse);let Mn=Pe.map.cameraPosition;Mn!==void 0&&Mn.setValue(B,J.setFromMatrixPosition(P.matrixWorld)),St.logarithmicDepthBuffer&&Pe.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Pe.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Dn=!0,br=!0)}if(Y.isSkinnedMesh){Pe.setOptional(B,Y,"bindMatrix"),Pe.setOptional(B,Y,"bindMatrixInverse");let gn=Y.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Pe.setValue(B,"boneTexture",gn.boneTexture,Wt))}Y.isBatchedMesh&&(Pe.setOptional(B,Y,"batchingTexture"),Pe.setValue(B,"batchingTexture",Y._matricesTexture,Wt),Pe.setOptional(B,Y,"batchingIdTexture"),Pe.setValue(B,"batchingIdTexture",Y._indirectTexture,Wt),Pe.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Pe.setValue(B,"batchingColorTexture",Y._colorsTexture,Wt));let kn=$.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&ut.update(Y,$,Pn),(Dn||Vt.receiveShadow!==Y.receiveShadow)&&(Vt.receiveShadow=Y.receiveShadow,Pe.setValue(B,"receiveShadow",Y.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Hn.envMap.value=Et,Hn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&X.environment!==null&&(Hn.envMapIntensity.value=X.environmentIntensity),Dn&&(Pe.setValue(B,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&Fd(Hn,br),ht&&j.fog===!0&&ct.refreshFogUniforms(Hn,ht),ct.refreshMaterialUniforms(Hn,j,I,R,p.state.transmissionRenderTarget[P.id]),hr.upload(B,Kh(Vt),Hn,Wt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(hr.upload(B,Kh(Vt),Hn,Wt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Pe.setValue(B,"center",Y.center),Pe.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Pe.setValue(B,"normalMatrix",Y.normalMatrix),Pe.setValue(B,"modelMatrix",Y.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let gn=j.uniformsGroups;for(let Mn=0,Kc=gn.length;Mn<Kc;Mn++){let is=gn[Mn];Kt.update(is,Pn),Kt.bind(is,Pn)}}return Pn}function Fd(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Ud(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,X,$){let j=Mt.get(P);j.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Mt.get(P.texture).__webglTexture=X,Mt.get(P.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,X){let $=Mt.get(P);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0};let Nd=B.createFramebuffer();this.setRenderTarget=function(P,X=0,$=0){L=P,T=X,C=$;let j=!0,Y=null,ht=!1,vt=!1;if(P){let Et=Mt.get(P);if(Et.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(Et.__webglFramebuffer===void 0)Wt.setupRenderTarget(P);else if(Et.__hasExternalTextures)Wt.rebindTextures(P,Mt.get(P.texture).__webglTexture,Mt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let zt=P.depthTexture;if(Et.__boundDepthTexture!==zt){if(zt!==null&&Mt.has(zt)&&(P.width!==zt.image.width||P.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(P)}}let Xt=P.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(vt=!0);let Yt=Mt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Yt[X])?Y=Yt[X][$]:Y=Yt[X],ht=!0):P.samples>0&&Wt.useMultisampledRTT(P)===!1?Y=Mt.get(P).__webglMultisampledFramebuffer:Array.isArray(Yt)?Y=Yt[$]:Y=Yt,F.copy(P.viewport),z.copy(P.scissor),V=P.scissorTest}else F.copy(W).multiplyScalar(I).floor(),z.copy(K).multiplyScalar(I).floor(),V=at;if($!==0&&(Y=Nd),yt.bindFramebuffer(B.FRAMEBUFFER,Y)&&j&&yt.drawBuffers(P,Y),yt.viewport(F),yt.scissor(z),yt.setScissorTest(V),ht){let Et=Mt.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Et.__webglTexture,$)}else if(vt){let Et=X;for(let Xt=0;Xt<P.textures.length;Xt++){let Yt=Mt.get(P.textures[Xt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Xt,Yt.__webglTexture,$,Et)}}else if(P!==null&&$!==0){let Et=Mt.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Et.__webglTexture,$)}E=-1},this.readRenderTargetPixels=function(P,X,$,j,Y,ht,vt,Rt=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Mt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){yt.bindFramebuffer(B.FRAMEBUFFER,Et);try{let Xt=P.textures[Rt],Yt=Xt.format,zt=Xt.type;if(!St.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-j&&$>=0&&$<=P.height-Y&&(P.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Rt),B.readPixels(X,$,j,Y,Ut.convert(Yt),Ut.convert(zt),ht))}finally{let Xt=L!==null?Mt.get(L).__webglFramebuffer:null;yt.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(P,X,$,j,Y,ht,vt,Rt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Mt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et)if(X>=0&&X<=P.width-j&&$>=0&&$<=P.height-Y){yt.bindFramebuffer(B.FRAMEBUFFER,Et);let Xt=P.textures[Rt],Yt=Xt.format,zt=Xt.type;if(!St.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,re),B.bufferData(B.PIXEL_PACK_BUFFER,ht.byteLength,B.STREAM_READ),P.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Rt),B.readPixels(X,$,j,Y,Ut.convert(Yt),Ut.convert(zt),0);let Me=L!==null?Mt.get(L).__webglFramebuffer:null;yt.bindFramebuffer(B.FRAMEBUFFER,Me);let Fe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await mf(B,Fe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,re),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ht),B.deleteBuffer(re),B.deleteSync(Fe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,X=null,$=0){let j=Math.pow(2,-$),Y=Math.floor(P.image.width*j),ht=Math.floor(P.image.height*j),vt=X!==null?X.x:0,Rt=X!==null?X.y:0;Wt.setTexture2D(P,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,vt,Rt,Y,ht),yt.unbindTexture()};let Od=B.createFramebuffer(),zd=B.createFramebuffer();this.copyTextureToTexture=function(P,X,$=null,j=null,Y=0,ht=null){ht===null&&(Y!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=Y,Y=0):ht=0);let vt,Rt,Et,Xt,Yt,zt,re,Me,Fe,Re=P.isCompressedTexture?P.mipmaps[ht]:P.image;if($!==null)vt=$.max.x-$.min.x,Rt=$.max.y-$.min.y,Et=$.isBox3?$.max.z-$.min.z:1,Xt=$.min.x,Yt=$.min.y,zt=$.isBox3?$.min.z:0;else{let kn=Math.pow(2,-Y);vt=Math.floor(Re.width*kn),Rt=Math.floor(Re.height*kn),P.isDataArrayTexture?Et=Re.depth:P.isData3DTexture?Et=Math.floor(Re.depth*kn):Et=1,Xt=0,Yt=0,zt=0}j!==null?(re=j.x,Me=j.y,Fe=j.z):(re=0,Me=0,Fe=0);let be=Ut.convert(X.format),Vt=Ut.convert(X.type),Ie;X.isData3DTexture?(Wt.setTexture3D(X,0),Ie=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Wt.setTexture2DArray(X,0),Ie=B.TEXTURE_2D_ARRAY):(Wt.setTexture2D(X,0),Ie=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);let he=B.getParameter(B.UNPACK_ROW_LENGTH),Pn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ds=B.getParameter(B.UNPACK_SKIP_PIXELS),Dn=B.getParameter(B.UNPACK_SKIP_ROWS),br=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Re.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Re.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Yt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,zt);let Pe=P.isDataArrayTexture||P.isData3DTexture,Hn=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){let kn=Mt.get(P),gn=Mt.get(X),Mn=Mt.get(kn.__renderTarget),Kc=Mt.get(gn.__renderTarget);yt.bindFramebuffer(B.READ_FRAMEBUFFER,Mn.__webglFramebuffer),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Kc.__webglFramebuffer);for(let is=0;is<Et;is++)Pe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Mt.get(P).__webglTexture,Y,zt+is),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Mt.get(X).__webglTexture,ht,Fe+is)),B.blitFramebuffer(Xt,Yt,vt,Rt,re,Me,vt,Rt,B.DEPTH_BUFFER_BIT,B.NEAREST);yt.bindFramebuffer(B.READ_FRAMEBUFFER,null),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||P.isRenderTargetTexture||Mt.has(P)){let kn=Mt.get(P),gn=Mt.get(X);yt.bindFramebuffer(B.READ_FRAMEBUFFER,Od),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,zd);for(let Mn=0;Mn<Et;Mn++)Pe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,kn.__webglTexture,Y,zt+Mn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,kn.__webglTexture,Y),Hn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,gn.__webglTexture,ht,Fe+Mn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gn.__webglTexture,ht),Y!==0?B.blitFramebuffer(Xt,Yt,vt,Rt,re,Me,vt,Rt,B.COLOR_BUFFER_BIT,B.NEAREST):Hn?B.copyTexSubImage3D(Ie,ht,re,Me,Fe+Mn,Xt,Yt,vt,Rt):B.copyTexSubImage2D(Ie,ht,re,Me,Xt,Yt,vt,Rt);yt.bindFramebuffer(B.READ_FRAMEBUFFER,null),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Hn?P.isDataTexture||P.isData3DTexture?B.texSubImage3D(Ie,ht,re,Me,Fe,vt,Rt,Et,be,Vt,Re.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Ie,ht,re,Me,Fe,vt,Rt,Et,be,Re.data):B.texSubImage3D(Ie,ht,re,Me,Fe,vt,Rt,Et,be,Vt,Re):P.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ht,re,Me,vt,Rt,be,Vt,Re.data):P.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ht,re,Me,Re.width,Re.height,be,Re.data):B.texSubImage2D(B.TEXTURE_2D,ht,re,Me,vt,Rt,be,Vt,Re);B.pixelStorei(B.UNPACK_ROW_LENGTH,he),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ds),B.pixelStorei(B.UNPACK_SKIP_ROWS,Dn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,br),ht===0&&X.generateMipmaps&&B.generateMipmap(Ie),yt.unbindTexture()},this.initRenderTarget=function(P){Mt.get(P).__webglFramebuffer===void 0&&Wt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Wt.setTextureCube(P,0):P.isData3DTexture?Wt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Wt.setTexture2DArray(P,0):Wt.setTexture2D(P,0),yt.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,yt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};function Qf(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,y=a.length;v<y;v++){let x=a[v],M=i.attributes[x];l[x]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let T=i.morphAttributes[x];T&&(c[x]||(c[x]=[]),T.forEach((C,L)=>{let E=new C.array.constructor(C.count*C.itemSize);c[x][L]=new C.constructor(E,C.itemSize,C.normalized)}))}let f=t*.5,m=Math.log10(1/t),_=Math.pow(10,m),g=f*_;for(let v=0;v<r;v++){let y=n?n.getX(v):v,x="";for(let M=0,T=a.length;M<T;M++){let C=a[M],L=i.getAttribute(C),E=L.itemSize;for(let b=0;b<E;b++)x+=`${~~(L[h[b]](y)*_+g)},`}if(x in e)u.push(e[x]);else{for(let M=0,T=a.length;M<T;M++){let C=a[M],L=i.getAttribute(C),E=i.morphAttributes[C],b=L.itemSize,F=l[C],z=c[C];for(let V=0;V<b;V++){let w=h[V],D=d[V];if(F[D](o,L[w](y)),E)for(let S=0,R=E.length;S<R;S++)z[S][D](o,E[S][w](y))}}e[x]=o,u.push(o),o++}}let p=i.clone();for(let v in i.attributes){let y=l[v];if(p.setAttribute(v,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),v in c)for(let x=0;x<c[v].length;x++){let M=c[v][x];p.morphAttributes[v][x]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(u),p}var Eh=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),jf=new Map;function E1(i){if(Array.isArray(i))return i;let t=jf.get(i);if(t)return t;let e=parseInt(i.slice(1),16);return t=[Eh((e>>16&255)/255),Eh((e>>8&255)/255),Eh((e&255)/255)],jf.set(i,t),t}var Ri=class{constructor(){this.L={}}buf(t){return this.L[t]||(this.L[t]={p:[],n:[],c:[]})}tri(t,e,n,s,r){let o=this.buf(t),a=E1(e),l=s[0]-n[0],c=s[1]-n[1],u=s[2]-n[2],h=r[0]-n[0],d=r[1]-n[1],f=r[2]-n[2],m=c*f-u*d,_=u*h-l*f,g=l*d-c*h,p=Math.hypot(m,_,g)||1;m/=p,_/=p,g/=p,o.p.push(n[0],n[1],n[2],s[0],s[1],s[2],r[0],r[1],r[2]),o.n.push(m,_,g,m,_,g,m,_,g),o.c.push(a[0],a[1],a[2],a[0],a[1],a[2],a[0],a[1],a[2])}quad(t,e,n,s,r,o){this.tri(t,e,n,s,r),this.tri(t,e,n,r,o)}face(t,e,n,s){let[r,o,a]=n,l=[(o[1]-r[1])*(a[2]-r[2])-(o[2]-r[2])*(a[1]-r[1]),(o[2]-r[2])*(a[0]-r[0])-(o[0]-r[0])*(a[2]-r[2]),(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0])],c=l[0]*s[0]+l[1]*s[1]+l[2]*s[2]<0?[...n].reverse():n;c.length===3?this.tri(t,e,c[0],c[1],c[2]):this.quad(t,e,c[0],c[1],c[2],c[3])}box(t,e,n,s,r,o,a,l,c=""){if(n>o&&([n,o]=[o,n]),s>a&&([s,a]=[a,s]),r>l&&([r,l]=[l,r]),o-n<1e-4||a-s<1e-4||l-r<1e-4)return;let u=(h,d,f)=>[h,d,f];c.includes("t")||this.quad(t,e,u(n,a,l),u(o,a,l),u(o,a,r),u(n,a,r)),c.includes("b")||this.quad(t,e,u(n,s,r),u(o,s,r),u(o,s,l),u(n,s,l)),this.quad(t,e,u(n,s,l),u(o,s,l),u(o,a,l),u(n,a,l)),this.quad(t,e,u(o,s,r),u(n,s,r),u(n,a,r),u(o,a,r)),this.quad(t,e,u(o,s,l),u(o,s,r),u(o,a,r),u(o,a,l)),this.quad(t,e,u(n,s,r),u(n,s,l),u(n,a,l),u(n,a,r))}obox(t,e,n,s,r,o){let a=(c,u,h)=>[n[0]+c*s[0]+u*r[0]+h*o[0],n[1]+c*s[1]+u*r[1]+h*o[1],n[2]+c*s[2]+u*r[2]+h*o[2]],l=(c,u,h,d)=>this.quad(t,e,c,u,h,d);l(a(-1,1,1),a(1,1,1),a(1,1,-1),a(-1,1,-1)),l(a(-1,-1,-1),a(1,-1,-1),a(1,-1,1),a(-1,-1,1)),l(a(-1,-1,1),a(1,-1,1),a(1,1,1),a(-1,1,1)),l(a(1,-1,-1),a(-1,-1,-1),a(-1,1,-1),a(1,1,-1)),l(a(1,-1,1),a(1,-1,-1),a(1,1,-1),a(1,1,1)),l(a(-1,-1,-1),a(-1,-1,1),a(-1,1,1),a(-1,1,-1))}ybox(t,e,n,s,r,o,a,l,c=0){let u=Math.cos(c),h=Math.sin(c);this.obox(t,e,[n,s,r],[u*o/2,0,h*o/2],[0,a/2,0],[-h*l/2,0,u*l/2])}beam(t,e,n,s,r,o=r){let a=[s[0]-n[0],s[1]-n[1],s[2]-n[2]],l=Math.hypot(...a)||1,c=a.map(m=>m/l),u=Math.abs(c[1])<.95?[c[2],0,-c[0]]:[1,0,0],h=Math.hypot(...u);u=u.map(m=>m/h);let d=[c[1]*u[2]-c[2]*u[1],c[2]*u[0]-c[0]*u[2],c[0]*u[1]-c[1]*u[0]],f=[(n[0]+s[0])/2,(n[1]+s[1])/2,(n[2]+s[2])/2];this.obox(t,e,f,u.map(m=>m*r/2),d.map(m=>m*o/2),c.map(m=>m*l/2))}tube(t,e,n,s,r,o=10){let a=[s[0]-n[0],s[1]-n[1],s[2]-n[2]],l=Math.hypot(...a)||1,c=a.map(m=>m/l),u=Math.abs(c[1])<.9?[c[2],0,-c[0]]:[1,0,0],h=Math.hypot(...u);u=u.map(m=>m/h);let d=[c[1]*u[2]-c[2]*u[1],c[2]*u[0]-c[0]*u[2],c[0]*u[1]-c[1]*u[0]],f=(m,_)=>{let g=_/o*Math.PI*2,p=Math.cos(g)*r,v=Math.sin(g)*r;return[m[0]+u[0]*p+d[0]*v,m[1]+u[1]*p+d[1]*v,m[2]+u[2]*p+d[2]*v]};for(let m=0;m<o;m++){let _=f(n,m),g=f(n,m+1),p=f(s,m),v=f(s,m+1),y=[(_[0]+g[0])/2-n[0],(_[1]+g[1])/2-n[1],(_[2]+g[2])/2-n[2]];this.face(t,e,[_,g,v,p],y),this.face(t,e,[n,_,g],c.map(x=>-x)),this.face(t,e,[s,p,v],c)}}prism(t,e,n,s,r,o={}){var d,f;let a=n.length,l=0;for(let m=0;m<a;m++){let _=n[m],g=n[(m+1)%a];l+=_[0]*g[1]-g[0]*_[1]}let c=l>0?n:[...n].reverse(),u=(d=o.top)!=null?d:e,h=(f=o.side)!=null?f:e;if(o.top!==!1)for(let m=1;m<a-1;m++)this.tri(t,u,[c[0][0],r,c[0][1]],[c[m+1][0],r,c[m+1][1]],[c[m][0],r,c[m][1]]);if(o.bottom!==!1)for(let m=1;m<a-1;m++)this.tri(t,h,[c[0][0],s,c[0][1]],[c[m][0],s,c[m][1]],[c[m+1][0],s,c[m+1][1]]);if(o.sides!==!1)for(let m=0;m<a;m++){let _=c[m],g=c[(m+1)%a];this.quad(t,h,[g[0],s,g[1]],[_[0],s,_[1]],[_[0],r,_[1]],[g[0],r,g[1]])}}cyl(t,e,n,s,r,o,a,l=8,c=Math.PI/8,u={}){let h=[];for(let d=0;d<l;d++){let f=c+d*Math.PI*2/l;h.push([n+Math.cos(f)*a,s+Math.sin(f)*a])}this.prism(t,e,h,r,o,u)}frustum(t,e,n,s,r,o,a,l,c=8,u=Math.PI/8){for(let h=0;h<c;h++){let d=u+h*Math.PI*2/c,f=u+(h+1)*Math.PI*2/c,m=[n+Math.cos(d)*a,r,s+Math.sin(d)*a],_=[n+Math.cos(f)*a,r,s+Math.sin(f)*a],g=[n+Math.cos(d)*l,o,s+Math.sin(d)*l],p=[n+Math.cos(f)*l,o,s+Math.sin(f)*l];this.quad(t,e,m,g,p,_),l>.001&&this.tri(t,e,[n,o,s],p,g),this.tri(t,e,[n,r,s],m,_)}}wall(t,e,n,s,r,o,a,l=[],c={}){let u=s[0]-n[0],h=s[1]-n[1],d=Math.hypot(u,h);if(d<.001)return null;let f=u/d,m=h/d,_=-m,g=f,p=o-r,v=(C,L,E=0)=>[n[0]+f*C+_*E,r+L,n[1]+m*C+g*E],y=new Set([0,d]),x=l.map(C=>{var L,E;return{s0:Math.max(0,C.a),s1:Math.min(d,C.a+C.w),y0:(L=C.y0)!=null?L:0,y1:Math.min(p,(E=C.y1)!=null?E:p)}}).filter(C=>C.s1>C.s0+.001);for(let C of x)y.add(C.s0),y.add(C.s1);let M=[...y].sort((C,L)=>C-L),T=Math.atan2(m,f);for(let C=0;C<M.length-1;C++){let L=M[C],E=M[C+1];if(E-L<.001)continue;let b=(L+E)/2,F=x.filter(w=>w.s0<=b&&w.s1>=b).sort((w,D)=>w.y0-D.y0),z=0,V=[];for(let w of F)w.y0>z+.001&&V.push([z,w.y0]),z=Math.max(z,w.y1);z<p-.001&&V.push([z,p]);for(let[w,D]of V){let S=v(b,(w+D)/2);this.ybox(t,e,S[0],S[1],S[2],E-L,D-w,a,T)}}return{at:v,L:d,ux:f,uz:m,nx:_,nz:g,yaw:T}}rail(t,e,n,s,r=1.05,o=.5,a={}){var u,h;let l=(u=a.w)!=null?u:.07,c=(h=a.top)!=null?h:.12;for(let d=0;d<n.length-1;d++){let f=n[d],m=n[d+1],_=Math.hypot(m[0]-f[0],m[1]-f[1]);if(_<.05)continue;this.beam(t,e,[f[0],s+r,f[1]],[m[0],s+r,m[1]],c,.08),this.beam(t,e,[f[0],s+.12,f[1]],[m[0],s+.12,m[1]],l,l);let g=Math.max(1,Math.round(_/o));for(let p=0;p<=g;p++){if(p===0&&d>0)continue;let v=f[0]+(m[0]-f[0])*p/g,y=f[1]+(m[1]-f[1])*p/g,x=p===0||p===g;this.box(t,e,v-(x?.09:l/2),s,y-(x?.09:l/2),v+(x?.09:l/2),s+r,y+(x?.09:l/2))}}}stairs(t,e,n,s,r,o,a,l,c,u){let h=Math.cos(o),d=Math.sin(o);for(let f=0;f<a;f++){let m=c*(f+.5),_=n+h*m,g=s+d*m,p=r+l*(f+1);this.ybox(t,e,_,(r+p)/2,g,c,p-r,u,o)}}slab(t,e,n,s,r,o,a={}){var p,v;let l=y=>new Dt(y[0],y[1]),c=y=>{let x=0;for(let M=0;M<y.length;M++){let T=y[M],C=y[(M+1)%y.length];x+=T[0]*C[1]-C[0]*T[1]}return x},u=c(n)>0?n:[...n].reverse(),h=s.map(y=>c(y)>0?[...y].reverse():y),d=[...u,...h.flat()],f=eo.triangulateShape(u.map(l),h.map(y=>y.map(l))),m=(p=a.top)!=null?p:e,_=(v=a.side)!=null?v:e;for(let[y,x,M]of f){let T=d[y],C=d[x],L=d[M],E=(L[0]-T[0])*(C[1]-T[1])-(C[0]-T[0])*(L[1]-T[1]),[b,F]=E>0?[C,L]:[L,C];a.top!==!1&&this.tri(t,m,[T[0],o,T[1]],[b[0],o,b[1]],[F[0],o,F[1]]),a.bottom!==!1&&this.tri(t,_,[T[0],r,T[1]],[F[0],r,F[1]],[b[0],r,b[1]])}let g=y=>{for(let x=0;x<y.length;x++){let M=y[x],T=y[(x+1)%y.length];this.quad(t,_,[T[0],r,T[1]],[M[0],r,M[1]],[M[0],o,M[1]],[T[0],o,T[1]])}};if(a.sides!==!1){g(u);for(let y of h)g(y)}}plate(t,e,n,s=.3){let r=0;for(let l=0;l<4;l++){let c=n[l],u=n[(l+1)%4];r+=c[0]*u[2]-u[0]*c[2]}let o=r>0?[...n].reverse():n,a=o.map(l=>[l[0],l[1]-s,l[2]]);this.quad(t,e,o[0],o[1],o[2],o[3]),this.quad(t,e,a[3],a[2],a[1],a[0]);for(let l=0;l<4;l++){let c=(l+1)%4;this.quad(t,e,a[l],a[c],o[c],o[l])}}out(){let t={};for(let[e,n]of Object.entries(this.L))t[e]={p:new Float32Array(n.p),n:new Float32Array(n.n),c:new Float32Array(n.c)};return t}};var Tn={x0:8,x1:44,z0:-28,z1:-8,eave:10.5,ridge:14.2,t:.5},Te={y:7,x0:8.25,x1:10.1,z0:-27.75,z1:-26.1},mn={z:-23.6,w:2,y0:7,y1:9},Ss={x:10.3,zs:[-24.4,-23.5,-22.6]},Be={x:8.75,y:6.55,r:.4,z0:-26.6,z1:-22.6},$t={x:26,z:-18,r:3.4,h:6.1,top:7},Zi={x:12.4,z:-26,r:1.2,h:3.7},On={y:6.55,r:.45,zN:-26.9,xW:12.4},kt={x0:8.52,x1:13.3,z0:-20.2,z1:-14.4,y:2.8,lx:10.12,sw:1.6},ue={x:17.6,z:-12.8,y:7.4,r:1.55},qn={x:32.6,z:-13.6,y:7.4,r:1.55},en={x0:36,x1:43.75,z0:-27.75,z1:-8.25,y:4},We={x:37.2,y:6.95,r:.4},Ji={x0:40.2,x1:43.75,z0:-21.5,z1:-14.5},Ci={w:1.6,xN0:14.2,xS0:16.2},Je={x:28.4,z0:-26.15,z1:-20.55},zn={x0:34.5,x1:35.9,z0:-10.9,z1:-16.3},Ae={x0:17,x1:22.4,h:3.6},Xe={x0:39.6,x1:42.4,h:2.6},fr={x0:34,x1:43.75,z0:-34.6,z1:-28,roof:8.4},$e={x0:36.4,x1:41.6,z0:-32.6,z1:-29.2},An={z:-31.6,w:1.8},He={x0:4,x1:52,z0:-8,z1:12},nn={x:4,z0:-5,z1:5,h:6.2},Kf={x0:39.6,x1:42.4,z0:-8,z1:1},Es={x0:36,x1:46,z0:1,z1:11,eave:8.3},ve={x:47.3,z0:9.6,z1:2.4},Qe={x:52},td={x0:48.6,x1:51.6,z0:-6.6,z1:-3.6,top:8},yo={x0:54,x1:72,z0:-16,z1:0,h:5.4},yn={z0:-6.6,z1:-3.6},Ii={z:-10.6,w:1.6,y0:1.1,y1:2.5},ws={z0:-11.5,z1:-6.5},wh={x:64,z:-8.6},vn={x0:3.5,x1:8,z0:-30,z1:-8,steps:10},Th={x0:-12,x1:3.5,z0:-18.3,z1:-8,zm:-14.4},ed={x0:-4.5,x1:3.5,z0:-25.2,z1:-18.3,cx:.6,cz:-21.4},nd={x0:-4.5,x1:3,z0:-28.3,z1:-25.2},Ah={x0:-12,x1:-4.5,z0:-28.3,z1:-21.4},id={x0:5.6,x1:8,z0:-28.3,z1:-25.7},ln={x0:3.5,x1:8,z:-30},Gt={x0:-12,x1:8,z0:-40,z1:-30},Zt={x0:8,x1:34,z0:-35,z1:-28},sn={x0:-12,x1:-10.6,zLand:-31.4,zBot:-38.6},Ue={z0:34,z1:42},Ts={x0:9.6,x1:14.4,z0:12.4,z1:34},vo={z:12.2,h:3.4},sd={x:12,w:3.2},Se={z0:13.2,z1:15.4,xTop:5.4,xBot:-2.2},rn={x0:-5,x1:-2.8,zTop:13.2,zBot:5.6},ge={x0:-28,x1:4,z0:-8,z1:5.6},rd=[[-31.5,32.2,8],[-38,25.5,7.4],[-39,17.5,6],[-32,11,4],[-22.5,7.2,2.2],[-15,4.2,.8],[-9,1.8,0]],Rh=6.4,As={x0:-58,x1:90,z0:-52,z1:50,base:-3.8-4};var st={pave:"#D8D1C3",paveL:"#CFC7B8",road:"#B4AFA6",roadL:"#E6E2DA",curb:"#C2BBAF",yard:"#D0C8B9",yardL:"#C6BDAD",ter:"#D4CCBC",quay:"#C7BFAF",quayL:"#BBB2A1",stone:"#BCB3A3",stoneL:"#CBC2B2",cope:"#D2C9B9",water:"#9EB1B1",waterD:"#8FA3A4",soil:"#8F806C",soil2:"#A89A86",frame:"#4B4741",wall:["#F1EDE6","#ECE7DF","#EFEAE2","#E8E2D8","#E6E0D4"],plinth:"#D9D2C6",eave:"#CBC4B8",roof:["#BDB8AF","#C4BFB6","#B6B2AA","#C8C2B8"],ridge:"#A9A399",win:"#8E969A",chim:"#A08068",land1:"#E4DCCD",land2:"#DCD3C3",landR:"#9C8F7E",tower:"#C9B79C",copper:"#8FA39A",door:"#8C7258",woodD:"#7D6A56",rail:"#5E676A",steel:"#5F686C",cloth:["#C9A66B","#B78F7E","#9FAE9A","#D2C4A6"]},w1=i=>{let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296};var od=(i,t)=>{let e=i.length,n=0;for(let r=0;r<e;r++){let o=i[r],a=i[(r+1)%e];n+=o[0]*a[1]-a[0]*o[1]}let s=i.map((r,o)=>{let a=i[(o+1)%e],l=a[0]-r[0],c=a[1]-r[1],u=Math.hypot(l,c),h=Math.sign(n)*c/u,d=-Math.sign(n)*l/u;return[h,d,r[0]*h+r[1]*d+t]});return i.map((r,o)=>{let[a,l,c]=s[(o+e-1)%e],[u,h,d]=s[o],f=a*h-u*l;return[(c*h-d*l)/f,(a*d-u*c)/f]})};function Ch(i=1){let t=rd,e=[],n=(s,r,o,a,l)=>{let c=l*l,u=c*l;return .5*(2*r+(-s+o)*l+(2*s-5*r+4*o-a)*c+(-s+3*r-3*o+a)*u)};for(let s=0;s<t.length-1;s++){let r=t[Math.max(0,s-1)],o=t[s],a=t[s+1],l=t[Math.min(t.length-1,s+2)],c=Math.hypot(a[0]-o[0],a[1]-o[1]),u=Math.max(2,Math.round(c/i));for(let h=0;h<u;h++){let d=h/u;e.push([n(r[0],o[0],a[0],l[0],d),n(r[1],o[1],a[1],l[1],d),o[2]+(a[2]-o[2])*(d*d*(3-2*d)*.35+d*.65)])}}return e.push(t[t.length-1].slice()),e.map((s,r)=>{let o=e[Math.min(e.length-1,r+1)],a=e[Math.max(0,r-1)],l=o[0]-a[0],c=o[1]-a[1],u=Math.hypot(l,c)||1;return{x:s[0],z:s[1],y:s[2],nx:c/u,nz:-l/u}})}function T1(i){let t=Rh/2,e=ge.z1,n=i.map(m=>[m.x+m.nx*t,m.z+m.nz*t]),s=i.map(m=>[m.x-m.nx*t,m.z-m.nz*t]),r=m=>{for(let _=1;_<m.length;_++)if((m[_-1][1]-e)*(m[_][1]-e)<=0){let g=(e-m[_-1][1])/(m[_][1]-m[_-1][1]||1);return{i:_,p:[m[_-1][0]+(m[_][0]-m[_-1][0])*g,e]}}return null},o=r(n),a=r(s),l=o.p[0]<a.p[0]?{c:o,E:n}:{c:a,E:s},c=l.E===n?{c:a,E:s}:{c:o,E:n},u=[l.c.p,...l.E.slice(0,l.c.i).reverse(),...c.E.slice(0,c.c.i),c.c.p],h=As.x0,d=As.x1,f=As.z1;return[[d,f],[h,f],[h,e],...u,[rn.x0,e],[rn.x0,Se.z1],[Se.xTop,Se.z1],[Se.xTop,Se.z0],[rn.x1,Se.z0],[rn.x1,7],[He.x0,7],[He.x0,He.z1],[Qe.x,He.z1],[Qe.x,Zt.z0],[d,Zt.z0]]}function dr(i,t,e,n,s,r,o,a,l,c={}){var I,U,k,W,K,at,tt,et,q,Q,J;let u=a*((I=c.fh)!=null?I:3.3),h=o+.45+u,d=(U=c.wall)!=null?U:st.wall[Math.floor(l()*st.wall.length)],f=(k=c.roofC)!=null?k:st.roof[Math.floor(l()*st.roof.length)],m=(W=c.dir)!=null?W:s-e>=r-n?"x":"z";i.box(t,st.plinth,e,o,n,s,o+.45,r,"b"),i.box(t,d,e+.04,o+.45,n+.04,s-.04,h,r-.04,"b");let _=(K=c.ev)!=null?K:[.12,.12,.12,.12];if(i.box(t,st.eave,e-_[0],h-.22,n-_[2],s+_[1],h,r+_[3]),c.wins!==!1)for(let ot=0;ot<a;ot++){let dt=o+.45+ot*((at=c.fh)!=null?at:3.3)+1,Ct=dt+1.35;if(m==="x")for(let Ot of[n-.02,r+.02]){let B=Math.max(1,Math.floor((s-e)/2.6));for(let Jt=0;Jt<B;Jt++){let It=e+(Jt+.5)*(s-e)/B;c.winSkip&&c.winSkip(Ot<n?0:1,ot,It)||i.box(t,st.win,It-.55,dt,Math.min(Ot,Ot+(Ot<n+1?.04:-.04))-.02,It+.55,Ct,Math.max(Ot,Ot+(Ot<n+1?.04:-.04))+.02,"tb")}}else for(let Ot of[e-.02,s+.02]){let B=Math.max(1,Math.floor((r-n)/2.6));for(let Jt=0;Jt<B;Jt++){let It=n+(Jt+.5)*(r-n)/B;c.winSkip&&c.winSkip(Ot<e?0:1,ot,It)||i.box(t,st.win,Ot-.03,dt,It-.55,Ot+.03,Ct,It+.55,"tb")}}}if(c.flat)return i.box(t,st.plinth,e,h,n,s,h+.7,r),c.chim&&i.cyl(t,st.chim,e+(s-e)*.72,n+(r-n)*.5,h+.7,h+4.5,.4,8,0),h+.7;let g=(ot,dt,Ct)=>m==="x"?[ot,dt,Ct]:[Ct,dt,ot],p=m==="x"?e:n,v=m==="x"?s:r,y=m==="x"?n:e,x=m==="x"?r:s,M=.45,T=x-y,C=Math.min(4.2,T*((tt=c.pitch)!=null?tt:.26)),L=(y+x)/2,E=h+C,b=p-((q=(et=c.endOv0)!=null?et:c.endOv)!=null?q:M),F=v+((J=(Q=c.endOv1)!=null?Q:c.endOv)!=null?J:M),z=y-M,V=x+M,w=h-M*C/(T/2);i.plate(t,f,[g(b,w,z),g(F,w,z),g(F,E,L),g(b,E,L)],.2),i.plate(t,f,[g(F,w,V),g(b,w,V),g(b,E,L),g(F,E,L)],.2);let D=[g(p+.04,h,y+.04),g(p+.04,h,x-.04),g(p+.04,E-.1,L)],S=[g(v-.04,h,x-.04),g(v-.04,h,y+.04),g(v-.04,E-.1,L)];i.face(t,d,D,m==="x"?[-1,0,0]:[0,0,-1]),i.face(t,d,S,m==="x"?[1,0,0]:[0,0,1]);let R=m==="x"?[b-.02,E-.05,L-.14,F+.02,E+.14,L+.14]:[L-.14,E-.05,b-.02,L+.14,E+.14,F+.02];if(i.box(t,st.ridge,...R),c.chim){let ot=[e+(s-e)*.3,n+(r-n)*.3];i.box(t,st.chim,ot[0]-.35,h,ot[1]-.35,ot[0]+.35,E+1.4,ot[1]+.35)}return E}function Rn(i,t,e,n,s,r,o,a={}){var m,_,g,p,v,y,x;let l=(m=a.dir)!=null?m:n-t>=s-e?"x":"z",c=l==="x"?t:e,u=l==="x"?n:s,h=l==="x"?e:t,d=l==="x"?s:n,f=c;for(;f<u-3;){let M=((_=a.wmin)!=null?_:6.5)+o()*((g=a.wvar)!=null?g:6);u-(f+M)<5&&(M=u-f);let T=Math.max(1,((p=a.floors)!=null?p:3)+(o()<.35?1:0)-(o()<.2?1:0)),C=o()*((v=a.set)!=null?v:.8),L=h+(a.front===0?C:0),E=d-(a.front===1?C:0),b=l==="x"?[f,L,f+M-.25,E]:[L,f,E,f+M-.25];a.skip&&a.skip(b)||dr(i,"ctx",b[0],b[1],b[2],b[3],r,T,o,{flat:o()<((y=a.flat)!=null?y:.15),chim:o()<.45,dir:l==="x"?"x":"z",endOv:(x=a.endOv)!=null?x:.1}),f+=M}}function ad(i){let t=[],e=w1(31),n=As,s=Ch(1),r=T1(s);i.slab("ground",st.stone,r,[],n.base,8,{top:st.pave});let o=[[ge.x0,ge.z1],[ge.x0,ge.z0],[vn.x1,ge.z0],[Tn.x0,Tn.z0],[Zt.x1,Tn.z0],[Zt.x1,Zt.z0],[Qe.x,Zt.z0],[Qe.x,He.z1],[He.x0,He.z1],[He.x0,7],[rn.x1,7],[rn.x1,ge.z1]];i.slab("ground",st.stone,o,[],n.base,0,{top:st.yard});let a=[[n.x0,ge.z1],[n.x0,Gt.z0],[Gt.x0,Gt.z0],[Gt.x0,Gt.z1],[vn.x1,Gt.z1],[vn.x1,vn.z1-2.9],[vn.x0,vn.z1-2.9],[vn.x0,ge.z0],[ge.x0,ge.z0],[ge.x0,ge.z1]];i.slab("ground",st.stone,a,[],n.base,1.8,{top:st.ter});let l=[[Gt.x0,Gt.z1],[Gt.x0,Gt.z0],[Zt.x0,Gt.z0],[Zt.x0,Zt.z0],[Zt.x1,Zt.z0],[Zt.x1,Zt.z1],[Zt.x0,Zt.z1],[Zt.x0,Gt.z1]];i.slab("ground",st.stone,l,[],n.base,-2.2,{top:st.quay});let c=[[n.x0,Gt.z0],[n.x0,n.z0],[n.x1,n.z0],[n.x1,Zt.z0],[Zt.x0,Zt.z0],[Zt.x0,Gt.z0]];i.slab("ground",st.soil,c,[],n.base,-3.8,{top:st.water});let u=(f,m,_)=>{i.quad("base",st.soil,[f[0],n.base,f[1]],[m[0],n.base,m[1]],[m[0],_,m[1]],[f[0],_,f[1]])},h=.03;u([n.x0-h,n.z0],[n.x0-h,Gt.z0],-3.8),u([n.x0-h,Gt.z0],[n.x0-h,ge.z1],1.8),u([n.x0-h,ge.z1],[n.x0-h,n.z1],8),u([n.x0,n.z1+h],[n.x1,n.z1+h],8),u([n.x1+h,n.z1],[n.x1+h,Zt.z0],8),u([n.x1+h,Zt.z0],[n.x1+h,n.z0],-3.8),u([n.x1,n.z0-h],[n.x0,n.z0-h],-3.8),i.box("base",st.frame,n.x0-1.2,n.base-1.4,n.z0-1.2,n.x1+1.2,n.base,n.z1+1.2,"t");for(let f=He.x0+4;f<He.x1;f+=4)i.box("ground",st.yardL,f-.04,0,He.z0,f+.04,0+.012,He.z1,"b");for(let f=Zt.x0+3;f<Zt.x1;f+=3)i.box("ground",st.quayL,f-.04,-2.2,Zt.z0,f+.04,-2.2+.012,Zt.z1,"b");let d=(f,m,_,g,p)=>{let v=_-f>=g-m;i.box("ground",st.cope,f-(v?.02:0),p-.25,m-(v?0:.02),_+(v?.02:0),p+.12,g+(v?0:.02))};d(Zt.x0,Zt.z0-.2,Zt.x1,Zt.z0+.45,-2.2),d(Gt.x0,Gt.z0-.2,Zt.x0,Gt.z0+.45,-2.2),d(n.x0,Gt.z0-.2,Gt.x0,Gt.z0+.45,1.8),d(vn.x0-.02,ge.z0-.45,ge.x0,ge.z0+.02,1.8),d(ge.x0-.45,ge.z0,ge.x0+.02,ge.z1,1.8),d(Qe.x-.02,Zt.z0,Qe.x+.5,He.z1,8),d(n.x1-.5,Zt.z0-.2,Qe.x,Zt.z0+.5,8);for(let[f,m,_,g]of[[n.x0+1,Gt.x0,Gt.z0+.2,1.8],[Zt.x0+.5,Zt.x1-.2,Zt.z0+.2,-2.2]])i.box("ground",st.stoneL,f,g+.12,_-.12,m,g+.75,_+.12);i.box("ground",st.stoneL,Gt.x0+.2,-2.2+.12,Gt.z0+.08,Gt.x0+9,-2.2+.75,Gt.z0+.32),i.box("ground",st.stoneL,Gt.x0+12,-2.2+.12,Gt.z0+.08,Zt.x0,-2.2+.75,Gt.z0+.32);for(let f of[Gt.x0+9.6,Gt.x0+11.4])i.cyl("ground",st.woodD,f,Gt.z0+.7,-2.2,-2.2+.9,.18,8,0);i.ybox("ground","#8A7560",Gt.x0+10.5,-3.8+.25,Gt.z0-2.4,6.2,.7,2,.08),i.ybox("ground","#A08A70",Gt.x0+10.5,-3.8+.62,Gt.z0-2.4,5.2,.06,1.5,.08);{let m=(sn.zLand-sn.zBot)/15,_=(1.8- -2.2)/15,g=sn.x1;for(let p=0;p<15;p++)i.box("ground",st.stoneL,sn.x0,-2.2,sn.zBot+m*p,g,-2.2+_*(p+1),sn.zBot+m*(p+1));i.box("ground",st.stoneL,sn.x0,-2.2,sn.zLand,g,1.8,Gt.z1);for(let p=0;p<15;p++)i.box("ground",st.stone,g,-2.2,sn.zBot+m*p,g+.25,-2.2+_*(p+1)+.45,sn.zBot+m*(p+1));i.box("ground",st.stone,g,-2.2,sn.zLand,g+.25,1.8+.45,Gt.z1),i.beam("ground",st.rail,[g+.12,-2.2+_+1,sn.zBot+m*.5],[g+.12,1.8+1,sn.zLand],.07);for(let p of[0,5,10,15]){let v=sn.zBot+m*(p+.5),y=-2.2+_*(p+1)+.45;p<15&&i.box("ground",st.rail,g+.09,y,v-.03,g+.15,-2.2+_*(p+1)+1,v+.03)}}for(let f=Gt.z0+.4;f<sn.zLand-.2;f+=1.5)i.box("ground",st.rail,Gt.x0-.16,1.8,f-.04,Gt.x0-.08,1.8+1.05,f+.04);i.box("ground",st.rail,Gt.x0-.17,1.8+.95,Gt.z0+.4,Gt.x0-.07,1.8+1.05,sn.zLand-.2);{let f=vn.steps,m=2.9/f,_=1.8/f;for(let v=0;v<f;v++)i.box("ground",st.stoneL,vn.x0,0,ge.z0-m*(v+1),vn.x1,_*(v+1),ge.z0-m*v);let g=1.8,p=ln.z+.12;i.box("ground",st.rail,ln.x0,g+.95,p-.05,ln.x0+1.25,g+1.05,p+.05);for(let v of[ln.x0+.05,ln.x0+.65,ln.x0+1.25])i.box("ground",st.rail,v-.04,g,p-.04,v+.04,g+1.05,p+.04);i.box("ground",st.rail,ln.x1-1.05,g+.95,p-.05,ln.x1,g+1.05,p+.05);for(let v of[ln.x1-1.05,ln.x1-.45,ln.x1-.05])i.box("ground",st.rail,v-.04,g,p-.04,v+.04,g+1.05,p+.04);i.beam("ground",st.rail,[ln.x0+1.25,g+1,p],[ln.x0+2.1,g+.15,p-.5],.08),i.beam("ground",st.rail,[ln.x1-1.05,g+1,p],[ln.x1-1.6,g-.6,p-.55],.08);for(let[v,y]of[[sn.x1+.3,ln.x0]]){i.box("ground",st.rail,v,g+.95,p-.05,y,g+1.05,p+.05);for(let x=v;x<=y+.01;x+=1.5)i.box("ground",st.rail,x-.04,g,p-.04,x+.04,g+1.05,p+.04)}}{let f=vo.z,m=8,_=vo.h,g=sd.x,p=v=>v-He.x0;i.wall("ground",st.stoneL,[He.x0,f],[Qe.x,f],m,m+_,.45,[{a:p(g-1.1),w:2.2,y0:.95,y1:_},{a:p(g-1.7),w:3.3,y0:1.9,y1:_},{a:p(g-2.2),w:4.5,y0:2.7,y1:_}]),i.box("ground",st.cope,He.x0-.1,m+_,f-.32,g-2.4,m+_+.16,f+.32),i.box("ground",st.cope,g+2.5,m+_,f-.32,Qe.x,m+_+.16,f+.32);for(let v=He.x0+4;v<Qe.x-1;v+=6)Math.abs(v-g)>2.6&&i.box("ground",st.stone,v-.3,m,f-.4,v+.3,m+_+.1,f+.4);for(let[v,y,x,M]of[[g-.6,.95,.2,.34],[g+.3,.95,-.3,.3],[g-1.45,1.9,.4,.3],[g+1.35,1.9,.1,.36],[g-1.95,2.7,-.2,.3],[g+2,2.7,.3,.28]])i.ybox("ground",st.stone,v,m+y+M*.35,f+.02,M*1.4,M*.7,M,x);for(let[v,y,x,M,T]of[[10.6,11.2,.55,.3,0],[11.4,11.5,.7,-.2,0],[12.3,11.3,.6,.5,0],[13.1,11.55,.5,.1,0],[13.8,11.2,.45,-.4,0],[11,10.7,.4,.8,0],[12,10.6,.45,-.6,0],[12.9,10.8,.38,.2,0],[11.8,11.5,.45,.9,.55],[12.6,11.4,.4,-.3,.5],[11.2,11.3,.35,.4,.6]])i.ybox("ground",st.stone,v,T+x*.35,y,x*1.3,x*.7,x,M);for(let[v,y,x,M]of[[10.7,12.95,.32,.4],[13.3,12.85,.28,-.3],[13.75,13.35,.3,.7]])i.ybox("ground",st.stone,v,m+x*.35,y,x*1.3,x*.7,x,M)}{let m=(Se.xTop-Se.xBot)/27,_=4/27;for(let y=0;y<27;y++){let x=Se.xTop-m*(y+1);i.box("ground",st.stoneL,x,3,Se.z0,x+m,8-_*y,Se.z1)}i.box("ground",st.stoneL,rn.x0,n.base,Se.z0,Se.xBot,4,Se.z1),i.box("ground",st.stone,rn.x0,n.base,Se.z0,Se.xTop,3,Se.z1,"t");let g=27,p=(rn.zTop-rn.zBot)/g,v=4/g;for(let y=0;y<g;y++){let x=rn.zTop-p*(y+1);i.box("ground",st.stoneL,rn.x0,n.base,x,rn.x1,4-v*(y+1)+v,x+p)}i.beam("ground",st.rail,[Se.xTop-.2,8+.95,Se.z0+.2],[Se.xBot+.3,4+.95,Se.z0+.2],.07),i.beam("ground",st.rail,[rn.x1-.2,4+.95,rn.zTop-.3],[rn.x1-.2,0+.95,rn.zBot+.2],.07),i.box("ground",st.paveL,Se.xTop,8,Se.z0-.9,Ts.x0,8+.02,Se.z1,"b")}{let f=Rh/2;for(let m=0;m<s.length-1;m++){let _=s[m],g=s[m+1],p=(x,M)=>[x.x+x.nx*f*M,x.y+.04,x.z+x.nz*f*M];i.face("ground",st.road,[p(_,1),p(g,1),p(g,-1),p(_,-1)],[0,1,0]);let v=n.base,y=f-.01;if(i.face("ground",st.stone,[[_.x+_.nx*y,v,_.z+_.nz*y],[g.x+g.nx*y,v,g.z+g.nz*y],[g.x+g.nx*y,g.y,g.z+g.nz*y],[_.x+_.nx*y,_.y,_.z+_.nz*y]],[_.nx,0,_.nz]),i.face("ground",st.stone,[[g.x-g.nx*y,v,g.z-g.nz*y],[_.x-_.nx*y,v,_.z-_.nz*y],[_.x-_.nx*y,_.y,_.z-_.nz*y],[g.x-g.nx*y,g.y,g.z-g.nz*y]],[-_.nx,0,-_.nz]),m%4===0){let x=[(_.x+g.x)/2,(_.y+g.y)/2+.05,(_.z+g.z)/2];i.ybox("ground",st.roadL,x[0],x[1],x[2],.16,.02,1.1,Math.atan2(g.x-_.x,g.z-_.z)+Math.PI/2)}}for(let m=0;m<s.length-1;m+=1){let _=s[m],g=s[m+1];if(!(_.z<ge.z1+.5))for(let p of[1,-1]){let v=[_.x+_.nx*(f+.23)*p,_.z+_.nz*(f+.23)*p],y=[g.x+g.nx*(f+.23)*p,g.z+g.nz*(f+.23)*p];i.beam("ground",st.cope,[v[0],8+.1,v[1]],[y[0],8+.1,y[1]],.5,.3)}}}i.box("ground",st.road,n.x0,8,Ue.z0,n.x1,8+.03,Ue.z1,"b");for(let f=n.x0+3;f<n.x1-3;f+=7)i.box("ground",st.roadL,f,8+.03,(Ue.z0+Ue.z1)/2-.08,f+3,8+.045,(Ue.z0+Ue.z1)/2+.08,"b");for(let f of[Ue.z0-1.6,Ue.z1])i.box("ground",st.curb,n.x0,8,f,n.x1,8+.15,f+1.6,"b");i.box("ground",st.paveL,Ts.x0,8,Ts.z0,Ts.x1,8+.02,Ue.z0-1.6,"b"),i.box("ground",st.road,74,8,-30,81,8+.03,Ue.z0-1.6,"b"),i.box("ground",st.road,72,8,-12,74,8+.03,-6,"b");{let _=Ts.x0-.3,g=Se.z1+.6,p=Ue.z0-1.8;dr(i,"ctx",-1.2,g,_,p,8,3,e,{wall:st.land1,roofC:st.landR,dir:"z",pitch:.32});let v=_-2.6,y=g+2.6,x=8+.45+3*3.3;i.box("ctx",st.tower,v-2.4,8,y-2.4,v+2.4,x+6.5,y+2.4),i.box("ctx",st.eave,v-2.7,x+6.5,y-2.7,v+2.7,x+6.9,y+2.7);for(let[z,V]of[[1,0],[-1,0],[0,1],[0,-1]])i.box("ctx",st.win,v+z*2.42-(V?1:.05),x+3.4,y+V*2.42-(z?1:.05),v+z*2.42+(V?1:.05),x+5.6,y+V*2.42+(z?1:.05));i.cyl("ctx",st.copper,v,y,x+6.9,x+9.4,1.7,12,0),i.frustum("ctx",st.copper,v,y,x+9.4,x+12.6,1.9,.05,12,0);let M=Ts.x1+.3,T=27.5,C=vo.z+3.6,L=Ue.z0-1.8,E=8+.45+2*3.8;i.box("ctx",st.plinth,M,8,C,T,8+.45,L,"b"),i.box("ctx",st.land2,M+.04,8+.45,C+.04,T-.04,E,L-.04,"b"),i.box("ctx",st.eave,M-.2,E-.25,C-.2,T+.2,E+.1,L+.2);let b=(M+T)/2,F=(T-M)/2+.2;for(let z=0;z<12;z++){let V=Math.PI*z/12,w=Math.PI*(z+1)/12,D=k=>[b-Math.cos(k)*F,E+Math.sin(k)*F*.55],[S,R]=D(V),[I,U]=D(w);i.face("ctx",st.copper,[[S,R,L+.3],[I,U,L+.3],[I,U,C-.3],[S,R,C-.3]],[(S+I)/2-b,(R+U)/2-E,0]);for(let k of[C+.05,L-.05])i.face("ctx",st.land2,[[b,E,k],[S,R-.02,k],[I,U-.02,k]],[0,0,k<(C+L)/2?-1:1])}for(let z=0;z<3;z++){let V=C+3+z*4.2;i.box("ctx",st.win,M-.06,8+2.2,V,M+.02,E-1.6,V+2.2,"tb"),i.cyl("ctx",st.win,M-.02,V+1.1,E-1.62,E-1.6,1.1,10,0)}i.box("ctx",st.door,M-.08,8+.45,L-2.3,M+.02,8+3.4,L-.3,"tb")}{let f=8+.02;Rn(i,28.2,vo.z+1.2,Qe.x+21.6,21.6,f,e,{floors:3,dir:"x",front:0,wmin:7,wvar:5}),Rn(i,28.2,24.2,Qe.x+21.6,Ue.z0-1.9,f,e,{floors:3,dir:"x",front:1,wmin:7,wvar:5});let m=(_,g)=>s.some(p=>p.x>_[0]-g&&p.x<_[2]+g&&p.z>_[1]-g&&p.z<_[3]+g);Rn(i,-27,ge.z1+2.5,-17.6,Ue.z0-1.9,f,e,{floors:4,dir:"z",front:1,wmin:6,wvar:5,skip:_=>m(_,4.4)}),Rn(i,-15.6,ge.z1+2.5,-7,Ue.z0-1.9,f,e,{floors:3,dir:"z",front:0,wmin:6,wvar:5,skip:_=>m(_,4.4)}),Rn(i,-6.4,Se.z1+.8,-1.7,Ue.z0-1.9,f,e,{floors:3,dir:"z",wmin:5,wvar:3,endOv:.07}),Rn(i,n.x0+1,ge.z1+2,-46.5,Ue.z0-1.9,f,e,{floors:4,dir:"z",front:1,wmin:7,wvar:4,skip:_=>m(_,4.6)}),Rn(i,n.x0+1,Ue.z1+1.8,n.x1-1,n.z1-.6,f,e,{floors:3,dir:"x",front:0,wmin:7,wvar:7}),Rn(i,82.6,-33,n.x1-.8,Ue.z0-1.9,f,e,{floors:3,dir:"z",wmin:7,wvar:5}),Rn(i,Qe.x+1.4,3,72,9.6,f,e,{floors:2,dir:"x",wmin:6,wvar:4}),Rn(i,Qe.x+4,-33.4,72,-20.5,f,e,{floors:2,dir:"x",wmin:8,wvar:6,flat:.6})}{let m=1.8+.02,_=ed,g=nd,p=Ah,v=Th,y=(x,M,T,C)=>i.box("ctx",st.door,x,m+.45,M,T,m+2.6,C,"tb");dr(i,"ctx",v.x0,v.z0,v.x1,v.zm,m,2,e,{wall:st.wall[1],dir:"x",chim:!0,ev:[.12,.12,.12,-.02],winSkip:(x,M,T)=>x===0&&M===0&&Math.abs(T-1.95)<.6}),dr(i,"ctx",v.x0,v.zm,v.x1,v.z1,m,2,e,{wall:st.wall[3],dir:"x",ev:[.12,.12,-.02,.12],endOv:.4}),y(1.4,v.z0-.02,2.5,v.z0+.06);for(let x of[(v.z0+v.zm)/2,v.z1-2.3])y(v.x1-.06,x-.55,v.x1+.02,x+.55);dr(i,"ctx",p.x0,p.z0,p.x1,p.z1,m,2,e,{wall:st.wall[0],dir:"z",chim:!0}),dr(i,"ctx",g.x0,g.z0,g.x1,g.z1,m,1,e,{wall:st.wall[2],roofC:st.roof[1],dir:"x",endOv0:.06,winSkip:(x,M,T)=>x===1&&T>0}),y(p.x1-.06,-24.95,p.x1+.02,-23.85);for(let x of[-.9,1.6])y(x-.55,g.z1-.06,x+.55,g.z1+.02);{let x=_.cx-_.x0,M=_.z1-_.cz,T=Math.hypot(x,M),C=x/T,L=M/T,E=L,b=-C,F=Math.atan2(M,x),z=[[p.x0+.1,p.z1-.1],[_.x0-.1*x/M,_.cz-.1],[_.cx+.1*x/M,_.z1+.1],[p.x0+.1,_.z1+.1]],V=m+.45+3;i.prism("ctx",st.plinth,z,m,m+.45,{bottom:!1}),i.prism("ctx",st.wall[4],od(z,-.04),m+.45,V,{bottom:!1}),i.prism("ctx",st.eave,od(z,.12),V-.22,V),i.prism("ctx",st.plinth,z,V,V+.6,{bottom:!1}),i.box("ctx",st.chim,-8.85,V+.6,-20.25,-8.15,V+2.3,-19.55);let w=(_.x0+_.cx)/2-.02*E,D=(_.cz+_.z1)/2-.02*b;i.ybox("ctx",st.door,w,m+.45+1.075,D,1.1,2.15,.08,F),i.ybox("ctx",st.win,w-1.9*C,m+2.125,D-1.9*L,1.1,1.35,.08,F)}{let x=id,M=x.x1-.02,T=2.6;i.box("ctx",st.plinth,x.x0,m,x.z0,M,m+.3,x.z1,"b"),i.box("ctx",st.wall[2],x.x0+.04,m+.3,x.z0+.04,M,m+T,x.z1-.04,"b"),i.box("ctx",st.eave,x.x0-.2,m+T,x.z0-.2,M,m+T+.18,x.z1+.2),i.box("ctx",st.door,6.15,m+.3,x.z1-.06,7.15,m+2.25,x.z1+.02,"tb")}{let M=_.x0+.6,T=2.4;i.cyl("ctx",st.woodD,M,-24.5,m,m+2.3,.06,6,0),i.cyl("ctx",st.woodD,T,-24.5,m,m+2.3,.06,6,0),i.box("ctx",st.rail,M,m+2.2,-24.5-.015,T,m+2.23,-24.5+.015),[-3.4,-2.6,.25,1.05].forEach((L,E)=>i.box("ctx",st.cloth[E%4],L,m+1.35,-24.5-.02,L+.7,m+2.2,-24.5+.02));let C=_.x0+.75;for(let L of[-23.4,-22])i.cyl("ctx",st.woodD,C,L,m,m+1.75,.05,6,0);i.box("ctx",st.woodD,C-.03,m+1.66,-23.45,C+.03,m+1.72,-21.95),[-23.25,-22.55].forEach((L,E)=>i.box("ctx",st.cloth[(E+2)%4],C-.02,m+.95,L,C+.02,m+1.66,L+.55))}i.box("ctx",st.rail,v.x1,m+3.4,-14.02,Tn.x0,m+3.43,-13.98);for(let x=v.x1+.6,M=0;x<Tn.x0-.6;x+=1.1,M++)i.box("ctx",st.cloth[(M+1)%4],x,m+2.6,-14.03,x+.7,m+3.4,-13.97);Rn(i,n.x0+1,-38.6,Gt.x0-1.2,-31.6,m,e,{floors:2,dir:"x",wmin:6,wvar:4}),Rn(i,n.x0+1,-27,Ah.x0-1.6,-19.5,m,e,{floors:2,dir:"x",wmin:6,wvar:4}),Rn(i,n.x0+1,-15.4,Th.x0-1.6,-9,m,e,{floors:2,dir:"x",wmin:6,wvar:4}),Rn(i,n.x0+1,-5,ge.x0-1,3.6,m,e,{floors:2,dir:"x",wmin:6,wvar:5});for(let[x,M]of[[-20,-18],[-34,-17.2],[-48,-30],[-28,-30.6]])t.push([x,M,.95,1.8])}for(let[f,m,_]of[[-22,-4.6,1.05],[-13.5,-5.6,.95],[-1.2,-6,.9],[23,10.8,1.05],[36.6,10.3,.95],[6.6,9.4,.9]])t.push([f,m,_,0]);for(let f=n.x0+4;f<n.x1-2;f+=9)Math.abs(f-12)>4&&t.push([f,Ue.z1+1.1,.95,8]);for(let f=-26;f<Ue.z0-3;f+=8)t.push([82,f,.9,8]);return{trees:t,levels:[[r,8],[o,0],[a,1.8],[l,-2.2],[c,-3.8]]}}var O={brick:"#D3C3AA",brickD:"#C2B096",brickL:"#DDD0BA",pier:"#C6B59B",plinth:"#B9AE9C",floor:"#CFC8BA",floorD:"#C2BAAA",plaster:"#ECE5D8",plasterD:"#DED5C5",stone:"#D2C9B9",stoneD:"#BEB4A3",frame:"#5F5A52",wood:"#A58C70",woodD:"#7D6A56",door:"#8C7258",doorD:"#6E5A47",roof:"#8A8F8F",roofD:"#767B7B",roofL:"#9DA1A0",glass:"#7A8D93",steel:"#5F686C",steelD:"#4B5357",steelL:"#7A8387",deck:"#8A8E8C",deckD:"#727674",rail:"#59615F",pipe:"#808B88",pipeD:"#646E6C",pipeL:"#96A09D",copper:"#A27A57",brass:"#B08D57",tank:"#9A8770",tankD:"#857360",tankL:"#AC9A82",gauge:"#E2DACB",lamp:"#F3D9A4",hl:"#D9A441",hlD:"#B98A2E"},Cs={},Pc=(i,t)=>{let e=new Ri;return Cs[i]={g:t,k:e},e},cd=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]];function fi(i,t,e,n,s,r,o,a,l,c=[]){return i.wall(t,e,[s,n],[r,n],o,a,l,c.map(u=>({a:u.c-u.w/2-s,w:u.w,y0:u.y0,y1:u.y1})))}function Cn(i,t,e,n,s,r,o,a,l,c=[]){return s>r&&([s,r]=[r,s]),i.wall(t,e,[n,s],[n,r],o,a,l,c.map(u=>({a:u.c-u.w/2-s,w:u.w,y0:u.y0,y1:u.y1})))}function Ne(i,t,e,n,s,r,o,a,l,c,u={}){var _,g;let h=(_=u.frame)!=null?_:O.frame,d=.08,f=Math.min(l,.18),m=(p,v,y,x,M,T,C,L)=>e==="x"?i.box(C,L,p,y,M,v,x,T):i.box(C,L,M,y,p,T,x,v);if(u.open||m(s-r/2,s+r/2,o,a,n-.02,n+.02,t+":g",O.glass),m(s-r/2,s-r/2+d,o,a,n-f/2,n+f/2,t,h),m(s+r/2-d,s+r/2,o,a,n-f/2,n+f/2,t,h),m(s-r/2,s+r/2,a-d,a,n-f/2,n+f/2,t,h),m(s-r/2,s+r/2,o,o+d,n-f/2,n+f/2,t,h),!u.open&&u.grid){let p=Math.max(1,Math.round(r/.7)),v=Math.max(1,Math.round((a-o)/.8));for(let y=1;y<p;y++)m(s-r/2+y*r/p-.025,s-r/2+y*r/p+.025,o,a,n-.04,n+.04,t,h);for(let y=1;y<v;y++)m(s-r/2,s+r/2,o+y*(a-o)/v-.025,o+y*(a-o)/v+.025,n-.04,n+.04,t,h)}if(c&&u.sill!==!1){let p=n+c*l/2,v=n+c*(l/2+.14);m(s-r/2-.1,s+r/2+.1,o-.12,o,Math.min(p,v),Math.max(p,v),t,(g=u.sillC)!=null?g:O.stoneD)}if(u.open&&c){let p=n+c*(l/2+.55);m(s-r/2,s-r/2+.06,o+.05,a-.05,Math.min(n+c*l/2,p),Math.max(n+c*l/2,p),t,h)}}function pr(i,t,e,n,s,r,o,a,l,c=O.frame){let u=(d,f,m,_,g,p)=>e==="x"?i.box(t,c,d,m,g,f,_,p):i.box(t,c,g,m,d,p,_,f),h=l+.08;u(s-r/2-.1,s-r/2+.03,o,o+a,n-h/2,n+h/2),u(s+r/2-.03,s+r/2+.1,o,o+a,n-h/2,n+h/2),u(s-r/2-.1,s+r/2+.1,o+a-.03,o+a+.12,n-h/2,n+h/2)}function Dc(i,t,e,n,s,r,o,a,l,c=O.deck,u={}){var _,g;let h=Math.max(1,Math.round((r-s)/((_=u.rise)!=null?_:.2))),d=(r-s)/h,f=Math.cos(o),m=Math.sin(o);for(let p=0;p<h;p++){let v=a*(p+.5),y=e+f*v,x=n+m*v,M=s+d*(p+1);u.open?i.ybox(t,c,y,M-.03,x,a+.02,.06,l,o):i.ybox(t,c,y,(s+M)/2,x,a,M-s,l,o)}if(u.open)for(let p of[-1,1]){let v=-m*(l/2+.06)*p,y=f*(l/2+.06)*p;i.beam(t,(g=u.side)!=null?g:O.steelD,[e+v,s-.1,n+y],[e+f*a*h+v,r-.1,n+m*a*h+y],.1,.22)}if(u.rail)for(let p of u.rail){let v=-m*(l/2+.02)*p,y=f*(l/2+.02)*p;i.beam(t,O.rail,[e+v,s+.95,n+y],[e+f*a*h+v,r+.95,n+m*a*h+y],.06);for(let x=0;x<=h;x+=4)i.box(t,O.rail,e+f*a*x+v-.03,s+d*x,n+m*a*x+y-.03,e+f*a*x+v+.03,s+d*x+.95,n+m*a*x+y+.03)}return h}function mr(i,t,e,n,s,r,o,a={}){var l,c,u;i.box(t,(l=a.col)!=null?l:O.deck,e,o-.08,n,s,o,r),i.box(t,O.deckD,e,o-.26,n,s,o-.08,n+.12),i.box(t,O.deckD,e,o-.26,r-.12,s,o-.08,r),i.box(t,O.deckD,e,o-.26,n,e+.12,o-.08,r),i.box(t,O.deckD,s-.12,o-.26,n,s,o-.08,r);for(let h of a.rail||[]){let d=h==="n"?[[e,n],[s,n]]:h==="s"?[[e,r],[s,r]]:h==="w"?[[e,n],[e,r]]:[[s,n],[s,r]],f=(a.gaps||[]).filter(x=>x[0]===h).map(x=>[x[1],x[2]]).sort((x,M)=>x[0]-M[0]),m=h==="n"||h==="s"?0:1,_=d[0][m],g=d[1][m],p=d[0][1-m]+(h==="n"||h==="w"?.05:-.05),v=_,y=[];for(let[x,M]of f)x>v&&y.push([v,x]),v=Math.max(v,M);v<g&&y.push([v,g]);for(let[x,M]of y)M-x>.2&&i.rail(t,O.rail,m===0?[[x,p],[M,p]]:[[p,x],[p,M]],o,(c=a.rh)!=null?c:1,(u=a.sp)!=null?u:.9,{w:.05,top:.07})}}function $i(i,t,e,n,s=O.pipe,r={}){var o;for(let a=0;a<e.length-1;a++){let l=e[a],c=e[a+1];i.tube(t,s,l,c,n,12);let u=Math.hypot(c[0]-l[0],c[1]-l[1],c[2]-l[2]),h=(o=r.sp)!=null?o:3;for(let d=h;d<u-.5;d+=h){let f=d/u,m=[l[0]+(c[0]-l[0])*f,l[1]+(c[1]-l[1])*f,l[2]+(c[2]-l[2])*f],_=[l[0]+(c[0]-l[0])*(f+.06/u),l[1]+(c[1]-l[1])*(f+.06/u),l[2]+(c[2]-l[2])*(f+.06/u)];i.tube(t,O.pipeD,m,_,n*1.22,12)}}for(let a=1;a<e.length-1;a++){let l=e[a],c=e[a-1],u=Math.hypot(l[0]-c[0],l[1]-c[1],l[2]-c[2])||1,h=Math.min(1,n*1.15/u);i.tube(t,O.pipeD,[l[0]+(c[0]-l[0])*h,l[1]+(c[1]-l[1])*h,l[2]+(c[2]-l[2])*h],[l[0]-(c[0]-l[0])*h,l[1]-(c[1]-l[1])*h,l[2]-(c[2]-l[2])*h],n*1.12,12)}}function ld(i,t,e,n,s,r,o={}){var l;i.cyl(t,O.tankD,e,n,0,.35,s+.2,20,0),i.cyl(t,O.tank,e,n,.35,r,s,20,0);for(let c=1.2;c<r-.3;c+=(l=o.band)!=null?l:1.4)i.cyl(t,O.tankL,e,n,c,c+.14,s+.05,20,0);if(o.top!=null){i.frustum(t,O.tank,e,n,r,o.top-.1,s,s*.86,20,0),i.cyl(t,O.deck,e,n,o.top-.1,o.top,s*.86+.05,20,0),i.cyl(t,O.tankD,e,n,o.top,o.top+.35,.55,10,0);let c=s*.86-.05,u=o.gaps||[],h=d=>u.some(([f,m])=>Math.abs((d-f+Math.PI*3)%(Math.PI*2)-Math.PI)<m);for(let d=0;d<28;d++){let f=d/28*Math.PI*2,m=(d+1)/28*Math.PI*2,_=(f+m)/2;h(_)||(i.beam(t,O.rail,[e+Math.cos(f)*c,o.top+.95,n+Math.sin(f)*c],[e+Math.cos(m)*c,o.top+.95,n+Math.sin(m)*c],.06),d%2===0&&i.box(t,O.rail,e+Math.cos(f)*c-.03,o.top,n+Math.sin(f)*c-.03,e+Math.cos(f)*c+.03,o.top+.95,n+Math.sin(f)*c+.03))}}else i.frustum(t,O.tank,e,n,r,r+s*.45,s,s*.25,20,0);for(let c of o.gauges||[]){let u=e+Math.cos(c)*(s+.08),h=n+Math.sin(c)*(s+.08);i.cyl(t,O.gauge,u,h,1.9,2,.26,12,0),i.box(t,O.brass,u-.06,1.5,h-.06,u+.06,1.95,h+.06)}}function hd(i,t,e,n,s,r,o){let l=(c,u=1)=>[e+Math.cos(c/8*Math.PI*2)*r*u,n+Math.sin(c/8*Math.PI*2)*r*u];for(let c=0;c<8;c++){let u=l(c),h=l(c+1);i.beam(t,O.steelD,[u[0],s,u[1]],[h[0],s,h[1]],.42,.14)}for(let c=0;c<8;c++){let u=l(c,.9);i.beam(t,O.steelD,[u[0],s+.05,u[1]],[e,s+.9,n],.07);let h=l(c+.5,1.06);i.cyl(t+":e",O.lamp,h[0],h[1],s-.5,s-.1,.17,8,0),i.frustum(t,O.brass,h[0],h[1],s-.2,s-.07,.26,.1,8,0)}i.cyl(t,O.brass,e,n,s-.5,s+1.1,.2,8,0),i.cyl(t+":e",O.lamp,e,n,s-.9,s-.5,.3,10,0);for(let c=0;c<3;c++){let u=c/3*Math.PI*2+.3,h=.45;i.beam(t,O.steelD,[e+Math.cos(u)*r*h,s+.9*(1-h)+.05,n+Math.sin(u)*r*h],[e,o,n],.05)}}function Ih(i,t,e,n,s,r,o,a){let l=r+.08;for(let h of[-1,1]){let d=o==="x"?[e,n,s+h*l]:[e+h*l,n,s];i.beam(t,O.steelD,d,[d[0],a,d[2]],.06)}let c=o==="x"?[e,n-r-.05,s-l]:[e-l,n-r-.05,s],u=o==="x"?[e,n-r-.05,s+l]:[e+l,n-r-.05,s];i.beam(t,O.steelD,c,u,.06,.1)}function ud(i){let{x0:t,x1:e,z0:n,z1:s,eave:r,ridge:o,t:a}=Tn,l=t+a,c=e-a,u=n+a,h=s-a;i.box("H",O.plinth,t-.25,-2.2,n-.25,e+.25,.15,n+1.2),i.box("H",O.plinth,t-.25,-.6,n,e+.25,.15,s+.25),i.box("H",O.floor,l,.15,u,c,.17,h);for(let[w,D,S,R]of[[l+.3,-13.4,34,-13.2],[l+.3,-22.6,34,-22.4]])i.box("H",O.floorD,w,.17,D,S,.18,R);let d=[11,25.5,29.5,33.5],f=[11,14.5,25.5,29.5,33.5,37,40.9];fi(i,"Hs",O.brick,s-a/2,t,e,0,r,a,[{c:(Ae.x0+Ae.x1)/2,w:Ae.x1-Ae.x0,y0:0,y1:Ae.h},...d.map(w=>({c:w,w:2.2,y0:1.4,y1:3.4})),...f.map(w=>({c:w,w:2.4,y0:6.8,y1:9.4})),{c:(Xe.x0+Xe.x1)/2,w:Xe.x1-Xe.x0,y0:4-.15,y1:4+Xe.h}]);for(let w of d)Ne(i,"Hs","x",s-a/2,w,2.2,1.4,3.4,a,1,{grid:!0});for(let w of f)Ne(i,"Hs","x",s-a/2,w,2.4,6.8,9.4,a,1,{grid:!0});let m=[11.5,15.5,19.5,23.5,28.5,32.5];fi(i,"Hn",O.brick,n+a/2,t,e,0,r,a,[...m.map(w=>({c:w,w:2.4,y0:7.4,y1:9.6})),{c:39,w:4,y0:0,y1:3.2},{c:40.6,w:4,y0:4-.15,y1:4+2.6}]);for(let w of m)Ne(i,"Hn","x",n+a/2,w,2.4,7.4,9.6,a,-1,{grid:!0});pr(i,"Hn","x",n+a/2,39,4,0,3.2,a,O.steelD),pr(i,"Hn","x",n+a/2,40.6,4,4-.15,2.6,a,O.steelD),Cn(i,"Hw",O.brick,t+a/2,n,s,0,r,a,[{c:mn.z,w:mn.w,y0:mn.y0,y1:mn.y1},{c:-12,w:2,y0:2.2,y1:3.8}]),Ne(i,"Hw","z",t+a/2,mn.z,mn.w,mn.y0,mn.y1,a,-1,{open:!0,sillC:O.stone}),Ne(i,"Hw","z",t+a/2,-12,2,2.2,3.8,a,-1,{grid:!0}),Cn(i,"He",O.brick,e-a/2,n,s,0,r,a,[{c:-12,w:2,y0:6.6,y1:8.8}]),Ne(i,"He","z",e-a/2,-12,2,6.6,8.8,a,1,{grid:!0});for(let w of[t+a/2,e-a/2]){let D=(n+s)/2,S=w<26?-1:1,R=w+S*a/2,I=w<26?"Hw":"He";i.face(I,O.brick,[[R,r,n],[R,o-.2,D],[R,r,s]],[S,0,0]);let U=w-S*a/2;i.face(I,O.brickL,[[U,r,s],[U,o-.2,D],[U,r,n]],[-S,0,0])}let _={[s]:[[Ae.x0,Ae.x1],[Xe.x0,Xe.x1]],[n]:[[37,42.6]]};for(let w=t+3;w<e-1;w+=6)for(let D of[s,n]){let S=w,R=_[D].find(([I,U])=>w+.35>I-.05&&w-.35<U+.05);if(R)if(D===s&&R[0]===Ae.x0)S=Ae.x0-.5;else continue;i.box(D===s?"Hs":"Hn",O.pier,S-.35,.15,D-.2,S+.35,r,D+.2)}for(let w of[s,n])i.box(w===s?"Hs":"Hn",O.pier,t-.3,r-.45,w-.3,e+.3,r+.03,w+.3);i.box("Hs:p",O.doorD,Ae.x0+.1,.17,s+.05,(Ae.x0+Ae.x1)/2+.1,Ae.h-.05,s+.2),i.box("Hs:p",O.doorD,Ae.x1+.1,.17,s+.2,Ae.x1+2.8,Ae.h-.05,s+.35),i.box("Hs",O.steelD,Ae.x0-.4,Ae.h,s+.15,Ae.x1+3,Ae.h+.2,s+.4),pr(i,"Hs","x",s-a/2,(Ae.x0+Ae.x1)/2,Ae.x1-Ae.x0,.15,Ae.h-.15,a,O.steelD);{let w=(Xe.x0+Xe.x1)/2,D=Xe.x1-Xe.x0,S=4,R=h;i.box("Hi",O.hl,w-D/2-.45,S,R-.35,w-D/2-.05,S+Xe.h+.4,R),i.box("Hi",O.hl,w+D/2+.05,S,R-.35,w+D/2+.45,S+Xe.h+.4,R),i.box("Hi",O.hl,w-D/2-.6,S+Xe.h+.4,R-.45,w+D/2+.6,S+Xe.h+.8,R),i.box("Hi:e",O.lamp,w-.5,S+Xe.h+.1,R-.5,w+.5,S+Xe.h+.3,R-.3);for(let I of[-1,1])i.cyl("Hi:e",O.lamp,w+I*(D/2+.25),R-.5,S+Xe.h+.85,S+Xe.h+1.15,.16,8,0)}{let w=(n+s)/2,D=.5;i.plate("rH",O.roof,[[t-D,r-.2,s+D],[e+D,r-.2,s+D],[e+D,o,w],[t-D,o,w]],.25),i.plate("rH",O.roof,[[e+D,r-.2,n-D],[t-D,r-.2,n-D],[t-D,o,w],[e+D,o,w]],.25),i.box("rH",O.roofD,12,o-.3,w-2.2,40,o+1.2,w+2.2),i.box("rH:g",O.glass,12.2,o+.1,w-2.25,39.8,o+.9,w+2.25),i.plate("rH",O.roofL,[[11.6,o+1.2,w+2.7],[40.4,o+1.2,w+2.7],[40.4,o+2,w],[11.6,o+2,w]],.15),i.plate("rH",O.roofL,[[40.4,o+1.2,w-2.7],[11.6,o+1.2,w-2.7],[11.6,o+2,w],[40.4,o+2,w]],.15);for(let S=t+3;S<e-1;S+=6){i.beam("rH",O.steelD,[S,r-.3,u],[S,r-.3,h],.22,.3),i.beam("rH",O.steelD,[S,r-.3,u],[S,o-.55,w],.2,.26),i.beam("rH",O.steelD,[S,r-.3,h],[S,o-.55,w],.2,.26);for(let R=1;R<6;R++){let I=u+(h-u)*R/6,U=r-.3+(o-.55-r+.3)*(1-Math.abs(I-w)/(w-u));i.beam("rH",O.steelD,[S,r-.3,I],[S,U,I+(R<3?1.6:R>3?-1.6:0)],.08)}}}$i(i,"Hi",[[Be.x,Be.y,Be.z1+.4],[Be.x,Be.y,Be.z0-.9]],Be.r,O.pipe,{sp:2});for(let w of[-22.8,-25.2])i.box("Hi",O.steelD,l,Be.y-.55,w-.08,Be.x+.2,Be.y-.4,w+.08);i.tube("Hi",O.pipe,[Be.x,Be.y,Be.z1+.4],[Be.x,.2,Be.z1+.4],Be.r,12),mr(i,"Hi",Te.x0,Te.z0,Te.x1,Te.z1,Te.y,{rail:["s"],gaps:[["s",Te.x0,Te.x0+.9]]}),i.beam("Hi",O.steelD,[Te.x1-.1,Te.y-.25,Te.z1-.1],[l,Te.y-1.6,Te.z1-.1],.1),i.beam("Hi",O.steelD,[Te.x1-.1,Te.y-.25,Te.z0+.1],[Te.x1-.1,Te.y-1.6,u],.1),i.cyl("Hi",O.copper,Te.x0+.5,u+.25,Te.y+1,Te.y+1.08,.28,10,0);for(let w of Ss.zs){i.cyl("Hi",O.pipe,Ss.x,w,.17,r-.4,.26,10,0);for(let D=1.5;D<r-1;D+=2.6)i.cyl("Hi",O.pipeD,Ss.x,w,D,D+.12,.33,10,0)}i.box("Hi",O.steelD,l,9.8,Ss.zs[0]-.3,Ss.x+.3,9.95,Ss.zs[2]+.3),ld(i,"Hi",Zi.x,Zi.z,Zi.r,Zi.h,{band:1.1,gauges:[Math.PI*.75]});let g=On.y,p=On.zN,v=$t.z-$t.r,y=$t.z+$t.r;$i(i,"Hi",[[Zi.x,Zi.h+.7,p],[Zi.x,g,p],[$t.x,g,p],[$t.x,g,v+.1]],On.r,O.pipe,{sp:2.6}),$i(i,"Hi",[[$t.x,g,y-.1],[$t.x,g,h+.1]],On.r,O.pipe,{sp:2.6}),i.box("Hi",O.pipeD,$t.x-.7,g-.7,h-.15,$t.x+.7,g+.7,h);for(let w of[15.5,21])Ih(i,"Hi",w,g,p,On.r,"x",r-.3);for(let w of[-24.5,-11.5])Ih(i,"Hi",$t.x,g,w,On.r,"z",r-.3);ld(i,"Hi",$t.x,$t.z,$t.r,$t.h,{top:$t.top,gauges:[Math.PI*.85,Math.PI*.2],gaps:[[-Math.PI/2,.26],[Math.PI/2,.26],[-1.15,.26],[.55,.3]]});for(let w=.5;w<$t.h;w+=.35)i.box("Hi",O.steelD,$t.x-$t.r-.32,w,$t.z-.3,$t.x-$t.r-.22,w+.05,$t.z+.3);for(let w of[-.3,.3])i.box("Hi",O.steelD,$t.x-$t.r-.34,.35,$t.z+w-.03,$t.x-$t.r-.26,$t.h+.5,$t.z+w+.03);let x=Math.round((kt.y-.17)/.2),M=kt.sw,T=kt.z0-.96,C=kt.z1+.96,L=T-M/2-.07,E=C+M/2+.07;mr(i,"Hi",kt.x0,kt.z0,kt.x1,kt.z1,kt.y,{rail:["n","s","e"],gaps:[["n",kt.x0,kt.lx],["s",kt.x0,kt.lx]]}),mr(i,"Hi",kt.x0,L,kt.lx,kt.z0,kt.y,{rail:["n"]}),mr(i,"Hi",kt.x0,kt.z1,kt.lx,E,kt.y,{rail:["s"]});let b=kt.lx+x*.28+.01;Dc(i,"Hi",b,T,.17,kt.y,Math.PI,.28,M,O.deck,{open:!0,rail:[1]}),Dc(i,"Hi",b,C,.17,kt.y,Math.PI,.28,M,O.deck,{open:!0,rail:[-1]});for(let w of[L+.2,E-.2])i.box("Hi",O.steelD,kt.lx-.32,.17,w-.12,kt.lx-.08,kt.y-.08,w+.12);{let w=(kt.z0+kt.z1)/2;for(let D of[kt.z0+.2,w,kt.z1-.2])i.box("Hi",O.steelD,kt.x1-.32,.17,D-.12,kt.x1-.08,kt.y-.08,D+.12);for(let D of[(L+kt.z0)/2,kt.z0+.4,w-1.4,w+1.4,kt.z1-.4,(kt.z1+E)/2])i.beam("Hi",O.steelD,[l+.02,kt.y-1.2,D],[l+.9,kt.y-.22,D],.12);i.box("Hi",O.steelD,l+.01,kt.y-.3,L+.1,l+.1,kt.y-.1,E-.1);for(let[D,S]of[[w-1.5,1.6],[w+2,1.3]]){let R=kt.x1-.6;i.ybox("Hi",O.steelL,R,kt.y+.55,D,.9,1.1,S,0),i.ybox("Hi",O.steel,R-.25,kt.y+1.15,D,.5,.12,S+.06,0);for(let I=-1;I<=1;I++)i.beam("Hi",O.brass,[R-.1,kt.y+1.1,D+I*S*.28],[R-.35,kt.y+1.55,D+I*S*.28],.05)}i.box("Hi",O.steelD,l+.01,kt.y+1.5,w-1.6,l+.12,kt.y+2.6,w+1.6);for(let[D,S]of[[-1,2.2],[-.35,2.25],[.35,2.2],[1,2.25]])i.cyl("Hi",O.gauge,l+.13,w+D,kt.y+S-.2,kt.y+S+.2,.2,10,0,{top:O.gauge})}let F={z0:u,z1:u+Ci.w},z={z0:h-Ci.w,z1:h},V=(w,D,S,R,I)=>{let U=Math.round((S-D)/5.6),k=(S-D)/U;for(let W=0;W<U;W++){let K=D+W*k,at=K+k,tt=Pc(`${w}${W+1}`,"Hi"),et=W%2?-.06:0;mr(tt,"Hi",K+.03,R.z0,at-.03,R.z1,4+et,{rail:I,col:"#949896",sp:1.4}),W%2===0&&tt.beam("Hi",O.steelD,[K+k/2,4-.3,(R.z0+R.z1)/2],[K+k/2+.9,.17,(R.z0+R.z1)/2+(R===F?1.1:-1.1)],.1)}for(let W=D;W<=S+.01;W+=k){let K=R===F?u:h;i.beam("Hi",O.steelD,[W,4-.26,K],[W,4-1.4,K],.12),i.beam("Hi",O.steelD,[W,4-1.4,K],[W,4-.26,R===F?R.z1:R.z0],.08)}};V("cwN",Ci.xN0,en.x0,F,["s"]),V("cwS",Ci.xS0,en.x0,z,["n"]);for(let w=.5;w<4;w+=.35)i.box("Hi",O.steelD,Ci.xN0+.2,w,F.z1+.05,Ci.xN0+.9,w+.05,F.z1+.12);{let D=(Je.z1-Je.z0)/15,S=($t.top-4)/15;for(let R=0;R<15;R++)i.box("Hi",O.deck,Je.x-.55,4+S*(R+1)-.06,Je.z0+D*R,Je.x+.55,4+S*(R+1),Je.z0+D*(R+1));for(let R of[-1,1])i.beam("Hi",O.steelD,[Je.x+R*.6,4-.1,Je.z0],[Je.x+R*.6,$t.top-.1,Je.z1],.09,.2),i.beam("Hi",O.rail,[Je.x+R*.62,4+.95,Je.z0],[Je.x+R*.62,$t.top+.95,Je.z1],.05);i.box("Hi",O.deck,Je.x-.55,$t.top-.06,Je.z1,Je.x+.55,$t.top,Je.z1+1.05)}mr(i,"Hi",en.x0,en.z0,en.x1,en.z1,en.y,{rail:["w"],gaps:[["w",zn.z1-.2,zn.z1+1.6],["w",u,u+Ci.w+.1],["w",h-Ci.w-.1,h]],col:O.deck});for(let w of[-24,-18,-12])for(let D of[en.x0+.25,40])i.box("Hi",O.steelD,D-.14,.17,w-.14,D+.14,en.y-.26,w+.14);Dc(i,"Hi",(zn.x0+zn.x1)/2,zn.z0,.17,en.y,-Math.PI/2,(zn.z0-zn.z1)/Math.round((en.y-.17)/.2),zn.x1-zn.x0,O.deck,{open:!0,rail:[1]}),i.box("Hi",O.deck,zn.x0,en.y-.08,zn.z1-1.4,en.x0,en.y,zn.z1);{let w=en.y,D=2.9,{x0:S,x1:R,z0:I,z1:U}=Ji;Cn(i,"Hi",O.plaster,S,I,U,w,w+D,.2,[{c:-20,w:1.8,y0:1,y1:2.2},{c:-17.4,w:.95,y0:0,y1:2.15},{c:-15.6,w:1.2,y0:1,y1:2.2}]);for(let k of[-20,-15.6])Ne(i,"Hi","z",S,k,k===-20?1.8:1.2,w+1,w+2.2,.2,-1,{sill:!1});fi(i,"Hi",O.plaster,I,S,R,w,w+D,.2,[{c:42,w:1.4,y0:1,y1:2.2}]),Ne(i,"Hi","x",I,42,1.4,w+1,w+2.2,.2,-1,{sill:!1}),fi(i,"Hi",O.plaster,U,S,R,w,w+D,.2),i.box("Hi",O.plasterD,S-.1,w+D,I-.1,R,w+D+.12,U+.1)}$i(i,"Hi",[[We.x,We.y,u+.1],[We.x,We.y,h-.1]],We.r,O.pipe,{sp:2.4});for(let w of[-24,-16,-10.5])Ih(i,"Hi",We.x,We.y,w,We.r,"z",r-.3);$i(i,"Hi",[[We.x,We.y,-26.4],[We.x,.17,-26.4]],We.r*.9,O.pipe,{sp:2.4}),hd(Pc("ch1","Hi"),"Hi",ue.x,ue.z,ue.y,ue.r,r-.3),hd(Pc("ch2","Hi"),"Hi",qn.x,qn.z,qn.y,qn.r,r-.3);for(let[w,D]of[[14,h-.2],[30,h-.2],[14,u+.2],[30,u+.2]])i.box("Hi",O.steelD,w-.1,5.6,D-.1,w+.1,5.9,D+.1),i.box("Hi:e",O.lamp,w-.22,5.3,D-.22,w+.22,5.6,D+.22);{let{x0:w,x1:D,z0:S,z1:R}=fr,I=.35,U=fr.roof,k=fr.roof-1.6;i.box("AX",O.plinth,w-.2,-2.2,S-.2,D+.2,.15,R),i.box("AX",O.floor,w+I,.15,S+I,D-I,.17,R);let W=K=>U+(k-U)*(R-K)/(R-S);Cn(i,"AX",O.brickD,w+I/2,S,R,0,k+.3,I,[{c:An.z,w:An.w,y0:4-.15,y1:6}]);for(let[K,at]of[[w,-1],[w+I,1]])i.face("AX",O.brickD,[[K,k+.3,S],[K,k+.3,R],[K,W(R),R],[K,W(S)+.3,S]],[at,0,0]);pr(i,"AX","z",w+I/2,An.z,An.w,4-.15,2.15,I,O.steelD),i.box("AX",O.steelD,w-1.2,4+2.6,An.z-.1,w+.2,4+2.8,An.z+.1),fi(i,"AX",O.brickD,S+I/2,w,D,0,k+.3,I,[{c:38,w:2,y0:1.4,y1:2.8},{c:40,w:2,y0:5,y1:4+2.4}]),Ne(i,"AX","x",S+I/2,38,2,1.4,2.8,I,-1,{grid:!0}),Ne(i,"AX","x",S+I/2,40,2,5,4+2.4,I,-1,{grid:!0}),Cn(i,"AX",O.brickD,D-I/2,S,R,0,k+.3,I),i.slab("AX",O.deck,cd(w+I,S+I,D-I,R),[cd($e.x0,$e.z0,$e.x1,$e.z1)],4-.2,4,{top:O.deck}),i.rail("AX",O.rail,[[$e.x0,$e.z1-.05],[$e.x0,$e.z0],[$e.x1,$e.z0],[$e.x1,$e.z1-.05]],4,1,.9,{w:.05,top:.07});for(let[K,at]of[[$e.x0,$e.z0],[$e.x1,$e.z0]])i.box("AX",O.steelD,K-.15,.17,at-.15,K+.15,4-.2,at+.15);i.plate("rA",O.roofD,[[w-.4,W(R)+.1,R],[D+.4,W(R)+.1,R],[D+.4,k,S-.5],[w-.4,k,S-.5]],.2),$i(i,"AX",[[w-.35,-2.2,An.z+1.5],[w-.35,4-.2,An.z+1.5],[w-.35,4-.2,An.z+1.05]],.2,O.copper,{sp:.9}),$i(i,"AX",[[w-.35,-2.2,An.z-1.6],[w-.35,4+2.4,An.z-1.6],[w-.35,4+2.4,R-.2]],.2,O.copper,{sp:.9});for(let K=-2.2+.6;K<4-.3;K+=.9)i.box("AX",O.steelD,w-.6,K,An.z+1.15,w-.05,K+.1,An.z+1.85)}{let w=Tn.x1+.4,D=Qe.x-.4,S=Zt.z0+.6,R=-10.6,I=5.6;i.box("ctx",O.plinth,w,0,S,D,.4,R),i.box("ctx",O.brickD,w+.05,.4,S+.05,D-.05,I,R-.05),i.box("ctx",O.pier,w-.15,I-.3,S-.15,D+.15,I+.1,R+.15),i.plate("ctx",O.roofD,[[w-.3,I+.1,R+.3],[D+.3,I+.1,R+.3],[D+.3,I+1.6,S-.3],[w-.3,I+1.6,S-.3]],.2);for(let U of[-14,-20,-26])i.box("ctx",O.glass,w+.02,2,U-.8,w+.06,3.6,U+.8,"tb");i.cyl("ctx",O.brick,48,-30.6,I,23,1.15,12,0),i.cyl("ctx",O.pier,48,-30.6,22.4,23.4,1.35,12,0),$i(i,"ctx",[[w,7.2,-16],[Tn.x1-.1,7.2,-16]],.35,O.pipe,{sp:9})}{let{x0:w,x1:D,z0:S,z1:R}=Kf,I=4,U=2.6;i.box("OF",O.stoneD,w,I-.35,S,D,I,R),i.box("OF",O.floor,w+.2,I,S,D-.2,I+.02,R);let k=[-6.3,-4.3,-2.3,-.3];Cn(i,"OF",O.plaster,w+.1,S,R,I,I+U,.2,k.map(at=>({c:at,w:1.4,y0:.9,y1:2.1}))),Cn(i,"OF",O.plaster,D-.1,S,R,I,I+U,.2,k.map(at=>({c:at,w:1.4,y0:.9,y1:2.1})));for(let at of k)Ne(i,"OF","z",w+.1,at,1.4,I+.9,I+2.1,.2,-1),Ne(i,"OF","z",D-.1,at,1.4,I+.9,I+2.1,.2,1);i.box("rO",O.roofD,w-.35,I+U,S,D+.35,I+U+.22,R);let W=I-.35,K=[-6.4,-.6];Cn(i,"OF",O.plaster,w+.1,S,R,0,W,.2,[{c:-3.4,w:1.3,y0:0,y1:2.3},...K.map(at=>({c:at,w:1.1,y0:2.1,y1:3}))]),Cn(i,"OF",O.plaster,D-.1,S,R,0,W,.2,[...K,-3.4].map(at=>({c:at,w:1.1,y0:2.1,y1:3})));for(let at of K)Ne(i,"OF","z",w+.1,at,1.1,2.1,3,.2,-1);for(let at of[...K,-3.4])Ne(i,"OF","z",D-.1,at,1.1,2.1,3,.2,1);i.box("OF",O.plinth,w-.05,0,S,D+.05,.3,R),i.box("OF:p",O.doorD,w+.02,.3,-4.05,w+.14,2.3,-2.75),i.box("OF:p",O.steelD,w-.08,1.05,-4.25,w+.02,1.2,-2.55),i.box("OF",O.stoneD,w-.25,2.3,-4.25,w+.1,2.45,-2.55)}i.box("OF",O.stoneD,Es.x1-.05,0,Es.z1+.2,Es.x1+.35,2.6,He.z1+.3);{let{x0:w,x1:D,z0:S,z1:R,eave:I}=Es,U=.35,k=4;i.box("OF",O.plinth,w-.2,0,S-.2,D+.2,.3,R+.2),i.box("OF",O.floor,w+U,.3,S+U,D-U,.32,R-U),i.box("OF",O.stoneD,w,k-.3,S,D,k,R),i.box("OF",O.floor,w+U,k,S+U,D-U,k+.02,R-U);let W=[{y0:.3,y1:k-.3},{y0:k,y1:I}];for(let[J,ot]of W.entries()){let dt=ot.y0+1,Ct=ot.y0+2.4,Ot=(St,yt=1.5)=>({c:St,w:yt,y0:dt-ot.y0,y1:Ct-ot.y0}),B=J===0?[{c:6,w:2.2,y0:0,y1:2.8},Ot(2.8),Ot(9.2)]:[Ot(2.8),Ot(6),Ot(9.2)];Cn(i,"OF",O.plaster,w+U/2,S,R,ot.y0,ot.y1,U,B);for(let St of B)St.y0>0&&Ne(i,"OF","z",w+U/2,St.c,St.w,dt,Ct,U,-1);let Jt=J===0?[Ot(38.4),Ot(43.6)]:[{c:41,w:1.6,y0:0,y1:2.4},Ot(37.8),Ot(44.2,1.2)];fi(i,"OF",O.plaster,S+U/2,w,D,ot.y0,ot.y1,U,Jt);for(let St of Jt)St.y0>0&&Ne(i,"OF","x",S+U/2,St.c,St.w,dt,Ct,U,-1);let It=J===0?[Ot(4.5),Ot(8.5)]:[{c:ve.z0,w:1.1,y0:0,y1:2.3},Ot(4.5)];Cn(i,"OF",O.plaster,D-U/2,S,R,ot.y0,ot.y1,U,It);for(let St of It)St.y0>0&&Ne(i,"OF","z",D-U/2,St.c,St.w,dt,Ct,U,1);fi(i,"OF",O.plaster,R-U/2,w,D,ot.y0,ot.y1,U,[Ot(41)]),Ne(i,"OF","x",R-U/2,41,1.5,dt,Ct,U,1),i.box("OF",O.plasterD,w-.12,ot.y1-.02,S-.12,D+.12,ot.y1+.14,R+.12)}i.box("OF:p",O.doorD,w-.04,.3,4.95,w+.08,3.05,7.05),i.box("OF",O.stoneD,w-.6,3.1,4.6,w,3.3,7.4),pr(i,"OF","z",w+U/2,6,2.2,.3,2.8,U,O.woodD),fi(i,"OF",O.plasterD,5.2,w+U,D-U,k,I-.3,.15,[{c:44,w:1,y0:0,y1:2.2}]),Cn(i,"OF",O.plasterD,39.2,S+U,5.2,k,I-.3,.15,[{c:3.6,w:1,y0:0,y1:2.2}]);let K=.5,at=I+2.4,tt=(w+D)/2,et=(S+R)/2,q=[[w-K,I,S-K],[D+K,I,S-K],[D+K,I,R+K],[w-K,I,R+K]],Q=[[tt-1.5,at,et],[tt+1.5,at,et]];i.face("rO",O.roof,[q[0],Q[0],Q[1],q[1]],[0,1,-1]),i.face("rO",O.roof,[q[2],Q[1],Q[0],q[3]],[0,1,1]),i.face("rO",O.roofD,[q[1],Q[1],q[2]],[1,1,0]),i.face("rO",O.roofD,[q[3],Q[0],q[0]],[-1,1,0]),i.face("rO",O.roofD,[q[0],q[1],q[2],q[3]],[0,-1,0]),i.box("OF",O.deck,D,k-.1,ve.z0-.7,D+2.6,k,ve.z0+.8),i.rail("OF",O.rail,[[D,ve.z0+.78],[D+2.58,ve.z0+.78],[D+2.58,ve.z0-.68]],k,1,.7,{w:.05,top:.07}),Dc(i,"OF",ve.x,ve.z1,0,k-.1,Math.PI/2,(ve.z0-.7-ve.z1)/20,1.4,O.deck,{open:!0,rail:[1],rise:(k-.1)/20})}{let{x0:w,x1:D,z0:S,z1:R,top:I}=td,U="yard";for(let[W,K]of[[w,S],[D,S],[w,R],[D,R]])i.box(U,O.steelD,W-.14,0,K-.14,W+.14,I+3.4,K+.14);for(let W=2;W<I+3;W+=2.2)for(let[K,at]of[[[w,S],[D,S]],[[w,R],[D,R]]])i.beam(U,O.steel,[K[0],W,K[1]],[at[0],W,at[1]],.1);for(let W=2.9;W<I+3;W+=2.2)i.beam(U,O.steel,[w,W,S],[w,W,R],.1);for(let W=0;W<I;W+=2.2)i.beam(U,O.steel,[w,W,S],[D,W+2.2,S],.06),i.beam(U,O.steel,[w,W,R],[D,W+2.2,R],.06);i.box(U,O.steelD,w-.3,I+3.2,S-.3,D+.3,I+3.5,R+.3),i.cyl(U,O.copper,(w+D)/2,(S+R)/2,I+3.5,I+3.7,1.1,14,0),i.box(U,O.stoneD,w-.3,0,S-.3,D+.3,.25,R+.3);let k=Pc("cage","yard");k.box(U,O.deck,w+.2,.25,S+.2,D-.2,.4,R-.2);for(let W of[S+.25,R-.25])k.rail(U,O.rail,[[w+.25,W],[D-.25,W]],.4,1.1,.6,{w:.05,top:.07});i.box(U,O.deck,D-.15,I-.1,S,Qe.x+.3,I,R),i.rail(U,O.rail,[[D+.1,S+.02],[Qe.x+.2,S+.02]],I,1,.7,{w:.05,top:.07})}{let{x0:w,x1:D,z0:S,z1:R,h:I}=yo,U=8,k=.4,W=U+I;i.box("VT",O.plinth,w-.2,U,S-.2,D+.2,U+.2,R+.2),i.box("VT",O.floor,w+k,U+.2,S+k,D-k,U+.22,R-k),Cn(i,"VT",O.stone,w+k/2,S,R,U+.2,W,k,[{c:(yn.z0+yn.z1)/2,w:yn.z1-yn.z0,y0:0,y1:3.4},{c:Ii.z,w:Ii.w,y0:Ii.y0,y1:Ii.y1},{c:-14,w:1.4,y0:1.4,y1:2.6}]),Ne(i,"VT","z",w+k/2,Ii.z,Ii.w,U+.2+Ii.y0,U+.2+Ii.y1,k,-1,{open:!0}),Ne(i,"VT","z",w+k/2,-14,1.4,U+1.6,U+2.8,k,-1,{grid:!0}),i.box("VT:p",O.doorD,w-.06,U+.2,yn.z0+.05,w+.1,U+3.55,yn.z1-.05);for(let et=yn.z0+.4;et<yn.z1;et+=.75)i.box("VT:p",O.steelD,w-.09,U+.3,et-.04,w-.05,U+3.4,et+.04);pr(i,"VT","z",w+k/2,(yn.z0+yn.z1)/2,yn.z1-yn.z0,U+.2,3.4,k,O.steelD),Cn(i,"VT",O.stone,D-k/2,S,R,U+.2,W,k,[{c:(ws.z0+ws.z1)/2,w:ws.z1-ws.z0,y0:0,y1:3.8}]),i.box("VT",O.steelD,D-.2,U+3.95,ws.z0,D+.5,U+4.6,ws.z1);let K=[57.5,62,66.5,70];fi(i,"VT",O.stone,S+k/2,w,D,U+.2,W,k,K.map(et=>({c:et,w:1.6,y0:3,y1:4.4}))),fi(i,"VT",O.stone,R-k/2,w,D,U+.2,W,k,K.map(et=>({c:et,w:1.6,y0:3,y1:4.4})));for(let et of K)Ne(i,"VT","x",S+k/2,et,1.6,U+3.2,U+4.6,k,-1,{grid:!0}),Ne(i,"VT","x",R-k/2,et,1.6,U+3.2,U+4.6,k,1,{grid:!0});for(let et=w+3;et<D-1;et+=4.5)for(let q of[S,R])i.box("VT",O.stoneD,et-.3,U+.2,q-.18,et+.3,W,q+.18);i.box("VT",O.stoneD,w-.25,W-.3,S-.25,D+.25,W+.1,R+.25);let at=(S+R)/2,tt=W+3;i.plate("rV",O.roof,[[w-.5,W,R+.5],[D+.5,W,R+.5],[D+.5,tt,at],[w-.5,tt,at]],.25),i.plate("rV",O.roof,[[D+.5,W,S-.5],[w-.5,W,S-.5],[w-.5,tt,at],[D+.5,tt,at]],.25);for(let[et,q]of[[w,-1],[w+k,1],[D-k,-1],[D,1]])i.face("rV",O.stone,[[et,W,S],[et,tt-.2,at],[et,W,R]],[q*(et<(w+D)/2,1),0,0]);i.box("VT",O.steelD,w-1.6,U+3.8,yn.z0-.4,w,U+3.95,yn.z1+.4)}{let w="yard",D=nn.x,S=nn.h;for(let U of[nn.z0,nn.z1]){i.box(w,O.plinth,D-.85,0,U-.85,D+.85,.5,U+.85),i.box(w,O.brick,D-.7,.5,U-.7,D+.7,S,U+.7),i.box(w,O.pier,D-.85,S,U-.85,D+.85,S+.3,U+.85);for(let k=1.4;k<S;k+=1.4)i.box(w,O.pier,D-.74,k,U-.74,D+.74,k+.12,U+.74)}let R=nn.z0+.7,I=nn.z1-.7;for(let U of[S-.9,S-.05])i.beam(w,O.steelD,[D,U,R],[D,U,I],.2,.22);for(let U=0;U<8;U++){let k=R+(I-R)*U/8,W=R+(I-R)*(U+1)/8;i.beam(w,O.steel,[D,S-.9,k],[D,S-.05,W],.07)}i.box(w,O.woodD,D-.12,S+.3,(R+I)/2-2.6,D+.12,S+1.5,(R+I)/2+2.6),i.box(w,O.hl,D-.16,S+.45,(R+I)/2-2.4,D+.16,S+1.35,(R+I)/2+2.4);for(let U of[nn.z0,nn.z1])i.box(w+":e",O.lamp,D-.2,S+.32,U-.2,D+.2,S+.7,U+.2)}return i}var pt={crate:"#B49C7B",crateD:"#9E8566",crateL:"#C4AE8E",sack:"#C9B48E",sackD:"#B39D78",stone:"#A9A49B",stoneL:"#BDB8AE",ware:"#7FA3A0",drum:"#7C6A55",drumL:"#957F66",straw:"#CDB77E",strawD:"#B9A268",bench:"#8A7258",seat:"#6F6052",mach:"#6E7779",machD:"#566064",machL:"#8A9395",cloth1:"#D9A441",cloth2:"#C8553D",cloth3:"#E3C26E",canvas:"#A9A58F",canvasD:"#8F8B76",truck:"#5F6B6A",truckD:"#47504F",tire:"#2F3333",desk:"#8A7258",cab:"#7F6E5C",rug:"#9C6A52",paper:"#ECE5D6",lamp:"#FFE2A8",net:"#8C8A78"},A1=(i,t)=>{let e=new Ri;return Cs[i]={g:t,k:e},e};function ke(i,t,e,n,s,r=1.1,o=0,a=pt.crate){i.ybox(t,a,e,s+r/2,n,r,r,r,o);let l=Math.cos(o),c=Math.sin(o);for(let u of[-1,1])i.ybox(t,pt.crateD,e+l*u*(r/2-.06),s+r/2,n+c*u*(r/2-.06),.1,r+.02,r+.02,o)}function di(i,t,e,n,s,r=3,o=0){ke(i,t,e,n,s,1.1,o),ke(i,t,e+1.2*Math.cos(o),n+1.2*Math.sin(o),s,1.1,o,pt.crateL),r>2&&ke(i,t,e+.6*Math.cos(o),n+.6*Math.sin(o),s+1.1,1,o+.12)}function Lc(i,t,e,n,s,r=pt.drum){i.cyl(t,r,e,n,s,s+1,.34,12,0),i.cyl(t,pt.drumL,e,n,s+.3,s+.36,.35,12,0),i.cyl(t,pt.drumL,e,n,s+.68,s+.74,.35,12,0)}function fd(i,t,e,n,s,r=4,o=0){let a=Math.cos(o),l=Math.sin(o);for(let c=0;c<r;c++){let u=(c%3-1)*.72,h=Math.floor(c/3)*.62;i.ybox(t,c%2?pt.sack:pt.sackD,e+a*u-l*h,s+.21+(c>=3?.36:0),n+l*u+a*h,.7,.4,.5,o+c%2*.1)}}function dd(i,t,e,n,s,r,o,a,l){let c=l,u=()=>(c=(c*9301+49297)%233280)/233280;for(let h=0;h<a;h++){let d=u()*6.28,f=Math.sqrt(u())*r,m=o*(1-f/r*.8),_=.35+u()*.3;i.ybox(t,u()>.5?pt.stone:pt.stoneL,e+Math.cos(d)*f,s+Math.max(_/2,m*u()),n+Math.sin(d)*f,_,_*.8,_*1.1,u()*3)}}function Qi(i,t,e,n,s,r,o,a=.78,l=0,c=pt.desk){i.ybox(t,c,e,s+a-.04,n,r,.08,o,l);let u=Math.cos(l),h=Math.sin(l);for(let[d,f]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let m=e+u*d*(r/2-.1)-h*f*(o/2-.1),_=n+h*d*(r/2-.1)+u*f*(o/2-.1);i.box(t,pt.seat,m-.05,s,_-.05,m+.05,s+a-.08,_+.05)}}function Mo(i,t,e,n,s){i.cyl(t,pt.seat,e,n,s+.42,s+.48,.2,8,0),i.cyl(t,pt.seat,e,n,s,s+.42,.06,6,0)}function bo(i,t,e,n,s,r,o){i.ybox(t,pt.bench,e,s+.44,n,r,.07,.38,o);let a=Math.cos(o),l=Math.sin(o);for(let c of[-r/2+.2,r/2-.2])i.ybox(t,pt.seat,e+a*c,s+.2,n+l*c,.08,.4,.32,o)}function Is(i,t,e,n,s,r){i.ybox(t,pt.seat,e,s+.45,n,.5,.06,.5,r);let o=Math.cos(r),a=Math.sin(r);i.ybox(t,pt.seat,e+a*.22,s+.78,n-o*.22,.5,.62,.06,r);for(let[l,c]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let u=e+o*l*.2-a*c*.2,h=n+a*l*.2+o*c*.2;i.box(t,pt.seat,u-.03,s,h-.03,u+.03,s+.45,h+.03)}}function Ph(i,t,e,n,s,r,o,a=2){i.ybox(t,pt.cab,e,s+a/2,n,r,a,.5,o),i.ybox(t,O.frame,e,s+a+.03,n,r+.06,.06,.56,o)}function pi(i,t,e,n,s,r,o,a=2.6,l=0){let c=Math.cos(o),u=Math.sin(o),h=.8,d=Math.max(2,Math.round(r/2));for(let f=0;f<=d;f++)for(let m of[-h/2,h/2]){let _=-r/2+r*f/d;i.box(t,O.steelD,e+c*_-u*m-.04,s,n+u*_+c*m-.04,e+c*_-u*m+.04,s+a,n+u*_+c*m+.04)}for(let f=0;f<3;f++){let m=s+.15+f*(a-.3)/2;if(i.ybox(t,O.woodD,e,m,n,r+.12,.05,h+.04,o),f!==2)for(let _=0;_<d;_++){let g=-r/2+r*(_+.5)/d,p=e+c*g,v=n+u*g;(_+f+l)%3===0?i.ybox(t,pt.sack,p,m+.22,v,1.2,.4,.6,o):i.ybox(t,(_+f)%2?pt.crate:pt.crateL,p,m+.3,v,1.3,.56,.66,o)}}}function R1(i,t,e,n,s){i.cyl(t,O.steelD,e,n,s,s+3.6,.08,8,0),i.box(t,O.steelD,e-.2,s+3.6,n-.2,e+.2,s+3.7,n+.2),i.box(t.split(":")[0]+":e",pt.lamp,e-.16,s+3.7,n-.16,e+.16,s+4.05,n+.16)}function C1(i,t,e,n,s,r){i.box(t,O.rail,e-.02,s-r,n-.02,e+.02,s,n+.02),i.frustum(t,O.steelD,e,n,s-r-.22,s-r,.42,.1,10,0),i.cyl(t.split(":")[0]+":e",pt.lamp,e,n,s-r-.25,s-r-.18,.22,10,0)}function I1(i,t,e,n,s,r){Qi(i,t,e,n,s,2.4,.95,.9,r,pt.bench);let o=Math.cos(r),a=Math.sin(r);i.cyl(t,O.steelD,e-o*.6,n-a*.6,s+.9,s+1,.16,8,0),i.obox(t,O.steelL,[e-o*.6,s+1.3,n-a*.6],[o*.05,0,a*.05],[0,.32,0],[-a*.32,0,o*.32]),i.ybox(t,pt.ware,e+o*.35,s+.95,n+a*.35,.5,.1,.35,r),i.beam(t,O.rail,[e+o*.9,s+.9,n+a*.9],[e+o*.9,s+1.7,n+a*.9],.04),i.frustum(t,O.steelD,e+o*.9,n+a*.9,s+1.55,s+1.75,.2,.06,8,0)}function pd(i,t,e,n,s,r){let o=Math.cos(r),a=Math.sin(r);i.ybox(t,O.stoneD,e,s+.15,n,3.2,.3,2,r),i.ybox(t,pt.mach,e,s+1.2,n,2.4,1.8,1.5,r),i.ybox(t,pt.machD,e,s+2.2,n,2.6,.2,1.7,r),i.frustum(t,pt.machL,e,n,s+2.3,s+2.8,.7,.4,12,0);let l=e+o*1.45,c=n+a*1.45;i.obox(t,pt.machD,[l,s+1.25,c],[o*.1,0,a*.1],[0,.95,0],[-a*.95,0,o*.95]),i.ybox(t,pt.machL,e-o*1.33,s+.7,n-a*1.33,.5,.9,.9,r)}function Dh(i,t,e,n,s,r,o,a,l=0){let h=a/2,d=[];for(let f=0;f<=6;f++)d.push([n+Math.sin(f/6*2.4)*l,r-(r-o)*f/6]);for(let f=0;f<6;f++){let[m,_]=d[f],[g,p]=d[f+1];i.face(t,e,[[m-.025,_,s-h],[m-.025,_,s+h],[g-.025,p,s+h],[g-.025,p,s-h]],[-1,0,0]),i.face(t,e,[[m+.025,_,s-h],[m+.025,_,s+h],[g+.025,p,s+h],[g+.025,p,s-h]],[1,0,0]),i.face(t,e,[[m-.025,_,s-h],[m+.025,_,s-h],[g+.025,p,s-h],[g-.025,p,s-h]],[0,0,-1]),i.face(t,e,[[m-.025,_,s+h],[m+.025,_,s+h],[g+.025,p,s+h],[g-.025,p,s+h]],[0,0,1])}for(let[[f,m],_]of[[d[0],1],[d[6],-1]])i.face(t,e,[[f-.025,m,s-h],[f+.025,m,s-h],[f+.025,m,s+h],[f-.025,m,s+h]],[0,_,0])}function P1(i,t,e,n,s){let r=(d,f)=>[e+d,n+f];i.box(t,pt.truckD,e-3.5,s+.55,n-1.05,e+3.4,s+.85,n+1.05),i.box(t,pt.truck,e+2.1,s+.85,n-1.15,e+3.5,s+1.95,n+1.15),i.box(t,pt.truckD,e+3.45,s+.7,n-1.1,e+3.6,s+1.9,n+1.1),i.box(t,pt.truck,e+.6,s+.85,n-1.2,e+2.1,s+2.75,n+1.2),i.box(t,pt.truckD,e+.5,s+2.75,n-1.28,e+2.2,s+2.9,n+1.28),i.box(t+":g",O.glass,e+2.08,s+1.85,n-1,e+2.13,s+2.6,n+1);for(let d of[-1.22,1.18])i.box(t+":g",O.glass,e+1.1,s+1.85,n+d,e+1.9,s+2.55,n+d+.04);for(let d of[-.75,.75])i.cyl(t+":e",pt.lamp,e+3.55,n+d,s+1.35,s+1.6,.14,8,0);let o=e-3.6,a=e+.45,l=n-1.2,c=n+1.2,u=s+.85,h=s+3;i.box(t,pt.crateD,o,u,l,a,u+.12,c),i.box(t,pt.crateD,a-.1,u,l,a,u+1.1,c);for(let[d,f]of[[l,l+.08],[c-.08,c]])i.box(t,pt.crateD,o,u,d,a,u+1.1,f);for(let d of[o+.1,o+1.4,o+2.7,a-.1])for(let[f,m]of[[l,l+.08],[c-.08,c]])i.box(t,O.steelD,d-.04,u+1.1,f,d+.04,h,m);i.box(t,pt.canvas,o,h,l-.05,a,h+.12,c+.05);for(let[d,f]of[[l-.05,l+.02],[c-.02,c+.05]])i.box(t,pt.canvasD,o,u+1.1,d,a,h,f);i.box(t,pt.canvasD,a-.1,u+1.1,l,a,h,c),i.obox(t,pt.crateD,[o-.6,(u+.08+s+.05)/2,n],[.6,(u+.08-s-.05)/2,0],[-.024,.032,0],[0,0,1]);for(let[d,f,m]of[[a-.75,l+.7,1],[a-.75,c-.7,1],[a-1.85,l+.7,.9],[a-.75,l+.7,.8,1]])i.ybox(t,pt.crate,d,u+.12+m/2+(f===l+.7&&m===.8?1:0),f,m,m,m,0);for(let d of[-2.6,-1.4,2.6])for(let f of[-1.05,1.05]){let m=r(d,f);i.obox(t,pt.tire,[m[0],s+.5,m[1]],[.5,0,0],[0,.5,0],[0,0,.17])}}function md(i){let e=8+.22,n=4+.02,s=.32;{i.ybox("yard:p",pt.bench,9.4,0+.75,2.4,1.8,.1,1.1,.3);for(let l of[-1,1])i.ybox("yard:p",pt.crateD,9.4+Math.sin(.3)*-.55*l,1,2.4+Math.cos(.3)*.55*l,1.8,.4,.06,.3);for(let l of[-1,1])i.obox("yard:p",pt.tire,[9.4-.3+Math.sin(.3)*.62*l*-1,0+.45,2.4+Math.cos(.3)*.62*l],[.45*Math.cos(.3),0,.45*Math.sin(.3)],[0,.45,0],[-Math.sin(.3)*.07,0,Math.cos(.3)*.07]);i.beam("yard:p",O.woodD,[9.4+.9,0+.8,2.4+.2],[9.4+1.9,0+.6,2.4+.55],.06),i.beam("yard:p",O.woodD,[9.4+.7,0+.8,2.4-.4],[9.4+1.7,0+.6,2.4-.1],.06),ke(i,"yard:p",9.4-.2,2.4,0+.8,.6,.3),fd(i,"yard:p",9.4+.4,2.4+.1,0+.8,2,.3)}di(i,"yard:p",8.6,10.8,0,3),di(i,"yard:p",16.2,10.9,0,2);for(let[r,o]of[[19.6,10.9],[20.4,10.4],[21.2,11]])Lc(i,"yard:p",r,o,0);{for(let c of[24+.2,31-.2])i.box("yard:p",O.woodD,c-.1,0,8.6-.1,c+.1,2.7,8.6+.1);i.plate("yard:p",O.roofD,[[24-.3,2.7,8.6-.4],[31+.3,2.7,8.6-.4],[31+.3,3.3,11.9],[24-.3,3.3,11.9]],.1),Qi(i,"yard:p",27.5,10.4,0,2.4,.9),bo(i,"yard:p",27.5,9.5,0,2.4,0),bo(i,"yard:p",27.5,11.3,0,2.4,0),i.cyl("yard:p","#B8A07F",26.8,10.4,.78,1,.1,8,0),i.cyl("yard:p","#B8A07F",28.1,10.3,.78,.95,.09,8,0)}di(i,"yard:p",33.4,10.8,0,3,0);{i.box("yard:p",O.steelD,25.8-1.1,.35,-5.4-.7,25.8+1.1,.55,-5.4+.7),i.box("yard:p",O.steel,25.8-1.1,.55,-5.4-.7,25.8+1.1,1.2,-5.4-.62),i.box("yard:p",O.steel,25.8-1.1,.55,-5.4+.62,25.8+1.1,1.2,-5.4+.7),i.box("yard:p",O.steel,25.8-1.1,.55,-5.4-.7,25.8-1.02,1.2,-5.4+.7),i.box("yard:p",O.steel,25.8+1.02,.55,-5.4-.7,25.8+1.1,1.2,-5.4+.7),dd(i,"yard:p",25.8,-5.4,.55,.8,.7,14,11);for(let l of[-.75,.75])for(let c of[-.72,.72])i.obox("yard:p",pt.tire,[25.8+l,0+.25,-5.4+c],[.25,0,0],[0,.25,0],[0,0,.06])}for(let[r,o]of[[12.5,-2.4],[29.5,4.2],[45.2,-6.9]])R1(i,"yard:p",r,o,0);di(i,"yard:p",47.2,-6.4,0,2,Math.PI/2);{let r=1.8,o=Tn.x0;i.box("ground",pt.crate,4.9,r,-23.3,6.4,r+1.3,-21.7);for(let l of[4.97,6.33])i.box("ground",pt.crateD,l-.05,r,-23.31,l+.05,r+1.32,-21.69,"b");ke(i,"ground",7.25,-22.35,r,1.2,.05,pt.crateL),ke(i,"ground",7.27,-22.37,r+1.2,1.15,-.04),i.box("ground",pt.machD,6.45,r,-24.65,o-.02,r+3.4,-23),i.box("ground",pt.mach,6.55,r+3.4,-24.55,o-.1,r+3.52,-23.1),i.obox("ground",pt.machL,[6.42,r+1.7,-23.82],[.04,0,0],[0,.9,0],[0,0,.6]),ke(i,"ground",7.25,-24.05,r+3.52,1.05,.04,pt.crateD),i.box("ground",O.woodD,6.75,r+4.58,-24.55,o-.05,r+4.72,-23.2);let a=mn.y1+.6;i.box("Hw:p",O.steelD,o-.6,a,mn.z-2.4,o,a+.1,mn.z+2.4),Dh(i,"Hw:p",pt.cloth2,o-.5,mn.z-1.75,a+.05,5.2,.7,.18),Dh(i,"Hw:p",pt.cloth1,o-.45,mn.z+1.6,a+.05,4.7,.7,-.15),Dh(i,"Hw:p",pt.cloth3,o-.55,mn.z+2.2,a+.05,5.6,.45,.1);for(let[l,c]of[[vn.x0+.5,-11.8],[vn.x0+.55,-12.6]])Lc(i,"ground",l,c,r);Mo(i,"ground",-1.1,-23.4,r),i.cyl("ground",pt.drumL,-2.4,-23.9,r,r+.35,.45,12,0),i.cyl("ground",pt.paper,-2.4,-23.9,r+.3,r+.36,.38,12,0);{let u=Math.hypot(5.1,3.1),h=5.1/u,d=3.1/u,f=-1.95+1.75*h+.42*d,m=-19.85+1.75*d-.42*h,_=Math.atan2(3.1,5.1);for(let g=0;g<4;g++)i.ybox("ground",pt.bench,f+g%2*.04,r+.12+g*.22,m,1.5,.2,.5,_+g%2*.05)}}{let r=-2.2;bo(i,"ground",-1.6,-38.3,r,2.2,0),bo(i,"ground",2.6,-36.4,r,1.8,Math.PI/2+.2),ke(i,"ground",-7.4,-31.1,r,1,.2),ke(i,"ground",-6.3,-31,r,.9,-.1,pt.crateL),ke(i,"ground",-6.9,-31,r+1,.8,.3),i.ybox("ground",pt.net,5.6,r+.15,-31.6,2.2,.3,1.4,.3),Lc(i,"ground",6.2,-33.5,r);for(let o of[Zt.x0+6,Zt.x0+14])ke(i,"ground",o,Zt.z1-2.6,r,1,0),ke(i,"ground",o+1.1,Zt.z1-2.5,r,.9,.2,pt.crateL)}for(let r of[-18.9,-15.7])I1(i,"Hi:p",9.6,r,.17,Math.PI/2),Mo(i,"Hi:p",10.9,r-.5,.17),Mo(i,"Hi:p",10.9,r+.6,.17);dd(i,"Hi:p",15.6,-26.6,.17,.9,.8,14,5),i.box("Hi:p",O.steelD,18.7,.17,-27.3,19.5,.17+.8,-24.9),pd(i,"Hi:p",21.8,-26.4,.17,0),pd(i,"Hi:p",32.6,-26.4,.17,0),Qi(i,"Hi:p",38.6,-17.2,.17,1.2,4.2,.95,0,pt.bench);for(let r of[-18.6,-17.4,-16.2,-15])i.ybox("Hi:p",r%2<-1?pt.ware:pt.stoneL,38.6,.17+1,r,.5,.12,.6,.2);Mo(i,"Hi:p",37.5,-18,.17),Mo(i,"Hi:p",37.5,-16.2,.17),di(i,"Hi:p",9.6,-9.1,.17,3),di(i,"Hi:p",13.2,-9.1,.17,2),di(i,"Hi:p",24.6,-9.1,.17,3),fd(i,"Hi:p",28,-9.2,.17,5),pi(i,"Hi:p",Tn.x1-1,-24.4,.17,5,Math.PI/2,2.6,1),pi(i,"Hi:p",Tn.x1-1,-11.6,.17,4,Math.PI/2,2.6,2),di(i,"Hi:p",38.2,-25.8,.17,3),ke(i,"Hi:p",38.6,-12.2,.17,1,.2);{let r=(Ji.x0+Ji.x1)/2,o=(Ji.z0+Ji.z1)/2;Qi(i,"Hi:p",r,o,4+.02,1.6,.9),Is(i,"Hi:p",r-.4,o-.8,4+.02,Math.PI),Is(i,"Hi:p",r+.4,o+.8,4+.02,0),Ph(i,"Hi:p",Ji.x1-.45,o-2.2,4+.02,1.6,Math.PI/2)}{let{x0:r,x1:o,z0:a}=fr,l=$e;for(let[c,u]of[[37.4,-31.8],[38.2,-32.2],[38.1,-31.3],[37.5,-30.6],[39.1,-31.9]])Lc(i,"AX:p",c,u,.17);for(let[c,u,h]of[[40.3,-31.2,0],[40.4,-29.9,.1],[40.35,-30.55,.05,1]])i.ybox("AX:p",pt.straw,c,.17+.45+(h===.05?.9:0),u,1.6,.9,1.1,h);ke(i,"AX:p",39.2,-30,.17,1,.2),ke(i,"AX:p",39.2,-30,.17+1,.9,-.1,pt.crateL),pi(i,"AX:p",38.6,a+.85,.17,4.4,0,3.4,0),pi(i,"AX:p",o-.9,-30.8,.17,3.4,Math.PI/2,3.4,1);for(let c of[r+2.4,41.8])ke(i,"AX:p",c,a+.9,n,1,0);di(i,"AX:p",o-1.6,a+1,n,2,Math.PI/2),i.box("AX:p",O.rail,r-.7,4+1.6,-31.62,r-.66,4+2.6,-31.58),i.box("AX:p",O.steelD,r-.8,4+1.45,-31.7,r-.56,4+1.6,-31.5)}{let{x0:r,x1:o,z0:a,z1:l}=Es;Qi(i,"OF:p",41.8,8.2,n,2.2,1.1,.8),Is(i,"OF:p",41.8,9.1,n,0),Is(i,"OF:p",41.4,7.1,n,Math.PI),i.ybox("OF:p",pt.paper,41.4,n+.82,8.1,.5,.02,.35,.2),i.ybox("OF:p",pt.ware,42.4,n+.85,8.3,.3,.1,.3,0);for(let c of[37.6,39.1])Ph(i,"OF:p",c,l-.65,n,1.3,0,2.2);i.box("OF:p",O.steelD,o-1.2,n,5.6,o-.45,n+1.1,6.4),i.ybox("OF:p",pt.rug,41.4,n+.02,7.6,4,.02,2.6,0),i.ybox("OF:p",pt.seat,r+.9,n+.3,7.6,.9,.6,2.2,0),i.ybox("OF:p",pt.seat,r+.55,n+.75,7.6,.25,.9,2.2,0),pi(i,"OF:p",37.7,a+.9,n,2.4,0,2.4,2),bo(i,"OF:p",43.6,2,n,1.6,0),Qi(i,"OF:p",39.6,3.6,s,1.8,.9),Is(i,"OF:p",39.6,4.4,s,0),Qi(i,"OF:p",43.2,8.4,s,1.8,.9),Is(i,"OF:p",43.2,9.2,s,0),Ph(i,"OF:p",o-.7,3.4,s,1.6,Math.PI/2)}{let{x0:r,x1:o,z0:a,z1:l}=yo;pi(i,"VT:p",56.6,-13.3,e,4.2,0,3,0),pi(i,"VT:p",58.3,-10.85,e,4.1,Math.PI/2,3,1),pi(i,"VT:p",57.4,-8.3,e,2,0,3,2),Qi(i,"VT:p",56.5,-12.15,e,1.6,.9,.78,0),Is(i,"VT:p",56.5,-11.3,e,Math.PI),i.ybox("VT:p",pt.paper,56.3,e+.8,-12.2,.6,.03,.45,.15),i.cyl("VT:e",pt.lamp,57,-12.3,e+.8,e+1.05,.1,8,0),i.ybox("VT:p",pt.canvas,57.35,e+.25,-10.78,.9,.5,1.9,0),ke(i,"VT:p",57.3,-9.3,e,.8,.3,pt.crateL),i.ybox("VT:p",pt.ware,57.3,e+.85,-9.3,.35,.1,.3,.3);for(let c of[62,66.4,70])pi(i,"VT:p",c,a+.9,e,3.6,0,3,c);for(let c of[57.4,62,66.4])pi(i,"VT:p",c,l-.9,e,3.6,0,3,c+1);di(i,"VT:p",61.2,-3.9,e,3),ke(i,"VT:p",58.4,-4.6,e,.9,.2,pt.crateL),ke(i,"VT:p",70.7,-2,e,.9,.1,pt.crateL),ke(i,"VT:p",71.1,-3.1,e,.8,-.2),ke(i,"VT:p",70.8,-2.2,e+.9,.7,.25);for(let[c,u]of[[57.2,-6.4],[63,-8.4],[68,-8.4]])C1(i,"rV",c,u,e+yo.h-.3,2.2);P1(A1("truck","VT"),"VT",wh.x,wh.z,e)}return i}var Fc=class{constructor(t,e,n={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{}},n),this.cur={th:0,ph:.9,r:500,t:new H},this.goal={th:0,ph:.9,r:500,t:new H},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){let n=this.goal;t.th!==void 0&&(n.th=t.th),t.ph!==void 0&&(n.ph=t.ph),t.r!==void 0&&(n.r=t.r),t.t&&n.t.copy(t.t),this._clamp(),e&&(this.cur.th=n.th,this.cur.ph=n.ph,this.cur.r=n.r,this.cur.t.copy(n.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var o,a,l;let n={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,t:this.cur.t.clone()},s=(o=t.th)!=null?o:n.th;for(;s-n.th>Math.PI;)s-=Math.PI*2;for(;s-n.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(a=t.ph)!=null?a:n.ph,r:(l=t.r)!=null?l:n.r,t:(t.t||n.t).clone()};this.fly={from:n,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let n=e.bounds;t.t.x=Math.min(n.x1,Math.max(n.x0,t.t.x)),t.t.z=Math.min(n.z1,Math.max(n.z0,t.t.z))}}update(t){let e=this.cur,n=this.goal;if(this.fly){let s=this.fly,r=Math.min(1,(this.now()-s.t0)/s.dur),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.th=s.from.th+(s.to.th-s.from.th)*o,e.ph=s.from.ph+(s.to.ph-s.from.ph)*o;let a=Math.sin(Math.PI*o)*Math.min(.35,s.from.t.distanceTo(s.to.t)/900);e.r=Math.exp(Math.log(s.from.r)+(Math.log(s.to.r)-Math.log(s.from.r))*o)*(1+a),e.t.lerpVectors(s.from.t,s.to.t,o),r>=1&&(this.fly=null)}else{let s=1-Math.exp(-t*12);e.th+=(n.th-e.th)*s,e.ph+=(n.ph-e.ph)*s,e.r=Math.exp(Math.log(e.r)+(Math.log(n.r)-Math.log(e.r))*s),e.t.lerp(n.t,s)}return this._apply(),!!this.fly||Math.abs(n.th-e.th)>1e-4||Math.abs(n.ph-e.ph)>1e-4||Math.abs(n.r-e.r)>.01||n.t.distanceToSquared(e.t)>1e-4}_apply(){let t=this.cur,e=Math.sin(t.ph);this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t)}_ground(t,e,n){let s=this.dom.getBoundingClientRect(),r=new Dt((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),o=new lo;o.setFromCamera(r,this.cam);let a=new H;return o.ray.intersectPlane(new cn(new H(0,1,0),-n),a)?a:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,n){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let o=this._ground(e,n,s.t.y);if(o){let a=1-s.r/r;s.t.x+=(o.x-s.t.x)*a,s.t.z+=(o.z-s.t.z)*a}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let n=this.goal,s=this.dom.clientHeight||600,r=2*n.r*Math.tan(this.cam.fov*Math.PI/360)/s,o=this.cur.th,a=Math.cos(o),l=-Math.sin(o),c=-Math.sin(o),u=-Math.cos(o),h=1/Math.max(.35,Math.cos(this.cur.ph));n.t.x+=(-t*a+e*c*Math.min(h,2.2))*r,n.t.z+=(-t*l+e*u*Math.min(h,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(n.pointerId,{x:n.clientX,y:n.clientY,b:n.button,sh:n.shiftKey,t:n.pointerType});try{t.setPointerCapture(n.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=n=>{var s,r;this.ptrs.delete(n.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",n=>{let s=this.ptrs.get(n.pointerId);if(!s||!this.enabled)return;let r=n.clientX-s.x,o=n.clientY-s.y;if(s.x=n.clientX,s.y=n.clientY,this.ptrs.size>=2){let[a,l]=[...this.ptrs.values()],c=(a.x+l.x)/2,u=(a.y+l.y)/2,h=Math.hypot(a.x-l.x,a.y-l.y),d=Math.atan2(l.y-a.y,l.x-a.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,h),c,u),this.pan(c-this._pinch.mx,u-this._pinch.my);let f=d-this._pinch.a;f>Math.PI&&(f-=Math.PI*2),f<-Math.PI&&(f+=Math.PI*2),this.rotate(f,0)}this._pinch={d:h,mx:c,my:u,a:d};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||n.shiftKey?this.pan(r,o):this.rotate(-r*.0055,-o*.0045)}),t.addEventListener("wheel",n=>{var r,o;if(!this.enabled)return;if(!this.wheelOn){(o=(r=this.o).onWheelHint)==null||o.call(r);return}n.preventDefault();let s=n.deltaMode===1?n.deltaY*16:n.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),n.clientX,n.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};var gr=["ground","base","ctx","yard","H","Hn","He","Hs","Hw","Hi","rH","AX","rA","OF","rO","VT","rV"],gd=["rH","rA","rO","rV"],D1={ov:"sw",yard:"s",nw:"nw",n:"n",w:"w",e:"e",top:""},xr={ov:{t:[28,0,-8],r:124,ph:.64,th:-.38},ext:{t:[24,2,-10],r:150,ph:.82,th:-.55},sec:{t:[24,3,-10],r:112,ph:1.36,th:-Math.PI/2}},_d=[.29,.27,.25];function Uc(i){return i.side=wn,i.clipShadows=!0,i.clipIntersection=!0,i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      if (!gl_FrontFacing) gl_FragColor = vec4(${_d.map(e=>e.toFixed(3)).join(",")}, 1.0);`)},i.customProgramCacheKey=()=>"cap",i}function xd(i){let t=new qe;return t.setAttribute("position",new ze(i.p,3)),t.setAttribute("normal",new ze(i.n,3)),t.setAttribute("color",new ze(i.c,3)),t.computeBoundingSphere(),t}function L1(){let i=(l,c)=>{let u=l.attributes.position.count,h=new Float32Array(u*3);for(let d=0;d<u;d++)h.set(c,d*3);return l.setAttribute("color",new ze(h,3)),l},t=(l,c,u,h)=>{let d=Qf(new Gi(l,1).deleteAttribute("normal").deleteAttribute("uv"));return d.computeVertexNormals(),d.translate(c,u,h).toNonIndexed()},e=[t(1.25,0,3.7,0),t(.95,.85,3.2,.35),t(.9,-.7,3.35,-.55),t(.8,.1,4.5,-.25)],n=new qe;for(let l of["position","normal"]){let c=e.reduce((d,f)=>d+f.attributes[l].array.length,0),u=new Float32Array(c),h=0;for(let d of e)u.set(d.attributes[l].array,h),h+=d.attributes[l].array.length;n.setAttribute(l,new ze(u,3))}let s=new Ei(.16,.24,2.7,5,1,!0).translate(0,1.35,0).deleteAttribute("uv"),r=new te("#7A6A58"),o=[i(n,[1,1,1]),i(s.toNonIndexed(),[r.r,r.g,r.b])],a=new qe;for(let l of["position","normal","color"]){let c=o.reduce((d,f)=>d+f.attributes[l].array.length,0),u=new Float32Array(c),h=0;for(let d of o)u.set(d.attributes[l].array,h),h+=d.attributes[l].array.length;a.setAttribute(l,new ze(u,3))}return a}function F1(i={}){let t=new Ri;for(let y of Object.keys(Cs))delete Cs[y];let e=ad(t);ud(t),md(t);let n=t.out(),s=new me,r={};for(let y of gr)r[y]=new me,r[y].name=y,s.add(r[y]);let o=new cn(new H(1,0,0),1e5),a=new cn(new H(0,0,-1),1e5),l={},c={},u={},h=y=>new li({vertexColors:!0,roughness:.9,metalness:0,...y});for(let y of gr){l[y]=new cn(new H(0,-1,0),1e5),c[y]=new cn(new H(0,-1,0),1e5);let x=y==="ground"?.95:y==="base"?1:.9;u[y]=Uc(h({roughness:x})),u[y].clippingPlanes=[o,a,l[y]],u[y+":g"]=Uc(h({roughness:.3,metalness:.15})),u[y+":g"].clippingPlanes=[o,a,l[y]],u[y+":p"]=Uc(h({})),u[y+":p"].clippingPlanes=[o,a,c[y]],u[y+":e"]=new tn({vertexColors:!0,toneMapped:!1,clippingPlanes:[o,a,c[y]],clipIntersection:!0})}let d=[],f=(y,x,M)=>{let T=y.split(":")[0],C=u[y]||u[T];if(!C)return console.warn("no material",y),null;let L=new oe(xd(x),C),E=y.endsWith(":e");return L.castShadow=!E&&T!=="base",L.receiveShadow=!E,(M||r[T]).add(L),d.push(L),L};for(let[y,x]of Object.entries(n))f(y,x);let m={};for(let[y,{g:x,k:M}]of Object.entries(Cs)){let T=new me,C=new me;C.name=y,C.add(T),r[x].add(C);for(let[b,F]of Object.entries(M.out()))f(b,F,T);let L=new Gn().setFromObject(T),E=L.getCenter(new H);T.position.copy(E).negate(),C.position.copy(E),C.userData={center:E.clone(),box:L,home:E.clone(),group:x},m[y]=C}if(i.trees!==!1&&e.trees.length){let y=L1(),x=Uc(new li({vertexColors:!0,roughness:.95}));x.clippingPlanes=[o,a,l.ctx];let M=e.trees,T=new Xr(y,x,M.length),C=new ye,L=new Un,E=new H,b=new H,F=new te,z=new H(0,1,0),V=new te("#82966B"),w=new te("#A2AD80");M.forEach(([D,S,R,I],U)=>{let k=Math.sin(D*12.9898+S*78.233)*43758.5453,W=k-Math.floor(k);L.setFromAxisAngle(z,W*6.28),E.set(R*(.9+W*.2),R*(.95+W*.2),R*(.9+W*.2)),b.set(D,I,S),C.compose(b,L,E),T.setMatrixAt(U,C),F.copy(V).lerp(w,W),T.setColorAt(U,F)}),T.castShadow=!0,T.receiveShadow=!0,T.frustumCulled=!1,r.ctx.add(T)}let _=(y,x,M)=>{let T=!1;for(let C=0,L=y.length-1;C<y.length;L=C++){let E=y[C],b=y[L];E[1]>M!=b[1]>M&&x<(b[0]-E[0])*(M-E[1])/(b[1]-E[1])+E[0]&&(T=!T)}return T},g=new tn({color:new te().setRGB(..._d,xn),toneMapped:!1}),p={};return{root:s,groups:r,parts:m,M:u,planes:{px:o,pz:a,pyS:l,pyP:c},meshes:d,secCap:(y,x)=>{let M=y+x;if(p[M])return p[M];let T=As,C=new Ri,L=y==="x"?T.z0:T.x0,E=y==="x"?T.z1:T.x1,b=.05,F=D=>{let S=T.base;for(let[R,I]of e.levels)I>S&&(y==="x"?_(R,x,D):_(R,D,x))&&(S=I);return S},z=L,V=F(L+b/2);for(let D=L+b;D<=E+1e-6;D+=b){let S=D<E-1e-6?F(D+b/2):NaN;S!==V&&(y==="x"?C.box("c","#000000",x+.01,T.base,z,x+.05,V-.02,D):C.box("c","#000000",z,T.base,x-.05,D,V-.02,x-.01),z=D,V=S)}let w=new oe(xd(C.out().c),g);return w.visible=!1,s.add(w),p[M]=w}}}function yd(i,t={}){var q,Q;let e=(q=t.mobile)!=null?q:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),n=new Cc({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Da,n.shadowMap.autoUpdate=!1,n.toneMapping=Ha,n.toneMappingExposure=(Q=t.exposure)!=null?Q:1,n.localClippingEnabled=!0,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",i.appendChild(n.domElement);let s=new Gr,r=new fn(30,1,1,4e3),o=F1(t);s.add(o.root),s.add(new oo("#EEF2F5","#B5AB9A",1.3));let a=new co("#FFF2DF",2.6),l=new H(-.45,.8,.42).normalize(),c=new H(16,4,0);a.position.copy(c).addScaledVector(l,400),a.target.position.copy(c),s.add(a,a.target),a.castShadow=!0;let u=t.sm||(e?2048:4096);a.shadow.mapSize.set(u,u),a.shadow.bias=-3e-4,a.shadow.normalBias=.04,a.shadow.radius=2;let h=J=>{let ot=a.shadow.camera,dt=new ye().lookAt(a.position,a.target.position,new H(0,1,0)).setPosition(a.position).invert(),Ct=1e9,Ot=-1e9,B=1e9,Jt=-1e9,It=1e9,St=-1e9,yt=new H;for(let xe of[J.x0,J.x1])for(let Mt of[J.y0,J.y1])for(let Wt of[J.z0,J.z1])yt.set(xe,Mt,Wt).applyMatrix4(dt),Ct=Math.min(Ct,yt.x),Ot=Math.max(Ot,yt.x),B=Math.min(B,yt.y),Jt=Math.max(Jt,yt.y),It=Math.min(It,yt.z),St=Math.max(St,yt.z);Object.assign(ot,{left:Ct,right:Ot,bottom:B,top:Jt,near:-St-5,far:-It+5}),ot.updateProjectionMatrix(),n.shadowMap.needsUpdate=!0},d=t.shadowBox||{x0:-46,x1:80,z0:-44,z1:46,y0:-4,y1:34};h(d);let f=!0,m=!0,_=!0,g=performance.now(),p=[],v=[],y=new Fc(r,n.domElement,{minR:6,maxR:700,minPhi:.1,maxPhi:1.45,bounds:{x0:-70,x1:100,z0:-70,z1:70},onChange:()=>{f=!0},onStart:()=>{for(let J of p)J()},onWheelHint:()=>{for(let J of v)J()},...t.controls||{}}),x=(J,ot)=>{var Ot;let dt=typeof J=="string"?xr[J]:J,Ct={th:dt.th,ph:dt.ph,r:dt.r,t:new H(...dt.t)};ot?y.set(Ct,!0):y.flyTo(Ct,(Ot=dt.dur)!=null?Ot:1.3)};x(t.view||"ov",!0);let M=o.planes,T=o.groups,C=1e5,L=null,E=null;function b(J){var Ct,Ot,B,Jt,It,St,yt,xe;J=typeof J=="string"?{kind:J}:J;let ot=JSON.stringify(J);if(ot===L)return;L=ot;let dt=J.kind;M.px.constant=C,M.pz.constant=C,E&&(E.visible=!1,E=null);for(let Mt of gr)M.pyS[Mt].constant=C,M.pyP[Mt].constant=C,T[Mt].visible=!0;if(dt==="sec"){M.px.constant=J.x!=null?-J.x:-C,M.pz.constant=J.z!=null?J.z:-C;let Mt=J.x!=null?o.secCap("x",J.x):o.secCap("z",J.z);Mt.visible=!0,E=Mt;for(let Wt of gr)M.pyS[Wt].constant=-C,M.pyP[Wt].constant=-C;if(J.noRoof)for(let Wt of gd)T[Wt].visible=!1}else if(dt!=="ext"){M.px.constant=-C,M.pz.constant=-C;for(let Ee of gd)T[Ee].visible=!1;let Mt=(Ot=(Ct=J.low)!=null?Ct:D1[dt])!=null?Ot:"sw",Wt=(B=J.lo)!=null?B:2.4,Oe=(Jt=J.hi)!=null?Jt:9.4;for(let Ee of"nesw"){let N="H"+Ee,A=Mt.includes(Ee)?Wt:Oe;M.pyS[N].constant=A,M.pyP[N].constant=A}M.pyS.Hi.constant=Oe,M.pyS.AX.constant=(It=J.ax)!=null?It:Mt.includes("n")?4.6:6.4,M.pyP.AX.constant=(St=J.ax)!=null?St:C,M.pyS.OF.constant=(yt=J.of)!=null?yt:6.6,M.pyS.VT.constant=8+((xe=J.vt)!=null?xe:3.6)}n.shadowMap.needsUpdate=!0,f=!0}b(t.mode||"ov");let F={x:.5,y:.5,tx:.5,ty:.5},z=()=>{let J=i.clientWidth||800,ot=i.clientHeight||500;Math.abs(F.x-.5)<1e-4&&Math.abs(F.y-.5)<1e-4?r.clearViewOffset():r.setViewOffset(J,ot,(.5-F.x)*J,(.5-F.y)*ot,J,ot)},V=J=>{if(F.x===F.tx&&F.y===F.ty)return!1;let ot=1-Math.exp(-J*5);return F.x+=(F.tx-F.x)*ot,F.y+=(F.ty-F.y)*ot,Math.abs(F.tx-F.x)+Math.abs(F.ty-F.y)<.001&&(F.x=F.tx,F.y=F.ty),z(),!0},w=()=>{let J=i.clientWidth||800,ot=i.clientHeight||500;n.setSize(J,ot,!1),r.aspect=J/ot,r.updateProjectionMatrix(),z(),f=!0},D=new ResizeObserver(w);D.observe(i),w();let S=new IntersectionObserver(J=>{m=J[0].isIntersecting,m&&(f=!0)});S.observe(i);let R=[],I=[],U=[],k=()=>{for(let J of U)J(r);n.render(s,r);for(let J of R)J(r)},W=0,K=!1,at=0,tt=J=>{if(!_||(requestAnimationFrame(tt),K))return;let ot=Math.max(0,Math.min(.05,(J-g)/1e3));if(g=J,!m||document.hidden)return;let dt=et.animating||J<et.animUntil,Ct=!dt&&et.ambient&&J-W>50;if(dt||Ct){for(let Jt of I)Jt(ot,J/1e3);Ct&&(W=J)}let Ot=y.update(ot),B=V(ot);(f||Ot||B||dt||Ct)&&(k(),f=!1)};requestAnimationFrame(tt);let et={renderer:n,scene:s,camera:r,controls:y,world:o,parts:o.parts,setView:x,VIEWS:xr,setMode:b,mode:()=>JSON.parse(L),animating:!1,animUntil:0,ambient:!1,mobile:e,invalidate:()=>{f=!0},setCenter:(J,ot,dt)=>{F.tx=J,F.ty=ot,dt&&(F.x=J,F.y=ot,z(),f=!0)},hold:J=>{K=J,J?(at=performance.now()/1e3,y.now=()=>at*1e3):y.now=()=>performance.now()},step:J=>{at+=J;for(let ot of I)ot(J,at);y.update(J),k()},setShadowBox:J=>{h(J||d),f=!0},shadowDirty:()=>{n.shadowMap.needsUpdate=!0,f=!0},renderNow:()=>{y.update(1),k()},onRender:J=>R.push(J),onBeforeRender:J=>U.push(J),onFrame:J=>I.push(J),onUserStart:J=>p.push(J),onWheelHint:J=>v.push(J),dispose:()=>{_=!1,D.disconnect(),S.disconnect(),n.dispose(),n.domElement.remove()}};return et}var ri=8+.03,At=.02,Ve=.19,de=1.8+.02,So=-2.2+.02,ne=4+.02,si=8+.24,Eo=Be.y+Be.r+.02,Nc=Te.y+.02,Oc=On.y+On.r+.02,zc=$t.top+.02,vd=We.y+We.r+.02,wo=qn.y+.12,Bc=8+.22+.85+.14,Hc={kind:"ext"},Ao={kind:"ov"},To={kind:"yard"},Fh={kind:"top"},_r={kind:"nw"},Uh={kind:"n",ax:6.6},U1={kind:"n",ax:4.6},Ps={kind:"ov",of:4.9},Vh={kind:"ov",of:4.9,vt:2.6};var Md={kind:"n",low:"ne",ax:4.6},bd={kind:"n",low:"nes",ax:4.6,of:4.9},N1=["f",10.7,At,1.5,[3,0,2],"idle"],Nh=["g",19.7,At,-6.4,[19.7,0,2],"idle"],Sd=[["g",14.6,At,4.8,[8,0,2],"idle"],["g",25,At,2.4,[20,0,0],"idle"],["g",33.6,At,-2.4,[26,0,0],"idle"],["g",34.4,At,6.4,[26,0,4],"idle"]],Oh=["l",31.4,At,2.6,[24,0,1],"idle"],zh=[["k",16.6,At,9.4,[16.6,0,11],"idle"],["k",27,At,9.5,[27,0,10.4],"sit"],["k",28.3,At,11.3,[28.3,0,10.4],"sit"]],O1=()=>[N1,Nh,...Sd,Oh,...zh],z1=[[16.7,-12.1],[18.5,-12],[17.1,-13.7],[18.7,-13.5]],B1=[[15.9,-11.5],[19.3,-11.4],[16.3,-14.3],[19.5,-14.1]],Bh=i=>(i==="down"?B1:z1).map(([t,e])=>["g",t,Ve,e,i==="down"?[t+2,0,e+1]:[13,0,-22],i]),Hh=[["g",24,ne,-26.7,[30,4,-26.7],"idle"],["g",27.4,ne,-9.1,[20,4,-9.1],"idle"]],Ed=["g",38.4,ne,-12.4,[38.4,4,-20],"idle"],wd=["g",15.2,Ve,-21.2,[15.2,0,-15],"walk"],kh=[["k",10.95,Ve,-15.1,[9.6,0,-15.1],"sit"],["k",10.95,Ve,-18.3,[9.6,0,-18.3],"sit"],["k",37.4,Ve,-17.1,[38.6,0,-17.1],"idle"],["k",32.6,Ve,-24.7,[32.6,0,-26.4],"idle"]],Lh=(i={})=>[...i.under===!1?[]:Bh(i.under||"idle"),...i.cat===!1?[]:Hh,Ed,...i.patrol===!1?[]:[wd],...kh],H1=(()=>{let i=Ch(1),t=[[-31.5,ri,36.4]];return i.forEach((e,n)=>{(n%3===0||n===i.length-1)&&t.push([e.x,e.y+.08,e.z])}),t.push([1.4,At,2.4]),t})(),oi=[{b:[0,1,2],mode:Hc,cam:{t:[-6,5,12],r:96,ph:.9,th:-.3},at:[12,8,13.2]},{b:[3,4,5,6],mode:To,cam:{t:[22,1,0],r:66,ph:.95,th:-.62},at:[6,0,2]},{b:[7,8],mode:Fh,cam:{t:[1,2,-21],r:52,ph:.55,th:1.2},at:[-1.1,1.8,-23.4]},{b:[9,10],mode:Uh,cam:{t:[20,2,-27],r:70,ph:.92,th:-2.5},at:[7.2,1.8+4.72,-23.9]},{b:[11,12,13,14,15],mode:Ao,cam:{t:[26,3,-18],r:60,ph:.9,th:-.62},at:[9.5,Te.y,-26.9]},{b:[16,17,18,19],mode:Ps,cam:{t:[50,5,-3],r:62,ph:.9,th:-.55},at:[42,4,6.5]}],ji=[{p:[12,ri,13.15],pl:[12,ri,6],pose:"look",mode:Hc,path:[[12,ri,30],[12,ri,22],[12,ri,13.15]],lab:[["\u56F4\u5899\u4E0A\u584C\u6389\u7684\u7834\u53E3",12,8+3.6,12.2,"item"],["\u4E24\u680B\u663E\u773C\u7684\u5EFA\u7B51\u4E4B\u95F4\u7684\u5C0F\u8DEF",12,8+4.6,22,"note"],["\u4ECE\u7834\u53E3\u5F80\u4E0B\u770B\u5230\u6574\u4E2A\u9662\u5B50",17,6.5,-2,"note"]],cam:{t:[15,1,-2],r:30.8,ph:.97,th:-.17}},{p:[1.4,At,2.4],pl:[6,At,2],pose:"walk",mode:Hc,path:[[12,ri,13.15],[11.2,ri,14.1],[5.6,ri,14.3],[-2.2,4.03,14.3],[-3.9,4.03,14.3],[-3.9,4.03,13.2],[-3.9,At,5.6],[-3.6,At,4.2],[1.4,At,2.4]],lab:[["\u7834\u53E3\u5DE6\u4FA7\u4E0B\u884C\u7684\u53F0\u9636",1.6,8+1.8,14.3,"note"],["90\xB0 \u53F3\u62D0\uFF0C\u518D\u4E0B\u4E00\u5C42",-3.9,6.8,12.2,"note"],["\u51FA\u6765\u53F3\u624B\u8FB9\u5C31\u662F\u5927\u95E8",nn.x,nn.h+2.6,(nn.z0+nn.z1)/2,"item"]],cam:{t:[.5,3,5.5],r:32,ph:1,th:-2.65}},{p:[-9.4,At+.04,2.1],pl:[4,At,2],pose:"walk",mode:Hc,path:H1,lab:[["\u53EF\u4EE5\u901A\u8F66\u7684\u7F13\u5F2F\u8DEF",-41,9.6,20,"note"],["\u5468\u8FB9\u5EFA\u7B51\u53C8\u9AD8\u53C8\u5BC6\uFF0C\u7ED5\u4E0D\u8FC7\u53BB",-22,20,20,"note"],["\u5927\u95E8",nn.x,nn.h+2.6,(nn.z0+nn.z1)/2,"item"]],cam:{t:[-22,3,14],r:58,ph:.62,th:-1.3}},{p:[6,At,2],pl:[12,At,1],pose:"look",mode:To,path:[[1.4,At,2.4],[6,At,2]],u:O1(),lab:[["\u5DE6\u4FA7\uFF1A\u8F66\u95F4\uFF0C\u95E8\u534A\u5F00\uFF0C\u6709\u4EBA\u5B88\u7740",19.7,6.4,-8.6,"note"],["\u6B63\u524D\u65B9\uFF1A\u4E8C\u5C42\u5ECA\u6865",41,8.8,-3.5,"note"],["\u53F3\u4FA7\uFF1A\u5C0F\u5F97\u591A\u7684\u4E8C\u5C42\u697C",41,12.8,6,"note"],["\u76D1\u5DE5\u548C\u5C0F\u63A8\u8F66",10.4,4.2,1.8,"item"]],cam:{t:[14,0,1],r:40,ph:.85,th:-1.5}},{p:[9.2,At,.9],pl:[10.7,At,1.5],pose:"talk",mode:To,path:[[6,At,2],[9.2,At,.9]],u:[["f",10.7,At,1.5,[9.2,0,.9],"talk"],Nh,...Sd,Oh,...zh],lab:[["\u76D1\u5DE5\uFF1A\u53EA\u6709\u603B\u7BA1\u77E5\u9053",10.7,4.2,1.5,"note"],["\u76EE\u6807\uFF1A\u627E\u5230\u603B\u7BA1",9.2,5.6,.9,"item"]],cam:{t:[10.2,1.4,1.2],r:15,ph:1.05,th:.8}},{p:[9.5,At,1.1],pl:[10.8,At,1.6],pose:"push",mode:To,path:[[9.2,At,.9],[9.5,At,1.1]],u:[["f",10.8,At,1.6,[9.5,0,1.1],"cower"],Nh,["g",14.2,At,4.4,[9.5,0,1.1],"aim"],["g",15.4,At,-2.6,[9.5,0,1.1],"aim"],["g",6.4,At,-4.6,[9.5,0,1.1],"aim"],Oh,...zh],ar:[[[14.2,1.5,4.4],[9.9,1.3,1.3],"mg"],[[15.4,1.5,-2.6],[9.9,1.3,1],"mg"],[[6.4,1.5,-4.6],[9.3,1.3,.6],"mg"]],lab:[["\u5468\u56F4\u90FD\u662F\u62A4\u536B\uFF0C\u5A01\u80C1\u5931\u8D25",12,4.6,-1.4,"warn"],["\u65B0\u76EE\u6807\uFF1A\u627E\u4E2A\u843D\u5355\u7684\u5DE5\u4EBA\u95EE",9.5,5.8,1.1,"item"]],cam:{t:[11,1,.6],r:22,ph:.95,th:1}},{p:[19.7,At,-3.7],pl:[19.7,At,-6.4],pose:"stab",mode:To,path:[[9.5,At,1.1],[15.6,At,-1.6],[19.7,At,-3.7]],u:[["g",19.7,At,-5.6,[19.7,0,-3],"stumble"],["g",24.2,At,-1.2,[19.7,0,-3.7],"run"],["g",15.8,At,2.2,[19.7,0,-3.7],"run"],["l",27.4,At,.6,[19.7,0,-3.7],"aim"],["f",11.6,At,1.2,[6,0,1],"cower"]],ep:[[[25,At,2.4],[24.2,At,-1.2]],[[14.6,At,4.8],[15.8,At,2.2]],[[31.4,At,2.6],[27.4,At,.6]]],lab:[["\u9760\u8FD1\u8F66\u95F4\u95E8\uFF1A\u62A4\u536B\u8B66\u544A",19.7,4.6,-7.4,"warn"],["\u575A\u6301\u9760\u8FD1\u5C31\u5F00\u6218\uFF0C\u6574\u4E2A\u5DE5\u574A\u654C\u5BF9",25,5.6,3.4,"warn"],["\u6253\u8D25\u62A4\u536B\u5934\u76EE\uFF1A\u62FF\u5230\u5B57\u6761\uFF0C\u77E5\u9053\u603B\u7BA1\u5728\u54EA",27.4,3.8,.6,"item"]],cam:{t:[21,1.6,-1.6],r:26,ph:1,th:1}},{p:[5,de,-17.4],pl:[-1,de,-23.2],pose:"walk",mode:Fh,path:[[9.2,At,.9],[6.4,At,-5.4],[5.8,At,-7.8],[5.8,de,-10.9],[5.2,de,-13],[5,de,-17.4]],u:[["w",-1.1,de,-23.4,[.6,0,-23.4],"sit"],["k",.35,de,-24.3,[-1.1,0,-23.4],"talk"],["k",.5,de,-22.5,[-1.1,0,-23.4],"idle"]],lab:[["\u8F66\u95F4\u548C\u5916\u56F4\u5EFA\u7B51\u5939\u51FA\u7684\u5C0F\u8DEF",5.8,6.8,-12.6,"note"],["\u4E00\u6BB5\u5411\u4E0A\u7684\u53F0\u9636",5.8,3.8,-9.4,"note"],["\u5DE5\u4EBA\u4F4F\u5904\u7684\u667E\u8863\u5C0F\u9662",-.6,7.2,-22.6,"note"]],cam:{t:[1.5,2.5,-21.5],r:30,ph:.5,th:1.4}},{p:[.3,de,-23.35],pl:[-1.5,de,-23.45],pose:"push",mode:Fh,path:[[5,de,-17.4],[4.6,de,-19.6],[2.6,de,-21.6],[.3,de,-23.35]],u:[["w",-1.5,de,-23.45,[.3,0,-23.35],"cower"],["n",-.9,de,-24.85,[-.9,0,-26],"walk"],["n",1.6,de,-24.75,[1.6,0,-26],"walk"]],np:[[[.35,de,-24.3],[-.4,de,-24.75],[-.9,de,-24.85]],[[.5,de,-22.5],[1.4,de,-23.5],[1.6,de,-24.75]]],ar:[[[.3,1.8+1.6,-23.35],[7.4,7.6,-23.5],"mg"]],lab:[["\u4E09\u540D\u5DE5\u4EBA\u804A\u4E86\u4E24\u53E5\uFF0C\u4E24\u540D\u56DE\u5C4B",-.9,1.8+3.6,-25.6,"note"],["\u7559\u4E0B\u4F11\u606F\u7684\u5DE5\u4EBA\uFF1A\u5A01\u80C1\u4ED6",-1.6,1.8+2.5,-22.6,"item"],["\u8F6C\u8EAB\u5C31\u770B\u5230\u4FA7\u7A97\u548C\u722C\u4E0A\u53BB\u7684\u53F0\u9636",6.4,6.6,-20.4,"item"]],cam:{t:[2,3,-23],r:30,ph:.43,th:-.85}},{p:[7.2,1.8+4.74,-23.9],pl:[8.4,7.4,-23.6],pose:"climb",mode:Uh,path:[[.3,de,-23.35],[3.6,de,-22.5],[4.6,de,-22.5],[5.6,1.8+1.32,-22.5,1],[7,1.8+2.37,-22.35,1],[7,1.8+3.54,-23.4,1],[7.2,1.8+4.74,-23.9,1],[7.6,1.8+4.74,-23.6],[8.25,7.04,-23.6,1],[8.9,Eo,-23.4]],lab:[["\u9AD8\u5904\u5F00\u7740\u7684\u4FA7\u7A97",7.6,9.7,-23.6,"item"],["\u9C9C\u4EAE\u7684\u957F\u5E03\u6761",7.2,7.4,-26.5,"note"],["\u7BB1\u5B50\u548C\u65E7\u9505\u7089\u5806\u6210\u7684\u53F0\u9636",5.6,4.6,-21.2,"note"]],cam:{t:[6,5,-23],r:24,ph:.85,th:-1.2}},{p:[33.42,1.6,-30.1],pl:[34.2,1.6,-30.1],pose:"climb",mode:Uh,path:[[.3,de,-23.35],[3.4,de,-24.6],[4.4,de,-26.6],[4.6,de,-28.8],[5.4,de,-29.5],[5.3,So,-31.6,1],[8.4,So,-32.6],[12,So,-31.6],[33,So,-31],[33.42,So,-30.1],[33.42,3.9,-30.1,1],[33.9,3.88,-31.3,1],[35.4,ne,-31.4]],lab:[["\u6CBF\u8F66\u95F4\u8FDC\u7AEF\u8D70\u5230\u6C5F\u8FB9\u5C3D\u5934",20,1.9,-33.4,"note"],["\u987A\u7740\u7BA1\u9053\u5F80\u4E0A",33.4,6.8,-29.6,"item"],["\u6742\u7269\u95F4",39,9.4,-31.3,"note"]],cam:{t:[28,1.6,-30],r:30,ph:1,th:-2.65}},{p:[8.95,Eo,-23],pl:[14,4,-20],pose:"crouch",mode:_r,path:[[8.25,7.04,-23.6],[8.95,Eo,-23.1]],u:Lh(),ep:[[[15.2,Ve,-25],[15.2,Ve,-14.5]]],lab:[["\u7AD6\u5411\u7BA1\u9053\u6321\u4F4F\u521A\u8FDB\u6765\u7684\u73A9\u5BB6",10.3,10,-23.5,"item"],["\u4E0B\u65B9\u8D70\u52A8\u7684\u62A4\u536B",15.2,3.8,-19.4,"warn"]],cam:{t:[10,6,-22.5],r:18,ph:1.1,th:1.6}},{p:[9.5,Nc,-26.9],pl:[26,6,-16],pose:"look",mode:_r,path:[[8.95,Eo,-23.1],[8.95,Eo,-26.2],[9.5,Nc,-26.9]],u:Lh(),lab:[["\u8D34\u7740\u897F\u5899\u7684\u64CD\u7EB5\u5E73\u53F0",11,6.6,-17.3,"note"],["\u540A\u706F\u4E00\uFF0C\u4E0B\u9762\u4E09\u56DB\u4E2A\u62A4\u536B",ue.x,ue.y+1.7,ue.z,"item"],["\u4E2D\u592E\u7684\u538B\u529B\u7F50",$t.x,9.8,$t.z,"note"],["\u4E1C\u5357\u89D2\u4E8C\u5C42\u7684\u8FC7\u9053\u5165\u53E3",41,8.6,-8.8,"item"],["\u4E0D\u592A\u7A33\u7684\u8FC7\u9053",24,6.4,-26.9,"note"]],cam:{t:[20,2,-17],r:36,ph:.88,th:-2.29}},{p:[27.3,zc,-18.9],pl:[32,7,-14],pose:"sneak",mode:Ao,path:[[9.5,Nc,-26.9],[12.4,Oc,-26.9,1],[19,Oc,-26.9],[26,Oc,-26.9],[26,Oc,-21.4],[26,zc,-20.4],[27.3,zc,-18.9],[28.4,zc,-16.6],[31.15,wo,-14,1],[31.45,wo,-12.64],[32.6,wo,-12.1],[33.75,wo,-12.64],[34.1,wo,-13.6],[37.2,vd,-13.2,1],[37.2,vd,-9.8],[37.8,ne,-9.4,1],[40.4,ne,-9.2],[41,ne,-8.2]],u:Lh({patrol:!1}),lab:[["\u5DE6\u4FA7\u6C34\u7BA1",18.6,8.6,-27,"note"],["\u538B\u529B\u7F50\u9876",$t.x,9,$t.z-.4,"note"],["\u540A\u706F\u4E8C",qn.x,9.8,qn.z,"note"],["\u8FC7\u9053\u5165\u53E3\u9644\u8FD1\u7684\u6C34\u7BA1",We.x,9.1,-11.4,"note"],["\u4E0B\u53BB\u6E9C\u8FDB\u8FC7\u9053",41,7.4,-8.8,"item"]],cam:{t:[26,4,-17],r:44,ph:.95,th:-.6}},{p:[9.5,Nc,-26.9],pl:[ue.x,ue.y,ue.z],pose:"throw",mode:_r,u:[...Bh("down"),["g",27.4,1.6,-9.6,[27.4,0,-6],"fall"],Hh[0],Ed,wd,...kh],ar:[[[9.8,8.4,-26.6],[ue.x,ue.y+.3,ue.z-.2],"atk"],[[9.8,8.4,-26.6],[28,4.3,-9.2],"atk"]],fx:[["shock",ue.x,Ve+.05,ue.z,3.4]],lab:[["\u51FB\u843D\u540A\u706F\uFF0C\u4E00\u4E0B\u7838\u5012\u4E09\u56DB\u4E2A\u62A4\u536B",ue.x,4.8,ue.z,"warn"],["\u6253\u788E\u4E0D\u7A33\u7684\u8FC7\u9053\uFF0C\u4E0A\u9762\u7684\u62A4\u536B\u6389\u4E0B\u53BB",28.4,6.8,-9.1,"warn"]],cam:{t:[18,2,-15],r:34,ph:.95,th:-2.2}},{p:[36,ne,-29.6],pl:[38.6,0,-31],pose:"crouch",mode:U1,path:[[35.4,ne,-31.4],[36,ne,-29.6],[38.6,ne,-28.7],[40.6,ne,-27.4],[39.6,ne,-20],[38.6,ne,-11.2],[40.4,ne,-9.2],[41,ne,-8.2]],u:[["g",37.3,Ve,-24.6,[39,0,-30],"run"],["g",36.4,Ve,-20.2,[39,0,-30],"run"],...Bh("idle"),Hh[1],...kh],ep:[[[30,Ve,-19],[37.3,Ve,-24.6],[38.8,Ve,-28.4]],[[31,Ve,-11.6],[36.4,Ve,-20.2],[39.6,Ve,-27.8]]],fx:[["fire",39.3,Ve,-30.9,1.8,{h:2.2}],["smoke",39.2,Ve+3,-30.9,1.3,{h:12,op:.62,color:"#48443F",n:8}]],lab:[["\u4E00\u697C\u7684\u6613\u71C3\u7269\uFF1A\u70B9\u706B",39.4,3.4,-31,"warn"],["\u62A4\u536B\u88AB\u5F15\u8FC7\u53BB",34.8,3.6,-21.6,"note"],["\u4ECE\u4E8C\u5C42\u6E9C\u8FDB\u8FC7\u9053",39.4,7.4,-16,"item"]],cam:{t:[38,2,-24],r:34,ph:.6,th:-2}},{p:[42.2,ne,6.7],pl:[41.2,ne,9.3],pose:"push",mode:Ps,path:[[41,ne,-8.2],[41,ne,-4],[41,ne,1.6],[41.6,ne,3.2],[44,ne,4.6],[44,ne,5.8],[42.2,ne,6.7]],u:[["m",41.1,ne,9.4,[42.2,4,6.7],"cower"]],lab:[["\u5ECA\u6865\u5DE6\u8FB9\u7684\u7A97\uFF1A\u770B\u5F97\u5230\u8D27\u68AF\u548C\u540E\u9762\u9AD8\u5904\u7684\u5E93\u623F",50.2,13.8,-5,"item"],["\u603B\u7BA1\uFF1A\u4E0A\u7B49\u8D27\u5B9A\u671F\u4ECE\u540E\u9762\u7684\u5E93\u623F\u8FD0\u51FA\u53BB",41.1,7.8,9.4,"note"]],cam:{t:[42,4.5,6.5],r:20,ph:.95,th:2.8}},{p:[47.2,At,-3.6],pl:[48,At,-5],pose:"stab",mode:Ps,path:[[41,ne,-4],[41,ne,1.6],[41,ne,3],[43.6,ne,4.6],[44,ne,5.6],[45.2,ne,8.6],[45.3,ne,9.6],[46.4,ne,9.6],[ve.x,ne,ve.z0-.7],[ve.x,At,ve.z1],[48.2,At,-.4],[47.2,At,-3.6]],u:[["m",48,At,-4.6,[50,0,-4.6],"stumble"]],ep:[[[41.8,ne,9],[45.2,ne,9.6],[46.9,ne,9.6],[ve.x,ne,ve.z0-.7],[ve.x,At,ve.z1],[48.6,At,-.6],[48,At,-4.6]]],lab:[["\u8FDB\u4E86\u5ECA\u6865\uFF1A\u603B\u7BA1\u5DF2\u7ECF\u8DD1\u5411\u8D27\u68AF",50.1,6.4,-5.1,"warn"],["\u4ECE\u5916\u6302\u697C\u68AF\u8DD1\u4E0B\u53BB",48.6,7.2,6.2,"note"],["\u8FFD\u4E0A\u53BB\u6253\u8D25\u4ED6\uFF0C\u4E0D\u96BE",46.6,3.8,-2.6,"note"]],cam:{t:[46,2,0],r:28,ph:.9,th:-2.3}},{p:[53.2,ri,-9.6],pl:[54,9.6,-10.6],pose:"sneak",mode:Ps,path:[[50.1,.44,-5.1],[50.1,8+.02,-5.1,1],[53,8+.02,-5.1],[53.2,ri,-9.6],[54.2,9.4,-10.6,1],[55.2,si,-10.9,1]],lab:[["\u5E93\u623F\u5927\u95E8\u5173\u7740",53.4,12.8,-5.1,"warn"],["\u5DE6\u8FB9\u4E00\u6247\u5F00\u7740\u7684\u7A97",53.4,12.2,-10.6,"item"]],cam:{t:[53,9,-7.6],r:24,ph:1,th:-1.3}},{p:[61,Bc,-8.6],pl:[64,Bc,-8.6],pose:"crouch",mode:Vh,path:[[55.2,si,-10.9],[55.5,si,-8.6],[55.8,si,-7.3],[58.9,si,-7.3],[59.05,si+.04,-8.6],[60.4,Bc,-8.6],[61,Bc,-8.6]],u:[["k",60.2,si,-5.1,[61.2,9,-3.9],"idle"],["k",66,si,-4.4,[69.4,9,-3.4],"walk"]],np:[[[61.6,si,-7.3],[62.6,si,-5.4],[66,si,-4.4]]],ar:[[[68,9.6,-8.6],[75.4,9.6,-8.6],"mg"],[[77.5,9.6,-7.6],[77.5,9.6,8],"mg"]],lab:[["\u4E09\u9762\u6321\u4F4F\u7684\u9690\u853D\u89D2\u843D",55.8,11.8,-12.6,"note"],["\u4E00\u540D\u5DE5\u4EBA\u53BB\u642C\u8D27\uFF0C\u8F66\u5C3E\u7A7A\u51FA\u6765",66,11.4,-4.4,"note"],["\u85CF\u8FDB\u7BF7\u8F66\uFF0C\u5F00\u5F80\u9AD8\u697C",61.4,13,-8.6,"item"]],cam:{t:[61,9,-8.6],r:24,ph:.95,th:-.62}}],kc={14:{ch1:1,cwS3:1},17:{cage:.35},18:{cage:1},19:{cage:1}},Td={ch1:{drop:ue.y-.9-Ve-.05,tilt:[.12,.5,-.08]},ch2:{drop:qn.y-.9-Ve-.05,tilt:[-.1,.3,.1]},cwS3:{hinge:"x0",ang:-.92},cwS2:{hinge:"x1",ang:.92},cwN2:{hinge:"x0",ang:-.92},cage:{lift:8-.4}};var yr=(i,t={})=>new li({color:i,roughness:.75,metalness:0,...t}),k1={p:{H:1.8,body:"#C47A22",head:"#E3BC93",limb:"#A8661C",hat:"#6F4A1E",ring:"#E7A537"},t:{H:1.78,body:"#3F7F8C",head:"#D9B896",limb:"#2F6470",ring:"#5FA8B5"},g:{H:1.82,body:"#3A4044",head:"#9C8C7C",limb:"#2C3134",gun:"#22272A",ring:"#B5462F"},l:{H:1.86,body:"#7A2E25",head:"#B79C84",limb:"#5A231C",hat:"#3A2420",ring:"#B5462F"},n:{H:1.72,body:"#9A8F80",head:"#C9AE92",limb:"#7F7568",ring:"#A9A090"},w:{H:1.74,body:"#7D8C8E",head:"#D2B392",limb:"#64716F",ring:"#E7A537"},k:{H:1.74,body:"#7D8C8E",head:"#D2B392",limb:"#64716F",ring:"#A9A090"},f:{H:1.78,body:"#8C6F4E",head:"#D9B896",limb:"#6E563C",hat:"#5A4632",ring:"#C9B48E"},m:{H:1.76,body:"#4E4A5C",head:"#D2B392",limb:"#3A3746",hat:"#2E2B36",ring:"#E7A537"}};function Vc(i){let t=k1[i],e=t.H,n=new me,s=new me;n.add(s),s.position.y=e*.5;let r=yr(t.body),o=yr(t.head),a=yr(t.limb),l=new oe(new Zr(e*.13,e*.26,4,10),r);l.position.y=e*.2,s.add(l);let c=new oe(new io(e*.1,14,10),o);c.position.y=e*.44,s.add(c);let u=(p,v,y)=>{let x=new me,M=new oe(new ti(p,v,p),y);return M.position.y=-v/2,x.add(M),x},h=u(e*.07,e*.34,a),d=u(e*.07,e*.34,a);h.position.set(-e*.17,e*.33,0),d.position.set(e*.17,e*.33,0);let f=u(e*.085,e*.46,a),m=u(e*.085,e*.46,a);if(f.position.set(-e*.07,0,0),m.position.set(e*.07,0,0),s.add(h,d,f,m),t.gun){let p=new oe(new ti(e*.04,e*.04,e*.5),yr(t.gun));p.position.set(0,-e*.32,e*.14),d.add(p)}if(t.hat){let p=new oe(new Ei(e*.1,e*.13,e*.06,14),yr(t.hat));p.position.y=e*.52,s.add(p);let v=new oe(new Ei(e*.075,e*.085,e*.08,14),yr(t.hat));v.position.y=e*.57,s.add(v)}let _=new oe(new nr(e*.32,e*.42,28),new tn({color:t.ring,transparent:!0,opacity:.85,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=.04,_.renderOrder=2,n.add(_),n.traverse(p=>{p.isMesh&&p!==_&&(p.castShadow=!0,p.receiveShadow=!1)});let g={root:n,hips:s,torso:l,armL:h,armR:d,legL:f,legR:m,H:e,kind:i,ring:_,pose(p="idle",v=0){s.rotation.set(0,0,0),s.position.set(0,e*.5,0);for(let M of[h,d,f,m])M.rotation.set(0,0,0);let y=Math.sin(v*9),x=!1;switch(p){case"walk":{let M=Math.sin(v*5.5);f.rotation.x=.38*M,m.rotation.x=-.38*M,h.rotation.x=-.3*M,d.rotation.x=x?-.15:.3*M;break}case"run":s.rotation.x=.22,f.rotation.x=.7*y,m.rotation.x=-.7*y,h.rotation.x=-.6*y,d.rotation.x=x?-.3:.6*y;break;case"stumble":s.rotation.x=.5,f.rotation.x=.5*y,m.rotation.x=-.5*y,h.rotation.z=-1.1,d.rotation.z=1.1,s.position.y=e*.46;break;case"throw":d.rotation.x=-2.1,h.rotation.x=.5,f.rotation.x=-.35,m.rotation.x=.3;break;case"cast":h.rotation.set(-2.7,0,-.35),d.rotation.set(-2.7,0,.35);break;case"slam":s.rotation.x=-.15,h.rotation.x=-3,d.rotation.x=-3;break;case"charge":s.rotation.x=.55,d.rotation.x=-1.35,h.rotation.x=-.6,f.rotation.x=.8*y,m.rotation.x=-.8*y;break;case"fly":s.rotation.x=.35,f.rotation.x=.7,m.rotation.x=.5,h.rotation.z=-.9,d.rotation.z=.9;break;case"fall":s.rotation.x=-.4,h.rotation.z=-2.2,d.rotation.z=2.2,f.rotation.x=-.6,m.rotation.x=.4;break;case"down":s.rotation.x=-1.45,s.position.y=e*.14,h.rotation.z=-.5,d.rotation.z=.5,f.rotation.x=.1;break;case"grab":s.rotation.x=.3,h.rotation.x=-1.5,x?d.rotation.x=-1.5:d.rotation.set(.45,0,.5);break;case"held":s.rotation.x=-.3,f.rotation.x=.5,m.rotation.x=.2,h.rotation.z=-1.2,d.rotation.z=1.2,s.position.y=e*.62;break;case"burn":h.rotation.set(-.6+.4*y,0,-1.1),d.rotation.set(-.6-.4*y,0,1.1),s.rotation.z=.1*y;break;case"dodge":s.rotation.z=.5,s.position.y=e*.4,f.rotation.x=-.9,m.rotation.x=.6,h.rotation.z=-1;break;case"push":s.rotation.x=-.35,f.rotation.x=-.5,m.rotation.x=.4,h.rotation.x=-1.4,d.rotation.x=-1.4;break;case"sneak":{let M=Math.sin(v*4.5);s.position.y=e*.38,s.rotation.x=.35,f.rotation.x=-.7+.35*M,m.rotation.x=-.7-.35*M,h.rotation.x=-.5,d.rotation.x=-.5;break}case"crouch":s.position.y=e*.32,s.rotation.x=.25,f.rotation.x=-1.1,m.rotation.x=-.5,h.rotation.x=-.6,d.rotation.x=-.9;break;case"sidle":{let M=Math.sin(v*3.5);h.rotation.z=-.5,d.rotation.z=.5,f.rotation.z=-.15*M,m.rotation.z=.15*M;break}case"climb":{let M=Math.sin(v*5);h.rotation.x=-2.8+.4*M,d.rotation.x=-2.8-.4*M,f.rotation.x=-.6+.4*M,m.rotation.x=-.6-.4*M;break}case"talk":{let M=Math.sin(v*3);d.rotation.set(-1+.35*M,0,.3),h.rotation.set(-.4-.2*M,0,-.25);break}case"bid":{let M=Math.abs(Math.sin(v*2.4));d.rotation.set(-2.6+.3*M,0,.15),h.rotation.set(-1.2,0,-.4),s.rotation.x=-.06;break}case"look":s.rotation.x=.12,h.rotation.set(-.3,0,-.15),d.rotation.set(-.3,0,.15);break;case"aim":d.rotation.x=-1.5,h.rotation.set(-1.5,0,.45),f.rotation.x=-.2,m.rotation.x=.25;break;case"stab":s.rotation.x=.35,d.rotation.x=-1.7,h.rotation.set(-1.9,0,.5),f.rotation.x=-.5,m.rotation.x=.4;break;case"shoot":{let M=Math.sin(v*40)*.03;s.rotation.x=.25,s.position.y=e*.44,d.rotation.x=-1.35+M,h.rotation.set(-1.35+M,0,.35),f.rotation.x=-.7,m.rotation.x=.2;break}case"blown":s.rotation.x=-1.1,h.rotation.z=-2,d.rotation.z=2,f.rotation.x=-.8,m.rotation.x=.5;break;case"sit":s.position.y=e*.27,f.rotation.x=-1.45,m.rotation.x=-1.35,h.rotation.x=-.45,d.rotation.x=-.5;break;case"cower":s.position.y=e*.3,s.rotation.x=.5,f.rotation.x=-1.2,m.rotation.x=-1.2,h.rotation.set(-2.6,0,-.5),d.rotation.set(-2.6,0,.5);break;case"wave":{let M=Math.sin(v*6);d.rotation.set(-2.8,0,.4+.35*M),h.rotation.z=-.1;break}default:h.rotation.z=-.08,d.rotation.z=.08}}};return g.pose("idle"),g}function Gc(i=1.5,t=1,e={}){let n=new me,s=new tn({color:"#EC6E2A",transparent:!0,opacity:.9}),r=new tn({color:"#F6B63E",transparent:!0,opacity:.95}),o=Math.max(3,Math.round(i*3.2)),a=e.h||1;for(let l=0;l<o;l++){let c=l*2.39996+t,u=i*Math.sqrt((l+.5)/o)*.8,h=(.9+(l*7+t*3)%5*.22)*a,d=new oe(new Ks(.28+.1*(l%2),h,6),l%3?s:r);d.position.set(Math.cos(c)*u,h/2,Math.sin(c)*u),d.userData.h=h,d.userData.k=l*1.7+t,n.add(d)}if(e.spot!==!1){let l=new oe(new Jr(i*1.15,28),new tn({color:"#EC6E2A",transparent:!0,opacity:.28,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.05,n.add(l)}return n.userData.tick=l=>{for(let c of n.children)c.userData.h&&(c.scale.y=.8+.35*Math.abs(Math.sin(l*6+c.userData.k)))},n}function Wc(i=1,t={}){let e=new me,n=t.h||10,s=t.n||7,r=new Gi(1,1);for(let o=0;o<s;o++){let a=new oe(r,new tn({color:t.color||"#5F5B57",transparent:!0,opacity:.4,depthWrite:!1}));a.userData.k=o/s,e.add(a)}return e.userData.tick=(o,a=1)=>{for(let l of e.children){let c=(o*(t.v||.16)+l.userData.k)%1,u=i*(.45+1.1*c);l.position.set(Math.sin(c*5+l.userData.k*9)*.35*i+(t.dx||0)*c,c*n,Math.cos(c*4+l.userData.k*7)*.3*i+(t.dz||0)*c),l.scale.set(u,u*.8,u),l.material.opacity=(t.op||.42)*a*Math.min(1,c*6)*(1-c*c)}},e}function Xc(i=1){let t=new tn({color:"#FFD27A",transparent:!0,opacity:.9,depthWrite:!1}),e=new oe(new Gi(i,1),t);return e.userData.at=n=>{e.scale.setScalar(.3+1.2*n),t.opacity=.9*(1-n)},e}function qc(i=4){let t=new tn({color:"#F3E3C2",transparent:!0,opacity:.8,depthWrite:!1,side:wn}),e=new oe(new nr(.86,1,48),t);return e.rotation.x=-Math.PI/2,e.userData.at=n=>{e.scale.setScalar(.4+i*n),t.opacity=.8*(1-n)},e}function vr(i,t,e,n={}){var d,f;let s=i.map(m=>new H(...m)),r=s.length>2?new fs(s,!1,"centripetal",.2):new tr(s[0],s[1]||s[0].clone().add(new H(0,.01,0))),o=r.getLength(),a=Math.max(8,Math.round(o*3)),l=[];if(n.dash){let[m,_]=n.dash,g=Math.max(1,Math.floor(o/(m+_)));for(let p=0;p<g;p++){let v=p*(m+_)/o,y=Math.min(1,(p*(m+_)+m)/o),x=[];for(let M=0;M<=4;M++)x.push(r.getPointAt(v+(y-v)*M/4));l.push(new ir(new fs(x),4,t,6,!1))}}else l.push(new ir(r,a,t,7,!1));let c=new me,u=new tn({color:e,transparent:!!n.opacity,opacity:(d=n.opacity)!=null?d:1}),h=new tn({color:e,transparent:!0,opacity:(f=n.xray)!=null?f:.22,depthTest:!1,depthWrite:!1});for(let m of l){let _=new oe(m,u),g=new oe(m,h);g.renderOrder=5,c.add(_,g)}if(n.every){let m=new Ks(t*2.6,t*5,10);m.rotateX(Math.PI/2);let _=Math.max(1,Math.floor(o/n.every));for(let g=1;g<=_;g++){let p=Math.min(.999,(g-(n.last?0:.5))/_),v=r.getPointAt(p),y=r.getTangentAt(p);for(let x of[u,h]){let M=new oe(m,x);M.position.copy(v),M.lookAt(v.clone().add(y)),x===h&&(M.renderOrder=5),c.add(M)}}}return c.userData.length=o,c.userData.curve=r,c}function Yc(i,t,e,n={}){var l,c;let s=new H(...i),r=new H(...t),o=s.clone().lerp(r,.5);o.y+=s.distanceTo(r)*((l=n.arc)!=null?l:.12);let a=[];for(let u=0;u<=10;u++){let h=u/10,d=s.clone().multiplyScalar((1-h)*(1-h)).add(o.clone().multiplyScalar(2*h*(1-h))).add(r.clone().multiplyScalar(h*h));a.push([d.x,d.y,d.z])}return vr(a,(c=n.r)!=null?c:.12,e,{dash:n.dash,every:999,last:!0,xray:.3})}var V1=i=>{let t=7+i.length*13+i.charCodeAt(i.length-1)*3;return()=>(t=(t*9301+49297)%233280)/233280};function Zc(i){let t=i.world,e=i.parts;function n(h){let d=e[h];d&&(d.position.copy(d.userData.home),d.rotation.set(0,0,0),d.visible=!0)}function s(h,d){let f=e[h],m=Td[h];if(!f)return;if(!m||d<=0){n(h);return}let _=f.userData.home,g=f.userData.box;if(m.drop!=null){let p=Math.min(1,d)**2;f.position.set(_.x,_.y-m.drop*p,_.z),f.rotation.set(m.tilt[0]*p,m.tilt[1]*p,m.tilt[2]*p)}else if(m.hinge){let p=m.hinge==="x0"?g.min.x:g.max.x,v=g.max.y,y=m.ang*Math.min(1,d),x=_.x-p,M=_.y-v,T=Math.cos(y),C=Math.sin(y);f.position.set(p+x*T-M*C,v+x*C+M*T,_.z),f.rotation.set(0,0,y)}else m.lift!=null&&(f.position.set(_.x,_.y+m.lift*Math.min(1,d),_.z),f.rotation.set(0,0,0))}function r(h,d,f,m,_=0){let g=e[h];g&&(g.position.set(d,f,m),g.rotation.set(0,_,0))}function o(h){let d=kc[h]||{};for(let f of Object.keys(e))s(f,d[f]||0);i.shadowDirty()}let a=new ti(1,1,1),l={},c=h=>l[h]||(l[h]=new li({color:h,roughness:.85}));function u(h,d,f=["#6F6A60","#8A8376","#B08D57"]){let m=e[h];if(!m)return null;let _=m.userData.box,g=V1(h+"b"),p=new me,v=[],y=(_.min.x+_.max.x)/2,x=(_.min.z+_.max.z)/2;for(let T=0;T<16;T++){let C=[.15+g()*.35,.1+g()*.2,.15+g()*.35],L=new oe(a,c(f[T%f.length]));L.scale.set(...C),L.castShadow=!0;let E=new H(y+(g()-.5)*2.4,d+.3,x+(g()-.5)*2.4),b=g()*6.28,F=2+g()*3.5,z=new H(Math.cos(b)*F,2+g()*3,Math.sin(b)*F),V=14,w=(z.y+Math.sqrt(z.y*z.y+2*V*(E.y-d-C[1]/2)))/V;v.push({m:L,p0:E,vel:z,gy:V,tl:w,ax:new H(g()-.5,g()-.5,g()-.5).normalize(),w:4+g()*8}),p.add(L)}t.root.add(p),p.visible=!1;let M=new Un;return{g:p,at(T){if(T<0){p.visible=!1;return}p.visible=!0;for(let C of v){let L=Math.min(T,C.tl);C.m.position.set(C.p0.x+C.vel.x*L,C.p0.y+C.vel.y*L-C.gy*L*L/2,C.p0.z+C.vel.z*L),M.setFromAxisAngle(C.ax,C.w*L),C.m.quaternion.copy(M)}},dispose(){t.root.remove(p)}}}return{set:s,at:o,move:r,burst:u,reset:n}}function Jc(i,t){let e=document.createElement("div");e.className="bs-lay",t.appendChild(e);let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("aria-hidden","true"),n.style.cssText="width:100%;height:100%;overflow:visible;pointer-events:none;will-change:auto",e.appendChild(n);let s=[],r=new H,o=[];for(let g=8;g<=48;g+=8)o.push([0,-g],[0,g],[g,0],[-g,0]);let a="",l=".sbx-nda,.sbx-tb .grp,.sbx-tour,.sbx-hint,.sbx-cap,.sbx-x,.sbx-pop,.stg-cap,.stg-tl,.stg-next",c=[],u=-1e9,h=()=>{let g=t.getBoundingClientRect();c=[...t.querySelectorAll(l)].filter(p=>p.offsetWidth&&!p.hidden&&getComputedStyle(p).visibility!=="hidden"&&+getComputedStyle(p).opacity>.1).map(p=>{let v=p.getBoundingClientRect();return[v.left-g.left-3,v.top-g.top-3,v.right-g.left+3,v.bottom-g.top+3]})};function d(g,p,v,y){let x=document.createElement(y?"button":"span");y&&(x.type="button"),x.className=g,x.innerHTML=p,x.style.display="none",e.appendChild(x);let M={e:x,p:typeof v=="function"?null:new H(...v),fn:typeof v=="function"?v:null,on:!1,shown:!1,lab:/\bbs-lab\b/.test(g),w:0,h:0};return s.push(M),M}function f(g){let p=s.indexOf(g);p>=0&&s.splice(p,1),g.e.remove()}let m=g=>{g.shown&&(g.e.style.display="none",g.shown=!1)},_=(g,p,v)=>{g.e.style.transform=`translate(${p.toFixed(1)}px,${v.toFixed(1)}px)`};return i.onRender(g=>{let p=performance.now();p-u>400&&(h(),u=p);let v=t.clientWidth,y=t.clientHeight,x=c.slice(),M=[],T=[];for(let b of s){if(!b.on){m(b);continue}if(r.copy(b.fn?b.fn():b.p).project(g),r.z>1||r.z<-1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2){m(b);continue}b.shown||(b.e.style.display="",b.shown=!0);let F=(r.x+1)/2*v,z=(1-r.y)/2*y;(b.lab?M:T).push([b,F,z])}let C=(b,F,z)=>{let V=b.bw||(b.bw=b.e.offsetWidth);return V>40?[F-16,z-16,F-16+V,z+16]:[F-15,z-15,F+15,z+15]},L=b=>!x.some(F=>b[0]<F[2]&&b[2]>F[0]&&b[1]<F[3]&&b[3]>F[1]);T.sort((b,F)=>F[0].e.classList.contains("on")-b[0].e.classList.contains("on"));let E="";for(let[b,F,z]of T){let V=F,w=z,D=C(b,F,z);if(!L(D))for(let[S,R]of o){let I=C(b,F+S,z+R);if(I[0]>=0&&I[2]<=v&&I[1]>=0&&I[3]<=y&&L(I)){V=F+S,w=z+R,D=I;break}}_(b,V,w),x.push(D),Math.hypot(V-F,w-z)>13&&(E+=`<line x1="${F.toFixed(1)}" y1="${z.toFixed(1)}" x2="${V.toFixed(1)}" y2="${w.toFixed(1)}"/><circle cx="${F.toFixed(1)}" cy="${z.toFixed(1)}" r="3"/>`)}E!==a&&(a=E,n.innerHTML=E?`<g stroke="#1F2725" stroke-opacity=".75" stroke-width="1.5" fill="#D2872C">${E}</g>`:""),M.sort((b,F)=>F[2]-b[2]);for(let[b,F,z]of M){b.w||(b.w=b.e.offsetWidth,b.h=b.e.offsetHeight);let V=z;for(let w=0;w<10;w++){let D=F-b.w/2,S=V-11-b.h,R=F+b.w/2,I=V-11,U=x.find(k=>D<k[2]&&R>k[0]&&S<k[3]&&I>k[1]);if(!U||U[1]+11-3-11-b.h<0)break;V=U[1]+11-3}x.push([F-b.w/2,V-11-b.h,F+b.w/2,V-11]),_(b,F,V)}}),{lay:e,add:d,remove:f,marks:s}}var Yn={route:"#D2872C",team:"#3F8F9C",enemy:"#B5462F",npc:"#8C8579",mg:"#E7A537",atk:"#D2452F",fire:"#EC6E2A"},G1=i=>String(i+1).padStart(2,"0");function W1(i){let t=[],e=null;for(let n=1;n<i.length;n++){let s=i[n][3]===1;(!e||e.air!==s)&&(e={air:s,pts:[i[n-1].slice(0,3)]},t.push(e)),e.pts.push(i[n].slice(0,3))}return t}function Ki(i,t,e,n={}){var r;let s=new me;for(let o of W1(i))o.pts.length<2||o.pts.reduce((l,c,u)=>u?l+Math.hypot(c[0]-o.pts[u-1][0],c[1]-o.pts[u-1][1],c[2]-o.pts[u-1][2]):0,0)<.05||s.add(o.air||n.dash?vr(o.pts,e*.8,t,{dash:n.dash||[.6,.45],xray:n.xray,opacity:n.opacity}):vr(o.pts,e,t,{every:(r=n.every)!=null?r:7,xray:n.xray,opacity:n.opacity}));return s}var Ad=i=>i.traverse(t=>{t.geometry&&t.geometry.dispose()});function Rd(i,t,e={}){var D;let n=new me;n.name="show",i.scene.add(n);let s={route:new me,units:new me};n.add(s.route,s.units);let r=Jc(i,t),o=r.lay,a=Zc(i),l=(D=e.scale)!=null?D:1.2,c=-1,u=-1,h={route:!0,marks:!0,units:!0,labels:!0},d=oi.map((S,R)=>{let I=new me;for(let U of S.b)ji[U].path&&ji[U].path.length>1&&I.add(Ki(ji[U].path,Yn.route,.2,{every:7}));return s.route.add(I),I.userData.k=R,I}),f=(S,R)=>S.traverse(I=>{if(I.material){let U=I.material;U.depthTest?(U.transparent=R<1,U.opacity=R):U.opacity=.22*R,U.needsUpdate=!0}}),m=(S,R,I,U)=>r.add(S,R,I,U),_=oi.map((S,R)=>{let I=m("bs-phm",`<b>${R+1}</b><span>${(e.phaseNames||[])[R]||""}</span>`,[S.at[0],S.at[1]+3.6,S.at[2]],1);return I.e.dataset.k=R,I.e.addEventListener("click",U=>{U.stopPropagation(),e.onPhase&&e.onPhase(R)}),I}),g=ji.map((S,R)=>{let I=S.p||S.path[S.path.length-1],U=m("bs-pin",`<span>${G1(R)}</span>`,[I[0],I[1]+3.4,I[2]],1);return U.e.dataset.i=R,U.e.title=(e.names||[])[R]||"",U.e.addEventListener("click",k=>{k.stopPropagation(),e.onPick&&e.onPick(R)}),U}),p=[],v=()=>{_.forEach((S,R)=>{S.on=h.marks&&c<0,S.e.classList.toggle("on",R===c)}),g.forEach((S,R)=>{let I=c>=0&&oi[c].b.includes(R);S.on=h.marks&&I&&oi[c].b.length>1,S.e.classList.toggle("on",R===u),S.e.setAttribute("aria-pressed",R===u)});for(let S of p)S.on=h.labels;i.invalidate()},y=S=>a.at(S),x=[],M=(S,R)=>Math.atan2(R[0]-S[0],R[2]-S[2]);function T(){for(let S of[...s.units.children])s.units.remove(S),Ad(S);for(let S of p)r.remove(S);p=[],x=[],i.ambient=!1}let C=["run","walk","sneak","sidle","talk","shoot","climb","wave"];function L(S,R,I,U,k){let W=Vc(S);return W.root.position.set(...R),W.root.rotation.y=M(R,I||[R[0],R[1],R[2]+1]),W.root.scale.setScalar(l),W.pose(U||"idle"),W.ring.visible=!["blown","down","fall","climb","sit"].includes(U),s.units.add(W.root),C.includes(U)&&k.push(K=>W.pose(U,K)),W}function E(S){if(T(),S<0)return;let R=ji[S],I=[];R.path&&R.path.length>1&&s.units.add(Ki(R.path,Yn.route,.26,{every:5,xray:.35}));for(let U of R.tp||[])s.units.add(Ki(U,Yn.team,.2,{every:4,xray:.35}));for(let U of R.ep||[])s.units.add(Ki(U,Yn.enemy,.18,{dash:[.8,.5],xray:.3}));for(let U of R.np||[])s.units.add(Ki(U,Yn.npc,.14,{dash:[.6,.45],xray:.25}));for(let[U,k,W]of R.ar||[])s.units.add(Yc(U,k,Yn[W]||Yn.atk,{dash:W==="mg"?[.5,.35]:null,r:W==="mg"?.08:.14,arc:W==="mg"?0:.12}));R.p&&L("p",R.p,R.pl,R.pose,I);for(let[U,k,W,K,at,tt]of R.u||[])L(U,[k,W,K],at,tt,I);for(let U of R.fx||[]){let[k,W,K,at,tt]=U,et=null;k==="fire"?et=Gc(tt,W+at,U[5]||{}):k==="smoke"?et=Wc(tt,U[5]||{}):k==="shock"?(et=qc(tt),et.userData.at(.35)):k==="spark"&&(et=Xc(tt),et.userData.at(.2)),et&&(et.position.set(W,K,at),s.units.add(et),et.userData.tick&&I.push(et.userData.tick))}for(let[U,k,W,K,at]of R.lab||[]){let tt=m("bs-lab k-"+(at||"note"),(at==="item"?"<i>\u25C6</i>":"")+U,[k,W,K]);p.push(tt)}x=I,i.ambient=I.length>0}i.onFrame((S,R)=>{for(let I of x)I(R)});let b=S=>{let R=t.clientWidth/Math.max(1,t.clientHeight),I=R<1.25?Math.pow(1.25/R,.75):1;return{...S,r:S.r*I}};function F(S,R){i.setView(b(S),R),i.animUntil=performance.now()+1600}function z(S,R={}){if(c=S,u=-1,S>=0&&oi[S].b.length===1){V(oi[S].b[0],R);return}if(E(-1),d.forEach((I,U)=>{I.visible=h.route&&(S<0||U===S),f(I,1)}),S<0)i.setMode("ov"),y(-1),R.fly!==!1&&F(xr.ov,R.instant);else{let I=oi[S];i.setMode(I.mode),y(I.b[0]),R.fly!==!1&&F(I.cam,R.instant)}v()}function V(S,R={}){if(S<0){z(c,{fly:!1});return}let I=oi.findIndex(W=>W.b.includes(S));c=I,u=S;let U=ji[S],k=oi[I];i.setMode(U.mode||k.mode),y(S),d.forEach((W,K)=>{W.visible=h.route&&K===I&&k.b.length>1,f(W,.35)}),E(S),s.units.visible=h.units,R.fly!==!1&&F(U.cam||k.cam,R.instant),v()}function w(S,R){h[S]=R,S==="route"&&d.forEach((I,U)=>{I.visible=R&&(c<0||U===c)}),S==="units"&&(s.units.visible=R),v(),i.invalidate()}return z(-1,{fly:!1}),{setPhase:z,setBeat:V,setLayer:w,overview:S=>z(-1,S||{}),partsAt:y,get phase(){return c},get beat(){return u},phases:oi.length,beats:ji.length,dispose(){T(),o.remove(),i.scene.remove(n),Ad(n)}}}var Mr=.02,se=.19,Ht=4+.02,In=8+.24,Cd=8+.03,Pd=Te.y+.02,$c=On.y+On.r+.02,Gh=$t.top+.02,Id=We.y+We.r+.02,Ro=qn.y+.12,ts=8+.22+.85+.14;function on(){let i=[],t=0,e=0,n=0,s=0,r={at(o,a,l,c,u="idle",h){return t=o,e=a,n=l,s=c,i.push([t,e,n,s,u,h]),r},to(o,a="idle",l){return t=Math.max(t,o),i.push([t,e,n,s,a,l]),r},go(o,a=5,l="run",c){for(let u of o){let h=Math.hypot(u[0]-e,u[1]-n,u[2]-s);t=+(t+h/a).toFixed(3),[e,n,s]=u,i.push([t,e,n,s,l,c])}return r},mv(o,a,l,c,u,h){return t=o,e=a,n=l,s=c,i.push([t,e,n,s,u,h]),r},get t(){return t},keys:i};return r}var an=(i,t)=>({k:i,keys:t.keys});function Wh(i,t,e,n,s,r,o="walk",a=1.2){let l=on().at(0,...t,"idle",{face:[e[0],e[2]]}).to(s,"idle"),c="a";for(;l.t<r;){let u=c==="a"?e:t;l.go([u],n,o),l.to(l.t+a,"look"),c=c==="a"?"b":"a"}return an(i,l)}var es=(i,t,e,n="idle")=>an(i,on().at(0,...t,n,{face:e})),Xh=[[16.7,-12.1],[18.5,-12],[17.1,-13.7],[18.7,-13.5]],qh={w1:es("k",[10.95,se,-15.1],[9.6,-15.1],"sit"),w2:es("k",[10.95,se,-18.3],[9.6,-18.3],"sit"),w3:es("k",[37.4,se,-17.1],[38.6,-17.1]),w4:es("k",[32.6,se,-24.7],[32.6,-26.4])},X1=(()=>{let i=on().at(0,9.5,Pd,-26.9,"crouch",{face:[26,-16]}).to(2.2,"look").mv(3,12.4,$c,-26.9,"sneak",{arc:.8,face:[20,-26.9]}).go([[19,$c,-26.9],[26,$c,-26.9]],2.6,"sneak").go([[26,$c,-21.4]],2.6,"sneak").go([[26,Gh,-20.4],[27.3,Gh,-18.9],[28.4,Gh,-16.6]],2.4,"sneak").to(12.4,"crouch",{face:[32,-14]}).mv(13.2,31.15,Ro,-14,"crouch",{arc:1}).go([[31.45,Ro,-12.64],[32.6,Ro,-12.1],[33.75,Ro,-12.64],[34.1,Ro,-13.6]],2.4,"sneak").to(15.3,"crouch",{face:[37,-13]}).mv(15.8,37.2,Id,-13,"crouch",{arc:.8}).go([[37.2,Id,-9.8]],2.2,"sneak").mv(18,37.8,Ht,-9.4,"crouch",{fall:1}).go([[40.4,Ht,-9.2],[41,Ht,-8.2],[41,Ht,-4],[41,Ht,1.6]],2.8,"sneak").go([[41.6,Ht,3.2],[44,Ht,4.6],[44,Ht,5.8],[42.2,Ht,6.7]],2.4,"sneak").to(26.4,"push",{face:[41.1,9.4]}).to(29,"push"),t=on().at(0,41.6,Ht,9.3,"idle",{face:[41.8,8.2]}).to(25.4,"idle").mv(25.9,41.1,Ht,9.4,"cower",{face:[42.2,6.7]}).to(29,"cower"),e={p:an("p",i),m:an("m",t),gN:Wh("g",[20,Ht,-26.7],[31,Ht,-26.7],1.4,1,29),gS:es("g",[27.4,Ht,-9.1],[20,-9.1]),gF:Wh("g",[38.4,Ht,-11.6],[38.8,Ht,-24],1.5,4,29,"walk",6),gW:Wh("g",[15.2,se,-24.5],[15.2,se,-14.5],1.3,0,29),...qh};return Xh.forEach(([n,s],r)=>{e["u"+r]=es("g",[n,se,s],[n+(r%2?2:-2),s+(r<2?2:-2)],r%2?"look":"idle")}),{dur:29,init:-1,mode:_r,modes:[[10.5,Ao],[20.2,Ps]],act:e,lab:[[0,3,"\u4ECE\u89D2\u843D\u9AD8\u5904\u8BA1\u5212\u8DEF\u7EBF","p",2.7,null,"note"],[3.2,9.8,"\u5DE6\u4FA7\u6C34\u7BA1\uFF1A\u4E0B\u9762\u7684\u8FC7\u9053\u4E0A\u6709\u62A4\u536B","p",2.6,null,"note"],[10,12.6,"\u538B\u529B\u7F50\u9876","p",2.6,null,"note"],[13.2,15.4,"\u540A\u706F\uFF08\u60AC\u6302\u91CD\u7269\uFF09","p",2.6,null,"note"],[15.8,17.6,"\u8FC7\u9053\u5165\u53E3\u9644\u8FD1\u7684\u6C34\u7BA1","p",2.6,null,"note"],[18,20.4,"\u4E0B\u53BB\u6E9C\u8FDB\u8FC7\u9053","p",2.6,null,"item"],[20.6,24,"\u5ECA\u6865","p",2.6,null,"note"],[26,29,"\u5728\u8D26\u623F\u902E\u4F4F\u603B\u7BA1","m",2.6,null,"item"]],cam:[[0,{t:[13,6,-23],r:22,ph:1,th:-2.3}],[3,{t:"p",r:20,ph:.95,th:-2.1}],[8,{t:"p",r:20,ph:.95,th:-1.8}],[11,{t:"p",r:22,ph:.92,th:-1.2}],[15,{t:"p",r:22,ph:.92,th:-.9}],[19,{t:"p",r:22,ph:.95,th:-.55}],[21.5,{t:"p",r:22,ph:.95,th:-1.6}],[24.5,{t:"p",r:21,ph:.95,th:2.9}],[26.5,{t:[42,4.5,6.5],r:20,ph:.95,th:2.8}]],ch:[0,3,10,13.2,15.8,20.4],sb:{x0:6,x1:48,z0:-30,z1:12,y0:0,y1:14}}})(),q1=(()=>{let i=on().at(0,9.5,Pd,-26.9,"look",{face:[ue.x,ue.z]}).to(1.4,"throw").to(2.2,"throw").to(4.2,"look",{face:[27,-9]}).to(4.8,"throw").to(5.6,"throw").mv(7.2,10.6,se,-25.2,"run",{fall:1}).go([[14.6,se,-23],[14.9,se,-12.4],[15.8,se,-10.2],[24.4,se,-10],[24.6,se,-12.6],[33.8,se,-12.6],[35.2,se,-10.2]],7.5,"run").go([[35.2,Ht,-16.3],[36.6,Ht,-16.4]],4.5,"run").go([[38.6,Ht,-11.2],[40.4,Ht,-9.2],[41,Ht,-8.2],[41,Ht,-4],[41,Ht,1.6]],7,"run").go([[41,Ht,3],[43.6,Ht,4.6],[44,Ht,5.6],[45.2,Ht,8.6],[45.3,Ht,9.6],[46.4,Ht,9.6],[ve.x,Ht,ve.z0-.7]],6,"run").go([[ve.x,Mr,ve.z1]],5,"run").go([[48.2,Mr,-.4],[47.2,Mr,-3.6]],7,"run"),t=i.t;i.to(t+.3,"stab",{face:[48,-5]}).to(t+3,"idle");let e=on().at(0,41.6,Ht,9.3,"idle",{face:[41.8,8.2]}).to(9.4,"look").go([[45.2,Ht,9.6],[46.9,Ht,9.6],[ve.x,Ht,ve.z0-.7]],3.6,"run").go([[ve.x,Mr,ve.z1]],3.2,"run").go([[48.6,Mr,-.6],[48,Mr,-4.6]],3.4,"run").to(t-.3,"look",{face:[50,-4.6]}).to(t+.1,"stumble",{face:[47.2,-3.6]}).to(t+.9,"down").to(t+3,"down"),n=e.keys[e.keys.length-5][0],s={p:an("p",i),m:an("m",e),...qh,gN:an("g",on().at(0,24,Ht,-26.7,"idle",{face:[30,-26.7]}).to(2.6,"look",{face:[12,-26.8]}).go([[16,Ht,-26.7]],3.4,"run").to(t+3,"aim",{face:[11.4,-23.2]})),gS:an("g",on().at(0,27.4,Ht,-9.1,"idle",{face:[20,-9.1]}).to(3,"look",{face:[12,-24]}).to(5.4,"look").mv(6.2,28.6,.9,-9.4,"fall",{fall:1}).to(7,"down").to(t+3,"down")),gF:an("g",on().at(0,38.4,Ht,-12.4,"idle",{face:[38.4,-20]}).to(2.8,"look",{face:[20,-20]}).go([[36.4,Ht,-16.6],[35.2,Ht,-16.3]],3.2,"run").go([[35.2,se,-10.9]],2.6,"run").go([[30,se,-12.2]],4.6,"run").to(9.4,"aim",{face:[24,-10]}).to(10.2,"down").to(t+3,"down")),gW:an("g",on().at(0,15.2,se,-19,"walk",{face:[15.2,-14]}).to(2.6,"look",{face:[12,-26]}).go([[14.7,se,-22.8]],3,"run").to(7.6,"aim",{face:[11.4,-23.2]}).to(9,"down").to(t+3,"down"))};return Xh.forEach(([r,o],a)=>{s["u"+a]=an("g",on().at(0,r,se,o,a%2?"look":"idle",{face:[r+(a%2?2:-2),o+(a<2?2:-2)]}).to(2.55,a%2?"look":"idle").mv(2.75,r+(a%2?.8:-.8),se,o+(a<2?.6:-.6),"down").to(t+3,"down"))}),{dur:+(t+3).toFixed(1),init:18,mode:_r,modes:[[7.2,Ao],[11.5,Ps]],act:s,anim:[[2,2.75,"ch1",0,1],[5.6,6.3,"cwS3",0,1],[n,t-.4,"cage",1,0]],fx:[[2.7,3.6,"shock",ue.x,se+.05,ue.z,3.6],[6.2,6.9,"shock",29.4,se+.05,-9.4,2.4]],arr:[[1.2,2.2,[9.8,8.4,-26.6],[ue.x,ue.y+.3,ue.z-.2],"atk"],[4.6,5.6,[9.8,8.4,-26.6],[28,4.3,-9.2],"atk"]],lab:[[0,2.7,"\u51FB\u843D\u540A\u706F",ue.x,10.2,ue.z,"warn"],[2.8,5,"\u4E00\u4E0B\u7838\u5012\u4E09\u56DB\u4E2A\u62A4\u536B",ue.x,3.4,ue.z,"warn"],[4.8,7.4,"\u6253\u788E\u4E0D\u7A33\u7684\u8FC7\u9053\uFF0C\u4E0A\u9762\u7684\u62A4\u536B\u6389\u4E0B\u53BB",28.4,6.6,-9.1,"warn"],[7.4,12,"\u8DF3\u4E0B\u53BB\uFF0C\u4E00\u8DEF\u6253\u5230\u8FC7\u9053\u5165\u53E3","p",2.6,null,"note"],[15.4,19.4,"\u603B\u7BA1\u5DF2\u7ECF\u8DD1\u5411\u8D27\u68AF","m",2.6,null,"warn"],[19.6,t-.4,"\u4ECE\u5916\u6302\u697C\u68AF\u8DD1\u4E0B\u53BB","p",2.6,null,"note"],[t-.3,t+3,"\u8FFD\u4E0A\u53BB\u6253\u8D25\u4ED6\uFF0C\u4E0D\u96BE","p",2.6,null,"note"]],cam:[[0,{t:[16,2,-17],r:30,ph:.95,th:-2.25}],[2.2,{t:[18,2,-15],r:34,ph:.95,th:-2.2}],[5.8,{t:[19,2,-14],r:34,ph:.95,th:-2.1}],[7.6,{t:"p",r:24,ph:.85,th:-.75}],[10,{t:"p",r:26,ph:.9,th:-.95}],[12.4,{t:"p",r:26,ph:.9,th:-1.6}],[14.6,{t:"p",r:24,ph:.9,th:-2.2}],[16.4,{t:"p",r:22,ph:.85,th:2.85}],[19.6,{t:"p",r:17,ph:.9,th:3.14}],[t-.4,{t:[47.6,1,-4.1],r:16,ph:.85,th:3.14}]],ch:[0,4.6,7.4,15.4,19.6],cnt:[[0,9],[2.75,5],[6.3,4],[9,3],[10.2,2]],sb:{x0:6,x1:54,z0:-30,z1:12,y0:0,y1:14}}})(),Y1=(()=>{let i=on().at(0,35.4,Ht,-31.4,"crouch",{face:[38,-30]}).go([[36.2,Ht,-30.2]],1.6,"sneak").to(1.8,"throw",{face:[39.4,-31]}).to(2.6,"throw").to(7.6,"crouch",{face:[39.4,-31]}).go([[38.6,Ht,-28.7],[40.6,Ht,-27.4],[39.6,Ht,-20],[38.6,Ht,-11.2],[40.4,Ht,-9.2],[41,Ht,-8.2],[41,Ht,-5]],2.8,"sneak").to(20,"sneak"),t={p:an("p",i),...qh,g1:an("g",on().at(0,30,se,-19,"walk",{face:[30,-14]}).to(3.6,"look",{face:[38,-30]}).go([[37.3,se,-24.6],[38.4,se,-28.4],[37.6,se,-29.8]],3.8,"run").to(20,"look",{face:[39.4,-31]})),g2:an("g",on().at(0,31,se,-11.6,"idle",{face:[26,-11.6]}).to(4,"look",{face:[38,-30]}).go([[36.4,se,-20.2],[39.6,se,-27.8],[41.2,se,-29.6]],3.6,"run").to(20,"look",{face:[39.4,-31]})),gF:an("g",on().at(0,38.4,Ht,-12.4,"idle",{face:[38.4,-20]}).to(4.4,"look",{face:[38,-28]}).go([[36.4,Ht,-16.6],[35.2,Ht,-16.3]],3.2,"run").go([[35.2,se,-10.9]],2.6,"run").go([[37.4,se,-24],[38.4,se,-28.8]],4.4,"run").to(20,"look",{face:[39.4,-31]})),gS:es("g",[27.4,Ht,-9.1],[20,-9.1])};return Xh.forEach(([e,n],s)=>{t["u"+s]=es("g",[e,se,n],[e+(s%2?2:-2),n+(s<2?2:-2)],s%2?"look":"idle")}),{dur:20,init:-1,mode:Md,modes:[[16.4,bd]],act:t,fx:[[2.4,21,"fire",39.3,se,-30.9,1.8,{h:2.2}],[2.8,21,"smoke",39.2,se+3,-30.9,1.3,{h:12,op:.62,color:"#48443F",n:8}]],lab:[[1.6,6,"\u70B9\u71C3\u4E00\u697C\u7684\u6613\u71C3\u7269",39.4,3.6,-31,"warn"],[4.4,9.4,"\u62A4\u536B\u88AB\u5F15\u8FC7\u53BB","g1",2.6,null,"note"],[8,12.6,"\u4ECE\u4E8C\u5C42\u7A7F\u8FC7\u8F66\u95F4\u5317\u5899\u7684\u5F00\u53E3","p",2.6,null,"note"],[12.6,18,"\u6CBF\u5E73\u53F0\u6E9C\u8FDB\u8FC7\u9053","p",2.6,null,"item"]],cam:[[0,{t:[37,3,-30],r:22,ph:.9,th:2.6}],[3,{t:[37.4,2,-27],r:30,ph:.95,th:2.9}],[8,{t:"p",r:24,ph:.95,th:2.9}],[12,{t:"p",r:24,ph:.95,th:-2.8}],[16,{t:"p",r:22,ph:.95,th:-2.4}],[18.5,{t:[40.6,4.6,-7],r:22,ph:.95,th:-2.2}]],ch:[0,1.8,4.4,8,12.6],sb:{x0:26,x1:46,z0:-36,z1:-4,y0:0,y1:10}}})(),Z1=(()=>{let n=8-.4,s=on().at(0,50.1,.44,-5.1,"idle",{face:[50.1,-5.1-4]}).to(.6,"idle").mv(4.6,50.1,.44+n,-5.1,"idle",{ease:1}).go([[53,Cd,-5.1]],2.2,"walk").to(6.6,"look",{face:[56,-5.1]}).go([[53.2,Cd,-9.6]],2.4,"sneak").mv(9.4,54.2,9.4,-10.6,"climb",{arc:.4}).mv(10.1,55.2,In,-10.9,"crouch",{arc:.3}).to(12,"crouch",{face:[56.5,-12.2]}).go([[55.5,In,-8.6],[55.8,In,-7.3]],1.8,"sneak").to(16,"crouch",{face:[60,-7.2]}).go([[58.9,In,-7.3],[59.05,In+.04,-8.6]],2.8,"sneak").go([[60.4,ts,-8.6]],1,"sneak").go([[61,ts,-8.6]],1.2,"crouch").to(20.6,"crouch",{hide:1}).mv(21,61,ts,-8.6,"crouch").mv(22.4,62.2,ts,-8.6,"crouch").mv(24.8,71,ts,-8.6,"crouch").mv(26,75.2,ts,-9.9,"crouch").mv(26.8,77.2,ts,-9,"crouch").mv(28,77.2,ts,-3.2,"crouch"),r=on().at(0,60.2,In,-5.1,"idle",{face:[61.2,-3.9]});for(let a=0;a<4;a++)r.go([[60.4,In,-7.2]],1.3,"walk").to(r.t+.6,"idle",{face:[61,-8.6]}).go([[60.2,In,-5.1]],1.3,"walk").to(r.t+.8,"idle",{face:[61.2,-3.9]});r.to(28,"idle",{face:[61.2,-3.9]});let o=on().at(0,61.6,In,-7.3,"idle",{face:[61,-8.6]});for(let a=0;a<2;a++)o.go([[61.6,In,-5]],1.3,"walk").to(o.t+.7,"idle",{face:[61.4,-4.2]}).go([[61.6,In,-7.3]],1.3,"walk").to(o.t+.7,"idle",{face:[61,-8.6]});return o.to(13.6,"idle").go([[62.6,In,-5.4],[66,In,-4.4],[69.4,In,-3.4]],3.6,"walk").to(17.8,"idle",{face:[70.6,-2.2]}).to(28,"idle",{face:[70.6,-2.2]}),{dur:28,init:-1,mode:Vh,act:{p:an("p",s),w1:an("k",r),w2:an("k",o)},anim:[[.6,4.6,"cage",0,1]],mv:[[21,0,0,0],[22.4,1.2,0,0],[24.8,10,0,0],[26,13.4,.6,-.8],[26.8,13.6,2.2,-1.5708],[28,13.6,8,-1.5708]],lab:[[5,7.4,"\u5E93\u623F\u5927\u95E8\u5173\u7740",53.4,12.6,-5.1,"warn"],[6.8,9.4,"\u5DE6\u8FB9\u5F00\u7740\u7684\u7A97",53.4,12.2,-10.6,"item"],[10.1,12.4,"\u4E09\u9762\u6321\u4F4F\u7684\u9690\u853D\u89D2\u843D",55.8,11.8,-12.6,"note"],[12.4,14.2,"\u4E24\u540D\u5DE5\u4EBA\u5728\u88C5\u8F66",59.4,11.8,-7,"note"],[14.2,17.4,"\u7EA6\u5341\u79D2\u540E\u4E00\u540D\u5DE5\u4EBA\u53BB\u642C\u8D27","w2",2.6,null,"note"],[17.4,20.6,"\u85CF\u8FDB\u8F66\u53A2","p",2.4,null,"item"],[21.4,28,"\u5F00\u5F80\u9AD8\u697C","p",4.4,null,"item"]],cam:[[0,{t:[50.1,4,-5.1],r:24,ph:1,th:-1.3}],[4.6,{t:[52,9,-7],r:22,ph:1.3,th:-1.4}],[6.8,{t:[53.2,9,-7.6],r:22,ph:1.3,th:-1.3}],[9.4,{t:[56,9.6,-10.4],r:19,ph:.9,th:-1}],[12.6,{t:[59,9,-8],r:22,ph:.85,th:-.7}],[19.6,{t:[62,9,-8.6],r:24,ph:.9,th:-.5}],[28,{t:[76,9,-8.6],r:34,ph:.9,th:-.35}]],ch:[0,4.6,9.4,12.4,17.4,21],sb:{x0:44,x1:90,z0:-18,z1:4,y0:0,y1:16}}})(),Co={stealth:X1,fight:q1,fire:Y1,truck:Z1};var Bn=i=>Math.max(0,Math.min(1,i)),Yh=i=>i*i*(3-2*i),Pi=(i,t,e)=>i+(t-i)*e,Zh=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*e},J1=["fall","fly","held","climb"];function $1(i){let t=[],e=0;return i.forEach((n,s)=>{let r=n[5]||{};if(r.face!=null)e=typeof r.face=="number"?r.face:Math.atan2(r.face[0]-n[1],r.face[1]-n[3]);else if(s>0){let o=i[s-1],a=n[1]-o[1],l=n[3]-o[3];Math.hypot(a,l)>.05&&(e=Math.atan2(a,l))}t.push(e)}),n=>{let s=i.length,r=0;for(;r<s&&i[r][0]<=n;)r++;let o=!0;for(let f=0;f<r;f++){let m=i[f][5];m&&m.hide&&(o=!1),m&&m.show&&(o=!0)}if(r===0)return{x:i[0][1],y:i[0][2],z:i[0][3],pose:i[0][4],yaw:t[0],vis:o,air:!1};if(r>=s){let f=i[s-1];return{x:f[1],y:f[2],z:f[3],pose:f[4],yaw:t[s-1],vis:o,air:!1}}let a=i[r-1],l=i[r],c=l[5]||{},u=l[0]-a[0],h=u>0?Bn((n-a[0])/u):1;c.ease&&(h=Yh(h));let d=Pi(a[2],l[2],c.fall?h*h:h);return c.arc&&(d+=4*c.arc*h*(1-h)),{x:Pi(a[1],l[1],h),y:d,z:Pi(a[3],l[3],h),pose:l[4],yaw:Zh(t[r-1],t[r],Bn((n-a[0])/.2)),vis:o,air:!!(c.arc||c.fall)}}}function Q1(i,t,e){let n=d=>typeof d.t=="string"?{...d,t:e(d.t)}:d,s=0;for(;s<i.length&&i[s][0]<=t;)s++;if(s===0)return n(i[0][1]);if(s>=i.length)return n(i[i.length-1][1]);let[r,o]=i[s-1],[a,l]=i[s],c=Yh(Bn((t-r)/(a-r))),u=n(o),h=n(l);return{t:u.t.map((d,f)=>Pi(d,h.t[f],c)),r:Math.exp(Pi(Math.log(u.r),Math.log(h.r),c)),ph:Pi(u.ph,h.ph,c),th:Zh(u.th,h.th,c)}}var Qc=(i,t,e)=>i>=t&&i<e;function Dd(i,t,e={}){let n=Zc(i),s=Jc(i,t),r=new me;r.name="stage",i.scene.add(r);let o=document.createElement("div");o.className="bs-mask",o.innerHTML="<span></span>",t.appendChild(o);let a=null,l=null,c=0,u=!1,h=!0,d="",f="",m=0,_={},g=[],p=[],v=[],y={},x=null,M=-1,T=(S,R=0)=>typeof S=="string"?()=>{let I=_[S];return new H(I.F.root.position.x,I.F.root.position.y+R,I.F.root.position.z)}:null,C=(S,R=0)=>{if(typeof S!="string")return new H(...S);let I=_[S];return new H(I.F.root.position.x,I.F.root.position.y+R,I.F.root.position.z)};function L(){for(let S of[...r.children])r.remove(S),S.traverse(R=>{R.geometry&&R.geometry.dispose()});for(let S of v)s.remove(S.m);for(let S of Object.values(y))S&&S.dispose();_={},g=[],p=[],v=[],y={},x=null,d="",f="",M=-1}function E(){var R;let S=(R=a.scale)!=null?R:1.2;for(let[I,U]of Object.entries(a.act)){let k=Vc(U.k);k.root.scale.setScalar(S),r.add(k.root),_[I]={F:k,at:$1(U.keys)}}if(a.route!==!1&&a.act.p){let I=[[]];a.act.p.keys.forEach((U,k)=>{let W=U[5]||{};W.cut&&I.push([]);let K=I[I.length-1],at=K[K.length-1];(!at||Math.hypot(at[0]-U[1],at[1]-U[2]-.12,at[2]-U[3])>.05)&&K.push([U[1],U[2]+.12,U[3],k&&(W.arc||W.fall)?1:0])}),x=new me,r.add(x);for(let U of I)U.length>1&&x.add(Ki(U,Yn.route,.16,{every:6,xray:.18,opacity:.5}))}for(let[I,U]of a.trk||[])r.add(Ki(I,U||Yn.team,.14,{every:6,xray:.18,opacity:.5}));for(let I of a.fx||[]){let[U,k,W,K,at,tt,et,q]=I,Q=null;W==="fire"?Q=Gc(et||1.5,(typeof K=="number"?K:3)+(tt||0),q||{}):W==="smoke"?Q=Wc(et||1,q||{}):W==="spark"?Q=Xc(et||1):W==="shock"&&(Q=qc(et||4)),Q&&(typeof K!="string"&&Q.position.set(K,at,tt),Q.visible=!1,r.add(Q),g.push({t0:U,t1:k,kind:W,g:Q,ref:typeof K=="string"?K:null,dy:typeof K=="string"?at:0}))}for(let[I,U,k,W,K,at]of a.arr||[]){let tt=K==="mg",et=tt?[.5,.35]:null,q=Yn[K]||Yn.atk,Q=Array.isArray(k[0])?vr(k,.2,q,{dash:et,every:999,last:!0,xray:.3}):Yc(k,W,q,{dash:et,r:tt?.08:.14,arc:tt?0:.12,...at||{}});Q.visible=!1,r.add(Q),p.push({t0:I,t1:U,g:Q})}for(let I of a.lab||[]){let[U,k,W,K,at,tt,et]=I,q=et==="qte",Q=s.add("bs-lab k-"+(et||"note"),(et==="item"||q?"<i>\u25C6</i>":"")+W+(q?"<s></s>":""),typeof K=="string"?T(K,at):[K,at,tt]);v.push({t0:U,t1:k,m:Q,q})}}function b(){if(!a)return;let S=c,R=a.mode;for(let[tt,et]of a.modes||[])S>=tt&&(R=et);let I=JSON.stringify(R);I!==f&&(f=I,i.setMode(R));let U={...kc[a.init]||{}};for(let[tt,et,q,Q,J]of a.anim||[])S>=tt&&(U[q]=Pi(Q,J,Yh(Bn((S-tt)/(et-tt)))));let k=null;if(a.mv){let tt=0;for(;tt<a.mv.length&&a.mv[tt][0]<=S;)tt++;let et=a.mv[Math.max(0,tt-1)],q=a.mv[Math.min(a.mv.length-1,tt)],Q=q[0]>et[0]?Bn((S-et[0])/(q[0]-et[0])):1;k=[Pi(et[1],q[1],Q),Pi(et[2],q[2],Q),Zh(et[3],q[3],Q)]}let W=JSON.stringify([U,k&&k.map(tt=>+tt.toFixed(3))]);if(W!==d){d=W;for(let tt of Object.keys(i.parts))n.set(tt,U[tt]||0);if(k){let tt=i.parts.truck.userData.home;n.move("truck",tt.x+k[0],tt.y,tt.z+k[1],k[2])}i.shadowDirty()}for(let tt of Object.values(_)){let et=tt.at(S),q=tt.F;q.root.visible=et.vis,q.root.position.set(et.x,et.y,et.z),q.root.rotation.y=et.yaw,q.pose(et.pose||"idle",S),q.ring.visible=!J1.includes(et.pose)&&!et.air}for(let tt of g){let et=Qc(S,tt.t0,tt.t1);if(tt.g.visible=et,!et)continue;let q=S-tt.t0,Q=tt.g;if(tt.ref){let J=C(tt.ref,tt.dy);Q.position.copy(J)}tt.kind==="fire"?(Q.scale.setScalar(.25+.75*Bn(q/.4)),Q.userData.tick&&Q.userData.tick(S)):tt.kind==="smoke"?Q.userData.tick(S,Bn(q/1.5)*Bn((tt.t1-S)/1.5)):Q.userData.at(Bn(q/(tt.t1-tt.t0)))}for(let tt of p)tt.g.visible=Qc(S,tt.t0,tt.t1);for(let tt of v)tt.m.on=Qc(S,tt.t0,tt.t1),tt.q&&tt.m.on&&tt.m.e.style.setProperty("--q",(1-Bn((S-tt.t0)/(tt.t1-tt.t0))).toFixed(3));let K=0,at="";for(let[tt,et,q]of a.mask||[])S>=tt-.25&&S<et+.25&&(K=Math.max(K,Math.min(Bn((S-tt+.25)/.25),Bn((et+.25-S)/.25))),at=q);if(o.style.opacity=K.toFixed(3),o.style.display=K>0?"":"none",at&&o.firstChild.textContent!==at&&(o.firstChild.textContent=at),a.cnt){let tt=a.cnt[0][1];for(let[et,q]of a.cnt)S>=et&&(tt=q);tt!==M&&(M=tt,e.onCount&&e.onCount(tt))}else M!==null&&(M=null,e.onCount&&e.onCount(null));h&&a.cam&&performance.now()>m&&z(S,!0),i.shadowDirty(),e.onT&&e.onT(a.dur?S/a.dur:0)}let F=S=>{let R=t.clientWidth/Math.max(1,t.clientHeight),I=R<1.25?Math.pow(1.25/R,.75):1;return{...S,r:S.r*I}};function z(S,R){let I=F(Q1(a.cam,S,at=>{let tt=_[at];if(!tt)return[0,0,0];let et=tt.F.root.position;return[et.x,et.y+1.4,et.z]})),U=I.t[0],k=I.t[1],W=I.t[2];for(let[at,tt,et]of a.shake||[])if(Qc(S,at,tt)){let q=Math.sin(Math.PI*(S-at)/(tt-at))*et;U+=Math.sin(S*53)*q,k+=Math.sin(S*41+1)*q*.6,W+=Math.cos(S*47)*q}let K={th:I.th,ph:I.ph,r:I.r,t:new H(U,k,W)};R?i.controls.set(K,!0):i.controls.flyTo(K,.9)}i.onFrame(S=>{!u||!a||(c=Math.min(a.dur,c+S),b(),c>=a.dur&&(w(),e.onEnd&&e.onEnd()))});function V(){a&&(c>=a.dur-.001&&(c=0),u=!0,i.animating=!0,e.onPlay&&e.onPlay(!0))}function w(){u=!1,i.animating=!1,i.invalidate(),e.onPlay&&e.onPlay(!1)}i.onUserStart(()=>{h&&(h=!1,e.onFollow&&e.onFollow(!1))});function D(S,R={}){Co[S]&&(w(),L(),l=S,a=Co[S],c=0,h=!0,e.onFollow&&e.onFollow(!0),a.sb&&i.setShadowBox(a.sb),E(),R.fly&&a.cam?(z(0,!1),m=performance.now()+950,i.animUntil=m+150):m=0,b())}return{load:D,play:V,pause:w,isPlaying:()=>u,setT(S,R={}){a&&(c=Bn(S)*a.dur,R.follow&&!h&&(h=!0,e.onFollow&&e.onFollow(!0)),R.follow&&(m=0),b(),R.follow&&a.cam&&z(c,!0),i.invalidate())},get t(){return a?c/a.dur:0},get id(){return l},get follow(){return h},setFollow(S){h=S,S&&a&&(z(c,!1),m=performance.now()+950,i.animUntil=m+150),e.onFollow&&e.onFollow(S)},resetView(){this.setFollow(!0)},info:S=>{let R=Co[S||l];return R?{dur:R.dur,ch:R.ch,cnt:R.cnt}:null},scenes:Object.keys(Co),_actors:()=>_,dispose(){w(),L(),o.remove(),s.lay.remove(),i.scene.remove(r)}}}return Wd(j1);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
