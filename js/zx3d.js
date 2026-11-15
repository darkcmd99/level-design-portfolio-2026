var ZX3D=(()=>{var Il=Object.defineProperty;var ff=Object.getOwnPropertyDescriptor;var pf=Object.getOwnPropertyNames;var mf=Object.prototype.hasOwnProperty;var gf=(n,t)=>{for(var e in t)Il(n,e,{get:t[e],enumerable:!0})},xf=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of pf(t))!mf.call(n,s)&&s!==e&&Il(n,s,{get:()=>t[s],enumerable:!(i=ff(t,s))||i.enumerable});return n};var _f=n=>xf(Il({},"__esModule",{value:!0}),n);var Yx={};gf(Yx,{CLINIC_AMB:()=>rf,CLINIC_ENV:()=>Li,CLINIC_Q:()=>of,VIEWS:()=>bl,createShow:()=>tf,createStage:()=>sf,mount:()=>Fd});var Qh=0,_c=1,Jh=2;var yc=1,ha=2,qn=3,ii=0,nn=1,Ze=2,ri=0,zi=1,vc=2,Mc=3,bc=4,Kh=5,Mi=100,tu=101,eu=102,nu=103,iu=104,su=200,ru=201,ou=202,au=203,Do=204,Fo=205,lu=206,cu=207,hu=208,uu=209,du=210,fu=211,pu=212,mu=213,gu=214,ua=0,da=1,fa=2,Hi=3,pa=4,ma=5,ga=6,xa=7,Sc=0,xu=1,_u=2,oi=0,yu=1,vu=2,Mu=3,bu=4,Su=5,wu=6,_a=7;var wc=300,Yi=301,Zi=302,ya=303,va=304,Wr=306,Uo=1e3,vi=1001,No=1002,ln=1003,Eu=1004;var Xr=1005;var Fn=1006,Ma=1007;var Ti=1008;var On=1009,Ec=1010,Ac=1011,Us=1012,ba=1013,Ri=1014,kn=1015,Ns=1016,Sa=1017,wa=1018,Bs=1020,Tc=35902,Rc=35899,Cc=1021,Pc=1022,Rn=1023,Ms=1026,Os=1027,Ea=1028,Aa=1029,Ic=1030,Ta=1031;var Ra=1033,qr=33776,Yr=33777,Zr=33778,$r=33779,Ca=35840,Pa=35841,Ia=35842,La=35843,Da=36196,Fa=37492,Ua=37496,Na=37808,Ba=37809,Oa=37810,ka=37811,za=37812,Ha=37813,Va=37814,Ga=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,Za=37820,$a=37821,ja=36492,Qa=36494,Ja=36495,Ka=36283,tl=36284,el=36285,nl=36286;var fr=2300,Bo=2301,Lo=2302,oc=2400,ac=2401,lc=2402;var Au=3200,Tu=3201;var Lc=0,Ru=1,ai="",gn="srgb",Vi="srgb-linear",pr="linear",fe="srgb";var ki=7680;var cc=519,Cu=512,Pu=513,Iu=514,Dc=515,Lu=516,Du=517,Fu=518,Uu=519,hc=35044;var Fc="300 es",Dn=2e3,mr=2001;var si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ll=Math.PI/180,Oo=180/Math.PI;function jr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function ne(n,t,e){return Math.max(t,Math.min(e,n))}function yf(n,t){return(n%t+t)%t}function Dl(n,t,e){return(1-e)*n+e*t}function nr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var It=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Un=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==p){let g=1-a,m=l*f+c*d+h*p+u*x,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let S=Math.sqrt(v),A=Math.atan2(S,m*y);g=Math.sin(g*A)/S,a=Math.sin(a*A)/S}let _=a*y;if(l=l*g+f*_,c=c*g+d*_,h=h*g+p*_,u=u*g+x*_,g===1-a){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fl.copy(this).projectOnVector(t),this.sub(Fl)}reflect(t){return this.sub(Fl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fl=new F,Sh=new Un,Jt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],y=s[1],v=s[4],_=s[7],S=s[2],A=s[5],E=s[8];return r[0]=o*x+a*y+l*S,r[3]=o*g+a*v+l*A,r[6]=o*m+a*_+l*E,r[1]=c*x+h*y+u*S,r[4]=c*g+h*v+u*A,r[7]=c*m+h*_+u*E,r[2]=f*x+d*y+p*S,r[5]=f*g+d*v+p*A,r[8]=f*m+d*_+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ul.makeScale(t,e)),this}rotate(t){return this.premultiply(Ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ul=new Jt;function Uc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nu(){let n=gr("canvas");return n.style.display="block",n}var wh={};function bs(n){n in wh||(wh[n]=!0,console.warn(n))}function Bu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Eh=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vf(){let n={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vi]:{primaries:t,whitePoint:i,transfer:pr,toXYZ:Eh,fromXYZ:Ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:Eh,fromXYZ:Ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),n}var ae=vf();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var as,ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{as===void 0&&(as=gr("canvas")),as.width=t.width,as.height=t.height;let s=as.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=as}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=gr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ni(e[i]/255)*255):e[i]=ni(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mf=0,Ss=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=jr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nl(s[o].image)):r.push(Nl(s[o]))}else r=Nl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Nl(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bf=0,Bl=new F,cn=class n extends si{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=vi,s=vi,r=Fn,o=Ti,a=Rn,l=On,c=n.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=jr(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bl).x}get height(){return this.source.getSize(Bl).y}get depth(){return this.source.getSize(Bl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uo:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case No:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uo:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case No:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=wc;cn.DEFAULT_ANISOTROPY=1;var de=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(d+1)/2,S=(m+1)/2,A=(h+f)/4,E=(u+x)/4,I=(p+g)/4;return v>_&&v>S?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=E/i):_>S?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=I/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=E/r,s=I/r),this.set(i,s,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zo=class extends si{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new cn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ss(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends zo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},xr=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ho=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),ho.subVectors(this.max,ir),ls.subVectors(t.a,ir),cs.subVectors(t.b,ir),hs.subVectors(t.c,ir),fi.subVectors(cs,ls),pi.subVectors(hs,cs),Ui.subVectors(ls,hs);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ui.z,Ui.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ui.z,0,-Ui.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ui.y,Ui.x,0];return!Ol(e,ls,cs,hs,ho)||(e=[1,0,0,0,1,0,0,0,1],!Ol(e,ls,cs,hs,ho))?!1:(uo.crossVectors(fi,pi),e=[uo.x,uo.y,uo.z],Ol(e,ls,cs,hs,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new F,new F,new F,new F,new F,new F,new F,new F],Pn=new F,co=new Wn,ls=new F,cs=new F,hs=new F,fi=new F,pi=new F,Ui=new F,ir=new F,ho=new F,uo=new F,Ni=new F;function Ol(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ni.fromArray(n,r);let a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=i.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Sf=new Wn,sr=new F,kl=new F,bi=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Sf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(kl)),this.expandByPoint(sr.copy(t.center).sub(kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jn=new F,zl=new F,fo=new F,mi=new F,Hl=new F,po=new F,Vl=new F,_r=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){zl.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(zl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=mi.dot(this.direction),l=-mi.dot(fo),c=mi.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(zl).addScaledVector(fo,f),d}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,i,s,r){Hl.subVectors(e,t),po.subVectors(i,t),Vl.crossVectors(Hl,po);let o=this.direction.dot(Vl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);let l=a*this.direction.dot(po.crossVectors(mi,po));if(l<0)return null;let c=a*this.direction.dot(Hl.cross(mi));if(c<0||l+c>o)return null;let h=-a*mi.dot(Vl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class n{constructor(t,e,i,s,r,o,a,l,c,h,u,f,d,p,x,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,d,p,x,g)}set(t,e,i,s,r,o,a,l,c,h,u,f,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),o=1/us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wf,t,Ef)}lookAt(t,e,i){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),gi.crossVectors(i,pn),gi.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),gi.crossVectors(i,pn)),gi.normalize(),mo.crossVectors(pn,gi),s[0]=gi.x,s[4]=mo.x,s[8]=pn.x,s[1]=gi.y,s[5]=mo.y,s[9]=pn.y,s[2]=gi.z,s[6]=mo.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],v=i[7],_=i[11],S=i[15],A=s[0],E=s[4],I=s[8],M=s[12],b=s[1],D=s[5],L=s[9],U=s[13],N=s[2],H=s[6],B=s[10],Y=s[14],k=s[3],X=s[7],V=s[11],et=s[15];return r[0]=o*A+a*b+l*N+c*k,r[4]=o*E+a*D+l*H+c*X,r[8]=o*I+a*L+l*B+c*V,r[12]=o*M+a*U+l*Y+c*et,r[1]=h*A+u*b+f*N+d*k,r[5]=h*E+u*D+f*H+d*X,r[9]=h*I+u*L+f*B+d*V,r[13]=h*M+u*U+f*Y+d*et,r[2]=p*A+x*b+g*N+m*k,r[6]=p*E+x*D+g*H+m*X,r[10]=p*I+x*L+g*B+m*V,r[14]=p*M+x*U+g*Y+m*et,r[3]=y*A+v*b+_*N+S*k,r[7]=y*E+v*D+_*H+S*X,r[11]=y*I+v*L+_*B+S*V,r[15]=y*M+v*U+_*Y+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+e*c*u-e*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],y=u*g*c-x*f*c+x*l*d-a*g*d-u*l*m+a*f*m,v=p*f*c-h*g*c-p*l*d+o*g*d+h*l*m-o*f*m,_=h*x*c-p*u*c+p*a*d-o*x*d-h*a*m+o*u*m,S=p*u*l-h*x*l-p*a*f+o*x*f+h*a*g-o*u*g,A=e*y+i*v+s*_+r*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return t[0]=y*E,t[1]=(x*f*r-u*g*r-x*s*d+i*g*d+u*s*m-i*f*m)*E,t[2]=(a*g*r-x*l*r+x*s*c-i*g*c-a*s*m+i*l*m)*E,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*E,t[4]=v*E,t[5]=(h*g*r-p*f*r+p*s*d-e*g*d-h*s*m+e*f*m)*E,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*E,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*E,t[8]=_*E,t[9]=(p*u*r-h*x*r-p*i*d+e*x*d+h*i*m-e*u*m)*E,t[10]=(o*x*r-p*a*r+p*i*c-e*x*c-o*i*m+e*a*m)*E,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*d-e*a*d)*E,t[12]=S*E,t[13]=(h*x*s-p*u*s+p*i*f-e*x*f-h*i*g+e*u*g)*E,t[14]=(p*a*s-o*x*s-p*i*l+e*x*l+o*i*g-e*a*g)*E,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,g=o*u,m=a*u,y=l*c,v=l*h,_=l*u,S=i.x,A=i.y,E=i.z;return s[0]=(1-(x+m))*S,s[1]=(d+_)*S,s[2]=(p-v)*S,s[3]=0,s[4]=(d-_)*A,s[5]=(1-(f+m))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(p+v)*E,s[9]=(g-y)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=us.set(s[0],s[1],s[2]).length(),o=us.set(s[4],s[5],s[6]).length(),a=us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],In.copy(this);let c=1/r,h=1/o,u=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Dn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Dn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===mr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Dn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Dn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===mr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},us=new F,In=new ue,wf=new F(0,0,0),Ef=new F(1,1,1),gi=new F,mo=new F,pn=new F,Th=new ue,Rh=new Un,Nn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Th,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Af=0,Ch=new F,ds=new Un,Kn=new ue,go=new F,rr=new F,Tf=new F,Rf=new Un,Ph=new F(1,0,0),Ih=new F(0,1,0),Lh=new F(0,0,1),Dh={type:"added"},Cf={type:"removed"},fs={type:"childadded",child:null},Gl={type:"childremoved",child:null},He=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Nn,i=new Un,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Jt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(rr,go,this.up):Kn.lookAt(go,rr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(Kn),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dh),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cf),Gl.child=t,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,Tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};He.DEFAULT_UP=new F(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new F,ti=new F,Wl=new F,ei=new F,ps=new F,ms=new F,Fh=new F,Xl=new F,ql=new F,Yl=new F,Zl=new de,$l=new de,jl=new de,yi=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),ti.subVectors(i,e),Wl.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(ti),l=Ln.dot(Wl),c=ti.dot(ti),h=ti.dot(Wl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Zl.setScalar(0),$l.setScalar(0),jl.setScalar(0),Zl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,i),jl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zl,r.x),o.addScaledVector($l,r.y),o.addScaledVector(jl,r.z),o}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),ti.subVectors(t,e),Ln.cross(ti).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Ln.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ps.subVectors(s,i),ms.subVectors(r,i),Xl.subVectors(t,i);let l=ps.dot(Xl),c=ms.dot(Xl);if(l<=0&&c<=0)return e.copy(i);ql.subVectors(t,s);let h=ps.dot(ql),u=ms.dot(ql);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ps,o);Yl.subVectors(t,r);let d=ps.dot(Yl),p=ms.dot(Yl);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(ms,a);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Fh.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Fh,a);let m=1/(g+x+f);return o=x*m,a=f*m,e.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Ql(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Yt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=yf(t,1),e=ne(e,0,1),i=ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ql(o,r,t+1/3),this.g=Ql(o,r,t),this.b=Ql(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){let i=Ou[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return ae.workingToColorSpace(qe.copy(this),t),Math.round(ne(qe.r*255,0,255))*65536+Math.round(ne(qe.g*255,0,255))*256+Math.round(ne(qe.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(qe.copy(this),e);let i=qe.r,s=qe.g,r=qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=gn){ae.workingToColorSpace(qe.copy(this),t);let e=qe.r,i=qe.g,s=qe.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(xo);let i=Dl(xi.h,xo.h,e),s=Dl(xi.s,xo.s,e),r=Dl(xi.l,xo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Yt;Yt.NAMES=Ou;var Pf=0,Si=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=zi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Fo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Do&&(i.blendSrc=this.blendSrc),this.blendDst!==Fo&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xn=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new F,_o=new It,If=0,Pe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:If++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=nr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=on(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=nr(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=nr(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=nr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=nr(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hc&&(t.usage=this.usage),t}};var yr=class extends Pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var vr=class extends Pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends Pe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Lf=0,En=new ue,Jl=new He,gs=new F,mn=new Wn,or=new Wn,ze=new F,Ue=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uc(t)?vr:yr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,i){return En.makeTranslation(t,e,i),this.applyMatrix4(En),this}scale(t,e,i){return En.makeScale(t,e,i),this.applyMatrix4(En),this}lookAt(t){return Jl.lookAt(t),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(mn.min,or.min),mn.expandByPoint(ze),ze.addVectors(mn.max,or.max),mn.expandByPoint(ze)):(mn.expandByPoint(or.min),mn.expandByPoint(or.max))}mn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(t,c),ze.add(gs)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new F,l[I]=new F;let c=new F,h=new F,u=new F,f=new It,d=new It,p=new It,x=new F,g=new F;function m(I,M,b){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,M),p.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(D),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(D),a[I].add(x),a[M].add(x),a[b].add(x),l[I].add(g),l[M].add(g),l[b].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,M=y.length;I<M;++I){let b=y[I],D=b.start,L=b.count;for(let U=D,N=D+L;U<N;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let v=new F,_=new F,S=new F,A=new F;function E(I){S.fromBufferAttribute(s,I),A.copy(S);let M=a[I];v.copy(M),v.sub(S.multiplyScalar(S.dot(M))).normalize(),_.crossVectors(A,M);let D=_.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,D)}for(let I=0,M=y.length;I<M;++I){let b=y[I],D=b.start,L=b.count;for(let U=D,N=D+L;U<N;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Pe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uh=new ue,Bi=new _r,yo=new bi,Nh=new F,vo=new F,Mo=new F,bo=new F,Kl=new F,So=new F,Bh=new F,wo=new F,ee=class extends He{constructor(t=new Ue,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Kl.fromBufferAttribute(u,t),o?So.addScaledVector(Kl,h):So.addScaledVector(Kl.sub(e),h))}e.add(So)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(yo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(yo,Nh)===null||Bi.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Uh.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,S=v;_<S;_+=3){let A=a.getX(_),E=a.getX(_+1),I=a.getX(_+2);s=Eo(this,m,t,i,c,h,u,A,E,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let y=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);s=Eo(this,o,t,i,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,S=v;_<S;_+=3){let A=_,E=_+1,I=_+2;s=Eo(this,m,t,i,c,h,u,A,E,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let y=g,v=g+1,_=g+2;s=Eo(this,o,t,i,c,h,u,y,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Df(n,t,e,i,s,r,o,a){let l;if(t.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ii,a),l===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:n}}function Eo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,vo),n.getVertexPosition(l,Mo),n.getVertexPosition(c,bo);let h=Df(n,t,e,i,vo,Mo,bo,Bh);if(h){let u=new F;yi.getBarycoord(Bh,vo,Mo,bo,u),s&&(h.uv=yi.getInterpolatedAttribute(s,a,l,c,u,new It)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,l,c,u,new It)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new F,materialIndex:0};yi.getNormal(vo,Mo,bo,f.normal),h.face=f,h.barycoord=u}return h}var Xn=class n extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function p(x,g,m,y,v,_,S,A,E,I,M){let b=_/E,D=S/I,L=_/2,U=S/2,N=A/2,H=E+1,B=I+1,Y=0,k=0,X=new F;for(let V=0;V<B;V++){let et=V*D-U;for(let Tt=0;Tt<H;Tt++){let Vt=Tt*b-L;X[x]=Vt*y,X[g]=et*v,X[m]=N,c.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[m]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(Tt/E),u.push(1-V/I),Y+=1}}for(let V=0;V<I;V++)for(let et=0;et<E;et++){let Tt=f+et+H*V,Vt=f+et+H*(V+1),Qt=f+(et+1)+H*(V+1),Zt=f+(et+1)+H*V;l.push(Tt,Vt,Zt),l.push(Vt,Qt,Zt),k+=6}a.addGroup(d,k,M),d+=k,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $i(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){let t={};for(let e=0;e<n.length;e++){let i=$i(n[e]);for(let s in i)t[s]=i[s]}return t}function Ff(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Nc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var ku={clone:$i,merge:$e},Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Mr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_i=new F,Oh=new It,kh=new It,We=class extends Mr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,Oh,kh),e.subVectors(kh,Oh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ll*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xs=-90,_s=1,Vo=class extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new We(xs,_s,t,e);s.layers=this.layers,this.add(s);let r=new We(xs,_s,t,e);r.layers=this.layers,this.add(r);let o=new We(xs,_s,t,e);o.layers=this.layers,this.add(o);let a=new We(xs,_s,t,e);a.layers=this.layers,this.add(a);let l=new We(xs,_s,t,e);l.layers=this.layers,this.add(l);let c=new We(xs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},br=class extends cn{constructor(t=[],e=Yi,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Go=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new br(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xn(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:ri});r.uniforms.tEquirect.value=e;let o=new ee(s,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Fn),new Vo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Ht=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bf={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Sr=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Wo=class extends cn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=ln,h=ln,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wr=class extends Pe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ys=new ue,zh=new ue,Ao=[],Hh=new Wn,Of=new ue,ar=new ee,lr=new bi,Er=class extends ee{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Of)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ys),Hh.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(Hh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ys),lr.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(i),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),zh.multiplyMatrices(i,ys),ar.matrixWorld=zh,ar.raycast(t,Ao);for(let o=0,a=Ao.length;o<a;o++){let l=Ao[o];l.instanceId=r,l.object=this,e.push(l)}Ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wo(new Float32Array(s*this.count),s,this.count,Ea,kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tc=new F,kf=new F,zf=new Jt,an=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=tc.subVectors(i,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(tc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||zf.getNormalMatrix(t),s=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new bi,Hf=new It(.5,.5),To=new F,As=class{constructor(t=new an,e=new an,i=new an,s=new an,r=new an,o=new an){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Dn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],y=r[12],v=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-o,d-h,m-p,S-y).normalize(),s[1].setComponents(c+o,d+h,m+p,S+y).normalize(),s[2].setComponents(c+a,d+u,m+x,S+v).normalize(),s[3].setComponents(c-a,d-u,m-x,S-v).normalize(),i)s[4].setComponents(l,f,g,_).normalize(),s[5].setComponents(c-l,d-f,m-g,S-_).normalize();else if(s[4].setComponents(c-l,d-f,m-g,S-_).normalize(),e===Dn)s[5].setComponents(c+l,d+f,m+g,S+_).normalize();else if(e===mr)s[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);let e=Hf.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(To.x=s.normal.x>0?t.max.x:t.min.x,To.y=s.normal.y>0?t.max.y:t.min.y,To.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends cn{constructor(t,e,i=Ri,s,r,o,a=ln,l=ln,c,h=Ms,u=1){if(h!==Ms&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Tr=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ts=class n extends Ue{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=i*2+r,x=s+1,g=new F,m=new F;for(let y=0;y<=p;y++){let v=0,_=0,S=0,A=0;if(y<=i){let M=y/i,b=M*Math.PI/2;_=-h-t*Math.cos(b),S=t*Math.sin(b),A=-t*Math.cos(b),v=M*u}else if(y<=i+r){let M=(y-i)/r;_=-h+M*e,S=t,A=0,v=u+M*f}else{let M=(y-i-r)/i,b=M*Math.PI/2;_=h+t*Math.sin(b),S=t*Math.cos(b),A=t*Math.sin(b),v=u+f+M*u}let E=Math.max(0,Math.min(1,v/d)),I=0;y===0?I=.5/s:y===p&&(I=-.5/s);for(let M=0;M<=s;M++){let b=M/s,D=b*Math.PI*2,L=Math.sin(D),U=Math.cos(D);m.x=-S*U,m.y=_,m.z=S*L,a.push(m.x,m.y,m.z),g.set(-S*U,A,S*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+I,E)}if(y>0){let M=(y-1)*x;for(let b=0;b<s;b++){let D=M+b,L=M+b+1,U=y*x+b,N=y*x+b+1;o.push(D,L,U),o.push(L,N,U)}}}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Rs=class n extends Ue{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new F,h=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ye=class n extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],g=i/2,m=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function y(){let _=new F,S=new F,A=0,E=(e-t)/i;for(let I=0;I<=r;I++){let M=[],b=I/r,D=b*(e-t)+t;for(let L=0;L<=s;L++){let U=L/s,N=U*l+a,H=Math.sin(N),B=Math.cos(N);S.x=D*H,S.y=-b*i+g,S.z=D*B,u.push(S.x,S.y,S.z),_.set(H,E,B).normalize(),f.push(_.x,_.y,_.z),d.push(U,1-b),M.push(p++)}x.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let b=x[M][I],D=x[M+1][I],L=x[M+1][I+1],U=x[M][I+1];(t>0||M!==0)&&(h.push(b,D,U),A+=3),(e>0||M!==r-1)&&(h.push(D,L,U),A+=3)}c.addGroup(m,A,0),m+=A}function v(_){let S=p,A=new It,E=new F,I=0,M=_===!0?t:e,b=_===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),p++;let D=p;for(let L=0;L<=s;L++){let N=L/s*l+a,H=Math.cos(N),B=Math.sin(N);E.x=M*B,E.y=g*b,E.z=M*H,u.push(E.x,E.y,E.z),f.push(0,b,0),A.x=H*.5+.5,A.y=B*.5*b+.5,d.push(A.x,A.y),p++}for(let L=0;L<s;L++){let U=S+L,N=D+L;_===!0?h.push(N,N+1,U):h.push(N+1,N,U),I+=3}c.addGroup(m,I,_===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cs=class n extends Ye{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Rr=class n extends Ue{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new F,_=new F,S=new F;for(let A=0;A<e.length;A+=3)d(e[A+0],v),d(e[A+1],_),d(e[A+2],S),l(v,_,S,y)}function l(y,v,_,S){let A=S+1,E=[];for(let I=0;I<=A;I++){E[I]=[];let M=y.clone().lerp(_,I/A),b=v.clone().lerp(_,I/A),D=A-I;for(let L=0;L<=D;L++)L===0&&I===A?E[I][L]=M:E[I][L]=M.clone().lerp(b,L/D)}for(let I=0;I<A;I++)for(let M=0;M<2*(A-I)-1;M++){let b=Math.floor(M/2);M%2===0?(f(E[I][b+1]),f(E[I+1][b]),f(E[I][b])):(f(E[I][b+1]),f(E[I+1][b+1]),f(E[I+1][b]))}}function c(y){let v=new F;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let y=new F;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=g(y)/2/Math.PI+.5,S=m(y)/Math.PI+.5;o.push(_,1-S)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],_=o[y+2],S=o[y+4],A=Math.max(v,_,S),E=Math.min(v,_,S);A>.9&&E<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function p(){let y=new F,v=new F,_=new F,S=new F,A=new It,E=new It,I=new It;for(let M=0,b=0;M<r.length;M+=9,b+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),A.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),S.copy(y).add(v).add(_).divideScalar(3);let D=g(S);x(A,b+0,y,D),x(E,b+2,v,D),x(I,b+4,_,D)}}function x(y,v,_,S){S<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=S/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new It:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new F,s=[],r=[],o=[],a=new F,l=new ue;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ne(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ne(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Cr=class extends An{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new It){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xo=class extends Cr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Ro=new F,ec=new Bc,nc=new Bc,ic=new Bc,Gi=class extends An{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ro.subVectors(s[0],s[1]).add(s[0]),c=Ro);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),ec.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,g),nc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,g),ic.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(ec.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),nc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ic.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(ec.calc(l),nc.calc(l),ic.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vh(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function Vf(n,t){let e=1-n;return e*e*t}function Gf(n,t){return 2*(1-n)*n*t}function Wf(n,t){return n*n*t}function ur(n,t,e,i){return Vf(n,t)+Gf(n,e)+Wf(n,i)}function Xf(n,t){let e=1-n;return e*e*e*t}function qf(n,t){let e=1-n;return 3*e*e*n*t}function Yf(n,t){return 3*(1-n)*n*n*t}function Zf(n,t){return n*n*n*t}function dr(n,t,e,i,s){return Xf(n,t)+qf(n,e)+Yf(n,i)+Zf(n,s)}var qo=class extends An{constructor(t=new It,e=new It,i=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new It){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(dr(t,s.x,r.x,o.x,a.x),dr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yo=class extends An{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(dr(t,s.x,r.x,o.x,a.x),dr(t,s.y,r.y,o.y,a.y),dr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zo=class extends An{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ps=class extends An{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends An{constructor(t=new It,e=new It,i=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new It){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ur(t,s.x,r.x,o.x),ur(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends An{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(ur(t,s.x,r.x,o.x),ur(t,s.y,r.y,o.y),ur(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jo=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Vh(a,l.x,c.x,h.x,u.x),Vh(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},$f=Object.freeze({__proto__:null,ArcCurve:Xo,CatmullRomCurve3:Gi,CubicBezierCurve:qo,CubicBezierCurve3:Yo,EllipseCurve:Cr,LineCurve:Zo,LineCurve3:Ps,QuadraticBezierCurve:$o,QuadraticBezierCurve3:Pr,SplineCurve:jo});function jf(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=zu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=ep(n,t,r,e)),n.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let d=n[f],p=n[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ir(r,o,e,a,l,c,0),o}function zu(n,t,e,i,s){let r;if(s===dp(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Gh(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Gh(o/i|0,n[o],n[o+1],r);return r&&Is(r,r.next)&&(Dr(r),r=r.next),r}function Wi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Is(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ir(n,t,e,i,s,r,o){if(!n)return;!o&&r&&op(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Jf(n,i,s,r):Qf(n)){t.push(l.i,n.i,c.i),Dr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Kf(Wi(n),t),Ir(n,t,e,i,s,r,2)):o===2&&tp(n,t,e,i,s,r):Ir(Wi(n),t,e,i,s,r,1);break}}}function Qf(n){let t=n.prev,e=n,i=n.next;if(Ee(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&hr(s,a,r,l,o,c,p.x,p.y)&&Ee(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jf(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ee(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),m=uc(d,p,t,e,i),y=uc(x,g,t,e,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=m&&_&&_.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&hr(a,h,l,u,c,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&hr(a,h,l,u,c,f,_.x,_.y)&&Ee(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&hr(a,h,l,u,c,f,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==o&&hr(a,h,l,u,c,f,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Kf(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Is(i,s)&&Vu(i,e,e.next,s)&&Lr(i,s)&&Lr(s,i)&&(t.push(i.i,e.i,s.i),Dr(e),Dr(e.next),e=n=s),e=e.next}while(e!==n);return Wi(e)}function tp(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cp(o,a)){let l=Gu(o,a);o=Wi(o,o.next),l=Wi(l,l.next),Ir(o,t,e,i,s,r,0),Ir(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ep(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=zu(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(lp(c))}s.sort(np);for(let r=0;r<s.length;r++)e=ip(s[r],e);return e}function np(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function ip(n,t){let e=sp(n,t);if(!e)return t;let i=Gu(e,n);return Wi(i,i.next),Wi(e,e.next)}function sp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Is(n,e))return e;do{if(Is(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Hu(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);Lr(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&rp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function rp(n,t){return Ee(n.prev,n,t.prev)<0&&Ee(t.next,n,n.next)<0}function op(n,t,e,i){let s=n;do s.z===0&&(s.z=uc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ap(s)}function ap(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function uc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function lp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Hu(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function hr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&Hu(n,t,e,i,s,r,o,a)}function cp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!hp(n,t)&&(Lr(n,t)&&Lr(t,n)&&up(n,t)&&(Ee(n.prev,n,t.prev)||Ee(n,t.prev,t))||Is(n,t)&&Ee(n.prev,n,n.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Is(n,t){return n.x===t.x&&n.y===t.y}function Vu(n,t,e,i){let s=Po(Ee(n,t,e)),r=Po(Ee(n,t,i)),o=Po(Ee(e,i,n)),a=Po(Ee(e,i,t));return!!(s!==r&&o!==a||s===0&&Co(n,e,t)||r===0&&Co(n,i,t)||o===0&&Co(e,n,i)||a===0&&Co(e,t,i))}function Co(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Po(n){return n>0?1:n<0?-1:0}function hp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Vu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Lr(n,t){return Ee(n.prev,n,n.next)<0?Ee(n,t,n.next)>=0&&Ee(n,n.prev,t)>=0:Ee(n,t,n.prev)<0||Ee(n,n.next,t)<0}function up(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Gu(n,t){let e=dc(n.i,n.x,n.y),i=dc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Gh(n,t,e,i){let s=dc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Dr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function dc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dp(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var fc=class{static triangulate(t,e,i=2){return jf(t,e,i)}},Fr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Wh(t),Xh(i,t);let o=t.length;e.forEach(Wh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Xh(i,e[l]);let a=fc.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Wh(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Xh(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var wi=class n extends Rr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Ur=class n extends Rr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Nr=class n extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*f-o;for(let v=0;v<c;v++){let _=v*u-r;p.push(_,-y,0),x.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let v=y+c*m,_=y+c*(m+1),S=y+1+c*(m+1),A=y+1+c*m;d.push(v,_,A),d.push(_,S,A)}this.setIndex(d),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Xi=class n extends Ue{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new F,p=new It;for(let x=0;x<=s;x++){for(let g=0;g<=i;g++){let m=r+g/i*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<s;x++){let g=x*(i+1);for(let m=0;m<i;m++){let y=m+g,v=y,_=y+i+1,S=y+i+2,A=y+1;a.push(v,_,A),a.push(_,S,A)}}this.setIndex(a),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ls=class n extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new F,f=new F,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let y=[],v=m/i,_=0;m===0&&o===0?_=.5/e:m===i&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){let A=S/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+_,1-v),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){let v=h[m][y+1],_=h[m][y],S=h[m+1][y],A=h[m+1][y+1];(m!==0||o>0)&&d.push(v,_,A),(m!==i-1||l<Math.PI)&&d.push(_,S,A)}this.setIndex(d),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Br=class n extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new F,u=new F,f=new F;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){let x=p/s*r,g=d/i*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){let x=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,y=(s+1)*d+p;o.push(x,g,y),o.push(g,m,y)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ds=class n extends Ue{constructor(t=new Pr(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,l=new F,c=new It,h=new F,u=[],f=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(d,2));function x(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),y(),m()}function g(v){h=t.getPointAt(v/e,h);let _=o.normals[v],S=o.binormals[v];for(let A=0;A<=s;A++){let E=A/s*Math.PI*2,I=Math.sin(E),M=-Math.cos(E);l.x=M*_.x+I*S.x,l.y=M*_.y+I*S.y,l.z=M*_.z+I*S.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let S=(s+1)*(v-1)+(_-1),A=(s+1)*v+(_-1),E=(s+1)*v+_,I=(s+1)*(v-1)+_;p.push(S,A,I),p.push(A,E,I)}}function y(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)c.x=v/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new $f[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Tn=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qo=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jo=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Io(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function fp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var qi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ko=class extends qi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oc,endingEnd:oc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ac:r=t,a=2*e-i;break;case lc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ac:o=t,l=2*i-e;break;case lc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,v=(-1-d)*g+(1.5+d)*x+.5*p,_=d*g-d*x;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+y*o[c+S]+v*o[l+S]+_*o[u+S];return r}},ta=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},ea=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_n=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Io(e,this.TimeBufferType),this.values=Io(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Io(t.times,Array),values:Io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ko(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fr:e=this.InterpolantFactoryMethodDiscrete;break;case Bo:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&fp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Bo;var Ei=class extends _n{constructor(t,e,i){super(t,e,i)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=fr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}};na.prototype.ValueTypeName="color";var ia=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}};ia.prototype.ValueTypeName="number";var sa=class extends qi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,l);return r}},Or=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new sa(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends _n{constructor(t,e,i){super(t,e,i)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=fr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends _n{constructor(t,e,i,s){super(t,e,i,s)}};ra.prototype.ValueTypeName="vector";var oa=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Wu=new oa,aa=class{constructor(t){this.manager=t!==void 0?t:Wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},kr=class extends Fs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},sc=new ue,qh=new F,Yh=new F,la=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(qh),Yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yh),e.updateMatrixWorld(),sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Zh=new ue,cr=new F,rc=new F,pc=class extends la{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),cr.setFromMatrixPosition(t.matrixWorld),i.position.copy(cr),rc.copy(i.position),rc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(rc),i.updateMatrixWorld(),s.makeTranslation(-cr.x,-cr.y,-cr.z),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh,i.coordinateSystem,i.reversedDepth)}},zr=class extends Fs{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new pc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Hr=class extends Mr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mc=class extends la{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new mc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ca=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Oc="\\[\\]\\.:\\/",pp=new RegExp("["+Oc+"]","g"),kc="[^"+Oc+"]",mp="[^"+Oc.replace("\\.","")+"]",gp=/((?:WC+[\/:])*)/.source.replace("WC",kc),xp=/(WCOD+)?/.source.replace("WCOD",mp),_p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),yp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),vp=new RegExp("^"+gp+xp+_p+yp+"$"),Mp=["material","materials","bones","map"],gc=class{constructor(t,e,i){let s=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pp,"")}static parseTrackName(t){let e=vp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Mp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=gc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $x=new Float32Array(1);var $h=new ue,Gr=class{constructor(t,e,i=0,s=1/0){this.ray=new _r(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $h.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($h),this}intersectObject(t,e=!0,i=[]){return xc(t,this,i,e),i.sort(jh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)xc(t[s],this,i,e);return i.sort(jh),i}};function jh(n,t){return n.distance-t.distance}function xc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)xc(r[o],t,e,!0)}}function zc(n,t,e,i){let s=bp(i);switch(e){case Cc:return n*t;case Ea:return n*t/s.components*s.byteLength;case Aa:return n*t/s.components*s.byteLength;case Ic:return n*t*2/s.components*s.byteLength;case Ta:return n*t*2/s.components*s.byteLength;case Pc:return n*t*3/s.components*s.byteLength;case Rn:return n*t*4/s.components*s.byteLength;case Ra:return n*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zr:case $r:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pa:case La:return Math.max(n,16)*Math.max(t,8)/4;case Ca:case Ia:return Math.max(n,8)*Math.max(t,8)/2;case Da:case Fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case $a:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ja:case Qa:case Ja:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ka:case tl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case el:case nl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bp(n){switch(n){case On:case Ec:return{byteLength:1,components:1};case Us:case Ac:case Ns:return{byteLength:2,components:1};case Sa:case wa:return{byteLength:2,components:4};case Ri:case ba:case kn:return{byteLength:4,components:1};case Tc:case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function pd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function wp(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Op=`#ifdef USE_IRIDESCENCE
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
#endif`,kp=`#ifdef USE_BUMPMAP
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
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
}`,fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
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
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,Sm=`struct PhysicalMaterial {
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
}`,wm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,Zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,c0=`float getShadowMask() {
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
}`,h0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,d0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,D0=`#define DISTANCE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N0=`uniform float scale;
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
}`,B0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,k0=`uniform vec3 diffuse;
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
}`,z0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define MATCAP
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
}`,G0=`#define MATCAP
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
}`,W0=`#define NORMAL
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
}`,X0=`#define NORMAL
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
}`,q0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,Z0=`#define STANDARD
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
}`,$0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,J0=`uniform float size;
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
}`,K0=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 color;
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
}`,ng=`uniform float rotation;
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
}`,ig=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Ep,alphahash_pars_fragment:Ap,alphamap_fragment:Tp,alphamap_pars_fragment:Rp,alphatest_fragment:Cp,alphatest_pars_fragment:Pp,aomap_fragment:Ip,aomap_pars_fragment:Lp,batching_pars_vertex:Dp,batching_vertex:Fp,begin_vertex:Up,beginnormal_vertex:Np,bsdfs:Bp,iridescence_fragment:Op,bumpmap_pars_fragment:kp,clipping_planes_fragment:zp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Gp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:Yp,common:Zp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:Jp,emissivemap_fragment:Kp,emissivemap_pars_fragment:tm,colorspace_fragment:em,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:om,envmap_physical_pars_fragment:xm,envmap_vertex:am,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:dm,lightmap_pars_fragment:fm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:_m,lights_toon_pars_fragment:ym,lights_phong_fragment:vm,lights_phong_pars_fragment:Mm,lights_physical_fragment:bm,lights_physical_pars_fragment:Sm,lights_fragment_begin:wm,lights_fragment_maps:Em,lights_fragment_end:Am,logdepthbuf_fragment:Tm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Cm,logdepthbuf_vertex:Pm,map_fragment:Im,map_pars_fragment:Lm,map_particle_fragment:Dm,map_particle_pars_fragment:Fm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Nm,morphinstance_vertex:Bm,morphcolor_vertex:Om,morphnormal_vertex:km,morphtarget_pars_vertex:zm,morphtarget_vertex:Hm,normal_fragment_begin:Vm,normal_fragment_maps:Gm,normal_pars_fragment:Wm,normal_pars_vertex:Xm,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:Zm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:Jm,packing:Km,premultiplied_alpha_fragment:t0,project_vertex:e0,dithering_fragment:n0,dithering_pars_fragment:i0,roughnessmap_fragment:s0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:o0,shadowmap_pars_vertex:a0,shadowmap_vertex:l0,shadowmask_pars_fragment:c0,skinbase_vertex:h0,skinning_pars_vertex:u0,skinning_vertex:d0,skinnormal_vertex:f0,specularmap_fragment:p0,specularmap_pars_fragment:m0,tonemapping_fragment:g0,tonemapping_pars_fragment:x0,transmission_fragment:_0,transmission_pars_fragment:y0,uv_pars_fragment:v0,uv_pars_vertex:M0,uv_vertex:b0,worldpos_vertex:S0,background_vert:w0,background_frag:E0,backgroundCube_vert:A0,backgroundCube_frag:T0,cube_vert:R0,cube_frag:C0,depth_vert:P0,depth_frag:I0,distanceRGBA_vert:L0,distanceRGBA_frag:D0,equirect_vert:F0,equirect_frag:U0,linedashed_vert:N0,linedashed_frag:B0,meshbasic_vert:O0,meshbasic_frag:k0,meshlambert_vert:z0,meshlambert_frag:H0,meshmatcap_vert:V0,meshmatcap_frag:G0,meshnormal_vert:W0,meshnormal_frag:X0,meshphong_vert:q0,meshphong_frag:Y0,meshphysical_vert:Z0,meshphysical_frag:$0,meshtoon_vert:j0,meshtoon_frag:Q0,points_vert:J0,points_frag:K0,shadow_vert:tg,shadow_frag:eg,sprite_vert:ng,sprite_frag:ig},yt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Yn={basic:{uniforms:$e([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:$e([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:$e([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:$e([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:$e([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:$e([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:$e([yt.points,yt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:$e([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:$e([yt.common,yt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:$e([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:$e([yt.sprite,yt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:$e([yt.common,yt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:$e([yt.lights,yt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Yn.physical={uniforms:$e([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var il={r:0,b:0,g:0},ji=new Nn,sg=new ue;function rg(n,t,e,i,s,r,o){let a=new Yt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1,S=p(v);S===null?m(a,l):S&&S.isColor&&(m(S,1),_=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,_){let S=p(_);S&&(S.isCubeTexture||S.mapping===Wr)?(h===void 0&&(h=new ee(new Xn(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:$i(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ji.copy(_.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(ji)),h.material.toneMapped=ae.getTransfer(S.colorSpace)!==fe,(u!==S||f!==S.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ee(new Nr(2,2),new Bn({name:"BackgroundMaterial",uniforms:$i(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ae.getTransfer(S.colorSpace)!==fe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,_){v.getRGB(il,Nc(n)),i.buffers.color.setClear(il.r,il.g,il.b,_,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:x,addToRenderList:g,dispose:y}}function og(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,D,L,U,N){let H=!1,B=u(U,L,D);r!==B&&(r=B,c(r.object)),H=d(b,U,L,N),H&&p(b,U,L,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(b,D,L,U),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,D,L){let U=L.wireframe===!0,N=i[b.id];N===void 0&&(N={},i[b.id]=N);let H=N[D.id];H===void 0&&(H={},N[D.id]=H);let B=H[U];return B===void 0&&(B=f(l()),H[U]=B),B}function f(b){let D=[],L=[],U=[];for(let N=0;N<e;N++)D[N]=0,L[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:U,object:b,attributes:{},index:null}}function d(b,D,L,U){let N=r.attributes,H=D.attributes,B=0,Y=L.getAttributes();for(let k in Y)if(Y[k].location>=0){let V=N[k],et=H[k];if(et===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),V===void 0||V.attribute!==et||et&&V.data!==et.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function p(b,D,L,U){let N={},H=D.attributes,B=0,Y=L.getAttributes();for(let k in Y)if(Y[k].location>=0){let V=H[k];V===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(V=b.instanceColor));let et={};et.attribute=V,V&&V.data&&(et.data=V.data),N[k]=et,B++}r.attributes=N,r.attributesNum=B,r.index=U}function x(){let b=r.newAttributes;for(let D=0,L=b.length;D<L;D++)b[D]=0}function g(b){m(b,0)}function m(b,D){let L=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;L[b]=1,U[b]===0&&(n.enableVertexAttribArray(b),U[b]=1),N[b]!==D&&(n.vertexAttribDivisor(b,D),N[b]=D)}function y(){let b=r.newAttributes,D=r.enabledAttributes;for(let L=0,U=D.length;L<U;L++)D[L]!==b[L]&&(n.disableVertexAttribArray(L),D[L]=0)}function v(b,D,L,U,N,H,B){B===!0?n.vertexAttribIPointer(b,D,L,N,H):n.vertexAttribPointer(b,D,L,U,N,H)}function _(b,D,L,U){x();let N=U.attributes,H=L.getAttributes(),B=D.defaultAttributeValues;for(let Y in H){let k=H[Y];if(k.location>=0){let X=N[Y];if(X===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(X=b.instanceColor)),X!==void 0){let V=X.normalized,et=X.itemSize,Tt=t.get(X);if(Tt===void 0)continue;let Vt=Tt.buffer,Qt=Tt.type,Zt=Tt.bytesPerElement,st=Qt===n.INT||Qt===n.UNSIGNED_INT||X.gpuType===ba;if(X.isInterleavedBufferAttribute){let ct=X.data,bt=ct.stride,Dt=X.offset;if(ct.isInstancedInterleavedBuffer){for(let Et=0;Et<k.locationSize;Et++)m(k.location+Et,ct.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Et=0;Et<k.locationSize;Et++)g(k.location+Et);n.bindBuffer(n.ARRAY_BUFFER,Vt);for(let Et=0;Et<k.locationSize;Et++)v(k.location+Et,et/k.locationSize,Qt,V,bt*Zt,(Dt+et/k.locationSize*Et)*Zt,st)}else{if(X.isInstancedBufferAttribute){for(let ct=0;ct<k.locationSize;ct++)m(k.location+ct,X.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ct=0;ct<k.locationSize;ct++)g(k.location+ct);n.bindBuffer(n.ARRAY_BUFFER,Vt);for(let ct=0;ct<k.locationSize;ct++)v(k.location+ct,et/k.locationSize,Qt,V,et*Zt,et/k.locationSize*ct*Zt,st)}}else if(B!==void 0){let V=B[Y];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(k.location,V);break;case 3:n.vertexAttrib3fv(k.location,V);break;case 4:n.vertexAttrib4fv(k.location,V);break;default:n.vertexAttrib1fv(k.location,V)}}}}y()}function S(){I();for(let b in i){let D=i[b];for(let L in D){let U=D[L];for(let N in U)h(U[N].object),delete U[N];delete D[L]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let D=i[b.id];for(let L in D){let U=D[L];for(let N in U)h(U[N].object),delete U[N];delete D[L]}delete i[b.id]}function E(b){for(let D in i){let L=i[D];if(L[b.id]===void 0)continue;let U=L[b.id];for(let N in U)h(U[N].object),delete U[N];delete L[b.id]}}function I(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function ag(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let p=0;for(let x=0;x<u;x++)p+=h[x]*f[x];e.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Rn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let I=E===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==On&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==kn&&!I)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:S,maxSamples:A}}function cg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new an,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let y=r?0:i,v=y*4,_=m.clippingState||null;l.value=_,_=h(p,f,v,d);for(let S=0;S!==v;++S)_[S]=e[S];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,_=d;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function hg(n){let t=new WeakMap;function e(o,a){return a===ya?o.mapping=Yi:a===va&&(o.mapping=Zi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ya||a===va)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Go(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var zs=4,Xu=[.125,.215,.35,.446,.526,.582],Ki=20,Hc=new Hr,qu=new Yt,Vc=null,Gc=0,Wc=0,Xc=!1,Ji=(1+Math.sqrt(5))/2,ks=1/Ji,Yu=[new F(-Ji,ks,0),new F(Ji,ks,0),new F(-ks,0,Ji),new F(ks,0,Ji),new F(0,Ji,-ks),new F(0,Ji,ks),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],ug=new F,ol=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=ug}=r;Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vc,Gc,Wc),this._renderer.xr.enabled=Xc,t.scissorTest=!1,sl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ns,format:Rn,colorSpace:Vi,depthBuffer:!1},s=Zu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=fg(r,t,e)}return s}_compileMaterial(t){let e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Hc)}_sceneToCubeUV(t,e,i,s,r){let l=new We(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(qu),u.toneMapping=oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new xn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new ee(new Xn,x),m=!1,y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,m=!0):(x.color.copy(qu),m=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let S=this._cubeSize;sl(s,_*S,v>2?S:0,S,S),u.setRenderTarget(s),m&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Yi||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$u());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;sl(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Hc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yu[(s-r-1)%Yu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ee(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):Ki;g>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ki}`);let m=[],y=0;for(let E=0;E<Ki;++E){let I=E/x,M=Math.exp(-I*I/2);m.push(M),E===0?y+=M:E<g&&(y+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=p,f.mipInt.value=v-i;let _=this._sizeLods[s],S=3*_*(s>v-zs?s-v+zs:0),A=4*(this._cubeSize-_);sl(e,S,A,3*_,2*_),l.setRenderTarget(e),l.render(u,Hc)}};function dg(n){let t=[],e=[],i=[],s=n,r=n-zs+1+Xu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-zs?l=Xu[o-n+zs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*d),v=new Float32Array(g*p*d),_=new Float32Array(m*p*d);for(let A=0;A<d;A++){let E=A%3*2/3-1,I=A>2?0:-1,M=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];y.set(M,x*p*A),v.set(f,g*p*A);let b=[A,A,A,A,A,A];_.set(b,m*p*A)}let S=new Ue;S.setAttribute("position",new Pe(y,x)),S.setAttribute("uv",new Pe(v,g)),S.setAttribute("faceIndex",new Pe(_,m)),t.push(S),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zu(n,t,e){let i=new Gn(n,t,e);return i.texture.mapping=Wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sl(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function fg(n,t,e){let i=new Float32Array(Ki),s=new F(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function $u(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ju(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function pg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===ya||l===va,h=l===Yi||l===Zi;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ol(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new ol(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function mg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&bs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gg(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,_=y.length;v<_;v+=3){let S=y[v+0],A=y[v+1],E=y[v+2];f.push(S,A,A,E,E,S)}}else if(p!==void 0){let y=p.array;x=p.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let S=v+0,A=v+1,E=v+2;f.push(S,A,A,E,E,S)}}else return;let g=new(Uc(f)?vr:yr)(f,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,f*o,p),e.update(d,i,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,i,1)}function u(f,d,p,x){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y]*x[y];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _g(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function yg(n,t,e){let i=new WeakMap,s=new de;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let M=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let A=new Float32Array(_*S*4*u),E=new xr(A,_,S,u);E.type=kn,E.needsUpdate=!0;let I=v*4;for(let b=0;b<u;b++){let D=g[b],L=m[b],U=y[b],N=_*S*4*b;for(let H=0;H<D.count;H++){let B=H*I;d===!0&&(s.fromBufferAttribute(D,H),A[N+B+0]=s.x,A[N+B+1]=s.y,A[N+B+2]=s.z,A[N+B+3]=0),p===!0&&(s.fromBufferAttribute(L,H),A[N+B+4]=s.x,A[N+B+5]=s.y,A[N+B+6]=s.z,A[N+B+7]=0),x===!0&&(s.fromBufferAttribute(U,H),A[N+B+8]=s.x,A[N+B+9]=s.y,A[N+B+10]=s.z,A[N+B+11]=U.itemSize===4?s.w:1)}}f={count:u,texture:E,size:new It(_,S)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function vg(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var md=new cn,Qu=new Ar(1,1),gd=new xr,xd=new Ho,_d=new br,Ju=[],Ku=[],td=new Float32Array(16),ed=new Float32Array(9),nd=new Float32Array(4);function Vs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ju[s];if(r===void 0&&(r=new Float32Array(s),Ju[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ll(n,t){let e=Ku[t];e===void 0&&(e=new Int32Array(t),Ku[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Mg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function bg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function Sg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function wg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function Eg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Ne(e,i))return;nd.set(i),n.uniformMatrix2fv(this.addr,!1,nd),Be(e,i)}}function Ag(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Ne(e,i))return;ed.set(i),n.uniformMatrix3fv(this.addr,!1,ed),Be(e,i)}}function Tg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Ne(e,i))return;td.set(i),n.uniformMatrix4fv(this.addr,!1,td),Be(e,i)}}function Rg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function Pg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function Ig(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function Lg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Dg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function Fg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function Ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function Ng(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Qu.compareFunction=Dc,r=Qu):r=md,e.setTexture2D(t||r,s)}function Bg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||xd,s)}function Og(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_d,s)}function kg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||gd,s)}function zg(n){switch(n){case 5126:return Mg;case 35664:return bg;case 35665:return Sg;case 35666:return wg;case 35674:return Eg;case 35675:return Ag;case 35676:return Tg;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Fg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return kg}}function Hg(n,t){n.uniform1fv(this.addr,t)}function Vg(n,t){let e=Vs(t,this.size,2);n.uniform2fv(this.addr,e)}function Gg(n,t){let e=Vs(t,this.size,3);n.uniform3fv(this.addr,e)}function Wg(n,t){let e=Vs(t,this.size,4);n.uniform4fv(this.addr,e)}function Xg(n,t){let e=Vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qg(n,t){let e=Vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Yg(n,t){let e=Vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zg(n,t){n.uniform1iv(this.addr,t)}function $g(n,t){n.uniform2iv(this.addr,t)}function jg(n,t){n.uniform3iv(this.addr,t)}function Qg(n,t){n.uniform4iv(this.addr,t)}function Jg(n,t){n.uniform1uiv(this.addr,t)}function Kg(n,t){n.uniform2uiv(this.addr,t)}function t1(n,t){n.uniform3uiv(this.addr,t)}function e1(n,t){n.uniform4uiv(this.addr,t)}function n1(n,t,e){let i=this.cache,s=t.length,r=ll(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||md,r[o])}function i1(n,t,e){let i=this.cache,s=t.length,r=ll(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||xd,r[o])}function s1(n,t,e){let i=this.cache,s=t.length,r=ll(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_d,r[o])}function r1(n,t,e){let i=this.cache,s=t.length,r=ll(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gd,r[o])}function o1(n){switch(n){case 5126:return Hg;case 35664:return Vg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return $g;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return Jg;case 36294:return Kg;case 36295:return t1;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return r1}}var Yc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},Zc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o1(e.type)}},$c=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},qc=/(\w+)(\])?(\[|\.)?/g;function id(n,t){n.seq.push(t),n.map[t.id]=t}function a1(n,t,e){let i=n.name,s=i.length;for(qc.lastIndex=0;;){let r=qc.exec(i),o=qc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){id(e,c===void 0?new Yc(a,n,t):new Zc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new $c(a),id(e,u)),e=u}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);a1(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function sd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var l1=37297,c1=0;function h1(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var rd=new Jt;function u1(n){ae._getMatrix(rd,ae.workingColorSpace,n);let t=`mat3( ${rd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case pr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function od(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+h1(n.getShaderSource(t),a)}else return r}function d1(n,t){let e=u1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function f1(n,t){let e;switch(t){case yu:e="Linear";break;case vu:e="Reinhard";break;case Mu:e="Cineon";break;case bu:e="ACESFilmic";break;case wu:e="AgX";break;case _a:e="Neutral";break;case Su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rl=new F;function p1(){ae.getLuminanceCoefficients(rl);let n=rl.x.toFixed(4),t=rl.y.toFixed(4),e=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function g1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function x1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Qr(n){return n!==""}function ad(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ld(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _1=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(n){return n.replace(_1,v1)}var y1=new Map;function v1(n,t){let e=te[t];if(e===void 0){let i=y1.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return jc(e)}var M1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(n){return n.replace(M1,b1)}function b1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function S1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ha?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function w1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yi:case Zi:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function A1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sc:t="ENVMAP_BLENDING_MULTIPLY";break;case xu:t="ENVMAP_BLENDING_MIX";break;case _u:t="ENVMAP_BLENDING_ADD";break}return t}function T1(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function R1(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=S1(e),c=w1(e),h=E1(e),u=A1(e),f=T1(e),d=m1(e),p=g1(r),x=s.createProgram(),g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Qr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Qr).join(`
`),m.length>0&&(m+=`
`)):(g=[hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?te.tonemapping_pars_fragment:"",e.toneMapping!==oi?f1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,d1("linearToOutputTexel",e.outputColorSpace),p1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),o=jc(o),o=ad(o,e),o=ld(o,e),a=jc(a),a=ad(a,e),a=ld(a,e),o=cd(o),a=cd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=y+g+o,_=y+m+a,S=sd(s,s.VERTEX_SHADER,v),A=sd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(D){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(A)||"",H=L.trim(),B=U.trim(),Y=N.trim(),k=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,A);else{let V=od(s,S,"vertex"),et=od(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+V+`
`+et)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||Y==="")&&(X=!1);X&&(D.diagnostics={runnable:k,programLog:H,vertexShader:{log:B,prefix:g},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(S),s.deleteShader(A),I=new Hs(s,x),M=x1(s,x)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,l1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=A,this}var C1=0,Qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Jc(t),e.set(t,i)),i}},Jc=class{constructor(t){this.id=C1++,this.code=t,this.usedTimes=0}};function P1(n,t,e,i,s,r,o){let a=new ws,l=new Qc,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,b,D,L,U){let N=L.fog,H=U.geometry,B=M.isMeshStandardMaterial?L.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),k=Y&&Y.mapping===Wr?Y.image.height:null,X=p[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let V=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,et=V!==void 0?V.length:0,Tt=0;H.morphAttributes.position!==void 0&&(Tt=1),H.morphAttributes.normal!==void 0&&(Tt=2),H.morphAttributes.color!==void 0&&(Tt=3);let Vt,Qt,Zt,st;if(X){let he=Yn[X];Vt=he.vertexShader,Qt=he.fragmentShader}else Vt=M.vertexShader,Qt=M.fragmentShader,l.update(M),Zt=l.getVertexShaderID(M),st=l.getFragmentShaderID(M);let ct=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Dt=U.isInstancedMesh===!0,Et=U.isBatchedMesh===!0,Wt=!!M.map,ge=!!M.matcap,T=!!Y,rt=!!M.aoMap,nt=!!M.lightMap,it=!!M.bumpMap,ot=!!M.normalMap,q=!!M.displacementMap,K=!!M.emissiveMap,ut=!!M.metalnessMap,vt=!!M.roughnessMap,Z=M.anisotropy>0,C=M.clearcoat>0,w=M.dispersion>0,z=M.iridescence>0,Q=M.sheen>0,at=M.transmission>0,tt=Z&&!!M.anisotropyMap,Ft=C&&!!M.clearcoatMap,xt=C&&!!M.clearcoatNormalMap,Ut=C&&!!M.clearcoatRoughnessMap,Nt=z&&!!M.iridescenceMap,pt=z&&!!M.iridescenceThicknessMap,wt=Q&&!!M.sheenColorMap,Xt=Q&&!!M.sheenRoughnessMap,Bt=!!M.specularMap,Mt=!!M.specularColorMap,Kt=!!M.specularIntensityMap,O=at&&!!M.transmissionMap,mt=at&&!!M.thicknessMap,_t=!!M.gradientMap,Ct=!!M.alphaMap,dt=M.alphaTest>0,lt=!!M.alphaHash,Lt=!!M.extensions,jt=oi;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(jt=n.toneMapping);let ye={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:Vt,fragmentShader:Qt,defines:M.defines,customVertexShaderID:Zt,customFragmentShaderID:st,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Et,batchingColor:Et&&U._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&U.instanceColor!==null,instancingMorph:Dt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?n.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Vi,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:ge,envMap:T,envMapMode:T&&Y.mapping,envMapCubeUVHeight:k,aoMap:rt,lightMap:nt,bumpMap:it,normalMap:ot,displacementMap:f&&q,emissiveMap:K,normalMapObjectSpace:ot&&M.normalMapType===Ru,normalMapTangentSpace:ot&&M.normalMapType===Lc,metalnessMap:ut,roughnessMap:vt,anisotropy:Z,anisotropyMap:tt,clearcoat:C,clearcoatMap:Ft,clearcoatNormalMap:xt,clearcoatRoughnessMap:Ut,dispersion:w,iridescence:z,iridescenceMap:Nt,iridescenceThicknessMap:pt,sheen:Q,sheenColorMap:wt,sheenRoughnessMap:Xt,specularMap:Bt,specularColorMap:Mt,specularIntensityMap:Kt,transmission:at,transmissionMap:O,thicknessMap:mt,gradientMap:_t,opaque:M.transparent===!1&&M.blending===zi&&M.alphaToCoverage===!1,alphaMap:Ct,alphaTest:dt,alphaHash:lt,combine:M.combine,mapUv:Wt&&x(M.map.channel),aoMapUv:rt&&x(M.aoMap.channel),lightMapUv:nt&&x(M.lightMap.channel),bumpMapUv:it&&x(M.bumpMap.channel),normalMapUv:ot&&x(M.normalMap.channel),displacementMapUv:q&&x(M.displacementMap.channel),emissiveMapUv:K&&x(M.emissiveMap.channel),metalnessMapUv:ut&&x(M.metalnessMap.channel),roughnessMapUv:vt&&x(M.roughnessMap.channel),anisotropyMapUv:tt&&x(M.anisotropyMap.channel),clearcoatMapUv:Ft&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&x(M.sheenRoughnessMap.channel),specularMapUv:Bt&&x(M.specularMap.channel),specularColorMapUv:Mt&&x(M.specularColorMap.channel),specularIntensityMapUv:Kt&&x(M.specularIntensityMap.channel),transmissionMapUv:O&&x(M.transmissionMap.channel),thicknessMapUv:mt&&x(M.thicknessMap.channel),alphaMapUv:Ct&&x(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ot||Z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Wt||Ct),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:bt,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Tt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:jt,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===fe,decodeVideoTextureEmissive:K&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ze,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Lt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&M.extensions.multiDraw===!0||Et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ye.vertexUv1s=c.has(1),ye.vertexUv2s=c.has(2),ye.vertexUv3s=c.has(3),c.clear(),ye}function m(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)b.push(D),b.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(y(b,M),v(b,M),b.push(n.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){let b=p[M.type],D;if(b){let L=Yn[b];D=ku.clone(L.uniforms)}else D=M.uniforms;return D}function S(M,b){let D;for(let L=0,U=h.length;L<U;L++){let N=h[L];if(N.cacheKey===b){D=N,++D.usedTimes;break}}return D===void 0&&(D=new R1(n,b,M,r),h.push(D)),D}function A(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:S,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:I}}function I1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function L1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ud(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function dd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,p,x,g){let m=n[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},n[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),t++,m}function a(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,p,x,g){let m=o(u,f,d,p,x,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||L1),i.length>1&&i.sort(f||ud),s.length>1&&s.sort(f||ud)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function D1(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new dd,n.set(i,[o])):s>=r.length?(o=new dd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function F1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Yt};break;case"SpotLight":e={position:new F,direction:new F,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function U1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var N1=0;function B1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function O1(n){let t=new F1,e=U1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);let s=new F,r=new ue,o=new ue;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,y=0,v=0,_=0,S=0,A=0,E=0;c.sort(B1);for(let M=0,b=c.length;M<b;M++){let D=c[M],L=D.color,U=D.intensity,N=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=L.r*U,u+=L.g*U,f+=L.b*U;else if(D.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(D.sh.coefficients[B],U);E++}else if(D.isDirectionalLight){let B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,k=e.get(D);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=H,i.directionalShadowMatrix[d]=D.shadow.matrix,y++}i.directional[d]=B,d++}else if(D.isSpotLight){let B=t.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(L).multiplyScalar(U),B.distance=N,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,i.spot[x]=B;let Y=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,Y.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[x]=Y.matrix,D.castShadow){let k=e.get(D);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=H,_++}x++}else if(D.isRectAreaLight){let B=t.get(D);B.color.copy(L).multiplyScalar(U),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=B,g++}else if(D.isPointLight){let B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){let Y=D.shadow,k=e.get(D);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,i.pointShadow[p]=k,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=D.shadow.matrix,v++}i.point[p]=B,p++}else if(D.isHemisphereLight){let B=t.get(D);B.skyColor.copy(D.color).multiplyScalar(U),B.groundColor.copy(D.groundColor).multiplyScalar(U),i.hemi[m]=B,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let I=i.hash;(I.directionalLength!==d||I.pointLength!==p||I.spotLength!==x||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==v||I.numSpotShadows!==_||I.numSpotMaps!==S||I.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+S-A,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,I.directionalLength=d,I.pointLength=p,I.spotLength=x,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=v,I.numSpotShadows=_,I.numSpotMaps=S,I.numLightProbes=E,i.version=N1++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let v=c[m];if(v.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(v.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let _=i.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let _=i.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let _=i.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function fd(n){let t=new O1(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function k1(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new fd(n),t.set(s,[a])):r>=o.length?(a=new fd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H1=`uniform sampler2D shadow_pass;
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
}`;function V1(n,t,e){let i=new As,s=new It,r=new It,o=new de,a=new Qo({depthPacking:Tu}),l=new Jo,c={},h=e.maxTextureSize,u={[ii]:nn,[nn]:ii,[Ze]:Ze},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:z1,fragmentShader:H1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ue;p.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ee(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let m=this.type;this.render=function(A,E,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let M=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ri),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let U=m!==qn&&this.type===qn,N=m===qn&&this.type!==qn;for(let H=0,B=A.length;H<B;H++){let Y=A[H],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let X=k.getFrameExtents();if(s.multiply(X),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,k.mapSize.y=r.y)),k.map===null||U===!0||N===!0){let et=this.type!==qn?{minFilter:ln,magFilter:ln}:{};k.map!==null&&k.map.dispose(),k.map=new Gn(s.x,s.y,et),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let V=k.getViewportCount();for(let et=0;et<V;et++){let Tt=k.getViewport(et);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),L.viewport(o),k.updateMatrices(Y,et),i=k.getFrustum(),_(E,I,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===qn&&y(k,I),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,b,D)};function y(A,E){let I=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(E,null,I,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(E,null,I,d,x,null)}function v(A,E,I,M){let b=null,D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)b=D;else if(b=I.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=b.uuid,U=E.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let H=N[U];H===void 0&&(H=b.clone(),N[U]=H,E.addEventListener("dispose",S)),b=H}if(b.visible=E.visible,b.wireframe=E.wireframe,M===qn?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let L=n.properties.get(b);L.light=I}return b}function _(A,E,I,M,b){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===qn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let U=t.update(A),N=A.material;if(Array.isArray(N)){let H=U.groups;for(let B=0,Y=H.length;B<Y;B++){let k=H[B],X=N[k.materialIndex];if(X&&X.visible){let V=v(A,X,M,b);A.onBeforeShadow(n,A,E,I,U,V,k),n.renderBufferDirect(I,null,U,V,A,k),A.onAfterShadow(n,A,E,I,U,V,k)}}}else if(N.visible){let H=v(A,N,M,b);A.onBeforeShadow(n,A,E,I,U,H,null),n.renderBufferDirect(I,null,U,H,A,null),A.onAfterShadow(n,A,E,I,U,H,null)}}let L=A.children;for(let U=0,N=L.length;U<N;U++)_(L[U],E,I,M,b)}function S(A){A.target.removeEventListener("dispose",S);for(let I in c){let M=c[I],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var G1={[ua]:da,[fa]:ga,[pa]:xa,[Hi]:ma,[da]:ua,[ga]:fa,[xa]:pa,[ma]:Hi};function W1(n,t){function e(){let O=!1,mt=new de,_t=null,Ct=new de(0,0,0,0);return{setMask:function(dt){_t!==dt&&!O&&(n.colorMask(dt,dt,dt,dt),_t=dt)},setLocked:function(dt){O=dt},setClear:function(dt,lt,Lt,jt,ye){ye===!0&&(dt*=jt,lt*=jt,Lt*=jt),mt.set(dt,lt,Lt,jt),Ct.equals(mt)===!1&&(n.clearColor(dt,lt,Lt,jt),Ct.copy(mt))},reset:function(){O=!1,_t=null,Ct.set(-1,0,0,0)}}}function i(){let O=!1,mt=!1,_t=null,Ct=null,dt=null;return{setReversed:function(lt){if(mt!==lt){let Lt=t.get("EXT_clip_control");lt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),mt=lt;let jt=dt;dt=null,this.setClear(jt)}},getReversed:function(){return mt},setTest:function(lt){lt?ct(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(lt){_t!==lt&&!O&&(n.depthMask(lt),_t=lt)},setFunc:function(lt){if(mt&&(lt=G1[lt]),Ct!==lt){switch(lt){case ua:n.depthFunc(n.NEVER);break;case da:n.depthFunc(n.ALWAYS);break;case fa:n.depthFunc(n.LESS);break;case Hi:n.depthFunc(n.LEQUAL);break;case pa:n.depthFunc(n.EQUAL);break;case ma:n.depthFunc(n.GEQUAL);break;case ga:n.depthFunc(n.GREATER);break;case xa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ct=lt}},setLocked:function(lt){O=lt},setClear:function(lt){dt!==lt&&(mt&&(lt=1-lt),n.clearDepth(lt),dt=lt)},reset:function(){O=!1,_t=null,Ct=null,dt=null,mt=!1}}}function s(){let O=!1,mt=null,_t=null,Ct=null,dt=null,lt=null,Lt=null,jt=null,ye=null;return{setTest:function(he){O||(he?ct(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(he){mt!==he&&!O&&(n.stencilMask(he),mt=he)},setFunc:function(he,jn,Vn){(_t!==he||Ct!==jn||dt!==Vn)&&(n.stencilFunc(he,jn,Vn),_t=he,Ct=jn,dt=Vn)},setOp:function(he,jn,Vn){(lt!==he||Lt!==jn||jt!==Vn)&&(n.stencilOp(he,jn,Vn),lt=he,Lt=jn,jt=Vn)},setLocked:function(he){O=he},setClear:function(he){ye!==he&&(n.clearStencil(he),ye=he)},reset:function(){O=!1,mt=null,_t=null,Ct=null,dt=null,lt=null,Lt=null,jt=null,ye=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,y=null,v=null,_=null,S=null,A=null,E=new Yt(0,0,0),I=0,M=!1,b=null,D=null,L=null,U=null,N=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=Y>=2);let X=null,V={},et=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),Vt=new de().fromArray(et),Qt=new de().fromArray(Tt);function Zt(O,mt,_t,Ct){let dt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(O,lt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<_t;Lt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(mt+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return lt}let st={};st[n.TEXTURE_2D]=Zt(n.TEXTURE_2D,n.TEXTURE_2D,1),st[n.TEXTURE_CUBE_MAP]=Zt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[n.TEXTURE_2D_ARRAY]=Zt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),st[n.TEXTURE_3D]=Zt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(n.DEPTH_TEST),o.setFunc(Hi),it(!1),ot(_c),ct(n.CULL_FACE),rt(ri);function ct(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function bt(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Dt(O,mt){return u[O]!==mt?(n.bindFramebuffer(O,mt),u[O]=mt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=mt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function Et(O,mt){let _t=d,Ct=!1;if(O){_t=f.get(mt),_t===void 0&&(_t=[],f.set(mt,_t));let dt=O.textures;if(_t.length!==dt.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Lt=dt.length;lt<Lt;lt++)_t[lt]=n.COLOR_ATTACHMENT0+lt;_t.length=dt.length,Ct=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,Ct=!0);Ct&&n.drawBuffers(_t)}function Wt(O){return p!==O?(n.useProgram(O),p=O,!0):!1}let ge={[Mi]:n.FUNC_ADD,[tu]:n.FUNC_SUBTRACT,[eu]:n.FUNC_REVERSE_SUBTRACT};ge[nu]=n.MIN,ge[iu]=n.MAX;let T={[su]:n.ZERO,[ru]:n.ONE,[ou]:n.SRC_COLOR,[Do]:n.SRC_ALPHA,[du]:n.SRC_ALPHA_SATURATE,[hu]:n.DST_COLOR,[lu]:n.DST_ALPHA,[au]:n.ONE_MINUS_SRC_COLOR,[Fo]:n.ONE_MINUS_SRC_ALPHA,[uu]:n.ONE_MINUS_DST_COLOR,[cu]:n.ONE_MINUS_DST_ALPHA,[fu]:n.CONSTANT_COLOR,[pu]:n.ONE_MINUS_CONSTANT_COLOR,[mu]:n.CONSTANT_ALPHA,[gu]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(O,mt,_t,Ct,dt,lt,Lt,jt,ye,he){if(O===ri){x===!0&&(bt(n.BLEND),x=!1);return}if(x===!1&&(ct(n.BLEND),x=!0),O!==Kh){if(O!==g||he!==M){if((m!==Mi||_!==Mi)&&(n.blendEquation(n.FUNC_ADD),m=Mi,_=Mi),he)switch(O){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFunc(n.ONE,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,v=null,S=null,A=null,E.set(0,0,0),I=0,g=O,M=he}return}dt=dt||mt,lt=lt||_t,Lt=Lt||Ct,(mt!==m||dt!==_)&&(n.blendEquationSeparate(ge[mt],ge[dt]),m=mt,_=dt),(_t!==y||Ct!==v||lt!==S||Lt!==A)&&(n.blendFuncSeparate(T[_t],T[Ct],T[lt],T[Lt]),y=_t,v=Ct,S=lt,A=Lt),(jt.equals(E)===!1||ye!==I)&&(n.blendColor(jt.r,jt.g,jt.b,ye),E.copy(jt),I=ye),g=O,M=!1}function nt(O,mt){O.side===Ze?bt(n.CULL_FACE):ct(n.CULL_FACE);let _t=O.side===nn;mt&&(_t=!_t),it(_t),O.blending===zi&&O.transparent===!1?rt(ri):rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Ct=O.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),K(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ct(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function it(O){b!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),b=O)}function ot(O){O!==Qh?(ct(n.CULL_FACE),O!==D&&(O===_c?n.cullFace(n.BACK):O===Jh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),D=O}function q(O){O!==L&&(B&&n.lineWidth(O),L=O)}function K(O,mt,_t){O?(ct(n.POLYGON_OFFSET_FILL),(U!==mt||N!==_t)&&(n.polygonOffset(mt,_t),U=mt,N=_t)):bt(n.POLYGON_OFFSET_FILL)}function ut(O){O?ct(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function vt(O){O===void 0&&(O=n.TEXTURE0+H-1),X!==O&&(n.activeTexture(O),X=O)}function Z(O,mt,_t){_t===void 0&&(X===null?_t=n.TEXTURE0+H-1:_t=X);let Ct=V[_t];Ct===void 0&&(Ct={type:void 0,texture:void 0},V[_t]=Ct),(Ct.type!==O||Ct.texture!==mt)&&(X!==_t&&(n.activeTexture(_t),X=_t),n.bindTexture(O,mt||st[O]),Ct.type=O,Ct.texture=mt)}function C(){let O=V[X];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(O){Vt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Vt.copy(O))}function Xt(O){Qt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Qt.copy(O))}function Bt(O,mt){let _t=c.get(mt);_t===void 0&&(_t=new WeakMap,c.set(mt,_t));let Ct=_t.get(O);Ct===void 0&&(Ct=n.getUniformBlockIndex(mt,O.name),_t.set(O,Ct))}function Mt(O,mt){let Ct=c.get(mt).get(O);l.get(mt)!==Ct&&(n.uniformBlockBinding(mt,Ct,O.__bindingPointIndex),l.set(mt,Ct))}function Kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},X=null,V={},u={},f=new WeakMap,d=[],p=null,x=!1,g=null,m=null,y=null,v=null,_=null,S=null,A=null,E=new Yt(0,0,0),I=0,M=!1,b=null,D=null,L=null,U=null,N=null,Vt.set(0,0,n.canvas.width,n.canvas.height),Qt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:bt,bindFramebuffer:Dt,drawBuffers:Et,useProgram:Wt,setBlending:rt,setMaterial:nt,setFlipSided:it,setCullFace:ot,setLineWidth:q,setPolygonOffset:K,setScissorTest:ut,activeTexture:vt,bindTexture:Z,unbindTexture:C,compressedTexImage2D:w,compressedTexImage3D:z,texImage2D:Nt,texImage3D:pt,updateUBOMapping:Bt,uniformBlockBinding:Mt,texStorage2D:xt,texStorage3D:Ut,texSubImage2D:Q,texSubImage3D:at,compressedTexSubImage2D:tt,compressedTexSubImage3D:Ft,scissor:wt,viewport:Xt,reset:Kt}}function X1(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,w){return d?new OffscreenCanvas(C,w):gr("canvas")}function x(C,w,z){let Q=1,at=Z(C);if((at.width>z||at.height>z)&&(Q=z/Math.max(at.width,at.height)),Q<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let tt=Math.floor(Q*at.width),Ft=Math.floor(Q*at.height);u===void 0&&(u=p(tt,Ft));let xt=w?p(tt,Ft):u;return xt.width=tt,xt.height=Ft,xt.getContext("2d").drawImage(C,0,0,tt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+tt+"x"+Ft+")."),xt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,w,z,Q,at=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=w;if(w===n.RED&&(z===n.FLOAT&&(tt=n.R32F),z===n.HALF_FLOAT&&(tt=n.R16F),z===n.UNSIGNED_BYTE&&(tt=n.R8)),w===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(tt=n.R8UI),z===n.UNSIGNED_SHORT&&(tt=n.R16UI),z===n.UNSIGNED_INT&&(tt=n.R32UI),z===n.BYTE&&(tt=n.R8I),z===n.SHORT&&(tt=n.R16I),z===n.INT&&(tt=n.R32I)),w===n.RG&&(z===n.FLOAT&&(tt=n.RG32F),z===n.HALF_FLOAT&&(tt=n.RG16F),z===n.UNSIGNED_BYTE&&(tt=n.RG8)),w===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(tt=n.RG8UI),z===n.UNSIGNED_SHORT&&(tt=n.RG16UI),z===n.UNSIGNED_INT&&(tt=n.RG32UI),z===n.BYTE&&(tt=n.RG8I),z===n.SHORT&&(tt=n.RG16I),z===n.INT&&(tt=n.RG32I)),w===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),z===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),z===n.UNSIGNED_INT&&(tt=n.RGB32UI),z===n.BYTE&&(tt=n.RGB8I),z===n.SHORT&&(tt=n.RGB16I),z===n.INT&&(tt=n.RGB32I)),w===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),z===n.UNSIGNED_INT&&(tt=n.RGBA32UI),z===n.BYTE&&(tt=n.RGBA8I),z===n.SHORT&&(tt=n.RGBA16I),z===n.INT&&(tt=n.RGBA32I)),w===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),w===n.RGBA){let Ft=at?pr:ae.getTransfer(Q);z===n.FLOAT&&(tt=n.RGBA32F),z===n.HALF_FLOAT&&(tt=n.RGBA16F),z===n.UNSIGNED_BYTE&&(tt=Ft===fe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(C,w){let z;return C?w===null||w===Ri||w===Bs?z=n.DEPTH24_STENCIL8:w===kn?z=n.DEPTH32F_STENCIL8:w===Us&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ri||w===Bs?z=n.DEPTH_COMPONENT24:w===kn?z=n.DEPTH_COMPONENT32F:w===Us&&(z=n.DEPTH_COMPONENT16),z}function S(C,w){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==Fn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){let w=C.target;w.removeEventListener("dispose",A),I(w),w.isVideoTexture&&h.delete(w)}function E(C){let w=C.target;w.removeEventListener("dispose",E),b(w)}function I(C){let w=i.get(C);if(w.__webglInit===void 0)return;let z=C.source,Q=f.get(z);if(Q){let at=Q[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&M(C),Object.keys(Q).length===0&&f.delete(z)}i.remove(C)}function M(C){let w=i.get(C);n.deleteTexture(w.__webglTexture);let z=C.source,Q=f.get(z);delete Q[w.__cacheKey],o.memory.textures--}function b(C){let w=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let at=0;at<w.__webglFramebuffer[Q].length;at++)n.deleteFramebuffer(w.__webglFramebuffer[Q][at]);else n.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)n.deleteFramebuffer(w.__webglFramebuffer[Q]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let z=C.textures;for(let Q=0,at=z.length;Q<at;Q++){let tt=i.get(z[Q]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),i.remove(z[Q])}i.remove(C)}let D=0;function L(){D=0}function U(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function N(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function H(C,w){let z=i.get(C);if(C.isVideoTexture&&ut(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(z,C,w);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+w)}function B(C,w){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){st(z,C,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+w)}function Y(C,w){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){st(z,C,w);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+w)}function k(C,w){let z=i.get(C);if(C.version>0&&z.__version!==C.version){ct(z,C,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+w)}let X={[Uo]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[No]:n.MIRRORED_REPEAT},V={[ln]:n.NEAREST,[Eu]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[Ma]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},et={[Cu]:n.NEVER,[Uu]:n.ALWAYS,[Pu]:n.LESS,[Dc]:n.LEQUAL,[Iu]:n.EQUAL,[Fu]:n.GEQUAL,[Lu]:n.GREATER,[Du]:n.NOTEQUAL};function Tt(C,w){if(w.type===kn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Fn||w.magFilter===Ma||w.magFilter===Xr||w.magFilter===Ti||w.minFilter===Fn||w.minFilter===Ma||w.minFilter===Xr||w.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,X[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,X[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,X[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,V[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,V[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,et[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ln||w.minFilter!==Xr&&w.minFilter!==Ti||w.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Vt(C,w){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",A));let Q=w.source,at=f.get(Q);at===void 0&&(at={},f.set(Q,at));let tt=N(w);if(tt!==C.__cacheKey){at[tt]===void 0&&(at[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),at[tt].usedTimes++;let Ft=at[C.__cacheKey];Ft!==void 0&&(at[C.__cacheKey].usedTimes--,Ft.usedTimes===0&&M(w)),C.__cacheKey=tt,C.__webglTexture=at[tt].texture}return z}function Qt(C,w,z){return Math.floor(Math.floor(C/z)/w)}function Zt(C,w,z,Q){let tt=C.updateRanges;if(tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,z,Q,w.data);else{tt.sort((pt,wt)=>pt.start-wt.start);let Ft=0;for(let pt=1;pt<tt.length;pt++){let wt=tt[Ft],Xt=tt[pt],Bt=wt.start+wt.count,Mt=Qt(Xt.start,w.width,4),Kt=Qt(wt.start,w.width,4);Xt.start<=Bt+1&&Mt===Kt&&Qt(Xt.start+Xt.count-1,w.width,4)===Mt?wt.count=Math.max(wt.count,Xt.start+Xt.count-wt.start):(++Ft,tt[Ft]=Xt)}tt.length=Ft+1;let xt=n.getParameter(n.UNPACK_ROW_LENGTH),Ut=n.getParameter(n.UNPACK_SKIP_PIXELS),Nt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let pt=0,wt=tt.length;pt<wt;pt++){let Xt=tt[pt],Bt=Math.floor(Xt.start/4),Mt=Math.ceil(Xt.count/4),Kt=Bt%w.width,O=Math.floor(Bt/w.width),mt=Mt,_t=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Kt),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,Kt,O,mt,_t,z,Q,w.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ut),n.pixelStorei(n.UNPACK_SKIP_ROWS,Nt)}}function st(C,w,z){let Q=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=n.TEXTURE_3D);let at=Vt(C,w),tt=w.source;e.bindTexture(Q,C.__webglTexture,n.TEXTURE0+z);let Ft=i.get(tt);if(tt.version!==Ft.__version||at===!0){e.activeTexture(n.TEXTURE0+z);let xt=ae.getPrimaries(ae.workingColorSpace),Ut=w.colorSpace===ai?null:ae.getPrimaries(w.colorSpace),Nt=w.colorSpace===ai||xt===Ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let pt=x(w.image,!1,s.maxTextureSize);pt=vt(w,pt);let wt=r.convert(w.format,w.colorSpace),Xt=r.convert(w.type),Bt=v(w.internalFormat,wt,Xt,w.colorSpace,w.isVideoTexture);Tt(Q,w);let Mt,Kt=w.mipmaps,O=w.isVideoTexture!==!0,mt=Ft.__version===void 0||at===!0,_t=tt.dataReady,Ct=S(w,pt);if(w.isDepthTexture)Bt=_(w.format===Os,w.type),mt&&(O?e.texStorage2D(n.TEXTURE_2D,1,Bt,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Bt,pt.width,pt.height,0,wt,Xt,null));else if(w.isDataTexture)if(Kt.length>0){O&&mt&&e.texStorage2D(n.TEXTURE_2D,Ct,Bt,Kt[0].width,Kt[0].height);for(let dt=0,lt=Kt.length;dt<lt;dt++)Mt=Kt[dt],O?_t&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,wt,Xt,Mt.data):e.texImage2D(n.TEXTURE_2D,dt,Bt,Mt.width,Mt.height,0,wt,Xt,Mt.data);w.generateMipmaps=!1}else O?(mt&&e.texStorage2D(n.TEXTURE_2D,Ct,Bt,pt.width,pt.height),_t&&Zt(w,pt,wt,Xt)):e.texImage2D(n.TEXTURE_2D,0,Bt,pt.width,pt.height,0,wt,Xt,pt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Bt,Kt[0].width,Kt[0].height,pt.depth);for(let dt=0,lt=Kt.length;dt<lt;dt++)if(Mt=Kt[dt],w.format!==Rn)if(wt!==null)if(O){if(_t)if(w.layerUpdates.size>0){let Lt=zc(Mt.width,Mt.height,w.format,w.type);for(let jt of w.layerUpdates){let ye=Mt.data.subarray(jt*Lt/Mt.data.BYTES_PER_ELEMENT,(jt+1)*Lt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,jt,Mt.width,Mt.height,1,wt,ye)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,pt.depth,wt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,Bt,Mt.width,Mt.height,pt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?_t&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,pt.depth,wt,Xt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,Bt,Mt.width,Mt.height,pt.depth,0,wt,Xt,Mt.data)}else{O&&mt&&e.texStorage2D(n.TEXTURE_2D,Ct,Bt,Kt[0].width,Kt[0].height);for(let dt=0,lt=Kt.length;dt<lt;dt++)Mt=Kt[dt],w.format!==Rn?wt!==null?O?_t&&e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,wt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,Bt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?_t&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,wt,Xt,Mt.data):e.texImage2D(n.TEXTURE_2D,dt,Bt,Mt.width,Mt.height,0,wt,Xt,Mt.data)}else if(w.isDataArrayTexture)if(O){if(mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Bt,pt.width,pt.height,pt.depth),_t)if(w.layerUpdates.size>0){let dt=zc(pt.width,pt.height,w.format,w.type);for(let lt of w.layerUpdates){let Lt=pt.data.subarray(lt*dt/pt.data.BYTES_PER_ELEMENT,(lt+1)*dt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,pt.width,pt.height,1,wt,Xt,Lt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,wt,Xt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Bt,pt.width,pt.height,pt.depth,0,wt,Xt,pt.data);else if(w.isData3DTexture)O?(mt&&e.texStorage3D(n.TEXTURE_3D,Ct,Bt,pt.width,pt.height,pt.depth),_t&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,wt,Xt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Bt,pt.width,pt.height,pt.depth,0,wt,Xt,pt.data);else if(w.isFramebufferTexture){if(mt)if(O)e.texStorage2D(n.TEXTURE_2D,Ct,Bt,pt.width,pt.height);else{let dt=pt.width,lt=pt.height;for(let Lt=0;Lt<Ct;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,Bt,dt,lt,0,wt,Xt,null),dt>>=1,lt>>=1}}else if(Kt.length>0){if(O&&mt){let dt=Z(Kt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Bt,dt.width,dt.height)}for(let dt=0,lt=Kt.length;dt<lt;dt++)Mt=Kt[dt],O?_t&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,wt,Xt,Mt):e.texImage2D(n.TEXTURE_2D,dt,Bt,wt,Xt,Mt);w.generateMipmaps=!1}else if(O){if(mt){let dt=Z(pt);e.texStorage2D(n.TEXTURE_2D,Ct,Bt,dt.width,dt.height)}_t&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,Xt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Bt,wt,Xt,pt);g(w)&&m(Q),Ft.__version=tt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ct(C,w,z){if(w.image.length!==6)return;let Q=Vt(C,w),at=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);let tt=i.get(at);if(at.version!==tt.__version||Q===!0){e.activeTexture(n.TEXTURE0+z);let Ft=ae.getPrimaries(ae.workingColorSpace),xt=w.colorSpace===ai?null:ae.getPrimaries(w.colorSpace),Ut=w.colorSpace===ai||Ft===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let Nt=w.isCompressedTexture||w.image[0].isCompressedTexture,pt=w.image[0]&&w.image[0].isDataTexture,wt=[];for(let lt=0;lt<6;lt++)!Nt&&!pt?wt[lt]=x(w.image[lt],!0,s.maxCubemapSize):wt[lt]=pt?w.image[lt].image:w.image[lt],wt[lt]=vt(w,wt[lt]);let Xt=wt[0],Bt=r.convert(w.format,w.colorSpace),Mt=r.convert(w.type),Kt=v(w.internalFormat,Bt,Mt,w.colorSpace),O=w.isVideoTexture!==!0,mt=tt.__version===void 0||Q===!0,_t=at.dataReady,Ct=S(w,Xt);Tt(n.TEXTURE_CUBE_MAP,w);let dt;if(Nt){O&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Kt,Xt.width,Xt.height);for(let lt=0;lt<6;lt++){dt=wt[lt].mipmaps;for(let Lt=0;Lt<dt.length;Lt++){let jt=dt[Lt];w.format!==Rn?Bt!==null?O?_t&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt,0,0,jt.width,jt.height,Bt,jt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt,Kt,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt,0,0,jt.width,jt.height,Bt,Mt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt,Kt,jt.width,jt.height,0,Bt,Mt,jt.data)}}}else{if(dt=w.mipmaps,O&&mt){dt.length>0&&Ct++;let lt=Z(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Kt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(pt){O?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,wt[lt].width,wt[lt].height,Bt,Mt,wt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,wt[lt].width,wt[lt].height,0,Bt,Mt,wt[lt].data);for(let Lt=0;Lt<dt.length;Lt++){let ye=dt[Lt].image[lt].image;O?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt+1,0,0,ye.width,ye.height,Bt,Mt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt+1,Kt,ye.width,ye.height,0,Bt,Mt,ye.data)}}else{O?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt,Mt,wt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Kt,Bt,Mt,wt[lt]);for(let Lt=0;Lt<dt.length;Lt++){let jt=dt[Lt];O?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt+1,0,0,Bt,Mt,jt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Lt+1,Kt,Bt,Mt,jt.image[lt])}}}g(w)&&m(n.TEXTURE_CUBE_MAP),tt.__version=at.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function bt(C,w,z,Q,at,tt){let Ft=r.convert(z.format,z.colorSpace),xt=r.convert(z.type),Ut=v(z.internalFormat,Ft,xt,z.colorSpace),Nt=i.get(w),pt=i.get(z);if(pt.__renderTarget=w,!Nt.__hasExternalTextures){let wt=Math.max(1,w.width>>tt),Xt=Math.max(1,w.height>>tt);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,tt,Ut,wt,Xt,w.depth,0,Ft,xt,null):e.texImage2D(at,tt,Ut,wt,Xt,0,Ft,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),K(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,at,pt.__webglTexture,0,q(w)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,at,pt.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(C,w,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){let Q=w.depthTexture,at=Q&&Q.isDepthTexture?Q.type:null,tt=_(w.stencilBuffer,at),Ft=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=q(w);K(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,tt,w.width,w.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,tt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,tt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ft,n.RENDERBUFFER,C)}else{let Q=w.textures;for(let at=0;at<Q.length;at++){let tt=Q[at],Ft=r.convert(tt.format,tt.colorSpace),xt=r.convert(tt.type),Ut=v(tt.internalFormat,Ft,xt,tt.colorSpace),Nt=q(w);z&&K(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Ut,w.width,w.height):K(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,Ut,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ut,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(w.depthTexture);Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);let at=Q.__webglTexture,tt=q(w);if(w.depthTexture.format===Ms)K(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(w.depthTexture.format===Os)K(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Wt(C){let w=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Q){let at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Q.removeEventListener("dispose",at)};Q.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=Q}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Q=C.texture.mipmaps;Q&&Q.length>0?Et(w.__webglFramebuffer[0],C):Et(w.__webglFramebuffer,C)}else if(z){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]===void 0)w.__webglDepthbuffer[Q]=n.createRenderbuffer(),Dt(w.__webglDepthbuffer[Q],C,!1);else{let at=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,tt)}}else{let Q=C.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Dt(w.__webglDepthbuffer,C,!1);else{let at=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(C,w,z){let Q=i.get(C);w!==void 0&&bt(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Wt(C)}function T(C){let w=C.texture,z=i.get(C),Q=i.get(w);C.addEventListener("dispose",E);let at=C.textures,tt=C.isWebGLCubeRenderTarget===!0,Ft=at.length>1;if(Ft||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=w.version,o.memory.textures++),tt){z.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[xt]=[];for(let Ut=0;Ut<w.mipmaps.length;Ut++)z.__webglFramebuffer[xt][Ut]=n.createFramebuffer()}else z.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let xt=0;xt<w.mipmaps.length;xt++)z.__webglFramebuffer[xt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ft)for(let xt=0,Ut=at.length;xt<Ut;xt++){let Nt=i.get(at[xt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&K(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xt=0;xt<at.length;xt++){let Ut=at[xt];z.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[xt]);let Nt=r.convert(Ut.format,Ut.colorSpace),pt=r.convert(Ut.type),wt=v(Ut.internalFormat,Nt,pt,Ut.colorSpace,C.isXRRenderTarget===!0),Xt=q(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,wt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,z.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Dt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Tt(n.TEXTURE_CUBE_MAP,w);for(let xt=0;xt<6;xt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ut=0;Ut<w.mipmaps.length;Ut++)bt(z.__webglFramebuffer[xt][Ut],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ut);else bt(z.__webglFramebuffer[xt],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);g(w)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let xt=0,Ut=at.length;xt<Ut;xt++){let Nt=at[xt],pt=i.get(Nt),wt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(wt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(wt,pt.__webglTexture),Tt(wt,Nt),bt(z.__webglFramebuffer,C,Nt,n.COLOR_ATTACHMENT0+xt,wt,0),g(Nt)&&m(wt)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,Q.__webglTexture),Tt(xt,w),w.mipmaps&&w.mipmaps.length>0)for(let Ut=0;Ut<w.mipmaps.length;Ut++)bt(z.__webglFramebuffer[Ut],C,w,n.COLOR_ATTACHMENT0,xt,Ut);else bt(z.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,xt,0);g(w)&&m(xt),e.unbindTexture()}C.depthBuffer&&Wt(C)}function rt(C){let w=C.textures;for(let z=0,Q=w.length;z<Q;z++){let at=w[z];if(g(at)){let tt=y(C),Ft=i.get(at).__webglTexture;e.bindTexture(tt,Ft),m(tt),e.unbindTexture()}}}let nt=[],it=[];function ot(C){if(C.samples>0){if(K(C)===!1){let w=C.textures,z=C.width,Q=C.height,at=n.COLOR_BUFFER_BIT,tt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ft=i.get(C),xt=w.length>1;if(xt)for(let Nt=0;Nt<w.length;Nt++)e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);let Ut=C.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Nt=0;Nt<w.length;Nt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Nt]);let pt=i.get(w[Nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pt,0)}n.blitFramebuffer(0,0,z,Q,0,0,z,Q,at,n.NEAREST),l===!0&&(nt.length=0,it.length=0,nt.push(n.COLOR_ATTACHMENT0+Nt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(nt.push(tt),it.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,it)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Nt=0;Nt<w.length;Nt++){e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,Ft.__webglColorRenderbuffer[Nt]);let pt=i.get(w[Nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function q(C){return Math.min(s.maxSamples,C.samples)}function K(C){let w=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ut(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function vt(C,w){let z=C.colorSpace,Q=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Vi&&z!==ai&&(ae.getTransfer(z)===fe?(Q!==Rn||at!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Z(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=ge,this.setupRenderTarget=T,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=K}function q1(n,t){function e(i,s=ai){let r,o=ae.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===Sa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ec)return n.BYTE;if(i===Ac)return n.SHORT;if(i===Us)return n.UNSIGNED_SHORT;if(i===ba)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===Ns)return n.HALF_FLOAT;if(i===Cc)return n.ALPHA;if(i===Pc)return n.RGB;if(i===Rn)return n.RGBA;if(i===Ms)return n.DEPTH_COMPONENT;if(i===Os)return n.DEPTH_STENCIL;if(i===Ea)return n.RED;if(i===Aa)return n.RED_INTEGER;if(i===Ic)return n.RG;if(i===Ta)return n.RG_INTEGER;if(i===Ra)return n.RGBA_INTEGER;if(i===qr||i===Yr||i===Zr||i===$r)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ca||i===Pa||i===Ia||i===La)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Da||i===Fa||i===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Da||i===Fa)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ua)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Na||i===Ba||i===Oa||i===ka||i===za||i===Ha||i===Va||i===Ga||i===Wa||i===Xa||i===qa||i===Ya||i===Za||i===$a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Na)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ba)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ka)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===za)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Va)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ga)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ya)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Za)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$a)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ja||i===Qa||i===Ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ja)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ka||i===tl||i===el||i===nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z1=`
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

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Tr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Bn({vertexShader:Y1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Nr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends si{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding!="undefined",g=new Kc,m={},y=e.getContextAttributes(),v=null,_=null,S=[],A=[],E=new It,I=null,M=new We;M.viewport=new de;let b=new We;b.viewport=new de;let D=[M,b],L=new ca,U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ct=S[st];return ct===void 0&&(ct=new Es,S[st]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(st){let ct=S[st];return ct===void 0&&(ct=new Es,S[st]=ct),ct.getGripSpace()},this.getHand=function(st){let ct=S[st];return ct===void 0&&(ct=new Es,S[st]=ct),ct.getHandSpace()};function H(st){let ct=A.indexOf(st.inputSource);if(ct===-1)return;let bt=S[ct];bt!==void 0&&(bt.update(st.inputSource,st.frame,c||o),bt.dispatchEvent({type:st.type,data:st.inputSource}))}function B(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let st=0;st<S.length;st++){let ct=A[st];ct!==null&&(A[st]=null,S[st].disconnect(ct))}U=null,N=null,g.reset();for(let st in m)delete m[st];t.setRenderTarget(v),d=null,f=null,u=null,s=null,_=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Dt=null,Et=null;y.depth&&(Et=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=y.stencil?Os:Ms,Dt=y.stencil?Bs:Ri);let Wt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Gn(f.textureWidth,f.textureHeight,{format:Rn,type:On,depthTexture:new Ar(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let bt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Gn(d.framebufferWidth,d.framebufferHeight,{format:Rn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(st){for(let ct=0;ct<st.removed.length;ct++){let bt=st.removed[ct],Dt=A.indexOf(bt);Dt>=0&&(A[Dt]=null,S[Dt].disconnect(bt))}for(let ct=0;ct<st.added.length;ct++){let bt=st.added[ct],Dt=A.indexOf(bt);if(Dt===-1){for(let Wt=0;Wt<S.length;Wt++)if(Wt>=A.length){A.push(bt),Dt=Wt;break}else if(A[Wt]===null){A[Wt]=bt,Dt=Wt;break}if(Dt===-1)break}let Et=S[Dt];Et&&Et.connect(bt)}}let k=new F,X=new F;function V(st,ct,bt){k.setFromMatrixPosition(ct.matrixWorld),X.setFromMatrixPosition(bt.matrixWorld);let Dt=k.distanceTo(X),Et=ct.projectionMatrix.elements,Wt=bt.projectionMatrix.elements,ge=Et[14]/(Et[10]-1),T=Et[14]/(Et[10]+1),rt=(Et[9]+1)/Et[5],nt=(Et[9]-1)/Et[5],it=(Et[8]-1)/Et[0],ot=(Wt[8]+1)/Wt[0],q=ge*it,K=ge*ot,ut=Dt/(-it+ot),vt=ut*-it;if(ct.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(vt),st.translateZ(ut),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Et[10]===-1)st.projectionMatrix.copy(ct.projectionMatrix),st.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let Z=ge+ut,C=T+ut,w=q-vt,z=K+(Dt-vt),Q=rt*T/C*Z,at=nt*T/C*Z;st.projectionMatrix.makePerspective(w,z,Q,at,Z,C),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function et(st,ct){ct===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ct.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ct=st.near,bt=st.far;g.texture!==null&&(g.depthNear>0&&(ct=g.depthNear),g.depthFar>0&&(bt=g.depthFar)),L.near=b.near=M.near=ct,L.far=b.far=M.far=bt,(U!==L.near||N!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,N=L.far),L.layers.mask=st.layers.mask|6,M.layers.mask=L.layers.mask&3,b.layers.mask=L.layers.mask&5;let Dt=st.parent,Et=L.cameras;et(L,Dt);for(let Wt=0;Wt<Et.length;Wt++)et(Et[Wt],Dt);Et.length===2?V(L,M,b):L.projectionMatrix.copy(M.projectionMatrix),Tt(st,L,Dt)};function Tt(st,ct,bt){bt===null?st.matrix.copy(ct.matrixWorld):(st.matrix.copy(bt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ct.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ct.projectionMatrix),st.projectionMatrixInverse.copy(ct.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Oo*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(st){l=st,f!==null&&(f.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(st){return m[st]};let Vt=null;function Qt(st,ct){if(h=ct.getViewerPose(c||o),p=ct,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Dt=!1;bt.length!==L.cameras.length&&(L.cameras.length=0,Dt=!0);for(let T=0;T<bt.length;T++){let rt=bt[T],nt=null;if(d!==null)nt=d.getViewport(rt);else{let ot=u.getViewSubImage(f,rt);nt=ot.viewport,T===0&&(t.setRenderTargetTextures(_,ot.colorTexture,ot.depthStencilTexture),t.setRenderTarget(_))}let it=D[T];it===void 0&&(it=new We,it.layers.enable(T),it.viewport=new de,D[T]=it),it.matrix.fromArray(rt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(rt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(nt.x,nt.y,nt.width,nt.height),T===0&&(L.matrix.copy(it.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Dt===!0&&L.cameras.push(it)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let T=u.getDepthInformation(bt[0]);T&&T.isValid&&T.texture&&g.init(T,s.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let T=0;T<bt.length;T++){let rt=bt[T].camera;if(rt){let nt=m[rt];nt||(nt=new Tr,m[rt]=nt);let it=u.getCameraImage(rt);nt.sourceTexture=it}}}}for(let bt=0;bt<S.length;bt++){let Dt=A[bt],Et=S[bt];Dt!==null&&Et!==void 0&&Et.update(Dt,ct,c||o)}Vt&&Vt(st,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),p=null}let Zt=new pd;Zt.setAnimationLoop(Qt),this.setAnimationLoop=function(st){Vt=st},this.dispose=function(){}}},Qi=new Nn,$1=new ue;function j1(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Nc(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,v,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,y,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=t.get(m),v=y.envMap,_=y.envMapRotation;v&&(g.envMap.value=v,Qi.copy(_),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),g.envMapRotation.value.setFromMatrix4($1.makeRotationFromEuler(Qi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Q1(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let _=v.program;i.uniformBlockBinding(y,_)}function c(y,v){let _=s[y.id];_===void 0&&(p(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",g));let S=v.program;i.updateUBOMapping(y,S);let A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){let v=u();y.__bindingPointIndex=v;let _=n.createBuffer(),S=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,S,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],_=y.uniforms,S=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,E=_.length;A<E;A++){let I=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,b=I.length;M<b;M++){let D=I[M];if(d(D,A,M,S)===!0){let L=D.__offset,U=Array.isArray(D.value)?D.value:[D.value],N=0;for(let H=0;H<U.length;H++){let B=U[H],Y=x(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,L+N,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,v,_,S){let A=y.value,E=v+"_"+_;if(S[E]===void 0)return typeof A=="number"||typeof A=="boolean"?S[E]=A:S[E]=A.clone(),!0;{let I=S[E];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return S[E]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function p(y){let v=y.uniforms,_=0,S=16;for(let E=0,I=v.length;E<I;E++){let M=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,D=M.length;b<D;b++){let L=M[b],U=Array.isArray(L.value)?L.value:[L.value];for(let N=0,H=U.length;N<H;N++){let B=U[N],Y=x(B),k=_%S,X=k%Y.boundary,V=k+X;_+=X,V!==0&&S-V<Y.storage&&(_+=S-V),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=Y.storage}}}let A=_%S;return A>0&&(_+=S-A),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){let v=y.target;v.removeEventListener("dispose",g);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var al=class{constructor(t={}){let{canvas:e=Nu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,S=!1;this._outputColorSpace=gn;let A=0,E=0,I=null,M=-1,b=null,D=new de,L=new de,U=null,N=new Yt(0),H=0,B=e.width,Y=e.height,k=1,X=null,V=null,et=new de(0,0,B,Y),Tt=new de(0,0,B,Y),Vt=!1,Qt=new As,Zt=!1,st=!1,ct=new ue,bt=new F,Dt=new de,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function ge(){return I===null?k:1}let T=i;function rt(P,G){return e.getContext(P,G)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",dt,!1),T===null){let G="webgl2";if(T=rt(G,P),T===null)throw rt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let nt,it,ot,q,K,ut,vt,Z,C,w,z,Q,at,tt,Ft,xt,Ut,Nt,pt,wt,Xt,Bt,Mt,Kt;function O(){nt=new mg(T),nt.init(),Bt=new q1(T,nt),it=new lg(T,nt,t,Bt),ot=new W1(T,nt),it.reversedDepthBuffer&&f&&ot.buffers.depth.setReversed(!0),q=new _g(T),K=new I1,ut=new X1(T,nt,ot,K,it,Bt,q),vt=new hg(_),Z=new pg(_),C=new wp(T),Mt=new og(T,C),w=new gg(T,C,q,Mt),z=new vg(T,w,C,q),pt=new yg(T,it,ut),xt=new cg(K),Q=new P1(_,vt,Z,nt,it,Mt,xt),at=new j1(_,K),tt=new D1,Ft=new k1(nt),Nt=new rg(_,vt,Z,ot,z,d,l),Ut=new V1(_,z,it),Kt=new Q1(T,q,it,ot),wt=new ag(T,nt,q),Xt=new xg(T,nt,q),q.programs=Q.programs,_.capabilities=it,_.extensions=nt,_.properties=K,_.renderLists=tt,_.shadowMap=Ut,_.state=ot,_.info=q}O();let mt=new th(_,T);this.xr=mt,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let P=nt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=nt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(B,Y,!1))},this.getSize=function(P){return P.set(B,Y)},this.setSize=function(P,G,$=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,Y=G,e.width=Math.floor(P*k),e.height=Math.floor(G*k),$===!0&&(e.style.width=P+"px",e.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(B*k,Y*k).floor()},this.setDrawingBufferSize=function(P,G,$){B=P,Y=G,k=$,e.width=Math.floor(P*$),e.height=Math.floor(G*$),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(et)},this.setViewport=function(P,G,$,j){P.isVector4?et.set(P.x,P.y,P.z,P.w):et.set(P,G,$,j),ot.viewport(D.copy(et).multiplyScalar(k).round())},this.getScissor=function(P){return P.copy(Tt)},this.setScissor=function(P,G,$,j){P.isVector4?Tt.set(P.x,P.y,P.z,P.w):Tt.set(P,G,$,j),ot.scissor(L.copy(Tt).multiplyScalar(k).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(P){ot.setScissorTest(Vt=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){V=P},this.getClearColor=function(P){return P.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,$=!0){let j=0;if(P){let W=!1;if(I!==null){let ft=I.texture.format;W=ft===Ra||ft===Ta||ft===Aa}if(W){let ft=I.texture.type,St=ft===On||ft===Ri||ft===Us||ft===Bs||ft===Sa||ft===wa,Pt=Nt.getClearColor(),Rt=Nt.getClearAlpha(),Gt=Pt.r,qt=Pt.g,kt=Pt.b;St?(p[0]=Gt,p[1]=qt,p[2]=kt,p[3]=Rt,T.clearBufferuiv(T.COLOR,0,p)):(x[0]=Gt,x[1]=qt,x[2]=kt,x[3]=Rt,T.clearBufferiv(T.COLOR,0,x))}else j|=T.COLOR_BUFFER_BIT}G&&(j|=T.DEPTH_BUFFER_BIT),$&&(j|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Nt.dispose(),tt.dispose(),Ft.dispose(),K.dispose(),vt.dispose(),Z.dispose(),z.dispose(),Mt.dispose(),Kt.dispose(),Q.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Vn),mt.removeEventListener("sessionend",xh),Di.stop()};function _t(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let P=q.autoReset,G=Ut.enabled,$=Ut.autoUpdate,j=Ut.needsUpdate,W=Ut.type;O(),q.autoReset=P,Ut.enabled=G,Ut.autoUpdate=$,Ut.needsUpdate=j,Ut.type=W}function dt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function lt(P){let G=P.target;G.removeEventListener("dispose",lt),Lt(G)}function Lt(P){jt(P),K.remove(P)}function jt(P){let G=K.get(P).programs;G!==void 0&&(G.forEach(function($){Q.releaseProgram($)}),P.isShaderMaterial&&Q.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,$,j,W,ft){G===null&&(G=Et);let St=W.isMesh&&W.matrixWorld.determinant()<0,Pt=af(P,G,$,j,W);ot.setMaterial(j,St);let Rt=$.index,Gt=1;if(j.wireframe===!0){if(Rt=w.getWireframeAttribute($),Rt===void 0)return;Gt=2}let qt=$.drawRange,kt=$.attributes.position,se=qt.start*Gt,pe=(qt.start+qt.count)*Gt;ft!==null&&(se=Math.max(se,ft.start*Gt),pe=Math.min(pe,(ft.start+ft.count)*Gt)),Rt!==null?(se=Math.max(se,0),pe=Math.min(pe,Rt.count)):kt!=null&&(se=Math.max(se,0),pe=Math.min(pe,kt.count));let Ae=pe-se;if(Ae<0||Ae===1/0)return;Mt.setup(W,j,Pt,$,Rt);let ve,xe=wt;if(Rt!==null&&(ve=C.get(Rt),xe=Xt,xe.setIndex(ve)),W.isMesh)j.wireframe===!0?(ot.setLineWidth(j.wireframeLinewidth*ge()),xe.setMode(T.LINES)):xe.setMode(T.TRIANGLES);else if(W.isLine){let zt=j.linewidth;zt===void 0&&(zt=1),ot.setLineWidth(zt*ge()),W.isLineSegments?xe.setMode(T.LINES):W.isLineLoop?xe.setMode(T.LINE_LOOP):xe.setMode(T.LINE_STRIP)}else W.isPoints?xe.setMode(T.POINTS):W.isSprite&&xe.setMode(T.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))xe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let zt=W._multiDrawStarts,Se=W._multiDrawCounts,le=W._multiDrawCount,dn=Rt?C.get(Rt).bytesPerElement:1,os=K.get(j).currentProgram.getUniforms();for(let fn=0;fn<le;fn++)os.setValue(T,"_gl_DrawID",fn),xe.render(zt[fn]/dn,Se[fn])}else if(W.isInstancedMesh)xe.renderInstances(se,Ae,W.count);else if($.isInstancedBufferGeometry){let zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Se=Math.min($.instanceCount,zt);xe.renderInstances(se,Ae,Se)}else xe.render(se,Ae)};function ye(P,G,$){P.transparent===!0&&P.side===Ze&&P.forceSinglePass===!1?(P.side=nn,P.needsUpdate=!0,lo(P,G,$),P.side=ii,P.needsUpdate=!0,lo(P,G,$),P.side=Ze):lo(P,G,$)}this.compile=function(P,G,$=null){$===null&&($=P),m=Ft.get($),m.init(G),v.push(m),$.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),P!==$&&P.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();let j=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ft=W.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){let Pt=ft[St];ye(Pt,$,W),j.add(Pt)}else ye(ft,$,W),j.add(ft)}),m=v.pop(),j},this.compileAsync=function(P,G,$=null){let j=this.compile(P,G,$);return new Promise(W=>{function ft(){if(j.forEach(function(St){K.get(St).currentProgram.isReady()&&j.delete(St)}),j.size===0){W(P);return}setTimeout(ft,10)}nt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let he=null;function jn(P){he&&he(P)}function Vn(){Di.stop()}function xh(){Di.start()}let Di=new pd;Di.setAnimationLoop(jn),typeof self!="undefined"&&Di.setContext(self),this.setAnimationLoop=function(P){he=P,mt.setAnimationLoop(P),P===null?Di.stop():Di.start()},mt.addEventListener("sessionstart",Vn),mt.addEventListener("sessionend",xh),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(G),G=mt.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,G,I),m=Ft.get(P,v.length),m.init(G),v.push(m),ct.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Qt.setFromProjectionMatrix(ct,Dn,G.reversedDepth),st=this.localClippingEnabled,Zt=xt.init(this.clippingPlanes,st),g=tt.get(P,y.length),g.init(),y.push(g),mt.enabled===!0&&mt.isPresenting===!0){let ft=_.xr.getDepthSensingMesh();ft!==null&&Cl(ft,G,-1/0,_.sortObjects)}Cl(P,G,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(X,V),Wt=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Wt&&Nt.addToRenderList(g,P),this.info.render.frame++,Zt===!0&&xt.beginShadows();let $=m.state.shadowsArray;Ut.render($,P,G),Zt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=g.opaque,W=g.transmissive;if(m.setupLights(),G.isArrayCamera){let ft=G.cameras;if(W.length>0)for(let St=0,Pt=ft.length;St<Pt;St++){let Rt=ft[St];yh(j,W,P,Rt)}Wt&&Nt.render(P);for(let St=0,Pt=ft.length;St<Pt;St++){let Rt=ft[St];_h(g,P,Rt,Rt.viewport)}}else W.length>0&&yh(j,W,P,G),Wt&&Nt.render(P),_h(g,P,G);I!==null&&E===0&&(ut.updateMultisampleRenderTarget(I),ut.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(_,P,G),Mt.resetDefaultState(),M=-1,b=null,v.pop(),v.length>0?(m=v[v.length-1],Zt===!0&&xt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Cl(P,G,$,j){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Qt.intersectsSprite(P)){j&&Dt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ct);let St=z.update(P),Pt=P.material;Pt.visible&&g.push(P,St,Pt,$,Dt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Qt.intersectsObject(P))){let St=z.update(P),Pt=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Dt.copy(P.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Dt.copy(St.boundingSphere.center)),Dt.applyMatrix4(P.matrixWorld).applyMatrix4(ct)),Array.isArray(Pt)){let Rt=St.groups;for(let Gt=0,qt=Rt.length;Gt<qt;Gt++){let kt=Rt[Gt],se=Pt[kt.materialIndex];se&&se.visible&&g.push(P,St,se,$,Dt.z,kt)}}else Pt.visible&&g.push(P,St,Pt,$,Dt.z,null)}}let ft=P.children;for(let St=0,Pt=ft.length;St<Pt;St++)Cl(ft[St],G,$,j)}function _h(P,G,$,j){let W=P.opaque,ft=P.transmissive,St=P.transparent;m.setupLightsView($),Zt===!0&&xt.setGlobalState(_.clippingPlanes,$),j&&ot.viewport(D.copy(j)),W.length>0&&ao(W,G,$),ft.length>0&&ao(ft,G,$),St.length>0&&ao(St,G,$),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function yh(P,G,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Gn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Ns:On,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let ft=m.state.transmissionRenderTarget[j.id],St=j.viewport||D;ft.setSize(St.z*_.transmissionResolutionScale,St.w*_.transmissionResolutionScale);let Pt=_.getRenderTarget(),Rt=_.getActiveCubeFace(),Gt=_.getActiveMipmapLevel();_.setRenderTarget(ft),_.getClearColor(N),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),Wt&&Nt.render($);let qt=_.toneMapping;_.toneMapping=oi;let kt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),Zt===!0&&xt.setGlobalState(_.clippingPlanes,j),ao(P,$,j),ut.updateMultisampleRenderTarget(ft),ut.updateRenderTargetMipmap(ft),nt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let pe=0,Ae=G.length;pe<Ae;pe++){let ve=G[pe],xe=ve.object,zt=ve.geometry,Se=ve.material,le=ve.group;if(Se.side===Ze&&xe.layers.test(j.layers)){let dn=Se.side;Se.side=nn,Se.needsUpdate=!0,vh(xe,$,j,zt,Se,le),Se.side=dn,Se.needsUpdate=!0,se=!0}}se===!0&&(ut.updateMultisampleRenderTarget(ft),ut.updateRenderTargetMipmap(ft))}_.setRenderTarget(Pt,Rt,Gt),_.setClearColor(N,H),kt!==void 0&&(j.viewport=kt),_.toneMapping=qt}function ao(P,G,$){let j=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ft=P.length;W<ft;W++){let St=P[W],Pt=St.object,Rt=St.geometry,Gt=St.group,qt=St.material;qt.allowOverride===!0&&j!==null&&(qt=j),Pt.layers.test($.layers)&&vh(Pt,G,$,Rt,qt,Gt)}}function vh(P,G,$,j,W,ft){P.onBeforeRender(_,G,$,j,W,ft),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(_,G,$,j,P,ft),W.transparent===!0&&W.side===Ze&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,_.renderBufferDirect($,G,j,W,P,ft),W.side=ii,W.needsUpdate=!0,_.renderBufferDirect($,G,j,W,P,ft),W.side=Ze):_.renderBufferDirect($,G,j,W,P,ft),P.onAfterRender(_,G,$,j,W,ft)}function lo(P,G,$){G.isScene!==!0&&(G=Et);let j=K.get(P),W=m.state.lights,ft=m.state.shadowsArray,St=W.state.version,Pt=Q.getParameters(P,W.state,ft,G,$),Rt=Q.getProgramCacheKey(Pt),Gt=j.programs;j.environment=P.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(P.isMeshStandardMaterial?Z:vt).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Gt===void 0&&(P.addEventListener("dispose",lt),Gt=new Map,j.programs=Gt);let qt=Gt.get(Rt);if(qt!==void 0){if(j.currentProgram===qt&&j.lightsStateVersion===St)return bh(P,Pt),qt}else Pt.uniforms=Q.getUniforms(P),P.onBeforeCompile(Pt,_),qt=Q.acquireProgram(Pt,Rt),Gt.set(Rt,qt),j.uniforms=Pt.uniforms;let kt=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(kt.clippingPlanes=xt.uniform),bh(P,Pt),j.needsLights=cf(P),j.lightsStateVersion=St,j.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.directionalShadowMap.value=W.state.directionalShadowMap,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotShadowMap.value=W.state.spotShadowMap,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMap.value=W.state.pointShadowMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=qt,j.uniformsList=null,qt}function Mh(P){if(P.uniformsList===null){let G=P.currentProgram.getUniforms();P.uniformsList=Hs.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function bh(P,G){let $=K.get(P);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function af(P,G,$,j,W){G.isScene!==!0&&(G=Et),ut.resetTextureUnits();let ft=G.fog,St=j.isMeshStandardMaterial?G.environment:null,Pt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vi,Rt=(j.isMeshStandardMaterial?Z:vt).get(j.envMap||St),Gt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),kt=!!$.morphAttributes.position,se=!!$.morphAttributes.normal,pe=!!$.morphAttributes.color,Ae=oi;j.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ae=_.toneMapping);let ve=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xe=ve!==void 0?ve.length:0,zt=K.get(j),Se=m.state.lights;if(Zt===!0&&(st===!0||P!==b)){let en=P===b&&j.id===M;xt.setState(j,P,en)}let le=!1;j.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Se.state.version||zt.outputColorSpace!==Pt||W.isBatchedMesh&&zt.batching===!1||!W.isBatchedMesh&&zt.batching===!0||W.isBatchedMesh&&zt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&zt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&zt.instancing===!1||!W.isInstancedMesh&&zt.instancing===!0||W.isSkinnedMesh&&zt.skinning===!1||!W.isSkinnedMesh&&zt.skinning===!0||W.isInstancedMesh&&zt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&zt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&zt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&zt.instancingMorph===!1&&W.morphTexture!==null||zt.envMap!==Rt||j.fog===!0&&zt.fog!==ft||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==xt.numPlanes||zt.numIntersection!==xt.numIntersection)||zt.vertexAlphas!==Gt||zt.vertexTangents!==qt||zt.morphTargets!==kt||zt.morphNormals!==se||zt.morphColors!==pe||zt.toneMapping!==Ae||zt.morphTargetsCount!==xe)&&(le=!0):(le=!0,zt.__version=j.version);let dn=zt.currentProgram;le===!0&&(dn=lo(j,G,W));let os=!1,fn=!1,er=!1,we=dn.getUniforms(),Sn=zt.uniforms;if(ot.useProgram(dn.program)&&(os=!0,fn=!0,er=!0),j.id!==M&&(M=j.id,fn=!0),os||b!==P){ot.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),we.setValue(T,"projectionMatrix",P.projectionMatrix),we.setValue(T,"viewMatrix",P.matrixWorldInverse);let rn=we.map.cameraPosition;rn!==void 0&&rn.setValue(T,bt.setFromMatrixPosition(P.matrixWorld)),it.logarithmicDepthBuffer&&we.setValue(T,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&we.setValue(T,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,fn=!0,er=!0)}if(W.isSkinnedMesh){we.setOptional(T,W,"bindMatrix"),we.setOptional(T,W,"bindMatrixInverse");let en=W.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),we.setValue(T,"boneTexture",en.boneTexture,ut))}W.isBatchedMesh&&(we.setOptional(T,W,"batchingTexture"),we.setValue(T,"batchingTexture",W._matricesTexture,ut),we.setOptional(T,W,"batchingIdTexture"),we.setValue(T,"batchingIdTexture",W._indirectTexture,ut),we.setOptional(T,W,"batchingColorTexture"),W._colorsTexture!==null&&we.setValue(T,"batchingColorTexture",W._colorsTexture,ut));let wn=$.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&pt.update(W,$,dn),(fn||zt.receiveShadow!==W.receiveShadow)&&(zt.receiveShadow=W.receiveShadow,we.setValue(T,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Sn.envMap.value=Rt,Sn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(Sn.envMapIntensity.value=G.environmentIntensity),fn&&(we.setValue(T,"toneMappingExposure",_.toneMappingExposure),zt.needsLights&&lf(Sn,er),ft&&j.fog===!0&&at.refreshFogUniforms(Sn,ft),at.refreshMaterialUniforms(Sn,j,k,Y,m.state.transmissionRenderTarget[P.id]),Hs.upload(T,Mh(zt),Sn,ut)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Hs.upload(T,Mh(zt),Sn,ut),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&we.setValue(T,"center",W.center),we.setValue(T,"modelViewMatrix",W.modelViewMatrix),we.setValue(T,"normalMatrix",W.normalMatrix),we.setValue(T,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let en=j.uniformsGroups;for(let rn=0,Pl=en.length;rn<Pl;rn++){let Fi=en[rn];Kt.update(Fi,dn),Kt.bind(Fi,dn)}}return dn}function lf(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function cf(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,G,$){let j=K.get(P);j.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),K.get(P.texture).__webglTexture=G,K.get(P.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){let $=K.get(P);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0};let hf=T.createFramebuffer();this.setRenderTarget=function(P,G=0,$=0){I=P,A=G,E=$;let j=!0,W=null,ft=!1,St=!1;if(P){let Rt=K.get(P);if(Rt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(T.FRAMEBUFFER,null),j=!1;else if(Rt.__webglFramebuffer===void 0)ut.setupRenderTarget(P);else if(Rt.__hasExternalTextures)ut.rebindTextures(P,K.get(P.texture).__webglTexture,K.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let kt=P.depthTexture;if(Rt.__boundDepthTexture!==kt){if(kt!==null&&K.has(kt)&&(P.width!==kt.image.width||P.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(P)}}let Gt=P.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(St=!0);let qt=K.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qt[G])?W=qt[G][$]:W=qt[G],ft=!0):P.samples>0&&ut.useMultisampledRTT(P)===!1?W=K.get(P).__webglMultisampledFramebuffer:Array.isArray(qt)?W=qt[$]:W=qt,D.copy(P.viewport),L.copy(P.scissor),U=P.scissorTest}else D.copy(et).multiplyScalar(k).floor(),L.copy(Tt).multiplyScalar(k).floor(),U=Vt;if($!==0&&(W=hf),ot.bindFramebuffer(T.FRAMEBUFFER,W)&&j&&ot.drawBuffers(P,W),ot.viewport(D),ot.scissor(L),ot.setScissorTest(U),ft){let Rt=K.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+G,Rt.__webglTexture,$)}else if(St){let Rt=G;for(let Gt=0;Gt<P.textures.length;Gt++){let qt=K.get(P.textures[Gt]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Gt,qt.__webglTexture,$,Rt)}}else if(P!==null&&$!==0){let Rt=K.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Rt.__webglTexture,$)}M=-1},this.readRenderTargetPixels=function(P,G,$,j,W,ft,St,Pt=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt){ot.bindFramebuffer(T.FRAMEBUFFER,Rt);try{let Gt=P.textures[Pt],qt=Gt.format,kt=Gt.type;if(!it.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-j&&$>=0&&$<=P.height-W&&(P.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Pt),T.readPixels(G,$,j,W,Bt.convert(qt),Bt.convert(kt),ft))}finally{let Gt=I!==null?K.get(I).__webglFramebuffer:null;ot.bindFramebuffer(T.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(P,G,$,j,W,ft,St,Pt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt)if(G>=0&&G<=P.width-j&&$>=0&&$<=P.height-W){ot.bindFramebuffer(T.FRAMEBUFFER,Rt);let Gt=P.textures[Pt],qt=Gt.format,kt=Gt.type;if(!it.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,se),T.bufferData(T.PIXEL_PACK_BUFFER,ft.byteLength,T.STREAM_READ),P.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Pt),T.readPixels(G,$,j,W,Bt.convert(qt),Bt.convert(kt),0);let pe=I!==null?K.get(I).__webglFramebuffer:null;ot.bindFramebuffer(T.FRAMEBUFFER,pe);let Ae=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Bu(T,Ae,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,se),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ft),T.deleteBuffer(se),T.deleteSync(Ae),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,$=0){let j=Math.pow(2,-$),W=Math.floor(P.image.width*j),ft=Math.floor(P.image.height*j),St=G!==null?G.x:0,Pt=G!==null?G.y:0;ut.setTexture2D(P,0),T.copyTexSubImage2D(T.TEXTURE_2D,$,0,0,St,Pt,W,ft),ot.unbindTexture()};let uf=T.createFramebuffer(),df=T.createFramebuffer();this.copyTextureToTexture=function(P,G,$=null,j=null,W=0,ft=null){ft===null&&(W!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=W,W=0):ft=0);let St,Pt,Rt,Gt,qt,kt,se,pe,Ae,ve=P.isCompressedTexture?P.mipmaps[ft]:P.image;if($!==null)St=$.max.x-$.min.x,Pt=$.max.y-$.min.y,Rt=$.isBox3?$.max.z-$.min.z:1,Gt=$.min.x,qt=$.min.y,kt=$.isBox3?$.min.z:0;else{let wn=Math.pow(2,-W);St=Math.floor(ve.width*wn),Pt=Math.floor(ve.height*wn),P.isDataArrayTexture?Rt=ve.depth:P.isData3DTexture?Rt=Math.floor(ve.depth*wn):Rt=1,Gt=0,qt=0,kt=0}j!==null?(se=j.x,pe=j.y,Ae=j.z):(se=0,pe=0,Ae=0);let xe=Bt.convert(G.format),zt=Bt.convert(G.type),Se;G.isData3DTexture?(ut.setTexture3D(G,0),Se=T.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ut.setTexture2DArray(G,0),Se=T.TEXTURE_2D_ARRAY):(ut.setTexture2D(G,0),Se=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,G.unpackAlignment);let le=T.getParameter(T.UNPACK_ROW_LENGTH),dn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),os=T.getParameter(T.UNPACK_SKIP_PIXELS),fn=T.getParameter(T.UNPACK_SKIP_ROWS),er=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ve.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ve.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Gt),T.pixelStorei(T.UNPACK_SKIP_ROWS,qt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,kt);let we=P.isDataArrayTexture||P.isData3DTexture,Sn=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){let wn=K.get(P),en=K.get(G),rn=K.get(wn.__renderTarget),Pl=K.get(en.__renderTarget);ot.bindFramebuffer(T.READ_FRAMEBUFFER,rn.__webglFramebuffer),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,Pl.__webglFramebuffer);for(let Fi=0;Fi<Rt;Fi++)we&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,K.get(P).__webglTexture,W,kt+Fi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,K.get(G).__webglTexture,ft,Ae+Fi)),T.blitFramebuffer(Gt,qt,St,Pt,se,pe,St,Pt,T.DEPTH_BUFFER_BIT,T.NEAREST);ot.bindFramebuffer(T.READ_FRAMEBUFFER,null),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(W!==0||P.isRenderTargetTexture||K.has(P)){let wn=K.get(P),en=K.get(G);ot.bindFramebuffer(T.READ_FRAMEBUFFER,uf),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,df);for(let rn=0;rn<Rt;rn++)we?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,wn.__webglTexture,W,kt+rn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,wn.__webglTexture,W),Sn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,en.__webglTexture,ft,Ae+rn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,en.__webglTexture,ft),W!==0?T.blitFramebuffer(Gt,qt,St,Pt,se,pe,St,Pt,T.COLOR_BUFFER_BIT,T.NEAREST):Sn?T.copyTexSubImage3D(Se,ft,se,pe,Ae+rn,Gt,qt,St,Pt):T.copyTexSubImage2D(Se,ft,se,pe,Gt,qt,St,Pt);ot.bindFramebuffer(T.READ_FRAMEBUFFER,null),ot.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Sn?P.isDataTexture||P.isData3DTexture?T.texSubImage3D(Se,ft,se,pe,Ae,St,Pt,Rt,xe,zt,ve.data):G.isCompressedArrayTexture?T.compressedTexSubImage3D(Se,ft,se,pe,Ae,St,Pt,Rt,xe,ve.data):T.texSubImage3D(Se,ft,se,pe,Ae,St,Pt,Rt,xe,zt,ve):P.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ft,se,pe,St,Pt,xe,zt,ve.data):P.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ft,se,pe,ve.width,ve.height,xe,ve.data):T.texSubImage2D(T.TEXTURE_2D,ft,se,pe,St,Pt,xe,zt,ve);T.pixelStorei(T.UNPACK_ROW_LENGTH,le),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,dn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,os),T.pixelStorei(T.UNPACK_SKIP_ROWS,fn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,er),ft===0&&G.generateMipmaps&&T.generateMipmap(Se),ot.unbindTexture()},this.initRenderTarget=function(P){K.get(P).__webglFramebuffer===void 0&&ut.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ut.setTextureCube(P,0):P.isData3DTexture?ut.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ut.setTexture2DArray(P,0):ut.setTexture2D(P,0),ot.unbindTexture()},this.resetState=function(){A=0,E=0,I=null,ot.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};function yd(n,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,v=a.length;y<v;y++){let _=a[y],S=n.attributes[_];l[_]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let A=n.morphAttributes[_];A&&(c[_]||(c[_]=[]),A.forEach((E,I)=>{let M=new E.array.constructor(E.count*E.itemSize);c[_][I]=new E.constructor(M,E.itemSize,E.normalized)}))}let d=t*.5,p=Math.log10(1/t),x=Math.pow(10,p),g=d*x;for(let y=0;y<r;y++){let v=i?i.getX(y):y,_="";for(let S=0,A=a.length;S<A;S++){let E=a[S],I=n.getAttribute(E),M=I.itemSize;for(let b=0;b<M;b++)_+=`${~~(I[u[b]](v)*x+g)},`}if(_ in e)h.push(e[_]);else{for(let S=0,A=a.length;S<A;S++){let E=a[S],I=n.getAttribute(E),M=n.morphAttributes[E],b=I.itemSize,D=l[E],L=c[E];for(let U=0;U<b;U++){let N=u[U],H=f[U];if(D[H](o,I[N](v)),M)for(let B=0,Y=M.length;B<Y;B++)L[B][H](o,M[B][N](v))}}e[_]=o,h.push(o),o++}}let m=n.clone();for(let y in n.attributes){let v=l[y];if(m.setAttribute(y,new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),y in c)for(let _=0;_<c[y].length;_++){let S=c[y][_];m.morphAttributes[y][_]=new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return m.setIndex(h),m}var nh=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4),vd=new Map;function J1(n){if(Array.isArray(n))return n;let t=vd.get(n);if(t)return t;let e=parseInt(n.slice(1),16);return t=[nh((e>>16&255)/255),nh((e>>8&255)/255),nh((e&255)/255)],vd.set(n,t),t}var ts=class{constructor(t=null){this.L={},this.crop=t,this.mute=0,this.force=0}buf(t){return this.L[t]||(this.L[t]={p:[],n:[],c:[]})}tri(t,e,i,s,r){if(this.mute)return;if(this.crop&&!this.force){let y=this.crop,v=(i[0]+s[0]+r[0])/3,_=(i[2]+s[2]+r[2])/3;if(v<y[0]-1e-4||v>y[2]+1e-4||_<y[1]-1e-4||_>y[3]+1e-4)return}let o=this.buf(t),a=J1(e),l=s[0]-i[0],c=s[1]-i[1],h=s[2]-i[2],u=r[0]-i[0],f=r[1]-i[1],d=r[2]-i[2],p=c*d-h*f,x=h*u-l*d,g=l*f-c*u,m=Math.hypot(p,x,g)||1;p/=m,x/=m,g/=m,o.p.push(i[0],i[1],i[2],s[0],s[1],s[2],r[0],r[1],r[2]),o.n.push(p,x,g,p,x,g,p,x,g),o.c.push(a[0],a[1],a[2],a[0],a[1],a[2],a[0],a[1],a[2])}quad(t,e,i,s,r,o){this.tri(t,e,i,s,r),this.tri(t,e,i,r,o)}box(t,e,i,s,r,o,a,l,c=""){if(i>o&&([i,o]=[o,i]),s>a&&([s,a]=[a,s]),r>l&&([r,l]=[l,r]),this.mute)return;if(this.crop&&!this.force){let u=this.crop;i=Math.max(i,u[0]),o=Math.min(o,u[2]),r=Math.max(r,u[1]),l=Math.min(l,u[3])}if(o-i<1e-4||a-s<1e-4||l-r<1e-4)return;let h=(u,f,d)=>[u,f,d];c.includes("t")||this.quad(t,e,h(i,a,l),h(o,a,l),h(o,a,r),h(i,a,r)),c.includes("b")||this.quad(t,e,h(i,s,r),h(o,s,r),h(o,s,l),h(i,s,l)),this.quad(t,e,h(i,s,l),h(o,s,l),h(o,a,l),h(i,a,l)),this.quad(t,e,h(o,s,r),h(i,s,r),h(i,a,r),h(o,a,r)),this.quad(t,e,h(o,s,l),h(o,s,r),h(o,a,r),h(o,a,l)),this.quad(t,e,h(i,s,r),h(i,s,l),h(i,a,l),h(i,a,r))}obox(t,e,i,s,r,o){let a=(c,h,u)=>[i[0]+c*s[0]+h*r[0]+u*o[0],i[1]+c*s[1]+h*r[1]+u*o[1],i[2]+c*s[2]+h*r[2]+u*o[2]],l=(c,h,u,f)=>this.quad(t,e,c,h,u,f);l(a(-1,1,1),a(1,1,1),a(1,1,-1),a(-1,1,-1)),l(a(-1,-1,-1),a(1,-1,-1),a(1,-1,1),a(-1,-1,1)),l(a(-1,-1,1),a(1,-1,1),a(1,1,1),a(-1,1,1)),l(a(1,-1,-1),a(-1,-1,-1),a(-1,1,-1),a(1,1,-1)),l(a(1,-1,1),a(1,-1,-1),a(1,1,-1),a(1,1,1)),l(a(-1,-1,-1),a(-1,-1,1),a(-1,1,1),a(-1,1,-1))}ybox(t,e,i,s,r,o,a,l,c=0){if(this.crop&&!this.force){let f=c/(Math.PI/2),d=Math.round(f);if(Math.abs(f-d)<1e-6){let[p,x]=d%2===0?[o,l]:[l,o];return this.box(t,e,i-p/2,s-a/2,r-x/2,i+p/2,s+a/2,r+x/2)}}let h=Math.cos(c),u=Math.sin(c);this.obox(t,e,[i,s,r],[h*o/2,0,u*o/2],[0,a/2,0],[-u*l/2,0,h*l/2])}beam(t,e,i,s,r,o=r){if(this.crop&&!this.force&&Math.abs(i[1]-s[1])<1e-6&&(Math.abs(i[0]-s[0])<1e-6||Math.abs(i[2]-s[2])<1e-6)){let p=Math.abs(i[2]-s[2])<1e-6,x=r/2,g=o/2;return p?this.box(t,e,i[0],i[1]-g,i[2]-x,s[0],i[1]+g,i[2]+x):this.box(t,e,i[0]-x,i[1]-g,i[2],i[0]+x,i[1]+g,s[2])}let a=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],l=Math.hypot(...a)||1,c=a.map(p=>p/l),h=Math.abs(c[1])<.95?[c[2],0,-c[0]]:[1,0,0],u=Math.hypot(...h);h=h.map(p=>p/u);let f=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]],d=[(i[0]+s[0])/2,(i[1]+s[1])/2,(i[2]+s[2])/2];this.obox(t,e,d,h.map(p=>p*r/2),f.map(p=>p*o/2),c.map(p=>p*l/2))}prism(t,e,i,s,r,o={}){var f,d;let a=i.length,l=0;for(let p=0;p<a;p++){let x=i[p],g=i[(p+1)%a];l+=x[0]*g[1]-g[0]*x[1]}let c=l>0?i:[...i].reverse(),h=(f=o.top)!=null?f:e,u=(d=o.side)!=null?d:e;if(o.top!==!1)for(let p=1;p<a-1;p++)this.tri(t,h,[c[0][0],r,c[0][1]],[c[p+1][0],r,c[p+1][1]],[c[p][0],r,c[p][1]]);if(o.bottom!==!1)for(let p=1;p<a-1;p++)this.tri(t,u,[c[0][0],s,c[0][1]],[c[p][0],s,c[p][1]],[c[p+1][0],s,c[p+1][1]]);if(o.sides!==!1)for(let p=0;p<a;p++){let x=c[p],g=c[(p+1)%a];this.quad(t,u,[g[0],s,g[1]],[x[0],s,x[1]],[x[0],r,x[1]],[g[0],r,g[1]])}}cyl(t,e,i,s,r,o,a,l=8,c=Math.PI/8,h={}){let u=[];for(let f=0;f<l;f++){let d=c+f*Math.PI*2/l;u.push([i+Math.cos(d)*a,s+Math.sin(d)*a])}this.prism(t,e,u,r,o,h)}frustum(t,e,i,s,r,o,a,l,c=8,h=Math.PI/8){for(let u=0;u<c;u++){let f=h+u*Math.PI*2/c,d=h+(u+1)*Math.PI*2/c,p=[i+Math.cos(f)*a,r,s+Math.sin(f)*a],x=[i+Math.cos(d)*a,r,s+Math.sin(d)*a],g=[i+Math.cos(f)*l,o,s+Math.sin(f)*l],m=[i+Math.cos(d)*l,o,s+Math.sin(d)*l];this.quad(t,e,p,g,m,x),l>.001&&this.tri(t,e,[i,o,s],m,g),this.tri(t,e,[i,r,s],p,x)}}wall(t,e,i,s,r,o,a,l=[],c={}){let h=s[0]-i[0],u=s[1]-i[1],f=Math.hypot(h,u);if(f<.001)return null;let d=h/f,p=u/f,x=-p,g=d,m=o-r,y=(E,I,M=0)=>[i[0]+d*E+x*M,r+I,i[1]+p*E+g*M],v=new Set([0,f]),_=l.map(E=>{var I,M;return{s0:Math.max(0,E.a),s1:Math.min(f,E.a+E.w),y0:(I=E.y0)!=null?I:0,y1:Math.min(m,(M=E.y1)!=null?M:m)}}).filter(E=>E.s1>E.s0+.001);for(let E of _)v.add(E.s0),v.add(E.s1);let S=[...v].sort((E,I)=>E-I),A=Math.atan2(p,d);for(let E=0;E<S.length-1;E++){let I=S[E],M=S[E+1];if(M-I<.001)continue;let b=(I+M)/2,D=_.filter(N=>N.s0<=b&&N.s1>=b).sort((N,H)=>N.y0-H.y0),L=0,U=[];for(let N of D)N.y0>L+.001&&U.push([L,N.y0]),L=Math.max(L,N.y1);L<m-.001&&U.push([L,m]);for(let[N,H]of U){let B=y(b,(N+H)/2);this.ybox(t,e,B[0],B[1],B[2],M-I,H-N,a,A)}}return{at:y,L:f,ux:d,uz:p,nx:x,nz:g,yaw:A}}rail(t,e,i,s,r=1.05,o=.5,a={}){var h,u;let l=(h=a.w)!=null?h:.07,c=(u=a.top)!=null?u:.12;for(let f=0;f<i.length-1;f++){let d=i[f],p=i[f+1],x=Math.hypot(p[0]-d[0],p[1]-d[1]);if(x<.05)continue;this.beam(t,e,[d[0],s+r,d[1]],[p[0],s+r,p[1]],c,.08),this.beam(t,e,[d[0],s+.12,d[1]],[p[0],s+.12,p[1]],l,l);let g=Math.max(1,Math.round(x/o));for(let m=0;m<=g;m++){if(m===0&&f>0)continue;let y=d[0]+(p[0]-d[0])*m/g,v=d[1]+(p[1]-d[1])*m/g,_=m===0||m===g;this.box(t,e,y-(_?.09:l/2),s,v-(_?.09:l/2),y+(_?.09:l/2),s+r,v+(_?.09:l/2))}}}stairs(t,e,i,s,r,o,a,l,c,h){let u=Math.cos(o),f=Math.sin(o);for(let d=0;d<a;d++){let p=c*(d+.5),x=i+u*p,g=s+f*p,m=r+l*(d+1);this.ybox(t,e,x,(r+m)/2,g,c,m-r,h,o)}}slab(t,e,i,s,r,o,a={}){var m,y;let l=v=>new It(v[0],v[1]),c=v=>{let _=0;for(let S=0;S<v.length;S++){let A=v[S],E=v[(S+1)%v.length];_+=A[0]*E[1]-E[0]*A[1]}return _},h=c(i)>0?i:[...i].reverse(),u=s.map(v=>c(v)>0?[...v].reverse():v),f=[...h,...u.flat()],d=Fr.triangulateShape(h.map(l),u.map(v=>v.map(l))),p=(m=a.top)!=null?m:e,x=(y=a.side)!=null?y:e;for(let[v,_,S]of d){let A=f[v],E=f[_],I=f[S],M=(I[0]-A[0])*(E[1]-A[1])-(E[0]-A[0])*(I[1]-A[1]),[b,D]=M>0?[E,I]:[I,E];a.top!==!1&&this.tri(t,p,[A[0],o,A[1]],[b[0],o,b[1]],[D[0],o,D[1]]),a.bottom!==!1&&this.tri(t,x,[A[0],r,A[1]],[D[0],r,D[1]],[b[0],r,b[1]])}let g=v=>{for(let _=0;_<v.length;_++){let S=v[_],A=v[(_+1)%v.length];this.quad(t,x,[A[0],r,A[1]],[S[0],r,S[1]],[S[0],o,S[1]],[A[0],o,A[1]])}};if(a.sides!==!1){g(h);for(let v of u)g(v)}}plate(t,e,i,s=.3){let r=0;for(let l=0;l<4;l++){let c=i[l],h=i[(l+1)%4];r+=c[0]*h[2]-h[0]*c[2]}let o=r>0?[...i].reverse():i,a=o.map(l=>[l[0],l[1]-s,l[2]]);this.quad(t,e,o[0],o[1],o[2],o[3]),this.quad(t,e,a[3],a[2],a[1],a[0]);for(let l=0;l<4;l++){let c=(l+1)%4;this.quad(t,e,a[l],a[c],o[c],o[l])}}out(){let t={};for(let[e,i]of Object.entries(this.L))t[e]={p:new Float32Array(i.p),n:new Float32Array(i.n),c:new Float32Array(i.c)};return t}};var R={street:"#BDB7AC",street2:"#B4AEA3",walk:"#D6CFC2",curb:"#C7BFB1",plot:"#D2CABA",yard:"#CEC5B3",yardD:"#C3B9A6",wallA:["#EDE6D8","#E8E0D0","#F1EBDF","#E5DCCB"],wallB:["#CBBBA2","#C2B297","#D3C5AE","#BBAA90"],plinth:"#CFC6B5",band:"#9A7B5C",post:"#86684C",trim:"#6E5238",door:"#6A4A33",doorD:"#4E3726",glass:"#56676A",shut:"#7D6247",roofA:["#5C6467","#646B6D","#575F62","#6A7072"],ridge:"#3E4548",roofB:["#8A7F70","#7E7466","#958A7A","#73695C"],tin:"#9A9184",stone:"#BFB6A6",stoneD:"#A69C8B",stoneL:"#CFC7B8",earth:"#8C7D69",earth2:"#A3947F",earthD:"#75685A",water:"#5F8B8D",wood:"#8C6A4A",woodD:"#6B4F36",woodL:"#A8865F",metal:"#5B6366",metalD:"#3F4649",rust:"#8E5D3E",brass:"#B08A3E",lattice:"#5E4430",paper:"#E9DFC6",cloth:"#9C5B3A",cloth2:"#4F6F78",green:"#7E9466",greenD:"#64794F",red:"#9A3B2E"},Jr=(n,t)=>n[Math.floor(t*n.length)%n.length];function Kr(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Md(n,t,e){let{x0:i,z0:s,x1:r,z1:o}=n,a=e/2;return t==="n"?{a:[i,s+a],b:[r,s+a],L:r-i,out:[0,-1]}:t==="s"?{a:[i,o-a],b:[r,o-a],L:r-i,out:[0,1]}:t==="w"?{a:[i+a,s],b:[i+a,o],L:o-s,out:[-1,0]}:{a:[r-a,s],b:[r-a,o],L:o-s,out:[1,0]}}function Ci(n,t,e,i,s=0){let{x0:r,z0:o,x1:a,z1:l}=n;return t==="n"?[r+e,i,o-s]:t==="s"?[r+e,i,l+s]:t==="w"?[r-s,i,o+e]:[a+s,i,o+e]}function es(n,t,e,i,s,r,o,a,l,c=.06,h=0){let u=Ci(i,s,r,a,h),f=Ci(i,s,o,l,h+c);n.box(t,e,Math.min(u[0],f[0]),a,Math.min(u[2],f[2]),Math.max(u[0],f[0]),l,Math.max(u[2],f[2]))}function ih(n,t,e,i,s,r,o,a,l,c=.09,h=!1){es(n,t,e,i,s,r-c,r,a,l,.07),es(n,t,e,i,s,r+o,r+o+c,a,l,.07),es(n,t,e,i,s,r-c,r+o+c,l,l+c,.07),h&&es(n,t,e,i,s,r-c-.05,r+o+c+.05,a-.07,a,.14)}function bd(n,t,e,i,s,r,o,a,l,c=5,h=4,u=R.lattice){let f=-l/2;for(let d=1;d<c;d++){let p=s+r*d/c,x=Ci(e,i,p,0,f),g=Ci(e,i,p,0,f),m=i==="n"||i==="s"?.03:.025,y=i==="n"||i==="s"?.025:.03;n.box(t,u,x[0]-m,o,x[2]-y,g[0]+m,a,g[2]+y)}for(let d=1;d<h;d++){let p=o+(a-o)*d/h,x=Ci(e,i,s,p,f),g=Ci(e,i,s+r,p,f),m=.025;n.box(t,u,Math.min(x[0],g[0])-(i==="w"||i==="e"?m:0),p-.025,Math.min(x[2],g[2])-(i==="n"||i==="s"?m:0),Math.max(x[0],g[0])+(i==="w"||i==="e"?m:0),p+.025,Math.max(x[2],g[2])+(i==="n"||i==="s"?m:0))}}function li(n,t,e,i,s,r,o,a={}){var H,B,Y,k;let l=a.ax||(s-e>=r-i?"x":"z"),c=(H=a.ov)!=null?H:.55,h=a.col||R.roofA[0],u=a.ridge||R.ridge,f=a.wall||R.wallA[0],d=a.type||"gable",p=(X,V,et)=>l==="x"?[X,V,et]:[et,V,X],x=l==="x"?e:i,g=l==="x"?s:r,m=l==="x"?i:e,y=l==="x"?r:s,v=y-m,_=(B=a.rise)!=null?B:v*.27,S=(m+y)/2,A=o+_,E=_/(v/2),I=o-c*E;if(d==="flat")return n.box(t,a.parapet||R.plinth,e-.05,o,i-.05,s+.05,o+.35,r+.05),n.box(t,R.stoneD,e+.3,o+.35,i+.3,s-.3,o+.38,r-.3),o+.38;if(d==="shed"){let X=o+_;n.plate(t,h,[p(x-c,X+c*E*.5,m-c),p(g+c,X+c*E*.5,m-c),p(g+c,o-c*E*.5,y+c),p(x-c,o-c*E*.5,y+c)],.14);for(let V of[x,g]){let et=p(V,o,m),Tt=p(V,o,y),Vt=p(V,X,m);n.tri(t,f,et,Tt,Vt),n.tri(t,f,Tt,et,Vt)}return X}if(d==="hip"){let X=Math.min(v/2,(g-x)/2-.01),V=x-c,et=g+c,Tt=m-c,Vt=y+c,Qt=p(x+X,A,S),Zt=p(g-X,A,S),st=(Et,Wt,ge,T,rt)=>{n.quad(t,Et,Wt,ge,T,rt),n.quad(t,Et,rt,T,ge,Wt)},ct=(Et,Wt,ge,T)=>{n.tri(t,Et,Wt,ge,T),n.tri(t,Et,T,ge,Wt)};st(h,p(V,I,Tt),p(et,I,Tt),Zt,Qt),st(h,p(et,I,Vt),p(V,I,Vt),Qt,Zt),ct(h,p(V,I,Vt),p(V,I,Tt),Qt),ct(h,p(et,I,Tt),p(et,I,Vt),Zt);let bt=p(x+X,A,S),Dt=p(g-X,A,S);return n.box(t,u,Math.min(bt[0],Dt[0])-.14,A-.06,Math.min(bt[2],Dt[2])-.14,Math.max(bt[0],Dt[0])+.14,A+.18,Math.max(bt[2],Dt[2])+.14),A}let M=x-c*((Y=a.gov)!=null?Y:.6),b=g+c*((k=a.gov)!=null?k:.6),D=m-c,L=y+c;n.plate(t,h,[p(M,I,D),p(b,I,D),p(b,A,S),p(M,A,S)],.16),n.plate(t,h,[p(b,I,L),p(M,I,L),p(M,A,S),p(b,A,S)],.16);for(let X of[x+.02,g-.02]){let V=p(X,o,m+.02),et=p(X,o,y-.02),Tt=p(X,A-.12,S);n.tri(t,f,V,et,Tt),n.tri(t,f,et,V,Tt)}let U=p(M-.05,A,S),N=p(b+.05,A,S);if(n.box(t,u,Math.min(U[0],N[0]),A-.06,Math.min(U[2],N[2])-.16,Math.max(U[0],N[0]),A+.2,Math.max(U[2],N[2])+.16),a.curl!==!1)for(let X of[M-.05,b+.05]){let V=p(X,A,S);n.box(t,u,V[0]-.18,A+.1,V[2]-.18,V[0]+.18,A+.42,V[2]+.18)}for(let X of[D,L]){let V=p(M,I-.14,X),et=p(b,I+.02,X);n.box(t,R.woodD,Math.min(V[0],et[0]),I-.14,Math.min(V[2],et[2])-.05,Math.max(V[0],et[0]),I+.02,Math.max(V[2],et[2])+.05)}return A}var cl=[];function Ie(n,t){if(!n.crop||n.force||n.mute)return sh(n,t);let e=n.crop;if(t.x0>=e[0]-.05&&t.x1<=e[2]+.05&&t.z0>=e[1]-.05&&t.z1<=e[3]+.05){n.force++;try{return sh(n,t)}finally{n.force--}}cl.push([t.x0,t.z0,t.x1,t.z1]),n.mute++;try{return sh(n,t)}finally{n.mute--}}function sh(n,t){var m,y,v,_,S,A;let e=(m=t.t)!=null?m:.24,i=t.fl||[3.2],s=(y=t.y0)!=null?y:.15,r=Object.assign({w:"ctx",u:null,r:null,f:null},t.L||{}),o=r.u||r.w,a=r.r||o,l=r.f||r.w,c=t.wall||R.wallA[0],h=t.doors||[],u=t.R||Math.random,f=[s];for(let E of i)f.push(f[f.length-1]+E);let d=f[f.length-1];t.plinth!==!1&&n.box(r.w,R.plinth,t.x0-.03,Math.min(0,s-.15),t.z0-.03,t.x1+.03,s+.45,t.z1+.03,"b");let p=t.wins===!1?null:Object.assign({s:"nsew",w:1.05,h:1.45,sill:.95,sp:2.9},t.wins||{});for(let E of["n","s","w","e"]){if((t.blind||"").includes(E)&&!h.some(M=>M.s===E)){for(let M=0;M<i.length;M++){let b=Md(t,E,e);n.wall(M?o:r.w,c,b.a,b.b,f[M]+(M?0:.45),f[M+1],e)}continue}let I=Md(t,E,e);for(let M=0;M<i.length;M++){let b=M?o:r.w,D=f[M]+(M?0:.45),L=f[M+1]-D,U=[],N=[],H=h.filter(B=>{var Y;return B.s===E&&((Y=B.f)!=null?Y:0)===M});for(let B of H)U.push({a:B.a,w:B.w,y0:0,y1:((v=B.h)!=null?v:2.3)-(M?0:.45)});if(p&&p.s.includes(E)){let B=Math.max(0,Math.floor((I.L-.8)/p.sp));for(let Y=0;Y<B;Y++){let k=(I.L-B*p.sp)/2+p.sp*(Y+.5)-p.w/2;if(H.some(V=>k+p.w>V.a-.45&&k<V.a+V.w+.45)||(p.skip||[]).some(V=>{var et;return V.s===E&&((et=V.f)!=null?et:M)===M&&k+p.w>V.a0&&k<V.a1})||t.bal&&t.bal.s===E&&t.bal.f===M&&k+p.w>t.bal.a0&&k<t.bal.a1)continue;let X=M?p.sill:p.sill+.1;t.real?U.push({a:k,w:p.w,y0:X-(M?0:.45),y1:X+p.h-(M?0:.45)}):N.push([k,X])}}if(t.bal&&t.bal.s===E&&t.bal.f===M){let B=t.bal,Y=(_=B.dw)!=null?_:1.1;U.push({a:(B.a0+B.a1)/2-Y/2,w:Y,y0:0,y1:2.25})}n.wall(b,c,I.a,I.b,D,f[M+1],e,U);for(let B of U)if(B.y0>.05){let Y=D+B.y0,k=D+B.y1;ih(n,b,R.trim,t,E,B.a,B.w,Y,k,.08,!0)}for(let[B,Y]of N){let k=f[M]+Y,X=k+p.h;es(n,b,R.glass,t,E,B,B+p.w,k,X,.03),ih(n,b,R.trim,t,E,B,p.w,k,X,.08,!0),es(n,b,R.trim,t,E,B+p.w/2-.03,B+p.w/2+.03,k,X,.06)}for(let B of H){let Y=f[M],k=Y+((S=B.h)!=null?S:2.3);if(ih(n,b,R.trim,t,E,B.a,B.w,Y,k,.1,!1),B.open||es(n,b,B.col||R.door,t,E,B.a+.02,B.a+B.w-.02,Y,k-.02,.05,-e+.06),B.step!==!1&&M===0&&s>.05){let X=Ci(t,E,B.a-.2,0,0),V=Ci(t,E,B.a+B.w+.2,0,.5);n.box(b,R.stone,Math.min(X[0],V[0]),0,Math.min(X[2],V[2]),Math.max(X[0],V[0]),s,Math.max(X[2],V[2]))}}}}for(let E=1;E<i.length;E++)n.box(o,R.band,t.x0-.06,f[E]-.12,t.z0-.06,t.x1+.06,f[E]+.08,t.z1+.06);if(t.posts!==!1)for(let[E,I]of[[t.x0,t.z0],[t.x1,t.z0],[t.x0,t.z1],[t.x1,t.z1]])n.box(r.w,R.post,E-.09,s+.45,I-.09,E+.09,d,I+.09);if(t.slabs){n.box(l,t.floorCol||R.woodL,t.x0+e,s-.02,t.z0+e,t.x1-e,s,t.z1-e,"b");for(let E=1;E<i.length;E++){let I=(t.stairHoles||[]).filter(M=>M.f===E).map(M=>M.poly);n.slab(o,t.floorCol||R.woodL,[[t.x0+e,t.z0+e],[t.x1-e,t.z0+e],[t.x1-e,t.z1-e],[t.x0+e,t.z1-e]],I,f[E]-.2,f[E],{side:R.band})}}if(t.bal){let E=t.bal,I=f[E.f],M=(A=E.d)!=null?A:1.3,b;if(E.s==="n"){n.box(o,R.woodL,t.x0+E.a0,I-.18,t.z0-M,t.x0+E.a1,I,t.z0),b=[[t.x0+E.a0,t.z0],[t.x0+E.a0,t.z0-M+.05],[t.x0+E.a1,t.z0-M+.05],[t.x0+E.a1,t.z0]];for(let D of[t.x0+E.a0+.1,t.x0+E.a1-.1])n.beam(o,R.woodD,[D,I-1.3,t.z0],[D,I-.15,t.z0-M+.2],.12)}else if(E.s==="s"){n.box(o,R.woodL,t.x0+E.a0,I-.18,t.z1,t.x0+E.a1,I,t.z1+M),b=[[t.x0+E.a0,t.z1],[t.x0+E.a0,t.z1+M-.05],[t.x0+E.a1,t.z1+M-.05],[t.x0+E.a1,t.z1]];for(let D of[t.x0+E.a0+.1,t.x0+E.a1-.1])n.beam(o,R.woodD,[D,I-1.3,t.z1],[D,I-.15,t.z1+M-.2],.12)}else E.s==="e"?(n.box(o,R.woodL,t.x1,I-.18,t.z0+E.a0,t.x1+M,I,t.z0+E.a1),b=[[t.x1,t.z0+E.a0],[t.x1+M-.05,t.z0+E.a0],[t.x1+M-.05,t.z0+E.a1],[t.x1,t.z0+E.a1]]):(n.box(o,R.woodL,t.x0-M,I-.18,t.z0+E.a0,t.x0,I,t.z0+E.a1),b=[[t.x0,t.z0+E.a0],[t.x0-M+.05,t.z0+E.a0],[t.x0-M+.05,t.z0+E.a1],[t.x0,t.z0+E.a1]]);n.rail(o,R.woodD,b,I,1,.32,{w:.05,top:.08})}let x=d;t.rt!=="none"&&(x=li(n,a,t.x0,t.z0,t.x1,t.z1,d,{type:t.rt||"gable",ax:t.ax,rise:t.rise,ov:t.ov,col:t.roof||R.roofA[0],wall:c,curl:t.curl}));let g={y:f,top:d,yr:x,t:e};return t.extra&&t.extra(g),g}function Zn(n,t,e,i,s,r={}){var c;let o=(c=r.t)!=null?c:.32,a=r.col||R.wallA[1],l=r.cap||R.roofA[2];for(let h=0;h<e.length-1;h++){let u=(r.gaps||[]).filter(p=>p[0]===h).map(p=>{var x,g;return{a:p[1],w:p[2],y0:(x=p[3])!=null?x:0,y1:(g=p[4])!=null?g:s+1}}),f=n.wall(t,a,e[h],e[h+1],i,i+s,o,u);if(!f)continue;let d=[[0,f.L]];for(let p of u.filter(x=>x.y1>=s)){let x=[];for(let[g,m]of d)p.a+p.w<=g||p.a>=m?x.push([g,m]):(p.a>g&&x.push([g,p.a]),p.a+p.w<m&&x.push([p.a+p.w,m]));d.splice(0,d.length,...x)}for(let[p,x]of d){let g=f.at(p,s),m=f.at(x,s);n.beam(t,l,[g[0],i+s+.07,g[2]],[m[0],i+s+.07,m[2]],o+.16,.16)}}}var ci=(n,t,e,i,s)=>[n+Math.cos(e)*i+Math.sin(e)*s,t-Math.sin(e)*i+Math.cos(e)*s];function re(n,t,e,i,s,r,o,a,l,c,h,u){let[f,d]=ci(i,s,r,o,l);n.ybox(t,e,f,a+h/2,d,c,h,u,-r)}function yn(n,t,e,i,s,r=0,o=1,a=R.wood){let l=.9*o;re(n,t,a,e,s,r,0,i,0,l,l,l),re(n,t,R.woodD,e,s,r,0,i+l*.45,0,l+.03,l*.1,l+.03)}function je(n,t,e,i,s,r=0,o=3){let a=[[0,0,0],[.95,0,.1],[.45,.9,.05],[-.9,0,-.05],[1.9,0,0],[1.4,.9,0]];for(let l=0;l<Math.min(o,a.length);l++){let[c,h,u]=a[l],[f,d]=ci(e,s,r,c,u);yn(n,t,f,i+h,d,r+l%2*.12,1,l%3?R.wood:R.woodL)}}function vn(n,t,e,i,s,r=R.woodD){n.cyl(t,r,e,s,i,i+1,.34,10),n.cyl(t,R.metalD,e,s,i+.18,i+.26,.355,10),n.cyl(t,R.metalD,e,s,i+.74,i+.82,.355,10)}function Mn(n,t,e,i,s,r=0){re(n,t,"#C8B48C",e,s,r,0,i,0,.7,.38,.45),re(n,t,"#BFA97F",e,s,r,0,i+.38,0,.55,.12,.35)}function Ve(n,t,e,i,s,r=0,o=1.6,a=.8,l=.78,c=R.wood){re(n,t,c,e,s,r,0,i+l-.06,0,o,.06,a);for(let[h,u]of[[-o/2+.08,-a/2+.08],[o/2-.08,-a/2+.08],[-o/2+.08,a/2-.08],[o/2-.08,a/2-.08]])re(n,t,R.woodD,e,s,r,h,i,u,.07,l-.06,.07)}function Ws(n,t,e,i,s,r=0,o=1.5){re(n,t,R.wood,e,s,r,0,i+.42,0,o,.06,.32);for(let a of[-o/2+.1,o/2-.1])re(n,t,R.woodD,e,s,r,a,i,0,.06,.42,.28)}function $n(n,t,e,i,s){n.cyl(t,R.wood,e,s,i+.4,i+.46,.2,8),n.cyl(t,R.woodD,e,s,i,i+.4,.06,6)}function to(n,t,e,i,s,r=0,o=4,a=.7){re(n,t,R.woodD,e,s,r,0,i,0,o,1,a),re(n,t,R.woodL,e,s,r,0,i+1,0,o+.08,.06,a+.12)}function bn(n,t,e,i,s,r=0,o=2.4,a=2.4,l=.45,c={}){var f;let h=c.col||R.woodD;re(n,t,h,e,s,r,0,i,-l/2+.03,o,a,.06);for(let d of[-o/2+.03,o/2-.03])re(n,t,h,e,s,r,d,i,0,.06,a,l);let u=(f=c.n)!=null?f:5;for(let d=0;d<=u;d++)re(n,t,h,e,s,r,0,i+d*(a-.05)/u,0,o,.05,l);if(c.drawers)for(let d=0;d<u;d++)for(let p=0;p<Math.floor(o/.4);p++)re(n,t,(d+p)%2?"#9C7A55":"#A8865F",e,s,r,-o/2+.23+p*.4,i+d*(a-.05)/u+.08,l/2-.02,.34,(a-.05)/u-.12,.04);if(c.goods)for(let d=0;d<u;d++)for(let p=0;p<Math.floor(o/.5);p++){let x=(d*7+p*3)%5;x!==0&&re(n,t,["#B8A27A","#8F6E50","#C9B48E","#7E8C83","#A26B4E"][x],e,s,r,-o/2+.3+p*.5,i+d*(a-.05)/u+.05,0,.3+x%2*.1,.25+x%3*.08,l*.7)}}function hl(n,t,e,i,s,r=0,o=1.8){bn(n,t,e,i,s,r,o,2.2,.4,{n:5});for(let a=0;a<5;a++)for(let l=0;l<Math.floor(o/.12)-1;l++){let c=(a*5+l*3)%7;c!==0&&re(n,t,["#7A5236","#9C8668","#5F5340","#B39C76","#6E4A3A","#8A7A5C","#A48A5E"][c],e,s,r,-o/2+.12+l*.12,i+a*.44+.05,0,.09,.26+c%3*.04,.28)}}function Sd(n,t,e,i,s){n.cyl(t,R.metalD,e,s,i,i+3.6,.07,6),n.box(t,R.metalD,e-.03,i+3.5,s-.03,e+.5,i+3.56,s+.03),n.box(t,"#E8D9A8",e+.32,i+3.18,s-.13,e+.58,i+3.5,s+.13)}function wd(n,t,e,i,s,r=1){let o=[[0,0,0,1.6,.55,1.3,"#7D7466"],[.5,.45,.2,.9,.4,.7,"#8E8270"],[-.6,.3,-.3,.8,.45,.6,"#6E665A"],[.9,0,-.6,.7,.35,.6,"#9A8A70"],[-.9,0,.5,.9,.3,.7,"#857A69"],[.2,.8,-.1,.5,.3,.5,"#A39275"]];for(let[a,l,c,h,u,f,d]of o)n.ybox(t,d,e+a*r,i+(l+u/2)*r,s+c*r,h*r,u*r,f*r,a*.7);vn(n,t,e+1.5*r,i,s+.7*r,"#6E6457"),Mn(n,t,e-1.3*r,i,s-.8*r,.6)}function rh(n,t,e,i,s,r=.45){n.cyl(t,R.metalD,e,s,i,i+.03,r,14),n.cyl(t,R.metal,e,s,i+.03,i+.045,r*.8,14)}function Xs(n,t,e,i,s,r,o=.16,a=R.metalD){let l=i[0]-e[0],c=i[1]-e[1],h=Math.hypot(l,c),u=Math.max(2,Math.round(h/o));for(let f=0;f<=u;f++){let d=e[0]+l*f/u,p=e[1]+c*f/u;n.box(t,a,d-.025,s,p-.025,d+.025,r,p+.025)}n.beam(t,a,[e[0],r-.1,e[1]],[i[0],r-.1,i[1]],.07),n.beam(t,a,[e[0],s+.3,e[1]],[i[0],s+.3,i[1]],.07)}function Le(n,t,e,i,s=.12,r=R.metal){let o=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],a=Math.hypot(...o);if(Math.abs(o[1])>a*.99){n.cyl(t,r,e[0],e[2],Math.min(e[1],i[1]),Math.max(e[1],i[1]),s,8);return}n.beam(t,r,e,i,s*1.8,s*1.8)}function qs(n,t,e,i,s,r,o=0,a=.5){for(let l of[-a/2,a/2]){let[c,h]=ci(e,s,o,l,0);n.box(t,R.metalD,c-.03,i,h-.03,c+.03,r,h+.03)}for(let l=i+.3;l<r;l+=.3){let c=ci(e,s,o,-a/2,0),h=ci(e,s,o,a/2,0);n.beam(t,R.metal,[c[0],l,c[1]],[h[0],l,h[1]],.035)}}function Pi(n,t,e,i,s,r=1){n.frustum(t,"#8E5D45",e,s,i,i+.45*r,.22*r,.3*r,8),n.cyl(t,R.greenD,e,s,i+.45*r,i+.75*r,.32*r,7)}function ul(n,t,e,i,s,r=0,o=2.4,a=R.cloth,l=!0){Ve(n,t,e,i,s,r,o,.9,.85);for(let[h,u]of[[-o/2,-.55],[o/2,-.55],[-o/2,.55],[o/2,.55]])re(n,t,R.woodD,e,s,r,h,i,u,.06,2.3+(u<0?.25:0),.06);let c=(h,u,f)=>{let[d,p]=ci(e,s,r,h,u);return[d,f,p]};if(n.plate(t,a,[c(-o/2-.15,-.75,i+2.6),c(o/2+.15,-.75,i+2.6),c(o/2+.15,.85,i+2.25),c(-o/2-.15,.85,i+2.25)],.05),l)for(let h=0;h<Math.floor(o/.45);h++)re(n,t,["#C2A060","#8DA26A","#B0583E","#D2B47C"][h%4],e,s,r,-o/2+.3+h*.45,i+.85,h%2*.15-.1,.32,.18,.3)}function dl(n,t,e,i,s,r,o,a=1.8,l="#3F2E22",c="#C9A55A"){let u=o!==0?.25:.06,f=r!==0?.5/2:.06;n.box(t,l,e-u+r*.25,i-a/2,s-f+o*.25,e+u+r*.25,i+a/2,s+f+o*.25),n.box(t,c,e-u*.7+r*.32,i-a/2+.15,s-f*.7+o*.32,e+u*.7+r*.32,i+a/2-.15,s+f*.7+o*.32),n.box(t,R.metalD,e+r*.02-.02,i+a/2-.1,s+o*.02-.02,e+r*.3+.02,i+a/2-.04,s+o*.3+.02)}function Ys(n,t,e,i,s,r,o=-1,a="#3F2E22",l="#C9A55A"){n.box(t,a,e,s,Math.min(r,r+o*.12),i,s+.7,Math.max(r,r+o*.12)),n.box(t,l,e+.15,s+.12,Math.min(r+o*.12,r+o*.15),i-.15,s+.58,Math.max(r+o*.12,r+o*.15))}function ns(n,t,e,i,s,r,o=-1,a=1.6,l=R.cloth2){n.plate(t,l,[[e,s,r],[i,s,r],[i,s-.55,r+o*a],[e,s-.55,r+o*a]],.05);for(let c of[e+.1,i-.1])n.beam(t,R.metalD,[c,s-.9,r],[c,s-.55,r+o*(a-.05)],.04)}function Zs(n,t,e,i,s,r=0,o=4,a=4){for(let l=0;l<o;l++)for(let c=0;c<o-l;c++)re(n,t,l%2?"#B8915F":"#A8814F",e,s,r,(c-(o-l-1)/2)*.3,i+l*.26,0,.26,.24,a)}function $s(n,t,e,i,s,r=0){re(n,t,R.woodD,e,s,r,0,i,0,1.3,.12,1.1),re(n,t,"#A0634A",e,s,r,0,i+.12,0,1.2,.8,1),re(n,t,"#9A5C44",e,s,r,-.2,i+.92,0,.7,.3,1)}function oh(n,t,e,i,s,r=0,o=5){for(let a=0;a<3;a++)for(let l=0;l<3-a;l++)re(n,t,R.metalD,e,s,r,(l-(2-a)/2)*.34,i+a*.3,0,.26,.28,o)}function eo(n,t,e,i,s,r=0,o="#5D6B6E",a=!0){re(n,t,R.metalD,e,s,r,0,i+.45,0,2.1-.2,.35,6),re(n,t,o,e,s,r,0,i+.8,2.1,2.1,1.25,1.6),re(n,t,"#3F4A4D",e,s,r,0,i+1.6,2.15,2.1-.3,.65,1.2),re(n,t,o,e,s,r,0,i+2.05,1.9,2.1-.1,.12,1.9),re(n,t,R.woodD,e,s,r,0,i+.8,-.85,2.1,.12,4.1);for(let c of[-2.1/2+.04,2.1/2-.04])re(n,t,R.wood,e,s,r,c,i+.92,-.85,.08,.55,4.1);re(n,t,R.wood,e,s,r,0,i+.92,-2.86,2.1,.55,.08),re(n,t,R.wood,e,s,r,0,i+.92,1.17,2.1,.55,.08);for(let[c,h]of[[-.95,1.9],[.95,1.9],[-.95,-1.6],[.95,-1.6],[-.95,-2.3],[.95,-2.3]]){let[u,f]=ci(e,s,r,c,h);n.ybox(t,"#2B2F31",u,i+.42,f,.3,.84,.84,-r)}if(a)for(let[c,h]of[[-.45,-.2],[.45,-.3],[0,-1.4],[-.45,-2.3],[.45,-2.2]])re(n,t,c>0?R.woodL:R.wood,e,s,r,c,i+.92,h,.8,.7,.8)}function Ed(n,t,e,i,s,r=0){re(n,t,R.wood,e,s,r,0,i+.55,0,1.3,.1,2);for(let o of[-.65,.65])re(n,t,R.woodD,e,s,r,o,i+.65,0,.06,.35,2);for(let o of[-.72,.72]){let[a,l]=ci(e,s,r,o,.2);n.ybox(t,R.woodD,a,i+.42,l,.08,.84,.84,-r)}for(let o of[-.4,.4])re(n,t,R.woodD,e,s,r,o,i+.5,1.6,.06,.06,1.4)}function fl(n,t,e,i,s){n.cyl(t,R.stoneD,e,s,i,i+.7,.55,10),n.frustum(t,R.metalD,e,s,i+.7,i+1,.45,.55,12)}function Ad(n,t,e,i,s,r=36,o=0,a=24){for(let[p,x]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]])n.box(t,"#B88A2E",e+p-.09,i,s+x-.09,e+p+.09,i+r,s+x+.09);for(let p=i;p<i+r-2;p+=2.4)for(let[x,g]of[[[-.9,-.9],[.9,.9]],[[.9,-.9],[-.9,.9]]])n.beam(t,"#B88A2E",[e+x[0],p,s+x[1]],[e+g[0],p+2.4,s+g[1]],.06);let c=p=>ci(e,s,o,0,p),h=c(-7),u=c(a);n.beam(t,"#B88A2E",[h[0],i+r,h[1]],[u[0],i+r,u[1]],.55,.7),n.beam(t,"#B88A2E",[e,i+r+4,s],[u[0],i+r+.3,u[1]],.08),n.beam(t,"#B88A2E",[e,i+r+4,s],[h[0],i+r+.3,h[1]],.08),n.box(t,"#B88A2E",e-.3,i+r,s-.3,e+.3,i+r+4,s+.3);let f=c(-6);n.box(t,R.stoneD,f[0]-.8,i+r-1.6,f[1]-.8,f[0]+.8,i+r,f[1]+.8);let d=c(a*.62);n.box(t,R.metalD,d[0]-.02,i+r*.45,d[1]-.02,d[0]+.02,i+r,d[1]+.02),n.box(t,R.metalD,d[0]-.25,i+r*.45-.3,d[1]-.25,d[0]+.25,i+r*.45,d[1]+.25),n.box(t,"#C9B37A",e-1.2,i+r-2.2,s-1.2,e+1.2,i+r-.2,s+1.2)}function ah(n,t,e,i,s,r,o,a=1){let l=i[0]-e[0],c=i[1]-e[1],h=Math.hypot(l,c),u=Math.max(1,Math.round(h/2.5)),f=(d,p)=>[e[0]+l*d+o[0]*p,e[1]+c*d+o[1]*p];for(let d=0;d<=u;d++)for(let p of[a,a+1.1]){let x=f(d/u,p);n.box(t,"#9C8B6E",x[0]-.04,s,x[1]-.04,x[0]+.04,r,x[1]+.04)}for(let d=s+2;d<=r;d+=2){for(let g of[a,a+1.1]){let m=f(0,g),y=f(1,g);n.beam(t,"#9C8B6E",[m[0],d,m[1]],[y[0],d,y[1]],.06)}let p=f(0,a+.55),x=f(1,a+.55);n.beam(t,"#B59B6E",[p[0],d-.03,p[1]],[x[0],d-.03,x[1]],1.1,.05)}}var hh=[-24,-4,30,50],Rd={ov:{t:[2,0,22],r:66,ph:.8,th:2.62},ext:{t:[4,-.5,27],r:62,ph:.86,th:-.42}},sn=-3.8,is=-4.4,lh=-6.2,ss=-11,J=.15,zn=40;function K1(n){let[t,e,i,s]=hh;n.box("base",R.earth,t,ss,e,i,ss+.6,s),n.box("base",R.earth,t,ss,e,i,-.3,e+.4),n.box("base",R.earth,t,ss,e,t+.4,-.3,zn),n.box("base",R.earth,i-.4,ss,e,i,-.3,zn);for(let[p,x,g]of[[-3.2,-2.4,R.earth2],[-7,-6.3,R.earthD]])n.box("base",g,t-.02,p,e-.02,i+.02,x,e+.02),n.box("base",g,t-.02,p,e,t+.02,x,zn),n.box("base",g,i-.02,p,e,i+.02,x,zn);n.box("base",R.stone,t,sn,zn,i,0,zn+.6);for(let p=t+.8;p<i;p+=1.6)n.box("base",R.stoneD,p,sn+.02,zn+.58,p+.04,-.05,zn+.62);n.box("base",R.stoneL,t,ss,zn,i,sn,43.5),n.box("base",R.stoneD,t,sn-.25,43.3,i,sn+.05,43.6),n.box("base","#6E6A5E",t,ss,43.5,i,lh,s),n.box("water",R.water,t,lh,43.6,i,is,s);let r=(p,x,g,m,y,v,_)=>n.box("ground",p,x,v-_,g,m,v,y,"b");r(R.street,t,e+.4,i,3.6,0,.3),r(R.street,10.5,3.6,15.5,34,0,.3),r(R.street,t,34,i,zn,0,.3);for(let p of[[t,3.6,10.5,34],[15.5,3.6,i,34]])r(R.curb,p[0],p[1],p[2],p[3],J,.45),r(R.walk,p[0]+.2,p[1]+.2,p[2]-.2,p[3]-.2,J+.01,.02);for(let p=t+1;p<i-3;p+=6)n.box("ground","#D8D2C4",p,.01,-.26,p+3,.02,-.14);n.rail("ctx",R.stoneD,[[t+.2,39.75],[16,39.75]],0,.9,1.6,{w:.14,top:.22}),n.rail("ctx",R.stoneD,[[18,39.75],[i-.2,39.75]],0,.9,1.6,{w:.14,top:.22});let o=19,a=3.8/o,l=.3,c=zn+.6,h=42.2,u=18,f=u+o*l;n.box("base",R.stoneL,16,sn,c,u,0,h);for(let p=0;p<o-1;p++){let x=-a*(p+1),g=u+p*l;n.box("base",R.stoneL,g,sn,c,g+l,x,h)}n.box("base",R.stone,16,0,h,u,.9,h+.22),n.box("base",R.stone,15.78,0,c,16,.9,h+.22),n.plate("base",R.stone,[[u,.9,h],[f,-2.9,h],[f,-2.9,h+.22],[u,.9,h+.22]],1),n.box("base",R.woodD,0,sn-.25,43.5,14,sn,49);for(let p=.2;p<14;p+=.45)n.box("base",R.wood,p,sn,43.5,p+.4,sn+.03,49);for(let[p,x]of[[.3,45],[13.7,45],[.3,47.2],[13.7,47.2],[.3,48.8],[13.7,48.8]])n.cyl("base",R.woodD,p,x,lh,sn+.5,.16,6);let d=sn+.03;je(n,"ctx",2.4,d,45.2,.1,5),je(n,"ctx",11.6,d,48,-.2,3),vn(n,"ctx",1.4,d,47.8),Mn(n,"ctx",3.2,d,47.9,.4),Mn(n,"ctx",4,d,48.1,-.3),n.box("ctx","#9A3B2E",5.6,d,47.6,6.8,d+.7,48.4),n.box("ctx",R.brass,5.56,d+.55,47.56,6.84,d+.63,48.44),n.prism("base",R.woodD,[[14.4,46.1],[15.2,45],[18.8,45],[19.6,46.1],[18.8,47.2],[15.2,47.2]],is-.3,is+.45),n.box("base",R.wood,15.3,is+.45,45.3,18.7,is+.5,46.9),yn(n,"ctx",16.2,is+.5,46.1,.2,.7),yn(n,"ctx",17.3,is+.5,46,-.1,.7)}function tx(n,t,e){let i={x0:-10,z0:5.5,x1:10,z1:20.5},s="#EEE7D8",r=J+4.2,o=.14,a=Ie(n,{...i,fl:[4.2],wall:s,roof:R.roofA[1],ax:"x",rt:"hip",rise:2.3,real:!0,slabs:!0,floorCol:"#B89A74",doors:[{s:"n",a:8.5,w:3,h:3,open:!0},{s:"s",a:5.8,w:1.3,h:2.3,open:!0}],wins:{s:"nse",w:1.2,h:1.4,sill:1,sp:3.2,skip:[{s:"s",a0:7.6,a1:20}]},blind:"w",L:{w:"S8",r:"S8r",f:"S8"}});n.wall("S8",s,[-9.76,12.5],[9.76,12.5],J,r,o,[{a:5.46,w:1.6,y0:0,y1:2.3},{a:17.16,w:1.4,y0:0,y1:2.3}]),n.wall("S8",s,[-4.6,12.57],[-4.6,20.26],J,r,o,[{a:2.43,w:1.4,y0:0,y1:2.2}]),n.wall("S8",s,[-2.4,12.57],[-2.4,20.26],J,r,o,[{a:4.83,w:1.4,y0:0,y1:2.2}]);let l=(u,f,d,p)=>{n.box("S8",R.trim,u-.08,J,d-.1,u,J+p+.08,d+.1),n.box("S8",R.trim,f,J,d-.1,f+.08,J+p+.08,d+.1),n.box("S8",R.trim,u-.08,J+p,d-.1,f+.08,J+p+.08,d+.1)},c=(u,f,d,p)=>{n.box("S8",R.trim,u-.1,J,f-.08,u+.1,J+p+.08,f),n.box("S8",R.trim,u-.1,J,d,u+.1,J+p+.08,d+.08),n.box("S8",R.trim,u-.1,J+p,f-.08,u+.1,J+p+.08,d+.08)};l(-4.3,-2.7,12.5,2.3),l(7.4,8.8,12.5,2.3),c(-4.6,15,16.4,2.2),c(-2.4,17.4,18.8,2.2),n.box("S8","#5E7A7E",7.42,J+1.45,12.42,8.78,J+2.3,12.47),n.box("S8","#E5DDCB",-4.28,J+1.45,12.42,-2.72,J+2.3,12.47);for(let u of[14,17.2])Xs(n,"S8",[10.04,u+.05],[10.04,u+1.15],J+1.1,J+2.5,.16);to(n,"S8p",3,J,10.3,0,8,.7),bn(n,"S8p",3,J,12.16,Math.PI,7.4,2.6,.5,{n:7,drawers:!0}),n.box("S8p",R.brass,.2,J+1.06,10.1,.7,J+1.1,10.5),n.box("S8p",R.metalD,.43,J+1.1,10.28,.47,J+1.45,10.32),n.box("S8p",R.brass,.1,J+1.42,10.27,.8,J+1.45,10.33);for(let u=0;u<4;u++)n.cyl("S8p",["#B8A27A","#7E8C83","#C9B48E","#A26B4E"][u],4.6+u*.5,10.3,J+1.06,J+1.32,.13,8);Ws(n,"S8p",-9.3,J,8.2,Math.PI/2,2.8),Ws(n,"S8p",-7.6,J,6.1,0,2.4),Ve(n,"S8p",-6.8,J,10.6,0,1.6,.8,.8,R.woodD),$n(n,"S8p",-6.8,J,11.5),$n(n,"S8p",-6.8,J,9.8),n.box("S8p",R.paper,-7.3,J+.8,10.4,-6.8,J+.82,10.75),n.box("S8p","#C9B48E",-6.4,J+.8,10.45,-6,J+.9,10.7),Pi(n,"S8p",-4.9,J,6.1,.9),Pi(n,"S8p",9.3,J,6.1,.9);let h=(u,f,d,p)=>{n.box("S8p",R.woodD,u,J,f,d,J+.5,p),n.box("S8p","#E5DDCB",u+.05,J+.5,f+.05,d-.05,J+.62,p-.05),n.box("S8p","#F2ECDF",u+.1,J+.62,f+.12,u+.55,J+.72,p-.12)};h(-9.6,13.2,-7.5,14.2),h(-9.6,16.8,-7.5,17.8),n.box("S8p","#D9CFBA",-9.7,J,15.45,-7.7,J+1.7,15.52),Ve(n,"S8p",-5.7,J,19.5,0,1.4,.6,.85),n.box("S8p","#E2D8C2",-6.2,J+.85,19.35,-5.8,J+.9,19.65),n.cyl("S8p","#7E8C83",-5.3,19.5,J+.85,J+1.05,.1,8),bn(n,"S8p",-8.6,J,19.98,Math.PI,2,2,.45,{n:4,goods:!0}),bn(n,"S8p",9.48,J,16.4,-Math.PI/2,7,1,.5,{n:2,goods:!0}),bn(n,"S8p",3.6,J,19.98,Math.PI,6,2.6,.5,{n:5,goods:!0}),bn(n,"S8p",1,J,12.84,0,4,2.2,.45,{n:4,goods:!0}),je(n,"S8p",.2,J,16.4,0,3),Mn(n,"S8p",-1.6,J,14,.2),Mn(n,"S8p",-1.5,J,14.7,-.3),t.dyn("chest","S8p",[5.5,J,17],{hide:!0},u=>{u.box("S8p","#9A3B2E",4.9,J,16.6,6.1,J+.75,17.4),u.box("S8p",R.brass,4.86,J+.6,16.56,6.14,J+.68,17.44),u.box("S8p",R.brass,5.42,J+.3,16.54,5.58,J+.5,16.6)}),Ys(n,"S8r",-2.6,2.6,3.4,5.5,-1,"#3B2B20","#C49A4E");for(let u of[-2.1,2.1])n.box("ctx",R.metalD,u-.02,3,5.1,u+.02,3.35,5.14),n.cyl("ctx","#B5462F",u,5,2.45,3,.22,8);Ve(n,"ctx",-4.6,J,4.5,0,1.4,.7,.8);for(let u=0;u<4;u++)n.cyl("ctx",["#B08A3E","#7E8C83","#A26B4E","#C9B48E"][u],-5.1+u*.33,4.45,J+.8,J+1,.07,6);return n.box("ctx",R.metalD,-5.42,J,4.12,-5.37,J+2.2,4.17),n.box("ctx","#C9A55A",-5.37,J+1.5,4.13,-4.85,J+2.1,4.16),e(-10,0,5.5,10,a.top,20.5,"S8"),a}function ex(n,t){Zn(n,"S8y",[[-10,20.5],[-10,32.5],[10,32.5],[10,20.5]],J,2.6,{gaps:[[2,3,2.6]],col:R.wallA[1]}),n.box("S8y",R.yard,-9.84,J,20.5,9.84,J+.03,32.34);for(let s of[26.75,29.65])n.box("S8y",R.post,9.84,J,s-.14,10.16,3,s+.14);li(n,"S8y",9.4,26.3,10.6,30.1,3,{ax:"z",rise:.5,ov:.2,col:R.roofA[2]});let i=(s,r,o)=>{for(let a of[s,r])for(let l of[-.45,.45])n.box("S8y",R.woodD,a-.04,J,o+l-.04,a+.04,J+1.75,o+l+.04);for(let a of[.55,1,1.45]){n.box("S8y",R.wood,s,J+a,o-.48,r,J+a+.04,o+.48);for(let l=s+.25,c=0;l<r-.2;l+=.5,c++)n.box("S8y",(c+a*2|0)%2?"#8FA05E":"#A9A56A",l,J+a+.04,o-.38,l+.38,J+a+.1,o+.38)}};i(-8.8,-4.4,23),i(-8.8,-4.4,25.2),i(-8.8,-4.4,27.4);for(let s of[3.2,5.6])fl(n,"S8y",s,J,23.6),n.cyl("S8y","#5C4B3C",s,23.6,J+1,J+1.35,.36,10);Ve(n,"S8y",4.4,J,26.6,0,2.4,.9,.85);for(let s=0;s<5;s++)n.cyl("S8y",["#B8A27A","#8F6E50","#C9B48E","#7E8C83","#A26B4E"][s],3.5+s*.45,26.6,J+.85,J+1.1,.12,8);Mn(n,"S8y",8.7,J,21.4,.3),Mn(n,"S8y",8.8,J,22.2,-.2),Mn(n,"S8y",8,J,21.5,.1),vn(n,"S8y",8.9,J,23.4),Ve(n,"S8y",.4,J,30.2,0,1.8,.9,.78);for(let[s,r]of[[-.2,29.4],[1,29.4],[-.2,31],[1,31]])$n(n,"S8y",s,J,r);n.cyl("S8y","#5C4B3C",.4,30.2,J+.78,J+1,.28,10);for(let[s,r]of[[-.25,29.95],[1.05,29.95],[-.25,30.45],[1.05,30.45]])n.cyl("S8y","#E2D8C2",s,r,J+.78,J+.84,.09,8);for(let s of[-9.6,-6,-2.6])n.box("S8y",R.woodD,s-.08,J,30.42,s+.08,J+2.3,30.58);n.plate("S8y",R.roofB[1],[[-9.9,J+2.35,30.2],[-2.3,J+2.35,30.2],[-2.3,J+2.75,32.3],[-9.9,J+2.75,32.3]],.08),Zs(n,"S8y",-7.6,J,31.4,Math.PI/2,3,2.6),vn(n,"S8y",-4,J,31.6),vn(n,"S8y",-3.2,J,31.7),t.lamp(n,-1.8,21.2,J)}function nx(n,t){let i=Ie(n,{...{x0:16,z0:18,x1:28,z1:31.5},fl:[3.4,3],wall:"#CBBBA2",roof:R.roofB[1],ax:"z",rt:"gable",real:!1,doors:[{s:"w",a:4.5,w:2.4,h:2.7,open:!0}],wins:{s:"nws",sp:2.8},blind:"e",posts:!1,L:{w:"S9",r:"S9r"}});dl(n,"S9",16,2.5,21.7,-1,0,1.6,"#2E2A26","#B5462F"),je(n,"S9",17.6,J,17,0,3),vn(n,"S9",20.4,J,17.1),t(16,0,18,28,i.top,31.5,"S9")}function ch(n,t,e,i,s,r,o,a={}){let l=o==="n"||o==="s"?s-e:r-i,c=Ie(n,{x0:e,z0:i,x1:s,z1:r,fl:a.fl||[3.2,3],wall:a.wall||R.wallA[0],roof:a.roof||R.roofA[0],ax:a.ax||"x",rt:a.rt||"gable",curl:!0,doors:[{s:o,a:l*.35,w:1.1,h:2.25}],blind:a.blind,L:{w:"ctx"},wins:{s:a.wins||"nsew",sp:2.8}});return t(e,0,i,s,c.top,r),c}function Cd(n,t){let e=(s,r,o,a,l,c,h)=>t.BLOCK.push([s,r,o,a,l,c,h]);K1(n);let i=tx(n,t,e);ex(n,t),nx(n,e),ch(n,e,16,5.5,28,16,"n",{wall:R.wallA[2],roof:R.roofA[3]}),ns(n,"ctx",17,27,3,5.5,-1,1.4,R.cloth),ch(n,e,-22,5.5,-10.6,18.5,"n",{blind:"e",wall:R.wallA[3]}),ch(n,e,-22,19.5,-10.6,32.5,"s",{blind:"e",fl:[3],wall:R.wallA[1]});for(let[s,r,o]of[[-13,4,J],[10.1,33.4,J],[-12,39.2,0],[4,39.2,0],[24,39.2,0],[13.2,44,sn]])t.lamp(n,s,r,o);for(let s of[-18,-6,8,27])t.TREES.push([s,38.4,.9,0]);t.TREES.push([-16.5,33.2,.7],[26.5,33,.8],[-14,2.4,.7,0]),t.SITE.clinic={name:"\u836F\u5802",c:[0,0,13],top:i.top,door:[0,J,5.3],counter:[3,J,9.6],staff:[8.1,J,12.5],store:[4,J,17],chest:[5.5,J,17],er:[-7,J,16],corr:[-3.5,J,16.5],back:[-3.55,J,20.5],yard:[0,J,26.5],gate:[10,J,28.2],den:[16,J,23.7],dock:[7,sn,46.5],stall:[-4.6,J,4.5],stairs:[17,0,41.4]}}var xl={x0:-90,x1:90,z0:-50,z1:58,base:-11},$t={street:0,plot:.15,tow:-3.8,water:-4.4,bed:-6.2,sew:-3.8,sewTop:-.9,cis:-9,cisWater:-7.6},Oe={},pl=[],Qs=[],hn=(n,t,e,i,s,r,o)=>pl.push([n,t,e,i,s,r,o]),ml=[],no=[],js={},Te=(n,t,e,i,s)=>ml.push({id:n,layer:t,pivot:e,...i,build:s});function gl(n,t,e,i=0){Sd(n,"ctx",t,i,e),n.box("glow","#FFD891",t+.3,i+3.16,e-.15,t+.6,i+3.52,e+.15),no.push([t+.45,i+3,e])}var Pd=[{L:"sewL",r:[-3.4,17,.4,44]},{L:"sewL",r:[-30,17,-3.4,20.5]},{L:"sewL",r:[.4,36,4.6,41.75]},{L:null,r:[.4,41.75,6.76,42.95]},{L:"cisL",r:[31,5,49,27]},{L:null,r:[45.6,21.4,47.5,25.6]}];function _l(n,t){if(t[0]>=n[2]||t[2]<=n[0]||t[1]>=n[3]||t[3]<=n[1])return[n];let e=[];t[1]>n[1]&&e.push([n[0],n[1],n[2],t[1]]),t[3]<n[3]&&e.push([n[0],t[3],n[2],n[3]]);let i=Math.max(n[1],t[1]),s=Math.min(n[3],t[3]);return t[0]>n[0]&&e.push([n[0],i,t[0],s]),t[2]<n[2]&&e.push([t[2],i,n[2],s]),e}var ix=(n,t)=>{let e=[Math.max(n[0],t[0]),Math.max(n[1],t[1]),Math.min(n[2],t[2]),Math.min(n[3],t[3])];return e[2]>e[0]+.001&&e[3]>e[1]+.001?e:null};function uh(n,t,e,i,s,r,o,a,l=.3){let c=[i,s,r,o],h=Pd.filter(f=>!f.L),u=[c];for(let f of Pd){if(f.L){let d=[ix(c,f.r)].filter(Boolean);for(let p of h)d=d.flatMap(x=>_l(x,p.r));for(let p of d)n.box(f.L,e,p[0],a-l,p[1],p[2],a,p[3],"b")}u=u.flatMap(d=>_l(d,f.r))}for(let f of u)n.box(t,e,f[0],a-l,f[1],f[2],a,f[3],"b")}var sx=[[-90,-4,20,4],[20,-50,30,36],[-90,36,90,44],[30,-2,90,3],[-90,17,20,20.5],[-62,4,-59,36],[-30,4,-26,36],[-3.4,4,.4,36],[-64,-50,-59,-4],[-31,-50,-26,-4],[4,-50,8,-4],[38,-50,43,-2],[48,3,52,36]],rx=[[-90,-50,-64,-4],[-59,-50,-31,-4],[-26,-50,4,-4],[8,-50,20,-4],[-90,4,-62,17],[-59,4,-30,17],[-26,4,-3.4,17],[.4,4,20,17],[-90,20.5,-62,36],[-59,20.5,-30,36],[-26,20.5,-3.4,36],[.4,20.5,20,36],[30,-50,38,-2],[43,-50,90,-2],[30,3,48,36],[52,3,90,36]];function ox(n){let t=n.crop?{x0:n.crop[0],z0:n.crop[1],x1:n.crop[2],z1:n.crop[3],base:xl.base}:xl,e=Math.min(t.z1,44);n.box("base",R.earth,t.x0,t.base,t.z0,t.x1,t.base+.6,t.z1);let i=(h,u,f,d,p,x,g)=>n.box("base",g,h,p,u,f,x,d),s=n.crop?.03:0;i(t.x0+s,t.z0+s,t.x1-s,t.z0+.4,t.base,-.3,R.earth),i(t.x0+s,t.z0+s,t.x0+.4,e,t.base,-.3,R.earth),i(t.x1-.4,t.z0+s,t.x1-s,e,t.base,-.3,R.earth),t.z1<44&&i(t.x0+s,t.z1-.4,t.x1-s,t.z1-s,t.base,-.3,R.earth);for(let[h,u,f]of[[-3.2,-2.4,R.earth2],[-7,-6.3,R.earthD]]){if(!n.crop){i(t.x0-.02,t.z0-.02,t.x1+.02,t.z0+.02,h,u,f),i(t.x0-.02,t.z0,t.x0+.02,44,h,u,f),i(t.x1-.02,t.z0,t.x1+.02,44,h,u,f);continue}i(t.x0,t.z0,t.x1,t.z0+.04,h,u,f),i(t.x0,t.z0,t.x0+.04,e,h,u,f),i(t.x1-.04,t.z0,t.x1,e,h,u,f),t.z1<44&&i(t.x0,t.z1-.04,t.x1,t.z1,h,u,f)}n.box("base",R.stone,t.x0,$t.tow,44,-3,-.3,44.6),n.box("base",R.stone,0,$t.tow,44,t.x1,-.3,44.6),n.box("base",R.stone,-3,-1.5,44,0,-.3,44.6),t.x0<-3&&t.x1>0&&Xs(n,"base",[-3,44.3],[0,44.3],$t.sew-.35,-1.5,.16);for(let h=t.x0;h<t.x1;h+=1.6)(h<-3.6||h>.4)&&n.box("base",R.stoneD,h,$t.tow+.02,44.58,h+.04,-.32,44.62);let r=[-2.8,-.4],o=Math.max(t.x0,r[0]),a=Math.min(t.x1,r[1]);for(let[h,u]of[[t.x0,r[0]],[r[1],t.x1]])Math.min(u,t.x1)>Math.max(h,t.x0)&&(n.box("base",R.stoneL,Math.max(h,t.x0),t.base,44,Math.min(u,t.x1),$t.tow,47.5),n.box("base",R.stoneD,Math.max(h,t.x0),$t.tow-.25,47.3,Math.min(u,t.x1),$t.tow+.05,47.6));if(a>o&&(n.box("base",R.stoneD,o,t.base,44.6,a,$t.water-.7,47.5),n.box("water",R.water,o,$t.water-.7,44.6,a,$t.water-.12,47.6)),t.x0<=-6.6&&t.x1>=3.4){let u=[],f=[],d=$t.tow+.06;for(let p=0;p<=14;p++){let x=p/14,g=Math.PI*x,m=-6.2+9.2*x,y=46.5+2.35*Math.sin(g),v=9.2,_=2.35*Math.PI*Math.cos(g),S=Math.hypot(v,_),A=-_/S,E=v/S;u.push([m-A*.7,y-E*.7]),f.push([m+A*.7,y+E*.7])}for(let p=0;p<14;p++)n.plate("ctx",R.wood,[[u[p][0],d,u[p][1]],[u[p+1][0],d,u[p+1][1]],[f[p+1][0],d,f[p+1][1]],[f[p][0],d,f[p][1]]],.14);n.rail("ctx",R.woodD,f.slice(2,13),d,.95,.9,{w:.06,top:.08});for(let p=2;p<13;p+=2)for(let x of[u[p],f[p]])n.cyl("ctx",R.woodD,x[0],x[1],$t.bed,d,.12,6)}n.box("base","#6E6A5E",t.x0,t.base,47.5,t.x1,$t.bed,t.z1),n.box("water",R.water,t.x0,$t.bed,47.6,t.x1,$t.water,t.z1);let l=[[-26,-24],[6.6,8.6],[56,58]],c=t.x0;for(let[h,u]of[...l,[t.x1,t.x1]])h>c+.5&&n.rail("ctx",R.stoneD,[[c,43.75],[h,43.75]],0,.9,1.6,{w:.14,top:.22}),c=u;for(let h of[-26,56]){let f=.19999999999999998,d=.3,p=44.6,x=46.2,g=h+2,m=g+19*d;n.box("base",R.stoneL,h,-.3,44,h+2,0,44.6),n.box("base",R.stoneL,h,$t.tow,p,g,0,x);for(let y=0;y<18;y++){let v=-f*(y+1),_=g+y*d;n.box("base",R.stoneL,_,$t.tow,p,_+d,v,x)}n.box("base",R.stone,h,0,x,g,.9,x+.22),n.plate("base",R.stone,[[g,.9,x],[m,-2.9,x],[m,-2.9,x+.22],[g,.9,x+.22]],1)}if(t.x1>8&&t.x0<15){n.box("base",R.stoneL,6.6,-.3,44,8.6,0,44.6),n.box("base",R.stoneL,6.6,$t.tow,44.6,8.6,0,45.8);for(let d=0;d<10;d++){let p=8.6+d*.48;n.box("base",R.stoneL,p,$t.tow,44.6,p+.48,-.19*(d+1),45.8)}n.box("base",R.stoneL,13.4,$t.tow,44.6,14.8,-1.9,47.1);for(let d=0;d<10;d++){let p=13.4-d*.48;n.box("base",R.stoneL,p-.48,$t.tow,45.8,p,-1.9-.19*(d+1),47.1)}n.plate("base",R.stone,[[8.6,-3.8+.55,47.1],[13.4,-1.9+.55,47.1],[13.4,-1.9+.55,47.3],[8.6,-3.8+.55,47.3]],.65),n.box("base",R.stone,13.4,-1.9,47.1,14.8,-1,47.3),n.box("base",R.stone,14.8,-1.9,44.6,15,-1,47.3),n.box("base",R.stone,6.6,0,45.8,8.6,.9,46),n.box("base",R.stoneD,8.6,-1,45.78,13.4,-.9,45.82)}if(t.x0<5&&t.x1>6)for(let h=0;h<6;h++){let u=$t.tow+.45+h*.58,f=h%2?.18:-.12;n.box("base",R.stoneD,5.3+f,u,44.48,5.9+f,u+.14,44.66)}n.box("base",R.woodD,58,$t.tow-.25,47.5,70,$t.tow,55.5);for(let h=58.2;h<70;h+=.45)n.box("base",R.wood,h,$t.tow,47.5,h+.4,$t.tow+.03,55.5);for(let[h,u]of[[58.3,49],[69.7,49],[58.3,52.2],[69.7,52.2],[58.3,55.3],[69.7,55.3]])n.cyl("base",R.woodD,h,u,$t.bed,$t.tow+.5,.16,6);for(let h of sx)uh(n,"ground",R.street,h[0],h[1],h[2],h[3],0,.3);for(let h of rx)uh(n,"ground",R.curb,h[0],h[1],h[2],h[3],$t.plot,.45),uh(n,"ground",R.walk,h[0]+.2,h[1]+.2,h[2]-.2,h[3]-.2,$t.plot+.01,.02);for(let h=-88;h<18;h+=6)n.box("ground","#D8D2C4",h,.01,-.06,h+3,.02,.06);for(let h=-48;h<34;h+=6)n.box("ground","#D8D2C4",24.94,.01,h,25.06,.02,h+3);for(let h=-88;h<88;h+=6)n.box("ground","#D8D2C4",h,.01,39.94,h+3,.02,40.06)}var Qe=Kr(7);function yl(n,t,e,i,s,r={}){let o=r.tie,a=r.fl||(Qe()<.3?[3.2]:Qe()<.8?[3.2,3]:[3.2,3,2.9]),l=o?Jr(R.wallB,Qe()):Jr(R.wallA,Qe()),c=o?Jr(R.roofB,Qe()):Jr(R.roofA,Qe()),h=r.ax||(i-t>s-e?"x":"z"),u=[],f=r.front||"n",d=f==="n"||f==="s"?i-t:s-e;d>3&&u.push({s:f,a:Math.max(.6,d*(.25+Qe()*.4)-.55),w:1.1,h:2.25});let p=Ie(n,{x0:t,z0:e,x1:i,z1:s,fl:a,wall:l,roof:c,ax:h,rt:r.rt||(o?Qe()<.5?"shed":"gable":Qe()<.2?"hip":"gable"),doors:u,R:Qe,blind:r.blind,rise:r.rise,posts:!o,L:{w:"ctx"},wins:{s:r.wins||"nsew",sp:2.6+Qe()*.8},curl:!o});return hn(t,0,e,i,p.top,s),p}function Ge(n,t,e,i,s,r,o={}){var u,f,d;let a=r==="n"||r==="s",l=a?t:e,c=a?i:s,h=l;for(;h<c-3;){let p=((u=o.min)!=null?u:6)+Qe()*(((f=o.max)!=null?f:10)-((d=o.min)!=null?d:6));c-(h+p)<4.5&&(p=c-h);let x=o.gap&&Qe()<.25?1.2:0,g=a?h:t,m=a?h+p-x:i,y=a?e:h,v=a?s:h+p-x,_=a?s-e:i-t;yl(n,g,y,m,v,{front:r,tie:o.tie,ax:a?"x":"z",blind:a?"we":"ns",fl:o.fl}),h+=p}}function dh(n){for(let t of n)Qs.push(t)}function ax(n,t,e,i,s,r,o,a=12){for(let l=0;l<a;l++){let c=l*Math.PI*2/a,h=(l+1)*Math.PI*2/a,u=(_,S)=>[i[0]+Math.cos(_)*S,i[1]+Math.sin(_)*S],[f,d]=u(c,s),[p,x]=u(h,s),[g,m]=u(c,r),[y,v]=u(h,r);n.quad(t,e,[f,d,i[2]],[p,x,i[2]],[y,v,i[2]-o],[g,m,i[2]-o]),n.quad(t,e,[p,x,i[2]],[f,d,i[2]],[g,m,i[2]-o],[y,v,i[2]-o])}}function lx(n){let t={x0:2,z0:5.5,x1:14,z1:14.5},e=.24,i=.15,s=Ie(n,{...t,fl:[3.6,3.1],wall:R.wallA[2],roof:R.roofA[1],ax:"x",real:!0,slabs:!0,floorCol:"#B89A74",doors:[{s:"n",a:1,w:4.2,h:3,open:!0},{s:"n",a:6.8,w:4.2,h:3,open:!0},{s:"s",a:2.4,w:1.1,h:2.3,open:!0}],wins:{s:"nsw",skip:[{s:"n",f:0,a0:0,a1:12},{s:"w",f:0,a0:0,a1:9}]},blind:"e",stairHoles:[{f:1,poly:[[11.2,9],[13.6,9],[13.6,13.9],[11.2,13.9]]}],L:{w:"S1",u:"S1u",r:"S1r",f:"S1"}});n.box("S1",R.post,7.25,i,5.5,7.75,3.75,6),Ys(n,"S1u",4,12,3.95,5.5,-1,"#3B2B20","#C49A4E"),ns(n,"S1",2.4,13.6,3.4,5.5,-1,1.5,"#5E7A7E"),to(n,"S1p",6.2,i,9,0,6.4,.7),to(n,"S1p",3,i,7.8,Math.PI/2,2,.7),bn(n,"S1p",6,i,10.95,Math.PI,6.6,2.6,.5,{n:6,drawers:!0}),n.wall("S1",R.wallA[2],[2+e,11.5],[10.6,11.5],i,3.75,.14,[{a:.5,w:1,y0:0,y1:2.2}]),n.wall("S1",R.wallA[2],[10.6,11.5],[10.6,14.5-e],i,3.75,.14),je(n,"S1p",7.6,i,13.2,0,4),Te("slip","S1p",[9.05,i+1.07,8.95],{hide:!0},r=>{r.box("S1p",R.paper,8.85,i+1.06,8.8,9.25,i+1.08,9.1),r.box("S1p",R.paper,8.9,i+1.08,8.84,9.22,i+1.09,9.06)}),Mn(n,"S1p",3.3,i,13.6,.3),Mn(n,"S1p",4.1,i,13.7,-.2),n.stairs("S1",R.woodD,12.4,13.9,i,-Math.PI/2,18,.2,.27,1.1),Pi(n,"S1p",2.6,i,6,.9),yn(n,"S1p",12.9,i,6.2,.2,.7,R.woodL),dl(n,"S1u",14.05,5.1,6.2,1,0,2.2,"#3B2B20","#B5462F"),hn(2,0,5.5,14,s.top,14.5,"S1"),Oe.S1={name:"\u8D27\u884C",c:[8,0,10],top:s.top,y1:i+3.6,door:[8,i,5.2],counter:[6.2,i,9],back:[5,i,14.6]},yl(n,14.4,5.5,20,14.5,{front:"n",blind:"w",ax:"z"})}function cx(n){Zn(n,"S2w",[[-45+.16,5+.16],[-30-.16,5+.16],[-30-.16,16-.16],[-45+.16,16-.16],[-45+.16,5+.16]],.15,2.5,{gaps:[[0,5.3,3.2]],col:R.wallA[1]});for(let c of[-39.55,-36.15])n.box("S2w",R.post,c-.14,.15,5,c+.14,3.2,5+.32);li(n,"S2w",-40.2,5-.5,-35.5,5+.8,3.2,{ax:"x",rise:.7,ov:.3,col:R.roofA[2]}),n.box("S2w",R.yard,-45+.3,.15,5+.3,-30-.3,.15+.03,16-.3);let o={x0:-42,z0:9,x1:-34,z1:14.5},a=.6;n.box("S2",R.stoneD,o.x0-.4,.15,o.z0-.5,o.x1+.4,a,o.z1+.4),n.stairs("S2",R.stone,-38,7.95,.15,Math.PI/2,2,.225,.275,2);let l=Ie(n,{...o,y0:a,fl:[3.5],wall:"#E9E1CF",roof:R.roofA[3],ax:"x",real:!0,slabs:!0,floorCol:"#B49A78",plinth:!1,rise:1.9,doors:[{s:"n",a:3.4,w:1.2,h:2.4,open:!0}],wins:{s:"nse",w:1.4,h:1.2,sill:.95,sp:2.2,skip:[{s:"s",a0:0,a1:8}]},L:{w:"S2",r:"S2r",f:"S2"}});Te("sDoor","S2",[-38.56,a,9.3],{axis:"y",ang:-1.75},c=>{c.box("S2",R.door,-38.56,a,9.25,-37.44,a+2.38,9.33);for(let h of[.5,1.6])c.box("S2",R.doorD,-38.5,a+h,9.33,-37.5,a+h+.1,9.37)}),n.box("S2",R.trim,-38.95,a+1,9.36,-38.8,a+1.3,9.5),n.box("S2",R.trim,-37.2,a+1,9.36,-37.05,a+1.3,9.5),Te("latch","S2",[-38.9,a+1.15,9.45],{axis:"z",ang:1.25},c=>{c.box("S2",R.woodL,-38.9,a+1.08,9.39,-37.1,a+1.22,9.5)});for(let[c,h]of[["n",1.1],["n",5.5],["e",.95],["e",3.15]])bd(n,"S2",o,c,h,1.4,a+1.05,a+2.25,.24,6,4);hl(n,"S2p",-40,a,14,Math.PI,2.6),hl(n,"S2p",-36.2,a,14,Math.PI,2.6),Ve(n,"S2p",-38,a,11.6,0,1.8,.9,.8,R.woodD),n.box("S2p",R.paper,-38.4,a+.8,11.4,-37.6,a+.86,11.85),je(n,"S2p",-41,a,10.4,.3,3),vn(n,"S2p",-35,a,10);for(let[c,h]of[[-35.2,12.6],[-35.8,13.2],[-40.6,12]])n.ybox("S2p","#B9A27C",c,a+.2,h,.7,.4,.5,c);Pi(n,"S2w",-43.6,.15,6.4,1.1),Pi(n,"S2w",-31.6,.15,6.4,1),Pi(n,"S2w",-43.6,.15,8,.9),Ws(n,"S2w",-32.2,.15,12.6,Math.PI/2,1.4),dh([[-43.3,14,.8]]),hn(o.x0,0,o.z0,o.x1,l.top,o.z1,"S2"),Oe.S2={name:"\u65E7\u4E66\u5C4B",c:[-38,0,11],top:l.top,yb:a,door:[-38,a,8.7],latch:[-38,a+1.15,9.45],win:[-33.6,a+1.55,10.6],key:[-43.6,.15,6.4],gate:[-37.85,.15,5.1],desk:[-38,a,11.6]},je(n,"ctx",-29.3,0,10.2,Math.PI/2,2),ul(n,"ctx",-28.9,0,12.6,-Math.PI/2,1.6,"#5B4A3E",!1),Oe.mkt={name:"\u79C1\u8D27\u8D29\u5B50",c:[-28.6,0,12.6]}}function hx(n){let t={x0:-15,z0:5.5,x1:-3.4,z1:14.5},e=.15,i=Ie(n,{...t,fl:[3.3,3.1],wall:R.wallA[0],roof:R.roofA[0],ax:"x",real:!0,slabs:!0,rise:2,doors:[{s:"n",a:5.2,w:1.2,h:2.4}],bal:{s:"n",f:1,a0:2.6,a1:9,d:1.4,dw:1.2},wins:{s:"nsw",skip:[{s:"n",f:0,a0:4.4,a1:7.6}]},blind:"e",L:{w:"S3",u:"S3u",r:"S3r",f:"S3"}}),s=i.top,r=i.yr;Ve(n,"S3u",-9.2,i.y[1],8.2,0,1.4,.8),hl(n,"S3u",-6.5,i.y[1],12.3,Math.PI,1.8),n.wall("S3u",R.wallA[0],[-15+.24,10.6],[-3.4-.24,10.6],i.y[1],i.y[2],.12,[{a:5.3,w:1,y0:0,y1:2.2}]);let o=-3.05,a=12.2;Le(n,"S3x",[o,.1,a],[o,7.75,a],.09),Le(n,"S3x",[o,7.75,a],[-5.2,7.75,a],.09),Le(n,"S3x",[-5.2,7.75,a],[-5.2,r-.1,10.55],.09),Le(n,"S3x",[o,.45,a],[o,.45,13.8],.09),n.cyl("S3x",R.metalD,o+.35,a,0,.25,.2,8),n.cyl("S3x",R.metal,o+.35,a,.25,.85,.07,8),Te("valve","S3x",[o+.35,.9,a],{axis:"y",ang:Math.PI*3},u=>{let f=[o+.35,.9,a],d=.3;for(let p=0;p<10;p++){let x=p*Math.PI/5,g=(p+1)*Math.PI/5;u.beam("S3x",R.red,[f[0]+Math.cos(x)*d,f[1],f[2]+Math.sin(x)*d],[f[0]+Math.cos(g)*d,f[1],f[2]+Math.sin(g)*d],.05)}u.beam("S3x",R.red,[f[0]-d,f[1],f[2]],[f[0]+d,f[1],f[2]],.04),u.beam("S3x",R.red,[f[0],f[1],f[2]-d],[f[0],f[1],f[2]+d],.04)});let l=-5.2,c=10,h=r+.05;n.box("S3x",R.metalD,l-.6,h-.3,c-.5,l+.6,h+.2,c+.5),n.cyl("S3x",R.rust,l,c,h+.2,h+1.3,.38,10),n.beam("S3x",R.brass,[l,h+1.45,c],[l,h+1.45,c-.75],.16),ax(n,"S3x",R.brass,[l,h+1.45,c-.7],.1,.34,.75),Te("hornCap","S3x",[l,h+1.8,c-1.47],{axis:"x",ang:1.9},u=>{u.box("S3x",R.metalD,l-.38,h+1.08,c-1.5,l+.38,h+1.82,c-1.44)}),qs(n,"S3x",-2.98,0,14,s+.9,-Math.PI/2,.55),vn(n,"S3x",-.05,0,7.4),yn(n,"S3x",-.1,0,8.6,.1,.8),hn(t.x0,0,t.z0,t.x1,i.top,t.z1,"S3"),Oe.S3={name:"\u8001\u5148\u751F\u5BB6",c:[-9.2,0,10],top:s,yr:r,door:[-9.2,e,5.3],bal:[-9.2,i.y[1],4.6],valve:[o+.35,.9,a],ladder:[-2.75,0,14],horn:[l,h+1.45,c-1.45],hornBase:[l,h,c],y1:i.y[1]},ux(n),yl(n,-20.6,5.5,-15.2,14.5,{front:"n",blind:"w"})}function ux(n){let t={x0:-26,z0:5.5,x1:-20.6,z1:14.5},e=.15,i=Ie(n,{...t,fl:[3.2,3],wall:R.wallA[2],roof:R.roofA[1],ax:"z",real:!0,slabs:!0,rt:"gable",rise:1.6,doors:[{s:"n",a:1.2,w:1.3,h:2.3,open:!0}],wins:{s:"nw",sp:2.7},blind:"e",L:{w:"S8",u:"S8u",r:"S8r",f:"S8"}});bn(n,"S8p",-23.3,e,14.05,Math.PI,2.6,1.9,.45,{n:3,goods:!0}),Te("homeVeg","S8p",[-23.3,e+1.3,13.85],{hide:!0},s=>{s.cyl("S8p","#9DBF73",-23.3,13.85,e+1.27,e+1.62,.27,9),s.cyl("S8p","#C7DDA0",-23.3,13.85,e+1.6,e+1.7,.16,9)}),Ve(n,"S8p",-24,e,10.2,0,1.4,.8),$n(n,"S8p",-24,e,11.2),$n(n,"S8p",-22.9,e,10.2),yn(n,"S8p",-21.4,e,13.6,.1,.7,R.woodL),hn(t.x0,0,t.z0,t.x1,i.top,t.z1,"S8"),Oe.home={name:"\u83DC\u5546\u7684\u5BB6",c:[-23.3,0,10],door:[-24.15,e,5.5],veg:[-23.3,e+1.45,13.85],top:i.top,y1:i.y[1]}}function dx(n){let t=Ie(n,{x0:-58.6,z0:5.5,x1:-47,z1:14.5,fl:[3.4,3],wall:R.wallA[3],roof:R.roofA[2],ax:"x",doors:[{s:"n",a:4.6,w:2.4,h:2.6}],blind:"e",L:{w:"ctx"}});Ys(n,"ctx",-56,-49.6,3.75,5.5,-1,"#3B2B20","#B5462F"),ns(n,"ctx",-58.2,-47.4,3.3,5.5,-1,1.6,"#8C5A3C"),Ve(n,"ctx",-55,.15,4.6,0,1.6,.8),Ve(n,"ctx",-50.5,.15,4.6,0,1.6,.8);for(let i of[-55.6,-54.4,-51.1,-49.9])$n(n,"ctx",i,.15,4);hn(-58.6,0,5.5,-47,t.top,14.5),Oe.food={name:"\u996D\u9986",c:[-52.8,0,9],top:t.top,front:[-52.8,.15,4.4]},ul(n,"ctx",-43,0,2.6,Math.PI,2.4,"#6E8A4E",!0);for(let[i,s]of[[-45,3.1],[-45,2.1]])yn(n,"ctx",i,0,s,.1,.7,R.woodL),n.box("ctx","#8DA26A",i-.28,.63,s-.28,i+.28,.7,s+.28);Ed(n,"ctx",-40.4,0,2.8,Math.PI),Mn(n,"ctx",-40.4,.65,2.8,.3),Oe.cab={name:"\u83DC\u5546",stall:[-43,0,2.6],merchant:[-43,0,3.65],front:[-43,0,1.35]},yl(n,-46.6,5.5,-45.2,14.5,{front:"n",fl:[3.2],blind:"we"});let e=Ie(n,{x0:-24,z0:21,x1:-16,z1:29,fl:[3.2,2.9],wall:R.wallA[1],roof:R.roofA[0],ax:"x",doors:[{s:"n",a:2,w:3.6,h:2.6,open:!0}],L:{w:"ctx"}});Ve(n,"ctx",-20,.15,20.6,0,2.2,.9,.85,"#A88A70");for(let i of[-21,-20.2,-19.4])n.box("ctx","#B0605A",i-.25,1.05,20.25,i+.25,1.1,20.9);ns(n,"ctx",-23.6,-16.4,3,21,-1,1.3,"#7D3B30"),hn(-24,0,21,-16,e.top,29),Oe.butcher={name:"\u8089\u8D29",c:[-20,0,24],front:[-20,0,19.6]}}function fx(n){let t=$t.sew,e=$t.sewTop,i=.45,s="sew",r="#9C9282",o="#857B6C",a="#6F7A72",l=(S,A,E,I,M={})=>{let b=(S+A)/2,D=L=>M.hole?_l(L,M.hole):[L];for(let L of D([S-i,E,A+i,I]))n.box(s,o,L[0],t-.45,L[1],L[2],t-.35,L[3]);for(let L of D([S,E,b-.6,I]))n.box(s,o,L[0],t-.35,L[1],L[2],t,L[3]);for(let L of D([b+.6,E,A,I]))n.box(s,o,L[0],t-.35,L[1],L[2],t,L[3]);if(n.box(s,a,b-.6,t-.35,E,b+.6,t-.28,I),n.box(s,r,S-i,t,E,S,e+.6,I),M.doorE){let[L,U,N]=M.doorE;n.box(s,r,A,t,E,A+i,e+.6,L),n.box(s,r,A,t,U,A+i,e+.6,I),n.box(s,r,A,t+N,L,A+i,e+.6,U),n.box(s,o,A,t-.35,L,A+i,t,U)}else n.box(s,r,A,t,E,A+i,e+.6,I);if(M.cap)for(let L of M.cap)n.box(s,o,S-i,e,L-.3,A+i,e+.6,L+.3)},c=(S,A,E,I)=>{let M=(E+I)/2;n.box(s,o,S,t-.45,E-i,A,t-.35,I+i),n.box(s,o,S,t-.35,E,A,t,M-.5),n.box(s,o,S,t-.35,M+.5,A,t,I),n.box(s,a,S,t-.35,M-.5,A,t-.28,M+.5),n.box(s,r,S,t,E-i,A,e+.6,E),n.box(s,r,S,t,I,A,e+.6,I+i)};l(-3,0,17.4,44.1,{cap:[17.7,30,43.8],doorE:[41.75,42.95,2.1],hole:[-.6,39.35,-.08,40.05]}),c(-30,-3,17.5,20.3),n.box(s,r,-30.45,t,17.05,-30,e+.6,20.75),n.box(s,r,-3.45,t,17.05,.45,e+.6,17.5);let u=41.75,f=42.95,d=19,p=(0-t)/(d+1),x=.29,g=1.25;n.box("base",o,.45,t-.45,u,g,t,f);for(let S=0;S<d;S++)n.box("base",o,g+S*x,t-.45,u,g+(S+1)*x,t+p*(S+1),f);n.box("base",r,.45,t-.45,41.45,g+d*x,-.3,u),n.box("base",r,.45,t-.45,f,g+d*x,-.3,43.25),n.rail("ctx",R.metalD,[[g+d*x,41.6],[.42,41.6],[.42,43.1],[g+d*x,43.1]],0,.95,1.2,{w:.05,top:.06});let m=t-1.8,y=t-.45;n.box(s,o,0,m-.4,37.55,4.05,m,41.45),n.box(s,r,0,m,37.55,.45,y,39.3),n.box(s,r,0,m,40.1,.45,y,41.45),n.box(s,r,0,m,39.3,.45,m+.45,40.1),n.box(s,r,3.6,m,37.55,4.05,y,41.45),n.box(s,r,.45,m,37.55,3.6,y,38),n.box(s,r,.45,m,41.2,3.6,y,41.45),n.box("sewF",o,.45,y,37.55,4.05,y+.3,41.45),n.box(s,r,-.75,m+.5,39.15,0,y,39.3),n.box(s,r,-.75,m+.5,40.1,0,y,40.25),n.box(s,r,-.75,m+.5,39.3,-.6,y,40.1),n.plate(s,"#7A7062",[[-.62,y-.06,39.3],[1.6,m+.05,39.3],[1.6,m+.05,40.1],[-.62,y-.06,40.1]],.3),n.plate(s,"#2E2A26",[[-.6,y-.04,39.35],[-.08,y-.33,39.35],[-.08,y-.33,40.05],[-.6,y-.04,40.05]],.02);for(let[S,A,E,I]of[[.95,m+.5,39.2,.3],[1.55,m+.18,40.25,.32],[.3,m+.78,40.2,.26],[2,m+.12,39.25,.26]])n.ybox(s,"#8A7F70",S,A,E,I,I*.7,I,S*2);n.box(s,"#7E6E58",1.9,m,38.4,3.4,m+.12,40.9);for(let[S,A]of[[3.05,38.55],[3.15,40.75],[2.2,40.85]])n.ybox(s,"#8C7A5E",S,m+.25,A,.6,.24,.45,S);n.ybox(s,"#6B5B47",-.4,t+.03,40,.9,.05,.22,.35),n.ybox(s,"#5E574D",-.28,t+.12,39.12,.42,.24,.32,.3),n.ybox(s,"#6E665A",-.62,t+.08,39.05,.26,.16,.22,.8),Te("sluice",s,[-1.5,t-.35,35.15],{move:[0,.55,0]},S=>{S.box(s,R.metalD,-2.1,t-.9,35.07,-.9,t-.3,35.23)});for(let S of[-2.2,-.88])n.box(s,R.metalD,S,t-.35,35.03,S+.08,t+.5,35.27);n.box(s,R.metalD,-2.2,t+.42,35.03,-.8,t+.5,35.27),Te("sluiceW",s,[-.12,t+.45,35.5],{axis:"x",ang:Math.PI*3},S=>{let A=[-.12,t+.45,35.5],E=.22;for(let I=0;I<8;I++){let M=I*Math.PI/4,b=(I+1)*Math.PI/4;S.beam(s,R.red,[A[0],A[1]+Math.sin(M)*E,A[2]+Math.cos(M)*E],[A[0],A[1]+Math.sin(b)*E,A[2]+Math.cos(b)*E],.045)}S.beam(s,R.red,[A[0],A[1]-E,A[2]],[A[0],A[1]+E,A[2]],.035),S.beam(s,R.red,[A[0],A[1],A[2]-E],[A[0],A[1],A[2]+E],.035)}),n.box(s,R.metalD,-.06,t+.2,35.3,0,t+.7,35.7),je(n,s,-.62,t,34.5,.3,2),n.ybox(s,"#6E665A",-.42,t+.35,36.4,.7,.7,.6,.4),n.ybox(s,"#5E574D",-.3,t+.2,35.9,.4,.4,.5,.2),n.box(s,"#2A2F2E",-.92,t-.34,34.7,-.895,t-.08,35);let v="#5E676A",_=t-.62;Le(n,s,[-.45,_,34.85],[-.45,_,36.45],.14,v),Le(n,s,[-.45,_,36.45],[1.05,_,36.45],.14,v),Le(n,s,[1.05,_,36.45],[1.05,_,38.12],.14,v),js.den={x0:.45,x1:3.6,z0:38,z1:41.2,y0:m-.05,y1:m-.04,L:s},n.box(s,R.stoneD,-3.6,-1.5,43.9,.6,-1.3,44.65),Xs(n,s,[-20,17.5],[-20,20.3],t,e+.3,.16),Le(n,s,[-2.6,t+2,20.5],[-2.6,t+2,27.4],.22,"#6E7578"),Le(n,s,[-2.6,t+2,29.6],[-2.6,t+2,36.8],.22,"#6E7578"),Le(n,s,[-2.6,t+2,27.4],[-2.6,t+2,29.6],.22,"#6E7578"),Le(n,s,[-2.6,t+2,36.8],[-2.6,e+.5,36.8],.22,"#6E7578");for(let S of[24,31,35.5])n.box(s,R.metalD,-2.98,t+1.7,S-.12,-2.95,t+2.3,S+.12);qs(n,s,-12,t,17.62,0,0,.5),qs(n,s,-.15,t,34,0,-Math.PI/2,.5),rh(n,"sewL",-12,.01,17.95),rh(n,"sewL",-.6,.01,34),wd(n,"ctx",-9.2,$t.tow,45.5,.9),gl(n,-6.4,44.95,$t.tow),gl(n,12.4,43.3),gl(n,-9.5,36.5);for(let S of[30.4,40.8])n.box("glow","#FFD891",-2.99,t+2.45,S-.14,-2.86,t+2.72,S+.14),no.push([-2.3,t+2.5,S,"#FFC981",12,9]);Oe.sewer={name:"\u6392\u6C34\u7BA1\u9053",c:[-1.5,$t.sew,30],outfall:[-1.5,$t.tow,45.2],junction:[-1.5,$t.sew,18.9],grate:[-20,$t.sew,18.9],den:[2.4,m,39.6],hole:[-.34,t,39.7],pit:[3.9,-2,42.35],door:[.2,t,42.35],sluice:[-.12,t+.45,35.5],mh1:[-12,0,17.95],mh2:[-.6,0,34],garbage:[-9.2,$t.tow,45.5],climb:[5.6,$t.tow,44.7],stairs:[8.6,$t.tow,46.5],bridge:[-1.6,$t.tow,50.2]}}function px(n){Zn(n,"S5w",[[44,-6.3],[88.6,-6.3],[88.6,-48.6],[44,-48.6],[44,-22]],.15,3,{gaps:[[0,14,6]],col:R.wallB[1],cap:R.roofB[1]}),Zn(n,"S5w",[[44,-9],[44,-6.3]],.15,3,{col:R.wallB[1],cap:R.roofB[1]}),n.box("S5w",R.metalD,58,.15,-6.5,58.3,3.6,-6.1),n.box("S5w",R.metalD,63.7,.15,-6.5,64,3.6,-6.1);let e={x0:44,z0:-48.4,x1:88.4,z1:-21},i=9.5;n.wall("S5",R.wallB[0],[e.x0+.12,e.z0],[e.x0+.12,e.z1],.15,.15+i,.24,[]),n.wall("S5",R.wallB[0],[e.x1-.12,e.z0],[e.x1-.12,e.z1],.15,.15+i,.24,[{a:14,w:4,y0:0,y1:4}]),n.wall("S5",R.wallB[0],[e.x0,e.z0+.12],[e.x1,e.z0+.12],.15,.15+i,.24,[]),n.box("S5","#B7AE9E",e.x0,.15-.02,e.z0,e.x1,.15+.01,e.z1),n.wall("S5",R.wallB[0],[58,e.z1+.12],[e.x1,e.z1+.12],.15,.15+i,.24,[{a:8,w:5,y0:0,y1:4.2}]),n.wall("S5u",R.wallB[0],[e.x0,e.z1+.12],[58,e.z1+.12],.15+7.2,.15+i,.24,[]);for(let l=e.x0;l<e.x1-1;l+=7.4){let c=l,h=Math.min(e.x1,l+7.4);n.plate("S5r",R.tin,[[c,.15+i,e.z0],[h,.15+i,e.z0],[h,.15+i+2.2,e.z1],[c,.15+i+2.2,e.z1]],.14)}for(let l=e.z0+4;l<e.z1;l+=4.5)n.box("S5r",R.metalD,e.x0,.15+i+2.2*(l-e.z0)/(e.z1-e.z0)-.5,l-.1,e.x1,.15+i+2.2*(l-e.z0)/(e.z1-e.z0)-.3,l+.1);n.cyl("S5r","#8A6A55",82,-42,.15,.15+24,1.1,10),n.cyl("S5r",R.metalD,82,-42,.15+23,.15+24.3,1.25,10);for(let[l,c,h,u,f]of[[52,-40,4,3,2.6],[60,-40,4,3,2.6],[68,-40,4,3,2.6],[52,-31,4,3,2.2],[60,-31,4,3,2.2],[76,-34,6,4,3.4]])n.box("S5p","#6F7A7C",l-h/2,.15,c-u/2,l+h/2,.15+f,c+u/2),n.box("S5p",R.metalD,l-h/2-.1,.15+f,c-u/2-.1,l+h/2+.1,.15+f+.25,c+u/2+.1),n.cyl("S5p",R.metal,l+h/2-.6,c,.15+f,.15+f+2.4,.2,8);je(n,"S5p",84,.15,-26,0,5),je(n,"S5p",70,.15,-24.5,0,4);let s={x0:44,z0:-21,x1:58,z1:-9},r=Ie(n,{...s,fl:[3.6,3.4],wall:R.wallB[2],roof:R.roofB[0],ax:"x",real:!0,slabs:!0,rise:1.4,rt:"shed",doors:[{s:"e",a:2,w:1.4,h:2.4,open:!0},{s:"s",a:9,w:1.4,h:2.4}],wins:{s:"swe",skip:[{s:"w",f:1,a0:0,a1:3}]},blind:"n",stairHoles:[{f:1,poly:[[55.4,-18.5],[57.6,-18.5],[57.6,-12],[55.4,-12]]}],L:{w:"S5",u:"S5u",r:"S5r",f:"S5"}}),o=r.y[1],a=.24;n.wall("S5u",R.wallB[2],[44+a,-21+.12],[58-a,-21+.12],o,o+3.4,.24,[{a:3.4,w:2.4,y0:1,y1:2.4},{a:6.6,w:2.4,y0:1,y1:2.4},{a:9.8,w:1.6,y0:1,y1:2.4}]),n.wall("S5u",R.wallB[2],[44+a,-18.5],[55.2,-18.5],o,o+3.4,.14,[{a:1.4,w:1.1,y0:0,y1:2.2},{a:7.2,w:1.1,y0:0,y1:2.2}]),n.wall("S5u",R.wallB[2],[50.6,-18.5],[50.6,-9-a],o,o+3.4,.14),Te("archDoor","S5u",[45.66,o,-18.5],{axis:"y",ang:-1.6},l=>{l.box("S5u",R.door,45.66,o,-18.46,46.72,o+2.18,-18.4)}),n.wall("S5u",R.wallB[2],[44+.12,-21],[44+.12,-18.4],o,o+3.4,.24,[{a:.5,w:1.4,y0:.9,y1:2.3}]),bn(n,"S5p",47.3,o,-9.5,Math.PI,5.6,2.3,.45,{n:5,drawers:!0}),bn(n,"S5p",44.5,o,-14,Math.PI/2,4.4,2.3,.45,{n:5,goods:!0}),Ve(n,"S5p",48,o,-14.2,0,1.6,.8);for(let l=0;l<4;l++)n.box("S5p",R.paper,47.4+l*.3,o+.8,-14.4,47.65+l*.3,o+.9+l*.02,-14);$n(n,"S5p",48,o,-13.2),Te("deskJar","S5p",[48.35,o+.8,-14.3],{hide:!0},l=>{l.cyl("S5p","#7F9A6A",48.35,-14.3,o+.8,o+1.12,.11,10),l.cyl("S5p","#B5462F",48.35,-14.3,o+1.12,o+1.18,.06,8)}),Ve(n,"S5p",54,o,-13.5,0,1.8,.9),bn(n,"S5p",53.5,o,-9.5,Math.PI,3.6,2.2,.4,{n:4,goods:!0}),n.stairs("S5",R.woodD,56.5,-12.2,.15,-Math.PI/2,18,.2,.3,1.2),Ve(n,"S5p",50.5,.15,-14,0,1.6,.8),je(n,"S5p",46,.15,-11,0,3),yn(n,"S5x",43.4,0,-17.2,0,1,R.woodL),yn(n,"S5x",43.4,0,-16.2,0,1),yn(n,"S5x",43.4,.9,-16.7,.05,1),vn(n,"S5x",42.9,0,-15),Le(n,"S5x",[43.78,0,-18.4],[43.78,o+3.3,-18.4],.08),n.box("S5x",R.stoneD,43.6,o+.75,-21,44,o+.9,-10.4),eo(n,"S5w",72,.15,-12,Math.PI/2,"#6B5E52",!0),je(n,"S5w",80,.15,-10,0,5),hn(e.x0,0,e.z0,e.x1,.15+i+2,e.z1,"S5"),hn(s.x0,0,s.z0,s.x1,r.top,s.z1,"S5"),Oe.S5={name:"\u5DE5\u5382",c:[51,0,-15],top:r.top,y1:o,gate:[61,.15,-6.3],climb:[43,0,-17.6],win:[44,o+.9,-19.8],corridor:[50,o,-19.8],archDoor:[47,o,-18.5],arch:[47.3,o,-13],hall:[66,0,-34],desk:[48,o+.8,-14.2],archWin:[44,o+1.6,-15],ledge:[43.8,o+.9,-15]}}function mx(n){let e={x0:32,z0:5,x1:46,z1:19},i=Ie(n,{...e,fl:[3.4,3],wall:R.wallB[0],roof:R.roofB[2],ax:"x",rt:"gable",rise:1.8,posts:!1,doors:[{s:"n",a:5.6,w:2.8,h:2.6},{s:"s",a:10.8,w:1.2,h:2.3,open:!0}],L:{w:"S6",u:"S6u",r:"S6r"}});Ys(n,"S6u",35,43,3.7,5,-1,"#2F2620","#A23E2E"),ns(n,"S6",32.4,45.6,3.25,5,-1,1.4,"#6E3A2E");for(let d of _l([32.2,19.2,47.6,26.8],[45.6,21.4,47.5,25.6]))n.box("cisL",R.yardD,d[0],.15,d[1],d[2],.15+.025,d[3]);Te("hatch","S6",[45.6,.15,23.5],{axis:"z",ang:3.06},d=>{d.box("S6",R.woodD,45.6,.15-.02,21.42,47.48,.15+.08,25.58);for(let p of[22.2,23.5,24.8])d.box("S6",R.wood,45.62,.15+.08,p-.1,47.46,.15+.12,p+.1)}),Zn(n,"S6",[[32,19],[32,27],[47.8,27],[47.8,19]],.15,2,{col:R.wallB[3],cap:R.roofB[3],t:.2}),je(n,"S6",34,.15,25.6,0,3),vn(n,"S6",36.6,.15,26.2),vn(n,"S6",37.3,.15,26),Le(n,"S6",[47.55,2.45,19.4],[47.55,2.45,22.6],.16,"#5E676A"),Le(n,"S6",[47.55,2.45,23.8],[47.55,2.45,26.9],.16,"#5E676A"),Le(n,"S6",[47.55,2.45,26.9],[47.55,.15,26.9],.16,"#5E676A"),Te("yardJoint","S6",[47.55,2.45,23.2],{fall:2.2},d=>{Le(d,"S6",[47.55,2.45,22.55],[47.55,2.45,23.85],.17,"#7C6A5A");for(let p of[22.6,23.8])d.box("S6",R.rust,47.33,2.22,p-.06,47.77,2.68,p+.06)}),hn(e.x0,0,e.z0,e.x1,i.top,e.z1,"S6");let s="cis",r=31.5,o=48.5,a=5.5,l=26.5,c=$t.cis,h="#9A7B66",u="#7F6453";n.box(s,u,r-.5,c-.5,a-.5,o+.5,c,l+.5),n.box(s,h,r-.5,c,a-.5,r,-.3,l+.5),n.box(s,h,o,c,a-.5,o+.5,-.3,l+.5),n.box(s,h,r,c,a-.5,o,-.3,a),n.box(s,h,r,c,l,o,-.3,l+.5);for(let d=c+1;d<-.5;d+=1.2)n.box(s,u,r-.02,d,a,r+.02,d+.08,l),n.box(s,u,o-.02,d,a,o+.02,d+.08,l),n.box(s,u,r,d,l-.02,o,d+.08,l+.02);for(let d=0;d<14;d++){let p=-.2-d*.2857142857142857,x=25.6-d*.3;n.box(s,R.stoneL,45.6,-4.6,x-.3,47.5,p,x)}n.box(s,h,47.5,c,21.4,48.5,-.3,26.5),n.box(s,h,45.3,c,25.6,47.5,-.3,26.5),n.box(s,R.stone,46.9,-4.6,6,48.5,-4.2,21.4),n.box(s,R.stone,45.6,-4.6,20.2,48.5,-4.2,21.4),n.box(s,R.stone,40,-4.6,6,46.9,-4.2,8),n.box(s,R.stone,32,-6.4,6,40,-6,10.5),Te("cisLadder",s,[40.15,-6,7.2],{axis:"z",ang:1.25},d=>{qs(d,s,40.15,-6,7.2,-4,Math.PI/2,.5)}),n.box(s,u,40,c,8,46.9,-4.6,16.8),n.box(s,R.stone,40,-4.6,8,46.9,-4.2,16.8);let f=(d,p,x,g)=>n.box(s,h,d,-4.2,p,x,-1.5,g);f(40.4,10.6,42.2,10.85),f(43.4,10.6,46.6,10.85),n.box(s,h,42.2,-4.2,10.6,43.4,-3.3,10.85),n.box(s,h,42.2,-2.3,10.6,43.4,-1.5,10.85),f(40.4,16.15,46.6,16.4),f(40.4,10.6,40.65,16.4),f(46.35,10.6,46.6,12.8),f(46.35,14,46.6,16.4),n.box(s,h,46.35,-1.95,12.8,46.6,-1.5,14),n.box("cisL",u,40.3,-1.5,10.5,46.7,-1.3,16.5),Te("roomDoor",s,[46.48,-4.2,12.82],{axis:"y",ang:-1.45},d=>{d.box(s,R.door,46.42,-4.2,12.82,46.54,-2,13.98)}),Te("roomBolt",s,[46.7,-3.1,13.4],{move:[0,0,-.62]},d=>{d.box(s,R.metalD,46.62,-3.16,13.3,46.76,-3.04,14.3)});for(let d of[12.6,14.25])n.box(s,R.metalD,46.6,-3.22,d,46.7,-2.98,d+.12);for(let[d,p]of[[41.3,15.3],[42.2,15.5],[41.4,14.4]])n.cyl(s,"#A2442F",d,p,-4.2,-3.25,.36,10),n.cyl(s,R.metalD,d,p,-3.9,-3.82,.37,10),n.cyl(s,R.metalD,d,p,-3.6,-3.52,.37,10),n.box(s,"#E7D9A8",d-.12,-3.75,p-.37,d+.12,-3.55,p-.36);je(n,s,45.2,-4.2,15.4,0,3),Te("cisValve",s,[44.2,-3,5.95],{axis:"z",ang:Math.PI*3},d=>{let p=[44.2,-3,5.95],x=.3;for(let g=0;g<10;g++){let m=g*Math.PI/5,y=(g+1)*Math.PI/5;d.beam(s,R.red,[p[0]+Math.cos(m)*x,p[1]+Math.sin(m)*x,p[2]],[p[0]+Math.cos(y)*x,p[1]+Math.sin(y)*x,p[2]],.05)}d.beam(s,R.red,[p[0]-x,p[1],p[2]],[p[0]+x,p[1],p[2]],.04),d.beam(s,R.red,[p[0],p[1]-x,p[2]],[p[0],p[1]+x,p[2]],.04)}),n.cyl(s,R.metalD,44.2,5.75,-3.5,-2.9,.12,8),yn(n,s,36.6,-6,8.1,.2,.8);for(let[d,p]of[[35.5,8.3],[37.7,8.5]])$n(n,s,d,-6,p);Le(n,s,[33.6,-3.2,5.6],[33.6,-3.2,6.5],.3,"#5E676A"),n.cyl(s,"#3E4446",33.6,6.55,-3.75,-3.35,.34,10),n.box(s,R.wood,39,-2.72,22.7,45.6,-2.6,23.7);for(let d of[39.6,42.3,45])for(let p of[22.75,23.65])n.cyl(s,R.woodD,d,p,c,-2.72,.09,6);n.rail(s,R.woodD,[[39,22.7],[45.6,22.7]],-2.6,.9,.9,{w:.05,top:.07}),n.box(s,R.stone,32,c,21.5,39,-2.6,26.5);for(let[d,p]of[[34.6,14],[38.4,17.6]])n.box(s,h,d-.5,c,p-.5,d+.5,-.3,p+.5);Le(n,s,[33,-3.2,5.6],[44,-3.2,5.6],.3,"#5E676A"),Le(n,s,[33,-3.2,5.6],[33,-.4,5.6],.3,"#5E676A"),js.cis={x0:r,x1:o,z0:a,z1:l,y0:c,y1:-7.2,L:s};for(let d=31.6;d<=36.6;d+=.35)n.box(s,R.woodD,d-.04,-2.6,22.6,d+.04,-.6,22.68);n.box(s,R.woodD,31.5,-.7,22.6,36.7,-.55,26.5),Te("cage",s,[36.62,-2.6,22.66],{axis:"y",ang:1.5},d=>{for(let p=22.66;p<=26.3;p+=.35)d.box(s,R.woodD,36.58,-2.6,p-.04,36.66,-.7,p+.04);d.box(s,R.woodD,36.56,-1,22.66,36.68,-.88,26.4)}),Oe.S6={name:"\u8D4C\u574A",c:[39,0,12],top:i.top,door:[39.5,.15,4.8],back:[42.6,.15,19.4],hatch:[46.55,.15,25.9],cis:[40,c,16],walk:[47.7,-4.2,14],plat:[37,-6,8],high:[35.5,-2.6,24],cage:[34.5,-2.6,24],ladder:[40.15,-4.2,7.2],valve:[44.2,-3,5.95],mouth:[33.6,-3.6,6.55],room:[43.5,-4.2,13.5],roomDoor:[46.5,-4.2,13.4],roomWin:[42.8,-2.8,10.7],kegs:[41.6,-4.2,15],yardPipe:[47.55,2.45,23.2],bridge:[42.3,-2.6,23.2]}}function gx(n){Zn(n,"S7w",[[-26,-6.4],[4,-6.4],[4,-49],[-26,-49],[-26,-6.4]],.15,2.4,{gaps:[[0,13,6]],col:"#B8A98C",cap:"#8C7A5E",t:.14});let e=-18,i=-4,s=-34,r=-20,o=4.6,a=6;for(let y=0;y<=a;y++){let v=.15+y*o,_=y<=4;if(y>0&&(_?n.slab("S7","#C9BBA0",[[e,s],[i,s],[i,r],[e,r]],[[[i-4.5,s+1],[i-1,s+1],[i-1,s+5.5],[i-4.5,s+5.5]]],v-.3,v,{side:R.band}):n.box("S7","#A8916E",e,v-.3,s,i,v,s+2.2)),y<a)for(let[S,A]of[[e,s],[i,s],[e,r],[i,r],[(e+i)/2,s],[(e+i)/2,r],[e,(s+r)/2],[i,(s+r)/2]])n.box("S7",y<4?"#8E3B2E":"#B59B6E",S-.3,v,A-.3,S+.3,v+o,A+.3);if(y>0&&y<=4)for(let S of[0,1])n.box("S7",R.roofA[0],e-1.2,v-.5,s-1.2,i+1.2,v-.3,r+1.2)}for(let y=0;y<4;y++){let v=.15+y*o;n.stairs("S7",R.woodD,i-1.6,s+5.3,v,-Math.PI/2,17,o/17,.26,1.4)}n.wall("S7","#E3D6BC",[e,r-.15],[e+8,r-.15],.15+o,.15+o+2.4,.24),n.wall("S7","#E3D6BC",[e+.15,s],[e+.15,r],.15,.15+3,.24,[{a:5,w:3,y0:0,y1:2.6}]);for(let y=1;y<=4;y++)n.rail("S7",R.woodD,[[e,r],[i,r],[i,s+6]],.15+y*o,1,1.2,{w:.05,top:.08});ah(n,"S7",[e,r],[i,r],.15,.15+a*o,[0,1],1),ah(n,"S7",[e,s],[e,r],.15,.15+a*o-4,[-1,0],1),Ad(n,"S7",-1,.15,-44,40,Math.PI*.85,22),Zs(n,"S7w",-22,.15,-12,0,4,5),$s(n,"S7w",-8,.15,-12,0),$s(n,"S7w",-6.4,.15,-12,0),oh(n,"S7w",0,.15,-15,0,6),n.box("S7w","#D6CDBD",-24.6,.15,-46.5,-18.6,.15+2.8,-41.5),li(n,"S7w",-24.6,-46.5,-18.6,-41.5,.15+2.8,{type:"shed",rise:.5,col:R.tin,wall:"#D6CDBD"}),hn(e,0,s,i,.15+a*o,r,"S7"),Oe.S7={name:"\u4E91\u9601",c:[-11,0,-27],top:.15+a*o,gate:[-10,.15,-6.4],fh:o};let l=-58.6,c=-31.4,h=-48.6,u=-6.4;Zn(n,"S7y",[[l,u],[c,u],[c,h],[l,h],[l,u]],.15,3,{gaps:[[0,10.6,6],[1,19.3,1.6,1.3,2.4]],col:R.wallA[3],cap:R.roofA[3]}),n.box("S7y",R.yardD,l+.3,.15,h+.3,c-.3,.15+.02,u-.3);let f={x0:l+.3,z0:h+.3,x1:c-.3,z1:h+9};for(let y=f.x0+.2;y<=f.x1;y+=4.5)n.box("S7y",R.post,y-.15,.15,f.z1-.3,y+.15,.15+4.2,f.z1);n.box("S7y",R.wallA[1],f.x0,.15,f.z0,f.x1,.15+4.2,f.z0+.3),li(n,"S7y",f.x0-.2,f.z0,f.x1+.2,f.z1,.15+4.2,{type:"shed",rise:1,ax:"x",col:R.roofA[1],wall:R.wallA[1]});for(let y=f.x0+2;y<f.x1-3;y+=5)Zs(n,"S7y",y+1,.15,f.z0+3.5,0,3,4),$s(n,"S7y",y+3,.15,f.z0+6.5,0);let d=c-6,p=-30,x=-22;n.wall("S7y",R.wallA[2],[d,p],[d,x],.15,.15+3.2,.24,[{a:3.2,w:1.1,y0:0,y1:2.2}]),n.wall("S7y",R.wallA[2],[d,p],[c-.3,p],.15,.15+3.2,.24),n.wall("S7y",R.wallA[2],[d,x],[c-.3,x],.15,.15+3.2,.24),li(n,"S7y",d-.2,p-.3,c,x+.3,.15+3.2,{type:"shed",rise:.6,ax:"z",col:R.roofA[2],wall:R.wallA[2]}),Te("bars","S7y",[c+.02,.15+1.85,-26.5],{move:[.9,-1.2,0],hide:!0},y=>{Xs(y,"S7y",[c+.02,-27.3],[c+.02,-25.7],.15+1.3,.15+2.4,.2)}),Te("hutDoor","S7y",[d-.1,.15,-26.8],{axis:"y",ang:-1.7},y=>{y.box("S7y",R.door,d-.14,.15,-26.78,d-.06,.15+2.18,-25.72)}),Te("truck","S7y",[-46,.15,-26],{path:[[-46,-26],[-46,-20.5],[-48.4,-16.2],[-49.6,-14.6]]},y=>eo(y,"S7y",-46,.15,-26,0,"#5D6B6E",!0)),Zs(n,"S7y",-40,.15,-18,Math.PI/2,4,4.5),$s(n,"S7y",-44,.15,-28),$s(n,"S7y",-42.6,.15,-28),oh(n,"S7y",-38,.15,-32,0,5),fl(n,"S7y",-54.5,.15,-12),Ve(n,"S7y",-52,.15,-11.5,0,1.8,.8),Ws(n,"S7y",-52,.15,-10.6,0,1.6);let g=Ie(n,{x0:l+.3,z0:-18,x1:l+5.5,z1:u-.3,fl:[3],wall:R.wallA[0],roof:R.roofA[0],ax:"z",doors:[{s:"e",a:3.5,w:1.1,h:2.2}],L:{w:"S7y"},posts:!1}),m=Ie(n,{x0:-64,z0:-34,x1:-59,z1:-14,fl:[3.2,3],wall:R.wallA[2],roof:R.roofA[1],ax:"z",rt:"flat",doors:[{s:"w",a:8,w:1.1,h:2.2}],L:{w:"ctx"}});qs(n,"ctx",-64.1,0,-16,m.top+.4,-Math.PI/2,.55),hn(-64,0,-34,-59,m.top,-14),Oe.S7y={name:"\u6599\u573A",c:[-45,0,-27],gate:[-45,.15,-6.4],roof:[-61.5,m.top+.38,-24],win:[-31,.15,-26.5],hut:[-34.5,.15,-26],truck:[-46,.15,-26],food:[-52,.15,-11.5],top:m.top}}function xx(n){Zn(n,"ctx",[[-88.6,-6.4],[-66.4,-6.4],[-66.4,-48.6],[-88.6,-48.6],[-88.6,-6.4]],.15,2.8,{gaps:[[0,8.6,5]],col:"#E2D5BE",cap:R.roofA[0]});for(let i of[-80.2,-74.6])n.box("ctx","#8E3B2E",i-.2,.15,-6.8,i+.2,3.8,-6.2);li(n,"ctx",-81,-7.6,-73.8,-5.6,3.8,{ax:"x",rise:1,ov:.4,col:R.roofA[1]});let e=Ie(n,{x0:-84,z0:-36,x1:-71,z1:-24,y0:.9,fl:[5],wall:"#E6DAC3",roof:R.roofA[3],ax:"x",rt:"hip",rise:3.2,doors:[{s:"s",a:5.3,w:2.4,h:3.2}],L:{w:"ctx"}});n.box("ctx",R.stone,-84.6,.15,-36.6,-70.4,.9,-23.4),n.stairs("ctx",R.stone,-77.5,-22.6,.15,-Math.PI/2,3,.25,.3,4),Ie(n,{x0:-88,z0:-20,x1:-82,z1:-9,fl:[3.4],wall:"#E6DAC3",roof:R.roofA[0],ax:"z",doors:[{s:"e",a:4,w:1.2,h:2.4}],L:{w:"ctx"}}),Ie(n,{x0:-73,z0:-20,x1:-67,z1:-9,fl:[3.4],wall:"#E6DAC3",roof:R.roofA[0],ax:"z",doors:[{s:"w",a:4,w:1.2,h:2.4}],L:{w:"ctx"}}),dh([[-86,-44,1.2],[-69,-44,1.1],[-86,-14,1],[-69,-14,1]]),hn(-84,0,-36,-71,e.yr,-24),Oe.office={name:"\u5B98\u7F72",c:[-77.5,0,-30]}}function _x(n){Qe=Kr(11),Ge(n,-90,5.5,-62.2,14.5,"n"),Ge(n,-90,21,-62.2,29,"n"),Ge(n,-58.8,21,-30.2,29,"n"),Ge(n,-15.4,21,-3.6,29,"n"),Ge(n,.6,21,20,29,"n"),Ge(n,-90,29.4,-62.2,35.6,"s",{fl:[3]}),Ge(n,-58.8,29.4,-30.2,35.6,"s",{fl:[3]}),Ge(n,-25.8,29.4,-3.6,35.6,"s",{fl:[3]}),Ge(n,.6,29.4,20,35.6,"s",{fl:[3]}),Ge(n,-25.8,21,-24.2,29,"n"),Ge(n,8.4,-14,20,-4.4,"s"),Ge(n,8.4,-30,20,-16,"s"),Ge(n,8.4,-49.6,20,-32,"s"),Qe=Kr(23),Ge(n,30.4,-49.6,37.6,-2.4,"e",{tie:!0,min:5,max:8,gap:!0}),Ge(n,52.4,3.4,90,6.8,"n",{tie:!0,min:5,max:8,gap:!0,fl:[3]}),Ge(n,72.4,7.4,89.6,19,"w",{tie:!0,min:5,max:7,gap:!0}),Ge(n,52.4,28.4,72,35.6,"s",{tie:!0,min:5,max:7,gap:!0,fl:[3]}),Ge(n,30.4,27.4,47.6,35.6,"s",{tie:!0,min:5,max:7,gap:!0,fl:[3]}),[[56,10,0],[60.5,10,0],[65,10,0],[56,26,Math.PI],[60.5,26,Math.PI],[69.5,26,Math.PI],[70.4,14,-Math.PI/2],[70.4,19,-Math.PI/2]].forEach(([i,s,r],o)=>ul(n,"ctx",i,.15,s,r,2.4,[R.cloth,R.cloth2,"#8C7A4E","#6E5A8A"][o%4])),n.cyl("ctx",R.stone,62,18,.15,.85,.9,10),n.cyl("ctx","#5F7F86",62,18,.84,.86,.7,10),dh([[58,18.5,1.2]]);let e=Ie(n,{x0:74,z0:20,x1:89.6,z1:35.6,fl:[4.2,3.8,3.8],wall:"#D9CDB8",roof:R.roofA[2],ax:"x",rt:"hip",rise:2.4,doors:[{s:"s",a:5.5,w:4,h:3.6}],L:{w:"ctx"}});hn(74,0,20,89.6,e.top,35.6),Oe.wh={name:"\u4ED3\u5E93",c:[82,0,28],gate:[81.5,.15,35.8],top:e.top};for(let i=-86;i<88;i+=11)Math.abs(i-4)>6&&Math.abs(i+25)>4&&Math.abs(i-57)>4&&Qs.push([i+2.5,43.1,.9,0]);for(let i of[[-70,18.8,.8],[-40,18.6,.7],[12,18.8,.8],[-28,-40,1.1],[6,-30,1],[-60,2.2,.7]])Qs.push(i)}var fh={food:{crop:[-61,-4.5,16,50]},study:{crop:[-47,-4.5,3,21]},shop:{crop:[-4,-4.5,90,51]},factory:{crop:[36,-50,90,4]},cistern:{crop:[28,-3,52.2,36.2]},yard:{crop:[-90,-50,4.5,.5]},clinic:{board:"clinic",crop:hh,views:Rd}};function Id(n,t={}){for(let a of Object.keys(Oe))delete Oe[a];pl.length=0,Qs.length=0,ml.length=0,no.length=0,cl.length=0,Qe=Kr(7);for(let a of Object.keys(js))delete js[a];let e=t.area?fh[t.area]:null,i=e?e.crop:null;e&&e.board==="clinic"?Cd(n,{SITE:Oe,BLOCK:pl,TREES:Qs,DYN:ml,LAMPS:no,WATER:js,dyn:Te,lamp:gl}):(n.crop=i,ox(n),lx(n),cx(n),hx(n),dx(n),fx(n),px(n),mx(n),gx(n),xx(n),_x(n),n.crop=null);let s=(a,l,c=0)=>!i||a>=i[0]+c&&a<=i[2]-c&&l>=i[1]+c&&l<=i[3]-c,r=a=>cl.some(l=>Math.abs(l[0]-a[0])<.01&&Math.abs(l[1]-a[2])<.01&&Math.abs(l[2]-a[3])<.01&&Math.abs(l[3]-a[5])<.01),o={};for(let[a,l]of Object.entries(js))(!i||l.x1>i[0]&&l.x0<i[2]&&l.z1>i[1]&&l.z0<i[3])&&(o[a]={...l});return{SITE:{...Oe},crop:i,BLOCK:pl.filter(a=>!i||!r(a)&&a[3]>i[0]&&a[0]<i[2]&&a[5]>i[1]&&a[2]<i[3]),TREES:Qs.filter(a=>s(a[0],a[1],.6)),DYN:ml.filter(a=>s(a.pivot[0],a.pivot[2])),LAMPS:no.filter(a=>s(a[0],a[2],.2)),WATER:o}}var vl=class{constructor(t,e,i={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{}},i),this.cur={th:0,ph:.9,r:500,t:new F},this.goal={th:0,ph:.9,r:500,t:new F},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){let i=this.goal;t.th!==void 0&&(i.th=t.th),t.ph!==void 0&&(i.ph=t.ph),t.r!==void 0&&(i.r=t.r),t.t&&i.t.copy(t.t),this._clamp(),e&&(this.cur.th=i.th,this.cur.ph=i.ph,this.cur.r=i.r,this.cur.t.copy(i.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var o,a,l;let i={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,t:this.cur.t.clone()},s=(o=t.th)!=null?o:i.th;for(;s-i.th>Math.PI;)s-=Math.PI*2;for(;s-i.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(a=t.ph)!=null?a:i.ph,r:(l=t.r)!=null?l:i.r,t:(t.t||i.t).clone()};this.fly={from:i,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let i=e.bounds;t.t.x=Math.min(i.x1,Math.max(i.x0,t.t.x)),t.t.z=Math.min(i.z1,Math.max(i.z0,t.t.z))}}update(t){let e=this.cur,i=this.goal,s=!1;if(this.fly){let r=this.fly,o=Math.min(1,(this.now()-r.t0)/r.dur),a=o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;e.th=r.from.th+(r.to.th-r.from.th)*a,e.ph=r.from.ph+(r.to.ph-r.from.ph)*a;let l=Math.sin(Math.PI*a)*Math.min(.35,r.from.t.distanceTo(r.to.t)/900);e.r=Math.exp(Math.log(r.from.r)+(Math.log(r.to.r)-Math.log(r.from.r))*a)*(1+l),e.t.lerpVectors(r.from.t,r.to.t,a),o>=1&&(this.fly=null,s=!0)}else{let r=1-Math.exp(-t*12);e.th+=(i.th-e.th)*r,e.ph+=(i.ph-e.ph)*r,e.r=Math.exp(Math.log(e.r)+(Math.log(i.r)-Math.log(e.r))*r),e.t.lerp(i.t,r)}return this._apply(),s||!!this.fly||Math.abs(i.th-e.th)>1e-4||Math.abs(i.ph-e.ph)>1e-4||Math.abs(i.r-e.r)>.01||i.t.distanceToSquared(e.t)>1e-4}_apply(){let t=this.cur,e=Math.sin(t.ph);this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t)}_ground(t,e,i){let s=this.dom.getBoundingClientRect(),r=new It((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),o=new Gr;o.setFromCamera(r,this.cam);let a=new F;return o.ray.intersectPlane(new an(new F(0,1,0),-i),a)?a:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,i){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let o=this._ground(e,i,s.t.y);if(o){let a=1-s.r/r;s.t.x+=(o.x-s.t.x)*a,s.t.z+=(o.z-s.t.z)*a}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let i=this.goal,s=this.dom.clientHeight||600,r=2*i.r*Math.tan(this.cam.fov*Math.PI/360)/s,o=this.cur.th,a=Math.cos(o),l=-Math.sin(o),c=-Math.sin(o),h=-Math.cos(o),u=1/Math.max(.35,Math.cos(this.cur.ph));i.t.x+=(-t*a+e*c*Math.min(u,2.2))*r,i.t.z+=(-t*l+e*h*Math.min(u,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("pointerdown",i=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(i.pointerId,{x:i.clientX,y:i.clientY,b:i.button,sh:i.shiftKey,t:i.pointerType});try{t.setPointerCapture(i.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=i=>{var s,r;this.ptrs.delete(i.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",i=>{let s=this.ptrs.get(i.pointerId);if(!s||!this.enabled)return;let r=i.clientX-s.x,o=i.clientY-s.y;if(s.x=i.clientX,s.y=i.clientY,this.ptrs.size>=2){let[a,l]=[...this.ptrs.values()],c=(a.x+l.x)/2,h=(a.y+l.y)/2,u=Math.hypot(a.x-l.x,a.y-l.y),f=Math.atan2(l.y-a.y,l.x-a.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,u),c,h),this.pan(c-this._pinch.mx,h-this._pinch.my);let d=f-this._pinch.a;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),this.rotate(d,0)}this._pinch={d:u,mx:c,my:h,a:f};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||i.shiftKey?this.pan(r,o):this.rotate(-r*.0055,-o*.0045)}),t.addEventListener("wheel",i=>{var r,o;if(!this.enabled)return;if(!this.wheelOn){(o=(r=this.o).onWheelHint)==null||o.call(r);return}i.preventDefault();let s=i.deltaMode===1?i.deltaY*16:i.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),i.clientX,i.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};var bl={ov:{t:[-2,0,2],r:205,ph:.9,th:-.42},ext:{t:[-2,2,0],r:150,ph:1.08,th:-.3}};function yx(n){let t=fh[n];if(!t)return bl;if(t.views)return t.views;let e=t.crop,i=(e[0]+e[2])/2,s=(e[1]+e[3])/2,r=Math.max(e[2]-e[0],(e[3]-e[1])*1.3);return{ov:{t:[i,0,s],r:r*1.42,ph:.86,th:-.42},ext:{t:[i,1.5,s],r:r*1.02,ph:1.08,th:-.3}}}var vx=[.3,.28,.26],Dd=1e5;function Mx(n){return n.side=Ze,n.clipShadows=!0,n.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      if (!gl_FrontFacing) gl_FragColor = vec4(${vx.map(e=>e.toFixed(3)).join(",")}, 1.0);`)},n.customProgramCacheKey=()=>"cap",n}function Ml(n){let t=new Ue;return t.setAttribute("position",new Pe(n.p,3)),t.setAttribute("normal",new Pe(n.n,3)),t.setAttribute("color",new Pe(n.c,3)),t.computeBoundingSphere(),t}function Ld(n){let t=new Ue;for(let e of["position","normal","color"]){let i=n.reduce((o,a)=>o+a.attributes[e].array.length,0),s=new Float32Array(i),r=0;for(let o of n)s.set(o.attributes[e].array,r),r+=o.attributes[e].array.length;t.setAttribute(e,new Pe(s,3))}return t}function bx(){let n=(r,o)=>{let a=r.attributes.position.count,l=new Float32Array(a*3);for(let c=0;c<a;c++)l.set(o,c*3);return r.setAttribute("color",new Pe(l,3)),r},t=(r,o,a,l)=>{let c=yd(new wi(r,1).deleteAttribute("normal").deleteAttribute("uv"));return c.computeVertexNormals(),c.translate(o,a,l).toNonIndexed()},e=Ld([t(1.35,0,3.9,0),t(1,.9,3.35,.4),t(.95,-.75,3.5,-.55),t(.85,.1,4.75,-.25)].map(r=>n(r,[1,1,1]))),i=new Ye(.14,.22,2.9,6,1,!0).translate(0,1.45,0).deleteAttribute("uv"),s=new Yt("#7A6A58");return Ld([e,n(i.toNonIndexed(),[s.r,s.g,s.b])])}var Sx=n=>/^S\d/.test(n)&&!/r$/.test(n)||n==="sew"||n==="cis";function wx(n={}){let t=new ts,e=Id(t,n),i=t.out(),s=new Ht,r={},o={},a={},l=x=>new Tn({vertexColors:!0,roughness:.9,metalness:0,...x}),c=[],h=x=>(r[x]||(r[x]=new Ht,r[x].name=x,s.add(r[x])),r[x]),u=x=>(a[x]||(Sx(x)?(o[x]=new an(new F(0,-1,0),Dd),a[x]=Mx(l({})),a[x].clippingPlanes=[o[x]]):x==="water"?a[x]=l({roughness:.25,metalness:.05}):x==="glow"?a[x]=new xn({vertexColors:!0,toneMapped:!1}):a[x]=l({roughness:x==="ground"||x==="base"?.95:.9})),a[x]);for(let[x,g]of Object.entries(i)){let m=new ee(Ml(g),u(x));m.castShadow=!["ground","base","water","glow","sewL","cisL"].includes(x),m.receiveShadow=x!=="glow",h(x).add(m),c.push(m)}let f={};for(let x of e.DYN){let g=new ts;x.build(g);let m=new Ht,y=new Ht;m.name=x.id,m.add(y);for(let[_,S]of Object.entries(g.out())){let A=new ee(Ml(S),u(x.layer));A.castShadow=!0,A.receiveShadow=!0,y.add(A)}let v=new F(...x.pivot);m.position.copy(v),y.position.copy(v).negate(),h(x.layer).add(m),f[x.id]={d:x,grp:m,k:-1}}let d={};for(let[x,g]of Object.entries(e.WATER||{})){let m=new Tn({color:x==="den"?"#5C7A70":"#4F7F86",roughness:.2,metalness:.05,transparent:!0,opacity:.78,depthWrite:!0}),y=new Xn(g.x1-g.x0,1,g.z1-g.z0).translate((g.x0+g.x1)/2,.5,(g.z0+g.z1)/2),v=new ee(y,m);v.position.y=g.y0,v.receiveShadow=!0,h(g.L||"cis").add(v),d[x]=v}let p=d.cis||null;if(n.trees!==!1){let x=bx(),g=new Tn({vertexColors:!0,roughness:.95}),m=e.TREES;if(m.length){let y=new Er(x,g,m.length),v=new ue,_=new Un,S=new F,A=new F,E=new Yt,I=new F(0,1,0),M=new Yt("#82966B"),b=new Yt("#A2AD80");m.forEach(([D,L,U,N],H)=>{let B=Math.sin(D*12.9898+L*78.233)*43758.5453,Y=B-Math.floor(B);_.setFromAxisAngle(I,Y*6.28),S.set(U*(.9+Y*.2),U*(.95+Y*.2),U*(.9+Y*.2)),A.set(D,N!=null?N:.15,L),v.compose(A,_,S),y.setMatrixAt(H,v),E.copy(M).lerp(b,Y),y.setColorAt(H,E)}),y.castShadow=!0,y.receiveShadow=!0,y.frustumCulled=!1,h("ctx").add(y)}}return{root:s,groups:r,planes:o,M:a,dyn:f,cisWater:p,waters:d,meshes:c,st:e}}function Ex(n,t){var s;let e=n.d,i=n.grp;if(t=Math.max(0,Math.min(1,t)),n.k===t)return!1;if(n.k=t,i.position.set(...e.pivot),i.rotation.set(0,0,0),i.visible=!0,e.path){let r=e.path,o=[],a=0;for(let x=1;x<r.length;x++){let g=Math.hypot(r[x][0]-r[x-1][0],r[x][1]-r[x-1][1]);o.push(g),a+=g}let l=t*a,c=0;for(;c<o.length-1&&l>o[c];)l-=o[c],c++;let h=r[c],u=r[c+1],f=o[c]?l/o[c]:0;i.position.x=e.pivot[0]+(h[0]+(u[0]-h[0])*f)-r[0][0],i.position.z=e.pivot[2]+(h[1]+(u[1]-h[1])*f)-r[0][1];let d=Math.atan2(r[1][0]-r[0][0],r[1][1]-r[0][1]),p=Math.atan2(u[0]-h[0],u[1]-h[1]);return i.rotation.y=p-d,!0}if(e.axis){let r=((s=e.ang)!=null?s:Math.PI/2)*t;e.axis==="x"?i.rotation.x=r:e.axis==="z"?i.rotation.z=r:i.rotation.y=r}if(e.move&&(i.position.x+=e.move[0]*t,i.position.y+=e.move[1]*t,i.position.z+=e.move[2]*t),e.fall){let r=t*t;i.position.y-=e.fall*r,i.rotation.x+=.9*r,i.rotation.z+=.5*r}return e.hide&&t>=.5&&(i.visible=!1),!0}function Fd(n,t={}){var it,ot;let e=(it=t.mobile)!=null?it:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),i=new al({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.shadowMap.enabled=!0,i.shadowMap.type=ha,i.shadowMap.autoUpdate=!1,i.toneMapping=_a,i.toneMappingExposure=(ot=t.exposure)!=null?ot:1,i.localClippingEnabled=!0,i.setClearColor("#1C2330",0),i.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",n.appendChild(i.domElement);let s=new Sr,r=new We(32,1,.5,3e3),o=wx(t);s.add(o.root);let a=new kr("#EEF2F5","#B5AB9A",1.3);s.add(a);let l=new Vr("#FFF2DF",2.6),c=new F(-.45,.8,.4).normalize(),h=new F(0,0,4);l.position.copy(h).addScaledVector(c,400),l.target.position.copy(h),s.add(l,l.target),l.castShadow=!0;let u=e?2048:4096;l.shadow.mapSize.set(u,u),l.shadow.bias=-3e-4,l.shadow.normalBias=.05,l.shadow.radius=2;let f=o.st.LAMPS.map(([q,K,ut,vt,Z,C])=>{let w=new zr(vt||"#FFC981",0,C||16,1.6);return w.position.set(q,K,ut),w.userData.I=Z||26,s.add(w),w}),d=q=>{let K=l.shadow.camera,ut=new ue().lookAt(l.position,l.target.position,new F(0,1,0)).setPosition(l.position).invert(),vt=1e9,Z=-1e9,C=1e9,w=-1e9,z=1e9,Q=-1e9,at=new F;for(let tt of[q.x0,q.x1])for(let Ft of[q.y0,q.y1])for(let xt of[q.z0,q.z1])at.set(tt,Ft,xt).applyMatrix4(ut),vt=Math.min(vt,at.x),Z=Math.max(Z,at.x),C=Math.min(C,at.y),w=Math.max(w,at.y),z=Math.min(z,at.z),Q=Math.max(Q,at.z);Object.assign(K,{left:vt,right:Z,bottom:C,top:w,near:-Q-5,far:-z+5}),K.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0},p=o.st.crop?{x0:o.st.crop[0],z0:o.st.crop[1],x1:o.st.crop[2],z1:o.st.crop[3]}:xl,x=t.views||(t.area?yx(t.area):bl),g=t.shadowBox||{x0:p.x0,x1:p.x1,z0:p.z0,z1:p.z1,y0:$t.cis,y1:32};d(g);let m=!0,y=!0,v=!0,_=performance.now(),S=[],A=[],E=new vl(r,i.domElement,{minR:4,maxR:420,minPhi:.08,maxPhi:1.5,bounds:{x0:p.x0,x1:p.x1,z0:p.z0,z1:p.z1},onChange:()=>{m=!0},onStart:()=>{for(let q of S)q()},onWheelHint:()=>{for(let q of A)q()},...t.controls||{}}),I=(q,K)=>{var Z;let ut=typeof q=="string"?x[q]:q,vt={th:ut.th,ph:ut.ph,r:ut.r,t:new F(...ut.t)};K?E.set(vt,!0):E.flyTo(vt,(Z=ut.dur)!=null?Z:1.3)};I(t.view||"ov",!0);let M=o.groups,b=o.planes,D="",L=-1,U=new Yt("#EEF2F5"),N=new Yt("#B5AB9A"),H=new Yt("#6C7A98"),B=new Yt("#2E2D36"),Y=new Yt("#FFF2DF"),k=new Yt("#A4B6DC");function X(q){if(q!==L){L=q,a.color.copy(U).lerp(H,q),a.groundColor.copy(N).lerp(B,q),a.intensity=1.3-.78*q,l.color.copy(Y).lerp(k,q),l.intensity=2.6-2.05*q;for(let K of f)K.intensity=K.userData.I*Math.max(0,(q-.3)/.7);i.setClearColor("#1C2330",.9*q),o.M.glow&&o.M.glow.color.setScalar(.25+.75*q)}}function V(q={}){var vt,Z;let K=JSON.stringify(q);if(K===D)return!1;D=K;let ut=q.cut||{};for(let[C,w]of Object.entries(M)){let z=ut[C];w.visible=z!==-1,b[C]&&(b[C].constant=typeof z=="number"&&z!==-1?z:Dd)}for(let C of q.lids||[])M[C]&&(M[C].visible=!1);X(q.night||0);for(let[C,w]of Object.entries(o.waters)){let z=o.st.WATER[C],Q=C==="cis"?q.cis:(q.wl||{})[C];w.scale.y=Math.max(.01,(Q!=null?Q:z.y1)-z.y0)}for(let[C,w]of Object.entries(o.dyn))Ex(w,(Z=(vt=(q.dyn||{})[C])!=null?vt:w.d.k0)!=null?Z:0);return i.shadowMap.needsUpdate=!0,m=!0,!0}V(t.env||{});let et={x:.5,y:.5,tx:.5,ty:.5},Tt=()=>{let q=n.clientWidth||800,K=n.clientHeight||500;Math.abs(et.x-.5)<1e-4&&Math.abs(et.y-.5)<1e-4?r.clearViewOffset():r.setViewOffset(q,K,(.5-et.x)*q,(.5-et.y)*K,q,K)},Vt=q=>{if(et.x===et.tx&&et.y===et.ty)return!1;let K=1-Math.exp(-q*5);return et.x+=(et.tx-et.x)*K,et.y+=(et.ty-et.y)*K,Math.abs(et.tx-et.x)+Math.abs(et.ty-et.y)<.001&&(et.x=et.tx,et.y=et.ty),Tt(),!0},Qt=()=>{let q=n.clientWidth||800,K=n.clientHeight||500;i.setSize(q,K,!1),r.aspect=q/K,r.updateProjectionMatrix(),Tt(),m=!0},Zt=new ResizeObserver(Qt);Zt.observe(n),Qt();let st=new IntersectionObserver(q=>{y=q[0].isIntersecting,y&&(m=!0)});st.observe(n);let ct=[],bt=[],Dt=[],Et=()=>{for(let q of Dt)q(r);i.render(s,r);for(let q of ct)q(r)},Wt=0,ge=!1,T=0,rt=q=>{if(!v||(requestAnimationFrame(rt),ge))return;let K=Math.max(0,Math.min(.05,(q-_)/1e3));if(_=q,!y||document.hidden)return;let ut=nt.animating||q<nt.animUntil,vt=!ut&&nt.ambient&&q-Wt>50;if(ut||vt){for(let w of bt)w(K,q/1e3);vt&&(Wt=q)}let Z=E.update(K),C=Vt(K);(m||Z||C||ut||vt)&&(Et(),m=!1)};requestAnimationFrame(rt);let nt={renderer:i,scene:s,camera:r,controls:E,world:o,SITE:o.st.SITE,setView:I,VIEWS:x,area:t.area||null,setEnv:V,animating:!1,animUntil:0,ambient:!1,mobile:e,invalidate:()=>{m=!0},setCenter:(q,K,ut)=>{et.tx=q,et.ty=K,ut&&(et.x=q,et.y=K,Tt(),m=!0)},hold:q=>{ge=q,q?(T=performance.now()/1e3,E.now=()=>T*1e3):E.now=()=>performance.now()},step:q=>{T+=q;for(let K of bt)K(q,T);E.update(q),Et()},setShadowBox:q=>{d(q||g),m=!0},shadowDirty:()=>{i.shadowMap.needsUpdate=!0,m=!0},renderNow:()=>{E.update(1),Et()},onRender:q=>ct.push(q),onBeforeRender:q=>Dt.push(q),onFrame:q=>bt.push(q),onUserStart:q=>S.push(q),onWheelHint:q=>A.push(q),dispose:()=>{v=!1,Zt.disconnect(),st.disconnect(),i.dispose();try{i.forceContextLoss()}catch{}i.domElement.remove()}};return nt}var At=(n,t,e={})=>({k:n,keys:t.keys,...e});function Ot(){let n=[],t=0,e=0,i=0,s=0,r={at(o,a,l,c,h="idle",u){return t=o,e=a,i=l,s=c,n.push([t,e,i,s,h,u]),r},to(o,a="idle",l){return t=Math.max(t,o),n.push([t,e,i,s,a,l]),r},hold(o,a="idle",l){return r.to(t+o,a,l)},go(o,a=2,l="walk",c){for(let h of o){let u=Math.hypot(h[0]-e,h[1]-i,h[2]-s);t=+(t+u/a).toFixed(3),[e,i,s]=h,n.push([t,e,i,s,l,c])}return r},mv(o,a,l,c,h="walk",u){return t=o,e=a,i=l,s=c,n.push([t,e,i,s,h,u]),r},get t(){return t},get p(){return[e,i,s]},keys:n};return r}var ie=2,un=3.4,De=5,Je=1.3,gt=.15,Fe=.17,ke=(n={})=>({t:"p",back:!0,dy:1.5,r:9.5,ph:1.2,occ:!0,...n});function me(n,t,e={}){var _,S,A,E;let i=(_=e.k)!=null?_:.35,s=(S=e.back)!=null?S:6.5,r=(A=e.h)!=null?A:2.6,o=e.dth||0,a=n[0]-t[0],l=n[2]-t[2],c=Math.hypot(a,l)||1;a/=c,l/=c;let h=Math.cos(o),u=Math.sin(o),f=a*h+l*u,d=l*h-a*u,p=[n[0]+f*s,n[1]+r,n[2]+d*s],x=[n[0]+(t[0]-n[0])*i,(E=e.y)!=null?E:n[1]+(t[1]-n[1])*i+1.3,n[2]+(t[2]-n[2])*i],g=p[0]-x[0],m=p[1]-x[1],y=p[2]-x[2],v=Math.hypot(g,m,y);return{t:x,r:v,ph:Math.acos(m/v),th:Math.atan2(g,y)}}var ht=(n,t,e,i=1.18)=>({t:n,r:e,ph:i,th:t});var Re=-3.8,hi=-5.6,Ax=(()=>{let n=[-43,0,3.65],t=Ot().at(0,-48.6,0,.4,"walk",{face:[-43,1.3]}).go([[-45.2,0,.9],[-43.3,0,1.25]],ie).hold(.2,"idle",{face:[-43,3.6]}).hold(2.4,"talk"),e=t.t;t.hold(2.6,"listen");let i=t.t;t.hold(.2,"idle",{hold:"coin"}).hold(1.1,"give").hold(.1,"idle",{hold:""});let s=t.t+.2,r=Ot().at(0,...n,"idle",{face:[-43,1]}).to(e-1.2,"listen").to(e+.3,"talk").to(i,"talk").hold(1.2,"give").to(s,"idle",{face:[-30,3.6]}).go([[-41.4,0,3.7],[-28.6,0,3.4],[-25,gt,4.7],[-24.15,gt,5.8],[-24.15,gt,7.2]],2.4),o=r.t,a=o-.6;r.go([[-23.4,gt,12.9]],ie).hold(.2,"idle",{face:[-23.3,14]}).hold(1.1,"pick");let l=r.t-.5;r.hold(.1,"idle",{hold:"veg"}).go([[-24.15,gt,7.2],[-24.15,gt,5.3]],ie,"walk").hold(.2,"idle",{face:[-25.8,4.8]});let c=r.t,h=c-.5;t.to(s+1,"idle",{face:[-30,3]}).go([[-40.6,0,1.6],[-29.4,0,2.9],[-26,gt,4.7]],ie,"walk").hold(.2,"idle",{face:[-24.15,5.5]}).to(c-.2,"idle",{face:[-24.15,5.5]}),t.hold(2.6,"listen");let u=t.t;t.hold(1.9,"think");let f=t.t;t.hold(.2,"idle",{hold:"coin"}).hold(1,"give").hold(.1,"idle",{hold:"veg"});let d=t.t;t.hold(3.2,"idle");let p=t.t+.3;r.to(c+.2,"talk").to(u,"talk").to(f+.2,"idle").hold(1,"give").hold(.1,"idle",{hold:""}).to(p,"idle");let x=Ot().at(0,-36.5,0,-1.6,"walk",{face:[-50,-1.6]}).go([[-50,0,-1.8]],1.5).hold(.1,"walk",{hide:!0});return{dur:p,ch:[0,s,a,h],sb:{x0:-50,x1:-18,z0:-4,z1:16,y0:0,y1:8},env:{cuts:[[0,{}],[o-.9,{S8u:-1,S8r:-1}],[c-.7,{}]],dyn:{homeVeg:[[l,0],[l+.05,1]]}},act:{p:At("p",t),m:At("m",r),by:At("n",x)},lab:[[.5,e-1.2,"\u644A\u4E0A\u53EA\u6709\u666E\u901A\u83DC\u548C\u79CD\u5B50",-43,1.9,2.6,"item"],[e+.1,i+.2,"\u300C\u7A00\u6709\u852C\u83DC\u4E0D\u6446\u644A\uFF0C\u5728\u5BB6\u91CC\u3002\u5148\u4ED8\u5B9A\u91D1\uFF0C\u6211\u56DE\u53BB\u62FF\u300D","m",2.3],[s+1,a,"\u8DDF\u5728\u540E\u9762\u8D70\uFF1A\u987A\u4FBF\u77E5\u9053\u4E86\u4ED6\u5BB6\u5728\u54EA","p",2.2],[s+3.2,h,"\u83DC\u5546\u7684\u5BB6",-24.15,3.5,5.3,"item"],[o+.4,l+.5,"\u5357\u5899\u67DC\u5B50\u4E0A\u7684\u7A00\u6709\u852C\u83DC",-23.3,2.5,13.85,"item"],[c+.2,u+.1,"\u300C\u4F59\u6B3E\u8981\u518D\u52A0\u4E24\u6210\u300D","m",2.3],[d+.3,p,"\u5077\u3001\u7B49\u4ED6\u51FA\u95E8\u518D\u8FDB\u5C4B\u3001\u76F4\u63A5\u4E0A\u95E8\u62A2\uFF1A\u522B\u7684\u8DEF\u4E5F\u90FD\u901A\u5230\u8FD9\u95F4\u5C4B\u5B50",-24.2,3.4,6.2]],hud:[["obj",0,"\u7ED9\u996D\u9986\u5F04\u5230\u7A00\u6709\u852C\u83DC"],["menu",e-1.9,e+.1,["\u4E70\u7A00\u6709\u852C\u83DC","\u53EA\u4E70\u666E\u901A\u79CD\u5B50","\u79BB\u5F00"],[[e-1.9,0]],"p",2.2],["menu",i-1.6,i+.1,["\u4ED8\u5B9A\u91D1","\u7B97\u4E86"],[[i-1.6,0]],"p",2.2],["item",i+.3,i+2.6,"\u652F\u4ED8 \xB7 \u5B9A\u91D1"],["obj",s+.3,"\u7B49\u5546\u4EBA\u56DE\u5BB6\u628A\u852C\u83DC\u62FF\u6765"],["menu",u-.3,f+.1,["\u4ED8\u4F59\u6B3E","\u62D2\u4ED8"],[[u-.3,1],[u+1,0]],"p",2.2],["item",d,d+2.6,"\u83B7\u5F97 \xB7 \u7A00\u6709\u852C\u83DC"],["obj",d+.3,"\u628A\u852C\u83DC\u9001\u56DE\u996D\u9986"]],cam:[[0,me([-43.3,0,1.25],n,{back:5.6,h:2.4,dth:.5})],[s-.1,me([-43.3,0,1.25],n,{back:5.6,h:2.4,dth:.5})],[s+1.3,ht([-31.5,1,5],2.8,20,1.1)],[o-1,ht([-27.5,1,5.6],2.8,18,1.1)],[o-.2,ht([-23.6,1,9.6],2.72,11.5,.8)],[c-1,ht([-23.6,1,9.6],2.72,11.5,.8)],[c-.2,ht([-25,1.1,5],-2.45,7.5,1.14)],[p,ht([-25,1.3,5.2],-2.35,9,1.1)]]}})(),ph=[[-6.6,46.4],[-6.2,46.5],[-4.82,47.57],[-3.44,48.4],[-1.6,48.85],[.24,48.4],[1.62,47.57],[3,46.5],[3.4,46.4]],Ud=Re+.06,Tx=(n,t)=>{n.mv(t+.1,-55.6,.15,4,"eat",{cut:!0,face:[-55.6,4.6],hold:""}).hold(5,"eat");let e=n.t,i=Ot().at(0,-52.8,.15,7.2,"idle",{hide:!0}).to(t,"idle",{show:!0}).mv(t+.1,-53.2,.15,3.4,"talk",{face:[-53,4.6]}).to(e,"talk"),s=r=>Ot().at(0,r,.15,4,"idle",{hide:!0}).to(t,"eat",{show:!0}).mv(t+.1,r,.15,4,"eat",{face:[r,4.6]}).to(e,"eat");return{end:e,cook:i,d1:s(-54.4),d2:s(-51.1),d3:s(-49.9)}},Rx=(()=>{let n=Ot().at(0,-21.8,0,18.4,"walk",{face:[-20.6,18.8]}).go([[-20.6,0,18.8]],ie).hold(.2,"idle",{face:[-20,21.5]}).hold(2.3,"talk"),t=n.t+.06;n.mv(t,-10.2,0,18.7,"idle",{cut:!0,face:[-9.6,17]}).hold(2,"listen");let e=n.t+.06;n.mv(e,-1.4,0,32.9,"idle",{cut:!0,face:[-2.8,31.7]}).hold(2,"listen");let i=n.t+.06;n.mv(i,-8.4,0,42.4,"idle",{cut:!0,face:[-6.8,42]}).hold(2,"listen");let s=n.t+.2,r=s+1.7;n.mv(s+.8,-13.4,Re,46.4,"crouch",{cut:!0,face:[-9,46.3]}).to(r+.3,"crouch").go([[-10.4,Re,46.4]],Je,"sneak");let o=n.t+.2;n.hold(.9,"punch");let a=o+.7;n.go([[-3.3,Re,46.1]],De,"run").mv(n.t+.62,-.1,Re,46.1,"jump",{arc:.9}).go([[2.5,Re,46.3]],De,"run").hold(.1,"idle",{face:[3.4,46.4]});let l=n.t+.05;n.hold(.8,"punch");let c=l+.6;n.go([[5.6,Re,44.95]],De,"run").hold(.1,"idle",{face:[5.6,43]}).go([[5.6,-.55,44.8]],1.6,"climb",{face:[5.6,43]}).mv(n.t+.55,5.6,0,43.9,"mantle",{face:[5.6,42]}).go([[6.7,0,44]],un,"jog").hold(.1,"idle",{face:[7.6,45]});let h=n.t,u=Ot().at(0,-8.3,Re,46.6,"eat",{face:[-9.2,45.6]}).to(o,"eat").hold(.4,"stagger",{face:[-6,46.5]}).go([[-7.3,Re,46.5],...ph.map(([U,N],H)=>[U,H&&H<ph.length-1?Ud:Re,N])],4,"run"),f=u.t;u.to(Math.max(f,l+.1),"stagger").hold(.5,"stagger").go([[6.2,Re,46.6],[8.4,Re,46.45],[13.2,-1.95,46.45],[14,-1.9,46.3],[14,-1.9,45.25],[13.2,-1.9,45.2],[8.7,0,45.2],[7.6,0,45]],4,"run");let d=u.t,p=Math.max(h,d-.2)+.1;n.to(p,"idle",{face:[7.6,45]}).hold(.8,"punch").hold(.7,"kick");let x=p+1.4;u.to(p+.1,"stagger",{face:[6.6,44]}).go([[7.3,0,44.4]],1,"stagger").to(x,"stagger").hold(.5,"down").to(x+60,"down");let g=x+.4;n.hold(.3,"idle",{face:[7.3,44.4]}).hold(1.4,"kneel").hold(.3,"idle",{hold:"meat"});let m=n.t-.4,y=n.t+1.2,v=Tx(n,y),_=v.end,S=Ot().at(0,-20,gt,21.6,"idle",{face:[-20,18]}).to(.9,"talk").to(t-.8,"point",{face:[-10,19]}).to(t,"idle").to(y,"idle",{hide:!0}),A=Ot().at(0,-9.6,gt,17,"idle",{face:[-10.2,18.7]}).to(t+.2,"idle").to(t+1.7,"talk").to(e,"idle").to(y,"idle",{hide:!0}),E=Ot().at(0,-2.8,gt,31.7,"idle",{face:[-1.4,32.9]}).to(e+.2,"idle").to(e+1.1,"talk").to(i-.4,"point",{face:[-.6,34]}).to(i,"idle").to(s,"idle",{hide:!0}),I=Ot().at(0,-6.8,0,42,"idle",{face:[-8.4,42.4]}).to(i+.2,"idle").to(i+1,"talk").to(s-.4,"point",{face:[-9.2,45.5]}).to(s,"idle",{hide:!0}),M=[[-7.3,Re,46.5],...ph.map(([U,N])=>[U,Ud+.1,N])],b=[[-10.4,Re+.05,46.4],[-3.3,Re+.05,46.1],[-.1,Re+.05,46.1],[2.5,Re+.05,46.3]],D=[[8.4,Re+.05,46.45],[13.2,-1.9,46.45],[14,-1.85,46.3],[14,-1.85,45.25],[13.2,-1.85,45.2],[8.7,.05,45.2],[7.6,.05,45]],L=[[5.6,Re+.05,44.95],[5.6,.05,44.8],[6.7,.05,44]];return{dur:_,ch:[0,r,a,c,y],route:!1,sb:{x0:-28,x1:16,z0:15,z1:50,y0:-5,y1:5},env:{night:[[0,.15],[s,.3],[s+1.5,.86],[y,.86],[y+.01,0]]},act:{p:At("p",n),h:At("pig",u),butcher:At("a",S),r1:At("n",A),r2:At("v",E),r3:At("n",I),cook:At("a",v.cook),d1:At("t",v.d1),d2:At("n",v.d2),d3:At("w",v.d3)},mask:[[s,s+1.6,"\u6DF1\u591C"],[y-.3,y+.5,"\u7B2C\u4E8C\u5929\u4E2D\u5348 \xB7 \u996D\u9986"]],trk:[[M,"#8E877C",1,a-.3,c+.6],[b,"#D2872C",0,a-.3,c+.6],[D,"#8E877C",1,c-.2,g],[L,"#D2872C",0,c-.2,g]],fx:[[o+.1,o+.5,"spark","h",.6,null,.4],[o+.2,c,"stars","h",1],[l+.2,l+.6,"spark","h",.6,null,.4],[p+.2,p+.6,"spark","h",.6,null,.4],[p+.9,p+1.3,"spark","h",.6,null,.4]],lab:[[.5,t,"\u8089\u8D29\uFF1A\u60F3\u8981\u597D\u8089\uFF0C\u53BB\u902E\u90A3\u5934\u91CE\u732A","butcher",2.3],[t+.3,e,"\u300C\u90A3\u732A\u534A\u591C\u624D\u51FA\u6765\u300D","r1",2.3],[e+.3,i,"\u300C\u5B83\u4F4F\u5728\u6392\u6C34\u7BA1\u9053\u91CC\u300D","r2",2.2],[i+.3,s,"\u300C\u6CB3\u8FB9\u7684\u70C2\u83DC\u5806\u8001\u88AB\u7FFB\u300D","r3",2.3],[r+.2,o,"\u6DF1\u591C\uFF1A\u91CE\u732A\u5728\u7EA4\u9053\u7684\u70C2\u83DC\u5806\u8FB9\u7FFB\u5403\u7684","h",1.5],[o+.3,a+1.2,"\u6328\u4E86\u6253\u5C31\u5F80\u7A9D\u91CC\u9003","h",1.6],[a+.4,c,"\u5F2F\u8DEF\uFF1A\u732A\u53EA\u80FD\u7ED5\u6808\u6865",-1.6,-1.6,49.6],[a+.4,c,"\u76F4\u8DEF\uFF1A\u4EBA\u8DF3\u8FC7\u6C34\u6C9F",-1.4,-1.9,45.4],[c+.3,g,"\u6298\u7EBF\u53F0\u9636\uFF1A\u732A\u8981\u7ED5\u4E24\u8DD1",14.3,.4,46.6],[c+.5,g,"\u4EBA\u76F4\u63A5\u722C\u4E0A\u53BB",5.2,.9,44.6],[x+.2,y,"\u6CA1\u8BA9\u5B83\u9003\u56DE\u7A9D\uFF1A\u91CE\u732A\u8089\u5230\u624B",7.3,1.6,44.4],[x+.5,y,"\u68C0\u4FEE\u53F0\u9636\uFF1A\u5DEE\u51E0\u6B65\u5B83\u5C31\u94BB\u4E0B\u53BB\u4E86",5.6,1.1,42.35],[y+.8,_,"\u98DF\u6750\u51D1\u9F50\uFF1A\u996D\u9986\u6446\u5BB4\u5E2D",-52.8,3.4,4.2,"item"]],hud:[["obj",0,"\u66FF\u996D\u9986\u5F04\u5230\u91CE\u732A\u8089"],["obj",t+.4,"\u7EBF\u7D22 1/3\uFF1A\u534A\u591C\u51FA\u6CA1"],["obj",e+.4,"\u7EBF\u7D22 2/3\uFF1A\u534A\u591C \xB7 \u6392\u6C34\u7BA1\u9053"],["obj",i+.4,"\u7EBF\u7D22 3/3\uFF1A\u534A\u591C \xB7 \u6392\u6C34\u7BA1\u9053 \xB7 \u70C2\u83DC\u5806"],["obj",s+1.6,"\u6253\u5012\u91CE\u732A","\u6DF1\u591C"],["key",a+1,a+2,"Space","\u8DF3",-3,-2.6,46.1],["key",c+.4,c+2.6,"Space","\u6500\u722C",5.6,-2,44.7],["item",m,m+2.6,"\u83B7\u5F97 \xB7 \u91CE\u732A\u8089"],["obj",m+.2,"\u628A\u98DF\u6750\u9001\u56DE\u996D\u9986","\u6DF1\u591C"],["obj",y+.4,"\u5BB4\u5E2D","\u7B2C\u4E8C\u5929"]],cam:[[0,me([-20.6,0,18.8],[-20,gt,21.6],{back:6,h:2.4,dth:.5})],[t-.04,me([-20.6,0,18.8],[-20,gt,21.6],{back:6,h:2.4,dth:.5})],[t+.02,ht([-9.9,1.5,17.9],-1.45,7,1.2)],[e-.04,ht([-9.9,1.5,17.9],-1.45,7,1.2)],[e+.02,me([-1.4,0,32.9],[-2.8,gt,31.7],{back:6,h:2.4,dth:.5})],[i-.04,me([-1.4,0,32.9],[-2.8,gt,31.7],{back:6,h:2.4,dth:.5})],[i+.02,ht([-8,-.6,43.6],-2.75,9.5,1.02)],[s-.05,ht([-8,-.6,43.6],-2.75,9.5,1.02)],[s+.3,ht([-10.4,-3,46.2],.2,11.5,1.12)],[o+.2,ht([-10,-3,46.2],.2,11.5,1.12)],[a+.3,ht([-2.4,-3.4,47.1],.05,18,.82)],[c-.4,ht([-1.4,-3.4,47],.05,18,.82)],[c+.4,ht([9.4,-2,45.4],.55,16,1.02)],[p-.4,ht([9,-1.6,45.2],.55,15,1)],[p+.3,ht([7,.8,44.4],-2.55,9,1.05)],[y-.3,ht([7,.8,44.4],-2.55,9.5,1.05)],[y,ht([-52.8,1.2,4.2],2.5,11,1.15)]]}})(),Cx=(()=>{let n=Re,t=-.34,e=39.7,i=-4.42,s=Re-.28,r=[[7.7,0,44.2],[7.1,0,42.35],[6.62,-.19,42.35],[1.4,n+.19,42.35],[1,n,42.35],[.2,n,42.35]],o=Ot().at(0,11.6,-1.19,45.2,"run",{face:[8,45.2]}).go([[8.7,0,45.2],...r,[-.45,n,41.8],[-.4,n,40.35]],3.8,"run"),a=o.t;o.mv(a+.35,t,i,e,"run",{fall:!0,face:[t,38]}).go([[.45,-4.95,e],[1.6,hi+.05,e],[2.6,hi+.12,39.6]],1.8,"run").hold(.3,"idle",{face:[3.2,40.4]}).hold(1,"down");let l=Ot().at(0,14.2,-1.9,46.2,"run",{face:[14,45]}).hold(.6,"run").go([[14,-1.9,45.3],[13.2,-1.9,45.2],[8.7,0,45.2],...r,[-.45,n,41.6],[-.45,n,40.85]],4,"run").hold(.2,"idle",{face:[t,e]}),c=l.t-.1;l.hold(2,"crouch");let h=c+1.3;l.hold(.8,"look",{face:[-1,37]}).go([[-1.3,s,40.6],[-1.3,s,37.6]],ie,"walk").hold(.6,"look").go([[-1.3,s,35.9]],ie,"walk").hold(.3,"idle",{face:[0,35.5]}).go([[-.66,n,35.55]],ie,"walk").hold(.2,"crouch",{face:[1,35.5]}).hold(1.3,"crouch");let u=l.t-1.5;l.hold(2,"wheel");let f=l.t-2,d=f+1.2,p=f+6.4,x=f+.2;l.hold(.3,"idle",{face:[-1.3,36.2]}).go([[-1.3,s,35.9],[-1.3,s,40.6],[-.45,n,40.85]],un,"jog").hold(.1,"idle",{face:[t,e]});let g=l.t;o.to(d+1.4,"down").hold(.5,"stagger").go([[1.6,hi+.05,e],[.45,-4.95,e],[t,i,e]],2,"stagger");let m=Math.max(o.t,g+.4);o.to(m,"stagger").mv(m+.4,t,n,e,"run",{face:[-.4,41]}).go([[-.4,n,40.2]],1.6,"stagger");let y=m-.5,v=o.t+.05;l.to(v-.1,"idle",{face:[-.4,40.2]}).hold(.8,"punch").hold(.7,"kick"),o.to(v+1.3,"stagger").hold(.5,"down").to(v+60,"down"),l.hold(.3,"idle").hold(1.3,"kneel").hold(.2,"idle",{hold:"meat"});let _=l.t-.3,S=l.t+2.2,A=3.4,E=[[-.4,n+.05,40.35],[t,i+.05,e],[.45,-4.9,e],[1.6,hi+.1,e],[2.6,hi+.17,39.6]],I=[[8.7,.05,45.2],...r.map(([M,b,D])=>[M,b+.05,D]),[-.45,n+.05,41.8],[-.4,n+.05,40.35]];return{dur:S,ch:[0,c,u,x,y],route:!1,sb:{x0:-4,x1:16,z0:33,z1:47.5,y0:-6.2,y1:4},env:{lidsK:[[0,[]],[A,["sewL"]],[h,["sewL","sewF"]]],cuts:[[0,{}],[A,{sew:-1.55}]],night:[[0,.62],[S,.62]],wl:{den:[[0,hi-.04],[d,hi-.04],[p,hi+.9]]},dyn:{sluiceW:[[f,0],[f+1.8,1]],sluice:[[f+.5,0],[f+1.5,1]]}},act:{p:At("p",l),h:At("pig",o)},trk:[[I,"#8E877C",1,.3,c+.6],[E,"#8E877C",1,h+.2,u-.6]],fx:[[0,u,"stars","h",1],[d-.2,p+1.5,"spray",1.05,-4.5,38.2,[0,-.45,1],1.6],[v+.1,v+.5,"spark","h",.6,null,.4],[v+.8,v+1.2,"spark","h",.6,null,.4]],lab:[[.3,2.2,"\u8840\u91CF\u89C1\u5E95\uFF1A\u5F80\u7A9D\u91CC\u9003","h",1.6],[.9,A+.2,"\u68C0\u4FEE\u53F0\u9636\uFF1A\u4E0B\u5230\u5730\u4E0B\u6392\u6C34\u7BA1\u9053",4.2,.9,42.35],[a-.5,c+.1,"\u7BA1\u5E95\u8D34\u7740\u5899\u6839\u7684\u5C0F\u6D1E\uFF0C\u534A\u63A9\u5728\u70C2\u6728\u677F\u4E0B",t,n+1.5,e],[c+.2,h,"\u53EA\u591F\u732A\u94BB\uFF0C\u4EBA\u94BB\u4E0D\u8FDB\u53BB","p",2],[h+.3,u,"\u7A9D\u5728\u7BA1\u5E95\u4E0B\u9762\uFF0C\u6BD4\u7BA1\u5E95\u4F4E 1.8 \u7C73",2.3,-3.6,39.6],[u-.4,f+1.8,"\u5899\u6839\u7684\u624B\u8F6E\uFF0C\u85CF\u5728\u6742\u7269\u540E\u9762\uFF1A\u5F88\u9690\u853D\u7684\u6C34\u95F8",-.1,n+1.6,35.5,"item"],[d+.4,y,"\u95F8\u677F\u6321\u4F4F\u6C9F\uFF0C\u6C34\u987A\u7740\u7BA1\u5B50\u704C\u8FDB\u7A9D\u91CC",1.6,hi+2.2,38.3],[m+.3,v+1.3,"\u7A9D\u6DF9\u4E86\uFF0C\u5B83\u53EA\u80FD\u4ECE\u6D1E\u91CC\u5F80\u4E0A\u94BB\u51FA\u6765",t,n+1.9,e],[_,S,"\u91CE\u732A\u8089\u5230\u624B",-.4,n+1.9,40.6,"item"]],hud:[["obj",0,"\u6253\u5012\u91CE\u732A","\u6DF1\u591C"],["obj",c-.2,"\u91CE\u732A\u9003\u56DE\u7A9D\u91CC\u4E86"],["key",f-.4,f+1.8,"E","\u8F6C\u52A8\u624B\u8F6E",-.12,n+1.3,35.5],["obj",x+1,"\u5B88\u5728\u6D1E\u53E3"],["item",_,_+2.4,"\u83B7\u5F97 \xB7 \u91CE\u732A\u8089"]],cam:[[0,ht([8.4,-.6,44.2],-2.35,13,.92)],[1.3,ht([6.8,-.6,43.4],-2.25,12.5,.9)],[1.9,ht([3.8,-2,42.35],1.5,12,.7)],[A-.1,ht([2.4,-2.8,42.35],1.5,11,.66)],[A+.4,ht([-.2,-3.8,41],-.6,12,.45)],[a+.3,ht([-.3,-3.8,40.6],-.6,11,.45)],[h-.1,ht([-.3,-3.8,40.6],-.6,11,.45)],[h+.5,ht([1.2,-4.4,39.8],-2.95,10.5,.4)],[u-1.6,ht([1.2,-4.4,39.8],-2.95,10.5,.4)],[u-.5,ht([-.4,-3.4,35.7],-1.95,11,.4)],[f+1.4,ht([.6,-4.6,38.4],.3,13,.42)],[g-.6,ht([.8,-4.3,39.6],-2.95,10.5,.4)],[m-.2,ht([.6,-4.2,39.9],-2.95,10,.42)],[m+.5,ht([-.3,-3.6,40.3],-2.75,8,.5)],[S,ht([-.3,-3.6,40.4],-2.75,8.5,.52)]]}})(),Px=(()=>{let t=[60.2,gt,-7.5],e=Ot().at(0,61.6,0,1.6,"walk",{face:[61,-6]}).go([[61.2,0,-2.6],[60.6,gt,-5.8]],ie).hold(.2,"idle",{face:t}).hold(2.2,"talk"),i=e.t;e.hold(.1,"idle",{hold:"jar"}).hold(1.1,"give").hold(.1,"idle",{hold:""});let s=e.t-.5,r=e.t+.3,o=Ot().at(0,...t,"idle",{face:[60.6,-5.8]}).to(i-1.4,"listen").to(i,"talk").to(s,"reach").hold(.1,"idle",{hold:"jar"}).hold(1,"cheer").go([[59.2,gt,-7.6],[55.6,gt,-7.8],[53.7,gt,-8.6],[53.7,gt,-9.6]],ie).hold(.1,"walk",{hide:!0}),a=o.t,l=a+3;o.mv(l-1.2,47,3.75,-16.8,"walk",{cut:!0,show:!0,hold:"jar"}).go([[47.9,3.75,-12.9]],ie).hold(.2,"idle",{face:[48,-15]}).hold(.8,"drop").hold(.1,"idle",{hold:""}).mv(l+1.4,48,3.75,-13.2,"sit",{face:[48,-15]}).hold(1.6,"eat").hold(1.4,"sit").hold(1.6,"eat"),e.go([[60.8,0,-1],[40.6,0,-.6],[40.6,0,-16.2],[42.5,0,-16.6]],un,"jog").hold(.2,"idle",{face:[44,-16.7]}).mv(e.t+.7,43.25,1.8,-16.7,"mantle").mv(e.t+.3,43.4,1.8,-17.45,"walk").go([[43.45,4.55,-18.2]],1.4,"climb",{face:[44,-18.2]}).mv(e.t+.6,43.78,4.65,-18.4,"mantle",{face:[44,-18.4]}).go([[43.78,4.65,-15]],.9,"sidle",{face:[44,-15]}).hold(.3,"idle",{face:[48,-14.4]}).hold(1.6,"peek");let c=e.t-1.6,h=c-.3;o.to(Math.max(o.t,c+1),"sit").hold(1.4,"eat"),e.hold(1,"aim");let u=e.t-.3,f=u+.55,d=f+2;e.hold(1.4,"look").mv(e.t+.8,42.5,0,-15,"fall",{fall:!0}).mv(e.t+.4,42.3,0,-14.8,"land").go([[40.6,0,-11],[40.6,0,-1.6],[44.5,0,-1]],ie);let p=e.t+1;o.to(f+.1,"sit").hold(.6,"cower",{face:[48,-12]}).go([[47.2,3.75,-16.6],[46.2,3.75,-18.9],[50.5,3.75,-19.8],[55.6,3.75,-19.6]],De,"run").hold(.1,"run",{hide:!0}).mv(e.t-3.2,58.4,gt,-9,"run",{cut:!0,show:!0}).go([[60.6,gt,-6.6],[61.2,0,-3.4]],De,"run").hold(.2,"idle",{face:[61,-9]}).to(p,"argue");let x=Ot().at(0,62.8,gt,-7.2,"idle",{face:[60.4,-7.4]}).to(1.2,"talk").to(r,"idle").to(d+2,"idle",{face:[55,-12]}).hold(.6,"look").to(p,"cheer"),g=Ot().at(0,63.4,gt,-8.4,"idle",{face:[61.5,-7.4]}).to(d+2.2,"idle").hold(.6,"look",{face:[55,-12]}).to(p,"cheer"),m=l-1.4;return{dur:p,ch:[0,r,h,d],sb:{x0:38,x1:66,z0:-24,z1:2,y0:0,y1:9},env:{cuts:[[0,{}],[l-1.6,{S5r:-1,S5u:5.95,S5:6.2}],[d+3.4,{}]],dyn:{archDoor:[[m,0],[m+.1,1]],deskJar:[[0,1],[l+.6,1],[l+.65,0]]}},act:{p:At("p",e),s:At("d",o),w1:At("w",x),w2:At("w",g)},proj:[[u,f,"flame","p",[48.35,3.75+1.05,-14.3],.15]],fx:[[f,p,"fire",48.35,3.75+.8,-14.3,.55],[f+1.1,p,"fire",48,3.75+.8,-14,1],[f+2.2,p,"fire",47.3,3.75,-9.8,1.4],[f+1.5,p,"puff",47.6,3.75+2.7,-12.4,1.6,"#7D7A74"]],lab:[[.6,i-1,"\u7BA1\u4E8B\u597D\u9152\uFF1A\u8BF4\u8BDD\u4E00\u80A1\u9152\u6C14","s",2.3],[1.2,r-.4,"\u300C\u7BA1\u4E8B\u53C8\u559D\u4E0A\u4E86\u300D","w1",2.2],[s+.2,r+1.6,"\u6536\u4E0B\u4E86\uFF0C\u4E50\u5475\u5475\u5730\u5E26\u56DE\u529E\u516C\u5BA4","s",2.2],[l-.4,h+.4,"\u529E\u516C\u5BA4\u5C31\u662F\u8D26\u623F\uFF1A\u8EAB\u5951\u90FD\u5728\u67DC\u5B50\u91CC",47.3,3.75+2.1,-10,"item"],[h+.5,u,"\u4EBA\u5728\u7A97\u5916\u7684\u8170\u7EBF\u4E0A\uFF0C\u9694\u7740\u7A97\u770B\u89C1\u90A3\u575B\u9152","p",2],[f+.4,d+.6,"\u9152\u5148\u70E7\u8D77\u6765\uFF0C\u706B\u6CBF\u7740\u684C\u4E0A\u7684\u7EB8\u70E7\u5230\u67DC\u5B50",47.6,3.75+3,-12.4],[d+.6,d+4.6,"\u6CA1\u4EBA\u770B\u89C1\u662F\u8C01\u70B9\u7684\uFF1A\u4E0D\u7528\u52A8\u624B\uFF0C\u8EAB\u5951\u6CA1\u4E86","p",2],[d+4.8,p,"\u5DE5\u4EBA\u81EA\u7531\u4E86\uFF1A\u4E0D\u60CA\u52A8\u5B88\u536B\uFF0C\u56DE\u62A5\u6700\u9AD8",61.6,2.6,-7.8,"item"]],hud:[["obj",0,"\u5E2E\u5973\u4E1C\u5BB6\u628A\u5DE5\u4EBA\u5E26\u8D70"],["menu",i-1.8,i+.1,["\u9001\u4E00\u575B\u597D\u9152","\u6253\u542C\u8EAB\u5951\u7684\u4E8B","\u79BB\u5F00"],[[i-1.8,0]],"p",2.2],["item",s,s+2.4,"\u4EA4\u51FA \xB7 \u4E00\u575B\u597D\u9152"],["obj",r+.4,"\u6BC1\u6389\u8EAB\u5951"],["key",r+7.2,r+9.2,"Space","\u6500\u722C",43.4,2.4,-17.6],["key",u-.8,f,"R","\u706B \xB7 \u5F15\u71C3",44.3,6.7,-15],["obj",d+.2,"\u79BB\u5F00\uFF0C\u522B\u88AB\u770B\u89C1"]],cam:[[0,ht([61.3,1,-5],2.981,10.9,1.349)],[2.6,ht([61.3,1,-5],2.981,10.9,1.349)],[3,me([60.6,gt,-5.8],t,{back:6.2,h:2.5,dth:.5})],[r-.2,me([60.6,gt,-5.8],t,{back:6.2,h:2.5,dth:.5})],[r+1,ht([56.6,1,-8.2],.75,11,1.12)],[a-.2,ht([55.6,1,-8.6],.75,11,1.12)],[a+.3,ht([47.6,4.6,-14.2],-2.5,12,.9)],[l+2,ht([47.6,4.6,-14.2],-2.5,12,.9)],[l+2.4,ke({r:10})],[h-2.6,ht([43.6,4.2,-16.8],-.55,10.5,1.12)],[c+.2,ht([45.6,5,-14.8],-1.32,9.5,.98)],[f+2.6,ht([46.2,5,-13.6],-1.45,11.5,.9)],[d+1.6,ht([42.6,2.2,-13.4],-.6,12,1.12)],[p-3.2,ht([57.5,1.5,-8],.7,20,1.12)],[p,ht([57.8,1.5,-8],.72,21,1.12)]]}})(),Ix=(()=>{let t=Ot().at(0,61.6,0,1.6,"walk",{face:[61,-6]}).go([[61.4,0,-2.6],[61.2,gt,-5.4],[61.3,gt,-8]],ie).hold(.2,"idle",{face:[61,-9]}).hold(1,"push").hold(2.6,"argue"),e=t.t;t.go([[60.6,0,-.6],[40.6,0,-.4],[40.6,0,-16.2],[42.5,0,-16.6]],un,"jog").hold(.2,"idle",{face:[44,-16.7]}).mv(t.t+.7,43.25,1.8,-16.7,"mantle").mv(t.t+.3,43.4,1.8,-17.45,"walk").go([[43.45,4.55,-18.2]],1.4,"climb",{face:[44,-18.2]}).mv(t.t+.6,43.78,4.65,-18.6,"mantle",{face:[44,-18.6]}).go([[43.78,4.65,-19.7]],.8,"sidle",{face:[44,-19.7]}).mv(t.t+.8,44.7,3.75,-19.8,"mantle",{face:[48,-19.8]});let i=t.t;t.go([[48.6,3.75,-19.9]],Je,"sneak").hold(.2,"idle",{face:[48.6,-24]}).hold(2.4,"peek");let s=t.t;t.go([[52,3.75,-19.7],[53.5,3.75,-19.6]],Je,"sneak").hold(.2,"idle",{face:[55,-19.6]}).hold(1.4,"steal").hold(.1,"idle",{hold:"key"});let r=t.t-.2;t.go([[47.6,3.75,-19.6],[46.2,3.75,-19.3]],Je,"sneak").hold(.2,"idle",{face:[46.2,-16]}).hold(.9,"push");let o=t.t-.9,a=o+.3;t.go([[46.2,3.75,-17.6]],1.4,"walk").hold(.3,"idle",{face:[47.3,-10],hold:"bottle"}).hold(1,"throw",{hold:""});let l=t.t-.25,c=t.t+.4;t.go([[46.2,3.75,-19.2],[47.2,3.75,-19.6]],un,"jog").hold(.2,"fists",{face:[52,-19.7]}).hold(1,"fists").hold(.8,"punch").hold(.8,"kick").hold(.8,"punch").hold(.6,"hit").hold(.8,"punch");let h=c+1.2,u=t.t;t.go([[44.7,3.75,-19.8]],De,"run").mv(t.t+.6,43.78,4.65,-19.7,"mantle",{face:[40,-19.7]}).mv(t.t+.7,42.6,1.8,-19.2,"fall",{fall:!0}).mv(t.t+.4,42.2,0,-18.6,"land").go([[40.6,0,-16],[40.6,0,-4]],De,"run");let f=t.t+.3,d=Ot().at(0,62.8,0,1.4,"walk").go([[62.6,0,-2.4],[62.4,gt,-4.8]],ie).hold(.2,"idle",{face:[61.5,-8]}).to(e-.2,"argue").to(f,"idle",{face:[61,-8]}),p=Ot().at(0,60,gt,-8.4,"cower",{face:[61,-9]}).to(e+1,"cower").hold(.6,"idle").to(f,"idle",{face:[61,-4]}),x=Ot().at(0,61,gt,-9.2,"punch",{face:[60,-8.4]}).to(3.6,"punch").hold(.4,"hit",{face:[61.2,-5]}).go([[61.6,gt,-10.2]],1.2).to(e+.4,"argue").to(f,"guard"),g=Ot().at(0,54.2,3.75,-19.7,"guard",{face:[57,-19.7]}).to(r+.5,"guard").to(l+1,"look",{face:[57,-19.7]}).hold(.4,"look",{face:[47,-19.7]}).go([[48.5,3.75,-19.7]],De,"run").hold(.2,"fists",{face:[46,-19.7]}).to(h+2,"punch").hold(.6,"hit").hold(.6,"ko").to(f,"ko"),m=(E,I)=>Ot().at(0,56.5,gt,-12.4,"idle",{hide:!0}).to(l+1.2+I,"idle",{show:!0}).mv(l+1.25+I,56.5,3.75-1.2,-16.4,"run").go([[56.4,3.75,-18.2],[55,3.75,-19.8],[50.2,3.75,E]],De,"run").hold(.2,"fists",{face:[46,-19.7]}).to(h+3.4+I,"punch").hold(.6,"hit").hold(.6,"stagger").to(f,"guard"),y=m(-20.2,0),v=m(-19.2,.5),_=Ot().at(0,60,gt,-38.6,"push",{face:[60,-40]}).to(f,"push"),S=Ot().at(0,68,gt,-37.8,"pull",{face:[68,-40]}).to(f,"pull"),A=Ot().at(0,64,gt,-30,"guard",{face:[60,-30]}).to(f,"look");return{dur:f,ch:[0,e,i,s,o,c],sb:{x0:38,x1:70,z0:-42,z1:2,y0:0,y1:10},env:{cuts:[[0,{}],[i-1.2,{S5r:-1,S5u:5.95,S5:6.2}]],dyn:{archDoor:[[a,0],[a+.7,1]]}},act:{p:At("p",t),t:At("t",d),w:At("w",p),g1:At("g",x),g2:At("g",g),g3:At("g",y),g4:At("g",v),h1:At("w",_),h2:At("w",S),h3:At("g",A)},proj:[[l-.5,l,"bottle","p",[47.3,3.75+1,-10.4],.5]],fx:[[l,f,"fire",47.3,3.75,-10.3,1.3],[l+.3,f,"puff",47.3,3.75+2.2,-11,1.4,"#7D7A74"],[h+1,h+1.4,"spark",48,3.75+1.3,-19.7,.4],[h+2.6,h+3,"spark",48,3.75+1.3,-19.7,.4]],arr:[[i+.5,s,[48.6,3.75+1.6,-20.9],[60,1.4,-34],"see"]],lab:[[.8,e,"\u62A4\u9662\u5728\u95E8\u53E3\u6253\u4EBA\uFF1A\u8EAB\u5951\u5728\u4ED6\u4EEC\u624B\u91CC\uFF0C\u5DE5\u4EBA\u8D70\u4E0D\u4E86",61,2.6,-8.4],[e+3.2,e+8,"\u8D27\u7BB1 \u2192 \u6392\u6C34\u7BA1 \u2192 \u4E8C\u697C\u7A97\u4E0B\u7684\u8170\u7EBF",43.6,3.2,-17.6,"item"],[i+.6,s,"\u4ECE\u5185\u7A97\u770B\u4E0B\u9762\u7684\u8F66\u95F4\uFF1A\u8C01\u5728\u54EA\u513F","p",2.2],[s+.2,r+1,"\u5B88\u536B\u80CC\u5BF9\u8FC7\u9053\uFF0C\u8170\u4E0A\u6302\u7740\u94A5\u5319","g2",2.2],[o+.9,l,"\u8D26\u67DC\u91CC\u7684\u8EAB\u5951",47.3,3.75+2.6,-9.5,"item"],[l+.8,u,"\u706B\u4E00\u8D77\uFF0C\u5168\u5382\u90FD\u60CA\u52A8\u4E86\uFF1A\u53EA\u80FD\u6253\u51FA\u53BB",49.6,3.75+3,-19.8]],hud:[["obj",0,"\u5E2E\u5973\u4E1C\u5BB6\u628A\u5DE5\u4EBA\u5E26\u8D70"],["obj",e-.4,"\u627E\u5230\u8D26\u623F\uFF0C\u6BC1\u6389\u8EAB\u5951"],["key",e+4.4,e+6.4,"Space","\u6500\u722C",43.4,2.4,-17.6],["key",s+.4,r,"E","\u5077\u94A5\u5319",53.9,3.75+1.6,-19.6],["item",r,r+2.4,"\u83B7\u5F97 \xB7 \u8D26\u623F\u94A5\u5319"],["key",o-.2,a+.2,"E","\u5F00\u9501",46.2,3.75+1.9,-18.5],["obj",l+.4,"\u6253\u51FA\u53BB"]],cam:[[0,ht([61.3,1,-5],2.981,10.9,1.349)],[3.4,ht([61.3,1,-5],2.981,10.9,1.349)],[3.6,me([61.3,gt,-8],[61,gt,-9.2],{back:6.5,h:2.6,dth:.5})],[e,me([61.3,gt,-8],[61,gt,-9.2],{back:6.5,h:2.6,dth:.5})],[e+1.4,ke({r:10})],[e+6.6,ht([43.6,3.2,-18],-.35,11.5)],[i-.6,ht([44.2,4.6,-19.2],-.5,9.5,1.1)],[i+.5,ht([51.5,3.4,-25],.033,20.25,.833)],[s+.8,me([53.5,3.75,-19.6],[54.2,3.75,-19.7],{back:3.5,h:7,dth:.9})],[o+.2,ht([47,4.4,-14.5],2.64,11,.8)],[c-.2,ht([49.4,4.4,-18.6],2.75,12,.78)],[u-.2,ht([49,4.4,-18.8],2.75,11.5,.8)],[u+1,ht([43.6,3.4,-18.8],-.35,12,1.1)],[f,ht([41.4,1.6,-12],-.3,14,1.12)]]}})(),Lx=(()=>{let e=[],s=Ot().at(0,45.4,-4.2,7.2,"sneak",{face:[40,7]}).go([[41.4,-4.2,7]],Je,"sneak").hold(.2,"crouch",{face:[36,8]}).hold(1.6,"crouch"),r=s.t-1.2;s.go([[40.75,-4.2,7.2]],1.2,"sneak").hold(.2,"idle",{face:[38,7.2]}).hold(.9,"kick");let o=s.t-.5,a=o-.9;s.hold(2.2,"look",{face:[37,8.6]}).go([[44.2,-4.2,6.55]],un,"jog").hold(.2,"idle",{face:[44.2,5]}).hold(2,"wheel");let l=s.t-2,c=l+.8,h=l+8.6,u=l-.2;s.hold(1,"look",{face:[37,9]}).to(h-.6,"idle",{face:[37,9]});let f=c+2.2;s.go([[47.7,-4.2,8],[47.7,-4.2,20.2],[46.6,-4.2,21],[46.55,-2.62,23]],un,"jog").go([[45.4,-2.6,23.2],[39.2,-2.6,23.2],[37.4,-2.6,23.5]],ie).hold(.2,"idle",{face:[35,23.8]}).hold(1.5,"pry");let d=s.t-.3,p=d-6.2;s.hold(.8,"talk");let x=s.t+2.4,g=I=>-7.2+Math.min(1,Math.max(0,(I-c)/(h-c)))*(-4.45- -7.2),m=(I,M,b,D)=>{let L=Ot().at(0,I,-6,M,b,{face:[36.6,8.1]}).to(o+.3+D,b).hold(.5,"idle",{face:[40,7.3]}).go([[39.4,-6,7+D*2.2]],un,"jog").hold(.2,"argue",{face:[41,7.2]}).to(c+2.6,"argue"),U=c+(-6+.3- -7.2)/(-4.45- -7.2)*(h-c);return L.to(Math.max(L.t,U),"argue").mv(U+1.4,39-D,g(U+1.4)-.1,7.4+D*2,"tread").mv(U+3.4,38.6-D,g(U+3.4)-.1,7.8+D*2,"tread").mv(U+4.4,38.4-D,g(U+4.4)-.6,8+D*2,"swim").hold(.1,"swim",{hide:!0}),L},y=m(35.5,8.3,"sit",0),v=m(37.7,8.5,"sit",.35),_=m(36.6,9.3,"cheer",.7),S=(I,M,b)=>Ot().at(0,I,-2.6,M,"slump",{face:[37,23.6]}).to(d+b,"slump").hold(.8,"idle").go([[36.2,-2.6,23.4+b]],1.4).to(x,"talk",{face:[37.3,23.6]}),A=S(34.2,24,0),E=S(33.4,25.2,.6);return{dur:x,ch:[0,a,u,f,p],sb:{x0:30,x1:50,z0:4,z1:28,y0:-9.5,y1:0},env:{cut:{S6:-1,S6u:-1,S6r:-1},lids:["cisL"],cis:[[0,-7.2],[c,-7.2],[h,-4.45]],dyn:{cisLadder:[[o,0],[o+.7,1]],cisValve:[[l,0],[l+1.8,1]],cage:[[d-.2,0],[d+.5,1]]}},act:{p:At("p",s),tA:At("l",y),tB:At("l",v),tC:At("l",_),v1:At("v",A),v2:At("n",E)},fx:[[c-.2,h+1,"spray",33.6,-3.8,6.6,[0,-1,.3],3],[o,o+.4,"spark",40.2,-4,7.2,.35]],lab:[[.6,r+.6,"\u4E09\u4E2A\u4EBA\u5728\u4F4E\u5904\u7684\u5E73\u53F0\u4E0A\u8D4C\u94B1\uFF0C\u53EA\u6709\u4E00\u67B6\u68AF\u5B50\u4E0A\u4E0B",36.6,-4,8.4],[r+.4,o,"\u68AF\u5B50",40.2,-3.2,7.2,"item"],[o+.8,u+.4,"\u68AF\u5B50\u5012\u4E86\uFF1A1.8 \u7C73\u9AD8\u7684\u5899\uFF0C\u722C\u4E0D\u4E0A\u6765",39.4,-3.4,8.6],[u+.4,f,"\u653E\u6C34\u9600\uFF1A\u6C34\u4ECE\u8FDB\u6C34\u7BA1\u704C\u4E0B\u6765",43,-3.3,7.4,"item"],[f+.2,p,"\u6C34\u6F2B\u8FC7\u4F4E\u5904\uFF1A\u5E95\u4E0B\u7684\u4EBA\u5168\u6DF9\u4E86",37,-3,9],[d-1.4,d+1.2,"\u64AC\u5F00\u6728\u7B3C",36.6,-.4,24.4],[d+1.4,x,"\u6551\u51FA\u7684\u4EBA\uFF0C\u7B2C\u4E8C\u5929\u644A\u724C\u65F6\u4F1A\u6765\u9547\u573A\u5B50",36,.2,23.6]],hud:[["obj",0,"\u6551\u51FA\u88AB\u5173\u5728\u5730\u4E0B\u7684\u4EBA"],["key",o-1,o+.2,"F","\u8E39\u5012\u68AF\u5B50",40.4,-2.6,7.2],["key",l-.4,l+1.8,"E","\u5F00\u9600\u653E\u6C34",44.2,-2.1,6.4],["key",d-1.4,d+.2,"E","\u64AC\u5F00",36.6,-1,24.4],["obj",d+.3,"\u5E26\u4ED6\u4EEC\u56DE\u5230\u5730\u9762"]],cam:[[0,ht([39.4,-4.8,8],-.28,14.5,.92)],[r-.4,ht([39,-5,7.8],-.3,12,.9)],[a+2.4,ht([39.2,-5,7.8],-.3,12,.9)],[l-.2,ht([39.4,-4.8,7.8],-.22,15,.92)],[h-.4,ht([39,-5.2,8.4],-.25,15,.88)],[h+.6,ke({r:9,ph:.8,occ:!1})],[d-1.6,me([37.4,-2.6,23.5],[35,-2.6,23.8],{back:5.5,h:3,dth:.5})],[x,ht([37,-1.6,23.4],-2.3,11,.78)]]}})(),Dx=(()=>{let t=Ot().at(0,46.6,-4.2,20.6,"sneak",{face:[47.7,15]}).go([[47.7,-4.2,17.2]],Je,"sneak").hold(.2,"idle",{face:[46,9]}).hold(.8,"look"),e=t.t-.6,i=e+.2;t.go([[47.7,-4.2,13.6],[46,-4.2,13.4],[43.2,-4.2,12.4],[42.8,-4.2,11.3]],De,"run").mv(t.t+.45,42.8,-3.25,10.75,"mantle",{face:[42.8,9]}).mv(t.t+.45,42.8,-4.2,9.9,"fall",{fall:!0});let s=t.t,r=s-.8;t.go([[46,-4.2,9.2],[47.7,-4.2,10.2],[47.7,-4.2,13.4]],De,"run").hold(.1,"idle",{face:[46.4,13.4]}).hold(.6,"push").hold(.7,"pull");let o=t.t-1.25,a=t.t-.6,l=o-1;t.go([[47.7,-4.2,10],[44,-4.2,9.4]],De,"run").hold(.2,"idle",{face:[42,14.6],hold:"bottle"}).hold(1,"throw",{hold:""});let c=t.t-.3,h=c+.55,u=c-1.4;t.hold(.6,"cower",{face:[42,14]}).hold(2.6,"idle");let f=t.t+.4,d=(m,y,v)=>{let _=Ot().at(0,m,-4.2,y,"idle",{face:[44,10]}).to(e+.3+v,"idle").hold(.3,"argue",{face:[47.7,17]}).go([[46.2,-4.2,9.6],[47.7,-4.2,10.6],[47.7,-4.2,13.4],[45.8,-4.2,13.4],[43.6,-4.2,12.6+v]],4.4,"run");return _.hold(1,"argue",{face:[42.8,10.4]}).go([[45.6,-4.2,13+v*.8]],3.4,"run").hold(.1,"idle",{face:[47,13.4]}).to(Math.max(_.t,a+.2),"punch").to(h,"punch").mv(h+.5,m-3.6+v,-4.2,13.6+v,"ko").to(f,"ko"),_},p=d(44.4,9.2,0),x=d(45.6,9.6,.5),g=d(45,8.6,1);return{dur:f,ch:[0,i,r,l,u],sb:{x0:38,x1:50,z0:5,z1:22,y0:-9.5,y1:0},env:{cut:{S6:-1,S6u:-1,S6r:-1},lids:["cisL"],dyn:{roomDoor:[[0,1],[o,1],[o+.4,0]],roomBolt:[[a,0],[a+.4,1]]}},act:{p:At("p",t),tA:At("l",p),tB:At("l",x),tC:At("l",g)},proj:[[c,h,"bottle","p",[41.6,-3.6,15],.35]],fx:[[h,h+1.4,"shock",43.4,-3.2,13.6,4.2,"#F2C46B"],[h,f,"fire",42,-4.2,14.8,1.8],[h+.3,f,"puff",43.2,-1.6,13.4,2,"#6E6A64"]],lab:[[.4,e,"\u50A8\u7269\u95F4\uFF1A\u95E8\u80FD\u4ECE\u5916\u9762\u95E9\u4E0A\uFF0C\u5C4B\u91CC\u662F\u706B\u836F\u6876",43.5,-1.2,13.5,"item"],[e+.1,r+.4,"\u88AB\u53D1\u73B0\u4E86\uFF1A\u4E09\u4E2A\u4EBA\u8FFD\u8FC7\u6765","tB",2.2],[r+.1,l+.2,"\u4EBA\u7FFB\u7A97\u51FA\u53BB\uFF0C\u4ED6\u4EEC\u8FFD\u8FDB\u4E86\u5C4B",42.8,-1.8,10.6],[l+.4,u+.2,"\u7ED5\u56DE\u95E8\u53E3\uFF0C\u4ECE\u5916\u9762\u95E9\u4E0A\u95E8",47.2,-2,13.4],[u+.4,h,"\u9694\u7740\u7A97\u6237\u6254\u8FDB\u53BB","p",2],[h+.5,f,"\u706B\u836F\u6876\u4E00\u70B8\uFF0C\u5C4B\u91CC\u7684\u4EBA\u5168\u5012\u4E86",43.4,-2.2,13.6]],hud:[["obj",0,"\u6551\u51FA\u88AB\u5173\u5728\u5730\u4E0B\u7684\u4EBA"],["key",s-1.4,s-.4,"Space","\u7FFB\u7A97",42.8,-2,10.8],["key",o-.3,a+.5,"E","\u5173\u95E8 \xB7 \u95E9\u4E0A",46.9,-2.2,13.4],["key",c-.9,c+.2,"F","\u6295\u63B7\u71C3\u70E7\u74F6",44,-2,9.6]],cam:[[0,ht([46.2,-3,14],2.55,12.5,.8)],[i+.4,ht([45,-3.2,12],2.75,13.5,.66)],[l-.4,ht([45.6,-3.2,12.2],2.6,13,.68)],[u-.2,ht([43.6,-3.4,11.6],2.95,11.5,.72)],[f,ht([43.6,-3.4,12],2.95,12.5,.7)]]}})(),Fx=(()=>{let n=Fe,t=Ot().at(0,43.4,gt,18.6,"walk",{face:[43.4,21]}).go([[43.4,n,19.9]],ie).go([[42.2,n,20.6]],Je,"sneak").hold(.2,"crouch",{face:[45,23]}).hold(1.8,"crouch"),e=t.t-1;t.hold(.8,"lookup",{face:[47.5,23.2]}).hold(.4,"idle",{hold:"stone"}).hold(1,"throw",{hold:""});let i=t.t-.3,s=i+.55,r=i-1.4;t.hold(1.6,"crouch");let o=s+1.2;t.go([[44.1,n,22.4]],De,"run").hold(.1,"fists",{face:[45,22.4]}).hold(.8,"punch").hold(.8,"kick").go([[44.3,n,23.8]],un,"jog").hold(.1,"fists",{face:[45.3,24.3]}).hold(.8,"punch").hold(.8,"punch");let a=t.t;t.go([[45.2,n,25.9]],ie).hold(.2,"idle",{face:[46.5,25.9]}).hold(.9,"pull");let l=t.t-.7,c=t.t+1.6,h=(d,p,x)=>Ot().at(0,d,n,p,"guard",{face:[40,p],hold:"gun"}).to(s+.2,"guard").hold(.8,"cower").hold(.5,"idle",{face:[42.2,20.6]}).hold(1,"aim").hold(.5,"idle").to(o+1.4+x*2.2,"aim",{face:[44.1,22.4]}).hold(.5,"hit").hold(.6,"ko",{hold:""}).to(c,"ko"),u=h(45,22.4,0),f=h(45.3,24.3,1);return{dur:c,ch:[0,e,r,o],sb:{x0:36,x1:50,z0:17,z1:28,y0:0,y1:5},env:{cuts:[[0,{S6r:-1,S6u:-1,S6:2.8}]],dyn:{yardJoint:[[s,0],[s+.8,1]],hatch:[[l,0],[l+.7,1]]}},act:{p:At("p",t),gA:At("g",u),gB:At("g",f)},proj:[[i,s,"stone","p",[47.55,2.45,23.2],.3]],fx:[[s,s+.4,"spark",47.55,2.45,23.2,.35],[s,c,"spray",47.5,2.4,22.6,[-1,-.55,0],2.6],[s+.1,c,"spray",47.5,2.4,23.8,[-1,-.55,.1],2.6],[s+2.2,s+2.6,"puff","gA",1.3,null,.3,"#C8C4BC"],[s+2.3,s+2.7,"puff","gB",1.3,null,.3,"#C8C4BC"]],lab:[[.6,e+.6,"\u5B88\u6D3B\u677F\u7684\u4E24\u4E2A\u4EBA\u62FF\u7740\u706B\u94F3\uFF1A\u6B63\u9762\u51B2\u4E0A\u53BB\uFF0C\u5148\u6328\u4E24\u67AA",45.2,2.6,23.4],[e+.5,s,"\u5899\u5934\u7684\u6C34\u7BA1\uFF1A\u63A5\u5934\u9508\u4E86",47.3,2.9,22.4,"item"],[s+.6,o+.4,"\u6D51\u8EAB\u6E7F\u900F\uFF1A\u706B\u94F3\u6253\u4E0D\u54CD",45.1,2.4,23.4],[o+.4,a,"\u53EA\u80FD\u62FF\u62F3\u5934\u5BF9\u62F3\u5934","p",2],[l,c,"\u6D3B\u677F\u4E0B\u9762\u5C31\u662F\u6C34\u7A96",46.5,1.2,23.5,"item"]],hud:[["obj",0,"\u6551\u51FA\u88AB\u5173\u5728\u5730\u4E0B\u7684\u4EBA"],["key",i-1,s,"F","\u6254\u77F3\u5B50",47.4,3.1,23.2],["key",l-.8,l+.4,"E","\u6380\u5F00\u6D3B\u677F",46.55,1.4,23.4]],cam:[[0,ht([44,1,22.4],-2.3,10.5,1.12)],[r-.2,ht([44.6,1.4,22.2],-2.15,11,1.08)],[o-.2,ht([44.6,1,22.8],-2.4,9.5,1.12)],[c,ht([45,1,23.6],-2.5,10,1.1)]]}})(),Nd={cab:Ax,hog:Rx,den:Cx,wine:Px,factory:Ix,cisPit:Lx,cisRoom:Dx,cisPipe:Fx};var Ux=(()=>{let t=Ot().at(0,-37.9,0,-3.2,"walk",{face:[-37.9,6]}).go([[-37.9,0,3.6],[-37.9,Fe,5.8],[-38,Fe,7.5],[-38,.375,8.08],[-38,.6,8.5]],ie).hold(.35,"idle",{face:[-38,12]}).hold(1.8,"push"),e=t.t;t.go([[-38,.375,8.08],[-38,Fe,7.5],[-34.6,Fe,7.5],[-33,Fe,8.6],[-33,Fe,10.5]],ie).hold(.4,"idle",{face:[-38,9.45]}).hold(3,"peek");let i=t.t;t.hold(.6,"idle",{hold:"stone"}).hold(1,"throw");let s=i+1.15;t.hold(1.2,"look",{hold:""});let r=t.t;t.go([[-33,Fe,8.6],[-34.6,Fe,7.5],[-38,Fe,7.5],[-38,.375,8.08],[-38,.6,8.5]],2.4).hold(.9,"push");let o=t.t-.5;t.go([[-38,.6,9.7],[-38,.6,10.6]],1.6).hold(.3,"look",{face:[-38,12]}).hold(1.3,"pick").hold(.1,"idle",{hold:"paper"});let a=t.t;t.hold(1,"read");let l=t.t;t.go([[-38,.6,9.7],[-38,.6,8.5],[-38,.375,8.08],[-38,Fe,7.4]],ie).hold(.3,"idle",{face:[-38,5]}).hold(2.2,"argue").hold(1.6,"punch").hold(1.6,"idle");let c=l-1.6,h=Ot().at(0,-36.6,0,-4.1,"idle",{hide:!0}).to(c,"idle",{show:!0}).go([[-37.8,0,3],[-37.9,Fe,5.9]],2.6).hold(.2,"idle",{face:[-38,7]}).to(l+3.6,"argue").hold(1.5,"fists").hold(.7,"hit").go([[-37,Fe,5.6],[-36.5,0,2],[-35,0,-2.5]],De,"run").hold(.1,"run",{hide:!0}),u=t.t+.2;return{dur:u,ch:[0,e,i,r,l],sb:{x0:-46,x1:-28,z0:3,z1:17,y0:0,y1:6},env:{cut:{},cuts:[[0,{}],[e+1.5,{S2r:-1,S2:2.95}]],dyn:{latch:[[s,0],[s+.35,1]],sDoor:[[o,0],[o+.8,1]]}},act:{p:At("p",t),e:At("e",h)},proj:[[i+.82,s,"stone","p",[-38,.6+1.15,9.45],.25]],fx:[[s,s+.5,"spark",-38,.6+1.15,9.45,.35]],arr:[[e+4.5,i+1.2,[-34,1.9,10.4],[-37.9,.6+1.2,9.6],"see"]],trk:[[[[-37.9,Fe,6],[-41,Fe,6.6],[-43,Fe,6.6]],"#7C6FA0",1,0,e],[[[-37.9,0,2],[-31,0,2.2],[-28.4,0,2.4],[-28.4,0,11.6]],"#7C6FA0",1,0,e]],lab:[[0,e,"\u53E6\u4E00\u79CD\uFF1A\u82B1\u76C6\u4E0B\u538B\u7740\u94A5\u5319",-43.6,1.3,6.4],[0,e,"\u53E6\u4E00\u79CD\uFF1A\u627E\u79C1\u8D27\u8D29\u5B50\u4E70\u6216\u5077\u70B8\u836F",-28.6,2.3,12.6],[1.6,e,"\u65E7\u4E66\u5C4B",-38,4.6,11.5,"item"],[e-1.6,e+.5,"\u6B63\u95E8\u4ECE\u91CC\u9762\u95E9\u7740\uFF0C\u63A8\u4E0D\u5F00","p",2.3],[e+4.6,i+.3,"\u82B1\u7A97\u91CC\u770B\u5F97\u89C1\u95E8\u95E9",-37.6,.6+1.9,9.45,"item"],[s+.1,r+1,"\u95E8\u95E9\u88AB\u6253\u6389",-38,.6+1.9,9.45],[a-.2,l,"\u4E66\u684C\u4E0A\u7684\u6B8B\u5377",-38,.6+1.4,11.6,"item"],[l+2.4,u,"\u8FD9\u6B21\u51B2\u7A81\uFF0C\u4F1A\u6210\u4E3A\u4E0B\u4E00\u6BB5\u88AB\u62E6\u5728\u95E8\u5916\u7684\u539F\u56E0",-38,2.3,6.4]],hud:[["obj",0,"\u8FDB\u5165\u65E7\u4E66\u5C4B\uFF0C\u627E\u5230\u6B8B\u5377"],["key",e-1.9,e-.1,"E","\u63A8\u95E8",-38,.6+1.8,9],["key",i-.2,s,"F","\u6254\u77F3\u5B50",-34.1,2.3,10.6],["key",r+3.1,o+.4,"E","\u63A8\u95E8",-38,.6+1.8,9],["item",a,a+2.6,"\u83B7\u5F97 \xB7 \u6B8B\u5377"],["obj",a+.2,"\u5E26\u6B8B\u5377\u53BB\u4F4F\u5B85\uFF0C\u89C1\u8001\u5148\u751F"],["menu",l+1.6,l+3.6,["\u4EA4\u51FA\u6B8B\u5377","\u8BB2\u9053\u7406","\u52A8\u624B"],[[l+1.6,1],[l+2.8,2]],"p",2.2]],cam:[[0,ht([-37.8,1.3,1.2],1.7,14.5,1.445)],[2.4,ht([-37.8,1.3,1.2],1.7,14.5,1.445)],[5.4,ht([-38.2,1.9,8.4],1.85,8.5)],[e+.6,ht([-38.2,1.9,8.4],1.85,8.5)],[e+3.6,me([-33,Fe,10.5],[-38,.6+1.15,9.45],{back:6,h:4.2,k:.45,dth:.35})],[i+.3,me([-33,Fe,10.5],[-38,.6+1.15,9.45],{back:5.4,h:4,k:.45,dth:.3})],[r+.9,ke({r:8.5,th:-.3})],[r+3.6,ht([-38.2,1.9,8.4],1.85,8.5)],[o+1.3,ht([-38,1.4,10.8],2.75,10,.68)],[l+.6,ht([-37.9,1.6,6.7],1.72,8,1.25)],[l+5,ht([-37.9,1.6,6.5],1.75,9.5,1.22)]]}})(),Nx=(()=>{let t=Ot().at(0,-10.2,0,-3,"walk",{face:[-9.2,5],hold:"paper"}).go([[-9.4,0,1.2],[-9.2,gt,3.9]],ie).hold(.3,"idle",{face:[-9.2,6]}).hold(2.8,"talk"),e=t.t;t.hold(.5,"shrug").go([[-8,gt,3.6],[-3.8,0,3.4],[-1.6,0,6],[-1.6,0,11.4]],ie).hold(.3,"idle",{face:[-3.05,12.2]}).hold(2.2,"lookup");let i=t.t;t.go([[-2.05,0,12.2]],1.2).hold(.3,"idle",{face:[-2.7,12.2]}).hold(2.4,"valve");let s=i+.6;t.hold(.8,"lookup");let r=t.t;t.go([[-1.9,0,13.4],[-2.62,0,14]],ie).hold(.2,"idle",{face:[-4,14]}).go([[-2.62,6.3,14]],1.35,"climb").mv(t.t+.9,-3.65,6.9,13.7,"mantle").go([[-4.4,7.4,12.5],[-6.3,8.24,10.7],[-6.4,8.75,10],[-5.6,7.93,8.6],[-5.25,7.78,8.25]],Je,"sneak").hold(.3,"idle",{face:[-5.2,10]}).hold(1.8,"reach");let o=t.t-.6;t.go([[-5.6,7.93,8.6],[-6.4,8.75,10],[-6.3,8.24,10.7],[-4.4,7.44,12.5],[-3.65,6.9,13.7]],1.6,"sneak").mv(t.t+.8,-2.62,6.3,14,"mantle",{face:[-4,14]}).go([[-2.62,0,14]],1.8,"climb");let a=t.t;t.go([[-2.05,0,12.2]],ie).hold(.3,"idle",{face:[-2.7,12.2]}).hold(2.2,"valve");let l=t.t-.4;t.hold(.9,"lookup").go([[-1.6,0,6],[-3.8,0,3.4],[-9,gt,3]],un,"jog");let c=l+2.4;t.hold(.3,"idle",{face:[-9.2,5]}).hold(3.6,"talk").hold(1.4,"give",{hold:""}).hold(1.4,"bow");let h=t.t+.3,u=Ot().at(0,-9.2,gt,4.6,"idle",{face:[-9.2,0]}).to(2.4,"cross").to(e+.4,"refuse").to(e+2,"cross").to(l+1.5,"cross").hold(1.2,"lookup").to(c+4,"look",{face:[-9,3]}).to(h,"shrug"),f=Ot().at(0,-9.2,3.45,8.6,"read",{face:[-9.2,9.5]}).to(l+.5,"read").hold(.5,"lookup",{face:[-9.2,4]}).go([[-9.2,3.45,6.2],[-9.2,3.45,4.7]],1.4).hold(.4,"look").to(c+4.4,"talk",{face:[-9,2.4]}).to(h,"bow");return{dur:h,ch:[0,e,i,r,a,c],sb:{x0:-18,x1:2,z0:0,z1:17,y0:0,y1:12},env:{dyn:{valve:[[s,0],[s+1.8,.4],[a+.8,.4],[a+2.6,1]],hornCap:[[o,0],[o+.6,1]]}},act:{p:At("p",t),e:At("e",u),s:At("s",f)},fx:[[s+.8,o,"puff",-5.2,9.8,8.7,.35,"#D8D2C4"],[l,h,"rings",-5.2,10.05,8.5,9]],arr:[[e+1.2,i+.5,[[-3.05,.6,12.2],[-3.05,7.75,12.2],[-5.2,7.75,12.2],[-5.2,8.45,10.55],[-5.2,10.05,9.3]],null,"see"]],trk:[[[[-9.2,gt,3.9],[-9.2,gt,6.2],[-9.2,gt,9]],"#2B3331",1]],lab:[[.6,e,"\u6B63\u9762\uFF1A\u786C\u95EF\u8FDB\u53BB\uFF08\u80FD\u63A8\u8FDB\uFF0C\u4F46\u53C8\u662F\u4E00\u573A\u51B2\u7A81\uFF09",-9.2,3.2,7.2],[e+.6,i,"\u5730\u4E0A\u7684\u9600\u95E8 \u2192 \u5899\u4E0A\u7684\u7BA1\u5B50 \u2192 \u5C4B\u810A\u4E0A\u7684\u9E23\u7B1B",-3,3.2,12.2,"item"],[i+1.4,r,"\u62E7\u5F00\uFF1A\u7BA1\u5B50\u91CC\u6709\u4E86\u538B\u529B\uFF0C\u5587\u53ED\u53E3\u5374\u76D6\u7740",-5.2,11,9.6],[o-1.6,a,"\u6380\u5F00\u5587\u53ED\u76D6",-5.2,10.9,8.5,"item"],[l+.2,c+1,"\u9E23\u7B1B\u54CD\u4E86",-5.2,11.4,8.5],[c-.4,c+3,"\u8001\u5148\u751F\u8D70\u4E0A\u9732\u53F0","s",2.3],[c+3.2,h,"\u62E6\u95E8\u7684\u4EBA\u6CA1\u52A8\uFF0C\u89C1\u9762\u7684\u673A\u4F1A\u6362\u4E86\u4E2A\u5730\u65B9",-9.2,2.6,4.6]],hud:[["obj",0,"\u89C1\u5230\u8001\u5148\u751F\uFF0C\u4EA4\u8FD8\u6B8B\u5377"],["menu",1.4,e+.4,["\u8BF4\u660E\u6765\u610F","\u786C\u95EF"],[[1.4,0],[3.2,0]],"p",2.3],["key",i+.5,i+3.2,"E","\u62E7\u9600\u95E8",-2.7,1.6,12.2],["key",o-1.7,o+.3,"E","\u6380\u5F00\u76D6\u677F",-5.2,10.8,8.55],["key",a+.5,a+3,"E","\u8C03\u9600\u95E8",-2.7,1.6,12.2],["obj",i+3.4,"\u5C4B\u9876\u4E0A\u7684\u9E23\u7B1B\uFF1A\u5587\u53ED\u53E3\u88AB\u76D6\u4F4F\u4E86"],["obj",l,"\u53BB\u9732\u53F0\u4E0B\u9762\uFF0C\u7B49\u8001\u5148\u751F\u51FA\u6765"],["item",c+4.6,c+7.4,"\u4EA4\u8FD8 \xB7 \u6B8B\u5377"]],cam:[[0,ke({r:11})],[2,ht([-9.2,1.7,4.3],2.69,8.5)],[e+.3,ht([-9.2,1.7,4.3],2.69,8.5)],[e+1.6,ke({r:9.5})],[i-2.4,ke({r:9.5})],[i-.8,ht([-3.2,4.4,11.5],.45,10.5)],[i+.6,ht([-2.6,2.2,12.2],.35,9)],[i+2.6,ht([-5.2,8.6,9.6],.6,12,1.05)],[r+.4,ke({r:9,ph:1.15,th:-.9})],[r+4,ke({r:9,ph:1.1,th:-.7})],[o-1.6,ht([-5.4,9.2,9],2.4,10,1.1)],[o+1.2,ht([-5.4,9.2,9],2.4,10,1.1)],[a-2.6,ke({r:9,ph:1.1,th:-.9})],[a+.6,ht([-2.6,2.2,12.2],.35,9)],[l+.2,ht([-5.6,6,6],2.5,22,1.1)],[c+.4,me([-9,gt,3],[-9.2,3.45,4.7],{back:6.5,h:2.2,k:.6,dth:.5,y:3.6})]]}})();function Bd(n){let t=Ot().at(0,5.6,0,1.2,"walk",{face:[5.2,8]}).go([[5.1,0,4.4],[5,gt,6],[5,gt,8.05]],ie).hold(.3,"idle",{face:[5.2,10]}).hold(3.4,"talk"),e=Ot().at(0,6.9,0,1,"walk").go([[6.6,0,4.4],[6.4,gt,6.2],[6.4,gt,7.95]],ie).hold(.3,"idle",{face:[5.6,10]}).hold(3.4,"listen"),i=t.t+.2,s=Ot().at(0,5.3,gt,10,"idle",{face:[5.1,8]}).to(2.6,"listen").to(i-1.6,"refuse").to(i,"idle"),r=Ot().at(0,8.4,gt,10,"idle",{face:[7,8]}).to(i-2.2,"idle").hold(1.4,"look",{face:[5.3,10]}).to(i,"idle",{face:[6.4,8]}),o,a,l,c,h=0,u={};return n?(t.hold(.2,"idle",{face:[6.4,8]}).hold(1.8,"talk"),e.hold(.2,"idle",{face:[5,8]}).hold(1.8,"listen").go([[3.9,gt,7],[3.9,gt,7.6]],ie).hold(.2,"idle",{face:[3.6,10]}).hold(4.6,"talk"),o=e.t-4.2,s.to(o-.6,"idle",{face:[3.9,7.6]}).go([[3.9,gt,10.1]],1.4).hold(.3,"listen",{face:[3.9,7.6]}).hold(2,"talk").hold(2.2,"point",{face:[3.4,11.2]}).hold(1.6,"talk",{face:[3.9,7.6]}),r.to(o-.4,"idle").go([[9,gt,10.4],[9.8,gt,11],[11,gt,11]],1.4).hold(.2,"idle",{hide:!0}),a=o+1.6,t.to(a-.4,"idle",{face:[9.6,8.6]}).go([[7.4,gt,8.1],[9.6,gt,8.2]],Je,"sneak").hold(.2,"idle",{face:[9.4,9.2]}).hold(1.4,"steal").hold(.1,"idle",{hold:"paper"}).go([[7.2,gt,7.3],[6,gt,6.4]],ie).hold(.3,"idle",{face:[6,4]}).hold(2.4,"read"),l=t.t-1.4,e.to(l-.6,"talk").go([[5.2,gt,6.8]],ie).hold(.5,"idle",{face:[6,6.4]}),c=l+3.2,u={lab:[[o+.2,a+3,"\u60C5\u62A5\u5458\u95EE\u4E00\u6837\u5C11\u89C1\u7684\u8D27\uFF0C\u638C\u67DC\u8F6C\u8EAB\u53BB\u540E\u9762\u627E","k",2.2],[a+1.2,l-.6,"\u67DC\u53F0\u90A3\u5934\u7684\u63D0\u8D27\u5355",9.4,1.6,9,"item"],[l+.2,c,"\u540C\u4E00\u6761\u4FE1\u606F\uFF0C\u53E6\u4E00\u6761\u8DEF\uFF1A\u8BF7\u60C5\u62A5\u5458\u628A\u4F19\u8BA1\u5E26\u51FA\u5E97\u5916",5.2,2.6,9.6]],hud:[["menu",i+.1,o-.6,["\u8BF7\u60C5\u62A5\u5458\u628A\u4F19\u8BA1\u5E26\u51FA\u53BB","\u8BF7\u60C5\u62A5\u5458\u95EE\u8D27\uFF0C\u5F15\u5F00\u638C\u67DC"],[[i+.1,0],[i+1,1]],"t",2],["key",a+1.6,a+3.4,"E","\u5077\u62FF",9.4,1.6,9]]}):(t.hold(.2,"idle",{face:[6.4,8]}).hold(1.8,"talk"),e.hold(.2,"idle",{face:[5,8]}).hold(1.8,"listen").go([[8.6,gt,8.1],[9.9,gt,8.3]],ie).hold(.2,"idle",{face:[9.6,9.6]}).hold(2,"talk"),o=e.t,r.to(o-1.8,"listen",{face:[9.9,8.3]}).go([[9.9,gt,10],[10.2,gt,7],[12.3,gt,6.6]],ie).hold(.2,"idle",{face:[12.9,6.2]}).hold(1.2,"pick").hold(.1,"idle",{hold:"box"}),h=r.t+.1,r.go([[12.2,gt,5],[11.4,0,3],[10.6,0,1.6]],1.6,"carry").hold(.9,"drop",{hold:""}).hold(.4,"idle",{face:[7.4,2.2]}),e.go([[11.2,gt,6.4],[11.8,gt,5],[11.6,0,2.6]],1.6).hold(.3,"idle",{face:[10.6,1.6]}).hold(1.4,"talk").go([[13.4,0,1.4]],1.4).hold(.3,"idle",{face:[10,2]}),a=r.t,t.to(o+1.4,"idle",{face:[10,4]}).go([[5.6,gt,6],[6.4,0,3.6],[8.9,0,1.9]],ie).to(a,"idle",{face:[10.6,1.6]}).hold(2,"talk").hold(1.2,"give").hold(2,"listen"),l=t.t-1.4,r.to(a+1.2,"look",{face:[5.3,10]}).hold(1.2,"listen",{face:[8.9,1.9]}).hold(1.6,"talk").to(l+2,"idle"),s.to(l+2,"idle",{face:[5.1,8]}),c=l+3.2,u={lab:[[o-1.4,a,"\u60C5\u62A5\u5458\uFF1A\u5E2E\u4E2A\u5FD9\uFF0C\u642C\u4E00\u4E0B\u8FD9\u7BB1\u8D27","t",2.1],[a-.4,a+1.6,"\u5E97\u5916\uFF0C\u638C\u67DC\u770B\u4E0D\u89C1","a",2.2],[l+.2,c,"\u540C\u4E00\u6761\u4FE1\u606F\uFF0C\u53E6\u4E00\u6761\u8DEF\uFF1A\u95EE\u8D27\u5F15\u5F00\u638C\u67DC\uFF0C\u5077\u63D0\u8D27\u5355",5.2,2.6,9.6]],hud:[["menu",i+.1,o-1.6,["\u8BF7\u60C5\u62A5\u5458\u628A\u4F19\u8BA1\u5E26\u51FA\u53BB","\u8BF7\u60C5\u62A5\u5458\u95EE\u8D27\uFF0C\u5F15\u5F00\u638C\u67DC"],[[i+.1,0]],"t",2],["menu",a+.2,l,["\u6253\u542C\u88C5\u8F66\u65F6\u95F4","\u585E\u70B9\u94F6\u4E24"],[[a+.2,0],[a+1.6,1]],"a",2.2]]}),{dur:c,ch:[0,i,o,l-.6],sb:{x0:0,x1:16,z0:0,z1:16,y0:0,y1:6},env:{cut:{S1r:-1,S1u:-1,S1:2.5},...n?{}:{cuts:[[0,{S1r:-1,S1u:-1,S1:2.5}],[h-.02,{}]]},dyn:n?{slip:[[a+2.4,0],[a+2.5,1]]}:{}},act:{p:At("p",t),t:At("t",e),k:At("k",s),a:At("a",r)},lab:[[.8,i,"\u638C\u67DC","k",2.15],[.8,i-2.2,"\u4F19\u8BA1","a",2.05],[i-2,i+.3,"\u4F19\u8BA1\u5077\u770B\u638C\u67DC\uFF0C\u4E0D\u6562\u591A\u8BF4","a",2.1],...u.lab],hud:[["obj",0,"\u626E\u6210\u4E70\u5BB6\uFF0C\u6253\u542C\u8D27\u7684\u6765\u8DEF"],["menu",1.2,i-.4,["\u95EE\u8D27\u4ECE\u54EA\u6765","\u95EE\u4EC0\u4E48\u65F6\u5019\u88C5\u8F66","\u8BF4\u8981\u8FDB\u4E00\u6279\u8D27"],[[1.2,0],[2.6,1]],"k",2.2],...u.hud,["item",l,l+2.6,n?"\u8BFB\u51FA \xB7 \u63D0\u8D27\u5355\uFF1A\u4ECA\u665A\u4E5D\u70B9\u88C5\u8F66":"\u5F97\u77E5 \xB7 \u4ECA\u665A\u4E5D\u70B9\u88C5\u8F66"],["obj",l+.2,"\u4E5D\u70B9\u524D\uFF0C\u5230\u8D27\u8F66\u9644\u8FD1"]],cam:[[0,ke({r:10})],[2.6,me([5,gt,8.05],[5.3,gt,10],{back:6,h:3.6,dth:.45})],[i-.4,me([5,gt,8.05],[5.3,gt,10],{back:6,h:3.6,dth:.45})],[i+.8,ht([8.4,1.4,8.6],2.75,9.5,.95)],...n?[[a-.6,ht([8.4,1.4,8.6],2.75,9.5,.95)],[a+.6,me([9.6,gt,8.2],[9.4,1.2,9],{back:5.5,h:3.8,dth:.7})],[l-1.2,ht([6.2,1.4,7.2],3.3,8.5,1)]]:[[o-.8,ht([9.6,1.4,7.4],2.75,10,.98)],[h-.05,ht([9.6,1.4,7.4],2.75,10,.98)],[h,me([8.9,0,1.9],[10.6,0,1.6],{back:6,h:2.3,dth:-.5})],[c,me([8.9,0,1.9],[10.6,0,1.6],{back:6,h:2.3,dth:-.5})]]]}}var Bx=(()=>{let n=Ot().at(0,6.2,0,18.75,"idle",{face:[20,18.75]}).to(7.6,"idle"),t=n.t;n.go([[22.6,0,18.75],[25.2,0,21.4],[25.2,0,38],[27.6,0,40.4],[78.6,0,40.4],[81,0,39.6]],8.5,"idle").hold(3.5,"idle");let e=n.t-3.5,i=Ot().at(0,-1.4,0,18.4,"crouch",{face:[6,18.75]}).to(4.2,"crouch").go([[2.4,0,18.5]],Je,"sneak").mv(5.6,4.6,.92,18.75,"mantle",{face:[8,18.75]}).to(t,"ride"),s=n.keys.filter(h=>h[0]>t),r=6.2,o=18.75;s.forEach((h,u)=>{let f=u?s[u-1]:[t,6.2,0,18.75],d=h[1]-f[1],p=h[3]-f[3],x=Math.hypot(d,p)||1;x>.2&&(r=h[1]-d/x*1.6,o=h[3]-p/x*1.6),i.mv(h[0],r,.92,o,"ride",{face:x>.2?[h[1],h[3]]:void 0})}),i.mv(e+.7,r-.2,0,o+1.6,"jump",{arc:.5}).hold(.3,"land").go([[77.8,gt,37.2]],Je,"sneak").hold(1.6,"crouch",{face:[81,39]});let a=i.t+.2,l=Ot().at(0,4.9,gt,15.6,"carry",{hold:"box",face:[4.9,18]}).go([[4.6,0,17.6],[3.4,0,17.8]],1.4,"carry").hold(.8,"drop",{hold:""}).go([[4.9,gt,15.6]],1.6).hold(.1,"idle",{hide:!0}),c=Ot().at(0,2.6,0,19.9,"idle",{face:[3,18.7]}).to(2.6,"idle").hold(1.4,"look",{face:[2,21]}).go([[8.8,0,19.9]],ie).hold(.2,"idle",{hide:!0});return{dur:a,ch:[0,4.2,t,e],sb:{x0:-4,x1:90,z0:14,z1:46,y0:0,y1:6},speed:1,env:{night:[[0,.62],[a,.7]]},act:{truck:At("truck",n),p:At("p",i),a:At("a",l),w:At("w",c)},trk:[[[[-1.4,0,18.4],[-1.6,0,22],[-1.6,0,37],[6.2,0,41.2],[7.6,0,45.2],[8.6,0,45.4],[14.6,-3.8,45.4],[55,-3.8,46.4],[63.7,-3.8,45.4],[58,0,45.4],[57,0,41],[77.8,0,38.4]],"#7C6FA0",1]],lab:[[.4,4.2,"\u4F19\u8BA1\u548C\u5DE5\u4EBA\u5728\u88C5\u8F66","a",2.1],[5.6,t+1.6,"\u8D81\u88C5\u8F66\u7684\u4EBA\u8F6C\u8EAB\uFF0C\u722C\u4E0A\u8F66\u6597","p",1.9],[t+2,e-2,"\u53E6\u4E00\u79CD\u8DDF\u6CD5\uFF1A\u6CBF\u6CB3\u5CB8\u8DD1\uFF0C\u4E0B\u53F0\u9636\u8D70\u7EA4\u9053\uFF0C\u518D\u4ECE\u7801\u5934\u8FB9\u7684\u53F0\u9636\u4E0A\u6765",40,-1.2,46.4],[e+1,a,"\u8D27\u8FDB\u4E86\u4ED3\u5E93\uFF08\u4ED3\u5E93\u5173\u5361\u53E6\u6709\u4E13\u9875\uFF09",82,7.6,30,"item"]],hud:[["obj",0,"\u8DDF\u4E0A\u8D27\u8F66\uFF0C\u627E\u5230\u8D27\u7684\u53BB\u5904","21:00"],["key",4.6,5.6,"Space","\u722C\u4E0A\u8F66\u6597",2.8,1.8,18.75],["obj",e+.8,"\u8D27\u8FDB\u4E86\u4ED3\u5E93","21:20"]],cam:[[0,me([-1.4,0,18.4],[6.2,1,18.75],{back:6.5,h:2.6,dth:.25})],[4.2,me([.6,0,18.4],[6.2,1,18.75],{back:6.5,h:2.6,dth:.3})],[t,{t:"p",dy:.6,r:10,ph:1.1,back:!0,th:.35,occ:!0}],[t+4,{t:"p",dy:.6,r:12,ph:1.08,back:!0,th:.5,occ:!0}],[e-3,{t:"p",dy:.6,r:12,ph:1.08,back:!0,th:.6,occ:!0}],[e+.8,me([77.8,gt,37.2],[81,0,39.6],{back:6.5,h:2.6,dth:.5})]]}})(),Ox=(()=>{let e=Ot().at(0,-62,0,-2.4,"walk",{face:[-62,-16]}).go([[-62,0,-10.6],[-65.2,gt,-13.6],[-65,gt,-16]],ie).hold(.2,"idle",{face:[-64,-16]}).go([[-64.55,6.53,-16]],1.8,"climb");e.mv(e.t+.7,-63.4,6.73,-16.4,"mantle",{face:[-59,-20]}).go([[-59.9,6.73,-23.6]],Je,"sneak").hold(.2,"idle",{face:[-50,-24]}).hold(3.2,"peek");let i=e.t;e.mv(e.t+1.2,-59.9,6.73,-23.6,"idle",{cut:!1}).mv(e.t+.1,-30.4,0,-12,"walk",{cut:!0}).go([[-30.2,0,-26.5]],un,"jog").hold(.2,"idle",{face:[-35,-26.5]}).hold(1.8,"talk").hold(.2,"idle",{hold:"bar"}).hold(2.2,"pry").hold(.2,"idle",{hold:""}).hold(1.4,"talk");let s=i+5.6,r=e.t;e.mv(e.t+.9,-32,.15+.02,-26.5,"mantle",{face:[-36,-26.5]}).go([[-34.4,.15,-26.4],[-36.8,.15,-26.2]],Je,"sneak").hold(.8,"push",{face:[-38,-26.2]});let o=e.t-.6;e.go([[-38,.15,-26]],Je,"sneak").hold(1,"punch",{face:[-38.8,-25.4]});let a=e.t-.5;e.go([[-38.6,.15,-29.5],[-44,.15,-30],[-47.4,.15,-28.6],[-47.6,.15,-25]],2.2,"sneak").hold(.2,"idle",{face:[-46,-24.4]}).mv(e.t+.5,-46.8,.15,-24.4,"walk").hold(.1,"idle",{hide:!0});let l=e.t+.4,c=l,h=l+3.6;e.to(h+.5,"idle").mv(h+.6,-48.6,.15,-16.6,"idle",{show:!0,face:[-51,-12],cut:!0}).hold(.3,"land");let u=h+1.4;e.to(u,"fists").hold(2,"punch").go([[-51.6,.15,-13.6]],un,"jog").hold(2,"punch").hold(1.6,"idle");let f=e.t+.6,d=Ot().at(0,-45.6,.15,-8.6,"guard",{face:[-45,-4]}).to(h,"guard").hold(.4,"look",{face:[-49,-15]}).go([[-48.4,.15,-11.6]],De,"run").hold(2.4,"fists",{face:[-48.6,-15]}).hold(.5,"hit").hold(.4,"ko").to(f,"ko"),p=Ot().at(0,-43.2,.15,-8.6,"guard",{face:[-43,-4]}).to(h,"guard").hold(.4,"look",{face:[-49,-15]}).go([[-46.4,.15,-13]],De,"run").hold(3.6,"fists").hold(.5,"hit").hold(.4,"ko").to(f,"ko"),x=Ot().at(0,-52.6,.15,-10.6,"eat",{face:[-52.6,-11.6]}).to(h-.1,"eat").mv(h+.4,-53.6,.15,-9.4,"fall",{fall:!0}).hold(.3,"ko").to(f,"ko"),g=Ot().at(0,-51.4,.15,-10.6,"eat",{face:[-51.4,-11.6]}).to(h-.1,"eat").mv(h+.4,-50.6,.15,-8.9,"fall",{fall:!0}).hold(.3,"ko").to(f,"ko"),m=Ot().at(0,-38.8,.15,-25.4,"guard",{face:[-44,-25.4]}).to(a-.1,"guard").hold(.5,"hit").hold(.3,"ko").to(f,"ko"),y=Ot().at(0,-44,.15,-41.2,"idle",{face:[-44,-30]}).to(h,"idle").hold(.5,"look").go([[-48.2,.15,-21.6],[-49.6,.15,-17.4]],De,"run").hold(3.8,"fists").hold(.5,"hit").hold(.4,"ko").to(f,"ko"),v=(E,I,M,b)=>Ot().at(0,E,.15,I,"slump",{face:[-30,-26.5]}).to(i+2,"slump").hold(.6,"idle").to(r+.4,"listen",{face:[-31.4,-26.5]}).to(r+1.2,"idle",{face:[-37.4,-26.2]}).go([[-36.6,.15,-26.2+M]],ie).to(h+.2+b,"idle",{face:[-40,-26]}).go([[-38.4,.15,-26.2+M],[-44.6,.15,-20+M],[-49.2+M*.6,.15,-14.6+M*.3]],De,"run").hold(3.4,"punch").hold(1.4,"cheer").to(f,"cheer"),_=v(-33,-27.4,0,0),S=v(-34.2,-24.6,1.2,.3),A=v(-35.2,-28.6,-1.2,.6);return{dur:f,ch:[0,i,r,c,u],sb:{x0:-66,x1:-28,z0:-46,z1:-4,y0:0,y1:8},env:{cut:{},cuts:[[0,{}],[i+1.3,{S7y:2.5}]],dyn:{bars:[[s,0],[s+.8,1]],hutDoor:[[o,0],[o+.6,.55],[h+.1,.55],[h+.6,1]],truck:[[l,0],[h,1]]}},act:{p:At("p",e),gA:At("g",d),gB:At("g",p),gC:At("g",x),gD:At("g",g),gE:At("g",m),L:At("l",y),w1:At("w",_),w2:At("w",S),w3:At("w",A)},mask:[[i+.2,i+1.3,"\u4E0B\u697C\uFF0C\u7ED5\u5230\u9662\u5B50\u4E1C\u8FB9\u7684\u5C0F\u5DF7"]],fx:[[h,h+.6,"shock",-50.4,.2,-12.6,4],[h,h+.9,"puff",-50.4,.1,-12.8,1.6,"#C9BFAF"],[u+.6,f,"stars","gC",.6],[u+.6,f,"stars","gD",.6]],trk:[[[[-59.9,6.73,-23.6],[-56,.2,-20],[-54.5,.2,-12.6]],"#7C6FA0",1]],lab:[[1.6,i-3.4,"\u6B63\u95E8\u4E24\u4EBA\u5B88\u7740",-44.4,2.6,-8.6],[i-3.4,i,"\u7076\u53F0\uFF1A\u5B88\u536B\u5728\u5403\u996D",-52,2.4,-11.2,"item"],[i-3,i,"\u8D27\u8F66",-46,3.2,-26,"item"],[i-2.6,i,"\u4E1C\u8FB9\u5C0F\u5C4B\uFF1A\u5173\u7740\u5DE5\u4EBA",-34.4,3.8,-26,"item"],[i-2.2,i,"\u53E6\u4E00\u79CD\uFF1A\u5F80\u7076\u91CC\u4E0B\u836F",-55.2,2.2,-16.4],[i+3.2,r,"\u9694\u7740\u94C1\u7A97\u548C\u5DE5\u4EBA\u8BF4\u597D\uFF1A\u542C\u89C1\u52A8\u9759\u5C31\u51B2\u51FA\u6765",-31.4,3.2,-26.5],[c+.6,h,"\u5F00\u8D70\u8D27\u8F66\uFF0C\u51B2\u6563\u5403\u996D\u7684\u5B88\u536B",-47,3.4,-20],[h+1.2,u+3,"\u5DE5\u4EBA\u51B2\u51FA\u6765\u52A9\u6218","w1",2.3],[f-3,f,"\u89E3\u6551\u5DE5\u4EBA\uFF1A\u591A\u63A2\u7D22\u4E00\u6B65\uFF0C\u6362\u6765\u5F00\u6253\u65F6\u7684\u5E2E\u624B",-47,3,-15]],hud:[["obj",0,"\u593A\u56DE\u6599\u573A"],["key",i+4.4,s,"E","\u64AC\u5F00\u94C1\u6761",-31.4,2.8,-26.5],["item",r-1.4,r+1.2,"\u5DE5\u4EBA\uFF1A\u542C\u89C1\u52A8\u9759\u5C31\u51B2\u51FA\u6765"],["key",l-1,l+.2,"E","\u5F00\u8F66",-46,2.6,-27],["obj",h+.4,"\u6253\u9000\u5360\u573A\u5B50\u7684\u4EBA"],["obj",f-1.2,"\u6599\u573A\u593A\u56DE"]],cam:[[0,ke({r:11})],[6,ke({r:9,th:.4})],[8.4,ke({r:9,th:.3})],[i-3.6,me([-59.9,6.73,-23.6],[-48,0,-20],{back:5.5,h:3,k:.4,dth:.6})],[i,me([-59.9,6.73,-23.6],[-48,0,-20],{back:5.5,h:3,k:.4,dth:.6})],[i+1.3,ke({r:10})],[i+3.2,me([-30.2,0,-26.5],[-33,.15,-27.4],{back:6,h:3.2,dth:.5})],[r+.6,ke({r:10,ph:1.05,occ:!1})],[c-.4,ke({r:10,ph:1.05,occ:!1})],[c+.6,ht([-48.5,1,-17],.9,18,1)],[u+.6,ht([-49.5,1,-14.5],.6,15,1.05)]]}})(),io={study:Ux,horn:Nx,shopA:Bd(!1),shopB:Bd(!0),follow:Bx,yard:Ox,...Nd};var Od=new Map,kd=new Map,ce=(n,t)=>{let e=n+(t?JSON.stringify(t):""),i=Od.get(e);return i||(i=new Tn({color:n,roughness:.78,metalness:0,...t||{}}),Od.set(e,i)),i},Ke=(n,t)=>{let e=kd.get(n);return e||(e=t(),kd.set(n,e)),e},Js=(n,t)=>Ke("c"+n+"/"+t,()=>new Ts(n,t,4,10).translate(0,-(t/2+n),0)),be=(n,t,e)=>Ke("b"+n+"/"+t+"/"+e,()=>new Xn(n,t,e)),Ks=(n,t=14,e=10)=>Ke("s"+n+"/"+t,()=>new Ls(n,t,e)),zd={p:{body:"#C47A22",legs:"#5A4632",skin:"#E0B48C",hair:"#3A2A20",hat:"brim",hatC:"#6F4A1E",ring:"#E7A537",H:1.78},t:{body:"#3F7F8C",legs:"#2F4F57",skin:"#E3BE9A",hair:"#2A211C",hat:"bun",ring:"#5FA8B5",f:1,H:1.68},n:{body:"#9A8F80",legs:"#6E665B",skin:"#CFAF90",hair:"#3A3029",ring:"#A9A090",H:1.72},g:{body:"#3A4044",legs:"#2C3134",skin:"#B89C82",hair:"#1F1E1D",hat:"cap",hatC:"#25292B",ring:"#B5462F",H:1.8},s:{body:"#8A9AA6",legs:"#6C7A84",skin:"#D4B396",hair:"#D8D4CC",hat:"scholar",hatC:"#2E3437",robe:"#7C8C98",ring:"#C9B48E",H:1.68,beard:"#D8D4CC"},k:{body:"#6E4A36",legs:"#4E3828",skin:"#D2B092",hair:"#2B2420",hat:"scholar",hatC:"#2A221C",robe:"#5E3E2C",ring:"#C9B48E",H:1.72},a:{body:"#B9A27C",legs:"#6E5E48",skin:"#D8B592",hair:"#2F2620",apron:"#E2D8C2",ring:"#C9B48E",H:1.7},w:{body:"#5F7686",legs:"#46525A",skin:"#C9A585",hair:"#2B2420",hat:"cap",hatC:"#4A5862",ring:"#9FB3C0",H:1.74},e:{body:"#7E6A8A",legs:"#4E4458",skin:"#D2B092",hair:"#231E1C",robe:"#6C5A78",ring:"#B5462F",H:1.76},m:{body:"#6B5B3E",legs:"#4C4130",skin:"#C9A585",hair:"#2B2420",hat:"brim",hatC:"#3E3426",ring:"#C9B48E",H:1.72},v:{body:"#B5806A",legs:"#6E5244",skin:"#E0BC9A",hair:"#2A211C",hat:"bun",ring:"#C9B48E",f:1,H:1.64},d:{body:"#5B4A6E",legs:"#3E3448",skin:"#D8B08E",hair:"#2B2420",hat:"brim",hatC:"#2E2638",ring:"#B5462F",H:1.74},l:{body:"#7A2E25",legs:"#3A2420",skin:"#B79C84",hair:"#1F1E1D",hat:"brim",hatC:"#3A2420",ring:"#B5462F",H:1.84}},Sl=.44,wl=.42,kx=.07,El=Sl+wl+kx,Wd=["py","pp","pr","lean","tw","side","hx","hy","aLx","aLz","aRx","aRz","eL","eR","lLx","lLz","lRx","lRz","kL","kR","fL","fR"],zx=["py","pp","pr","lLx","lLz","lRx","lRz","kL","kR","fL","fR"],Hd=()=>({py:0,pp:0,pr:0,lean:0,tw:0,side:0,hx:0,hy:0,aLx:0,aLz:-.07,aRx:0,aRz:.07,eL:-.12,eR:-.12,lLx:0,lLz:0,lRx:0,lRz:0,kL:.03,kR:.03,fL:0,fR:0,g:1}),Hx={walk:1.45,run:2.5,sneak:1,jog:1.9,limp:1.1,carry:1.3,stagger:1},_e={idle(n,t){let e=Math.sin(t*1.7);n.lean=.02+.012*e,n.aLx=.03*e,n.aRx=-.03*e,n.hx=.02*Math.sin(t*.6),n.lRz=.05,n.lLz=-.03},walk(n,t,e){let i=Math.sin(e),s=Math.cos(e);n.lLx=-.44*i,n.lRx=.44*i,n.kL=.08+.62*Math.max(0,-s)+.1*Math.max(0,i),n.kR=.08+.62*Math.max(0,s)+.1*Math.max(0,-i),n.fL=-.25*Math.max(0,i),n.fR=-.25*Math.max(0,-i),n.aLx=.36*i,n.aRx=-.36*i,n.eL=-.28-.2*Math.max(0,-i),n.eR=-.28-.2*Math.max(0,i),n.lean=.05,n.tw=.08*i,n.hy=-.05*i,n.pr=.03*s},jog(n,t,e){_e.walk(n,t,e);let i=Math.sin(e);n.lLx*=1.35,n.lRx*=1.35,n.kL*=1.5,n.kR*=1.5,n.eL=n.eR=-1.1,n.aLx=.55*i,n.aRx=-.55*i,n.lean=.12},run(n,t,e){let i=Math.sin(e),s=Math.cos(e);n.lLx=-.8*i-.15,n.lRx=.8*i-.15,n.kL=.35+1.25*Math.max(0,-s),n.kR=.35+1.25*Math.max(0,s),n.aLx=.85*i,n.aRx=-.85*i,n.eL=n.eR=-1.45,n.lean=.24,n.tw=.14*i,n.g=0,n.py=-.07+.07*Math.abs(s)},sneak(n,t,e){let i=Math.sin(e),s=Math.cos(e);n.lLx=-.95-.32*i,n.lRx=-.95+.32*i,n.kL=1.5+.3*Math.max(0,-s),n.kR=1.5+.3*Math.max(0,s),n.fL=.45,n.fR=.45,n.lean=.42,n.aLx=-.45+.22*i,n.aRx=-.45-.22*i,n.eL=n.eR=-1,n.hx=-.32},limp(n,t,e){_e.walk(n,t,e*.9),n.lean=.16,n.side=.08*Math.sin(e),n.aRx=-.6,n.eR=-1.6,n.aRz=.2},stagger(n,t,e){_e.walk(n,t,e),n.side=.16*Math.sin(t*2.1),n.lean=.1+.08*Math.sin(t*1.3),n.aLz=-.45,n.aRz=.45,n.hx=.2*Math.sin(t*1.7),n.hy=.2*Math.sin(t*1.1)},carry(n,t,e){_e.walk(n,t,e),n.aLx=n.aRx=-.95,n.eL=n.eR=-.85,n.aLz=-.12,n.aRz=.12,n.lean=-.04},talk(n,t){_e.idle(n,t);let e=Math.sin(t*3.1),i=Math.sin(t*2.3+1);n.aRx=-.55+.25*e,n.eR=-1.05-.3*i,n.aRz=.22,n.aLx=-.2-.12*i,n.eL=-.5,n.hx=.05*Math.sin(t*2.6),n.hy=.08*Math.sin(t*.9)},argue(n,t){_e.idle(n,t);let e=Math.sin(t*4.2);n.aRx=-1+.45*e,n.eR=-.7,n.aRz=.3,n.aLx=-1-.45*e,n.eL=-.7,n.aLz=-.3,n.lean=.12,n.hx=.08*Math.sin(t*5)},listen(n,t){_e.idle(n,t),n.hx=.1+.06*Math.sin(t*1.5),n.hy=.06,n.aLx=n.aRx=.25,n.eL=n.eR=-.7},point(n,t){_e.idle(n,t),n.aRx=-1.5,n.eR=-.08,n.aRz=.15,n.hy=.1},wave(n,t){_e.idle(n,t);let e=Math.sin(t*7);n.aRx=-.3,n.aRz=2.5+.3*e,n.eR=-.5},shrug(n,t){_e.idle(n,t),n.aLx=n.aRx=-.5,n.eL=n.eR=-1.3,n.aLz=-.55,n.aRz=.55,n.hx=-.05,n.side=.05},refuse(n,t){_e.idle(n,t),n.aRx=-1.25,n.eR=-.25,n.aRz=-.1,n.lean=-.05,n.hy=.15*Math.sin(t*4)},cross(n,t){_e.idle(n,t),n.aLx=n.aRx=-.62,n.eL=n.eR=-2.2,n.aLz=.32,n.aRz=-.32,n.lLz=-.1,n.lRz=.1,n.hx=-.05},guard(n,t){_e.idle(n,t),n.aLx=n.aRx=.38,n.eL=n.eR=-.75,n.aLz=-.05,n.aRz=.05,n.lLz=-.08,n.lRz=.08},think(n,t){_e.idle(n,t),n.aRx=-.55,n.eR=-2.35,n.aRz=.35,n.aLx=-.35,n.eL=-1.5,n.aLz=.2,n.hx=.12,n.hy=-.1},look(n,t){_e.idle(n,t),n.lean=.1,n.hx=.18+.05*Math.sin(t*.8),n.hy=.25*Math.sin(t*.7)},lookup(n,t){_e.idle(n,t),n.hx=-.55,n.lean=-.08,n.aRx=-.3,n.eR=-.4},peek(n,t){n.lean=.3,n.hx=.1,n.aLx=n.aRx=-1.15,n.eL=n.eR=-1.1,n.aLz=-.15,n.aRz=.15,n.lLx=.05,n.lRx=-.25,n.kR=.25,n.hy=.15*Math.sin(t*.9)},crouch(n,t){n.lLx=n.lRx=-1.25,n.kL=n.kR=2.15,n.fL=n.fR=.6,n.lean=.45,n.aLx=n.aRx=-.55,n.eL=n.eR=-.9,n.hx=-.35+.05*Math.sin(t),n.lLz=-.12,n.lRz=.12},kneel(n,t){n.lLx=-1.45,n.kL=1.55,n.lRx=.25,n.kR=1.95,n.fR=.6,n.lean=.35,n.aRx=-1,n.eR=-.35,n.aLx=-.5,n.eL=-.9,n.hx=.25},pick(n,t,e,i){let s=Math.sin(Math.PI*Math.min(1,i*1.25));n.lean=.25+.7*s,n.lLx=n.lRx=-.15-.5*s,n.kL=n.kR=.2+1*s,n.aRx=-.4-.8*s,n.eR=-.25,n.aLx=-.2-.4*s,n.hx=.3*s},drop(n,t){n.lean=.45,n.lLx=n.lRx=-.35,n.kL=n.kR=.6,n.aRx=-1,n.eR=-.4,n.aLx=-.3,n.eL=-.6,n.hx=.35,n.aRz=.1+.08*Math.sin(t*6)},throw(n,t,e,i){let s=i<.55?i/.55:1,r=i<.55?0:Math.min(1,(i-.55)/.2);n.aRx=1*s-3.4*r*s+(1-s)*0,n.eR=-1.6*s+1.3*r,n.aRz=.35,n.tw=.45*s-.8*r,n.lean=-.1*s+.3*r,n.aLx=-1*s+.6*r,n.eL=-.4,n.lLx=-.45,n.kL=.2,n.lRx=.25,n.kR=.15,n.hx=-.1*s},aim(n,t){n.aRx=-1.55,n.eR=-.1,n.aLx=-1.4,n.eL=-.5,n.aLz=.35,n.lLx=-.3,n.lRx=.25,n.kL=.2,n.tw=-.2},push(n,t){n.lean=.3,n.aLx=n.aRx=-1.45,n.eL=n.eR=-.3,n.lLx=-.5,n.kL=.5,n.lRx=.45,n.kR=.1},reach(n,t){n.aLx=n.aRx=-2.55+.12*Math.sin(t*5),n.eL=n.eR=-.35,n.aLz=-.12,n.aRz=.12,n.hx=-.5,n.lean=-.05},ride(n,t){_e.crouch(n,t),n.hx=-.1+.05*Math.sin(t*2),n.aLx=-.3,n.aRx=-.9,n.eR=-1.2},pull(n,t){n.lean=-.28,n.aLx=n.aRx=-1.25,n.eL=n.eR=-.9+.2*Math.sin(t*5),n.lLx=-.55,n.kL=.3,n.lRx=.4,n.kR=.35},valve(n,t){let e=Math.sin(t*4.2);n.lean=.32,n.aLx=-1+.25*e,n.aRx=-1-.25*e,n.eL=n.eR=-.75,n.aLz=-.25+.15*e,n.aRz=.25+.15*e,n.tw=.18*e,n.lLx=n.lRx=-.3,n.kL=n.kR=.45},wheel(n,t){let e=Math.sin(t*4.2),i=Math.cos(t*4.2);n.aLx=-1.45+.3*e,n.aRx=-1.45-.3*e,n.aLz=-.2+.2*i,n.aRz=.2+.2*i,n.eL=n.eR=-.45,n.tw=.12*e,n.lean=.08},lever(n,t,e,i){n.aLx=n.aRx=-1.7+1.2*Math.min(1,i*1.6),n.eL=n.eR=-.3,n.lean=.1+.25*Math.min(1,i*1.6),n.lLx=-.4,n.kL=.4,n.lRx=.3},pry(n,t){let e=Math.sin(t*6);n.lean=-.15,n.aLx=n.aRx=-1.2+.1*e,n.eL=n.eR=-1.05,n.lLx=-.5,n.kL=.55,n.lRx=.35,n.kR=.25,n.tw=.05*e},steal(n,t){n.lean=.3,n.aRx=-1.2+.12*Math.sin(t*5),n.eR=-.3,n.aRz=-.05,n.aLx=-.3,n.eL=-.7,n.lLx=n.lRx=-.6,n.kL=n.kR=1,n.hx=.15,n.hy=-.3*Math.sin(t*.8)},climb(n,t){let e=Math.sin(t*5.2);n.g=0,n.aLx=-2.65+.38*e,n.aRx=-2.65-.38*e,n.eL=-.45-.35*Math.max(0,e),n.eR=-.45-.35*Math.max(0,-e),n.lLx=-.75-.45*e,n.lRx=-.75+.45*e,n.kL=1.25+.4*e,n.kR=1.25-.4*e,n.fL=n.fR=.3,n.lean=.08,n.hx=-.25,n.py=-.18},mantle(n,t,e,i){let s=Math.min(1,i*1.4);n.g=0,n.aLx=n.aRx=-2.6+2.1*s,n.eL=n.eR=-.3-.6*Math.sin(Math.PI*s),n.lLx=-1.2*Math.sin(Math.PI*s),n.kL=1.6*Math.sin(Math.PI*s),n.lRx=-.4,n.kR=.8,n.lean=.35*Math.sin(Math.PI*s),n.py=-.15},jump(n,t){n.g=0,n.lLx=-.9,n.kL=1.3,n.lRx=.2,n.kR=.9,n.aLx=-1.6,n.aRx=.5,n.eL=n.eR=-.5,n.lean=.2},fall(n,t){n.g=0,n.lLx=-.6,n.kL=.8,n.lRx=.2,n.kR=.4,n.aLz=-2,n.aRz=2,n.eL=n.eR=-.3,n.lean=-.2},land(n,t){n.lLx=n.lRx=-1.1,n.kL=n.kR=1.9,n.fL=n.fR=.5,n.lean=.5,n.aLx=n.aRx=-.7,n.eL=n.eR=-.4,n.aLz=-.4,n.aRz=.4},swim(n,t){let e=Math.sin(t*3.4);n.g=0,n.pp=1.25,n.py=-.88,n.aLx=-2.2+1.5*e,n.aRx=-2.2-1.5*e,n.eL=n.eR=-.25,n.aLz=-.35,n.aRz=.35,n.lLx=.25*Math.sin(t*7),n.lRx=-.25*Math.sin(t*7),n.kL=n.kR=.25,n.hx=-.85},tread(n,t){let e=Math.sin(t*3);n.g=0,n.py=-.95,n.aLz=-1+.3*e,n.aRz=1-.3*e,n.aLx=n.aRx=-.4,n.eL=n.eR=-.4,n.lLx=-.3+.35*e,n.lRx=-.3-.35*e,n.kL=n.kR=.6},punch(n,t){let e=Math.sin(t*9);n.lLx=-.45,n.kL=.4,n.lRx=.35,n.kR=.3,n.lean=.12,n.aRx=-1.55+.75*Math.max(0,-e),n.eR=-1.7*Math.max(0,-e)-.1,n.aLx=-1.4+.75*Math.max(0,e),n.eL=-1.7*Math.max(0,e)-.1,n.tw=.3*e,n.aLz=.1,n.aRz=-.1},kick(n,t){let e=Math.max(0,Math.sin(t*5));n.lRx=-1.5*e,n.kR=1.2-1.1*e,n.lLx=.1,n.kL=.25,n.lean=-.15*e,n.aLx=n.aRx=-1.3,n.eL=n.eR=-1.6},fists(n,t){let e=Math.sin(t*2.5);n.lLx=-.4,n.kL=.45,n.lRx=.35,n.kR=.35,n.aLx=n.aRx=-1.3,n.eL=n.eR=-1.9,n.aLz=.15,n.aRz=-.15,n.lean=.1,n.side=.04*e},hit(n,t){n.lean=-.3,n.hx=-.35,n.aLz=-.9,n.aRz=.9,n.eL=n.eR=-.5,n.lLx=.3,n.kL=.3,n.lRx=-.3,n.kR=.4},ko(n,t){n.g=0,n.pp=-1.52,n.py=-El+.16,n.aLz=-1.1,n.aRz=.6,n.eL=-.3,n.eR=-1.2,n.lLx=-.15,n.lRx=.1,n.kR=.5,n.hy=.4},slump(n,t){n.g=0,n.py=-.55,n.lLx=n.lRx=-1.55,n.kL=n.kR=1.5,n.lean=.55+.03*Math.sin(t*.8),n.hx=.55,n.aLx=n.aRx=-.35,n.eL=n.eR=-.3},sit(n,t){n.g=0,n.py=-.47,n.lLx=n.lRx=-1.57,n.kL=n.kR=1.57,n.lean=.05,n.aLx=n.aRx=-.55,n.eL=n.eR=-.9,n.hx=.05*Math.sin(t*.7)},eat(n,t){_e.sit(n,t);let e=Math.max(0,Math.sin(t*3));n.aRx=-.8-.6*e,n.eR=-1.4-.8*e,n.lean=.15,n.hx=.15-.1*e},dizzy(n,t){_e.sit(n,t),n.lean=.4+.1*Math.sin(t*1.4),n.side=.22*Math.sin(t*1.9),n.hx=.5,n.hy=.3*Math.sin(t*1.3),n.aLx=n.aRx=-.1,n.eL=n.eR=-.15,n.aLz=-.25,n.aRz=.25},cower(n,t){_e.crouch(n,t),n.aLx=n.aRx=-2.5,n.eL=n.eR=-1.6,n.aLz=-.4,n.aRz=.4,n.hx=.45,n.lean=.6},cheer(n,t){let e=Math.sin(t*8);n.aLx=n.aRx=-.2,n.aLz=-2.6-.2*e,n.aRz=2.6+.2*e,n.eL=n.eR=-.3,n.hx=-.15,n.py=.04*Math.abs(e)},bow(n,t){_e.idle(n,t),n.lean=.55,n.aLx=n.aRx=-.5,n.eL=n.eR=-1.4,n.aLz=.3,n.aRz=-.3,n.hx=.2},give(n,t){_e.idle(n,t),n.aRx=-1.25,n.eR=-.35,n.aRz=-.05,n.lean=.08,n.hx=.1},read(n,t){_e.idle(n,t),n.aLx=n.aRx=-1,n.eL=n.eR=-1.35,n.aLz=.15,n.aRz=-.15,n.hx=.38},sleep(n,t){n.g=0,n.pp=-1.52,n.py=-El+.16,n.aLz=-.25,n.aRz=.25,n.hy=.3,n.lean=.02*Math.sin(t*1.2)}},Vx=new Set(["walk","run","sneak","jog","limp","stagger","carry"]);function Vd(n,t,e,i){let[s,r]=n.split("+"),o=Hd(),a=s.split(":")[0],l=(e||0)/(Hx[a]||1.4)*Math.PI*2;if((_e[a]||_e.idle)(o,t,l,i||0),r&&_e[r]){let c=Hd();_e[r](c,t,l,i||0);for(let h of Wd)zx.includes(h)||(o[h]=c[h]);Vx.has(r)||(o.lean=c.lean)}return o}function so(n,t={}){let e=zd[n]||zd.n,i=(t.H||e.H)/1.78,s=!!e.f,r=new Ht,o=new Ht;r.add(o),o.scale.setScalar(i);let a=new Ht;a.position.y=El,o.add(a);let l=ce(e.body),c=ce(e.legs),h=ce(e.skin),u=ce(e.hair),f=e.robe?ce(e.robe):null,d=(Y,k,X,V=0,et=0,Tt=0,Vt)=>{let Qt=new ee(k,X);return Qt.position.set(V,et,Tt),Vt&&Qt.scale.set(...Vt),Qt.castShadow=!0,Y.add(Qt),Qt};d(a,be(.3,.17,.2),c,0,.02,0);let p=Y=>{let k=new Ht;k.position.set(Y*.095,-.02,0),a.add(k),d(k,Js(.078,.29),c);let X=new Ht;X.position.y=-Sl,k.add(X),d(X,Js(.062,.3),c);let V=new Ht;return V.position.y=-wl,X.add(V),d(V,be(.105,.075,.25),ce("#3E342C"),0,-.035,.055),{hip:k,knee:X,ank:V}},x=p(-1),g=p(1),m=new Ht;m.position.y=.08,a.add(m);let y=s?.9:1;d(m,Js(.13,.08),l,0,.26,0,[y*1.05,1,.74]);let v=new Ht;v.position.y=.2,m.add(v),d(v,Js(.155,.14),l,0,.3,0,[y*1.1,1,.7]);let _=new Ht;_.position.y=.36,v.add(_),d(_,Ke("nk",()=>new Ye(.045,.05,.08,8)),h,0,.03,0);let S=new Ht;S.position.y=.08,_.add(S),d(S,Ks(.1),h,0,.1,.005,[.92,1.08,1]),d(S,be(.028,.045,.04),h,0,.09,.1),d(S,Ke("hr",()=>new Ls(.106,14,8,0,Math.PI*2,0,Math.PI*.52)),u,0,.115,-.012,[.95,1.05,1.02]),(e.hat==="bun"||s)&&d(S,Ks(.055,10,8),u,0,.17,-.08),e.beard&&d(S,be(.09,.07,.05),ce(e.beard),0,.02,.085),e.hat==="brim"&&(d(S,Ke("hb",()=>new Ye(.19,.19,.02,18)),ce(e.hatC),0,.19,0),d(S,Ke("hc",()=>new Ye(.095,.11,.1,14)),ce(e.hatC),0,.24,0)),e.hat==="cap"&&(d(S,Ke("cc",()=>new Ye(.112,.118,.07,14)),ce(e.hatC),0,.19,-.005),d(S,be(.16,.015,.08),ce(e.hatC),0,.165,.1)),e.hat==="scholar"&&d(S,be(.2,.09,.2),ce(e.hatC),0,.22,0);let A=Y=>{let k=new Ht;k.position.set(Y*(s?.175:.195),.32,0),v.add(k),d(k,Js(.054,.19),l);let X=new Ht;X.position.y=-.3,k.add(X),d(X,Js(.046,.16),e.robe?f:l);let V=new Ht;return V.position.y=-.255,X.add(V),d(V,be(.065,.095,.045),h,0,-.04,0),{sh:k,el:X,hand:V}},E=A(-1),I=A(1),M=null,b=null;e.robe&&(M=new Ht,a.add(M),d(M,Ke("rb",()=>new Ye(.17,.27,.74,14,1,!0).translate(0,-.37,0)),ce(e.robe,{side:Ze}),0,.05,0,[1,1,.82])),e.apron&&(b=new Ht,b.position.set(0,.12,.12),a.add(b),d(b,be(.3,.62,.02),ce(e.apron),0,-.31,0));let D={},L=(Y,k,X,V,et,Tt)=>{let Vt=d(I.hand,k,X,V,et,Tt);return Vt.visible=!1,D[Y]=Vt,Vt};L("paper",be(.2,.015,.26),ce("#EFE6CF"),0,-.1,.08),L("stone",Ks(.06,8,6),ce("#8E877C"),0,-.1,.03),L("key",be(.03,.12,.02),ce("#C9A24E",{metalness:.5,roughness:.4}),0,-.1,.03),L("jar",Ke("jr",()=>new Ye(.06,.07,.16,10)),ce("#7F9A6A"),0,-.12,.04),L("bottle",Ke("bt",()=>new Ye(.04,.05,.2,8)),ce("#B5462F"),0,-.12,.04),L("meat",be(.22,.1,.14),ce("#B0605A"),0,-.12,.06),L("book",be(.18,.05,.24),ce("#6E4A36"),0,-.1,.07),L("bar",be(.04,.04,.7),ce("#3F4649"),0,-.1,.25),L("sack",be(.3,.28,.25),ce("#C8B48C"),0,-.22,.05),L("veg",Ks(.17,10,8),ce("#9DBF73"),0,-.17,.1),L("gun",be(.05,.07,1),ce("#3B3029"),0,-.12,.3),L("coin",be(.12,.06,.08),ce("#C9A24E",{metalness:.5,roughness:.4}),0,-.1,.04);let U=d(v,be(.46,.34,.36),ce("#A8865F"),0,.08,.42);U.visible=!1,D.box=U;let N=new ee(Ke("rg",()=>new Xi(.36,.47,32)),new xn({color:e.ring,transparent:!0,opacity:.85,depthWrite:!1}));N.rotation.x=-Math.PI/2,N.position.y=.035,N.renderOrder=2,r.add(N);let H="",B={root:r,kind:n,ring:N,H:i,hold(Y){if(Y!==H){H=Y||"";for(let[k,X]of Object.entries(D))X.visible=k===H}},pose(Y="idle",k=0,X={}){let V=Vd(Y,k,X.d,X.u),et=Gd(V);if(X.prev&&X.prev!==Y&&X.w!=null&&X.w<1){let Tt=Vd(X.prev,k,X.d,1),Vt=Gd(Tt),Qt=X.w*X.w*(3-2*X.w);for(let Zt of Wd)V[Zt]=Tt[Zt]+(V[Zt]-Tt[Zt])*Qt;et=Vt+(et-Vt)*Qt}a.position.y=El+et,a.rotation.set(V.pp,0,V.pr),m.rotation.set(V.lean,V.tw,V.side),S.rotation.set(V.hx,V.hy,0),E.sh.rotation.set(V.aLx,0,V.aLz),I.sh.rotation.set(V.aRx,0,V.aRz),E.el.rotation.x=V.eL,I.el.rotation.x=V.eR,x.hip.rotation.set(V.lLx,0,V.lLz),g.hip.rotation.set(V.lRx,0,V.lRz),x.knee.rotation.x=V.kL,g.knee.rotation.x=V.kR,x.ank.rotation.x=V.fL,g.ank.rotation.x=V.fR,M&&(M.rotation.x=(V.lLx+V.lRx)*.45,M.scale.z=1+Math.abs(V.lLx-V.lRx)*.35),b&&(b.rotation.x=Math.min(V.lLx,V.lRx)*.7)}};return B.pose("idle"),B}function Gd(n){if(!n.g)return n.py;let t=(e,i,s)=>(Sl*Math.cos(e)+wl*Math.cos(e+i))*Math.cos(s);return Math.max(t(n.lLx,n.kL,n.lLz),t(n.lRx,n.kR,n.lRz))-(Sl+wl)+n.py}function ro(n={}){let t=new Ht,e=new Ht;t.add(e);let i=n.s||1;e.scale.setScalar(i);let s=ce("#2E2A28"),r=ce("#5A4A46"),o=ce("#D8CFC0"),a=(p,x,g,m=0,y=0,v=0,_)=>{let S=new ee(x,g);return S.position.set(m,y,v),_&&S.scale.set(..._),S.castShadow=!0,p.add(S),S},l=new Ht;l.position.y=.5,e.add(l),a(l,Ke("pgb",()=>new Ts(.25,.6,4,12).rotateX(Math.PI/2)),s,0,0,0,[1,.95,1]),a(l,be(.06,.14,.5),s,0,.26,-.02);let c=new Ht;c.position.set(0,.04,.5),l.add(c),a(c,be(.3,.28,.3),s,0,0,.1),a(c,Ke("psn",()=>new Ye(.09,.1,.14,10).rotateX(Math.PI/2)),r,0,-.04,.3);for(let p of[-.11,.11])a(c,be(.08,.11,.04),s,p,.17,.03),a(c,be(.025,.06,.025),o,p*.9,-.1,.3);let h=[];for(let[p,x]of[[-.13,.3],[.13,.3],[-.13,-.3],[.13,-.3]]){let g=new Ht;g.position.set(p,-.12,x),l.add(g),a(g,be(.1,.34,.11),s,0,-.17,0),a(g,be(.1,.05,.12),r,0,-.36,.01),h.push(g)}let u=new Ht;u.position.set(0,.08,-.55),l.add(u),a(u,be(.03,.03,.16),s,0,0,-.08);let f=new ee(Ke("prg",()=>new Xi(.55,.68,32)),new xn({color:"#B5462F",transparent:!0,opacity:.85,depthWrite:!1}));return f.rotation.x=-Math.PI/2,f.position.y=.035,t.add(f),{root:t,ring:f,kind:"pig",hold(){},pose(p="idle",x=0,g={}){let m=(g.d||0)/(p==="run"?1.4:.8)*Math.PI*2,y=Math.sin(m);l.rotation.set(0,0,0),l.position.y=.5,c.rotation.set(0,0,0),u.rotation.set(0,0,.3*Math.sin(x*6));let v=p==="run"?.75:p==="walk"||p==="stagger"?.42:0;h.forEach((_,S)=>{_.rotation.x=v*y*(S===0||S===3?1:-1),_.rotation.z=0}),p==="run"&&(l.position.y=.5+.04*Math.abs(Math.cos(m)),c.rotation.x=.1),p==="eat"&&(c.rotation.x=.55+.12*Math.sin(x*7),l.rotation.x=.1),p==="idle"&&(c.rotation.y=.2*Math.sin(x*.9)),p==="stagger"&&(l.rotation.z=.12*Math.sin(x*2.2),c.rotation.x=.3),(p==="down"||p==="ko")&&(l.rotation.z=1.45,l.position.y=.27,h.forEach(_=>{_.rotation.x=.2}),c.rotation.x=.2)}}}var ui=(n,t=.9)=>new xn({color:n,transparent:!0,opacity:t,depthWrite:!1});function Al(n=1.5,t=1,e={}){let i=new Ht,s=ui("#EC6E2A",.9),r=ui("#F6B63E",.95),o=Math.max(3,Math.round(n*3.2));for(let a=0;a<o;a++){let l=a*2.39996+t,c=n*Math.sqrt((a+.5)/o)*.8,h=.9+(a*7+t*3)%5*.22,u=new ee(new Cs(.28+.1*(a%2),h,6),a%3?s:r);u.position.set(Math.cos(l)*c,h/2,Math.sin(l)*c),u.userData.h=h,u.userData.k=a*1.7+t,i.add(u)}if(e.spot!==!1){let a=new ee(new Rs(n*1.15,28),ui("#EC6E2A",.28));a.rotation.x=-Math.PI/2,a.position.y=.05,i.add(a)}return i.userData.tick=a=>{for(let l of i.children)l.userData.h&&(l.scale.y=.8+.35*Math.abs(Math.sin(a*6+l.userData.k)))},i}function Xd(n=1,t="#FFD27A"){let e=ui(t,.9),i=new ee(new wi(n,1),e);return i.userData.at=s=>{i.scale.setScalar(.3+1.2*s),e.opacity=.9*(1-s)},i}function qd(n=4,t="#F3E3C2"){let e=ui(t,.8);e.side=Ze;let i=new ee(new Xi(.86,1,48),e);return i.rotation.x=-Math.PI/2,i.userData.at=s=>{i.scale.setScalar(.4+n*s),e.opacity=.8*(1-s)},i}function Yd(n=9,t="#E7A537"){let e=new Ht,i=[];for(let s=0;s<4;s++){let r=ui(t,.7);r.side=Ze;let o=new ee(new Br(1,.035,6,40,Math.PI*1.2),r);o.rotation.z=-Math.PI*.1,e.add(o),i.push([o,r])}return e.userData.tick=s=>i.forEach(([r,o],a)=>{let l=(s*.9+a/4)%1;r.scale.setScalar(.4+n*l),o.opacity=.75*(1-l)}),e}function Zd(n=[0,0,1],t=3,e="#9CC3C6"){let i=new Ht,s=new Tn({color:e,roughness:.2,transparent:!0,opacity:.85}),r=new F(...n).normalize(),o=[];for(let a=0;a<26;a++){let l=new ee(Ks(.07+a%3*.03,6,5),s);i.add(l),o.push([l,a/26,a*37%11/11-.5])}return i.userData.tick=a=>o.forEach(([l,c,h])=>{let u=(a*1.6+c)%1,f=u*t;l.position.set(r.x*f+h*.5*u,r.y*f-4.9*(u*.55)**2+.1*h,r.z*f+h*.3*u),l.scale.setScalar(.6+u*.8)}),i}function $d(n=1.2,t="#9CB98A"){let e=new Ht,i=[];for(let s=0;s<6;s++){let r=ui(t,.55),o=new ee(new wi(.5,1),r),a=s*2.4;o.position.set(Math.cos(a)*.35*n,.3+s%3*.25*n,Math.sin(a)*.35*n),e.add(o),i.push([o,r,.6+s%3*.25])}return e.userData.at=s=>i.forEach(([r,o,a])=>{r.scale.setScalar(a*n*(.4+.9*s)),o.opacity=.55*(1-s*s)}),e}function jd(n="#F3C76A"){let t=new Ht,e=ui(n,.95);for(let i=0;i<3;i++){let s=new ee(new Ur(.07),e);t.add(s)}return t.userData.tick=i=>t.children.forEach((s,r)=>{let o=i*3+r*2.09;s.position.set(Math.cos(o)*.26,.05*Math.sin(i*5+r),Math.sin(o)*.26),s.rotation.y=i*4}),t}function Qd(n=1,t="#8FB37A",e=.5){let i=new ee(new Rs(n,28),ui(t,e));i.rotation.x=-Math.PI/2;let s=new Ht;return i.position.y=.04,s.add(i),s}function Jd(n="stone"){if(n==="flame"){let s=new Ht,r=Al(.16,3,{spot:!1});return r.scale.setScalar(.55),s.add(r),s.userData.tick=o=>r.userData.tick(o),s}let t={stone:"#8E877C",bottle:"#B5462F",coin:"#D9B24A",pack:"#7F9A6A",meat:"#B0605A"}[n]||"#8E877C",e=new Ht,i=new ee(n==="coin"?Ke("cn",()=>new Ye(.06,.06,.02,10)):Ks(n==="stone"?.07:.09,8,6),ce(t));if(i.castShadow=!0,e.add(i),n==="bottle"){let s=Al(.12,2,{spot:!1});s.scale.setScalar(.35),s.position.y=.08,e.add(s),e.userData.tick=r=>s.userData.tick(r)}return e}function tr(n,t,e,i={}){var f,d;let s=n.map(p=>new F(...p)),r=s.length>2?new Gi(s,!1,"centripetal",.2):new Ps(s[0],s[1]||s[0].clone().add(new F(0,.01,0))),o=r.getLength(),a=Math.max(8,Math.round(o*3)),l=[];if(i.dash){let[p,x]=i.dash,g=Math.max(1,Math.floor(o/(p+x)));for(let m=0;m<g;m++){let y=m*(p+x)/o,v=Math.min(1,(m*(p+x)+p)/o),_=[];for(let S=0;S<=4;S++)_.push(r.getPointAt(y+(v-y)*S/4));l.push(new Ds(new Gi(_),4,t,6,!1))}}else l.push(new Ds(r,a,t,7,!1));let c=new Ht,h=new xn({color:e,transparent:!!i.opacity,opacity:(f=i.opacity)!=null?f:1}),u=new xn({color:e,transparent:!0,opacity:(d=i.xray)!=null?d:.22,depthTest:!1,depthWrite:!1});for(let p of l){let x=new ee(p,h),g=new ee(p,u);g.renderOrder=5,c.add(x,g)}if(i.every){let p=new Cs(t*2.6,t*5,10);p.rotateX(Math.PI/2);let x=Math.max(1,Math.floor(o/i.every));for(let g=1;g<=x;g++){let m=Math.min(.999,(g-(i.last?0:.5))/x),y=r.getPointAt(m),v=r.getTangentAt(m);for(let _ of[h,u]){let S=new ee(p,_);S.position.copy(y),S.lookAt(y.clone().add(v)),_===u&&(S.renderOrder=5),c.add(S)}}}return c.userData.length=o,c.userData.curve=r,c}function Kd(n,t,e,i={}){var l,c;let s=new F(...n),r=new F(...t),o=s.clone().lerp(r,.5);o.y+=s.distanceTo(r)*((l=i.arc)!=null?l:.12);let a=[];for(let h=0;h<=10;h++){let u=h/10,f=s.clone().multiplyScalar((1-u)*(1-u)).add(o.clone().multiplyScalar(2*u*(1-u))).add(r.clone().multiplyScalar(u*u));a.push([f.x,f.y,f.z])}return tr(a,(c=i.r)!=null?c:.1,e,{dash:i.dash,every:999,last:!0,xray:.3})}function Tl(n,t){let e=document.createElement("div");e.className="bs-lay",t.appendChild(e);let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("aria-hidden","true"),i.style.cssText="width:100%;height:100%;overflow:visible;pointer-events:none;will-change:auto",e.appendChild(i);let s=[],r=new F,o=[];for(let g=8;g<=48;g+=8)o.push([0,-g],[0,g],[g,0],[-g,0]);let a="",l=".sbx-nda,.sbx-tb .grp,.sbx-tour,.sbx-hint,.sbx-cap,.sbx-x,.sbx-pop,.stg-cap,.stg-tl,.stg-next",c=[],h=-1e9,u=()=>{let g=t.getBoundingClientRect();c=[...t.querySelectorAll(l)].filter(m=>m.offsetWidth&&!m.hidden&&getComputedStyle(m).visibility!=="hidden"&&+getComputedStyle(m).opacity>.1).map(m=>{let y=m.getBoundingClientRect();return[y.left-g.left-3,y.top-g.top-3,y.right-g.left+3,y.bottom-g.top+3]})};function f(g,m,y,v){let _=document.createElement(v?"button":"span");v&&(_.type="button"),_.className=g,_.innerHTML=m,_.style.display="none",e.appendChild(_);let S={e:_,p:typeof y=="function"?null:new F(...y),fn:typeof y=="function"?y:null,on:!1,shown:!1,lab:/\bbs-lab\b/.test(g),w:0,h:0};return s.push(S),S}function d(g){let m=s.indexOf(g);m>=0&&s.splice(m,1),g.e.remove()}let p=g=>{g.shown&&(g.e.style.display="none",g.shown=!1)},x=(g,m,y)=>{g.e.style.transform=`translate(${m.toFixed(1)}px,${y.toFixed(1)}px)`};return n.onRender(g=>{let m=performance.now();m-h>400&&(u(),h=m);let y=t.clientWidth,v=t.clientHeight,_=c.slice(),S=[],A=[];for(let b of s){if(!b.on){p(b);continue}if(r.copy(b.fn?b.fn():b.p).project(g),r.z>1||r.z<-1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2){p(b);continue}b.shown||(b.e.style.display="",b.shown=!0);let D=(r.x+1)/2*y,L=(1-r.y)/2*v;(b.lab?S:A).push([b,D,L])}let E=(b,D,L)=>{let U=b.bw||(b.bw=b.e.offsetWidth);return U>40?[D-16,L-16,D-16+U,L+16]:[D-15,L-15,D+15,L+15]},I=b=>!_.some(D=>b[0]<D[2]&&b[2]>D[0]&&b[1]<D[3]&&b[3]>D[1]);A.sort((b,D)=>D[0].e.classList.contains("on")-b[0].e.classList.contains("on"));let M="";for(let[b,D,L]of A){let U=D,N=L,H=E(b,D,L);if(!I(H))for(let[B,Y]of o){let k=E(b,D+B,L+Y);if(k[0]>=0&&k[2]<=y&&k[1]>=0&&k[3]<=v&&I(k)){U=D+B,N=L+Y,H=k;break}}x(b,U,N),_.push(H),Math.hypot(U-D,N-L)>13&&(M+=`<line x1="${D.toFixed(1)}" y1="${L.toFixed(1)}" x2="${U.toFixed(1)}" y2="${N.toFixed(1)}"/><circle cx="${D.toFixed(1)}" cy="${L.toFixed(1)}" r="3"/>`)}M!==a&&(a=M,i.innerHTML=M?`<g stroke="#1F2725" stroke-opacity=".75" stroke-width="1.5" fill="#D2872C">${M}</g>`:""),S.sort((b,D)=>D[2]-b[2]);for(let[b,D,L]of S){b.w||(b.w=b.e.offsetWidth,b.h=b.e.offsetHeight);let U=L;for(let N=0;N<10;N++){let H=D-b.w/2,B=U-11-b.h,Y=D+b.w/2,k=U-11,X=_.find(V=>H<V[2]&&Y>V[0]&&B<V[3]&&k>V[1]);if(!X||X[1]+11-3-11-b.h<0)break;U=X[1]+11-3}_.push([D-b.w/2,U-11-b.h,D+b.w/2,U-11]),x(b,D,U)}}),{lay:e,add:f,remove:d,marks:s}}var rs={route:"#D2872C",team:"#3F8F9C",enemy:"#B5462F",atk:"#D2452F",fire:"#EC6E2A",see:"#E7A537",main:"#2B3331",alt:"#7C6FA0",pig:"#5A4A46",er:"#B5543C"};function Gx(n){let t=[],e=null;for(let i=1;i<n.length;i++){let s=n[i][3]===1;(!e||e.air!==s)&&(e={air:s,pts:[n[i-1].slice(0,3)]},t.push(e)),e.pts.push(n[i].slice(0,3))}return t}function oo(n,t,e,i={}){var r;let s=new Ht;for(let o of Gx(n))o.pts.length<2||o.pts.reduce((l,c,h)=>h?l+Math.hypot(c[0]-o.pts[h-1][0],c[1]-o.pts[h-1][1],c[2]-o.pts[h-1][2]):0,0)<.05||s.add(o.air||i.dash?tr(o.pts,e*.8,t,{dash:i.dash||[.6,.45],xray:i.xray,opacity:i.opacity}):tr(o.pts,e,t,{every:(r=i.every)!=null?r:7,xray:i.xray,opacity:i.opacity}));return s}function tf(n,t,e={}){let i=Tl(n,t),s=new Ht;s.name="show",n.scene.add(s);let r={route:!0,marks:!0,units:!0,labels:!0},o=e.names||[],a=-1,l=-1,c=null,h=[],u=[],f=[],d=e.quests||[],p=new Ht,x={};p.name="amb",s.add(p);for(let L of e.amb||[]){let U=L.k==="pig"?ro():so(L.k);U.root.position.set(...L.p),U.root.rotation.y=L.yaw||0,U.pose(L.pose||"idle",1.3,{u:.5,d:.4}),p.add(U.root),x[L.id]=U.root}function g(){let L=d[a],U=new Set([...L&&L.hide||[],...L&&l>=0&&L.methods[l].hide||[]]);for(let[N,H]of Object.entries(x))H.visible=r.units&&!U.has(N)}d.forEach((L,U)=>{let N=i.add("bs-phm zx-pin"+(L.c?" c-"+L.c:""),`<b>${U+1}</b><span>${L.short}</span>`,L.pin,!0);N.e.addEventListener("click",H=>{H.stopPropagation(),e.onQuest&&e.onQuest(U)}),N.on=!0,u.push(N)});function m(){c&&(s.remove(c),c.traverse(L=>{L.geometry&&!L.geometry.userData.keep&&L.geometry.dispose()}),c=null);for(let L of h)i.remove(L);h=[]}function y(){for(let L of f)i.remove(L);f=[]}let v=L=>rs[L]||rs.route,_=L=>L.at||L.labs&&L.labs[0]&&L.labs[0][1]||L.routes&&L.routes[0]&&L.routes[0].pts.slice(-1)[0].slice(0,3)||[0,0,0];function S(){y();let L=d[a];L&&L.methods.forEach((U,N)=>{let H=(o[a]||[])[N]||"",B=i.add(`bs-phm zx-mp c-${U.c||"route"}`,`<b>${N+1}</b>${H?`<span>${H}</span>`:""}`,_(U),!0);B.e.addEventListener("click",Y=>{Y.stopPropagation(),e.onMethod&&e.onMethod(a,N)}),B.on=r.marks,f.push(B)})}function A(){m(),c=new Ht,s.add(c),g();let L=d[a];if(!L){if(e.ovRoutes)for(let H of d)for(let B of H.methods)for(let Y of B.routes||[]){let k=oo(Y.pts.map(X=>[X[0],X[1]+.12,X[2],X[3]||0]),v(Y.c||B.c||H.c),.12*(e.ovK||1),{every:6,xray:.2,opacity:.85,dash:Y.dash?[.6,.45]:null});k.visible=r.route,k.userData.route=1,c.add(k)}n.shadowDirty();return}let U=l>=0&&L.methods[l].cam?L.methods[l].cam.r:L.cam.r,N=Math.max(1,Math.min(2.8,U/28));L.methods.forEach((H,B)=>{let Y=l<0||l===B,k=l<0?.9:Y?.95:.16;for(let X of H.routes||[]){let V=oo(X.pts.map(et=>[et[0],et[1]+.12,et[2],et[3]||0]),v(X.c||H.c),(Y?.13:.085)*N,{every:6,xray:.2,opacity:k,dash:X.dash?[.6*N,.45*N]:null});V.visible=r.route,V.userData.route=1,c.add(V)}if(l===B){for(let X of H.units||[]){let V=X.k==="pig"?ro():so(X.k);V.root.position.set(...X.p),V.root.rotation.y=X.yaw||0,V.pose(X.pose||"idle",1.3,{u:.5,d:0}),X.hold&&V.hold(X.hold),V.root.visible=r.units,V.root.userData.unit=1,c.add(V.root)}for(let[X,V,et]of H.labs||[]){let Tt=i.add("bs-lab k-"+(et||"note"),(et==="item"?"<i>\u25C6</i>":"")+X,V);Tt.on=r.labels,h.push(Tt)}}}),f.forEach((H,B)=>{H.e.classList.toggle("on",B===l),H.e.classList.toggle("dim",l>=0&&B!==l)}),n.shadowDirty()}function E(L,U={}){if(a=L,l=-1,u.forEach((H,B)=>{H.on=r.marks&&L<0,H.e.classList.toggle("on",B===L)}),L<0){m(),y(),n.setEnv(e.ovEnv||{}),U.fly!==!1&&n.setView("ov"),n.animUntil=performance.now()+1600,A();return}let N=d[L];n.setEnv(N.env||{}),U.fly!==!1&&(n.controls.flyTo({th:N.cam.th,ph:N.cam.ph,r:N.cam.r,t:new F(...N.cam.t)},1.3),n.animUntil=performance.now()+1600),S(),A()}function I(L,U,N={}){L!==a&&E(L,{fly:!1}),l=U;let H=d[a].methods[U];H&&H.env?n.setEnv(H.env):n.setEnv(d[a].env||{}),H&&H.cam&&N.fly!==!1&&(n.controls.flyTo({th:H.cam.th,ph:H.cam.ph,r:H.cam.r,t:new F(...H.cam.t)},1.1),n.animUntil=performance.now()+1400),A()}function M(L,U){r[L]=U,c&&c.traverse(N=>{N.userData.route&&L==="route"&&(N.visible=U),N.userData.unit&&L==="units"&&(N.visible=U)}),L==="units"&&g(),L==="labels"&&h.forEach(N=>{N.on=U}),L==="marks"&&(u.forEach(N=>{N.on=U&&a<0}),f.forEach(N=>{N.on=U})),n.invalidate()}function b(){let L=d[a];if(!L){n.setView("ov");return}let U=l>=0&&L.methods[l].cam?L.methods[l].cam:L.cam;n.controls.flyTo({th:U.th,ph:U.ph,r:U.r,t:new F(...U.t)},1.1),n.animUntil=performance.now()+1400}return A(),{setQuest:E,setMethod:I,setLayer:M,frame:b,dispose:()=>{m(),y(),i.lay.remove(),n.scene.remove(s)},overview:()=>E(-1),get quest(){return a},get method(){return l},count:d.map(L=>L.methods.length)}}var Cn=n=>Math.max(0,Math.min(1,n)),gh=n=>n*n*(3-2*n),Ii=(n,t,e)=>n+(t-n)*e,nf=(n,t,e)=>{let i=t-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return n+i*e},Wx=["fall","jump","climb","mantle","swim","tread","ko","sleep","sit","eat","dizzy","slump","ride"],ef=.3;function Xx(n){let t=[],e=[0],i=0;n.forEach((r,o)=>{let a=r[5]||{};if(a.face!=null)i=typeof a.face=="number"?a.face:Math.atan2(a.face[0]-r[1],a.face[1]-r[3]);else if(o>0){let l=n[o-1],c=r[1]-l[1],h=r[3]-l[3];Math.hypot(c,h)>.05&&(i=Math.atan2(c,h))}if(t.push(i),o>0){let l=n[o-1];e.push(e[o-1]+(a.cut?0:Math.hypot(r[1]-l[1],r[3]-l[3])))}});let s=r=>{let o="";for(let a=0;a<=r&&a<n.length;a++){let l=n[a][5];l&&l.hold!==void 0&&(o=l.hold)}return o};return r=>{let o=n.length,a=0;for(;a<o&&n[a][0]<=r;)a++;let l=!0;for(let g=0;g<a;g++){let m=n[g][5];m&&m.hide&&(l=!1),m&&m.show&&(l=!0)}if(a===0)return{x:n[0][1],y:n[0][2],z:n[0][3],pose:n[0][4],prev:n[0][4],w:1,u:0,d:0,yaw:t[0],vis:l,air:!1,hold:s(0)};if(a>=o){let g=n[o-1];return{x:g[1],y:g[2],z:g[3],pose:g[4],prev:n[Math.max(0,o-2)][4],w:Cn((r-g[0])/ef+1),u:1,d:e[o-1],yaw:t[o-1],vis:l,air:!1,hold:s(o-1)}}let c=n[a-1],h=n[a],u=h[5]||{},f=h[0]-c[0],d=f>0?Cn((r-c[0])/f):1,p=d;u.ease&&(d=gh(d));let x=Ii(c[2],h[2],u.fall?d*d:d);return u.arc&&(x+=4*u.arc*d*(1-d)),{x:Ii(c[1],h[1],d),y:x,z:Ii(c[3],h[3],d),pose:h[4],prev:c[4],w:Cn((r-c[0])/ef),u:p,d:Ii(e[a-1],e[a],d),yaw:nf(t[a-1],t[a],Cn((r-c[0])/.25)),vis:l,air:!!(u.arc||u.fall),hold:s(a-1)}}}var Rl=(n,t,e)=>{if(!n||!n.length)return e;let i=0;for(;i<n.length&&n[i][0]<=t;)i++;if(i===0)return n[0][1];if(i>=n.length)return n[n.length-1][1];let[s,r]=n[i-1],[o,a]=n[i];return Ii(r,a,gh(Cn((t-s)/(o-s))))},mh=(n,t,e)=>{let i=e;for(let[s,r]of n||[])t>=s&&(i=r);return i},di=(n,t,e)=>n>=t&&n<e;function qx(n,t,e,i){let s=0,r=i;for(let o=0;o<3;o++){let a=e[o],l=e[o+3],c=[n.x,n.y,n.z][o],h=[t.x,t.y,t.z][o];if(Math.abs(h)<1e-9){if(c<a||c>l)return 1/0;continue}let u=(a-c)/h,f=(l-c)/h;if(u>f&&([u,f]=[f,u]),s=Math.max(s,u),r=Math.min(r,f),s>r)return 1/0}return s}function sf(n,t,e={}){let i=Tl(n,t),s=new Ht;s.name="stage",n.scene.add(s);let r=document.createElement("div");r.className="bs-mask",r.innerHTML="<span></span>",t.appendChild(r);let o=document.createElement("div");o.className="zx-hud",o.innerHTML='<div class="zx-obj" hidden><span class="k">\u76EE\u6807</span><b></b><span class="tod"></span></div><div class="zx-item" hidden></div><span class="zx-proto">\u539F\u578B\u5360\u4F4D\u754C\u9762 \xB7 \u793A\u610F</span>',t.appendChild(o);let a=o.querySelector(".zx-obj"),l=o.querySelector(".zx-item"),c=null,h=null,u=0,f=!1,d=!0,p=0,x={},g=[],m=[],y=[],v=[],_=[],S=[],A=null,E=-1,I="",M="",b="-",D=T=>{let rt=c&&c.ch||[0],nt=0;for(;nt+1<rt.length&&rt[nt+1]<=T+1e-6;)nt++;return nt},L=(T,rt,nt)=>T.traverse(it=>{if(it.material){let ot=it.renderOrder===5;it.material.opacity=ot?nt:rt,it.material.transparent=!0,it.visible=!ot||nt>0}}),U=(T,rt=0)=>()=>{let nt=x[T];return new F(nt.F.root.position.x,nt.F.root.position.y+rt,nt.F.root.position.z)},N=(T,rt,nt)=>typeof T=="string"?U(T,rt):[T,rt,nt];function H(){for(let T of[...s.children])s.remove(T),T.traverse(rt=>{rt.geometry&&!rt.geometry.userData.keep&&rt.geometry.dispose()});for(let T of[...y,..._])i.remove(T.m);x={},g=[],m=[],y=[],v=[],_=[],S=[],A=null,E=-1,I="",M="",b="-",a.hidden=!0,l.hidden=!0}let B=null,Y=T=>{if(!B){let it=new ts;eo(it,"v",0,0,0,0,"#5D6B6E",!0),B=Object.values(it.out()).map(ot=>{let q=Ml(ot);return q.userData.keep=!0,q})}let rt=new Ht,nt=new Tn({vertexColors:!0,roughness:.85});for(let it of B){let ot=new ee(it,nt);ot.castShadow=!0,ot.receiveShadow=!0,rt.add(ot)}return{root:rt,ring:new He,pose(){},hold(){}}};function k(){for(let[T,rt]of Object.entries(c.act)){let nt=rt.k==="pig"?ro(rt):rt.k==="truck"?Y():so(rt.k,rt);s.add(nt.root),x[T]={F:nt,at:Xx(rt.keys),k:rt.k}}if(c.route!==!1&&c.act.p){let T=[],rt=null;c.act.p.keys.forEach((nt,it)=>{let ot=nt[5]||{},q=D(nt[0]),K=[nt[1],nt[2]+.12,nt[3],it&&(ot.arc||ot.fall||/climb|mantle|swim/.test(nt[4]))?1:0];if(!rt||ot.cut){rt={c:q,pts:[K]},T.push(rt);return}if(q!==rt.c){let vt=rt.pts[rt.pts.length-1];rt={c:q,pts:[[vt[0],vt[1],vt[2],0]]},T.push(rt)}let ut=rt.pts[rt.pts.length-1];Math.hypot(ut[0]-K[0],ut[1]-K[1],ut[2]-K[2])>.05&&rt.pts.push(K)}),A=[];for(let nt of T){if(nt.pts.length<2)continue;let it=oo(nt.pts,rs.route,.1,{every:5,xray:.2,opacity:.62});it.userData.c=nt.c,it.visible=!1,s.add(it),A.push(it)}E=-1}for(let[T,rt,nt,it,ot]of c.trk||[]){let q=oo(T.map(K=>[K[0],K[1]+.12,K[2],K[3]||0]),rt||rs.team,.09,{every:5,xray:.18,opacity:.55,dash:nt?[.7,.5]:null});s.add(q),S.push({g:q,t0:it!=null?it:-1,t1:ot!=null?ot:1e9})}for(let T of c.fx||[]){let[rt,nt,it,ot,q,K,ut,vt]=T,Z=null;it==="fire"?Z=Al(ut||1.5,3):it==="spark"?Z=Xd(ut||1,vt):it==="shock"?Z=qd(ut||4,vt):it==="rings"?Z=Yd(ut||9,vt):it==="spray"?Z=Zd(ut||[0,0,1],vt||3):it==="puff"?Z=$d(ut||1.2,vt):it==="stars"?Z=jd():it==="spot"&&(Z=Qd(ut||1,vt)),Z&&(typeof ot!="string"&&Z.position.set(ot,q,K),Z.visible=!1,s.add(Z),g.push({t0:rt,t1:nt,kind:it,g:Z,ref:typeof ot=="string"?ot:null,dy:typeof ot=="string"?q:0}))}for(let[T,rt,nt,it,ot,q]of c.proj||[]){let K=Jd(nt);K.visible=!1,s.add(K),v.push({t0:T,t1:rt,g:K,a:it,b:ot,h:q!=null?q:1.2})}for(let[T,rt,nt,it,ot,q]of c.arr||[]){let K=rs[ot]||rs.atk,ut=ot==="see"?[.35,.3]:null,vt=Array.isArray(nt[0])?tr(nt,.1,K,{dash:ut,every:999,last:!0,xray:.3}):Kd(nt,it,K,{dash:ut,r:.08,arc:ot==="see"?.02:.12,...q||{}});vt.visible=!1,s.add(vt),m.push({t0:T,t1:rt,g:vt})}for(let T of c.lab||[]){let[rt,nt,it,ot,q,K,ut]=T,vt=i.add("bs-lab k-"+(ut||"note"),(ut==="item"?"<i>\u25C6</i>":"")+it,N(ot,q,K));y.push({t0:rt,t1:nt,m:vt})}for(let T of c.hud||[]){if(T[0]==="key"){let[,rt,nt,it,ot,q,K,ut]=T,vt=i.add("bs-lab zx-key",`<kbd>${it}</kbd>${ot}`,N(q,K,ut));y.push({t0:rt,t1:nt,m:vt})}if(T[0]==="menu"){let[,rt,nt,it,ot,q,K,ut]=T,vt=i.add("bs-lab zx-menu","",N(q,K,ut));_.push({t0:rt,t1:nt,m:vt,opts:it,sel:ot,cur:-2})}}}function X(){if(!c)return;let T=u,rt=c.env||{},nt={cut:mh(rt.cuts,T,rt.cut||{}),lids:mh(rt.lidsK,T,rt.lids||[]),night:Rl(rt.night,T,0),cis:Rl(rt.cis,T,void 0),dyn:{}};if(rt.wl){nt.wl={};for(let[Z,C]of Object.entries(rt.wl))nt.wl[Z]=Rl(C,T,void 0)}for(let[Z,C]of Object.entries(rt.dyn||{}))nt.dyn[Z]=Rl(C,T,0);nt.cis===void 0&&delete nt.cis,n.setEnv(nt),ct=nt.cut||{};for(let Z of Object.values(x)){let C=Z.at(T),w=Z.F;w.root.visible=C.vis,w.root.position.set(C.x,C.y,C.z),w.root.rotation.y=C.yaw,w.pose(C.pose||"idle",T,{d:C.d,u:C.u,prev:C.prev,w:C.w}),w.hold(C.hold),w.ring.visible=!Wx.includes(C.pose)&&!C.air&&C.vis}for(let Z of g){let C=di(T,Z.t0,Z.t1);if(Z.g.visible=C,!C)continue;let w=T-Z.t0,z=Z.g;if(Z.ref){let Q=U(Z.ref,Z.dy)();z.position.copy(Q)}z.userData.tick?(z.userData.tick(T),Z.kind==="fire"&&z.scale.setScalar(.25+.75*Cn(w/.4))):z.userData.at&&z.userData.at(Cn(w/(Z.t1-Z.t0)))}for(let Z of v){let C=di(T,Z.t0,Z.t1);if(Z.g.visible=C,!C)continue;let w=Cn((T-Z.t0)/(Z.t1-Z.t0)),z=typeof Z.a=="string"?U(Z.a,1.5)():new F(...Z.a),Q=new F(...Z.b);Z.g.position.lerpVectors(z,Q,w),Z.g.position.y+=4*Z.h*w*(1-w),Z.g.rotation.set(T*9,T*7,0),Z.g.userData.tick&&Z.g.userData.tick(T)}for(let Z of m)Z.g.visible=di(T,Z.t0,Z.t1);for(let Z of S)Z.g.visible=di(T,Z.t0,Z.t1);if(A){let Z=D(T);if(Z!==E){E=Z;for(let C of A)C.visible=C.userData.c<=Z,C.visible&&L(C,C.userData.c===Z?.62:.2,C.userData.c===Z?.22:0)}}for(let Z of y)Z.m.on=di(T,Z.t0,Z.t1);for(let Z of _){if(Z.m.on=di(T,Z.t0,Z.t1),!Z.m.on)continue;let C=mh(Z.sel,T,-1);C!==Z.cur&&(Z.cur=C,Z.m.e.innerHTML=Z.opts.map((w,z)=>`<span class="${z===C?"on":""}">${w}</span>`).join(""),Z.m.w=0)}let it=null;for(let Z of c.hud||[])Z[0]==="obj"&&T>=Z[1]&&(it=Z);let ot=it?it[2]+"|"+(it[3]||""):"";ot!==I&&(I=ot,a.hidden=!it,it&&(a.querySelector("b").textContent=it[2],a.querySelector(".tod").textContent=it[3]||"",a.classList.remove("flash"),a.offsetWidth,f&&a.classList.add("flash")));let q=null;for(let Z of c.hud||[])Z[0]==="item"&&di(T,Z[1],Z[2])&&(q=Z);let K=q?q[3]:"";if(K!==M&&(M=K,l.hidden=!q,q&&(l.innerHTML=`<i>\u25C6</i>${q[3]}`)),e.onHud){let Z=new Set;for(let w of c.hud||[])w[0]==="obj"?w[1]>.05&&di(T,w[1],w[1]+2.4)&&Z.add("obj"):di(T,w[1],w[2])&&Z.add(w[0]);for(let[w,z]of Object.entries(x)){if(w==="p"||w==="truck"||!z.at)continue;let Q=z.at(T),at=z.at(Math.max(0,T-.3));if(Q.vis&&Math.hypot(Q.x-at.x,Q.z-at.z)>.12){Z.add("move");break}}let C=[...Z].sort().join(",");C!==b&&(b=C,e.onHud(Z))}let ut=0,vt="";for(let[Z,C,w]of c.mask||[])T>=Z-.25&&T<C+.25&&(ut=Math.max(ut,Math.min(Cn((T-Z+.25)/.25),Cn((C+.25-T)/.25))),vt=w);r.style.opacity=ut.toFixed(3),r.style.display=ut>0?"":"none",vt&&r.firstChild.textContent!==vt&&(r.firstChild.textContent=vt),d&&c.cam&&performance.now()>p&&Dt(T,!0),n.shadowDirty(),e.onT&&e.onT(c.dur?T/c.dur:0)}let V=(T,rt)=>{let nt=x[T],it=0,ot=0,q=0,K=0,ut=0;for(let vt=0;vt<5;vt++){let Z=nt.at(Math.max(0,rt-vt*.15));it+=Z.x,ot+=Z.y,q+=Z.z,K+=Math.sin(Z.yaw),ut+=Math.cos(Z.yaw)}return{p:[it/5,ot/5,q/5],yaw:Math.atan2(K,ut)}},et=(T,rt)=>{var ot;let nt=T.t,it=T.th;if(typeof T.t=="string"){let q=V(T.t,rt);nt=[q.p[0],q.p[1]+((ot=T.dy)!=null?ot:1.2),q.p[2]],T.back&&(it=q.yaw+Math.PI+(T.th||0))}return{t:nt,r:T.r,ph:T.ph,th:it,occ:T.occ}};function Tt(T){let rt=c.cam,nt=0;for(;nt<rt.length&&rt[nt][0]<=T;)nt++;if(nt===0)return et(rt[0][1],T);if(nt>=rt.length)return et(rt[rt.length-1][1],T);let[it,ot]=rt[nt-1],[q,K]=rt[nt],ut=gh(Cn((T-it)/(q-it))),vt=et(ot,T),Z=et(K,T);return{t:vt.t.map((C,w)=>Ii(C,Z.t[w],ut)),r:Math.exp(Ii(Math.log(vt.r),Math.log(Z.r),ut)),ph:Ii(vt.ph,Z.ph,ut),th:nf(vt.th,Z.th,ut),occ:ut<.5?vt.occ:Z.occ}}let Vt=n.camera.fov,Qt=T=>{let rt=t.clientWidth/Math.max(1,t.clientHeight),nt=rt<1.25?2*Math.atan(Math.tan(Vt*Math.PI/360)*1.25/rt)*180/Math.PI:Vt;return Math.abs(n.camera.fov-nt)>.05&&(n.camera.fov=nt,n.camera.updateProjectionMatrix()),T},Zt=new F,st=new F,ct={};function bt(T,rt){let nt=T.r;for(let it=0;it<3;it++){let ot=it?Tt(Math.max(0,rt-it*.2)):T;Zt.set(...ot.t),st.set(Math.sin(ot.ph)*Math.sin(ot.th),Math.cos(ot.ph),Math.sin(ot.ph)*Math.cos(ot.th));for(let q of n.world.st.BLOCK){let K=q[6]!=null?ct[q[6]]:void 0,ut=K==null?q:[q[0],q[1],q[2],q[3],K<0?-99:Math.min(q[4],K),q[5]],vt=qx(Zt,st,ut,ot.r);vt<1/0&&vt>.3&&(nt=Math.min(nt,Math.max(2.4,vt-.5)))}}return nt}function Dt(T,rt){let nt=Tt(T),it=Qt(nt);nt.occ&&(it.r=Math.min(it.r,bt(it,T)));let ot={th:it.th,ph:it.ph,r:it.r,t:new F(...it.t)};rt?n.controls.set(ot,!0):n.controls.flyTo(ot,.9)}n.onFrame(T=>{!f||!c||(u=Math.min(c.dur,u+T*(c.speed||1)),X(),u>=c.dur&&(Wt(),e.onEnd&&e.onEnd()))});function Et(){c&&(u>=c.dur-.001&&(u=0),f=!0,n.animating=!0,e.onPlay&&e.onPlay(!0))}function Wt(){f=!1,n.animating=!1,n.invalidate(),e.onPlay&&e.onPlay(!1)}n.onUserStart(()=>{d&&(d=!1,e.onFollow&&e.onFollow(!1))});function ge(T,rt={}){io[T]&&(Wt(),H(),h=T,c=io[T],u=0,d=!0,e.onFollow&&e.onFollow(!0),n.setShadowBox(c.sb||null),k(),rt.fly&&c.cam?(Dt(0,!1),p=performance.now()+950,n.animUntil=p+150):p=0,X())}return{load:ge,play:Et,pause:Wt,isPlaying:()=>f,setT(T,rt={}){c&&(u=Cn(T)*c.dur,rt.cam!==!1&&c.cam&&(d||(d=!0,e.onFollow&&e.onFollow(!0)),rt.fly?(Dt(u,!1),p=performance.now()+950,n.animUntil=p+150):p=0),X(),n.invalidate())},get t(){return c?u/c.dur:0},get id(){return h},get follow(){return d},setFollow(T){d=T,T&&c&&(Dt(u,!1),p=performance.now()+950,n.animUntil=p+150),e.onFollow&&e.onFollow(T)},resetView(){this.setFollow(!0)},info:T=>{let rt=io[T||h];return rt?{dur:rt.dur,ch:rt.ch}:null},scenes:Object.keys(io),dispose(){Wt(),H(),r.remove(),o.remove(),i.lay.remove(),n.scene.remove(s)}}}var Hn=Math.PI,tn=(n,t={})=>({pts:n.map(e=>e.length>3?e:[...e,0]),...t}),Li={cut:{S8r:-1,S8:2.7}},rf=[{id:"dr",k:"s",p:[-6.8,.15,11.5],yaw:Hn,pose:"sit"},{id:"xm",k:"v",p:[4.6,.15,11.3],yaw:Hn,pose:"idle"},{id:"hg",k:"g",p:[9.1,.15,10],yaw:-Hn/2,pose:"guard"},{id:"pt1",k:"n",p:[-9.3,.15,7.6],yaw:Hn/2,pose:"sit"},{id:"pt2",k:"v",p:[-7.9,.15,6.1],yaw:0,pose:"sit"},{id:"vd",k:"m",p:[-4.6,.15,5.12],yaw:Hn,pose:"idle"},{id:"yg1",k:"g",p:[8.7,.15,28.2],yaw:Hn/2,pose:"guard"},{id:"yg2",k:"g",p:[1.6,.15,25.4],yaw:-.8,pose:"look"},{id:"wk",k:"a",p:[3.2,.15,24.45],yaw:Hn,pose:"valve"},{id:"gm1",k:"l",p:[15.2,0,22.2],yaw:-Hn/2,pose:"cross"},{id:"gm2",k:"l",p:[15,0,25.6],yaw:-2.2,pose:"idle"},{id:"ps1",k:"n",p:[12.3,0,20.6],yaw:1,pose:"talk"},{id:"ps2",k:"v",p:[13.2,0,21.4],yaw:-2.2,pose:"talk"},{id:"ps3",k:"n",p:[-9,0,.8],yaw:Hn/2,pose:"walk"},{id:"dk1",k:"l",p:[5.4,-3.77,46.4],yaw:.4,pose:"cross"},{id:"dk2",k:"l",p:[9.6,-3.77,47.4],yaw:-2.6,pose:"idle"},{id:"bt",k:"w",p:[17,-3.9,46.6],yaw:-1.6,pose:"idle"}],of=[{short:"\u67DC\u53F0\u4E70\u836F",c:"main",pin:[3,3.6,9.4],cam:{t:[3.5,1,12],r:24,ph:.76,th:2.65},env:Li,methods:[{c:"main",routes:[tn([[1.2,0,-1.2],[.6,.15,5],[1.6,.15,7.6],[3,.15,9.3]]),tn([[4.6,.15,11.3],[7,.15,11.4],[8.1,.15,12],[8.1,.15,14],[6.6,.15,16]],{c:"alt",dash:1})],units:[{k:"p",p:[3,.15,9.35],yaw:0,pose:"talk"},{k:"v",p:[6.4,.15,15.9],yaw:-.69,pose:"pick"}],hide:["xm"],labs:[["\u67DC\u53F0\uFF1A\u660E\u7801\u6807\u4EF7\uFF0C\u82B1\u8D39\u6700\u5927",[2.8,2.6,9.4]],["\u836F\u7AE5\u8FDB\u91CC\u95F4\u5E93\u623F\u6293\u836F",[8,2.4,14.4]],["\u836F\u653E\u5728\u54EA\uFF0C\u4E70\u4E00\u6B21\u5C31\u770B\u89C1\u4E86",[5.5,1.5,17],"item"]],cam:{t:[4.5,1,12.5],r:22,ph:.72,th:2.55}}]},{short:"\u5077\u7A83",c:"route",pin:[6.4,3.4,16.6],cam:{t:[5.5,1,13.5],r:25,ph:.74,th:2.35},env:Li,methods:[{c:"route",routes:[tn([[3,.15,9.3],[7.4,.15,9.4],[8.3,.15,11],[8.1,.15,12.5],[7.8,.15,14.6],[6.2,.15,17.9]])],units:[{k:"p",p:[6,.15,17.95],yaw:-2.66,pose:"steal"},{k:"g",p:[9.1,.15,9.6],yaw:Hn,pose:"look"}],hide:["hg"],labs:[["\u8D81\u5B88\u536B\u8F6C\u8EAB\uFF0C\u4ECE\u67DC\u53F0\u4E1C\u5934\u6E9C\u8FDB\u91CC\u95F4",[8.6,2.6,11]],["\u7EA2\u6F06\u836F\u7BB1",[5.5,1.5,17],"item"]],cam:{t:[6.5,1,14],r:21,ph:.72,th:2.3}},{c:"route",routes:[tn([[6.2,.15,17.9],[7.8,.15,14.6],[8.1,.15,12.5],[7.6,.15,9]],{c:"atk"})],units:[{k:"p",p:[6.9,.15,8.6],yaw:1.31,pose:"fists"},{k:"g",p:[8.4,.15,9],yaw:-1.83,pose:"punch"},{k:"g",p:[6.6,.15,7],yaw:.18,pose:"fists"}],hide:["hg"],labs:[["\u5931\u624B\u3001\u8D8A\u754C\u3001\u88AB\u53D1\u73B0\uFF1A\u5B88\u536B\u52A8\u624B",[7.6,2.7,8.6]],["\u6253\u4E86\u4EFB\u4F55\u4EBA\u3001\u5728\u8B66\u6212\u533A\u88AB\u770B\u89C1\uFF0C\u90FD\u4F1A\u53EB\u6765\u5B88\u536B",[-.5,2.7,7.4]]],cam:{t:[5,1,9.5],r:20,ph:.8,th:2.8}}]},{short:"\u6025\u75C7",c:"er",pin:[-7.4,3.4,15.6],cam:{t:[-5,1,11.5],r:27,ph:.76,th:3.5},env:Li,methods:[{c:"er",routes:[tn([[-4.6,.15,3.9],[-1,.15,4.6],[-.4,.15,6.4],[-4,.15,8.8],[-6.8,.15,9.2]])],units:[{k:"p",p:[-4.6,.15,3.85],yaw:0,pose:"stagger"}],labs:[["\u95E8\u53E3\u5C1D\u836F\uFF1A\u559D\u4E0B\u53BB\uFF0C\u8840\u91CF\u6389\u5230\u4E00\u534A\u4EE5\u4E0B",[-4.6,2.6,4.4]],["\u8840\u91CF\u4F4E\u4E8E 50% \u624D\u80FD\u770B\u6025\u75C7",[-6.8,2.4,10.4]]],cam:{t:[-4,1,6.5],r:20,ph:.84,th:3.3}},{c:"er",routes:[tn([[-16,0,1.6],[-8,0,1.4],[-1,.15,4.6]],{dash:1}),tn([[-1,.15,4.6],[-.4,.15,6.4],[-4,.15,8.8],[-6.8,.15,9.2]]),tn([[-6.8,.15,9.6],[-3.5,.15,11.4],[-3.5,.15,13.4],[-3.6,.15,15.7],[-6.2,.15,15.7],[-8.2,.15,16.6]]),tn([[-6.6,.15,16],[-3.5,.15,16.2],[-3.4,.15,18.1],[-1.4,.15,18.1],[4.6,.15,17.9]],{c:"alt",dash:1})],units:[{k:"p",p:[-8.5,.15+.55,17.3],yaw:Hn/2,pose:"sleep"},{k:"s",p:[-7.1,.15,16.4],yaw:-1,pose:"talk"}],hide:["dr"],labs:[["\u6454\u4F24\u3001\u6253\u67B6\u53D7\u4F24\u3001\u5403\u4E86\u6709\u6BD2\u7684\u4E1C\u897F\u4E5F\u7B97",[-12,2.6,1.4]],["\u5927\u592B\u5E26\u8FDB\u8BCA\u5BA4",[-8.4,2.4,15.6]],["\u5927\u592B\u53BB\u5E93\u623F\u6293\u836F\uFF0C\u5E93\u623F\u95E8\u5C31\u5728\u8FC7\u9053\u8FB9",[-1.2,2.4,18.1],"item"]],cam:{t:[-4.5,1,15],r:22,ph:.72,th:3.4}}]},{short:"\u540E\u9662",c:"team",pin:[2.5,3.4,26.5],cam:{t:[6,1,25],r:34,ph:.78,th:-1.1},env:Li,methods:[{c:"team",routes:[tn([[12.8,0,1],[12.8,0,12],[12,0,20.4],[11.7,0,21.8]])],units:[{k:"p",p:[11.7,0,21.9],yaw:2.28,pose:"listen"}],labs:[["\u8DEF\u4EBA\u95F2\u804A\uFF1A\u300C\u836F\u5802\u540E\u9662\u5728\u71AC\u836F\u300D",[12.8,2.6,20.8]],["\u71AC\u597D\u7684\u836F",[4.4,1.7,26.6],"item"]],cam:{t:[11,1,21.5],r:22,ph:.76,th:-1.35}},{c:"team",routes:[tn([[9.4,.15,28.2],[11.6,0,27.6],[14,0,25],[15.2,0,23.9]]),tn([[8.6,.15,28.2],[11.2,0,27],[13.4,0,24.8]],{c:"enemy",dash:1})],units:[{k:"p",p:[12.4,0,22.6],yaw:.54,pose:"look"},{k:"g",p:[13.6,0,24.6],yaw:2.19,pose:"fists"},{k:"l",p:[15,0,23.6],yaw:-.95,pose:"punch"},{k:"l",p:[15.3,0,25.2],yaw:-1.91,pose:"fists"}],hide:["yg1","gm1","gm2"],labs:[["\u628A\u5B88\u536B\u5F15\u5230\u5E2E\u6D3E\u95E8\u53E3\uFF0C\u8BA9\u4ED6\u4EEC\u6253\u8D77\u6765",[14,2.8,24.4]]],cam:{t:[13,1,25],r:22,ph:.74,th:-1.3}},{c:"team",env:{...Li,night:.85},routes:[tn([[12.4,0,30.4],[11.2,0,28.6],[9.4,.15,28.2],[4,.15,28.6],[1.8,.15,29.4]])],units:[{k:"p",p:[1.6,.15,29.55],yaw:-1.07,pose:"drop"}],hide:["yg1","yg2","wk"],labs:[["\u591C\u91CC\uFF1A\u5F80\u5B88\u536B\u7684\u996D\u91CC\u4E0B\u836F",[.4,2.3,30.2],"item"]],cam:{t:[3,1,28.5],r:20,ph:.74,th:-.7}},{c:"team",routes:[tn([[12.4,0,30.4],[11.2,0,28.6],[7.4,.15,28.1]],{c:"atk"})],units:[{k:"p",p:[6.8,.15,28.1],yaw:-1.6,pose:"punch"},{k:"g",p:[5.4,.15,27.9],yaw:1.5,pose:"fists"},{k:"g",p:[6,.15,29.6],yaw:2.65,pose:"kick"}],hide:["yg1","yg2"],labs:[["\u786C\u95EF\uFF1A\u548C\u540E\u9662\u4E24\u4E2A\u5B88\u536B\u6253",[5.8,2.8,28.4]]],cam:{t:[6.5,1,28],r:19,ph:.76,th:-1.2}}]},{short:"\u7801\u5934",c:"alt",pin:[7,-1,46.4],cam:{t:[12,-1.5,38],r:38,ph:.8,th:-.55},env:Li,methods:[{c:"alt",routes:[tn([[12.8,0,1],[12.8,0,30],[13.6,0,36.6],[17,0,38.6],[17,0,41.4],[18.2,0,41.4],[23.8,-3.8,41.4],[24.4,-3.8,42.9],[14.4,-3.8,43],[9.6,-3.8,44.6]])],units:[{k:"p",p:[17,0,39.2],yaw:0,pose:"walk"}],labs:[["\u5230\u4E86\u65F6\u8FB0\uFF0C\u5E2E\u6D3E\u5728\u7801\u5934\u6536\u8D27",[7.2,-1.4,46.4]],["\u4E0B\u5230\u7EA4\u9053\u7684\u53F0\u9636",[20.6,1,41.4]]],cam:{t:[11,-1.5,39],r:40,ph:.8,th:-.5}},{c:"alt",routes:[tn([[9.6,-3.8,44.6],[8.4,-3.8,45.6]],{c:"atk"})],units:[{k:"p",p:[8.2,-3.77,45.7],yaw:-1.78,pose:"punch"},{k:"l",p:[6.8,-3.77,45.4],yaw:1.36,pose:"fists"},{k:"l",p:[7.4,-3.77,47],yaw:2.59,pose:"kick"}],hide:["dk1","dk2"],labs:[["\u6253\u8D62\u5C31\u76F4\u63A5\u62FF\u5230\u836F",[6.2,-2,48],"item"]],cam:{t:[7.5,-3.3,46.2],r:17,ph:.9,th:-.45}}]}];return _f(Yx);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
