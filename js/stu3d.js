var STU3D=(()=>{var kc=Object.defineProperty;var cd=Object.getOwnPropertyDescriptor;var ld=Object.getOwnPropertyNames;var hd=Object.prototype.hasOwnProperty;var ud=(i,t)=>{for(var e in t)kc(i,e,{get:t[e],enumerable:!0})},fd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ld(t))!hd.call(i,s)&&s!==e&&kc(i,s,{get:()=>t[s],enumerable:!(n=cd(t,s))||n.enumerable});return i};var dd=i=>fd(kc({},"__esModule",{value:!0}),i);var yx={};ud(yx,{GROUPS:()=>mh,VIEWS:()=>sr,createShow:()=>Xf,createStage:()=>ed,mount:()=>Bf});var Qh=0,Tl=1,jh=2;var Al=1,Sa=2,jn=3,hi=0,fn=1,_n=2,fi=0,ts=1,Rl=2,Cl=3,Il=4,Kh=5,Di=100,tu=101,eu=102,nu=103,iu=104,su=200,ru=201,ou=202,au=203,qo=204,Yo=205,cu=206,lu=207,hu=208,uu=209,fu=210,du=211,pu=212,mu=213,gu=214,Ea=0,wa=1,Ta=2,es=3,Aa=4,Ra=5,Ca=6,Ia=7,Pl=0,xu=1,_u=2,di=0,yu=1,vu=2,Mu=3,bu=4,Su=5,Eu=6,Pa=7;var Dl=300,os=301,as=302,Da=303,La=304,jr=306,Zo=1e3,Pi=1001,Jo=1002,gn=1003,wu=1004;var Kr=1005;var zn=1006,Fa=1007;var Bi=1008;var Wn=1009,Ll=1010,Fl=1011,Xs=1012,Ua=1013,zi=1014,Xn=1015,qs=1016,Na=1017,Oa=1018,Ys=1020,Ul=35902,Nl=35899,Ol=1021,Bl=1022,Pn=1023,Fs=1026,Zs=1027,Ba=1028,za=1029,zl=1030,ka=1031;var Ha=1033,to=33776,eo=33777,no=33778,io=33779,Va=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,Za=37496,Ja=37808,$a=37809,Qa=37810,ja=37811,Ka=37812,tc=37813,ec=37814,nc=37815,ic=37816,sc=37817,rc=37818,oc=37819,ac=37820,cc=37821,lc=36492,hc=36494,uc=36495,fc=36283,dc=36284,pc=36285,mc=36286;var Mr=2300,$o=2301,Xo=2302,pl=2400,ml=2401,gl=2402;var Tu=3200,Au=3201;var kl=0,Ru=1,pi="",En="srgb",ns="srgb-linear",br="linear",ye="srgb";var Ki=7680;var xl=519,Cu=512,Iu=513,Pu=514,Hl=515,Du=516,Lu=517,Fu=518,Uu=519,_l=35044;var Vl="300 es",Bn=2e3,Sr=2001;var ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hc=Math.PI/180,Qo=180/Math.PI;function so(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function pd(i,t){return(i%t+t)%t}function Vc(i,t,e){return(1-e)*i+e*t}function ur(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*v,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let S=Math.sqrt(M),T=Math.atan2(S,p*b);m=Math.sin(m*T)/S,a=Math.sin(a*T)/S}let y=a*b;if(c=c*m+f*y,l=l*m+d*y,h=h*m+g*y,u=u*m+v*y,m===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gc.copy(this).projectOnVector(t),this.sub(Gc)}reflect(t){return this.sub(Gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gc=new z,Eh=new kn,te=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],b=s[1],M=s[4],y=s[7],S=s[2],T=s[5],I=s[8];return r[0]=o*v+a*b+c*S,r[3]=o*m+a*M+c*T,r[6]=o*p+a*y+c*I,r[1]=l*v+h*b+u*S,r[4]=l*m+h*M+u*T,r[7]=l*p+h*y+u*I,r[2]=f*v+d*b+g*S,r[5]=f*m+d*M+g*T,r[8]=f*p+d*y+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wc.makeScale(t,e)),this}rotate(t){return this.premultiply(Wc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wc=new te;function Gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nu(){let i=Er("canvas");return i.style.display="block",i}var wh={};function Us(i){i in wh||(wh[i]=!0,console.warn(i))}function Ou(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Th=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function md(){let i={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ns]:{primaries:t,whitePoint:n,transfer:br,toXYZ:Th,fromXYZ:Ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:Th,fromXYZ:Ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}var ue=md();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vs,jo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vs===void 0&&(vs=Er("canvas")),vs.width=t.width,vs.height=t.height;let s=vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=vs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gd=0,Ns=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=so(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xc(s[o].image)):r.push(Xc(s[o]))}else r=Xc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xd=0,qc=new z,xn=class i extends ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=zn,o=Bi,a=Pn,c=Wn,l=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=so(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zo:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zo:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Dl;xn.DEFAULT_ANISOTROPY=1;var Fe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,y=(d+1)/2,S=(p+1)/2,T=(h+f)/4,I=(u+v)/4,F=(g+m)/4;return M>y&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=I/n):y>S?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=F/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=I/r,s=F/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ko=class extends ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new xn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ns(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Ko{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wr=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ta=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),Eo.subVectors(this.max,fr),Ms.subVectors(t.a,fr),bs.subVectors(t.b,fr),Ss.subVectors(t.c,fr),Ei.subVectors(bs,Ms),wi.subVectors(Ss,bs),Ji.subVectors(Ms,Ss);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Ji.z,Ji.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Ji.z,0,-Ji.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Ji.y,Ji.x,0];return!Yc(e,Ms,bs,Ss,Eo)||(e=[1,0,0,0,1,0,0,0,1],!Yc(e,Ms,bs,Ss,Eo))?!1:(wo.crossVectors(Ei,wi),e=[wo.x,wo.y,wo.z],Yc(e,Ms,bs,Ss,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},si=[new z,new z,new z,new z,new z,new z,new z,new z],Un=new z,So=new Cn,Ms=new z,bs=new z,Ss=new z,Ei=new z,wi=new z,Ji=new z,fr=new z,Eo=new z,wo=new z,$i=new z;function Yc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$i.fromArray(i,r);let a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=t.dot($i),l=e.dot($i),h=n.dot($i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var _d=new Cn,dr=new z,Zc=new z,Li=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Zc)),this.expandByPoint(dr.copy(t.center).sub(Zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ri=new z,Jc=new z,To=new z,Ti=new z,$c=new z,Ao=new z,Qc=new z,Tr=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jc.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(Jc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(To),a=Ti.dot(this.direction),c=-Ti.dot(To),l=Ti.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jc).addScaledVector(To,f),d}intersectSphere(t,e){ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,s,r){$c.subVectors(e,t),Ao.subVectors(n,t),Qc.crossVectors($c,Ao);let o=this.direction.dot(Qc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);let c=a*this.direction.dot(Ao.crossVectors(Ti,Ao));if(c<0)return null;let l=a*this.direction.dot($c.cross(Ti));if(l<0||c+l>o)return null;let h=-a*Ti.dot(Qc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,v,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,vd)}lookAt(t,e,n){let s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ai.crossVectors(n,bn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ai.crossVectors(n,bn)),Ai.normalize(),Ro.crossVectors(bn,Ai),s[0]=Ai.x,s[4]=Ro.x,s[8]=bn.x,s[1]=Ai.y,s[5]=Ro.y,s[9]=bn.y,s[2]=Ai.z,s[6]=Ro.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],M=n[7],y=n[11],S=n[15],T=s[0],I=s[4],F=s[8],_=s[12],x=s[1],E=s[5],P=s[9],L=s[13],R=s[2],C=s[6],O=s[10],W=s[14],D=s[3],k=s[7],G=s[11],J=s[15];return r[0]=o*T+a*x+c*R+l*D,r[4]=o*I+a*E+c*C+l*k,r[8]=o*F+a*P+c*O+l*G,r[12]=o*_+a*L+c*W+l*J,r[1]=h*T+u*x+f*R+d*D,r[5]=h*I+u*E+f*C+d*k,r[9]=h*F+u*P+f*O+d*G,r[13]=h*_+u*L+f*W+d*J,r[2]=g*T+v*x+m*R+p*D,r[6]=g*I+v*E+m*C+p*k,r[10]=g*F+v*P+m*O+p*G,r[14]=g*_+v*L+m*W+p*J,r[3]=b*T+M*x+y*R+S*D,r[7]=b*I+M*E+y*C+S*k,r[11]=b*F+M*P+y*O+S*G,r[15]=b*_+M*L+y*W+S*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+v*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],b=u*m*l-v*f*l+v*c*d-a*m*d-u*c*p+a*f*p,M=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,y=h*v*l-g*u*l+g*a*d-o*v*d-h*a*p+o*u*p,S=g*u*c-h*v*c-g*a*f+o*v*f+h*a*m-o*u*m,T=e*b+n*M+s*y+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return t[0]=b*I,t[1]=(v*f*r-u*m*r-v*s*d+n*m*d+u*s*p-n*f*p)*I,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*p+n*c*p)*I,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*I,t[4]=M*I,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*I,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*I,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*I,t[8]=y*I,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*p-e*u*p)*I,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*I,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*I,t[12]=S*I,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*I,t[14]=(g*a*s-o*v*s-g*n*c+e*v*c+o*n*m-e*a*m)*I,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,v=o*h,m=o*u,p=a*u,b=c*l,M=c*h,y=c*u,S=n.x,T=n.y,I=n.z;return s[0]=(1-(v+p))*S,s[1]=(d+y)*S,s[2]=(g-M)*S,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+M)*I,s[9]=(m-b)*I,s[10]=(1-(f+v))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);let l=1/r,h=1/o,u=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Bn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===Bn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Sr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Bn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===Bn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Sr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Es=new z,Nn=new ve,yd=new z(0,0,0),vd=new z(1,1,1),Ai=new z,Ro=new z,bn=new z,Rh=new ve,Ch=new kn,Hn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Md=0,Ih=new z,ws=new kn,oi=new ve,Co=new z,pr=new z,bd=new z,Sd=new kn,Ph=new z(1,0,0),Dh=new z(0,1,0),Lh=new z(0,0,1),Fh={type:"added"},Ed={type:"removed"},Ts={type:"childadded",child:null},jc={type:"childremoved",child:null},an=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new Hn,n=new kn,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new te}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Co.copy(t):Co.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(pr,Co,this.up):oi.lookAt(Co,pr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(oi),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),jc.child=t,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};an.DEFAULT_UP=new z(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new z,ai=new z,Kc=new z,ci=new z,As=new z,Rs=new z,Uh=new z,tl=new z,el=new z,nl=new z,il=new Fe,sl=new Fe,rl=new Fe,Ii=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),ai.subVectors(n,e),Kc.subVectors(t,e);let o=On.dot(On),a=On.dot(ai),c=On.dot(Kc),l=ai.dot(ai),h=ai.dot(Kc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(o,ci.y),c.addScaledVector(a,ci.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,n),rl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(il,r.x),o.addScaledVector(sl,r.y),o.addScaledVector(rl,r.z),o}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),ai.subVectors(t,e),On.cross(ai).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),On.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;As.subVectors(s,n),Rs.subVectors(r,n),tl.subVectors(t,n);let c=As.dot(tl),l=Rs.dot(tl);if(c<=0&&l<=0)return e.copy(n);el.subVectors(t,s);let h=As.dot(el),u=Rs.dot(el);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(As,o);nl.subVectors(t,r);let d=As.dot(nl),g=Rs.dot(nl);if(g>=0&&d<=g)return e.copy(r);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Rs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Uh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Uh,a);let p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(As,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Io={h:0,s:0,l:0};function ol(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=pd(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ol(o,r,t+1/3),this.g=ol(o,r,t),this.b=ol(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){let n=Bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return ue.workingToColorSpace(rn.copy(this),t),Math.round(oe(rn.r*255,0,255))*65536+Math.round(oe(rn.g*255,0,255))*256+Math.round(oe(rn.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=En){ue.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Io);let n=Vc(Ri.h,Io.h,e),s=Vc(Ri.s,Io.s,e),r=Vc(Ri.l,Io.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ie;ie.NAMES=Bu;var wd=0,Fi=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=so(),this.name="",this.type="Material",this.blending=ts,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Yo,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Xe=class extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new z,Po=new Lt,Td=0,He=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Td++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ur(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),s=mn(s,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}};var Ar=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rr=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ad=0,Rn=new ve,al=new an,Cs=new z,Sn=new Cn,mr=new Cn,je=new z,Ye=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?Rr:Ar)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(Sn.min,mr.min),Sn.expandByPoint(je),je.addVectors(Sn.max,mr.max),Sn.expandByPoint(je)):(Sn.expandByPoint(mr.min),Sn.expandByPoint(mr.max))}Sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)je.fromBufferAttribute(a,l),c&&(Cs.fromBufferAttribute(t,l),je.add(Cs)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new z,c[F]=new z;let l=new z,h=new z,u=new z,f=new Lt,d=new Lt,g=new Lt,v=new z,m=new z;function p(F,_,x){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,F),d.fromBufferAttribute(r,_),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),a[F].add(v),a[_].add(v),a[x].add(v),c[F].add(m),c[_].add(m),c[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let F=0,_=b.length;F<_;++F){let x=b[F],E=x.start,P=x.count;for(let L=E,R=E+P;L<R;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let M=new z,y=new z,S=new z,T=new z;function I(F){S.fromBufferAttribute(s,F),T.copy(S);let _=a[F];M.copy(_),M.sub(S.multiplyScalar(S.dot(_))).normalize(),y.crossVectors(T,_);let E=y.dot(c[F])<0?-1:1;o.setXYZW(F,M.x,M.y,M.z,E)}for(let F=0,_=b.length;F<_;++F){let x=b[F],E=x.start,P=x.count;for(let L=E,R=E+P;L<R;L+=3)I(t.getX(L+0)),I(t.getX(L+1)),I(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,h=new z,u=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new He(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nh=new ve,Qi=new Tr,Do=new Li,Oh=new z,Lo=new z,Fo=new z,Uo=new z,cl=new z,No=new z,Bh=new z,Oo=new z,he=class extends an{constructor(t=new Ye,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(cl.fromBufferAttribute(u,t),o?No.addScaledVector(cl,h):No.addScaledVector(cl.sub(e),h))}e.add(No)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(Do.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Do,Oh)===null||Qi.origin.distanceToSquared(Oh)>(t.far-t.near)**2))&&(Nh.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,S=M;y<S;y+=3){let T=a.getX(y),I=a.getX(y+1),F=a.getX(y+2);s=Bo(this,p,t,n,l,h,u,T,I,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let b=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=Bo(this,o,t,n,l,h,u,b,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,S=M;y<S;y+=3){let T=y,I=y+1,F=y+2;s=Bo(this,p,t,n,l,h,u,T,I,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let b=m,M=m+1,y=m+2;s=Bo(this,o,t,n,l,h,u,b,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Rd(i,t,e,n,s,r,o,a){let c;if(t.side===fn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===hi,a),c===null)return null;Oo.copy(a),Oo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Oo);return l<e.near||l>e.far?null:{distance:l,point:Oo.clone(),object:i}}function Bo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Lo),i.getVertexPosition(c,Fo),i.getVertexPosition(l,Uo);let h=Rd(i,t,e,n,Lo,Fo,Uo,Bh);if(h){let u=new z;Ii.getBarycoord(Bh,Lo,Fo,Uo,u),s&&(h.uv=Ii.getInterpolatedAttribute(s,a,c,l,u,new Lt)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,c,l,u,new Lt)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,c,l,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new z,materialIndex:0};Ii.getNormal(Lo,Fo,Uo,f.normal),h.face=f,h.barycoord=u}return h}var $n=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function g(v,m,p,b,M,y,S,T,I,F,_){let x=y/I,E=S/F,P=y/2,L=S/2,R=T/2,C=I+1,O=F+1,W=0,D=0,k=new z;for(let G=0;G<O;G++){let J=G*E-L;for(let Y=0;Y<C;Y++){let et=Y*x-P;k[v]=et*b,k[m]=J*M,k[p]=R,l.push(k.x,k.y,k.z),k[v]=0,k[m]=0,k[p]=T>0?1:-1,h.push(k.x,k.y,k.z),u.push(Y/I),u.push(1-G/F),W+=1}}for(let G=0;G<F;G++)for(let J=0;J<I;J++){let Y=f+J+C*G,et=f+J+C*(G+1),xt=f+(J+1)+C*(G+1),lt=f+(J+1)+C*G;c.push(Y,et,lt),c.push(et,xt,lt),D+=6}a.addGroup(d,D,_),d+=D,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function Cd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var zu={clone:cs,merge:cn},Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Cr=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ci=new z,zh=new Lt,kh=new Lt,on=class extends Cr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,zh,kh),e.subVectors(kh,zh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Is=-90,Ps=1,ea=class extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Is,Ps,t,e);s.layers=this.layers,this.add(s);let r=new on(Is,Ps,t,e);r.layers=this.layers,this.add(r);let o=new on(Is,Ps,t,e);o.layers=this.layers,this.add(o);let a=new on(Is,Ps,t,e);a.layers=this.layers,this.add(a);let c=new on(Is,Ps,t,e);c.layers=this.layers,this.add(c);let l=new on(Is,Ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ir=class extends xn{constructor(t=[],e=os,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},na=class extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:fi});r.uniforms.tEquirect.value=e;let o=new he(s,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=zn),new ea(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_e=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dd={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Pr=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ia=class extends xn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=gn,h=gn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dr=class extends He{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new ve,Hh=new ve,zo=[],Vh=new Cn,Ld=new ve,gr=new he,xr=new Li,Lr=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Dr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ld)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),Vh.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Vh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),xr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Hh.multiplyMatrices(n,Ds),gr.matrixWorld=Hh,gr.raycast(t,zo);for(let o=0,a=zo.length;o<a;o++){let c=zo[o];c.instanceId=r,c.object=this,e.push(c)}zo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ia(new Float32Array(s*this.count),s,this.count,Ba,Xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ll=new z,Fd=new z,Ud=new te,ke=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ll.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ud.getNormalMatrix(t),s=this.coplanarPoint(ll).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new Li,Nd=new Lt(.5,.5),ko=new z,zs=class{constructor(t=new ke,e=new ke,n=new ke,s=new ke,r=new ke,o=new ke){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],b=r[12],M=r[13],y=r[14],S=r[15];if(s[0].setComponents(l-o,d-h,p-g,S-b).normalize(),s[1].setComponents(l+o,d+h,p+g,S+b).normalize(),s[2].setComponents(l+a,d+u,p+v,S+M).normalize(),s[3].setComponents(l-a,d-u,p-v,S-M).normalize(),n)s[4].setComponents(c,f,m,y).normalize(),s[5].setComponents(l-c,d-f,p-m,S-y).normalize();else if(s[4].setComponents(l-c,d-f,p-m,S-y).normalize(),e===Bn)s[5].setComponents(l+c,d+f,p+m,S+y).normalize();else if(e===Sr)s[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);let e=Nd.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ko.x=s.normal.x>0?t.max.x:t.min.x,ko.y=s.normal.y>0?t.max.y:t.min.y,ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fr=class extends xn{constructor(t,e,n=zi,s,r,o,a=gn,c=gn,l,h=Fs,u=1){if(h!==Fs&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ur=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Nr=class i extends Ye{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,v=s+1,m=new z,p=new z;for(let b=0;b<=g;b++){let M=0,y=0,S=0,T=0;if(b<=n){let _=b/n,x=_*Math.PI/2;y=-h-t*Math.cos(x),S=t*Math.sin(x),T=-t*Math.cos(x),M=_*u}else if(b<=n+r){let _=(b-n)/r;y=-h+_*e,S=t,T=0,M=u+_*f}else{let _=(b-n-r)/n,x=_*Math.PI/2;y=h+t*Math.sin(x),S=t*Math.cos(x),T=t*Math.sin(x),M=u+f+_*u}let I=Math.max(0,Math.min(1,M/d)),F=0;b===0?F=.5/s:b===g&&(F=-.5/s);for(let _=0;_<=s;_++){let x=_/s,E=x*Math.PI*2,P=Math.sin(E),L=Math.cos(E);p.x=-S*L,p.y=y,p.z=S*P,a.push(p.x,p.y,p.z),m.set(-S*L,T,S*P),m.normalize(),c.push(m.x,m.y,m.z),l.push(x+F,I)}if(b>0){let _=(b-1)*v;for(let x=0;x<s;x++){let E=_+x,P=_+x+1,L=b*v+x,R=b*v+x+1;o.push(E,P,L),o.push(P,R,L)}}}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Or=class i extends Ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new z,h=new Lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ui=class i extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,v=[],m=n/2,p=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(d,2));function b(){let y=new z,S=new z,T=0,I=(e-t)/n;for(let F=0;F<=r;F++){let _=[],x=F/r,E=x*(e-t)+t;for(let P=0;P<=s;P++){let L=P/s,R=L*c+a,C=Math.sin(R),O=Math.cos(R);S.x=E*C,S.y=-x*n+m,S.z=E*O,u.push(S.x,S.y,S.z),y.set(C,I,O).normalize(),f.push(y.x,y.y,y.z),d.push(L,1-x),_.push(g++)}v.push(_)}for(let F=0;F<s;F++)for(let _=0;_<r;_++){let x=v[_][F],E=v[_+1][F],P=v[_+1][F+1],L=v[_][F+1];(t>0||_!==0)&&(h.push(x,E,L),T+=3),(e>0||_!==r-1)&&(h.push(E,P,L),T+=3)}l.addGroup(p,T,0),p+=T}function M(y){let S=g,T=new Lt,I=new z,F=0,_=y===!0?t:e,x=y===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;let E=g;for(let P=0;P<=s;P++){let R=P/s*c+a,C=Math.cos(R),O=Math.sin(R);I.x=_*O,I.y=m*x,I.z=_*C,u.push(I.x,I.y,I.z),f.push(0,x,0),T.x=C*.5+.5,T.y=O*.5*x+.5,d.push(T.x,T.y),g++}for(let P=0;P<s;P++){let L=S+P,R=E+P;y===!0?h.push(R,R+1,L):h.push(R+1,R,L),F+=3}l.addGroup(p,F,y===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ks=class i extends Ui{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sa=class i extends Ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let M=new z,y=new z,S=new z;for(let T=0;T<e.length;T+=3)d(e[T+0],M),d(e[T+1],y),d(e[T+2],S),c(M,y,S,b)}function c(b,M,y,S){let T=S+1,I=[];for(let F=0;F<=T;F++){I[F]=[];let _=b.clone().lerp(y,F/T),x=M.clone().lerp(y,F/T),E=T-F;for(let P=0;P<=E;P++)P===0&&F===T?I[F][P]=_:I[F][P]=_.clone().lerp(x,P/E)}for(let F=0;F<T;F++)for(let _=0;_<2*(T-F)-1;_++){let x=Math.floor(_/2);_%2===0?(f(I[F][x+1]),f(I[F+1][x]),f(I[F][x])):(f(I[F][x+1]),f(I[F+1][x+1]),f(I[F+1][x]))}}function l(b){let M=new z;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(b),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let b=new z;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let y=m(b)/2/Math.PI+.5,S=p(b)/Math.PI+.5;o.push(y,1-S)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let M=o[b+0],y=o[b+2],S=o[b+4],T=Math.max(M,y,S),I=Math.min(M,y,S);T>.9&&I<.1&&(M<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),S<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,M){let y=b*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function g(){let b=new z,M=new z,y=new z,S=new z,T=new Lt,I=new Lt,F=new Lt;for(let _=0,x=0;_<r.length;_+=9,x+=6){b.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),y.set(r[_+6],r[_+7],r[_+8]),T.set(o[x+0],o[x+1]),I.set(o[x+2],o[x+3]),F.set(o[x+4],o[x+5]),S.copy(b).add(M).add(y).divideScalar(3);let E=m(S);v(T,x+0,b,E),v(I,x+2,M,E),v(F,x+4,y,E)}}function v(b,M,y,S){S<0&&b.x===1&&(o[M]=b.x-1),y.x===0&&y.z===0&&(o[M]=S/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Lt:new z);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,s=[],r=[],o=[],a=new z,c=new ve;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(oe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(oe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Br=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ra=class extends Br{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ho=new z,hl=new Xl,ul=new Xl,fl=new Xl,is=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ho.subVectors(s[0],s[1]).add(s[0]),l=Ho);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ho.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ho),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),hl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),ul.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),fl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ul.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),fl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(hl.calc(c),ul.calc(c),fl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Od(i,t){let e=1-i;return e*e*t}function Bd(i,t){return 2*(1-i)*i*t}function zd(i,t){return i*i*t}function yr(i,t,e,n){return Od(i,t)+Bd(i,e)+zd(i,n)}function kd(i,t){let e=1-i;return e*e*e*t}function Hd(i,t){let e=1-i;return 3*e*e*i*t}function Vd(i,t){return 3*(1-i)*i*i*t}function Gd(i,t){return i*i*i*t}function vr(i,t,e,n,s){return kd(i,t)+Hd(i,e)+Vd(i,n)+Gd(i,s)}var oa=class extends In{constructor(t=new Lt,e=new Lt,n=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},aa=class extends In{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ca=class extends In{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hs=class extends In{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends In{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends In{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y),yr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Gh(a,c.x,l.x,h.x,u.x),Gh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},Wd=Object.freeze({__proto__:null,ArcCurve:ra,CatmullRomCurve3:is,CubicBezierCurve:oa,CubicBezierCurve3:aa,EllipseCurve:Br,LineCurve:ca,LineCurve3:Hs,QuadraticBezierCurve:la,QuadraticBezierCurve3:zr,SplineCurve:ha});function Xd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ku(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=$d(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return kr(r,o,e,a,c,l,0),o}function ku(i,t,e,n,s){let r;if(s===ap(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Wh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Wh(o/n|0,i[o],i[o+1],r);return r&&Vs(r,r.next)&&(Vr(r),r=r.next),r}function ss(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vs(e,e.next)||Le(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ep(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Yd(i,n,s,r):qd(i)){t.push(c.i,i.i,l.i),Vr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Zd(ss(i),t),kr(i,t,e,n,s,r,2)):o===2&&Jd(i,t,e,n,s,r):kr(ss(i),t,e,n,s,r,1);break}}}function qd(i){let t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&_r(s,a,r,c,o,l,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yd(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Le(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),v=Math.max(a,c,l),m=Math.max(h,u,f),p=yl(d,g,t,e,n),b=yl(v,m,t,e,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=p&&y&&y.z<=b;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&_r(a,h,c,u,l,f,M.x,M.y)&&Le(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&_r(a,h,c,u,l,f,y.x,y.y)&&Le(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&_r(a,h,c,u,l,f,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&_r(a,h,c,u,l,f,y.x,y.y)&&Le(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Zd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Vs(n,s)&&Vu(n,e,e.next,s)&&Hr(n,s)&&Hr(s,n)&&(t.push(n.i,e.i,s.i),Vr(e),Vr(e.next),e=i=s),e=e.next}while(e!==i);return ss(e)}function Jd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sp(o,a)){let c=Gu(o,a);o=ss(o,o.next),c=ss(c,c.next),kr(o,t,e,n,s,r,0),kr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $d(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=ku(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(ip(l))}s.sort(Qd);for(let r=0;r<s.length;r++)e=jd(s[r],e);return e}function Qd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function jd(i,t){let e=Kd(i,t);if(!e)return t;let n=Gu(e,i);return ss(n,n.next),ss(e,e.next)}function Kd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Vs(i,e))return e;do{if(Vs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Hu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Hr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&tp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function tp(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function ep(i,t,e,n){let s=i;do s.z===0&&(s.z=yl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,np(s)}function np(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function yl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ip(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function _r(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Hu(i,t,e,n,s,r,o,a)}function sp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rp(i,t)&&(Hr(i,t)&&Hr(t,i)&&op(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||Vs(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vs(i,t){return i.x===t.x&&i.y===t.y}function Vu(i,t,e,n){let s=Go(Le(i,t,e)),r=Go(Le(i,t,n)),o=Go(Le(e,n,i)),a=Go(Le(e,n,t));return!!(s!==r&&o!==a||s===0&&Vo(i,e,t)||r===0&&Vo(i,n,t)||o===0&&Vo(e,i,n)||a===0&&Vo(e,t,n))}function Vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Go(i){return i>0?1:i<0?-1:0}function rp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Hr(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function op(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gu(i,t){let e=vl(i.i,i.x,i.y),n=vl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wh(i,t,e,n){let s=vl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ap(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ml=class{static triangulate(t,e,n=2){return Xd(t,e,n)}},Gr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Xh(t),qh(n,t);let o=t.length;e.forEach(Xh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,qh(n,e[c]);let a=Ml.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Xh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qn=class i extends sa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Wr=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let b=p*f-o;for(let M=0;M<l;M++){let y=M*u-r;g.push(y,-b,0),v.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let M=b+l*p,y=b+l*(p+1),S=b+1+l*(p+1),T=b+1+l*p;d.push(M,y,T),d.push(y,S,T)}this.setIndex(d),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Gs=class i extends Ye{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new z,g=new Lt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let b=p+m,M=b,y=b+n+1,S=b+n+2,T=b+1;a.push(M,y,T),a.push(y,S,T)}}this.setIndex(a),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Xr=class i extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new z,f=new z,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let b=[],M=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){let T=S/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(T+y,1-M),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let M=h[p][b+1],y=h[p][b],S=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&d.push(M,y,T),(p!==n-1||c<Math.PI)&&d.push(y,S,T)}this.setIndex(d),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ws=class i extends Ye{constructor(t=new zr(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new z,c=new z,l=new Lt,h=new z,u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(d,2));function v(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),b(),p()}function m(M){h=t.getPointAt(M/e,h);let y=o.normals[M],S=o.binormals[M];for(let T=0;T<=s;T++){let I=T/s*Math.PI*2,F=Math.sin(I),_=-Math.cos(I);c.x=_*y.x+F*S.x,c.y=_*y.y+F*S.y,c.z=_*y.z+F*S.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let y=1;y<=s;y++){let S=(s+1)*(M-1)+(y-1),T=(s+1)*M+(y-1),I=(s+1)*M+y,F=(s+1)*(M-1)+y;g.push(S,T,F),g.push(T,I,F)}}function b(){for(let M=0;M<=e;M++)for(let y=0;y<=s;y++)l.x=M/e,l.y=y/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Wd[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Gn=class extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ua=class extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var rs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},da=class extends rs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pl,endingEnd:pl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ml:r=t,a=2*e-n;break;case gl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ml:o=t,c=2*n-e;break;case gl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,b=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*v+.5*g,y=d*m-d*v;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+b*o[l+S]+M*o[c+S]+y*o[u+S];return r}},pa=class extends rs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},ma=class extends rs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wo(e,this.TimeBufferType),this.values=Wo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Wo(t.times,Array),values:Wo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case $o:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&cp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[f+g]||v!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=$o;var Ni=class extends wn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Mr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="color";var xa=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="number";var _a=class extends rs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)kn.slerpFlat(r,0,o,l-a,o,l,c);return r}},qr=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends wn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Mr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends wn{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="vector";var va=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Wu=new va,Ma=class{constructor(t){this.manager=t!==void 0?t:Wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Zr=class extends Yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dl=new ve,Yh=new z,Zh=new z,bl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Jr=class extends Cr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sl=class extends bl{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Sl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ba=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ql="\\[\\]\\.:\\/",lp=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",hp="[^"+ql.replace("\\.","")+"]",up=/((?:WC+[\/:])*)/.source.replace("WC",Yl),fp=/(WCOD+)?/.source.replace("WCOD",hp),dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),mp=new RegExp("^"+up+fp+dp+pp+"$"),gp=["material","materials","bones","map"],El=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lp,"")}static parseTrackName(t){let e=mp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=El;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mx=new Float32Array(1);var Jh=new ve,Qr=class{constructor(t,e,n=0,s=1/0){this.ray=new Tr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(t,e=!0,n=[]){return wl(t,this,n,e),n.sort($h),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wl(t[s],this,n,e);return n.sort($h),n}};function $h(i,t){return i.distance-t.distance}function wl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)wl(r[o],t,e,!0)}}function Zl(i,t,e,n){let s=xp(n);switch(e){case Ol:return i*t;case Ba:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case ka:return i*t*2/s.components*s.byteLength;case Bl:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case Ha:return i*t*4/s.components*s.byteLength;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lc:case hc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pc:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xp(i){switch(i){case Wn:case Ll:return{byteLength:1,components:1};case Xs:case Fl:case qs:return{byteLength:2,components:1};case Na:case Oa:return{byteLength:2,components:4};case zi:case Ua:case Xn:return{byteLength:4,components:1};case Ul:case Nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function mf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,Ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rp=`#ifdef USE_BATCHING
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
#endif`,Cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gp=`#define PI 3.141592653589793
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
} // validated`,Wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xp=`vec3 transformedNormal = objectNormal;
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
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,am=`#ifdef USE_GRADIENTMAP
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
}`,cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,um=`uniform bool receiveShadow;
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
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
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
#endif`,_m=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
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
#endif`,Gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sg=`float getShadowMask() {
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
}`,rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vg=`uniform sampler2D t2D;
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Ug=`#define LAMBERT
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
}`,Ng=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,Bg=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,kg=`#define NORMAL
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
}`,Hg=`#define PHONG
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
}`,Vg=`#define PHONG
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
}`,Gg=`#define STANDARD
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define TOON
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
}`,qg=`#define TOON
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
}`,Yg=`uniform float size;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,$g=`uniform vec3 color;
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
}`,Qg=`uniform float rotation;
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
}`,jg=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:vp,alphahash_pars_fragment:Mp,alphamap_fragment:bp,alphamap_pars_fragment:Sp,alphatest_fragment:Ep,alphatest_pars_fragment:wp,aomap_fragment:Tp,aomap_pars_fragment:Ap,batching_pars_vertex:Rp,batching_vertex:Cp,begin_vertex:Ip,beginnormal_vertex:Pp,bsdfs:Dp,iridescence_fragment:Lp,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Op,clipping_planes_vertex:Bp,color_fragment:zp,color_pars_fragment:kp,color_pars_vertex:Hp,color_vertex:Vp,common:Gp,cube_uv_reflection_fragment:Wp,defaultnormal_vertex:Xp,displacementmap_pars_vertex:qp,displacementmap_vertex:Yp,emissivemap_fragment:Zp,emissivemap_pars_fragment:Jp,colorspace_fragment:$p,colorspace_pars_fragment:Qp,envmap_fragment:jp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:tm,envmap_pars_vertex:em,envmap_physical_pars_fragment:fm,envmap_vertex:nm,fog_vertex:im,fog_pars_vertex:sm,fog_fragment:rm,fog_pars_fragment:om,gradientmap_pars_fragment:am,lightmap_pars_fragment:cm,lights_lambert_fragment:lm,lights_lambert_pars_fragment:hm,lights_pars_begin:um,lights_toon_fragment:dm,lights_toon_pars_fragment:pm,lights_phong_fragment:mm,lights_phong_pars_fragment:gm,lights_physical_fragment:xm,lights_physical_pars_fragment:_m,lights_fragment_begin:ym,lights_fragment_maps:vm,lights_fragment_end:Mm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Sm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:wm,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Pm,morphinstance_vertex:Dm,morphcolor_vertex:Lm,morphnormal_vertex:Fm,morphtarget_pars_vertex:Um,morphtarget_vertex:Nm,normal_fragment_begin:Om,normal_fragment_maps:Bm,normal_pars_fragment:zm,normal_pars_vertex:km,normal_vertex:Hm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:Gm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:qm,opaque_fragment:Ym,packing:Zm,premultiplied_alpha_fragment:Jm,project_vertex:$m,dithering_fragment:Qm,dithering_pars_fragment:jm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:eg,shadowmap_pars_vertex:ng,shadowmap_vertex:ig,shadowmask_pars_fragment:sg,skinbase_vertex:rg,skinning_pars_vertex:og,skinning_vertex:ag,skinnormal_vertex:cg,specularmap_fragment:lg,specularmap_pars_fragment:hg,tonemapping_fragment:ug,tonemapping_pars_fragment:fg,transmission_fragment:dg,transmission_pars_fragment:pg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:xg,worldpos_vertex:_g,background_vert:yg,background_frag:vg,backgroundCube_vert:Mg,backgroundCube_frag:bg,cube_vert:Sg,cube_frag:Eg,depth_vert:wg,depth_frag:Tg,distanceRGBA_vert:Ag,distanceRGBA_frag:Rg,equirect_vert:Cg,equirect_frag:Ig,linedashed_vert:Pg,linedashed_frag:Dg,meshbasic_vert:Lg,meshbasic_frag:Fg,meshlambert_vert:Ug,meshlambert_frag:Ng,meshmatcap_vert:Og,meshmatcap_frag:Bg,meshnormal_vert:zg,meshnormal_frag:kg,meshphong_vert:Hg,meshphong_frag:Vg,meshphysical_vert:Gg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:qg,points_vert:Yg,points_frag:Zg,shadow_vert:Jg,shadow_frag:$g,sprite_vert:Qg,sprite_frag:jg},vt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Kn={basic:{uniforms:cn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:cn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ie(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:cn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:cn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:cn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ie(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:cn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:cn([vt.points,vt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:cn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:cn([vt.common,vt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:cn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:cn([vt.sprite,vt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:cn([vt.common,vt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:cn([vt.lights,vt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Kn.physical={uniforms:cn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var gc={r:0,b:0,g:0},ls=new Hn,Kg=new ve;function t0(i,t,e,n,s,r,o){let a=new ie(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function v(M){let y=!1,S=g(M);S===null?p(a,c):S&&S.isColor&&(p(S,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,y){let S=g(y);S&&(S.isCubeTexture||S.mapping===jr)?(h===void 0&&(h=new he(new $n(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:cs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ls.copy(y.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(ls)),h.material.toneMapped=ue.getTransfer(S.colorSpace)!==ye,(u!==S||f!==S.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new he(new Wr(2,2),new Vn({name:"BackgroundMaterial",uniforms:cs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ue.getTransfer(S.colorSpace)!==ye,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(gc,Wl(i)),n.buffers.color.setClear(gc.r,gc.g,gc.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:v,addToRenderList:m,dispose:b}}function e0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(x,E,P,L,R){let C=!1,O=u(L,P,E);r!==O&&(r=O,l(r.object)),C=d(x,L,P,R),C&&g(x,L,P,R),R!==null&&t.update(R,i.ELEMENT_ARRAY_BUFFER),(C||o)&&(o=!1,y(x,E,P,L),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(R).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,E,P){let L=P.wireframe===!0,R=n[x.id];R===void 0&&(R={},n[x.id]=R);let C=R[E.id];C===void 0&&(C={},R[E.id]=C);let O=C[L];return O===void 0&&(O=f(c()),C[L]=O),O}function f(x){let E=[],P=[],L=[];for(let R=0;R<e;R++)E[R]=0,P[R]=0,L[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:P,attributeDivisors:L,object:x,attributes:{},index:null}}function d(x,E,P,L){let R=r.attributes,C=E.attributes,O=0,W=P.getAttributes();for(let D in W)if(W[D].location>=0){let G=R[D],J=C[D];if(J===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),G===void 0||G.attribute!==J||J&&G.data!==J.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function g(x,E,P,L){let R={},C=E.attributes,O=0,W=P.getAttributes();for(let D in W)if(W[D].location>=0){let G=C[D];G===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(G=x.instanceColor));let J={};J.attribute=G,G&&G.data&&(J.data=G.data),R[D]=J,O++}r.attributes=R,r.attributesNum=O,r.index=L}function v(){let x=r.newAttributes;for(let E=0,P=x.length;E<P;E++)x[E]=0}function m(x){p(x,0)}function p(x,E){let P=r.newAttributes,L=r.enabledAttributes,R=r.attributeDivisors;P[x]=1,L[x]===0&&(i.enableVertexAttribArray(x),L[x]=1),R[x]!==E&&(i.vertexAttribDivisor(x,E),R[x]=E)}function b(){let x=r.newAttributes,E=r.enabledAttributes;for(let P=0,L=E.length;P<L;P++)E[P]!==x[P]&&(i.disableVertexAttribArray(P),E[P]=0)}function M(x,E,P,L,R,C,O){O===!0?i.vertexAttribIPointer(x,E,P,R,C):i.vertexAttribPointer(x,E,P,L,R,C)}function y(x,E,P,L){v();let R=L.attributes,C=P.getAttributes(),O=E.defaultAttributeValues;for(let W in C){let D=C[W];if(D.location>=0){let k=R[W];if(k===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(k=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(k=x.instanceColor)),k!==void 0){let G=k.normalized,J=k.itemSize,Y=t.get(k);if(Y===void 0)continue;let et=Y.buffer,xt=Y.type,lt=Y.bytesPerElement,Q=xt===i.INT||xt===i.UNSIGNED_INT||k.gpuType===Ua;if(k.isInterleavedBufferAttribute){let H=k.data,it=H.stride,bt=k.offset;if(H.isInstancedInterleavedBuffer){for(let dt=0;dt<D.locationSize;dt++)p(D.location+dt,H.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let dt=0;dt<D.locationSize;dt++)m(D.location+dt);i.bindBuffer(i.ARRAY_BUFFER,et);for(let dt=0;dt<D.locationSize;dt++)M(D.location+dt,J/D.locationSize,xt,G,it*lt,(bt+J/D.locationSize*dt)*lt,Q)}else{if(k.isInstancedBufferAttribute){for(let H=0;H<D.locationSize;H++)p(D.location+H,k.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let H=0;H<D.locationSize;H++)m(D.location+H);i.bindBuffer(i.ARRAY_BUFFER,et);for(let H=0;H<D.locationSize;H++)M(D.location+H,J/D.locationSize,xt,G,J*lt,J/D.locationSize*H*lt,Q)}}else if(O!==void 0){let G=O[W];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(D.location,G);break;case 3:i.vertexAttrib3fv(D.location,G);break;case 4:i.vertexAttrib4fv(D.location,G);break;default:i.vertexAttrib1fv(D.location,G)}}}}b()}function S(){F();for(let x in n){let E=n[x];for(let P in E){let L=E[P];for(let R in L)h(L[R].object),delete L[R];delete E[P]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;let E=n[x.id];for(let P in E){let L=E[P];for(let R in L)h(L[R].object),delete L[R];delete E[P]}delete n[x.id]}function I(x){for(let E in n){let P=n[E];if(P[x.id]===void 0)continue;let L=P[x.id];for(let R in L)h(L[R].object),delete L[R];delete P[x.id]}}function F(){_(),o=!0,r!==s&&(r=s,l(r.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:_,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function n0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function i0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Pn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let F=I===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Wn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xn&&!F)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:S,maxSamples:T}}function s0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ke,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,M=b*4,y=p.clippingState||null;c.value=y,y=h(g,f,M,d);for(let S=0;S!==M;++S)y[S]=e[S];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=d;M!==v;++M,y+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function r0(i){let t=new WeakMap;function e(o,a){return a===Da?o.mapping=os:a===La&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Da||a===La)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new na(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var $s=4,Xu=[.125,.215,.35,.446,.526,.582],fs=20,Jl=new Jr,qu=new ie,$l=null,Ql=0,jl=0,Kl=!1,us=(1+Math.sqrt(5))/2,Js=1/us,Yu=[new z(-us,Js,0),new z(us,Js,0),new z(-Js,0,us),new z(Js,0,us),new z(0,us,-Js),new z(0,us,Js),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],o0=new z,yc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=o0}=r;$l=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($l,Ql,jl),this._renderer.xr.enabled=Kl,t.scissorTest=!1,xc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$l=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:qs,format:Pn,colorSpace:ns,depthBuffer:!1},s=Zu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a0(r)),this._blurMaterial=c0(r,t,e)}return s}_compileMaterial(t){let e=new he(this._lodPlanes[0],t);this._renderer.compile(e,Jl)}_sceneToCubeUV(t,e,n,s,r){let c=new on(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(qu),u.toneMapping=di,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new Xe({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new he(new $n,v),p=!1,b=t.background;b?b.isColor&&(v.color.copy(b),t.background=null,p=!0):(v.color.copy(qu),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let S=this._cubeSize;xc(s,y*S,M>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new he(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;xc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Jl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yu[(s-r-1)%Yu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new he(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*fs-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);let p=[],b=0;for(let I=0;I<fs;++I){let F=I/v,_=Math.exp(-F*F/2);p.push(_),I===0?b+=_:I<m&&(b+=2*_)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;let y=this._sizeLods[s],S=3*y*(s>M-$s?s-M+$s:0),T=4*(this._cubeSize-y);xc(e,S,T,3*y,2*y),c.setRenderTarget(e),c.render(u,Jl)}};function a0(i){let t=[],e=[],n=[],s=i,r=i-$s+1+Xu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-$s?c=Xu[o-i+$s-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*d),M=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let T=0;T<d;T++){let I=T%3*2/3-1,F=T>2?0:-1,_=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];b.set(_,v*g*T),M.set(f,m*g*T);let x=[T,T,T,T,T,T];y.set(x,p*g*T)}let S=new Ye;S.setAttribute("position",new He(b,v)),S.setAttribute("uv",new He(M,m)),S.setAttribute("faceIndex",new He(y,p)),t.push(S),s>$s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zu(i,t,e){let n=new Jn(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function c0(i,t,e){let n=new Float32Array(fs),s=new z(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lh(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Ju(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function $u(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function l0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Da||c===La,h=c===os||c===as;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new yc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new yc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function h0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function u0(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,v=0;if(d!==null){let b=d.array;v=d.version;for(let M=0,y=b.length;M<y;M+=3){let S=b[M+0],T=b[M+1],I=b[M+2];f.push(S,T,T,I,I,S)}}else if(g!==void 0){let b=g.array;v=g.version;for(let M=0,y=b.length/3-1;M<y;M+=3){let S=M+0,T=M+1,I=M+2;f.push(S,T,T,I,I,S)}}else return;let m=new(Gl(f)?Rr:Ar)(f,1);m.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function f0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*v[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function d0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function p0(i,t,e){let n=new WeakMap,s=new Fe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let _=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",_)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let y=a.attributes.position.count*M,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*S*4*u),I=new wr(T,y,S,u);I.type=Xn,I.needsUpdate=!0;let F=M*4;for(let x=0;x<u;x++){let E=m[x],P=p[x],L=b[x],R=y*S*4*x;for(let C=0;C<E.count;C++){let O=C*F;d===!0&&(s.fromBufferAttribute(E,C),T[R+O+0]=s.x,T[R+O+1]=s.y,T[R+O+2]=s.z,T[R+O+3]=0),g===!0&&(s.fromBufferAttribute(P,C),T[R+O+4]=s.x,T[R+O+5]=s.y,T[R+O+6]=s.z,T[R+O+7]=0),v===!0&&(s.fromBufferAttribute(L,C),T[R+O+8]=s.x,T[R+O+9]=s.y,T[R+O+10]=s.z,T[R+O+11]=L.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new Lt(y,S)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function m0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var gf=new xn,Qu=new Fr(1,1),xf=new wr,_f=new ta,yf=new Ir,ju=[],Ku=[],tf=new Float32Array(16),ef=new Float32Array(9),nf=new Float32Array(4);function js(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ju[s];if(r===void 0&&(r=new Float32Array(s),ju[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mc(i,t){let e=Ku[t];e===void 0&&(e=new Int32Array(t),Ku[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function g0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function v0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;nf.set(n),i.uniformMatrix2fv(this.addr,!1,nf),Je(e,n)}}function M0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;ef.set(n),i.uniformMatrix3fv(this.addr,!1,ef),Je(e,n)}}function b0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;tf.set(n),i.uniformMatrix4fv(this.addr,!1,tf),Je(e,n)}}function S0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function A0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function P0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qu.compareFunction=Hl,r=Qu):r=gf,e.setTexture2D(t||r,s)}function D0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_f,s)}function L0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||yf,s)}function F0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xf,s)}function U0(i){switch(i){case 5126:return g0;case 35664:return x0;case 35665:return _0;case 35666:return y0;case 35674:return v0;case 35675:return M0;case 35676:return b0;case 5124:case 35670:return S0;case 35667:case 35671:return E0;case 35668:case 35672:return w0;case 35669:case 35673:return T0;case 5125:return A0;case 36294:return R0;case 36295:return C0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return F0}}function N0(i,t){i.uniform1fv(this.addr,t)}function O0(i,t){let e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function B0(i,t){let e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function z0(i,t){let e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function k0(i,t){let e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function H0(i,t){let e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function V0(i,t){let e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function G0(i,t){i.uniform1iv(this.addr,t)}function W0(i,t){i.uniform2iv(this.addr,t)}function X0(i,t){i.uniform3iv(this.addr,t)}function q0(i,t){i.uniform4iv(this.addr,t)}function Y0(i,t){i.uniform1uiv(this.addr,t)}function Z0(i,t){i.uniform2uiv(this.addr,t)}function J0(i,t){i.uniform3uiv(this.addr,t)}function $0(i,t){i.uniform4uiv(this.addr,t)}function Q0(i,t,e){let n=this.cache,s=t.length,r=Mc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gf,r[o])}function j0(i,t,e){let n=this.cache,s=t.length,r=Mc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_f,r[o])}function K0(i,t,e){let n=this.cache,s=t.length,r=Mc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||yf,r[o])}function t1(i,t,e){let n=this.cache,s=t.length,r=Mc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xf,r[o])}function e1(i){switch(i){case 5126:return N0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return k0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return J0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return t1}}var eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=U0(e.type)}},nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e1(e.type)}},ih=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},th=/(\w+)(\])?(\[|\.)?/g;function sf(i,t){i.seq.push(t),i.map[t.id]=t}function n1(i,t,e){let n=i.name,s=n.length;for(th.lastIndex=0;;){let r=th.exec(n),o=th.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sf(e,l===void 0?new eh(a,i,t):new nh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ih(a),sf(e,u)),e=u}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);n1(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function rf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var i1=37297,s1=0;function r1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var of=new te;function o1(i){ue._getMatrix(of,ue.workingColorSpace,i);let t=`mat3( ${of.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function af(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+r1(i.getShaderSource(t),a)}else return r}function a1(i,t){let e=o1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function c1(i,t){let e;switch(t){case yu:e="Linear";break;case vu:e="Reinhard";break;case Mu:e="Cineon";break;case bu:e="ACESFilmic";break;case Eu:e="AgX";break;case Pa:e="Neutral";break;case Su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _c=new z;function l1(){ue.getLuminanceCoefficients(_c);let i=_c.x.toFixed(4),t=_c.y.toFixed(4),e=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function u1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ro(i){return i!==""}function cf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var d1=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(i){return i.replace(d1,m1)}var p1=new Map;function m1(i,t){let e=se[t];if(e===void 0){let n=p1.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sh(e)}var g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(i){return i.replace(g1,x1)}function x1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function _1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function y1(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v1(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function M1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pl:t="ENVMAP_BLENDING_MULTIPLY";break;case xu:t="ENVMAP_BLENDING_MIX";break;case _u:t="ENVMAP_BLENDING_ADD";break}return t}function b1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function S1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=_1(e),l=y1(e),h=v1(e),u=M1(e),f=b1(e),d=h1(e),g=u1(r),v=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ro).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(m=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?se.tonemapping_pars_fragment:"",e.toneMapping!==di?c1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,a1("linearToOutputTexel",e.outputColorSpace),l1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=sh(o),o=cf(o,e),o=lf(o,e),a=sh(a),a=cf(a,e),a=lf(a,e),o=hf(o),a=hf(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+m+o,y=b+p+a,S=rf(s,s.VERTEX_SHADER,M),T=rf(s,s.FRAGMENT_SHADER,y);s.attachShader(v,S),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(E){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(S)||"",R=s.getShaderInfoLog(T)||"",C=P.trim(),O=L.trim(),W=R.trim(),D=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,T);else{let G=af(s,S,"vertex"),J=af(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+C+`
`+G+`
`+J)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||W==="")&&(k=!1);k&&(E.diagnostics={runnable:D,programLog:C,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(S),s.deleteShader(T),F=new Qs(s,v),_=f1(s,v)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let _;this.getAttributes=function(){return _===void 0&&I(this),_};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,i1)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}var E1=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oh(t),e.set(t,n)),n}},oh=class{constructor(t){this.id=E1++,this.code=t,this.usedTimes=0}};function w1(i,t,e,n,s,r,o){let a=new Os,c=new rh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,x,E,P,L){let R=P.fog,C=L.geometry,O=_.isMeshStandardMaterial?P.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||O),D=W&&W.mapping===jr?W.image.height:null,k=g[_.type];_.precision!==null&&(d=s.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let G=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,J=G!==void 0?G.length:0,Y=0;C.morphAttributes.position!==void 0&&(Y=1),C.morphAttributes.normal!==void 0&&(Y=2),C.morphAttributes.color!==void 0&&(Y=3);let et,xt,lt,Q;if(k){let ge=Kn[k];et=ge.vertexShader,xt=ge.fragmentShader}else et=_.vertexShader,xt=_.fragmentShader,c.update(_),lt=c.getVertexShaderID(_),Q=c.getFragmentShaderID(_);let H=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),bt=L.isInstancedMesh===!0,dt=L.isBatchedMesh===!0,Ft=!!_.map,de=!!_.matcap,B=!!W,me=!!_.aoMap,Zt=!!_.lightMap,kt=!!_.bumpMap,Rt=!!_.normalMap,we=!!_.displacementMap,Ct=!!_.emissiveMap,ne=!!_.metalnessMap,Qe=!!_.roughnessMap,ze=_.anisotropy>0,U=_.clearcoat>0,w=_.dispersion>0,Z=_.iridescence>0,tt=_.sheen>0,ot=_.transmission>0,K=ze&&!!_.anisotropyMap,zt=U&&!!_.clearcoatMap,mt=U&&!!_.clearcoatNormalMap,Nt=U&&!!_.clearcoatRoughnessMap,Ot=Z&&!!_.iridescenceMap,ut=Z&&!!_.iridescenceThicknessMap,Et=tt&&!!_.sheenColorMap,Xt=tt&&!!_.sheenRoughnessMap,Bt=!!_.specularMap,Mt=!!_.specularColorMap,ee=!!_.specularIntensityMap,V=ot&&!!_.transmissionMap,ft=ot&&!!_.thicknessMap,gt=!!_.gradientMap,Tt=!!_.alphaMap,ct=_.alphaTest>0,nt=!!_.alphaHash,Dt=!!_.extensions,Kt=di;_.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Kt=i.toneMapping);let Te={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:xt,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:Q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:dt,batchingColor:dt&&L._colorsTexture!==null,instancing:bt,instancingColor:bt&&L.instanceColor!==null,instancingMorph:bt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:H===null?i.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ns,alphaToCoverage:!!_.alphaToCoverage,map:Ft,matcap:de,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:D,aoMap:me,lightMap:Zt,bumpMap:kt,normalMap:Rt,displacementMap:f&&we,emissiveMap:Ct,normalMapObjectSpace:Rt&&_.normalMapType===Ru,normalMapTangentSpace:Rt&&_.normalMapType===kl,metalnessMap:ne,roughnessMap:Qe,anisotropy:ze,anisotropyMap:K,clearcoat:U,clearcoatMap:zt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Nt,dispersion:w,iridescence:Z,iridescenceMap:Ot,iridescenceThicknessMap:ut,sheen:tt,sheenColorMap:Et,sheenRoughnessMap:Xt,specularMap:Bt,specularColorMap:Mt,specularIntensityMap:ee,transmission:ot,transmissionMap:V,thicknessMap:ft,gradientMap:gt,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ct,alphaHash:nt,combine:_.combine,mapUv:Ft&&v(_.map.channel),aoMapUv:me&&v(_.aoMap.channel),lightMapUv:Zt&&v(_.lightMap.channel),bumpMapUv:kt&&v(_.bumpMap.channel),normalMapUv:Rt&&v(_.normalMap.channel),displacementMapUv:we&&v(_.displacementMap.channel),emissiveMapUv:Ct&&v(_.emissiveMap.channel),metalnessMapUv:ne&&v(_.metalnessMap.channel),roughnessMapUv:Qe&&v(_.roughnessMap.channel),anisotropyMapUv:K&&v(_.anisotropyMap.channel),clearcoatMapUv:zt&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:mt&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&v(_.sheenRoughnessMap.channel),specularMapUv:Bt&&v(_.specularMap.channel),specularColorMapUv:Mt&&v(_.specularColorMap.channel),specularIntensityMapUv:ee&&v(_.specularIntensityMap.channel),transmissionMapUv:V&&v(_.transmissionMap.channel),thicknessMapUv:ft&&v(_.thicknessMap.channel),alphaMapUv:Tt&&v(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Rt||ze),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(Ft||Tt),fog:!!R,useFog:_.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:it,skinning:L.isSkinnedMesh===!0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Y,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Ft&&_.map.isVideoTexture===!0&&ue.getTransfer(_.map.colorSpace)===ye,decodeVideoTextureEmissive:Ct&&_.emissiveMap.isVideoTexture===!0&&ue.getTransfer(_.emissiveMap.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===fn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Dt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&_.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function p(_){let x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)x.push(E),x.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(b(x,_),M(x,_),x.push(i.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function b(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function M(_,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),_.push(a.mask)}function y(_){let x=g[_.type],E;if(x){let P=Kn[x];E=zu.clone(P.uniforms)}else E=_.uniforms;return E}function S(_,x){let E;for(let P=0,L=h.length;P<L;P++){let R=h[P];if(R.cacheKey===x){E=R,++E.usedTimes;break}}return E===void 0&&(E=new S1(i,x,_,r),h.push(E)),E}function T(_){if(--_.usedTimes===0){let x=h.indexOf(_);h[x]=h[h.length-1],h.pop(),_.destroy()}}function I(_){c.remove(_)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:S,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:F}}function T1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function A1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ff(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function df(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,f,d,g,v,m){let p=o(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,v,m){let p=o(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||A1),n.length>1&&n.sort(f||ff),s.length>1&&s.sort(f||ff)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function R1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new df,i.set(n,[o])):s>=r.length?(o=new df,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function C1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new ie};break;case"SpotLight":e={position:new z,direction:new z,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function I1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var P1=0;function D1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L1(i){let t=new C1,e=I1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let s=new z,r=new ve,o=new ve;function a(l){let h=0,u=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,b=0,M=0,y=0,S=0,T=0,I=0;l.sort(D1);for(let _=0,x=l.length;_<x;_++){let E=l[_],P=E.color,L=E.intensity,R=E.distance,C=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=P.r*L,u+=P.g*L,f+=P.b*L;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],L);I++}else if(E.isDirectionalLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let W=E.shadow,D=e.get(E);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,n.directionalShadow[d]=D,n.directionalShadowMap[d]=C,n.directionalShadowMatrix[d]=E.shadow.matrix,b++}n.directional[d]=O,d++}else if(E.isSpotLight){let O=t.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(P).multiplyScalar(L),O.distance=R,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[v]=O;let W=E.shadow;if(E.map&&(n.spotLightMap[S]=E.map,S++,W.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[v]=W.matrix,E.castShadow){let D=e.get(E);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,n.spotShadow[v]=D,n.spotShadowMap[v]=C,y++}v++}else if(E.isRectAreaLight){let O=t.get(E);O.color.copy(P).multiplyScalar(L),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=O,m++}else if(E.isPointLight){let O=t.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){let W=E.shadow,D=e.get(E);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,D.shadowCameraNear=W.camera.near,D.shadowCameraFar=W.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=C,n.pointShadowMatrix[g]=E.shadow.matrix,M++}n.point[g]=O,g++}else if(E.isHemisphereLight){let O=t.get(E);O.skyColor.copy(E.color).multiplyScalar(L),O.groundColor.copy(E.groundColor).multiplyScalar(L),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==d||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==b||F.numPointShadows!==M||F.numSpotShadows!==y||F.numSpotMaps!==S||F.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,F.directionalLength=d,F.pointLength=g,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=b,F.numPointShadows=M,F.numSpotShadows=y,F.numSpotMaps=S,F.numLightProbes=I,n.version=P1++)}function c(l,h){let u=0,f=0,d=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let M=l[p];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(M.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function pf(i){let t=new L1(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function F1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new pf(i),t.set(s,[a])):r>=o.length?(a=new pf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var U1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
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
}`;function O1(i,t,e){let n=new zs,s=new Lt,r=new Lt,o=new Fe,a=new ua({depthPacking:Au}),c=new fa,l={},h=e.maxTextureSize,u={[hi]:fn,[fn]:hi,[_n]:_n},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:U1,fragmentShader:N1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ye;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new he(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let p=this.type;this.render=function(T,I,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let _=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),P=i.state;P.setBlending(fi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let L=p!==jn&&this.type===jn,R=p===jn&&this.type!==jn;for(let C=0,O=T.length;C<O;C++){let W=T[C],D=W.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let k=D.getFrameExtents();if(s.multiply(k),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,D.mapSize.y=r.y)),D.map===null||L===!0||R===!0){let J=this.type!==jn?{minFilter:gn,magFilter:gn}:{};D.map!==null&&D.map.dispose(),D.map=new Jn(s.x,s.y,J),D.map.texture.name=W.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let G=D.getViewportCount();for(let J=0;J<G;J++){let Y=D.getViewport(J);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),P.viewport(o),D.updateMatrices(W,J),n=D.getFrustum(),y(I,F,D.camera,W,this.type)}D.isPointLightShadow!==!0&&this.type===jn&&b(D,F),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(_,x,E)};function b(T,I){let F=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,F,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,F,d,v,null)}function M(T,I,F,_){let x=null,E=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)x=E;else if(x=F.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let P=x.uuid,L=I.uuid,R=l[P];R===void 0&&(R={},l[P]=R);let C=R[L];C===void 0&&(C=x.clone(),R[L]=C,I.addEventListener("dispose",S)),x=C}if(x.visible=I.visible,x.wireframe=I.wireframe,_===jn?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:u[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let P=i.properties.get(x);P.light=F}return x}function y(T,I,F,_,x){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===jn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let L=t.update(T),R=T.material;if(Array.isArray(R)){let C=L.groups;for(let O=0,W=C.length;O<W;O++){let D=C[O],k=R[D.materialIndex];if(k&&k.visible){let G=M(T,k,_,x);T.onBeforeShadow(i,T,I,F,L,G,D),i.renderBufferDirect(F,null,L,G,T,D),T.onAfterShadow(i,T,I,F,L,G,D)}}}else if(R.visible){let C=M(T,R,_,x);T.onBeforeShadow(i,T,I,F,L,C,null),i.renderBufferDirect(F,null,L,C,T,null),T.onAfterShadow(i,T,I,F,L,C,null)}}let P=T.children;for(let L=0,R=P.length;L<R;L++)y(P[L],I,F,_,x)}function S(T){T.target.removeEventListener("dispose",S);for(let F in l){let _=l[F],x=T.target.uuid;x in _&&(_[x].dispose(),delete _[x])}}}var B1={[Ea]:wa,[Ta]:Ca,[Aa]:Ia,[es]:Ra,[wa]:Ea,[Ca]:Ta,[Ia]:Aa,[Ra]:es};function z1(i,t){function e(){let V=!1,ft=new Fe,gt=null,Tt=new Fe(0,0,0,0);return{setMask:function(ct){gt!==ct&&!V&&(i.colorMask(ct,ct,ct,ct),gt=ct)},setLocked:function(ct){V=ct},setClear:function(ct,nt,Dt,Kt,Te){Te===!0&&(ct*=Kt,nt*=Kt,Dt*=Kt),ft.set(ct,nt,Dt,Kt),Tt.equals(ft)===!1&&(i.clearColor(ct,nt,Dt,Kt),Tt.copy(ft))},reset:function(){V=!1,gt=null,Tt.set(-1,0,0,0)}}}function n(){let V=!1,ft=!1,gt=null,Tt=null,ct=null;return{setReversed:function(nt){if(ft!==nt){let Dt=t.get("EXT_clip_control");nt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ft=nt;let Kt=ct;ct=null,this.setClear(Kt)}},getReversed:function(){return ft},setTest:function(nt){nt?H(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(nt){gt!==nt&&!V&&(i.depthMask(nt),gt=nt)},setFunc:function(nt){if(ft&&(nt=B1[nt]),Tt!==nt){switch(nt){case Ea:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case es:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ra:i.depthFunc(i.GEQUAL);break;case Ca:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=nt}},setLocked:function(nt){V=nt},setClear:function(nt){ct!==nt&&(ft&&(nt=1-nt),i.clearDepth(nt),ct=nt)},reset:function(){V=!1,gt=null,Tt=null,ct=null,ft=!1}}}function s(){let V=!1,ft=null,gt=null,Tt=null,ct=null,nt=null,Dt=null,Kt=null,Te=null;return{setTest:function(ge){V||(ge?H(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(ge){ft!==ge&&!V&&(i.stencilMask(ge),ft=ge)},setFunc:function(ge,ii,Zn){(gt!==ge||Tt!==ii||ct!==Zn)&&(i.stencilFunc(ge,ii,Zn),gt=ge,Tt=ii,ct=Zn)},setOp:function(ge,ii,Zn){(nt!==ge||Dt!==ii||Kt!==Zn)&&(i.stencilOp(ge,ii,Zn),nt=ge,Dt=ii,Kt=Zn)},setLocked:function(ge){V=ge},setClear:function(ge){Te!==ge&&(i.clearStencil(ge),Te=ge)},reset:function(){V=!1,ft=null,gt=null,Tt=null,ct=null,nt=null,Dt=null,Kt=null,Te=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,M=null,y=null,S=null,T=null,I=new ie(0,0,0),F=0,_=!1,x=null,E=null,P=null,L=null,R=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,W=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(D)[1]),O=W>=1):D.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),O=W>=2);let k=null,G={},J=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),et=new Fe().fromArray(J),xt=new Fe().fromArray(Y);function lt(V,ft,gt,Tt){let ct=new Uint8Array(4),nt=i.createTexture();i.bindTexture(V,nt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<gt;Dt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(ft+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return nt}let Q={};Q[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(i.DEPTH_TEST),o.setFunc(es),kt(!1),Rt(Tl),H(i.CULL_FACE),me(fi);function H(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function it(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function bt(V,ft){return u[V]!==ft?(i.bindFramebuffer(V,ft),u[V]=ft,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function dt(V,ft){let gt=d,Tt=!1;if(V){gt=f.get(ft),gt===void 0&&(gt=[],f.set(ft,gt));let ct=V.textures;if(gt.length!==ct.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Dt=ct.length;nt<Dt;nt++)gt[nt]=i.COLOR_ATTACHMENT0+nt;gt.length=ct.length,Tt=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(gt)}function Ft(V){return g!==V?(i.useProgram(V),g=V,!0):!1}let de={[Di]:i.FUNC_ADD,[tu]:i.FUNC_SUBTRACT,[eu]:i.FUNC_REVERSE_SUBTRACT};de[nu]=i.MIN,de[iu]=i.MAX;let B={[su]:i.ZERO,[ru]:i.ONE,[ou]:i.SRC_COLOR,[qo]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[hu]:i.DST_COLOR,[cu]:i.DST_ALPHA,[au]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[lu]:i.ONE_MINUS_DST_ALPHA,[du]:i.CONSTANT_COLOR,[pu]:i.ONE_MINUS_CONSTANT_COLOR,[mu]:i.CONSTANT_ALPHA,[gu]:i.ONE_MINUS_CONSTANT_ALPHA};function me(V,ft,gt,Tt,ct,nt,Dt,Kt,Te,ge){if(V===fi){v===!0&&(it(i.BLEND),v=!1);return}if(v===!1&&(H(i.BLEND),v=!0),V!==Kh){if(V!==m||ge!==_){if((p!==Di||y!==Di)&&(i.blendEquation(i.FUNC_ADD),p=Di,y=Di),ge)switch(V){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Il:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,M=null,S=null,T=null,I.set(0,0,0),F=0,m=V,_=ge}return}ct=ct||ft,nt=nt||gt,Dt=Dt||Tt,(ft!==p||ct!==y)&&(i.blendEquationSeparate(de[ft],de[ct]),p=ft,y=ct),(gt!==b||Tt!==M||nt!==S||Dt!==T)&&(i.blendFuncSeparate(B[gt],B[Tt],B[nt],B[Dt]),b=gt,M=Tt,S=nt,T=Dt),(Kt.equals(I)===!1||Te!==F)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Te),I.copy(Kt),F=Te),m=V,_=!1}function Zt(V,ft){V.side===_n?it(i.CULL_FACE):H(i.CULL_FACE);let gt=V.side===fn;ft&&(gt=!gt),kt(gt),V.blending===ts&&V.transparent===!1?me(fi):me(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Tt=V.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ct(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?H(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function kt(V){x!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),x=V)}function Rt(V){V!==Qh?(H(i.CULL_FACE),V!==E&&(V===Tl?i.cullFace(i.BACK):V===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),E=V}function we(V){V!==P&&(O&&i.lineWidth(V),P=V)}function Ct(V,ft,gt){V?(H(i.POLYGON_OFFSET_FILL),(L!==ft||R!==gt)&&(i.polygonOffset(ft,gt),L=ft,R=gt)):it(i.POLYGON_OFFSET_FILL)}function ne(V){V?H(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Qe(V){V===void 0&&(V=i.TEXTURE0+C-1),k!==V&&(i.activeTexture(V),k=V)}function ze(V,ft,gt){gt===void 0&&(k===null?gt=i.TEXTURE0+C-1:gt=k);let Tt=G[gt];Tt===void 0&&(Tt={type:void 0,texture:void 0},G[gt]=Tt),(Tt.type!==V||Tt.texture!==ft)&&(k!==gt&&(i.activeTexture(gt),k=gt),i.bindTexture(V,ft||Q[V]),Tt.type=V,Tt.texture=ft)}function U(){let V=G[k];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(V){et.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),et.copy(V))}function Xt(V){xt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),xt.copy(V))}function Bt(V,ft){let gt=l.get(ft);gt===void 0&&(gt=new WeakMap,l.set(ft,gt));let Tt=gt.get(V);Tt===void 0&&(Tt=i.getUniformBlockIndex(ft,V.name),gt.set(V,Tt))}function Mt(V,ft){let Tt=l.get(ft).get(V);c.get(ft)!==Tt&&(i.uniformBlockBinding(ft,Tt,V.__bindingPointIndex),c.set(ft,Tt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},k=null,G={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,b=null,M=null,y=null,S=null,T=null,I=new ie(0,0,0),F=0,_=!1,x=null,E=null,P=null,L=null,R=null,et.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:it,bindFramebuffer:bt,drawBuffers:dt,useProgram:Ft,setBlending:me,setMaterial:Zt,setFlipSided:kt,setCullFace:Rt,setLineWidth:we,setPolygonOffset:Ct,setScissorTest:ne,activeTexture:Qe,bindTexture:ze,unbindTexture:U,compressedTexImage2D:w,compressedTexImage3D:Z,texImage2D:Ot,texImage3D:ut,updateUBOMapping:Bt,uniformBlockBinding:Mt,texStorage2D:mt,texStorage3D:Nt,texSubImage2D:tt,texSubImage3D:ot,compressedTexSubImage2D:K,compressedTexSubImage3D:zt,scissor:Et,viewport:Xt,reset:ee}}function k1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,w){return d?new OffscreenCanvas(U,w):Er("canvas")}function v(U,w,Z){let tt=1,ot=ze(U);if((ot.width>Z||ot.height>Z)&&(tt=Z/Math.max(ot.width,ot.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&U instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&U instanceof ImageBitmap||typeof VideoFrame!="undefined"&&U instanceof VideoFrame){let K=Math.floor(tt*ot.width),zt=Math.floor(tt*ot.height);u===void 0&&(u=g(K,zt));let mt=w?g(K,zt):u;return mt.width=K,mt.height=zt,mt.getContext("2d").drawImage(U,0,0,K,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+K+"x"+zt+")."),mt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function b(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(U,w,Z,tt,ot=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let K=w;if(w===i.RED&&(Z===i.FLOAT&&(K=i.R32F),Z===i.HALF_FLOAT&&(K=i.R16F),Z===i.UNSIGNED_BYTE&&(K=i.R8)),w===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(K=i.R8UI),Z===i.UNSIGNED_SHORT&&(K=i.R16UI),Z===i.UNSIGNED_INT&&(K=i.R32UI),Z===i.BYTE&&(K=i.R8I),Z===i.SHORT&&(K=i.R16I),Z===i.INT&&(K=i.R32I)),w===i.RG&&(Z===i.FLOAT&&(K=i.RG32F),Z===i.HALF_FLOAT&&(K=i.RG16F),Z===i.UNSIGNED_BYTE&&(K=i.RG8)),w===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(K=i.RG8UI),Z===i.UNSIGNED_SHORT&&(K=i.RG16UI),Z===i.UNSIGNED_INT&&(K=i.RG32UI),Z===i.BYTE&&(K=i.RG8I),Z===i.SHORT&&(K=i.RG16I),Z===i.INT&&(K=i.RG32I)),w===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),Z===i.UNSIGNED_INT&&(K=i.RGB32UI),Z===i.BYTE&&(K=i.RGB8I),Z===i.SHORT&&(K=i.RGB16I),Z===i.INT&&(K=i.RGB32I)),w===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),Z===i.UNSIGNED_INT&&(K=i.RGBA32UI),Z===i.BYTE&&(K=i.RGBA8I),Z===i.SHORT&&(K=i.RGBA16I),Z===i.INT&&(K=i.RGBA32I)),w===i.RGB&&(Z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),w===i.RGBA){let zt=ot?br:ue.getTransfer(tt);Z===i.FLOAT&&(K=i.RGBA32F),Z===i.HALF_FLOAT&&(K=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(K=zt===ye?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(U,w){let Z;return U?w===null||w===zi||w===Ys?Z=i.DEPTH24_STENCIL8:w===Xn?Z=i.DEPTH32F_STENCIL8:w===Xs&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===zi||w===Ys?Z=i.DEPTH_COMPONENT24:w===Xn?Z=i.DEPTH_COMPONENT32F:w===Xs&&(Z=i.DEPTH_COMPONENT16),Z}function S(U,w){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==gn&&U.minFilter!==zn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function T(U){let w=U.target;w.removeEventListener("dispose",T),F(w),w.isVideoTexture&&h.delete(w)}function I(U){let w=U.target;w.removeEventListener("dispose",I),x(w)}function F(U){let w=n.get(U);if(w.__webglInit===void 0)return;let Z=U.source,tt=f.get(Z);if(tt){let ot=tt[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&_(U),Object.keys(tt).length===0&&f.delete(Z)}n.remove(U)}function _(U){let w=n.get(U);i.deleteTexture(w.__webglTexture);let Z=U.source,tt=f.get(Z);delete tt[w.__cacheKey],o.memory.textures--}function x(U){let w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(w.__webglFramebuffer[tt]))for(let ot=0;ot<w.__webglFramebuffer[tt].length;ot++)i.deleteFramebuffer(w.__webglFramebuffer[tt][ot]);else i.deleteFramebuffer(w.__webglFramebuffer[tt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[tt])}else{if(Array.isArray(w.__webglFramebuffer))for(let tt=0;tt<w.__webglFramebuffer.length;tt++)i.deleteFramebuffer(w.__webglFramebuffer[tt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let tt=0;tt<w.__webglColorRenderbuffer.length;tt++)w.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[tt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Z=U.textures;for(let tt=0,ot=Z.length;tt<ot;tt++){let K=n.get(Z[tt]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(Z[tt])}n.remove(U)}let E=0;function P(){E=0}function L(){let U=E;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),E+=1,U}function R(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function C(U,w){let Z=n.get(U);if(U.isVideoTexture&&ne(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Z.__version!==U.version){let tt=U.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,U,w);return}}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+w)}function O(U,w){let Z=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){Q(Z,U,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+w)}function W(U,w){let Z=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){Q(Z,U,w);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+w)}function D(U,w){let Z=n.get(U);if(U.version>0&&Z.__version!==U.version){H(Z,U,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+w)}let k={[Zo]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},G={[gn]:i.NEAREST,[wu]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Bi]:i.LINEAR_MIPMAP_LINEAR},J={[Cu]:i.NEVER,[Uu]:i.ALWAYS,[Iu]:i.LESS,[Hl]:i.LEQUAL,[Pu]:i.EQUAL,[Fu]:i.GEQUAL,[Du]:i.GREATER,[Lu]:i.NOTEQUAL};function Y(U,w){if(w.type===Xn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===zn||w.magFilter===Fa||w.magFilter===Kr||w.magFilter===Bi||w.minFilter===zn||w.minFilter===Fa||w.minFilter===Kr||w.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,k[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,k[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,k[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,G[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,G[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,J[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===gn||w.minFilter!==Kr&&w.minFilter!==Bi||w.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function et(U,w){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",T));let tt=w.source,ot=f.get(tt);ot===void 0&&(ot={},f.set(tt,ot));let K=R(w);if(K!==U.__cacheKey){ot[K]===void 0&&(ot[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ot[K].usedTimes++;let zt=ot[U.__cacheKey];zt!==void 0&&(ot[U.__cacheKey].usedTimes--,zt.usedTimes===0&&_(w)),U.__cacheKey=K,U.__webglTexture=ot[K].texture}return Z}function xt(U,w,Z){return Math.floor(Math.floor(U/Z)/w)}function lt(U,w,Z,tt){let K=U.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,Z,tt,w.data);else{K.sort((ut,Et)=>ut.start-Et.start);let zt=0;for(let ut=1;ut<K.length;ut++){let Et=K[zt],Xt=K[ut],Bt=Et.start+Et.count,Mt=xt(Xt.start,w.width,4),ee=xt(Et.start,w.width,4);Xt.start<=Bt+1&&Mt===ee&&xt(Xt.start+Xt.count-1,w.width,4)===Mt?Et.count=Math.max(Et.count,Xt.start+Xt.count-Et.start):(++zt,K[zt]=Xt)}K.length=zt+1;let mt=i.getParameter(i.UNPACK_ROW_LENGTH),Nt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ot=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ut=0,Et=K.length;ut<Et;ut++){let Xt=K[ut],Bt=Math.floor(Xt.start/4),Mt=Math.ceil(Xt.count/4),ee=Bt%w.width,V=Math.floor(Bt/w.width),ft=Mt,gt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,ee,V,ft,gt,Z,tt,w.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ot)}}function Q(U,w,Z){let tt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(tt=i.TEXTURE_3D);let ot=et(U,w),K=w.source;e.bindTexture(tt,U.__webglTexture,i.TEXTURE0+Z);let zt=n.get(K);if(K.version!==zt.__version||ot===!0){e.activeTexture(i.TEXTURE0+Z);let mt=ue.getPrimaries(ue.workingColorSpace),Nt=w.colorSpace===pi?null:ue.getPrimaries(w.colorSpace),Ot=w.colorSpace===pi||mt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let ut=v(w.image,!1,s.maxTextureSize);ut=Qe(w,ut);let Et=r.convert(w.format,w.colorSpace),Xt=r.convert(w.type),Bt=M(w.internalFormat,Et,Xt,w.colorSpace,w.isVideoTexture);Y(tt,w);let Mt,ee=w.mipmaps,V=w.isVideoTexture!==!0,ft=zt.__version===void 0||ot===!0,gt=K.dataReady,Tt=S(w,ut);if(w.isDepthTexture)Bt=y(w.format===Zs,w.type),ft&&(V?e.texStorage2D(i.TEXTURE_2D,1,Bt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ut.width,ut.height,0,Et,Xt,null));else if(w.isDataTexture)if(ee.length>0){V&&ft&&e.texStorage2D(i.TEXTURE_2D,Tt,Bt,ee[0].width,ee[0].height);for(let ct=0,nt=ee.length;ct<nt;ct++)Mt=ee[ct],V?gt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,Et,Xt,Mt.data):e.texImage2D(i.TEXTURE_2D,ct,Bt,Mt.width,Mt.height,0,Et,Xt,Mt.data);w.generateMipmaps=!1}else V?(ft&&e.texStorage2D(i.TEXTURE_2D,Tt,Bt,ut.width,ut.height),gt&&lt(w,ut,Et,Xt)):e.texImage2D(i.TEXTURE_2D,0,Bt,ut.width,ut.height,0,Et,Xt,ut.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){V&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Bt,ee[0].width,ee[0].height,ut.depth);for(let ct=0,nt=ee.length;ct<nt;ct++)if(Mt=ee[ct],w.format!==Pn)if(Et!==null)if(V){if(gt)if(w.layerUpdates.size>0){let Dt=Zl(Mt.width,Mt.height,w.format,w.type);for(let Kt of w.layerUpdates){let Te=Mt.data.subarray(Kt*Dt/Mt.data.BYTES_PER_ELEMENT,(Kt+1)*Dt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Kt,Mt.width,Mt.height,1,Et,Te)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,ut.depth,Et,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Bt,Mt.width,Mt.height,ut.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,ut.depth,Et,Xt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Bt,Mt.width,Mt.height,ut.depth,0,Et,Xt,Mt.data)}else{V&&ft&&e.texStorage2D(i.TEXTURE_2D,Tt,Bt,ee[0].width,ee[0].height);for(let ct=0,nt=ee.length;ct<nt;ct++)Mt=ee[ct],w.format!==Pn?Et!==null?V?gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,Et,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Bt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?gt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,Et,Xt,Mt.data):e.texImage2D(i.TEXTURE_2D,ct,Bt,Mt.width,Mt.height,0,Et,Xt,Mt.data)}else if(w.isDataArrayTexture)if(V){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Bt,ut.width,ut.height,ut.depth),gt)if(w.layerUpdates.size>0){let ct=Zl(ut.width,ut.height,w.format,w.type);for(let nt of w.layerUpdates){let Dt=ut.data.subarray(nt*ct/ut.data.BYTES_PER_ELEMENT,(nt+1)*ct/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ut.width,ut.height,1,Et,Xt,Dt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Et,Xt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ut.width,ut.height,ut.depth,0,Et,Xt,ut.data);else if(w.isData3DTexture)V?(ft&&e.texStorage3D(i.TEXTURE_3D,Tt,Bt,ut.width,ut.height,ut.depth),gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Et,Xt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ut.width,ut.height,ut.depth,0,Et,Xt,ut.data);else if(w.isFramebufferTexture){if(ft)if(V)e.texStorage2D(i.TEXTURE_2D,Tt,Bt,ut.width,ut.height);else{let ct=ut.width,nt=ut.height;for(let Dt=0;Dt<Tt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Bt,ct,nt,0,Et,Xt,null),ct>>=1,nt>>=1}}else if(ee.length>0){if(V&&ft){let ct=ze(ee[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Bt,ct.width,ct.height)}for(let ct=0,nt=ee.length;ct<nt;ct++)Mt=ee[ct],V?gt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Et,Xt,Mt):e.texImage2D(i.TEXTURE_2D,ct,Bt,Et,Xt,Mt);w.generateMipmaps=!1}else if(V){if(ft){let ct=ze(ut);e.texStorage2D(i.TEXTURE_2D,Tt,Bt,ct.width,ct.height)}gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Xt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Et,Xt,ut);m(w)&&p(tt),zt.__version=K.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function H(U,w,Z){if(w.image.length!==6)return;let tt=et(U,w),ot=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+Z);let K=n.get(ot);if(ot.version!==K.__version||tt===!0){e.activeTexture(i.TEXTURE0+Z);let zt=ue.getPrimaries(ue.workingColorSpace),mt=w.colorSpace===pi?null:ue.getPrimaries(w.colorSpace),Nt=w.colorSpace===pi||zt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let Ot=w.isCompressedTexture||w.image[0].isCompressedTexture,ut=w.image[0]&&w.image[0].isDataTexture,Et=[];for(let nt=0;nt<6;nt++)!Ot&&!ut?Et[nt]=v(w.image[nt],!0,s.maxCubemapSize):Et[nt]=ut?w.image[nt].image:w.image[nt],Et[nt]=Qe(w,Et[nt]);let Xt=Et[0],Bt=r.convert(w.format,w.colorSpace),Mt=r.convert(w.type),ee=M(w.internalFormat,Bt,Mt,w.colorSpace),V=w.isVideoTexture!==!0,ft=K.__version===void 0||tt===!0,gt=ot.dataReady,Tt=S(w,Xt);Y(i.TEXTURE_CUBE_MAP,w);let ct;if(Ot){V&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ee,Xt.width,Xt.height);for(let nt=0;nt<6;nt++){ct=Et[nt].mipmaps;for(let Dt=0;Dt<ct.length;Dt++){let Kt=ct[Dt];w.format!==Pn?Bt!==null?V?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,0,0,Kt.width,Kt.height,Bt,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,ee,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,0,0,Kt.width,Kt.height,Bt,Mt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt,ee,Kt.width,Kt.height,0,Bt,Mt,Kt.data)}}}else{if(ct=w.mipmaps,V&&ft){ct.length>0&&Tt++;let nt=ze(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ee,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ut){V?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Et[nt].width,Et[nt].height,Bt,Mt,Et[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ee,Et[nt].width,Et[nt].height,0,Bt,Mt,Et[nt].data);for(let Dt=0;Dt<ct.length;Dt++){let Te=ct[Dt].image[nt].image;V?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,0,0,Te.width,Te.height,Bt,Mt,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,ee,Te.width,Te.height,0,Bt,Mt,Te.data)}}else{V?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Bt,Mt,Et[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ee,Bt,Mt,Et[nt]);for(let Dt=0;Dt<ct.length;Dt++){let Kt=ct[Dt];V?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,0,0,Bt,Mt,Kt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Dt+1,ee,Bt,Mt,Kt.image[nt])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),K.__version=ot.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function it(U,w,Z,tt,ot,K){let zt=r.convert(Z.format,Z.colorSpace),mt=r.convert(Z.type),Nt=M(Z.internalFormat,zt,mt,Z.colorSpace),Ot=n.get(w),ut=n.get(Z);if(ut.__renderTarget=w,!Ot.__hasExternalTextures){let Et=Math.max(1,w.width>>K),Xt=Math.max(1,w.height>>K);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,K,Nt,Et,Xt,w.depth,0,zt,mt,null):e.texImage2D(ot,K,Nt,Et,Xt,0,zt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Ct(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,ot,ut.__webglTexture,0,we(w)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,ot,ut.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(U,w,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){let tt=w.depthTexture,ot=tt&&tt.isDepthTexture?tt.type:null,K=y(w.stencilBuffer,ot),zt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=we(w);Ct(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,K,w.width,w.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,K,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,K,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,U)}else{let tt=w.textures;for(let ot=0;ot<tt.length;ot++){let K=tt[ot],zt=r.convert(K.format,K.colorSpace),mt=r.convert(K.type),Nt=M(K.internalFormat,zt,mt,K.colorSpace),Ot=we(w);Z&&Ct(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Nt,w.width,w.height):Ct(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot,Nt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(w.depthTexture);tt.__renderTarget=w,(!tt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),C(w.depthTexture,0);let ot=tt.__webglTexture,K=we(w);if(w.depthTexture.format===Fs)Ct(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(w.depthTexture.format===Zs)Ct(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Ft(U){let w=n.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){let tt=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),tt){let ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,tt.removeEventListener("dispose",ot)};tt.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=tt}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");let tt=U.texture.mipmaps;tt&&tt.length>0?dt(w.__webglFramebuffer[0],U):dt(w.__webglFramebuffer,U)}else if(Z){w.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[tt]),w.__webglDepthbuffer[tt]===void 0)w.__webglDepthbuffer[tt]=i.createRenderbuffer(),bt(w.__webglDepthbuffer[tt],U,!1);else{let ot=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,K)}}else{let tt=U.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),bt(w.__webglDepthbuffer,U,!1);else{let ot=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function de(U,w,Z){let tt=n.get(U);w!==void 0&&it(tt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Ft(U)}function B(U){let w=U.texture,Z=n.get(U),tt=n.get(w);U.addEventListener("dispose",I);let ot=U.textures,K=U.isWebGLCubeRenderTarget===!0,zt=ot.length>1;if(zt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=w.version,o.memory.textures++),K){Z.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[mt]=[];for(let Nt=0;Nt<w.mipmaps.length;Nt++)Z.__webglFramebuffer[mt][Nt]=i.createFramebuffer()}else Z.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let mt=0;mt<w.mipmaps.length;mt++)Z.__webglFramebuffer[mt]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(zt)for(let mt=0,Nt=ot.length;mt<Nt;mt++){let Ot=n.get(ot[mt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&Ct(U)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let mt=0;mt<ot.length;mt++){let Nt=ot[mt];Z.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[mt]);let Ot=r.convert(Nt.format,Nt.colorSpace),ut=r.convert(Nt.type),Et=M(Nt.internalFormat,Ot,ut,Nt.colorSpace,U.isXRRenderTarget===!0),Xt=we(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Et,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Z.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(Z.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Y(i.TEXTURE_CUBE_MAP,w);for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Nt=0;Nt<w.mipmaps.length;Nt++)it(Z.__webglFramebuffer[mt][Nt],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Nt);else it(Z.__webglFramebuffer[mt],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let mt=0,Nt=ot.length;mt<Nt;mt++){let Ot=ot[mt],ut=n.get(Ot),Et=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Et=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,ut.__webglTexture),Y(Et,Ot),it(Z.__webglFramebuffer,U,Ot,i.COLOR_ATTACHMENT0+mt,Et,0),m(Ot)&&p(Et)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(mt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,tt.__webglTexture),Y(mt,w),w.mipmaps&&w.mipmaps.length>0)for(let Nt=0;Nt<w.mipmaps.length;Nt++)it(Z.__webglFramebuffer[Nt],U,w,i.COLOR_ATTACHMENT0,mt,Nt);else it(Z.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,mt,0);m(w)&&p(mt),e.unbindTexture()}U.depthBuffer&&Ft(U)}function me(U){let w=U.textures;for(let Z=0,tt=w.length;Z<tt;Z++){let ot=w[Z];if(m(ot)){let K=b(U),zt=n.get(ot).__webglTexture;e.bindTexture(K,zt),p(K),e.unbindTexture()}}}let Zt=[],kt=[];function Rt(U){if(U.samples>0){if(Ct(U)===!1){let w=U.textures,Z=U.width,tt=U.height,ot=i.COLOR_BUFFER_BIT,K=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(U),mt=w.length>1;if(mt)for(let Ot=0;Ot<w.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);let Nt=U.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ot=0;Ot<w.length;Ot++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Ot]);let ut=n.get(w[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,Z,tt,0,0,Z,tt,ot,i.NEAREST),c===!0&&(Zt.length=0,kt.length=0,Zt.push(i.COLOR_ATTACHMENT0+Ot),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Zt.push(K),kt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Ot=0;Ot<w.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,zt.__webglColorRenderbuffer[Ot]);let ut=n.get(w[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){let w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function we(U){return Math.min(s.maxSamples,U.samples)}function Ct(U){let w=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ne(U){let w=o.render.frame;h.get(U)!==w&&(h.set(U,w),U.update())}function Qe(U,w){let Z=U.colorSpace,tt=U.format,ot=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==ns&&Z!==pi&&(ue.getTransfer(Z)===ye?(tt!==Pn||ot!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function ze(U){return typeof HTMLImageElement!="undefined"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame!="undefined"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=P,this.setTexture2D=C,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=D,this.rebindTextures=de,this.setupRenderTarget=B,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Ct}function H1(i,t){function e(n,s=pi){let r,o=ue.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ll)return i.BYTE;if(n===Fl)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===qs)return i.HALF_FLOAT;if(n===Ol)return i.ALPHA;if(n===Bl)return i.RGB;if(n===Pn)return i.RGBA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===za)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Ha)return i.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ga||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===Ya)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===$a||n===Qa||n===ja||n===Ka||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ja)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ic)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ac)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===hc||n===uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lc)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===dc||n===pc||n===mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var V1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G1=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Vn({vertexShader:V1,fragmentShader:G1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,v=typeof XRWebGLBinding!="undefined",m=new ah,p={},b=e.getContextAttributes(),M=null,y=null,S=[],T=[],I=new Lt,F=null,_=new on;_.viewport=new Fe;let x=new on;x.viewport=new Fe;let E=[_,x],P=new ba,L=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let H=S[Q];return H===void 0&&(H=new Bs,S[Q]=H),H.getTargetRaySpace()},this.getControllerGrip=function(Q){let H=S[Q];return H===void 0&&(H=new Bs,S[Q]=H),H.getGripSpace()},this.getHand=function(Q){let H=S[Q];return H===void 0&&(H=new Bs,S[Q]=H),H.getHandSpace()};function C(Q){let H=T.indexOf(Q.inputSource);if(H===-1)return;let it=S[H];it!==void 0&&(it.update(Q.inputSource,Q.frame,l||o),it.dispatchEvent({type:Q.type,data:Q.inputSource}))}function O(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",W);for(let Q=0;Q<S.length;Q++){let H=T[Q];H!==null&&(T[Q]=null,S[Q].disconnect(H))}L=null,R=null,m.reset();for(let Q in p)delete p[Q];t.setRenderTarget(M),d=null,f=null,u=null,s=null,y=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",O),s.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,bt=null,dt=null;b.depth&&(dt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=b.stencil?Zs:Fs,bt=b.stencil?Ys:zi);let Ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Jn(f.textureWidth,f.textureHeight,{format:Pn,type:Wn,depthTexture:new Fr(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let it={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Jn(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Q){for(let H=0;H<Q.removed.length;H++){let it=Q.removed[H],bt=T.indexOf(it);bt>=0&&(T[bt]=null,S[bt].disconnect(it))}for(let H=0;H<Q.added.length;H++){let it=Q.added[H],bt=T.indexOf(it);if(bt===-1){for(let Ft=0;Ft<S.length;Ft++)if(Ft>=T.length){T.push(it),bt=Ft;break}else if(T[Ft]===null){T[Ft]=it,bt=Ft;break}if(bt===-1)break}let dt=S[bt];dt&&dt.connect(it)}}let D=new z,k=new z;function G(Q,H,it){D.setFromMatrixPosition(H.matrixWorld),k.setFromMatrixPosition(it.matrixWorld);let bt=D.distanceTo(k),dt=H.projectionMatrix.elements,Ft=it.projectionMatrix.elements,de=dt[14]/(dt[10]-1),B=dt[14]/(dt[10]+1),me=(dt[9]+1)/dt[5],Zt=(dt[9]-1)/dt[5],kt=(dt[8]-1)/dt[0],Rt=(Ft[8]+1)/Ft[0],we=de*kt,Ct=de*Rt,ne=bt/(-kt+Rt),Qe=ne*-kt;if(H.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Qe),Q.translateZ(ne),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),dt[10]===-1)Q.projectionMatrix.copy(H.projectionMatrix),Q.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let ze=de+ne,U=B+ne,w=we-Qe,Z=Ct+(bt-Qe),tt=me*B/U*ze,ot=Zt*B/U*ze;Q.projectionMatrix.makePerspective(w,Z,tt,ot,ze,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function J(Q,H){H===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(H.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let H=Q.near,it=Q.far;m.texture!==null&&(m.depthNear>0&&(H=m.depthNear),m.depthFar>0&&(it=m.depthFar)),P.near=x.near=_.near=H,P.far=x.far=_.far=it,(L!==P.near||R!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),L=P.near,R=P.far),P.layers.mask=Q.layers.mask|6,_.layers.mask=P.layers.mask&3,x.layers.mask=P.layers.mask&5;let bt=Q.parent,dt=P.cameras;J(P,bt);for(let Ft=0;Ft<dt.length;Ft++)J(dt[Ft],bt);dt.length===2?G(P,_,x):P.projectionMatrix.copy(_.projectionMatrix),Y(Q,P,bt)};function Y(Q,H,it){it===null?Q.matrix.copy(H.matrixWorld):(Q.matrix.copy(it.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(H.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(H.projectionMatrix),Q.projectionMatrixInverse.copy(H.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Qo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(Q){return p[Q]};let et=null;function xt(Q,H){if(h=H.getViewerPose(l||o),g=H,h!==null){let it=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let bt=!1;it.length!==P.cameras.length&&(P.cameras.length=0,bt=!0);for(let B=0;B<it.length;B++){let me=it[B],Zt=null;if(d!==null)Zt=d.getViewport(me);else{let Rt=u.getViewSubImage(f,me);Zt=Rt.viewport,B===0&&(t.setRenderTargetTextures(y,Rt.colorTexture,Rt.depthStencilTexture),t.setRenderTarget(y))}let kt=E[B];kt===void 0&&(kt=new on,kt.layers.enable(B),kt.viewport=new Fe,E[B]=kt),kt.matrix.fromArray(me.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(me.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),B===0&&(P.matrix.copy(kt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),bt===!0&&P.cameras.push(kt)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let B=u.getDepthInformation(it[0]);B&&B.isValid&&B.texture&&m.init(B,s.renderState)}if(dt&&dt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let B=0;B<it.length;B++){let me=it[B].camera;if(me){let Zt=p[me];Zt||(Zt=new Ur,p[me]=Zt);let kt=u.getCameraImage(me);Zt.sourceTexture=kt}}}}for(let it=0;it<S.length;it++){let bt=T[it],dt=S[it];bt!==null&&dt!==void 0&&dt.update(bt,H,l||o)}et&&et(Q,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}let lt=new mf;lt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){et=Q},this.dispose=function(){}}},hs=new Hn,W1=new ve;function X1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),M=b.envMap,y=b.envMapRotation;M&&(m.envMap.value=M,hs.copy(y),hs.x*=-1,hs.y*=-1,hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),m.envMapRotation.value.setFromMatrix4(W1.makeRotationFromEuler(hs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function q1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let y=M.program;n.uniformBlockBinding(b,y)}function l(b,M){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let S=M.program;n.updateUBOMapping(b,S);let T=t.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function h(b){let M=u();b.__bindingPointIndex=M;let y=i.createBuffer(),S=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,S,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=s[b.id],y=b.uniforms,S=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,I=y.length;T<I;T++){let F=Array.isArray(y[T])?y[T]:[y[T]];for(let _=0,x=F.length;_<x;_++){let E=F[_];if(d(E,T,_,S)===!0){let P=E.__offset,L=Array.isArray(E.value)?E.value:[E.value],R=0;for(let C=0;C<L.length;C++){let O=L[C],W=v(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,P+R,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,R),R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,M,y,S){let T=b.value,I=M+"_"+y;if(S[I]===void 0)return typeof T=="number"||typeof T=="boolean"?S[I]=T:S[I]=T.clone(),!0;{let F=S[I];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return S[I]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(b){let M=b.uniforms,y=0,S=16;for(let I=0,F=M.length;I<F;I++){let _=Array.isArray(M[I])?M[I]:[M[I]];for(let x=0,E=_.length;x<E;x++){let P=_[x],L=Array.isArray(P.value)?P.value:[P.value];for(let R=0,C=L.length;R<C;R++){let O=L[R],W=v(O),D=y%S,k=D%W.boundary,G=D+k;y+=k,G!==0&&S-G<W.storage&&(y+=S-G),P.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=W.storage}}}let T=y%S;return T>0&&(y+=S-T),b.__size=y,b.__cache={},this}function v(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var vc=class{constructor(t={}){let{canvas:e=Nu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,S=!1;this._outputColorSpace=En;let T=0,I=0,F=null,_=-1,x=null,E=new Fe,P=new Fe,L=null,R=new ie(0),C=0,O=e.width,W=e.height,D=1,k=null,G=null,J=new Fe(0,0,O,W),Y=new Fe(0,0,O,W),et=!1,xt=new zs,lt=!1,Q=!1,H=new ve,it=new z,bt=new Fe,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function de(){return F===null?D:1}let B=n;function me(A,X){return e.getContext(A,X)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),B===null){let X="webgl2";if(B=me(X,A),B===null)throw me(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Zt,kt,Rt,we,Ct,ne,Qe,ze,U,w,Z,tt,ot,K,zt,mt,Nt,Ot,ut,Et,Xt,Bt,Mt,ee;function V(){Zt=new h0(B),Zt.init(),Bt=new H1(B,Zt),kt=new i0(B,Zt,t,Bt),Rt=new z1(B,Zt),kt.reversedDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),we=new d0(B),Ct=new T1,ne=new k1(B,Zt,Rt,Ct,kt,Bt,we),Qe=new r0(y),ze=new l0(y),U=new yp(B),Mt=new e0(B,U),w=new u0(B,U,we,Mt),Z=new m0(B,w,U,we),ut=new p0(B,kt,ne),mt=new s0(Ct),tt=new w1(y,Qe,ze,Zt,kt,Mt,mt),ot=new X1(y,Ct),K=new R1,zt=new F1(Zt),Ot=new t0(y,Qe,ze,Rt,Z,d,c),Nt=new O1(y,Z,kt),ee=new q1(B,we,kt,Rt),Et=new n0(B,Zt,we),Xt=new f0(B,Zt,we),we.programs=tt.programs,y.capabilities=kt,y.extensions=Zt,y.properties=Ct,y.renderLists=K,y.shadowMap=Nt,y.state=Rt,y.info=we}V();let ft=new ch(y,B);this.xr=ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=Zt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Zt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(O,W,!1))},this.getSize=function(A){return A.set(O,W)},this.setSize=function(A,X,$=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,W=X,e.width=Math.floor(A*D),e.height=Math.floor(X*D),$===!0&&(e.style.width=A+"px",e.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(O*D,W*D).floor()},this.setDrawingBufferSize=function(A,X,$){O=A,W=X,D=$,e.width=Math.floor(A*$),e.height=Math.floor(X*$),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,X,$,j){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,X,$,j),Rt.viewport(E.copy(J).multiplyScalar(D).round())},this.getScissor=function(A){return A.copy(Y)},this.setScissor=function(A,X,$,j){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,X,$,j),Rt.scissor(P.copy(Y).multiplyScalar(D).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(A){Rt.setScissorTest(et=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,$=!0){let j=0;if(A){let q=!1;if(F!==null){let ht=F.texture.format;q=ht===Ha||ht===ka||ht===za}if(q){let ht=F.texture.type,St=ht===Wn||ht===zi||ht===Xs||ht===Ys||ht===Na||ht===Oa,It=Ot.getClearColor(),wt=Ot.getClearAlpha(),Wt=It.r,qt=It.g,Ht=It.b;St?(g[0]=Wt,g[1]=qt,g[2]=Ht,g[3]=wt,B.clearBufferuiv(B.COLOR,0,g)):(v[0]=Wt,v[1]=qt,v[2]=Ht,v[3]=wt,B.clearBufferiv(B.COLOR,0,v))}else j|=B.COLOR_BUFFER_BIT}X&&(j|=B.DEPTH_BUFFER_BIT),$&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Ot.dispose(),K.dispose(),zt.dispose(),Ct.dispose(),Qe.dispose(),ze.dispose(),Z.dispose(),Mt.dispose(),ee.dispose(),tt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Zn),ft.removeEventListener("sessionend",_h),Yi.stop()};function gt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let A=we.autoReset,X=Nt.enabled,$=Nt.autoUpdate,j=Nt.needsUpdate,q=Nt.type;V(),we.autoReset=A,Nt.enabled=X,Nt.autoUpdate=$,Nt.needsUpdate=j,Nt.type=q}function ct(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nt(A){let X=A.target;X.removeEventListener("dispose",nt),Dt(X)}function Dt(A){Kt(A),Ct.remove(A)}function Kt(A){let X=Ct.get(A).programs;X!==void 0&&(X.forEach(function($){tt.releaseProgram($)}),A.isShaderMaterial&&tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,$,j,q,ht){X===null&&(X=dt);let St=q.isMesh&&q.matrixWorld.determinant()<0,It=nd(A,X,$,j,q);Rt.setMaterial(j,St);let wt=$.index,Wt=1;if(j.wireframe===!0){if(wt=w.getWireframeAttribute($),wt===void 0)return;Wt=2}let qt=$.drawRange,Ht=$.attributes.position,ae=qt.start*Wt,be=(qt.start+qt.count)*Wt;ht!==null&&(ae=Math.max(ae,ht.start*Wt),be=Math.min(be,(ht.start+ht.count)*Wt)),wt!==null?(ae=Math.max(ae,0),be=Math.min(be,wt.count)):Ht!=null&&(ae=Math.max(ae,0),be=Math.min(be,Ht.count));let Oe=be-ae;if(Oe<0||Oe===1/0)return;Mt.setup(q,j,It,$,wt);let Ae,Se=Et;if(wt!==null&&(Ae=U.get(wt),Se=Xt,Se.setIndex(Ae)),q.isMesh)j.wireframe===!0?(Rt.setLineWidth(j.wireframeLinewidth*de()),Se.setMode(B.LINES)):Se.setMode(B.TRIANGLES);else if(q.isLine){let Vt=j.linewidth;Vt===void 0&&(Vt=1),Rt.setLineWidth(Vt*de()),q.isLineSegments?Se.setMode(B.LINES):q.isLineLoop?Se.setMode(B.LINE_LOOP):Se.setMode(B.LINE_STRIP)}else q.isPoints?Se.setMode(B.POINTS):q.isSprite&&Se.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))Se.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Vt=q._multiDrawStarts,Pe=q._multiDrawCounts,fe=q._multiDrawCount,vn=wt?U.get(wt).bytesPerElement:1,ys=Ct.get(j).currentProgram.getUniforms();for(let Mn=0;Mn<fe;Mn++)ys.setValue(B,"_gl_DrawID",Mn),Se.render(Vt[Mn]/vn,Pe[Mn])}else if(q.isInstancedMesh)Se.renderInstances(ae,Oe,q.count);else if($.isInstancedBufferGeometry){let Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pe=Math.min($.instanceCount,Vt);Se.renderInstances(ae,Oe,Pe)}else Se.render(ae,Oe)};function Te(A,X,$){A.transparent===!0&&A.side===_n&&A.forceSinglePass===!1?(A.side=fn,A.needsUpdate=!0,bo(A,X,$),A.side=hi,A.needsUpdate=!0,bo(A,X,$),A.side=_n):bo(A,X,$)}this.compile=function(A,X,$=null){$===null&&($=A),p=zt.get($),p.init(X),M.push(p),$.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),A!==$&&A.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();let j=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let ht=q.material;if(ht)if(Array.isArray(ht))for(let St=0;St<ht.length;St++){let It=ht[St];Te(It,$,q),j.add(It)}else Te(ht,$,q),j.add(ht)}),p=M.pop(),j},this.compileAsync=function(A,X,$=null){let j=this.compile(A,X,$);return new Promise(q=>{function ht(){if(j.forEach(function(St){Ct.get(St).currentProgram.isReady()&&j.delete(St)}),j.size===0){q(A);return}setTimeout(ht,10)}Zt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ge=null;function ii(A){ge&&ge(A)}function Zn(){Yi.stop()}function _h(){Yi.start()}let Yi=new mf;Yi.setAnimationLoop(ii),typeof self!="undefined"&&Yi.setContext(self),this.setAnimationLoop=function(A){ge=A,ft.setAnimationLoop(A),A===null?Yi.stop():Yi.start()},ft.addEventListener("sessionstart",Zn),ft.addEventListener("sessionend",_h),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(X),X=ft.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,X,F),p=zt.get(A,M.length),p.init(X),M.push(p),H.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),xt.setFromProjectionMatrix(H,Bn,X.reversedDepth),Q=this.localClippingEnabled,lt=mt.init(this.clippingPlanes,Q),m=K.get(A,b.length),m.init(),b.push(m),ft.enabled===!0&&ft.isPresenting===!0){let ht=y.xr.getDepthSensingMesh();ht!==null&&Bc(ht,X,-1/0,y.sortObjects)}Bc(A,X,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(k,G),Ft=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ft&&Ot.addToRenderList(m,A),this.info.render.frame++,lt===!0&&mt.beginShadows();let $=p.state.shadowsArray;Nt.render($,A,X),lt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){let ht=X.cameras;if(q.length>0)for(let St=0,It=ht.length;St<It;St++){let wt=ht[St];vh(j,q,A,wt)}Ft&&Ot.render(A);for(let St=0,It=ht.length;St<It;St++){let wt=ht[St];yh(m,A,wt,wt.viewport)}}else q.length>0&&vh(j,q,A,X),Ft&&Ot.render(A),yh(m,A,X);F!==null&&I===0&&(ne.updateMultisampleRenderTarget(F),ne.updateRenderTargetMipmap(F)),A.isScene===!0&&A.onAfterRender(y,A,X),Mt.resetDefaultState(),_=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],lt===!0&&mt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Bc(A,X,$,j){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xt.intersectsSprite(A)){j&&bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(H);let St=Z.update(A),It=A.material;It.visible&&m.push(A,St,It,$,bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xt.intersectsObject(A))){let St=Z.update(A),It=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),bt.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),bt.copy(St.boundingSphere.center)),bt.applyMatrix4(A.matrixWorld).applyMatrix4(H)),Array.isArray(It)){let wt=St.groups;for(let Wt=0,qt=wt.length;Wt<qt;Wt++){let Ht=wt[Wt],ae=It[Ht.materialIndex];ae&&ae.visible&&m.push(A,St,ae,$,bt.z,Ht)}}else It.visible&&m.push(A,St,It,$,bt.z,null)}}let ht=A.children;for(let St=0,It=ht.length;St<It;St++)Bc(ht[St],X,$,j)}function yh(A,X,$,j){let q=A.opaque,ht=A.transmissive,St=A.transparent;p.setupLightsView($),lt===!0&&mt.setGlobalState(y.clippingPlanes,$),j&&Rt.viewport(E.copy(j)),q.length>0&&Mo(q,X,$),ht.length>0&&Mo(ht,X,$),St.length>0&&Mo(St,X,$),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function vh(A,X,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Jn(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?qs:Wn,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));let ht=p.state.transmissionRenderTarget[j.id],St=j.viewport||E;ht.setSize(St.z*y.transmissionResolutionScale,St.w*y.transmissionResolutionScale);let It=y.getRenderTarget(),wt=y.getActiveCubeFace(),Wt=y.getActiveMipmapLevel();y.setRenderTarget(ht),y.getClearColor(R),C=y.getClearAlpha(),C<1&&y.setClearColor(16777215,.5),y.clear(),Ft&&Ot.render($);let qt=y.toneMapping;y.toneMapping=di;let Ht=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),lt===!0&&mt.setGlobalState(y.clippingPlanes,j),Mo(A,$,j),ne.updateMultisampleRenderTarget(ht),ne.updateRenderTargetMipmap(ht),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let be=0,Oe=X.length;be<Oe;be++){let Ae=X[be],Se=Ae.object,Vt=Ae.geometry,Pe=Ae.material,fe=Ae.group;if(Pe.side===_n&&Se.layers.test(j.layers)){let vn=Pe.side;Pe.side=fn,Pe.needsUpdate=!0,Mh(Se,$,j,Vt,Pe,fe),Pe.side=vn,Pe.needsUpdate=!0,ae=!0}}ae===!0&&(ne.updateMultisampleRenderTarget(ht),ne.updateRenderTargetMipmap(ht))}y.setRenderTarget(It,wt,Wt),y.setClearColor(R,C),Ht!==void 0&&(j.viewport=Ht),y.toneMapping=qt}function Mo(A,X,$){let j=X.isScene===!0?X.overrideMaterial:null;for(let q=0,ht=A.length;q<ht;q++){let St=A[q],It=St.object,wt=St.geometry,Wt=St.group,qt=St.material;qt.allowOverride===!0&&j!==null&&(qt=j),It.layers.test($.layers)&&Mh(It,X,$,wt,qt,Wt)}}function Mh(A,X,$,j,q,ht){A.onBeforeRender(y,X,$,j,q,ht),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(y,X,$,j,A,ht),q.transparent===!0&&q.side===_n&&q.forceSinglePass===!1?(q.side=fn,q.needsUpdate=!0,y.renderBufferDirect($,X,j,q,A,ht),q.side=hi,q.needsUpdate=!0,y.renderBufferDirect($,X,j,q,A,ht),q.side=_n):y.renderBufferDirect($,X,j,q,A,ht),A.onAfterRender(y,X,$,j,q,ht)}function bo(A,X,$){X.isScene!==!0&&(X=dt);let j=Ct.get(A),q=p.state.lights,ht=p.state.shadowsArray,St=q.state.version,It=tt.getParameters(A,q.state,ht,X,$),wt=tt.getProgramCacheKey(It),Wt=j.programs;j.environment=A.isMeshStandardMaterial?X.environment:null,j.fog=X.fog,j.envMap=(A.isMeshStandardMaterial?ze:Qe).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",nt),Wt=new Map,j.programs=Wt);let qt=Wt.get(wt);if(qt!==void 0){if(j.currentProgram===qt&&j.lightsStateVersion===St)return Sh(A,It),qt}else It.uniforms=tt.getUniforms(A),A.onBeforeCompile(It,y),qt=tt.acquireProgram(It,wt),Wt.set(wt,qt),j.uniforms=It.uniforms;let Ht=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ht.clippingPlanes=mt.uniform),Sh(A,It),j.needsLights=sd(A),j.lightsStateVersion=St,j.needsLights&&(Ht.ambientLightColor.value=q.state.ambient,Ht.lightProbe.value=q.state.probe,Ht.directionalLights.value=q.state.directional,Ht.directionalLightShadows.value=q.state.directionalShadow,Ht.spotLights.value=q.state.spot,Ht.spotLightShadows.value=q.state.spotShadow,Ht.rectAreaLights.value=q.state.rectArea,Ht.ltc_1.value=q.state.rectAreaLTC1,Ht.ltc_2.value=q.state.rectAreaLTC2,Ht.pointLights.value=q.state.point,Ht.pointLightShadows.value=q.state.pointShadow,Ht.hemisphereLights.value=q.state.hemi,Ht.directionalShadowMap.value=q.state.directionalShadowMap,Ht.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ht.spotShadowMap.value=q.state.spotShadowMap,Ht.spotLightMatrix.value=q.state.spotLightMatrix,Ht.spotLightMap.value=q.state.spotLightMap,Ht.pointShadowMap.value=q.state.pointShadowMap,Ht.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=qt,j.uniformsList=null,qt}function bh(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=Qs.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Sh(A,X){let $=Ct.get(A);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function nd(A,X,$,j,q){X.isScene!==!0&&(X=dt),ne.resetTextureUnits();let ht=X.fog,St=j.isMeshStandardMaterial?X.environment:null,It=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ns,wt=(j.isMeshStandardMaterial?ze:Qe).get(j.envMap||St),Wt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ht=!!$.morphAttributes.position,ae=!!$.morphAttributes.normal,be=!!$.morphAttributes.color,Oe=di;j.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Oe=y.toneMapping);let Ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Se=Ae!==void 0?Ae.length:0,Vt=Ct.get(j),Pe=p.state.lights;if(lt===!0&&(Q===!0||A!==x)){let un=A===x&&j.id===_;mt.setState(j,A,un)}let fe=!1;j.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Pe.state.version||Vt.outputColorSpace!==It||q.isBatchedMesh&&Vt.batching===!1||!q.isBatchedMesh&&Vt.batching===!0||q.isBatchedMesh&&Vt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Vt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Vt.instancing===!1||!q.isInstancedMesh&&Vt.instancing===!0||q.isSkinnedMesh&&Vt.skinning===!1||!q.isSkinnedMesh&&Vt.skinning===!0||q.isInstancedMesh&&Vt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Vt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Vt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Vt.instancingMorph===!1&&q.morphTexture!==null||Vt.envMap!==wt||j.fog===!0&&Vt.fog!==ht||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==mt.numPlanes||Vt.numIntersection!==mt.numIntersection)||Vt.vertexAlphas!==Wt||Vt.vertexTangents!==qt||Vt.morphTargets!==Ht||Vt.morphNormals!==ae||Vt.morphColors!==be||Vt.toneMapping!==Oe||Vt.morphTargetsCount!==Se)&&(fe=!0):(fe=!0,Vt.__version=j.version);let vn=Vt.currentProgram;fe===!0&&(vn=bo(j,X,q));let ys=!1,Mn=!1,hr=!1,De=vn.getUniforms(),Tn=Vt.uniforms;if(Rt.useProgram(vn.program)&&(ys=!0,Mn=!0,hr=!0),j.id!==_&&(_=j.id,Mn=!0),ys||x!==A){Rt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),De.setValue(B,"projectionMatrix",A.projectionMatrix),De.setValue(B,"viewMatrix",A.matrixWorldInverse);let pn=De.map.cameraPosition;pn!==void 0&&pn.setValue(B,it.setFromMatrixPosition(A.matrixWorld)),kt.logarithmicDepthBuffer&&De.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&De.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,Mn=!0,hr=!0)}if(q.isSkinnedMesh){De.setOptional(B,q,"bindMatrix"),De.setOptional(B,q,"bindMatrixInverse");let un=q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),De.setValue(B,"boneTexture",un.boneTexture,ne))}q.isBatchedMesh&&(De.setOptional(B,q,"batchingTexture"),De.setValue(B,"batchingTexture",q._matricesTexture,ne),De.setOptional(B,q,"batchingIdTexture"),De.setValue(B,"batchingIdTexture",q._indirectTexture,ne),De.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&De.setValue(B,"batchingColorTexture",q._colorsTexture,ne));let An=$.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ut.update(q,$,vn),(Mn||Vt.receiveShadow!==q.receiveShadow)&&(Vt.receiveShadow=q.receiveShadow,De.setValue(B,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Tn.envMap.value=wt,Tn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&X.environment!==null&&(Tn.envMapIntensity.value=X.environmentIntensity),Mn&&(De.setValue(B,"toneMappingExposure",y.toneMappingExposure),Vt.needsLights&&id(Tn,hr),ht&&j.fog===!0&&ot.refreshFogUniforms(Tn,ht),ot.refreshMaterialUniforms(Tn,j,D,W,p.state.transmissionRenderTarget[A.id]),Qs.upload(B,bh(Vt),Tn,ne)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Qs.upload(B,bh(Vt),Tn,ne),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&De.setValue(B,"center",q.center),De.setValue(B,"modelViewMatrix",q.modelViewMatrix),De.setValue(B,"normalMatrix",q.normalMatrix),De.setValue(B,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let un=j.uniformsGroups;for(let pn=0,zc=un.length;pn<zc;pn++){let Zi=un[pn];ee.update(Zi,vn),ee.bind(Zi,vn)}}return vn}function id(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function sd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,X,$){let j=Ct.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Ct.get(A.texture).__webglTexture=X,Ct.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let $=Ct.get(A);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0};let rd=B.createFramebuffer();this.setRenderTarget=function(A,X=0,$=0){F=A,T=X,I=$;let j=!0,q=null,ht=!1,St=!1;if(A){let wt=Ct.get(A);if(wt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(wt.__webglFramebuffer===void 0)ne.setupRenderTarget(A);else if(wt.__hasExternalTextures)ne.rebindTextures(A,Ct.get(A.texture).__webglTexture,Ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ht=A.depthTexture;if(wt.__boundDepthTexture!==Ht){if(Ht!==null&&Ct.has(Ht)&&(A.width!==Ht.image.width||A.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(A)}}let Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(St=!0);let qt=Ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qt[X])?q=qt[X][$]:q=qt[X],ht=!0):A.samples>0&&ne.useMultisampledRTT(A)===!1?q=Ct.get(A).__webglMultisampledFramebuffer:Array.isArray(qt)?q=qt[$]:q=qt,E.copy(A.viewport),P.copy(A.scissor),L=A.scissorTest}else E.copy(J).multiplyScalar(D).floor(),P.copy(Y).multiplyScalar(D).floor(),L=et;if($!==0&&(q=rd),Rt.bindFramebuffer(B.FRAMEBUFFER,q)&&j&&Rt.drawBuffers(A,q),Rt.viewport(E),Rt.scissor(P),Rt.setScissorTest(L),ht){let wt=Ct.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,wt.__webglTexture,$)}else if(St){let wt=X;for(let Wt=0;Wt<A.textures.length;Wt++){let qt=Ct.get(A.textures[Wt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Wt,qt.__webglTexture,$,wt)}}else if(A!==null&&$!==0){let wt=Ct.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,wt.__webglTexture,$)}_=-1},this.readRenderTargetPixels=function(A,X,$,j,q,ht,St,It=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){Rt.bindFramebuffer(B.FRAMEBUFFER,wt);try{let Wt=A.textures[It],qt=Wt.format,Ht=Wt.type;if(!kt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-j&&$>=0&&$<=A.height-q&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+It),B.readPixels(X,$,j,q,Bt.convert(qt),Bt.convert(Ht),ht))}finally{let Wt=F!==null?Ct.get(F).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,X,$,j,q,ht,St,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt)if(X>=0&&X<=A.width-j&&$>=0&&$<=A.height-q){Rt.bindFramebuffer(B.FRAMEBUFFER,wt);let Wt=A.textures[It],qt=Wt.format,Ht=Wt.type;if(!kt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ae),B.bufferData(B.PIXEL_PACK_BUFFER,ht.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+It),B.readPixels(X,$,j,q,Bt.convert(qt),Bt.convert(Ht),0);let be=F!==null?Ct.get(F).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,be);let Oe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ou(B,Oe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ae),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ht),B.deleteBuffer(ae),B.deleteSync(Oe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,$=0){let j=Math.pow(2,-$),q=Math.floor(A.image.width*j),ht=Math.floor(A.image.height*j),St=X!==null?X.x:0,It=X!==null?X.y:0;ne.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,St,It,q,ht),Rt.unbindTexture()};let od=B.createFramebuffer(),ad=B.createFramebuffer();this.copyTextureToTexture=function(A,X,$=null,j=null,q=0,ht=null){ht===null&&(q!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=q,q=0):ht=0);let St,It,wt,Wt,qt,Ht,ae,be,Oe,Ae=A.isCompressedTexture?A.mipmaps[ht]:A.image;if($!==null)St=$.max.x-$.min.x,It=$.max.y-$.min.y,wt=$.isBox3?$.max.z-$.min.z:1,Wt=$.min.x,qt=$.min.y,Ht=$.isBox3?$.min.z:0;else{let An=Math.pow(2,-q);St=Math.floor(Ae.width*An),It=Math.floor(Ae.height*An),A.isDataArrayTexture?wt=Ae.depth:A.isData3DTexture?wt=Math.floor(Ae.depth*An):wt=1,Wt=0,qt=0,Ht=0}j!==null?(ae=j.x,be=j.y,Oe=j.z):(ae=0,be=0,Oe=0);let Se=Bt.convert(X.format),Vt=Bt.convert(X.type),Pe;X.isData3DTexture?(ne.setTexture3D(X,0),Pe=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ne.setTexture2DArray(X,0),Pe=B.TEXTURE_2D_ARRAY):(ne.setTexture2D(X,0),Pe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);let fe=B.getParameter(B.UNPACK_ROW_LENGTH),vn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ys=B.getParameter(B.UNPACK_SKIP_PIXELS),Mn=B.getParameter(B.UNPACK_SKIP_ROWS),hr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ae.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ae.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Wt),B.pixelStorei(B.UNPACK_SKIP_ROWS,qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ht);let De=A.isDataArrayTexture||A.isData3DTexture,Tn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let An=Ct.get(A),un=Ct.get(X),pn=Ct.get(An.__renderTarget),zc=Ct.get(un.__renderTarget);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,pn.__webglFramebuffer),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,zc.__webglFramebuffer);for(let Zi=0;Zi<wt;Zi++)De&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(A).__webglTexture,q,Ht+Zi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(X).__webglTexture,ht,Oe+Zi)),B.blitFramebuffer(Wt,qt,St,It,ae,be,St,It,B.DEPTH_BUFFER_BIT,B.NEAREST);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ct.has(A)){let An=Ct.get(A),un=Ct.get(X);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,od),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,ad);for(let pn=0;pn<wt;pn++)De?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,An.__webglTexture,q,Ht+pn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,An.__webglTexture,q),Tn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,ht,Oe+pn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,ht),q!==0?B.blitFramebuffer(Wt,qt,St,It,ae,be,St,It,B.COLOR_BUFFER_BIT,B.NEAREST):Tn?B.copyTexSubImage3D(Pe,ht,ae,be,Oe+pn,Wt,qt,St,It):B.copyTexSubImage2D(Pe,ht,ae,be,Wt,qt,St,It);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Tn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Pe,ht,ae,be,Oe,St,It,wt,Se,Vt,Ae.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,ht,ae,be,Oe,St,It,wt,Se,Ae.data):B.texSubImage3D(Pe,ht,ae,be,Oe,St,It,wt,Se,Vt,Ae):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ht,ae,be,St,It,Se,Vt,Ae.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ht,ae,be,Ae.width,Ae.height,Se,Ae.data):B.texSubImage2D(B.TEXTURE_2D,ht,ae,be,St,It,Se,Vt,Ae);B.pixelStorei(B.UNPACK_ROW_LENGTH,fe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ys),B.pixelStorei(B.UNPACK_SKIP_ROWS,Mn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,hr),ht===0&&X.generateMipmaps&&B.generateMipmap(Pe),Rt.unbindTexture()},this.initRenderTarget=function(A){Ct.get(A).__webglFramebuffer===void 0&&ne.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ne.setTextureCube(A,0):A.isData3DTexture?ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ne.setTexture2DArray(A,0):ne.setTexture2D(A,0),Rt.unbindTexture()},this.resetState=function(){T=0,I=0,F=null,Rt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};function vf(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let b=0,M=a.length;b<M;b++){let y=a[b],S=i.attributes[y];c[y]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let T=i.morphAttributes[y];T&&(l[y]||(l[y]=[]),T.forEach((I,F)=>{let _=new I.array.constructor(I.count*I.itemSize);l[y][F]=new I.constructor(_,I.itemSize,I.normalized)}))}let d=t*.5,g=Math.log10(1/t),v=Math.pow(10,g),m=d*v;for(let b=0;b<r;b++){let M=n?n.getX(b):b,y="";for(let S=0,T=a.length;S<T;S++){let I=a[S],F=i.getAttribute(I),_=F.itemSize;for(let x=0;x<_;x++)y+=`${~~(F[u[x]](M)*v+m)},`}if(y in e)h.push(e[y]);else{for(let S=0,T=a.length;S<T;S++){let I=a[S],F=i.getAttribute(I),_=i.morphAttributes[I],x=F.itemSize,E=c[I],P=l[I];for(let L=0;L<x;L++){let R=u[L],C=f[L];if(E[C](o,F[R](M)),_)for(let O=0,W=_.length;O<W;O++)P[O][C](o,_[O][R](M))}}e[y]=o,h.push(o),o++}}let p=i.clone();for(let b in i.attributes){let M=c[b];if(p.setAttribute(b,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),b in l)for(let y=0;y<l[b].length;y++){let S=l[b][y];p.morphAttributes[b][y]=new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(h),p}var hh=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Mf=new Map;function Y1(i){if(Array.isArray(i))return i;let t=Mf.get(i);if(t)return t;let e=parseInt(i.slice(1),16);return t=[hh((e>>16&255)/255),hh((e>>8&255)/255),hh((e&255)/255)],Mf.set(i,t),t}var mi=class i{constructor(){this.L={},this.rec=i.REC,this.tag=null}_r(t,e,n,s,r,o,a,c){this.rec&&this.rec.push({L:t,id:this.tag,x0:Math.min(e,r),y0:Math.min(n,o),z0:Math.min(s,a),x1:Math.max(e,r),y1:Math.max(n,o),z1:Math.max(s,a),...c})}_rp(t,e,n){if(!this.rec)return;let s=[1e9,1e9,1e9],r=[-1e9,-1e9,-1e9];for(let o of e)for(let a=0;a<3;a++)s[a]=Math.min(s[a],o[a]),r[a]=Math.max(r[a],o[a]);this._r(t,s[0],s[1],s[2],r[0],r[1],r[2],n)}buf(t){return this.L[t]||(this.L[t]={p:[],n:[],c:[]})}tri(t,e,n,s,r){let o=this.buf(t),a=Y1(e),c=s[0]-n[0],l=s[1]-n[1],h=s[2]-n[2],u=r[0]-n[0],f=r[1]-n[1],d=r[2]-n[2],g=l*d-h*f,v=h*u-c*d,m=c*f-l*u,p=Math.hypot(g,v,m)||1;g/=p,v/=p,m/=p,o.p.push(n[0],n[1],n[2],s[0],s[1],s[2],r[0],r[1],r[2]),o.n.push(g,v,m,g,v,m,g,v,m),o.c.push(a[0],a[1],a[2],a[0],a[1],a[2],a[0],a[1],a[2])}quad(t,e,n,s,r,o){this.tri(t,e,n,s,r),this.tri(t,e,n,r,o)}box(t,e,n,s,r,o,a,c,l=""){if(n>o&&([n,o]=[o,n]),s>a&&([s,a]=[a,s]),r>c&&([r,c]=[c,r]),o-n<1e-4||a-s<1e-4||c-r<1e-4)return;this._r(t,n,s,r,o,a,c);let h=(u,f,d)=>[u,f,d];l.includes("t")||this.quad(t,e,h(n,a,c),h(o,a,c),h(o,a,r),h(n,a,r)),l.includes("b")||this.quad(t,e,h(n,s,r),h(o,s,r),h(o,s,c),h(n,s,c)),this.quad(t,e,h(n,s,c),h(o,s,c),h(o,a,c),h(n,a,c)),this.quad(t,e,h(o,s,r),h(n,s,r),h(n,a,r),h(o,a,r)),this.quad(t,e,h(o,s,c),h(o,s,r),h(o,a,r),h(o,a,c)),this.quad(t,e,h(n,s,r),h(n,s,c),h(n,a,c),h(n,a,r))}obox(t,e,n,s,r,o){let a=(l,h,u)=>[n[0]+l*s[0]+h*r[0]+u*o[0],n[1]+l*s[1]+h*r[1]+u*o[1],n[2]+l*s[2]+h*r[2]+u*o[2]];if(this.rec){let l=[];for(let h of[-1,1])for(let u of[-1,1])for(let f of[-1,1])l.push(a(h,u,f));this._rp(t,l,{...this._o,ob:[n,s,r,o]})}let c=(l,h,u,f)=>this.quad(t,e,l,h,u,f);c(a(-1,1,1),a(1,1,1),a(1,1,-1),a(-1,1,-1)),c(a(-1,-1,-1),a(1,-1,-1),a(1,-1,1),a(-1,-1,1)),c(a(-1,-1,1),a(1,-1,1),a(1,1,1),a(-1,1,1)),c(a(1,-1,-1),a(-1,-1,-1),a(-1,1,-1),a(1,1,-1)),c(a(1,-1,1),a(1,-1,-1),a(1,1,-1),a(1,1,1)),c(a(-1,-1,-1),a(-1,-1,1),a(-1,1,1),a(-1,1,-1))}ybox(t,e,n,s,r,o,a,c,l=0){let h=Math.cos(l),u=Math.sin(l);this.obox(t,e,[n,s,r],[h*o/2,0,u*o/2],[0,a/2,0],[-u*c/2,0,h*c/2])}beam(t,e,n,s,r,o=r){let a=[s[0]-n[0],s[1]-n[1],s[2]-n[2]],c=Math.hypot(...a)||1,l=a.map(g=>g/c),h=Math.abs(l[1])<.95?[l[2],0,-l[0]]:[1,0,0],u=Math.hypot(...h);h=h.map(g=>g/u);let f=[l[1]*h[2]-l[2]*h[1],l[2]*h[0]-l[0]*h[2],l[0]*h[1]-l[1]*h[0]],d=[(n[0]+s[0])/2,(n[1]+s[1])/2,(n[2]+s[2])/2];this.obox(t,e,d,h.map(g=>g*r/2),f.map(g=>g*o/2),l.map(g=>g*c/2))}prism(t,e,n,s,r,o={}){var f,d;let a=n.length,c=0;for(let g=0;g<a;g++){let v=n[g],m=n[(g+1)%a];c+=v[0]*m[1]-m[0]*v[1]}let l=c>0?n:[...n].reverse(),h=(f=o.top)!=null?f:e,u=(d=o.side)!=null?d:e;if(this.rec&&o.solid!==!1&&this._rp(t,l.flatMap(g=>[[g[0],s,g[1]],[g[0],r,g[1]]])),o.top!==!1)for(let g=1;g<a-1;g++)this.tri(t,h,[l[0][0],r,l[0][1]],[l[g+1][0],r,l[g+1][1]],[l[g][0],r,l[g][1]]);if(o.bottom!==!1)for(let g=1;g<a-1;g++)this.tri(t,u,[l[0][0],s,l[0][1]],[l[g][0],s,l[g][1]],[l[g+1][0],s,l[g+1][1]]);if(o.sides!==!1)for(let g=0;g<a;g++){let v=l[g],m=l[(g+1)%a];this.quad(t,u,[m[0],s,m[1]],[v[0],s,v[1]],[v[0],r,v[1]],[m[0],r,m[1]])}}cyl(t,e,n,s,r,o,a,c=8,l=Math.PI/8,h={}){let u=[];for(let f=0;f<c;f++){let d=l+f*Math.PI*2/c;u.push([n+Math.cos(d)*a,s+Math.sin(d)*a])}this.prism(t,e,u,r,o,h)}frustum(t,e,n,s,r,o,a,c,l=8,h=Math.PI/8){let u=Math.max(a,c);this._r(t,n-u,r,s-u,n+u,o,s+u);for(let f=0;f<l;f++){let d=h+f*Math.PI*2/l,g=h+(f+1)*Math.PI*2/l,v=[n+Math.cos(d)*a,r,s+Math.sin(d)*a],m=[n+Math.cos(g)*a,r,s+Math.sin(g)*a],p=[n+Math.cos(d)*c,o,s+Math.sin(d)*c],b=[n+Math.cos(g)*c,o,s+Math.sin(g)*c];this.quad(t,e,v,p,b,m),c>.001&&this.tri(t,e,[n,o,s],b,p),this.tri(t,e,[n,r,s],v,m)}}wall(t,e,n,s,r,o,a,c=[],l={}){let h=s[0]-n[0],u=s[1]-n[1],f=Math.hypot(h,u);if(f<.001)return null;let d=h/f,g=u/f,v=-g,m=d,p=o-r,b=(I,F,_=0)=>[n[0]+d*I+v*_,r+F,n[1]+g*I+m*_],M=new Set([0,f]),y=c.map(I=>{var F,_;return{s0:Math.max(0,I.a),s1:Math.min(f,I.a+I.w),y0:(F=I.y0)!=null?F:0,y1:Math.min(p,(_=I.y1)!=null?_:p)}}).filter(I=>I.s1>I.s0+.001);for(let I of y)M.add(I.s0),M.add(I.s1);let S=[...M].sort((I,F)=>I-F),T=Math.atan2(g,d);for(let I=0;I<S.length-1;I++){let F=S[I],_=S[I+1];if(_-F<.001)continue;let x=(F+_)/2,E=y.filter(R=>R.s0<=x&&R.s1>=x).sort((R,C)=>R.y0-C.y0),P=0,L=[];for(let R of E)R.y0>P+.001&&L.push([P,R.y0]),P=Math.max(P,R.y1);P<p-.001&&L.push([P,p]);for(let[R,C]of L){let O=b(x,(R+C)/2);this.ybox(t,e,O[0],O[1],O[2],_-F,C-R,a,T)}}return{at:b,L:f,ux:d,uz:g,nx:v,nz:m,yaw:T}}rail(t,e,n,s,r=1.05,o=.5,a={}){var h,u;let c=(h=a.w)!=null?h:.07,l=(u=a.top)!=null?u:.12;for(let f=0;f<n.length-1;f++){let d=n[f],g=n[f+1],v=Math.hypot(g[0]-d[0],g[1]-d[1]);if(v<.05)continue;this.beam(t,e,[d[0],s+r,d[1]],[g[0],s+r,g[1]],l,.08),this.beam(t,e,[d[0],s+.12,d[1]],[g[0],s+.12,g[1]],c,c);let m=Math.max(1,Math.round(v/o));for(let p=0;p<=m;p++){if(p===0&&f>0)continue;let b=d[0]+(g[0]-d[0])*p/m,M=d[1]+(g[1]-d[1])*p/m,y=p===0||p===m;this.box(t,e,b-(y?.09:c/2),s,M-(y?.09:c/2),b+(y?.09:c/2),s+r,M+(y?.09:c/2))}}}stairs(t,e,n,s,r,o,a,c,l,h,u={}){let f=Math.cos(o),d=Math.sin(o);if(this.rec){let g={x:n,z:s,y:r,yaw:o,n:a,rise:c,run:l,w:h,name:u.name||"",ladder:!!u.ladder};(i.STAIRS||[]).push(g),this._o={stair:g}}for(let g=0;g<a;g++){let v=l*(g+.5),m=n+f*v,p=s+d*v,b=r+c*(g+1);this.ybox(t,e,m,(r+b)/2,p,l,b-r,h,o)}this._o=void 0}slab(t,e,n,s,r,o,a={}){var p,b;let c=M=>new Lt(M[0],M[1]),l=M=>{let y=0;for(let S=0;S<M.length;S++){let T=M[S],I=M[(S+1)%M.length];y+=T[0]*I[1]-I[0]*T[1]}return y},h=l(n)>0?n:[...n].reverse(),u=s.map(M=>l(M)>0?[...M].reverse():M),f=[...h,...u.flat()],d=Gr.triangulateShape(h.map(c),u.map(M=>M.map(c))),g=(p=a.top)!=null?p:e,v=(b=a.side)!=null?b:e;this.rec&&this.rec.push({L:t,id:this.tag,slab:{outer:h,holes:u},y0:r,y1:o,x0:Math.min(...h.map(M=>M[0])),x1:Math.max(...h.map(M=>M[0])),z0:Math.min(...h.map(M=>M[1])),z1:Math.max(...h.map(M=>M[1]))});for(let[M,y,S]of d){let T=f[M],I=f[y],F=f[S],_=(F[0]-T[0])*(I[1]-T[1])-(I[0]-T[0])*(F[1]-T[1]),[x,E]=_>0?[I,F]:[F,I];a.top!==!1&&this.tri(t,g,[T[0],o,T[1]],[x[0],o,x[1]],[E[0],o,E[1]]),a.bottom!==!1&&this.tri(t,v,[T[0],r,T[1]],[E[0],r,E[1]],[x[0],r,x[1]])}let m=M=>{for(let y=0;y<M.length;y++){let S=M[y],T=M[(y+1)%M.length];this.quad(t,v,[T[0],r,T[1]],[S[0],r,S[1]],[S[0],o,S[1]],[T[0],o,T[1]])}};if(a.sides!==!1){m(h);for(let M of u)m(M)}}plate(t,e,n,s=.3){let r=0;for(let c=0;c<4;c++){let l=n[c],h=n[(c+1)%4];r+=l[0]*h[2]-h[0]*l[2]}let o=r>0?[...n].reverse():n,a=o.map(c=>[c[0],c[1]-s,c[2]]);this._rp(t,[...o,...a],{plate:!0}),this.quad(t,e,o[0],o[1],o[2],o[3]),this.quad(t,e,a[3],a[2],a[1],a[0]);for(let c=0;c<4;c++){let l=(c+1)%4;this.quad(t,e,a[c],a[l],o[l],o[c])}}out(){let t={};for(let[e,n]of Object.entries(this.L))t[e]={p:new Float32Array(n.p),n:new Float32Array(n.n),c:new Float32Array(n.c)};return t}};var gi={x0:-28,x1:28,z0:-20,z1:20},Ve={F1:0,F2:5.2,F3:10.4,EAVE:15.2},ln=.4,Jt=.6,Ut=.3,st=.9,At=-1.1,Qt={x0:-12,x1:12,z0:-8,z1:14},Me={x0:-7,x1:12,z0:-3,z1:14},Ke={x0:28,x1:34,z0:-20,z1:-8};var Ge={x:31,w:2,h:2.9},tn={x0:12,x1:28,z0:-20,z1:-8},tr={z:-14,w:2.4},ds={x0:19.4,x1:22,z:-8},ce={x:23,d:.6,z0:-19.4,z1:-8.35,top:4,gz0:-15.2,gz1:-12.8,gy0:1,gy1:2.5},uh={x0:12,x1:16,z0:-8,z1:4},Gt={x0:16,x1:28,z0:-8,z1:4},oo={z:-2,w:2.4},xi={x0:-20,x1:-12,z0:-10,z1:-4},bf={x0:-20,x1:-12,z0:-20,z1:-10},fh={x0:-28,x1:-20,z0:-20,z1:-4};var ao={z:1,w:3},ki={x0:-28,x1:-12,z0:4,z1:8},ti={x0:-28,x1:-12,z0:8,z1:20},ps={x0:-7,x1:7,z0:14,z1:20};var co={x0:-20,x1:-12,z0:-20,z1:-14},Hi={x0:-20,x1:-16,z0:-14,z1:-8},Sf={x0:-16,x1:-12,z0:-14,z1:4};var lo={x0:12,x1:16,z0:-8,z1:8},Dn={x0:12,x1:28,z0:8,z1:14,y:.6},Be={x0:16.72,x1:24.4,z0:11,z1:13.8},bc={x0:-28,x1:-20,z0:-4,z1:4},er={x0:-28,x1:-12,z0:4,z1:8},Ue={top:{x0:-21.4,x1:-19.4,z0:8,z1:10.8},r1:{z0:8.4,z1:10.8},land:{x0:-27.4,x1:-25,z0:8.4,z1:13.2},r2:{z0:10.8,z1:13.2}},ms={x0:12,x1:28,z0:8,z1:20};var xe={x0:12,x1:16,z0:-8,z1:8},Ie={x0:-12,x1:12,z0:-8,z1:14},ei={x0:-20,x1:-12,z0:-8,z1:6},Ef={x0:-20,x1:-12,z0:-12,z1:-8},ho={x0:-28,x1:-12,z0:-20,z1:-12},uo={x0:-28,x1:-20,z0:-12,z1:-4},qe={x0:12.2,x1:15.8,z0:-7.6,z1:1.5,y:13.4},Pt={x0:-34,x1:38,z0:-27,z1:26};var _i={z0:8,z1:12};var wf={x0:-62,x1:64,z0:26,z1:84},fo=[[-30,44],[-12,38],[8,40],[20,46],[26,58],[16,68],[-4,70],[-22,66],[-34,56]],gs=[[2,74],[2,64],[8,58],[8,48],[14,42],[14,34]],Sc=[[14,32],[44,32],[46,30],[46,-6]],Tf={x0:-10,x1:24,z0:86,z1:100},Ec={x0:-40,x1:48,z0:100,z1:150},Af={x0:-8,x1:22,z0:150,z1:158},qn={x0:-100,x1:110,z0:-60,z1:166,base:-.45-6};var N={stone:"#D8D0C2",stoneD:"#C6BDAD",plinth:"#BAB1A2",wall:"#EEE8DE",wallIn:"#F3EEE6",wallB:"#E4DCCF",slabE:"#CFC7B9",floor:"#DCD3C4",floorW:"#CDB99B",pave:"#D3CABA",yard:"#C9C1B2",col:"#EAE3D7",capi:"#DCD3C6",frame:"#7D6A56",wood:"#A58C70",woodD:"#7D6A56",lat:"#8C6E50",roof:"#7C8386",roofE:"#666D71",ridge:"#5E666A",glass:"#71858E",metal:"#6C7276",rail:"#626A6E",brass:"#B08D57",yellow:"#D6A438",yellowD:"#B88A2C",red:"#B5503C",crate:"#B49C7B",crateD:"#9E8566",shelf:"#93795E",book:"#B7A58B",cloth:"#A85B4B",leaf:"#8DA073",leafD:"#7A8E63",pot:"#B8AE9E",dark:"#4A4440",ember:"#C9663A",disp:"#C9B79A"},Z1=[["F1",-5,Ve.F2],["F2",Ve.F2,Ve.F3],["F3",Ve.F3,15.8],["roof",15.8,80]],Rf=i=>i<Ve.F2-.05?"F1":i<Ve.F3-.05?"F2":i<15.75?"F3":"roof",nr={};function Cf(i,t,e,n,s,r,o,a,c=""){for(let[l,h,u]of Z1){let f=Math.max(s,h),d=Math.min(r,u);d-f<.01||i.wall(l+c,t,e,n,f,d,o,a.map(g=>{var v,m;return{a:g.a,w:g.w,y0:((v=g.y0)!=null?v:s)-f,y1:((m=g.y1)!=null?m:r)-f}}).filter(g=>g.y1>0&&g.y0<d-f))}}var If=(i,t,e,n,s,r,o,a)=>{mi.WALLS&&mi.WALLS.push({ax:i,at:t,a:Math.min(e,n),b:Math.max(e,n),y0:s,y1:r,t:o,holes:a})},Ce=(i,t,e,n,s,r,o,a=Ut,c=[],l)=>{If("x",e,n,s,r,o,a,c),Cf(i,t,[n,e],[s,e],r,o,a,c.map(h=>({...h,a:h.c-h.w/2-n})),l)},$e=(i,t,e,n,s,r,o,a=Ut,c=[],l)=>{If("z",e,n,s,r,o,a,c),Cf(i,t,[e,n],[e,s],r,o,a,c.map(h=>({...h,a:h.c-h.w/2-n})),l)},yi=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]];function Ln(i,t,e,n,s,r,o,a,c,l={}){var v;let h=Rf(r),u=(v=l.frame)!=null?v:N.frame,f=.1,d=Math.min(a,.22),g=(m,p,b,M,y,S,T,I)=>t==="x"?i.box(T,I,m,b,y,p,M,S):i.box(T,I,y,b,m,S,M,p);if(g(n-s/2,n+s/2,r,o,e-.03,e+.03,h+":g",N.glass),g(n-s/2,n-s/2+f,r,o,e-d/2,e+d/2,h,u),g(n+s/2-f,n+s/2,r,o,e-d/2,e+d/2,h,u),g(n-s/2,n+s/2,o-f,o,e-d/2,e+d/2,h,u),g(n-s/2,n+s/2,r,r+f,e-d/2,e+d/2,h,u),s>1.4&&g(n-.04,n+.04,r,o,e-.06,e+.06,h,u),o-r>2.2){let m=r+(o-r)*.7;g(n-s/2,n+s/2,m-.04,m+.04,e-.06,e+.06,h,u)}if(l.sill!==!1&&c){let m=e+c*a/2,p=e+c*(a/2+.16);g(n-s/2-.12,n+s/2+.12,r-.14,r,Math.min(m,p),Math.max(m,p),h,N.stoneD)}}function Ee(i,t,e,n,s,r,o,a,c=N.frame,l){let h=l||Rf(r),u=a+.08,f=(d,g,v,m)=>t==="x"?i.box(h,c,d,v,e-u/2,g,m,e+u/2):i.box(h,c,e-u/2,v,d,e+u/2,m,g);f(n-s/2-.1,n-s/2,r,r+o),f(n+s/2,n+s/2+.1,r,r+o),f(n-s/2-.1,n+s/2+.1,r+o,r+o+.12)}function Vi(i,t,e,n,s,r,o,a,c={}){var v,m,p;let l=(v=c.col)!=null?v:N.lat,h=(m=c.d)!=null?m:.1,u=(p=c.sp)!=null?p:.22,f=(b,M,y,S,T=h)=>e==="x"?i.box(t,l,b,y,n-T/2,M,S,n+T/2):i.box(t,l,n-T/2,y,b,n+T/2,S,M);f(s-r/2,s-r/2+.1,o,o+a,h*1.4),f(s+r/2-.1,s+r/2,o,o+a,h*1.4),f(s-r/2,s+r/2,o+a-.1,o+a,h*1.4);let d=c.solid?o+c.solid:o;c.solid&&f(s-r/2,s+r/2,o,d,h*.8);let g=Math.max(2,Math.round((r-.2)/u));for(let b=1;b<g;b++){let M=s-r/2+.1+(r-.2)*b/g;f(M-.025,M+.025,d,o+a-.1)}for(let b of[.32,.62,.86]){let M=d+(o+a-.1-d)*b;f(s-r/2,s+r/2,M-.025,M+.025)}}function po(i,t,e,n,s,r=1,o=.32){let a=Math.hypot(s[0]-n[0],s[2]-n[2]),c=Math.max(1,Math.round(a/o));i.beam(t,e,[n[0],n[1]+r,n[2]],[s[0],s[1]+r,s[2]],.1,.08),i.beam(t,e,[n[0],n[1]+.15,n[2]],[s[0],s[1]+.15,s[2]],.06,.06);for(let l=0;l<=c;l++){let h=l/c,u=n[0]+(s[0]-n[0])*h,f=n[1]+(s[1]-n[1])*h,d=n[2]+(s[2]-n[2])*h,g=l===0||l===c?.08:.03;i.box(t,e,u-g,f,d-g,u+g,f+r,d+g)}}function J1(i,t,e,n,s,r,o,a,c,l=.3){let h=n-l/2,u=n+l/2,f=(d,g,v)=>[d,g,v];i.quad(t,e,f(r,o,h),f(s,o,h),f(s,a,h),f(r,c,h)),i.quad(t,e,f(s,o,u),f(r,o,u),f(r,c,u),f(s,a,u)),i.quad(t,e,f(s,a,u),f(r,c,u),f(r,c,h),f(s,a,h)),i.quad(t,e,f(s,o,h),f(s,o,u),f(s,a,u),f(s,a,h)),i.quad(t,e,f(r,o,u),f(r,o,h),f(r,c,h),f(r,c,u)),i._r(t,s,o,h,r,Math.max(a,c),u)}function wc(i,t,e,n,s,r,o=.55,a={}){var g;let c="roof",l=(g=a.col)!=null?g:N.roof,h=n-t>=s-e,u=(h?s-e:n-t)/2,f=r+u*o,d=.25;if(h){let v=t+u,m=n-u,p=(e+s)/2;i.plate(c,l,[[t,r,e],[n,r,e],[m,f,p],[v,f,p]],d),i.plate(c,l,[[n,r,s],[t,r,s],[v,f,p],[m,f,p]],d),i.plate(c,l,[[t,r,s],[t,r,e],[v,f,p],[v,f,p+.001]],d),i.plate(c,l,[[n,r,e],[n,r,s],[m,f,p+.001],[m,f,p]],d),m>v&&i.box(c,N.ridge,v-.1,f-.08,p-.16,m+.1,f+.14,p+.16)}else{let v=e+u,m=s-u,p=(t+n)/2;i.plate(c,l,[[n,r,e],[n,r,s],[p,f,m],[p,f,v]],d),i.plate(c,l,[[t,r,s],[t,r,e],[p,f,v],[p,f,m]],d),i.plate(c,l,[[t,r,e],[n,r,e],[p+.001,f,v],[p,f,v]],d),i.plate(c,l,[[n,r,s],[t,r,s],[p,f,m],[p+.001,f,m]],d),m>v&&i.box(c,N.ridge,p-.16,f-.08,v-.1,p+.16,f+.14,m+.1)}return i.box(c,N.roofE,t,r-.42,e,n,r-.2,e+.14),i.box(c,N.roofE,t,r-.42,s-.14,n,r-.2,s),i.box(c,N.roofE,t,r-.42,e,t+.14,r-.2,s),i.box(c,N.roofE,n-.14,r-.42,e,n,r-.2,s),f}var Tc={N:[[-16,-9,-4.5,4.5,9,15.5,20,24.5],[-24,-16,-9,-5,2,8,15.5,20,24.5],[-24,-20,-16,-8,-4,4,8,15.5,24.5]],S:[[-25,-21,-17,-14.5,-9.5,-4.8,4.8,9.5,14.5,17.5,22.5,25.5],[-25,-21,-17,-14.5,-9.5,-3.5,3.5,9.5,14.5,17.5,22.5,25.5],[-24,-16,-9.5,-3.5,3.5,9.5,14.5,18,22,25.5]],E:[[6.4,10.4,14.4,17.6],[-17.6,-14,-10.4,6,10.4,17.2],[-17.6,-14,-10.4,6,10.4,14.4,17.6]],W:[[-10.5,-6.5,-2,2,6,15.6,18.2],[-17,-13,-9,-5.5,-2,2,6,10.4,14.4,17.6],[-17.6,-14,-10,-6,-2,2,6.4,10.4,14.4,17.6]]};function Pf(i){let{x0:t,x1:e,z0:n,z1:s}=gi,r=Ve.F2,o=Ve.F3,a=Ve.EAVE,c=e-Jt,l=t+Jt,h=n+Jt,u=s-Jt,f=yi(tn.x0+Ut/2,h,c,tn.z1-Ut/2);i.slab("F1",N.plinth,yi(t-.3,n-.3,e+.3,s+.3),[f],-.45,0,{top:N.floor}),i.box("F1",N.plinth,Ke.x0,-.45,Ke.z0-.3,Ke.x1+.3,0,Ke.z1+.3),i.box("F1",N.floor,Ke.x0,0,Ke.z0+Jt,Ke.x1-Jt,.02,Ke.z1-Jt),i.box("F1",N.pave,Qt.x0,.02,Qt.z0,Qt.x1,.05,Qt.z1),i.box("F1",N.pave,ps.x0,.02,ps.z0,ps.x1,.05,u),i.box("F1",N.floorW,l,0,h,bf.x1,st,xi.z1),i.box("F1",N.floorW,l,0,-4,-20,st,4),i.box("F1",N.floorW,l,0,ki.z0,ki.x1,st,u),i.box("F1",N.yard,uh.x0,.02,Gt.z0,c,.06,Gt.z1),i.box("F1",N.floor,f[0][0],At-.3,f[0][1],f[2][0],At,f[2][1]);let d=yi(t-.15,n-.15,e+.15,s+.15),g=Ue.top,v=[yi(Me.x0,Me.z0,Me.x1,Me.z1),[[tn.x0,h],[c,h],[c,Gt.z1],[Gt.x0,Gt.z1],[Gt.x0,tn.z1],[tn.x0,tn.z1]],yi(l,h,fh.x1,fh.z1),[[l,ti.z0],[g.x0,ti.z0],[g.x0,g.z1],[g.x1,g.z1],[g.x1,ti.z0],[ti.x1,ti.z0],[ti.x1,u],[l,u]]];i.slab("F2",N.slabE,d,v,r-ln,r,{top:N.floorW});let m=[yi(Gt.x0,Gt.z0,c,Gt.z1),yi(Be.x0,Be.z0-.2,Be.x1+.2,Be.z1+.2),yi(l,bc.z0,bc.x1,bc.z1)];i.slab("F3",N.slabE,d,m,o-ln,o,{top:N.floor}),i.box("F3",N.pave,Ie.x0,o,Ie.z0,Ie.x1,o+.04,Ie.z1),i.slab("F3",N.slabE,yi(t+Jt/2,n+Jt/2,e-Jt/2,s-Jt/2),[[[Ie.x0,Ie.z0],[c,Ie.z0],[c,Gt.z1],[xe.x0,Gt.z1],[xe.x0,Ie.z1],[Ie.x0,Ie.z1]]],a-.35,a,{top:N.slabE});let p=[{y0:0,y1:r,wa:1,wb:3.7,w:1.7,col:N.stone,fr:N.woodD},{y0:r,y1:o,wa:.9,wb:3.6,w:1.7,col:N.wall,fr:N.frame},{y0:o,y1:a,wa:.9,wb:3.3,w:1.6,col:N.wall,fr:N.frame}];for(let[R,C]of p.entries()){let O=et=>({c:et,w:C.w,y0:C.y0+C.wa,y1:C.y0+C.wb}),W=R===0?At-.3:C.y0,D=C.y1,k=Tc.N[R],G=Tc.S[R],J=Tc.E[R],Y=Tc.W[R];Ce(i,C.col,n+Jt/2,t,e,W,D,Jt,k.map(O));for(let et of k)Ln(i,"x",n+Jt/2,et,C.w,C.y0+C.wa,C.y0+C.wb,Jt,-1,{frame:C.fr});Ce(i,C.col,s-Jt/2,t,e,W,D,Jt,[...G.map(O),...R===0?[{c:0,w:4.2,y0:0,y1:4.3}]:[]]);for(let et of G)Ln(i,"x",s-Jt/2,et,C.w,C.y0+C.wa,C.y0+C.wb,Jt,1,{frame:C.fr});$e(i,C.col,e-Jt/2,h,u,W,D,Jt,[...J.map(O),...R===0?[{c:tr.z,w:tr.w,y0:0,y1:2.8}]:[]]);for(let et of J)Ln(i,"z",e-Jt/2,et,C.w,C.y0+C.wa,C.y0+C.wb,Jt,1,{frame:C.fr});$e(i,C.col,t+Jt/2,h,u,W,D,Jt,Y.map(O));for(let et of Y)Ln(i,"z",t+Jt/2,et,C.w,C.y0+C.wa,C.y0+C.wb,Jt,-1,{frame:C.fr})}for(let[R,C]of[[r,"F2"],[o,"F3"]])i.box(C,N.stoneD,t-.18,R-.05,n-.18,e+.18,R+.28,n+.3),i.box(C,N.stoneD,t-.18,R-.05,s-.3,e+.18,R+.28,s+.18),i.box(C,N.stoneD,t-.18,R-.05,n,t+.3,R+.28,s),i.box(C,N.stoneD,e-.3,R-.05,n,e+.18,R+.28,s);for(let R of[t,e])for(let C of[n,s])for(let[O,W,D]of[["F1",-.45,r],["F2",r,o],["F3",o,a+.3]])i.box(O,N.stoneD,R-.55,W,C-.55,R+.55,D,C+.55);for(let R of[-5.4,-2.6,2.6,5.4])i.cyl("F1",N.col,R,s+2.6,0,6.2,.32,10,0),i.box("F1",N.capi,R-.45,0,s+2.15,R+.45,.35,s+3.05);i.box("F1",N.stone,-6.4,6.2,s-.2,6.4,6.9,s+3.4),i.box("F1",N.stoneD,-6.7,6.9,s-.2,6.7,7.1,s+3.7),i.box("F1",N.pave,-6.2,-.45,s,6.2,0,s+3.4),Ee(i,"x",s-Jt/2,0,4.2,0,4.3,Jt,N.woodD,"F1"),Ee(i,"z",e-Jt/2,tr.z,tr.w,0,2.8,Jt,N.woodD,"F1");{let{x0:R,x1:C,z0:O,z1:W}=Ke,D=4.6;Ce(i,N.stone,W-Jt/2,R,C,-.45,D,Jt,[{c:Ge.x,w:Ge.w,y0:0,y1:Ge.h}]),$e(i,N.stone,C-Jt/2,O+Jt,W-Jt,-.45,D,Jt,[{c:-16.5,w:1.4,y0:1.4,y1:3.2},{c:-11.5,w:1.4,y0:1.4,y1:3.2}]);for(let k of[-16.5,-11.5])Ln(i,"z",C-Jt/2,k,1.4,1.4,3.2,Jt,1,{frame:N.woodD});Ce(i,N.stone,O+Jt/2,R,C,-.45,D,Jt,[{c:31,w:1.4,y0:1.4,y1:3.2}]),Ln(i,"x",O+Jt/2,31,1.4,1.4,3.2,Jt,-1,{frame:N.woodD}),Ee(i,"x",W-Jt/2,Ge.x,Ge.w,0,Ge.h,Jt,N.woodD,"F1"),i.box("F1",N.stoneD,Ge.x-1.6,Ge.h+.25,W-.1,Ge.x+1.6,Ge.h+.45,W+.7),i.box("F1",N.stoneD,Ge.x-1.4,-.45,W,Ge.x+1.4,0,W+1.2),i.box("F1",N.stoneD,R-.1,D-.1,O-.1,C+.1,D+.2,W+.1),i.box("roof",N.slabE,R,D+.2,O,C,D+.45,W);for(let[k,G,J,Y]of[[R,O,C,O+.3],[R,W-.3,C,W],[C-.3,O,C,W]])i.box("roof",N.stoneD,k,D+.45,G,J,D+.9,Y)}$e(i,N.wallIn,-20,h,4,0,o,Ut,[{c:-7,w:1.4,y0:st,y1:st+2.5},{c:-18.2,w:2.4,y0:r,y1:r+2.7}]),Ee(i,"z",-20,-7,1.4,st,2.5,Ut),$e(i,N.wallIn,-20,Ef.z0,u,o,a),$e(i,N.wallIn,-16,Hi.z0,Sf.z1,r,o,Ut,[{c:-11,w:2.2,y0:r,y1:r+2.9},{c:-2,w:1.6,y0:r,y1:r+2.6}]),Ee(i,"z",-16,-2,1.6,r,2.6,Ut),$e(i,N.wallIn,Qt.x0,h,u,0,o,Ut,[{c:-6,w:2.8,y0:0,y1:st+2.6},{c:ao.z,w:ao.w,y0:0,y1:3.3},{c:6,w:2.4,y0:0,y1:st+2.5},{c:-6,w:3,y0:r,y1:r+3},{c:6,w:1.8,y0:r,y1:r+2.7}]),Ee(i,"z",Qt.x0,-6,2.8,0,st+2.6,Ut),Ee(i,"z",Qt.x0,6,2.4,0,st+2.5,Ut),Ee(i,"z",Qt.x0,-6,3,r,3,Ut),Ee(i,"z",Qt.x0,6,1.8,r,2.7,Ut,N.yellow),$e(i,N.wallIn,Qt.x0,h,ei.z0,o,a),$e(i,N.wallIn,Qt.x0,ei.z1,u,o,a),Vi(i,"F1:p","z",Qt.x0,ao.z,ao.w,0,3.3,{solid:.5});for(let R of[ps.x0,ps.x1])$e(i,N.wallIn,R,ps.z0,u,0,a,Ut,[{c:17,w:1.4,y0:0,y1:2.6}]),Ee(i,"z",R,17,1.4,0,2.6,Ut);$e(i,N.wallIn,0,h,Qt.z0,0,a,Ut,[{c:-14,w:1.6,y0:0,y1:2.7},{c:-14,w:1.4,y0:o,y1:o+2.6}]),$e(i,N.wallIn,4,-14,Qt.z0,r,o),$e(i,N.wallIn,tn.x0,h,tn.z1,At-.3,a),$e(i,N.wallIn,Qt.x1,tn.z1,u,0,a,Ut,[{c:oo.z,w:oo.w,y0:0,y1:3},{c:-5.6,w:3,y0:r,y1:r+3},{c:-3.4,w:2.2,y0:o,y1:o+3}]),Ee(i,"z",Qt.x1,oo.z,oo.w,0,3,Ut,N.woodD),Ee(i,"z",Qt.x1,-5.6,3,r,3,Ut),Ee(i,"z",Qt.x1,-3.4,2.2,o,3,Ut,N.yellowD),$e(i,N.wallIn,Gt.x0,Gt.z0,Gt.z1,r,a,Ut,[...[-6.4,-3.6,-.8,2].map(R=>({c:R,w:1.9,y0:r+.9,y1:r+3.4})),...[-5.6,-1.6,2.2].map(R=>({c:R,w:1.6,y0:o+1,y1:o+3.2}))]);for(let R of[-6.4,-3.6,-.8,2])Vi(i,"F2","z",Gt.x0,R,1.9,r+.9,2.5,{sp:.18});for(let R of[-5.6,-1.6,2.2])Ln(i,"z",Gt.x0,R,1.6,o+1,o+3.2,Ut,0,{sill:!1});i.box("F1",N.stoneD,Gt.x0-.25,r-.65,Gt.z0,Gt.x0+.25,r-.05,Gt.z1);for(let R of[-4,0])i.box("F1",N.col,Gt.x0-.25,0,R-.25,Gt.x0+.25,r-.65,R+.25),i.box("F1",N.stoneD,Gt.x0-.35,0,R-.35,Gt.x0+.35,.3,R+.35);$e(i,N.wallIn,Gt.x0,Gt.z1,lo.z1,r,o),$e(i,N.wallIn,20,Gt.z1,u,0,r),$e(i,N.wallIn,20,Dn.z1,u,r,o),$e(i,N.wallIn,20,h,tn.z1,o,a),Ce(i,N.wallIn,co.z1,co.x0,co.x1,r,o,Ut,[{c:-14,w:1.6,y0:r,y1:r+2.6}]),Ee(i,"x",co.z1,-14,1.6,r,2.6,Ut,N.woodD),Ce(i,N.wallIn,-14,0,tn.x0,r,o),Ce(i,N.wallIn,ho.z1,l,ho.x1,o,a,Ut,[{c:-24,w:2.4,y0:o,y1:o+2.7},{c:-16,w:2.4,y0:o,y1:o+2.7}]),Ee(i,"x",ho.z1,-24,2.4,o,2.7,Ut),Ee(i,"x",ho.z1,-16,2.4,o,2.7,Ut);let b=[],M=-16,y=st+1.45,S=1.35;for(let R=0;R<9;R++){let C=y-S+R*S*2/9,O=C+S*2/9,W=(C+O)/2,D=Math.sqrt(Math.max(0,S*S-(W-y)**2));b.push({c:M,w:D*2,y0:C,y1:O})}Ce(i,N.wallIn,xi.z0,xi.x0,xi.x1,0,r,Ut,b);for(let R=0;R<20;R++){let C=R/20*Math.PI*2,O=(R+1)/20*Math.PI*2;i.beam("F1:p",N.woodD,[M+Math.cos(C)*(S+.06),y+Math.sin(C)*(S+.06),xi.z0],[M+Math.cos(O)*(S+.06),y+Math.sin(O)*(S+.06),xi.z0],.14,.4)}Ce(i,N.wallIn,Qt.z0,Qt.x0,Qt.x1,0,a,Ut,[{c:-6,w:1.8,y0:0,y1:2.8},{c:-7,w:1.6,y0:r,y1:r+2.6},{c:2,w:1.4,y0:r,y1:r+2.6},{c:8,w:2.4,y0:r,y1:r+2.9},...[-8,-2,4,8].map(R=>({c:R,w:1.6,y0:o+1,y1:o+3}))]);for(let R of[-8,-2,4,8])Ln(i,"x",Qt.z0,R,1.6,o+1,o+3,Ut,1);Ee(i,"x",Qt.z0,-6,1.8,0,2.8,Ut),Ee(i,"x",Qt.z0,-7,1.6,r,2.6,Ut),Ee(i,"x",Qt.z0,2,1.4,r,2.6,Ut),Ce(i,N.wallIn,tn.z1,tn.x0,c,At-.3,a,Ut,[{c:(ds.x0+ds.x1)/2,w:2.4,y0:0,y1:2.7},...[18.5,22.5,26].map(R=>({c:R,w:1.7,y0:r+1,y1:r+3.2})),...[18.5,22.5,26].map(R=>({c:R,w:1.7,y0:o+1,y1:o+3.2}))]);for(let R of[18.5,22.5,26])Ln(i,"x",tn.z1,R,1.7,r+1,r+3.2,Ut,0,{sill:!1}),Ln(i,"x",tn.z1,R,1.7,o+1,o+3.2,Ut,0,{sill:!1});Ee(i,"x",tn.z1,(ds.x0+ds.x1)/2,2.4,0,2.7,Ut),Ce(i,N.wallIn,Qt.z0,Hi.x0,Hi.x1,r,o),Ce(i,N.wallIn,Qt.z0,ei.x0,ei.x1,o,a,Ut,[{c:-16,w:2.4,y0:o,y1:o+2.7}]),Ee(i,"x",Qt.z0,-16,2.4,o,2.7,Ut),Ce(i,N.wallIn,-4,l,-20,0,o),Ce(i,N.wallIn,-4,-20,Qt.x0,0,r),Ce(i,N.wallIn,ki.z0,l,-20,0,r,Ut,[{c:-24,w:1.4,y0:st,y1:st+2.4}]),Ee(i,"x",ki.z0,-24,1.4,st,2.4,Ut),Ce(i,N.wallIn,ki.z0,l,-20,o,a),Ce(i,N.wallIn,ki.z0,-20,Qt.x0,0,o,Ut,[{c:-14,w:2,y0:r,y1:r+2.7}]),Ee(i,"x",ki.z0,-14,2,r,2.7,Ut),Ce(i,N.wallIn,Gt.z1,uh.x0,Gt.x0,0,r),Ce(i,N.wallIn,Gt.z1,Gt.x0,c,0,a,Ut,[...[18.5,22.5,26].map(R=>({c:R,w:1.7,y0:o+1,y1:o+3.2}))]);for(let R of[18.5,22.5,26])Ln(i,"x",Gt.z1,R,1.7,o+1,o+3.2,Ut,0,{sill:!1});Ce(i,N.wallIn,ei.z1,ei.x0,ei.x1,o,a),Ce(i,N.wallIn,ti.z0,l,ti.x1,0,r,Ut,[{c:-15.5,w:2,y0:st,y1:st+2.6}]),Ee(i,"x",ti.z0,-15.5,2,st,2.6,Ut),Ce(i,N.wallIn,Dn.z0,Gt.x0,c,r,o),Ce(i,N.wallIn,ms.z0,ms.x0,c,o,a,Ut,[{c:14,w:1.4,y0:o,y1:o+2.6},{c:26.6,w:1.6,y0:o,y1:o+2.6}]),Ee(i,"x",ms.z0,26.6,1.6,o,2.6,Ut),Ee(i,"x",ms.z0,14,1.4,o,2.6,Ut,N.woodD),i.box("F3:p",N.woodD,13.32,o,ms.z0-.06,14.68,o+2.58,ms.z0+.06),Ce(i,N.wallIn,Qt.z1,Qt.x0,Qt.x1,0,a,Ut,[{c:0,w:4.6,y0:0,y1:4.4},...[-8,-3,3,8].map(R=>({c:R,w:1.6,y0:o+1,y1:o+3}))]);for(let R of[-8,-3,3,8])Ln(i,"x",Qt.z1,R,1.6,o+1,o+3,Ut,-1);Ee(i,"x",Qt.z1,0,4.6,0,4.4,Ut,N.woodD),Ce(i,N.wallIn,Dn.z1,Qt.x1,c,r,o),i.box("F1",N.wallIn,-25,st,-13.5,-22.4,o-ln,-10.5);for(let R of[-6.91,-5.03,-3.14,1.14,3.03,4.91])Vi(i,"F3","z",Ie.x0,R,1.88,o,3.3,{solid:.7});i.box("F3",N.lat,Ie.x0-.15,o+3.3,ei.z0,Ie.x0+.15,a,ei.z1),i.stairs("F1:p",N.stoneD,c-1.8,tr.z,At,0,6,-At/6,.3,2.4,{name:"\u5668\u6750\u5BA4\u5165\u53E3\u53F0\u9636"}),i.stairs("F1:p",N.stoneD,(ds.x0+ds.x1)/2,tn.z1-Ut/2-1.8,At,Math.PI/2,6,-At/6,.3,2.4,{name:"\u5668\u6750\u5BA4\u51FA\u53E3\u77ED\u697C\u68AF"}),i.stairs("F1:p",N.stoneD,Qt.x0-Ut/2+1.5,-6,0,Math.PI,5,st/5,.3,2.8,{name:"\u4FA7\u5385\u77ED\u53F0\u9636"}),i.stairs("F1:p",N.stoneD,Qt.x0-Ut/2+1.5,6,0,Math.PI,5,st/5,.3,2.4,{name:"\u5899\u8FB9\u8D70\u5ECA\u77ED\u53F0\u9636"});let T=(r-st)/22;i.stairs("F1:p",N.woodD,-26.2,-13.7,st,-Math.PI/2,11,T,.3,2.4,{name:"\u5B58\u653E\u5BA4\u697C\u68AF\xB7\u4E00\u8DD1"}),i.box("F1:p",N.woodD,l,st,h,-25,st+T*11,-17),i.box("F1:p",N.woodD,-25,st,h,-21.7,st+T*11,-17),i.stairs("F1:p",N.woodD,-25,-18.2,st+T*11,0,11,T,.3,2.4,{name:"\u5B58\u653E\u5BA4\u697C\u68AF\xB7\u4E8C\u8DD1"}),i.box("F1:p",N.woodD,-21.7,st,h,-20.15,r,-17),po(i,"F1:p",N.lat,[-25.05,st,-13.7],[-25.05,st+T*11,-17]),po(i,"F1:p",N.lat,[-25,st+T*11,-16.95],[-21.7,r,-16.95]),i.rail("F1:p",N.lat,[[-21.7,-16.95],[-20.2,-16.95]],r,1,.3,{w:.05});let I=(r-st)/2/12,F=st+I*12;i.box("F2",N.stoneD,g.x0,r-ln,g.z0,g.x1,r,g.z1);for(let[R,C]of[[g.x1-.2,g.z1-.2]])i.box("F1:p",N.stoneD,R-.2,st,C-.2,R+.2,r-ln,C+.2);i.box("F1:p",N.stoneD,Ue.land.x0,st,Ue.land.z0,Ue.land.x1,F,Ue.land.z1),i.box("F1:p",N.stoneD,Ue.land.x1,st,Ue.r1.z0,g.x0,F,Ue.r1.z1),i.stairs("F1:p",N.stoneD,Ue.land.x1,(Ue.r1.z0+Ue.r1.z1)/2,F,0,12,I,.3,2.4,{name:"\u6298\u8FD4\u697C\u68AF\xB7\u4E0A\u8DD1"}),i.stairs("F1:p",N.stoneD,g.x0,(Ue.r2.z0+Ue.r2.z1)/2,st,Math.PI,12,I,.3,2.4,{name:"\u6298\u8FD4\u697C\u68AF\xB7\u4E0B\u8DD1"}),po(i,"F1:p",N.lat,[Ue.land.x1,F,Ue.r1.z1],[g.x0,r,Ue.r1.z1],1,.25),po(i,"F1:p",N.lat,[g.x0,st,Ue.r2.z1],[Ue.land.x1,F,Ue.r2.z1],1,.25),i.rail("F1:p",N.lat,[[l,Ue.land.z1],[Ue.land.x1,Ue.land.z1]],F,1,.25,{w:.05}),i.rail("F2:p",N.lat,[[g.x0,g.z1],[g.x1,g.z1],[g.x1,g.z0+.15]],r,1,.25,{w:.05}),i.rail("F2:p",N.rail,[[l,er.z1-.1],[g.x0,er.z1-.1]],r,1.05,.4,{w:.05}),i.rail("F2:p",N.rail,[[g.x1,er.z1-.1],[er.x1-.2,er.z1-.1]],r,1.05,.4,{w:.05}),i.stairs("F2:p",N.stoneD,(lo.x0+lo.x1)/2,Dn.z0-1.05,r,Math.PI/2,3,Dn.y/3,.35,3.4,{name:"\u5185\u90E8\u8D70\u5ECA\u5C3D\u5934\u77ED\u53F0\u9636"}),i.box("F2",N.floorW,lo.x0+Ut/2,r,Dn.z0,c,r+Dn.y,Dn.z1-Ut/2);let _=(o-r-Dn.y)/24;i.stairs("F2:p",N.stoneD,Be.x1,(Be.z0+Be.z1)/2,r+Dn.y,Math.PI,24,_,.32,Be.z1-Be.z0,{name:"\u957F\u697C\u68AF"}),po(i,"F2:p",N.rail,[Be.x1,r+Dn.y,Be.z0-.05],[Be.x0,o,Be.z0-.05],1,.4),i.rail("F3:p",N.rail,[[Be.x0+.3,Be.z0-.3],[Be.x1+.3,Be.z0-.3],[Be.x1+.3,Be.z1+.3],[Be.x0+.3,Be.z1+.3]],o,1.05,.5,{w:.05}),i.stairs("F3:p",N.woodD,15.1,qe.z1+2.1,o,-Math.PI/2,15,(qe.y-o)/15,.14,1,{name:"\u9601\u697C\u68AF\u5B50",ladder:!0});for(let R of[14.55,15.65])i.beam("F3:p",N.woodD,[R,o,qe.z1+2.1],[R,qe.y+1,qe.z1-.1],.08);i.box("F3",N.woodD,qe.x0,qe.y-.2,qe.z0,qe.x1,qe.y,qe.z1),i.rail("F3:p",N.woodD,[[qe.x0+.1,qe.z1],[14.5,qe.z1]],qe.y,.9,.3,{w:.05}),i.rail("F2:p",N.rail,[[Me.x1-.2,Me.z0-.15],[Me.x0-.15,Me.z0-.15],[Me.x0-.15,Me.z1-.2]],r,1.05,.32,{w:.05}),i.rail("F3:p",N.rail,[[l,uo.z1-.15],[-25.4,uo.z1-.15]],o,1.05,.4,{w:.05}),i.rail("F3:p",N.rail,[[-22.6,uo.z1-.15],[-20.3,uo.z1-.15]],o,1.05,.4,{w:.05});let x=[-7,-2.25,2.5,7.25],E=[1.25,5.5,9.75];for(let R of x)i.box("F1",N.col,R-.35,0,Me.z0-.35,R+.35,r-ln,Me.z0+.35),i.box("F2",N.col,R-.3,r,Me.z0-.3,R+.3,o-ln,Me.z0+.3);for(let R of E)i.box("F1",N.col,Me.x0-.35,0,R-.35,Me.x0+.35,r-ln,R+.35),i.box("F2",N.col,Me.x0-.3,r,R-.3,Me.x0+.3,o-ln,R+.3);for(let R of[2,7,12])i.box("F2",N.woodD,Me.x0,o-ln-.55,R-.2,Me.x1,o-ln,R+.2);i.box("F2",N.woodD,Me.x0-.2,o-ln-.55,Me.z0-.2,Me.x1,o-ln,Me.z0+.2),i.box("F2",N.woodD,Me.x0-.2,o-ln-.55,Me.z0,Me.x0+.2,o-ln,Me.z1);let P=a+.05;wc(i,t-.6,n-.6,e+.6,Ie.z0+.6,P,.55),wc(i,t-.6,Ie.z0-.4,Ie.x0+.6,s+.6,P,.55),wc(i,xe.x0-.6,Gt.z1-.6,e+.6,s+.6,P,.55),wc(i,Ie.x0+.4,Ie.z1-.6,xe.x0-.4,s+.6,P,.5,{col:"#848B8E"}),i.plate("roof",N.roof,[[xe.x0-.6,P,xe.z0-.4],[xe.x0-.6,P,Gt.z1+.2],[xe.x1+.3,P+2.6,Gt.z1+.2],[xe.x1+.3,P+2.6,xe.z0-.4]],.25);let L=R=>P+2.6*(R-xe.x0+.6)/(xe.x1-xe.x0+.9)-.25;for(let R of[xe.z0,Gt.z1])J1(i,"F3",N.wallIn,R,xe.x0,xe.x1,a,L(xe.x0),L(xe.x1));i.box("F3",N.wallIn,xe.x1-.15,a,xe.z0,xe.x1+.15,L(xe.x1),Gt.z1),i.box("roof",N.wall,12.1,P-.2,-6.9,13.2,P+1.6,-4.9),i.box("roof",N.roofE,11.9,P+1.6,-7.1,13.4,P+1.85,-4.7),i.box("roof:g",N.glass,12.05,P+.1,-6.6,12.12,P+1.4,-5.2)}var Fn=(i,t)=>{let e=new mi;return e.tag=i,nr[i]={g:t,k:e},e},$t=Ve.F2,re=Ve.F3,dn=i=>i<$t-.05?"F1":i<re-.05?"F2":"F3";function Yt(i,t,e,n,s,r,o,a=N.crate){let c=dn(n)+":p";i.box(c,a,t-s/2,n,e-r/2,t+s/2,n+o,e+r/2),i.box(c,N.crateD,t-s/2-.02,n+o*.45,e-r/2-.02,t+s/2+.02,n+o*.55,e+r/2+.02)}function Ne(i,t,e,n,s,r,o,a={}){var v,m;let c=dn(r)+":p",l=n-t>s-e,h=l?n-t:s-e,u=Math.max(1,Math.round(h/1.5)),f=(v=a.lv)!=null?v:Math.max(2,Math.round(o/1.1));for(let p=0;p<=u;p++){let b=(l?t:e)+h*p/u;l?i.box(c,N.shelf,b-.05,r,e,b+.05,r+o,s):i.box(c,N.shelf,t,r,b-.05,n,r+o,b+.05)}let d=t*7+e*13|0,g=()=>(d=(d*9301+49297)%233280)/233280;for(let p=0;p<=f;p++){let b=r+(o-.05)*p/f;if(i.box(c,N.shelf,t,b,e,n,b+.06,s),p===f)break;let M=(o-.05)/f-.12;for(let y=0;y<u;y++){if(g()<((m=a.empty)!=null?m:.15))continue;let S=(l?t:e)+h*y/u+.12,T=(l?t:e)+h*(y+1)/u-.12,I=M*(.45+g()*.5),F=a.book?g()<.5?N.book:"#A69072":g()<.5?N.crate:N.pot;l?i.box(c,F,S,b+.06,e+.06,T,b+.06+I,s-.06):i.box(c,F,t+.06,b+.06,S,n-.06,b+.06+I,T)}}}function vi(i,t,e,n,s,r,o=.76,a=0,c="#8A7258"){let l=dn(n)+":p";i.ybox(l,c,t,n+o-.03,e,s,.06,r,a);let h=Math.cos(a),u=Math.sin(a);for(let[f,d]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let g=t+h*f*(s/2-.08)-u*d*(r/2-.08),v=e+u*f*(s/2-.08)+h*d*(r/2-.08);i.box(l,N.woodD,g-.04,n,v-.04,g+.04,n+o-.06,v+.04)}}function Gi(i,t,e,n,s=0){let r=dn(n)+":p";i.ybox(r,N.wood,t,n+.44,e,.46,.06,.46,s);let o=Math.cos(s),a=Math.sin(s);i.ybox(r,N.woodD,t+a*.21,n+.72,e-o*.21,.46,.55,.06,s);for(let[c,l]of[[-1,-1],[1,-1],[1,1],[-1,1]])i.box(r,N.woodD,t+c*.19-.025,n,e+l*.19-.025,t+c*.19+.025,n+.44,e+l*.19+.025)}function ir(i,t,e,n,s=1.5,r=.5){let o=dn(n)+":p";i.cyl(o,N.pot,t,e,n,n+.5,r*.75,8),i.frustum(o,N.leaf,t,e,n+.45,n+s*.62,r*1.15,r*.9,7,.3),i.frustum(o,N.leafD,t,e,n+s*.62,n+s,r*.9,.08,7,.7)}function Df(i,t,e,n,s,r=.22,o=N.woodD){let a=dn(n)+":p";i.cyl(a,o,t,e,n,n+s,r,10,0),i.cyl(a,N.stoneD,t,e,n,n+.25,r*1.5,10,0)}function Lf(i,t,e,n,s=1.6){let r=dn(n)+":p";i.cyl(r,N.dark,t,e,n,n+.08,.32,8),i.cyl(r,N.brass,t,e,n,n+s,.045,6),i.cyl(r,N.brass,t,e,n+s,n+s+.12,.26,10),i.box(dn(n)+":e","#FFC56A",t-.08,n+s+.12,e-.08,t+.08,n+s+.38,e+.08)}function $1(i,t,e,n){let s=dn(n)+":p";for(let r=0;r<3;r++){let o=r*2.094;i.beam(s,N.dark,[t+Math.cos(o)*.45,n,e+Math.sin(o)*.45],[t+Math.cos(o)*.2,n+.75,e+Math.sin(o)*.2],.06)}i.frustum(s,N.dark,t,e,n+.7,n+1.05,.32,.55,10),i.cyl(dn(n)+":e","#F09A4A",t,e,n+1,n+1.04,.48,10)}function dh(i,t,e,n,s=.28){let r=dn(n)+":p";i.frustum(r,"#8E6A48",t,e,n,n+.5,s*.8,s,8),i.frustum(r,"#8E6A48",t,e,n+.5,n+.72,s,s*.45,8),i.cyl(r,N.dark,t,e,n+.72,n+.8,s*.35,6)}function mo(i,t,e,n,s=1,r=N.metal,o={}){var c;let a=dn(n)+":p";i.box(a,N.dark,t-1.1*s,n,e-.8*s,t+1.1*s,n+.35*s,e+.8*s),i.cyl(a,r,t-.2*s,e,n+.35*s,n+2.1*s,.72*s,12,0),i.cyl(a,(c=o.cap)!=null?c:N.brass,t-.2*s,e,n+2.1*s,n+2.3*s,.5*s,12,0),i.box(a,r,t+.45*s,n+.35*s,e-.55*s,t+1.05*s,n+1.3*s,e+.55*s),i.beam(a,N.brass,[t+.75*s,n+1.3*s,e],[t+.75*s,n+2.6*s,e],.14*s),i.beam(a,N.brass,[t+.75*s,n+2.6*s,e],[t-.2*s,n+2.6*s,e],.14*s),i.cyl(a,"#E8E1D2",t-.2*s,e+.73*s,n+1.5*s,n+1.52*s,.16*s,10)}function Q1(i,t,e,n){i.cyl(dn(n)+":p",N.cloth,t,e,n,n+.14,.38,10)}function j1(i,t,e,n){vi(i,t,e,n,1.6,.55,.74),i.box(dn(n)+":p",N.wood,t-.8,n+.42,e+.45,t+.8,n+.47,e+.8)}function ph(i,t,e,n,s,r){i.box(dn(r)+":p",N.wood,t,r,e,n,r+.45,s)}function Ff(i){i.box("F1:p",N.wood,Ge.x-Ge.w/2,.02,Ke.z1-.6-1.9,Ge.x-Ge.w/2+.1,Ge.h-.05,Ke.z1-.6),i.box("F1:e","#FFD38A",Ge.x+1.25,2.55,Ke.z1+.02,Ge.x+1.55,2.95,Ke.z1+.26),Yt(i,30.4,-14.9,0,1.4,.9,1),Yt(i,32.3,-15,0,1,1,.8),Yt(i,31.2,-14,0,.6,.45,.4,N.yellowD),i.box("F1:p",N.metal,31.6,0,-13.9,32.9,.1,-13.6),i.beam("F1:p",N.wood,[29.6,.1,-16],[31,.1,-16.8],.08),Yt(i,32.4,-18.6,0,1.6,1.4,1.6),Yt(i,29.3,-18.7,0,1.2,1.2,1.2),Yt(i,29.3,-17.3,0,1,1,.7),Ne(i,32.8,-18.2,33.35,-16.2,0,2.4);{let t=ce.x-ce.d,e=ce.x+ce.d,n=At,s=At+ce.top,r="F1:p";for(let l=ce.z0;l<=ce.z1+.01;l+=(ce.z1-ce.z0)/8)i.box(r,N.shelf,t,n,l-.07,e,s,l+.07);for(let l of[n+ce.gy0,n+ce.gy1,s-.08])i.box(r,N.shelf,t,l-.06,ce.z0,e,l,ce.z1);i.box(r,N.shelf,t,s-.08,ce.z0,e,s,ce.z1);let o=5,a=()=>(o=(o*9301+49297)%233280)/233280,c=[[n+.02,n+ce.gy0-.06],[n+ce.gy0,n+ce.gy1-.06],[n+ce.gy1,s-.1]];for(let[l,h]of c)for(let u=ce.z0+.05;u<ce.z1-.3;){let f=.6+a()*.9,d=Math.min(ce.z1-.05,u+f);if(!(l>=n+ce.gy0-.1&&h<=n+ce.gy1&&d>ce.gz0&&u<ce.gz1)){let v=(h-l)*(.6+a()*.38);i.box(r,a()<.3?N.yellow:a()<.6?N.crate:N.crateD,t+.05,l,u+.03,e-.05,l+v,d-.03)}u=d}i.box(r,N.woodD,t-.02,n+ce.gy0-.06,ce.gz0-.08,e+.02,n+ce.gy1+.02,ce.gz0),i.box(r,N.woodD,t-.02,n+ce.gy0-.06,ce.gz1,e+.02,n+ce.gy1+.02,ce.gz1+.08)}Yt(i,25.9,-9.4,At,1.4,1.4,1.4,N.yellow),Yt(i,24.5,-9.6,At,1,1.2,2.7,N.yellow),Yt(i,26.7,-10.6,At,.9,.9,.8,N.yellowD),Lf(i,12.75,-16.8,At,1.7);for(let[t,e]of[[14.2,-18.8],[15.6,-19],[26.4,-18.8]])i.cyl("F1:p","#8E7A64",t,e,At,At+1.1,.38,10);Ne(i,26.75,-19.3,27.35,-16.4,At,2.6),Ne(i,16.6,-19.35,20.8,-18.8,At,2.2),Ne(i,12.35,-12.6,12.95,-9.4,At,2.4),Yt(i,14,-10.2,At,1.2,1.2,.9),i.box("F1:p","#9A8E7C",15.6,At,-14.6,17.6,At+.1,-13.2),i.box("F1:p","#8F877A",21.5,.03,Gt.z0+.3,22.1,.07,Gt.z1-.3);for(let t=Gt.z0+1;t<Gt.z1-.5;t+=1.4)i.box("F1:p","#6E675E",21.45,.07,t,22.15,.09,t+.5);Yt(i,26.6,-6.4,0,1.4,1.4,1.4,N.yellow),Yt(i,26.7,-4.8,0,1.2,1.2,1.1,N.yellow),Yt(i,26.6,-6.2,1.4,1.1,1.1,1,N.yellowD),Yt(i,26.8,2.4,0,1.1,1.3,.9,N.yellow),i.beam("F1:p",N.metal,[20.7,0,Gt.z1-.3],[20.7,4.4,Gt.z1-.3],.28),i.beam("F1:p",N.metal,[17.2,3.2,Gt.z1-.3],[24.6,3.2,Gt.z1-.3],.22),i.cyl("F1:p",N.red,20.7,Gt.z1-.55,1.3,1.62,.3,10),i.cyl("F1:p",N.metal,20.7,Gt.z1-.6,.1,.5,.22,8),i.cyl("F1:p",N.stoneD,18.4,1.4,0,.45,1.1,10),i.cyl("F1:p",N.woodD,18.4,1.4,.45,2.6,.14,6),i.frustum("F1:p",N.leaf,18.4,1.4,2.2,4.4,1.5,1.1,9,.2),Yt(i,5,-2.1,0,1.8,1.4,1.8),Yt(i,6.7,-1.9,0,1.3,1.2,1.4),Yt(i,3.3,-1,0,1.2,1.4,1),Yt(i,5,-2.1,1.8,1,1,.6,N.crateD);{let t=Fn("cover2","F1");Yt(t,3.3,.8,0,1.1,1.4,.95),Yt(t,4.5,1.95,0,1.4,1,.8)}dh(i,6.3,1.3,0,.24),dh(i,6.7,1.75,0,.22),Yt(i,8,-6.6,0,1.2,1.2,1.6),Yt(i,8.1,-5.4,0,1,1,.9);{let t="F1:p";i.box(t,N.woodD,10.6-.9,0,-7.3-.08,10.6-.78,2.1,-7.3+.08),i.box(t,N.woodD,10.6+.78,0,-7.3-.08,10.6+.9,2.1,-7.3+.08),i.box(t,N.woodD,10.6-.9,2,-7.3-.08,10.6+.9,2.14,-7.3+.08),i.cyl(t,N.brass,10.6,-7.3+.12,1.15,1.2,.55,16)}Yt(i,-2.6,8.8,0,1.6,1.2,1.1),Yt(i,-4.1,9,0,1,1,.7),Yt(i,4.4,9.8,0,1.6,1.6,1.25),Yt(i,4.4,9.8,1.25,.9,.9,.7,N.crateD),$1(i,-8.6,1.2,0);for(let[t,e]of[[-10.6,-1.2],[-10.9,-.5]])dh(i,t,e,0);for(let[t,e]of[[-10.7,11.6],[-10.7,12.9]])Gi(i,t,e,0,Math.PI/2);{let t=Fn("gate","F1");for(let[e,n]of[[-2.1,-.02],[.02,2.1]])t.box("F1:p",N.wood,e,.02,Qt.z1-.08,n,4.25,Qt.z1+.08)}{let t=Fn("gateO","F1");for(let e of[-1,1])t.box("F1:p",N.wood,e*2.15-.08,.02,Qt.z1-2.1,e*2.15+.08,4.25,Qt.z1-.2)}for(let t of[-18.4,-13.6])Df(i,t,xi.z0+.6,st,Ve.F2-st-.4);ir(i,-19.3,-4.8,st,1.2),ir(i,-12.8,-9.2,st,1.3),Gi(i,-15.2,-4.6,st,Math.PI),Gi(i,-14.4,-4.6,st,Math.PI),Ne(i,-19.75,-19.3,-19.15,-12,st,3.4,{book:1}),Ne(i,-17.5,-19.35,-12.6,-18.75,st,3.4,{book:1}),vi(i,-15.5,-14,st,2.4,1.2),Gi(i,-15.5,-15,st,0),Gi(i,-15.5,-13,st,Math.PI),vi(i,-5,-15,0,3,1.2),Ne(i,-11.75,-19.3,-11.15,-14,0,2.6),Yt(i,3,-18.6,0,1.4,1.2,1),Yt(i,9.6,-17.8,0,1.2,1.2,1.4),Ne(i,4.6,-19.35,10.6,-18.75,0,2.4),Ne(i,-24,-9.9,-20.6,-9.3,st,4.6),mo(i,-24.2,-6.4,st,1.15,N.metal),Yt(i,-21.4,-4.9,st,1.2,.9,.9),Yt(i,-21.2,-12.8,st,1.2,1.2,1.4),Yt(i,-21.4,-15.4,st,1.4,1.2,.9),Ne(i,-19.4,-19.35,-13,-18.8,$t,2.6),Yt(i,-12.9,-18.6,$t,1.2,1.2,1.3),Yt(i,-18.9,-15,$t,1.4,1,.9);for(let t of[-2.6,2.8])ph(i,-19.6,t-.25,-14,t+.25,0);for(let t of[-24.6,-19.8])ir(i,t,7.4,st,1.2,.4);for(let t of[-23.6,-22.9,-18.8,-18.1])Gi(i,t,7.45,st,Math.PI);Ne(i,-17.6,9.8,-17,17.8,st,5.4,{book:1,empty:.05}),Ne(i,-14.6,9.8,-14,17.8,st,5.4,{book:1,empty:.05}),vi(i,-24.4,16.6,st,2.4,1.2);for(let t of[-25.2,-23.6])Gi(i,t,15.7,st,0),Gi(i,t,17.5,st,Math.PI);Ne(i,-27.35,14.2,-26.75,19.2,st,3.2,{book:1});for(let t of[-5.8,5.8])ph(i,t-.3,15.2,t+.3,18.4,0),ir(i,t,18.9,0,1.4);ir(i,-15.3,-13.2,$t,1.4),Df(i,-15.5,-9.4,$t,re-$t-.4,.22);{let t=Fn("pdoor","F2");Vi(t,"F2:p","z",Hi.x1,-11,2.2,$t,2.9,{solid:.45})}Fn("pdoorO","F2").box("F2:p",N.lat,Hi.x1-2.1,$t,-9.95,Hi.x1-.05,$t+2.9,-9.85);{let t=Fn("c2door","F2");Vi(t,"F2:p","x",Qt.z0,8,2.4,$t,2.9,{solid:.45})}{let t=Fn("horn","F2");t.box("F2:p",N.rail,-5.7,$t,-3.75,-5.55,$t+2.2,-3.6),t.frustum("F2:p",N.brass,-5.62,-3.3,$t+2.05,$t+2.12,.08,.36,10),t.beam("F2:p",N.brass,[-5.62,$t+2.1,-3.68],[-5.62,$t+2.1,-3.05],.32,.32)}{let t=Fn("hornX","F2");t.box("F2:p",N.rail,-5.7,$t,-3.75,-5.55,$t+1.3,-3.6),t.ybox("F2:p",N.brass,-5.3,$t+.15,-4.1,.7,.3,.5,.7)}Yt(i,-.8,-7.1,$t,1.6,1.1,1.3,N.yellow),Lf(i,3.6,-3.7,$t,1.5),i.beam("F2:p",N.metal,[4.6,$t,-7.7],[4.6,$t+2.4,-7.7],.2),i.beam("F2:p",N.metal,[4.6,$t+.5,-7.7],[4.6,$t+.5,-6.6],.18),i.cyl("F2:p",N.metal,4.6,-6.5,$t+.3,$t+.7,.2,8),vi(i,-6,-14,$t,2.6,1.1),Ne(i,-11.75,-19.3,-11.15,-14,$t,2.6),Yt(i,-2.4,-18.6,$t,1.2,1.2,1),Yt(i,2,-12.6,$t,1,1,.8);for(let t of[-12.8,-9.8])ph(i,4.6,t-.25,11.4,t+.25,$t);Ne(i,.6,-19.35,11.4,-18.75,$t,2.4),vi(i,-18,-2,$t,1.2,2.4),Ne(i,-19.75,-7.4,-19.15,3.4,$t,2.6),Yt(i,-16.9,2.8,$t,1.2,1,1);for(let t of[-1.4,2.2,5.6])i.box("F2:p",N.woodD,12.15,$t+1,t-.8,12.3,$t+2.6,t+.8),i.box("F2:p",N.disp,12.3,$t+1.12,t-.68,12.34,$t+2.48,t+.68);Yt(i,-26.4,2.6,$t,1.6,1.4,1.3),Yt(i,-21.3,2.7,$t,1.2,1.2,.9),Yt(i,-23.6,-2.9,$t,1.4,1.2,2),Ne(i,-27.35,-2.2,-26.75,1.6,$t,4.4),Ne(i,-19.6,4.2,-15.4,4.8,$t,3.4);for(let t=0;t<3;t++)for(let e=0;e<5;e++)j1(i,14.6+e*2.5,15.3+t*1.5,re);Ne(i,26.75,14.6,27.35,19.2,re,3.6,{book:1}),vi(i,19.5,19,re,2.2,.7),i.box("F3:p","#5A6660",16.6,re+1,19.3,21.6,re+2.6,19.38),Ne(i,16.4,7.25,25.2,7.85,re,3.4),Yt(i,15.2,-7,qe.y,.9,.9,.6);{let t=Fn("ydoor","F3");t.box("F3:p",N.yellow,xe.x0-.12,re,-4.5,xe.x0+.12,re+3,-2.3),t.box("F3:p",N.yellowD,xe.x0-.18,re+1.3,-4.4,xe.x0-.12,re+1.5,-2.4)}Fn("ydoorO","F3").box("F3:p",N.yellow,xe.x0-2.2,re,-4.62,xe.x0,re+3,-4.38);{let t="F3:p",e=re,n=[-5,-2,1,4],s=-7.5,r=-5.9;for(let o of n)for(let a of[s,r])i.box(t,N.woodD,o-.07,e,a-.07,o+.07,e+6.4,a+.07);for(let o of[2.1,4.2,6.3])i.box(t,N.wood,n[0]-.2,e+o,s-.2,n[3]+.2,e+o+.08,r+.2),i.beam(t,N.woodD,[n[0],e+o-2,r],[n[3],e+o,r],.07);mo(i,8.2,-6.6,e,1.2,"#7A7F80"),Yt(i,10.7,-6.9,e,1.2,1.2,1.4),Yt(i,-8.6,-7.1,e,1.4,1.2,1),i.cyl(t,"#8E7A64",10.6,-5,e,e+1.1,.4,10);for(let o of[-8,8])ir(i,o,13.2,e,1.4)}for(let t=0;t<2;t++)for(let e=0;e<2;e++)Q1(i,-18.8+e*2.6,-6.2+t*2.6,re);i.frustum("F3:p","#7C6A58",-16.8,3,re,re+1.2,1.3,1,12,0),i.frustum("F3:p","#6B5A49",-16.8,3,re+1.2,re+1.9,1,.35,12,0),i.cyl("F3:p",N.brass,-16.8,3,re+1.9,re+2.1,.3,10),Ne(i,-19.75,-7.6,-19.15,-3,re,2.8);{let t=Fn("mdoor","F3");Vi(t,"F3:p","z",Ie.x0,-1.6,1.2,re,3,{solid:.7,col:"#7A5C40"}),Vi(t,"F3:p","z",Ie.x0,-.4,1.2,re,3,{solid:.7,col:"#7A5C40"})}{let t=Fn("mdoorO","F3");for(let e of[-2.15,.15])t.box("F3:p","#7A5C40",Ie.x0-1.15,re,e-.05,Ie.x0-.15,re+3,e+.05)}Yt(i,-18.6,-11.2,re,.9,.9,1.2),Yt(i,-13.2,-9.2,re,.8,1,.9),mo(i,-26.1,-18.4,re,1.1,N.red,{cap:"#8C3E2F"}),mo(i,-21,-18.5,re,.95),mo(i,-14.2,-18.3,re,.9),vi(i,-19.6,-16.6,re,2.6,1.1,.9),vi(i,-24.2,-14.6,re,2.4,1,.9),Ne(i,-27.35,-15.6,-26.75,-12.6,re,2.6),Ne(i,-19.5,-19.35,-16.5,-18.8,re,2.4),Yt(i,-26.6,-9,re,1,1,.8),Yt(i,-21.2,-10.8,re,1.2,1,1)}var at={street:"#B1ADA5",walk:"#D6D0C5",curb:"#C2BBAF",pave:"#D8D1C3",paveL:"#C8BFAF",yard:"#CFC8BA",retain:"#BDB4A5",retainD:"#A99F8F",wall:["#F1EDE6","#ECE7DF","#EFEAE2","#E8E2D8"],plinth:"#D9D2C6",eave:"#CBC4B8",roof:["#BDB8AF","#C4BFB6","#B6B2AA","#C8C2B8"],ridge:"#A9A399",soil:"#8F806C",soil2:"#A89A86",frame:"#4B4741",water:"#8FA6A8",waterD:"#7F9698",grass:"#AEB795",grassD:"#A2AC88",rock:"#A9A194",rockD:"#958D80",wood:"#8C735A",woodD:"#6E5A47",tile:"#7C8386",tileE:"#666D71",rail:"#626A6E",stone:"#D8D0C2",stoneD:"#C6BDAD",col:"#EAE3D7",sign:"#B5503C",signD:"#8C3E2F",lamp:"#FFD38A",awn:["#B98B5E","#9C7A62","#A8836A","#8E7C6C"],chim:"#A08068",fire:"#5E4636"};function K1(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Uf(i,t,e,n,s,r,o,a,c={}){var L;let l=c.L||"ctx",h=((L=c.y)!=null?L:-.45)+.17,u=o*3.4,f=h+u,d=c.wall||at.wall[Math.floor(a()*at.wall.length)],g=c.roof||at.roof[Math.floor(a()*at.roof.length)],v=(R,C,O,W,D,k,G,J)=>t==="x"?i.box(l,G,R,C,O,W,D,k,J):i.box(l,G,O,C,R,k,D,W,J),m=(R,C,O)=>t==="x"?[R,C,O]:[O,C,R];if(v(e,h-.17,s,n,h+.5,r,at.plinth,"b"),v(e+.04,h+.5,s+.04,n-.04,f,r-.04,d,"b"),v(e-.12,f-.25,s-.12,n+.12,f,r+.12,at.eave),c.awn){let R=c.awn;v(e+.3,h+2.6,R>0?r:s-1.4,n-.3,h+2.8,R>0?r+1.4:s,at.awn[Math.floor(a()*at.awn.length)])}if(c.flat)return v(e,f,s,n,f+.6,r,at.plinth),f+.6;let p=.45,b=r-s,M=b*.24,y=(s+r)/2,S=f+M,T=e-p,I=n+p,F=s-p,_=r+p,x=f-p*.58;i.plate(l,g,[m(T,x,F),m(I,x,F),m(I,S,y),m(T,S,y)],.22),i.plate(l,g,[m(I,x,_),m(T,x,_),m(T,S,y),m(I,S,y)],.22);let E=[m(e+.04,f,s+.04),m(e+.04,f,r-.04),m(e+.04,S-.1,y)],P=[m(n-.04,f,r-.04),m(n-.04,f,s+.04),m(n-.04,S-.1,y)];return t==="x"?(i.tri(l,d,...E),i.tri(l,d,...P)):(i.tri(l,d,E[1],E[0],E[2]),i.tri(l,d,P[1],P[0],P[2])),v(T,S-.05,y-.16,I,S+.16,y+.16,at.ridge),S}function tx(i,t,e,n,s,r,o,a={}){var T;i.box("ctx",at.curb,t,-.45,e,n,-.45+.15,s,"b"),i.box("ctx",at.walk,t+.25,-.45+.15,e+.25,n-.25,-.45+.17,s-.25,"b");let c=1.8,l=t+c,h=n-c,u=e+c,f=s-c,d=h-l,g=f-u,v=(T=a.floors)!=null?T:2,m=Math.min(9,Math.min(d,g)/2-2.5);if(m<7){let I=d>=g?"x":"z",F=I==="x"?l:u,_=I==="x"?h:f,x=I==="x"?u:l,E=I==="x"?f:h,P=F;for(;P<_-4;){let L=8+r()*9;_-(P+L)<6&&(L=_-P),Uf(i,I,P,P+L-.3,x,E,v+(r()<.35?1:0),r),P+=L}return}let p=[["x",l,h,u,u+m],["x",l,h,f-m,f],["z",u+m,f-m,l,l+m],["z",u+m,f-m,h-m,h]];for(let[I,[F,_,x,E,P]]of p.entries()){let L=_,R=!0;for(;L<x-3;){let C=7+r()*10;x-(L+C)<6&&(C=x-L);let O=I<2&&(R||L+C>=x-.01);if(!O&&r()<.16&&x-L>14){L+=3;continue}let W=v+(O?1:0)+(r()<.25?1:0)-(r()<.15&&!O?1:0);Uf(i,F,L,L+C-.25,E,P,Math.max(1,W),r,{flat:!O&&r()<.1}),L+=C,R=!1}}let b=l+m,M=h-m,y=u+m,S=f-m;if(M-b>2&&S-y>2){i.box("ctx",at.yard,b,-.45+.17,y,M,-.45+.19,S,"b");let I=Math.max(1,Math.round((M-b)*(S-y)/140));for(let F=0;F<I;F++)o.push([b+2.5+r()*Math.max(0,M-b-5),y+2.5+r()*Math.max(0,S-y-5),.85+r()*.35])}}function Nf(i,t,e,n,s,r,o,a=.55,c=at.tile){let l=s-e>=r-n,h=(l?r-n:s-e)/2,u=o+h*a,f=.2;if(l){let d=e+h,g=s-h,v=(n+r)/2;i.plate(t,c,[[e,o,n],[s,o,n],[g,u,v],[d,u,v]],f),i.plate(t,c,[[s,o,r],[e,o,r],[d,u,v],[g,u,v]],f),i.plate(t,c,[[e,o,r],[e,o,n],[d,u,v],[d,u,v+.001]],f),i.plate(t,c,[[s,o,n],[s,o,r],[g,u,v+.001],[g,u,v]],f),g>d&&i.box(t,at.tileE,d-.1,u-.06,v-.14,g+.1,u+.12,v+.14)}else{let d=n+h,g=r-h,v=(e+s)/2;i.plate(t,c,[[s,o,n],[s,o,r],[v,u,g],[v,u,d]],f),i.plate(t,c,[[e,o,r],[e,o,n],[v,u,d],[v,u,g]],f),i.plate(t,c,[[e,o,n],[s,o,n],[v+.001,u,d],[v,u,d]],f),i.plate(t,c,[[s,o,r],[e,o,r],[v,u,g],[v+.001,u,g]],f),g>d&&i.box(t,at.tileE,v-.14,u-.06,d-.1,v+.14,u+.12,g+.1)}return u}function Ac(i,t,e,n,s,r){for(let o=0;o<5;o++){let a=s*(.5+r()*.6),c=s*(.5+r()*1.1);i.ybox("ext",o%2?at.rock:at.rockD,t+(r()-.5)*s,n+c/2,e+(r()-.5)*s*.8,a,c,a*(.6+r()*.5),r()*3)}}function ex(i,t,e,n=-.45){i.box("ext",at.frame,t-.07,n,e-.07,t+.07,n+3.6,e+.07),i.box("ext:e",at.lamp,t-.18,n+3.5,e-.18,t+.18,n+3.95,e+.18)}function Of(i){let t=[],e=K1(23),{x0:n,x1:s,z0:r,z1:o}=qn,a=-3.2-.1;i.quad("ground",at.waterD,[n,-3.75-.5,o],[s,-3.75-.5,o],[s,-3.75-.5,r],[n,-3.75-.5,r]);let c=[[[n,o],[s,o]],[[s,o],[s,r]],[[s,r],[n,r]],[[n,r],[n,o]]];for(let[_,x]of c)i.quad("base",at.soil,[_[0],-3.2-1.4,_[1]],[x[0],-3.2-1.4,x[1]],[x[0],-.45,x[1]],[_[0],-.45,_[1]]),i.quad("base",at.soil2,[_[0],qn.base,_[1]],[x[0],qn.base,x[1]],[x[0],-3.2-1.4,x[1]],[_[0],-3.2-1.4,_[1]]);i.box("base",at.frame,n-1.2,qn.base-1.6,r-1.2,s+1.2,qn.base,o+1.2,"t");let l=wf,h=64,u=-30,f=[[n,r,s,u],[n,u,Pt.x1,l.z0],[h,u,s,l.z0],[n,l.z0,l.x0,l.z1],[h,l.z0,s,l.z1],[n,l.z1,s,o]];for(let[_,x,E,P]of f)i.box("ground",at.retain,_,-3.75-.5,x,E,-.45-.04,P,"b"),i.box("ground",at.street,_,-.45-.04,x,E,-.45,P,"b");let d=(_,x)=>{let E=_.reduce((L,R)=>L+R[0],0)/_.length,P=_.reduce((L,R)=>L+R[1],0)/_.length;return _.map(([L,R])=>[E+(L-E)*x,P+(R-P)*x])};i.slab("ground",at.grassD,[[l.x0,l.z0],[l.x0,l.z1],[h,l.z1],[h,u],[Pt.x1,u],[Pt.x1,l.z0]],[d(fo,1.06)],-3.75-.5,-3.2,{top:at.grass,sides:!1}),i.slab("ext",at.stoneD,d(fo,1.06),[fo],-3.2-.35,-3.2+.12,{top:at.stone}),i.prism("ext",at.waterD,fo,-3.75-.4,-3.75,{top:at.water});let g=gi.x0-.3,v=gi.x1+.3,m=gi.z0-.3,p=gi.z1+.3;for(let[_,x,E,P]of[[Pt.x0,Pt.z0,Pt.x1,m],[Pt.x0,p,Pt.x1,Pt.z1],[Pt.x0,m,g,p],[v,m,Pt.x1,p]])i.box("ext",at.pave,_,-.45,x,E,-.45+.03,P,"b");for(let _=Pt.x0+4;_<Pt.x1;_+=4)for(let[x,E]of _>g&&_<v?[[Pt.z0,m],[p,Pt.z1]]:[[Pt.z0,Pt.z1]])i.box("ext",at.paveL,_-.05,-.45+.03,x,_+.05,-.45+.04,E,"b");i.box("ext",at.stoneD,Pt.x0,-.45,Pt.z1-.45,Pt.x1,-.45+.55,Pt.z1,"b"),i.rail("ext",at.rail,[[Pt.x0+.3,Pt.z1-.25],[-6.4,Pt.z1-.25]],-.45+.55,.55,.9,{w:.05}),i.rail("ext",at.rail,[[6.4,Pt.z1-.25],[Pt.x1-.25,Pt.z1-.25],[Pt.x1-.25,_i.z1]],-.45+.55,.55,.9,{w:.05}),i.box("ext",at.stoneD,Pt.x1-.45,-.45,_i.z1,Pt.x1,-.45+.55,Pt.z1-.45,"b"),i.rail("ext",at.rail,[[Pt.x1-.25,_i.z0],[Pt.x1-.25,Pt.z0+.3]],-.45,1.1,.5,{w:.05}),i.box("ext",at.stoneD,Pt.x1-.45,-.45,Pt.z0,Pt.x1,-.45+.1,_i.z0,"b");let b=14,M=(-.45- -3.2)/b;for(let _=0;_<b;_++)i.box("ext",at.stoneD,-6,-3.2,Pt.z1+(b-_-1)*.27,6,-3.2+M*(_+1),Pt.z1+(b-_)*.27,"b");for(let _ of[-1,1])i.box("ext",at.stone,_*6-.35,-3.2,Pt.z1,_*6+.35,-.45+.7,Pt.z1+b*.27);for(let _=0;_<b;_++)i.box("ext",at.stoneD,Pt.x1+(b-_-1)*.27,-3.2,_i.z0+.2,Pt.x1+(b-_)*.27,-3.2+M*(_+1),_i.z1-.2,"b");for(let _ of[_i.z0,_i.z1])i.box("ext",at.stone,Pt.x1-.2,-3.2,_-.2,Pt.x1+b*.27,-.45+.55,_+.2);i.box("ext",at.walk,gi.x1+.3,-.45+.03,Pt.z0,Pt.x1-.45,-.45+.06,Pt.z1-.45,"b"),i.box("ext",at.walk,Pt.x0,-.45+.03,Pt.z0+.4,Pt.x1-.45,-.45+.06,gi.z0-.3,"b");for(let[_,x]of[[Pt.x0,Ke.x1+.6],[Pt.x1-.6,Pt.x1]])i.box("ext",at.stone,_,-.45,Pt.z0-.3,x,-.45+1.3,Pt.z0+.3);for(let _ of[Ke.x1+.6,Pt.x1-.6])i.box("ext",at.stoneD,_-.35,-.45,Pt.z0-.4,_+.35,-.45+1.9,Pt.z0+.4);for(let[_,x,E,P,L]of[[35.4,-13.6,1.6,.9,0],[36.8,-14.4,1.2,1.3,0],[35.9,-15.2,1.1,.6,0],[36.4,-13.9,.9,.5,1.3]])i.ybox("ext",at.fire,_,-.45+L+P/2,x,E,P,E*.8,_*2);i.beam("ext",at.woodD,[34.6,-.45+.1,-12.4],[37.4,-.45+1.6,-15.6],.14);for(let _ of[-30,-22,-14,14,22])t.push([_,23.4,.95]);for(let _ of[-14,-4,6,16])t.push([-31.6,_,.9]);let y=(_,x)=>{for(let E=0;E<_.length-1;E++){let[P,L]=[_[E],_[E+1]],R=Math.hypot(L[0]-P[0],L[1]-P[1]);i.ybox("ext",at.pave,(P[0]+L[0])/2,-3.2+.02,(P[1]+L[1])/2,R+x,.06,x,Math.atan2(L[1]-P[1],L[0]-P[0]))}};y([[18,81],[18,77],[2,76],[2,74]],2.4),y([[14,34],[14,30.5],[0,30.5]],3),y([[42.4,29.4],[42.4,10],[Pt.x1+3.6,10]],2.4),y([[-40,76],[-34,56],[-36,34],[-6,30.5]],2.2),y([[30,66],[43,50],[43,33.6]],2.2);for(let _=0;_<gs.length-1;_++){let x=gs[_],E=gs[_+1],P=Math.hypot(E[0]-x[0],E[1]-x[1]),L=Math.atan2(E[1]-x[1],E[0]-x[0]);i.ybox("ext",at.stone,(x[0]+E[0])/2,-3.2+.2,(x[1]+E[1])/2,P+2.4,.5,2.4,L);let R=-Math.sin(L),C=Math.cos(L);for(let O of[-1,1])i.rail("ext",at.stoneD,[[x[0]+R*O*1.1,x[1]+C*O*1.1],[E[0]+R*O*1.1,E[1]+C*O*1.1]],-3.2+.45,.5,1.2,{w:.12,top:.14})}for(let _=1;_<gs.length-1;_++)i.cyl("ext",at.stoneD,gs[_][0],gs[_][1],-3.75-.4,-3.2+.2,.6,8);let S=3,T=1.5;for(let _=0;_<Sc.length-1;_++){let x=Sc[_],E=Sc[_+1],P=Math.hypot(E[0]-x[0],E[1]-x[1]),L=Math.atan2(E[1]-x[1],E[0]-x[0]),R=(E[0]-x[0])/P,C=(E[1]-x[1])/P,O=-C,W=R,D=Math.max(1,Math.round(P/3));for(let G=0;G<=D;G++)for(let J of[-1,1]){let Y=x[0]+R*P*G/D+O*J*T,et=x[1]+C*P*G/D+W*J*T;i.box("ext",at.woodD,Y-.12,-3.2,et-.12,Y+.12,-3.2+S,et+.12)}i.ybox("ext",at.stoneD,(x[0]+E[0])/2,-3.2+.1,(x[1]+E[1])/2,P+3.4,.2,3.4,L);let k=(G,J,Y)=>[x[0]+R*G+O*J,Y,x[1]+C*G+W*J];i.plate("ext",at.tile,[k(-.3,-T-.7,-3.2+S),k(P+.3,-T-.7,-3.2+S),k(P+.3,0,-3.2+S+.9),k(-.3,0,-3.2+S+.9)],.2),i.plate("ext",at.tile,[k(P+.3,T+.7,-3.2+S),k(-.3,T+.7,-3.2+S),k(-.3,0,-3.2+S+.9),k(P+.3,0,-3.2+S+.9)],.2),i.ybox("ext",at.tileE,(x[0]+E[0])/2,-3.2+S+.9,(x[1]+E[1])/2,P+.6,.16,.3,L);for(let G of[-1,1])i.rail("ext",at.wood,[[x[0]+O*G*T,x[1]+W*G*T],[E[0]+O*G*T,E[1]+W*G*T]],-3.2+.2,.5,3,{w:.08})}let I=(_,x,E,P=3.4)=>{for(let[L,R]of[[-1,-1],[1,-1],[1,1],[-1,1]])i.box("ext",at.woodD,_+L*E-.14,-3.2,x+R*E-.14,_+L*E+.14,-3.2+P,x+R*E+.14);i.box("ext",at.stoneD,_-E-.6,-3.2,x-E-.6,_+E+.6,-3.2+.3,x+E+.6),Nf(i,"ext",_-E-1,x-E-1,_+E+1,x+E+1,-3.2+P,.7)};I(14,31.4,2.2),I(46,31,2.4),I(-36,34,2.4),I(46,-6,2.2);for(let[_,x,E]of[[-18,34,3.2],[24,72,2.6],[-44,60,3.4],[54,40,3],[55,2,2.8],[-26,76,2.4],[26,36,1.8]])Ac(i,_,x,-3.2,E,e);for(let[_,x]of[[-50,44],[-52,70],[-46,30],[-24,32],[-12,76],[32,76],[36,60],[50,60],[56,46],[54,22],[57,12],[53,-10],[56,-22],[48,-22],[26,28],[-8,32],[-30,72],[8,80],[46,72],[-56,54],[-40,66]])t.push([_,x,1.05+e()*.3,-3.2]);{let{x0:_,x1:x,z0:E,z1:P}=Tf,L=-.45+1.2,R=L+4.4,C=R+4.2,O=.5;i.box("ext",at.stoneD,_-2,-.45,E-2,x+2,L,P+6);let W=(k,G,J,Y,et)=>i.wall("ext",at.wall[1],k,G,J,Y,O,et);W([_,P],[x,P],L,C,[{a:14.5,w:5,y0:0,y1:3.4},...[3,8,24,29].map(k=>({a:k,w:1.6,y0:1,y1:3.2})),...[3,8,14,20,26,31].map(k=>({a:k,w:1.6,y0:5.4,y1:7.6}))]),W([_,E],[x,E],L,C,[...[3,8,24,29].map(k=>({a:k,w:1.6,y0:1,y1:3.2})),{a:26.8,w:1.6,y0:0,y1:2.8},{a:12,w:10,y0:4.6,y1:8.2}]),W([_,E],[_,P],L,C,[{a:6,w:2,y0:5.4,y1:7.6}]),W([x,E],[x,P],L,C,[{a:6,w:2,y0:5.4,y1:7.6}]);let D=[[x-3.8,P-8.15],[x-.5,P-8.15],[x-.5,P-.5],[x-3.8,P-.5]];i.slab("ext",at.stoneD,[[_,E],[x,E],[x,P],[_,P]],[D],R-.3,R,{top:"#CDB99B"}),i.rail("ext",at.wood,[[x-3.8,P-.5],[x-3.8,P-8.15]],R,1,.3,{w:.05}),i.rail("ext",at.wood,[[_+12,E-.1],[_+22,E-.1]],R,1.05,.25,{w:.06});for(let[k,G,J,Y]of[[_-.3,E-.4,x+.3,E+.1],[_-.3,P-.1,x+.3,P+.4],[_-.3,E,_+.1,P],[x-.1,E,x+.3,P]])i.box("ext",at.stone,k,R-.3,G,J,R+.1,Y);i.box("ext",at.woodD,_+14,R,E+5,_+18,R+.78,E+6.2),i.box("ext",at.wood,_+2,R,P-1.2,_+9,R+2.6,P-.5),i.stairs("ext",at.stoneD,x-2.15,P-1.1,L,-Math.PI/2,22,4.4/22,.32,2.6,{name:"\u671B\u56ED\u9986\u697C\u68AF"}),Nf(i,"ext",_-1.2,E-1.2,x+1.2,P+1.2,C,.55),i.box("ext",at.stone,_,C-.3,E,x,C,P);for(let k=0;k<18;k++)i.box("ext",at.stoneD,16.5,-3.2,E-2-(18-k)*.3,20,-3.2+(L- -3.2)*(k+1)/18,E-2-(17-k)*.3,"b");for(let k=0;k<5;k++)i.box("ext",at.stoneD,_-6,-.45,P+6+k*.5,x+6,L-(L- -.45)*(k+1)/5+.001,P+6+(k+1)*.5,"b");i.box("ext",at.stoneD,_-6,-.45,P+2,x+6,L,P+6)}{let{x0:_,x1:x,z0:E,z1:P}=Ec;i.box("ext",at.pave,_,-.45,E,x,-.45+.05,P,"b");for(let C=_+6;C<x;C+=6)i.box("ext",at.paveL,C-.06,-.45+.05,E,C+.06,-.45+.06,P,"b");for(let C=E+6;C<P;C+=6)i.box("ext",at.paveL,_,-.45+.05,C-.06,x,-.45+.06,C+.06,"b");let L=7,R=127;i.box("ext",at.stoneD,L-4,-.45,R-4,L+4,-.45+.45,R+4),i.box("ext",at.stone,L-1.8,-.45+.45,R-1.8,L+1.8,-.45+2.4,R+1.8),i.cyl("ext","#9A9184",L,R,-.45+2.4,-.45+4.6,.7,10),i.cyl("ext","#9A9184",L,R,-.45+4.6,-.45+5.6,.45,10),i.box("ext","#9A9184",L-1.6,-.45+4.2,R-.3,L+1.6,-.45+4.6,R+.3);for(let[C,O]of[[_+3,_+16],[x-16,x-3]])i.box("ext",at.stoneD,C,-.45,136,O,-.45+.5,144),i.box("ext",at.grass,C+.3,-.45+.5,136.3,O-.3,-.45+.55,143.7),i.rail("ext",at.rail,[[C,135.6],[O,135.6]],-.45,1,.6,{w:.05});for(let C=_+4;C<=x-4;C+=8)for(let O of[E+9,P-3])Math.abs(C-L)>8&&t.push([C,O,1]);for(let C=E+14;C<P;C+=8)for(let O of[_+2.5,x-2.5])t.push([O,C,1]);for(let[C,O]of[[-6,120],[20,120],[-6,134],[20,134]])ex(i,C,O)}{let{x0:_,x1:x,z0:E,z1:P}=Af,L=-.45,R=5.6;i.box("ext",at.stoneD,_-1,L,E,x+1,L+.3,P);for(let C=_;C<=x+.01;C+=(x-_)/8)for(let O of[E+.8,P-.8])i.cyl("ext",at.col,C,O,L+.3,L+R,.32,10,0),i.box("ext",at.stoneD,C-.42,L+.3,O-.42,C+.42,L+.65,O+.42);i.box("ext",at.stone,_-1.2,L+R,E-.2,x+1.2,L+R+.9,P+.2),i.box("ext",at.stoneD,_-1.5,L+R+.9,E-.5,x+1.5,L+R+1.15,P+.5),i.box("ext","#8C3E2F",(_+x)/2-3,L+R+.1,P+.2,(_+x)/2+3,L+R+.8,P+.3);for(let[C,O]of[[Ec.x0,_-1],[x+1,Ec.x1]])i.box("ext",at.stone,C,L,153.6,O,L+3,154.4);i.rail("ext",at.rail,[[_+3.4,146.4],[x-3.4,146.4]],L,1.05,.5,{w:.05}),i.box("ext",at.stoneD,_+3.4,L,143,x-3.4,L+.5,146),i.box("ext",at.grass,_+3.7,L+.5,143.3,x-3.7,L+.55,145.7),Ac(i,(_+x)/2,144.4,L+.5,4.2,e),Ac(i,(_+x)/2-6,144.6,L+.5,2.6,e),Ac(i,(_+x)/2+6,144.6,L+.5,2.8,e);for(let C of[_+5,_+9,x-9,x-5])t.push([C,144.6,.8])}i.box("ext",at.walk,n,-.45,154.4,s,-.45+.15,o,"b");let F=[[n,r,-38,-40,{}],[-30,r,22,-40,{}],[30,r,s,-40,{}],[n,-32,-70,22,{}],[n,30,-70,96,{}],[72,-32,s,30,{}],[72,38,s,96,{}],[n,100,-48,150,{floors:3}],[56,100,s,150,{floors:3}]];for(let[_,x,E,P,L]of F)tx(i,_,x,E,P,e,t,L);for(let _=-36;_<96;_+=10)t.push([-66,_,.9]),t.push([68,_,.9]);return{trees:t}}var Rc=class{constructor(t,e,n={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{}},n),this.cur={th:0,ph:.9,r:500,t:new z},this.goal={th:0,ph:.9,r:500,t:new z},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){let n=this.goal;t.th!==void 0&&(n.th=t.th),t.ph!==void 0&&(n.ph=t.ph),t.r!==void 0&&(n.r=t.r),t.t&&n.t.copy(t.t),this._clamp(),e&&(this.cur.th=n.th,this.cur.ph=n.ph,this.cur.r=n.r,this.cur.t.copy(n.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var o,a,c;let n={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,t:this.cur.t.clone()},s=(o=t.th)!=null?o:n.th;for(;s-n.th>Math.PI;)s-=Math.PI*2;for(;s-n.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(a=t.ph)!=null?a:n.ph,r:(c=t.r)!=null?c:n.r,t:(t.t||n.t).clone()};this.fly={from:n,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let n=e.bounds;t.t.x=Math.min(n.x1,Math.max(n.x0,t.t.x)),t.t.z=Math.min(n.z1,Math.max(n.z0,t.t.z))}}update(t){let e=this.cur,n=this.goal;if(this.fly){let s=this.fly,r=Math.min(1,(this.now()-s.t0)/s.dur),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.th=s.from.th+(s.to.th-s.from.th)*o,e.ph=s.from.ph+(s.to.ph-s.from.ph)*o;let a=Math.sin(Math.PI*o)*Math.min(.35,s.from.t.distanceTo(s.to.t)/900);e.r=Math.exp(Math.log(s.from.r)+(Math.log(s.to.r)-Math.log(s.from.r))*o)*(1+a),e.t.lerpVectors(s.from.t,s.to.t,o),r>=1&&(this.fly=null)}else{let s=1-Math.exp(-t*12);e.th+=(n.th-e.th)*s,e.ph+=(n.ph-e.ph)*s,e.r=Math.exp(Math.log(e.r)+(Math.log(n.r)-Math.log(e.r))*s),e.t.lerp(n.t,s)}return this._apply(),!!this.fly||Math.abs(n.th-e.th)>1e-4||Math.abs(n.ph-e.ph)>1e-4||Math.abs(n.r-e.r)>.01||n.t.distanceToSquared(e.t)>1e-4}_apply(){let t=this.cur,e=Math.sin(t.ph);this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t)}_ground(t,e,n){let s=this.dom.getBoundingClientRect(),r=new Lt((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),o=new Qr;o.setFromCamera(r,this.cam);let a=new z;return o.ray.intersectPlane(new ke(new z(0,1,0),-n),a)?a:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,n){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let o=this._ground(e,n,s.t.y);if(o){let a=1-s.r/r;s.t.x+=(o.x-s.t.x)*a,s.t.z+=(o.z-s.t.z)*a}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let n=this.goal,s=this.dom.clientHeight||600,r=2*n.r*Math.tan(this.cam.fov*Math.PI/360)/s,o=this.cur.th,a=Math.cos(o),c=-Math.sin(o),l=-Math.sin(o),h=-Math.cos(o),u=1/Math.max(.35,Math.cos(this.cur.ph));n.t.x+=(-t*a+e*l*Math.min(u,2.2))*r,n.t.z+=(-t*c+e*h*Math.min(u,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(n.pointerId,{x:n.clientX,y:n.clientY,b:n.button,sh:n.shiftKey,t:n.pointerType});try{t.setPointerCapture(n.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=n=>{var s,r;this.ptrs.delete(n.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",n=>{let s=this.ptrs.get(n.pointerId);if(!s||!this.enabled)return;let r=n.clientX-s.x,o=n.clientY-s.y;if(s.x=n.clientX,s.y=n.clientY,this.ptrs.size>=2){let[a,c]=[...this.ptrs.values()],l=(a.x+c.x)/2,h=(a.y+c.y)/2,u=Math.hypot(a.x-c.x,a.y-c.y),f=Math.atan2(c.y-a.y,c.x-a.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,u),l,h),this.pan(l-this._pinch.mx,h-this._pinch.my);let d=f-this._pinch.a;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),this.rotate(d,0)}this._pinch={d:u,mx:l,my:h,a:f};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||n.shiftKey?this.pan(r,o):this.rotate(-r*.0055,-o*.0045)}),t.addEventListener("wheel",n=>{var r,o;if(!this.enabled)return;if(!this.wheelOn){(o=(r=this.o).onWheelHint)==null||o.call(r);return}n.preventDefault();let s=n.deltaMode===1?n.deltaY*16:n.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),n.clientX,n.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};var mh=["F1","F2","F3","roof","ext","ground","base","ctx"],Ic=["F1","F2","F3","roof"],nx={F1:0,F2:Ve.F2,F3:Ve.F3,roof:Ve.EAVE},sr={ov:{t:[2,2,10],r:165,ph:.9,th:.6},ext:{t:[8,0,52],r:300,ph:.82,th:.42}},ix=[.29,.27,.25];function Cc(i){return i.side=_n,i.clipShadows=!0,i.clipIntersection=!0,i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      if (!gl_FrontFacing) gl_FragColor = vec4(${ix.map(e=>e.toFixed(3)).join(",")}, 1.0);`)},i.customProgramCacheKey=()=>"cap",i}function sx(i){let t=new Ye;return t.setAttribute("position",new He(i.p,3)),t.setAttribute("normal",new He(i.n,3)),t.setAttribute("color",new He(i.c,3)),t.computeBoundingSphere(),t}function rx(){let i=(c,l)=>{let h=c.attributes.position.count,u=new Float32Array(h*3);for(let f=0;f<h;f++)u.set(l,f*3);return c.setAttribute("color",new He(u,3)),c},t=(c,l,h,u)=>{let f=vf(new Qn(c,1).deleteAttribute("normal").deleteAttribute("uv"));return f.computeVertexNormals(),f.translate(l,h,u).toNonIndexed()},e=[t(1.25,0,3.7,0),t(.95,.85,3.2,.35),t(.9,-.7,3.35,-.55),t(.8,.1,4.5,-.25)],n=new Ye;for(let c of["position","normal"]){let l=e.reduce((f,d)=>f+d.attributes[c].array.length,0),h=new Float32Array(l),u=0;for(let f of e)h.set(f.attributes[c].array,u),u+=f.attributes[c].array.length;n.setAttribute(c,new He(h,3))}let s=new Ui(.16,.24,2.7,5,1,!0).translate(0,1.35,0).deleteAttribute("uv"),r=new ie("#7A6A58"),o=[i(n,[1,1,1]),i(s.toNonIndexed(),[r.r,r.g,r.b])],a=new Ye;for(let c of["position","normal","color"]){let l=o.reduce((f,d)=>f+d.attributes[c].array.length,0),h=new Float32Array(l),u=0;for(let f of o)h.set(f.attributes[c].array,u),u+=f.attributes[c].array.length;a.setAttribute(c,new He(h,3))}return a}function ox(i={}){let t=new mi;for(let m of Object.keys(nr))delete nr[m];let e=Of(t);Pf(t),Ff(t);let n=t.out(),s=new _e,r={};for(let m of mh)r[m]=new _e,r[m].name=m,s.add(r[m]);let o=new ke(new z(-1,0,0),0),a=new ke(new z(0,0,-1),0),c={},l={},h={},u=m=>new Gn({vertexColors:!0,roughness:.9,metalness:0,...m});for(let m of Ic)c[m]=new ke(new z(0,-1,0),1e5),l[m]=new ke(new z(0,-1,0),1e5),h[m]=Cc(u({})),h[m].clippingPlanes=[o,a,c[m]],h[m+":g"]=Cc(u({roughness:.3,metalness:.15})),h[m+":g"].clippingPlanes=[o,a,c[m]],h[m+":p"]=Cc(u({})),h[m+":p"].clippingPlanes=[o,a,l[m]],h[m+":e"]=new Xe({vertexColors:!0,toneMapped:!1,clippingPlanes:[o,a,l[m]],clipIntersection:!0}),h[m+":u"]=u({});let f=[new ke(new z(-1,0,0),1e5),new ke(new z(1,0,0),1e5),new ke(new z(0,0,-1),1e5),new ke(new z(0,0,1),1e5)];h.ground=Cc(u({roughness:.95})),h.ground.clippingPlanes=f,h.base=u({roughness:1}),h.ctx=u({}),h.ext=u({}),h["ext:e"]=new Xe({vertexColors:!0,toneMapped:!1}),h["ext:g"]=u({roughness:.3,metalness:.15});let d=[],g=(m,p,b)=>{let M=m.split(":")[0],y=h[m]||h[M];if(!y)return null;let S=new he(sx(p),y),T=m.endsWith(":e");return S.castShadow=!T&&M!=="ground"&&M!=="base",S.receiveShadow=!T,(b||r[M]).add(S),d.push(S),S};for(let[m,p]of Object.entries(n))g(m,p);let v={};for(let[m,{g:p,k:b}]of Object.entries(nr)){let M=new _e,y=new _e;y.name=m,y.add(M),r[p].add(y);for(let[I,F]of Object.entries(b.out()))g(I,F,M);let S=new Cn().setFromObject(M),T=S.getCenter(new z);M.position.copy(T).negate(),y.position.copy(T),y.userData={center:T.clone(),box:S,home:T.clone(),group:p},v[m]=y}if(i.trees!==!1){let m=rx(),p=new Gn({vertexColors:!0,roughness:.95}),M=(y=>{if(!y.length)return null;let S=new Lr(m,p,y.length),T=new ve,I=new kn,F=new z,_=new z,x=new ie,E=new z(0,1,0),P=new ie("#82966B"),L=new ie("#A2AD80");return y.forEach(([R,C,O,W],D)=>{let k=Math.sin(R*12.9898+C*78.233)*43758.5453,G=k-Math.floor(k);I.setFromAxisAngle(E,G*6.28),F.set(O*(.9+G*.2),O*(.95+G*.2),O*(.9+G*.2)),_.set(R,(W!=null?W:-.45)+.15,C),T.compose(_,I,F),S.setMatrixAt(D,T),x.copy(P).lerp(L,G),S.setColorAt(D,x)}),S.castShadow=!0,S.receiveShadow=!0,S.frustumCulled=!1,S})(e.trees);M&&r.ctx.add(M)}return{root:s,groups:r,parts:v,M:h,planes:{px:o,pz:a,pyS:c,pyP:l,gb:f},meshes:d}}function Bf(i,t={}){var lt,Q;let e=(lt=t.mobile)!=null?lt:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),n=new vc({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Sa,n.shadowMap.autoUpdate=!1,n.toneMapping=Pa,n.toneMappingExposure=(Q=t.exposure)!=null?Q:1,n.localClippingEnabled=!0,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",i.appendChild(n.domElement);let s=new Pr,r=new on(30,1,1,4e3),o=ox(t);s.add(o.root),s.add(new Zr("#EEF2F5","#B5AB9A",1.3));let a=new $r("#FFF2DF",2.6),c=new z(-.5,.78,.38).normalize(),l=new z(0,10,0);a.position.copy(l).addScaledVector(c,400),a.target.position.copy(l),s.add(a,a.target),a.castShadow=!0;let h=e?2048:4096;a.shadow.mapSize.set(h,h),a.shadow.bias=-3e-4,a.shadow.normalBias=.04,a.shadow.radius=2;let u=H=>{let it=a.shadow.camera,bt=new ve().lookAt(a.position,a.target.position,new z(0,1,0)).setPosition(a.position).invert(),dt=1e9,Ft=-1e9,de=1e9,B=-1e9,me=1e9,Zt=-1e9,kt=new z;for(let Rt of[H.x0,H.x1])for(let we of[H.y0,H.y1])for(let Ct of[H.z0,H.z1])kt.set(Rt,we,Ct).applyMatrix4(bt),dt=Math.min(dt,kt.x),Ft=Math.max(Ft,kt.x),de=Math.min(de,kt.y),B=Math.max(B,kt.y),me=Math.min(me,kt.z),Zt=Math.max(Zt,kt.z);Object.assign(it,{left:dt,right:Ft,bottom:de,top:B,near:-Zt-5,far:-me+5}),it.updateProjectionMatrix(),n.shadowMap.needsUpdate=!0},f=t.shadowBox||{x0:qn.x0,x1:qn.x1,z0:qn.z0,z1:qn.z1,y0:-6,y1:30};u(f);let d=!0,g=!0,v=!0,m=performance.now(),p=[],b=[],M=new Rc(r,n.domElement,{minR:6,maxR:900,minPhi:.1,maxPhi:1.45,bounds:{x0:-110,x1:120,z0:-70,z1:175},onChange:()=>{d=!0},onStart:()=>{for(let H of p)H()},onWheelHint:()=>{for(let H of b)H()},...t.controls||{}}),y=(H,it)=>{var Ft;let bt=typeof H=="string"?sr[H]:H,dt={th:bt.th,ph:bt.ph,r:bt.r,t:new z(...bt.t)};it?M.set(dt,!0):M.flyTo(dt,(Ft=bt.dur)!=null?Ft:1.3)};y(t.view||"ov",!0);let S=o.planes,T=o.groups,I=1e5,F=null;function _(H){H=typeof H=="string"?{kind:H}:H;let it=JSON.stringify(H);if(it===F)return;F=it;let bt=H.kind,dt=H.floor,Ft=H.cut;bt==="ov"&&(bt="plan",dt="F2",Ft=Ft!=null?Ft:2.4),S.px.constant=-I,S.pz.constant=-I;for(let de of Ic)S.pyS[de].constant=I,S.pyP[de].constant=I,T[de].visible=!0;if(bt==="plan"){let de=Ic.indexOf(dt);Ic.forEach((B,me)=>{me>de&&(T[B].visible=!1)}),Ft!=null&&(S.pyS[dt].constant=nx[dt]+Ft)}n.shadowMap.needsUpdate=!0,d=!0}_(t.mode||"ov");let x={x:.5,y:.5,tx:.5,ty:.5},E=()=>{let H=i.clientWidth||800,it=i.clientHeight||500;Math.abs(x.x-.5)<1e-4&&Math.abs(x.y-.5)<1e-4?r.clearViewOffset():r.setViewOffset(H,it,(.5-x.x)*H,(.5-x.y)*it,H,it)},P=H=>{if(x.x===x.tx&&x.y===x.ty)return!1;let it=1-Math.exp(-H*5);return x.x+=(x.tx-x.x)*it,x.y+=(x.ty-x.y)*it,Math.abs(x.tx-x.x)+Math.abs(x.ty-x.y)<.001&&(x.x=x.tx,x.y=x.ty),E(),!0},L=()=>{let H=i.clientWidth||800,it=i.clientHeight||500;n.setSize(H,it,!1),r.aspect=H/it,r.updateProjectionMatrix(),E(),d=!0},R=new ResizeObserver(L);R.observe(i),L();let C=new IntersectionObserver(H=>{g=H[0].isIntersecting,g&&(d=!0)});C.observe(i);let O=[],W=[],D=[],k=()=>{for(let H of D)H(r);n.render(s,r);for(let H of O)H(r)},G=0,J=!1,Y=0,et=H=>{if(!v||(requestAnimationFrame(et),J))return;let it=Math.max(0,Math.min(.05,(H-m)/1e3));if(m=H,!g||document.hidden)return;let bt=xt.animating||H<xt.animUntil,dt=!bt&&xt.ambient&&H-G>50;if(bt||dt){for(let B of W)B(it,H/1e3);dt&&(G=H)}let Ft=M.update(it),de=P(it);(d||Ft||de||bt||dt)&&(k(),d=!1)};requestAnimationFrame(et);let xt={renderer:n,scene:s,camera:r,controls:M,world:o,parts:o.parts,setView:y,VIEWS:sr,setMode:_,mode:()=>JSON.parse(F),animating:!1,animUntil:0,ambient:!1,mobile:e,invalidate:()=>{d=!0},setCenter:(H,it,bt)=>{x.tx=H,x.ty=it,bt&&(x.x=H,x.y=it,E(),d=!0)},hold:H=>{J=H,H?(Y=performance.now()/1e3,M.now=()=>Y*1e3):M.now=()=>performance.now()},step:H=>{Y+=H;for(let it of W)it(H,Y);M.update(H),k()},setShadowBox:H=>{u(H||f),d=!0},shadowDirty:()=>{n.shadowMap.needsUpdate=!0,d=!0},renderNow:()=>{M.update(1),k()},onRender:H=>O.push(H),onBeforeRender:H=>D.push(H),onFrame:H=>W.push(H),onUserStart:H=>p.push(H),onWheelHint:H=>b.push(H),dispose:()=>{v=!1,R.disconnect(),C.disconnect(),n.dispose(),n.domElement.remove()}};return xt}var le=-.45+.03,rt=Ve.F2+.02,_t=Ve.F3+.05,en=-3.2+.05,rr=-.45+5.62,xs=-3.2+3.92,bi=At+4.02,Si=qe.y+.02,hn=rt+.6,kf={kind:"ext"},Wi={kind:"plan",floor:"F1",cut:3},ax={kind:"plan",floor:"F1",cut:4.2},zf={kind:"plan",floor:"F1",cut:5.6},or={kind:"plan",floor:"F2",cut:2.6},cx={kind:"plan",floor:"F2",cut:3.6},go={kind:"plan",floor:"F3",cut:2.8},lx={kind:"plan",floor:"F3",cut:4.4};function nn(i,t,e=22,n=1,s=0,r=.4,o=0){let a=t[0]-i[0],c=t[1]-i[2],l=Math.hypot(a,c)||1,h=Math.min(l*r,e*.45);return{t:[+(i[0]+a/l*h).toFixed(2),+(i[1]+o).toFixed(2),+(i[2]+c/l*h).toFixed(2)],r:e,ph:n,th:+(Math.atan2(-a,-c)+s).toFixed(3)}}var Xi=[{b:[0,1,2,3,4],mode:kf,cam:{t:[20,-2,70],r:150,ph:.86,th:.55},at:[22,1,36]},{b:[5,6,7,8,9,10],mode:Wi,cam:{t:[14,0,-6],r:62,ph:.74,th:.55},at:[31,1,-10]},{b:[11,12,13,14,15],mode:or,cam:{t:[-2,5,-4],r:72,ph:.72,th:.5},at:[-20,6,-12]},{b:[16,17,18],mode:go,cam:{t:[-8,10,-5],r:58,ph:.72,th:.62},at:[-4,11,2]},{b:[19,20,21,22,23,24],mode:or,cam:{t:[-4,3,0],r:74,ph:.72,th:.45},at:[-24,6,-6]}],Hf={gate:20,c2door:21,pdoor:21,mdoor:17,ydoor:16,horn:13},ni=[{p:[15,le,134],pl:[7,124],pose:"walk",mode:kf,path:[[8.9,le,162],[8.9,le,152.4],[9.4,le,148.6],[21.6,le,148.6],[21.6,le,141],[15,le,134]],u:[["n",34,le,135,30,131],["n",35.4,le,134.6,33,131,"talk"],["e",26,le,132,22,131],["n",3.6,le,121.6,7,127],["n",5.8,le,120.6,7,127],["n",9.6,le,121,7,127],["n",11.2,le,122.4,7,127],["e",4.6,le,118.4,6,124],["e",9.4,le,118.6,8,124],["n",7,le,116.8,7,110],["n",2,le,109,7,104],["n",12,le,109.4,7,104]],lab:[["\u8FD1\u5904\u680F\u6746\u65C1\u7684\u5B66\u751F\u3001\u58EB\u5175\u5728\u4EA4\u8C08",34,4.6,135,"note"],["\u96D5\u50CF\u548C\u4EBA\u7FA4\uFF1A\u5B66\u751F\u88AB\u58EB\u5175\u5E26\u8D70\uFF08\u8FC7\u573A\uFF09",7,8.8,121,"warn"],["\u671B\u56ED\u9986",7,13,93,"note"]],cam:{t:[11,0,126],r:46,ph:1.08,th:.5}},{p:[8,rr,86.9],pl:[3,30],u:[["n",12.9,rr,89,14.1,87.9,"talk"],["n",14.1,rr,87.9,12.9,89]],ar:[[[8,rr+1.6,86.4],[1,3,24],"look"]],lab:[["\u5E26\u680F\u6746\u7684\u5927\u5F00\u53E3",10.6,rr+1.5,86.1,"item"],["\u6C34\u9762\u3001\u77F3\u6865\u3001\u4EAD\u5ECA",0,en+3,56,"note"],["\u5B66\u9662\u5916\u5899\u4E0E\u4E3B\u697C",-14,7,22,"note"],["\u8DD1\u6D4B\uFF1A\u6709\u4EBA\u8D70\u697C\u68AF\u4E0B\u697C\uFF0C\u4E5F\u80FD\u63A8\u8FDB",18,en+2.6,81,"note"]],cam:{t:[3,1.2,38.5],r:60,ph:1.45,th:.142}},{p:[24,xs,32],pl:[0,22],path:[[8,rr,86.9],[8,en,82.4,1],[6.6,en,80],[3,en,76.4],[2,en+.45,70],[2,en+.45,64],[8,en+.45,58],[8,en+.45,48],[14,en+.45,42],[14,en+.45,35.2],[17.6,xs,32,1],[24,xs,32]],u:[["e",-1.5,.02,21.4,-1.5,30],["e",1.5,.02,21.4,1.5,30]],ar:[[[24,xs+1.6,32],[0,le+1.6,22.6],"look"]],lab:[["\u6B63\u95E8\u5B88\u536B\uFF1A\u53EF\u4EE5\u5F3A\u653B",0,4.6,21.6,"warn"],["\u8FDE\u5ECA\u5C4B\u9876\uFF1A\u63A5\u8FD1\u4E4B\u524D\u5148\u770B\u6E05\u6B63\u95E8",26,xs+3,32,"note"],["\u8DEF\u4E0A\u58EB\u5175\u7684\u5BF9\u8BDD\u6697\u793A\u4E1C\u4FA7\u7684\u8DEF",40,en+4,16,"note"]],cam:{t:[14,-1,28],r:34,ph:1.12,th:1.25}},{p:[31.6,le,-3.6],pl:[31,-9],pose:"walk",path:[[24,xs,32],[39.4,xs,31.6],[40.6,en,28.4,1],[42.4,en,26],[42.4,en,10.4],[41.95,en,10],[38,le,10],[36,le,8.4],[33,le,3],[31.6,le,-3.6]],lab:[["\u540E\u95E8\u5C31\u5F00\u5728\u6765\u8DEF\u6B63\u524D\u65B9\uFF1A\u95E8\u706F\u3001\u96E8\u68DA\u3001\u77F3\u9636",31,4.4,-8,"item"],["\u5DE6\u4FA7\uFF1A\u5B66\u9662\u4E3B\u697C\u4E1C\u5899",27.6,7.6,0,"note"],["\u53F3\u4FA7\uFF1A\u680F\u6746\u548C\u4F4E\u5904\u56ED\u6797",38,1.4,-2,"note"],["\u4ECE\u56ED\u6797\u4E0A\u6765\u7684\u77ED\u53F0\u9636",39.6,en+3,10,"note"]],cam:nn([31.6,le,-3.6],[31,-9],20,1.1,.55)},{p:[32.6,le,-6.4],pl:[36,-14],pose:"walk",path:[[31.6,le,-3.6],[32.6,le,-6.4]],fx:[["fire",36.2,le,-14,1.7]],lab:[["\u8D77\u706B\u7684\u5668\u6750\u548C\u6742\u7269\u6321\u4F4F\u7EE7\u7EED\u5F80\u5317\u7684\u4FA7\u8DEF",36.2,3.8,-14,"warn"],["\u540E\u95E8\uFF08\u95E8\u8FB9\u6709\u706F\uFF09",31,3.8,-8,"item"],["\u4FA7\u8DEF\u901A\u5F80\u540E\u5DF7",36,2.2,-24,"note"],["\u4FA7\u8DEF\u53E3\u539F\u6765\u7684\u4E24\u540D\u58EB\u5175\u5DF2\u5220\u6389",36,3.8,-10,"note"]],before:{u:[["e",35.4,le,-9.4,32,-6],["e",36.8,le,-10.2,35.4,-9.4,"talk"]],lab:[["\u8D77\u706B\u7684\u5668\u6750\u548C\u6742\u7269\u6321\u4F4F\u7EE7\u7EED\u5F80\u5317\u7684\u4FA7\u8DEF",36.2,3.8,-14,"warn"],["\u540E\u95E8\uFF08\u95E8\u8FB9\u6709\u706F\uFF09",31,3.8,-8,"item"],["\u4FEE\u6539\u524D\uFF1A\u4FA7\u8DEF\u53E3\u7684\u4E24\u540D\u58EB\u5175\u6BD4\u540E\u95E8\u66F4\u62A2\u773C",36.2,4.6,-9.8,"warn"]]},cam:nn([32.6,le,-6.4],[35,-14],20,1.08,.5)},{p:[31.1,.02,-10.8],pl:[31.2,-14],pose:"crouch",mode:Wi,path:[[32.6,le,-6.4],[31,le,-6.2],[31,.02,-8.8],[31.1,.02,-10.8]],u:[["e",31.2,.02,-12.3,31.2,-16]],lab:[["\u80CC\u5BF9\u73A9\u5BB6\u7684\u58EB\u5175\uFF1A\u80CC\u523A\u6559\u5B66",31.2,3.2,-12.3,"warn"],["\u9762\u524D\u7684\u5C0F\u5956\u52B1\uFF08\u8DD1\u6D4B\u540E\u8865\uFF09",31.2,1.9,-14.2,"item"],["\u5DE6\u624B\u8FB9\u7684\u95E8\uFF1A\u7EE7\u7EED\u6DF1\u5165",28,3.2,-14,"note"]],cam:nn([31.1,.02,-10.8],[31.2,-14],16,.85,-.5)},{p:[25.2,At,-14],pl:[20,-14],mode:Wi,path:[[31.1,.02,-10.8],[29.4,.02,-12.6],[28.6,.02,-14],[27.4,.02,-14],[25.6,At,-14],[25.2,At,-14]],u:[["e",31.2,.02,-12.3,31.2,-16,"down"],["e",20.3,At,-14.9,21.4,-13,"talk"],["e",21.4,At,-13,20.3,-14.9]],ar:[[[25.2,At+1.6,-14],[20.8,At+1.4,-14],"look"]],lab:[["\u9AD8\u67B6\u4E2D\u95F4\u7684\u77E9\u5F62\u7A7A\u9699\uFF1A\u770B\u5F97\u5230\u3001\u8D70\u4E0D\u8FC7",23,At+5,-14,"item"],["\u53E6\u4E00\u4FA7\u4E24\u540D\u58EB\u5175\u5728\u4EA4\u8C08",20.8,At+3.4,-14,"warn"],["\u5DE6\u624B\u8FB9\u7684\u9EC4\u8272\u7BB1\u5B50\uFF1A\u5411\u4E0A\u722C\u7684\u4F4D\u7F6E",25.6,At+4,-9.8,"item"]],cam:nn([25.2,At,-14],[20,-14],20,.85,.7)},{p:[23,bi,-12.4],pl:[12.75,-16.8],pose:"aim",mode:zf,path:[[25.2,At,-14],[24.9,At,-12.4],[26,At,-11.7],[26.7,At+.82,-10.6,1],[25.9,At+1.42,-9.6,1],[24.5,At+2.72,-9.6,1],[23,bi,-9.6,1],[23,bi,-12.4]],u:[["e",21.4,At,-13,14,-16],["e",15.6,At,-15.9,12.75,-16.8,"walk"]],ar:[[[23,bi+1.4,-12.4],[12.9,At+1.8,-16.8],"fire"],[[20.3,At+.2,-14.9],[15.8,At+.2,-15.8],"move"],[[22.6,bi+.3,-11.6],[21.8,At+.2,-10.9],"drop"]],fx:[["flame",12.75,At+1.75,-16.8,.3]],lab:[["\u767B\u9AD8\uFF1A\u89C6\u89D2\u4ECE\u5E73\u89C6\u53D8\u4FEF\u89C6",23.4,bi+3,-10.6,"note"],["\u8FDC\u7A0B\u70B9\u71C3\u8FDC\u5904\u5899\u8FB9\u7684\u70DB\u53F0\uFF0C\u5F15\u8D70\u4E00\u4EBA",12.75,At+4,-16.8,"item"],["\u4E24\u4EBA\u5206\u5F00\u540E\u4ECE\u9AD8\u5904\u843D\u4E0B",21.4,At+3.4,-11,"note"],["\u51FA\u53E3\u7684\u77ED\u697C\u68AF",20.7,At+2.8,-9,"note"]],cam:nn([23,bi,-12.4],[12.75,-16.8],20,.92,.55)},{p:[17.6,.06,-2.2],pl:[12,-2],pose:"walk",mode:Wi,path:[[23,bi,-12.4],[22.6,bi,-11.4],[21.8,At,-10.9,1],[20.7,At,-10.4],[20.7,.02,-8],[20.2,.06,-6],[17.6,.06,-2.2]],u:[["e",21.4,At,-13,14,-16],["e",13.6,At,-16.2,12.75,-16.8]],lab:[["\u5730\u9762\u7684\u6392\u6C34\u6C9F",21.8,1.2,-1,"note"],["\u4E1C\u5899\u8FB9\u5806\u7740\u7684\u9EC4\u8272\u7BB1\u5B50",26.6,3.6,-5.6,"note"],["\u6B63\u5BF9\u51FA\u53E3\u7684\u5899\u4E0A\u7BA1\u9053\uFF08\u8FDC\u7A0B\u4EA4\u4E92\u7269\uFF09",20.7,5.4,3.7,"item"],["\u6A90\u5ECA\u5C3D\u5934\u7684\u95E8\uFF1A\u8FDB\u5165\u4E00\u697C\u5927\u5385",12,3.6,-2,"note"]],cam:nn([17.6,.06,-2.2],[12,-2],20,1,.75)},{p:[5.3,.05,.3],pl:[-10,2],pose:"crouch",mode:Wi,path:[[17.6,.06,-2.2],[12.6,.05,-2],[10.4,.05,-1.4],[7.8,.05,.4],[5.3,.05,.3]],u:[["e",-10.2,.05,2.6,-9.6,4.8,"talk"],["e",-9.6,.05,4.8,-10.2,2.6],["e",-3.6,.05,11.4,-8,11.4,"walk"],["n",-14.6,.05,.4,-12,1],["n",-15.6,.05,2.2,-12,1]],ar:[[[5.1,1.3,.3],[-9.8,1.6,3.2],"look"],[[5.1,1.3,.3],[-4,1.6,11],"look"]],lab:[["\u5B66\u751F\u7262\u95E8\uFF1A\u770B\u5F97\u5230\u95E8\u540E\u6709\u4EBA",-12,5,1,"item"],["\u4E24\u540D\u58EB\u5175\u5B88\u5728\u7262\u95E8\u524D",-9.8,3.4,3.6,"warn"],["\u66F4\u8FDC\u5904\u8FD8\u6709\u4E00\u540D",-3.6,3.2,11.4,"warn"],["\u53F3\u624B\u8FB9\u6B7B\u89D2\uFF1A\u80FD\u8FDC\u7A0B\u89E6\u53D1\u7684\u94DC\u9523",10.6,3.4,-7.3,"item"],["\u4E0A\u65B9\u662F\u4E8C\u697C\u56DE\u5ECA",-2,6.6,-5,"note"],["\u5927\u5385\u4E2D\u90E8\u7684\u4F4E\u7BB1\uFF1A\u8FDB\u95E8\u540E\u505C\u4E0B\u89C2\u5BDF",3.4,2.2,1.6,"note"]],before:{p:[11.2,.05,-2],path:[[17.6,.06,-2.2],[12.6,.05,-2],[11.2,.05,-2]],cover:!1,ar:[[[11,1.4,-2],[-9.8,1.6,3.2],"look"]],lab:[["\u4FEE\u6539\u524D\uFF1A\u8FDB\u95E8\u540E\u524D\u9762\u662F\u4E00\u7247\u7A7A\u5730\uFF0C\u6CA1\u5904\u505C\u4E0B",9.4,2.6,.4,"warn"],["\u8EB2\u5230\u7BB1\u7EC4\u540E\uFF0C\u9AD8\u7BB1\u548C\u67F1\u5B50\u53C8\u628A\u753B\u9762\u5207\u788E",5.4,3.4,-2.4,"warn"],["\u7B2C\u4E09\u540D\u5B88\u536B\u5B58\u5728\u611F\u5F31",-3.6,3.2,11.4,"warn"]]},cam:nn([5.3,.05,.3],[-10,2],22,.98,.4,.3)},{p:[10.3,.05,-5.3],pl:[10.3,-6.6],pose:"stab",mode:Wi,path:[[5.3,.05,.3],[7.8,.05,.6],[9.4,.05,-2.2],[10.6,.05,-4.2],[10.3,.05,-5.3]],u:[["e",10,.05,-5.9,10.6,-7.3,"down"],["e",-9.4,.05,2.8,-8.6,1.2,"burn"],["e",-7.4,.05,3.8,-8.6,1.2,"burn"],["n",-14.6,.05,.4,-12,1],["n",-15.6,.05,2.2,-12,1]],ar:[[[5.4,1.6,.2],[10.6,1.2,-7.1],"fire"],[[-10,.3,2.6],[9.8,.3,-6],"move"],[[5.2,1.6,.4],[-8.6,1.2,1.2],"fire"],[[5.2,1.6,.6],[-8.2,.6,3],"throw"]],fx:[["fire",-8.6,.05,1.2,1.2],["fire",-8.2,.05,3.2,2.2]],lab:[["\u2460 \u8FDC\u7A0B\u6572\u54CD\u94DC\u9523\uFF0C\u5F15\u6765\u4E00\u540D",10.6,3.6,-7.3,"item"],["\u2461 \u4ED6\u8D70\u8FDB\u6B7B\u89D2\uFF0C\u80CC\u540E\u89E3\u51B3",10.3,2.8,-4.4,"note"],["\u2462 \u70B9\u71C3\u7262\u95E8\u524D\u7684\u706B\u76C6",-8.6,3.4,1.2,"item"],["\u2463 \u6295\u63B7\u6CB9\u7F50\u6269\u5927\u71C3\u70E7\uFF0C\u4E24\u4EBA\u90FD\u70E7\u7740",-8,4.6,3.6,"warn"],["\u4E09\u540D\u5B88\u536B\u5904\u7406\u5B8C\uFF0C\u6CA1\u6709\u89E6\u53D1\u8B66\u62A5",-1,2.4,9,"note"]],cam:{t:[1,0,-1.4],r:36,ph:.86,th:1.05}},{p:[-19.3,st,-7],pl:[-24.2,-6.4],pose:"aim",mode:ax,path:[[10.3,.05,-5.3],[9.4,.05,-3.8],[-6,.05,-5],[-10.6,.05,-6],[-12.3,st,-6],[-16,st,-6.4],[-19.3,st,-7]],u:[["e",10,.05,-5.9,10.6,-7.3,"down"],["e",-23,st,-5.4,-24.2,-6.4],["e",-26.2,st+1.2,-15.2,-26.2,-12,"run"]],ar:[[[-19.5,st+1.5,-7],[-24.2,st+1,-6.4],"fire"],[[-26.2,3.2,-17.4],[-25.6,st+.2,-9.2],"move"]],fx:[["puff",-24.2,st+2.4,-6.4,1.1],["shock",-24.2,st+.1,-6.4,3]],lab:[["\u95E8\u7F1D\u91CC\u5148\u770B\u5230\uFF1A\u58EB\u5175\u8BEF\u78B0\u673A\u5668\u3001\u6CC4\u6F0F",-23.6,st+4.4,-5.4,"warn"],["\u9AD8\u67B6\u6321\u4F4F\u4E00\u90E8\u5206\u5BA4\u5185",-22.3,st+5.2,-9.6,"note"],["\u8FDC\u7A0B\u5F15\u7206\u673A\u5668",-24.2,st+3,-7.2,"item"],["\u4E0A\u5C42\u58EB\u5175\u4E0B\u6765\u67E5\u770B\uFF1A\u66B4\u9732\u51FA\u901A\u5F80\u4E8C\u697C\u7684\u8DEF",-26.2,rt+1.2,-15.4,"warn"],["\u4E2D\u592E\u5899\u58A9",-23.7,st+4.6,-12,"note"]],cam:{t:[-22.4,st,-6.7],r:22,ph:.64,th:1.99}},{p:[-14.2,rt,-11],pl:[-17,-11],mode:or,path:[[-19.3,st,-7],[-21.4,st,-7.2],[-25.6,st,-8.6],[-26.2,st,-12.8],[-26.2,st,-13.7],[-26.2,3.05,-17],[-26.2,3.05,-18.2],[-25,3.05,-18.2],[-21.7,rt,-18.2],[-20.2,rt,-18.2],[-18,rt,-17.4],[-14.2,rt,-15.6],[-14,rt,-13.6],[-14.2,rt,-11]],u:[["f",-18.2,rt,-11,-16,-11],["e",-23,st,-5,-24.2,-6.4,"down"]],lab:[["\u6559\u6388\uFF1A\u9694\u7740\u9542\u7A7A\u95E8\u80FD\u4EA4\u8C08\uFF0C\u6682\u65F6\u6551\u4E0D\u51FA\u6765",-17.8,rt+3.8,-11,"item"],["\u63A8\u5F00\u5355\u5411\u95E8\u8FDB\u5165\u4E8C\u697C",-14,rt+3.2,-14,"note"],["\u5806\u7740\u7BB1\u5B50\u548C\u67B6\u5B50\u7684\u4E0A\u5C42\u7A7A\u95F4",-16.4,rt+3.2,-18,"note"],["\u6CBF\u5899\u4E0A\u884C\u3001\u5728\u89D2\u843D\u8F6C\u5411\u7684\u697C\u68AF",-26.2,rt+.4,-16,"note"]],cam:nn([-14.2,rt,-11],[-17,-11],16,.95,-.75)},{p:[-2.6,rt,-6.6],pl:[3.6,-3.7],pose:"aim",mode:or,path:[[-14.2,rt,-11],[-14,rt,-8.4],[-13.6,rt,-6],[-10.6,rt,-6],[-6.6,rt,-6],[-2.6,rt,-6.6]],u:[["e",5.6,rt,-5.6,3.8,-4.4,"walk"],["n",6.8,rt,-11.2,8,-8],["n",9.2,rt,-11.4,8,-8]],ar:[[[-6.6,rt+1.6,-6],[-5.62,rt+2.1,-3.4],"atk"],[[-2.4,rt+1.6,-6.6],[3.6,rt+1.5,-3.7],"fire"],[[11,rt+.2,-5.6],[5.8,rt+.2,-5.6],"move"]],fx:[["flame",3.6,rt+1.5,-3.7,.28]],lab:[["\u62A5\u8B66\u5587\u53ED\uFF1A\u5148\u7834\u574F",-5.62,rt+3.4,-3.4,"item"],["\u9EC4\u8272\u7BB1\u5B50\u540E\u89C2\u5BDF",-.8,rt+2.6,-7.1,"note"],["\u680F\u6746\u8FB9\u7684\u70DB\u53F0\u3001\u5899\u4E0A\u7684\u7BA1\u53E3\uFF1A\u5F15\u5B88\u536B\u5230\u8F6C\u89D2",4.2,rt+3.6,-5.4,"item"],["\u4E8C\u697C\u53E6\u4E00\u5904\u5173\u62BC\u5B66\u751F\u7684\u95E8",8,rt+3.8,-8,"item"],["\u4E00\u4FA7\u4E34\u7A7A\uFF1A\u680F\u6746\u4E0B\u5C31\u662F\u4E00\u697C\u5927\u5385",-3,rt+1.6,-2.4,"note"]],cam:{t:[.5,rt,-5.2],r:26,ph:.85,th:-.52}},{p:[16.4,hn,9.4],pl:[20,9.6],mode:cx,path:[[-2.6,rt,-6.6],[-1.6,rt,-5.1],[10.6,rt,-5.4],[13.6,rt,-5.6],[14,rt,-4],[14,rt,6.6],[14,hn,8.4],[14.4,hn,9.2],[16.4,hn,9.4]],u:[["e",18.6,hn,9.8,16,9.6],["e",20.8,hn,9.2,16,9.6],["e",14.6,hn,8.8,14,2,"run"],["e",23.6,hn,9.8,16,9.6,"walk"]],ar:[[[14.6,hn+.3,8.6],[14,rt+.3,2],"move"]],lab:[["\u5DE6\u8FB9\u6728\u683C\u7A97\uFF0C\u770B\u5F97\u5230\u5929\u4E95",15.9,rt+3.4,-3,"note"],["\u53F3\u8FB9\u5899\u4E0A\u7684\u5C55\u793A",12.2,rt+3.2,2.2,"note"],["\u8D70\u5ECA\u5C3D\u5934\u4E09\u7EA7\u77ED\u53F0\u9636\uFF0C\u518D\u8F6C\u4E0A\u957F\u697C\u68AF",22,hn+3.4,12.4,"note"],["\u597D\u51E0\u540D\u58EB\u5175\uFF0C\u7A7A\u95F4\u88AB\u5899\u548C\u53F0\u9636\u9650\u5236",19.6,hn+3,9.4,"warn"],["\u6709\u4EBA\u8DD1\u53BB\u62C9\u8B66\u62A5\uFF1A\u5587\u53ED\u574F\u4E86\u4F1A\u558A\u51FA\u6765",14,rt+3,3,"warn"]],cam:nn([16.4,hn,9.4],[20,9.6],18,.95,-.75)},{p:[14.2,Si,-5.8],pl:[-8,-1],pose:"crouch",mode:lx,path:[[16.4,hn,9.4],[25.6,hn,9.6],[25.8,hn,12.4],[24.6,hn,12.4],[16.72,_t,12.4],[15.8,_t,12.2],[15.8,_t,9.6],[26.6,_t,9.4],[26.6,_t,7],[26,_t,6],[14.6,_t,6],[14.6,_t,4.6],[15.1,_t,4.1],[15.1,Si,1.4,1],[14.2,Si,-5.8]],u:[["l",-9,_t,-1,-12,-1,"talk"],["s",-15.6,_t,-1,-12,-1]],ar:[[[14.2,Si+1.4,-5.8],[-8,_t+1.6,-1],"look"]],lab:[["\u6807\u70B9 \u2460\uFF1A\u5148\u6807\u8D70\u5ECA\u62D0\u89D2",14.6,_t+3.6,6,"mk"],["\u5230\u62D0\u89D2\u540E\u6807\u70B9 \u2461\uFF1A\u5207\u5230\u9601\u697C\u7AA5\u89C6\u4F4D",14.2,Si+2.4,-5.8,"mk"],["\u539A\u91CD\u7684\u9EC4\u95E8\uFF1A\u6301\u7EED\u63A8\u52A8",12,_t+4,-3.4,"item"],["\u6559\u5BA4\uFF1A\u6210\u6392\u684C\u6905\uFF0C\u5317\u5899\u5916\u662F\u9AD8\u67B6\u548C\u95E8",21,_t+3,16,"note"]],before:{cam:{t:[2,11,2],r:66,ph:.8,th:.8},ar:[[[14.2,Si+1.6,-5.8],[-15.6,_t+1.6,-1],"look"]],lab:[["\u4FEE\u6539\u524D\u7684\u6807\u70B9\uFF1A\u76F4\u63A5\u6307\u5411\u76EE\u6807",-15.6,_t+5.8,-1,"mk"],["\u77E5\u9053\u65B9\u5411\uFF0C\u5374\u53CD\u590D\u78B0\u5230\u9694\u5899\u548C\u7ED5\u8DEF",20,_t+3.6,6,"warn"],["\u9601\u697C\u6500\u722C\uFF1A\u5C4B\u6A90\u6321\u89C6\u7EBF\uFF0C\u4E0A\u884C\u4E0D\u987A",12.6,Si+2.4,-5.8,"warn"]]},cam:{t:[3,_t,-3],r:40,ph:.9,th:2}},{p:[2,_t,1.6],pl:[-4,3.4],pose:"run",mode:go,path:[[14.2,Si,-5.8],[15.1,Si,1],[15.1,_t,4.1,1],[13.4,_t,3.9],[13.4,_t,-1.2],[12.6,_t,-3.4],[9.6,_t,-2.8],[2,_t,1.6]],u:[["l",-10,_t,-.6,2,1.6],["h",-3.6,_t,3.6,2,1.6,"charge"],["h",-4.6,_t,-3.6,2,1.6]],ar:[[[-3.2,_t+1.4,3.4],[1.6,_t+1,1.8],"atk"]],lab:[["\u6301\u91CD\u6B66\u5668\u7684\u654C\u4EBA\uFF1A\u8FA8\u8BA4\u52A8\u4F5C\u3001\u907F\u5F00\u91CD\u51FB\u3001\u518D\u63A5\u8FD1",-3.6,_t+4.2,4.2,"warn"],["\u654C\u65B9\u5934\u76EE\u548C\u624B\u4E0B\u4ECE\u95E8\u91CC\u51FA\u6765",-10,_t+3.6,-.6,"warn"],["\u53F3\u4FA7\u7684\u673A\u68B0\u8BBE\u5907\u548C\u811A\u624B\u67B6",-.5,_t+6.6,-6.7,"note"],["\u6B63\u9762\u4E00\u6392\u6728\u683C\u95E8\u7A97",-12,_t+4.4,4.4,"note"],["\u4E2D\u592E\u7A7A\u5730\uFF1A\u540E\u9000\u548C\u4FA7\u79FB\u7684\u7A7A\u95F4",3.6,_t+2.4,6.4,"note"]],cam:nn([2,_t,1.6],[-4,3.4],24,.95,-.55)},{p:[-13.8,_t,-1],pl:[-17,-1],mode:go,path:[[2,_t,1.6],[-9,_t,-.6],[-12.6,_t,-1],[-13.8,_t,-1]],u:[["s",-17.6,_t,-2.2,-13.6,-1]],lab:[["\u5934\u76EE\u9003\u8D70\uFF0C\u6389\u4E0B\u94A5\u5319\uFF0C\u6253\u5F00\u4E2D\u95F4\u7684\u6728\u95E8",-10.6,_t+3.4,1.4,"note"],["\u5750\u57AB\u3001\u67B6\u5B50\u3001\u7089\u72B6\u5668\u7269",-16.6,_t+3.4,2.6,"note"],["\u627E\u5230\u5B66\u751F\uFF1A\u4E0B\u4E00\u6B65\u51C6\u5907\u70B8\u5F39\u3001\u56DE\u53BB\u6551\u4EBA",-17.6,_t+3.4,-2.2,"item"]],cam:nn([-13.8,_t,-1],[-17,-1],16,.85,.6)},{p:[-22,_t,-15.9],pl:[-26.1,-18.4],pose:"aim",mode:go,path:[[-13.8,_t,-1],[-15.4,_t,-4.6],[-16,_t,-7.2],[-16,_t,-8.8],[-15.6,_t,-10.6],[-16,_t,-12.6],[-17.6,_t,-14.6],[-22,_t,-15.9]],u:[["s",-19.6,_t,-15.6,-19.6,-16.6]],ar:[[[-22.2,_t+1.5,-16],[-26.1,_t+1.2,-18.4],"fire"]],fx:[["shock",-26.1,_t+.1,-18.4,2.6]],lab:[["\u89D2\u843D\u7684\u7EA2\u8272\u673A\u5668\uFF1A\u8FDC\u7A0B\u5F15\u7206\u53D6\u96F6\u4EF6",-26.1,_t+4,-18.4,"item"],["\u5DE5\u4F5C\u53F0\u548C\u67B6\u5B50\u9694\u51FA\u51E0\u6761\u7A84\u901A\u9053",-22,_t+3,-13.4,"note"],["\u5B66\u751F\u5728\u5DE5\u4F5C\u53F0\u505A\u70B8\u5F39\uFF0C\u96F6\u4EF6\u4EA4\u7ED9\u5979",-19.6,_t+3,-16.6,"note"]],cam:nn([-22,_t,-15.9],[-26.1,-18.4],16,.95,-.6)},{p:[-24,_t,-4.6],pl:[-24,2],mode:go,path:[[-22,_t,-15.9],[-21.8,_t,-13.2],[-24,_t,-12.4],[-24,_t,-11],[-24,_t,-6],[-24,_t,-4.6]],u:[["s",-26.2,_t,-5.6,-24,2],["e",-24.6,rt,1.6,-22,3],["e",-22.4,rt,.4,-25,2]],ar:[[[-24,_t+1.6,-4.4],[-24,rt+1.2,1.2],"look"],[[-24,_t+.3,-4],[-23.6,rt+2.1,-2.9],"drop"]],lab:[["\u9760\u5899\u7684\u9AD8\u5904\u5E73\u53F0",-25,_t+3,-8.6,"note"],["\u5B66\u751F\uFF1A\u4ECE\u8FD9\u91CC\u80FD\u76F4\u63A5\u56DE\u4E8C\u697C\uFF0C\u5148\u5904\u7406\u4E0B\u9762\u7684\u4EBA",-26.2,_t+4.4,-5.6,"item"],["\u843D\u811A\u70B9\u548C\u5B88\u536B",-23.6,rt+3.4,0,"warn"]],cam:nn([-24,_t,-4.6],[-24,2],20,.7,-.6)},{p:[4.4,rt,-5.6],pl:[-6,-5.6],mode:or,path:[[-24,_t,-4.6],[-23.6,rt+2.02,-2.9,1],[-23.2,rt,-1.4,1],[-23.2,rt,2],[-22.6,rt,4.6],[-20.6,rt,6],[-13.4,rt,6],[-10.4,rt,6],[-9.4,rt,4],[-9.4,rt,-5.2],[4.4,rt,-5.6]],u:[["s",8,rt,-7.2,8,-9],["e",-3.4,rt,-5.6,4,-5.6,"run"],["e",-7.6,rt,-5.4,4,-5.6,"run"],["e",-9.4,rt,-1.4,-9.4,-5,"run"],["l",.8,.05,11.4,0,6,"walk"],["e",-1.6,.05,12.6,0,6,"run"],["e",3.4,.05,12.4,1,6,"run"],["e",-24.6,rt,1.6,-22,3,"down"],["e",-22.4,rt,.4,-25,2,"down"]],ar:[[[4.2,rt+1.6,-5.4],[.4,1.6,12],"look"]],lab:[["\u540C\u4F34\u5728\u95E8\u8FB9\u5E03\u7F6E\u70B8\u5F39",8,rt+3.6,-7.4,"item"],["\u654C\u4EBA\u6CBF\u56DE\u5ECA\u8FC7\u6765",-6,rt+3,-5.4,"warn"],["\u900F\u8FC7\u680F\u6746\uFF1A\u4E00\u697C\u6B63\u95E8\u5DF2\u88AB\u6253\u5F00",1,4.6,12.8,"warn"],["\u9EC4\u8272\u95E8\u6846\uFF1A\u56DE\u5230\u4E8C\u697C\u56DE\u5ECA",-12,rt+3.4,6,"note"]],cam:nn([4.4,rt,-5.6],[-6,-5.6],22,.92,-.75)},{p:[-14.6,rt,-10.6],pl:[-17,-11],pose:"stab",mode:or,path:[[4.4,rt,-5.6],[-9.4,rt,-5.4],[-11,rt,-6],[-13.4,rt,-6],[-14,rt,-8.6],[-14.6,rt,-10.6]],u:[["f",-17.6,rt,-10.6,-14,-11,"walk"],["s",-13,rt,-12.6,-14.6,-11],["e",-13.2,rt,-8.6,-12,-6,"down"],["n",6,rt,-5.4,0,-6,"run"],["n",7.4,rt,-6.2,0,-6,"run"]],lab:[["\u53EF\u9009\uFF1A\u56DE\u5934\u8425\u6551\u6559\u6388",-17.6,rt+4,-11,"item"],["\u8BB0\u4F4F\u7684\u5C01\u95ED\u623F\u95F4\uFF0C\u73B0\u5728\u662F\u76EE\u7684\u5730",-18.2,rt+3,-13.2,"note"],["\u6728\u67F1\u3001\u7BB1\u4F53\u3001\u623F\u95E8\u548C\u8F6C\u89D2\u9644\u8FD1\u8FDE\u7EED\u4EA4\u6218",-11,rt+3,-8.4,"warn"]],cam:nn([-14.6,rt,-10.6],[-17,-11],16,.95,.7)},{p:[-19.8,st,12],pl:[-17.3,12],mode:zf,path:[[-14.6,rt,-10.6],[-14,rt,-8.6],[-14,rt,2.6],[-14,rt,4.6],[-15,rt,6],[-20.4,rt,6.2],[-20.4,rt,9.4],[-21.4,rt,9.6],[-25,3.05,9.6],[-26.2,3.05,10.4],[-26.2,3.05,12],[-25,3.05,12],[-21.4,st,12],[-19.8,st,12]],u:[["s",-21,st,13,-19.6,12],["f",-15.5,st,6.4,-12,6.4,"walk"]],lab:[["\u9542\u7A7A\u680F\u6746\u7684\u6298\u8FD4\u697C\u68AF",-25,st+4.8,13,"note"],["\u843D\u5730\u6B63\u5BF9\u4E00\u6392\u9AD8\u4E66\u67B6",-17.3,st+6.2,13.4,"item"],["\u6559\u6388\u5148\u53BB\u540E\u95E8\u7B49",-15.5,st+3,6.4,"note"]],cam:nn([-19.8,st,12],[-17.3,12],18,.92,-.8)},{p:[2,.05,6],pl:[0,12],pose:"run",mode:Wi,path:[[-19.8,st,12],[-18.6,st,11.2],[-18.6,st,9.2],[-15.5,st,9],[-15.5,st,7],[-13,st,6],[-12.3,st,6],[-10.6,.05,6],[-6,.05,6.6],[2,.05,6]],u:[["s",-10.8,.05,2.2,-12,1.4,"push"],["l",.6,.05,9.8,2,6,"run"],["e",-3,.05,10.6,2,6,"run"],["e",3,.05,11.4,2,6,"run"],["e",-.8,.05,12.6,2,6,"walk"],["n",-14.6,.05,.4,-12,1],["n",-15.6,.05,2.2,-12,1]],lab:[["\u540C\u6837\u7684\u6728\u7BB1\uFF1A\u73B0\u5728\u662F\u591A\u4EBA\u6218\u6597\u91CC\u7684\u969C\u788D",5.4,3.4,-1,"note"],["\u5B66\u751F\u5728\u7262\u95E8\u524D\u8BD5\u7740\u6551\u4EBA",-10.8,3.4,2.2,"item"],["\u5377\u571F\u91CD\u6765\u7684\u654C\u65B9\u5934\u76EE",.6,4,9.8,"warn"],["\u5899\u8FB9\u8D70\u5ECA\uFF08\u76C6\u683D\u548C\u6905\u5B50\uFF09",-17,st+2.6,6,"note"]],cam:nn([2,.05,6],[0,12],24,.95,-.9)},{p:[20.7,At,-11],pl:[22,-14],pose:"run",mode:Wi,path:[[2,.05,6],[7.8,.05,3.6],[9.6,.05,.6],[11.2,.05,-1.6],[12.6,.05,-2],[17.6,.06,-2.4],[20.2,.06,-6.4],[20.7,.02,-8],[20.7,At,-9.95],[20.7,At,-11]],u:[["s",19.4,At,-12.8,18,-16,"run"],["e",15.4,.05,-2,20,-6,"run"],["l",9.6,.05,.4,12,-2,"run"],["e",7.6,.05,3.4,12,-2,"run"]],lab:[["\u95E8\u592A\u575A\u56FA\uFF0C\u70B8\u5F39\u4E0D\u591F\uFF1A\u5148\u64A4",-11,3.6,1,"warn"],["\u7ED5\u8FC7\u6728\u7BB1\uFF0C\u7A7F\u56DE\u6A90\u5ECA\u3001\u5929\u4E95\u3001\u5668\u6750\u5BA4",17.6,3.4,-2.4,"note"],["\u8FFD\u5175\u8FD8\u5728\u9760\u8FD1",12,3.4,-1,"warn"],["\u8FC7\u573A\uFF1A\u7834\u7A97\u79BB\u5F00\u5B66\u9662",17,At+4.6,-19.4,"note"]],cam:{t:[14,0,-5],r:40,ph:.8,th:.62}}];var Pc=(i,t={})=>new Gn({color:i,roughness:.75,metalness:0,...t}),hx={p:{H:1.8,body:"#C47A22",head:"#E3BC93",limb:"#A8661C",ring:"#E7A537"},s:{H:1.72,body:"#3E7F86",head:"#E3BC93",limb:"#2F656B",ring:"#4FA3A8"},f:{H:1.76,body:"#6C8A9A",head:"#E3BC93",limb:"#556F7C",ring:"#4FA3A8"},n:{H:1.72,body:"#9A9184",head:"#D9C3A8",limb:"#807869",ring:"#B9B2A5"},e:{H:1.82,body:"#3A403E",head:"#56605C",limb:"#2C3230",ring:"#B5462F"},h:{H:2.25,body:"#2F3533",head:"#46504D",limb:"#232A28",club:"#6E5A45",ring:"#B5462F"},l:{H:1.95,body:"#5B2E2A",head:"#E3BC93",limb:"#3F211E",ring:"#B5462F"}};function Dc(i){let t=hx[i],e=t.H,n=new _e,s=new _e;n.add(s),s.position.y=e*.5;let r=Pc(t.body),o=Pc(t.head),a=Pc(t.limb),c=new he(new Nr(e*.13,e*.26,4,10),r);c.position.y=e*.2,s.add(c);let l=new he(new Xr(e*.1,14,10),o);l.position.y=e*.44,s.add(l);let h=(p,b,M)=>{let y=new _e,S=new he(new $n(p,b,p),M);return S.position.y=-b/2,y.add(S),y},u=h(e*.07,e*.34,a),f=h(e*.07,e*.34,a);u.position.set(-e*.17,e*.33,0),f.position.set(e*.17,e*.33,0);let d=h(e*.085,e*.46,a),g=h(e*.085,e*.46,a);if(d.position.set(-e*.07,0,0),g.position.set(e*.07,0,0),s.add(u,f,d,g),t.club){let p=new he(new Ui(e*.03,e*.05,e*.55,8),Pc(t.club));p.position.set(0,-e*.34,e*.12),p.rotation.x=Math.PI/2.4,f.add(p)}let v=new he(new Gs(e*.32,e*.42,28),new Xe({color:t.ring,transparent:!0,opacity:.85,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.y=.04,v.renderOrder=2,n.add(v),n.traverse(p=>{p.isMesh&&p!==v&&(p.castShadow=!0,p.receiveShadow=!1)});let m={root:n,hips:s,torso:c,armL:u,armR:f,legL:d,legR:g,H:e,kind:i,ring:v,pose(p="idle",b=0){s.rotation.set(0,0,0),s.position.set(0,e*.5,0);for(let S of[u,f,d,g])S.rotation.set(0,0,0);let M=Math.sin(b*9),y=!1;switch(p){case"walk":{let S=Math.sin(b*5.5);d.rotation.x=.38*S,g.rotation.x=-.38*S,u.rotation.x=-.3*S,f.rotation.x=y?-.15:.3*S;break}case"run":s.rotation.x=.22,d.rotation.x=.7*M,g.rotation.x=-.7*M,u.rotation.x=-.6*M,f.rotation.x=y?-.3:.6*M;break;case"stumble":s.rotation.x=.5,d.rotation.x=.5*M,g.rotation.x=-.5*M,u.rotation.z=-1.1,f.rotation.z=1.1,s.position.y=e*.46;break;case"throw":f.rotation.x=-2.1,u.rotation.x=.5,d.rotation.x=-.35,g.rotation.x=.3;break;case"cast":u.rotation.set(-2.7,0,-.35),f.rotation.set(-2.7,0,.35);break;case"slam":s.rotation.x=-.15,u.rotation.x=-3,f.rotation.x=-3;break;case"charge":s.rotation.x=.55,f.rotation.x=-1.35,u.rotation.x=-.6,d.rotation.x=.8*M,g.rotation.x=-.8*M;break;case"fly":s.rotation.x=.35,d.rotation.x=.7,g.rotation.x=.5,u.rotation.z=-.9,f.rotation.z=.9;break;case"fall":s.rotation.x=-.4,u.rotation.z=-2.2,f.rotation.z=2.2,d.rotation.x=-.6,g.rotation.x=.4;break;case"down":s.rotation.x=-1.45,s.position.y=e*.14,u.rotation.z=-.5,f.rotation.z=.5,d.rotation.x=.1;break;case"grab":s.rotation.x=.3,u.rotation.x=-1.5,y?f.rotation.x=-1.5:f.rotation.set(.45,0,.5);break;case"held":s.rotation.x=-.3,d.rotation.x=.5,g.rotation.x=.2,u.rotation.z=-1.2,f.rotation.z=1.2,s.position.y=e*.62;break;case"burn":u.rotation.set(-.6+.4*M,0,-1.1),f.rotation.set(-.6-.4*M,0,1.1),s.rotation.z=.1*M;break;case"dodge":s.rotation.z=.5,s.position.y=e*.4,d.rotation.x=-.9,g.rotation.x=.6,u.rotation.z=-1;break;case"push":s.rotation.x=-.35,d.rotation.x=-.5,g.rotation.x=.4,u.rotation.x=-1.4,f.rotation.x=-1.4;break;case"crouch":s.position.y=e*.36,s.rotation.x=.35,d.rotation.x=-1.1,g.rotation.x=-.5,u.rotation.x=-.5,f.rotation.x=-.7;break;case"stab":s.rotation.x=.25,f.rotation.x=-1.6,u.rotation.x=-.9,d.rotation.x=-.5,g.rotation.x=.35;break;case"talk":f.rotation.set(-.7+.15*Math.sin(b*3),0,.2),u.rotation.z=-.1;break;case"aim":f.rotation.x=-1.5,u.rotation.x=-.3;break;case"sit":s.position.y=e*.2,d.rotation.x=-1.5,g.rotation.x=-1.5,u.rotation.x=-.4,f.rotation.x=-.4;break;default:u.rotation.z=-.08,f.rotation.z=.08}}};return m.pose("idle"),m}function _s(i=1.5,t=1,e={}){let n=new _e,s=new Xe({color:"#EC6E2A",transparent:!0,opacity:.9}),r=new Xe({color:"#F6B63E",transparent:!0,opacity:.95}),o=Math.max(3,Math.round(i*3.2));for(let a=0;a<o;a++){let c=a*2.39996+t,l=i*Math.sqrt((a+.5)/o)*.8,h=.9+(a*7+t*3)%5*.22,u=new he(new ks(.28+.1*(a%2),h,6),a%3?s:r);u.position.set(Math.cos(c)*l,h/2,Math.sin(c)*l),u.userData.h=h,u.userData.k=a*1.7+t,n.add(u)}if(e.spot!==!1){let a=new he(new Or(i*1.15,28),new Xe({color:"#EC6E2A",transparent:!0,opacity:.28,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.05,n.add(a)}return n.userData.tick=a=>{for(let c of n.children)c.userData.h&&(c.scale.y=.8+.35*Math.abs(Math.sin(a*6+c.userData.k)))},n}function Lc(i=1){let t=new _e,e=new Xe({color:"#F4F1EA",transparent:!0,opacity:.55,depthWrite:!1});for(let n=0;n<6;n++){let s=new he(new Qn(i*(.35+n%3*.12),1),e);s.position.set(Math.cos(n*2.2)*i*.4,i*(.2+n*.28),Math.sin(n*2.2)*i*.4),s.userData.k=n,t.add(s)}return t.userData.tick=n=>{for(let s of t.children)s.position.y=i*(.2+s.userData.k*.28)+.15*Math.sin(n*2+s.userData.k)},t}function Vf(i=1){let t=new Xe({color:"#FFD27A",transparent:!0,opacity:.9,depthWrite:!1}),e=new he(new Qn(i,1),t);return e.userData.at=n=>{e.scale.setScalar(.3+1.2*n),t.opacity=.9*(1-n)},e}function ar(i=4){let t=new Xe({color:"#F3E3C2",transparent:!0,opacity:.8,depthWrite:!1,side:_n}),e=new he(new Gs(.86,1,48),t);return e.rotation.x=-Math.PI/2,e.userData.at=n=>{e.scale.setScalar(.4+i*n),t.opacity=.8*(1-n)},e}function Gf(){let i=new _e,t=new Xe({color:"#EC6E2A",transparent:!0,opacity:.85}),e=new Xe({color:"#FFD27A"}),n=new he(new Qn(.42,1),e);i.add(n);let s=[0,1,2,3].map(r=>{let o=new he(new Qn(.36-r*.07,1),t);return i.add(o),o});return i.userData.tail=s,i.userData.head=n,i}function cr(i,t,e,n={}){var f,d;let s=i.map(g=>new z(...g)),r=s.length>2?new is(s,!1,"centripetal",.2):new Hs(s[0],s[1]||s[0].clone().add(new z(0,.01,0))),o=r.getLength(),a=Math.max(8,Math.round(o*3)),c=[];if(n.dash){let[g,v]=n.dash,m=Math.max(1,Math.floor(o/(g+v)));for(let p=0;p<m;p++){let b=p*(g+v)/o,M=Math.min(1,(p*(g+v)+g)/o),y=[];for(let S=0;S<=4;S++)y.push(r.getPointAt(b+(M-b)*S/4));c.push(new Ws(new is(y),4,t,6,!1))}}else c.push(new Ws(r,a,t,7,!1));let l=new _e,h=new Xe({color:e,transparent:!!n.opacity,opacity:(f=n.opacity)!=null?f:1}),u=new Xe({color:e,transparent:!0,opacity:(d=n.xray)!=null?d:.22,depthTest:!1,depthWrite:!1});for(let g of c){let v=new he(g,h),m=new he(g,u);m.renderOrder=5,l.add(v,m)}if(n.every){let g=new ks(t*2.6,t*5,10);g.rotateX(Math.PI/2);let v=Math.max(1,Math.floor(o/n.every));for(let m=1;m<=v;m++){let p=Math.min(.999,(m-(n.last?0:.5))/v),b=r.getPointAt(p),M=r.getTangentAt(p);for(let y of[h,u]){let S=new he(g,y);S.position.copy(b),S.lookAt(b.clone().add(M)),y===u&&(S.renderOrder=5),l.add(S)}}}return l.userData.length=o,l.userData.curve=r,l}function Fc(i,t,e,n={}){var c,l;let s=new z(...i),r=new z(...t),o=s.clone().lerp(r,.5);o.y+=s.distanceTo(r)*((c=n.arc)!=null?c:.12);let a=[];for(let h=0;h<=10;h++){let u=h/10,f=s.clone().multiplyScalar((1-u)*(1-u)).add(o.clone().multiplyScalar(2*u*(1-u))).add(r.clone().multiplyScalar(u*u));a.push([f.x,f.y,f.z])}return cr(a,(l=n.r)!=null?l:.12,e,{dash:n.dash,every:999,last:!0,xray:.3})}function Uc(i){let t=i.parts,e=(r,o)=>{t[r]&&(t[r].visible=o)};function n(r,o){e(r,!o),e(r==="horn"?"hornX":r+"O",o)}function s(r,o={}){for(let[a,c]of Object.entries(Hf))n(a,r>=0&&r>=c);e("cover2",o.cover!==!1),i.shadowDirty&&i.shadowDirty()}return s(-1),{set:n,at:s}}function Nc(i,t){let e=document.createElement("div");e.className="bs-lay",t.appendChild(e);let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("aria-hidden","true"),n.style.cssText="width:100%;height:100%;overflow:visible;pointer-events:none;will-change:auto",e.appendChild(n);let s=[],r=new z,o=[];for(let m=8;m<=48;m+=8)o.push([0,-m],[0,m],[m,0],[-m,0]);let a="",c=".sbx-nda,.sbx-tb .grp,.sbx-tour,.sbx-hint,.sbx-cap,.sbx-x,.sbx-pop,.stg-cap,.stg-tl,.stg-next",l=[],h=-1e9,u=()=>{let m=t.getBoundingClientRect();l=[...t.querySelectorAll(c)].filter(p=>p.offsetWidth&&!p.hidden&&getComputedStyle(p).visibility!=="hidden"&&+getComputedStyle(p).opacity>.1).map(p=>{let b=p.getBoundingClientRect();return[b.left-m.left-3,b.top-m.top-3,b.right-m.left+3,b.bottom-m.top+3]})};function f(m,p,b,M){let y=document.createElement(M?"button":"span");M&&(y.type="button"),y.className=m,y.innerHTML=p,y.style.display="none",e.appendChild(y);let S={e:y,p:typeof b=="function"?null:new z(...b),fn:typeof b=="function"?b:null,on:!1,shown:!1,lab:/\bbs-lab\b/.test(m),w:0,h:0};return s.push(S),S}function d(m){let p=s.indexOf(m);p>=0&&s.splice(p,1),m.e.remove()}let g=m=>{m.shown&&(m.e.style.display="none",m.shown=!1)},v=(m,p,b)=>{m.e.style.transform=`translate(${p.toFixed(1)}px,${b.toFixed(1)}px)`};return i.onRender(m=>{let p=performance.now();p-h>400&&(u(),h=p);let b=t.clientWidth,M=t.clientHeight,y=l.slice(),S=[],T=[];for(let x of s){if(!x.on){g(x);continue}if(r.copy(x.fn?x.fn():x.p).project(m),r.z>1||r.z<-1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2){g(x);continue}x.shown||(x.e.style.display="",x.shown=!0);let E=(r.x+1)/2*b,P=(1-r.y)/2*M;(x.lab?S:T).push([x,E,P])}let I=(x,E,P)=>{let L=x.bw||(x.bw=x.e.offsetWidth);return L>40?[E-16,P-16,E-16+L,P+16]:[E-15,P-15,E+15,P+15]},F=x=>!y.some(E=>x[0]<E[2]&&x[2]>E[0]&&x[1]<E[3]&&x[3]>E[1]);T.sort((x,E)=>E[0].e.classList.contains("on")-x[0].e.classList.contains("on"));let _="";for(let[x,E,P]of T){let L=E,R=P,C=I(x,E,P);if(!F(C))for(let[O,W]of o){let D=I(x,E+O,P+W);if(D[0]>=0&&D[2]<=b&&D[1]>=0&&D[3]<=M&&F(D)){L=E+O,R=P+W,C=D;break}}v(x,L,R),y.push(C),Math.hypot(L-E,R-P)>13&&(_+=`<line x1="${E.toFixed(1)}" y1="${P.toFixed(1)}" x2="${L.toFixed(1)}" y2="${R.toFixed(1)}"/><circle cx="${E.toFixed(1)}" cy="${P.toFixed(1)}" r="3"/>`)}_!==a&&(a=_,n.innerHTML=_?`<g stroke="#1F2725" stroke-opacity=".75" stroke-width="1.5" fill="#D2872C">${_}</g>`:""),S.sort((x,E)=>E[2]-x[2]);for(let[x,E,P]of S){x.w||(x.w=x.e.offsetWidth,x.h=x.e.offsetHeight);let L=P;for(let R=0;R<10;R++){let C=E-x.w/2,O=L-11-x.h,W=E+x.w/2,D=L-11,k=y.find(G=>C<G[2]&&W>G[0]&&O<G[3]&&D>G[1]);if(!k||k[1]+11-3-11-x.h<0)break;L=k[1]+11-3}y.push([E-x.w/2,L-11-x.h,E+x.w/2,L-11]),v(x,E,L)}}),{lay:e,add:f,remove:d,marks:s}}var qi={route:"#D2872C",look:"#4F7A96",fire:"#EC6E2A",throw:"#8B6B4A",atk:"#D2452F",move:"#B5462F",drop:"#D2872C"},gh={look:[.55,.4],move:[.9,.55],drop:[.6,.45]},ux=i=>String(i+1).padStart(2,"0"),xh=i=>i==="item"?"<i>\u25C6</i>":i==="mk"||i==="mkx"?"<i>\u25C9</i>":"";function fx(i){let t=[],e=null;for(let n=1;n<i.length;n++){let s=i[n][3]===1;(!e||e.air!==s)&&(e={air:s,pts:[i[n-1].slice(0,3)]},t.push(e)),e.pts.push(i[n].slice(0,3))}return t}function Oc(i,t,e,n={}){var r;let s=new _e;for(let o of fx(i))o.pts.length<2||o.pts.reduce((c,l,h)=>h?c+Math.hypot(l[0]-o.pts[h-1][0],l[1]-o.pts[h-1][1],l[2]-o.pts[h-1][2]):0,0)<.05||s.add(o.air?cr(o.pts,e*.8,t,{dash:[.7,.55],xray:n.xray,opacity:n.opacity}):cr(o.pts,e,t,{every:(r=n.every)!=null?r:7,xray:n.xray,opacity:n.opacity}));return s}var Wf=i=>i.traverse(t=>{t.geometry&&t.geometry.dispose()});function Xf(i,t,e={}){var W;let n=i.world,s=new _e;s.name="show",i.scene.add(s);let r={route:new _e,units:new _e};s.add(r.route,r.units);let o=Nc(i,t),a=o.lay,c=Uc(i),l=(W=e.scale)!=null?W:1.2,h="",u=D=>h==="before"&&ni[D].before?{...ni[D],...ni[D].before}:ni[D],f=-1,d=-1,g={route:!0,marks:!0,units:!0,labels:!0},v=Xi.map(D=>{let k=[];for(let J of D.b)for(let Y of ni[J].path||[]){let et=k[k.length-1];(!et||Math.hypot(et[0]-Y[0],et[1]-Y[1],et[2]-Y[2])>.01)&&k.push(Y)}let G=Oc(k,qi.route,.24,{every:8});return r.route.add(G),G}),m=(D,k)=>D.traverse(G=>{if(G.material){let J=G.material;J.depthTest?(J.transparent=k<1,J.opacity=k):J.opacity=.22*k,J.needsUpdate=!0}}),p=(D,k,G,J)=>o.add(D,k,G,J),b=Xi.map((D,k)=>{let G=p("bs-phm",`<b>${k+1}</b><span>${(e.phaseNames||[])[k]||""}</span>`,[D.at[0],D.at[1]+4,D.at[2]],1);return G.e.dataset.k=k,G.e.addEventListener("click",J=>{J.stopPropagation(),e.onPhase&&e.onPhase(k)}),G}),M=ni.map((D,k)=>{let G=p("bs-pin",`<span>${ux(k)}</span>`,[D.p[0],D.p[1]+4.4,D.p[2]],1);return G.e.dataset.i=k,G.e.title=(e.names||[])[k]||"",G.e.addEventListener("click",J=>{J.stopPropagation(),e.onPick&&e.onPick(k)}),G}),y=[],S=()=>{b.forEach((D,k)=>{D.on=g.marks&&f<0,D.e.classList.toggle("on",k===f)}),M.forEach((D,k)=>{let G=f>=0&&Xi[f].b.includes(k);D.on=g.marks&&G,D.e.classList.toggle("on",k===d),D.e.setAttribute("aria-pressed",k===d)});for(let D of y)D.on=g.labels;i.invalidate()},T=(D,k)=>c.at(D,k),I=[],F=(D,k)=>Math.atan2(k[0]-D[0],k[2]-D[2]);function _(){for(let D of[...r.units.children])r.units.remove(D),Wf(D);for(let D of y)o.remove(D);y=[],I=[],i.ambient=!1}function x(D,k){let[G,J,Y,et,xt,lt,Q]=D,H=Dc(G);return H.root.position.set(J,Y,et),H.root.rotation.y=F([J,Y,et],[xt!=null?xt:J,Y,lt!=null?lt:et+1]),H.root.scale.setScalar(l),H.pose(Q||"idle"),["walk","run","charge","burn","talk"].includes(Q)&&k.push(it=>H.pose(Q,it)),r.units.add(H.root),H}function E(D){if(_(),D<0)return;let k=u(D),G=[];k.path&&k.path.length>1&&r.units.add(Oc(k.path,qi.route,.3,{every:5,xray:.35}));for(let[J,Y,et]of k.ar||[])r.units.add(Fc(J,Y,qi[et]||qi.atk,{dash:gh[et]||null,r:et==="look"?.1:.14,arc:et==="look"?.02:et==="drop"?.25:.12}));x(["p",...k.p,...k.pl||[k.p[0],k.p[2]+1],k.pose],G);for(let J of k.u||[])x(J,G);for(let J of k.fx||[]){let[Y,et,xt,lt,Q]=J,H=null;if(Y==="fire")H=_s(Q,et+lt);else if(Y==="flame")H=_s(Q||.3,5,{spot:!1}),H.scale.setScalar(.55);else if(Y==="puff")H=Lc(Q);else if(Y==="shock"){H=ar(Q);let it=H.userData.at;G.push(bt=>it(bt*.55%1))}H&&(H.position.set(et,xt,lt),r.units.add(H),H.userData.tick&&G.push(H.userData.tick))}for(let[J,Y,et,xt,lt]of k.lab||[])y.push(p("bs-lab k-"+(lt||"note"),xh(lt)+J,[Y,et,xt]));I=G,i.ambient=G.length>0}i.onFrame((D,k)=>{for(let G of I)G(k)});let P=D=>{let k=t.clientWidth/Math.max(1,t.clientHeight),G=k<1.25?Math.pow(1.25/k,.75):1;return{...D,r:D.r*G}};function L(D,k){i.setView(P(D),k),i.animUntil=performance.now()+1600}function R(D,k={}){if(f=D,d=-1,h="",E(-1),v.forEach((G,J)=>{G.visible=g.route&&(D<0||J===D),m(G,1)}),D<0)i.setMode("ov"),T(-1),k.fly!==!1&&L(sr.ov,k.instant);else{let G=Xi[D];i.setMode(G.mode),T(G.b[0]),k.fly!==!1&&L(G.cam,k.instant)}S()}function C(D,k={}){if(D<0){R(f,{fly:!1});return}let G=Xi.findIndex(et=>et.b.includes(D));f=G,d=D,h=k.v||"";let J=u(D),Y=Xi[G];i.setMode(J.mode||Y.mode),T(D,{cover:J.cover}),v.forEach((et,xt)=>{et.visible=g.route&&xt===G,m(et,.35)}),E(D),r.units.visible=g.units,k.fly!==!1&&L(J.cam||Y.cam,k.instant),S()}function O(D,k){g[D]=k,D==="route"&&v.forEach((G,J)=>{G.visible=k&&(f<0||J===f)}),D==="units"&&(r.units.visible=k),S(),i.invalidate()}return R(-1,{fly:!1}),{setPhase:R,setBeat:C,setLayer:O,overview:D=>R(-1,D||{}),partsAt:T,get phase(){return f},get beat(){return d},get variant(){return h},hasBefore:D=>!!(ni[D]&&ni[D].before),phases:Xi.length,beats:ni.length,dispose(){_(),a.remove(),i.scene.remove(s),Wf(s)}}}var yt=.05,xo=st+.02,Qf={kind:"plan",floor:"F1",cut:3},_o={t:[-1.5,0,1.6],r:32,ph:.92,th:1.32},qf={t:[3,0,-2.6],r:30,ph:.92,th:-.35},Yf={t:[9.8,0,-5.2],r:17,ph:.9,th:-.6},Zf={t:[-3,0,1.8],r:30,ph:.92,th:1.3},Jf={t:[-2.4,0,9],r:30,ph:.92,th:-2.3},$f={t:[-6,0,3],r:26,ph:.92,th:1.1},dx={t:[10,0,-.6],r:30,ph:.92,th:-1.15};function yn(){let i=[],t=0,e=0,n=0,s=0,r={at(o,a,c,l,h="idle",u){return t=o,e=a,n=c,s=l,i.push([t,e,n,s,h,u]),r},to(o,a="idle",c){return t=Math.max(t,o),i.push([t,e,n,s,a,c]),r},go(o,a=5,c="run",l){for(let h of o){let u=Math.hypot(h[0]-e,h[1]-n,h[2]-s);t=+(t+u/a).toFixed(3),[e,n,s]=h,i.push([t,e,n,s,c,l])}return r},get t(){return t},keys:i};return r}var jf=()=>({a:{k:"n",keys:yn().at(0,-14.6,yt,.4,"idle",{face:[-12,1]}).keys},b:{k:"n",keys:yn().at(0,-15.6,yt,2.2,"idle",{face:[-12,1]}).keys}}),px=(()=>{let i=[10.6,-7.3],t=[-8.6,1.2],e=[-8.2,3],n=yn().at(0,-10.2,yt,2.6,"talk",{face:[-9.6,4.8]}).to(5.5,"talk").to(6.2,"idle",{face:i}).go([[-8.2,yt,3],[-6,yt,2.6],[-3,yt,-1.6],[-1,yt,-2.4],[.2,yt,-3.9],[8.4,yt,-4.1],[9.8,yt,-4.6],[10.2,yt,-6]],4.1,"walk"),s=n.t;n.to(s+.1,"idle",{face:i}).to(s+1.4,"idle").to(s+1.7,"down");let r=yn().at(0,14.4,yt,-2,"walk").go([[12.4,yt,-2],[10.4,yt,-1.4],[7.8,yt,.4],[5.3,yt,.3]],2.6,"walk").to(4,"crouch",{face:[-10,2.6]}).to(4.4,"crouch").to(4.7,"aim",{face:i}).to(5.5,"aim").to(5.9,"crouch",{face:[-6,-3]}).to(s-3.6,"crouch").go([[7.8,yt,.6],[9.4,yt,-2.2],[10.6,yt,-4.2],[10.3,yt,-5]],2.6,"crouch").to(s+.9,"stab",{face:[10.2,-6.4]}).to(s+1.5,"stab").to(s+1.9,"crouch").go([[10.6,yt,-4.2],[9.4,yt,-2.2],[7.8,yt,.6],[5.3,yt,.3]],3.4,"crouch"),o=r.t+.3;r.to(o,"aim",{face:t}).to(o+.7,"aim").to(o+1.1,"crouch");let a=yn().at(0,-3.6,yt,11.4,"walk",{face:[-8,11.4]}).go([[-6.4,yt,11.6]],1.4,"walk").to(6.2,"idle",{face:[6,-5]}).to(o+1.3,"idle").to(o+1.6,"idle",{face:t}).go([[-5.6,yt,6],[-7.2,yt,3.8]],4,"run"),c=a.t+.3;a.to(c,"idle",{face:t}).to(c+.2,"burn").to(c+2.8,"burn").to(c+3.1,"down"),r.to(c-.6,"crouch").to(c-.5,"throw",{face:e}).to(c+.1,"throw").to(c+.5,"crouch");let l=yn().at(0,-9.6,yt,4.8,"idle",{face:[-10.2,2.6]}).to(5.5,"idle").to(6,"idle",{face:[6,-5]}).to(8.4,"idle").go([[-9.4,yt,2.8]],1.6,"walk").to(9.8,"idle",{face:[-6.8,3.6]}).to(o+1.1,"idle").to(o+1.4,"idle",{face:t}).to(c,"idle").to(c+.2,"burn").to(c+3.1,"burn").to(c+3.4,"down"),h=+(c+5.4).toFixed(1);for(let u of[r,n,l,a])u.to(h,u.keys[u.keys.length-1][4]);return{dur:h,init:9,mode:Qf,act:{p:{k:"p",keys:r.keys},e1:{k:"e",keys:n.keys},e2:{k:"e",keys:l.keys},e3:{k:"e",keys:a.keys},...jf()},fx:[[5.3,5.9,"spark",10.6,1.2,-7.1,1],[5.3,8.8,"warn",10.6,.08,-7.1,1.8],[o+.7,h,"fire",t[0],.95,t[1],.45],[c+.1,c+.8,"shock",e[0],.1,e[1],3],[c+.1,h,"fire",e[0],yt,e[1]+.2,2.2]],proj:[[4.8,5.3,["p",1.6],[10.6,1.2,-7.1],"fire",.25],[o+.1,o+.7,["p",1.5],[t[0],1.1,t[1]],"fire",.1],[c-.5,c+.1,["p",1.8],[e[0],.4,e[1]],"throw",.6]],arr:[[1.2,4.4,[5.1,1.3,.3],[-9.6,1.6,2.8],"look"],[1.2,4.4,[5.1,1.3,.3],[-4,1.6,11.2],"look"],[6.2,s-1,[-8.2,.3,3],[9.6,.3,-4.4],"move"],[o+1.6,c-.4,[-6.4,.3,11.2],[-7.2,.3,4],"move"]],lab:[[0,4.4,"\u5B66\u751F\u7262\u95E8\uFF1A\u770B\u5F97\u5230\u95E8\u540E\u6709\u4EBA",-12,4.6,1,"item"],[0,4.4,"\u4E24\u540D\u5B88\u536B\u5B88\u5728\u7262\u95E8\u524D",-9.8,3.6,3.6,"warn"],[0,4.4,"\u66F4\u8FDC\u5904\u8FD8\u6709\u4E00\u540D","e3",3.2,0,"warn"],[0,4.4,"\u4E2D\u90E8\u7684\u4F4E\u7BB1\u540E\uFF1A\u505C\u4E0B\u89C2\u5BDF",4.2,2.4,1.6,"note"],[4.4,s-1.4,"\u2460 \u8FDC\u7A0B\u6572\u54CD\u53F3\u624B\u8FB9\u6B7B\u89D2\u91CC\u7684\u94DC\u9523",10.6,3.8,-7.3,"item"],[6.2,s-1.4,"\u4E00\u540D\u5B88\u536B\u79BB\u5F00\u53BB\u67E5\u770B","e1",3.2,0,"warn"],[s-1.4,s+1.9,"\u2461 \u4ED6\u80CC\u5BF9\u73A9\u5BB6\uFF1A\u80CC\u540E\u89E3\u51B3",10.2,3,-5.6,"note"],[s+1.9,o,"\u56DE\u5230\u4E2D\u90E8\u6728\u7BB1\u540E\uFF0C\u62FF\u8D77\u6CB9\u7F50",5.3,3,.3,"note"],[o,c-.5,"\u2462 \u70B9\u71C3\u7262\u95E8\u524D\u7684\u706B\u76C6",t[0],3.4,t[1],"item"],[o+1.6,c-.5,"\u53E6\u4E00\u540D\u5B88\u536B\u8FC7\u6765\u67E5\u770B","e3",3.2,0,"warn"],[c-.5,c+3.1,"\u2463 \u6295\u63B7\u6CB9\u7F50\uFF0C\u706B\u52BF\u6269\u5927\uFF0C\u4E24\u4EBA\u90FD\u70E7\u7740",e[0],4.8,e[1]+.2,"warn"],[c+3.1,h,"\u4E09\u540D\u5B88\u536B\u5904\u7406\u5B8C\uFF0C\u6CA1\u6709\u89E6\u53D1\u8B66\u62A5",-1,2.6,4,"note"],[c+3.1,h,"\u4FA7\u5385\u5165\u53E3\uFF1A\u7EE7\u7EED\u6DF1\u5165",-12,3,-6,"note"]],cam:[[0,_o],[3.8,_o],[5.2,qf],[s-1.6,qf],[s-.6,Yf],[s+2.2,Yf],[o-.4,Zf],[c+2.6,Zf],[c+4,_o]],ch:[0,4.4,+(s-1.4).toFixed(2),+(s+1.9).toFixed(2),+(c+3.1).toFixed(2)]}})(),mx=(()=>{let i=[[7.8,yt,3.6],[9.6,yt,.6],[11.2,yt,-1.6],[12.6,yt,-2]],t=yn().at(0,-17.5,xo,6,"run").go([[-12.4,xo,6],[-10.6,yt,6],[-6,yt,6.4]],4.6,"run").to(3,"idle",{face:[0,13]}).to(6.4,"idle",{face:[0,12]}).go([[-3.6,yt,6.6]],3.5,"run").to(7.6,"stab",{face:[-1.4,7.4]}).to(8.2,"stab").to(8.6,"idle").go([[-1.4,yt,5.8]],4,"run").to(9.2,"dodge",{face:[.2,7.6]}).to(9.7,"idle").to(10.1,"stab").to(10.6,"stab").to(11,"idle").go([[.4,yt,4.4]],4,"run").to(12.1,"stab",{face:[1.4,5.4]}).to(12.7,"stab").to(13.1,"idle").to(13.6,"idle",{face:[-10.8,2.2]}).to(14.6,"idle").go([[2,yt,3.4],...i,[17.6,yt,-2.4],[19.6,yt,-2.8]],5,"run"),e=yn().at(0,-19.4,xo,6,"run").go([[-12.4,xo,6],[-10.6,yt,6],[-10.8,yt,2.2]],4.2,"run").to(3.3,"push",{face:[-12,1.4]}).to(13.4,"push").to(13.9,"idle",{face:[2,3]}).go([[-9,yt,3.2],[-4,yt,3.2],[2,yt,3.4],...i,[18.4,yt,-2.4]],5.4,"run"),n={hide:!0},s={show:!0},r=yn().at(0,.6,yt,17,"walk",n).to(3.6,"walk",s).go([[.6,yt,13],[.6,yt,10.4]],3,"walk").to(7.2,"talk",{face:[-6,6.4]}).to(14.6,"talk").go([[2.6,yt,7.8],[8.6,yt,4.2],[9.8,yt,.6],[11.2,yt,-1.6],[13.6,yt,-2]],4.3,"run"),o=yn().at(0,-1,yt,15.6,"run",n).to(4,"run",s).go([[-.8,yt,10.4],[-1.4,yt,7.4]],4.8,"run").to(7.6,"idle",{face:[-3.6,6.6]}).to(8.1,"down"),a=yn().at(0,1.4,yt,15.8,"run",n).to(4.3,"run",s).go([[1.4,yt,11.6],[.2,yt,7.6]],4.8,"run").to(8.7,"idle",{face:[-1.4,5.8]}).to(9.2,"charge").to(9.7,"idle").to(10.6,"idle").to(10.9,"down"),c=yn().at(0,-.6,yt,15.8,"run",n).to(4.6,"run",s).go([[-.4,yt,11.6],[1.8,yt,8.6]],4.6,"run").to(10.8,"idle",{face:[.4,4.4]}).go([[1.4,yt,5.4]],4.4,"run").to(12.6,"charge",{face:[.4,4.4]}).to(12.9,"down"),l=yn().at(0,1.6,yt,15.8,"run",n).to(5,"run",s).go([[1.4,yt,11.6],[2.6,yt,11.4]],4.6,"run").to(7.6,"idle",{face:[-4,6]}).to(14.8,"idle").go([[6.2,yt,11.4],[8.4,yt,4.8],[9.8,yt,1.2]],4.1,"run"),h=yn().at(0,-1.6,yt,15.6,"run",n).to(5.4,"run",s).go([[-1.4,yt,12.6]],4.6,"run").to(7.8,"idle",{face:[-6,6]}).to(15.2,"idle").go([[2,yt,8],[8,yt,4],[9,yt,2.6]],4,"run"),u=+Math.max(21.5,t.t+.6,r.t+.4).toFixed(1);for(let f of[t,e,r,o,a,c,l,h])f.to(u,f.keys[f.keys.length-1][4]);return{dur:u,init:23,mode:Qf,act:{p:{k:"p",keys:t.keys},s:{k:"s",keys:e.keys},l:{k:"l",keys:r.keys},e1:{k:"e",keys:o.keys},e2:{k:"e",keys:a.keys},e3:{k:"e",keys:c.keys},e4:{k:"e",keys:l.keys},e5:{k:"e",keys:h.keys},...jf()},fx:[[7.7,8.2,"spark",-2.2,1.3,7.4,.7],[10.2,10.7,"spark",-.4,1.3,6.8,.7],[12.2,12.7,"spark",1,1.3,5,.7],[13.4,14.6,"warn",-11.6,.08,1.4,1.4]],arr:[[8.8,9.6,[.2,1.2,7.4],[-1.2,1.2,6],"atk"],[3.8,7,[.6,.3,16],[.6,.3,11],"move"],[14.6,18,[2.6,.3,7.6],[10.6,.3,-.4],"move"]],lab:[[0,3.4,"\u4ECE\u5899\u8FB9\u8D70\u5ECA\u843D\u56DE\u4E00\u697C\u5927\u5385",-13,xo+2.6,6,"note"],[2.8,9,"\u5B66\u751F\u53BB\u7262\u95E8\u524D\u8BD5\u7740\u6551\u4EBA","s",2.8,0,"item"],[3.6,7.2,"\u6B63\u95E8\u5DF2\u7ECF\u6253\u5F00\uFF1A\u5934\u76EE\u5E26\u4EBA\u4ECE\u95E8\u5385\u8FDB\u6765",.6,5,14,"warn"],[7.2,13.6,"\u5377\u571F\u91CD\u6765\u7684\u654C\u65B9\u5934\u76EE","l",3.2,0,"warn"],[7.2,13.6,"\u4E2D\u90E8\u540C\u6837\u7684\u6728\u7BB1\uFF1A\u73B0\u5728\u662F\u4EA4\u6218\u65F6\u7684\u969C\u788D",5,3.4,-1,"note"],[13.6,16,"\u95E8\u592A\u575A\u56FA\uFF0C\u70B8\u5F39\u4E0D\u591F\uFF1A\u5148\u64A4",-11.2,3.8,1.4,"warn"],[14.6,u,"\u64A4\u79BB\uFF1A\u7ED5\u8FC7\u6728\u7BB1\uFF0C\u7A7F\u56DE\u6A90\u5ECA\u3001\u5929\u4E95\u3001\u5668\u6750\u5BA4",15.5,3.4,-2,"note"],[16,u,"\u8FFD\u5175","l",3.2,0,"warn"]],cam:[[0,_o],[2.6,_o],[4,Jf],[12.8,Jf],[14.2,$f],[15.4,$f],[17,dx]],ch:[0,3.6,7.2,13.6]}})(),yo={hall1:px,hall2:mx};var Yn=i=>Math.max(0,Math.min(1,i)),Kf=i=>i*i*(3-2*i),lr=(i,t,e)=>i+(t-i)*e,td=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*e},gx=["fall","fly","held"];function xx(i){let t=[],e=0;return i.forEach((n,s)=>{let r=n[5]||{};if(r.face!=null)e=typeof r.face=="number"?r.face:Math.atan2(r.face[0]-n[1],r.face[1]-n[3]);else if(s>0){let o=i[s-1],a=n[1]-o[1],c=n[3]-o[3];Math.hypot(a,c)>.05&&(e=Math.atan2(a,c))}t.push(e)}),n=>{let s=i.length,r=0;for(;r<s&&i[r][0]<=n;)r++;let o=!0;for(let d=0;d<r;d++){let g=i[d][5];g&&g.hide&&(o=!1),g&&g.show&&(o=!0)}if(r===0)return{x:i[0][1],y:i[0][2],z:i[0][3],pose:i[0][4],yaw:t[0],vis:o,air:!1};if(r>=s){let d=i[s-1];return{x:d[1],y:d[2],z:d[3],pose:d[4],yaw:t[s-1],vis:o,air:!1}}let a=i[r-1],c=i[r],l=c[5]||{},h=c[0]-a[0],u=h>0?Yn((n-a[0])/h):1;l.ease&&(u=Kf(u));let f=lr(a[2],c[2],l.fall?u*u:u);return l.arc&&(f+=4*l.arc*u*(1-u)),{x:lr(a[1],c[1],u),y:f,z:lr(a[3],c[3],u),pose:c[4],yaw:td(t[r-1],t[r],Yn((n-a[0])/.2)),vis:o,air:!!(l.arc||l.fall)}}}function _x(i,t){let e=0;for(;e<i.length&&i[e][0]<=t;)e++;if(e===0)return i[0][1];if(e>=i.length)return i[i.length-1][1];let[n,s]=i[e-1],[r,o]=i[e],a=Kf(Yn((t-n)/(r-n)));return{t:s.t.map((c,l)=>lr(c,o.t[l],a)),r:Math.exp(lr(Math.log(s.r),Math.log(o.r),a)),ph:lr(s.ph,o.ph,a),th:td(s.th,o.th,a)}}var vo=(i,t,e)=>i>=t&&i<e;function ed(i,t,e={}){let n=Uc(i),s=Nc(i,t),r=new _e;r.name="stage",i.scene.add(r);let o=document.createElement("div");o.className="bs-mask",o.innerHTML="<span></span>",t.appendChild(o);let a=null,c=null,l=0,h=!1,u=!0,f="",d="",g=0,v={},m=[],p=[],b=[],M=[],y=null,S=(C,O=0)=>typeof C=="string"?()=>{let W=v[C];return new z(W.F.root.position.x,W.F.root.position.y+O,W.F.root.position.z)}:null,T=(C,O=0)=>{if(typeof C!="string")return new z(...C);let W=v[C];return new z(W.F.root.position.x,W.F.root.position.y+O,W.F.root.position.z)};function I(){for(let C of[...r.children])r.remove(C),C.traverse(O=>{O.geometry&&O.geometry.dispose()});for(let C of M)s.remove(C.m);v={},m=[],p=[],b=[],M=[],y=null,f="",d=""}function F(){var O;let C=(O=a.scale)!=null?O:1.2;for(let[W,D]of Object.entries(a.act)){let k=Dc(D.k);k.root.scale.setScalar(D.k==="g"?1:C),r.add(k.root),v[W]={F:k,at:xx(D.keys)}}if(a.route!==!1&&a.act.p){let W=[[]];a.act.p.keys.forEach((D,k)=>{let G=D[5]||{};G.cut&&W.push([]);let J=W[W.length-1],Y=J[J.length-1];(!Y||Math.hypot(Y[0]-D[1],Y[1]-D[2]-.12,Y[2]-D[3])>.05)&&J.push([D[1],D[2]+.12,D[3],k&&(G.arc||G.fall)?1:0])}),y=new _e,r.add(y);for(let D of W)D.length>1&&y.add(Oc(D,qi.route,.16,{every:6,xray:.18,opacity:.5}))}for(let W of a.fx||[]){let[D,k,G,J,Y,et,xt]=W,lt=null;if(G==="fire")lt=_s(xt||1.5,(typeof J=="number"?J:3)+(et||0));else if(G==="flame")lt=_s(xt||.8,5,{spot:!1});else if(G==="puff")lt=Lc(xt||1);else if(G==="spark")lt=Vf(xt||1);else if(G==="shock")lt=ar(xt||4);else if(G==="warn")lt=ar(xt||1),lt.userData.at=null,lt.material.color.set("#D2452F");else if(G==="debris"){lt=new _e;let Q=new he(new $n(1.3,.32,.5),new Gn({color:"#5E4636",roughness:.9}));Q.castShadow=!0,lt.add(Q);let H=_s(.35,3,{spot:!1});H.position.y=.15,H.scale.setScalar(.75),lt.add(H),lt.userData.b=Q,lt.userData.fl=H;let it=ar(1);it.material.color.set("#D2452F"),lt.add(it),lt.userData.ring=it}lt&&(typeof J!="string"&&lt.position.set(J,Y,et),lt.visible=!1,r.add(lt),m.push({t0:D,t1:k,kind:G,g:lt,ref:typeof J=="string"?J:null,dy:typeof J=="string"?Y:0}))}for(let[W,D,k,G,J,Y]of a.proj||[]){let et=Gf();J==="throw"&&(et.userData.head.material=new Gn({color:"#8B6B4A"}),et.userData.tail.forEach(xt=>{xt.visible=!1})),et.visible=!1,r.add(et),p.push({t0:W,t1:D,from:k,to:G,arc:Y!=null?Y:.15,g:et})}for(let[W,D,k,G,J,Y]of a.arr||[]){let et=gh[J]||null,xt=qi[J]||qi.atk,lt=Array.isArray(k[0])?cr(k,.2,xt,{dash:et,every:999,last:!0,xray:.3}):Fc(k,G,xt,{dash:et,r:J==="look"?.1:.14,arc:J==="look"?.02:.12,...Y||{}});lt.visible=!1,r.add(lt),b.push({t0:W,t1:D,g:lt})}for(let W of a.lab||[]){let[D,k,G,J,Y,et,xt]=W,lt=xt==="qte",Q=s.add("bs-lab k-"+(xt||"note"),(lt?"<i>\u25C6</i>":xh(xt))+G+(lt?"<s></s>":""),typeof J=="string"?S(J,Y):[J,Y,et]);M.push({t0:D,t1:k,m:Q,q:lt})}}function _(){if(!a)return;let C=l,O=a.mode;for(let[Y,et]of a.modes||[])C>=Y&&(O=et);let W=JSON.stringify(O);W!==d&&(d=W,i.setMode(O));let D=(a.door||[]).filter(Y=>C>=Y[0]).map(Y=>[Y[1],Y[2]]),k=JSON.stringify(D);if(k!==f){f=k,n.at(a.init,{cover:a.cover});for(let[Y,et]of D)n.set(Y,et)}for(let Y of Object.values(v)){let et=Y.at(C),xt=Y.F;xt.root.visible=et.vis,xt.root.position.set(et.x,et.y,et.z),xt.root.rotation.y=et.yaw,xt.pose(et.pose||"idle",C),xt.ring.visible=!gx.includes(et.pose)&&!et.air}for(let Y of m){let et=vo(C,Y.t0,Y.t1);if(Y.g.visible=et,!et)continue;let xt=C-Y.t0,lt=Y.g;if(Y.ref){let Q=T(Y.ref,Y.dy);lt.position.copy(Q)}if(Y.kind==="fire"||Y.kind==="flame"||Y.kind==="puff")lt.scale.setScalar(.25+.75*Yn(xt/.4)),lt.userData.tick&&lt.userData.tick(C);else if(Y.kind==="spark"||Y.kind==="shock")lt.userData.at(Yn(xt/(Y.t1-Y.t0)));else if(Y.kind==="warn"){let Q=xt*2.2%1;lt.scale.setScalar(.5+1.1*Q),lt.material.opacity=.85*(1-Q)}else if(Y.kind==="debris"){let it=Yn((xt-.6)/.55),bt=lt.userData.b,dt=lt.userData.fl,Ft=lt.userData.ring,de=xt<.6?7:7*(1-it*it);if(bt.visible=dt.visible=xt>=.6-.05,bt.position.y=de+.16,dt.position.y=de+.3,bt.rotation.set(it<1?xt*3.2:.05,.6,it<1?xt*2.1:0),dt.userData.tick(C),Ft.visible=it<1,it<1){let B=xt*2.4%1;Ft.scale.setScalar(.6+.9*B),Ft.material.opacity=.9*(1-B)}}}for(let Y of p){let et=vo(C,Y.t0,Y.t1);if(Y.g.visible=et,!et)continue;let xt=dt=>typeof dt[0]=="string"?T(dt[0],dt[1]||0):T(dt),lt=xt(Y.from),Q=xt(Y.to),H=lt.distanceTo(Q),it=dt=>{let Ft=lt.clone().lerp(Q,dt);return Ft.y+=4*Y.arc*H*dt*(1-dt)*.25,Ft},bt=Yn((C-Y.t0)/(Y.t1-Y.t0));Y.g.userData.head.position.copy(it(bt)),Y.g.userData.tail.forEach((dt,Ft)=>dt.position.copy(it(Math.max(0,bt-.035*(Ft+1)))))}for(let Y of b)Y.g.visible=vo(C,Y.t0,Y.t1);for(let Y of M)Y.m.on=vo(C,Y.t0,Y.t1),Y.q&&Y.m.on&&Y.m.e.style.setProperty("--q",(1-Yn((C-Y.t0)/(Y.t1-Y.t0))).toFixed(3));let G=0,J="";for(let[Y,et,xt]of a.mask||[])C>=Y-.25&&C<et+.25&&(G=Math.max(G,Math.min(Yn((C-Y+.25)/.25),Yn((et+.25-C)/.25))),J=xt);o.style.opacity=G.toFixed(3),o.style.display=G>0?"":"none",J&&o.firstChild.textContent!==J&&(o.firstChild.textContent=J),u&&a.cam&&performance.now()>g&&E(C,!0),i.shadowDirty(),e.onT&&e.onT(a.dur?C/a.dur:0)}let x=C=>{let O=t.clientWidth/Math.max(1,t.clientHeight),W=O<1.25?Math.pow(1.25/O,.75):1;return{...C,r:C.r*W}};function E(C,O){let W=x(_x(a.cam,C)),D=W.t[0],k=W.t[1],G=W.t[2];for(let[Y,et,xt]of a.shake||[])if(vo(C,Y,et)){let lt=Math.sin(Math.PI*(C-Y)/(et-Y))*xt;D+=Math.sin(C*53)*lt,k+=Math.sin(C*41+1)*lt*.6,G+=Math.cos(C*47)*lt}let J={th:W.th,ph:W.ph,r:W.r,t:new z(D,k,G)};O?i.controls.set(J,!0):i.controls.flyTo(J,.9)}i.onFrame(C=>{!h||!a||(l=Math.min(a.dur,l+C),_(),l>=a.dur&&(L(),e.onEnd&&e.onEnd()))});function P(){a&&(l>=a.dur-.001&&(l=0),h=!0,i.animating=!0,e.onPlay&&e.onPlay(!0))}function L(){h=!1,i.animating=!1,i.invalidate(),e.onPlay&&e.onPlay(!1)}i.onUserStart(()=>{u&&(u=!1,e.onFollow&&e.onFollow(!1))});function R(C,O={}){yo[C]&&(L(),I(),c=C,a=yo[C],l=0,u=!0,e.onFollow&&e.onFollow(!0),a.sb&&i.setShadowBox(a.sb),F(),O.fly&&a.cam?(E(0,!1),g=performance.now()+950,i.animUntil=g+150):g=0,_())}return{load:R,play:P,pause:L,isPlaying:()=>h,setT(C,O={}){if(!a)return;let W=l;l=Yn(C)*a.dur,O.seek&&a.cam&&(!u||Math.abs(l-W)>.6)&&(u||(u=!0,e.onFollow&&e.onFollow(!0)),E(l,!1),g=performance.now()+950,i.animUntil=g+150),_(),i.invalidate()},get t(){return a?l/a.dur:0},get id(){return c},get follow(){return u},setFollow(C){u=C,C&&a&&(E(l,!1),g=performance.now()+950,i.animUntil=g+150),e.onFollow&&e.onFollow(C)},resetView(){this.setFollow(!0)},info:C=>{let O=yo[C||c];return O?{dur:O.dur,ch:O.ch,ctl:O.ctl}:null},scenes:Object.keys(yo),dispose(){L(),I(),o.remove(),s.lay.remove(),i.scene.remove(r)}}}return dd(yx);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
