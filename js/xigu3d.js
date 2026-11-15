var XIGU3D=(()=>{var oc=Object.defineProperty;var Cd=Object.getOwnPropertyDescriptor;var Id=Object.getOwnPropertyNames;var Pd=Object.prototype.hasOwnProperty;var Dd=(i,t)=>{for(var e in t)oc(i,e,{get:t[e],enumerable:!0})},Ld=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Id(t))!Pd.call(i,s)&&s!==e&&oc(i,s,{get:()=>t[s],enumerable:!(n=Cd(t,s))||n.enumerable});return i};var Ud=i=>Ld(oc({},"__esModule",{value:!0}),i);var nx={};Dd(nx,{SCENES:()=>Qi,VIEWS:()=>Ns,createShow:()=>xd,createStage:()=>bd,mount:()=>hd});var Rh=0,qc=1,Ch=2;var Yc=1,Wo=2,Un=3,Xn=0,Oe=1,ze=2,Yn=0,Ri=1,Zc=2,Jc=3,$c=4,Ih=5,li=100,Ph=101,Dh=102,Lh=103,Uh=104,Fh=200,Nh=201,Bh=202,Oh=203,po=204,mo=205,zh=206,kh=207,Hh=208,Vh=209,Gh=210,Wh=211,Xh=212,qh=213,Yh=214,Xo=0,qo=1,Yo=2,Ci=3,Zo=4,Jo=5,$o=6,Ko=7,Kc=0,Zh=1,Jh=2,Zn=0,$h=1,Kh=2,Qh=3,jh=4,tu=5,eu=6,Qo=7;var Qc=300,Bi=301,Oi=302,jo=303,ta=304,Ir=306,go=1e3,ci=1001,_o=1002,qe=1003,nu=1004;var Pr=1005;var En=1006,ea=1007;var mi=1008;var Rn=1009,jc=1010,tl=1011,Ss=1012,na=1013,gi=1014,Cn=1015,Es=1016,ia=1017,sa=1018,ws=1020,el=35902,nl=35899,il=1021,sl=1022,_n=1023,ps=1026,Ts=1027,ra=1028,oa=1029,rl=1030,aa=1031;var ca=1033,Dr=33776,Lr=33777,Ur=33778,Fr=33779,la=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37808,_a=37809,xa=37810,ya=37811,va=37812,Ma=37813,ba=37814,Sa=37815,Ea=37816,wa=37817,Ta=37818,Aa=37819,Ra=37820,Ca=37821,Ia=36492,Pa=36494,Da=36495,La=36283,Ua=36284,Fa=36285,Na=36286;var js=2300,xo=2301,fo=2302,Uc=2400,Fc=2401,Nc=2402;var iu=3200,su=3201;var ol=0,ru=1,Jn="",nn="srgb",Ii="srgb-linear",tr="linear",ie="srgb";var Ai=7680;var Bc=519,ou=512,au=513,cu=514,al=515,lu=516,hu=517,uu=518,du=519,Oc=35044;var cl="300 es",Sn=2e3,er=2001;var qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ac=Math.PI/180,yo=180/Math.PI;function Nr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Fd(i,t){return(i%t+t)%t}function cc(i,t,e){return(1-e)*i+e*t}function Gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Et=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let S=Math.sqrt(y),E=Math.atan2(S,p*M);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}let x=a*M;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lc.copy(this).projectOnVector(t),this.sub(lc)}reflect(t){return this.sub(lc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lc=new L,eh=new wn,Ht=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],y=s[4],x=s[7],S=s[2],E=s[5],w=s[8];return r[0]=o*_+a*M+c*S,r[3]=o*m+a*y+c*E,r[6]=o*p+a*x+c*w,r[1]=l*_+h*M+u*S,r[4]=l*m+h*y+u*E,r[7]=l*p+h*x+u*w,r[2]=f*_+d*M+g*S,r[5]=f*m+d*y+g*E,r[8]=f*p+d*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hc.makeScale(t,e)),this}rotate(t){return this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},hc=new Ht;function ll(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fu(){let i=nr("canvas");return i.style.display="block",i}var nh={};function ms(i){i in nh||(nh[i]=!0,console.warn(i))}function pu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ih=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nd(){let i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:t,whitePoint:n,transfer:tr,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}var Kt=Nd();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,vo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ts===void 0&&(ts=nr("canvas")),ts.width=t.width,ts.height=t.height;let s=ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,gs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uc(s[o].image)):r.push(uc(s[o]))}else r=uc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function uc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Od=0,dc=new L,Ye=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ci,s=ci,r=En,o=mi,a=_n,c=Rn,l=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Nr(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case go:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case go:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Qc;Ye.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,x=(d+1)/2,S=(p+1)/2,E=(h+f)/4,w=(u+_)/4,I=(g+m)/4;return y>x&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=w/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=I/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mo=class extends qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ye(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Mo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ir=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bo=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Xr.subVectors(this.max,Ws),es.subVectors(t.a,Ws),ns.subVectors(t.b,Ws),is.subVectors(t.c,Ws),ei.subVectors(ns,es),ni.subVectors(is,ns),Si.subVectors(es,is);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Si.z,Si.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Si.z,0,-Si.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Si.y,Si.x,0];return!fc(e,es,ns,is,Xr)||(e=[1,0,0,0,1,0,0,0,1],!fc(e,es,ns,is,Xr))?!1:(qr.crossVectors(ei,ni),e=[qr.x,qr.y,qr.z],fc(e,es,ns,is,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new L,new L,new L,new L,new L,new L,new L,new L],vn=new L,Wr=new Ln,es=new L,ns=new L,is=new L,ei=new L,ni=new L,Si=new L,Ws=new L,Xr=new L,qr=new L,Ei=new L;function fc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);let a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var zd=new Ln,Xs=new L,pc=new L,hi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(pc)),this.expandByPoint(Xs.copy(t.center).sub(pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kn=new L,mc=new L,Yr=new L,ii=new L,gc=new L,Zr=new L,_c=new L,sr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){mc.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(mc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Yr),a=ii.dot(this.direction),c=-ii.dot(Yr),l=ii.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(mc).addScaledVector(Yr,f),d}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){gc.subVectors(e,t),Zr.subVectors(n,t),_c.crossVectors(gc,Zr);let o=this.direction.dot(_c),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);let c=a*this.direction.dot(Zr.crossVectors(ii,Zr));if(c<0)return null;let l=a*this.direction.dot(gc.cross(ii));if(l<0||c+l>o)return null;let h=-a*ii.dot(_c);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,Hd)}lookAt(t,e,n){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),si.crossVectors(n,tn),si.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),si.crossVectors(n,tn)),si.normalize(),Jr.crossVectors(tn,si),s[0]=si.x,s[4]=Jr.x,s[8]=tn.x,s[1]=si.y,s[5]=Jr.y,s[9]=tn.y,s[2]=si.z,s[6]=Jr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],y=n[7],x=n[11],S=n[15],E=s[0],w=s[4],I=s[8],b=s[12],v=s[1],R=s[5],U=s[9],O=s[13],H=s[2],Z=s[6],F=s[10],j=s[14],C=s[3],N=s[7],Y=s[11],k=s[15];return r[0]=o*E+a*v+c*H+l*C,r[4]=o*w+a*R+c*Z+l*N,r[8]=o*I+a*U+c*F+l*Y,r[12]=o*b+a*O+c*j+l*k,r[1]=h*E+u*v+f*H+d*C,r[5]=h*w+u*R+f*Z+d*N,r[9]=h*I+u*U+f*F+d*Y,r[13]=h*b+u*O+f*j+d*k,r[2]=g*E+_*v+m*H+p*C,r[6]=g*w+_*R+m*Z+p*N,r[10]=g*I+_*U+m*F+p*Y,r[14]=g*b+_*O+m*j+p*k,r[3]=M*E+y*v+x*H+S*C,r[7]=M*w+y*R+x*Z+S*N,r[11]=M*I+y*U+x*F+S*Y,r[15]=M*b+y*O+x*j+S*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,S=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,E=e*M+n*y+s*x+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=M*w,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*w,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*w,t[4]=y*w,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*w,t[8]=x*w,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*w,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*w,t[12]=S*w,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,M=c*l,y=c*h,x=c*u,S=n.x,E=n.y,w=n.z;return s[0]=(1-(_+p))*S,s[1]=(d+x)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(d-x)*E,s[5]=(1-(f+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+y)*w,s[9]=(m-M)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ss.set(s[0],s[1],s[2]).length(),o=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let l=1/r,h=1/o,u=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Sn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===er)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Sn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===er)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ss=new L,Mn=new zt,kd=new L(0,0,0),Hd=new L(1,1,1),si=new L,Jr=new L,tn=new L,rh=new zt,oh=new wn,sn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var _s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vd=0,ah=new L,rs=new wn,Hn=new zt,$r=new L,qs=new L,Gd=new L,Wd=new wn,ch=new L(1,0,0),lh=new L(0,1,0),hh=new L(0,0,1),uh={type:"added"},Xd={type:"removed"},os={type:"childadded",child:null},xc={type:"childremoved",child:null},Fe=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new sn,n=new wn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new zt},normalMatrix:{value:new Ht}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(qs,$r,this.up):Hn.lookAt($r,qs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Hn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd),xc.child=t,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Fe.DEFAULT_UP=new L(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bn=new L,Vn=new L,yc=new L,Gn=new L,as=new L,cs=new L,dh=new L,vc=new L,Mc=new L,bc=new L,Sc=new ge,Ec=new ge,wc=new ge,ai=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),Vn.subVectors(n,e),yc.subVectors(t,e);let o=bn.dot(bn),a=bn.dot(Vn),c=bn.dot(yc),l=Vn.dot(Vn),h=Vn.dot(yc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Sc.setScalar(0),Ec.setScalar(0),wc.setScalar(0),Sc.fromBufferAttribute(t,e),Ec.fromBufferAttribute(t,n),wc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Sc,r.x),o.addScaledVector(Ec,r.y),o.addScaledVector(wc,r.z),o}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),Vn.subVectors(t,e),bn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),bn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;as.subVectors(s,n),cs.subVectors(r,n),vc.subVectors(t,n);let c=as.dot(vc),l=cs.dot(vc);if(c<=0&&l<=0)return e.copy(n);Mc.subVectors(t,s);let h=as.dot(Mc),u=cs.dot(Mc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(as,o);bc.subVectors(t,r);let d=as.dot(bc),g=cs.dot(bc);if(g>=0&&d<=g)return e.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(cs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return dh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(dh,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(as,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Fd(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Tc(o,r,t+1/3),this.g=Tc(o,r,t),this.b=Tc(o,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){let n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return Kt.workingToColorSpace(Le.copy(this),t),Math.round(Zt(Le.r*255,0,255))*65536+Math.round(Zt(Le.g*255,0,255))*256+Math.round(Zt(Le.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Le.copy(this),e);let n=Le.r,s=Le.g,r=Le.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=nn){Kt.workingToColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,s=Le.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Kr);let n=cc(ri.h,Kr.h,e),s=cc(ri.s,Kr.s,e),r=cc(ri.l,Kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new Gt;Gt.NAMES=mu;var qd=0,ui=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Ri,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==po&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ue=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new L,Qr=new Et,Yd=0,Ee=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oc&&(t.usage=this.usage),t}};var rr=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zd=0,dn=new zt,Ac=new Fe,ls=new L,en=new Ln,Ys=new Ln,Ce=new L,be=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ll(t)?or:rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Ac.lookAt(t),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(en.min,Ys.min),en.expandByPoint(Ce),Ce.addVectors(en.max,Ys.max),en.expandByPoint(Ce)):(en.expandByPoint(Ys.min),en.expandByPoint(Ys.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ce.fromBufferAttribute(a,l),c&&(ls.fromBufferAttribute(t,l),Ce.add(ls)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;let l=new L,h=new L,u=new L,f=new Et,d=new Et,g=new Et,_=new L,m=new L;function p(I,b,v){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[I].add(_),a[b].add(_),a[v].add(_),c[I].add(m),c[b].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,b=M.length;I<b;++I){let v=M[I],R=v.start,U=v.count;for(let O=R,H=R+U;O<H;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let y=new L,x=new L,S=new L,E=new L;function w(I){S.fromBufferAttribute(s,I),E.copy(S);let b=a[I];y.copy(b),y.sub(S.multiplyScalar(S.dot(b))).normalize(),x.crossVectors(E,b);let R=x.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,R)}for(let I=0,b=M.length;I<b;++I){let v=M[I],R=v.start,U=v.count;for(let O=R,H=R+U;O<H;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ee(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new zt,wi=new sr,jr=new hi,ph=new L,to=new L,eo=new L,no=new L,Rc=new L,io=new L,mh=new L,so=new L,kt=class extends Fe{constructor(t=new be,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){io.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Rc.fromBufferAttribute(u,t),o?io.addScaledVector(Rc,h):io.addScaledVector(Rc.sub(e),h))}e.add(io)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(jr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(jr,ph)===null||wi.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(fh.copy(r).invert(),wi.copy(t.ray).applyMatrix4(fh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,S=y;x<S;x+=3){let E=a.getX(x),w=a.getX(x+1),I=a.getX(x+2);s=ro(this,p,t,n,l,h,u,E,w,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=ro(this,o,t,n,l,h,u,M,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,S=y;x<S;x+=3){let E=x,w=x+1,I=x+2;s=ro(this,p,t,n,l,h,u,E,w,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let M=m,y=m+1,x=m+2;s=ro(this,o,t,n,l,h,u,M,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Jd(i,t,e,n,s,r,o,a){let c;if(t.side===Oe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Xn,a),c===null)return null;so.copy(a),so.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(so);return l<e.near||l>e.far?null:{distance:l,point:so.clone(),object:i}}function ro(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,to),i.getVertexPosition(c,eo),i.getVertexPosition(l,no);let h=Jd(i,t,e,n,to,eo,no,mh);if(h){let u=new L;ai.getBarycoord(mh,to,eo,no,u),s&&(h.uv=ai.getInterpolatedAttribute(s,a,c,l,u,new Et)),r&&(h.uv1=ai.getInterpolatedAttribute(r,a,c,l,u,new Et)),o&&(h.normal=ai.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};ai.getNormal(to,eo,no,f.normal),h.face=f,h.barycoord=u}return h}var Ze=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(_,m,p,M,y,x,S,E,w,I,b){let v=x/w,R=S/I,U=x/2,O=S/2,H=E/2,Z=w+1,F=I+1,j=0,C=0,N=new L;for(let Y=0;Y<F;Y++){let k=Y*R-O;for(let K=0;K<Z;K++){let tt=K*v-U;N[_]=tt*M,N[m]=k*y,N[p]=H,l.push(N.x,N.y,N.z),N[_]=0,N[m]=0,N[p]=E>0?1:-1,h.push(N.x,N.y,N.z),u.push(K/w),u.push(1-Y/I),j+=1}}for(let Y=0;Y<I;Y++)for(let k=0;k<w;k++){let K=f+k+Z*Y,tt=f+k+Z*(Y+1),G=f+(k+1)+Z*(Y+1),J=f+(k+1)+Z*Y;c.push(K,tt,J),c.push(tt,G,J),C+=6}a.addGroup(d,C,b),d+=C,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=zi(i[e]);for(let s in n)t[s]=n[s]}return t}function $d(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var gu={clone:zi,merge:Ne},Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ar=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new L,gh=new Et,_h=new Et,Ue=class extends ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,gh,_h),e.subVectors(_h,gh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ac*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},hs=-90,us=1,So=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(hs,us,t,e);s.layers=this.layers,this.add(s);let r=new Ue(hs,us,t,e);r.layers=this.layers,this.add(r);let o=new Ue(hs,us,t,e);o.layers=this.layers,this.add(o);let a=new Ue(hs,us,t,e);a.layers=this.layers,this.add(a);let c=new Ue(hs,us,t,e);c.layers=this.layers,this.add(c);let l=new Ue(hs,us,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},cr=class extends Ye{constructor(t=[],e=Bi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Eo=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Yn});r.uniforms.tEquirect.value=e;let o=new kt(s,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=En),new So(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},te=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},jd={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var lr=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var wo=class extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,c,l=qe,h=qe,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=class extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new zt,xh=new zt,oo=[],yh=new Ln,tf=new zt,Zs=new kt,Js=new hi,ur=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),yh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Js.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),xh.multiplyMatrices(n,ds),Zs.matrixWorld=xh,Zs.raycast(t,oo);for(let o=0,a=oo.length;o<a;o++){let c=oo[o];c.instanceId=r,c.object=this,e.push(c)}oo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wo(new Float32Array(s*this.count),s,this.count,ra,Cn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cc=new L,ef=new L,nf=new Ht,fn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Cc.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Cc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nf.getNormalMatrix(t),s=this.coplanarPoint(Cc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new hi,sf=new Et(.5,.5),ao=new L,ys=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,o=new fn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],y=r[13],x=r[14],S=r[15];if(s[0].setComponents(l-o,d-h,p-g,S-M).normalize(),s[1].setComponents(l+o,d+h,p+g,S+M).normalize(),s[2].setComponents(l+a,d+u,p+_,S+y).normalize(),s[3].setComponents(l-a,d-u,p-_,S-y).normalize(),n)s[4].setComponents(c,f,m,x).normalize(),s[5].setComponents(l-c,d-f,p-m,S-x).normalize();else if(s[4].setComponents(l-c,d-f,p-m,S-x).normalize(),e===Sn)s[5].setComponents(l+c,d+f,p+m,S+x).normalize();else if(e===er)s[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);let e=sf.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ao.x=s.normal.x>0?t.max.x:t.min.x,ao.y=s.normal.y>0?t.max.y:t.min.y,ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dr=class extends Ye{constructor(t,e,n=gi,s,r,o,a=qe,c=qe,l,h=ps,u=1){if(h!==ps&&h!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},fr=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pr=class i extends be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,_=s+1,m=new L,p=new L;for(let M=0;M<=g;M++){let y=0,x=0,S=0,E=0;if(M<=n){let b=M/n,v=b*Math.PI/2;x=-h-t*Math.cos(v),S=t*Math.sin(v),E=-t*Math.cos(v),y=b*u}else if(M<=n+r){let b=(M-n)/r;x=-h+b*e,S=t,E=0,y=u+b*f}else{let b=(M-n-r)/n,v=b*Math.PI/2;x=h+t*Math.sin(v),S=t*Math.cos(v),E=t*Math.sin(v),y=u+f+b*u}let w=Math.max(0,Math.min(1,y/d)),I=0;M===0?I=.5/s:M===g&&(I=-.5/s);for(let b=0;b<=s;b++){let v=b/s,R=v*Math.PI*2,U=Math.sin(R),O=Math.cos(R);p.x=-S*O,p.y=x,p.z=S*U,a.push(p.x,p.y,p.z),m.set(-S*O,E,S*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(v+I,w)}if(M>0){let b=(M-1)*_;for(let v=0;v<s;v++){let R=b+v,U=b+v+1,O=M*_+v,H=M*_+v+1;o.push(R,U,O),o.push(U,H,O)}}}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},mr=class i extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new Et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pn=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(d,2));function M(){let x=new L,S=new L,E=0,w=(e-t)/n;for(let I=0;I<=r;I++){let b=[],v=I/r,R=v*(e-t)+t;for(let U=0;U<=s;U++){let O=U/s,H=O*c+a,Z=Math.sin(H),F=Math.cos(H);S.x=R*Z,S.y=-v*n+m,S.z=R*F,u.push(S.x,S.y,S.z),x.set(Z,w,F).normalize(),f.push(x.x,x.y,x.z),d.push(O,1-v),b.push(g++)}_.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let v=_[b][I],R=_[b+1][I],U=_[b+1][I+1],O=_[b][I+1];(t>0||b!==0)&&(h.push(v,R,O),E+=3),(e>0||b!==r-1)&&(h.push(R,U,O),E+=3)}l.addGroup(p,E,0),p+=E}function y(x){let S=g,E=new Et,w=new L,I=0,b=x===!0?t:e,v=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;let R=g;for(let U=0;U<=s;U++){let H=U/s*c+a,Z=Math.cos(H),F=Math.sin(H);w.x=b*F,w.y=m*v,w.z=b*Z,u.push(w.x,w.y,w.z),f.push(0,v,0),E.x=Z*.5+.5,E.y=F*.5*v+.5,d.push(E.x,E.y),g++}for(let U=0;U<s;U++){let O=S+U,H=R+U;x===!0?h.push(H,H+1,O):h.push(H+1,H,O),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},An=class i extends pn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gr=class i extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new L,x=new L,S=new L;for(let E=0;E<e.length;E+=3)d(e[E+0],y),d(e[E+1],x),d(e[E+2],S),c(y,x,S,M)}function c(M,y,x,S){let E=S+1,w=[];for(let I=0;I<=E;I++){w[I]=[];let b=M.clone().lerp(x,I/E),v=y.clone().lerp(x,I/E),R=E-I;for(let U=0;U<=R;U++)U===0&&I===E?w[I][U]=b:w[I][U]=b.clone().lerp(v,U/R)}for(let I=0;I<E;I++)for(let b=0;b<2*(E-I)-1;b++){let v=Math.floor(b/2);b%2===0?(f(w[I][v+1]),f(w[I+1][v]),f(w[I][v])):(f(w[I][v+1]),f(w[I+1][v+1]),f(w[I+1][v]))}}function l(M){let y=new L;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let M=new L;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let x=m(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(x,1-S)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let y=o[M+0],x=o[M+2],S=o[M+4],E=Math.max(y,x,S),w=Math.min(y,x,S);E>.9&&w<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,y){let x=M*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){let M=new L,y=new L,x=new L,S=new L,E=new Et,w=new Et,I=new Et;for(let b=0,v=0;b<r.length;b+=9,v+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),E.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),I.set(o[v+4],o[v+5]),S.copy(M).add(y).add(x).divideScalar(3);let R=m(S);_(E,v+0,M,R),_(w,v+2,y,R),_(I,v+4,x,R)}}function _(M,y,x,S){S<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Et:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new zt;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Zt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Zt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_r=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},To=class extends _r{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ul(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var co=new L,Ic=new ul,Pc=new ul,Dc=new ul,Pi=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(co.subVectors(s[0],s[1]).add(s[0]),l=co);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=co),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ic.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Pc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Dc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Pc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Dc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ic.calc(c),Pc.calc(c),Dc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function rf(i,t){let e=1-i;return e*e*t}function of(i,t){return 2*(1-i)*i*t}function af(i,t){return i*i*t}function Ks(i,t,e,n){return rf(i,t)+of(i,e)+af(i,n)}function cf(i,t){let e=1-i;return e*e*e*t}function lf(i,t){let e=1-i;return 3*e*e*i*t}function hf(i,t){return 3*(1-i)*i*i*t}function uf(i,t){return i*i*i*t}function Qs(i,t,e,n,s){return cf(i,t)+lf(i,e)+hf(i,n)+uf(i,s)}var Ao=class extends mn{constructor(t=new Et,e=new Et,n=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,s.x,r.x,o.x,a.x),Qs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ro=class extends mn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,s.x,r.x,o.x,a.x),Qs(t,s.y,r.y,o.y,a.y),Qs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Co=class extends mn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vs=class extends mn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends mn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(t,s.x,r.x,o.x),Ks(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xr=class extends mn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(t,s.x,r.x,o.x),Ks(t,s.y,r.y,o.y),Ks(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(vh(a,c.x,l.x,h.x,u.x),vh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Et().fromArray(s))}return this}},df=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:Pi,CubicBezierCurve:Ao,CubicBezierCurve3:Ro,EllipseCurve:_r,LineCurve:Co,LineCurve3:vs,QuadraticBezierCurve:Io,QuadraticBezierCurve3:xr,SplineCurve:Po});function ff(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_u(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=xf(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return yr(r,o,e,a,c,l,0),o}function _u(i,t,e,n,s){let r;if(s===Cf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Mh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Mh(o/n|0,i[o],i[o+1],r);return r&&Ms(r,r.next)&&(Mr(r),r=r.next),r}function Di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ms(e,e.next)||me(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Sf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?mf(i,n,s,r):pf(i)){t.push(c.i,i.i,l.i),Mr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=gf(Di(i),t),yr(i,t,e,n,s,r,2)):o===2&&_f(i,t,e,n,s,r):yr(Di(i),t,e,n,s,r,1);break}}}function pf(i){let t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&$s(s,a,r,c,o,l,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(me(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),_=Math.max(a,c,l),m=Math.max(h,u,f),p=zc(d,g,t,e,n),M=zc(_,m,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=M;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$s(a,h,c,u,l,f,y.x,y.y)&&me(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&$s(a,h,c,u,l,f,x.x,x.y)&&me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$s(a,h,c,u,l,f,y.x,y.y)&&me(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&$s(a,h,c,u,l,f,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function gf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ms(n,s)&&yu(n,e,e.next,s)&&vr(n,s)&&vr(s,n)&&(t.push(n.i,e.i,s.i),Mr(e),Mr(e.next),e=i=s),e=e.next}while(e!==i);return Di(e)}function _f(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tf(o,a)){let c=vu(o,a);o=Di(o,o.next),c=Di(c,c.next),yr(o,t,e,n,s,r,0),yr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function xf(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=_u(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(wf(l))}s.sort(yf);for(let r=0;r<s.length;r++)e=vf(s[r],e);return e}function yf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function vf(i,t){let e=Mf(i,t);if(!e)return t;let n=vu(e,i);return Di(n,n.next),Di(e,e.next)}function Mf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ms(i,e))return e;do{if(Ms(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&xu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);vr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&bf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function bf(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function Sf(i,t,e,n){let s=i;do s.z===0&&(s.z=zc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ef(s)}function Ef(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function zc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $s(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&xu(i,t,e,n,s,r,o,a)}function Tf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Af(i,t)&&(vr(i,t)&&vr(t,i)&&Rf(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Ms(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ms(i,t){return i.x===t.x&&i.y===t.y}function yu(i,t,e,n){let s=ho(me(i,t,e)),r=ho(me(i,t,n)),o=ho(me(e,n,i)),a=ho(me(e,n,t));return!!(s!==r&&o!==a||s===0&&lo(i,e,t)||r===0&&lo(i,n,t)||o===0&&lo(e,i,n)||a===0&&lo(e,t,n))}function lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ho(i){return i>0?1:i<0?-1:0}function Af(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&yu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vr(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function Rf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vu(i,t){let e=kc(i.i,i.x,i.y),n=kc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mh(i,t,e,n){let s=kc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hc=class{static triangulate(t,e,n=2){return ff(t,e,n)}},br=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bh(t),Sh(n,t);let o=t.length;e.forEach(bh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Sh(n,e[c]);let a=Hc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function bh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var gn=class i extends gr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Li=class i extends gr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Sr=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let M=p*f-o;for(let y=0;y<l;y++){let x=y*u-r;g.push(x,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let y=M+l*p,x=M+l*(p+1),S=M+1+l*(p+1),E=M+1+l*p;d.push(y,x,E),d.push(x,S,E)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},di=class i extends be{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new L,g=new Et;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let M=p+m,y=M,x=M+n+1,S=M+n+2,E=M+1;a.push(y,x,E),a.push(x,S,E)}}this.setIndex(a),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ui=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,f=new L,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],y=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){let E=S/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+x,1-y),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let y=h[p][M+1],x=h[p][M],S=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&d.push(y,x,E),(p!==n-1||c<Math.PI)&&d.push(x,S,E)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Er=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var bs=class i extends be{constructor(t=new xr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new Et,h=new L,u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(d,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),M(),p()}function m(y){h=t.getPointAt(y/e,h);let x=o.normals[y],S=o.binormals[y];for(let E=0;E<=s;E++){let w=E/s*Math.PI*2,I=Math.sin(w),b=-Math.cos(w);c.x=b*x.x+I*S.x,c.y=b*x.y+I*S.y,c.z=b*x.z+I*S.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let S=(s+1)*(y-1)+(x-1),E=(s+1)*y+(x-1),w=(s+1)*y+x,I=(s+1)*(y-1)+x;g.push(S,E,I),g.push(E,w,I)}}function M(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)l.x=y/e,l.y=x/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new df[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var rn=class extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Do=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lo=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function uo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function If(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uc,endingEnd:Uc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fc:r=t,a=2*e-n;break;case Nc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fc:o=t,c=2*n-e;break;case Nc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+M*o[l+S]+y*o[c+S]+x*o[u+S];return r}},Fo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},No=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=uo(e,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:uo(t.times,Array),values:uo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case js:e=this.InterpolantFactoryMethodDiscrete;break;case xo:e=this.InterpolantFactoryMethodLinear;break;case fo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&If(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=xo;var fi=class extends on{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=js;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Bo.prototype.ValueTypeName="color";var Oo=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Oo.prototype.ValueTypeName="number";var zo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)wn.slerpFlat(r,0,o,l-a,o,l,c);return r}},wr=class extends on{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends on{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=js;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};ko.prototype.ValueTypeName="vector";var Ho=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Mu=new Ho,Vo=class{constructor(t){this.manager=t!==void 0?t:Mu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ar=class extends Tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Lc=new zt,Eh=new L,wh=new L,Vc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Rr=class extends ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gc=class extends Vc{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cr=class extends Tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Gc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Go=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var dl="\\[\\]\\.:\\/",Pf=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",Df="[^"+dl.replace("\\.","")+"]",Lf=/((?:WC+[\/:])*)/.source.replace("WC",fl),Uf=/(WCOD+)?/.source.replace("WCOD",Df),Ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),Nf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),Bf=new RegExp("^"+Lf+Uf+Ff+Nf+"$"),Of=["material","materials","bones","map"],Wc=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pf,"")}static parseTrackName(t){let e=Bf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Of.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Wc;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sx=new Float32Array(1);var Th=new zt,Ni=class{constructor(t,e,n=0,s=1/0){this.ray=new sr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(t,e=!0,n=[]){return Xc(t,this,n,e),n.sort(Ah),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Xc(t[s],this,n,e);return n.sort(Ah),n}};function Ah(i,t){return i.distance-t.distance}function Xc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Xc(r[o],t,e,!0)}}function pl(i,t,e,n){let s=zf(n);switch(e){case il:return i*t;case ra:return i*t/s.components*s.byteLength;case oa:return i*t/s.components*s.byteLength;case rl:return i*t*2/s.components*s.byteLength;case aa:return i*t*2/s.components*s.byteLength;case sl:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case ca:return i*t*4/s.components*s.byteLength;case Dr:case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:case da:return Math.max(i,16)*Math.max(t,8)/4;case la:case ua:return Math.max(i,8)*Math.max(t,8)/2;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Pa:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case La:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fa:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zf(i){switch(i){case Rn:case jc:return{byteLength:1,components:1};case Ss:case tl:case Es:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case gi:case na:case Cn:return{byteLength:4,components:1};case el:case nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Xu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hf(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
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
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ep=`#ifdef USE_IRIDESCENCE
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
#endif`,np=`#ifdef USE_BUMPMAP
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
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
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
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
#endif`,kp=`struct PhysicalMaterial {
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
}`,Hp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Jm=`#define DISTANCE
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
}`,$m=`#define DISTANCE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,cg=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,dg=`#define STANDARD
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
}`,fg=`#define TOON
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
}`,pg=`#define TOON
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
}`,mg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,yg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Vf,alphahash_pars_fragment:Gf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:Zf,aomap_pars_fragment:Jf,batching_pars_vertex:$f,batching_vertex:Kf,begin_vertex:Qf,beginnormal_vertex:jf,bsdfs:tp,iridescence_fragment:ep,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:rp,clipping_planes_vertex:op,color_fragment:ap,color_pars_fragment:cp,color_pars_vertex:lp,color_vertex:hp,common:up,cube_uv_reflection_fragment:dp,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,colorspace_fragment:xp,colorspace_pars_fragment:yp,envmap_fragment:vp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:bp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Up,envmap_vertex:Ep,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Rp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Lp,lights_toon_fragment:Fp,lights_toon_pars_fragment:Np,lights_phong_fragment:Bp,lights_phong_pars_fragment:Op,lights_physical_fragment:zp,lights_physical_pars_fragment:kp,lights_fragment_begin:Hp,lights_fragment_maps:Vp,lights_fragment_end:Gp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Yp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:$p,map_particle_pars_fragment:Kp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:jp,morphinstance_vertex:tm,morphcolor_vertex:em,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:om,normal_pars_fragment:am,normal_pars_vertex:cm,normal_vertex:lm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:ym,dithering_pars_fragment:vm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Em,shadowmap_vertex:wm,shadowmask_pars_fragment:Tm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Im,specularmap_fragment:Pm,specularmap_pars_fragment:Dm,tonemapping_fragment:Lm,tonemapping_pars_fragment:Um,transmission_fragment:Fm,transmission_pars_fragment:Nm,uv_pars_fragment:Bm,uv_pars_vertex:Om,uv_vertex:zm,worldpos_vertex:km,background_vert:Hm,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:Zm,distanceRGBA_vert:Jm,distanceRGBA_frag:$m,equirect_vert:Km,equirect_frag:Qm,linedashed_vert:jm,linedashed_frag:tg,meshbasic_vert:eg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:og,meshnormal_vert:ag,meshnormal_frag:cg,meshphong_vert:lg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:dg,meshtoon_vert:fg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:xg,sprite_vert:yg,sprite_frag:vg},mt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Fn={basic:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ne([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ne([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ne([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ne([mt.points,mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ne([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ne([mt.common,mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ne([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ne([mt.sprite,mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ne([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ne([mt.lights,mt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Fn.physical={uniforms:Ne([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Ba={r:0,b:0,g:0},ki=new sn,Mg=new zt;function bg(i,t,e,n,s,r,o){let a=new Gt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,S=g(y);S===null?p(a,c):S&&S.isColor&&(p(S,1),x=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let S=g(x);S&&(S.isCubeTexture||S.mapping===Ir)?(h===void 0&&(h=new kt(new Ze(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:zi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ki.copy(x.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(ki)),h.material.toneMapped=Kt.getTransfer(S.colorSpace)!==ie,(u!==S||f!==S.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new kt(new Sr(2,2),new Tn({name:"BackgroundMaterial",uniforms:zi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(S.colorSpace)!==ie,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(Ba,hl(i)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m,dispose:M}}function Sg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(v,R,U,O,H){let Z=!1,F=u(O,U,R);r!==F&&(r=F,l(r.object)),Z=d(v,O,U,H),Z&&g(v,O,U,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(v,R,U,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,R,U){let O=U.wireframe===!0,H=n[v.id];H===void 0&&(H={},n[v.id]=H);let Z=H[R.id];Z===void 0&&(Z={},H[R.id]=Z);let F=Z[O];return F===void 0&&(F=f(c()),Z[O]=F),F}function f(v){let R=[],U=[],O=[];for(let H=0;H<e;H++)R[H]=0,U[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:O,object:v,attributes:{},index:null}}function d(v,R,U,O){let H=r.attributes,Z=R.attributes,F=0,j=U.getAttributes();for(let C in j)if(j[C].location>=0){let Y=H[C],k=Z[C];if(k===void 0&&(C==="instanceMatrix"&&v.instanceMatrix&&(k=v.instanceMatrix),C==="instanceColor"&&v.instanceColor&&(k=v.instanceColor)),Y===void 0||Y.attribute!==k||k&&Y.data!==k.data)return!0;F++}return r.attributesNum!==F||r.index!==O}function g(v,R,U,O){let H={},Z=R.attributes,F=0,j=U.getAttributes();for(let C in j)if(j[C].location>=0){let Y=Z[C];Y===void 0&&(C==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),C==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor));let k={};k.attribute=Y,Y&&Y.data&&(k.data=Y.data),H[C]=k,F++}r.attributes=H,r.attributesNum=F,r.index=O}function _(){let v=r.newAttributes;for(let R=0,U=v.length;R<U;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){let U=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;U[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),H[v]!==R&&(i.vertexAttribDivisor(v,R),H[v]=R)}function M(){let v=r.newAttributes,R=r.enabledAttributes;for(let U=0,O=R.length;U<O;U++)R[U]!==v[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function y(v,R,U,O,H,Z,F){F===!0?i.vertexAttribIPointer(v,R,U,H,Z):i.vertexAttribPointer(v,R,U,O,H,Z)}function x(v,R,U,O){_();let H=O.attributes,Z=U.getAttributes(),F=R.defaultAttributeValues;for(let j in Z){let C=Z[j];if(C.location>=0){let N=H[j];if(N===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(N=v.instanceColor)),N!==void 0){let Y=N.normalized,k=N.itemSize,K=t.get(N);if(K===void 0)continue;let tt=K.buffer,G=K.type,J=K.bytesPerElement,B=G===i.INT||G===i.UNSIGNED_INT||N.gpuType===na;if(N.isInterleavedBufferAttribute){let X=N.data,it=X.stride,ut=N.offset;if(X.isInstancedInterleavedBuffer){for(let ht=0;ht<C.locationSize;ht++)p(C.location+ht,X.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ht=0;ht<C.locationSize;ht++)m(C.location+ht);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ht=0;ht<C.locationSize;ht++)y(C.location+ht,k/C.locationSize,G,Y,it*J,(ut+k/C.locationSize*ht)*J,B)}else{if(N.isInstancedBufferAttribute){for(let X=0;X<C.locationSize;X++)p(C.location+X,N.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let X=0;X<C.locationSize;X++)m(C.location+X);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let X=0;X<C.locationSize;X++)y(C.location+X,k/C.locationSize,G,Y,k*J,k/C.locationSize*X*J,B)}}else if(F!==void 0){let Y=F[j];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(C.location,Y);break;case 3:i.vertexAttrib3fv(C.location,Y);break;case 4:i.vertexAttrib4fv(C.location,Y);break;default:i.vertexAttrib1fv(C.location,Y)}}}}M()}function S(){I();for(let v in n){let R=n[v];for(let U in R){let O=R[U];for(let H in O)h(O[H].object),delete O[H];delete R[U]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;let R=n[v.id];for(let U in R){let O=R[U];for(let H in O)h(O[H].object),delete O[H];delete R[U]}delete n[v.id]}function w(v){for(let R in n){let U=n[R];if(U[v.id]===void 0)continue;let O=U[v.id];for(let H in O)h(O[H].object),delete O[H];delete U[v.id]}}function I(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Eg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==_n&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let I=w===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Cn&&!I)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:S,maxSamples:E}}function Tg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new fn,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,y=M*4,x=p.clippingState||null;c.value=x,x=h(g,f,y,d);for(let S=0;S!==y;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ag(i){let t=new WeakMap;function e(o,a){return a===jo?o.mapping=Bi:a===ta&&(o.mapping=Oi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===jo||a===ta)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Eo(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rs=4,bu=[.125,.215,.35,.446,.526,.582],Gi=20,ml=new Rr,Su=new Gt,gl=null,_l=0,xl=0,yl=!1,Vi=(1+Math.sqrt(5))/2,As=1/Vi,Eu=[new L(-Vi,As,0),new L(Vi,As,0),new L(-As,0,Vi),new L(As,0,Vi),new L(0,Vi,-As),new L(0,Vi,As),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Rg=new L,ka=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Rg}=r;gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gl,_l,xl),this._renderer.xr.enabled=yl,t.scissorTest=!1,Oa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Es,format:_n,colorSpace:Ii,depthBuffer:!1},s=wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(r)),this._blurMaterial=Ig(r,t,e)}return s}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,ml)}_sceneToCubeUV(t,e,n,s,r){let c=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Su),u.toneMapping=Zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new ue({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),m=new kt(new Ze,_),p=!1,M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,p=!0):(_.color.copy(Su),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;Oa(s,x*S,y>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Bi||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Oa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ml)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Eu[(s-r-1)%Eu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);let p=[],M=0;for(let w=0;w<Gi;++w){let I=w/_,b=Math.exp(-I*I/2);p.push(b),w===0?M+=b:w<m&&(M+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let x=this._sizeLods[s],S=3*x*(s>y-Rs?s-y+Rs:0),E=4*(this._cubeSize-x);Oa(e,S,E,3*x,2*x),c.setRenderTarget(e),c.render(u,ml)}};function Cg(i){let t=[],e=[],n=[],s=i,r=i-Rs+1+bu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Rs?c=bu[o-i+Rs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let E=0;E<d;E++){let w=E%3*2/3-1,I=E>2?0:-1,b=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];M.set(b,_*g*E),y.set(f,m*g*E);let v=[E,E,E,E,E,E];x.set(v,p*g*E)}let S=new be;S.setAttribute("position",new Ee(M,_)),S.setAttribute("uv",new Ee(y,m)),S.setAttribute("faceIndex",new Ee(x,p)),t.push(S),s>Rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wu(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ig(i,t,e){let n=new Float32Array(Gi),s=new L(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Tu(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Au(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function Pg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===jo||c===ta,h=c===Bi||c===Oi;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ka(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new ka(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let y=0,x=M.length;y<x;y+=3){let S=M[y+0],E=M[y+1],w=M[y+2];f.push(S,E,E,w,w,S)}}else if(g!==void 0){let M=g.array;_=g.version;for(let y=0,x=M.length/3-1;y<x;y+=3){let S=y+0,E=y+1,w=y+2;f.push(S,E,E,w,w,S)}}else return;let m=new(ll(f)?or:rr)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ug(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ng(i,t,e){let n=new WeakMap,s=new ge;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*S*4*u),w=new ir(E,x,S,u);w.type=Cn,w.needsUpdate=!0;let I=y*4;for(let v=0;v<u;v++){let R=m[v],U=p[v],O=M[v],H=x*S*4*v;for(let Z=0;Z<R.count;Z++){let F=Z*I;d===!0&&(s.fromBufferAttribute(R,Z),E[H+F+0]=s.x,E[H+F+1]=s.y,E[H+F+2]=s.z,E[H+F+3]=0),g===!0&&(s.fromBufferAttribute(U,Z),E[H+F+4]=s.x,E[H+F+5]=s.y,E[H+F+6]=s.z,E[H+F+7]=0),_===!0&&(s.fromBufferAttribute(O,Z),E[H+F+8]=s.x,E[H+F+9]=s.y,E[H+F+10]=s.z,E[H+F+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new Et(x,S)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Bg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var qu=new Ye,Ru=new dr(1,1),Yu=new ir,Zu=new bo,Ju=new cr,Cu=[],Iu=[],Pu=new Float32Array(16),Du=new Float32Array(9),Lu=new Float32Array(4);function Is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Cu[s];if(r===void 0&&(r=new Float32Array(s),Cu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Va(i,t){let e=Iu[t];e===void 0&&(e=new Int32Array(t),Iu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Lu.set(n),i.uniformMatrix2fv(this.addr,!1,Lu),Ae(e,n)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Du.set(n),i.uniformMatrix3fv(this.addr,!1,Du),Ae(e,n)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Pu.set(n),i.uniformMatrix4fv(this.addr,!1,Pu),Ae(e,n)}}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ru.compareFunction=al,r=Ru):r=qu,e.setTexture2D(t||r,s)}function t0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zu,s)}function e0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ju,s)}function n0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yu,s)}function i0(i){switch(i){case 5126:return Og;case 35664:return zg;case 35665:return kg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}function s0(i,t){i.uniform1fv(this.addr,t)}function r0(i,t){let e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function o0(i,t){let e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function a0(i,t){let e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function c0(i,t){let e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function l0(i,t){let e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function h0(i,t){let e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function u0(i,t){i.uniform1iv(this.addr,t)}function d0(i,t){i.uniform2iv(this.addr,t)}function f0(i,t){i.uniform3iv(this.addr,t)}function p0(i,t){i.uniform4iv(this.addr,t)}function m0(i,t){i.uniform1uiv(this.addr,t)}function g0(i,t){i.uniform2uiv(this.addr,t)}function _0(i,t){i.uniform3uiv(this.addr,t)}function x0(i,t){i.uniform4uiv(this.addr,t)}function y0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qu,r[o])}function v0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zu,r[o])}function M0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ju,r[o])}function b0(i,t,e){let n=this.cache,s=t.length,r=Va(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yu,r[o])}function S0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return o0;case 35666:return a0;case 35674:return c0;case 35675:return l0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return b0}}var Ml=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=i0(e.type)}},bl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S0(e.type)}},Sl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function Uu(i,t){i.seq.push(t),i.map[t.id]=t}function E0(i,t,e){let n=i.name,s=n.length;for(vl.lastIndex=0;;){let r=vl.exec(n),o=vl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Uu(e,l===void 0?new Ml(a,i,t):new bl(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Sl(a),Uu(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);E0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Fu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var w0=37297,T0=0;function A0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Nu=new Ht;function R0(i){Kt._getMatrix(Nu,Kt.workingColorSpace,i);let t=`mat3( ${Nu.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case tr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+A0(i.getShaderSource(t),a)}else return r}function C0(i,t){let e=R0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function I0(i,t){let e;switch(t){case $h:e="Linear";break;case Kh:e="Reinhard";break;case Qh:e="Cineon";break;case jh:e="ACESFilmic";break;case eu:e="AgX";break;case Qo:e="Neutral";break;case tu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var za=new L;function P0(){Kt.getLuminanceCoefficients(za);let i=za.x.toFixed(4),t=za.y.toFixed(4),e=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function L0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function U0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Br(i){return i!==""}function Ou(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var F0=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(i){return i.replace(F0,B0)}var N0=new Map;function B0(i,t){let e=qt[t];if(e===void 0){let n=N0.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return El(e)}var O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(i){return i.replace(O0,z0)}function z0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function k0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function H0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bi:case Oi:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function V0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function G0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kc:t="ENVMAP_BLENDING_MULTIPLY";break;case Zh:t="ENVMAP_BLENDING_MIX";break;case Jh:t="ENVMAP_BLENDING_ADD";break}return t}function W0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function X0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=k0(e),l=H0(e),h=V0(e),u=G0(e),f=W0(e),d=D0(e),g=L0(r),_=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),p.length>0&&(p+=`
`)):(m=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),p=[Hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?I0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,C0("linearToOutputTexel",e.outputColorSpace),P0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),o=El(o),o=Ou(o,e),o=zu(o,e),a=El(a),a=Ou(a,e),a=zu(a,e),o=ku(o),a=ku(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+m+o,x=M+p+a,S=Fu(s,s.VERTEX_SHADER,y),E=Fu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(S)||"",H=s.getShaderInfoLog(E)||"",Z=U.trim(),F=O.trim(),j=H.trim(),C=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(C=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,E);else{let Y=Bu(s,S,"vertex"),k=Bu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Z+`
`+Y+`
`+k)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(F===""||j==="")&&(N=!1);N&&(R.diagnostics={runnable:C,programLog:Z,vertexShader:{log:F,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(S),s.deleteShader(E),I=new Cs(s,_),b=U0(s,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,w0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}var q0=0,wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tl(t),e.set(t,n)),n}},Tl=class{constructor(t){this.id=q0++,this.code=t,this.usedTimes=0}};function Y0(i,t,e,n,s,r,o){let a=new _s,c=new wl,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,v,R,U,O){let H=U.fog,Z=O.geometry,F=b.isMeshStandardMaterial?U.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||F),C=j&&j.mapping===Ir?j.image.height:null,N=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let Y=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,k=Y!==void 0?Y.length:0,K=0;Z.morphAttributes.position!==void 0&&(K=1),Z.morphAttributes.normal!==void 0&&(K=2),Z.morphAttributes.color!==void 0&&(K=3);let tt,G,J,B;if(N){let ee=Fn[N];tt=ee.vertexShader,G=ee.fragmentShader}else tt=b.vertexShader,G=b.fragmentShader,c.update(b),J=c.getVertexShaderID(b),B=c.getFragmentShaderID(b);let X=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),ut=O.isInstancedMesh===!0,ht=O.isBatchedMesh===!0,wt=!!b.map,se=!!b.matcap,D=!!j,ne=!!b.aoMap,Bt=!!b.lightMap,Lt=!!b.bumpMap,Mt=!!b.normalMap,de=!!b.displacementMap,Tt=!!b.emissiveMap,Xt=!!b.metalnessMap,Re=!!b.roughnessMap,Me=b.anisotropy>0,P=b.clearcoat>0,T=b.dispersion>0,q=b.iridescence>0,nt=b.sheen>0,rt=b.transmission>0,et=Me&&!!b.anisotropyMap,It=P&&!!b.clearcoatMap,dt=P&&!!b.clearcoatNormalMap,At=P&&!!b.clearcoatRoughnessMap,Rt=q&&!!b.iridescenceMap,ct=q&&!!b.iridescenceThicknessMap,xt=nt&&!!b.sheenColorMap,Nt=nt&&!!b.sheenRoughnessMap,Ct=!!b.specularMap,gt=!!b.specularColorMap,Wt=!!b.specularIntensityMap,z=rt&&!!b.transmissionMap,lt=rt&&!!b.thicknessMap,ft=!!b.gradientMap,vt=!!b.alphaMap,ot=b.alphaTest>0,st=!!b.alphaHash,St=!!b.extensions,Vt=Zn;b.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let ce={shaderID:N,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:G,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:B,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ht,batchingColor:ht&&O._colorsTexture!==null,instancing:ut,instancingColor:ut&&O.instanceColor!==null,instancingMorph:ut&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ii,alphaToCoverage:!!b.alphaToCoverage,map:wt,matcap:se,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:C,aoMap:ne,lightMap:Bt,bumpMap:Lt,normalMap:Mt,displacementMap:f&&de,emissiveMap:Tt,normalMapObjectSpace:Mt&&b.normalMapType===ru,normalMapTangentSpace:Mt&&b.normalMapType===ol,metalnessMap:Xt,roughnessMap:Re,anisotropy:Me,anisotropyMap:et,clearcoat:P,clearcoatMap:It,clearcoatNormalMap:dt,clearcoatRoughnessMap:At,dispersion:T,iridescence:q,iridescenceMap:Rt,iridescenceThicknessMap:ct,sheen:nt,sheenColorMap:xt,sheenRoughnessMap:Nt,specularMap:Ct,specularColorMap:gt,specularIntensityMap:Wt,transmission:rt,transmissionMap:z,thicknessMap:lt,gradientMap:ft,opaque:b.transparent===!1&&b.blending===Ri&&b.alphaToCoverage===!1,alphaMap:vt,alphaTest:ot,alphaHash:st,combine:b.combine,mapUv:wt&&_(b.map.channel),aoMapUv:ne&&_(b.aoMap.channel),lightMapUv:Bt&&_(b.lightMap.channel),bumpMapUv:Lt&&_(b.bumpMap.channel),normalMapUv:Mt&&_(b.normalMap.channel),displacementMapUv:de&&_(b.displacementMap.channel),emissiveMapUv:Tt&&_(b.emissiveMap.channel),metalnessMapUv:Xt&&_(b.metalnessMap.channel),roughnessMapUv:Re&&_(b.roughnessMap.channel),anisotropyMapUv:et&&_(b.anisotropyMap.channel),clearcoatMapUv:It&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(b.sheenRoughnessMap.channel),specularMapUv:Ct&&_(b.specularMap.channel),specularColorMapUv:gt&&_(b.specularColorMap.channel),specularIntensityMapUv:Wt&&_(b.specularIntensityMap.channel),transmissionMapUv:z&&_(b.transmissionMap.channel),thicknessMapUv:lt&&_(b.thicknessMap.channel),alphaMapUv:vt&&_(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Mt||Me),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(wt||vt),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:it,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:K,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:wt&&b.map.isVideoTexture===!0&&Kt.getTransfer(b.map.colorSpace)===ie,decodeVideoTextureEmissive:Tt&&b.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(b.emissiveMap.colorSpace)===ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ze,flipSided:b.side===Oe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:St&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&b.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function p(b){let v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)v.push(R),v.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(M(v,b),y(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function M(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function y(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){let v=g[b.type],R;if(v){let U=Fn[v];R=gu.clone(U.uniforms)}else R=b.uniforms;return R}function S(b,v){let R;for(let U=0,O=h.length;U<O;U++){let H=h[U];if(H.cacheKey===v){R=H,++R.usedTimes;break}}return R===void 0&&(R=new X0(i,v,b,r),h.push(R)),R}function E(b){if(--b.usedTimes===0){let v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function w(b){c.remove(b)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:I}}function Z0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function J0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||J0),n.length>1&&n.sort(f||Vu),s.length>1&&s.sort(f||Vu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function $0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Gu,i.set(n,[o])):s>=r.length?(o=new Gu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function K0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Q0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var j0=0;function t_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function e_(i){let t=new K0,e=Q0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new zt,o=new zt;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,y=0,x=0,S=0,E=0,w=0;l.sort(t_);for(let b=0,v=l.length;b<v;b++){let R=l[b],U=R.color,O=R.intensity,H=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*O,u+=U.g*O,f+=U.b*O;else if(R.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(R.sh.coefficients[F],O);w++}else if(R.isDirectionalLight){let F=t.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,C=e.get(R);C.shadowIntensity=j.intensity,C.shadowBias=j.bias,C.shadowNormalBias=j.normalBias,C.shadowRadius=j.radius,C.shadowMapSize=j.mapSize,n.directionalShadow[d]=C,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=F,d++}else if(R.isSpotLight){let F=t.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(U).multiplyScalar(O),F.distance=H,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,n.spot[_]=F;let j=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,j.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=j.matrix,R.castShadow){let C=e.get(R);C.shadowIntensity=j.intensity,C.shadowBias=j.bias,C.shadowNormalBias=j.normalBias,C.shadowRadius=j.radius,C.shadowMapSize=j.mapSize,n.spotShadow[_]=C,n.spotShadowMap[_]=Z,x++}_++}else if(R.isRectAreaLight){let F=t.get(R);F.color.copy(U).multiplyScalar(O),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=F,m++}else if(R.isPointLight){let F=t.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){let j=R.shadow,C=e.get(R);C.shadowIntensity=j.intensity,C.shadowBias=j.bias,C.shadowNormalBias=j.normalBias,C.shadowRadius=j.radius,C.shadowMapSize=j.mapSize,C.shadowCameraNear=j.camera.near,C.shadowCameraFar=j.camera.far,n.pointShadow[g]=C,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=F,g++}else if(R.isHemisphereLight){let F=t.get(R);F.skyColor.copy(R.color).multiplyScalar(O),F.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==S||I.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=S,I.numLightProbes=w,n.version=j0++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let y=l[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Wu(i){let t=new e_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function n_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Wu(i),t.set(s,[a])):r>=o.length?(a=new Wu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
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
}`;function r_(i,t,e){let n=new ys,s=new Et,r=new Et,o=new ge,a=new Do({depthPacking:su}),c=new Lo,l={},h=e.maxTextureSize,u={[Xn]:Oe,[Oe]:Xn,[ze]:ze},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new kt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let p=this.type;this.render=function(E,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Yn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=p!==Un&&this.type===Un,H=p===Un&&this.type!==Un;for(let Z=0,F=E.length;Z<F;Z++){let j=E[Z],C=j.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);let N=C.getFrameExtents();if(s.multiply(N),r.copy(C.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/N.x),s.x=r.x*N.x,C.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/N.y),s.y=r.y*N.y,C.mapSize.y=r.y)),C.map===null||O===!0||H===!0){let k=this.type!==Un?{minFilter:qe,magFilter:qe}:{};C.map!==null&&C.map.dispose(),C.map=new Dn(s.x,s.y,k),C.map.texture.name=j.name+".shadowMap",C.camera.updateProjectionMatrix()}i.setRenderTarget(C.map),i.clear();let Y=C.getViewportCount();for(let k=0;k<Y;k++){let K=C.getViewport(k);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),U.viewport(o),C.updateMatrices(j,k),n=C.getFrustum(),x(w,I,C.camera,j,this.type)}C.isPointLightShadow!==!0&&this.type===Un&&M(C,I),C.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,v,R)};function M(E,w){let I=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Dn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,I,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,I,d,_,null)}function y(E,w,I,b){let v=null,R=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)v=R;else if(v=I.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let U=v.uuid,O=w.uuid,H=l[U];H===void 0&&(H={},l[U]=H);let Z=H[O];Z===void 0&&(Z=v.clone(),H[O]=Z,w.addEventListener("dispose",S)),v=Z}if(v.visible=w.visible,v.wireframe=w.wireframe,b===Un?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=i.properties.get(v);U.light=I}return v}function x(E,w,I,b,v){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Un)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let O=t.update(E),H=E.material;if(Array.isArray(H)){let Z=O.groups;for(let F=0,j=Z.length;F<j;F++){let C=Z[F],N=H[C.materialIndex];if(N&&N.visible){let Y=y(E,N,b,v);E.onBeforeShadow(i,E,w,I,O,Y,C),i.renderBufferDirect(I,null,O,Y,E,C),E.onAfterShadow(i,E,w,I,O,Y,C)}}}else if(H.visible){let Z=y(E,H,b,v);E.onBeforeShadow(i,E,w,I,O,Z,null),i.renderBufferDirect(I,null,O,Z,E,null),E.onAfterShadow(i,E,w,I,O,Z,null)}}let U=E.children;for(let O=0,H=U.length;O<H;O++)x(U[O],w,I,b,v)}function S(E){E.target.removeEventListener("dispose",S);for(let I in l){let b=l[I],v=E.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}var o_={[Xo]:qo,[Yo]:$o,[Zo]:Ko,[Ci]:Jo,[qo]:Xo,[$o]:Yo,[Ko]:Zo,[Jo]:Ci};function a_(i,t){function e(){let z=!1,lt=new ge,ft=null,vt=new ge(0,0,0,0);return{setMask:function(ot){ft!==ot&&!z&&(i.colorMask(ot,ot,ot,ot),ft=ot)},setLocked:function(ot){z=ot},setClear:function(ot,st,St,Vt,ce){ce===!0&&(ot*=Vt,st*=Vt,St*=Vt),lt.set(ot,st,St,Vt),vt.equals(lt)===!1&&(i.clearColor(ot,st,St,Vt),vt.copy(lt))},reset:function(){z=!1,ft=null,vt.set(-1,0,0,0)}}}function n(){let z=!1,lt=!1,ft=null,vt=null,ot=null;return{setReversed:function(st){if(lt!==st){let St=t.get("EXT_clip_control");st?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),lt=st;let Vt=ot;ot=null,this.setClear(Vt)}},getReversed:function(){return lt},setTest:function(st){st?X(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(st){ft!==st&&!z&&(i.depthMask(st),ft=st)},setFunc:function(st){if(lt&&(st=o_[st]),vt!==st){switch(st){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=st}},setLocked:function(st){z=st},setClear:function(st){ot!==st&&(lt&&(st=1-st),i.clearDepth(st),ot=st)},reset:function(){z=!1,ft=null,vt=null,ot=null,lt=!1}}}function s(){let z=!1,lt=null,ft=null,vt=null,ot=null,st=null,St=null,Vt=null,ce=null;return{setTest:function(ee){z||(ee?X(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(ee){lt!==ee&&!z&&(i.stencilMask(ee),lt=ee)},setFunc:function(ee,On,Pn){(ft!==ee||vt!==On||ot!==Pn)&&(i.stencilFunc(ee,On,Pn),ft=ee,vt=On,ot=Pn)},setOp:function(ee,On,Pn){(st!==ee||St!==On||Vt!==Pn)&&(i.stencilOp(ee,On,Pn),st=ee,St=On,Vt=Pn)},setLocked:function(ee){z=ee},setClear:function(ee){ce!==ee&&(i.clearStencil(ee),ce=ee)},reset:function(){z=!1,lt=null,ft=null,vt=null,ot=null,st=null,St=null,Vt=null,ce=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,x=null,S=null,E=null,w=new Gt(0,0,0),I=0,b=!1,v=null,R=null,U=null,O=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,j=0,C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(C)[1]),F=j>=1):C.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),F=j>=2);let N=null,Y={},k=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),tt=new ge().fromArray(k),G=new ge().fromArray(K);function J(z,lt,ft,vt){let ot=new Uint8Array(4),st=i.createTexture();i.bindTexture(z,st),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let St=0;St<ft;St++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(lt+St,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return st}let B={};B[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Ci),Lt(!1),Mt(qc),X(i.CULL_FACE),ne(Yn);function X(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function it(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function ut(z,lt){return u[z]!==lt?(i.bindFramebuffer(z,lt),u[z]=lt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function ht(z,lt){let ft=d,vt=!1;if(z){ft=f.get(lt),ft===void 0&&(ft=[],f.set(lt,ft));let ot=z.textures;if(ft.length!==ot.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let st=0,St=ot.length;st<St;st++)ft[st]=i.COLOR_ATTACHMENT0+st;ft.length=ot.length,vt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,vt=!0);vt&&i.drawBuffers(ft)}function wt(z){return g!==z?(i.useProgram(z),g=z,!0):!1}let se={[li]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Dh]:i.FUNC_REVERSE_SUBTRACT};se[Lh]=i.MIN,se[Uh]=i.MAX;let D={[Fh]:i.ZERO,[Nh]:i.ONE,[Bh]:i.SRC_COLOR,[po]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[Hh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[mo]:i.ONE_MINUS_SRC_ALPHA,[Vh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[qh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(z,lt,ft,vt,ot,st,St,Vt,ce,ee){if(z===Yn){_===!0&&(it(i.BLEND),_=!1);return}if(_===!1&&(X(i.BLEND),_=!0),z!==Ih){if(z!==m||ee!==b){if((p!==li||x!==li)&&(i.blendEquation(i.FUNC_ADD),p=li,x=li),ee)switch(z){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zc:i.blendFunc(i.ONE,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,y=null,S=null,E=null,w.set(0,0,0),I=0,m=z,b=ee}return}ot=ot||lt,st=st||ft,St=St||vt,(lt!==p||ot!==x)&&(i.blendEquationSeparate(se[lt],se[ot]),p=lt,x=ot),(ft!==M||vt!==y||st!==S||St!==E)&&(i.blendFuncSeparate(D[ft],D[vt],D[st],D[St]),M=ft,y=vt,S=st,E=St),(Vt.equals(w)===!1||ce!==I)&&(i.blendColor(Vt.r,Vt.g,Vt.b,ce),w.copy(Vt),I=ce),m=z,b=!1}function Bt(z,lt){z.side===ze?it(i.CULL_FACE):X(i.CULL_FACE);let ft=z.side===Oe;lt&&(ft=!ft),Lt(ft),z.blending===Ri&&z.transparent===!1?ne(Yn):ne(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let vt=z.stencilWrite;a.setTest(vt),vt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Tt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(z){v!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),v=z)}function Mt(z){z!==Rh?(X(i.CULL_FACE),z!==R&&(z===qc?i.cullFace(i.BACK):z===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),R=z}function de(z){z!==U&&(F&&i.lineWidth(z),U=z)}function Tt(z,lt,ft){z?(X(i.POLYGON_OFFSET_FILL),(O!==lt||H!==ft)&&(i.polygonOffset(lt,ft),O=lt,H=ft)):it(i.POLYGON_OFFSET_FILL)}function Xt(z){z?X(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Re(z){z===void 0&&(z=i.TEXTURE0+Z-1),N!==z&&(i.activeTexture(z),N=z)}function Me(z,lt,ft){ft===void 0&&(N===null?ft=i.TEXTURE0+Z-1:ft=N);let vt=Y[ft];vt===void 0&&(vt={type:void 0,texture:void 0},Y[ft]=vt),(vt.type!==z||vt.texture!==lt)&&(N!==ft&&(i.activeTexture(ft),N=ft),i.bindTexture(z,lt||B[z]),vt.type=z,vt.texture=lt)}function P(){let z=Y[N];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function rt(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Rt(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(z){tt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),tt.copy(z))}function Nt(z){G.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),G.copy(z))}function Ct(z,lt){let ft=l.get(lt);ft===void 0&&(ft=new WeakMap,l.set(lt,ft));let vt=ft.get(z);vt===void 0&&(vt=i.getUniformBlockIndex(lt,z.name),ft.set(z,vt))}function gt(z,lt){let vt=l.get(lt).get(z);c.get(lt)!==vt&&(i.uniformBlockBinding(lt,vt,z.__bindingPointIndex),c.set(lt,vt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},N=null,Y={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,y=null,x=null,S=null,E=null,w=new Gt(0,0,0),I=0,b=!1,v=null,R=null,U=null,O=null,H=null,tt.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:it,bindFramebuffer:ut,drawBuffers:ht,useProgram:wt,setBlending:ne,setMaterial:Bt,setFlipSided:Lt,setCullFace:Mt,setLineWidth:de,setPolygonOffset:Tt,setScissorTest:Xt,activeTexture:Re,bindTexture:Me,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:Rt,texImage3D:ct,updateUBOMapping:Ct,uniformBlockBinding:gt,texStorage2D:dt,texStorage3D:At,texSubImage2D:nt,texSubImage3D:rt,compressedTexSubImage2D:et,compressedTexSubImage3D:It,scissor:xt,viewport:Nt,reset:Wt}}function c_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return d?new OffscreenCanvas(P,T):nr("canvas")}function _(P,T,q){let nt=1,rt=Me(P);if((rt.width>q||rt.height>q)&&(nt=q/Math.max(rt.width,rt.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let et=Math.floor(nt*rt.width),It=Math.floor(nt*rt.height);u===void 0&&(u=g(et,It));let dt=T?g(et,It):u;return dt.width=et,dt.height=It,dt.getContext("2d").drawImage(P,0,0,et,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+et+"x"+It+")."),dt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,T,q,nt,rt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=T;if(T===i.RED&&(q===i.FLOAT&&(et=i.R32F),q===i.HALF_FLOAT&&(et=i.R16F),q===i.UNSIGNED_BYTE&&(et=i.R8)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.R8UI),q===i.UNSIGNED_SHORT&&(et=i.R16UI),q===i.UNSIGNED_INT&&(et=i.R32UI),q===i.BYTE&&(et=i.R8I),q===i.SHORT&&(et=i.R16I),q===i.INT&&(et=i.R32I)),T===i.RG&&(q===i.FLOAT&&(et=i.RG32F),q===i.HALF_FLOAT&&(et=i.RG16F),q===i.UNSIGNED_BYTE&&(et=i.RG8)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RG8UI),q===i.UNSIGNED_SHORT&&(et=i.RG16UI),q===i.UNSIGNED_INT&&(et=i.RG32UI),q===i.BYTE&&(et=i.RG8I),q===i.SHORT&&(et=i.RG16I),q===i.INT&&(et=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGB8UI),q===i.UNSIGNED_SHORT&&(et=i.RGB16UI),q===i.UNSIGNED_INT&&(et=i.RGB32UI),q===i.BYTE&&(et=i.RGB8I),q===i.SHORT&&(et=i.RGB16I),q===i.INT&&(et=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),q===i.UNSIGNED_INT&&(et=i.RGBA32UI),q===i.BYTE&&(et=i.RGBA8I),q===i.SHORT&&(et=i.RGBA16I),q===i.INT&&(et=i.RGBA32I)),T===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),T===i.RGBA){let It=rt?tr:Kt.getTransfer(nt);q===i.FLOAT&&(et=i.RGBA32F),q===i.HALF_FLOAT&&(et=i.RGBA16F),q===i.UNSIGNED_BYTE&&(et=It===ie?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(P,T){let q;return P?T===null||T===gi||T===ws?q=i.DEPTH24_STENCIL8:T===Cn?q=i.DEPTH32F_STENCIL8:T===Ss&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gi||T===ws?q=i.DEPTH_COMPONENT24:T===Cn?q=i.DEPTH_COMPONENT32F:T===Ss&&(q=i.DEPTH_COMPONENT16),q}function S(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==qe&&P.minFilter!==En?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function E(P){let T=P.target;T.removeEventListener("dispose",E),I(T),T.isVideoTexture&&h.delete(T)}function w(P){let T=P.target;T.removeEventListener("dispose",w),v(T)}function I(P){let T=n.get(P);if(T.__webglInit===void 0)return;let q=P.source,nt=f.get(q);if(nt){let rt=nt[T.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&b(P),Object.keys(nt).length===0&&f.delete(q)}n.remove(P)}function b(P){let T=n.get(P);i.deleteTexture(T.__webglTexture);let q=P.source,nt=f.get(q);delete nt[T.__cacheKey],o.memory.textures--}function v(P){let T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let rt=0;rt<T.__webglFramebuffer[nt].length;rt++)i.deleteFramebuffer(T.__webglFramebuffer[nt][rt]);else i.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)i.deleteFramebuffer(T.__webglFramebuffer[nt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let q=P.textures;for(let nt=0,rt=q.length;nt<rt;nt++){let et=n.get(q[nt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(q[nt])}n.remove(P)}let R=0;function U(){R=0}function O(){let P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function H(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Z(P,T){let q=n.get(P);if(P.isVideoTexture&&Xt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let nt=P.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(q,P,T);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function F(P,T){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){B(q,P,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function j(P,T){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){B(q,P,T);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function C(P,T){let q=n.get(P);if(P.version>0&&q.__version!==P.version){X(q,P,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}let N={[go]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},Y={[qe]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},k={[ou]:i.NEVER,[du]:i.ALWAYS,[au]:i.LESS,[al]:i.LEQUAL,[cu]:i.EQUAL,[uu]:i.GEQUAL,[lu]:i.GREATER,[hu]:i.NOTEQUAL};function K(P,T){if(T.type===Cn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===En||T.magFilter===ea||T.magFilter===Pr||T.magFilter===mi||T.minFilter===En||T.minFilter===ea||T.minFilter===Pr||T.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,N[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,N[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,N[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Y[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Y[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===qe||T.minFilter!==Pr&&T.minFilter!==mi||T.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function tt(P,T){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",E));let nt=T.source,rt=f.get(nt);rt===void 0&&(rt={},f.set(nt,rt));let et=H(T);if(et!==P.__cacheKey){rt[et]===void 0&&(rt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),rt[et].usedTimes++;let It=rt[P.__cacheKey];It!==void 0&&(rt[P.__cacheKey].usedTimes--,It.usedTimes===0&&b(T)),P.__cacheKey=et,P.__webglTexture=rt[et].texture}return q}function G(P,T,q){return Math.floor(Math.floor(P/q)/T)}function J(P,T,q,nt){let et=P.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,q,nt,T.data);else{et.sort((ct,xt)=>ct.start-xt.start);let It=0;for(let ct=1;ct<et.length;ct++){let xt=et[It],Nt=et[ct],Ct=xt.start+xt.count,gt=G(Nt.start,T.width,4),Wt=G(xt.start,T.width,4);Nt.start<=Ct+1&&gt===Wt&&G(Nt.start+Nt.count-1,T.width,4)===gt?xt.count=Math.max(xt.count,Nt.start+Nt.count-xt.start):(++It,et[It]=Nt)}et.length=It+1;let dt=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ct=0,xt=et.length;ct<xt;ct++){let Nt=et[ct],Ct=Math.floor(Nt.start/4),gt=Math.ceil(Nt.count/4),Wt=Ct%T.width,z=Math.floor(Ct/T.width),lt=gt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Wt,z,lt,ft,q,nt,T.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function B(P,T,q){let nt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(nt=i.TEXTURE_3D);let rt=tt(P,T),et=T.source;e.bindTexture(nt,P.__webglTexture,i.TEXTURE0+q);let It=n.get(et);if(et.version!==It.__version||rt===!0){e.activeTexture(i.TEXTURE0+q);let dt=Kt.getPrimaries(Kt.workingColorSpace),At=T.colorSpace===Jn?null:Kt.getPrimaries(T.colorSpace),Rt=T.colorSpace===Jn||dt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ct=_(T.image,!1,s.maxTextureSize);ct=Re(T,ct);let xt=r.convert(T.format,T.colorSpace),Nt=r.convert(T.type),Ct=y(T.internalFormat,xt,Nt,T.colorSpace,T.isVideoTexture);K(nt,T);let gt,Wt=T.mipmaps,z=T.isVideoTexture!==!0,lt=It.__version===void 0||rt===!0,ft=et.dataReady,vt=S(T,ct);if(T.isDepthTexture)Ct=x(T.format===Ts,T.type),lt&&(z?e.texStorage2D(i.TEXTURE_2D,1,Ct,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Ct,ct.width,ct.height,0,xt,Nt,null));else if(T.isDataTexture)if(Wt.length>0){z&&lt&&e.texStorage2D(i.TEXTURE_2D,vt,Ct,Wt[0].width,Wt[0].height);for(let ot=0,st=Wt.length;ot<st;ot++)gt=Wt[ot],z?ft&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,gt.width,gt.height,xt,Nt,gt.data):e.texImage2D(i.TEXTURE_2D,ot,Ct,gt.width,gt.height,0,xt,Nt,gt.data);T.generateMipmaps=!1}else z?(lt&&e.texStorage2D(i.TEXTURE_2D,vt,Ct,ct.width,ct.height),ft&&J(T,ct,xt,Nt)):e.texImage2D(i.TEXTURE_2D,0,Ct,ct.width,ct.height,0,xt,Nt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){z&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ct,Wt[0].width,Wt[0].height,ct.depth);for(let ot=0,st=Wt.length;ot<st;ot++)if(gt=Wt[ot],T.format!==_n)if(xt!==null)if(z){if(ft)if(T.layerUpdates.size>0){let St=pl(gt.width,gt.height,T.format,T.type);for(let Vt of T.layerUpdates){let ce=gt.data.subarray(Vt*St/gt.data.BYTES_PER_ELEMENT,(Vt+1)*St/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Vt,gt.width,gt.height,1,xt,ce)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,gt.width,gt.height,ct.depth,xt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Ct,gt.width,gt.height,ct.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,gt.width,gt.height,ct.depth,xt,Nt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Ct,gt.width,gt.height,ct.depth,0,xt,Nt,gt.data)}else{z&&lt&&e.texStorage2D(i.TEXTURE_2D,vt,Ct,Wt[0].width,Wt[0].height);for(let ot=0,st=Wt.length;ot<st;ot++)gt=Wt[ot],T.format!==_n?xt!==null?z?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,gt.width,gt.height,xt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Ct,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ft&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,gt.width,gt.height,xt,Nt,gt.data):e.texImage2D(i.TEXTURE_2D,ot,Ct,gt.width,gt.height,0,xt,Nt,gt.data)}else if(T.isDataArrayTexture)if(z){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ct,ct.width,ct.height,ct.depth),ft)if(T.layerUpdates.size>0){let ot=pl(ct.width,ct.height,T.format,T.type);for(let st of T.layerUpdates){let St=ct.data.subarray(st*ot/ct.data.BYTES_PER_ELEMENT,(st+1)*ot/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ct.width,ct.height,1,xt,Nt,St)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,xt,Nt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,ct.width,ct.height,ct.depth,0,xt,Nt,ct.data);else if(T.isData3DTexture)z?(lt&&e.texStorage3D(i.TEXTURE_3D,vt,Ct,ct.width,ct.height,ct.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,xt,Nt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,ct.width,ct.height,ct.depth,0,xt,Nt,ct.data);else if(T.isFramebufferTexture){if(lt)if(z)e.texStorage2D(i.TEXTURE_2D,vt,Ct,ct.width,ct.height);else{let ot=ct.width,st=ct.height;for(let St=0;St<vt;St++)e.texImage2D(i.TEXTURE_2D,St,Ct,ot,st,0,xt,Nt,null),ot>>=1,st>>=1}}else if(Wt.length>0){if(z&&lt){let ot=Me(Wt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Ct,ot.width,ot.height)}for(let ot=0,st=Wt.length;ot<st;ot++)gt=Wt[ot],z?ft&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,xt,Nt,gt):e.texImage2D(i.TEXTURE_2D,ot,Ct,xt,Nt,gt);T.generateMipmaps=!1}else if(z){if(lt){let ot=Me(ct);e.texStorage2D(i.TEXTURE_2D,vt,Ct,ot.width,ot.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Nt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Ct,xt,Nt,ct);m(T)&&p(nt),It.__version=et.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function X(P,T,q){if(T.image.length!==6)return;let nt=tt(P,T),rt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);let et=n.get(rt);if(rt.version!==et.__version||nt===!0){e.activeTexture(i.TEXTURE0+q);let It=Kt.getPrimaries(Kt.workingColorSpace),dt=T.colorSpace===Jn?null:Kt.getPrimaries(T.colorSpace),At=T.colorSpace===Jn||It===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Rt=T.isCompressedTexture||T.image[0].isCompressedTexture,ct=T.image[0]&&T.image[0].isDataTexture,xt=[];for(let st=0;st<6;st++)!Rt&&!ct?xt[st]=_(T.image[st],!0,s.maxCubemapSize):xt[st]=ct?T.image[st].image:T.image[st],xt[st]=Re(T,xt[st]);let Nt=xt[0],Ct=r.convert(T.format,T.colorSpace),gt=r.convert(T.type),Wt=y(T.internalFormat,Ct,gt,T.colorSpace),z=T.isVideoTexture!==!0,lt=et.__version===void 0||nt===!0,ft=rt.dataReady,vt=S(T,Nt);K(i.TEXTURE_CUBE_MAP,T);let ot;if(Rt){z&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Wt,Nt.width,Nt.height);for(let st=0;st<6;st++){ot=xt[st].mipmaps;for(let St=0;St<ot.length;St++){let Vt=ot[St];T.format!==_n?Ct!==null?z?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,Vt.width,Vt.height,Ct,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,Wt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,0,0,Vt.width,Vt.height,Ct,gt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St,Wt,Vt.width,Vt.height,0,Ct,gt,Vt.data)}}}else{if(ot=T.mipmaps,z&&lt){ot.length>0&&vt++;let st=Me(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Wt,st.width,st.height)}for(let st=0;st<6;st++)if(ct){z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt[st].width,xt[st].height,Ct,gt,xt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Wt,xt[st].width,xt[st].height,0,Ct,gt,xt[st].data);for(let St=0;St<ot.length;St++){let ce=ot[St].image[st].image;z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,ce.width,ce.height,Ct,gt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,Wt,ce.width,ce.height,0,Ct,gt,ce.data)}}else{z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ct,gt,xt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Wt,Ct,gt,xt[st]);for(let St=0;St<ot.length;St++){let Vt=ot[St];z?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,0,0,Ct,gt,Vt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,St+1,Wt,Ct,gt,Vt.image[st])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),et.__version=rt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function it(P,T,q,nt,rt,et){let It=r.convert(q.format,q.colorSpace),dt=r.convert(q.type),At=y(q.internalFormat,It,dt,q.colorSpace),Rt=n.get(T),ct=n.get(q);if(ct.__renderTarget=T,!Rt.__hasExternalTextures){let xt=Math.max(1,T.width>>et),Nt=Math.max(1,T.height>>et);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,et,At,xt,Nt,T.depth,0,It,dt,null):e.texImage2D(rt,et,At,xt,Nt,0,It,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Tt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,rt,ct.__webglTexture,0,de(T)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,rt,ct.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(P,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){let nt=T.depthTexture,rt=nt&&nt.isDepthTexture?nt.type:null,et=x(T.stencilBuffer,rt),It=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=de(T);Tt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,et,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,et,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,et,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,P)}else{let nt=T.textures;for(let rt=0;rt<nt.length;rt++){let et=nt[rt],It=r.convert(et.format,et.colorSpace),dt=r.convert(et.type),At=y(et.internalFormat,It,dt,et.colorSpace),Rt=de(T);q&&Tt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,At,T.width,T.height):Tt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,At,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,At,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(T.depthTexture);nt.__renderTarget=T,(!nt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);let rt=nt.__webglTexture,et=de(T);if(T.depthTexture.format===ps)Tt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(T.depthTexture.format===Ts)Tt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function wt(P){let T=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let nt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),nt){let rt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,nt.removeEventListener("dispose",rt)};nt.addEventListener("dispose",rt),T.__depthDisposeCallback=rt}T.__boundDepthTexture=nt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");let nt=P.texture.mipmaps;nt&&nt.length>0?ht(T.__webglFramebuffer[0],P):ht(T.__webglFramebuffer,P)}else if(q){T.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[nt]),T.__webglDepthbuffer[nt]===void 0)T.__webglDepthbuffer[nt]=i.createRenderbuffer(),ut(T.__webglDepthbuffer[nt],P,!1);else{let rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,et)}}else{let nt=P.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ut(T.__webglDepthbuffer,P,!1);else{let rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function se(P,T,q){let nt=n.get(P);T!==void 0&&it(nt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&wt(P)}function D(P){let T=P.texture,q=n.get(P),nt=n.get(T);P.addEventListener("dispose",w);let rt=P.textures,et=P.isWebGLCubeRenderTarget===!0,It=rt.length>1;if(It||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=T.version,o.memory.textures++),et){q.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[dt]=[];for(let At=0;At<T.mipmaps.length;At++)q.__webglFramebuffer[dt][At]=i.createFramebuffer()}else q.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let dt=0;dt<T.mipmaps.length;dt++)q.__webglFramebuffer[dt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(It)for(let dt=0,At=rt.length;dt<At;dt++){let Rt=n.get(rt[dt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Tt(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let dt=0;dt<rt.length;dt++){let At=rt[dt];q.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[dt]);let Rt=r.convert(At.format,At.colorSpace),ct=r.convert(At.type),xt=y(At.internalFormat,Rt,ct,At.colorSpace,P.isXRRenderTarget===!0),Nt=de(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,xt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,q.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),K(i.TEXTURE_CUBE_MAP,T);for(let dt=0;dt<6;dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)it(q.__webglFramebuffer[dt][At],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,At);else it(q.__webglFramebuffer[dt],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let dt=0,At=rt.length;dt<At;dt++){let Rt=rt[dt],ct=n.get(Rt),xt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,ct.__webglTexture),K(xt,Rt),it(q.__webglFramebuffer,P,Rt,i.COLOR_ATTACHMENT0+dt,xt,0),m(Rt)&&p(xt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,nt.__webglTexture),K(dt,T),T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)it(q.__webglFramebuffer[At],P,T,i.COLOR_ATTACHMENT0,dt,At);else it(q.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,dt,0);m(T)&&p(dt),e.unbindTexture()}P.depthBuffer&&wt(P)}function ne(P){let T=P.textures;for(let q=0,nt=T.length;q<nt;q++){let rt=T[q];if(m(rt)){let et=M(P),It=n.get(rt).__webglTexture;e.bindTexture(et,It),p(et),e.unbindTexture()}}}let Bt=[],Lt=[];function Mt(P){if(P.samples>0){if(Tt(P)===!1){let T=P.textures,q=P.width,nt=P.height,rt=i.COLOR_BUFFER_BIT,et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(P),dt=T.length>1;if(dt)for(let Rt=0;Rt<T.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);let At=P.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);let ct=n.get(T[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,q,nt,0,0,q,nt,rt,i.NEAREST),c===!0&&(Bt.length=0,Lt.length=0,Bt.push(i.COLOR_ATTACHMENT0+Rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Bt.push(et),Lt.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Rt=0;Rt<T.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Rt]);let ct=n.get(T[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function de(P){return Math.min(s.maxSamples,P.samples)}function Tt(P){let T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(P){let T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Re(P,T){let q=P.colorSpace,nt=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Ii&&q!==Jn&&(Kt.getTransfer(q)===ie?(nt!==_n||rt!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Me(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=j,this.setTextureCube=C,this.rebindTextures=se,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Tt}function l_(i,t){function e(n,s=Jn){let r,o=Kt.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===el)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jc)return i.BYTE;if(n===tl)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===na)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Es)return i.HALF_FLOAT;if(n===il)return i.ALPHA;if(n===sl)return i.RGB;if(n===_n)return i.RGBA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===ra)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===rl)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===ca)return i.RGBA_INTEGER;if(n===Dr||n===Lr||n===Ur||n===Fr)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ha||n===ua||n===da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===la)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fa||n===pa)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===_a||n===xa||n===ya||n===va||n===Ma||n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_a)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Pa||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ia)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===La||n===Ua||n===Fa||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===La)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
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

}`,Al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Tn({vertexShader:h_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kt(new Sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rl=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new Al,p={},M=e.getContextAttributes(),y=null,x=null,S=[],E=[],w=new Et,I=null,b=new Ue;b.viewport=new ge;let v=new Ue;v.viewport=new ge;let R=[b,v],U=new Go,O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let X=S[B];return X===void 0&&(X=new xs,S[B]=X),X.getTargetRaySpace()},this.getControllerGrip=function(B){let X=S[B];return X===void 0&&(X=new xs,S[B]=X),X.getGripSpace()},this.getHand=function(B){let X=S[B];return X===void 0&&(X=new xs,S[B]=X),X.getHandSpace()};function Z(B){let X=E.indexOf(B.inputSource);if(X===-1)return;let it=S[X];it!==void 0&&(it.update(B.inputSource,B.frame,l||o),it.dispatchEvent({type:B.type,data:B.inputSource}))}function F(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",j);for(let B=0;B<S.length;B++){let X=E[B];X!==null&&(E[B]=null,S[B].disconnect(X))}O=null,H=null,m.reset();for(let B in p)delete p[B];t.setRenderTarget(y),d=null,f=null,u=null,s=null,x=null,J.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,ut=null,ht=null;M.depth&&(ht=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=M.stencil?Ts:ps,ut=M.stencil?ws:gi);let wt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Dn(f.textureWidth,f.textureHeight,{format:_n,type:Rn,depthTexture:new dr(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let it={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Dn(d.framebufferWidth,d.framebufferHeight,{format:_n,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),J.setContext(s),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(B){for(let X=0;X<B.removed.length;X++){let it=B.removed[X],ut=E.indexOf(it);ut>=0&&(E[ut]=null,S[ut].disconnect(it))}for(let X=0;X<B.added.length;X++){let it=B.added[X],ut=E.indexOf(it);if(ut===-1){for(let wt=0;wt<S.length;wt++)if(wt>=E.length){E.push(it),ut=wt;break}else if(E[wt]===null){E[wt]=it,ut=wt;break}if(ut===-1)break}let ht=S[ut];ht&&ht.connect(it)}}let C=new L,N=new L;function Y(B,X,it){C.setFromMatrixPosition(X.matrixWorld),N.setFromMatrixPosition(it.matrixWorld);let ut=C.distanceTo(N),ht=X.projectionMatrix.elements,wt=it.projectionMatrix.elements,se=ht[14]/(ht[10]-1),D=ht[14]/(ht[10]+1),ne=(ht[9]+1)/ht[5],Bt=(ht[9]-1)/ht[5],Lt=(ht[8]-1)/ht[0],Mt=(wt[8]+1)/wt[0],de=se*Lt,Tt=se*Mt,Xt=ut/(-Lt+Mt),Re=Xt*-Lt;if(X.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Re),B.translateZ(Xt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ht[10]===-1)B.projectionMatrix.copy(X.projectionMatrix),B.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let Me=se+Xt,P=D+Xt,T=de-Re,q=Tt+(ut-Re),nt=ne*D/P*Me,rt=Bt*D/P*Me;B.projectionMatrix.makePerspective(T,q,nt,rt,Me,P),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function k(B,X){X===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(X.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let X=B.near,it=B.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(it=m.depthFar)),U.near=v.near=b.near=X,U.far=v.far=b.far=it,(O!==U.near||H!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,H=U.far),U.layers.mask=B.layers.mask|6,b.layers.mask=U.layers.mask&3,v.layers.mask=U.layers.mask&5;let ut=B.parent,ht=U.cameras;k(U,ut);for(let wt=0;wt<ht.length;wt++)k(ht[wt],ut);ht.length===2?Y(U,b,v):U.projectionMatrix.copy(b.projectionMatrix),K(B,U,ut)};function K(B,X,it){it===null?B.matrix.copy(X.matrixWorld):(B.matrix.copy(it.matrixWorld),B.matrix.invert(),B.matrix.multiply(X.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(X.projectionMatrix),B.projectionMatrixInverse.copy(X.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=yo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(B){c=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(B){return p[B]};let tt=null;function G(B,X){if(h=X.getViewerPose(l||o),g=X,h!==null){let it=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ut=!1;it.length!==U.cameras.length&&(U.cameras.length=0,ut=!0);for(let D=0;D<it.length;D++){let ne=it[D],Bt=null;if(d!==null)Bt=d.getViewport(ne);else{let Mt=u.getViewSubImage(f,ne);Bt=Mt.viewport,D===0&&(t.setRenderTargetTextures(x,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(x))}let Lt=R[D];Lt===void 0&&(Lt=new Ue,Lt.layers.enable(D),Lt.viewport=new ge,R[D]=Lt),Lt.matrix.fromArray(ne.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(ne.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),D===0&&(U.matrix.copy(Lt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ut===!0&&U.cameras.push(Lt)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let D=u.getDepthInformation(it[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(ht&&ht.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<it.length;D++){let ne=it[D].camera;if(ne){let Bt=p[ne];Bt||(Bt=new fr,p[ne]=Bt);let Lt=u.getCameraImage(ne);Bt.sourceTexture=Lt}}}}for(let it=0;it<S.length;it++){let ut=E[it],ht=S[it];ut!==null&&ht!==void 0&&ht.update(ut,X,l||o)}tt&&tt(B,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}let J=new Xu;J.setAnimationLoop(G),this.setAnimationLoop=function(B){tt=B},this.dispose=function(){}}},Hi=new sn,d_=new zt;function f_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Oe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Oe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),y=M.envMap,x=M.envMapRotation;y&&(m.envMap.value=y,Hi.copy(x),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(Hi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){let x=y.program;n.uniformBlockBinding(M,x)}function l(M,y){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",m));let S=y.program;n.updateUBOMapping(M,S);let E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){let y=u();M.__bindingPointIndex=y;let x=i.createBuffer(),S=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=s[M.id],x=M.uniforms,S=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){let I=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,v=I.length;b<v;b++){let R=I[b];if(d(R,E,b,S)===!0){let U=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],H=0;for(let Z=0;Z<O.length;Z++){let F=O[Z],j=_(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,U+H,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,y,x,S){let E=M.value,w=y+"_"+x;if(S[w]===void 0)return typeof E=="number"||typeof E=="boolean"?S[w]=E:S[w]=E.clone(),!0;{let I=S[w];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return S[w]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(M){let y=M.uniforms,x=0,S=16;for(let w=0,I=y.length;w<I;w++){let b=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,R=b.length;v<R;v++){let U=b[v],O=Array.isArray(U.value)?U.value:[U.value];for(let H=0,Z=O.length;H<Z;H++){let F=O[H],j=_(F),C=x%S,N=C%j.boundary,Y=C+N;x+=N,Y!==0&&S-Y<j.storage&&(x+=S-Y),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=j.storage}}}let E=x%S;return E>0&&(x+=S-E),M.__size=x,M.__cache={},this}function _(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ha=class{constructor(t={}){let{canvas:e=fu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,S=!1;this._outputColorSpace=nn;let E=0,w=0,I=null,b=-1,v=null,R=new ge,U=new ge,O=null,H=new Gt(0),Z=0,F=e.width,j=e.height,C=1,N=null,Y=null,k=new ge(0,0,F,j),K=new ge(0,0,F,j),tt=!1,G=new ys,J=!1,B=!1,X=new zt,it=new L,ut=new ge,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},wt=!1;function se(){return I===null?C:1}let D=n;function ne(A,V){return e.getContext(A,V)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),D===null){let V="webgl2";if(D=ne(V,A),D===null)throw ne(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Bt,Lt,Mt,de,Tt,Xt,Re,Me,P,T,q,nt,rt,et,It,dt,At,Rt,ct,xt,Nt,Ct,gt,Wt;function z(){Bt=new Dg(D),Bt.init(),Ct=new l_(D,Bt),Lt=new wg(D,Bt,t,Ct),Mt=new a_(D,Bt),Lt.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),de=new Fg(D),Tt=new Z0,Xt=new c_(D,Bt,Mt,Tt,Lt,Ct,de),Re=new Ag(x),Me=new Pg(x),P=new Hf(D),gt=new Sg(D,P),T=new Lg(D,P,de,gt),q=new Bg(D,T,P,de),ct=new Ng(D,Lt,Xt),dt=new Tg(Tt),nt=new Y0(x,Re,Me,Bt,Lt,gt,dt),rt=new f_(x,Tt),et=new $0,It=new n_(Bt),Rt=new bg(x,Re,Me,Mt,q,d,c),At=new r_(x,q,Lt),Wt=new p_(D,de,Lt,Mt),xt=new Eg(D,Bt,de),Nt=new Ug(D,Bt,de),de.programs=nt.programs,x.capabilities=Lt,x.extensions=Bt,x.properties=Tt,x.renderLists=et,x.shadowMap=At,x.state=Mt,x.info=de}z();let lt=new Rl(x,D);this.xr=lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=Bt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Bt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(A){A!==void 0&&(C=A,this.setSize(F,j,!1))},this.getSize=function(A){return A.set(F,j)},this.setSize=function(A,V,$=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,j=V,e.width=Math.floor(A*C),e.height=Math.floor(V*C),$===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(F*C,j*C).floor()},this.setDrawingBufferSize=function(A,V,$){F=A,j=V,C=$,e.width=Math.floor(A*$),e.height=Math.floor(V*$),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(k)},this.setViewport=function(A,V,$,Q){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,V,$,Q),Mt.viewport(R.copy(k).multiplyScalar(C).round())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,V,$,Q){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,V,$,Q),Mt.scissor(U.copy(K).multiplyScalar(C).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(A){Mt.setScissorTest(tt=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,$=!0){let Q=0;if(A){let W=!1;if(I!==null){let at=I.texture.format;W=at===ca||at===aa||at===oa}if(W){let at=I.texture.type,_t=at===Rn||at===gi||at===Ss||at===ws||at===ia||at===sa,bt=Rt.getClearColor(),yt=Rt.getClearAlpha(),Ft=bt.r,Ot=bt.g,Pt=bt.b;_t?(g[0]=Ft,g[1]=Ot,g[2]=Pt,g[3]=yt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ft,_[1]=Ot,_[2]=Pt,_[3]=yt,D.clearBufferiv(D.COLOR,0,_))}else Q|=D.COLOR_BUFFER_BIT}V&&(Q|=D.DEPTH_BUFFER_BIT),$&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Rt.dispose(),et.dispose(),It.dispose(),Tt.dispose(),Re.dispose(),Me.dispose(),q.dispose(),gt.dispose(),Wt.dispose(),nt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Pn),lt.removeEventListener("sessionend",Jl),Mi.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let A=de.autoReset,V=At.enabled,$=At.autoUpdate,Q=At.needsUpdate,W=At.type;z(),de.autoReset=A,At.enabled=V,At.autoUpdate=$,At.needsUpdate=Q,At.type=W}function ot(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){let V=A.target;V.removeEventListener("dispose",st),St(V)}function St(A){Vt(A),Tt.remove(A)}function Vt(A){let V=Tt.get(A).programs;V!==void 0&&(V.forEach(function($){nt.releaseProgram($)}),A.isShaderMaterial&&nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,$,Q,W,at){V===null&&(V=ht);let _t=W.isMesh&&W.matrixWorld.determinant()<0,bt=Sd(A,V,$,Q,W);Mt.setMaterial(Q,_t);let yt=$.index,Ft=1;if(Q.wireframe===!0){if(yt=T.getWireframeAttribute($),yt===void 0)return;Ft=2}let Ot=$.drawRange,Pt=$.attributes.position,Jt=Ot.start*Ft,re=(Ot.start+Ot.count)*Ft;at!==null&&(Jt=Math.max(Jt,at.start*Ft),re=Math.min(re,(at.start+at.count)*Ft)),yt!==null?(Jt=Math.max(Jt,0),re=Math.min(re,yt.count)):Pt!=null&&(Jt=Math.max(Jt,0),re=Math.min(re,Pt.count));let ye=re-Jt;if(ye<0||ye===1/0)return;gt.setup(W,Q,bt,$,yt);let le,oe=xt;if(yt!==null&&(le=P.get(yt),oe=Nt,oe.setIndex(le)),W.isMesh)Q.wireframe===!0?(Mt.setLineWidth(Q.wireframeLinewidth*se()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(W.isLine){let Ut=Q.linewidth;Ut===void 0&&(Ut=1),Mt.setLineWidth(Ut*se()),W.isLineSegments?oe.setMode(D.LINES):W.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else W.isPoints?oe.setMode(D.POINTS):W.isSprite&&oe.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))oe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ut=W._multiDrawStarts,fe=W._multiDrawCounts,jt=W._multiDrawCount,Qe=yt?P.get(yt).bytesPerElement:1,ji=Tt.get(Q).currentProgram.getUniforms();for(let je=0;je<jt;je++)ji.setValue(D,"_gl_DrawID",je),oe.render(Ut[je]/Qe,fe[je])}else if(W.isInstancedMesh)oe.renderInstances(Jt,ye,W.count);else if($.isInstancedBufferGeometry){let Ut=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,fe=Math.min($.instanceCount,Ut);oe.renderInstances(Jt,ye,fe)}else oe.render(Jt,ye)};function ce(A,V,$){A.transparent===!0&&A.side===ze&&A.forceSinglePass===!1?(A.side=Oe,A.needsUpdate=!0,Gr(A,V,$),A.side=Xn,A.needsUpdate=!0,Gr(A,V,$),A.side=ze):Gr(A,V,$)}this.compile=function(A,V,$=null){$===null&&($=A),p=It.get($),p.init(V),y.push(p),$.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==$&&A.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let Q=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let at=W.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){let bt=at[_t];ce(bt,$,W),Q.add(bt)}else ce(at,$,W),Q.add(at)}),p=y.pop(),Q},this.compileAsync=function(A,V,$=null){let Q=this.compile(A,V,$);return new Promise(W=>{function at(){if(Q.forEach(function(_t){Tt.get(_t).currentProgram.isReady()&&Q.delete(_t)}),Q.size===0){W(A);return}setTimeout(at,10)}Bt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ee=null;function On(A){ee&&ee(A)}function Pn(){Mi.stop()}function Jl(){Mi.start()}let Mi=new Xu;Mi.setAnimationLoop(On),typeof self!="undefined"&&Mi.setContext(self),this.setAnimationLoop=function(A){ee=A,lt.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},lt.addEventListener("sessionstart",Pn),lt.addEventListener("sessionend",Jl),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(V),V=lt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,V,I),p=It.get(A,y.length),p.init(V),y.push(p),X.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),G.setFromProjectionMatrix(X,Sn,V.reversedDepth),B=this.localClippingEnabled,J=dt.init(this.clippingPlanes,B),m=et.get(A,M.length),m.init(),M.push(m),lt.enabled===!0&&lt.isPresenting===!0){let at=x.xr.getDepthSensingMesh();at!==null&&sc(at,V,-1/0,x.sortObjects)}sc(A,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(N,Y),wt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,wt&&Rt.addToRenderList(m,A),this.info.render.frame++,J===!0&&dt.beginShadows();let $=p.state.shadowsArray;At.render($,A,V),J===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,W=m.transmissive;if(p.setupLights(),V.isArrayCamera){let at=V.cameras;if(W.length>0)for(let _t=0,bt=at.length;_t<bt;_t++){let yt=at[_t];Kl(Q,W,A,yt)}wt&&Rt.render(A);for(let _t=0,bt=at.length;_t<bt;_t++){let yt=at[_t];$l(m,A,yt,yt.viewport)}}else W.length>0&&Kl(Q,W,A,V),wt&&Rt.render(A),$l(m,A,V);I!==null&&w===0&&(Xt.updateMultisampleRenderTarget(I),Xt.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(x,A,V),gt.resetDefaultState(),b=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],J===!0&&dt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function sc(A,V,$,Q){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||G.intersectsSprite(A)){Q&&ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(X);let _t=q.update(A),bt=A.material;bt.visible&&m.push(A,_t,bt,$,ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||G.intersectsObject(A))){let _t=q.update(A),bt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ut.copy(A.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),ut.copy(_t.boundingSphere.center)),ut.applyMatrix4(A.matrixWorld).applyMatrix4(X)),Array.isArray(bt)){let yt=_t.groups;for(let Ft=0,Ot=yt.length;Ft<Ot;Ft++){let Pt=yt[Ft],Jt=bt[Pt.materialIndex];Jt&&Jt.visible&&m.push(A,_t,Jt,$,ut.z,Pt)}}else bt.visible&&m.push(A,_t,bt,$,ut.z,null)}}let at=A.children;for(let _t=0,bt=at.length;_t<bt;_t++)sc(at[_t],V,$,Q)}function $l(A,V,$,Q){let W=A.opaque,at=A.transmissive,_t=A.transparent;p.setupLightsView($),J===!0&&dt.setGlobalState(x.clippingPlanes,$),Q&&Mt.viewport(R.copy(Q)),W.length>0&&Vr(W,V,$),at.length>0&&Vr(at,V,$),_t.length>0&&Vr(_t,V,$),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Kl(A,V,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Dn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Es:Rn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let at=p.state.transmissionRenderTarget[Q.id],_t=Q.viewport||R;at.setSize(_t.z*x.transmissionResolutionScale,_t.w*x.transmissionResolutionScale);let bt=x.getRenderTarget(),yt=x.getActiveCubeFace(),Ft=x.getActiveMipmapLevel();x.setRenderTarget(at),x.getClearColor(H),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),wt&&Rt.render($);let Ot=x.toneMapping;x.toneMapping=Zn;let Pt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),J===!0&&dt.setGlobalState(x.clippingPlanes,Q),Vr(A,$,Q),Xt.updateMultisampleRenderTarget(at),Xt.updateRenderTargetMipmap(at),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let re=0,ye=V.length;re<ye;re++){let le=V[re],oe=le.object,Ut=le.geometry,fe=le.material,jt=le.group;if(fe.side===ze&&oe.layers.test(Q.layers)){let Qe=fe.side;fe.side=Oe,fe.needsUpdate=!0,Ql(oe,$,Q,Ut,fe,jt),fe.side=Qe,fe.needsUpdate=!0,Jt=!0}}Jt===!0&&(Xt.updateMultisampleRenderTarget(at),Xt.updateRenderTargetMipmap(at))}x.setRenderTarget(bt,yt,Ft),x.setClearColor(H,Z),Pt!==void 0&&(Q.viewport=Pt),x.toneMapping=Ot}function Vr(A,V,$){let Q=V.isScene===!0?V.overrideMaterial:null;for(let W=0,at=A.length;W<at;W++){let _t=A[W],bt=_t.object,yt=_t.geometry,Ft=_t.group,Ot=_t.material;Ot.allowOverride===!0&&Q!==null&&(Ot=Q),bt.layers.test($.layers)&&Ql(bt,V,$,yt,Ot,Ft)}}function Ql(A,V,$,Q,W,at){A.onBeforeRender(x,V,$,Q,W,at),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(x,V,$,Q,A,at),W.transparent===!0&&W.side===ze&&W.forceSinglePass===!1?(W.side=Oe,W.needsUpdate=!0,x.renderBufferDirect($,V,Q,W,A,at),W.side=Xn,W.needsUpdate=!0,x.renderBufferDirect($,V,Q,W,A,at),W.side=ze):x.renderBufferDirect($,V,Q,W,A,at),A.onAfterRender(x,V,$,Q,W,at)}function Gr(A,V,$){V.isScene!==!0&&(V=ht);let Q=Tt.get(A),W=p.state.lights,at=p.state.shadowsArray,_t=W.state.version,bt=nt.getParameters(A,W.state,at,V,$),yt=nt.getProgramCacheKey(bt),Ft=Q.programs;Q.environment=A.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(A.isMeshStandardMaterial?Me:Re).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ft===void 0&&(A.addEventListener("dispose",st),Ft=new Map,Q.programs=Ft);let Ot=Ft.get(yt);if(Ot!==void 0){if(Q.currentProgram===Ot&&Q.lightsStateVersion===_t)return th(A,bt),Ot}else bt.uniforms=nt.getUniforms(A),A.onBeforeCompile(bt,x),Ot=nt.acquireProgram(bt,yt),Ft.set(yt,Ot),Q.uniforms=bt.uniforms;let Pt=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pt.clippingPlanes=dt.uniform),th(A,bt),Q.needsLights=wd(A),Q.lightsStateVersion=_t,Q.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.directionalShadowMap.value=W.state.directionalShadowMap,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotShadowMap.value=W.state.spotShadowMap,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMap.value=W.state.pointShadowMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Ot,Q.uniformsList=null,Ot}function jl(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Cs.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function th(A,V){let $=Tt.get(A);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Sd(A,V,$,Q,W){V.isScene!==!0&&(V=ht),Xt.resetTextureUnits();let at=V.fog,_t=Q.isMeshStandardMaterial?V.environment:null,bt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ii,yt=(Q.isMeshStandardMaterial?Me:Re).get(Q.envMap||_t),Ft=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ot=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Pt=!!$.morphAttributes.position,Jt=!!$.morphAttributes.normal,re=!!$.morphAttributes.color,ye=Zn;Q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=x.toneMapping);let le=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=le!==void 0?le.length:0,Ut=Tt.get(Q),fe=p.state.lights;if(J===!0&&(B===!0||A!==v)){let Be=A===v&&Q.id===b;dt.setState(Q,A,Be)}let jt=!1;Q.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==fe.state.version||Ut.outputColorSpace!==bt||W.isBatchedMesh&&Ut.batching===!1||!W.isBatchedMesh&&Ut.batching===!0||W.isBatchedMesh&&Ut.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ut.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ut.instancing===!1||!W.isInstancedMesh&&Ut.instancing===!0||W.isSkinnedMesh&&Ut.skinning===!1||!W.isSkinnedMesh&&Ut.skinning===!0||W.isInstancedMesh&&Ut.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ut.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ut.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ut.instancingMorph===!1&&W.morphTexture!==null||Ut.envMap!==yt||Q.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==dt.numPlanes||Ut.numIntersection!==dt.numIntersection)||Ut.vertexAlphas!==Ft||Ut.vertexTangents!==Ot||Ut.morphTargets!==Pt||Ut.morphNormals!==Jt||Ut.morphColors!==re||Ut.toneMapping!==ye||Ut.morphTargetsCount!==oe)&&(jt=!0):(jt=!0,Ut.__version=Q.version);let Qe=Ut.currentProgram;jt===!0&&(Qe=Gr(Q,V,W));let ji=!1,je=!1,Vs=!1,pe=Qe.getUniforms(),hn=Ut.uniforms;if(Mt.useProgram(Qe.program)&&(ji=!0,je=!0,Vs=!0),Q.id!==b&&(b=Q.id,je=!0),ji||v!==A){Mt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pe.setValue(D,"projectionMatrix",A.projectionMatrix),pe.setValue(D,"viewMatrix",A.matrixWorldInverse);let We=pe.map.cameraPosition;We!==void 0&&We.setValue(D,it.setFromMatrixPosition(A.matrixWorld)),Lt.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&pe.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,je=!0,Vs=!0)}if(W.isSkinnedMesh){pe.setOptional(D,W,"bindMatrix"),pe.setOptional(D,W,"bindMatrixInverse");let Be=W.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),pe.setValue(D,"boneTexture",Be.boneTexture,Xt))}W.isBatchedMesh&&(pe.setOptional(D,W,"batchingTexture"),pe.setValue(D,"batchingTexture",W._matricesTexture,Xt),pe.setOptional(D,W,"batchingIdTexture"),pe.setValue(D,"batchingIdTexture",W._indirectTexture,Xt),pe.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&pe.setValue(D,"batchingColorTexture",W._colorsTexture,Xt));let un=$.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&ct.update(W,$,Qe),(je||Ut.receiveShadow!==W.receiveShadow)&&(Ut.receiveShadow=W.receiveShadow,pe.setValue(D,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(hn.envMap.value=yt,hn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(hn.envMapIntensity.value=V.environmentIntensity),je&&(pe.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&Ed(hn,Vs),at&&Q.fog===!0&&rt.refreshFogUniforms(hn,at),rt.refreshMaterialUniforms(hn,Q,C,j,p.state.transmissionRenderTarget[A.id]),Cs.upload(D,jl(Ut),hn,Xt)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Cs.upload(D,jl(Ut),hn,Xt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&pe.setValue(D,"center",W.center),pe.setValue(D,"modelViewMatrix",W.modelViewMatrix),pe.setValue(D,"normalMatrix",W.normalMatrix),pe.setValue(D,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Be=Q.uniformsGroups;for(let We=0,rc=Be.length;We<rc;We++){let bi=Be[We];Wt.update(bi,Qe),Wt.bind(bi,Qe)}}return Qe}function Ed(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function wd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,V,$){let Q=Tt.get(A);Q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Tt.get(A.texture).__webglTexture=V,Tt.get(A.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:$,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let $=Tt.get(A);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0};let Td=D.createFramebuffer();this.setRenderTarget=function(A,V=0,$=0){I=A,E=V,w=$;let Q=!0,W=null,at=!1,_t=!1;if(A){let yt=Tt.get(A);if(yt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(D.FRAMEBUFFER,null),Q=!1;else if(yt.__webglFramebuffer===void 0)Xt.setupRenderTarget(A);else if(yt.__hasExternalTextures)Xt.rebindTextures(A,Tt.get(A.texture).__webglTexture,Tt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Pt=A.depthTexture;if(yt.__boundDepthTexture!==Pt){if(Pt!==null&&Tt.has(Pt)&&(A.width!==Pt.image.width||A.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(A)}}let Ft=A.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(_t=!0);let Ot=Tt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[V])?W=Ot[V][$]:W=Ot[V],at=!0):A.samples>0&&Xt.useMultisampledRTT(A)===!1?W=Tt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?W=Ot[$]:W=Ot,R.copy(A.viewport),U.copy(A.scissor),O=A.scissorTest}else R.copy(k).multiplyScalar(C).floor(),U.copy(K).multiplyScalar(C).floor(),O=tt;if($!==0&&(W=Td),Mt.bindFramebuffer(D.FRAMEBUFFER,W)&&Q&&Mt.drawBuffers(A,W),Mt.viewport(R),Mt.scissor(U),Mt.setScissorTest(O),at){let yt=Tt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,yt.__webglTexture,$)}else if(_t){let yt=V;for(let Ft=0;Ft<A.textures.length;Ft++){let Ot=Tt.get(A.textures[Ft]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ft,Ot.__webglTexture,$,yt)}}else if(A!==null&&$!==0){let yt=Tt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yt.__webglTexture,$)}b=-1},this.readRenderTargetPixels=function(A,V,$,Q,W,at,_t,bt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){Mt.bindFramebuffer(D.FRAMEBUFFER,yt);try{let Ft=A.textures[bt],Ot=Ft.format,Pt=Ft.type;if(!Lt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Q&&$>=0&&$<=A.height-W&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt),D.readPixels(V,$,Q,W,Ct.convert(Ot),Ct.convert(Pt),at))}finally{let Ft=I!==null?Tt.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(A,V,$,Q,W,at,_t,bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt)if(V>=0&&V<=A.width-Q&&$>=0&&$<=A.height-W){Mt.bindFramebuffer(D.FRAMEBUFFER,yt);let Ft=A.textures[bt],Ot=Ft.format,Pt=Ft.type;if(!Lt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Jt),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt),D.readPixels(V,$,Q,W,Ct.convert(Ot),Ct.convert(Pt),0);let re=I!==null?Tt.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,re);let ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await pu(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Jt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(Jt),D.deleteSync(ye),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,$=0){let Q=Math.pow(2,-$),W=Math.floor(A.image.width*Q),at=Math.floor(A.image.height*Q),_t=V!==null?V.x:0,bt=V!==null?V.y:0;Xt.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,_t,bt,W,at),Mt.unbindTexture()};let Ad=D.createFramebuffer(),Rd=D.createFramebuffer();this.copyTextureToTexture=function(A,V,$=null,Q=null,W=0,at=null){at===null&&(W!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=W,W=0):at=0);let _t,bt,yt,Ft,Ot,Pt,Jt,re,ye,le=A.isCompressedTexture?A.mipmaps[at]:A.image;if($!==null)_t=$.max.x-$.min.x,bt=$.max.y-$.min.y,yt=$.isBox3?$.max.z-$.min.z:1,Ft=$.min.x,Ot=$.min.y,Pt=$.isBox3?$.min.z:0;else{let un=Math.pow(2,-W);_t=Math.floor(le.width*un),bt=Math.floor(le.height*un),A.isDataArrayTexture?yt=le.depth:A.isData3DTexture?yt=Math.floor(le.depth*un):yt=1,Ft=0,Ot=0,Pt=0}Q!==null?(Jt=Q.x,re=Q.y,ye=Q.z):(Jt=0,re=0,ye=0);let oe=Ct.convert(V.format),Ut=Ct.convert(V.type),fe;V.isData3DTexture?(Xt.setTexture3D(V,0),fe=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Xt.setTexture2DArray(V,0),fe=D.TEXTURE_2D_ARRAY):(Xt.setTexture2D(V,0),fe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);let jt=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ji=D.getParameter(D.UNPACK_SKIP_PIXELS),je=D.getParameter(D.UNPACK_SKIP_ROWS),Vs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ft),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pt);let pe=A.isDataArrayTexture||A.isData3DTexture,hn=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let un=Tt.get(A),Be=Tt.get(V),We=Tt.get(un.__renderTarget),rc=Tt.get(Be.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,We.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,rc.__webglFramebuffer);for(let bi=0;bi<yt;bi++)pe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(A).__webglTexture,W,Pt+bi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(V).__webglTexture,at,ye+bi)),D.blitFramebuffer(Ft,Ot,_t,bt,Jt,re,_t,bt,D.DEPTH_BUFFER_BIT,D.NEAREST);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||Tt.has(A)){let un=Tt.get(A),Be=Tt.get(V);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Ad),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rd);for(let We=0;We<yt;We++)pe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,un.__webglTexture,W,Pt+We):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,un.__webglTexture,W),hn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Be.__webglTexture,at,ye+We):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Be.__webglTexture,at),W!==0?D.blitFramebuffer(Ft,Ot,_t,bt,Jt,re,_t,bt,D.COLOR_BUFFER_BIT,D.NEAREST):hn?D.copyTexSubImage3D(fe,at,Jt,re,ye+We,Ft,Ot,_t,bt):D.copyTexSubImage2D(fe,at,Jt,re,Ft,Ot,_t,bt);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else hn?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(fe,at,Jt,re,ye,_t,bt,yt,oe,Ut,le.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(fe,at,Jt,re,ye,_t,bt,yt,oe,le.data):D.texSubImage3D(fe,at,Jt,re,ye,_t,bt,yt,oe,Ut,le):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,at,Jt,re,_t,bt,oe,Ut,le.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,at,Jt,re,le.width,le.height,oe,le.data):D.texSubImage2D(D.TEXTURE_2D,at,Jt,re,_t,bt,oe,Ut,le);D.pixelStorei(D.UNPACK_ROW_LENGTH,jt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ji),D.pixelStorei(D.UNPACK_SKIP_ROWS,je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vs),at===0&&V.generateMipmaps&&D.generateMipmap(fe),Mt.unbindTexture()},this.initRenderTarget=function(A){Tt.get(A).__webglFramebuffer===void 0&&Xt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Xt.setTextureCube(A,0):A.isData3DTexture?Xt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Xt.setTexture2DArray(A,0):Xt.setTexture2D(A,0),Mt.unbindTexture()},this.resetState=function(){E=0,w=0,I=null,Mt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};function $u(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let M=0,y=a.length;M<y;M++){let x=a[M],S=i.attributes[x];c[x]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let E=i.morphAttributes[x];E&&(l[x]||(l[x]=[]),E.forEach((w,I)=>{let b=new w.array.constructor(w.count*w.itemSize);l[x][I]=new w.constructor(b,w.itemSize,w.normalized)}))}let d=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=d*_;for(let M=0;M<r;M++){let y=n?n.getX(M):M,x="";for(let S=0,E=a.length;S<E;S++){let w=a[S],I=i.getAttribute(w),b=I.itemSize;for(let v=0;v<b;v++)x+=`${~~(I[u[v]](y)*_+m)},`}if(x in e)h.push(e[x]);else{for(let S=0,E=a.length;S<E;S++){let w=a[S],I=i.getAttribute(w),b=i.morphAttributes[w],v=I.itemSize,R=c[w],U=l[w];for(let O=0;O<v;O++){let H=u[O],Z=f[O];if(R[Z](o,I[H](y)),b)for(let F=0,j=b.length;F<j;F++)U[F][Z](o,b[F][H](y))}}e[x]=o,h.push(o),o++}}let p=i.clone();for(let M in i.attributes){let y=c[M];if(p.setAttribute(M,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),M in l)for(let x=0;x<l[M].length;x++){let S=l[M][x];p.morphAttributes[M][x]=new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(h),p}var Il=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Ku=new Map;function Ps(i){if(Array.isArray(i))return i;let t=Ku.get(i);if(t)return t;let e=parseInt(i.slice(1),16);return t=[Il((e>>16&255)/255),Il((e>>8&255)/255),Il((e&255)/255)],Ku.set(i,t),t}function an(i,t){let e=Ps(i);return[Math.min(1,e[0]*t),Math.min(1,e[1]*t),Math.min(1,e[2]*t)]}var Ga=class{constructor(){this.L={}}buf(t){return this.L[t]||(this.L[t]={p:[],n:[],c:[]})}tri(t,e,n,s,r){let o=this.buf(t),a=Ps(e),c=s[0]-n[0],l=s[1]-n[1],h=s[2]-n[2],u=r[0]-n[0],f=r[1]-n[1],d=r[2]-n[2],g=l*d-h*f,_=h*u-c*d,m=c*f-l*u,p=Math.hypot(g,_,m)||1;g/=p,_/=p,m/=p,o.p.push(n[0],n[1],n[2],s[0],s[1],s[2],r[0],r[1],r[2]),o.n.push(g,_,m,g,_,m,g,_,m),o.c.push(a[0],a[1],a[2],a[0],a[1],a[2],a[0],a[1],a[2])}quad(t,e,n,s,r,o){this.tri(t,e,n,s,r),this.tri(t,e,n,r,o)}box(t,e,n,s,r,o,a,c,l=""){if(n>o&&([n,o]=[o,n]),s>a&&([s,a]=[a,s]),r>c&&([r,c]=[c,r]),o-n<1e-4||a-s<1e-4||c-r<1e-4)return;let h=(u,f,d)=>[u,f,d];l.includes("t")||this.quad(t,e,h(n,a,c),h(o,a,c),h(o,a,r),h(n,a,r)),l.includes("b")||this.quad(t,e,h(n,s,r),h(o,s,r),h(o,s,c),h(n,s,c)),this.quad(t,e,h(n,s,c),h(o,s,c),h(o,a,c),h(n,a,c)),this.quad(t,e,h(o,s,r),h(n,s,r),h(n,a,r),h(o,a,r)),this.quad(t,e,h(o,s,c),h(o,s,r),h(o,a,r),h(o,a,c)),this.quad(t,e,h(n,s,r),h(n,s,c),h(n,a,c),h(n,a,r))}obox(t,e,n,s,r,o){let a=(l,h,u)=>[n[0]+l*s[0]+h*r[0]+u*o[0],n[1]+l*s[1]+h*r[1]+u*o[1],n[2]+l*s[2]+h*r[2]+u*o[2]],c=(l,h,u,f)=>this.quad(t,e,l,h,u,f);c(a(-1,1,1),a(1,1,1),a(1,1,-1),a(-1,1,-1)),c(a(-1,-1,-1),a(1,-1,-1),a(1,-1,1),a(-1,-1,1)),c(a(-1,-1,1),a(1,-1,1),a(1,1,1),a(-1,1,1)),c(a(1,-1,-1),a(-1,-1,-1),a(-1,1,-1),a(1,1,-1)),c(a(1,-1,1),a(1,-1,-1),a(1,1,-1),a(1,1,1)),c(a(-1,-1,-1),a(-1,-1,1),a(-1,1,1),a(-1,1,-1))}ybox(t,e,n,s,r,o,a,c,l=0){let h=Math.cos(l),u=Math.sin(l);this.obox(t,e,[n,s,r],[h*o/2,0,u*o/2],[0,a/2,0],[-u*c/2,0,h*c/2])}beam(t,e,n,s,r,o=r){let a=[s[0]-n[0],s[1]-n[1],s[2]-n[2]],c=Math.hypot(...a)||1,l=a.map(g=>g/c),h=Math.abs(l[1])<.95?[l[2],0,-l[0]]:[1,0,0],u=Math.hypot(...h);h=h.map(g=>g/u);let f=[l[1]*h[2]-l[2]*h[1],l[2]*h[0]-l[0]*h[2],l[0]*h[1]-l[1]*h[0]],d=[(n[0]+s[0])/2,(n[1]+s[1])/2,(n[2]+s[2])/2];this.obox(t,e,d,h.map(g=>g*r/2),f.map(g=>g*o/2),l.map(g=>g*c/2))}prism(t,e,n,s,r,o={}){var f,d;let a=n.length,c=0;for(let g=0;g<a;g++){let _=n[g],m=n[(g+1)%a];c+=_[0]*m[1]-m[0]*_[1]}let l=c>0?n:[...n].reverse(),h=(f=o.top)!=null?f:e,u=(d=o.side)!=null?d:e;if(o.top!==!1)for(let g=1;g<a-1;g++)this.tri(t,h,[l[0][0],r,l[0][1]],[l[g+1][0],r,l[g+1][1]],[l[g][0],r,l[g][1]]);if(o.bottom!==!1)for(let g=1;g<a-1;g++)this.tri(t,u,[l[0][0],s,l[0][1]],[l[g][0],s,l[g][1]],[l[g+1][0],s,l[g+1][1]]);if(o.sides!==!1)for(let g=0;g<a;g++){let _=l[g],m=l[(g+1)%a];this.quad(t,u,[m[0],s,m[1]],[_[0],s,_[1]],[_[0],r,_[1]],[m[0],r,m[1]])}}cyl(t,e,n,s,r,o,a,c=8,l=Math.PI/8,h={}){let u=[];for(let f=0;f<c;f++){let d=l+f*Math.PI*2/c;u.push([n+Math.cos(d)*a,s+Math.sin(d)*a])}this.prism(t,e,u,r,o,h)}frustum(t,e,n,s,r,o,a,c,l=8,h=Math.PI/8){for(let u=0;u<l;u++){let f=h+u*Math.PI*2/l,d=h+(u+1)*Math.PI*2/l,g=[n+Math.cos(f)*a,r,s+Math.sin(f)*a],_=[n+Math.cos(d)*a,r,s+Math.sin(d)*a],m=[n+Math.cos(f)*c,o,s+Math.sin(f)*c],p=[n+Math.cos(d)*c,o,s+Math.sin(d)*c];this.quad(t,e,g,m,p,_),c>.001&&this.tri(t,e,[n,o,s],p,m),this.tri(t,e,[n,r,s],g,_)}}wall(t,e,n,s,r,o,a,c=[],l={}){let h=s[0]-n[0],u=s[1]-n[1],f=Math.hypot(h,u);if(f<.001)return null;let d=h/f,g=u/f,_=-g,m=d,p=o-r,M=(w,I,b=0)=>[n[0]+d*w+_*b,r+I,n[1]+g*w+m*b],y=new Set([0,f]),x=c.map(w=>{var I,b;return{s0:Math.max(0,w.a),s1:Math.min(f,w.a+w.w),y0:(I=w.y0)!=null?I:0,y1:Math.min(p,(b=w.y1)!=null?b:p)}}).filter(w=>w.s1>w.s0+.001);for(let w of x)y.add(w.s0),y.add(w.s1);let S=[...y].sort((w,I)=>w-I),E=Math.atan2(g,d);for(let w=0;w<S.length-1;w++){let I=S[w],b=S[w+1];if(b-I<.001)continue;let v=(I+b)/2,R=x.filter(H=>H.s0<=v&&H.s1>=v).sort((H,Z)=>H.y0-Z.y0),U=0,O=[];for(let H of R)H.y0>U+.001&&O.push([U,H.y0]),U=Math.max(U,H.y1);U<p-.001&&O.push([U,p]);for(let[H,Z]of O){let F=M(v,(H+Z)/2);this.ybox(t,e,F[0],F[1],F[2],b-I,Z-H,a,E)}}return{at:M,L:f,ux:d,uz:g,nx:_,nz:m,yaw:E}}rail(t,e,n,s,r=1.05,o=.5,a={}){var h,u;let c=(h=a.w)!=null?h:.07,l=(u=a.top)!=null?u:.12;for(let f=0;f<n.length-1;f++){let d=n[f],g=n[f+1],_=Math.hypot(g[0]-d[0],g[1]-d[1]);if(_<.05)continue;this.beam(t,e,[d[0],s+r,d[1]],[g[0],s+r,g[1]],l,.08),this.beam(t,e,[d[0],s+.12,d[1]],[g[0],s+.12,g[1]],c,c);let m=Math.max(1,Math.round(_/o));for(let p=0;p<=m;p++){if(p===0&&f>0)continue;let M=d[0]+(g[0]-d[0])*p/m,y=d[1]+(g[1]-d[1])*p/m,x=p===0||p===m;this.box(t,e,M-(x?.09:c/2),s,y-(x?.09:c/2),M+(x?.09:c/2),s+r,y+(x?.09:c/2))}}}stairs(t,e,n,s,r,o,a,c,l,h){let u=Math.cos(o),f=Math.sin(o);for(let d=0;d<a;d++){let g=l*(d+.5),_=n+u*g,m=s+f*g,p=r+c*(d+1);this.ybox(t,e,_,(r+p)/2,m,l,p-r,h,o)}}slab(t,e,n,s,r,o,a={}){var p,M;let c=y=>new Et(y[0],y[1]),l=y=>{let x=0;for(let S=0;S<y.length;S++){let E=y[S],w=y[(S+1)%y.length];x+=E[0]*w[1]-w[0]*E[1]}return x},h=l(n)>0?n:[...n].reverse(),u=s.map(y=>l(y)>0?[...y].reverse():y),f=[...h,...u.flat()],d=br.triangulateShape(h.map(c),u.map(y=>y.map(c))),g=(p=a.top)!=null?p:e,_=(M=a.side)!=null?M:e;for(let[y,x,S]of d){let E=f[y],w=f[x],I=f[S],b=(I[0]-E[0])*(w[1]-E[1])-(w[0]-E[0])*(I[1]-E[1]),[v,R]=b>0?[w,I]:[I,w];a.top!==!1&&this.tri(t,g,[E[0],o,E[1]],[v[0],o,v[1]],[R[0],o,R[1]]),a.bottom!==!1&&this.tri(t,_,[E[0],r,E[1]],[R[0],r,R[1]],[v[0],r,v[1]])}let m=y=>{for(let x=0;x<y.length;x++){let S=y[x],E=y[(x+1)%y.length];this.quad(t,_,[E[0],r,E[1]],[S[0],r,S[1]],[S[0],o,S[1]],[E[0],o,E[1]])}};if(a.sides!==!1){m(h);for(let y of u)m(y)}}plate(t,e,n,s=.3){let r=0;for(let c=0;c<4;c++){let l=n[c],h=n[(c+1)%4];r+=l[0]*h[2]-h[0]*l[2]}let o=r>0?[...n].reverse():n,a=o.map(c=>[c[0],c[1]-s,c[2]]);this.quad(t,e,o[0],o[1],o[2],o[3]),this.quad(t,e,a[3],a[2],a[1],a[0]);for(let c=0;c<4;c++){let l=(c+1)%4;this.quad(t,e,a[c],a[l],o[l],o[c])}}out(){let t={};for(let[e,n]of Object.entries(this.L))t[e]={p:new Float32Array(n.p),n:new Float32Array(n.n),c:new Float32Array(n.c)};return t}};function Je(i){let t=i.length,e=i.map(o=>o[0]),n=i.map(o=>o[1]),s=[],r=new Array(t).fill(0);for(let o=0;o<t-1;o++)s.push((n[o+1]-n[o])/(e[o+1]-e[o]));r[0]=s[0],r[t-1]=s[t-2];for(let o=1;o<t-1;o++)r[o]=s[o-1]*s[o]<=0?0:3*(e[o+1]-e[o-1])/((2*e[o+1]-e[o]-e[o-1])/s[o-1]+(e[o+1]-2*e[o]+e[o-1])/s[o]);return o=>{if(o<=e[0])return n[0];if(o>=e[t-1])return n[t-1];let a=0;for(;o>e[a+1];)a++;let c=e[a+1]-e[a],l=(o-e[a])/c,h=l*l,u=h*l;return(2*u-3*h+1)*n[a]+(u-2*h+l)*c*r[a]+(-2*u+3*h)*n[a+1]+(u-h)*c*r[a+1]}}var _e={x0:-22,x1:128,z0:-54,z1:44,base:-5},cn=Je([[-22,-10.2],[-12,-8.4],[-2,-9.6],[6,-10.2],[13,-8.8],[20,-7.2],[26,-6.3],[32,-6.5],[40,-9.6],[50,-13.6],[62,-18.6],[74,-23.6],[84,-26.4],[94,-26.2],[102,-21.8],[108,-15.6],[114,-10],[122,-8.2],[128,-8]]),ke=Je([[-22,6.2],[-10,7.6],[2,6.8],[9,7.6],[15,6.6],[20,5.2],[26,3.7],[32,4.2],[40,7],[50,9],[62,10.6],[74,12.6],[84,13.6],[94,13.4],[100,11.8],[108,8],[114,5.4],[122,4.6],[128,5]]),Dl=Je([[-22,3.8],[0,3.6],[10,3.1],[18,1.6],[24,.6],[30,.8],[36,2.3],[44,4.2],[52,5.6],[60,6.6],[70,7.6],[80,8.4],[90,8.6],[98,8.2],[106,5],[112,2.6],[120,1.2],[128,1]]),Ds=4.8,Nn=Je([[-22,3.6],[10,3.4],[20,2.8],[26,2.4],[32,2.6],[40,3.2],[60,3.6],[70,4.6],[77,5.6],[84,6.2],[94,6],[100,5.2],[104,4.6],[112,3.2],[128,3]]),Ls=Je([[-22,-.8],[10,-.95],[30,-1.25],[50,-1.45],[70,-1.6],[85,-1.7],[128,-2]]),Qu=Je([[-22,.7],[70,.8],[77,2.2],[84,2.8],[96,2.6],[105,.9],[128,.7]]),Ll=Je([[-22,.15],[0,0],[13,0],[17,.4],[22,2],[27,4.2],[30,5],[34,5],[37,4.1],[40.5,2.5],[43.5,1.9],[52,1.9],[55,1.3],[58.5,.7],[67,.7],[70.5,.1],[74,-.5],[109,-.5],[118,-.6],[128,-.9]]),Ul=(i,t)=>i+.2*(t-Dl(i)),$n=i=>ke(i)+3.4,He={x:48,z:-3.5,r:6.5,y:1.9},Wa={x:63,z:4,r:6.5,y:.7};var Yt={x:105.2,z:-2.6};var m_=i=>+(ke(i)-.9).toFixed(2),g_=i=>+(cn(i)+Nn(i)+.6).toFixed(2),ju={cliff:[...[74.5,79,84,89,94,99,103,106].map(i=>[i,m_(i)]),[108.4,6.4]],water:[...[73,77,81,85.5,90,94,98,102,105.6].map(i=>[i,g_(i)]),[108.2,-9.4]],block:[[108.4,6.4],[109.4,1.2],[109.2,-4.4],[108.2,-9.4]]},Kn=[104,-5.8],Qn=[103.8,.6];var Or=[{id:"k1",x:24,z:.9,ax:-.785,w:2.5,n:"\u6536\u675F\u5904"},{id:"k2",x:55.4,z:.6,ax:.785,w:2.5,n:"\u5E73\u5730\u4E00 \u2192 \u5E73\u5730\u4E8C"},{id:"k3",x:72,z:-3,ax:-.785,w:2.5,n:"\u5E73\u5730\u4E8C \u2192 \u7EC8\u70B9\u573A\u5730"}];function pt(i,t,e=0){let n=Or[i],s=Math.cos(n.ax),r=Math.sin(n.ax);return[+(n.x+s*t-r*e).toFixed(2),+(n.z+r*t+s*e).toFixed(2)]}var Xi=[[1,3.2],[6,3.2],[11,2.6],[16,1.6],[19.8,2.6],pt(0,-2.6),pt(0,0),pt(0,2.6),[28.4,-.6],[32,.9],[35,1.4],[38.5,.4],[41.5,-2],[45,-3.6],[49,-3.4],[52.2,-2.6],pt(1,-2.6),pt(1,0),pt(1,2.6),[58.6,3.7],[62,4.4],[66,3.8],pt(2,-2.6),pt(2,0),pt(2,2.6),[75.8,-6.2],[78.6,-5.2],[81,-2.6],[84,-1.2]],Fl=[{x:12.2,z:5.4,yaw:3.31,k:"nose",canopy:1,torn:1},{x:5,z:-4.9,yaw:.12,k:"over"},{x:44.8,z:4.6,yaw:1.42,k:"side"},{...Pl(pt(1,0,-2.925)),yaw:-.785,k:"stand",canopy:1,cargo:1},{x:55.9,z:-7,yaw:1.5708,k:"over"},{x:63.4,z:-8.6,yaw:-.2,k:"nose",canopy:1,cargo:1},{...Pl(pt(2,0,-2.925)),yaw:.785,k:"stand",canopy:1,torn:1},{...Pl(pt(2,-2.5,2.925)),yaw:.785,k:"stand",canopy:1,cargo:1},{x:73.2,z:-10,yaw:1.5708,k:"side"},{x:109.8,z:1,yaw:1.6,k:"burn",pose:"lean",canopy:1,torn:1},{x:108.8,z:-5.6,yaw:-1.45,k:"burn",pose:"side"},{x:72.9,z:9.4,yaw:1.5708,k:"over"}];function Pl(i){return{x:i[0],z:i[1]}}function Xa(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function $e(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Xa(e,n),l=Xa(e+1,n),h=Xa(e,n+1),u=Xa(e+1,n+1);return(c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a)*2-1}function Nl(i,t,e=4){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*$e(i*r,t*r),r*=2.03,s*=.5;return n}var In=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};var nd=Je([[-22,5],[16,6],[26,8],[34,7],[50,6],[70,8],[78,11],[100,11],[108,8],[128,6]]),__=Je([[-22,2.6],[70,2.4],[78,1.1],[100,1.1],[108,2],[128,2.6]]),x_=Je([[-22,20],[20,23],[40,21],[60,24],[85,26],[110,23],[128,21]]),y_=Je([[-22,3],[14,4],[22,6.5],[32,6],[40,4],[62,5],[74,8.5],[100,9],[108,7],[128,5]]),v_=Je([[-22,2.4],[22,1.8],[32,2],[62,2.2],[74,1.3],[100,1.3],[108,2],[128,2.4]]),M_=Je([[-22,16],[25,19],[50,17],[80,21],[110,18],[128,17]]),id=i=>In(74,79,i)*(1-In(101,106,i));function td(i,t,e,n,s,r,o){let a=o*t,c=15+6*$e(i*.035,o*7),l=e+n,h=e+n*Math.pow(In(0,s,t),.75),u=Nl(i*.022+o*3,t*.03+o*9,3),f=r+5*u,d=Math.max(0,f-l);h+=d*Math.pow(In(s+1.2,c,t),1.1),h-=Math.min(7,Math.max(0,t-c-6)*.22);let g=Math.max(0,$e(i*.055+o*13,3.1)-.3)*6*In(s+3,c,t);h-=g;let _=o<0?1-.9*id(i)*(1-In(s+1,s+5,t)):1;return h+=Nl(i*.06+o*5,a*.06+o,3)*(.8+.05*t)*In(0,2.5,t)*_*1.6,h}function qi(i,t){let e=cn(i),n=ke(i),s=Nn(i),r=Ls(i),o=Dl(i),a=Ul(i,t),c=Ll(a);if(t<e)return{y:td(i,e-t,r+.1,nd(i),__(i),x_(i),-1),k:"mn",d:e-t};let l=Ll(Ul(i,n))+.3;if(t>n)return{y:td(i,t-n,l,y_(i),v_(i),M_(i),1),k:"ms",d:t-n};let h=t-e;if(h<s){let m=h/s;return{y:r-Qu(i)*Math.pow(Math.sin(Math.PI*Math.min(1,m*1.15)),.6)*(m<.87,1),k:"bed"}}let u=o-Ds/2,f=o+Ds/2,d=c-.32*(1-In(0,7,t-(e+s)))+.07*Nl(i*.4,t*.4,2),g=Math.max(.8,u-.3-(e+s)),_=Math.min(g,Math.max(1.3,(d-r)*.8));if(h<s+_){let m=(h-s)/_;return{y:r+(d-r)*In(0,1,m)+.05*$e(i*.7,t*.7),k:"bank",steep:(d-r)/_}}if(t<u-.5)return{y:d,k:"beach"};if(t<=f+.5){let m=Math.max(0,Math.abs(t-o)-Ds/2)/.5,p=c+.02-.05*Math.pow((t-o)/(Ds/2),2),M=t<o?d:c+.05;return{y:p+(M-p)*In(0,1,m),k:Math.abs(t-o)<=Ds/2?"road":"beach"}}return{y:c+.05+.25*In(f+.5,n,t)+.05*$e(i*.6,t*.6),k:"beach"}}var Qt=(i,t)=>qi(i,t).y,b_=.75,Bl=26,Ol=46,zl=4,ed=22;function S_(i){let t=cn(i),e=ke(i),n=$n(i),s=[];for(let r=0;r<Bl;r++){let o=r/Bl;s.push(_e.z0+(t-_e.z0)*(1-Math.pow(1-o,1.6)))}for(let r=0;r<Ol;r++)s.push(t+(e-t)*r/Ol);for(let r=0;r<zl;r++)s.push(e+(n-e)*r/zl);for(let r=0;r<=ed;r++){let o=r/ed;s.push(n+(_e.z1-n)*Math.pow(o,1.5))}return s}var qa=Bl+Ol+zl,we={road:"#CDB592",beach:"#D6CDB9",beach2:"#CCC3AD",grassy:"#B9BC9A",bank:"#B5AC9B",bankR:"#A0988A",bed:"#8C8F84",rock:"#A39B8E",rock2:"#958E82",wall:"#B4AEA3",scrub:"#A9A98F",grass:"#9DA982",grass2:"#909D78",soil:"#8E7055",soil2:"#7C624C",soil3:"#6B5442",water:"#6E9AA1"};function E_(i,t,e,n,s){let r=$e(e*.35,n*.35),o=$e(e*.12+40,n*.12),a=t<.965?.92:1;return i==="road"?an(we.road,a*(1+.04*r)):i==="beach"?o>.45&&t>.97?an(we.grassy,1+.03*r):an(r>.3?we.beach2:we.beach,a*(1+.03*r)):i==="bed"?an(we.bed,1+.05*r):i==="bank"?t<.8?an(we.bankR,1+.05*r):an(we.bank,1+.04*r):t<.5?i==="mn"&&id(e)>.5&&s<Ls(e)+nd(e)+.6?an(we.wall,1+.02*r):an(r>.1?we.rock2:we.rock,1+.06*r):t<.78?an(o>0?we.scrub:we.rock,1+.05*r):an(o>-.2?we.grass:we.grass2,1+.05*r)}function sd(){let i=[];for(let g=_e.x0;g<=_e.x1+1e-6;g+=b_)i.push(+g.toFixed(3));let t=i.map(g=>S_(g).map(_=>{let m=qi(g,_);return[g,m.y,_,m.k]})),e={main:n(),far:n(),cut:n(),skirt:n(),water:n()};function n(){return{p:[],n:[],c:[]}}function s(g,_,m,p,M){let y=m[0]-_[0],x=m[1]-_[1],S=m[2]-_[2],E=p[0]-_[0],w=p[1]-_[1],I=p[2]-_[2],b=x*I-S*w,v=S*E-y*I,R=y*w-x*E,U=Math.hypot(b,v,R)||1;b/=U,v/=U,R/=U,v<0&&M===void 0&&(b=-b,v=-v,R=-R);let O=M!=null?M:null;g.p.push(_[0],_[1],_[2],m[0],m[1],m[2],p[0],p[1],p[2]),g.n.push(b,v,R,b,v,R,b,v,R);let H=typeof O=="function"?O(v):O;g.c.push(...H,...H,...H)}let r=t.map((g,_)=>g.map((m,p)=>{let M=t[Math.max(0,_-1)][p],y=t[Math.min(t.length-1,_+1)][p],x=g[Math.max(0,p-1)],S=g[Math.min(g.length-1,p+1)],E=y[0]-M[0],w=y[1]-M[1],I=y[2]-M[2],b=S[0]-x[0],v=S[1]-x[1],R=S[2]-x[2],U=w*R-I*v,O=I*b-E*R,H=E*v-w*b,Z=Math.hypot(U,O,H)||1;return E_(m[3],Math.abs(O/Z),m[0],m[2],m[1])}));for(let g=0;g<i.length-1;g++){let _=t[g],m=t[g+1],p=r[g],M=r[g+1];for(let y=0;y<_.length-1;y++){let x=_[y],S=_[y+1],E=m[y+1],w=m[y],I=p[y],b=p[y+1],v=M[y+1],R=M[y],U=y>=qa?e.far:e.main,O=Math.abs(x[1]-E[1]),H=Math.abs(S[1]-w[1]),Z=O<=H?[[x,S,E,I,b,v],[x,E,w,I,v,R]]:[[x,S,w,I,b,R],[S,E,w,b,v,R]];for(let[F,j,C,N,Y,k]of Z){let K=j[0]-F[0],tt=j[1]-F[1],G=j[2]-F[2],J=C[0]-F[0],B=C[1]-F[1],X=C[2]-F[2],it=tt*X-G*B,ut=G*J-K*X,ht=K*B-tt*J,wt=Math.hypot(it,ut,ht)||1;U.p.push(F[0],F[1],F[2],j[0],j[1],j[2],C[0],C[1],C[2]),U.n.push(it/wt,ut/wt,ht/wt,it/wt,ut/wt,ht/wt,it/wt,ut/wt,ht/wt),U.c.push(...N,...Y,...k)}}}let o=_e.base,a=[[-1.6,we.soil2],[-3.4,we.soil],[o,we.soil3]];function c(g,_,m,p){let M=_[1],y=m[1],x=[[Math.min(M,y)-.55,we.soil3]].concat(a),S=M,E=y;for(let[w,I]of x){let b=Math.min(S,w),v=Math.min(E,w);if(S-b>.001||E-v>.001){let R=Ps(I);l(g,[_[0],S,_[2]],[m[0],E,m[2]],[m[0],v,m[2]],[_[0],b,_[2]],p,R)}S=b,E=v}}function l(g,_,m,p,M,y,x){for(let[S,E,w]of[[_,m,p],[_,p,M]])g.p.push(...S,...E,...w),g.n.push(...y,...y,...y),g.c.push(...x,...x,...x)}let h=(g,_)=>{let m=cn(g),p=Nn(g);return _>=m-.3&&_<=m+p+.2?Ls(g):-1e9};for(let g=0;g<i.length-1;g++){let _=t[g][qa],m=t[g+1][qa],p=m[0]-_[0],M=m[2]-_[2],y=Math.hypot(p,M),x=[M/y,0,-p/y];c(e.cut,m,_,x[2]>0?x:x.map(S=>-S))}let u=i.length,f=t[0].length-1;for(let g=0;g<u-1;g++)c(e.skirt,t[g][0],t[g+1][0],[0,0,-1]),c(e.far,t[g+1][f],t[g][f],[0,0,1]);for(let[g,_]of[[0,-1],[u-1,1]]){let m=t[g];for(let p=0;p<m.length-1;p++){let M=m[p],y=m[p+1],x=p>=qa?e.far:e.skirt,S=_<0?y:M,E=_<0?M:y;c(x,S,E,[_,0,0]);let w=h(M[0],(M[2]+y[2])/2);w>Math.min(M[1],y[1])+.02&&l(x,[S[0],w,S[2]],[E[0],w,E[2]],[E[0],Math.min(w,E[1]),E[2]],[S[0],Math.min(w,S[1]),S[2]],[_,0,0],Ps(we.water))}}for(let g=0;g<u-1;g++){let _=i[g],m=i[g+1],p=b=>[cn(b)-.6,cn(b)+Nn(b)+1.2],[M,y]=p(_),[x,S]=p(m),E=Ls(_)+.02,w=Ls(m)+.02,I=Ps(we.water);for(let[b,v,R]of[[[_,E,M],[_,E,y],[m,w,S]],[[_,E,M],[m,w,S],[m,w,x]]])e.water.p.push(...b,...v,...R),e.water.n.push(0,1,0,0,1,0,0,1,0),e.water.c.push(...I,...I,...I)}let d=g=>({p:new Float32Array(g.p),n:new Float32Array(g.n),c:new Float32Array(g.c)});return{main:d(e.main),far:d(e.far),cut:d(e.cut),skirt:d(e.skirt),water:d(e.water),grid:t,cols:i}}function rd(i,t,e=.6){let n=(Qt(i+e,t)-Qt(i-e,t))/(2*e),s=(Qt(i,t+e)-Qt(i,t-e))/(2*e);return 1/Math.hypot(n,1,s)}var zr=i=>cn(i)+Nn(i),Dt={wood:"#9C7D5E",wood2:"#86694F",dark:"#6F5844",cloth:"#DCD0B6",cloth2:"#C9BB9C",burnt:"#4B423A",burnt2:"#5C5047",iron:"#5F5F5C",crate:"#B39169",crate2:"#A3825C",sack:"#D2C29C",jar:"#B0765A",jar2:"#9C6A52",barrel:"#957254",hay:"#D9C37E",hay2:"#CDB66E",log:"#8F806D",log2:"#7E705F",dead:"#A69A87",dead2:"#8E8270",rock:"#A79F92",rock2:"#9A9286",rock3:"#B2AB9F",slab:"#ABA397"},xn=Dt,Fs=[],Ya=[],Ja=[];function Hl(i){let t=new Ht().setFromMatrix4(i),e=(s,r,o)=>new L(s,r,o).applyMatrix4(i).toArray(),n=(s,r,o)=>new L(s,r,o).applyMatrix3(t).toArray();return{P:e,V:n,box(s,r,o,a,c,l,h,u,f){s.obox(r,o,e(a,c,l),n(h/2,0,0),n(0,u/2,0),n(0,0,f/2))},cyl(s,r,o,a,c,l,h,u,f="x",d=12,g=h){let _=f==="x"?[1,0,0]:f==="y"?[0,1,0]:[0,0,1],m=f==="y"?[1,0,0]:[0,1,0],p=f==="z"?[1,0,0]:f==="y"?[0,0,1]:[0,0,1],M=(w,I)=>{let b=[];for(let v=0;v<d;v++){let R=v/d*Math.PI*2,U=Math.cos(R)*I,O=Math.sin(R)*I;b.push(e(a+_[0]*w+m[0]*U+p[0]*O,c+_[1]*w+m[1]*U+p[1]*O,l+_[2]*w+m[2]*U+p[2]*O))}return b},y=M(-u/2,h),x=M(u/2,g),S=e(a-_[0]*u/2,c-_[1]*u/2,l-_[2]*u/2),E=e(a+_[0]*u/2,c+_[1]*u/2,l+_[2]*u/2);for(let w=0;w<d;w++){let I=(w+1)%d;s.quad(r,o,y[w],y[I],x[I],x[w]),s.tri(r,o,S,y[I],y[w]),s.tri(r,o,E,x[w],x[I])}}}}function Zi(i,t,e,n=0,s=0,r=0){let o=new zt().makeRotationFromEuler(new sn(s,n,r,"YXZ"));return o.setPosition(i,t,e),Hl(o)}var w_=new gn(1,1).toNonIndexed().attributes.position.array,T_=new gn(1,0).toNonIndexed().attributes.position.array;function kr(i,t,e,n,s,r,o,a,c=1,l=Dt.rock,h={}){var p,M;let u=h.lo?T_:w_,f=(p=h.yaw)!=null?p:c*2.39,d=Math.cos(f),g=Math.sin(f),_=(M=h.jit)!=null?M:.22,m=(y,x,S)=>{let E=1+_*$e(y*2.1+c*5.3,x*2.3+S*1.7+c),w=y*E*r,I=x*E*o,b=S*E*a;return[e+w*d-b*g,n+I,s+w*g+b*d]};for(let y=0;y<u.length;y+=9){let x=m(u[y],u[y+1],u[y+2]),S=m(u[y+3],u[y+4],u[y+5]),E=m(u[y+6],u[y+7],u[y+8]),w=1+.07*$e(y*.37+c,c*3.1);i.tri(t,an(l,w),x,S,E)}}var _i=(i,t)=>Qt(i,t),xe={BL:5.2,BW:2.1,hb:.9,ft:.13,sh:.62,xr:-1.6,Rr:.82,xf:1.5,Rf:.7,zt:1.26,wt:.13,cr:1.05},Vl=[["RL",xe.xr,xe.Rr,-1],["RR",xe.xr,xe.Rr,1],["FL",xe.xf,xe.Rf,-1],["FR",xe.xf,xe.Rf,1]],A_={stand:[],over:[],lean:["RL","FL"],nose:["FL","FR"],side:["RL","FL"]},cd=i=>Array.from({length:i},(t,e)=>-xe.BL/2+.3+e*(xe.BL-.6)/(i-1));function R_(i){let t=i.k==="burn"?i.pose||"lean":i.k,e=!!i.canopy&&t!=="over"&&t!=="side";return{pose:t,burnt:i.k==="burn",canopy:e,torn:!!i.torn,shaft:!!i.shaft&&t==="stand",cargo:!!i.cargo&&t!=="over"&&t!=="side",missing:A_[t]||[]}}function C_(i){let{BL:t,BW:e,hb:n,ft:s,sh:r,zt:o,wt:a,cr:c}=xe,l=[];for(let h of[-1,1])for(let u of[-1,1])l.push([h*t/2,n,u*e/2]),l.push([h*t/2,n+s+r,u*e/2]);for(let[h,u,f,d]of Vl)if(!i.missing.includes(h))for(let g=0;g<16;g++){let _=g/16*Math.PI*2;for(let m of[-a/2,a/2])l.push([u+Math.sin(_)*f,f-Math.cos(_)*f,d*o+m])}if(i.canopy)for(let h of cd(5))for(let u=0;u<=6;u++){let f=u/6*Math.PI;l.push([h,n+s+r+Math.sin(f)*c,Math.cos(f)*c])}if(i.shaft)for(let h of[-1,1])l.push([t/2+2.5,.06,h*.62]);return l}function I_(i,t,e,n){let s=Math.cos(n),r=Math.sin(n);if(t==="x"){let c=i[1]-e[0],l=i[2]-e[1];return[i[0],e[0]+c*s-l*r,e[1]+c*r+l*s]}let o=i[0]-e[0],a=i[1]-e[1];return[e[0]+o*s-a*r,e[1]+o*r+a*s,i[2]]}function P_(i,t){let e=new zt,n=null,s=null,r=null;if(i.pose==="lean"&&(n="x",s=[0,xe.zt],r=c=>Math.hypot(c[1],c[2]-xe.zt)>.6),i.pose==="nose"&&(n="z",s=[xe.xr,0],r=c=>Math.hypot(c[0]-xe.xr,c[1])>.6),n){let c=f=>Math.min(...t.filter(r).map(d=>I_(d,n,s,f)[1])),l=0,h=-1.3;for(let f=0;f<40;f++){let d=(l+h)/2;c(d)>0?l=d:h=d}let u=(l+h)/2;n==="x"?e.makeTranslation(0,s[0],s[1]).multiply(new zt().makeRotationX(u)).multiply(new zt().makeTranslation(0,-s[0],-s[1])):e.makeTranslation(s[0],s[1],0).multiply(new zt().makeRotationZ(u)).multiply(new zt().makeTranslation(-s[0],-s[1],0))}else i.pose==="over"?e.makeRotationX(Math.PI):i.pose==="side"&&e.makeRotationX(-Math.PI/2);let o=t.map(c=>new L(...c).applyMatrix4(e)),a=Math.min(...o.map(c=>c.y));return e.premultiply(new zt().makeTranslation(0,-a,0)),e}function D_(i){let t=R_(i),e=C_(t),n=P_(t,e),s=e.map(v=>new L(...v).applyMatrix4(n)),r=s.filter(v=>v.y<.1),o=1/0,a=-1/0,c=1/0,l=-1/0;for(let v of s)o=Math.min(o,v.x),a=Math.max(a,v.x),c=Math.min(c,v.z),l=Math.max(l,v.z);let h=Math.cos(i.yaw),u=Math.sin(i.yaw),f=(v,R)=>[i.x+v*h+R*u,i.z-v*u+R*h],d=(v,R)=>{let[U,O]=f(v,R);return Qt(U,O)},g=Math.min(Math.max(o,-3),0),_=0,m=(d(a,c)+d(a,l)-(d(o,c)+d(o,l)))/2/Math.max(1,a-o),p=(d(o,l)+d(a,l)-(d(o,c)+d(a,c)))/2/Math.max(1,l-c),M=v=>Math.max(-.38,Math.min(.38,v)),y=new zt().makeRotationX(M(-Math.atan(p))).multiply(new zt().makeRotationZ(M(Math.atan(m)))),x=new zt().makeTranslation(i.x,0,i.z).multiply(new zt().makeRotationY(i.yaw)).multiply(y).multiply(n),S=-1/0,E=r.map(v=>v.clone().applyMatrix4(new zt().makeTranslation(i.x,0,i.z).multiply(new zt().makeRotationY(i.yaw)).multiply(y)));for(let v of E)S=Math.max(S,v.y-Qt(v.x,v.z));let w=-S-.03;x.premultiply(new zt().makeTranslation(0,w,0));let I=E.map(v=>+(v.y+w-Qt(v.x,v.z)).toFixed(2)),b=[[o,c],[a,c],[a,l],[o,l]].map(([v,R])=>f(v,R).map(U=>+U.toFixed(2)));return{W:t,M:x,foot:b,sink:I,hull:s}}function od(i,t,e,n,s,r,o,a,c){let h=u=>{let f=u/14*Math.PI*2;return e.P(n+Math.sin(f)*o,s+Math.cos(f)*o,r)};for(let u=0;u<14;u++)i.beam(t,a,h(u),h(u+1),xe.wt,.11);for(let u=0;u<8;u++){let f=u/8*Math.PI*2;i.beam(t,a,e.P(n,s,r),e.P(n+Math.sin(f)*(o-.05),s+Math.cos(f)*(o-.05),r),.05)}e.cyl(i,t,c,n,s,r,.17,.32,"z",8)}function L_(i,t,e){let n=D_(e),s=n.W,r=Hl(n.M),{BL:o,BW:a,hb:c,ft:l,sh:h,zt:u}=xe,f=s.burnt?xn.burnt:xn.wood,d=s.burnt?xn.burnt2:xn.wood2,g=s.burnt?"#3B342E":xn.dark,_=c+l+h;r.box(i,t,d,0,c+l/2,0,o,l,a);for(let m of[-.7,.7])r.box(i,t,g,0,c-.08,m,o-.2,.16,.16);for(let m of[-1,1]){let p=m*(a/2-.05);for(let M=0;M<3;M++)r.box(i,t,M%2?d:f,0,c+l+.1+M*.205,p,o,.18,.1);for(let M of[-.44,-.22,0,.22,.44])r.box(i,t,g,M*o,c+l+h/2,p+m*.06,.12,h+.08,.06);r.box(i,t,g,0,_+.03,p,o+.1,.08,.16)}r.box(i,t,f,-o/2+.05,c+l+h/2-.05,0,.1,h-.1,a-.1),r.box(i,t,f,o/2-.05,c+l+.25,0,.1,.5,a-.1),r.box(i,t,d,o/2-.45,c+l+.78,0,.5,.1,a-.3),r.box(i,t,g,o/2-.25,c+l+.45,0,.08,.62,a-.5);for(let[m,p]of[[xe.xr,xe.Rr],[xe.xf,xe.Rf]]){let M=Vl.filter(S=>S[1]===m&&!s.missing.includes(S[0]));if(!M.length)continue;let y=M.map(S=>S[3]*(u+.12)),x=M.length===2?[-u-.12,u+.12]:[Math.min(y[0],-.5),Math.max(y[0],.5)];r.box(i,t,g,m,p,(x[0]+x[1])/2,.16,.16,x[1]-x[0]),r.box(i,t,g,m,(p+c)/2,0,.2,c-p+.02>.05?c-p+.02:.06,a*.8);for(let S of M)od(i,t,r,m,p,S[3]*u,p,d,g)}if(s.shaft)for(let m of[-1,1])i.beam(t,d,r.P(o/2-.2,c+.02,m*.48),r.P(o/2+2.5,.1,m*.62),.1);if(s.canopy){let m=cd(5),p=xe.cr;m.forEach((y,x)=>{for(let S=0;S<8;S++){let E=S/8*Math.PI,w=(S+1)/8*Math.PI;i.beam(t,g,r.P(y,_+Math.sin(E)*p,Math.cos(E)*p),r.P(y,_+Math.sin(w)*p,Math.cos(w)*p),.07)}});let M=s.burnt?[1]:s.torn?[0,1,3]:[0,1,2,3];for(let y of M)for(let x=0;x<8;x++){if(s.torn&&y===3&&x>4||s.burnt&&x%3===2)continue;let S=x/8*Math.PI,E=(x+1)/8*Math.PI,w=p+.02,I=m[y],b=m[y+1],v=(R,U)=>r.P(R,_+Math.sin(U)*w,Math.cos(U)*w);i.quad(t,s.burnt?"#3E3832":x%2?xn.cloth:xn.cloth2,v(I,S),v(b,S),v(b,E),v(I,E)),i.quad(t,s.burnt?"#3E3832":x%2?xn.cloth:xn.cloth2,v(I,E),v(b,E),v(b,S),v(I,S))}}if(s.cargo){for(let[m,p,M]of[[-1.5,-.42,.72],[-1.4,.42,.64],[-.55,-.38,.68],[.4,.3,.62]])r.box(i,t,M>.72?xn.crate:xn.crate2,m,c+l+M/2,p,M,M,M);r.box(i,t,xn.sack,1.3,c+l+.22,-.3,.9,.44,.6)}return s.missing.forEach((m,p)=>{let M=Vl.find(w=>w[0]===m),y=new L(M[1]+(p?.6:-.5),0,M[3]*(u+1.6+p*.5)).applyMatrix4(n.M),x=M[2],S=Ji(y.x,y.z,x*.8)+xe.wt/2,E=Hl(new zt().makeTranslation(y.x,S,y.z).multiply(new zt().makeRotationY(e.yaw+p*1.3)).multiply(new zt().makeRotationX(Math.PI/2)));od(i,t,E,0,0,0,x,d,g)}),n}function Ji(i,t,e=.4){let n=Qt(i,t);for(let s=0;s<8;s++){let r=s/8*Math.PI*2;n=Math.min(n,Qt(i+Math.cos(r)*e,t+Math.sin(r)*e))}return n-.03}function Ie(i,t,e,n,s=.8,r=0,o=0,a=Dt.crate){Fs.push([e,n,s]);let c=Ji(e,n,s*.62)+o,l=Zi(e,c,n,r);l.box(i,t,a,0,s/2,0,s,s,s),l.box(i,t,Dt.dark,0,s/2,0,s+.03,.07,s+.03)}function U_(i,t,e,n,s=.32,r=.7){Fs.push([e,n,s*2]);let o=Ji(e,n,s),a=Zi(e,o,n);a.cyl(i,t,Dt.jar,0,r*.35,0,s*.75,r*.7,"y",9,s),a.cyl(i,t,Dt.jar2,0,r*.78,0,s,r*.2,"y",9,s*.55)}function Bn(i,t,e,n,s=!1,r=0){Fs.push([e,n,.8]);let o=Ji(e,n,s?.55:.42);if(s)Zi(e,o+.38,n,r).cyl(i,t,Dt.barrel,0,0,0,.38,1,"x",10);else{let a=Zi(e,o,n,r);a.cyl(i,t,Dt.barrel,0,.5,0,.4,1,"y",10),a.cyl(i,t,Dt.iron,0,.2,0,.41,.06,"y",10),a.cyl(i,t,Dt.iron,0,.8,0,.41,.06,"y",10)}}function Us(i,t,e,n,s=0){Fs.push([e,n,.8]);let r=Ji(e,n,.4);kr(i,t,e,r+.22,n,.5,.26,.34,e+n,Dt.sack,{lo:1,jit:.08})}function Za(i,t,e,n,s=0,r=1){for(let o=0;o<r;o++){let a=Zi(e,Ji(e,n,.8)+(o>1?.8:0),n,s),c=o>1?.5:(o-.5)*1.25*(r>1?1:0);a.box(i,t,o%2?Dt.hay2:Dt.hay,c,.4,0,1.2,.8,.8)}}function ad(i,t,e,n,s=0){let r=Zi(e,Ji(e,n,.85),n,s);for(let o=0;o<3;o++)for(let a=0;a<4-o;a++)r.cyl(i,t,a%2?Dt.log2:Dt.log,0,.15+o*.26,(a-(3-o)/2)*.3,.14,1.6,"x",6)}function Yi(i,t,e,n,s=.5,r=.3,o={}){var p,M;if(o.hit){let y=Math.hypot(n[0]-e[0],n[1]-e[1]),x=Math.max(1,Math.ceil(y)),S=[];for(let E=0;E<=x;E++)S.push([+(e[0]+(n[0]-e[0])*E/x).toFixed(2),+(e[1]+(n[1]-e[1])*E/x).toFixed(2),o.hit]);Ja.push({a:e.slice(),b:n.slice(),w:o.hit*2,c:S,log:1})}let a=(p=o.y0)!=null?p:_i(e[0],e[1])+s*.8+(o.lift||0),c=(M=o.y1)!=null?M:_i(n[0],n[1])+r*.8+(o.liftB||0),l=n[0]-e[0],h=n[1]-e[1],u=Math.hypot(l,h),f=Math.atan2(-h,l),d=0,g=Math.atan2(c-a,u),_=Zi((e[0]+n[0])/2,(a+c)/2,(e[1]+n[1])/2,f,0,g),m=Math.hypot(u,c-a);if(_.cyl(i,t,o.col||Dt.log,0,0,0,s,m,"x",10,r),o.root!==!1){let y=_.P(-m/2-.2,0,0);kr(i,t,y[0],y[1],y[2],s*1.7,s*1.9,s*1.7,e[0]+e[1],Dt.log2,{lo:1,jit:.35})}for(let[y,x,S]of o.br||[[.15,.7,1.6],[.42,-1.1,1.3],[.68,2.2,1.1]]){let E=-m/2+y*m,w=s+(r-s)*y,I=Math.cos(x),b=Math.sin(x),v=_.P(E,b*w,I*w),R=_.P(E+.6,b*(w+S),I*(w+S));i.beam(t,o.col||Dt.log,v,R,.16,.14)}}function kl(i,t,e,n,s=2.4,r=1,o={}){var x;let a=n[0]-e[0],c=n[1]-e[1],l=Math.hypot(a,c),h=a/l,u=c/l,f=-u,d=h,g=r*17.3,_=()=>{g+=1;let S=Math.sin(g*12.9898+r*78.233)*43758.5453;return S-Math.floor(S)},m=(S,E)=>[e[0]+h*S+f*E,e[1]+u*S+d*E],p=[];for(let S=0;S<=l+.01;S+=Math.max(.8,l/Math.ceil(l))){let[E,w]=m(Math.min(S,l),0);p.push([+E.toFixed(2),+w.toFixed(2),+(s/2).toFixed(2)])}Ja.push({a:e.slice(),b:n.slice(),w:s,c:p});let M=((x=o.tv)!=null?x:0)*s/2;Yi(i,t,m(-.2,M),m(l*.53,M+.15),.42,.3,{col:Dt.dead2,root:!1,br:[[.2,.9,1.4],[.5,-1.2,1.5],[.8,2.1,1.2]]}),Yi(i,t,m(l*.5,M-.25),m(l+.3,M*.4),.3,.2,{col:Dt.dead2,root:!1,br:[[.25,-.5,1.3],[.55,1.6,1.1],[.85,-2,.9]]});let y=Math.round(l*7);for(let S=0;S<y;S++){let E=_()*l,w=(_()-.5)*s*.85,[I,b]=m(E,w),v=_i(I,b)-.05,R=_()*Math.PI*2,U=.35+_()*.75,O=1.3+_()*1.5,H=I+Math.cos(R)*Math.cos(U)*O,Z=b+Math.sin(R)*Math.cos(U)*O,F=(H-e[0])*h+(Z-e[1])*u,j=(H-e[0])*f+(Z-e[1])*d,C=Math.max(-.2,Math.min(l+.2,F)),N=Math.max(-s/2+.1,Math.min(s/2-.1,j));[H,Z]=m(C,N);let Y=Math.min(_i(H,Z)+1.85,v+Math.sin(U)*O+.2),k=.07+_()*.07,K=S%3?Dt.dead:S%2?Dt.dead2:Dt.log2;if(i.beam(t,K,[I,v,b],[H,Y,Z],k,k*.85),_()<.55){let tt=.45+_()*.35,G=[I+(H-I)*tt,v+(Y-v)*tt,b+(Z-b)*tt],J=R+(_()-.5)*2.4,B=.5+_()*.7,X=[G[0]+Math.cos(J)*B*.6,G[1]+B*.7,G[2]+Math.sin(J)*B*.6],it=(X[0]-e[0])*h+(X[2]-e[1])*u,ut=(X[0]-e[0])*f+(X[2]-e[1])*d;it>-.3&&it<l+.3&&Math.abs(ut)<s/2&&i.beam(t,Dt.dead,G,X,.05,.045)}}}function F_(){let i=[];for(let t=_e.x0+1.5;t<_e.x1-1;t+=3.1)for(let e=_e.z0+1.5;e<_e.z1-1;e+=3.1){let n=t+1.3*$e(t*.91,e*.37),s=e+1.3*$e(t*.43+7,e*.77),r=qi(n,s);if(r.k!=="mn"&&r.k!=="ms"||r.d<(r.k==="mn"?4.5:4)||r.k==="ms"&&(r.d<9||r.d<15&&$e(n*.3,s*.3)<.2)||rd(n,s)<.72||$e(n*.06+3,s*.06-2)<-.05)continue;let c=Math.abs(Math.sin(n*3.7+s*1.3));Math.abs(s-$n(n))<1.6||i.push({x:n,z:s,y:r.y,s:.62+.3*c,k:c<.6?"pine":"broad"})}for(let[t,e,n,s]of[[-12,-5.5,"broad",1.1],[-4,6.4,"pine",1],[37.5,-7.4,"broad",1],[56,-11.4,"pine",1.05],[60.5,9.6,"broad",1],[99.5,11.2,"dead",.62],[81.2,-18.6,"dead",.7]])i.push({x:t,z:e,y:_i(t,e),s,k:n});return i}function ld(i){Fs.length=0,Ya.length=0,Ja.length=0;let t="props",e="far",n=(o,a,c,l,h,u,f,d=0,g=t)=>{c>=.9&&qi(o,a).k!=="mn"&&qi(o,a).k!=="ms"&&Ya.push([o,a,+((c+h)/2*.92).toFixed(2),+(l+d).toFixed(2)]),kr(i,g,o,_i(o,a)+d,a,c,l,h,u,f)},s=(o,a,c,l,h,u,f,d=-.35)=>{let g=Or[o],[_,m]=pt(o,a,c*(g.w/2+.175+l));Ya.push([_,m,l,+(h+d).toFixed(2)]),kr(i,t,_,_i(_,m)+d,m,l/.92*1.25,h,l/.92,u,f,{yaw:g.ax,jit:.16})};n(21.5,-4.3,2.2,1.8,1.6,1,Dt.rock,-.3),n(25.2,-3.9,2.6,2.3,1.8,2,Dt.rock2,-.4),n(28.6,-4,2,1.7,1.5,3,Dt.rock,-.3),n(23.4,-6.4,1.6,1.3,1.2,4,Dt.rock3,-.4),n(28.2,4.9,2.1,2.2,1.6,6,Dt.rock,-.5),n(31.6,5.6,1.6,1.5,1.3,7,Dt.rock3,-.3);{let o=Or[0],a=2.4,c=o.w/2+.175+a/2;kl(i,t,pt(0,-2.2,-c),pt(0,3,-c),a,1,{tv:.35})}s(0,-1.6,1,1.05,2,64,Dt.rock3),s(0,0,1,1.3,2.7,65,Dt.rock2),s(0,1.6,1,1.2,2.3,66,Dt.rock);{let o=Or[1],a=2.6,c=o.w/2+.175+a/2;kl(i,t,pt(1,-2.9,c),pt(1,2.9,c),a,3,{tv:-.3})}s(1,3.9,-1,1.15,3,75,Dt.rock,-.4),n(55.2,-3.5,1.2,1.9,1.1,72,Dt.rock3,-.3),n(55,-10.9,2,2.3,1.7,51,Dt.rock2,-.4),n(56.9,-10.4,1.3,1.4,1.2,56,Dt.rock3,-.3),n(55.3,5.8,1.75,2.3,1.75,67,Dt.rock2,-.4),s(2,.5,1,1.4,3.6,69,Dt.rock2),s(2,2,1,1.25,3.3,70,Dt.rock3),s(2,3.9,1,1.25,3.2,74,Dt.rock,-.4),n(72.6,-14.6,2.1,2.2,1.9,52,Dt.rock,-.4),kl(i,t,[72.9,1.4],[72.6,6.9],2.6,5,{tv:.2});for(let[o,a,c,l]of[[41.2,-8.4,1.4,11],[42.4,6.8,1.3,12],[40,8.6,1.6,13],[53.6,-10.4,1.3,14],[56.6,8.6,1.5,15],[57.4,10.4,1.2,16],[52.8,-12.6,1.1,17],[70.6,-9,1.4,18],[70.6,11.6,1.6,19],[69.8,-14,1.2,20]])n(o,a,c*1.2,c*.8,c,l,l%2?Dt.rock:Dt.rock2,-.25);for(let[o,a,c,l]of[[78,12.6,1.5,21],[83.5,13.4,1.2,22],[89.5,ke(89.5)-.2,1.6,23],[95,ke(95)-.3,1.3,24],[101,ke(101)-.4,1.4,28],[80.5,zr(80.5)+.5,1.1,25],[87,zr(87)+.5,1,26],[93.5,zr(93.5)+.5,1.3,27],[100,zr(100)+.5,1.1,29]])n(o,a,c*1.2,c*.9,c,l,Dt.rock,-.3);kr(i,t,Yt.x,_i(Yt.x,Yt.z)-.6,Yt.z,3.4,1.35,2.8,31,Dt.slab,{jit:.1}),n(Yt.x+2.6,Yt.z-2.4,1.4,1.6,1.2,32,Dt.rock2,-.2);for(let o=0;o<70;o++){let a=-14+o*37.3%120;if(a>74&&a<107)continue;let c=o*.618%1,l=cn(a),h=ke(a),u=l+(h-l)*c,f=qi(a,u);if(f.k==="road"||f.k==="bed"&&Nn(a)>6)continue;let d=f.k==="bed"?.45+.3*c:.25+.35*(o*.31%1);n(a,u,d*1.2,d*.7,d,40+o,o%3?Dt.rock:Dt.rock3,-.08)}for(let o=0;o<46;o++){let a=_e.x0+4+o*53.7%(_e.x1-_e.x0-8),c=o%2?1:-1,l=5+o*7.3%16,h=c<0?cn(a)-l:ke(a)+l;if(h<_e.z0+2||h>_e.z1-2)continue;let u=.9+o*.37%1.4,f=c>0&&h>$n(a)-1.5?e:t;Math.abs(h-$n(a))<u*1.6||n(a,h,u*1.3,u*.9,u,100+o,o%3?Dt.rock2:Dt.rock,-.35,f)}let r=Fl.map(o=>L_(i,t,o));for(let[o,a,c,l,h]of[[8.5,.5,.8,.3,0],[9.3,1,.7,.9,0],[8.8,.8,.6,.2,.8],[14.5,.4,.8,-.4,0],[6.1,6.2,.75,.5,0]])Ie(i,t,o,a,c,l,h);for(let[o,a]of[[6.6,4.9],[7.2,5.4],[6.9,4.2],[12.7,-.3],[13.3,-.8]])U_(i,t,o,a);return Bn(i,t,15.8,3.6),Bn(i,t,16.4,4.6,!0,.8),Us(i,t,10,.2),Us(i,t,10.8,.7,1),Us(i,t,2.6,-1.6),Ie(i,t,7.6,-2,.75,.6),Ie(i,t,8.6,-4.4,.7,.2),Bn(i,t,1.4,-3.6,!0,2.1),Ie(i,t,46.4,3,.9,.15),Ie(i,t,47.3,3.3,.8,.5),Ie(i,t,46.8,3.1,.7,.3,.9),Bn(i,t,45.6,2,!0,.4),Bn(i,t,48.1,2.7),Us(i,t,47.6,4),Ie(i,t,...pt(1,.8,4.6),.85,.3),Ie(i,t,...pt(1,1.8,4.4),.75,.9),Bn(i,t,...pt(1,-.6,4.4)),Ie(i,t,57.9,-4.6,.9,.2),Ie(i,t,58.6,-5.3,.8,.7),Ie(i,t,58.2,-4.9,.7,.4,.9),Bn(i,t,58,-6.8,!0,1.2),Us(i,t,57.7,-3.7),Bn(i,t,57.6,-8.8,!0,2.4),Ie(i,t,58.6,-10.6,.8,.5),Ie(i,t,70.2,4.8,.85,.1),Ie(i,t,70.8,5.6,.7,.6),Ie(i,t,68,9.6,.8,.1),Bn(i,t,70.4,6.8,!0,.3),Us(i,t,77.6,-7.4),Yi(i,t,[112.8,9.6],[109.2,-13.6],.7,.4,{hit:.8,y0:3.2,y1:.2,br:[[.22,.8,1.8],[.48,-1.3,1.6],[.7,2.4,1.4],[.86,-.4,1.1]]}),Yi(i,t,[107.6,-15.4],[113.6,4.8],.62,.36,{y0:1.6,y1:.5,br:[[.3,-.6,1.6],[.58,1.9,1.5],[.8,.4,1.2]]}),Yi(i,t,[115.4,6.6],[114.4,-9.8],.55,.34,{y0:1.4,y1:-.2,root:!1,br:[[.4,1.2,1.3]]}),Yi(i,t,[72.6,-13.8],[79.8,zr(79.8)+.4],.5,.3,{col:Dt.log2,hit:.7}),Yi(i,t,[97.4,ke(97.4)-.9],[90.6,ke(90.6)-.6],.45,.3,{col:Dt.log2,root:!1,hit:.6}),Za(i,t,79.6,9.6,.3,2),Za(i,t,95.2,10.2,-.4,3),Za(i,t,100.6,-11.6,.9,2),Za(i,t,77.8,-14.2,-.2,1),ad(i,t,84.6,10.8,.2),ad(i,t,89.4,-16.2,-.3),Ie(i,t,102.2,8.8,.8,.3),Ie(i,t,101.4,9.6,.7,.9),Bn(i,t,82.8,-16.4,!1),{trees:F_(),wagons:r.map((o,a)=>({...Fl[a],foot:o.foot,sink:o.sink})),piles:Fs.slice(),rocks:Ya.slice(),snags:Ja.map(o=>({...o,c:o.c.slice()}))}}var $a=class{constructor(t,e,n={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{},fov0:t.fov},n),this.cur={th:0,ph:.9,r:500,fov:this.o.fov0,t:new L},this.goal={th:0,ph:.9,r:500,fov:this.o.fov0,t:new L},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){var s;let n=this.goal;t.th!==void 0&&(n.th=t.th),t.ph!==void 0&&(n.ph=t.ph),t.r!==void 0&&(n.r=t.r,n.fov=(s=t.fov)!=null?s:this.o.fov0),t.t&&n.t.copy(t.t),this._clamp(),e&&(this.cur.th=n.th,this.cur.ph=n.ph,this.cur.r=n.r,this.cur.fov=n.fov,this.cur.t.copy(n.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var o,a,c,l;let n={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,fov:this.cur.fov,t:this.cur.t.clone()},s=(o=t.th)!=null?o:n.th;for(;s-n.th>Math.PI;)s-=Math.PI*2;for(;s-n.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(a=t.ph)!=null?a:n.ph,r:(c=t.r)!=null?c:n.r,fov:(l=t.fov)!=null?l:this.o.fov0,t:(t.t||n.t).clone()};this.fly={from:n,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r,fov:r.fov}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let n=e.bounds;t.t.x=Math.min(n.x1,Math.max(n.x0,t.t.x)),t.t.z=Math.min(n.z1,Math.max(n.z0,t.t.z))}}update(t){let e=this.cur,n=this.goal;if(this.fly){let s=this.fly,r=Math.min(1,(this.now()-s.t0)/s.dur),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.th=s.from.th+(s.to.th-s.from.th)*o,e.ph=s.from.ph+(s.to.ph-s.from.ph)*o,e.fov=s.from.fov+(s.to.fov-s.from.fov)*o;let a=Math.sin(Math.PI*o)*Math.min(.35,s.from.t.distanceTo(s.to.t)/900);e.r=Math.exp(Math.log(s.from.r)+(Math.log(s.to.r)-Math.log(s.from.r))*o)*(1+a),e.t.lerpVectors(s.from.t,s.to.t,o),r>=1&&(this.fly=null)}else{let s=1-Math.exp(-t*12);e.th+=(n.th-e.th)*s,e.ph+=(n.ph-e.ph)*s,e.fov+=(n.fov-e.fov)*s,e.r=Math.exp(Math.log(e.r)+(Math.log(n.r)-Math.log(e.r))*s),e.t.lerp(n.t,s)}return this._apply(),!!this.fly||Math.abs(n.th-e.th)>1e-4||Math.abs(n.fov-e.fov)>.01||Math.abs(n.ph-e.ph)>1e-4||Math.abs(n.r-e.r)>.01||n.t.distanceToSquared(e.t)>1e-4}_apply(){let t=this.cur,e=Math.sin(t.ph);Math.abs(this.cam.fov-t.fov)>.001&&(this.cam.fov=t.fov,this.cam.updateProjectionMatrix()),this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t)}_ground(t,e,n){let s=this.dom.getBoundingClientRect(),r=new Et((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),o=new Ni;o.setFromCamera(r,this.cam);let a=new L;return o.ray.intersectPlane(new fn(new L(0,1,0),-n),a)?a:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.fov=this.cur.fov,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,n){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let o=this._ground(e,n,s.t.y);if(o){let a=1-s.r/r;s.t.x+=(o.x-s.t.x)*a,s.t.z+=(o.z-s.t.z)*a}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let n=this.goal,s=this.dom.clientHeight||600,r=2*n.r*Math.tan(this.cam.fov*Math.PI/360)/s,o=this.cur.th,a=Math.cos(o),c=-Math.sin(o),l=-Math.sin(o),h=-Math.cos(o),u=1/Math.max(.35,Math.cos(this.cur.ph));n.t.x+=(-t*a+e*l*Math.min(u,2.2))*r,n.t.z+=(-t*c+e*h*Math.min(u,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(n.pointerId,{x:n.clientX,y:n.clientY,b:n.button,sh:n.shiftKey,t:n.pointerType});try{t.setPointerCapture(n.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=n=>{var s,r;this.ptrs.delete(n.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",n=>{let s=this.ptrs.get(n.pointerId);if(!s||!this.enabled)return;let r=n.clientX-s.x,o=n.clientY-s.y;if(s.x=n.clientX,s.y=n.clientY,this.ptrs.size>=2){let[a,c]=[...this.ptrs.values()],l=(a.x+c.x)/2,h=(a.y+c.y)/2,u=Math.hypot(a.x-c.x,a.y-c.y),f=Math.atan2(c.y-a.y,c.x-a.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,u),l,h),this.pan(l-this._pinch.mx,h-this._pinch.my);let d=f-this._pinch.a;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),this.rotate(d,0)}this._pinch={d:u,mx:l,my:h,a:f};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||n.shiftKey?this.pan(r,o):this.rotate(-r*.0055,-o*.0045)}),t.addEventListener("wheel",n=>{var r,o;if(!this.enabled)return;if(!this.wheelOn){(o=(r=this.o).onWheelHint)==null||o.call(r);return}n.preventDefault();let s=n.deltaMode===1?n.deltaY*16:n.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),n.clientX,n.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};var Ns={ov:{t:[56,0,-3.5],r:152,ph:.5,th:-.5},top:{t:[53,0,-5],r:225,ph:.06,th:0},ext:{t:[58,2,-3],r:118,ph:1.2,th:-1.38,mode:"full"}};function N_(i){let t=new be;return t.setAttribute("position",new Ee(i.p,3)),t.setAttribute("normal",new Ee(i.n,3)),t.setAttribute("color",new Ee(i.c,3)),t.computeBoundingSphere(),t}var $i=(i,t)=>{let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n.set(t,s*3);return i.setAttribute("color",new Ee(n,3)),i};function Ka(i){let t=new be;for(let e of["position","normal","color"]){let n=i.reduce((o,a)=>o+a.attributes[e].array.length,0),s=new Float32Array(n),r=0;for(let o of i)s.set(o.attributes[e].array,r),r+=o.attributes[e].array.length;t.setAttribute(e,new Ee(s,3))}return t}var Ki=i=>(i=i.index?i.toNonIndexed():i,i.deleteAttribute("uv"),i.computeVertexNormals(),i);function B_(){let i=(n,s,r,o)=>{let a=$u(new gn(n,1).deleteAttribute("normal").deleteAttribute("uv"));return a.computeVertexNormals(),a.translate(s,r,o).toNonIndexed()},t=Ka([i(1.3,0,3.9,0),i(1,.9,3.3,.4),i(.95,-.75,3.45,-.55),i(.85,.1,4.7,-.25)].map(n=>$i(n,[1,1,1]))),e=new Gt("#7A6A58");return Ka([t,$i(Ki(new pn(.16,.26,2.9,5,1,!0).translate(0,1.45,0)),[e.r,e.g,e.b])])}function O_(){let i=new Gt("#6E5F4F");return Ka([$i(Ki(new An(1.55,3.4,7).translate(0,3.2,0)),[1,1,1]),$i(Ki(new An(1.15,2.8,7).translate(0,4.9,0)),[1,1,1]),$i(Ki(new An(.7,2,7).translate(0,6.3,0)),[1,1,1]),$i(Ki(new pn(.14,.22,2,5,1,!0).translate(0,1,0)),[i.r,i.g,i.b])])}function z_(){let i=new Gt("#857563"),t=[Ki(new pn(.1,.24,5.2,5,1,!0).translate(0,2.6,0))],e=(n,s,r,o)=>Ki(new pn(.04,.09,n,4,1,!0).translate(0,n/2,0).rotateZ(o).rotateY(s).translate(0,r,0));return t.push(e(1.8,0,3.2,.8),e(1.4,2.2,3.8,.9),e(1.2,4,2.6,.7),e(1,1.2,4.5,.6)),Ka(t.map(n=>$i(n,[i.r,i.g,i.b])))}function k_(i={}){let t=sd(),e=new Ga,n=ld(e),s=e.out(),r=new te,o={};for(let _ of["terrain","far","cut","water","props","farProps","trees"])o[_]=new te,o[_].name=_,r.add(o[_]);let a=_=>new rn({vertexColors:!0,roughness:.92,metalness:0,flatShading:!1,..._}),c={terrain:a({}),water:a({roughness:.25,metalness:.05,transparent:!0,opacity:.9}),props:a({roughness:.85}),glow:new ue({vertexColors:!0,toneMapped:!1})},l=(_,m,p,M=!0,y=!0)=>{if(!m||!m.p.length)return null;let x=new kt(N_(m),p);return x.castShadow=M,x.receiveShadow=y,o[_].add(x),x};l("terrain",t.main,c.terrain),l("terrain",t.skirt,c.terrain,!1,!1),l("far",t.far,c.terrain),l("cut",t.cut,c.terrain,!1,!1);let h=l("water",t.water,c.water,!1,!0);h&&(h.renderOrder=1);for(let[_,m]of Object.entries(s)){let[p,M]=_.split(":");l(p==="far"?"farProps":"props",m,M==="e"?c.glow:c.props,M!=="e",M!=="e")}let u={broad:B_(),pine:O_(),dead:z_()},f=new rn({vertexColors:!0,roughness:.95}),d=(_,m,p)=>{if(!_.length)return null;let M=new ur(u[m],f,_.length),y=new zt,x=new wn,S=new L,E=new L,w=new Gt,I=new L(0,1,0),b=new Gt(m==="pine"?"#6F846A":"#86996C"),v=new Gt(m==="pine"?"#8A9C78":"#A6B183");return _.forEach((R,U)=>{let O=Math.sin(R.x*12.9898+R.z*78.233)*43758.5453,H=O-Math.floor(O);x.setFromAxisAngle(I,H*6.28),S.set(R.s*(.9+H*.2),R.s*(.92+H*.25),R.s*(.9+H*.2)),E.set(R.x,R.y-.1,R.z),y.compose(E,x,S),M.setMatrixAt(U,y),w.copy(b).lerp(v,H),m==="dead"&&w.set("#FFFFFF"),M.setColorAt(U,w)}),M.castShadow=!0,M.receiveShadow=!0,M.frustumCulled=!1,M.name=p,M},g={near:[],far:[]};for(let _ of["broad","pine","dead"]){let m=n.trees.filter(y=>y.k===_),p=d(m.filter(y=>y.z<$n(y.x)-.6),_,"near-"+_),M=d(m.filter(y=>y.z>=$n(y.x)-.6),_,"far-"+_);p&&o.trees.add(p),M&&o.farProps.add(M)}return{root:r,groups:o,M:c,terrain:t,props:n}}function hd(i,t={}){var K,tt;let e=(K=t.mobile)!=null?K:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),n=new Ha({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Wo,n.shadowMap.autoUpdate=!1,n.toneMapping=Qo,n.toneMappingExposure=(tt=t.exposure)!=null?tt:1,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",i.appendChild(n.domElement);let s=new lr,r=new Ue(30,1,.3,4e3),o=k_(t);s.add(o.root),s.add(new Ar("#EEF2F5","#B5AB9A",1.25));let a=new Cr("#FFF2DF",2.7),c=new L(-.42,.8,.42).normalize(),l=new L(53,5,-5);a.position.copy(l).addScaledVector(c,400),a.target.position.copy(l),s.add(a,a.target),a.castShadow=!0;let h=e?2048:4096;a.shadow.mapSize.set(h,h),a.shadow.bias=-4e-4,a.shadow.normalBias=.05,a.shadow.radius=2;let u=G=>{let J=a.shadow.camera,B=new zt().lookAt(a.position,a.target.position,new L(0,1,0)).setPosition(a.position).invert(),X=1e9,it=-1e9,ut=1e9,ht=-1e9,wt=1e9,se=-1e9,D=new L;for(let ne of[G.x0,G.x1])for(let Bt of[G.y0,G.y1])for(let Lt of[G.z0,G.z1])D.set(ne,Bt,Lt).applyMatrix4(B),X=Math.min(X,D.x),it=Math.max(it,D.x),ut=Math.min(ut,D.y),ht=Math.max(ht,D.y),wt=Math.min(wt,D.z),se=Math.max(se,D.z);Object.assign(J,{left:X,right:it,bottom:ut,top:ht,near:-se-5,far:-wt+5}),J.updateProjectionMatrix(),n.shadowMap.needsUpdate=!0},f=t.shadowBox||{x0:_e.x0,x1:_e.x1,z0:_e.z0,z1:_e.z1,y0:_e.base,y1:36};u(f);let d=!0,g=!0,_=!0,m=performance.now(),p=[],M=[],y=new $a(r,n.domElement,{minR:3,maxR:700,minPhi:.04,maxPhi:1.5,bounds:{x0:-20,x1:126,z0:-50,z1:40},onChange:()=>{d=!0},onStart:()=>{for(let G of p)G()},onWheelHint:()=>{for(let G of M)G()},...t.controls||{}}),x=(G,J)=>{var it;let B=typeof G=="string"?Ns[G]:G,X={th:B.th,ph:B.ph,r:B.r,fov:B.fov,t:new L(...B.t)};B.mode&&E(B.mode),J?y.set(X,!0):y.flyTo(X,(it=B.dur)!=null?it:1.3)},S=null;function E(G){if(G===S)return;S=G;let J=G!=="full",B=o.groups;B.far.visible=!J,B.farProps.visible=!J,B.cut.visible=J,n.shadowMap.needsUpdate=!0,d=!0}E(t.mode||"full"),x(t.view||"ov",!0);let w={x:.5,y:.5,tx:.5,ty:.5},I=()=>{let G=i.clientWidth||800,J=i.clientHeight||500;Math.abs(w.x-.5)<1e-4&&Math.abs(w.y-.5)<1e-4?r.clearViewOffset():r.setViewOffset(G,J,(.5-w.x)*G,(.5-w.y)*J,G,J)},b=G=>{if(w.x===w.tx&&w.y===w.ty)return!1;let J=1-Math.exp(-G*5);return w.x+=(w.tx-w.x)*J,w.y+=(w.ty-w.y)*J,Math.abs(w.tx-w.x)+Math.abs(w.ty-w.y)<.001&&(w.x=w.tx,w.y=w.ty),I(),!0},v=()=>{let G=i.clientWidth||800,J=i.clientHeight||500;n.setSize(G,J,!1),r.aspect=G/J,r.updateProjectionMatrix(),I(),d=!0},R=new ResizeObserver(v);R.observe(i),v();let U=new IntersectionObserver(G=>{g=G[0].isIntersecting,g&&(d=!0)});U.observe(i);let O=[],H=[],Z=[],F=()=>{for(let G of Z)G(r);n.render(s,r);for(let G of O)G(r)},j=0,C=!1,N=0,Y=G=>{if(!_||(requestAnimationFrame(Y),C))return;let J=Math.max(0,Math.min(.05,(G-m)/1e3));if(m=G,!g||document.hidden)return;let B=k.animating||G<k.animUntil,X=!B&&k.ambient&&G-j>50;if(B||X){for(let ht of H)ht(J,G/1e3);X&&(j=G)}let it=y.update(J),ut=b(J);(d||it||ut||B||X)&&(F(),d=!1)};requestAnimationFrame(Y);let k={renderer:n,scene:s,camera:r,controls:y,world:o,setView:x,VIEWS:Ns,setMode:E,mode:()=>S,animating:!1,animUntil:0,ambient:!1,mobile:e,invalidate:()=>{d=!0},setCenter:(G,J,B)=>{w.tx=G,w.ty=J,B&&(w.x=G,w.y=J,I(),d=!0)},hold:G=>{C=G,G?(N=performance.now()/1e3,y.now=()=>N*1e3):y.now=()=>performance.now()},step:G=>{N+=G;for(let J of H)J(G,N);y.update(G),F()},setShadowBox:G=>{u(G||f),d=!0},shadowDirty:()=>{n.shadowMap.needsUpdate=!0,d=!0},renderNow:()=>{y.update(1),F()},onRender:G=>O.push(G),onBeforeRender:G=>Z.push(G),onFrame:G=>H.push(G),onUserStart:G=>p.push(G),onWheelHint:G=>M.push(G),dispose:()=>{_=!1,R.disconnect(),U.disconnect(),n.dispose(),n.domElement.remove()}};return k}function ln(i,t,e={}){var x,S,E,w,I;let n=(x=e.back)!=null?x:7,s=(S=e.up)!=null?S:3.2,r=(E=e.ahead)!=null?E:5,o=(w=e.side)!=null?w:0,a=t[0]-i[0],c=t[1]-i[1],l=Math.hypot(a,c)||1,h=a/l,u=c/l,f=i[0]+h*r,d=i[1]+u*r,g=[f,Qt(f,d)+1.2,d],_=i[0]-h*n-u*o,m=i[1]-u*n+h*o,p=[_,Math.max(Qt(i[0],i[1])+s,Qt(_,m)+1.8),m],M=[p[0]-g[0],p[1]-g[1],p[2]-g[2]],y=Math.hypot(...M);return{t:g,r:+y.toFixed(2),ph:+Math.acos(M[1]/y).toFixed(3),th:+Math.atan2(M[0],M[2]).toFixed(3),fov:(I=e.fov)!=null?I:50}}var ud=(i,t,e,n=0)=>{let s=[];for(let r=0;r<8;r++){let o=n+r/8*Math.PI*2;s.push([i.x+Math.cos(o)*t,i.z+Math.sin(o)*e])}return s.push(s[0]),s},ja=ud(He,5.2,4.2,.2),H_=ud(Wa,4.6,3.8,-.1),Gl=ju,Bs=[[109.6,1,1.7],[108.6,-5.6,1.5],[111.2,-2.6,1.1],[110.4,4.6,1.2]],V_=[[79.6,9.6],[95.2,10.2],[100.6,-11.6],[77.8,-14.2],[84.6,10.8],[89.4,-16.2]],Qa=Bs.map(([i,t,e])=>["fire",i,t,e]),Wl=[[83,-3.6],[84.2,1.4],[81.4,3.2],[85.8,-1],[82.4,-6.2],[86.8,3.8]],xi=[{b:[0,1,2,3],cam:{t:[10,1,1],r:60,ph:.7,th:-.95},at:[5,2.4]},{b:[4,5],cam:{t:[33,2,-1],r:66,ph:.72,th:-1},at:[31,.8]},{b:[6,7,8,9,10],cam:{t:[56,0,-1],r:82,ph:.64,th:-.34},at:[55.5,1.6]},{b:[11,12,13,14],cam:{t:[93,-1,-1],r:100,ph:.74,th:-.3},at:[90,-1]}],Os=[{p:[1.5,3.2],pl:[8,3],path:[],u:[["s",7.2,1.6,1.5,3.2,"idle"],["s",8.4,4.4,1.5,3.2,"idle"],["r",19.6,2.4,1.5,3.2,"idle"]],camg:[[-9,19,15],[24,1,-1]],lab:[["\u5F00\u573A\uFF1A\u9AD8\u673A\u4F4D\u770B\u6EAA\u8C37\u5168\u666F",-9,15,21.5,"note"],["\u878D\u5408\u5230\u73A9\u5BB6\u89C6\u89D2",1.5,3.2,3.6,"item"]],cam:{t:[6,4,2],r:60,ph:.76,th:-1.18}},{p:[2.6,3],pl:[8,3],pose:"idle",path:[[1.5,3.2],[2.6,3]],u:[["s",6.4,1.8,2.6,3,"draw"],["s",7.6,4.4,2.6,3,"draw"],["r",19.6,2.4,2.6,3,"shoot"]],ar:[[[19.6,2.4,1.5],[3,3,1.2],"shot"],[[3,3,.3],[18.6,2.4,.3],"move"]],lab:[["\u8FD1\u5904\u4E24\u540D\u8FD1\u6218\u62D4\u5200",7,3,2.6,"warn"],["\u7A0D\u8FDC\u5904\u5761\u4E0A\uFF1A\u8FDC\u7A0B\u58EB\u5175",19.6,2.4,3,"warn"],["\u5148\u6253\u8FDC\u7A0B\uFF0C\u518D\u56DE\u5934\u6253\u8FD1\u6218",11,1,1.6,"note"]],cam:ln([2.6,3],[12,2.8],{back:7,up:3.4,ahead:7})},{p:[8.4,2.6],pl:[9.2,1.4],pose:"slash",path:[[18.2,2.4],[12,2.6],[8.4,2.6]],u:[["s",9.3,.9,8.4,2.6,"knocked"],["s",7.4,4.6,8.4,2.6,"slash"],["r",19.8,2.8,8.4,2.6,"dead"]],ar:[[[8.6,2.2,1],[9.4,.9,1],"knock"]],fx:[["burst",9,1.4,1.1],["burst",6.9,4.8,.8]],lab:[["\u7279\u610F\u5E03\u7F6E\u7684\u7834\u788E\u7269\uFF1A\u7BB1\u5B50\u3001\u9676\u7F50\u3001\u6728\u6876",8.2,.4,2.4,"item"],["\u51FB\u98DE\u7684\u654C\u4EBA\u5F88\u5BB9\u6613\u649E\u788E\u5B83\u4EEC",9.4,.9,3.2,"note"]],cam:ln([8.4,2.6],[14,2.6],{back:7,up:3.6,ahead:3})},{p:[16.5,1.5],pl:[22.2,2.7],pose:"run",path:[[2.6,3],[8,3.4],[12,2.8],[16.5,1.5]],u:[["s",11.8,2.9,16.5,1.5,"run"],["s",12.6,1.4,16.5,1.5,"run"],["r",19,3.4,16.5,1.5,"shoot"]],ar:[[[7,2,.2],[11.4,3.3,.2],"chase"],[[8.2,4.3,.2],[12.2,1.6,.2],"chase"]],lab:[["\u8FD9\u4E00\u6CE2\u53EF\u4EE5\u4E0D\u6253\uFF0C\u76F4\u63A5\u5F80\u524D\u8D70",16.5,1.5,3,"note"],["\u4E0D\u5904\u7406\u7684\u654C\u4EBA\u4F1A\u8DDF\u7740\u73A9\u5BB6",12,2.6,3,"warn"]],cam:ln([16.5,1.5],[23,2.2],{back:10,up:6.5,ahead:2,side:-3})},{p:pt(0,-2.6),pl:pt(0,4),pose:"walk",path:[[16.5,1.5],[19.8,2.6],pt(0,-2.6)],sight:[[...pt(0,-2.6),1.7],[Yt.x,Yt.z,2.25]],lab:[["\u5361\u53E3\u4E00\uFF1A\u67AF\u6811\u679D\u5806\u548C\u843D\u77F3\u5939\u51FA\u659C\u7740\u8D70\u7684\u7A84\u7F1D\uFF0C\u7EA6 2.5m",...pt(0,0),3.4,"note"],["\u671D\u4E1C\u5317\uFF0C\u51FA\u53E3\u5BF9\u7740\u5317\u5CB8",...pt(0,3.6),2.6,"item"],["\u89C6\u7EBF\u88AB\u5761\u9876\u6321\u4F4F\uFF1A\u770B\u4E0D\u5230 Boss",36,.4,3.4,"warn"]],cam:ln(pt(0,-2.6),pt(0,4),{back:6,up:3.5,ahead:4,side:-3})},{p:[32,.9],pl:[80,-1],path:[pt(0,-2.6),pt(0,0),pt(0,2.6),[28.4,-.6],[32,.9]],sight:[[32,.9,1.7],[Yt.x,Yt.z,2.25]],lab:[["\u5761\u9876\uFF1A\u7B2C\u4E00\u6B21\u770B\u5230 Boss \u548C\u7EC8\u70B9\u573A\u5730",32,.9,3.2,"item"],["\u7EC8\u70B9\u573A\u5730",88,-2,2,"note"],["\u5148\u8981\u4E0B\u5761\uFF0C\u7A7F\u8FC7\u9A6C\u8F66\u548C\u4E24\u5757\u5C0F\u5E73\u5730",52,0,3,"note"]],cam:{t:[60,0,-1],r:36.8,ph:1.267,th:-1.499}},{p:[41.5,-2],pl:[46,-3.6],pose:"run",path:[[32,.9],[35,1.4],[38.5,.4],[41.5,-2]],lab:[["\u4FA7\u7FFB\u7684\u5927\u8F66\u6A2A\u5728\u8DEF\u4E0A\uFF0C\u6321\u4F4F\u5357\u4FA7",43.6,4.4,3,"item"],["\u8DEF\u7EBF\u88AB\u8F66\u62D0\u6210\u5F2F\u8DEF",38.6,-1.6,2.4,"note"],["\u5361\u53E3\u4E8C\uFF1A\u7BF7\u8F66\u548C\u67AF\u6811\u679D\u5806\u5939\u51FA\u671D\u4E1C\u5357\u7684\u7A84\u9053\uFF0C\u7EA6 2.5m",...pt(1,0),3.4,"item"]],ghost:Xi.slice(Xi.findIndex(i=>i[0]===32),Xi.findIndex(i=>i[0]===pt(2,2.6)[0])+1),cam:ln([41.5,-2],[60,1],{back:10,up:9,ahead:12})},{p:[38.8,-.4],pl:[48,-3.5],pose:"walk",path:[[35,1.4],[38.8,-.4]],u:[["a",48.6,-4.2,47,-2.4,"cast"],["s",46.8,-2.3,48.6,-4.2,"slash"],["s",50.3,-2.6,48.6,-4.2,"slash"],["s",49.6,-6.2,48.6,-4.2,"idle"],["s",46.6,-5.6,48.6,-4.2,"slash"]],walls:[[ja,3,"on"]],zone:[[He.x,He.z,9.5]],lab:[["\u672F\u58EB\u548C\u56DB\u540D\u58EB\u5175\u5728\u5E73\u5730\u4E0A\u53AE\u6740",48.4,-4,3.4,"note"],["\u9690\u5F62\u7A7A\u6C14\u5899\u6846\u4F4F\u53AE\u6740\uFF0C\u4E0D\u8BA9\u4F4D\u79FB\u8DD1\u504F",43.4,-8.4,3.4,"item"],["\u73A9\u5BB6\u9760\u8FD1\u524D\uFF0C\u672F\u58EB\u9501\u8840",49.8,-.6,2.8,"item"]],cam:ln([38.8,-.4],[48,-3.5],{back:7,up:4,ahead:5})},{p:[43.6,-2.8],pl:[47,-2.6],pose:"run",path:[[38.8,-.4],[41.5,-2],[43.6,-2.8]],u:[["a",48.6,-4.2,47,-2.4,"cast"],["s",46.4,-2.5,43.6,-2.8,"slash"],["s",50.3,-2.6,43.6,-2.8,"run"],["s",49.6,-6.2,48.6,-4.2,"slash"],["s",46.6,-5.6,43.6,-2.8,"run"]],walls:[[ja,3,"off"]],zone:[[He.x,He.z,9.5,"hit"]],ar:[[[50.1,-2.7,.4],[44.4,-2.8,.4],"aggro"],[[46.8,-5.3,.4],[44.2,-3.3,.4],"aggro"],[[46.2,-2.5,.4],[44.2,-2.8,.4],"aggro"]],lab:[["\u9760\u8FD1\uFF1A\u7A7A\u6C14\u5899\u6D88\u5931",41.8,-7.8,3.2,"item"],["\u624B\u52A8\u7ED9\u73A9\u5BB6\u52A0\u4EC7\u6068\uFF0C\u58EB\u5175\u8F6C\u8EAB\u6253\u73A9\u5BB6",49.6,-.2,3,"warn"],["\u9501\u8840\u89E3\u9664",48.6,-4.2,3.4,"note"]],cam:ln([43.6,-2.8],[48,-3.6],{back:7,up:4,ahead:3})},{p:pt(1,-2.6),pl:pt(1,3),pose:"run",path:[[45.6,-3.4],[49,-3.4],[52.2,-2.6],pt(1,-2.6)],u:[["a",51,-2.7,...pt(1,-2.6),"run"],["s",46.4,-2.6,0,0,"dead"],["s",50,-3,0,0,"dead"],["s",49.4,-6.4,0,0,"dead"],["s",46.8,-5.8,0,0,"dead"]],ar:[[[48.6,-4.2,.2],[50.4,-3,.2],"follow"]],lab:[["\u6E05\u5B8C\u8FD9\u4E00\u6CE2\uFF0C\u672F\u58EB\u8DDF\u968F\u73A9\u5BB6\u524D\u8FDB\u5E76\u52A9\u6218",50.6,-2.6,3.2,"note"],["\u5361\u53E3\u4E8C\uFF1A\u53BB\u5E73\u5730\u4E8C\u53EA\u6709\u8FD9\u6761\u659C\u7740\u7684\u7A84\u9053",...pt(1,0),3.2,"item"]],cam:ln(pt(1,-2.6),pt(1,3),{back:7,up:3.8,ahead:4})},{p:[59.4,3.9],pl:[63,4.4],pose:"walk",path:[pt(1,-2.6),pt(1,0),pt(1,2.6),[58.6,3.7],[59.4,3.9]],u:[["a",63.6,4.8,61.6,3.2,"cast"],["s",61.6,3,63.6,4.8,"slash"],["s",65.2,3.4,63.6,4.8,"slash"],["s",62.6,7,63.6,4.8,"slash"],["a",...pt(1,1.6),59.4,3.9,"run"]],walls:[[H_,3,"on"]],zone:[[Wa.x,Wa.z,7]],alt:[pt(1,2.6),[59.6,3.6],[61.6,3],[62.6,.2],[61.6,-3.4],[59.8,-7],[59.6,-10.6],[61.4,-12.2],[64.6,-11.6],[67.6,-10.6],[68,-8.4],[66.5,-5.7],[65.7,-3],[68.4,-.8],pt(2,-2.6),pt(2,0)],lab:[["\u5E73\u5730\u4E8C\uFF1A\u540C\u6837\u7684\u53AE\u6740\u4E0E\u5904\u7406",63.6,4.8,3.4,"note"],["\u4E5F\u53EF\u4EE5\u8D34\u7740\u5317\u4FA7\u6CB3\u6EE9\u7ED5\u8FC7\u53BB",63.6,-12,2.2,"note"],["\u8DDF\u4E0A\u6765\u7684\u672F\u58EB\u4E00\u8D77\u52A9\u6218",...pt(1,1.6),3,"item"]],cam:ln([59.4,3.9],[64,5.6],{back:5,up:5.5,ahead:3.5,side:-.5})},{p:pt(2,2.2),pl:pt(2,5),pose:"walk",path:[[66,3.8],pt(2,-2.6),pt(2,0),pt(2,2.2)],u:[["k",Yt.x,Yt.z,80,-1,"idle"],["e",...Kn,80,-1,"idle"],["e",...Qn,80,-1,"idle"],...Wl.map(([i,t])=>["s",i+3,t,...pt(2,3.4),"idle"])],trig:[pt(2,3,-2.6),pt(2,3,1.5)],camg:[[64,9,9],[96,1,-2]],fx:Qa,lab:[["\u5361\u53E3\u4E09\u671D\u4E1C\u5317\uFF1A\u51FA\u4E86\u53E3\u5B50\uFF0C\u8F6C\u8FC7\u8EAB\u624D\u770B\u5230 Boss",77,-6.6,3.2,"note"],["\u7A7F\u8FC7\u5361\u53E3\u4E09\uFF1A\u89E6\u53D1\u7B80\u77ED\u8FC7\u573A",...pt(2,3,-2.6),2.6,"item"],["\u5012\u6811\u548C\u71C3\u70E7\u7684\u9A6C\u8F66\u5835\u4F4F\u51FA\u53E3",111.4,-2,3.8,"warn"]],cam:ln(pt(2,2.2),[90,-1],{back:6,up:5.5,ahead:6,side:2.5})},{p:[80.6,-.8],pl:[84,-1],pose:"slash",path:[pt(2,2.2),pt(2,3.2),[75.8,-6.2],[78.6,-5.2],[80.6,-.8]],u:[["k",Yt.x,Yt.z,80.6,-.8,"idle"],["e",...Kn,80.6,-.8,"idle"],["e",...Qn,80.6,-.8,"idle"],...Wl.map(([i,t])=>["s",i,t,80.6,-.8,"slash"])],fx:Qa,ar:Wl.slice(0,4).map(([i,t])=>[[i,t,.3],[80.6+(i-80.6)*.25,-.8+(t+.8)*.25,.3],"hit"]),lab:[["Boss \u7AD9\u5728\u8FDC\u5904\u89C2\u6218",Yt.x,Yt.z,4.6,"warn"],["\u4E00\u7FA4\u58EB\u5175\u56F4\u7740\u73A9\u5BB6\u6253",83.4,-1.2,3.2,"note"]],cam:ln([80.6,-.8],[Yt.x,Yt.z],{back:7.5,up:4,ahead:5})},{p:[82.4,-.2],pl:[92,-2],pose:"idle",path:[],u:[["k",90.4,-2.2,82.4,-.2,"run"],["e",89.6,-5.6,82.4,-.2,"run"],["e",89,1.6,82.4,-.2,"run"],["s",83,-3.6,0,0,"dead"],["s",84.2,1.4,0,0,"dead"],["s",85.8,-1,0,0,"dead"],["s",81.4,3.2,0,0,"dead"],["s",82.4,-6.2,82.4,-.2,"slash"],["s",79.2,.8,82.4,-.2,"slash"]],fx:Qa,ar:[[[Yt.x,Yt.z,.3],[90.8,-2.2,.3],"charge"],[[...Kn,.3],[90,-5.6,.3],"charge"],[[...Qn,.3],[89.4,1.6,.3],"charge"]],lab:[["\u58EB\u5175\u4F24\u4EA1\u5230\u4E00\u5B9A\u6BD4\u4F8B\uFF1ABoss \u548C\u968F\u4ECE\u52A0\u5165",92,-2.2,4.4,"warn"],["\u73A9\u5BB6\u5148\u52A8\u624B\uFF0C\u4ED6\u4EEC\u4E5F\u4F1A\u5E94\u6218",Yt.x+1,Yt.z+3,3.4,"note"]],cam:ln([82.4,-.2],[92,-2],{back:8,up:4.2,ahead:5})},{p:[90,-1],pl:[96,-1],pose:"idle",path:[],u:[["k",94.4,-2.2,90,-1,"slash"],["e",92.6,-5,90,-1,"slash"],["e",92.4,2.4,90,-1,"slash"]],fx:[...Qa,...V_.map(([i,t])=>["fire",i,t,1])],walls:[[Gl.cliff,4,"edge"],[Gl.water,4,"edge"],[Gl.block,4,"edge"]],lab:[["\u60AC\u5D16",90,ke(90)-.2,4.2,"item"],["\u5E73\u5766\u5CA9\u58C1 + \u6DF1\u6C34\u533A",90,cn(90)+Nn(90)+1,3.2,"item"],["\u6A2A\u7740\u7684\u67AF\u6811\u5E72",76.6,-16.6,2.2,"item"],["\u5012\u6811\u548C\u71C3\u70E7\u7684\u9A6C\u8F66",110,2,4.2,"item"],["\u573A\u5730\u8FB9\u7F18\u4FEE\u5E73\u6ED1\uFF0C\u4E0D\u5361\u73A9\u5BB6",80,8.6,2.4,"note"],["\u5468\u56F4\u7684\u53EF\u71C3\u7269\uFF1A\u706B\u7684\u6548\u679C",95.2,10.2,2.6,"warn"]],cam:ln([90,-1],[98,-1],{back:19,up:15,ahead:4})}];var jn=(i,t={})=>new rn({color:i,roughness:.75,metalness:0,...t}),dd={p:{H:1.8,body:"#C47A22",head:"#E3BC93",limb:"#A8661C",blade:1},b:{H:3.4,body:"#2B3331",head:"#46504D",limb:"#232A28",club:"#6E5A45"},m:{H:3.4,body:"#2B3331",head:"#46504D",limb:"#232A28",arm:"#6B3B2C"},g:{H:17,body:"#343B39",head:"#4B5552",limb:"#2A302E",arm:"#6B3B2C"},s:{H:1.8,body:"#4A5560",head:"#66717A",limb:"#38424B",blade:1,foe:1},r:{H:1.8,body:"#4A5560",head:"#66717A",limb:"#38424B",bow:1,foe:1},a:{H:1.8,body:"#3E7C76",head:"#E3BC93",limb:"#2F625D",staff:1,ally:1},k:{H:2.6,body:"#2B3331",head:"#46504D",limb:"#232A28",blade:2,foe:1},e:{H:2,body:"#6A3E33",head:"#7E5A50",limb:"#4F2E26",blade:1,foe:1}},G_=i=>i==="p"?"#E7A537":dd[i].ally?"#3E9C90":"#B5462F";function tc(i){let t=null,e=dd[i],n=e.H,s=new te,r=new te;s.add(r),r.position.y=n*.5;let o=jn(e.body),a=jn(e.head),c=jn(e.limb),l=new kt(new pr(n*.13,n*.26,4,10),o);l.position.y=n*.2,r.add(l);let h=new kt(new Ui(n*.1,14,10),a);h.position.y=n*.44,r.add(h);let u=(M,y,x)=>{let S=new te,E=new kt(new Ze(M,y,M),x);return E.position.y=-y/2,S.add(E),S},f=u(n*.07,n*.34,c),d=i==="m"||i==="g"?u(n*.17,n*.5,jn(e.arm)):u(n*.07,n*.34,c);f.position.set(-n*.17,n*.33,0),d.position.set(i==="m"||i==="g"?-(-n*.23):n*.17,n*.33,0);let g=u(n*.085,n*.46,c),_=u(n*.085,n*.46,c);if(g.position.set(-n*.07,0,0),_.position.set(n*.07,0,0),r.add(f,d,g,_),e.club){let M=new kt(new pn(n*.03,n*.05,n*.55,8),jn(e.club));M.position.set(0,-n*.34,n*.12),M.rotation.x=Math.PI/2.4,d.add(M)}if(e.blade){let M=new kt(new Ze(n*.03,n*(e.blade>1?.62:.44),n*.07),jn("#C9CED1",{roughness:.4,metalness:.3}));M.position.set(0,-n*.34-n*(e.blade>1?.28:.2),n*.05),d.add(M),t=M}if(e.bow){let M=new kt(new Er(n*.26,n*.018,4,12,Math.PI*1.1),jn("#6E5A45"));M.rotation.set(0,Math.PI/2,Math.PI/2-.55),M.position.set(0,-n*.34,0),f.add(M)}if(e.staff){let M=new kt(new pn(n*.022,n*.022,n*.95,6),jn("#7A6A58"));M.position.set(0,-n*.3,n*.04),d.add(M);let y=new kt(new Li(n*.055),new ue({color:"#7FD3C4"}));y.position.set(0,-n*.3-n*.5,n*.04),d.add(y)}if(i==="m"||i==="g"){let M=new kt(new An(n*.11,n*.16,6),jn("#4E2A20"));M.position.y=-n*.55,M.rotation.x=Math.PI,d.children[0].parent.add(M)}let m=new kt(new di(n*.32,n*.42,28),new ue({color:G_(i),transparent:!0,opacity:.85,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.y=.04,m.renderOrder=2,s.add(m),s.traverse(M=>{M.isMesh&&M!==m&&(M.castShadow=!0,M.receiveShadow=!1)});let p={root:s,hips:r,torso:l,armL:f,armR:d,legL:g,legR:_,H:n,kind:i,ring:m,pose(M="idle",y=0){r.rotation.set(0,0,0),r.position.set(0,n*.5,0);for(let E of[f,d,g,_])E.rotation.set(0,0,0);let x=Math.sin(y*9),S=i==="m"||i==="g";switch(M){case"walk":{let E=Math.sin(y*5.5);g.rotation.x=.38*E,_.rotation.x=-.38*E,f.rotation.x=-.3*E,d.rotation.x=S?-.15:.3*E;break}case"run":r.rotation.x=.22,g.rotation.x=.7*x,_.rotation.x=-.7*x,f.rotation.x=-.6*x,d.rotation.x=S?-.3:.6*x;break;case"stumble":r.rotation.x=.5,g.rotation.x=.5*x,_.rotation.x=-.5*x,f.rotation.z=-1.1,d.rotation.z=1.1,r.position.y=n*.46;break;case"throw":d.rotation.x=-2.1,f.rotation.x=.5,g.rotation.x=-.35,_.rotation.x=.3;break;case"cast":f.rotation.set(-2.7,0,-.35),d.rotation.set(-2.7,0,.35);break;case"slam":r.rotation.x=-.15,f.rotation.x=-3,d.rotation.x=-3;break;case"charge":r.rotation.x=.55,d.rotation.x=-1.35,f.rotation.x=-.6,g.rotation.x=.8*x,_.rotation.x=-.8*x;break;case"fly":r.rotation.x=.35,g.rotation.x=.7,_.rotation.x=.5,f.rotation.z=-.9,d.rotation.z=.9;break;case"fall":r.rotation.x=-.4,f.rotation.z=-2.2,d.rotation.z=2.2,g.rotation.x=-.6,_.rotation.x=.4;break;case"down":r.rotation.x=-1.45,r.position.y=n*.14,f.rotation.z=-.5,d.rotation.z=.5,g.rotation.x=.1;break;case"grab":r.rotation.x=.3,f.rotation.x=-1.5,S?d.rotation.x=-1.5:d.rotation.set(.45,0,.5);break;case"held":r.rotation.x=-.3,g.rotation.x=.5,_.rotation.x=.2,f.rotation.z=-1.2,d.rotation.z=1.2,r.position.y=n*.62;break;case"burn":f.rotation.set(-.6+.4*x,0,-1.1),d.rotation.set(-.6-.4*x,0,1.1),r.rotation.z=.1*x;break;case"dodge":r.rotation.z=.5,r.position.y=n*.4,g.rotation.x=-.9,_.rotation.x=.6,f.rotation.z=-1;break;case"draw":d.rotation.set(-.9,0,.25),f.rotation.z=-.3,g.rotation.x=-.25,_.rotation.x=.2;break;case"slash":{let E=Math.sin(y*7);r.rotation.y=-.35+.3*E,d.rotation.set(-1.9+.6*E,0,.35),f.rotation.x=-.4,g.rotation.x=-.35,_.rotation.x=.3;break}case"shoot":f.rotation.set(-1.55,0,0),d.rotation.set(-1.45,0,.55),r.rotation.y=.15,g.rotation.x=-.2,_.rotation.x=.25;break;case"knocked":r.rotation.x=-.9,r.position.y=n*.62,f.rotation.z=-1.6,d.rotation.z=1.6,g.rotation.x=-.7,_.rotation.x=-.2;break;case"dead":r.rotation.x=-1.5,r.position.y=n*.11,f.rotation.z=-.9,d.rotation.z=.4,g.rotation.x=.15,_.rotation.x=-.1;break;case"push":r.rotation.x=-.35,g.rotation.x=-.5,_.rotation.x=.4,f.rotation.x=-1.4,d.rotation.x=-1.4;break;default:f.rotation.z=-.08,d.rotation.z=.08}}};return p.pose("idle"),p}function zs(i=1.5,t=1,e={}){let n=new te,s=new ue({color:"#EC6E2A",transparent:!0,opacity:.9}),r=new ue({color:"#F6B63E",transparent:!0,opacity:.95}),o=Math.max(3,Math.round(i*3.2));for(let a=0;a<o;a++){let c=a*2.39996+t,l=i*Math.sqrt((a+.5)/o)*.8,h=.9+(a*7+t*3)%5*.22,u=new kt(new An(.28+.1*(a%2),h,6),a%3?s:r);u.position.set(Math.cos(c)*l,h/2,Math.sin(c)*l),u.userData.h=h,u.userData.k=a*1.7+t,n.add(u)}if(e.spot!==!1){let a=new kt(new mr(i*1.15,28),new ue({color:"#EC6E2A",transparent:!0,opacity:.28,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.05,n.add(a)}return n.userData.tick=a=>{for(let c of n.children)c.userData.h&&(c.scale.y=.8+.35*Math.abs(Math.sin(a*6+c.userData.k)))},n}function fd(i=1){let t=new ue({color:"#FFD27A",transparent:!0,opacity:.9,depthWrite:!1}),e=new kt(new gn(i,1),t);return e.userData.at=n=>{e.scale.setScalar(.3+1.2*n),t.opacity=.9*(1-n)},e}function Xl(i=4){let t=new ue({color:"#F3E3C2",transparent:!0,opacity:.8,depthWrite:!1,side:ze}),e=new kt(new di(.86,1,48),t);return e.rotation.x=-Math.PI/2,e.userData.at=n=>{e.scale.setScalar(.4+i*n),t.opacity=.8*(1-n)},e}function pd(){let i=new te,t=new ue({color:"#EC6E2A",transparent:!0,opacity:.85}),e=new ue({color:"#FFD27A"}),n=new kt(new gn(.42,1),e);i.add(n);let s=[0,1,2,3].map(r=>{let o=new kt(new gn(.36-r*.07,1),t);return i.add(o),o});return i.userData.tail=s,i.userData.head=n,i}function Ke(i,t,e,n={}){var f,d;let s=i.map(g=>new L(...g)),r=s.length>2?new Pi(s,!1,"centripetal",.2):new vs(s[0],s[1]||s[0].clone().add(new L(0,.01,0))),o=r.getLength(),a=Math.max(8,Math.round(o*3)),c=[];if(n.dash){let[g,_]=n.dash,m=Math.max(1,Math.floor(o/(g+_)));for(let p=0;p<m;p++){let M=p*(g+_)/o,y=Math.min(1,(p*(g+_)+g)/o),x=[];for(let S=0;S<=4;S++)x.push(r.getPointAt(M+(y-M)*S/4));c.push(new bs(new Pi(x),4,t,6,!1))}}else c.push(new bs(r,a,t,7,!1));let l=new te,h=new ue({color:e,transparent:!!n.opacity,opacity:(f=n.opacity)!=null?f:1}),u=new ue({color:e,transparent:!0,opacity:(d=n.xray)!=null?d:.22,depthTest:!1,depthWrite:!1});for(let g of c){let _=new kt(g,h),m=new kt(g,u);m.renderOrder=5,l.add(_,m)}if(n.every){let g=new An(t*2.6,t*5,10);g.rotateX(Math.PI/2);let _=Math.max(1,Math.floor(o/n.every));for(let m=1;m<=_;m++){let p=Math.min(.999,(m-(n.last?0:.5))/_),M=r.getPointAt(p),y=r.getTangentAt(p);for(let x of[h,u]){let S=new kt(g,x);S.position.copy(M),S.lookAt(M.clone().add(y)),x===u&&(S.renderOrder=5),l.add(S)}}}return l.userData.length=o,l.userData.curve=r,l}function ec(i,t,e,n={}){var c,l;let s=new L(...i),r=new L(...t),o=s.clone().lerp(r,.5);o.y+=s.distanceTo(r)*((c=n.arc)!=null?c:.12);let a=[];for(let h=0;h<=10;h++){let u=h/10,f=s.clone().multiplyScalar((1-u)*(1-u)).add(o.clone().multiplyScalar(2*u*(1-u))).add(r.clone().multiplyScalar(u*u));a.push([f.x,f.y,f.z])}return Ke(a,(l=n.r)!=null?l:.12,e,{dash:n.dash,every:999,last:!0,xray:.3})}function nc(i,t){let e=document.createElement("div");e.className="bs-lay",t.appendChild(e);let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("aria-hidden","true"),n.style.cssText="width:100%;height:100%;overflow:visible;pointer-events:none;will-change:auto",e.appendChild(n);let s=[],r=new L,o=[];for(let m=8;m<=48;m+=8)o.push([0,-m],[0,m],[m,0],[-m,0]);let a="",c=".sbx-nda,.sbx-tb .grp,.sbx-tour,.sbx-hint,.sbx-cap,.sbx-x,.sbx-pop,.stg-cap,.stg-tl,.stg-next",l=[],h=-1e9,u=()=>{let m=t.getBoundingClientRect();l=[...t.querySelectorAll(c)].filter(p=>p.offsetWidth&&!p.hidden&&getComputedStyle(p).visibility!=="hidden"&&+getComputedStyle(p).opacity>.1).map(p=>{let M=p.getBoundingClientRect();return[M.left-m.left-3,M.top-m.top-3,M.right-m.left+3,M.bottom-m.top+3]})};function f(m,p,M,y){let x=document.createElement(y?"button":"span");y&&(x.type="button"),x.className=m,x.innerHTML=p,x.style.display="none",e.appendChild(x);let S={e:x,p:typeof M=="function"?null:new L(...M),fn:typeof M=="function"?M:null,on:!1,shown:!1,lab:/\bbs-lab\b/.test(m),w:0,h:0};return s.push(S),S}function d(m){let p=s.indexOf(m);p>=0&&s.splice(p,1),m.e.remove()}let g=m=>{m.shown&&(m.e.style.display="none",m.shown=!1)},_=(m,p,M)=>{m.e.style.transform=`translate(${p.toFixed(1)}px,${M.toFixed(1)}px)`};return i.onRender(m=>{let p=performance.now();p-h>400&&(u(),h=p);let M=t.clientWidth,y=t.clientHeight,x=l.slice(),S=[],E=[];for(let v of s){if(!v.on){g(v);continue}if(r.copy(v.fn?v.fn():v.p).project(m),r.z>1||r.z<-1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2){g(v);continue}v.shown||(v.e.style.display="",v.shown=!0);let R=(r.x+1)/2*M,U=(1-r.y)/2*y;(v.lab?S:E).push([v,R,U])}let w=(v,R,U)=>{let O=v.bw||(v.bw=v.e.offsetWidth);return O>40?[R-16,U-16,R-16+O,U+16]:[R-15,U-15,R+15,U+15]},I=v=>!x.some(R=>v[0]<R[2]&&v[2]>R[0]&&v[1]<R[3]&&v[3]>R[1]);E.sort((v,R)=>R[0].e.classList.contains("on")-v[0].e.classList.contains("on"));let b="";for(let[v,R,U]of E){let O=R,H=U,Z=w(v,R,U);if(!I(Z))for(let[F,j]of o){let C=w(v,R+F,U+j);if(C[0]>=0&&C[2]<=M&&C[1]>=0&&C[3]<=y&&I(C)){O=R+F,H=U+j,Z=C;break}}_(v,O,H),x.push(Z),Math.hypot(O-R,H-U)>13&&(b+=`<line x1="${R.toFixed(1)}" y1="${U.toFixed(1)}" x2="${O.toFixed(1)}" y2="${H.toFixed(1)}"/><circle cx="${R.toFixed(1)}" cy="${U.toFixed(1)}" r="3"/>`)}b!==a&&(a=b,n.innerHTML=b?`<g stroke="#1F2725" stroke-opacity=".75" stroke-width="1.5" fill="#D2872C">${b}</g>`:""),S.sort((v,R)=>R[2]-v[2]);for(let[v,R,U]of S){v.w||(v.w=v.e.offsetWidth,v.h=v.e.offsetHeight);let O=U;for(let H=0;H<10;H++){let Z=R-v.w/2,F=O-11-v.h,j=R+v.w/2,C=O-11,N=x.find(Y=>Z<Y[2]&&j>Y[0]&&F<Y[3]&&C>Y[1]);if(!N||N[1]+11-3-11-v.h<0)break;O=N[1]+11-3}x.push([R-v.w/2,O-11-v.h,R+v.w/2,O-11]),_(v,R,O)}}),{lay:e,add:f,remove:d,marks:s}}var ve={route:"#D2872C",hit:"#D2452F",shot:"#B5462F",knock:"#8B6B4A",aggro:"#C2412E",chase:"#B5462F",follow:"#3E9C90",move:"#D2872C",charge:"#B5462F",wall:"#7FAFD3",edge:"#5E93BF",zone:"#3E9C90",see:"#3F8F5E",blocked:"#C2412E",cam:"#2F6F8F",trig:"#D2872C"},W_=i=>String(i+1).padStart(2,"0"),yi=(i,t,e=0)=>[i,Qt(i,t)+e,t],md=i=>i.traverse(t=>{t.geometry&&t.geometry.dispose()});function _d(i,t=.18,e=1.2){let n=[];for(let s=0;s<i.length;s++){let r=i[s];if(s===0){n.push(yi(r[0],r[1],t));continue}let o=i[s-1],a=Math.max(1,Math.ceil(Math.hypot(r[0]-o[0],r[1]-o[1])/e));for(let c=1;c<=a;c++){let l=o[0]+(r[0]-o[0])*c/a,h=o[1]+(r[1]-o[1])*c/a;n.push(yi(l,h,t))}}return n}var X_=(i,t)=>{let e=i.map(n=>n.slice());for(;e.length>1&&t>0;){let n=e[e.length-1],s=e[e.length-2],r=Math.hypot(n[0]-s[0],n[1]-s[1]);if(r>t){let o=(r-t)/r;e[e.length-1]=[s[0]+(n[0]-s[0])*o,s[1]+(n[1]-s[1])*o];break}e.pop(),t-=r}return e},ti=(i,t,e,n={})=>{var s,r,o;return Ke(_d(i,(s=n.dy)!=null?s:.2),e,t,{every:(r=n.every)!=null?r:7,xray:(o=n.xray)!=null?o:.22,opacity:n.opacity,dash:n.dash})};function ql(i,t,e){let n=new te,s=e==="edge"?ve.edge:ve.wall;if(e==="off")return n.add(ti(i,s,.07,{dash:[.6,.5],every:0,xray:.15,dy:.12})),n;let r=[],o=_d(i,0,.8);for(let l=0;l<o.length-1;l++){let h=o[l],u=o[l+1],f=Math.min(h[1],u[1])-.2;r.push(h[0],h[1]-.2,h[2],u[0],u[1]-.2,u[2],u[0],u[1]+t,u[2],h[0],h[1]-.2,h[2],u[0],u[1]+t,u[2],h[0],h[1]+t,h[2])}let a=new be;a.setAttribute("position",new $t(r,3));let c=new kt(a,new ue({color:s,transparent:!0,opacity:e==="edge"?.2:.26,side:ze,depthWrite:!1}));c.renderOrder=3,n.add(c),n.add(Ke(o.map(l=>[l[0],l[1]+t,l[2]]),.06,s,{every:0,xray:.25}));for(let l=0;l<o.length;l+=3)n.add(Ke([[o[l][0],o[l][1],o[l][2]],[o[l][0],o[l][1]+t,o[l][2]]],.025,s,{every:0,xray:.15,opacity:.7}));return n}function Yl(i,t,e,n){let s=[];for(let o=0;o<=48;o++){let a=o/48*Math.PI*2;s.push([i+Math.cos(a)*e,t+Math.sin(a)*e])}let r=new te;return r.add(ti(s,ve.zone,n?.09:.07,{dash:[.8,.6],every:0,xray:.12,dy:.14})),r}var ic=new Ni;function gd(i,t,e){let n=new L(i[0],Qt(i[0],i[1])+i[2],i[1]),s=new L(t[0],Qt(t[0],t[1])+t[2],t[1]),r=null,o=240;for(let l=4;l<o;l++){let h=n.clone().lerp(s,l/o);if(Qt(h.x,h.z)>h.y){r=h;break}}if(!r&&e&&e.length){let l=s.clone().sub(n),h=l.length();ic.set(n,l.normalize()),ic.near=.05,ic.far=h-.05;let u=ic.intersectObjects(e,!1)[0];u&&(r=u.point.clone())}let a=new te,c=new kt(new Ui(.32,12,8),new ue({color:r?ve.blocked:ve.see}));if(c.position.copy(n),a.add(c),r){a.add(Ke([n.toArray(),r.toArray()],.09,ve.see,{every:0,xray:.3})),a.add(Ke([r.toArray(),s.toArray()],.07,ve.blocked,{dash:[.8,.7],every:0,xray:.35}));let l=new kt(new Li(.5),new ue({color:ve.blocked}));l.position.copy(r),a.add(l)}else a.add(Ke([n.toArray(),s.toArray()],.09,ve.see,{every:999,last:!0,xray:.35}));return{g:a,hit:r}}function q_(i,t){let e=new te,n=new ue({color:ve.cam}),s=new L(...i),r=new L(...t),o=r.clone().sub(s).normalize(),a=new kt(new Ze(1.1,.8,1.5),n);a.position.copy(s),a.lookAt(r),e.add(a);let c=new L(0,1,0),l=o.clone().cross(c).normalize(),h=l.clone().cross(o).normalize(),u=s.clone().addScaledVector(o,9),f=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([d,g])=>u.clone().addScaledVector(l,d*4).addScaledVector(h,g*2.4));for(let d of f)e.add(Ke([s.toArray(),d.toArray()],.05,ve.cam,{every:0,xray:.3}));return e.add(Ke([...f,f[0]].map(d=>d.toArray()),.05,ve.cam,{every:0,xray:.3})),e.add(Ke([s.toArray(),r.toArray()],.05,ve.cam,{dash:[.9,.9],every:0,xray:.25,opacity:.8})),e}function Y_(i,t,e){let n=new te,s=Qt(i,t),r=new rn({color:"#A3825C",roughness:.9});for(let a=0;a<9;a++){let c=a*2.4,l=e*(.4+.6*(a*.37%1)),h=new kt(new Ze(.32,.08,.18),r);h.position.set(i+Math.cos(c)*l,s+.1+a%3*.35,t+Math.sin(c)*l),h.rotation.set(a,a*.7,a*1.3),h.castShadow=!0,n.add(h)}let o=new kt(new di(e*.8,e,32),new ue({color:"#F3C76A",transparent:!0,opacity:.8,depthWrite:!1,side:ze}));return o.rotation.x=-Math.PI/2,o.position.set(i,s+.08,t),n.add(o),n}function xd(i,t,e={}){var j;let n=new te;n.name="show",i.scene.add(n);let s={route:new te,units:new te,fires:new te};n.add(s.route,s.units,s.fires);let r=()=>(i.world&&i.world.groups&&i.world.groups.props?i.world.groups.props.children:[]).filter(C=>C.isMesh&&!(C.material&&C.material.isMeshBasicMaterial)),o=nc(i,t),a=(j=e.scale)!=null?j:1.25,c=-1,l=-1,h={route:!0,marks:!0,units:!0,labels:!0},u=Bs.map(([C,N,Y],k)=>{let K=zs(Y,C+N);return K.position.set(C,Qt(C,N)+.4,N),s.fires.add(K),K.userData.tick});for(let C of u)C(1.3);let f=xi.map(C=>{let N=[];for(let Y of C.b)for(let k of Os[Y].path){let K=N[N.length-1];(!K||Math.hypot(K[0]-k[0],K[1]-k[1])>.05)&&N.push(k)}return N}),d=ti(Xi,ve.route,.26,{every:9});s.route.add(d);let g=ti(Xi,ve.route,.1,{every:0,xray:.06,opacity:.7});g.visible=!1,s.route.add(g);let _=!1,m=f.map(C=>{let N=C.length>1?ti(C,ve.route,.26,{every:8}):new te;return N.visible=!1,s.route.add(N),N}),p=(C,N,Y,k)=>o.add(C,N,Y,k),M=xi.map((C,N)=>{let Y=p("bs-phm",`<b>${N+1}</b><span>${(e.phaseNames||[])[N]||""}</span>`,yi(C.at[0],C.at[1],4.2),1);return Y.e.dataset.k=N,Y.e.addEventListener("click",k=>{k.stopPropagation(),e.onPhase&&e.onPhase(N)}),Y}),y=Os.map((C,N)=>{let Y=p("bs-pin",`<span>${W_(N)}</span>`,yi(C.p[0],C.p[1],4.6),1);return Y.e.dataset.i=N,Y.e.title=(e.names||[])[N]||"",Y.e.addEventListener("click",k=>{k.stopPropagation(),e.onPick&&e.onPick(N)}),Y}),x=[],S=()=>{M.forEach((C,N)=>{C.on=h.marks&&c<0,C.e.classList.toggle("on",N===c)}),y.forEach((C,N)=>{let Y=c>=0&&xi[c].b.includes(N);C.on=h.marks&&Y&&N!==l,C.e.classList.toggle("on",N===l),C.e.setAttribute("aria-pressed",N===l)});for(let C of x)C.on=h.labels;i.invalidate()},E=[],w=(C,N)=>Math.atan2(N[0]-C[0],N[2]-C[2]);function I(){for(let C of[...s.units.children])s.units.remove(C),md(C);for(let C of x)o.remove(C);x=[],E=[],i.ambient=!1}let b=(C,N,Y,k,K,tt,G)=>{let J=tc(C),B=yi(N,Y);return J.root.position.set(...B),J.root.rotation.y=w(B,[k,0,K]),J.root.scale.setScalar(C==="k"?1.15:a),J.pose(tt||"idle"),J.ring.visible=tt!=="dead"&&tt!=="knocked",tt==="knocked"&&(J.root.position.y+=.5),s.units.add(J.root),["run","walk","slash"].includes(tt)&&G.push(X=>J.pose(tt,X+N)),J};function v(C){var k,K;if(I(),C<0)return;let N=Os[C],Y=[];if(N.ghost&&s.units.add(ti(N.ghost,ve.route,.16,{every:0,opacity:.45,xray:.12})),N.path.length>1){let tt=N.path.reduce((G,J,B)=>B?G+Math.hypot(J[0]-N.path[B-1][0],J[1]-N.path[B-1][1]):0,0);tt>2.5&&s.units.add(ti(X_(N.path,1.1),ve.route,.14,{every:tt>7?6:0,xray:.14,opacity:.8}))}N.alt&&s.units.add(ti(N.alt,ve.route,.2,{dash:[.9,.7],every:0,xray:.3})),b("p",N.p[0],N.p[1],N.pl[0],N.pl[1],N.pose||"idle",Y);for(let[tt,G,J,B,X,it]of N.u||[])b(tt,G,J,B,X,it,Y);for(let[tt,G,J]of N.ar||[]){let B=yi(tt[0],tt[1],(k=tt[2])!=null?k:1),X=yi(G[0],G[1],(K=G[2])!=null?K:1),it=["shot","aggro","chase","follow","move","charge"].includes(J)?[.8,.5]:null;s.units.add(ec(B,X,ve[J]||ve.hit,{dash:it,r:J==="charge"?.2:.13,arc:J==="shot"?.1:J==="knock"?.25:.03}))}for(let[tt,G,J]of N.walls||[])s.units.add(ql(tt,G,J));for(let[tt,G,J,B]of N.zone||[])s.units.add(Yl(tt,G,J,B==="hit"));N.sight&&s.units.add(gd(...N.sight,r()).g),N.camg&&s.units.add(q_(...N.camg)),N.trig&&s.units.add(ti(N.trig,ve.trig,.1,{dash:[.6,.4],every:0,xray:.3,dy:.1}));for(let[tt,G,J,B]of N.fx||[])if(tt==="fire"){if(Bs.some(it=>Math.hypot(it[0]-G,it[1]-J)<.1))continue;let X=zs(B,G+J);X.position.set(G,Qt(G,J)+.9,J),s.units.add(X),Y.push(X.userData.tick)}else tt==="burst"&&s.units.add(Y_(G,J,B));for(let[tt,G,J,B,X]of N.lab||[])x.push(p("bs-lab k-"+(X||"note"),(X==="item"?"<i>\u25C6</i>":"")+tt,yi(G,J,B)));Y.push(...u),E=Y,i.ambient=!0}i.onFrame((C,N)=>{for(let Y of E)Y(N)});let R=C=>{let N=t.clientWidth/Math.max(1,t.clientHeight),Y=N<1.25?Math.pow(1.25/N,.75):1;return{...C,r:C.r*Y}};function U(C,N){i.setView(R(C),N),i.animUntil=performance.now()+1600}function O(C,N={}){c=C,l=-1,v(-1),_=!1,d.visible=h.route&&C<0,g.visible=!1,m.forEach((Y,k)=>{Y.visible=h.route&&k===C}),i.setMode("full"),N.fly!==!1&&U(C<0?Ns.ov:xi[C].cam,N.instant),S()}function H(C,N={}){if(C<0){O(c,{fly:!1});return}let Y=xi.findIndex(K=>K.b.includes(C));c=Y,l=C;let k=Os[C];i.setMode(k.mode||"full"),_=!1,d.visible=!1,g.visible=!1,m.forEach(K=>{K.visible=!1}),v(C),s.units.visible=h.units,N.fly!==!1&&U(k.cam||xi[Y].cam,N.instant),S()}function Z(C){c=-1,l=-1,v(-1),_=!0,d.visible=!1,g.visible=h.route,m.forEach(it=>{it.visible=!1});let N=[],Y=Qt(C.x,C.z),k=Math.hypot(C.fx,C.fz)||1,K=C.fx/k,tt=C.fz/k;b("p",C.x,C.z,C.x+K,C.z+tt,"idle",N),s.units.add(gd([C.x,C.z,1.7],[Yt.x,Yt.z,2.25],r()).g),N.push(...u),E=N,i.ambient=!0,s.units.visible=!0,i.setMode("full");let G=[C.x-K*6.5-tt*1,Y+3,C.z-tt*6.5+K*1],J=[C.x+K*12,Y+1,C.z+tt*12],B=[G[0]-J[0],G[1]-J[1],G[2]-J[2]],X=Math.hypot(...B);U({t:J,r:X,ph:Math.acos(B[1]/X),th:Math.atan2(B[0],B[2]),fov:50},C.instant),S(),M.forEach(it=>{it.on=!1}),i.invalidate()}function F(C,N){h[C]=N,C==="route"&&(d.visible=N&&c<0&&!_,g.visible=N&&_,m.forEach((Y,k)=>{Y.visible=N&&k===c&&l<0})),C==="units"&&(s.units.visible=N),S(),i.invalidate()}return O(-1,{fly:!1}),{setPhase:O,setBeat:H,setLayer:F,probe:Z,overview:C=>O(-1,C||{}),get phase(){return c},get beat(){return l},phases:xi.length,beats:Os.length,dispose(){I(),o.lay.remove(),i.scene.remove(n),md(n)}}}function Ve(){let i=[],t=0,e=0,n=0,s=0,r=(a,c)=>+(Qt(a,c)+.02+s).toFixed(3),o={lift(a){return s=a,o},at(a,c,l,h="idle",u){return t=a,e=c,n=l,i.push([t,e,r(e,n),n,h,u]),o},to(a,c="idle",l){return t=Math.max(t,a),i.push([t,e,r(e,n),n,c,l]),o},go(a,c=5,l="run",h){for(let u of a){let f=Math.hypot(u[0]-e,u[1]-n),d=Math.max(1,Math.ceil(f/1.5)),g=e,_=n,m=t;for(let p=1;p<=d;p++)e=g+(u[0]-g)*p/d,n=_+(u[1]-_)*p/d,t=+(m+f/c*p/d).toFixed(3),i.push([t,e,r(e,n),n,l,p===d?h:void 0])}return o},mv(a,c,l,h,u){return t=a,e=c,n=l,i.push([t,e,r(e,n),n,h,u]),o},get t(){return t},keys:i};return o}var ae=(i,t,e=0)=>Qt(i,t)+e,Z_=(()=>{let i=Ve().at(0,1.5,3.2,"idle",{face:[8,3]}).to(2.9,"idle",{face:[8,3]}).go([[6,2.6],[11,2.2],[15,2],[18.2,2.4]],6.2,"run").to(5.75,"slash",{face:[19.6,2.4]}).to(6.55,"slash").to(6.6,"idle").go([[14,2.4],[10.4,2.6]],6.2,"run").to(8.05,"slash",{face:[10.9,1.8]}).to(8.85,"slash").to(8.95,"idle",{face:[9.6,3.2]}).go([[9.8,3]],3,"walk").to(9.55,"slash",{face:[8.4,4]}).to(10.4,"slash").to(12.4,"idle",{face:[6.9,4.8]}),t=Ve().at(0,7.2,1.6,"idle",{face:[1.5,3.2]}).to(2.6,"idle").to(3.2,"draw").go([[9.6,2],[12.6,2.2]],4.6,"run").to(5.9,"idle",{face:[18.2,2.4]}).to(6.6,"draw").go([[11.2,1.9]],3.4,"run").to(8,"slash",{face:[10.4,2.6]}).to(8.85,"slash",{face:[10.4,2.6]}).mv(9.3,9.1,1.4,"knocked",{arc:1.3}).to(9.35,"dead").to(12.4,"dead"),e=Ve().at(0,8.4,4.4,"idle",{face:[1.5,3.2]}).to(2.7,"idle").to(3.3,"draw").go([[11,2.9],[13.4,2.6]],4.4,"run").to(6.4,"idle",{face:[18.2,2.4]}).go([[10.6,2.9],[8.4,3.6]],3.6,"run").to(9.5,"slash",{face:[9.8,3]}).to(10.4,"slash",{face:[9.8,3]}).mv(10.85,6.9,4.8,"knocked",{arc:1.1}).to(10.9,"dead").to(12.4,"dead"),n=Ve().at(0,19.6,2.4,"idle",{face:[1.5,3.2]}).to(2.8,"idle").to(3,"shoot").to(5.4,"shoot").to(5.6,"idle",{face:[18.2,2.4]}).to(6.5,"idle").to(6.6,"dead").to(12.4,"dead");return{dur:12.4,mode:"full",act:{p:{k:"p",keys:i.keys},m1:{k:"s",keys:t.keys},m2:{k:"s",keys:e.keys},r:{k:"r",keys:n.keys}},proj:[[3.1,3.6,["r",1.5],["p",1.2],"shot",.04],[4.3,4.75,["r",1.5],["p",1.2],"shot",.04],[5.1,5.45,["r",1.5],["p",1.2],"shot",.03]],fx:[[5.85,6.15,"spark","r",1.3,null,.8],[6.3,6.6,"spark","r",1.3,null,.9],[8.2,8.5,"spark","m1",1.3,null,.7],[9.25,11.2,"burst",9,0,1.4,1.2],[10.8,12.4,"burst",6.9,0,4.8,1]],lab:[[.2,2.5,"\u5F00\u573A\uFF1A\u9AD8\u673A\u4F4D\u770B\u6EAA\u8C37\u5168\u666F",22,ae(22,-1,9),-1,"note"],[2.6,4.6,"\u8FD1\u5904\u4E24\u540D\u8FD1\u6218\u62D4\u5200","m1",2.9,null,"warn"],[3,5.6,"\u5761\u4E0A\u7684\u8FDC\u7A0B\u58EB\u5175","r",2.9,null,"warn"],[3.3,5.7,"\u5148\u6253\u8FDC\u7A0B","p",2.9,null,"note"],[9.2,10.6,"\u51FB\u98DE\uFF0C\u649E\u788E\u7BB1\u5B50",9,ae(9,1.4,2.6),1.4,"item"],[10.8,12.4,"\u649E\u788E\u9676\u7F50",6.9,ae(6.9,4.8,2.4),4.8,"item"]],cam:[[0,{t:[30,2,-2],r:82,ph:.74,th:-1.28}],[1.6,{t:[22,2,-1],r:62,ph:.82,th:-1.32}],[2.8,{t:[6.5,2.6,3],r:11,ph:1.24,th:-1.56}],[3.8,{f:"p",look:[19.6,2.4],back:8,up:3.4,ahead:4}],[5.8,{f:"p",look:[19.6,2.4],back:7,up:3.4,ahead:3}],[7.4,{f:"p",look:[9.6,2.6],back:7.5,up:3.8,ahead:2,side:1.5}],[9,{f:"p",look:[8,4.4],back:7,up:3.8,ahead:1.5,side:1.5}],[12.4,{f:"p",look:[7,4.8],back:7.5,up:4,ahead:1.5,side:1.5}]],shake:[[9.25,9.6,.18],[10.8,11.1,.15]],ch:[0,2.6,3.4,7.9],ctl:[[0,"anim"],[2.8,"play"]],sb:{x0:-4,x1:26,z0:-10,z1:10,y0:-2,y1:10}}})(),Pe=[48.6,-4.2],yn=[[46.8,-2.3],[50.3,-2.6],[49.6,-6.2],[46.6,-5.6]],ks={t:[49.5,2.2,-6],r:15.4,ph:1.05,th:-1.11},Hs={f:"p",look:Pe,back:7.5,up:4,ahead:3},J_=(()=>{let i=[[52.2,-7.4],[51,-5.8],[53.6,-5.6],[53,-8.2],[50.4,-7.4]],t=Ve().at(0,...Pe,"cast",{face:yn[0]}).mv(4.3,...i[0],"cast",{face:i[1]}).at(4.4,...Pe,"cast",{face:yn[0]}).to(8.7,"cast").at(8.8,...Pe,"cast",{face:yn[1]}).to(10.5,"cast").to(10.6,"dead").to(13.2,"dead"),e=yn.map((r,o)=>Ve().at(0,...r,"slash",{face:Pe}).mv(4.3,...i[o+1],"slash",{face:i[0]}).at(4.4,...r,"slash",{face:Pe}).to(8.7,"slash",{face:Pe}).at(8.8,...r,"slash",{face:Pe}).to(10.6,"slash",{face:Pe}).to(10.7,"idle",{face:Pe}).to(13.2,"idle")),s={p:{k:"p",keys:Ve().at(0,40,-1,"idle",{hide:1}).at(4.4,39.6,-.8,"walk",{show:1,face:[45,-2.6]}).go([[45.4,-2.4]],2.8,"walk").to(8.7,"idle",{face:yn[0]}).at(8.8,39.6,-.8,"idle",{hide:1}).at(11,39.6,-.8,"walk",{show:1}).go([[44.8,-2.4]],3.2,"walk").to(13.2,"idle",{face:Pe}).keys},w:{k:"a",keys:t.keys}};return e.forEach((r,o)=>{s["s"+o]={k:"s",keys:r.keys}}),{dur:13.2,mode:"full",act:s,fx:[[0,4.4,"ring",He.x,He.z,6]],hp:[["w",[[0,.9],[4.39,.62],[4.4,.82],[8.79,.58],[8.8,.62],[10.6,0],[13.2,0]],"\u672F\u58EB","ally"]],lab:[[.3,4.3,"\u9884\u671F\u7684\u6218\u6597\u4F4D\u7F6E",He.x-4,ae(He.x-4,He.z+3,1.2),He.z+3,"note"],[1.4,4.3,"\u81EA\u7136\u6218\u6597\uFF1A\u4F4D\u79FB\u8DD1\u504F",52.4,ae(52.4,-8.6,3.6),-8.6,"warn"],[6.2,8.7,"\u4EC7\u6068\u8FC7\u9AD8\uFF1A\u6CA1\u6709\u58EB\u5175\u7406\u4F1A\u73A9\u5BB6","p",3,null,"warn"],[11.6,13.2,"\u8D70\u8FC7\u6765\u65F6\uFF0C\u672F\u58EB\u5DF2\u7ECF\u5012\u4E0B",48.6,ae(48.6,-4.2,2.8),-4.2,"warn"]],mask:[[4.3,4.5,"\u73A9\u5BB6\u8D70\u8FD1\u65F6"],[8.7,8.9,"\u53E6\u4E00\u79CD\u60C5\u51B5\uFF1A\u73A9\u5BB6\u5728\u8D77\u70B9\u505C\u7559\u4E86\u5F88\u4E45"]],cam:[[0,ks],[4.3,ks],[4.4,Hs],[8.7,Hs],[8.8,ks],[11,ks],[11.8,Hs],[13.2,Hs]],ch:[0,4.4,8.8],ctl:[[0,"play"]],sb:{x0:36,x1:60,z0:-16,z1:8,y0:-3,y1:8}}})(),$_=(()=>{let i=[[49.8,-6.6],[51.6,-3.6],[50.4,-7],[47.4,-6.8]],t=Ve().at(0,...Pe,"cast",{face:yn[0]}).mv(2,49.6,-5.2,"cast",{face:yn[1]}).mv(4,...Pe,"cast",{face:yn[0]}).to(9.4,"cast",{face:yn[0]}).to(10.4,"cast",{face:[50.3,-2.6]}).to(13.7,"cast",{face:yn[2]}).to(14.2,"idle",{face:[52,-2]}).go([[50.4,-3],[52.4,-2.4]],3.4,"run").to(16,"idle",{face:pt(1,0)}),e=[12.4,13,13.6,14.2],n=yn.map((o,a)=>Ve().at(0,...o,"slash",{face:Pe}).mv(2,...i[a],"slash",{face:Pe}).mv(4,...o,"slash",{face:Pe}).to(9.2,"slash",{face:Pe}).to(9.5,"idle",{face:[43.6,-2.8]}).go([[45.6+a%2*.6,-2.8+(a-1.5)*.9]],3.2,"run").to(e[a]-.1,"slash",{face:[43.6,-2.8]}).to(e[a],"dead").to(16,"dead")),r={p:{k:"p",keys:Ve().at(0,36.4,.8,"idle",{hide:1}).at(8,36.4,.8,"run",{show:1,face:[43.6,-2.8]}).go([[43.6,-2.8]],4.6,"run").to(9.8,"idle",{face:yn[0]}).to(10.6,"slash",{face:[45.8,-3.6]}).to(14.2,"slash",{face:[46.2,-2.2]}).to(14.4,"idle").go([[49,-2.8],[52.2,-2.4],pt(1,-2.6),pt(1,0)],4.4,"run").to(16,"idle",{face:pt(1,2.6)}).keys},w:{k:"a",keys:t.keys}};return n.forEach((o,a)=>{r["s"+a]={k:"s",keys:o.keys}}),{dur:16,mode:"full",act:r,fx:[[0,9.6,"wall",ja,3,0,0,.6],[0,16,"ring",He.x,He.z,9.5]],hp:[["w",[[0,.9,""],[4,.82,""],[5.6,.3,"lock"],[8.99,.3,"lock"],[9,.3,"free"],[11.6,.3,"free"],[11.61,.3,""],[16,.3,""]],"\u672F\u58EB","ally"]],arr:[[9.2,10.8,[50.3,ae(50.3,-2.6,.6),-2.6],[44.4,ae(44.4,-2.8,.6),-2.8],"aggro"],[9.2,10.8,[46.6,ae(46.6,-5.6,.6),-5.6],[44.2,ae(44.2,-3.3,.6),-3.3],"aggro"],[9.2,10.8,[49.6,ae(49.6,-6.2,.6),-6.2],[44.6,ae(44.6,-3.2,.6),-3.2],"aggro"],[14.3,16,[48.6,ae(48.6,-4.2,.3),-4.2],[51.8,ae(51.8,-2.6,.3),-2.6],"follow"]],lab:[[.3,3.9,"\u9690\u5F62\u7A7A\u6C14\u5899\uFF1A\u53AE\u6740\u7559\u5728\u5E73\u5730\u4E0A",43.6,ae(43.6,-7.6,3.4),-7.6,"item"],[5.6,8.6,"\u9760\u8FD1\u524D\u9501\u8840\uFF1A\u600E\u4E48\u6253\u90FD\u4E0D\u4F1A\u5012","w",3.9,null,"item"],[8.3,9.6,"\u8FDB\u5165\u8303\u56F4","p",2.9,null,"note"],[9.3,11.6,"\u7A7A\u6C14\u5899\u6D88\u5931 \xB7 \u9501\u8840\u89E3\u9664 \xB7 \u624B\u52A8\u52A0\u4EC7\u6068","p",3.2,null,"warn"],[14.4,16,"\u672F\u58EB\u8DDF\u968F\u52A9\u6218","w",3.2,null,"note"]],mask:[[3.9,4.2,"\u73A9\u5BB6\u5728\u8D77\u70B9\u505C\u7559\u4E86\u5F88\u4E45"],[7.85,8.1,"\u73A9\u5BB6\u8D70\u8FC7\u6765"]],cam:[[0,ks],[7.9,ks],[8.8,Hs],[12,Hs],[14.4,{f:"p",look:pt(1,0),back:8.5,up:4.5,ahead:4}],[16,{f:"p",look:pt(1,2.6),back:7.5,up:4.2,ahead:4}]],ch:[0,4,8,12],ctl:[[0,"play"]],sb:{x0:34,x1:60,z0:-16,z1:8,y0:-3,y1:8}}})(),K_=(()=>{let i=[[83,-3.6],[84.2,1.4],[81.4,3.2],[85.8,-1],[82.4,-6.2],[86.8,3.8]],t=[[82.2,-2.2],[82.4,.6],[80.8,1.6],[82.8,-.6],[80.6,-2.8],[79.2,.4]],e=[5.2,6.2,7.2,8.2,99,99],n=i.map((u,f)=>{let d=Ve().at(0,u[0]+3,u[1],"idle",{face:pt(2,3.4)}).to(3.6,"idle").go([t[f]],4.2,"run").to(Math.min(e[f],15)-.1,"slash",{face:[80.6,-.8]});return e[f]<99?d.to(e[f],"dead").to(15,"dead"):d.to(15,"slash",{face:[80.6,-.8]}),d}),s=Ve().at(0,...pt(2,.2),"walk",{face:pt(2,3)}).go([pt(2,3)],2.33,"walk").go([pt(2,3.8,-.4)],1.4,"walk").to(3.6,"idle",{face:[86,-1]}).go([[75.8,-6.2],[78.6,-5.2],[80.6,-.8]],4.6,"run").to(8.3,"slash",{face:[82.4,-1]}).to(11.5,"slash",{face:[84.6,-1.4]}).to(11.9,"shoot",{face:[79.6,9.6]}).to(12.4,"shoot").to(15,"slash",{face:[84.6,-1.4]}),r=Ve().lift(.75).at(0,Yt.x,Yt.z,"idle",{face:pt(2,3.4)}).to(8.3,"idle",{face:[80.6,-.8]}).lift(0).go([[99,-2.4],[84.8,-1.4]],6.4,"run").to(15,"slash",{face:[80.6,-.8]}),o=Ve().at(0,...Kn,"idle",{face:[80,-1]}).to(8.4,"idle").go([[84.2,-3.6]],6.4,"run").to(15,"slash",{face:[80.6,-.8]}),a=Ve().at(0,...Qn,"idle",{face:[80,-1]}).to(8.5,"idle").go([[84,2]],6.4,"run").to(15,"slash",{face:[80.6,-.8]}),c={p:{k:"p",keys:s.keys},b:{k:"k",keys:r.keys},e1:{k:"e",keys:o.keys},e2:{k:"e",keys:a.keys}};n.forEach((u,f)=>{c["s"+f]={k:"s",keys:u.keys}});let l=[79.6,9.6],h=[84.6,10.8];return{dur:15,mode:"full",act:c,fx:[...Bs.map(([u,f,d])=>[0,15,"fire",u,0,f,d]),[12.4,15,"fire",l[0],0,l[1],1.5],[12.9,15,"fire",h[0],0,h[1],1.3],[12.35,12.7,"spark",l[0],ae(...l,1),l[1],1.4]],proj:[[11.95,12.4,["p",1.4],[l[0],ae(...l,.6),l[1]],"fire",.12]],hp:[["b",[[0,0,"","\u89C2\u6218"],[5.2,.17,"","\u89C2\u6218"],[6.2,.33,"","\u89C2\u6218"],[7.2,.5,"","\u89C2\u6218"],[8.2,.67,"go","\u53C2\u6218"],[15,.67,"go","\u53C2\u6218"]],"\u58EB\u5175\u4F24\u4EA1","foe"]],arr:[[8.3,10.4,[Yt.x,ae(Yt.x,Yt.z,.5),Yt.z],[85.4,ae(85.4,-1.4,.5),-1.4],"dash"],[8.4,10.4,[Kn[0],ae(...Kn,.4),Kn[1]],[84.8,ae(84.8,-3.6,.4),-3.6],"dash"],[8.5,10.4,[Qn[0],ae(...Qn,.4),Qn[1]],[84.6,ae(84.6,2,.4),2],"dash"]],lab:[[.3,1.4,"\u8FDB\u5165\u7EC8\u70B9\u573A\u5730","p",2.9,null,"note"],[3.8,8.2,"Boss \u5728\u5CA9\u53F0\u4E0A\u89C2\u6218","b",4.4,null,"warn"],[4,7.6,"\u4E00\u7FA4\u58EB\u5175\u56F4\u653B\u73A9\u5BB6",83.6,ae(83.6,-1,3.2),-1,"note"],[8.3,10.6,"\u4F24\u4EA1\u5230\u4E00\u5B9A\u6BD4\u4F8B\uFF1ABoss \u548C\u968F\u4ECE\u52A0\u5165",92,ae(92,-2.4,4),-2.4,"warn"],[12.5,15,"\u706B\u70B9\u71C3\u5468\u56F4\u7684\u53EF\u71C3\u7269",82,ae(82,10.2,3.4),10.2,"warn"],[1.6,3.4,"\u5012\u6811\u548C\u71C3\u70E7\u7684\u9A6C\u8F66\u5835\u4F4F\u51FA\u53E3",110,ae(110,-1,4.4),-1,"item"]],mask:[[1.25,3.5,"\u7B80\u77ED\u7684\u8FC7\u573A\u52A8\u753B","lb"]],cam:[[0,{f:"p",look:pt(2,8),back:6,up:3.4,ahead:4}],[1.19,{f:"p",look:pt(2,8),back:6,up:3.4,ahead:4}],[1.2,{t:[92,1,-2],r:50,ph:1.1,th:-1.75}],[3.2,{t:[104,2,-2.6],r:20,ph:1.08,th:-1.28}],[3.55,{t:[104,2,-2.6],r:19,ph:1.08,th:-1.28}],[3.6,{f:"p",look:[Yt.x,Yt.z],back:8,up:4,ahead:5}],[8.2,{f:"p",look:[Yt.x,Yt.z],back:8.5,up:4.5,ahead:5}],[11.4,{f:"p",look:[90,-2],back:9,up:4.5,ahead:4}],[12.2,{f:"p",look:[90,6],back:9,up:6,ahead:3,side:2}],[15,{f:"p",look:[90,6],back:9.5,up:6.4,ahead:3,side:2}]],ch:[0,3.6,8.2,11.6],ctl:[[0,"play"],[1.2,"anim"],[3.6,"play"]],sb:{x0:66,x1:116,z0:-24,z1:16,y0:-3,y1:9}}})(),Qi={open:Z_,ally0:J_,ally1:$_,final:K_};var Zl={fire:"#EC6E2A",throw:"#8B6B4A",atk:"#D2452F",dash:"#C2412E",fix:"#4F7FA6",route:"#D2872C",aggro:"#C2412E",follow:"#3E9C90",shot:"#B5462F"},Ge=i=>Math.max(0,Math.min(1,i)),vd=i=>i*i*(3-2*i),vi=(i,t,e)=>i+(t-i)*e,Md=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*e},Q_=["fall","fly","held"];function j_(i){let t=[],e=0;return i.forEach((n,s)=>{let r=n[5]||{};if(r.face!=null)e=typeof r.face=="number"?r.face:Math.atan2(r.face[0]-n[1],r.face[1]-n[3]);else if(s>0){let o=i[s-1],a=n[1]-o[1],c=n[3]-o[3];Math.hypot(a,c)>.05&&(e=Math.atan2(a,c))}t.push(e)}),n=>{let s=i.length,r=0;for(;r<s&&i[r][0]<=n;)r++;let o=!0;for(let d=0;d<r;d++){let g=i[d][5];g&&g.hide&&(o=!1),g&&g.show&&(o=!0)}if(r===0)return{x:i[0][1],y:i[0][2],z:i[0][3],pose:i[0][4],yaw:t[0],vis:o,air:!1};if(r>=s){let d=i[s-1];return{x:d[1],y:d[2],z:d[3],pose:d[4],yaw:t[s-1],vis:o,air:!1}}let a=i[r-1],c=i[r],l=c[5]||{},h=c[0]-a[0],u=h>0?Ge((n-a[0])/h):1;l.ease&&(u=vd(u));let f=vi(a[2],c[2],l.fall?u*u:u);return l.arc&&(f+=4*l.arc*u*(1-u)),{x:vi(a[1],c[1],u),y:f,z:vi(a[3],c[3],u),pose:c[4],yaw:Md(t[r-1],t[r],Ge((n-a[0])/.2)),vis:o,air:!!(l.arc||l.fall)}}}function tx(i,t,e=n=>n){var u,f;let n=0;for(;n<i.length&&i[n][0]<=t;)n++;if(n===0)return e(i[0][1],t);if(n>=i.length)return e(i[i.length-1][1],t);let[s,r]=i[n-1],[o,a]=i[n],c=vd(Ge((t-s)/(o-s))),l=e(r,t),h=e(a,t);return{t:l.t.map((d,g)=>vi(d,h.t[g],c)),r:Math.exp(vi(Math.log(l.r),Math.log(h.r),c)),ph:vi(l.ph,h.ph,c),th:Md(l.th,h.th,c),fov:vi((u=l.fov)!=null?u:yd,(f=h.fov)!=null?f:yd,c)}}var Hr=(i,t,e)=>i>=t&&i<e,yd=30,ex=50;function bd(i,t,e={}){let n=nc(i,t),s=new te;s.name="stage",i.scene.add(s);let r=document.createElement("div");r.className="bs-mask",r.innerHTML="<span></span>",t.appendChild(r);let o=null,a=null,c=0,l=!1,h=!0,u="",f="",d=0,g={},_=[],m=[],p=[],M=[],y=[],x=null,S=(F,j=0)=>typeof F=="string"?()=>{let C=g[F];return new L(C.F.root.position.x,C.F.root.position.y+j,C.F.root.position.z)}:null,E=(F,j=0)=>{if(typeof F!="string")return new L(...F);let C=g[F];return new L(C.F.root.position.x,C.F.root.position.y+j,C.F.root.position.z)};function w(){for(let F of[...s.children])s.remove(F),F.traverse(j=>{j.geometry&&j.geometry.dispose()});for(let F of M)n.remove(F.m);for(let F of y)n.remove(F.m);g={},_=[],m=[],p=[],M=[],y=[],x=null,u="",f=""}function I(){var j;let F=(j=o.scale)!=null?j:1.2;for(let[C,N]of Object.entries(o.act)){let Y=tc(N.k);Y.root.scale.setScalar(N.k==="k"?1.15:F),s.add(Y.root),g[C]={F:Y,at:j_(N.keys)}}if(o.route!==!1&&o.act.p){let C=[[]];o.act.p.keys.forEach((N,Y)=>{let k=N[5]||{};k.cut&&C.push([]);let K=C[C.length-1],tt=K[K.length-1];(!tt||Math.hypot(tt[0]-N[1],tt[1]-N[2]-.12,tt[2]-N[3])>.05)&&K.push([N[1],N[2]+.12,N[3],Y&&(k.arc||k.fall)?1:0])}),x=new te,s.add(x);for(let N of C)N.length>1&&x.add(Ke(N.map(Y=>Y.slice(0,3)),.14,Zl.route,{every:7,xray:.06,opacity:.5}))}for(let C of o.fx||[]){let[N,Y,k,K,tt,G,J]=C,B=null;if(k==="fire")B=zs(J||1.5,(typeof K=="number"?K:3)+(G||0));else if(k==="flame")B=zs(J||.8,5,{spot:!1});else if(k==="spark")B=fd(J||1);else if(k==="shock")B=Xl(J||4);else if(k==="wall")B=ql(K,tt||3,"on"),B.userData.mats=[],B.traverse(X=>{X.material&&(B.userData.mats.push([X.material,X.material.opacity]),X.material.transparent=!0)});else if(k==="ring")B=Yl(K,tt,G,!1);else if(k==="burst"){B=new te;let X=new rn({color:"#A3825C",roughness:.9}),it=[];for(let ht=0;ht<10;ht++){let wt=new kt(new Ze(.34,.1,.2),X);wt.castShadow=!0,B.add(wt),it.push([wt,ht*2.4,(J||1)*(.5+.6*(ht*.37%1)),1.2+ht%4*.5])}B.userData.pcs=it;let ut=Xl(J?J*2:2);B.add(ut),B.userData.ring=ut}B&&(k==="burst"?B.position.set(K,Qt(K,G),G):k==="ring"||k==="wall"||typeof K=="number"&&B.position.set(K,k==="fire"?Qt(K,G)+.3:tt,G),B.visible=!1,s.add(B),_.push({t0:N,t1:Y,kind:k,g:B,ref:typeof K=="string"?K:null,dy:typeof K=="string"?tt:0,fade:C[7]}))}for(let[C,N,Y,k,K,tt]of o.proj||[]){let G=pd();(K==="throw"||K==="shot")&&(G.userData.head.material=new rn({color:K==="shot"?"#4A3A2C":"#8B6B4A"}),K==="shot"&&G.userData.head.scale.set(.45,.45,.45),G.userData.tail.forEach(J=>{J.visible=!1})),G.visible=!1,s.add(G),m.push({t0:C,t1:N,from:Y,to:k,arc:tt!=null?tt:.15,g:G})}for(let[C,N,Y,k,K,tt]of o.arr||[]){let G=K==="dash"||K==="fix"?[.9,.5]:null,J=Zl[K]||Zl.atk,B=Array.isArray(Y[0])?Ke(Y,.2,J,{dash:G,every:999,last:!0,xray:.3}):ec(Y,k,J,{dash:G,r:K==="dash"?.2:.14,arc:G?.04:.12,...tt||{}});B.visible=!1,s.add(B),p.push({t0:C,t1:N,g:B})}for(let C of o.lab||[]){let[N,Y,k,K,tt,G,J]=C,B=J==="qte",X=n.add("bs-lab k-"+(J||"note"),(J==="item"||B?"<i>\u25C6</i>":"")+k+(B?"<s></s>":""),typeof K=="string"?S(K,tt):[K,tt,G]);M.push({t0:N,t1:Y,m:X,q:B})}for(let[C,N,Y,k]of o.hp||[]){let K=n.add("bs-lab k-hp"+(k?" c-"+k:""),`<em>${Y}</em><s><u></u></s><b></b>`,S(C,3.1));y.push({m:K,keys:N,ref:C})}}function b(){if(!o)return;let F=c,j=o.mode||"full";for(let[k,K]of o.modes||[])F>=k&&(j=K);j!==f&&(f=j,i.setMode(j));for(let k of Object.values(g)){let K=k.at(F),tt=k.F;tt.root.visible=K.vis,tt.root.position.set(K.x,K.y,K.z),tt.root.rotation.y=K.yaw,tt.pose(K.pose||"idle",F),tt.ring.visible=!Q_.includes(K.pose)&&!K.air}for(let k of _){let K=Hr(F,k.t0,k.t1);if(k.g.visible=K,!K)continue;let tt=F-k.t0,G=k.g;if(k.ref){let J=E(k.ref,k.dy);G.position.copy(J)}if(k.kind==="fire"||k.kind==="flame"||k.kind==="aura"||k.kind==="drip")G.scale.setScalar(.25+.75*Ge(tt/.4)),G.userData.tick&&G.userData.tick(F);else if(k.kind==="spark"||k.kind==="shock")G.userData.at(Ge(tt/(k.t1-k.t0)));else if(k.kind==="wall"){let J=k.fade?1-Ge((F-(k.t1-k.fade))/k.fade):1;for(let[B,X]of G.userData.mats)B.opacity=X*J}else if(k.kind==="burst"){let J=Ge(tt/.9);for(let[B,X,it,ut]of G.userData.pcs)B.position.set(Math.cos(X)*it*(.2+.8*J),.1+ut*4*J*(1-J)+.05,Math.sin(X)*it*(.2+.8*J)),B.rotation.set(X*J*3,X,X*J*2);G.userData.ring.userData.at(Ge(tt/.5)),G.userData.ring.visible=tt<.5}else if(k.kind==="debris"){let X=Ge((tt-.6)/.55),it=G.userData.b,ut=G.userData.fl,ht=G.userData.ring,wt=tt<.6?7:7*(1-X*X);if(it.visible=ut.visible=tt>=.6-.05,it.position.y=wt+.16,ut.position.y=wt+.3,it.rotation.set(X<1?tt*3.2:.05,.6,X<1?tt*2.1:0),ut.userData.tick(F),ht.visible=X<1,X<1){let se=tt*2.4%1;ht.scale.setScalar(.6+.9*se),ht.material.opacity=.9*(1-se)}}}for(let k of m){let K=Hr(F,k.t0,k.t1);if(k.g.visible=K,!K)continue;let tt=ut=>typeof ut[0]=="string"?E(ut[0],ut[1]||0):E(ut),G=tt(k.from),J=tt(k.to),B=G.distanceTo(J),X=ut=>{let ht=G.clone().lerp(J,ut);return ht.y+=4*k.arc*B*ut*(1-ut)*.25,ht},it=Ge((F-k.t0)/(k.t1-k.t0));k.g.userData.head.position.copy(X(it)),k.g.userData.tail.forEach((ut,ht)=>ut.position.copy(X(Math.max(0,it-.035*(ht+1)))))}for(let k of p)k.g.visible=Hr(F,k.t0,k.t1);for(let k of M)k.m.on=Hr(F,k.t0,k.t1),k.q&&k.m.on&&k.m.e.style.setProperty("--q",(1-Ge((F-k.t0)/(k.t1-k.t0))).toFixed(3));for(let k of y){let K=k.keys,tt=0;for(;tt<K.length&&K[tt][0]<=F;)tt++;let G=K[Math.max(0,tt-1)],J=K[Math.min(K.length-1,tt)],B=tt===0?K[0][1]:tt>=K.length?G[1]:vi(G[1],J[1],Ge((F-G[0])/Math.max(.01,J[0]-G[0]))),X=tt===0?K[0][2]:G[2],it=g[k.ref];k.m.on=!!(it&&it.F.root.visible)&&X!=="hide",k.m.e.style.setProperty("--q",B.toFixed(3)),k.m.e.dataset.st=X||"";let ut=(tt===0?K[0][3]:G[3])||(X==="lock"?"\u9501\u8840":X==="free"?"\u9501\u8840\u89E3\u9664":B<=.001?"\u5012\u4E0B":""),ht=k.m.e.lastChild;ht.textContent!==ut&&(ht.textContent=ut)}let C=0,N="",Y="";for(let[k,K,tt,G]of o.mask||[])F>=k-.25&&F<K+.25&&(C=Math.max(C,Math.min(Ge((F-k+.25)/.25),Ge((K+.25-F)/.25))),N=tt,Y=G||"");if(r.dataset.s!==Y&&(r.dataset.s=Y),r.style.opacity=C.toFixed(3),r.style.display=C>0?"":"none",N&&r.firstChild.textContent!==N&&(r.firstChild.textContent=N),h&&o.cam){let k=performance.now();k>d?U(F,!0):l||(U(F,!1),d=k+700,i.animUntil=d+150)}i.shadowDirty(),e.onT&&e.onT(o.dur?F/o.dur:0)}let v=(F,j)=>{var ne,Bt,Lt,Mt;if(!F.f||!g[F.f])return F;let C=g[F.f].at(j),N=F.look[0]-C.x,Y=F.look[1]-C.z,k=Math.hypot(N,Y)||1,K=N/k,tt=Y/k,G=(ne=F.back)!=null?ne:7.5,J=(Bt=F.up)!=null?Bt:3.8,B=(Lt=F.ahead)!=null?Lt:4,X=F.side||0,it=[C.x+K*B,Qt(C.x+K*B,C.z+tt*B)+1.2,C.z+tt*B],ut=C.x-K*G-tt*X,ht=C.z-tt*G+K*X,wt=[ut,Math.max(Qt(C.x,C.z)+J,Qt(ut,ht)+1.8),ht],se=[wt[0]-it[0],wt[1]-it[1],wt[2]-it[2]],D=Math.hypot(...se);return{t:it,r:D,ph:Math.acos(se[1]/D),th:Math.atan2(se[0],se[2]),fov:(Mt=F.fov)!=null?Mt:ex}},R=F=>{let j=t.clientWidth/Math.max(1,t.clientHeight),C=j<1.25?Math.pow(1.25/j,.75):1;return{...F,r:F.r*C}};function U(F,j){let C=R(tx(o.cam,F,v)),N=C.t[0],Y=C.t[1],k=C.t[2];for(let[tt,G,J]of o.shake||[])if(Hr(F,tt,G)){let B=Math.sin(Math.PI*(F-tt)/(G-tt))*J;N+=Math.sin(F*53)*B,Y+=Math.sin(F*41+1)*B*.6,k+=Math.cos(F*47)*B}let K={th:C.th,ph:C.ph,r:C.r,fov:C.fov,t:new L(N,Y,k)};j?i.controls.set(K,!0):i.controls.flyTo(K,.9)}i.onFrame(F=>{!l||!o||(c=Math.min(o.dur,c+F),b(),c>=o.dur&&(H(),e.onEnd&&e.onEnd()))});function O(){o&&(c>=o.dur-.001&&(c=0),l=!0,i.animating=!0,e.onPlay&&e.onPlay(!0))}function H(){l=!1,i.animating=!1,i.invalidate(),e.onPlay&&e.onPlay(!1)}i.onUserStart(()=>{h&&(h=!1,e.onFollow&&e.onFollow(!1))});function Z(F,j={}){Qi[F]&&(H(),w(),a=F,o=Qi[F],c=0,h=!0,e.onFollow&&e.onFollow(!0),o.sb&&i.setShadowBox(o.sb),I(),i.setMode(o.mode||"full"),j.fly&&o.cam?(U(0,!1),d=performance.now()+950,i.animUntil=d+150):d=0,b())}return{load:Z,play:O,pause:H,isPlaying:()=>l,setT(F){o&&(c=Ge(F)*o.dur,b(),i.invalidate())},get t(){return o?c/o.dur:0},get id(){return a},get follow(){return h},setFollow(F){h=F,F&&o&&(U(c,!1),d=performance.now()+950,i.animUntil=d+150),e.onFollow&&e.onFollow(F)},resetView(){this.setFollow(!0)},info:F=>{let j=Qi[F||a];return j?{dur:j.dur,ch:j.ch,ctl:j.ctl}:null},scenes:Object.keys(Qi),dispose(){H(),w(),r.remove(),n.lay.remove(),i.scene.remove(s)}}}return Ud(nx);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
