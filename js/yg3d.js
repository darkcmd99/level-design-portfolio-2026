var YG3D=(()=>{var kc=Object.defineProperty;var pd=Object.getOwnPropertyDescriptor;var md=Object.getOwnPropertyNames;var gd=Object.prototype.hasOwnProperty;var xd=(i,t)=>{for(var e in t)kc(i,e,{get:t[e],enumerable:!0})},_d=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of md(t))!gd.call(i,s)&&s!==e&&kc(i,s,{get:()=>t[s],enumerable:!(n=pd(t,s))||n.enumerable});return i};var yd=i=>_d(kc({},"__esModule",{value:!0}),i);var D_={};xd(D_,{GROUPS:()=>vh,VIEWS:()=>Tc,createShow:()=>id,createStage:()=>ad,mount:()=>$f});var cu=0,Tl=1,lu=2;var Al=1,Ma=2,hi=3,bi=0,yn=1,Tn=2,wi=0,is=1,Rl=2,Cl=3,Il=4,hu=5,Bi=100,uu=101,fu=102,du=103,pu=104,mu=200,gu=201,xu=202,_u=203,Wo=204,Xo=205,yu=206,vu=207,Mu=208,bu=209,Su=210,Eu=211,wu=212,Tu=213,Au=214,ba=0,Sa=1,Ea=2,ss=3,wa=4,Ta=5,Aa=6,Ra=7,Pl=0,Ru=1,Cu=2,Ti=0,Iu=1,Pu=2,Du=3,Fu=4,Lu=5,Uu=6,Ca=7;var Dl=300,hs=301,us=302,Ia=303,Pa=304,Kr=306,qo=1e3,Ni=1001,Yo=1002,En=1003,Nu=1004;var to=1005;var jn=1006,Da=1007;var Vi=1008;var ei=1009,Fl=1010,Ll=1011,js=1012,Fa=1013,Gi=1014,ni=1015,Ks=1016,La=1017,Ua=1018,tr=1020,Ul=35902,Nl=35899,Bl=1021,Ol=1022,Vn=1023,Hs=1026,er=1027,Na=1028,Ba=1029,zl=1030,Oa=1031;var za=1033,eo=33776,no=33777,io=33778,so=33779,ka=35840,Ha=35841,Va=35842,Ga=35843,Wa=36196,Xa=37492,qa=37496,Ya=37808,Za=37809,Ja=37810,$a=37811,Qa=37812,ja=37813,Ka=37814,tc=37815,ec=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,ac=36492,cc=36494,lc=36495,hc=36283,uc=36284,fc=36285,dc=36286;var br=2300,Zo=2301,Go=2302,pl=2400,ml=2401,gl=2402;var Bu=3200,Ou=3201;var kl=0,zu=1,Ai="",Pn="srgb",rs="srgb-linear",Sr="linear",Ce="srgb";var ns=7680;var xl=519,ku=512,Hu=513,Vu=514,Hl=515,Gu=516,Wu=517,Xu=518,qu=519,_l=35044;var Vl="300 es",Qn=2e3,Er=2001;var Si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hc=Math.PI/180,Jo=180/Math.PI;function ro(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function vd(i,t){return(i%t+t)%t}function Vc(i,t,e){return(1-e)*i+e*t}function fr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ft=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-o,p=c*f+l*d+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let b=Math.sqrt(v),S=Math.atan2(b,p*y);m=Math.sin(m*S)/b,o=Math.sin(o*S)/b}let _=o*y;if(c=c*m+f*_,l=l*m+d*_,h=h*m+g*_,u=u*m+x*_,m===1-o){let b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-o*d,t[e+2]=l*g+h*d+o*f-c*u,t[e+3]=h*g-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gc.copy(this).projectOnVector(t),this.sub(Gc)}reflect(t){return this.sub(Gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gc=new U,Uh=new Dn,te=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],v=s[4],_=s[7],b=s[2],S=s[5],T=s[8];return r[0]=a*x+o*y+c*b,r[3]=a*m+o*v+c*S,r[6]=a*p+o*_+c*T,r[1]=l*x+h*y+u*b,r[4]=l*m+h*v+u*S,r[7]=l*p+h*_+u*T,r[2]=f*x+d*y+g*b,r[5]=f*m+d*v+g*S,r[8]=f*p+d*_+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wc.makeScale(t,e)),this}rotate(t){return this.premultiply(Wc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wc=new te;function Gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yu(){let i=wr("canvas");return i.style.display="block",i}var Nh={};function Vs(i){i in Nh||(Nh[i]=!0,console.warn(i))}function Zu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Bh=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Md(){let i={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ce&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ce&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rs]:{primaries:t,whitePoint:n,transfer:Sr,toXYZ:Bh,fromXYZ:Oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:Bh,fromXYZ:Oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),i}var ve=Md();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,$o=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=wr("canvas")),As.width=t.width,As.height=t.height;let s=As.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bd=0,Gs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ro(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xc(s[a].image)):r.push(Xc(s[a]))}else r=Xc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?$o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sd=0,qc=new U,wn=class i extends Si{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ni,s=Ni,r=jn,a=Vi,o=Vn,c=ei,l=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=ro(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Dl;wn.DEFAULT_ANISOTROPY=1;var We=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,_=(d+1)/2,b=(p+1)/2,S=(h+f)/4,T=(u+x)/4,C=(g+m)/4;return v>_&&v>b?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=T/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=S/s,r=C/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=T/r,s=C/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qo=class extends Si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new wn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Zn):Zn.fromBufferAttribute(r,a),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),bo.subVectors(this.max,dr),Rs.subVectors(t.a,dr),Cs.subVectors(t.b,dr),Is.subVectors(t.c,dr),Ci.subVectors(Cs,Rs),Ii.subVectors(Is,Cs),ji.subVectors(Rs,Is);let e=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-ji.z,ji.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,ji.z,0,-ji.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-ji.y,ji.x,0];return!Yc(e,Rs,Cs,Is,bo)||(e=[1,0,0,0,1,0,0,0,1],!Yc(e,Rs,Cs,Is,bo))?!1:(So.crossVectors(Ci,Ii),e=[So.x,So.y,So.z],Yc(e,Rs,Cs,Is,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},gi=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,Mo=new zn,Rs=new U,Cs=new U,Is=new U,Ci=new U,Ii=new U,ji=new U,dr=new U,bo=new U,So=new U,Ki=new U;function Yc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);let o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=t.dot(Ki),l=e.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ed=new zn,pr=new U,Zc=new U,Oi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ed.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Zc)),this.expandByPoint(pr.copy(t.center).sub(Zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xi=new U,Jc=new U,Eo=new U,Pi=new U,$c=new U,wo=new U,Qc=new U,Ar=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jc.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(Jc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Eo),o=Pi.dot(this.direction),c=-Pi.dot(Eo),l=Pi.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jc).addScaledVector(Eo,f),d}intersectSphere(t,e){xi.subVectors(t.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,s,r){$c.subVectors(e,t),wo.subVectors(n,t),Qc.crossVectors($c,wo);let a=this.direction.dot(Qc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,t);let c=o*this.direction.dot(wo.crossVectors(Pi,wo));if(c<0)return null;let l=o*this.direction.dot($c.cross(Pi));if(l<0||c+l>a)return null;let h=-o*Pi.dot(Qc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,x,m)}set(t,e,n,s,r,a,o,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),a=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f+x*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,x=o*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*c,d=a*l,g=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wd,t,Td)}lookAt(t,e,n){let s=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Di.crossVectors(n,Cn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Di.crossVectors(n,Cn)),Di.normalize(),To.crossVectors(Cn,Di),s[0]=Di.x,s[4]=To.x,s[8]=Cn.x,s[1]=Di.y,s[5]=To.y,s[9]=Cn.y,s[2]=Di.z,s[6]=To.z,s[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],_=n[11],b=n[15],S=s[0],T=s[4],C=s[8],E=s[12],M=s[1],R=s[5],F=s[9],z=s[13],B=s[2],q=s[6],H=s[10],tt=s[14],G=s[3],st=s[7],Z=s[11],ot=s[15];return r[0]=a*S+o*M+c*B+l*G,r[4]=a*T+o*R+c*q+l*st,r[8]=a*C+o*F+c*H+l*Z,r[12]=a*E+o*z+c*tt+l*ot,r[1]=h*S+u*M+f*B+d*G,r[5]=h*T+u*R+f*q+d*st,r[9]=h*C+u*F+f*H+d*Z,r[13]=h*E+u*z+f*tt+d*ot,r[2]=g*S+x*M+m*B+p*G,r[6]=g*T+x*R+m*q+p*st,r[10]=g*C+x*F+m*H+p*Z,r[14]=g*E+x*z+m*tt+p*ot,r[3]=y*S+v*M+_*B+b*G,r[7]=y*T+v*R+_*q+b*st,r[11]=y*C+v*F+_*H+b*Z,r[15]=y*E+v*z+_*tt+b*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*d-n*c*d)+x*(+e*c*d-e*l*f+r*a*f-s*a*d+s*l*h-r*c*h)+m*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*f+s*a*u-n*a*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*l-x*f*l+x*c*d-o*m*d-u*c*p+o*f*p,v=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,_=h*x*l-g*u*l+g*o*d-a*x*d-h*o*p+a*u*p,b=g*u*c-h*x*c-g*o*f+a*x*f+h*o*m-a*u*m,S=e*y+n*v+s*_+r*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=y*T,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*T,t[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*T,t[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*d-n*c*d)*T,t[4]=v*T,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*T,t[6]=(g*c*r-a*m*r-g*s*l+e*m*l+a*s*p-e*c*p)*T,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*d+e*c*d)*T,t[8]=_*T,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*T,t[10]=(a*x*r-g*o*r+g*n*l-e*x*l-a*n*p+e*o*p)*T,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*T,t[12]=b*T,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*T,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*m-e*o*m)*T,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*f+e*o*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=c*l,v=c*h,_=c*u,b=n.x,S=n.y,T=n.z;return s[0]=(1-(x+p))*b,s[1]=(d+_)*b,s[2]=(g-v)*b,s[3]=0,s[4]=(d-_)*S,s[5]=(1-(f+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+v)*T,s[9]=(m-y)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ps.set(s[0],s[1],s[2]).length(),a=Ps.set(s[4],s[5],s[6]).length(),o=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);let l=1/r,h=1/a,u=1/o;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Qn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Qn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Er)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Qn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Qn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Er)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ps=new U,Jn=new Ie,wd=new U(0,0,0),Td=new U(1,1,1),Di=new U,To=new U,Cn=new U,zh=new Ie,kh=new Dn,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ad=0,Hh=new U,Ds=new Dn,_i=new Ie,Ao=new U,mr=new U,Rd=new U,Cd=new Dn,Vh=new U(1,0,0),Gh=new U(0,1,0),Wh=new U(0,0,1),Xh={type:"added"},Id={type:"removed"},Fs={type:"childadded",child:null},jc={type:"childremoved",child:null},pn=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Kn,n=new Dn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new te}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Vh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Wh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(mr,Ao,this.up):_i.lookAt(Ao,mr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(_i),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xh),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),jc.child=t,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xh),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,Rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};pn.DEFAULT_UP=new U(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new U,yi=new U,Kc=new U,vi=new U,Ls=new U,Us=new U,qh=new U,tl=new U,el=new U,nl=new U,il=new We,sl=new We,rl=new We,Ui=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),yi.subVectors(n,e),Kc.subVectors(t,e);let a=$n.dot($n),o=$n.dot(yi),c=$n.dot(Kc),l=yi.dot(yi),h=yi.dot(Kc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(a,vi.y),c.addScaledVector(o,vi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,n),rl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(il,r.x),a.addScaledVector(sl,r.y),a.addScaledVector(rl,r.z),a}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),yi.subVectors(t,e),$n.cross(yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),$n.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ls.subVectors(s,n),Us.subVectors(r,n),tl.subVectors(t,n);let c=Ls.dot(tl),l=Us.dot(tl);if(c<=0&&l<=0)return e.copy(n);el.subVectors(t,s);let h=Ls.dot(el),u=Us.dot(el);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ls,a);nl.subVectors(t,r);let d=Ls.dot(nl),g=Us.dot(nl);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Us,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return qh.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(qh,o);let p=1/(m+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(Ls,a).addScaledVector(Us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function ol(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=vd(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ol(a,r,t+1/3),this.g=ol(a,r,t),this.b=ol(a,r,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){let n=Ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return ve.workingToColorSpace(fn.copy(this),t),Math.round(le(fn.r*255,0,255))*65536+Math.round(le(fn.g*255,0,255))*256+Math.round(le(fn.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(fn.copy(this),e);let n=fn.r,s=fn.g,r=fn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Pn){ve.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,s=fn.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(Ro);let n=Vc(Fi.h,Ro.h,e),s=Vc(Fi.s,Ro.s,e),r=Vc(Fi.l,Ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new ie;ie.NAMES=Ju;var Pd=0,zi=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=is,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cn=class extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var je=new U,Co=new Ft,Dd=0,Ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array),s=Sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array),s=Sn(s,this.array),r=Sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_l&&(t.usage=this.usage),t}};var Rr=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Fd=0,On=new Ie,al=new pn,Ns=new U,In=new zn,gr=new zn,on=new U,en=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return al.lookAt(t),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(In.min,gr.min),In.expandByPoint(on),on.addVectors(In.max,gr.max),In.expandByPoint(on)):(In.expandByPoint(gr.min),In.expandByPoint(gr.max))}In.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)on.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(on));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)on.fromBufferAttribute(o,l),c&&(Ns.fromBufferAttribute(t,l),on.add(Ns)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new U,c[C]=new U;let l=new U,h=new U,u=new U,f=new Ft,d=new Ft,g=new Ft,x=new U,m=new U;function p(C,E,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),o[C].add(x),o[E].add(x),o[M].add(x),c[C].add(m),c[E].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,E=y.length;C<E;++C){let M=y[C],R=M.start,F=M.count;for(let z=R,B=R+F;z<B;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let v=new U,_=new U,b=new U,S=new U;function T(C){b.fromBufferAttribute(s,C),S.copy(b);let E=o[C];v.copy(E),v.sub(b.multiplyScalar(b.dot(E))).normalize(),_.crossVectors(S,E);let R=_.dot(c[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,R)}for(let C=0,E=y.length;C<E;++C){let M=y[C],R=M.start,F=M.count;for(let z=R,B=R+F;z<B;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ze(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yh=new Ie,ts=new Ar,Io=new Oi,Zh=new U,Po=new U,Do=new U,Fo=new U,cl=new U,Lo=new U,Jh=new U,Uo=new U,me=class extends pn{constructor(t=new en,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(cl.fromBufferAttribute(u,t),a?Lo.addScaledVector(cl,h):Lo.addScaledVector(cl.sub(e),h))}e.add(Lo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(Io.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Io,Zh)===null||ts.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&(Yh.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Yh),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,b=v;_<b;_+=3){let S=o.getX(_),T=o.getX(_+1),C=o.getX(_+2);s=No(this,p,t,n,l,h,u,S,T,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);s=No(this,a,t,n,l,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,b=v;_<b;_+=3){let S=_,T=_+1,C=_+2;s=No(this,p,t,n,l,h,u,S,T,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,_=m+2;s=No(this,a,t,n,l,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ld(i,t,e,n,s,r,a,o){let c;if(t.side===yn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===bi,o),c===null)return null;Uo.copy(o),Uo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Uo);return l<e.near||l>e.far?null:{distance:l,point:Uo.clone(),object:i}}function No(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Po),i.getVertexPosition(c,Do),i.getVertexPosition(l,Fo);let h=Ld(i,t,e,n,Po,Do,Fo,Jh);if(h){let u=new U;Ui.getBarycoord(Jh,Po,Do,Fo,u),s&&(h.uv=Ui.getInterpolatedAttribute(s,o,c,l,u,new Ft)),r&&(h.uv1=Ui.getInterpolatedAttribute(r,o,c,l,u,new Ft)),a&&(h.normal=Ui.getInterpolatedAttribute(a,o,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new U,materialIndex:0};Ui.getNormal(Po,Do,Fo,f.normal),h.face=f,h.barycoord=u}return h}var kn=class i extends en{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function g(x,m,p,y,v,_,b,S,T,C,E){let M=_/T,R=b/C,F=_/2,z=b/2,B=S/2,q=T+1,H=C+1,tt=0,G=0,st=new U;for(let Z=0;Z<H;Z++){let ot=Z*R-z;for(let at=0;at<q;at++){let _t=at*M-F;st[x]=_t*y,st[m]=ot*v,st[p]=B,l.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[p]=S>0?1:-1,h.push(st.x,st.y,st.z),u.push(at/T),u.push(1-Z/C),tt+=1}}for(let Z=0;Z<C;Z++)for(let ot=0;ot<T;ot++){let at=f+ot+q*Z,_t=f+ot+q*(Z+1),Vt=f+(ot+1)+q*(Z+1),kt=f+(ot+1)+q*Z;c.push(at,_t,kt),c.push(_t,Vt,kt),G+=6}o.addGroup(d,G,E),d+=G,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=fs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ud(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var $u={clone:fs,merge:mn},Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ir=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new U,$h=new Ft,Qh=new Ft,dn=class extends Ir{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,$h,Qh),e.subVectors(Qh,$h)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bs=-90,Os=1,Ko=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Bs,Os,t,e);s.layers=this.layers,this.add(s);let r=new dn(Bs,Os,t,e);r.layers=this.layers,this.add(r);let a=new dn(Bs,Os,t,e);a.layers=this.layers,this.add(a);let o=new dn(Bs,Os,t,e);o.layers=this.layers,this.add(o);let c=new dn(Bs,Os,t,e);c.layers=this.layers,this.add(c);let l=new dn(Bs,Os,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pr=class extends wn{constructor(t=[],e=hs,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ta=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:wi});r.uniforms.tEquirect.value=e;let a=new me(s,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=jn),new Ko(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},we=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Od={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Dr=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ea=class extends wn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=En,h=En,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fr=class extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zs=new Ie,jh=new Ie,Bo=[],Kh=new zn,zd=new Ie,xr=new me,_r=new Oi,Lr=class extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),Kh.copy(t.boundingBox).applyMatrix4(zs),this.boundingBox.union(Kh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),_r.copy(t.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(_r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),t.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),jh.multiplyMatrices(n,zs),xr.matrixWorld=jh,xr.raycast(t,Bo);for(let a=0,o=Bo.length;a<o;a++){let c=Bo[a];c.instanceId=r,c.object=this,e.push(c)}Bo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ea(new Float32Array(s*this.count),s,this.count,Na,ni));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ll=new U,kd=new U,Hd=new te,Ke=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ll.subVectors(n,e).cross(kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hd.getNormalMatrix(t),s=this.coplanarPoint(ll).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new Oi,Vd=new Ft(.5,.5),Oo=new U,qs=class{constructor(t=new Ke,e=new Ke,n=new Ke,s=new Ke,r=new Ke,a=new Ke){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],v=r[13],_=r[14],b=r[15];if(s[0].setComponents(l-a,d-h,p-g,b-y).normalize(),s[1].setComponents(l+a,d+h,p+g,b+y).normalize(),s[2].setComponents(l+o,d+u,p+x,b+v).normalize(),s[3].setComponents(l-o,d-u,p-x,b-v).normalize(),n)s[4].setComponents(c,f,m,_).normalize(),s[5].setComponents(l-c,d-f,p-m,b-_).normalize();else if(s[4].setComponents(l-c,d-f,p-m,b-_).normalize(),e===Qn)s[5].setComponents(l+c,d+f,p+m,b+_).normalize();else if(e===Er)s[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);let e=Vd.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oo.x=s.normal.x>0?t.max.x:t.min.x,Oo.y=s.normal.y>0?t.max.y:t.min.y,Oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ur=class extends wn{constructor(t,e,n=Gi,s,r,a,o=En,c=En,l,h=Hs,u=1){if(h!==Hs&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Nr=class extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Br=class i extends en{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,x=s+1,m=new U,p=new U;for(let y=0;y<=g;y++){let v=0,_=0,b=0,S=0;if(y<=n){let E=y/n,M=E*Math.PI/2;_=-h-t*Math.cos(M),b=t*Math.sin(M),S=-t*Math.cos(M),v=E*u}else if(y<=n+r){let E=(y-n)/r;_=-h+E*e,b=t,S=0,v=u+E*f}else{let E=(y-n-r)/n,M=E*Math.PI/2;_=h+t*Math.sin(M),b=t*Math.cos(M),S=t*Math.sin(M),v=u+f+E*u}let T=Math.max(0,Math.min(1,v/d)),C=0;y===0?C=.5/s:y===g&&(C=-.5/s);for(let E=0;E<=s;E++){let M=E/s,R=M*Math.PI*2,F=Math.sin(R),z=Math.cos(R);p.x=-b*z,p.y=_,p.z=b*F,o.push(p.x,p.y,p.z),m.set(-b*z,S,b*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+C,T)}if(y>0){let E=(y-1)*x;for(let M=0;M<s;M++){let R=E+M,F=E+M+1,z=y*x+M,B=y*x+M+1;a.push(R,F,z),a.push(F,B,z)}}}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Or=class i extends en{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new U,h=new Ft;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ei=class i extends en{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function y(){let _=new U,b=new U,S=0,T=(e-t)/n;for(let C=0;C<=r;C++){let E=[],M=C/r,R=M*(e-t)+t;for(let F=0;F<=s;F++){let z=F/s,B=z*c+o,q=Math.sin(B),H=Math.cos(B);b.x=R*q,b.y=-M*n+m,b.z=R*H,u.push(b.x,b.y,b.z),_.set(q,T,H).normalize(),f.push(_.x,_.y,_.z),d.push(z,1-M),E.push(g++)}x.push(E)}for(let C=0;C<s;C++)for(let E=0;E<r;E++){let M=x[E][C],R=x[E+1][C],F=x[E+1][C+1],z=x[E][C+1];(t>0||E!==0)&&(h.push(M,R,z),S+=3),(e>0||E!==r-1)&&(h.push(R,F,z),S+=3)}l.addGroup(p,S,0),p+=S}function v(_){let b=g,S=new Ft,T=new U,C=0,E=_===!0?t:e,M=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let R=g;for(let F=0;F<=s;F++){let B=F/s*c+o,q=Math.cos(B),H=Math.sin(B);T.x=E*H,T.y=m*M,T.z=E*q,u.push(T.x,T.y,T.z),f.push(0,M,0),S.x=q*.5+.5,S.y=H*.5*M+.5,d.push(S.x,S.y),g++}for(let F=0;F<s;F++){let z=b+F,B=R+F;_===!0?h.push(B,B+1,z):h.push(B+1,B,z),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ys=class i extends Ei{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},na=class i extends en{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new U,_=new U,b=new U;for(let S=0;S<e.length;S+=3)d(e[S+0],v),d(e[S+1],_),d(e[S+2],b),c(v,_,b,y)}function c(y,v,_,b){let S=b+1,T=[];for(let C=0;C<=S;C++){T[C]=[];let E=y.clone().lerp(_,C/S),M=v.clone().lerp(_,C/S),R=S-C;for(let F=0;F<=R;F++)F===0&&C===S?T[C][F]=E:T[C][F]=E.clone().lerp(M,F/R)}for(let C=0;C<S;C++)for(let E=0;E<2*(S-C)-1;E++){let M=Math.floor(E/2);E%2===0?(f(T[C][M+1]),f(T[C+1][M]),f(T[C][M])):(f(T[C][M+1]),f(T[C+1][M+1]),f(T[C+1][M]))}}function l(y){let v=new U;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let y=new U;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;a.push(_,1-b)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],_=a[y+2],b=a[y+4],S=Math.max(v,_,b),T=Math.min(v,_,b);S>.9&&T<.1&&(v<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){let _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function g(){let y=new U,v=new U,_=new U,b=new U,S=new Ft,T=new Ft,C=new Ft;for(let E=0,M=0;E<r.length;E+=9,M+=6){y.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),S.set(a[M+0],a[M+1]),T.set(a[M+2],a[M+3]),C.set(a[M+4],a[M+5]),b.copy(y).add(v).add(_).divideScalar(3);let R=m(b);x(S,M+0,y,R),x(T,M+2,v,R),x(C,M+4,_,R)}}function x(y,v,_,b){b<0&&y.x===1&&(a[v]=y.x-1),_.x===0&&_.z===0&&(a[v]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Ft:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,c=new Ie;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(le(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(le(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zr=class extends Hn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ia=class extends zr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Xl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var zo=new U,hl=new Xl,ul=new Xl,fl=new Xl,os=class extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(zo.subVectors(s[0],s[1]).add(s[0]),l=zo);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),hl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),ul.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),fl.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(hl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ul.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),fl.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(hl.calc(c),ul.calc(c),fl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function tu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Gd(i,t){let e=1-i;return e*e*t}function Wd(i,t){return 2*(1-i)*i*t}function Xd(i,t){return i*i*t}function vr(i,t,e,n){return Gd(i,t)+Wd(i,e)+Xd(i,n)}function qd(i,t){let e=1-i;return e*e*e*t}function Yd(i,t){let e=1-i;return 3*e*e*i*t}function Zd(i,t){return 3*(1-i)*i*i*t}function Jd(i,t){return i*i*i*t}function Mr(i,t,e,n,s){return qd(i,t)+Yd(i,e)+Zd(i,n)+Jd(i,s)}var sa=class extends Hn{constructor(t=new Ft,e=new Ft,n=new Ft,s=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Mr(t,s.x,r.x,a.x,o.x),Mr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ra=class extends Hn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Mr(t,s.x,r.x,a.x,o.x),Mr(t,s.y,r.y,a.y,o.y),Mr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oa=class extends Hn{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zs=class extends Hn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends Hn{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(t,s.x,r.x,a.x),vr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends Hn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vr(t,s.x,r.x,a.x),vr(t,s.y,r.y,a.y),vr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ca=class extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(tu(o,c.x,l.x,h.x,u.x),tu(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ft().fromArray(s))}return this}},$d=Object.freeze({__proto__:null,ArcCurve:ia,CatmullRomCurve3:os,CubicBezierCurve:sa,CubicBezierCurve3:ra,EllipseCurve:zr,LineCurve:oa,LineCurve3:Zs,QuadraticBezierCurve:aa,QuadraticBezierCurve3:kr,SplineCurve:ca});function Qd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Qu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=np(i,t,r,e)),i.length>80*e){o=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<o&&(o=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Hr(r,a,e,o,c,l,0),a}function Qu(i,t,e,n,s){let r;if(s===dp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=eu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=eu(a/n|0,i[a],i[a+1],r);return r&&Js(r,r.next)&&(Gr(r),r=r.next),r}function as(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Js(e,e.next)||Ge(e.prev,e,e.next)===0)){if(Gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ap(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Kd(i,n,s,r):jd(i)){t.push(c.i,i.i,l.i),Gr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=tp(as(i),t),Hr(i,t,e,n,s,r,2)):a===2&&ep(i,t,e,n,s,r):Hr(as(i),t,e,n,s,r,1);break}}}function jd(i){let t=i.prev,e=i,n=i.next;if(Ge(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),f=Math.max(s,r,a),d=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&yr(s,o,r,c,a,l,g.x,g.y)&&Ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ge(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,c,l),g=Math.min(h,u,f),x=Math.max(o,c,l),m=Math.max(h,u,f),p=yl(d,g,t,e,n),y=yl(x,m,t,e,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&yr(o,h,c,u,l,f,v.x,v.y)&&Ge(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&yr(o,h,c,u,l,f,_.x,_.y)&&Ge(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&yr(o,h,c,u,l,f,v.x,v.y)&&Ge(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&yr(o,h,c,u,l,f,_.x,_.y)&&Ge(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function tp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Js(n,s)&&Ku(n,e,e.next,s)&&Vr(n,s)&&Vr(s,n)&&(t.push(n.i,e.i,s.i),Gr(e),Gr(e.next),e=i=s),e=e.next}while(e!==i);return as(e)}function ep(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hp(a,o)){let c=tf(a,o);a=as(a,a.next),c=as(c,c.next),Hr(a,t,e,n,s,r,0),Hr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function np(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Qu(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(lp(l))}s.sort(ip);for(let r=0;r<s.length;r++)e=sp(s[r],e);return e}function ip(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function sp(i,t){let e=rp(i,t);if(!e)return t;let n=tf(e,i);return as(n,n.next),as(e,e.next)}function rp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Js(i,e))return e;do{if(Js(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&ju(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Vr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&op(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function op(i,t){return Ge(i.prev,i,t.prev)<0&&Ge(t.next,i,i.next)<0}function ap(i,t,e,n){let s=i;do s.z===0&&(s.z=yl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cp(s)}function cp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function yl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function lp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ju(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function yr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&ju(i,t,e,n,s,r,a,o)}function hp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!up(i,t)&&(Vr(i,t)&&Vr(t,i)&&fp(i,t)&&(Ge(i.prev,i,t.prev)||Ge(i,t.prev,t))||Js(i,t)&&Ge(i.prev,i,i.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Js(i,t){return i.x===t.x&&i.y===t.y}function Ku(i,t,e,n){let s=Ho(Ge(i,t,e)),r=Ho(Ge(i,t,n)),a=Ho(Ge(e,n,i)),o=Ho(Ge(e,n,t));return!!(s!==r&&a!==o||s===0&&ko(i,e,t)||r===0&&ko(i,n,t)||a===0&&ko(e,i,n)||o===0&&ko(e,t,n))}function ko(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ho(i){return i>0?1:i<0?-1:0}function up(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ku(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vr(i,t){return Ge(i.prev,i,i.next)<0?Ge(i,t,i.next)>=0&&Ge(i,i.prev,t)>=0:Ge(i,t,i.prev)<0||Ge(i,i.next,t)<0}function fp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function tf(i,t){let e=vl(i.i,i.x,i.y),n=vl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function eu(i,t,e,n){let s=vl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ml=class{static triangulate(t,e,n=2){return Qd(t,e,n)}},Wr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];nu(t),iu(n,t);let a=t.length;e.forEach(nu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,iu(n,e[c]);let o=Ml.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function nu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function iu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var cs=class i extends na{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Xr=class i extends en{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*f-a;for(let v=0;v<l;v++){let _=v*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let v=y+l*p,_=y+l*(p+1),b=y+1+l*(p+1),S=y+1+l*p;d.push(v,_,S),d.push(_,b,S)}this.setIndex(d),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$s=class i extends en{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new U,g=new Ft;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,v=y,_=y+n+1,b=y+n+2,S=y+1;o.push(v,_,S),o.push(_,b,S)}}this.setIndex(o),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var qr=class i extends en{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new U,f=new U,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let S=b/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(S+_,1-v),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],_=h[p][y],b=h[p+1][y],S=h[p+1][y+1];(p!==0||a>0)&&d.push(v,_,S),(p!==n-1||c<Math.PI)&&d.push(_,b,S)}this.setIndex(d),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qs=class i extends en{constructor(t=new kr(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,c=new U,l=new Ft,h=new U,u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function x(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),y(),p()}function m(v){h=t.getPointAt(v/e,h);let _=a.normals[v],b=a.binormals[v];for(let S=0;S<=s;S++){let T=S/s*Math.PI*2,C=Math.sin(T),E=-Math.cos(T);c.x=E*_.x+C*b.x,c.y=E*_.y+C*b.y,c.z=E*_.z+C*b.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let b=(s+1)*(v-1)+(_-1),S=(s+1)*v+(_-1),T=(s+1)*v+_,C=(s+1)*(v-1)+_;g.push(b,S,C),g.push(S,T,C)}}function y(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)l.x=v/e,l.y=_/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new $d[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var li=class extends zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var la=class extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ha=class extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ua=class extends ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pl,endingEnd:pl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ml:r=t,o=2*e-n;break;case gl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ml:a=t,c=2*n-e;break;case gl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+y*a[l+b]+v*a[c+b]+_*a[u+b];return r}},fa=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}},da=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vo(e,this.TimeBufferType),this.values=Vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vo(t.times,Array),values:Vo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ua(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case Zo:e=this.InterpolantFactoryMethodLinear;break;case Go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return Zo;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&pp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Go,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Zo;var ki=class extends Fn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=br;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="color";var ma=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="number";var ga=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Dn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Yr=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Fn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=br;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="vector";var _a=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ef=new _a,ya=class{constructor(t){this.manager=t!==void 0?t:ef,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zr=class extends pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Jr=class extends Zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dl=new Ie,su=new U,ru=new U,bl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;su.setFromMatrixPosition(t.matrixWorld),e.position.copy(su),ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ru),e.updateMatrixWorld(),dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var $r=class extends Ir{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Sl=class extends bl{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new Sl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var va=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ql="\\[\\]\\.:\\/",mp=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",gp="[^"+ql.replace("\\.","")+"]",xp=/((?:WC+[\/:])*)/.source.replace("WC",Yl),_p=/(WCOD+)?/.source.replace("WCOD",gp),yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Mp=new RegExp("^"+xp+_p+yp+vp+"$"),bp=["material","materials","bones","map"],El=class{constructor(t,e,n){let s=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mp,"")}static parseTrackName(t){let e=Mp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=El;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var L_=new Float32Array(1);var ou=new Ie,jr=class{constructor(t,e,n=0,s=1/0){this.ray=new Ar(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ou.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(t,e=!0,n=[]){return wl(t,this,n,e),n.sort(au),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wl(t[s],this,n,e);return n.sort(au),n}};function au(i,t){return i.distance-t.distance}function wl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)wl(r[a],t,e,!0)}}function Zl(i,t,e,n){let s=Sp(n);switch(e){case Bl:return i*t;case Na:return i*t/s.components*s.byteLength;case Ba:return i*t/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case Oa:return i*t*2/s.components*s.byteLength;case Ol:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case za:return i*t*4/s.components*s.byteLength;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Ga:return Math.max(i,16)*Math.max(t,8)/4;case ka:case Va:return Math.max(i,8)*Math.max(t,8)/2;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ac:case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hc:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sp(i){switch(i){case ei:case Fl:return{byteLength:1,components:1};case js:case Ll:case Ks:return{byteLength:2,components:1};case La:case Ua:return{byteLength:2,components:4};case Gi:case Fa:case ni:return{byteLength:4,components:1};case Ul:case Nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Tf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wp(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Tp=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jp=`#define PI 3.141592653589793
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
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
#endif`,Em=`struct PhysicalMaterial {
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,Nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Fg=`#define DISTANCE
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
}`,Lg=`#define DISTANCE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,kg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Vg=`#define LAMBERT
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
}`,Gg=`#define MATCAP
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define PHONG
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
}`,Zg=`#define PHONG
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
}`,Jg=`#define STANDARD
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
}`,$g=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,jg=`#define TOON
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
}`,Kg=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 color;
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
}`,i0=`uniform float rotation;
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
}`,s0=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Ip,alphatest_pars_fragment:Pp,aomap_fragment:Dp,aomap_pars_fragment:Fp,batching_pars_vertex:Lp,batching_vertex:Up,begin_vertex:Np,beginnormal_vertex:Bp,bsdfs:Op,iridescence_fragment:zp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Qp,displacementmap_pars_vertex:jp,displacementmap_vertex:Kp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:_m,envmap_vertex:cm,fog_vertex:lm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:fm,gradientmap_pars_fragment:dm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:xm,lights_toon_fragment:ym,lights_toon_pars_fragment:vm,lights_phong_fragment:Mm,lights_phong_pars_fragment:bm,lights_physical_fragment:Sm,lights_physical_pars_fragment:Em,lights_fragment_begin:wm,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Pm,map_fragment:Dm,map_pars_fragment:Fm,map_particle_fragment:Lm,map_particle_pars_fragment:Um,metalnessmap_fragment:Nm,metalnessmap_pars_fragment:Bm,morphinstance_vertex:Om,morphcolor_vertex:zm,morphnormal_vertex:km,morphtarget_pars_vertex:Hm,morphtarget_vertex:Vm,normal_fragment_begin:Gm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:jm,opaque_fragment:Km,packing:tg,premultiplied_alpha_fragment:eg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:og,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:cg,shadowmap_vertex:lg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:fg,skinning_vertex:dg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:xg,tonemapping_pars_fragment:_g,transmission_fragment:yg,transmission_pars_fragment:vg,uv_pars_fragment:Mg,uv_pars_vertex:bg,uv_vertex:Sg,worldpos_vertex:Eg,background_vert:wg,background_frag:Tg,backgroundCube_vert:Ag,backgroundCube_frag:Rg,cube_vert:Cg,cube_frag:Ig,depth_vert:Pg,depth_frag:Dg,distanceRGBA_vert:Fg,distanceRGBA_frag:Lg,equirect_vert:Ug,equirect_frag:Ng,linedashed_vert:Bg,linedashed_frag:Og,meshbasic_vert:zg,meshbasic_frag:kg,meshlambert_vert:Hg,meshlambert_frag:Vg,meshmatcap_vert:Gg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:qg,meshphong_vert:Yg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:$g,meshtoon_vert:Qg,meshtoon_frag:jg,points_vert:Kg,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},xt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ui={basic:{uniforms:mn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:mn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ie(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:mn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:mn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:mn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new ie(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:mn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:mn([xt.points,xt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:mn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:mn([xt.common,xt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:mn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:mn([xt.sprite,xt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:mn([xt.common,xt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:mn([xt.lights,xt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};ui.physical={uniforms:mn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var pc={r:0,b:0,g:0},ds=new Kn,r0=new Ie;function o0(i,t,e,n,s,r,a){let o=new ie(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1,b=g(v);b===null?p(o,c):b&&b.isColor&&(p(b,1),_=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){let b=g(_);b&&(b.isCubeTexture||b.mapping===Kr)?(h===void 0&&(h=new me(new kn(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:fs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ds.copy(_.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(ds)),h.material.toneMapped=ve.getTransfer(b.colorSpace)!==Ce,(u!==b||f!==b.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new me(new Xr(2,2),new ti({name:"BackgroundMaterial",uniforms:fs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ve.getTransfer(b.colorSpace)!==Ce,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(pc,Wl(i)),n.buffers.color.setClear(pc.r,pc.g,pc.b,_,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:x,addToRenderList:m,dispose:y}}function a0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(M,R,F,z,B){let q=!1,H=u(z,F,R);r!==H&&(r=H,l(r.object)),q=d(M,z,F,B),q&&g(M,z,F,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(M,R,F,z),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,R,F){let z=F.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let q=B[R.id];q===void 0&&(q={},B[R.id]=q);let H=q[z];return H===void 0&&(H=f(c()),q[z]=H),H}function f(M){let R=[],F=[],z=[];for(let B=0;B<e;B++)R[B]=0,F[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:z,object:M,attributes:{},index:null}}function d(M,R,F,z){let B=r.attributes,q=R.attributes,H=0,tt=F.getAttributes();for(let G in tt)if(tt[G].location>=0){let Z=B[G],ot=q[G];if(ot===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),Z===void 0||Z.attribute!==ot||ot&&Z.data!==ot.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function g(M,R,F,z){let B={},q=R.attributes,H=0,tt=F.getAttributes();for(let G in tt)if(tt[G].location>=0){let Z=q[G];Z===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));let ot={};ot.attribute=Z,Z&&Z.data&&(ot.data=Z.data),B[G]=ot,H++}r.attributes=B,r.attributesNum=H,r.index=z}function x(){let M=r.newAttributes;for(let R=0,F=M.length;R<F;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){let F=r.newAttributes,z=r.enabledAttributes,B=r.attributeDivisors;F[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),B[M]!==R&&(i.vertexAttribDivisor(M,R),B[M]=R)}function y(){let M=r.newAttributes,R=r.enabledAttributes;for(let F=0,z=R.length;F<z;F++)R[F]!==M[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function v(M,R,F,z,B,q,H){H===!0?i.vertexAttribIPointer(M,R,F,B,q):i.vertexAttribPointer(M,R,F,z,B,q)}function _(M,R,F,z){x();let B=z.attributes,q=F.getAttributes(),H=R.defaultAttributeValues;for(let tt in q){let G=q[tt];if(G.location>=0){let st=B[tt];if(st===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){let Z=st.normalized,ot=st.itemSize,at=t.get(st);if(at===void 0)continue;let _t=at.buffer,Vt=at.type,kt=at.bytesPerElement,$=Vt===i.INT||Vt===i.UNSIGNED_INT||st.gpuType===Fa;if(st.isInterleavedBufferAttribute){let N=st.data,L=N.stride,W=st.offset;if(N.isInstancedInterleavedBuffer){for(let Y=0;Y<G.locationSize;Y++)p(G.location+Y,N.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let Y=0;Y<G.locationSize;Y++)m(G.location+Y);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Y=0;Y<G.locationSize;Y++)v(G.location+Y,ot/G.locationSize,Vt,Z,L*kt,(W+ot/G.locationSize*Y)*kt,$)}else{if(st.isInstancedBufferAttribute){for(let N=0;N<G.locationSize;N++)p(G.location+N,st.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let N=0;N<G.locationSize;N++)m(G.location+N);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let N=0;N<G.locationSize;N++)v(G.location+N,ot/G.locationSize,Vt,Z,ot*kt,ot/G.locationSize*N*kt,$)}}else if(H!==void 0){let Z=H[tt];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(G.location,Z);break;case 3:i.vertexAttrib3fv(G.location,Z);break;case 4:i.vertexAttrib4fv(G.location,Z);break;default:i.vertexAttrib1fv(G.location,Z)}}}}y()}function b(){C();for(let M in n){let R=n[M];for(let F in R){let z=R[F];for(let B in z)h(z[B].object),delete z[B];delete R[F]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;let R=n[M.id];for(let F in R){let z=R[F];for(let B in z)h(z[B].object),delete z[B];delete R[F]}delete n[M.id]}function T(M){for(let R in n){let F=n[R];if(F[M.id]===void 0)continue;let z=F[M.id];for(let B in z)h(z[B].object),delete z[B];delete F[M.id]}}function C(){E(),a=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function c0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function l0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let C=T===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ei&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ni&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:b,maxSamples:S}}function h0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ke,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,v=y*4,_=p.clippingState||null;c.value=_,_=h(g,f,v,d);for(let b=0;b!==v;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=d;v!==x;++v,_+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function u0(i){let t=new WeakMap;function e(a,o){return o===Ia?a.mapping=hs:o===Pa&&(a.mapping=us),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ia||o===Pa)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ta(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ir=4,nf=[.125,.215,.35,.446,.526,.582],gs=20,Jl=new $r,sf=new ie,$l=null,Ql=0,jl=0,Kl=!1,ms=(1+Math.sqrt(5))/2,nr=1/ms,rf=[new U(-ms,nr,0),new U(ms,nr,0),new U(-nr,0,ms),new U(nr,0,ms),new U(0,ms,-nr),new U(0,ms,nr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],f0=new U,xc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=f0}=r;$l=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($l,Ql,jl),this._renderer.xr.enabled=Kl,t.scissorTest=!1,mc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$l=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Ks,format:Vn,colorSpace:rs,depthBuffer:!1},s=of(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(r)),this._blurMaterial=p0(r,t,e)}return s}_compileMaterial(t){let e=new me(this._lodPlanes[0],t);this._renderer.compile(e,Jl)}_sceneToCubeUV(t,e,n,s,r){let c=new dn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(sf),u.toneMapping=Ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new cn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),m=new me(new kn,x),p=!1,y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,p=!0):(x.color.copy(sf),p=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));let b=this._cubeSize;mc(s,_*b,v>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;mc(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Jl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rf[(s-r-1)%rf.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new me(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):gs;m>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);let p=[],y=0;for(let T=0;T<gs;++T){let C=T/x,E=Math.exp(-C*C/2);p.push(E),T===0?y+=E:T<m&&(y+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let _=this._sizeLods[s],b=3*_*(s>v-ir?s-v+ir:0),S=4*(this._cubeSize-_);mc(e,b,S,3*_,2*_),c.setRenderTarget(e),c.render(u,Jl)}};function d0(i){let t=[],e=[],n=[],s=i,r=i-ir+1+nf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ir?c=nf[a-i+ir-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*d),v=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let S=0;S<d;S++){let T=S%3*2/3-1,C=S>2?0:-1,E=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(E,x*g*S),v.set(f,m*g*S);let M=[S,S,S,S,S,S];_.set(M,p*g*S)}let b=new en;b.setAttribute("position",new Ze(y,x)),b.setAttribute("uv",new Ze(v,m)),b.setAttribute("faceIndex",new Ze(_,p)),t.push(b),s>ir&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function of(i,t,e){let n=new ci(i,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function p0(i,t,e){let n=new Float32Array(gs),s=new U(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lh(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function af(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function cf(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}function m0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ia||c===Pa,h=c===hs||c===us;if(l||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new xc(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new xc(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function g0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function x0(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let y=d.array;x=d.version;for(let v=0,_=y.length;v<_;v+=3){let b=y[v+0],S=y[v+1],T=y[v+2];f.push(b,S,S,T,T,b)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let b=v+0,S=v+1,T=v+2;f.push(b,S,S,T,T,b)}}else return;let m=new(Gl(f)?Cr:Rr)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function _0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*x[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function y0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function v0(i,t,e){let n=new WeakMap,s=new We;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=o.attributes.position.count*v,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*b*4*u),T=new Tr(S,_,b,u);T.type=ni,T.needsUpdate=!0;let C=v*4;for(let M=0;M<u;M++){let R=m[M],F=p[M],z=y[M],B=_*b*4*M;for(let q=0;q<R.count;q++){let H=q*C;d===!0&&(s.fromBufferAttribute(R,q),S[B+H+0]=s.x,S[B+H+1]=s.y,S[B+H+2]=s.z,S[B+H+3]=0),g===!0&&(s.fromBufferAttribute(F,q),S[B+H+4]=s.x,S[B+H+5]=s.y,S[B+H+6]=s.z,S[B+H+7]=0),x===!0&&(s.fromBufferAttribute(z,q),S[B+H+8]=s.x,S[B+H+9]=s.y,S[B+H+10]=s.z,S[B+H+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new Ft(_,b)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function M0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Af=new wn,lf=new Ur(1,1),Rf=new Tr,Cf=new jo,If=new Pr,hf=[],uf=[],ff=new Float32Array(16),df=new Float32Array(9),pf=new Float32Array(4);function rr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hf[s];if(r===void 0&&(r=new Float32Array(s),hf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yc(i,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function b0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function E0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function T0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),sn(e,n)}}function A0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;df.set(n),i.uniformMatrix3fv(this.addr,!1,df),sn(e,n)}}function R0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;ff.set(n),i.uniformMatrix4fv(this.addr,!1,ff),sn(e,n)}}function C0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function P0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function F0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function N0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function B0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lf.compareFunction=Hl,r=lf):r=Af,e.setTexture2D(t||r,s)}function O0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cf,s)}function z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||If,s)}function k0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rf,s)}function H0(i){switch(i){case 5126:return b0;case 35664:return S0;case 35665:return E0;case 35666:return w0;case 35674:return T0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return I0;case 35668:case 35672:return P0;case 35669:case 35673:return D0;case 5125:return F0;case 36294:return L0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}function V0(i,t){i.uniform1fv(this.addr,t)}function G0(i,t){let e=rr(t,this.size,2);i.uniform2fv(this.addr,e)}function W0(i,t){let e=rr(t,this.size,3);i.uniform3fv(this.addr,e)}function X0(i,t){let e=rr(t,this.size,4);i.uniform4fv(this.addr,e)}function q0(i,t){let e=rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y0(i,t){let e=rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Z0(i,t){let e=rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function J0(i,t){i.uniform1iv(this.addr,t)}function $0(i,t){i.uniform2iv(this.addr,t)}function Q0(i,t){i.uniform3iv(this.addr,t)}function j0(i,t){i.uniform4iv(this.addr,t)}function K0(i,t){i.uniform1uiv(this.addr,t)}function tx(i,t){i.uniform2uiv(this.addr,t)}function ex(i,t){i.uniform3uiv(this.addr,t)}function nx(i,t){i.uniform4uiv(this.addr,t)}function ix(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Af,r[a])}function sx(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Cf,r[a])}function rx(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||If,r[a])}function ox(i,t,e){let n=this.cache,s=t.length,r=yc(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Rf,r[a])}function ax(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return $0;case 35668:case 35672:return Q0;case 35669:case 35673:return j0;case 5125:return K0;case 36294:return tx;case 36295:return ex;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}var eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H0(e.type)}},nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ax(e.type)}},ih=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},th=/(\w+)(\])?(\[|\.)?/g;function mf(i,t){i.seq.push(t),i.map[t.id]=t}function cx(i,t,e){let n=i.name,s=n.length;for(th.lastIndex=0;;){let r=th.exec(n),a=th.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){mf(e,l===void 0?new eh(o,i,t):new nh(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ih(o),mf(e,u)),e=u}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);cx(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lx=37297,hx=0;function ux(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var xf=new te;function fx(i){ve._getMatrix(xf,ve.workingColorSpace,i);let t=`mat3( ${xf.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case Sr:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _f(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ux(i.getShaderSource(t),o)}else return r}function dx(i,t){let e=fx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function px(i,t){let e;switch(t){case Iu:e="Linear";break;case Pu:e="Reinhard";break;case Du:e="Cineon";break;case Fu:e="ACESFilmic";break;case Uu:e="AgX";break;case Ca:e="Neutral";break;case Lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gc=new U;function mx(){ve.getLuminanceCoefficients(gc);let i=gc.x.toFixed(4),t=gc.y.toFixed(4),e=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function xx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _x(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function oo(i){return i!==""}function yf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(i){return i.replace(yx,Mx)}var vx=new Map;function Mx(i,t){let e=re[t];if(e===void 0){let n=vx.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sh(e)}var bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(i){return i.replace(bx,Sx)}function Sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ex(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ma?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(t="SHADOWMAP_TYPE_VSM"),t}function wx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function Ax(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pl:t="ENVMAP_BLENDING_MULTIPLY";break;case Ru:t="ENVMAP_BLENDING_MIX";break;case Cu:t="ENVMAP_BLENDING_ADD";break}return t}function Rx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Ex(e),l=wx(e),h=Tx(e),u=Ax(e),f=Rx(e),d=gx(e),g=xx(r),x=s.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(oo).join(`
`),p.length>0&&(p+=`
`)):(m=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),p=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?re.tonemapping_pars_fragment:"",e.toneMapping!==Ti?px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,dx("linearToOutputTexel",e.outputColorSpace),mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),a=sh(a),a=yf(a,e),a=vf(a,e),o=sh(o),o=yf(o,e),o=vf(o,e),a=Mf(a),o=Mf(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+a,_=y+p+o,b=gf(s,s.VERTEX_SHADER,v),S=gf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(R){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(b)||"",B=s.getShaderInfoLog(S)||"",q=F.trim(),H=z.trim(),tt=B.trim(),G=!0,st=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{let Z=_f(s,b,"vertex"),ot=_f(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+q+`
`+Z+`
`+ot)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||tt==="")&&(st=!1);st&&(R.diagnostics={runnable:G,programLog:q,vertexShader:{log:H,prefix:m},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(b),s.deleteShader(S),C=new sr(s,x),E=_x(s,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,lx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var Ix=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new oh(t),e.set(t,n)),n}},oh=class{constructor(t){this.id=Ix++,this.code=t,this.usedTimes=0}};function Px(i,t,e,n,s,r,a){let o=new Ws,c=new rh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,R,F,z){let B=F.fog,q=z.geometry,H=E.isMeshStandardMaterial?F.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),G=tt&&tt.mapping===Kr?tt.image.height:null,st=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let Z=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=Z!==void 0?Z.length:0,at=0;q.morphAttributes.position!==void 0&&(at=1),q.morphAttributes.normal!==void 0&&(at=2),q.morphAttributes.color!==void 0&&(at=3);let _t,Vt,kt,$;if(st){let Re=ui[st];_t=Re.vertexShader,Vt=Re.fragmentShader}else _t=E.vertexShader,Vt=E.fragmentShader,c.update(E),kt=c.getVertexShaderID(E),$=c.getFragmentShaderID(E);let N=i.getRenderTarget(),L=i.state.buffers.depth.getReversed(),W=z.isInstancedMesh===!0,Y=z.isBatchedMesh===!0,k=!!E.map,pt=!!E.matcap,D=!!tt,Wt=!!E.aoMap,At=!!E.lightMap,Rt=!!E.bumpMap,Tt=!!E.normalMap,Ee=!!E.displacementMap,yt=!!E.emissiveMap,Xt=!!E.metalnessMap,Qe=!!E.roughnessMap,ke=E.anisotropy>0,P=E.clearcoat>0,w=E.dispersion>0,J=E.iridescence>0,nt=E.sheen>0,ct=E.transmission>0,et=ke&&!!E.anisotropyMap,Ht=P&&!!E.clearcoatMap,mt=P&&!!E.clearcoatNormalMap,Ut=P&&!!E.clearcoatRoughnessMap,Nt=J&&!!E.iridescenceMap,ft=J&&!!E.iridescenceThicknessMap,St=nt&&!!E.sheenColorMap,Zt=nt&&!!E.sheenRoughnessMap,Bt=!!E.specularMap,Mt=!!E.specularColorMap,ne=!!E.specularIntensityMap,O=ct&&!!E.transmissionMap,dt=ct&&!!E.thicknessMap,gt=!!E.gradientMap,It=!!E.alphaMap,ht=E.alphaTest>0,rt=!!E.alphaHash,Dt=!!E.extensions,jt=Ti;E.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(jt=i.toneMapping);let Ne={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:_t,fragmentShader:Vt,defines:E.defines,customVertexShaderID:kt,customFragmentShaderID:$,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Y,batchingColor:Y&&z._colorsTexture!==null,instancing:W,instancingColor:W&&z.instanceColor!==null,instancingMorph:W&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:rs,alphaToCoverage:!!E.alphaToCoverage,map:k,matcap:pt,envMap:D,envMapMode:D&&tt.mapping,envMapCubeUVHeight:G,aoMap:Wt,lightMap:At,bumpMap:Rt,normalMap:Tt,displacementMap:f&&Ee,emissiveMap:yt,normalMapObjectSpace:Tt&&E.normalMapType===zu,normalMapTangentSpace:Tt&&E.normalMapType===kl,metalnessMap:Xt,roughnessMap:Qe,anisotropy:ke,anisotropyMap:et,clearcoat:P,clearcoatMap:Ht,clearcoatNormalMap:mt,clearcoatRoughnessMap:Ut,dispersion:w,iridescence:J,iridescenceMap:Nt,iridescenceThicknessMap:ft,sheen:nt,sheenColorMap:St,sheenRoughnessMap:Zt,specularMap:Bt,specularColorMap:Mt,specularIntensityMap:ne,transmission:ct,transmissionMap:O,thicknessMap:dt,gradientMap:gt,opaque:E.transparent===!1&&E.blending===is&&E.alphaToCoverage===!1,alphaMap:It,alphaTest:ht,alphaHash:rt,combine:E.combine,mapUv:k&&x(E.map.channel),aoMapUv:Wt&&x(E.aoMap.channel),lightMapUv:At&&x(E.lightMap.channel),bumpMapUv:Rt&&x(E.bumpMap.channel),normalMapUv:Tt&&x(E.normalMap.channel),displacementMapUv:Ee&&x(E.displacementMap.channel),emissiveMapUv:yt&&x(E.emissiveMap.channel),metalnessMapUv:Xt&&x(E.metalnessMap.channel),roughnessMapUv:Qe&&x(E.roughnessMap.channel),anisotropyMapUv:et&&x(E.anisotropyMap.channel),clearcoatMapUv:Ht&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:mt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:St&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&x(E.sheenRoughnessMap.channel),specularMapUv:Bt&&x(E.specularMap.channel),specularColorMapUv:Mt&&x(E.specularColorMap.channel),specularIntensityMapUv:ne&&x(E.specularIntensityMap.channel),transmissionMapUv:O&&x(E.transmissionMap.channel),thicknessMapUv:dt&&x(E.thicknessMap.channel),alphaMapUv:It&&x(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Tt||ke),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(k||It),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:L,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:at,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,decodeVideoTexture:k&&E.map.isVideoTexture===!0&&ve.getTransfer(E.map.colorSpace)===Ce,decodeVideoTextureEmissive:yt&&E.emissiveMap.isVideoTexture===!0&&ve.getTransfer(E.emissiveMap.colorSpace)===Ce,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tn,flipSided:E.side===yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Dt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&E.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let R in E.defines)M.push(R),M.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(y(M,E),v(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){let M=g[E.type],R;if(M){let F=ui[M];R=$u.clone(F.uniforms)}else R=E.uniforms;return R}function b(E,M){let R;for(let F=0,z=h.length;F<z;F++){let B=h[F];if(B.cacheKey===M){R=B,++R.usedTimes;break}}return R===void 0&&(R=new Cx(i,M,E,r),h.push(R)),R}function S(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function T(E){c.remove(E)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:C}}function Dx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ef(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,x,m){let p=a(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Fx),n.length>1&&n.sort(f||Sf),s.length>1&&s.sort(f||Sf)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Lx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ef,i.set(n,[a])):s>=r.length?(a=new Ef,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ux(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new ie};break;case"SpotLight":e={position:new U,direction:new U,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Nx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Bx=0;function Ox(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zx(i){let t=new Ux,e=Nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new Ie,a=new Ie;function o(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,y=0,v=0,_=0,b=0,S=0,T=0;l.sort(Ox);for(let E=0,M=l.length;E<M;E++){let R=l[E],F=R.color,z=R.intensity,B=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=F.r*z,u+=F.g*z,f+=F.b*z;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],z);T++}else if(R.isDirectionalLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let tt=R.shadow,G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=R.shadow.matrix,y++}n.directional[d]=H,d++}else if(R.isSpotLight){let H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(F).multiplyScalar(z),H.distance=B,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[x]=H;let tt=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,tt.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[x]=tt.matrix,R.castShadow){let G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=q,_++}x++}else if(R.isRectAreaLight){let H=t.get(R);H.color.copy(F).multiplyScalar(z),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){let H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let tt=R.shadow,G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=H,g++}else if(R.isHemisphereLight){let H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(z),H.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==b||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=b,C.numLightProbes=T,n.version=Bx++)}function c(l,h){let u=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let v=l[p];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function wf(i){let t=new zx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function kx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new wf(i),t.set(s,[o])):r>=a.length?(o=new wf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
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
}`;function Gx(i,t,e){let n=new qs,s=new Ft,r=new Ft,a=new We,o=new la({depthPacking:Ou}),c=new ha,l={},h=e.maxTextureSize,u={[bi]:yn,[yn]:bi,[Tn]:Tn},f=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Hx,fragmentShader:Vx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new en;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new me(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let p=this.type;this.render=function(S,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(wi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=p!==hi&&this.type===hi,B=p===hi&&this.type!==hi;for(let q=0,H=S.length;q<H;q++){let tt=S[q],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let st=G.getFrameExtents();if(s.multiply(st),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||z===!0||B===!0){let ot=this.type!==hi?{minFilter:En,magFilter:En}:{};G.map!==null&&G.map.dispose(),G.map=new ci(s.x,s.y,ot),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let Z=G.getViewportCount();for(let ot=0;ot<Z;ot++){let at=G.getViewport(ot);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),F.viewport(a),G.updateMatrices(tt,ot),n=G.getFrustum(),_(T,C,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===hi&&y(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,R)};function y(S,T){let C=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ci(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,C,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,C,d,x,null)}function v(S,T,C,E){let M=null,R=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)M=R;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=M.uuid,z=T.uuid,B=l[F];B===void 0&&(B={},l[F]=B);let q=B[z];q===void 0&&(q=M.clone(),B[z]=q,T.addEventListener("dispose",b)),M=q}if(M.visible=T.visible,M.wireframe=T.wireframe,E===hi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=i.properties.get(M);F.light=C}return M}function _(S,T,C,E,M){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===hi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let z=t.update(S),B=S.material;if(Array.isArray(B)){let q=z.groups;for(let H=0,tt=q.length;H<tt;H++){let G=q[H],st=B[G.materialIndex];if(st&&st.visible){let Z=v(S,st,E,M);S.onBeforeShadow(i,S,T,C,z,Z,G),i.renderBufferDirect(C,null,z,Z,S,G),S.onAfterShadow(i,S,T,C,z,Z,G)}}}else if(B.visible){let q=v(S,B,E,M);S.onBeforeShadow(i,S,T,C,z,q,null),i.renderBufferDirect(C,null,z,q,S,null),S.onAfterShadow(i,S,T,C,z,q,null)}}let F=S.children;for(let z=0,B=F.length;z<B;z++)_(F[z],T,C,E,M)}function b(S){S.target.removeEventListener("dispose",b);for(let C in l){let E=l[C],M=S.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var Wx={[ba]:Sa,[Ea]:Aa,[wa]:Ra,[ss]:Ta,[Sa]:ba,[Aa]:Ea,[Ra]:wa,[Ta]:ss};function Xx(i,t){function e(){let O=!1,dt=new We,gt=null,It=new We(0,0,0,0);return{setMask:function(ht){gt!==ht&&!O&&(i.colorMask(ht,ht,ht,ht),gt=ht)},setLocked:function(ht){O=ht},setClear:function(ht,rt,Dt,jt,Ne){Ne===!0&&(ht*=jt,rt*=jt,Dt*=jt),dt.set(ht,rt,Dt,jt),It.equals(dt)===!1&&(i.clearColor(ht,rt,Dt,jt),It.copy(dt))},reset:function(){O=!1,gt=null,It.set(-1,0,0,0)}}}function n(){let O=!1,dt=!1,gt=null,It=null,ht=null;return{setReversed:function(rt){if(dt!==rt){let Dt=t.get("EXT_clip_control");rt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),dt=rt;let jt=ht;ht=null,this.setClear(jt)}},getReversed:function(){return dt},setTest:function(rt){rt?N(i.DEPTH_TEST):L(i.DEPTH_TEST)},setMask:function(rt){gt!==rt&&!O&&(i.depthMask(rt),gt=rt)},setFunc:function(rt){if(dt&&(rt=Wx[rt]),It!==rt){switch(rt){case ba:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=rt}},setLocked:function(rt){O=rt},setClear:function(rt){ht!==rt&&(dt&&(rt=1-rt),i.clearDepth(rt),ht=rt)},reset:function(){O=!1,gt=null,It=null,ht=null,dt=!1}}}function s(){let O=!1,dt=null,gt=null,It=null,ht=null,rt=null,Dt=null,jt=null,Ne=null;return{setTest:function(Re){O||(Re?N(i.STENCIL_TEST):L(i.STENCIL_TEST))},setMask:function(Re){dt!==Re&&!O&&(i.stencilMask(Re),dt=Re)},setFunc:function(Re,mi,ai){(gt!==Re||It!==mi||ht!==ai)&&(i.stencilFunc(Re,mi,ai),gt=Re,It=mi,ht=ai)},setOp:function(Re,mi,ai){(rt!==Re||Dt!==mi||jt!==ai)&&(i.stencilOp(Re,mi,ai),rt=Re,Dt=mi,jt=ai)},setLocked:function(Re){O=Re},setClear:function(Re){Ne!==Re&&(i.clearStencil(Re),Ne=Re)},reset:function(){O=!1,dt=null,gt=null,It=null,ht=null,rt=null,Dt=null,jt=null,Ne=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,b=null,S=null,T=new ie(0,0,0),C=0,E=!1,M=null,R=null,F=null,z=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,tt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=tt>=2);let st=null,Z={},ot=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),_t=new We().fromArray(ot),Vt=new We().fromArray(at);function kt(O,dt,gt,It){let ht=new Uint8Array(4),rt=i.createTexture();i.bindTexture(O,rt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<gt;Dt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(dt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return rt}let $={};$[i.TEXTURE_2D]=kt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(i.DEPTH_TEST),a.setFunc(ss),Rt(!1),Tt(Tl),N(i.CULL_FACE),Wt(wi);function N(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function L(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function W(O,dt){return u[O]!==dt?(i.bindFramebuffer(O,dt),u[O]=dt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Y(O,dt){let gt=d,It=!1;if(O){gt=f.get(dt),gt===void 0&&(gt=[],f.set(dt,gt));let ht=O.textures;if(gt.length!==ht.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Dt=ht.length;rt<Dt;rt++)gt[rt]=i.COLOR_ATTACHMENT0+rt;gt.length=ht.length,It=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,It=!0);It&&i.drawBuffers(gt)}function k(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let pt={[Bi]:i.FUNC_ADD,[uu]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};pt[du]=i.MIN,pt[pu]=i.MAX;let D={[mu]:i.ZERO,[gu]:i.ONE,[xu]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Su]:i.SRC_ALPHA_SATURATE,[Mu]:i.DST_COLOR,[yu]:i.DST_ALPHA,[_u]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[vu]:i.ONE_MINUS_DST_ALPHA,[Eu]:i.CONSTANT_COLOR,[wu]:i.ONE_MINUS_CONSTANT_COLOR,[Tu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(O,dt,gt,It,ht,rt,Dt,jt,Ne,Re){if(O===wi){x===!0&&(L(i.BLEND),x=!1);return}if(x===!1&&(N(i.BLEND),x=!0),O!==hu){if(O!==m||Re!==E){if((p!==Bi||_!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,_=Bi),Re)switch(O){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Il:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,v=null,b=null,S=null,T.set(0,0,0),C=0,m=O,E=Re}return}ht=ht||dt,rt=rt||gt,Dt=Dt||It,(dt!==p||ht!==_)&&(i.blendEquationSeparate(pt[dt],pt[ht]),p=dt,_=ht),(gt!==y||It!==v||rt!==b||Dt!==S)&&(i.blendFuncSeparate(D[gt],D[It],D[rt],D[Dt]),y=gt,v=It,b=rt,S=Dt),(jt.equals(T)===!1||Ne!==C)&&(i.blendColor(jt.r,jt.g,jt.b,Ne),T.copy(jt),C=Ne),m=O,E=!1}function At(O,dt){O.side===Tn?L(i.CULL_FACE):N(i.CULL_FACE);let gt=O.side===yn;dt&&(gt=!gt),Rt(gt),O.blending===is&&O.transparent===!1?Wt(wi):Wt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let It=O.stencilWrite;o.setTest(It),It&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):L(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function Tt(O){O!==cu?(N(i.CULL_FACE),O!==R&&(O===Tl?i.cullFace(i.BACK):O===lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):L(i.CULL_FACE),R=O}function Ee(O){O!==F&&(H&&i.lineWidth(O),F=O)}function yt(O,dt,gt){O?(N(i.POLYGON_OFFSET_FILL),(z!==dt||B!==gt)&&(i.polygonOffset(dt,gt),z=dt,B=gt)):L(i.POLYGON_OFFSET_FILL)}function Xt(O){O?N(i.SCISSOR_TEST):L(i.SCISSOR_TEST)}function Qe(O){O===void 0&&(O=i.TEXTURE0+q-1),st!==O&&(i.activeTexture(O),st=O)}function ke(O,dt,gt){gt===void 0&&(st===null?gt=i.TEXTURE0+q-1:gt=st);let It=Z[gt];It===void 0&&(It={type:void 0,texture:void 0},Z[gt]=It),(It.type!==O||It.texture!==dt)&&(st!==gt&&(i.activeTexture(gt),st=gt),i.bindTexture(O,dt||$[O]),It.type=O,It.texture=dt)}function P(){let O=Z[st];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ht(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(O){_t.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),_t.copy(O))}function Zt(O){Vt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Vt.copy(O))}function Bt(O,dt){let gt=l.get(dt);gt===void 0&&(gt=new WeakMap,l.set(dt,gt));let It=gt.get(O);It===void 0&&(It=i.getUniformBlockIndex(dt,O.name),gt.set(O,It))}function Mt(O,dt){let It=l.get(dt).get(O);c.get(dt)!==It&&(i.uniformBlockBinding(dt,It,O.__bindingPointIndex),c.set(dt,It))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,Z={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,b=null,S=null,T=new ie(0,0,0),C=0,E=!1,M=null,R=null,F=null,z=null,B=null,_t.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:N,disable:L,bindFramebuffer:W,drawBuffers:Y,useProgram:k,setBlending:Wt,setMaterial:At,setFlipSided:Rt,setCullFace:Tt,setLineWidth:Ee,setPolygonOffset:yt,setScissorTest:Xt,activeTexture:Qe,bindTexture:ke,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:J,texImage2D:Nt,texImage3D:ft,updateUBOMapping:Bt,uniformBlockBinding:Mt,texStorage2D:mt,texStorage3D:Ut,texSubImage2D:nt,texSubImage3D:ct,compressedTexSubImage2D:et,compressedTexSubImage3D:Ht,scissor:St,viewport:Zt,reset:ne}}function qx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ft,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return d?new OffscreenCanvas(P,w):wr("canvas")}function x(P,w,J){let nt=1,ct=ke(P);if((ct.width>J||ct.height>J)&&(nt=J/Math.max(ct.width,ct.height)),nt<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let et=Math.floor(nt*ct.width),Ht=Math.floor(nt*ct.height);u===void 0&&(u=g(et,Ht));let mt=w?g(et,Ht):u;return mt.width=et,mt.height=Ht,mt.getContext("2d").drawImage(P,0,0,et,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+et+"x"+Ht+")."),mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,w,J,nt,ct=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=w;if(w===i.RED&&(J===i.FLOAT&&(et=i.R32F),J===i.HALF_FLOAT&&(et=i.R16F),J===i.UNSIGNED_BYTE&&(et=i.R8)),w===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(et=i.R8UI),J===i.UNSIGNED_SHORT&&(et=i.R16UI),J===i.UNSIGNED_INT&&(et=i.R32UI),J===i.BYTE&&(et=i.R8I),J===i.SHORT&&(et=i.R16I),J===i.INT&&(et=i.R32I)),w===i.RG&&(J===i.FLOAT&&(et=i.RG32F),J===i.HALF_FLOAT&&(et=i.RG16F),J===i.UNSIGNED_BYTE&&(et=i.RG8)),w===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(et=i.RG8UI),J===i.UNSIGNED_SHORT&&(et=i.RG16UI),J===i.UNSIGNED_INT&&(et=i.RG32UI),J===i.BYTE&&(et=i.RG8I),J===i.SHORT&&(et=i.RG16I),J===i.INT&&(et=i.RG32I)),w===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(et=i.RGB8UI),J===i.UNSIGNED_SHORT&&(et=i.RGB16UI),J===i.UNSIGNED_INT&&(et=i.RGB32UI),J===i.BYTE&&(et=i.RGB8I),J===i.SHORT&&(et=i.RGB16I),J===i.INT&&(et=i.RGB32I)),w===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),J===i.UNSIGNED_INT&&(et=i.RGBA32UI),J===i.BYTE&&(et=i.RGBA8I),J===i.SHORT&&(et=i.RGBA16I),J===i.INT&&(et=i.RGBA32I)),w===i.RGB&&(J===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),w===i.RGBA){let Ht=ct?Sr:ve.getTransfer(nt);J===i.FLOAT&&(et=i.RGBA32F),J===i.HALF_FLOAT&&(et=i.RGBA16F),J===i.UNSIGNED_BYTE&&(et=Ht===Ce?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(P,w){let J;return P?w===null||w===Gi||w===tr?J=i.DEPTH24_STENCIL8:w===ni?J=i.DEPTH32F_STENCIL8:w===js&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gi||w===tr?J=i.DEPTH_COMPONENT24:w===ni?J=i.DEPTH_COMPONENT32F:w===js&&(J=i.DEPTH_COMPONENT16),J}function b(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==En&&P.minFilter!==jn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function S(P){let w=P.target;w.removeEventListener("dispose",S),C(w),w.isVideoTexture&&h.delete(w)}function T(P){let w=P.target;w.removeEventListener("dispose",T),M(w)}function C(P){let w=n.get(P);if(w.__webglInit===void 0)return;let J=P.source,nt=f.get(J);if(nt){let ct=nt[w.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(P),Object.keys(nt).length===0&&f.delete(J)}n.remove(P)}function E(P){let w=n.get(P);i.deleteTexture(w.__webglTexture);let J=P.source,nt=f.get(J);delete nt[w.__cacheKey],a.memory.textures--}function M(P){let w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(w.__webglFramebuffer[nt]))for(let ct=0;ct<w.__webglFramebuffer[nt].length;ct++)i.deleteFramebuffer(w.__webglFramebuffer[nt][ct]);else i.deleteFramebuffer(w.__webglFramebuffer[nt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[nt])}else{if(Array.isArray(w.__webglFramebuffer))for(let nt=0;nt<w.__webglFramebuffer.length;nt++)i.deleteFramebuffer(w.__webglFramebuffer[nt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let nt=0;nt<w.__webglColorRenderbuffer.length;nt++)w.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[nt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let J=P.textures;for(let nt=0,ct=J.length;nt<ct;nt++){let et=n.get(J[nt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(J[nt])}n.remove(P)}let R=0;function F(){R=0}function z(){let P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function B(P){let w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function q(P,w){let J=n.get(P);if(P.isVideoTexture&&Xt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){let nt=P.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(J,P,w);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+w)}function H(P,w){let J=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){$(J,P,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+w)}function tt(P,w){let J=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){$(J,P,w);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+w)}function G(P,w){let J=n.get(P);if(P.version>0&&J.__version!==P.version){N(J,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+w)}let st={[qo]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},Z={[En]:i.NEAREST,[Nu]:i.NEAREST_MIPMAP_NEAREST,[to]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Da]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},ot={[ku]:i.NEVER,[qu]:i.ALWAYS,[Hu]:i.LESS,[Hl]:i.LEQUAL,[Vu]:i.EQUAL,[Xu]:i.GEQUAL,[Gu]:i.GREATER,[Wu]:i.NOTEQUAL};function at(P,w){if(w.type===ni&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===jn||w.magFilter===Da||w.magFilter===to||w.magFilter===Vi||w.minFilter===jn||w.minFilter===Da||w.minFilter===to||w.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,st[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,st[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,st[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Z[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ot[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===En||w.minFilter!==to&&w.minFilter!==Vi||w.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function _t(P,w){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",S));let nt=w.source,ct=f.get(nt);ct===void 0&&(ct={},f.set(nt,ct));let et=B(w);if(et!==P.__cacheKey){ct[et]===void 0&&(ct[et]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ct[et].usedTimes++;let Ht=ct[P.__cacheKey];Ht!==void 0&&(ct[P.__cacheKey].usedTimes--,Ht.usedTimes===0&&E(w)),P.__cacheKey=et,P.__webglTexture=ct[et].texture}return J}function Vt(P,w,J){return Math.floor(Math.floor(P/J)/w)}function kt(P,w,J,nt){let et=P.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,J,nt,w.data);else{et.sort((ft,St)=>ft.start-St.start);let Ht=0;for(let ft=1;ft<et.length;ft++){let St=et[Ht],Zt=et[ft],Bt=St.start+St.count,Mt=Vt(Zt.start,w.width,4),ne=Vt(St.start,w.width,4);Zt.start<=Bt+1&&Mt===ne&&Vt(Zt.start+Zt.count-1,w.width,4)===Mt?St.count=Math.max(St.count,Zt.start+Zt.count-St.start):(++Ht,et[Ht]=Zt)}et.length=Ht+1;let mt=i.getParameter(i.UNPACK_ROW_LENGTH),Ut=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let ft=0,St=et.length;ft<St;ft++){let Zt=et[ft],Bt=Math.floor(Zt.start/4),Mt=Math.ceil(Zt.count/4),ne=Bt%w.width,O=Math.floor(Bt/w.width),dt=Mt,gt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,ne,O,dt,gt,J,nt,w.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function $(P,w,J){let nt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(nt=i.TEXTURE_3D);let ct=_t(P,w),et=w.source;e.bindTexture(nt,P.__webglTexture,i.TEXTURE0+J);let Ht=n.get(et);if(et.version!==Ht.__version||ct===!0){e.activeTexture(i.TEXTURE0+J);let mt=ve.getPrimaries(ve.workingColorSpace),Ut=w.colorSpace===Ai?null:ve.getPrimaries(w.colorSpace),Nt=w.colorSpace===Ai||mt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let ft=x(w.image,!1,s.maxTextureSize);ft=Qe(w,ft);let St=r.convert(w.format,w.colorSpace),Zt=r.convert(w.type),Bt=v(w.internalFormat,St,Zt,w.colorSpace,w.isVideoTexture);at(nt,w);let Mt,ne=w.mipmaps,O=w.isVideoTexture!==!0,dt=Ht.__version===void 0||ct===!0,gt=et.dataReady,It=b(w,ft);if(w.isDepthTexture)Bt=_(w.format===er,w.type),dt&&(O?e.texStorage2D(i.TEXTURE_2D,1,Bt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Bt,ft.width,ft.height,0,St,Zt,null));else if(w.isDataTexture)if(ne.length>0){O&&dt&&e.texStorage2D(i.TEXTURE_2D,It,Bt,ne[0].width,ne[0].height);for(let ht=0,rt=ne.length;ht<rt;ht++)Mt=ne[ht],O?gt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,St,Zt,Mt.data):e.texImage2D(i.TEXTURE_2D,ht,Bt,Mt.width,Mt.height,0,St,Zt,Mt.data);w.generateMipmaps=!1}else O?(dt&&e.texStorage2D(i.TEXTURE_2D,It,Bt,ft.width,ft.height),gt&&kt(w,ft,St,Zt)):e.texImage2D(i.TEXTURE_2D,0,Bt,ft.width,ft.height,0,St,Zt,ft.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Bt,ne[0].width,ne[0].height,ft.depth);for(let ht=0,rt=ne.length;ht<rt;ht++)if(Mt=ne[ht],w.format!==Vn)if(St!==null)if(O){if(gt)if(w.layerUpdates.size>0){let Dt=Zl(Mt.width,Mt.height,w.format,w.type);for(let jt of w.layerUpdates){let Ne=Mt.data.subarray(jt*Dt/Mt.data.BYTES_PER_ELEMENT,(jt+1)*Dt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,jt,Mt.width,Mt.height,1,St,Ne)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,ft.depth,St,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,Bt,Mt.width,Mt.height,ft.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,ft.depth,St,Zt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,Bt,Mt.width,Mt.height,ft.depth,0,St,Zt,Mt.data)}else{O&&dt&&e.texStorage2D(i.TEXTURE_2D,It,Bt,ne[0].width,ne[0].height);for(let ht=0,rt=ne.length;ht<rt;ht++)Mt=ne[ht],w.format!==Vn?St!==null?O?gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,St,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,Bt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?gt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,St,Zt,Mt.data):e.texImage2D(i.TEXTURE_2D,ht,Bt,Mt.width,Mt.height,0,St,Zt,Mt.data)}else if(w.isDataArrayTexture)if(O){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Bt,ft.width,ft.height,ft.depth),gt)if(w.layerUpdates.size>0){let ht=Zl(ft.width,ft.height,w.format,w.type);for(let rt of w.layerUpdates){let Dt=ft.data.subarray(rt*ht/ft.data.BYTES_PER_ELEMENT,(rt+1)*ht/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ft.width,ft.height,1,St,Zt,Dt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,St,Zt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,ft.width,ft.height,ft.depth,0,St,Zt,ft.data);else if(w.isData3DTexture)O?(dt&&e.texStorage3D(i.TEXTURE_3D,It,Bt,ft.width,ft.height,ft.depth),gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,St,Zt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,ft.width,ft.height,ft.depth,0,St,Zt,ft.data);else if(w.isFramebufferTexture){if(dt)if(O)e.texStorage2D(i.TEXTURE_2D,It,Bt,ft.width,ft.height);else{let ht=ft.width,rt=ft.height;for(let Dt=0;Dt<It;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Bt,ht,rt,0,St,Zt,null),ht>>=1,rt>>=1}}else if(ne.length>0){if(O&&dt){let ht=ke(ne[0]);e.texStorage2D(i.TEXTURE_2D,It,Bt,ht.width,ht.height)}for(let ht=0,rt=ne.length;ht<rt;ht++)Mt=ne[ht],O?gt&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,St,Zt,Mt):e.texImage2D(i.TEXTURE_2D,ht,Bt,St,Zt,Mt);w.generateMipmaps=!1}else if(O){if(dt){let ht=ke(ft);e.texStorage2D(i.TEXTURE_2D,It,Bt,ht.width,ht.height)}gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Zt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Bt,St,Zt,ft);m(w)&&p(nt),Ht.__version=et.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function N(P,w,J){if(w.image.length!==6)return;let nt=_t(P,w),ct=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+J);let et=n.get(ct);if(ct.version!==et.__version||nt===!0){e.activeTexture(i.TEXTURE0+J);let Ht=ve.getPrimaries(ve.workingColorSpace),mt=w.colorSpace===Ai?null:ve.getPrimaries(w.colorSpace),Ut=w.colorSpace===Ai||Ht===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let Nt=w.isCompressedTexture||w.image[0].isCompressedTexture,ft=w.image[0]&&w.image[0].isDataTexture,St=[];for(let rt=0;rt<6;rt++)!Nt&&!ft?St[rt]=x(w.image[rt],!0,s.maxCubemapSize):St[rt]=ft?w.image[rt].image:w.image[rt],St[rt]=Qe(w,St[rt]);let Zt=St[0],Bt=r.convert(w.format,w.colorSpace),Mt=r.convert(w.type),ne=v(w.internalFormat,Bt,Mt,w.colorSpace),O=w.isVideoTexture!==!0,dt=et.__version===void 0||nt===!0,gt=ct.dataReady,It=b(w,Zt);at(i.TEXTURE_CUBE_MAP,w);let ht;if(Nt){O&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ne,Zt.width,Zt.height);for(let rt=0;rt<6;rt++){ht=St[rt].mipmaps;for(let Dt=0;Dt<ht.length;Dt++){let jt=ht[Dt];w.format!==Vn?Bt!==null?O?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,0,0,jt.width,jt.height,Bt,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,ne,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,0,0,jt.width,jt.height,Bt,Mt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,ne,jt.width,jt.height,0,Bt,Mt,jt.data)}}}else{if(ht=w.mipmaps,O&&dt){ht.length>0&&It++;let rt=ke(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ne,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ft){O?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,St[rt].width,St[rt].height,Bt,Mt,St[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ne,St[rt].width,St[rt].height,0,Bt,Mt,St[rt].data);for(let Dt=0;Dt<ht.length;Dt++){let Ne=ht[Dt].image[rt].image;O?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,0,0,Ne.width,Ne.height,Bt,Mt,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,ne,Ne.width,Ne.height,0,Bt,Mt,Ne.data)}}else{O?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Bt,Mt,St[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ne,Bt,Mt,St[rt]);for(let Dt=0;Dt<ht.length;Dt++){let jt=ht[Dt];O?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,0,0,Bt,Mt,jt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,ne,Bt,Mt,jt.image[rt])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),et.__version=ct.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function L(P,w,J,nt,ct,et){let Ht=r.convert(J.format,J.colorSpace),mt=r.convert(J.type),Ut=v(J.internalFormat,Ht,mt,J.colorSpace),Nt=n.get(w),ft=n.get(J);if(ft.__renderTarget=w,!Nt.__hasExternalTextures){let St=Math.max(1,w.width>>et),Zt=Math.max(1,w.height>>et);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,et,Ut,St,Zt,w.depth,0,Ht,mt,null):e.texImage2D(ct,et,Ut,St,Zt,0,Ht,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),yt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ct,ft.__webglTexture,0,Ee(w)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ct,ft.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(P,w,J){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){let nt=w.depthTexture,ct=nt&&nt.isDepthTexture?nt.type:null,et=_(w.stencilBuffer,ct),Ht=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=Ee(w);yt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,et,w.width,w.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,et,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,et,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ht,i.RENDERBUFFER,P)}else{let nt=w.textures;for(let ct=0;ct<nt.length;ct++){let et=nt[ct],Ht=r.convert(et.format,et.colorSpace),mt=r.convert(et.type),Ut=v(et.internalFormat,Ht,mt,et.colorSpace),Nt=Ee(w);J&&yt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Ut,w.width,w.height):yt(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,Ut,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(w.depthTexture);nt.__renderTarget=w,(!nt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);let ct=nt.__webglTexture,et=Ee(w);if(w.depthTexture.format===Hs)yt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(w.depthTexture.format===er)yt(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function k(P){let w=n.get(P),J=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){let nt=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),nt){let ct=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,nt.removeEventListener("dispose",ct)};nt.addEventListener("dispose",ct),w.__depthDisposeCallback=ct}w.__boundDepthTexture=nt}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");let nt=P.texture.mipmaps;nt&&nt.length>0?Y(w.__webglFramebuffer[0],P):Y(w.__webglFramebuffer,P)}else if(J){w.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[nt]),w.__webglDepthbuffer[nt]===void 0)w.__webglDepthbuffer[nt]=i.createRenderbuffer(),W(w.__webglDepthbuffer[nt],P,!1);else{let ct=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,et)}}else{let nt=P.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),W(w.__webglDepthbuffer,P,!1);else{let ct=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(P,w,J){let nt=n.get(P);w!==void 0&&L(nt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&k(P)}function D(P){let w=P.texture,J=n.get(P),nt=n.get(w);P.addEventListener("dispose",T);let ct=P.textures,et=P.isWebGLCubeRenderTarget===!0,Ht=ct.length>1;if(Ht||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=w.version,a.memory.textures++),et){J.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[mt]=[];for(let Ut=0;Ut<w.mipmaps.length;Ut++)J.__webglFramebuffer[mt][Ut]=i.createFramebuffer()}else J.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let mt=0;mt<w.mipmaps.length;mt++)J.__webglFramebuffer[mt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ht)for(let mt=0,Ut=ct.length;mt<Ut;mt++){let Nt=n.get(ct[mt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&yt(P)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let mt=0;mt<ct.length;mt++){let Ut=ct[mt];J.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[mt]);let Nt=r.convert(Ut.format,Ut.colorSpace),ft=r.convert(Ut.type),St=v(Ut.internalFormat,Nt,ft,Ut.colorSpace,P.isXRRenderTarget===!0),Zt=Ee(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,St,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,J.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),W(J.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),at(i.TEXTURE_CUBE_MAP,w);for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ut=0;Ut<w.mipmaps.length;Ut++)L(J.__webglFramebuffer[mt][Ut],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ut);else L(J.__webglFramebuffer[mt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let mt=0,Ut=ct.length;mt<Ut;mt++){let Nt=ct[mt],ft=n.get(Nt),St=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(St=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,ft.__webglTexture),at(St,Nt),L(J.__webglFramebuffer,P,Nt,i.COLOR_ATTACHMENT0+mt,St,0),m(Nt)&&p(St)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(mt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,nt.__webglTexture),at(mt,w),w.mipmaps&&w.mipmaps.length>0)for(let Ut=0;Ut<w.mipmaps.length;Ut++)L(J.__webglFramebuffer[Ut],P,w,i.COLOR_ATTACHMENT0,mt,Ut);else L(J.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,mt,0);m(w)&&p(mt),e.unbindTexture()}P.depthBuffer&&k(P)}function Wt(P){let w=P.textures;for(let J=0,nt=w.length;J<nt;J++){let ct=w[J];if(m(ct)){let et=y(P),Ht=n.get(ct).__webglTexture;e.bindTexture(et,Ht),p(et),e.unbindTexture()}}}let At=[],Rt=[];function Tt(P){if(P.samples>0){if(yt(P)===!1){let w=P.textures,J=P.width,nt=P.height,ct=i.COLOR_BUFFER_BIT,et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ht=n.get(P),mt=w.length>1;if(mt)for(let Nt=0;Nt<w.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);let Ut=P.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Nt=0;Nt<w.length;Nt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Nt]);let ft=n.get(w[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,J,nt,0,0,J,nt,ct,i.NEAREST),c===!0&&(At.length=0,Rt.length=0,At.push(i.COLOR_ATTACHMENT0+Nt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(At.push(et),Rt.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,At))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Nt=0;Nt<w.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Nt]);let ft=n.get(w[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ee(P){return Math.min(s.maxSamples,P.samples)}function yt(P){let w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xt(P){let w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Qe(P,w){let J=P.colorSpace,nt=P.format,ct=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==rs&&J!==Ai&&(ve.getTransfer(J)===Ce?(nt!==Vn||ct!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function ke(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=pt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=L,this.useMultisampledRTT=yt}function Yx(i,t){function e(n,s=Ai){let r,a=ve.getTransfer(s);if(n===ei)return i.UNSIGNED_BYTE;if(n===La)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fl)return i.BYTE;if(n===Ll)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===Gi)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===Ks)return i.HALF_FLOAT;if(n===Bl)return i.ALPHA;if(n===Ol)return i.RGB;if(n===Vn)return i.RGBA;if(n===Hs)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===Na)return i.RED;if(n===Ba)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===za)return i.RGBA_INTEGER;if(n===eo||n===no||n===io||n===so)if(a===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ha||n===Va||n===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wa||n===Xa)return a===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qa)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ya||n===Za||n===Ja||n===$a||n===Qa||n===ja||n===Ka||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ya)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ja)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ec)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return a===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===cc||n===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return a===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===uc||n===fc||n===dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ti({vertexShader:Zx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new Xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ch=class extends Si{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding!="undefined",m=new ah,p={},y=e.getContextAttributes(),v=null,_=null,b=[],S=[],T=new Ft,C=null,E=new dn;E.viewport=new We;let M=new dn;M.viewport=new We;let R=[E,M],F=new va,z=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let N=b[$];return N===void 0&&(N=new Xs,b[$]=N),N.getTargetRaySpace()},this.getControllerGrip=function($){let N=b[$];return N===void 0&&(N=new Xs,b[$]=N),N.getGripSpace()},this.getHand=function($){let N=b[$];return N===void 0&&(N=new Xs,b[$]=N),N.getHandSpace()};function q($){let N=S.indexOf($.inputSource);if(N===-1)return;let L=b[N];L!==void 0&&(L.update($.inputSource,$.frame,l||a),L.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",tt);for(let $=0;$<b.length;$++){let N=S[$];N!==null&&(S[$]=null,b[$].disconnect(N))}z=null,B=null,m.reset();for(let $ in p)delete p[$];t.setRenderTarget(v),d=null,f=null,u=null,s=null,_=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",H),s.addEventListener("inputsourceschange",tt),y.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let L=null,W=null,Y=null;y.depth&&(Y=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=y.stencil?er:Hs,W=y.stencil?tr:Gi);let k={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(k),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new ci(f.textureWidth,f.textureHeight,{format:Vn,type:ei,depthTexture:new Ur(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let L={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,L),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new ci(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt($){for(let N=0;N<$.removed.length;N++){let L=$.removed[N],W=S.indexOf(L);W>=0&&(S[W]=null,b[W].disconnect(L))}for(let N=0;N<$.added.length;N++){let L=$.added[N],W=S.indexOf(L);if(W===-1){for(let k=0;k<b.length;k++)if(k>=S.length){S.push(L),W=k;break}else if(S[k]===null){S[k]=L,W=k;break}if(W===-1)break}let Y=b[W];Y&&Y.connect(L)}}let G=new U,st=new U;function Z($,N,L){G.setFromMatrixPosition(N.matrixWorld),st.setFromMatrixPosition(L.matrixWorld);let W=G.distanceTo(st),Y=N.projectionMatrix.elements,k=L.projectionMatrix.elements,pt=Y[14]/(Y[10]-1),D=Y[14]/(Y[10]+1),Wt=(Y[9]+1)/Y[5],At=(Y[9]-1)/Y[5],Rt=(Y[8]-1)/Y[0],Tt=(k[8]+1)/k[0],Ee=pt*Rt,yt=pt*Tt,Xt=W/(-Rt+Tt),Qe=Xt*-Rt;if(N.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Qe),$.translateZ(Xt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Y[10]===-1)$.projectionMatrix.copy(N.projectionMatrix),$.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let ke=pt+Xt,P=D+Xt,w=Ee-Qe,J=yt+(W-Qe),nt=Wt*D/P*ke,ct=At*D/P*ke;$.projectionMatrix.makePerspective(w,J,nt,ct,ke,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ot($,N){N===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(N.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let N=$.near,L=$.far;m.texture!==null&&(m.depthNear>0&&(N=m.depthNear),m.depthFar>0&&(L=m.depthFar)),F.near=M.near=E.near=N,F.far=M.far=E.far=L,(z!==F.near||B!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,B=F.far),F.layers.mask=$.layers.mask|6,E.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;let W=$.parent,Y=F.cameras;ot(F,W);for(let k=0;k<Y.length;k++)ot(Y[k],W);Y.length===2?Z(F,E,M):F.projectionMatrix.copy(E.projectionMatrix),at($,F,W)};function at($,N,L){L===null?$.matrix.copy(N.matrixWorld):($.matrix.copy(L.matrixWorld),$.matrix.invert(),$.matrix.multiply(N.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(N.projectionMatrix),$.projectionMatrixInverse.copy(N.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Jo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return p[$]};let _t=null;function Vt($,N){if(h=N.getViewerPose(l||a),g=N,h!==null){let L=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let W=!1;L.length!==F.cameras.length&&(F.cameras.length=0,W=!0);for(let D=0;D<L.length;D++){let Wt=L[D],At=null;if(d!==null)At=d.getViewport(Wt);else{let Tt=u.getViewSubImage(f,Wt);At=Tt.viewport,D===0&&(t.setRenderTargetTextures(_,Tt.colorTexture,Tt.depthStencilTexture),t.setRenderTarget(_))}let Rt=R[D];Rt===void 0&&(Rt=new dn,Rt.layers.enable(D),Rt.viewport=new We,R[D]=Rt),Rt.matrix.fromArray(Wt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Wt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(At.x,At.y,At.width,At.height),D===0&&(F.matrix.copy(Rt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),W===!0&&F.cameras.push(Rt)}let Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let D=u.getDepthInformation(L[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Y&&Y.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<L.length;D++){let Wt=L[D].camera;if(Wt){let At=p[Wt];At||(At=new Nr,p[Wt]=At);let Rt=u.getCameraImage(Wt);At.sourceTexture=Rt}}}}for(let L=0;L<b.length;L++){let W=S[L],Y=b[L];W!==null&&Y!==void 0&&Y.update(W,N,l||a)}_t&&_t($,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),g=null}let kt=new Tf;kt.setAnimationLoop(Vt),this.setAnimationLoop=function($){_t=$},this.dispose=function(){}}},ps=new Kn,$x=new Ie;function Qx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,ps.copy(_),ps.x*=-1,ps.y*=-1,ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(ps)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));let b=v.program;n.updateUBOMapping(y,b);let S=t.render.frame;r[y.id]!==S&&(f(y),r[y.id]=S)}function h(y){let v=u();y.__bindingPointIndex=v;let _=i.createBuffer(),b=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=s[y.id],_=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let S=0,T=_.length;S<T;S++){let C=Array.isArray(_[S])?_[S]:[_[S]];for(let E=0,M=C.length;E<M;E++){let R=C[E];if(d(R,S,E,b)===!0){let F=R.__offset,z=Array.isArray(R.value)?R.value:[R.value],B=0;for(let q=0;q<z.length;q++){let H=z[q],tt=x(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+B,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,B),B+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,_,b){let S=y.value,T=v+"_"+_;if(b[T]===void 0)return typeof S=="number"||typeof S=="boolean"?b[T]=S:b[T]=S.clone(),!0;{let C=b[T];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return b[T]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(y){let v=y.uniforms,_=0,b=16;for(let T=0,C=v.length;T<C;T++){let E=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,R=E.length;M<R;M++){let F=E[M],z=Array.isArray(F.value)?F.value:[F.value];for(let B=0,q=z.length;B<q;B++){let H=z[B],tt=x(H),G=_%b,st=G%tt.boundary,Z=G+st;_+=st,Z!==0&&b-Z<tt.storage&&(_+=b-Z),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=tt.storage}}}let S=_%b;return S>0&&(_+=b-S),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var _c=class{constructor(t={}){let{canvas:e=Yu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,b=!1;this._outputColorSpace=Pn;let S=0,T=0,C=null,E=-1,M=null,R=new We,F=new We,z=null,B=new ie(0),q=0,H=e.width,tt=e.height,G=1,st=null,Z=null,ot=new We(0,0,H,tt),at=new We(0,0,H,tt),_t=!1,Vt=new qs,kt=!1,$=!1,N=new Ie,L=new U,W=new We,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},k=!1;function pt(){return C===null?G:1}let D=n;function Wt(A,V){return e.getContext(A,V)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",ht,!1),D===null){let V="webgl2";if(D=Wt(V,A),D===null)throw Wt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let At,Rt,Tt,Ee,yt,Xt,Qe,ke,P,w,J,nt,ct,et,Ht,mt,Ut,Nt,ft,St,Zt,Bt,Mt,ne;function O(){At=new g0(D),At.init(),Bt=new Yx(D,At),Rt=new l0(D,At,t,Bt),Tt=new Xx(D,At),Rt.reversedDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),Ee=new y0(D),yt=new Dx,Xt=new qx(D,At,Tt,yt,Rt,Bt,Ee),Qe=new u0(_),ke=new m0(_),P=new wp(D),Mt=new a0(D,P),w=new x0(D,P,Ee,Mt),J=new M0(D,w,P,Ee),ft=new v0(D,Rt,Xt),mt=new h0(yt),nt=new Px(_,Qe,ke,At,Rt,Mt,mt),ct=new Qx(_,yt),et=new Lx,Ht=new kx(At),Nt=new o0(_,Qe,ke,Tt,J,d,c),Ut=new Gx(_,J,Rt),ne=new jx(D,Ee,Rt,Tt),St=new c0(D,At,Ee),Zt=new _0(D,At,Ee),Ee.programs=nt.programs,_.capabilities=Rt,_.extensions=At,_.properties=yt,_.renderLists=et,_.shadowMap=Ut,_.state=Tt,_.info=Ee}O();let dt=new ch(_,D);this.xr=dt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=At.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=At.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(H,tt,!1))},this.getSize=function(A){return A.set(H,tt)},this.setSize=function(A,V,Q=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,tt=V,e.width=Math.floor(A*G),e.height=Math.floor(V*G),Q===!0&&(e.style.width=A+"px",e.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(H*G,tt*G).floor()},this.setDrawingBufferSize=function(A,V,Q){H=A,tt=V,G=Q,e.width=Math.floor(A*Q),e.height=Math.floor(V*Q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ot)},this.setViewport=function(A,V,Q,j){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,V,Q,j),Tt.viewport(R.copy(ot).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(at)},this.setScissor=function(A,V,Q,j){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,V,Q,j),Tt.scissor(F.copy(at).multiplyScalar(G).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(A){Tt.setScissorTest(_t=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){Z=A},this.getClearColor=function(A){return A.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,Q=!0){let j=0;if(A){let X=!1;if(C!==null){let ut=C.texture.format;X=ut===za||ut===Oa||ut===Ba}if(X){let ut=C.texture.type,bt=ut===ei||ut===Gi||ut===js||ut===tr||ut===La||ut===Ua,Pt=Nt.getClearColor(),Ct=Nt.getClearAlpha(),Yt=Pt.r,Jt=Pt.g,Gt=Pt.b;bt?(g[0]=Yt,g[1]=Jt,g[2]=Gt,g[3]=Ct,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Yt,x[1]=Jt,x[2]=Gt,x[3]=Ct,D.clearBufferiv(D.COLOR,0,x))}else j|=D.COLOR_BUFFER_BIT}V&&(j|=D.DEPTH_BUFFER_BIT),Q&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Nt.dispose(),et.dispose(),Ht.dispose(),yt.dispose(),Qe.dispose(),ke.dispose(),J.dispose(),Mt.dispose(),ne.dispose(),nt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ai),dt.removeEventListener("sessionend",Ch),$i.stop()};function gt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let A=Ee.autoReset,V=Ut.enabled,Q=Ut.autoUpdate,j=Ut.needsUpdate,X=Ut.type;O(),Ee.autoReset=A,Ut.enabled=V,Ut.autoUpdate=Q,Ut.needsUpdate=j,Ut.type=X}function ht(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){let V=A.target;V.removeEventListener("dispose",rt),Dt(V)}function Dt(A){jt(A),yt.remove(A)}function jt(A){let V=yt.get(A).programs;V!==void 0&&(V.forEach(function(Q){nt.releaseProgram(Q)}),A.isShaderMaterial&&nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Q,j,X,ut){V===null&&(V=Y);let bt=X.isMesh&&X.matrixWorld.determinant()<0,Pt=cd(A,V,Q,j,X);Tt.setMaterial(j,bt);let Ct=Q.index,Yt=1;if(j.wireframe===!0){if(Ct=w.getWireframeAttribute(Q),Ct===void 0)return;Yt=2}let Jt=Q.drawRange,Gt=Q.attributes.position,fe=Jt.start*Yt,Pe=(Jt.start+Jt.count)*Yt;ut!==null&&(fe=Math.max(fe,ut.start*Yt),Pe=Math.min(Pe,(ut.start+ut.count)*Yt)),Ct!==null?(fe=Math.max(fe,0),Pe=Math.min(Pe,Ct.count)):Gt!=null&&(fe=Math.max(fe,0),Pe=Math.min(Pe,Gt.count));let qe=Pe-fe;if(qe<0||qe===1/0)return;Mt.setup(X,j,Pt,Q,Ct);let Be,De=St;if(Ct!==null&&(Be=P.get(Ct),De=Zt,De.setIndex(Be)),X.isMesh)j.wireframe===!0?(Tt.setLineWidth(j.wireframeLinewidth*pt()),De.setMode(D.LINES)):De.setMode(D.TRIANGLES);else if(X.isLine){let qt=j.linewidth;qt===void 0&&(qt=1),Tt.setLineWidth(qt*pt()),X.isLineSegments?De.setMode(D.LINES):X.isLineLoop?De.setMode(D.LINE_LOOP):De.setMode(D.LINE_STRIP)}else X.isPoints?De.setMode(D.POINTS):X.isSprite&&De.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Vs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))De.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let qt=X._multiDrawStarts,He=X._multiDrawCounts,Se=X._multiDrawCount,An=Ct?P.get(Ct).bytesPerElement:1,Ts=yt.get(j).currentProgram.getUniforms();for(let Rn=0;Rn<Se;Rn++)Ts.setValue(D,"_gl_DrawID",Rn),De.render(qt[Rn]/An,He[Rn])}else if(X.isInstancedMesh)De.renderInstances(fe,qe,X.count);else if(Q.isInstancedBufferGeometry){let qt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,He=Math.min(Q.instanceCount,qt);De.renderInstances(fe,qe,He)}else De.render(fe,qe)};function Ne(A,V,Q){A.transparent===!0&&A.side===Tn&&A.forceSinglePass===!1?(A.side=yn,A.needsUpdate=!0,vo(A,V,Q),A.side=bi,A.needsUpdate=!0,vo(A,V,Q),A.side=Tn):vo(A,V,Q)}this.compile=function(A,V,Q=null){Q===null&&(Q=A),p=Ht.get(Q),p.init(V),v.push(p),Q.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),A!==Q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let j=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ut=X.material;if(ut)if(Array.isArray(ut))for(let bt=0;bt<ut.length;bt++){let Pt=ut[bt];Ne(Pt,Q,X),j.add(Pt)}else Ne(ut,Q,X),j.add(ut)}),p=v.pop(),j},this.compileAsync=function(A,V,Q=null){let j=this.compile(A,V,Q);return new Promise(X=>{function ut(){if(j.forEach(function(bt){yt.get(bt).currentProgram.isReady()&&j.delete(bt)}),j.size===0){X(A);return}setTimeout(ut,10)}At.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Re=null;function mi(A){Re&&Re(A)}function ai(){$i.stop()}function Ch(){$i.start()}let $i=new Tf;$i.setAnimationLoop(mi),typeof self!="undefined"&&$i.setContext(self),this.setAnimationLoop=function(A){Re=A,dt.setAnimationLoop(A),A===null?$i.stop():$i.start()},dt.addEventListener("sessionstart",ai),dt.addEventListener("sessionend",Ch),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(V),V=dt.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,V,C),p=Ht.get(A,v.length),p.init(V),v.push(p),N.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Vt.setFromProjectionMatrix(N,Qn,V.reversedDepth),$=this.localClippingEnabled,kt=mt.init(this.clippingPlanes,$),m=et.get(A,y.length),m.init(),y.push(m),dt.enabled===!0&&dt.isPresenting===!0){let ut=_.xr.getDepthSensingMesh();ut!==null&&Oc(ut,V,-1/0,_.sortObjects)}Oc(A,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(st,Z),k=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,k&&Nt.addToRenderList(m,A),this.info.render.frame++,kt===!0&&mt.beginShadows();let Q=p.state.shadowsArray;Ut.render(Q,A,V),kt===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,X=m.transmissive;if(p.setupLights(),V.isArrayCamera){let ut=V.cameras;if(X.length>0)for(let bt=0,Pt=ut.length;bt<Pt;bt++){let Ct=ut[bt];Ph(j,X,A,Ct)}k&&Nt.render(A);for(let bt=0,Pt=ut.length;bt<Pt;bt++){let Ct=ut[bt];Ih(m,A,Ct,Ct.viewport)}}else X.length>0&&Ph(j,X,A,V),k&&Nt.render(A),Ih(m,A,V);C!==null&&T===0&&(Xt.updateMultisampleRenderTarget(C),Xt.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(_,A,V),Mt.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],kt===!0&&mt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Oc(A,V,Q,j){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Vt.intersectsSprite(A)){j&&W.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);let bt=J.update(A),Pt=A.material;Pt.visible&&m.push(A,bt,Pt,Q,W.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Vt.intersectsObject(A))){let bt=J.update(A),Pt=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),W.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),W.copy(bt.boundingSphere.center)),W.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Pt)){let Ct=bt.groups;for(let Yt=0,Jt=Ct.length;Yt<Jt;Yt++){let Gt=Ct[Yt],fe=Pt[Gt.materialIndex];fe&&fe.visible&&m.push(A,bt,fe,Q,W.z,Gt)}}else Pt.visible&&m.push(A,bt,Pt,Q,W.z,null)}}let ut=A.children;for(let bt=0,Pt=ut.length;bt<Pt;bt++)Oc(ut[bt],V,Q,j)}function Ih(A,V,Q,j){let X=A.opaque,ut=A.transmissive,bt=A.transparent;p.setupLightsView(Q),kt===!0&&mt.setGlobalState(_.clippingPlanes,Q),j&&Tt.viewport(R.copy(j)),X.length>0&&yo(X,V,Q),ut.length>0&&yo(ut,V,Q),bt.length>0&&yo(bt,V,Q),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Ph(A,V,Q,j){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new ci(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?Ks:ei,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));let ut=p.state.transmissionRenderTarget[j.id],bt=j.viewport||R;ut.setSize(bt.z*_.transmissionResolutionScale,bt.w*_.transmissionResolutionScale);let Pt=_.getRenderTarget(),Ct=_.getActiveCubeFace(),Yt=_.getActiveMipmapLevel();_.setRenderTarget(ut),_.getClearColor(B),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),k&&Nt.render(Q);let Jt=_.toneMapping;_.toneMapping=Ti;let Gt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),kt===!0&&mt.setGlobalState(_.clippingPlanes,j),yo(A,Q,j),Xt.updateMultisampleRenderTarget(ut),Xt.updateRenderTargetMipmap(ut),At.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Pe=0,qe=V.length;Pe<qe;Pe++){let Be=V[Pe],De=Be.object,qt=Be.geometry,He=Be.material,Se=Be.group;if(He.side===Tn&&De.layers.test(j.layers)){let An=He.side;He.side=yn,He.needsUpdate=!0,Dh(De,Q,j,qt,He,Se),He.side=An,He.needsUpdate=!0,fe=!0}}fe===!0&&(Xt.updateMultisampleRenderTarget(ut),Xt.updateRenderTargetMipmap(ut))}_.setRenderTarget(Pt,Ct,Yt),_.setClearColor(B,q),Gt!==void 0&&(j.viewport=Gt),_.toneMapping=Jt}function yo(A,V,Q){let j=V.isScene===!0?V.overrideMaterial:null;for(let X=0,ut=A.length;X<ut;X++){let bt=A[X],Pt=bt.object,Ct=bt.geometry,Yt=bt.group,Jt=bt.material;Jt.allowOverride===!0&&j!==null&&(Jt=j),Pt.layers.test(Q.layers)&&Dh(Pt,V,Q,Ct,Jt,Yt)}}function Dh(A,V,Q,j,X,ut){A.onBeforeRender(_,V,Q,j,X,ut),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(_,V,Q,j,A,ut),X.transparent===!0&&X.side===Tn&&X.forceSinglePass===!1?(X.side=yn,X.needsUpdate=!0,_.renderBufferDirect(Q,V,j,X,A,ut),X.side=bi,X.needsUpdate=!0,_.renderBufferDirect(Q,V,j,X,A,ut),X.side=Tn):_.renderBufferDirect(Q,V,j,X,A,ut),A.onAfterRender(_,V,Q,j,X,ut)}function vo(A,V,Q){V.isScene!==!0&&(V=Y);let j=yt.get(A),X=p.state.lights,ut=p.state.shadowsArray,bt=X.state.version,Pt=nt.getParameters(A,X.state,ut,V,Q),Ct=nt.getProgramCacheKey(Pt),Yt=j.programs;j.environment=A.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(A.isMeshStandardMaterial?ke:Qe).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Yt===void 0&&(A.addEventListener("dispose",rt),Yt=new Map,j.programs=Yt);let Jt=Yt.get(Ct);if(Jt!==void 0){if(j.currentProgram===Jt&&j.lightsStateVersion===bt)return Lh(A,Pt),Jt}else Pt.uniforms=nt.getUniforms(A),A.onBeforeCompile(Pt,_),Jt=nt.acquireProgram(Pt,Ct),Yt.set(Ct,Jt),j.uniforms=Pt.uniforms;let Gt=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Gt.clippingPlanes=mt.uniform),Lh(A,Pt),j.needsLights=hd(A),j.lightsStateVersion=bt,j.needsLights&&(Gt.ambientLightColor.value=X.state.ambient,Gt.lightProbe.value=X.state.probe,Gt.directionalLights.value=X.state.directional,Gt.directionalLightShadows.value=X.state.directionalShadow,Gt.spotLights.value=X.state.spot,Gt.spotLightShadows.value=X.state.spotShadow,Gt.rectAreaLights.value=X.state.rectArea,Gt.ltc_1.value=X.state.rectAreaLTC1,Gt.ltc_2.value=X.state.rectAreaLTC2,Gt.pointLights.value=X.state.point,Gt.pointLightShadows.value=X.state.pointShadow,Gt.hemisphereLights.value=X.state.hemi,Gt.directionalShadowMap.value=X.state.directionalShadowMap,Gt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Gt.spotShadowMap.value=X.state.spotShadowMap,Gt.spotLightMatrix.value=X.state.spotLightMatrix,Gt.spotLightMap.value=X.state.spotLightMap,Gt.pointShadowMap.value=X.state.pointShadowMap,Gt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=Jt,j.uniformsList=null,Jt}function Fh(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=sr.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Lh(A,V){let Q=yt.get(A);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function cd(A,V,Q,j,X){V.isScene!==!0&&(V=Y),Xt.resetTextureUnits();let ut=V.fog,bt=j.isMeshStandardMaterial?V.environment:null,Pt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:rs,Ct=(j.isMeshStandardMaterial?ke:Qe).get(j.envMap||bt),Yt=j.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Jt=!!Q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Gt=!!Q.morphAttributes.position,fe=!!Q.morphAttributes.normal,Pe=!!Q.morphAttributes.color,qe=Ti;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(qe=_.toneMapping);let Be=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,De=Be!==void 0?Be.length:0,qt=yt.get(j),He=p.state.lights;if(kt===!0&&($===!0||A!==M)){let _n=A===M&&j.id===E;mt.setState(j,A,_n)}let Se=!1;j.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==He.state.version||qt.outputColorSpace!==Pt||X.isBatchedMesh&&qt.batching===!1||!X.isBatchedMesh&&qt.batching===!0||X.isBatchedMesh&&qt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qt.instancing===!1||!X.isInstancedMesh&&qt.instancing===!0||X.isSkinnedMesh&&qt.skinning===!1||!X.isSkinnedMesh&&qt.skinning===!0||X.isInstancedMesh&&qt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qt.instancingMorph===!1&&X.morphTexture!==null||qt.envMap!==Ct||j.fog===!0&&qt.fog!==ut||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==mt.numPlanes||qt.numIntersection!==mt.numIntersection)||qt.vertexAlphas!==Yt||qt.vertexTangents!==Jt||qt.morphTargets!==Gt||qt.morphNormals!==fe||qt.morphColors!==Pe||qt.toneMapping!==qe||qt.morphTargetsCount!==De)&&(Se=!0):(Se=!0,qt.__version=j.version);let An=qt.currentProgram;Se===!0&&(An=vo(j,V,X));let Ts=!1,Rn=!1,ur=!1,Ve=An.getUniforms(),Nn=qt.uniforms;if(Tt.useProgram(An.program)&&(Ts=!0,Rn=!0,ur=!0),j.id!==E&&(E=j.id,Rn=!0),Ts||M!==A){Tt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ve.setValue(D,"projectionMatrix",A.projectionMatrix),Ve.setValue(D,"viewMatrix",A.matrixWorldInverse);let bn=Ve.map.cameraPosition;bn!==void 0&&bn.setValue(D,L.setFromMatrixPosition(A.matrixWorld)),Rt.logarithmicDepthBuffer&&Ve.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ve.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Rn=!0,ur=!0)}if(X.isSkinnedMesh){Ve.setOptional(D,X,"bindMatrix"),Ve.setOptional(D,X,"bindMatrixInverse");let _n=X.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ve.setValue(D,"boneTexture",_n.boneTexture,Xt))}X.isBatchedMesh&&(Ve.setOptional(D,X,"batchingTexture"),Ve.setValue(D,"batchingTexture",X._matricesTexture,Xt),Ve.setOptional(D,X,"batchingIdTexture"),Ve.setValue(D,"batchingIdTexture",X._indirectTexture,Xt),Ve.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&Ve.setValue(D,"batchingColorTexture",X._colorsTexture,Xt));let Bn=Q.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&ft.update(X,Q,An),(Rn||qt.receiveShadow!==X.receiveShadow)&&(qt.receiveShadow=X.receiveShadow,Ve.setValue(D,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Nn.envMap.value=Ct,Nn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Nn.envMapIntensity.value=V.environmentIntensity),Rn&&(Ve.setValue(D,"toneMappingExposure",_.toneMappingExposure),qt.needsLights&&ld(Nn,ur),ut&&j.fog===!0&&ct.refreshFogUniforms(Nn,ut),ct.refreshMaterialUniforms(Nn,j,G,tt,p.state.transmissionRenderTarget[A.id]),sr.upload(D,Fh(qt),Nn,Xt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(sr.upload(D,Fh(qt),Nn,Xt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ve.setValue(D,"center",X.center),Ve.setValue(D,"modelViewMatrix",X.modelViewMatrix),Ve.setValue(D,"normalMatrix",X.normalMatrix),Ve.setValue(D,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let _n=j.uniformsGroups;for(let bn=0,zc=_n.length;bn<zc;bn++){let Qi=_n[bn];ne.update(Qi,An),ne.bind(Qi,An)}}return An}function ld(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function hd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,V,Q){let j=yt.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),yt.get(A.texture).__webglTexture=V,yt.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let Q=yt.get(A);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0};let ud=D.createFramebuffer();this.setRenderTarget=function(A,V=0,Q=0){C=A,S=V,T=Q;let j=!0,X=null,ut=!1,bt=!1;if(A){let Ct=yt.get(A);if(Ct.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Ct.__webglFramebuffer===void 0)Xt.setupRenderTarget(A);else if(Ct.__hasExternalTextures)Xt.rebindTextures(A,yt.get(A.texture).__webglTexture,yt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Gt=A.depthTexture;if(Ct.__boundDepthTexture!==Gt){if(Gt!==null&&yt.has(Gt)&&(A.width!==Gt.image.width||A.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(A)}}let Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(bt=!0);let Jt=yt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Jt[V])?X=Jt[V][Q]:X=Jt[V],ut=!0):A.samples>0&&Xt.useMultisampledRTT(A)===!1?X=yt.get(A).__webglMultisampledFramebuffer:Array.isArray(Jt)?X=Jt[Q]:X=Jt,R.copy(A.viewport),F.copy(A.scissor),z=A.scissorTest}else R.copy(ot).multiplyScalar(G).floor(),F.copy(at).multiplyScalar(G).floor(),z=_t;if(Q!==0&&(X=ud),Tt.bindFramebuffer(D.FRAMEBUFFER,X)&&j&&Tt.drawBuffers(A,X),Tt.viewport(R),Tt.scissor(F),Tt.setScissorTest(z),ut){let Ct=yt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ct.__webglTexture,Q)}else if(bt){let Ct=V;for(let Yt=0;Yt<A.textures.length;Yt++){let Jt=yt.get(A.textures[Yt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Yt,Jt.__webglTexture,Q,Ct)}}else if(A!==null&&Q!==0){let Ct=yt.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ct.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(A,V,Q,j,X,ut,bt,Pt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){Tt.bindFramebuffer(D.FRAMEBUFFER,Ct);try{let Yt=A.textures[Pt],Jt=Yt.format,Gt=Yt.type;if(!Rt.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-j&&Q>=0&&Q<=A.height-X&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pt),D.readPixels(V,Q,j,X,Bt.convert(Jt),Bt.convert(Gt),ut))}finally{let Yt=C!==null?yt.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(A,V,Q,j,X,ut,bt,Pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=yt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct)if(V>=0&&V<=A.width-j&&Q>=0&&Q<=A.height-X){Tt.bindFramebuffer(D.FRAMEBUFFER,Ct);let Yt=A.textures[Pt],Jt=Yt.format,Gt=Yt.type;if(!Rt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,fe),D.bufferData(D.PIXEL_PACK_BUFFER,ut.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pt),D.readPixels(V,Q,j,X,Bt.convert(Jt),Bt.convert(Gt),0);let Pe=C!==null?yt.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Pe);let qe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zu(D,qe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,fe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ut),D.deleteBuffer(fe),D.deleteSync(qe),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,Q=0){let j=Math.pow(2,-Q),X=Math.floor(A.image.width*j),ut=Math.floor(A.image.height*j),bt=V!==null?V.x:0,Pt=V!==null?V.y:0;Xt.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Q,0,0,bt,Pt,X,ut),Tt.unbindTexture()};let fd=D.createFramebuffer(),dd=D.createFramebuffer();this.copyTextureToTexture=function(A,V,Q=null,j=null,X=0,ut=null){ut===null&&(X!==0?(Vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=X,X=0):ut=0);let bt,Pt,Ct,Yt,Jt,Gt,fe,Pe,qe,Be=A.isCompressedTexture?A.mipmaps[ut]:A.image;if(Q!==null)bt=Q.max.x-Q.min.x,Pt=Q.max.y-Q.min.y,Ct=Q.isBox3?Q.max.z-Q.min.z:1,Yt=Q.min.x,Jt=Q.min.y,Gt=Q.isBox3?Q.min.z:0;else{let Bn=Math.pow(2,-X);bt=Math.floor(Be.width*Bn),Pt=Math.floor(Be.height*Bn),A.isDataArrayTexture?Ct=Be.depth:A.isData3DTexture?Ct=Math.floor(Be.depth*Bn):Ct=1,Yt=0,Jt=0,Gt=0}j!==null?(fe=j.x,Pe=j.y,qe=j.z):(fe=0,Pe=0,qe=0);let De=Bt.convert(V.format),qt=Bt.convert(V.type),He;V.isData3DTexture?(Xt.setTexture3D(V,0),He=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Xt.setTexture2DArray(V,0),He=D.TEXTURE_2D_ARRAY):(Xt.setTexture2D(V,0),He=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);let Se=D.getParameter(D.UNPACK_ROW_LENGTH),An=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ts=D.getParameter(D.UNPACK_SKIP_PIXELS),Rn=D.getParameter(D.UNPACK_SKIP_ROWS),ur=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Be.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Be.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gt);let Ve=A.isDataArrayTexture||A.isData3DTexture,Nn=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let Bn=yt.get(A),_n=yt.get(V),bn=yt.get(Bn.__renderTarget),zc=yt.get(_n.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,bn.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,zc.__webglFramebuffer);for(let Qi=0;Qi<Ct;Qi++)Ve&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(A).__webglTexture,X,Gt+Qi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(V).__webglTexture,ut,qe+Qi)),D.blitFramebuffer(Yt,Jt,bt,Pt,fe,Pe,bt,Pt,D.DEPTH_BUFFER_BIT,D.NEAREST);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||yt.has(A)){let Bn=yt.get(A),_n=yt.get(V);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,fd),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,dd);for(let bn=0;bn<Ct;bn++)Ve?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Bn.__webglTexture,X,Gt+bn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Bn.__webglTexture,X),Nn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_n.__webglTexture,ut,qe+bn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_n.__webglTexture,ut),X!==0?D.blitFramebuffer(Yt,Jt,bt,Pt,fe,Pe,bt,Pt,D.COLOR_BUFFER_BIT,D.NEAREST):Nn?D.copyTexSubImage3D(He,ut,fe,Pe,qe+bn,Yt,Jt,bt,Pt):D.copyTexSubImage2D(He,ut,fe,Pe,Yt,Jt,bt,Pt);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Nn?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(He,ut,fe,Pe,qe,bt,Pt,Ct,De,qt,Be.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(He,ut,fe,Pe,qe,bt,Pt,Ct,De,Be.data):D.texSubImage3D(He,ut,fe,Pe,qe,bt,Pt,Ct,De,qt,Be):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ut,fe,Pe,bt,Pt,De,qt,Be.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ut,fe,Pe,Be.width,Be.height,De,Be.data):D.texSubImage2D(D.TEXTURE_2D,ut,fe,Pe,bt,Pt,De,qt,Be);D.pixelStorei(D.UNPACK_ROW_LENGTH,Se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,An),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ts),D.pixelStorei(D.UNPACK_SKIP_ROWS,Rn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ur),ut===0&&V.generateMipmaps&&D.generateMipmap(He),Tt.unbindTexture()},this.initRenderTarget=function(A){yt.get(A).__webglFramebuffer===void 0&&Xt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Xt.setTextureCube(A,0):A.isData3DTexture?Xt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Xt.setTexture2DArray(A,0):Xt.setTexture2D(A,0),Tt.unbindTexture()},this.resetState=function(){S=0,T=0,C=null,Tt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};function Pf(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,v=o.length;y<v;y++){let _=o[y],b=i.attributes[_];c[_]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let S=i.morphAttributes[_];S&&(l[_]||(l[_]=[]),S.forEach((T,C)=>{let E=new T.array.constructor(T.count*T.itemSize);l[_][C]=new T.constructor(E,T.itemSize,T.normalized)}))}let d=t*.5,g=Math.log10(1/t),x=Math.pow(10,g),m=d*x;for(let y=0;y<r;y++){let v=n?n.getX(y):y,_="";for(let b=0,S=o.length;b<S;b++){let T=o[b],C=i.getAttribute(T),E=C.itemSize;for(let M=0;M<E;M++)_+=`${~~(C[u[M]](v)*x+m)},`}if(_ in e)h.push(e[_]);else{for(let b=0,S=o.length;b<S;b++){let T=o[b],C=i.getAttribute(T),E=i.morphAttributes[T],M=C.itemSize,R=c[T],F=l[T];for(let z=0;z<M;z++){let B=u[z],q=f[z];if(R[q](a,C[B](v)),E)for(let H=0,tt=E.length;H<tt;H++)F[H][q](a,E[H][B](v))}}e[_]=a,h.push(a),a++}}let p=i.clone();for(let y in i.attributes){let v=c[y];if(p.setAttribute(y,new v.constructor(v.array.slice(0,a*v.itemSize),v.itemSize,v.normalized)),y in l)for(let _=0;_<l[y].length;_++){let b=l[y][_];p.morphAttributes[y][_]=new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}var hh=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Df=new Map;function Kx(i){if(Array.isArray(i))return i;let t=Df.get(i);if(t)return t;let e=parseInt(i.slice(1),16);return t=[hh((e>>16&255)/255),hh((e>>8&255)/255),hh((e&255)/255)],Df.set(i,t),t}var fi=class{constructor(){this.L={}}buf(t){return this.L[t]||(this.L[t]={p:[],n:[],c:[]})}tri(t,e,n,s,r){let a=this.buf(t),o=Kx(e),c=s[0]-n[0],l=s[1]-n[1],h=s[2]-n[2],u=r[0]-n[0],f=r[1]-n[1],d=r[2]-n[2],g=l*d-h*f,x=h*u-c*d,m=c*f-l*u,p=Math.hypot(g,x,m)||1;g/=p,x/=p,m/=p,a.p.push(n[0],n[1],n[2],s[0],s[1],s[2],r[0],r[1],r[2]),a.n.push(g,x,m,g,x,m,g,x,m),a.c.push(o[0],o[1],o[2],o[0],o[1],o[2],o[0],o[1],o[2])}quad(t,e,n,s,r,a){this.tri(t,e,n,s,r),this.tri(t,e,n,r,a)}box(t,e,n,s,r,a,o,c,l=""){if(n>a&&([n,a]=[a,n]),s>o&&([s,o]=[o,s]),r>c&&([r,c]=[c,r]),a-n<1e-4||o-s<1e-4||c-r<1e-4)return;let h=(u,f,d)=>[u,f,d];l.includes("t")||this.quad(t,e,h(n,o,c),h(a,o,c),h(a,o,r),h(n,o,r)),l.includes("b")||this.quad(t,e,h(n,s,r),h(a,s,r),h(a,s,c),h(n,s,c)),this.quad(t,e,h(n,s,c),h(a,s,c),h(a,o,c),h(n,o,c)),this.quad(t,e,h(a,s,r),h(n,s,r),h(n,o,r),h(a,o,r)),this.quad(t,e,h(a,s,c),h(a,s,r),h(a,o,r),h(a,o,c)),this.quad(t,e,h(n,s,r),h(n,s,c),h(n,o,c),h(n,o,r))}obox(t,e,n,s,r,a){let o=(l,h,u)=>[n[0]+l*s[0]+h*r[0]+u*a[0],n[1]+l*s[1]+h*r[1]+u*a[1],n[2]+l*s[2]+h*r[2]+u*a[2]],c=(l,h,u,f)=>this.quad(t,e,l,h,u,f);c(o(-1,1,1),o(1,1,1),o(1,1,-1),o(-1,1,-1)),c(o(-1,-1,-1),o(1,-1,-1),o(1,-1,1),o(-1,-1,1)),c(o(-1,-1,1),o(1,-1,1),o(1,1,1),o(-1,1,1)),c(o(1,-1,-1),o(-1,-1,-1),o(-1,1,-1),o(1,1,-1)),c(o(1,-1,1),o(1,-1,-1),o(1,1,-1),o(1,1,1)),c(o(-1,-1,-1),o(-1,-1,1),o(-1,1,1),o(-1,1,-1))}ybox(t,e,n,s,r,a,o,c,l=0){let h=Math.cos(l),u=Math.sin(l);this.obox(t,e,[n,s,r],[h*a/2,0,u*a/2],[0,o/2,0],[-u*c/2,0,h*c/2])}beam(t,e,n,s,r,a=r){let o=[s[0]-n[0],s[1]-n[1],s[2]-n[2]],c=Math.hypot(...o)||1,l=o.map(g=>g/c),h=Math.abs(l[1])<.95?[l[2],0,-l[0]]:[1,0,0],u=Math.hypot(...h);h=h.map(g=>g/u);let f=[l[1]*h[2]-l[2]*h[1],l[2]*h[0]-l[0]*h[2],l[0]*h[1]-l[1]*h[0]],d=[(n[0]+s[0])/2,(n[1]+s[1])/2,(n[2]+s[2])/2];this.obox(t,e,d,h.map(g=>g*r/2),f.map(g=>g*a/2),l.map(g=>g*c/2))}prism(t,e,n,s,r,a={}){var f,d;let o=n.length,c=0;for(let g=0;g<o;g++){let x=n[g],m=n[(g+1)%o];c+=x[0]*m[1]-m[0]*x[1]}let l=c>0?n:[...n].reverse(),h=(f=a.top)!=null?f:e,u=(d=a.side)!=null?d:e;if(a.top!==!1)for(let g=1;g<o-1;g++)this.tri(t,h,[l[0][0],r,l[0][1]],[l[g+1][0],r,l[g+1][1]],[l[g][0],r,l[g][1]]);if(a.bottom!==!1)for(let g=1;g<o-1;g++)this.tri(t,u,[l[0][0],s,l[0][1]],[l[g][0],s,l[g][1]],[l[g+1][0],s,l[g+1][1]]);if(a.sides!==!1)for(let g=0;g<o;g++){let x=l[g],m=l[(g+1)%o];this.quad(t,u,[m[0],s,m[1]],[x[0],s,x[1]],[x[0],r,x[1]],[m[0],r,m[1]])}}cyl(t,e,n,s,r,a,o,c=8,l=Math.PI/8,h={}){let u=[];for(let f=0;f<c;f++){let d=l+f*Math.PI*2/c;u.push([n+Math.cos(d)*o,s+Math.sin(d)*o])}this.prism(t,e,u,r,a,h)}frustum(t,e,n,s,r,a,o,c,l=8,h=Math.PI/8){for(let u=0;u<l;u++){let f=h+u*Math.PI*2/l,d=h+(u+1)*Math.PI*2/l,g=[n+Math.cos(f)*o,r,s+Math.sin(f)*o],x=[n+Math.cos(d)*o,r,s+Math.sin(d)*o],m=[n+Math.cos(f)*c,a,s+Math.sin(f)*c],p=[n+Math.cos(d)*c,a,s+Math.sin(d)*c];this.quad(t,e,g,m,p,x),c>.001&&this.tri(t,e,[n,a,s],p,m),this.tri(t,e,[n,r,s],g,x)}}wall(t,e,n,s,r,a,o,c=[],l={}){let h=s[0]-n[0],u=s[1]-n[1],f=Math.hypot(h,u);if(f<.001)return null;let d=h/f,g=u/f,x=-g,m=d,p=a-r,y=(T,C,E=0)=>[n[0]+d*T+x*E,r+C,n[1]+g*T+m*E],v=new Set([0,f]),_=c.map(T=>{var C,E;return{s0:Math.max(0,T.a),s1:Math.min(f,T.a+T.w),y0:(C=T.y0)!=null?C:0,y1:Math.min(p,(E=T.y1)!=null?E:p)}}).filter(T=>T.s1>T.s0+.001);for(let T of _)v.add(T.s0),v.add(T.s1);let b=[...v].sort((T,C)=>T-C),S=Math.atan2(g,d);for(let T=0;T<b.length-1;T++){let C=b[T],E=b[T+1];if(E-C<.001)continue;let M=(C+E)/2,R=_.filter(B=>B.s0<=M&&B.s1>=M).sort((B,q)=>B.y0-q.y0),F=0,z=[];for(let B of R)B.y0>F+.001&&z.push([F,B.y0]),F=Math.max(F,B.y1);F<p-.001&&z.push([F,p]);for(let[B,q]of z){let H=y(M,(B+q)/2);this.ybox(t,e,H[0],H[1],H[2],E-C,q-B,o,S)}}return{at:y,L:f,ux:d,uz:g,nx:x,nz:m,yaw:S}}rail(t,e,n,s,r=1.05,a=.5,o={}){var h,u;let c=(h=o.w)!=null?h:.07,l=(u=o.top)!=null?u:.12;for(let f=0;f<n.length-1;f++){let d=n[f],g=n[f+1],x=Math.hypot(g[0]-d[0],g[1]-d[1]);if(x<.05)continue;this.beam(t,e,[d[0],s+r,d[1]],[g[0],s+r,g[1]],l,.08),this.beam(t,e,[d[0],s+.12,d[1]],[g[0],s+.12,g[1]],c,c);let m=Math.max(1,Math.round(x/a));for(let p=0;p<=m;p++){if(p===0&&f>0)continue;let y=d[0]+(g[0]-d[0])*p/m,v=d[1]+(g[1]-d[1])*p/m,_=p===0||p===m;this.box(t,e,y-(_?.09:c/2),s,v-(_?.09:c/2),y+(_?.09:c/2),s+r,v+(_?.09:c/2))}}}stairs(t,e,n,s,r,a,o,c,l,h){let u=Math.cos(a),f=Math.sin(a);for(let d=0;d<o;d++){let g=l*(d+.5),x=n+u*g,m=s+f*g,p=r+c*(d+1);this.ybox(t,e,x,(r+p)/2,m,l,p-r,h,a)}}slab(t,e,n,s,r,a,o={}){var p,y;let c=v=>new Ft(v[0],v[1]),l=v=>{let _=0;for(let b=0;b<v.length;b++){let S=v[b],T=v[(b+1)%v.length];_+=S[0]*T[1]-T[0]*S[1]}return _},h=l(n)>0?n:[...n].reverse(),u=s.map(v=>l(v)>0?[...v].reverse():v),f=[...h,...u.flat()],d=Wr.triangulateShape(h.map(c),u.map(v=>v.map(c))),g=(p=o.top)!=null?p:e,x=(y=o.side)!=null?y:e;for(let[v,_,b]of d){let S=f[v],T=f[_],C=f[b],E=(C[0]-S[0])*(T[1]-S[1])-(T[0]-S[0])*(C[1]-S[1]),[M,R]=E>0?[T,C]:[C,T];o.top!==!1&&this.tri(t,g,[S[0],a,S[1]],[M[0],a,M[1]],[R[0],a,R[1]]),o.bottom!==!1&&this.tri(t,x,[S[0],r,S[1]],[R[0],r,R[1]],[M[0],r,M[1]])}let m=v=>{for(let _=0;_<v.length;_++){let b=v[_],S=v[(_+1)%v.length];this.quad(t,x,[S[0],r,S[1]],[b[0],r,b[1]],[b[0],a,b[1]],[S[0],a,S[1]])}};if(o.sides!==!1){m(h);for(let v of u)m(v)}}plate(t,e,n,s=.3){let r=0;for(let c=0;c<4;c++){let l=n[c],h=n[(c+1)%4];r+=l[0]*h[2]-h[0]*l[2]}let a=r>0?[...n].reverse():n,o=a.map(c=>[c[0],c[1]-s,c[2]]);this.quad(t,e,a[0],a[1],a[2],a[3]),this.quad(t,e,o[3],o[2],o[1],o[0]);for(let c=0;c<4;c++){let l=(c+1)%4;this.quad(t,e,o[c],o[l],a[l],a[c])}}out(){let t={};for(let[e,n]of Object.entries(this.L))t[e]={p:new Float32Array(n.p),n:new Float32Array(n.n),c:new Float32Array(n.c)};return t}};var I=i=>Math.round(i*1.5*1e3)/1e3;var Et={F1:0,F2:3.6,F3:7.2,TOP:10.8},Wi=.35,ge=.45,ln=.22,Me={x0:I(-12),x1:I(12),z0:I(-9.5),z1:I(6)},oe=Me.x0+ge/2,ce=Me.x1-ge/2,$t=Me.z0+ge/2,se=Me.z1-ge/2,de=I(-6.4),he=I(-3.6),Kt=I(1),Le=I(-5.6),Je=I(5.6),gn=I(1.3),vc=I(-5.2),_s={N:[$t+ge/2,de-.13],S:[de+.13,he-ln/2]},uh={S1:{x0:oe+ge/2,x1:Le,foot:I(-6),top:I(-8.8),y0:Et.F1,run1:_s.N,run2:_s.S,n:12},S2:{x0:Je,x1:ce-ge/2,foot:I(6),top:I(8.8),y0:Et.F2,run1:_s.S,run2:_s.N,n:12}},fh=2.4,vn=1.4,Fe=(i,t=vn,e={})=>({c:I(i),w:t,k:"d",...e}),Ff=(i,t,e={})=>({c:I(i),w:t,k:"o",...e}),ae=(i,t=1.4,e={})=>({c:I(i),w:t,k:"w",...e}),W1={F1:[{id:"hall",t:"\u524D\u5385\uFF08\u63A5\u5F85\uFF09",r:[I(-5),Kt,I(5),se]},{id:"side",t:"\u4FA7\u5385\uFF08\u5019\u8BCA\uFF09",r:[oe,Kt,I(-5),se]},{id:"phar",t:"\u836F\u623F",r:[I(5),Kt,ce,se]},{id:"x1",t:"\u4E2D\u901A\u9053",r:[-gn,de,gn,Kt]},{id:"rc",t:"\u540E\u901A\u9053",r:[Le,$t,gn,de]},{id:"s1",t:"\u5DE6\u540E\u697C\u68AF",r:[oe,$t,Le,he]},{id:"stor",t:"\u5E93\u623F",r:[Le,de,-gn,Kt]},{id:"cons",t:"\u8BCA\u5BA4",r:[oe,he,Le,Kt]},{id:"crew",t:"\u6742\u5F79\u623F",r:[gn,$t,ce,de]},{id:"acct",t:"\u8D26\u623F",r:[gn,de,ce,Kt]}],F2:[{id:"s1",t:"\u5DE6\u540E\u697C\u68AF",r:[oe,$t,Le,he]},{id:"c2",t:"\u4E8C\u697C\u8FC7\u9053",r:[Le,de,Je,he]},{id:"guard",t:"\u5B88\u536B\u623F",r:[Le,$t,0,de]},{id:"drug",t:"\u50A8\u836F\u95F4",r:[0,$t,Je,de]},{id:"s2",t:"\u53F3\u540E\u697C\u68AF",r:[Je,$t,ce,he]},{id:"ww",t:"\u897F\u75C5\u623F",r:[oe,he,I(-3.6),se]},{id:"wm",t:"\u4E2D\u75C5\u623F",r:[I(-3.6),he,I(3.6),se]},{id:"we",t:"\u4E1C\u75C5\u623F",r:[I(3.6),he,ce,se]}],F3:[{id:"tgt",t:"\u201C\u75C5\u4EBA\u6240\u5728\u623F\u95F4\u201D",r:[oe,$t,Le,vc]},{id:"c3",t:"\u4E09\u697C\u8FC7\u9053",r:[Le,$t,I(2.6),de]},{id:"lob",t:"\u697C\u68AF\u53E3",r:[I(2.6),$t,Je,de]},{id:"s2",t:"\u53F3\u540E\u697C\u68AF",r:[Je,$t,ce,he]},{id:"wait",t:"\u503C\u5B88\u623F",r:[Le,de,I(-.4),Kt]},{id:"arch",t:"\u6863\u6848\u5BA4",r:[I(-.4),de,Je,Kt]},{id:"res",t:"\u5185\u5BA4",r:[oe,vc,Le,Kt]},{id:"parl",t:"\u4F1A\u5BA2\u5385",r:[oe,Kt,ce,se]},{id:"off",t:"\u4E66\u623F",r:[Je,he,ce,Kt]}]},Mc={F1:[[oe,se,ce,se,"e",[Fe(0,2.6,{id:"main",dbl:1,sw:1,h:3}),ae(-8.6,2.2),ae(-3.4,1.4),ae(3.4,1.4),ae(8.6,2.2)]],[oe,$t,ce,$t,"e",[ae(-3.4,1.2,{hi:1}),ae(3.4,1.2,{hi:1}),ae(8.4,1.2,{hi:1})]],[oe,$t,oe,se,"e",[ae(-1.3,1.3),ae(3.4,1.4)]],[ce,$t,ce,se,"e",[ae(-7.8,1.2,{hi:1}),ae(-1.3,1.3),ae(3.4,1.4)]],[oe,Kt,ce,Kt,"i",[Ff(0,2.2,{id:"x1in"}),Fe(-8.6,vn,{id:"f1b",sw:1})]],[I(-5),Kt,I(-5),se,"i",[Ff(3.4,2.8)]],[I(5),Kt,I(5),se,"i",[Fe(2,1.3,{sw:1}),{c:I(4.3),w:2,k:"c"}]],[-gn,de,-gn,Kt,"i",[]],[gn,de,gn,Kt,"i",[Fe(-1.6,1.3,{sw:1})]],[Le,de,-gn,de,"i",[Fe(-4.6,vn,{id:"f1a",sw:1})]],[gn,de,ce,de,"i",[]],[gn,$t,gn,de,"i",[Fe(-7.85,1.3,{sw:1})]],[oe,he,Le,he,"i",[]],[Le,de,Le,Kt,"i",[Fe(-1.3,vn,{id:"f1s",sw:-1})]]],F2:[[oe,se,ce,se,"e",[ae(-9.2),ae(-6),ae(-2),ae(2),ae(6),ae(9.2)]],[oe,$t,ce,$t,"e",[ae(-2.8,1.2),Fe(3.9,1.3,{id:"rear",sw:1}),ae(8.4,1.2,{hi:1})]],[oe,$t,oe,se,"e",[ae(-1.3,1.3),ae(3.4,1.3)]],[ce,$t,ce,se,"e",[ae(-1.3,1.3),ae(3.4,1.3)]],[Le,de,Je,de,"i",[Fe(-2.8,vn,{id:"gd",sw:-1}),Fe(1.6,vn,{id:"dg",sw:-1})]],[0,$t,0,de,"i",[]],[oe,he,ce,he,"i",[Fe(-4.6,1.3,{id:"f2b",sw:1}),Fe(0,vn,{id:"f2a",sw:1}),Fe(4.6,1.3,{sw:1})]],[I(-3.6),he,I(-3.6),se,"i",[Fe(2.4,vn,{sw:-1})]],[I(3.6),he,I(3.6),se,"i",[Fe(2.4,vn,{sw:1})]],[Je,de,Je,he,"i",[Fe(-5,1.8,{id:"f2s",dbl:1,sw:-1})]],[Je,$t,Je,de,"i",[]],[Le,$t,Le,de,"i",[]]],F3:[[oe,se,ce,se,"e",[ae(-9.2),ae(-6),ae(-2),ae(2),ae(6),ae(9.2)]],[oe,$t,ce,$t,"e",[ae(-8.6,1.5,{id:"twin",open:1}),Fe(-2.6,1.2,{id:"cb",sw:1}),ae(1,1,{hi:1}),ae(4.2,1,{hi:1}),ae(8.4,1.2,{hi:1})]],[oe,$t,oe,se,"e",[ae(-1.3,1.3),ae(3.4,1.3)]],[ce,$t,ce,se,"e",[ae(-1.3,1.3),ae(3.4,1.3)]],[I(2.6),$t,I(2.6),de,"i",[Fe(-7.75,1.5,{id:"gate",sw:-1})]],[Le,de,Je,de,"i",[Fe(-4.3,vn,{sw:1}),Fe(1.2,vn,{sw:1})]],[Le,$t,Le,Kt,"i",[Fe(-7.75,1.3,{id:"tdoor",sw:-1}),Fe(-1.6,1.3,{sw:-1})]],[oe,vc,Le,vc,"i",[]],[I(-.4),de,I(-.4),Kt,"i",[Fe(-2.7,1.3)]],[Je,de,Je,Kt,"i",[]],[Je,he,ce,he,"i",[]],[oe,Kt,ce,Kt,"i",[Fe(-8.6,vn),Fe(-3,vn),Fe(2.6,vn),Fe(8.6,vn)]]]};var Lf={x0:I(-3.2),x1:I(3.2),z0:Me.z1,z1:Me.z1+I(2),y:3.05},or={x0:I(-1),x1:I(10),z0:I(-14.5),z1:Me.z0,y:Et.F2},ao={x0:I(-11.5),x1:I(7.9),z0:Me.z0-I(2),z1:Me.z0,y:Et.F3,h:3,t:.3},ys={x0:I(1),x1:I(4.6)},di={x0:0,x1:I(5.6),z0:ao.z0,z1:Me.z0,y:Et.F2,top:Et.F3-.26,t:.3},Uf=[[ao.x0,ys.x0],[ys.x0+.01,ys.x1-.01],[ys.x1,ao.x1]],Nf=(i,t)=>{let e=t-i,n=Math.max(1,Math.round(e/2.7));return Array.from({length:n},(s,r)=>i+e*(r+.5)/n)},Bf=1.3,dh={terrace:[Me.z0,he],hip:[he,Me.z1],ridge:14.6},Of={x0:Me.x0-I(1.6),x1:Me.x0,z0:I(-8.2),z1:I(-4.4),yHi:2.95,yLo:2.45},ph={x:Me.x0-I(.2),z:I(-6.9),y0:3.15},tn={w:[I(-16.5),Me.x0],e:[Me.x1,I(16.5)]},Gn={x0:I(-16.5),x1:I(16.5),z0:I(-22),z1:Me.z0},ze={z0:I(8.4),z1:I(17.4)},mh={z:I(-22),y:2.6},zf={x:I(-4.4),z:I(-12.2)},kf={x:I(-8.6),z:I(-14.8)},co={x:I(-12.8),z:I(-18.6)};var K={wall:"#E9E2D5",wallIn:"#F1ECE3",brick:"#BDAE98",brickD:"#A89882",stone:"#D6CEC0",stoneD:"#C2B9AA",plinth:"#ADA493",slabE:"#CFC7B9",floor:"#D9D0C1",floorW:"#C8B394",tile:"#D2C9B8",pave:"#CEC5B5",frame:"#6A5B4D",wood:"#A38A6E",woodD:"#7A6753",door:"#8E7459",doorD:"#6F5A45",roof:"#727A7D",roofD:"#5E6669",ridge:"#596165",glass:"#71858E",steel:"#5F686C",steelD:"#4B5357",rail:"#5A6366",plaque:"#3E3A36",gold:"#B79A63",red:"#A8483A",lantern:"#D9663F"};function ho(i,t,e,n,s,r,a,o,c,l=[]){return i.wall(t,e,[s,n],[r,n],a,o,c,l.map(h=>({a:h.c-h.w/2-s,w:h.w,y0:h.y0,y1:h.y1})))}function vs(i,t,e,n,s,r,a,o,c,l=[]){return s>r&&([s,r]=[r,s]),i.wall(t,e,[n,s],[n,r],a,o,c,l.map(h=>({a:h.c-h.w/2-s,w:h.w,y0:h.y0,y1:h.y1})))}function bc(i,t,e,n,s,r,a,o,c,l,h={}){var x;let u=(x=h.frame)!=null?x:K.frame,f=.08,d=Math.min(c,.18),g=(m,p,y,v,_,b,S,T)=>e==="x"?i.box(S,T,m,y,_,p,v,b):i.box(S,T,_,y,m,b,v,p);if(h.open||g(s-r/2+.01,s+r/2-.01,a+.01,o-.01,n-.02,n+.02,t+":g",K.glass),g(s-r/2,s-r/2+f,a,o,n-d/2,n+d/2,t,u),g(s+r/2-f,s+r/2,a,o,n-d/2,n+d/2,t,u),g(s-r/2,s+r/2,o-f,o,n-d/2,n+d/2,t,u),g(s-r/2,s+r/2,a,a+f,n-d/2,n+d/2,t,u),!h.open&&r>1.1&&g(s-.03,s+.03,a,o,n-.045,n+.045,t,u),h.lattice&&!h.open)for(let m=a+.45;m<o-.2;m+=.45)g(s-r/2,s+r/2,m-.025,m+.025,n-.04,n+.04,t,u);if(h.sill!==!1&&l){let m=n+l*c/2,p=n+l*(c/2+.12);g(s-r/2-.08,s+r/2+.08,a-.1,a,Math.min(m,p),Math.max(m,p),t,K.stoneD)}if(h.open&&l)for(let m of[-1,1]){let p=s+m*(r/2+.02),y=n+l*(c/2+.55);g(p-.03,p+.03,a+.05,o-.05,Math.min(n+l*c/2,y),Math.max(n+l*c/2,y),t,u)}}function Sc(i,t,e,n,s,r,a,o,c,l=K.frame){let h=(d,g,x,m,p,y)=>e==="x"?i.box(t,l,d,x,p,g,m,y):i.box(t,l,p,x,d,y,m,g),u=c+.05,f=.012;h(s-r/2-.07,s-r/2+f,a,a+o-f,n-u/2,n+u/2),h(s+r/2-f,s+r/2+.07,a,a+o-f,n-u/2,n+u/2),h(s-r/2-.07,s+r/2+.07,a+o-f,a+o+.09,n-u/2,n+u/2)}var lo=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Ln={},xh=(i,t,e={})=>{let n=new fi;return Ln[i]={g:t,k:n,...e},n},gh=.06;function _h(i,t,e,n,s,r,a,o,c,l,h,u,f){let d=o*(h/2-gh/2-.01),g=e==="x"?s:n+d,x=e==="x"?n+d:s,m=e==="x"?a:0,p=e==="x"?0:a,y=e==="x"?-o*a*Math.PI/2:o*a*Math.PI/2,v=u*y,_=m*Math.cos(v)+p*Math.sin(v),b=-m*Math.sin(v)+p*Math.cos(v),S=Math.atan2(b,_);i.ybox(t,f,g+_*r/2,c+l/2,x+b*r/2,r-.03,l,gh,S);for(let T of[.35,l-.45])i.ybox(t,K.doorD,g+_*r/2,c+T,x+b*r/2,r-.12,.07,gh+.02,S);return{pivot:[g,c,x],open:y}}function t_(i,t,e,n,s,r,a){var d;let o=((d=s.h)!=null?d:fh)-.02,c=s.c-s.w/2,l=s.c+s.w/2,h=s.sw||1,u=s.dbl?[[c,s.w/2,1],[l,s.w/2,-1]]:[[c,s.w,1]],f=s.id==="main"?K.doorD:K.door;u.forEach(([g,x,m],p)=>{if(s.id){let y=s.dbl?`${s.id}.${p}`:s.id,v=xh(y,t),_=_h(v,t,e,n,g,x,m,h,r,o,a,0,f);Ln[y].pivot=_.pivot,Ln[y].open=_.open}else _h(i,t,e,n,g,x,m,h,r,o,a,.88,f)})}function e_(i,t,e){var n;return i.k==="d"?[0,(n=i.h)!=null?n:fh]:i.k==="o"?[0,2.6]:i.k==="c"?[1,2.25]:i.hi?[1.75,2.5]:t==="F1"&&e==="S"?[.5,2.55]:[.95,2.45]}function n_(i,t){let e=Et[t],n=(t==="F1"?Et.F2:t==="F2"?Et.F3:Et.TOP)-Wi,s=n-e;for(let r of Mc[t]){let[a,o,c,l,h,u]=r,f=h==="e",d=f?ge:ln,g=o===l?"x":"z",x=f?g==="x"?o>0?"S":"N":a>0?"E":"W":"",m=x==="S"||x==="E"?1:x?-1:0;g==="x"?f?(a=Me.x0,c=Me.x1):(a=a===oe?oe+ge/2:a-ln/2,c=c===ce?ce-ge/2:c+ln/2):(o>l&&([o,l]=[l,o]),f?(o=$t+ge/2,l=se-ge/2):(o=o===$t?$t+ge/2:o+ln/2,l=l===se?se-ge/2:l-ln/2));let p=f?t==="F1"?K.brick:K.wall:K.wallIn,y=u.map(_=>{let[b,S]=e_(_,t,x);return{c:_.c,w:_.w,y0:b,y1:Math.min(S,s)}}),v=g==="x"?o:a;g==="x"?ho(i,t,p,v,a,c,e,n,d,y):vs(i,t,p,v,o,l,e,n,d,y),u.forEach((_,b)=>{let[S,T]=[y[b].y0,y[b].y1];_.k==="w"?bc(i,t,g,v,_.c,_.w,e+S,e+T,d,m,{open:!!_.open,lattice:t==="F1"&&x==="S",frame:t==="F1"&&x==="S"?K.woodD:K.frame}):_.k==="d"?(Sc(i,t,g,v,_.c,_.w,e,T,d,_.id==="main"?K.woodD:K.frame),t_(i,t,g,v,_,e,d)):_.k==="o"?Sc(i,t,g,v,_.c,_.w,e,T,d,K.frame):_.k==="c"&&(((E,M,R,F,z,B)=>g==="x"?i.box(t+":p",K.wood,E,R,z,M,F,B):i.box(t+":p",K.wood,z,R,E,B,F,M))(_.c-_.w/2+.01,_.c+_.w/2-.01,e+S-.06,e+S+.015,v-.45,v+.45),Sc(i,t,g,v,_.c,_.w,e+S,T-S,d,K.frame))})}}function Hf(i,t,e,n,s,r,a,o,c,l){let h=(o-a)/c,u=(n-e)/c;for(let f=0;f<c;f++){let d=e+u*f,g=e+u*(f+1),x=a+h*(f+1),m=l!=null?l:a+h*f-.32;i.box(t,K.stoneD,Math.min(d,g),m,s,Math.max(d,g),x,r);let p=d-Math.sign(u)*.015,y=g-Math.sign(u)*.005;i.box(t,K.stone,Math.min(p,y),x-.02,s+.006,Math.max(p,y),x+.01,r-.006,"b")}}function Vf(i,t,e,n){let s=(e.y0+n)/2,r=t+":p",a=Math.min(e.top,e.x0===oe+ge/2?e.x0:e.x1),o=Math.max(e.top,e.x0===oe+ge/2?e.x0:e.x1),[c,l]=e.run1,[h,u]=e.run2;Hf(i,r,e.foot,e.top,c,l,e.y0,s,e.n,e.y0),i.box(r,K.stoneD,a,e.y0,$t+ge/2,o,s,he-ln/2),i.box(r,K.stone,a+.006,s-.02,$t+ge/2+.006,o-.006,s+.01,he-ln/2-.006,"b"),Hf(i,r,e.top,e.foot,h,u,s,n,e.n,null);let f=(l+h)/2,d=Math.sign(e.foot-e.top);i.beam(r,K.rail,[e.top,s+.95,f],[e.foot,n+.95,f],.07,.09),i.beam(r,K.rail,[e.top,s+.1,f],[e.foot,n+.1,f],.05,.05);for(let g=0;g<=5;g++){let x=e.top+(e.foot-e.top)*g/5,m=s+(n-s)*g/5;i.box(r,K.rail,x-.03,Math.min(m,s+(e.foot-e.top)*0),f-.03,x+.03,m+.95,f+.03)}i.beam(r,K.rail,[e.foot,e.y0+.95,f],[e.top,s+.95,f],.07,.09),i.box(r,K.rail,e.top-.04,s,f-.04,e.top+.04,s+.95,f+.04),i.box(r,K.rail,e.foot-d*.02-.04,e.y0,f-.04,e.foot-d*.02+.04,n+.95,f+.04)}function Gf(i){let{x0:t,x1:e,z0:n,z1:s}=Me;i.box("F1",K.plinth,t-.25,-.45,n-.25,e+.25,0,s+.25),i.box("F1",K.floor,t+ge,0,n+ge,e-ge,.02,s-ge),i.box("F1",K.tile,I(-5)+ln/2,.02,Kt+ln/2,I(5)-ln/2,.035,se-ge/2);let r=uh.S1,a=uh.S2;i.slab("F2",K.slabE,lo(t-.1,n-.1,e+.1,s+.1),[lo(oe+ge/2,$t+ge/2,r.foot,he-ln/2)],Et.F2-Wi,Et.F2,{top:K.floorW}),i.slab("F3",K.slabE,lo(t-.1,n-.1,e+.1,s+.1),[lo(a.foot,$t+ge/2,ce-ge/2,he-ln/2)],Et.F3-Wi,Et.F3,{top:K.floorW}),i.slab("R",K.slabE,lo(t-.1,n-.1,e+.1,s+.1),[],Et.TOP-Wi,Et.TOP,{top:K.pave});for(let o of["F1","F2","F3"])n_(i,o);Vf(i,"F1",r,Et.F2),Vf(i,"F2",a,Et.F3),i.rail("F2:p",K.rail,[[r.foot,$t+ge/2],[r.foot,_s.N[1]+.1]],Et.F2,1,.5,{w:.04,top:.07}),i.rail("F3:p",K.rail,[[a.foot,_s.S[0]-.1],[a.foot,he-ln/2]],Et.F3,1,.5,{w:.04,top:.07});for(let o of[Et.F2,Et.F3])i.box(o===Et.F2?"F2":"F3",K.stoneD,t-.16,o-Wi-.05,s-.2,e+.16,o-Wi+.12,s+.16);for(let o of[-11.6,-5.9,5.9,11.6].map(I))i.box("F1",K.stoneD,o-.4,0,s-.1,o+.4,Et.F2-Wi,s+.12);i.box("F2",K.plaque,-1.15,Et.F2+.12,s+.02,1.15,Et.F2+1.02,s+.16),i.box("F2",K.gold,-1,Et.F2+.24,s+.16,1,Et.F2+.9,s+.18);{let{x0:o,x1:c,z0:l,z1:h,y:u}=Lf;i.box("F1",K.stone,o,-.45,l,c,.012,h);for(let f=0;f<3;f++)i.box("F1",K.stoneD,o-.3,-.45,h+f*.32,c+.3,-.15*(f+1),h+(f+1)*.32);for(let f of[o+.2,c-.2])i.box("F1",K.woodD,f-.14,0,h-.34,f+.14,u,h-.06),i.box("F1",K.stoneD,f-.22,0,h-.42,f+.22,.22,h+.02);i.box("F1",K.woodD,o,u-.25,h-.4,c,u,h-.02),i.plate("F1",K.roof,[[o-.5,u+.05,h+.5],[c+.5,u+.05,h+.5],[c+.5,u+.5,l],[o-.5,u+.5,l]],.14),i.box("F1",K.roofD,o-.55,u-.12,h+.42,c+.55,u+.08,h+.56);for(let f of[o+.6,c-.6])i.cyl("F1:e",K.lantern,f,h-.25,u-.85,u-.5,.15,10,0),i.box("F1",K.woodD,f-.02,u-.5,h-.27,f+.02,u-.25,h-.23)}{let o=xh("bar","F1");o.box("F1",K.woodD,-1.55,1.15,se-ge/2-.22,1.55,1.38,se-ge/2-.1);for(let c of[-1.45,1.45])o.box("F1",K.steelD,c-.08,1.05,se-ge/2-.26,c+.08,1.48,se-ge/2-.08)}{let o=Et.F3,{x0:c,x1:l,z0:h,z1:u,h:f,t:d}=ao,g=h+d/2,x=1.7,m=2.65,p=Bf,y=(S,T,C,E)=>{S.box("F3",K.stoneD,T,o-.25,h,C,o,u-.1),S.box("F3",K.tile,Math.max(T,c+d),o,h+d,Math.min(C,l-d),o+.02,u);let M=Nf(T,C);ho(S,"F3",K.wall,g,T,C,o,o+f,d,M.map(R=>({c:R,w:p,y0:x,y1:m})));for(let R of M){bc(S,"F3","x",g,R,p,o+x,o+m,d,0,{open:!0});for(let F=R-p/2+.2;F<R+p/2-.15;F+=.15)S.box("F3",K.steelD,F-.022,o+x+.04,g-.022,F+.022,o+m-.04,g+.022);S.box("F3",K.steelD,R-p/2+.08,o+(x+m)/2-.025,g-.03,R+p/2-.08,o+(x+m)/2+.025,g+.03),S.box("F3",K.stoneD,R-p/2-.08,o+x-.1,h-.12,R+p/2+.08,o+x,h)}S.box(E,K.roofD,T,o+f,h-.35,C,o+f+.2,u),S.box(E,K.stoneD,T,o+f-.12,h-.42,C,o+f+.24,h-.35)},[v,_,b]=Uf;y(i,...v,"R"),y(i,...b,"R"),y(xh("blast","F3"),..._,"F3");for(let S of[c+d/2,l-d/2])vs(i,"F3",K.wall,S,h+d,u,o,o+f,d);for(let[S,T]of[[c-.3,c],[l,l+.3]])i.box("R",K.roofD,S,o+f,h-.35,T,o+f+.2,u),i.box("R",K.stoneD,S,o+f-.12,h-.42,T,o+f+.24,h-.35);for(let S=c+.5;S<l;S+=2.4)(S<di.x0-.3||S>di.x1+.3)&&i.beam("F3",K.steelD,[S,o-1.8,n],[S,o-.25,h+.4],.12,.12)}{let{x0:o,x1:c,z0:l,z1:h,y:u,top:f,t:d}=di,g=u+.02;ho(i,"ann",K.wall,l+d/2,o,c,g,f,d);for(let x of[o+d/2,c-d/2])vs(i,"ann",K.wall,x,l+d,h,g,f,d);i.box("ann",K.floorW,o+d,g,l+d,c-d,g+.02,h),i.box("ann",K.plinth,o-.04,g,l-.04,c+.04,g+.14,l+d/2)}{let o=Et.TOP,[c,l]=dh.terrace,h=1,u=.3;ho(i,"R",K.wall,n+u/2,t,e,o,o+h,u),vs(i,"R",K.wall,t+u/2,n+u,l,o,o+h,u,[{c:ph.z,w:.9,y0:0,y1:h+.2}]),vs(i,"R",K.wall,e-u/2,n+u,l,o,o+h,u),i.box("R",K.stoneD,t-.06,o+h,n-.06,e+.06,o+h+.1,n+u+.04),i.box("R",K.stoneD,t-.06,o+h,n,t+u+.04,o+h+.1,l),i.box("R",K.stoneD,e-u-.04,o+h,n,e+.06,o+h+.1,l);let f=t-.55,d=e+.55,g=l-.05,x=s+.75,m=o+.05,p=dh.ridge,y=(g+x)/2,v=(x-g)/2,_=f+v,b=d-v;i.plate("R",K.roof,[[f,m,x],[d,m,x],[b,p,y],[_,p,y]],.22),i.plate("R",K.roof,[[d,m,g],[f,m,g],[_,p,y],[b,p,y]],.22),i.plate("R",K.roofD,[[f,m,g],[f,m,x],[_,p,y],[_,p,y]],.22),i.plate("R",K.roofD,[[d,m,x],[d,m,g],[b,p,y],[b,p,y]],.22);for(let S=1;S<9;S++){let T=S/9,C=m+(p-m)*T+.02;i.beam("R",K.roofD,[f+v*T,C,x-(x-y)*T],[d-v*T,C,x-(x-y)*T],.06,.06),i.beam("R",K.roofD,[f+v*T,C,g+(y-g)*T],[d-v*T,C,g+(y-g)*T],.06,.06)}i.beam("R",K.ridge,[_-.2,p+.08,y],[b+.2,p+.08,y],.3,.34);for(let[S,T]of[[f,g],[f,x],[d,g],[d,x]])i.beam("R",K.ridge,[S,m+.1,T],[S<0?_:b,p+.08,y],.2,.2);for(let S of[_-.3,b+.3])i.box("R",K.ridge,S-.12,p-.05,y-.12,S+.12,p+.55,y+.12);i.box("R",K.roofD,f,m-.2,x-.12,d,m+.04,x+.04),i.box("R",K.stoneD,t+u,o,l-.35,e-u,o+.14,l-.05)}{let{x0:o,x1:c,z0:l,z1:h,y:u}=or,f=.3,d=-.45,g=u-.3;i.box("ann",K.plinth,o-.04,-.45-.05,l-.04,c+.04,-.45+.15,h-.01),i.box("ann",K.floor,o+f,-.45+.15,l+f,c-f,-.45+.17,h);let x=I(-12),m=[I(2.5),I(7.2)];ho(i,"ann",K.brick,l+f/2,o,c,d,g,f,m.map(v=>({c:v,w:1.4,y0:1.4,y1:2.6}))),vs(i,"ann",K.brick,o+f/2,l+f,h,d,g,f,[{c:x,w:1.3,y0:0,y1:2.45}]),vs(i,"ann",K.brick,c-f/2,l+f,h,d,g,f,[{c:x,w:1.3,y0:1.4,y1:2.6}]);for(let v of m)bc(i,"ann","x",l+f/2,v,1.4,d+1.4,d+2.6,f,-1);bc(i,"ann","z",c-f/2,x,1.3,d+1.4,d+2.6,f,1),Sc(i,"ann","z",o+f/2,x,1.3,d,2.45,f),_h(i,"ann","z",o+f/2,x-.65,1.3,1,-1,d+.17,2.26,f,.85,K.door),i.box("ann",K.slabE,o-.08,g,l-.08,c+.08,u,h-.1),i.box("ann",K.pave,o+.2,u,l+.2,c-.2,u+.02,h);let p=.55;i.box("ann",K.brick,o-.08,u,l-.08,c+.08,u+p,l+.2),i.box("ann",K.brick,o-.08,u,l+.2,o+.2,u+p,h),i.box("ann",K.brick,c-.2,u,l+.2,c+.08,u+p,h),i.box("ann",K.stoneD,o-.12,u+p,l-.12,c+.12,u+p+.08,l+.24),i.box("ann",K.stoneD,o-.12,u+p,l+.24,o+.24,u+p+.08,h),i.box("ann",K.stoneD,c-.24,u+p,l+.24,c+.12,u+p+.08,h);let y=I(8.1);i.box("ann",K.brickD,y-.5,g-.2,l+.35,y+.5,u+2.2,l+1.35),i.box("ann",K.stoneD,y-.65,u+2.2,l+.2,y+.65,u+2.4,l+1.5)}{let{x0:o,x1:c,z0:l,z1:h,yHi:u,yLo:f}=Of;for(let g of[l+.15,h-.15])i.box("F1",K.woodD,o+.05,-.45,g-.08,o+.21,f-.05,g+.08);i.plate("F1",K.wood,[[o-.25,f,h+.25],[c,u,h+.25],[c,u,l-.25],[o-.25,f,l-.25]],.1),i.box("F1",K.woodD,o-.22,f-.2,l-.2,o-.05,f,h+.2);let d=(g,x,m,p,y,v)=>i.box("F1:p",g,x-p/2,-.45,m-y/2,x+p/2,-.45+v,m+y/2);d(K.wood,I(-14.65),I(-5.15),1.6,1.6,1),d(K.woodD,I(-14),I(-5.35),1.5,1.6,1.9),d(K.wood,I(-12.9),I(-7.4),1.4,1.4,.9)}{let{x:o,z:c,y0:l}=ph,h=Et.TOP+1.15;for(let u of[-.24,.24])i.box("R",K.steelD,o-.04,l,c+u-.03,o+.04,h,c+u+.03);for(let u=l+.3;u<h-.1;u+=.3)i.box("R",K.steel,o-.03,u-.02,c-.24,o+.03,u+.02,c+.24);for(let u=l+1;u<h;u+=2.2)i.box("R",K.steelD,o-.02,u-.03,c-.3,t,u+.03,c-.24),i.box("R",K.steelD,o-.02,u-.03,c+.24,t,u+.03,c+.3)}return i}var Lt={crate:"#B49C7B",crateD:"#9E8566",sack:"#C9B48E",sackD:"#B39D78",jar:"#9B7F64",jarL:"#B8A07F",herb:"#8E9A6E",herbD:"#7A855E",desk:"#8A7258",cab:"#7F6E5C",cabL:"#94816C",cloth:"#9C6A52",chair:"#6F6052",bed:"#E8E2D6",bedF:"#8A7258",quilt:"#A9B7B5",quiltD:"#8FA09E",screen:"#CDBE9F",stove:"#9C8A78",pot:"#4F4A44",bamboo:"#C2AE7E",bambooD:"#A8925F",bowl:"#E9E1D0",food:"#C08A4A",water:"#8FA6AA"},i_=(i,t)=>{let e=new fi;return Ln[i]={g:t,k:e},e},xe=.035,an=Et.F2+.02,Xe=Et.F3+.02,ii=Et.TOP+.02,Wn=-.45+.17,ue=-.45,Ye=ge/2+.02,be=ln/2+.02;function ar(i,t,e,n,s,r=.8,a=0,o=Lt.crate){i.ybox(t,o,e,s+r/2,n,r,r,r,a);let c=Math.cos(a),l=Math.sin(a);for(let h of[-1,1])i.ybox(t,Lt.crateD,e+c*h*(r/2-.05),s+r/2,n+l*h*(r/2-.05),.08,r+.02,r+.02,a)}function yh(i,t,e,n,s,r=.8,a=.3){i.frustum(t,Lt.jar,e,n,s,s+r*.55,a*.8,a*1.1,10,0),i.frustum(t,Lt.jar,e,n,s+r*.55,s+r*.9,a*1.1,a*.55,10,0),i.cyl(t,Lt.jarL,e,n,s+r*.9,s+r,a*.5,10,0)}function si(i,t,e,n,s,r,a,o=.78,c=0,l=Lt.desk){i.ybox(t,l,e,s+o-.04,n,r,.07,a,c);let h=Math.cos(c),u=Math.sin(c);for(let[f,d]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let g=e+h*f*(r/2-.08)-u*d*(a/2-.08),x=n+u*f*(r/2-.08)+h*d*(a/2-.08);i.box(t,Lt.chair,g-.04,s,x-.04,g+.04,s+o-.07,x+.04)}}function Xi(i,t,e,n,s,r){let a=Math.cos(r),o=Math.sin(r);i.ybox(t,Lt.chair,e,s+.45,n,.46,.05,.46,-r),i.ybox(t,Lt.chair,e-o*.21,s+.75,n-a*.21,.46,.58,.05,-r);for(let[c,l]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let h=e+c*.19,u=n+l*.19;i.box(t,Lt.chair,h-.025,s,u-.025,h+.025,s+.45,u+.025)}}function uo(i,t,e,n,s,r,a=!0){if(a){i.box(t,Lt.desk,e-r/2,s+.4,n-.4/2,e+r/2,s+.46,n+.4/2);for(let c of[-r/2+.15,r/2-.15])i.box(t,Lt.chair,e+c-.04,s,n-.4/2+.05,e+c+.04,s+.4,n+.4/2-.05)}else{i.box(t,Lt.desk,e-.4/2,s+.4,n-r/2,e+.4/2,s+.46,n+r/2);for(let c of[-r/2+.15,r/2-.15])i.box(t,Lt.chair,e-.4/2+.05,s,n+c-.04,e+.4/2-.05,s+.4,n+c+.04)}}function Un(i,t,e,n,s,r,a,o=2.1,c={}){if(i.box(t,Lt.cab,e,a,n,s,a+o,r),i.box(t,K.frame,e-.02,a+o,n-.02,s+.02,a+o+.05,r+.02),c.drawers){let l=s-e>r-n,h=l?s-e:r-n,u=Math.round(h/.42),f=c.drawers;for(let d=0;d<5;d++)for(let g=0;g<u;g++){let x=(l?e:n)+h*(g+.5)/u,m=a+.35+d*(o-.5)/5;if(l){let p=f>0?r:n;i.box(t,Lt.cabL,x-.17,m,Math.min(p,p+f*.02),x+.17,m+.22,Math.max(p,p+f*.02))}else{let p=f>0?s:e;i.box(t,Lt.cabL,Math.min(p,p+f*.02),m,x-.17,Math.max(p,p+f*.02),m+.22,x+.17)}}}}function ri(i,t,e,n,s,r,a={}){let o=Math.cos(r),c=Math.sin(r),l=2,h=.95,u=e+o*l/2,f=n+c*l/2;i.ybox(t,Lt.bedF,u,s+.2,f,l,.4,h,r),i.ybox(t,Lt.bed,u,s+.45,f,l-.06,.1,h-.06,r),i.ybox(t,Lt.bedF,e+o*.04,s+.45,n+c*.04,.08,.9,h,r),a.quilt!==!1&&i.ybox(t,a.dark?Lt.quiltD:Lt.quilt,e+o*1.25,s+.53,n+c*1.25,1.2,.08,h-.02,r),i.ybox(t,Lt.bed,e+o*.3,s+.55,n+c*.3,.3,.1,.55,r)}function cr(i,t,e,n,s,r,a,o=2,c=0){let l=Math.cos(a),h=Math.sin(a),u=.55,f=Math.max(2,Math.round(r/1.1));for(let d=0;d<=f;d++)for(let g of[-u/2,u/2]){let x=-r/2+r*d/f;i.box(t,K.woodD,e+l*x-h*g-.035,s,n+h*x+l*g-.035,e+l*x-h*g+.035,s+o,n+h*x+l*g+.035)}for(let d=0;d<4;d++){let g=s+.12+d*(o-.2)/3;if(i.ybox(t,K.wood,e,g,n,r+.06,.04,u+.04,a),d!==3)for(let x=0;x<f;x++){let m=-r/2+r*(x+.5)/f,p=e+l*m,y=n+h*m,v=(x+d+c)%3;if(v===0)i.ybox(t,Lt.crate,p,g+.2,y,.7,.36,.45,a);else if(v===1)i.ybox(t,Lt.sack,p,g+.17,y,.7,.3,.45,a);else for(let _ of[-.25,.25])yh(i,t,p+l*_,y+h*_,g+.02,.38,.13)}}}function s_(i,t,e,n,s=1.75){for(let r=0;r<e.length-1;r++){let[a,o]=[e[r],e[r+1]],c=Math.hypot(o[0]-a[0],o[1]-a[1]),l=Math.atan2(o[1]-a[1],o[0]-a[0]);i.ybox(t,Lt.screen,(a[0]+o[0])/2,n+s/2+.05,(a[1]+o[1])/2,c-.04,s,.05,l),i.ybox(t,K.woodD,(a[0]+o[0])/2,n+s+.07,(a[1]+o[1])/2,c,.05,.07,l)}}function Wf(i,t,e,n,s,r,a=!0){for(let o of[-r/2+.1,r/2-.1])for(let c of[-.4,.4]){let l=a?e+o:e+c,h=a?n+c:n+o;i.box(t,Lt.bambooD,l-.03,s,h-.03,l+.03,s+1.13,h+.03)}for(let o of[.55,1])for(let c=0;c<Math.round(r/.9);c++){let l=-r/2+.45+c*.9,h=a?e+l:e,u=a?n:n+l;i.cyl(t,Lt.bamboo,h,u,s+o,s+o+.05,.42,12,0),i.cyl(t,(c+(o>.7?1:0))%2?Lt.herb:Lt.herbD,h,u,s+o+.05,s+o+.09,.34,10,0)}}function Xf(i){{let t=I(3.1),e=I(2.9);si(i,"F1:p",t,e,xe,1.9,.8,.82,Math.PI/2),Xi(i,"F1:p",t+.65,e,xe,-Math.PI/2),i.ybox("F1:p",Lt.cabL,t-.1,xe+.84,e-.4,.4,.06,.3,0)}for(let t of[-1.9,1.9].map(I))i.cyl("F1:p",Lt.jar,t,se-.8,xe,xe+.5,.3,10,0),i.cyl("F1:p",Lt.herb,t,se-.8,xe+.5,xe+1.2,.42,8,0);Un(i,"F1:p",I(-4.7),Kt+be,I(-1.7),Kt+be+.45,xe,2.1,{drawers:1}),Un(i,"F1:p",I(1.7),Kt+be,I(4.7),Kt+be+.45,xe,2.1,{drawers:1}),uo(i,"F1:p",oe+Ye+.25,I(3.2),xe,4,!1),uo(i,"F1:p",I(-8.6),se-Ye-.3,xe,3.8,!0),i.box("F1:p",Lt.desk,I(-10.5)-.4,xe,Kt+be+.1,I(-10.5)+.4,xe+.6,Kt+be+.7),Un(i,"F1:p",ce-Ye-.45,Kt+1,ce-Ye,se-1,xe,2.3,{drawers:-1}),Un(i,"F1:p",I(6.4),Kt+be,I(10.6),Kt+be+.45,xe,2.3,{drawers:1}),si(i,"F1:p",I(6.2),I(3.6),xe,.7,2.2,.9,0),cr(i,"F1:p",-gn-be-.32,I(-2.6),xe,4.2,Math.PI/2,2,1),cr(i,"F1:p",I(-3.2),Kt-be-.3,xe,3.4,0,2,2);{let t=i_("shelf","F1"),e=I(-3.5),n=I(-3.4);cr(t,"F1:p",e,n,xe,2.2,Math.PI/2,1.7,0),Ln.shelf.pivot=[e-.28,xe,n]}for(let[t,e]of[[-5,.3],[-4.3,.4]])ar(i,"F1:p",I(t),I(e),xe,.7);si(i,"F1:p",oe+Ye+.45,I(-1.2),xe,.8,1.6,.78,0),Xi(i,"F1:p",oe+Ye+1.15,I(-1.2),xe,-Math.PI/2);{let t=I(-9.2);i.box("F1:p",Lt.bedF,t-1,xe,he+be,t+1,xe+.55,he+be+.8),i.box("F1:p",Lt.bed,t-.95,xe+.55,he+be+.05,t+.95,xe+.65,he+be+.75)}Un(i,"F1:p",I(-7.6),he+be,I(-6.2),he+be+.45,xe,2);for(let t of[3,5.5,8])ri(i,"F1:p",I(t),$t+Ye+.5,xe,0,{dark:!0});si(i,"F1:p",I(10.8),I(-7.4),xe,.6,1,.7,0),si(i,"F1:p",I(6.5),I(-2.4),xe,1.8,.9,.78,0),Xi(i,"F1:p",I(6.5),I(-2.4)-.8,xe,0),Un(i,"F1:p",ce-Ye-.45,I(-5.6),ce-Ye,I(-1),xe,2.1);{let t=I(2.45);i.box("F1:p",K.steelD,t-.45,xe,de+be,t+.45,xe+1.1,de+be+.7)}ri(i,"F2:p",Le+be,$t+Ye+.5,an,0,{dark:!0}),ri(i,"F2:p",-be,$t+Ye+.5,an,Math.PI,{dark:!0});{let t=I(-2.8),e=I(-8.75);i.box("F2:p",Lt.desk,t-.3,an,e-.25,t+.3,an+.7,e+.25)}cr(i,"F2:p",.45,I(-7.8),an,3,Math.PI/2,2.1,1),cr(i,"F2:p",Je-be-.3,I(-7.8),an,3,Math.PI/2,2.1,2),ar(i,"F2:p",I(2.6),I(-8.6),an,.65),yh(i,"F2:p",I(4.9),I(-6.9),an,.7,.25),uo(i,"F2:p",I(2.6),he-be-.3,an,1.6,!0);for(let t of[-2.1,.1,2.3])ri(i,"F2:p",I(t),se-Ye,an,-Math.PI/2);ri(i,"F2:p",I(2.4),he+be,an,Math.PI/2);for(let t of[-2.3,.5,3.4])ri(i,"F2:p",oe+Ye,I(t),an,0);for(let t of[-8.1,-6])ri(i,"F2:p",I(t),se-Ye,an,-Math.PI/2);for(let t of[-2.3,.5,3.4])ri(i,"F2:p",ce-Ye,I(t),an,Math.PI);for(let t of[6.8,8.9])ri(i,"F2:p",I(t),se-Ye,an,-Math.PI/2);for(let t of[-1.1,1.2].map(I)){let e=se-1.18;i.box("F2:p",Lt.desk,t-.22,an,e-.22,t+.22,an+.55,e+.22)}si(i,"F2:p",I(2.5),I(1.4),an,1.2,.6,.78,0),Xi(i,"F3:p",I(4.4),I(-8.7),Xe,-Math.PI/2);{let t=I(5.25),e=I(-8.75);i.box("F3:p",Lt.desk,t-.25,Xe,e-.25,t+.25,Xe+.7,e+.25)}ri(i,"F3:p",oe+Ye,I(-7.1),Xe,0,{quilt:!0}),s_(i,"F3:p",[[-9.3,-6.5],[-8.2,-6],[-7,-6.05]].map(([t,e])=>[I(t),I(e)]),Xe),Un(i,"F3:p",I(-7.4),$t+Ye,I(-6.2),$t+Ye+.45,Xe,1.9),Xi(i,"F3:p",I(-9.6),I(-7),Xe,-Math.PI/2),si(i,"F3:p",I(-3),I(-2.8),Xe,2.6,1.6,.78,0);for(let[t,e,n]of[[-3.5,-3.6,0],[-2.5,-3.6,0],[-3.5,-2,Math.PI],[-2.5,-2,Math.PI]])Xi(i,"F3:p",I(t),I(e),Xe,n);Un(i,"F3:p",Le+be,I(-5.8),Le+be+.45,I(-3.6),Xe,2);for(let t of[1,3].map(I))Un(i,"F3:p",t-.25,I(-4.8),t+.25,I(-.6),Xe,2.1);Un(i,"F3:p",Je-be-.45,I(-5.6),Je-be,I(-.4),Xe,2.1),ri(i,"F3:p",oe+Ye,I(-2.6),Xe,0,{dark:!0}),Un(i,"F3:p",I(-8.4),Kt-be-.5,I(-6.4),Kt-be,Xe,2.1),si(i,"F3:p",I(8.6),I(-1.2),Xe,1.6,.8,.78,0),Xi(i,"F3:p",I(8.6),I(-1.2)-.8,Xe,0),Un(i,"F3:p",ce-Ye-.45,I(-3.3),ce-Ye,I(.6),Xe,2.2);for(let t of[-6.5,6.5].map(I)){let e=I(3.4);si(i,"F3:p",t,e,Xe,1.1,1.1,.8,0);for(let[n,s,r]of[[0,-.85,0],[0,.85,Math.PI],[-.85,0,Math.PI/2],[.85,0,-Math.PI/2]])Xi(i,"F3:p",t+n,e+s,Xe,r)}i.box("F3:p",Lt.desk,I(-1.6),Xe+.82,Kt+be+.05,I(1.6),Xe+.9,Kt+be+.5);for(let t of[I(-1.6)+.2,I(1.6)-.2])i.box("F3:p",Lt.chair,t-.05,Xe,Kt+be+.1,t+.05,Xe+.82,Kt+be+.45);for(let[t,e]of[[-8.6,-7.6],[-4.4,-7.6],[-8.6,-5.3],[-4.4,-5.3],[1.8,-7.6],[6,-7.6],[1.8,-5.3]])Wf(i,"R:p",I(t),I(e),ii,3.2,!0);{let t=I(9.7),e=I(-5.5);i.box("R:p",K.steelD,t-1.1,ii,e-.9,t-.7,ii+.6,e+.9),i.box("R:p",K.steelD,t+.7,ii,e-.9,t+1.1,ii+.6,e+.9),i.cyl("R:p",Lt.water,t,e,ii+.6,ii+2.1,.95,14,0),i.cyl("R:p",K.steelD,t,e,ii+2.1,ii+2.2,1,14,0)}for(let[t,e]of[[-10.6,-8.6],[-10,-8.7]])i.cyl("R:p",Lt.bamboo,I(t),I(e),ii,ii+.5,.25,10,0);{let{x0:t,x1:e,z0:n}=or,s=I(8.1);i.box("ann:p",Lt.stove,s-1.4,Wn,n+.32,s+1.4,Wn+.85,n+1.3);for(let r of[s-.6,s+.6])i.cyl("ann:p",Lt.pot,r,n+.8,Wn+.85,Wn+1.05,.38,12,0);i.box("ann:p",Lt.desk,I(1),Wn,n+.32,I(5.6),Wn+.85,n+.95),i.cyl("ann:p",Lt.jar,t+.9,n+.9,Wn,Wn+.9,.45,12,0),i.cyl("ann:p",Lt.water,t+.9,n+.9,Wn+.88,Wn+.915,.38,12,0),Un(i,"ann:p",e-.3-.45,I(-12.6),e-.3,I(-10.6),Wn,1.9),si(i,"ann:p",I(4.4),I(-12.2),Wn,2.2,.9,.82,0);for(let[r,a]of[[7.4,-11.4],[8.4,-11.4]])i.cyl("ann:p",Lt.bamboo,I(r),I(a),Et.F2+.02,Et.F2+.08,.42,12,0),i.cyl("ann:p",Lt.herbD,I(r),I(a),Et.F2+.08,Et.F2+.11,.34,10,0)}{let{x0:t,x1:e,z0:n,z1:s,y:r,t:a}=di,o=r+.04,c=t+a+.5;ar(i,"ann:p",c,n+a+.5,o,.8,.1),ar(i,"ann:p",c,n+a+1.4,o,.8,-.15),ar(i,"ann:p",c+.05,n+a+.9,o+.8,.7,.3),ar(i,"ann:p",c+.95,n+a+.45,o,.65,.4,Lt.crateD),cr(i,"ann:p",e-a-.32,(n+a+s)/2,o,2.2,Math.PI/2,2,1)}{let{x:t,z:e}=zf;i.box("yard:p",Lt.stove,t-.9,ue,e-.55,t+.9,ue+.82,e+.55),i.cyl("yard:p",Lt.pot,t-.35,e,ue+.82,ue+1.15,.45,12,0),i.cyl("yard:p",Lt.pot,t+.55,e,ue+.82,ue+1,.3,10,0),i.box("yard:p",K.brickD,t+.95,ue,e-.4,t+1.35,ue+2.6,e);for(let[n,s]of[[t-1.5,e-1.4],[t-1.5,e+1.4]])i.box("yard:p",K.woodD,n-.07,ue,s-.07,n+.07,ue+2.5,s+.07);i.plate("yard:p",K.wood,[[t-1.8,ue+2.5,e+1.7],[or.x0,ue+2.95,e+1.7],[or.x0,ue+2.95,e-1.7],[t-1.8,ue+2.5,e-1.7]],.08)}{let{x:t,z:e}=kf;si(i,"yard:p",t,e,ue,2.4,1,.78,0,Lt.desk),uo(i,"yard:p",t,e-.85,ue,2.3,!0),uo(i,"yard:p",t,e+.85,ue,2.3,!0);for(let n of[-.8,-.3,.3,.8])i.cyl("yard:p",Lt.bowl,t+n,e-.1,ue+.78,ue+.86,.13,10,0),i.cyl("yard:p",Lt.food,t+n,e-.1,ue+.86,ue+.88,.1,10,0);i.cyl("yard:p",Lt.pot,t,e+.25,ue+.78,ue+1,.28,12,0)}{let{x:t,z:e}=co;i.cyl("yard:p",K.stoneD,t,e,ue,ue+.75,.75,14,0),i.cyl("yard:p","#5D6A6D",t,e,ue+.7,ue+.76,.58,14,0);for(let n of[-1,1])i.box("yard:p",K.woodD,t+n*.85-.06,ue,e-.06,t+n*.85+.06,ue+2,e+.06);i.box("yard:p",K.woodD,t-.95,ue+1.85,e-.06,t+.95,ue+1.97,e+.06),i.cyl("yard:p",Lt.crateD,t+.4,e+.9,ue,ue+.35,.22,10,0)}{let t=I(-15.05),e=I(-20.3);for(let n=0;n<4;n++)i.box("yard:p",Lt.crateD,t-.85,ue+n*.22,e-.7+n*.04,t+.85,ue+(n+1)*.22,e+.7-n*.04)}for(let t of[2.6,6.8])Wf(i,"yard:p",I(t),I(-19.6),ue,3.4,!0);for(let[t,e]of[[-1.6,-16.4],[-2.3,-16.9]])yh(i,"yard:p",I(t),I(e),ue,.9,.32);return i}var r_={x0:I(-44),x1:I(44),z0:I(-44),z1:I(34),base:-.45-1.2},ee={street:"#B4AFA6",walk:"#D5CFC4",curb:"#C3BCB0",alley:"#CBC4B7",yard:"#CEC6B7",yardL:"#C2B9A9",grass:"#B9BB9C",grass2:"#AEB291",soil:"#8F806C",wall:["#ECE7DF","#E6E0D6","#EAE4DA","#E2DBD0"],plinth:"#D2CABD",eave:"#C6BFB3",roof:["#ABA79F","#B3AEA6","#A5A199","#B8B2A8"],ridge:"#958F86",dark:"#6E675E",shop:"#857B6E",ywall:"#D6CDBE",ycap:"#BFB5A4",stone:"#C9C0B0",stoneD:"#B3AA9A",wood:"#A38A6E",woodD:"#7A6753",steel:"#5F686C",lamp:"#F2C46D",cloth:"#C9BFA9",paper:"#EFE6CF"},oM=Math.PI*2;function o_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}var a_=0;function qi(i,t,e,n,s,r,a,o,c={}){var q;let l=(q=c.y0)!=null?q:-.45,h=3.3,u=a*h,f=l+u,d=ee.wall[Math.floor(o()*ee.wall.length)],g=ee.roof[Math.floor(o()*ee.roof.length)],x=(H,tt,G,st,Z,ot,at,_t)=>t==="x"?i.box("ctx",at,H,tt,G,st,Z,ot,_t):i.box("ctx",at,G,tt,H,ot,Z,st,_t),m=(H,tt,G)=>t==="x"?[H,tt,G]:[G,tt,H];if(x(e,l,s,n,l+.4,r,ee.plinth,"b"),x(e+.04,l+.4,s+.04,n-.04,f-.02,r-.04,d,"b"),x(e-.1,f-.22,s-.1,n+.1,f,r+.1,ee.eave),c.face){let H=c.face>0?r-.02:s+.02,tt=c.face*.06,G=n-e,st=Math.max(1,Math.round(G/3.4)),Z=G/st;for(let ot=0;ot<st;ot++){let at=e+Z*(ot+.5);c.shop!==!1&&x(at-Z*.36,l+.4,Math.min(H,H+tt),at+Z*.36,l+2.7,Math.max(H,H+tt),ee.shop);for(let _t=1;_t<a;_t++)x(at-.55,l+_t*h+.9,Math.min(H,H+tt),at+.55,l+_t*h+2.35,Math.max(H,H+tt),ee.dark)}c.shop!==!1&&x(e+.1,l+2.85,Math.min(H,H+c.face*.9),n-.1,l+3,Math.max(H,H+c.face*.9),ee.eave)}if(c.flat)return x(e,f,s,n,f+.5,r,ee.plinth),f+.5;let p=a_++%3,y=.4+p*.03,v=r-s,_=v*.26,b=(s+r)/2,S=p*.05,T=f+_+S,C=e-y,E=n+y,M=s-y,R=r+y,F=f-y*.5+S;i.plate("ctx",g,[m(C,F,M),m(E,F,M),m(E,T,b),m(C,T,b)],.2),i.plate("ctx",g,[m(E,F,R),m(C,F,R),m(C,T,b),m(E,T,b)],.2);let z=[m(e+.04,f,s+.04),m(e+.04,f,r-.04),m(e+.04,T-.1,b)],B=[m(n-.04,f,r-.04),m(n-.04,f,s+.04),m(n-.04,T-.1,b)];return t==="x"?(i.tri("ctx",d,...z),i.tri("ctx",d,...B)):(i.tri("ctx",d,z[1],z[0],z[2]),i.tri("ctx",d,B[1],B[0],B[2])),x(C-.06,T-.05,b-.14,E+.06,T+.14,b+.14,ee.ridge),T}function qf(i,t,e,n,s,r,a,o=.3){t==="x"?(i.box("ctx",ee.ywall,n,r,e-o/2,s,r+a,e+o/2),i.box("ctx",ee.ycap,n-.05,r+a,e-o/2-.06,s+.05,r+a+.1,e+o/2+.06)):(i.box("ctx",ee.ywall,e-o/2,r,n,e+o/2,r+a,s),i.box("ctx",ee.ycap,e-o/2-.06,r+a,n-.05,e+o/2+.06,r+a+.1,s+.05))}function Yf(i){let t=o_(17),e=[],{x0:n,x1:s,z0:r,z1:a,base:o}=r_,c=-.45;i.box("base",ee.soil,n-.01,o,r-.01,s+.01,c-.02,a+.01,"t"),i.box("ground",ee.street,n,c-.1,ze.z0,s,c-.02,ze.z1);for(let x=n+1;x<s;x+=3.2)i.box("ground","#ABA69D",x,c-.02,(ze.z0+ze.z1)/2-.05,x+1.6,c-.015,(ze.z0+ze.z1)/2+.05);i.box("ground",ee.walk,n,c-.1,Me.z1,s,c,ze.z0-.2),i.box("ground",ee.curb,n+.005,c-.1,ze.z0-.2,s-.005,c+.02,ze.z0),i.box("ground",ee.walk,n,c-.1,ze.z1+.2,s,c,ze.z1+I(2.2)),i.box("ground",ee.curb,n+.005,c-.1,ze.z1,s-.005,c+.02,ze.z1+.2),i.box("ground",ee.alley,tn.w[0],c-.1,Gn.z0,tn.w[1],c,Me.z1),i.box("ground",ee.alley,tn.e[0],c-.1,Gn.z0,tn.e[1],c,Me.z1),i.box("ground",ee.yard,tn.w[1],c-.1,Gn.z0,tn.e[0],c,Me.z0);for(let x=Gn.z0+1.5;x<Me.z0;x+=1.5)i.box("ground",ee.yardL,Gn.x0+.2,c,x-.02,Gn.x1-.2,c+.005,x+.02);for(let x of[(tn.w[0]+tn.w[1])/2-I(1.4),(tn.e[0]+tn.e[1])/2+I(1.4)])i.box("ground","#9C968C",x-.15,c-.02,Gn.z0+.5,x+.15,c+.009,Me.z1-.3);qi(i,"x",I(-30),tn.w[0],I(-6),Me.z1,2,t,{face:1}),qi(i,"x",n,I(-30),I(-7),Me.z1,2,t,{face:1}),qi(i,"x",tn.e[1],I(30),I(-4.5),Me.z1,3,t,{face:1}),qi(i,"x",I(30),s,I(-6.5),Me.z1,2,t,{face:1}),qf(i,"z",tn.w[0]-.15,Gn.z0,I(-6),c,2.6),qf(i,"z",tn.e[1]+.15,Gn.z0,I(-4.5),c,2.6),i.box("ground",ee.grass,n,c-.1,Gn.z0,tn.w[0]-.3,c,I(-6)),i.box("ground",ee.grass,tn.e[1]+.3,c-.1,Gn.z0,s,c,I(-4.5)),qi(i,"z",I(-19),I(-12),I(-40),I(-30),1,t,{flat:!0}),qi(i,"z",I(-16),I(-8),I(22),I(31),1,t,{flat:!0});for(let[x,m,p]of[[-22,-12,1.1],[-27,-18,.95],[-24,-20.5,.9],[-42.5,-10,1.1],[19.5,-19,1],[36,-12,1.15],[41,-19,.9],[34,-20,1],[-33,-15,1],[27,-15,.95]])e.push([I(x),I(m),p]);let l=[[n,I(-31)],[I(-31),I(-19.5)],[I(-19.5),I(-7)],[I(-7),I(5.5)],[I(5.5),I(18)],[I(18),I(31)],[I(31),s]],h=[2,3,2,2,3,2,2],u=ze.z1+I(2.2);l.forEach(([x,m],p)=>qi(i,"x",x+.05,m-.05,u,u+I(7.5)+p%2*.8,h[p],t,{face:-1})),i.box("ground",ee.grass,n,c-.1,u+I(8.3),s,c,a);for(let x=n+3;x<s-2;x+=6.5+t()*3)e.push([x,u+I(10.5)+t()*4,.9+t()*.3]);for(let x of[-34,-14,12,34].map(I))e.push([x,ze.z1+I(1.1),.85]),i.cyl("ground",ee.stoneD,x,ze.z1+I(1.1),c-.05,c+.12,.7,8);let f=mh.z,d=mh.y;i.box("ctx",ee.stone,n,c-.1,f-.6,s,d,f);for(let x=n+2;x<s;x+=4)i.box("ctx",ee.stoneD,x-.04,c,f-.02,x+.04,d-.2,f+.02);i.box("ctx",ee.stoneD,n-.02,d-.2,f-.7,s+.02,d+.1,f+.1),i.plate("ground",ee.grass,[[n,d+.05,f-.6],[s,d+.05,f-.6],[s,d+1.8,r],[n,d+1.8,r]],.2),i.box("base",ee.soil,n-.01,o,r-.01,s+.01,d+.02,f-.61,"t");let g=x=>d+.05+(f-.6-x)/(f-.6-r)*1.75;for(let[x,m,p,y]of[[-40,-29,-26,2],[-22,-12,-27.5,1],[-5,6,-26.5,2],[13,22,-27,1],[29,40,-26,2]])qi(i,"x",I(x),I(m),I(p)-I(8),I(p),y,t,{y0:g(I(p))-.3});for(let x=n+2;x<s;x+=4.5+t()*2.5){let m=I(-24)+t()*-1.8;e.push([x,m,.75+t()*.25,g(m)])}for(let x=n+4;x<s;x+=7+t()*3){let m=I(-37)-t()*7.5;e.push([x,m,1+t()*.3,g(m)])}e.push([co.x-I(.6),co.z-I(2.3),1.15]);for(let x of[I(-21),.01,I(21)]){let m=x===.01?ze.z1+.6:ze.z0-.5;i.box("yard",ee.steel,x-.07,c,m-.07,x+.07,c+4.2,m+.07),i.box("yard",ee.steel,x-.05,c+4.1,m-.05,x+.05,c+4.18,m+(m>(ze.z0+ze.z1)/2?-.7:.7)),i.box("yard:e",ee.lamp,x-.18,c+3.7,m+(m>(ze.z0+ze.z1)/2?-.7:.7)-.18,x+.18,c+4.1,m+(m>(ze.z0+ze.z1)/2?-.7:.7)+.18)}{let x=I(4.800000000000001),m=I(6+1.3);for(let p of[-.75,.75])i.box("yard",ee.woodD,x+p-.05,c,m-.05,x+p+.05,c+2.1,m+.05);i.box("yard",ee.wood,x-.9,c+1,m-.04,x+.9,c+2,m+.04),i.box("yard",ee.woodD,x-1,c+2,m-.2,x+1,c+2.12,m+.2);for(let[p,y,v,_]of[[-.5,1.55,.5,.55],[.15,1.6,.45,.45],[.05,1.15,.6,.32]])i.box("yard",ee.paper,x+p-v/2,c+y-_/2,m+.04,x+p+v/2,c+y+_/2,m+.06)}for(let[x,m]of[[tn.e[0]+.7,I(4.4)],[tn.e[0]+.7,I(4.4)-.9],[tn.w[1]-.7,I(-16.5)]])i.cyl("yard",ee.woodD,x,m,c,c+.9,.33,10,0);return{trees:e}}var Ec=class{constructor(t,e,n={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{}},n),this.cur={th:0,ph:.9,r:500,t:new U},this.goal={th:0,ph:.9,r:500,t:new U},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){let n=this.goal;t.th!==void 0&&(n.th=t.th),t.ph!==void 0&&(n.ph=t.ph),t.r!==void 0&&(n.r=t.r),t.t&&n.t.copy(t.t),this._clamp(),e&&(this.cur.th=n.th,this.cur.ph=n.ph,this.cur.r=n.r,this.cur.t.copy(n.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var a,o,c;let n={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,t:this.cur.t.clone()},s=(a=t.th)!=null?a:n.th;for(;s-n.th>Math.PI;)s-=Math.PI*2;for(;s-n.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(o=t.ph)!=null?o:n.ph,r:(c=t.r)!=null?c:n.r,t:(t.t||n.t).clone()};this.fly={from:n,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let n=e.bounds;t.t.x=Math.min(n.x1,Math.max(n.x0,t.t.x)),t.t.z=Math.min(n.z1,Math.max(n.z0,t.t.z))}}update(t){let e=this.cur,n=this.goal;if(this.fly){let s=this.fly,r=Math.min(1,(this.now()-s.t0)/s.dur),a=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.th=s.from.th+(s.to.th-s.from.th)*a,e.ph=s.from.ph+(s.to.ph-s.from.ph)*a;let o=Math.sin(Math.PI*a)*Math.min(.35,s.from.t.distanceTo(s.to.t)/900);e.r=Math.exp(Math.log(s.from.r)+(Math.log(s.to.r)-Math.log(s.from.r))*a)*(1+o),e.t.lerpVectors(s.from.t,s.to.t,a),r>=1&&(this.fly=null)}else{let s=1-Math.exp(-t*12);e.th+=(n.th-e.th)*s,e.ph+=(n.ph-e.ph)*s,e.r=Math.exp(Math.log(e.r)+(Math.log(n.r)-Math.log(e.r))*s),e.t.lerp(n.t,s)}return this._apply(),!!this.fly||Math.abs(n.th-e.th)>1e-4||Math.abs(n.ph-e.ph)>1e-4||Math.abs(n.r-e.r)>.01||n.t.distanceToSquared(e.t)>1e-4}_apply(){let t=this.cur,e=Math.sin(t.ph);this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t)}_ground(t,e,n){let s=this.dom.getBoundingClientRect(),r=new Ft((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),a=new jr;a.setFromCamera(r,this.cam);let o=new U;return a.ray.intersectPlane(new Ke(new U(0,1,0),-n),o)?o:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,n){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let a=this._ground(e,n,s.t.y);if(a){let o=1-s.r/r;s.t.x+=(a.x-s.t.x)*o,s.t.z+=(a.z-s.t.z)*o}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let n=this.goal,s=this.dom.clientHeight||600,r=2*n.r*Math.tan(this.cam.fov*Math.PI/360)/s,a=this.cur.th,o=Math.cos(a),c=-Math.sin(a),l=-Math.sin(a),h=-Math.cos(a),u=1/Math.max(.35,Math.cos(this.cur.ph));n.t.x+=(-t*o+e*l*Math.min(u,2.2))*r,n.t.z+=(-t*c+e*h*Math.min(u,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(n.pointerId,{x:n.clientX,y:n.clientY,b:n.button,sh:n.shiftKey,t:n.pointerType});try{t.setPointerCapture(n.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=n=>{var s,r;this.ptrs.delete(n.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",n=>{let s=this.ptrs.get(n.pointerId);if(!s||!this.enabled)return;let r=n.clientX-s.x,a=n.clientY-s.y;if(s.x=n.clientX,s.y=n.clientY,this.ptrs.size>=2){let[o,c]=[...this.ptrs.values()],l=(o.x+c.x)/2,h=(o.y+c.y)/2,u=Math.hypot(o.x-c.x,o.y-c.y),f=Math.atan2(c.y-o.y,c.x-o.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,u),l,h),this.pan(l-this._pinch.mx,h-this._pinch.my);let d=f-this._pinch.a;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),this.rotate(d,0)}this._pinch={d:u,mx:l,my:h,a:f};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||n.shiftKey?this.pan(r,a):this.rotate(-r*.0055,-a*.0045)}),t.addEventListener("wheel",n=>{var r,a;if(!this.enabled)return;if(!this.wheelOn){(a=(r=this.o).onWheelHint)==null||a.call(r);return}n.preventDefault();let s=n.deltaMode===1?n.deltaY*16:n.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),n.clientX,n.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};var vh=["F1","F2","F3","R","ann","yard","ground","base","ctx"],wc=["F1","F2","F3","R","ann"],c_=["yard","ground","base","ctx"],Zf={F1:0,ann:0,F2:1,F3:2,R:3},Jf={F1:0,ann:0,F2:Et.F2,F3:Et.F3,R:Et.TOP},Tc={ov:{t:[-2,3.5,-6],r:74,ph:.72,th:-.15},ext:{t:[0,5,-4.5],r:112,ph:1.1,th:-.55},sec:{t:[0,5.6,-9],r:80,ph:1.25,th:-.08}},l_=[.29,.27,.25];function Yi(i,t=l_){i.side=Tn,i.clipShadows=!0,i.clipIntersection=!0;let e="cap"+t.join("_");return i.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      if (!gl_FrontFacing) gl_FragColor = vec4(${t.map(s=>s.toFixed(3)).join(",")}, 1.0);`)},i.customProgramCacheKey=()=>e,i}var fo=[.66,.63,.58],h_=[.47,.4,.33];function Mh(i){let t=new en;return t.setAttribute("position",new Ze(i.p,3)),t.setAttribute("normal",new Ze(i.n,3)),t.setAttribute("color",new Ze(i.c,3)),t.computeBoundingSphere(),t}function u_(){let i=(c,l)=>{let h=c.attributes.position.count,u=new Float32Array(h*3);for(let f=0;f<h;f++)u.set(l,f*3);return c.setAttribute("color",new Ze(u,3)),c},t=(c,l,h,u)=>{let f=Pf(new cs(c,1).deleteAttribute("normal").deleteAttribute("uv"));return f.computeVertexNormals(),f.translate(l,h,u).toNonIndexed()},e=[t(1.25,0,3.7,0),t(.95,.85,3.2,.35),t(.9,-.7,3.35,-.55),t(.8,.1,4.5,-.25)],n=new en;for(let c of["position","normal"]){let l=e.reduce((f,d)=>f+d.attributes[c].array.length,0),h=new Float32Array(l),u=0;for(let f of e)h.set(f.attributes[c].array,u),u+=f.attributes[c].array.length;n.setAttribute(c,new Ze(h,3))}let s=new Ei(.16,.24,2.7,5,1,!0).translate(0,1.35,0).deleteAttribute("uv"),r=new ie("#7A6A58"),a=[i(n,[1,1,1]),i(s.toNonIndexed(),[r.r,r.g,r.b])],o=new en;for(let c of["position","normal","color"]){let l=a.reduce((f,d)=>f+d.attributes[c].array.length,0),h=new Float32Array(l),u=0;for(let f of a)h.set(f.attributes[c].array,u),u+=f.attributes[c].array.length;o.setAttribute(c,new Ze(h,3))}return o}function f_(i={}){let t=new fi;for(let y of Object.keys(Ln))delete Ln[y];let e=Yf(t);Gf(t),Xf(t);let n=t.out(),s=new we,r={};for(let y of vh)r[y]=new we,r[y].name=y,s.add(r[y]);let a=new Ke(new U(-1,0,0),0),o=new Ke(new U(0,0,-1),0),c={},l={},h={},u=y=>new li({vertexColors:!0,roughness:.9,metalness:0,...y});for(let y of wc)c[y]=new Ke(new U(0,-1,0),1e5),l[y]=new Ke(new U(0,-1,0),1e5),h[y]=Yi(u({})),h[y].clippingPlanes=[a,o,c[y]],h[y+":g"]=Yi(u({roughness:.3,metalness:.15})),h[y+":g"].clippingPlanes=[a,o,c[y]],h[y+":p"]=Yi(u({}),h_),h[y+":p"].clippingPlanes=[a,o,l[y]],h[y+":e"]=new cn({vertexColors:!0,toneMapped:!1,clippingPlanes:[a,o,c[y]],clipIntersection:!0}),h[y+":u"]=u({});let f=[],d=new Ke(new U(0,0,-1),1e5);h.ground=Yi(u({roughness:.95}),fo),h.base=Yi(u({roughness:1}),fo),h.ctx=Yi(u({}),fo),h.yard=Yi(u({}),fo),h["yard:p"]=Yi(u({}),fo),h["yard:e"]=new cn({vertexColors:!0,toneMapped:!1,clippingPlanes:[d]});for(let y of["ground","base","ctx","yard","yard:p"])h[y].clippingPlanes=[d],h[y].clipIntersection=!1;let g=[],x=(y,v,_)=>{let b=y.split(":")[0],S=h[y]||h[b];if(!S)return null;let T=new me(Mh(v),S),C=y.endsWith(":e");return T.castShadow=!C&&b!=="ground"&&b!=="base",T.receiveShadow=!C,(_||r[b]).add(T),g.push(T),T};for(let[y,v]of Object.entries(n))x(y,v);let m={};for(let[y,{g:v,k:_}]of Object.entries(Ln)){let b=new we,S=new we;S.name=y,S.add(b),r[v].add(S);for(let[E,M]of Object.entries(_.out()))x(E,M,b);let T=new zn().setFromObject(b),C=Ln[y].pivot?new U(...Ln[y].pivot):T.getCenter(new U);b.position.copy(C).negate(),S.position.copy(C),S.userData={center:C.clone(),box:T,home:C.clone(),group:v,open:Ln[y].open},m[y]=S}let p=null;if(i.trees!==!1){let y=u_(),v=p=new li({vertexColors:!0,roughness:.95,clippingPlanes:[d]}),b=(S=>{if(!S.length)return null;let T=new Lr(y,v,S.length),C=new Ie,E=new Dn,M=new U,R=new U,F=new ie,z=new U(0,1,0),B=new ie("#82966B"),q=new ie("#A2AD80");return S.forEach(([H,tt,G,st],Z)=>{let ot=Math.sin(H*12.9898+tt*78.233)*43758.5453,at=ot-Math.floor(ot);E.setFromAxisAngle(z,at*6.28),M.set(G*(.9+at*.2),G*(.95+at*.2),G*(.9+at*.2)),R.set(H,(st!=null?st:-.45)+.05,tt),C.compose(R,E,M),T.setMatrixAt(Z,C),F.copy(B).lerp(q,at),T.setColorAt(Z,F)}),T.castShadow=!0,T.receiveShadow=!0,T.frustumCulled=!1,T})(e.trees);b&&r.ctx.add(b)}return{root:s,groups:r,parts:m,M:h,planes:{px:a,pz:o,pyS:c,pyP:l,gb:f,pzC:d},meshes:g,treeMat:p}}function $f(i,t={}){var W,Y;let e=(W=t.mobile)!=null?W:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),n=new _c({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Ma,n.shadowMap.autoUpdate=!1,n.toneMapping=Ca,n.toneMappingExposure=(Y=t.exposure)!=null?Y:1,n.localClippingEnabled=!0,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",i.appendChild(n.domElement);let s=new Dr,r=new dn(30,1,1,4e3),a=f_(t);s.add(a.root);let o=new Jr("#EEF2F5","#B5AB9A",1.3);s.add(o);let c=new Qr("#FFF2DF",2.6),l=new U(-.5,.78,.38).normalize(),h=new U(0,10,0);c.position.copy(h).addScaledVector(l,400),c.target.position.copy(h),s.add(c,c.target),c.castShadow=!0;let u=e?2048:4096;c.shadow.mapSize.set(u,u),c.shadow.bias=-3e-4,c.shadow.normalBias=.04,c.shadow.radius=2;let f=k=>{let pt=c.shadow.camera,D=new Ie().lookAt(c.position,c.target.position,new U(0,1,0)).setPosition(c.position).invert(),Wt=1e9,At=-1e9,Rt=1e9,Tt=-1e9,Ee=1e9,yt=-1e9,Xt=new U;for(let Qe of[k.x0,k.x1])for(let ke of[k.y0,k.y1])for(let P of[k.z0,k.z1])Xt.set(Qe,ke,P).applyMatrix4(D),Wt=Math.min(Wt,Xt.x),At=Math.max(At,Xt.x),Rt=Math.min(Rt,Xt.y),Tt=Math.max(Tt,Xt.y),Ee=Math.min(Ee,Xt.z),yt=Math.max(yt,Xt.z);Object.assign(pt,{left:Wt,right:At,bottom:Rt,top:Tt,near:-yt-5,far:-Ee+5}),pt.updateProjectionMatrix(),n.shadowMap.needsUpdate=!0},d=t.shadowBox||{x0:-39,x1:39,z0:-36,z1:30,y0:-.45,y1:16};f(d);let g=!0,x=!0,m=!0,p=performance.now(),y=[],v=[],_=new Ec(r,n.domElement,{minR:4,maxR:340,minPhi:.1,maxPhi:1.48,bounds:{x0:-66,x1:66,z0:-66,z1:51},onChange:()=>{g=!0},onStart:()=>{for(let k of y)k()},onWheelHint:()=>{for(let k of v)k()},...t.controls||{}}),b=(k,pt)=>{var At;let D=typeof k=="string"?Tc[k]:k,Wt={th:D.th,ph:D.ph,r:D.r,t:new U(...D.t)};pt?_.set(Wt,!0):_.flyTo(Wt,(At=D.dur)!=null?At:1.3)};b(t.view||"ov",!0);let S=a.planes,T=a.groups,C=1e5,E=null;function M(k){var At,Rt,Tt,Ee;k=typeof k=="string"?{kind:k}:k;let pt=JSON.stringify(k);if(pt===E)return;E=pt;let D=k.kind;S.px.constant=C,S.pz.constant=C,S.pzC.constant=C;for(let yt of wc)S.pyS[yt].constant=C,S.pyP[yt].constant=C,T[yt].visible=!0;for(let yt of c_)T[yt].visible=!0;let Wt=()=>{S.px.constant=-C,S.pz.constant=-C};if(D==="ov")Wt(),T.R.visible=!1,S.pyS.F3.constant=Et.F3+((At=k.cut)!=null?At:1.5),S.pyP.F3.constant=Et.F3+((Rt=k.cut)!=null?Rt:1.5)+.12,k.ann!=null&&(S.pyS.ann.constant=Et.F2+k.ann,S.pyP.ann.constant=Et.F2+k.ann+.12);else if(D==="plan"){Wt();let yt=Zf[k.floor];for(let Xt of wc)Zf[Xt]>yt&&(T[Xt].visible=!1);k.cut!=null&&(S.pyS[k.floor].constant=Jf[k.floor]+k.cut,S.pyP[k.floor].constant=Jf[k.floor]+k.cut+.12,k.floor==="F1"&&(S.pyS.ann.constant=k.cut,S.pyP.ann.constant=k.cut+.12),k.floor==="F2"&&(S.pyS.ann.constant=Et.F2+k.cut,S.pyP.ann.constant=Et.F2+k.cut+.12))}else if(D==="sec"){S.px.constant=-C,S.pz.constant=(Tt=k.z)!=null?Tt:-3.75,S.pzC.constant=(Ee=k.z)!=null?Ee:-3.75;for(let yt of wc)S.pyS[yt].constant=-C,S.pyP[yt].constant=-C;k.noRoof&&(T.R.visible=!1)}n.shadowMap.needsUpdate=!0,g=!0}let R=!1,F=new ie("#283041");function z(k){var pt;k=!!k,k!==R&&(R=k,o.color.set(k?"#8C9AB8":"#EEF2F5"),o.groundColor.set(k?"#3B3A44":"#B5AB9A"),o.intensity=k?1.15:1.3,c.color.set(k?"#B9C8EA":"#FFF2DF"),c.intensity=k?.75:2.6,s.background=k?F:null,n.toneMappingExposure=((pt=t.exposure)!=null?pt:1)*(k?1.05:1),n.shadowMap.needsUpdate=!0,g=!0)}M(t.mode||"ov");let B={x:.5,y:.5,tx:.5,ty:.5},q=()=>{let k=i.clientWidth||800,pt=i.clientHeight||500;Math.abs(B.x-.5)<1e-4&&Math.abs(B.y-.5)<1e-4?r.clearViewOffset():r.setViewOffset(k,pt,(.5-B.x)*k,(.5-B.y)*pt,k,pt)},H=k=>{if(B.x===B.tx&&B.y===B.ty)return!1;let pt=1-Math.exp(-k*5);return B.x+=(B.tx-B.x)*pt,B.y+=(B.ty-B.y)*pt,Math.abs(B.tx-B.x)+Math.abs(B.ty-B.y)<.001&&(B.x=B.tx,B.y=B.ty),q(),!0},tt=()=>{let k=i.clientWidth||800,pt=i.clientHeight||500;n.setSize(k,pt,!1),r.aspect=k/pt,r.updateProjectionMatrix(),q(),g=!0},G=new ResizeObserver(tt);G.observe(i),tt();let st=new IntersectionObserver(k=>{x=k[0].isIntersecting,x&&(g=!0)});st.observe(i);let Z=[],ot=[],at=[],_t=()=>{for(let k of at)k(r);n.render(s,r);for(let k of Z)k(r)},Vt=0,kt=!1,$=0,N=k=>{if(!m||(requestAnimationFrame(N),kt))return;let pt=Math.max(0,Math.min(.05,(k-p)/1e3));if(p=k,!x||document.hidden)return;let D=L.animating||k<L.animUntil,Wt=!D&&L.ambient&&k-Vt>50;if(D||Wt){for(let Tt of ot)Tt(pt,k/1e3);Wt&&(Vt=k)}let At=_.update(pt),Rt=H(pt);(g||At||Rt||D||Wt)&&(_t(),g=!1)};requestAnimationFrame(N);let L={renderer:n,scene:s,camera:r,controls:_,world:a,parts:a.parts,setView:b,VIEWS:Tc,setMode:M,setNight:z,night:()=>R,mode:()=>JSON.parse(E),animating:!1,animUntil:0,ambient:!1,mobile:e,invalidate:()=>{g=!0},setCenter:(k,pt,D)=>{B.tx=k,B.ty=pt,D&&(B.x=k,B.y=pt,q(),g=!0)},hold:k=>{kt=k,k?($=performance.now()/1e3,_.now=()=>$*1e3):_.now=()=>performance.now()},step:k=>{$+=k;for(let pt of ot)pt(k,$);_.update(k),_t()},setShadowBox:k=>{f(k||d),g=!0},shadowDirty:()=>{n.shadowMap.needsUpdate=!0,g=!0},renderNow:()=>{_.update(1),_t()},onRender:k=>Z.push(k),onBeforeRender:k=>at.push(k),onFrame:k=>ot.push(k),onUserStart:k=>y.push(k),onWheelHint:k=>v.push(k),dispose:()=>{m=!1,G.disconnect(),st.disconnect(),n.dispose(),n.domElement.remove()}};return L}var lt=.05,it=Et.F2+.04,vt=Et.F3+.04,Ms=Et.TOP+.04,Ot=-.45+.03,Zi=Et.F2/2+.04,hn=(Et.F2+Et.F3)/2+.04,Ac={kind:"ext"},mo={kind:"plan",floor:"F1",cut:1.5},bs={kind:"plan",floor:"F2",cut:1.5},lr={kind:"ov",cut:1.5};var Eh={kind:"ov",cut:1.5,ann:1.5},Rc={mode:lr,cam:{t:[-2,3.5,-6],r:74,ph:.72,th:-.15},beats:[[0,1,2],[10,11],[13,14,15]]},d_={kind:"plan",floor:"F2",cut:2},Mn=-7.79,Ae=-4.99,Qf=[[-5.4,lt,Mn],[-6,lt,Mn],[-8.8,Zi,Mn],[-10.2,Zi,Mn],[-10.2,Zi,Ae],[-8.8,Zi,Ae],[-6,it,Ae]],p_=[...Qf].reverse(),Sh=[[5.2,it,Ae],[6,it,Ae],[8.8,hn,Ae],[10.2,hn,Ae],[10.2,hn,Mn],[8.8,hn,Mn],[6,vt,Mn]],m_=[...Sh].reverse(),go={main:1,bar:1,f1a:0,f1s:0,f1b:0,gd:0,dg:0,f2a:1,f2b:0,f2s:1,rear:0,gate:0,tdoor:0,cb:0,shelf:0},bh=[["n",-2.1,it+.45,5.07,[-2.1,it,2.5],"sleep"],["n",-.37,it,4.93,[1,it,4.93],"sitbed"],["n",-10.93,it,.5,[-6,it,.5],"sitbed"],["n",10.93,it+.45,-2.3,[8,it,-2.3],"sleep"]],Xn=[{b:[0,1,2,3],mode:Ac,cam:{t:[0,2.5,-4],r:70,ph:1,th:.5},at:[-14.2,Ot,-9]},{b:[4,5,6],mode:mo,cam:{t:[-2,1,0],r:40,ph:.85,th:.3},at:[-2.5,lt,-7.8]},{b:[7,8,9],mode:bs,cam:{t:[0,it,-2],r:40,ph:.85,th:.3},at:[-.5,it,-5]},{b:[10,11],mode:lr,cam:{t:[-1,vt,-5],r:36,ph:.85,th:.55},at:[.5,vt,-7.8]},{b:[12,13,14,15],mode:lr,cam:{t:[-2,vt-1,-8],r:40,ph:.9,th:2.7},at:[-8.6,vt,-7.4]},{b:[16,17,18,19,20,21],mode:mo,cam:{t:[-3,1,-1],r:40,ph:.85,th:.35},at:[-4.6,lt,-5]}],qn=[{p:[4.8,Ot,8.7],pl:[4.8,Ot,7.3],pose:"look",path:[[17,Ot,12.6],[9,Ot,9.8],[4.8,Ot,8.7]],u:[["g",1.7,lt,7.3,[3,Ot,10],"look"],["n",-6.5,Ot,11.2,[-12,Ot,11.4],"walk"]],lab:[["\u544A\u793A\u680F\uFF1A\u6697\u793A\u591C\u91CC\u6765\u66F4\u5B89\u5168",4.8,2.4,7.3,"item"],["\u6B63\u95E8\uFF1A\u76F4\u63A5\u8FDB\u53BB\u7684\u8DEF\u7EBF",-.2,4.3,6.8,"note"]],cam:{t:[2,1.6,7.2],r:12.5,ph:1.2,th:.62}},{p:[-9.8,Ot,9.6],pl:[-14.2,Ot,4],pose:"look",night:!0,path:[[4.8,Ot,8.7],[-4,Ot,9.8],[-9.8,Ot,9.6]],u:[["g",-14.6,Ot,-1.2,[-14.6,Ot,6],"walk"],["g",-13.8,Ot,1.8,[-13.8,Ot,8],"walk"],["g",14.3,Ot,1.2,[14.3,Ot,8],"walk"]],ep:[[[-14.2,Ot,-9.8],[-14.2,Ot,8.6],[-21,Ot,11.4]],[[14.2,Ot,-9.8],[14.2,Ot,8.6],[22,Ot,11.4]]],lab:[["\u591C\u91CC\uFF1A\u9ED1\u5E2E\u6CBF\u4E24\u4FA7\u5DF7\u5B50\u56DE\u5BB6",-14.2,3.2,-1.5,"item"],["\u4E1C\u4FA7\u5DF7\u5B50\u540C\u6837\u901A\u5230\u540E\u9662",14.2,3.2,-3,"note"]],cam:{t:[0,1.5,-.5],r:44,ph:.98,th:.1}},{p:[-6.9,Ot,-14.1],pl:[-8.6,Ot,-14.8],pose:"look",path:[[-9.8,Ot,9.6],[-14.2,Ot,8.4],[-14.2,Ot,-9.8],[-11.6,Ot,-13.2],[-6.9,Ot,-14.1]],u:[["c",-5.4,Ot,-12.2,[-4.4,Ot,-12.2],"cook"],["g",-10.6,Ot,-18.4,[-12.8,Ot,-18.6],"look"]],lab:[["\u9662\u91CC\u7684\u7076\uFF1A\u53A8\u5B50\u5728\u51C6\u5907\u996D\u83DC",-4.4,2.9,-12.2,"note"],["\u996D\u684C\uFF1A\u7B49\u53A8\u5B50\u4E0B\u73ED\uFF0C\u5F80\u996D\u83DC\u91CC\u4E0B\u6BD2",-8.6,2.3,-14.8,"item"]],cam:{t:[-6.4,1.2,-13.4],r:14,ph:1.12,th:-2.1}},{p:[-8.2,Ms,-6.45],pl:[-6.6,Ms,-6.45],pose:"talk",path:[[-14.2,Ot,2],[-15.1,Ot,-4.2],[-15.1,-.45+1,-5,1],[-14,-.45+1.9,-5.4,1],[-13.1,2.85,-6.3,1],[-12.55,3,-6.9],[-12.55,11.4,-6.9,1],[-11.3,Ms,-6.9,1],[-8.2,Ms,-6.45]],u:[["h",-6.6,Ms,-6.45,[-8.2,Ms,-6.45],"talk"]],lab:[["\u4ECE\u4FA7\u5DF7\u7684\u6728\u7BB1\u3001\u68DA\u9876\u548C\u94C1\u68AF\u8DF3\u4E0A\u53BB",-14.2,6.2,-6.2,"note"],["\u6652\u836F\u7684\u4EBA\uFF1A\u591C\u91CC\u80FD\u53D6\u5230\u836F",-6.6,Ms+2.5,-6.45,"item"]],cam:{t:[-9,8.5,-6.2],r:26,ph:1.05,th:-2.3}},{p:[1.9,lt,2.9],pl:[3.9,lt,2.9],pose:"talk",path:[[0,Ot,9.6],[0,lt,7.4],[0,lt,5.4],[.6,lt,3.8],[1.9,lt,2.9]],u:[["g",3.63,lt,2.9,[1.9,lt,2.9],"talk"],["g",-3.3,lt,2,[1.9,lt,2.9],"look"],["g",-2.5,lt,2.5,[1.9,lt,2.9],"look"],["n",5.9,lt,4.3,[4,lt,4.3],"look"]],lab:[["\u63A5\u5F85\uFF1A\u5148\u548C\u8FD9\u91CC\u7684\u9ED1\u5E2E\u4EA4\u8C08",3.9,2.9,2.9,"item"],["\u89C1\u5230\u73A9\u5BB6\u540E\u884C\u4E3A\u53CD\u5E38",-2.9,2.6,2.2,"note"]],cam:{t:[1.4,.9,2.8],r:15,ph:1.05,th:-1.15}},{p:[-7.6,lt,5.49],pl:[-7.6,lt,3],pose:"sit",dr:{f1b:.35},path:[[1.9,lt,2.9],[-1.5,lt,3.6],[-5,lt,3.6],[-7.6,lt,4.6],[-7.6,lt,5.49]],u:[["g",-9.3,lt,-1.7,[-11,lt,-1.7],"crouch"],["g",-7.4,lt,-1,[-9.3,lt,-1.7],"talk"],["n",-11.52,lt,3.6,[-8,lt,3.6],"sit"],["g",3.63,lt,2.9,[-5,lt,3.6],"look"]],lab:[["\u7B49\u5F85\uFF1A\u4FA7\u5385\u7684\u957F\u51F3",-7.6,2.3,5.3,"note"],["\u95E8\u7F1D\u91CC\uFF1A\u9ED1\u5E2E\u5728\u505A\u51C6\u5907",-8.4,2.8,-.9,"item"]],cam:{t:[-8.2,.9,1.6],r:16,ph:.92,th:1.75}},{p:[-5.4,lt,Mn],pl:[-8,lt,Mn],pose:"walk",path:[[-7.6,lt,5.49],[-4.2,lt,3.4],[0,lt,1.9],[0,lt,-2.7],[0,lt,Mn],[-5.4,lt,Mn]],u:[["g",.9,lt,1.6,[0,lt,-3],"point"]],lab:[["\u4E2D\u901A\u9053\uFF1A\u4ECE\u524D\u5385\u4E00\u76F4\u5411\u5185",0,2.5,-2.4,"note"],["\u5DE6\u540E\u4FA7\u7684\u697C\u68AF",-8.8,3.4,-7.8,"item"]],cam:{t:[-2.6,.9,-3.2],r:25,ph:.95,th:.4}},{p:[-1.2,it,Ae],pl:[4,it,Ae],pose:"walk",path:[...Qf,[-1.2,it,Ae]],u:[...bh,["n",2.2,it,.6,[0,it,-1],"look"]],lab:[["\u75C5\u623F\u5C31\u5728\u4E0A\u697C\u8DEF\u7EBF\u65C1",0,it+2.4,-.8,"note"],["\u4E8C\u697C\u8FC7\u9053",-3.2,it+2.1,Ae,"note"],["\u53F3\u540E\u697C\u68AF\uFF1A\u53BB\u4E09\u697C",8.8,it+3.2,-6.4,"item"]],cam:{t:[.6,it+.6,-3.2],r:24,ph:.98,th:-.55}},{p:[1.3,it,-2.55],pl:[2.03,it,-2.7],pose:"talk",path:[[-1.2,it,Ae],[0,it,-4.4],[0,it,-3],[1.3,it,-2.55]],u:[["n",2.03,it,-2.7,[1.3,it,-2.55],"sitbed"],...bh,["n",2.5,it,.8,[1.3,it,-2.55],"look"]],lab:[["\u548C\u75C5\u623F\u91CC\u7684\u4EBA\u4EA4\u8C08\uFF0C\u63A2\u542C\u7EBF\u7D22",1.6,it+2.3,-2.2,"item"]],cam:{t:[1.6,it+.8,-2.5],r:11,ph:1,th:.15}},{p:[10.2,hn,-6.4],pl:[10.2,hn,-9],pose:"walk",path:[[1.3,it,-2.55],[0,it,-3],[0,it,Ae],...Sh.slice(0,5)],u:bh,lab:[["\u53F3\u540E\u697C\u68AF\u53EA\u901A\u4E09\u697C",8.6,hn+2.2,-6.4,"note"],["\u697C\u68AF\u7684\u95E8\uFF08\u4E4B\u540E\u662F\u5173\u95E8\u70B9\uFF09",5.6,it+2.8,-5,"note"]],cam:{t:[6.2,it+1.2,-5.6],r:20,ph:1,th:-.45}},{p:[4.3,vt,-7.75],pl:[3.2,vt,-7.75],pose:"talk",path:[...Sh.slice(4),[4.3,vt,-7.75]],u:[["d",3.2,vt,-7.75,[4.3,vt,-7.75],"talk"],["g",-3.5,vt,-3.62,[-3.5,vt,-2],"sit"],["g",-2.5,vt,-2,[-2.5,vt,-3.6],"sit"]],lab:[["\u5B88\u95E8\u4EBA\uFF1A\u5148\u4EA4\u8C08\uFF0C\u624D\u80FD\u8FDB\u53BB",3.2,vt+2.6,-7.75,"item"],["\u503C\u5B88\u623F\u91CC\u5019\u7740\u4EBA",-3,vt+2.2,-2.8,"note"]],cam:{t:[3.6,vt+.9,-7.4],r:13,ph:1,th:.85}},{p:[-6.6,vt,-7.75],pl:[-9,vt,-7.4],pose:"walk",dr:{gate:1,tdoor:1},path:[[4.3,vt,-7.75],[2,vt,-7.75],[-4.9,vt,-7.75],[-6.6,vt,-7.75]],u:[["d",3.5,vt,-8.7,[0,vt,-7.75],"look"],["g",-3.5,vt,-3.62,[-3.5,vt,-2],"sit"],["g",-2.5,vt,-2,[-2.5,vt,-3.6],"sit"]],lab:[["\u201C\u75C5\u4EBA\u6240\u5728\u623F\u95F4\u201D\u5728\u6700\u6DF1\u5904",-8.6,vt+2.5,-6.8,"item"],["\u4E09\u697C\u8FC7\u9053",-1.4,vt+2.1,-7.75,"note"]],cam:{t:[-3.8,vt+.9,-7.3],r:17,ph:1,th:1.2}},{p:[5.23,it,Ae],pl:[5.8,it,Ae],pose:"push",mode:d_,dr:{gate:1,f2s:0},path:[...m_.slice(2,6),[5.23,it,Ae]],u:[["d",9.4,hn,Ae,[6,it,Ae],"run"],["g",10.2,hn,-6.6,[10.2,hn,-4],"run"],["g",9.5,hn,-7.3,[10.2,hn,-5.5],"run"]],ep:[[[8.8,hn,Mn],[10.2,hn,Mn],[10.2,hn,Ae],[9.4,hn,Ae]]],lab:[["\u95E8\u53E3\u53D1\u751F\u51B2\u7A81\uFF1A\u8F6C\u5411\u697C\u68AF\u64A4\u79BB",9.6,hn+2.6,Mn,"warn"],["\u5173\u4E0A\u697C\u68AF\u7684\u95E8\uFF0C\u6321\u4F4F\u8EAB\u540E\u7684\u4EBA",5.2,it+2.5,Ae,"item"]],cam:{t:[7,4.4,-5.6],r:17,ph:.88,th:-.45}},{p:[-7.5,vt,-7.5],pl:[-8.4,vt,-6.4],pose:"push",dr:{gate:1,tdoor:1},path:[[-6.6,vt,-7.75],[-7.5,vt,-7.5]],u:[["g",-8.3,vt,-6.65,[-7.5,vt,-7.5],"swing"],["g",-10.4,vt,-8.4,[-7.5,vt,-7.5],"swing"],["d",-4.9,vt,-7.75,[-8,vt,-7.75],"block"],["g",-3.7,vt,-7.2,[-6,vt,-7.7],"run"],["g",-2.6,vt,-8.1,[-6,vt,-7.7],"run"]],ep:[[[-3.5,vt,-3.6],[-3.5,vt,-5.7],[-4.3,vt,-6.6],[-3.7,vt,-7.2]]],lab:[["\u5C4B\u91CC\u6CA1\u6709\u75C5\u4EBA\uFF1A\u906D\u5230\u57CB\u4F0F",-9.2,vt+2.7,-6.8,"warn"],["\u623F\u95E8\u88AB\u5835\uFF1A\u5148\u5728\u5C0F\u623F\u95F4\u91CC\u6253\u5F00\u5C40\u9762",-4.6,vt+2.4,-7.75,"note"]],cam:{t:[-7.6,vt+.8,-7.2],r:12,ph:.98,th:.95}},{p:[-2.2,vt,-10.3],pl:[3,vt,-10.3],pose:"run",dr:{gate:1,tdoor:1},path:[[-7.5,vt,-7.5],[-8.6,vt,-8.7],[-8.6,vt+.95,-9.3,1],[-8.6,vt,-10.3,1],[-2.2,vt,-10.3]],u:[["g",-8.6,vt,-8.7,[-8.6,vt,-10.5],"point"],["g",-10.4,vt,-8.2,[-8.6,vt,-9.5],"run"]],ep:[[[-8.6,vt,-8.7],[-8.6,vt+.9,-9.3],[-8.4,vt,-10.3]]],lab:[["\u4ECE\u7A97\u6237\u9003\u51FA\uFF0C\u6CBF\u5916\u4FA7\u8D70\u5ECA\u5954\u8DD1",-5.2,vt+2.3,-10.4,"item"]],cam:{t:[-4.3,vt,-10.1],r:21,ph:.82,th:2.65}},{p:[3.9,it,-9.95],pl:[3.9,it,-8],pose:"run",dr:{gate:1,tdoor:1,rear:1},path:[[-2.2,vt,-10.3],[1.4,vt,-10.3],[2.8,vt,-10.3],[2.9,it,-10.9,1],[3.9,it,-10.6],[3.9,it,-9.95]],mode:Eh,fx:[["shock",2.8,vt+.4,-10.3,4.2],["fire",1.7,it+.06,-10.5,1]],lab:[["\u7206\u70B8\uFF1A\u8D70\u5ECA\u5730\u9762\u584C\u4E86\uFF0C\u4EBA\u6389\u8FDB\u4E0B\u9762\u7684\u6742\u7269\u95F4\uFF08\u4E8C\u697C\u9AD8\u5EA6\uFF09",2.8,vt+2.9,-10.6,"warn"],["\u6742\u7269\u95F4\u7684\u95E8\u901A\u50A8\u836F\u95F4\uFF1A\u56DE\u5230\u4E8C\u697C",3.9,it+2.5,-9.5,"item"]],cam:{t:[2.9,4.6,-10.4],r:13,ph:.62,th:3.1}},{p:[-4.6,it,-4],pl:[-4.6,it,-3],pose:"push",mode:bs,night:!0,dr:{rear:1,dg:1,gd:1,f2b:0},path:[[3.9,it,-9.95],[3.9,it,-8.4],[1.6,it,-6.9],[1.6,it,Ae],[.3,it,-4.5],[0,it,-3],[-1.8,it,.8],[-3,it,2.4],[-4.4,it,2.4],[-4.6,it,0],[-4.6,it,-3.2],[-4.6,it,-4]],u:[["g",-2.2,it,.2,[-4,it,2.4],"run"],["g",-.4,it,-2.4,[-2,it,.8],"run"],["g",-1.27,it+.02,-8.85,[-4,it,-8.85],"wake"],["n",2.5,it+.45,5.07,[2.5,it,2.5],"sleep"]],ep:[[[-2.8,it,-7.2],[-2.8,it,Ae],[0,it,-4.4],[0,it,-2.4],[-2.2,it,.2]]],lab:[["\u591C\u91CC\uFF1A\u7761\u7740\u7684\u5B88\u536B\u8D77\u6765\u67E5\u770B",-2.8,it+2.3,-7.6,"warn"],["\u7A7F\u8FC7\u75C5\u623F\u7ED5\u4E00\u5708",-1.8,it+2.2,1.2,"note"],["\u5173\u95E8\uFF1A\u628A\u8FFD\u5175\u5173\u5728\u75C5\u623F\u91CC",-4.6,it+2.5,-3.4,"item"]],cam:{t:[-1.4,it+.6,-2.4],r:23,ph:.96,th:.5}},{p:[-4.6,it,-4],pl:[-4.6,it,-3],pose:"push",mode:bs,dr:{rear:1,dg:1,f2b:0},path:[[3.9,it,-9.95],[3.9,it,-8.4],[1.6,it,-6.9],[1.6,it,Ae],[.3,it,-4.5],[0,it,-3],[-1.8,it,.8],[-3,it,2.4],[-4.4,it,2.4],[-4.6,it,0],[-4.6,it,-3.2],[-4.6,it,-4]],u:[["g",-2,it,.4,[-4,it,2.4],"run"],["g",3.6,it,Ae,[0,it,Ae],"run"],["n",2.7,it,1.9,[0,it,-1],"cower"],["n",-.37,it,4.93,[-1.8,it,.8],"cower"],["n",-10.6,it,-1.7,[-4.6,it,-1],"point"],["n",-2.1,it+.45,5.07,[-2.1,it,2.5],"sleep"]],ep:[[[6.6,it,Ae],[0,it,-4.4],[0,it,-2.4],[-2,it,.4]]],lab:[["\u767D\u5929\uFF1A\u75C5\u4EBA\u548C\u62A4\u58EB\u770B\u5230\u73A9\u5BB6\u540E\u7684\u53CD\u5E94",1.6,it+2.5,2,"warn"],["\u5173\u95E8\uFF1A\u628A\u8FFD\u5175\u5173\u5728\u75C5\u623F\u91CC",-4.6,it+2.5,-3.4,"item"]],cam:{t:[-1.4,it+.6,-2.4],r:23,ph:.96,th:.5}},{p:[-4.6,lt,-6],pl:[-4.6,lt,-6.8],pose:"push",dr:{f1a:0},path:[[-4.6,it,-4],[-5.4,it,Ae],...p_.slice(1),[-4.6,lt,-7.6],[-4.6,lt,-6]],u:[["g",0,lt,-5.2,[-3,lt,-7.8],"run"],["g",.4,lt,-3,[0,lt,-6],"run"],["g",-.3,lt,-1,[0,lt,-6],"run"],["g",-8.8,Zi,-6.4,[-6,lt,Mn],"run"]],ep:[[[0,lt,4.5],[0,lt,-6.8],[-3.4,lt,-7.8]],[[-6,it,Ae],[-8.8,Zi,Ae],[-10.2,Zi,Ae],[-10.2,Zi,-6.4]]],lab:[["\u9ED1\u5E2E\u4ECE\u524D\u5385\u6D8C\u8FDB\u4E2D\u901A\u9053",.2,2.8,-2.8,"warn"],["\u697C\u68AF\u51FA\u53E3\u65C1\u7684\u5E93\u623F\u95E8\uFF1A\u8FDB\u53BB\u540E\u5173\u4E0A",-4.6,2.8,-6.6,"item"]],cam:{t:[-3.4,.9,-4.6],r:21,ph:.96,th:.5}},{p:[-7,lt,3],pl:[-4,lt,3.4],pose:"run",dr:{f1s:1,f1b:1,shelf:1},path:[[-4.6,lt,-6],[-3.1,lt,-4.2],[-2.9,lt,-1.6],[-5,lt,-1.3],[-6.3,lt,-1.3],[-8,lt,-.4],[-8.6,lt,.5],[-8.6,lt,1.8],[-7,lt,3]],u:[["g",-4.6,lt,-2.8,[-4.6,lt,0],"down"],["g",-.2,lt,-6,[-4,lt,-6.4],"run"]],lab:[["\u63A8\u5012\u8D27\u67B6\uFF0C\u653E\u5012\u6321\u8DEF\u7684\u4EBA",-3.4,2.5,-3.4,"item"],["\u7ECF\u8BCA\u5BA4\u3001\u4FA7\u5385\u7ED5\u5411\u524D\u5385",-8.6,2.3,-.2,"note"]],cam:{t:[-6.2,.9,-1.2],r:21,ph:.96,th:.3}},{p:[0,lt,5.48],pl:[0,lt,6.5],pose:"hold",dr:{f1s:1,f1b:1,shelf:1,main:0,bar:0},path:[[-7,lt,3],[-4,lt,3.4],[-1.4,lt,4.3],[0,lt,5.48]],u:[["g",-3.1,lt,3.9,[-1,lt,4],"down"],["g",.3,lt,1.6,[0,lt,5],"run"],["g",-1.5,lt,2.6,[0,lt,5],"swing"],["g",2.4,lt,2,[0,lt,5],"run"]],ep:[[[0,lt,-4],[0,lt,1.6]],[[1.5,lt,-1],[2.4,lt,2]]],lab:[["\u9ED1\u5E2E\u4ECE\u4E2D\u901A\u9053\u6D8C\u5165\uFF0C\u5148\u6253\u5F00\u5C40\u9762",.2,2.7,1.4,"warn"],["\u5927\u95E8\u88AB\u5C01\uFF1A\u957F\u6309\u6253\u5F00",0,3.3,5.8,"item"]],cam:{t:[0,.9,3.2],r:15,ph:1,th:-1.45}},{p:[0,Ot,9.7],pl:[0,Ot,13],pose:"block",mode:Ac,dr:{main:1,bar:1},path:[[0,lt,5.48],[0,lt,7.4],[0,Ot,9.7]],u:[["x",0,Ot,12.3,[0,Ot,9.7],"point"],["g",-1.7,Ot,12.7,[0,Ot,9.7],"look"],["g",1.8,Ot,12.6,[0,Ot,9.7],"look"],["b",5.6,Ot,11.4,[0,Ot,12],"run"],["t",7.6,Ot,12.4,[0,Ot,12.6],"run"],["t",7.4,Ot,10.4,[0,Ot,11],"run"]],tp:[[[18,Ot,12],[5.6,Ot,11.4]]],lab:[["\u9003\u51FA\u5927\u95E8\uFF0C\u5BF9\u5934\u5835\u5728\u5916\u9762",0,3.1,12.4,"warn"],["\u5E2E\u4F1A\u5934\u76EE\u8D76\u6765\u8425\u6551",5.6,3.3,11.4,"item"]],cam:{t:[1.2,1.1,10.8],r:20,ph:1.15,th:1.3}}],jf={blast:14},xo={blast:{rub:[0,0],into:"ann",area:[ys.x0+.1,di.z0+di.t+.15,ys.x1-.1,di.z1-.3]}},g_=1.3,po=i=>i&&typeof i[0]=="number"?[i[0]*1.5,i[1],i[2]*1.5,...i.slice(3)]:i,x_=i=>i&&{...i,t:po(i.t),r:i.r*g_};function Kf(i){for(let t of["p","pl","at"])i[t]&&(i[t]=po(i[t]));i.path&&(i.path=i.path.map(po)),i.u&&(i.u=i.u.map(t=>[t[0],t[1]*1.5,t[2],t[3]*1.5,po(t[4]),...t.slice(5)]));for(let t of["tp","ep"])i[t]&&(i[t]=i[t].map(e=>e.map(po)));i.fx&&(i.fx=i.fx.map(t=>[t[0],t[1]*1.5,t[2],t[3]*1.5,...t.slice(4)])),i.lab&&(i.lab=i.lab.map(t=>[t[0],t[1]*1.5,t[2],t[3]*1.5,...t.slice(4)])),i.cam&&(i.cam=x_(i.cam))}qn.forEach(Kf);Xn.forEach(Kf);var Ss=(i,t={})=>new li({color:i,roughness:.75,metalness:0,...t}),__={p:{H:1.8,body:"#C47A22",head:"#E3BC93",limb:"#A8661C",ring:"#E7A537"},g:{H:1.8,body:"#3A4044",head:"#9C8C7C",limb:"#2C3134",club:"#5A4A3A",ring:"#B5462F"},d:{H:1.9,body:"#4A3A34",head:"#A08A78",limb:"#352A25",club:"#5A4A3A",ring:"#B5462F",wide:1.18},n:{H:1.74,body:"#B9B6AE",head:"#D2B392",limb:"#9C998F",ring:"#A9A090"},c:{H:1.76,body:"#E6E2D8",head:"#D2B392",limb:"#8F8A7E",ring:"#A9A090",apron:"#F4F1EA"},h:{H:1.72,body:"#C2A16E",head:"#D9B896",limb:"#9E8256",ring:"#C9B48E"},b:{H:1.86,body:"#2F6F7C",head:"#C9AE92",limb:"#245761",hat:"#1F3F46",ring:"#5FA8B5"},t:{H:1.8,body:"#3F7F8C",head:"#D9B896",limb:"#2F6470",ring:"#5FA8B5"},x:{H:1.86,body:"#7A2E25",head:"#B79C84",limb:"#5A231C",hat:"#3A2420",ring:"#B5462F"}};function Cc(i){let t=__[i],e=t.H,n=new we,s=new we;n.add(s),s.position.y=e*.5;let r=Ss(t.body),a=Ss(t.head),o=Ss(t.limb),c=new me(new Br(e*.13,e*.26,4,10),r);if(c.position.y=e*.2,t.wide&&c.scale.set(t.wide,1,t.wide*.95),s.add(c),t.apron){let p=new me(new kn(e*.24,e*.36,e*.03),Ss(t.apron));p.position.set(0,e*.1,e*.125),s.add(p)}let l=new me(new qr(e*.1,14,10),a);l.position.y=e*.44,s.add(l);let h=(p,y,v)=>{let _=new we,b=new me(new kn(p,y,p),v);return b.position.y=-y/2,_.add(b),_},u=h(e*.07,e*.34,o),f=h(e*.07,e*.34,o);u.position.set(-e*.17,e*.33,0),f.position.set(e*.17,e*.33,0);let d=h(e*.085,e*.46,o),g=h(e*.085,e*.46,o);if(d.position.set(-e*.07,0,0),g.position.set(e*.07,0,0),s.add(u,f,d,g),t.club){let p=new me(new kn(e*.035,e*.035,e*.34),Ss(t.club));p.position.set(0,-e*.33,e*.12),p.rotation.x=.25,f.add(p)}if(t.hat){let p=new me(new Ei(e*.1,e*.13,e*.06,14),Ss(t.hat));p.position.y=e*.52,s.add(p);let y=new me(new Ei(e*.075,e*.085,e*.08,14),Ss(t.hat));y.position.y=e*.57,s.add(y)}let x=new me(new $s(e*.32,e*.42,28),new cn({color:t.ring,transparent:!0,opacity:.85,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.position.y=.04,x.renderOrder=2,n.add(x),n.traverse(p=>{p.isMesh&&p!==x&&(p.castShadow=!0,p.receiveShadow=!1)});let m={root:n,hips:s,torso:c,armL:u,armR:f,legL:d,legR:g,H:e,kind:i,ring:x,pose(p="idle",y=0){s.rotation.set(0,0,0),s.position.set(0,e*.5,0);for(let b of[u,f,d,g])b.rotation.set(0,0,0);let v=Math.sin(y*9),_=!1;switch(p){case"walk":{let b=Math.sin(y*5.5);d.rotation.x=.38*b,g.rotation.x=-.38*b,u.rotation.x=-.3*b,f.rotation.x=_?-.15:.3*b;break}case"run":s.rotation.x=.22,d.rotation.x=.7*v,g.rotation.x=-.7*v,u.rotation.x=-.6*v,f.rotation.x=_?-.3:.6*v;break;case"stumble":s.rotation.x=.5,d.rotation.x=.5*v,g.rotation.x=-.5*v,u.rotation.z=-1.1,f.rotation.z=1.1,s.position.y=e*.46;break;case"throw":f.rotation.x=-2.1,u.rotation.x=.5,d.rotation.x=-.35,g.rotation.x=.3;break;case"cast":u.rotation.set(-2.7,0,-.35),f.rotation.set(-2.7,0,.35);break;case"slam":s.rotation.x=-.15,u.rotation.x=-3,f.rotation.x=-3;break;case"charge":s.rotation.x=.55,f.rotation.x=-1.35,u.rotation.x=-.6,d.rotation.x=.8*v,g.rotation.x=-.8*v;break;case"fly":s.rotation.x=.35,d.rotation.x=.7,g.rotation.x=.5,u.rotation.z=-.9,f.rotation.z=.9;break;case"fall":s.rotation.x=-.4,u.rotation.z=-2.2,f.rotation.z=2.2,d.rotation.x=-.6,g.rotation.x=.4;break;case"down":s.rotation.x=-1.45,s.position.y=e*.14,u.rotation.z=-.5,f.rotation.z=.5,d.rotation.x=.1;break;case"grab":s.rotation.x=.3,u.rotation.x=-1.5,_?f.rotation.x=-1.5:f.rotation.set(.45,0,.5);break;case"held":s.rotation.x=-.3,d.rotation.x=.5,g.rotation.x=.2,u.rotation.z=-1.2,f.rotation.z=1.2,s.position.y=e*.62;break;case"burn":u.rotation.set(-.6+.4*v,0,-1.1),f.rotation.set(-.6-.4*v,0,1.1),s.rotation.z=.1*v;break;case"dodge":s.rotation.z=.5,s.position.y=e*.4,d.rotation.x=-.9,g.rotation.x=.6,u.rotation.z=-1;break;case"push":s.rotation.x=-.35,d.rotation.x=-.5,g.rotation.x=.4,u.rotation.x=-1.4,f.rotation.x=-1.4;break;case"sneak":{let b=Math.sin(y*4.5);s.position.y=e*.38,s.rotation.x=.35,d.rotation.x=-.7+.35*b,g.rotation.x=-.7-.35*b,u.rotation.x=-.5,f.rotation.x=-.5;break}case"crouch":s.position.y=e*.32,s.rotation.x=.25,d.rotation.x=-1.1,g.rotation.x=-.5,u.rotation.x=-.6,f.rotation.x=-.9;break;case"sidle":{let b=Math.sin(y*3.5);u.rotation.z=-.5,f.rotation.z=.5,d.rotation.z=-.15*b,g.rotation.z=.15*b;break}case"climb":{let b=Math.sin(y*5);u.rotation.x=-2.8+.4*b,f.rotation.x=-2.8-.4*b,d.rotation.x=-.6+.4*b,g.rotation.x=-.6-.4*b;break}case"talk":{let b=Math.sin(y*3);f.rotation.set(-1+.35*b,0,.3),u.rotation.set(-.4-.2*b,0,-.25);break}case"bid":{let b=Math.abs(Math.sin(y*2.4));f.rotation.set(-2.6+.3*b,0,.15),u.rotation.set(-1.2,0,-.4),s.rotation.x=-.06;break}case"look":s.rotation.x=.12,u.rotation.set(-.3,0,-.15),f.rotation.set(-.3,0,.15);break;case"aim":f.rotation.x=-1.5,u.rotation.set(-1.5,0,.45),d.rotation.x=-.2,g.rotation.x=.25;break;case"stab":s.rotation.x=.35,f.rotation.x=-1.7,u.rotation.set(-1.9,0,.5),d.rotation.x=-.5,g.rotation.x=.4;break;case"shoot":{let b=Math.sin(y*40)*.03;s.rotation.x=.25,s.position.y=e*.44,f.rotation.x=-1.35+b,u.rotation.set(-1.35+b,0,.35),d.rotation.x=-.7,g.rotation.x=.2;break}case"blown":s.rotation.x=-1.1,u.rotation.z=-2,f.rotation.z=2,d.rotation.x=-.8,g.rotation.x=.5;break;case"cower":s.position.y=e*.3,s.rotation.x=.5,d.rotation.x=-1.2,g.rotation.x=-1.2,u.rotation.set(-2.6,0,-.5),f.rotation.set(-2.6,0,.5);break;case"sleep":s.rotation.x=-Math.PI/2,s.position.y=e*.14,u.rotation.z=-.15,f.rotation.z=.15;break;case"sit":s.position.y=e*.27,d.rotation.x=-1.45,g.rotation.x=-1.45,u.rotation.x=-.5,f.rotation.x=-.5;break;case"sitbed":s.position.y=e*.3,d.rotation.x=-1.4,g.rotation.x=-1.4,u.rotation.x=-.3,f.rotation.x=-.3;break;case"wake":s.position.y=e*.3,s.rotation.x=-.25,d.rotation.x=-1.4,g.rotation.x=-1.4,u.rotation.set(-.6+.2*v,0,-.3),f.rotation.set(-1.9,0,.3);break;case"cook":{let b=Math.sin(y*4);s.rotation.x=.2,f.rotation.set(-1.2+.25*b,0,.25*b),u.rotation.set(-.9,0,-.2);break}case"dry":{let b=Math.sin(y*2);s.rotation.x=.55+.1*b,u.rotation.x=-1.2,f.rotation.x=-1.2-.2*b;break}case"hold":{let b=Math.sin(y*30)*.02;s.rotation.x=.3,d.rotation.x=-.6,g.rotation.x=.5,u.rotation.x=-1.6+b,f.rotation.x=-1.6-b;break}case"swing":{let b=(Math.sin(y*7)+1)/2;s.rotation.x=.15,f.rotation.set(-2.6+2.2*b,0,.2),u.rotation.x=-.4,d.rotation.x=-.35,g.rotation.x=.3;break}case"block":u.rotation.set(-.2,0,-1.25),f.rotation.set(-.2,0,1.25),d.rotation.z=-.12,g.rotation.z=.12;break;case"point":f.rotation.set(-1.55,0,.1),u.rotation.z=-.08;break;case"vault":s.rotation.x=.6,d.rotation.x=-1.3,g.rotation.x=-.2,u.rotation.x=-1.1,f.rotation.x=-1.1,s.position.y=e*.55;break;case"wave":{let b=Math.sin(y*6);f.rotation.set(-2.8,0,.4+.35*b),u.rotation.z=-.1;break}default:u.rotation.z=-.08,f.rotation.z=.08}}};return m.pose("idle"),m}function Ic(i=1.5,t=1,e={}){let n=new we,s=new cn({color:"#EC6E2A",transparent:!0,opacity:.9}),r=new cn({color:"#F6B63E",transparent:!0,opacity:.95}),a=Math.max(3,Math.round(i*3.2));for(let o=0;o<a;o++){let c=o*2.39996+t,l=i*Math.sqrt((o+.5)/a)*.8,h=.9+(o*7+t*3)%5*.22,u=new me(new Ys(.28+.1*(o%2),h,6),o%3?s:r);u.position.set(Math.cos(c)*l,h/2,Math.sin(c)*l),u.userData.h=h,u.userData.k=o*1.7+t,n.add(u)}if(e.spot!==!1){let o=new me(new Or(i*1.15,28),new cn({color:"#EC6E2A",transparent:!0,opacity:.28,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.05,n.add(o)}return n.userData.tick=o=>{for(let c of n.children)c.userData.h&&(c.scale.y=.8+.35*Math.abs(Math.sin(o*6+c.userData.k)))},n}function Pc(i=1){let t=new cn({color:"#FFD27A",transparent:!0,opacity:.9,depthWrite:!1}),e=new me(new cs(i,1),t);return e.userData.at=n=>{e.scale.setScalar(.3+1.2*n),t.opacity=.9*(1-n)},e}function Dc(i=4){let t=new cn({color:"#F3E3C2",transparent:!0,opacity:.8,depthWrite:!1,side:Tn}),e=new me(new $s(.86,1,48),t);return e.rotation.x=-Math.PI/2,e.userData.at=n=>{e.scale.setScalar(.4+i*n),t.opacity=.8*(1-n)},e}function hr(i,t,e,n={}){var d,g;let s=i.map(x=>new U(...x)),r=s.length>2?new os(s,!1,"centripetal",.2):new Zs(s[0],s[1]||s[0].clone().add(new U(0,.01,0))),a=r.getLength(),o=Math.max(8,Math.round(a*3)),c=[];if(n.dash){let[x,m]=n.dash,p=Math.max(1,Math.floor(a/(x+m)));for(let y=0;y<p;y++){let v=y*(x+m)/a,_=Math.min(1,(y*(x+m)+x)/a),b=[];for(let S=0;S<=4;S++)b.push(r.getPointAt(v+(_-v)*S/4));c.push(new Qs(new os(b),4,t,6,!1))}}else c.push(new Qs(r,o,t,7,!1));let l=new we,h=new cn({color:e,transparent:!!n.opacity,opacity:(d=n.opacity)!=null?d:1}),u=new cn({color:e,transparent:!0,opacity:(g=n.xray)!=null?g:.22,depthTest:!1,depthWrite:!1}),f=n.xray!==0;for(let x of c){let m=new me(x,h);if(l.add(m),f){let p=new me(x,u);p.renderOrder=5,l.add(p)}}if(n.every){let x=new Ys(t*2.6,t*5,10);x.rotateX(Math.PI/2);let m=Math.max(1,Math.floor(a/n.every));for(let p=1;p<=m;p++){let y=Math.min(.999,(p-(n.last?0:.5))/m),v=r.getPointAt(y),_=r.getTangentAt(y);for(let b of f?[h,u]:[h]){let S=new me(x,b);S.position.copy(v),S.lookAt(v.clone().add(_)),b===u&&(S.renderOrder=5),l.add(S)}}}return l.userData.length=a,l.userData.curve=r,l}function Fc(i,t,e,n={}){var c,l;let s=new U(...i),r=new U(...t),a=s.clone().lerp(r,.5);a.y+=s.distanceTo(r)*((c=n.arc)!=null?c:.12);let o=[];for(let h=0;h<=10;h++){let u=h/10,f=s.clone().multiplyScalar((1-u)*(1-u)).add(a.clone().multiplyScalar(2*u*(1-u))).add(r.clone().multiplyScalar(u*u));o.push([f.x,f.y,f.z])}return hr(o,(l=n.r)!=null?l:.12,e,{dash:n.dash,every:999,last:!0,xray:.3})}var Lc={blast:["#C2B9AA","#D6CEC0","#5A6366"],bar:["#7A6753","#6F5A45","#8E7459"]},td={blast:Et.F2+.05},ed=i=>{let t=7+i.length*13+i.charCodeAt(i.length-1)*3;return()=>(t=(t*9301+49297)%233280)/233280},wh=(i,t,e)=>i+(t-i)*e;function Uc(i){let t=i.world,e={},n=d=>Object.keys(i.parts).filter(g=>g===d||g.startsWith(d+"."));function s(d){var q;let g=i.parts[d],x=xo[d];if(!g||!x||!x.rub)return null;let m=g.userData.box,p=g.userData.group,y=new fi,v=m.min.x,_=m.max.x,b=m.min.z,S=m.max.z,T=(q=td[d])!=null?q:m.min.y+.02,[C,E]=x.rub;C<0&&(v-=1.6),C>0&&(_+=1.6),E<0&&(b-=1.6),E>0&&(S+=1.6),x.area&&([v,b,_,S]=x.area);let M=(x.into||p)+":p",R=Lc[d]||Lc.blast,F=ed(d),z=16;for(let H=0;H<z;H++){let tt=.2+F()*.5,G=.1+F()*.22,st=.2+F()*.45;y.ybox(M,R[H%R.length],v+F()*(_-v),T+G/2,b+F()*(S-b),tt,G,st,F()*3)}y.beam(M,"#5A6366",[v+.4,T+.1,b+.5],[v+1.6,T+.5,S-.4],.06),y.beam(M,"#5A6366",[_-.5,T+.1,b+.3],[_-1.9,T+.3,b+1.2],.06);let B=new we;for(let[H,tt]of Object.entries(y.out())){let G=new me(Mh(tt),t.M[H]||t.M[p]);G.castShadow=!0,G.receiveShadow=!0,B.add(G)}return t.groups[x.into||p].add(B),B.visible=!1,B}let r=d=>d in e?e[d]:e[d]=s(d);function a(d,g,x){let m=n(d);if(m.length&&i.parts[m[0]].userData.open!=null){for(let y of m)i.parts[y].rotation.y=g*i.parts[y].userData.open;return}let p=i.parts[d];if(p){if(d==="shelf"){p.rotation.z=g*Math.PI/2;return}if(p.visible=!(g>=1),xo[d]&&xo[d].rub){let y=g>=1&&!x,v=y?r(d):e[d];v&&(v.visible=y)}}}function o(d){let g={...go,...d>=0&&qn[d]&&qn[d].dr||{}};for(let[x,m]of Object.entries(g))a(x,m);for(let[x,m]of Object.entries(jf))a(x,d>=0&&m<d?1:0);i.shadowDirty()}function c(d){for(let[g,x]of Object.entries({...go,...d||{}}))a(g,x)}let l=new kn(1,1,1),h={},u=d=>h[d]||(h[d]=new li({color:d,roughness:.85}));function f(d){var E;let g=i.parts[d];if(!g)return null;let x=g.userData.box,m=xo[d]||{},[p,y]=m.rub||[0,0],v=ed(d+"b"),_=Lc[d]||Lc.blast,b=(E=td[d])!=null?E:x.min.y,S=new we,T=[];for(let M=0;M<20;M++){let R=[.18+v()*.4,.1+v()*.25,.16+v()*.4],F=new me(l,u(_[M%_.length]));F.scale.set(...R),F.castShadow=!0;let z=new U(wh(x.min.x,x.max.x,v()),wh(x.min.y,x.max.y,v()),wh(x.min.z,x.max.z,v())),B=2.5+v()*3,q=new U((p*(.6+v()*.8)+(v()-.5)*1.2)*B,1+v()*3,(y*(.6+v()*.8)+(v()-.5)*.8)*B),H=14,tt=b+R[1]/2,G=z.y-tt,st=(q.y+Math.sqrt(Math.max(0,q.y*q.y+2*H*G)))/H;if(m.area){let[at,_t,Vt,kt]=m.area,$=Math.min(Vt,Math.max(at,z.x+q.x*st)),N=Math.min(kt,Math.max(_t,z.z+q.z*st));q.x=($-z.x)/st,q.z=(N-z.z)/st}let Z=new U(v()-.5,v()-.5,v()-.5).normalize(),ot=4+v()*9;T.push({m:F,p0:z,vel:q,gy:H,tl:st,ax:Z,w:ot,rot0:v()*6}),S.add(F)}t.root.add(S),S.visible=!1;let C=new Dn;return{g:S,at(M){if(M<0){S.visible=!1;return}S.visible=!0;for(let R of T){let F=Math.min(M,R.tl);R.m.position.set(R.p0.x+R.vel.x*F,R.p0.y+R.vel.y*F-R.gy*F*F/2,R.p0.z+R.vel.z*F),C.setFromAxisAngle(R.ax,R.rot0+R.w*F),R.m.quaternion.copy(C)}},end:Math.max(...T.map(M=>M.tl)),dispose(){t.root.remove(S)}}}return{set:a,at:o,doors:c,burst:f}}function Nc(i,t){let e=document.createElement("div");e.className="bs-lay",t.appendChild(e);let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("aria-hidden","true"),n.style.cssText="width:100%;height:100%;overflow:visible;pointer-events:none;will-change:auto",e.appendChild(n);let s=[],r=new U,a=[];for(let m=8;m<=48;m+=8)a.push([0,-m],[0,m],[m,0],[-m,0]);let o="",c=".sbx-nda,.sbx-tb .grp,.sbx-tour,.sbx-hint,.sbx-cap,.sbx-x,.sbx-pop,.stg-cap,.stg-tl,.stg-next",l=[],h=-1e9,u=()=>{let m=t.getBoundingClientRect();l=[...t.querySelectorAll(c)].filter(p=>p.offsetWidth&&!p.hidden&&getComputedStyle(p).visibility!=="hidden"&&+getComputedStyle(p).opacity>.1).map(p=>{let y=p.getBoundingClientRect();return[y.left-m.left-3,y.top-m.top-3,y.right-m.left+3,y.bottom-m.top+3]})};function f(m,p,y,v){let _=document.createElement(v?"button":"span");v&&(_.type="button"),_.className=m,_.innerHTML=p,_.style.display="none",e.appendChild(_);let b={e:_,p:typeof y=="function"?null:new U(...y),fn:typeof y=="function"?y:null,on:!1,shown:!1,lab:/\bbs-lab\b/.test(m),w:0,h:0};return s.push(b),b}function d(m){let p=s.indexOf(m);p>=0&&s.splice(p,1),m.e.remove()}let g=m=>{m.shown&&(m.e.style.display="none",m.shown=!1)},x=(m,p,y)=>{m.e.style.transform=`translate(${p.toFixed(1)}px,${y.toFixed(1)}px)`};return i.onRender(m=>{let p=performance.now();p-h>400&&(u(),h=p);let y=t.clientWidth,v=t.clientHeight,_=l.slice(),b=[],S=[];for(let M of s){if(!M.on){g(M);continue}if(r.copy(M.fn?M.fn():M.p).project(m),r.z>1||r.z<-1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2){g(M);continue}M.shown||(M.e.style.display="",M.shown=!0);let R=(r.x+1)/2*y,F=(1-r.y)/2*v;(M.lab?b:S).push([M,R,F])}let T=(M,R,F)=>{let z=M.bw||(M.bw=M.e.offsetWidth);return z>40?[R-16,F-16,R-16+z,F+16]:[R-15,F-15,R+15,F+15]},C=M=>!_.some(R=>M[0]<R[2]&&M[2]>R[0]&&M[1]<R[3]&&M[3]>R[1]);S.sort((M,R)=>R[0].e.classList.contains("on")-M[0].e.classList.contains("on"));let E="";for(let[M,R,F]of S){let z=R,B=F,q=T(M,R,F),H=q[0]<4?4-q[0]:q[2]>y-4?Math.max(4-q[0],y-4-q[2]):0;if(H&&(z=R+H,q=T(M,z,B)),!C(q))for(let[tt,G]of a){let st=T(M,z+tt,B+G);if(st[0]>=0&&st[2]<=y&&st[1]>=0&&st[3]<=v&&C(st)){z+=tt,B+=G,q=st;break}}x(M,z,B),_.push(q),Math.hypot(z-R,B-F)>13&&(E+=`<line x1="${R.toFixed(1)}" y1="${F.toFixed(1)}" x2="${z.toFixed(1)}" y2="${B.toFixed(1)}"/><circle cx="${R.toFixed(1)}" cy="${F.toFixed(1)}" r="3"/>`)}E!==o&&(o=E,n.innerHTML=E?`<g stroke="#1F2725" stroke-opacity=".75" stroke-width="1.5" fill="#D2872C">${E}</g>`:""),b.sort((M,R)=>R[2]-M[2]);for(let[M,R,F]of b){M.w||(M.w=M.e.offsetWidth,M.h=M.e.offsetHeight);let z=M.w+12>=y?y/2:Math.min(Math.max(R,M.w/2+6),y-M.w/2-6),B=tt=>{let G=z-M.w/2,st=tt-11-M.h,Z=z+M.w/2,ot=tt-11;return _.find(at=>G<at[2]&&Z>at[0]&&st<at[3]&&ot>at[1])},q=Math.max(F,M.h+13),H=!1;for(let tt=0;tt<10;tt++){let G=B(q);if(!G){H=!0;break}if(G[1]+11-3-11-M.h<0)break;q=G[1]+11-3}if(!H){let tt=Math.max(F,M.h+13);for(let G=0;G<10;G++){let st=B(tt);if(!st){q=tt;break}if(tt=st[3]+11+M.h+3,tt>v-2)break}}_.push([z-M.w/2,q-11-M.h,z+M.w/2,q-11]),x(M,z,q)}}),{lay:e,add:f,remove:d,marks:s}}var oi={route:"#D2872C",team:"#3F8F9C",enemy:"#B5462F",mg:"#E7A537",atk:"#D2452F",fire:"#EC6E2A"},y_=i=>String(i+1).padStart(2,"0");function v_(i){let t=[],e=null;for(let n=1;n<i.length;n++){let s=i[n][3]===1;(!e||e.air!==s)&&(e={air:s,pts:[i[n-1].slice(0,3)]},t.push(e)),e.pts.push(i[n].slice(0,3))}return t}function Es(i,t,e,n={}){var r;let s=new we;for(let a of v_(i))a.pts.length<2||a.pts.reduce((c,l,h)=>h?c+Math.hypot(l[0]-a.pts[h-1][0],l[1]-a.pts[h-1][1],l[2]-a.pts[h-1][2]):0,0)<.05||s.add(a.air||n.dash?hr(a.pts,e*.8,t,{dash:n.dash||[.6,.45],xray:n.xray,opacity:n.opacity}):hr(a.pts,e,t,{every:(r=n.every)!=null?r:7,xray:n.xray,opacity:n.opacity}));return s}var nd=i=>i.traverse(t=>{t.geometry&&t.geometry.dispose()});function id(i,t,e={}){var $;let n=new we;n.name="show",i.scene.add(n);let s={route:new we,units:new we};n.add(s.route,s.units);let r=Nc(i,t),a=r.lay,o=Uc(i),c=($=e.scale)!=null?$:1,l=N=>N.traverse(L=>{L.material&&(L.material.clippingPlanes=[i.world.planes.pzC])}),h=-1,u=-1,f={route:!0,marks:!0,units:!0,labels:!0},d=N=>{let L=[],W=null;for(let Y of N){let k=qn[Y].p?qn[Y].path||[]:[];if(!k.length)continue;let pt=W&&W[W.length-1],D=k[0];(!W||Math.hypot(pt[0]-D[0],pt[1]-D[1],pt[2]-D[2])>.6)&&(W=[],L.push(W));for(let Wt of k){let At=W[W.length-1];(!At||Math.hypot(At[0]-Wt[0],At[1]-Wt[1],At[2]-Wt[2])>.01)&&W.push(Wt)}}return L.filter(Y=>Y.length>1)},g=(N,L)=>{let W=new we;for(let Y of d(N))W.add(Es(Y,oi.route,.16,L));return l(W),s.route.add(W),W},x=Xn.map((N,L)=>{let W=g(N.b,{every:7});return W.userData.k=L,W}),m=new we;for(let N of Rc.beats||[])m.add(g(N,{every:8,xray:0}));s.route.add(m);let p=(N,L)=>N.traverse(W=>{if(W.material){let Y=W.material;Y.depthTest?(Y.transparent=L<1,Y.opacity=L):Y.opacity=.22*L,Y.needsUpdate=!0}}),y=(N,L,W,Y)=>r.add(N,L,W,Y),v=e.lite?[]:Xn.map((N,L)=>{let W=y("bs-phm",`<b>${L+1}</b><span>${(e.phaseNames||[])[L]||""}</span>`,[N.at[0],N.at[1]+3.6,N.at[2]],1);return W.e.dataset.k=L,W.e.addEventListener("click",Y=>{Y.stopPropagation(),e.onPhase&&e.onPhase(L)}),W}),_=e.lite?[]:qn.map((N,L)=>{let W=N.p||N.path[N.path.length-1],Y=y("bs-pin",`<span>${y_(L)}</span>`,[W[0],W[1]+3.4,W[2]],1);return Y.e.dataset.i=L,Y.e.title=(e.names||[])[L]||"",Y.e.addEventListener("click",k=>{k.stopPropagation(),e.onPick&&e.onPick(L)}),Y}),b=[],S=()=>{v.forEach((N,L)=>{N.on=f.marks&&h<0,N.e.classList.toggle("on",L===h)}),_.forEach((N,L)=>{let W=h>=0&&Xn[h].b.includes(L);N.on=f.marks&&W&&Xn[h].b.length>1,N.e.classList.toggle("on",L===u),N.e.setAttribute("aria-pressed",L===u)});for(let N of b)N.on=f.labels;i.invalidate()},T=N=>o.at(N),C={F1:0,F2:Et.F2,F3:Et.F3},E=N=>{for(let[L,W]of Object.entries(Mc))for(let Y of W)for(let k of Y[5]||[])if(k.id===N)return Y[1]===Y[3]?[k.c,C[L]+2.9,Y[1]]:[Y[0],C[L]+2.9,k.c];return null},M=N=>{let L=qn[N],W=L.p||L.path[L.path.length-1];return[W[0],W[1]+2.7,W[2]]},R=[];function F(N,L){for(let W of R)r.remove(W);R=N.map(W=>{let Y=W.door?E(W.door):M(W.beat);if(!Y)return null;let k=y("bs-phm yg-spot",W.html,Y,1);return k.e.dataset.id=W.id,W.title&&(k.e.title=W.title),k.e.addEventListener("click",pt=>{pt.stopPropagation(),L&&L(W.id)}),k}).filter(Boolean),i.invalidate()}function z(N,L){for(let W of R){let Y=W.e.dataset.id;W.on=!N||N.includes(Y),W.e.classList.toggle("on",Y===L),W.e.setAttribute("aria-pressed",Y===L)}i.invalidate()}let B=[],q=(N,L)=>Math.atan2(L[0]-N[0],L[2]-N[2]);function H(){for(let N of[...s.units.children])s.units.remove(N),nd(N);for(let N of b)r.remove(N);b=[],B=[],i.ambient=!1}let tt=["run","walk","sneak","sidle","talk","bid","shoot","climb","wave","cook","dry","hold","swing","wake"];function G(N,L,W,Y,k){let pt=Cc(N);return pt.root.position.set(...L),pt.root.rotation.y=q(L,W||[L[0],L[1],L[2]+1]),pt.root.scale.setScalar(c),pt.pose(Y||"idle"),pt.ring.visible=!["blown","down","fall","climb","sleep","sit","sitbed","wake"].includes(Y),s.units.add(pt.root),tt.includes(Y)&&k.push(D=>pt.pose(Y,D)),pt}function st(N){if(H(),N<0)return;let L=qn[N],W=[];L.path&&L.path.length>1&&s.units.add(Es(L.path,oi.route,.2,{every:5,xray:.35}));for(let Y of L.tp||[])s.units.add(Es(Y,oi.team,.16,{every:4,xray:.35}));for(let Y of L.ep||[])s.units.add(Es(Y,oi.enemy,.14,{dash:[.6,.4],xray:.3}));for(let[Y,k,pt]of L.ar||[])s.units.add(Fc(Y,k,oi[pt]||oi.atk,{dash:pt==="mg"?[.5,.35]:null,r:pt==="mg"?.08:.14,arc:pt==="mg"?0:.12}));L.p&&G("p",L.p,L.pl,L.pose,W);for(let[Y,k,pt,D,Wt,At]of L.u||[])G(Y,[k,pt,D],Wt,At,W);for(let Y of L.fx||[]){let[k,pt,D,Wt,At]=Y,Rt=null;k==="fire"?Rt=Ic(At,pt+Wt):k==="shock"?(Rt=Dc(At),Rt.userData.at(.35)):k==="spark"&&(Rt=Pc(At),Rt.userData.at(.2)),Rt&&(Rt.position.set(pt,D,Wt),s.units.add(Rt),Rt.userData.tick&&W.push(Rt.userData.tick))}for(let[Y,k,pt,D,Wt]of L.lab||[]){let At=y("bs-lab k-"+(Wt||"note"),(Wt==="item"?"<i>\u25C6</i>":"")+Y,[k,pt,D]);b.push(At)}B=W,i.ambient=W.length>0}i.onFrame((N,L)=>{for(let W of B)W(L)});let Z=e.lite?1.6:1.25,ot=N=>{let L=t.clientWidth/Math.max(1,t.clientHeight),W=L<Z?Math.pow(Z/L,.75):1;return{...N,r:N.r*W}};function at(N,L){i.setView(ot(N),L),i.animUntil=performance.now()+1600}function _t(N,L={}){if(h=N,u=-1,N>=0&&Xn[N].b.length===1){Vt(Xn[N].b[0],L);return}st(-1);let W=!f.route||L.route===!1?null:typeof L.route=="number"?L.route:N;if(x.forEach((Y,k)=>{Y.visible=W!==null&&k===W,p(Y,1)}),m.visible=W!==null&&W<0,i.setNight(!1),N<0)i.setMode(Rc.mode),T(-1),L.fly!==!1&&at(Rc.cam,L.instant);else{let Y=Xn[N];i.setMode(Y.mode),T(Y.b[0]),L.fly!==!1&&at(Y.cam,L.instant)}S()}function Vt(N,L={}){if(N<0){_t(h,{fly:!1});return}let W=Xn.findIndex(pt=>pt.b.includes(N));h=W,u=N;let Y=qn[N],k=Xn[W];i.setMode(Y.mode||k.mode),i.setNight(!!Y.night),T(N),x.forEach((pt,D)=>{pt.visible=f.route&&D===W&&k.b.length>1,p(pt,.35)}),m.visible=!1,st(N),s.units.visible=f.units,L.fly!==!1&&at(Y.cam||k.cam,L.instant),S()}function kt(N,L){f[N]=L,N==="route"&&(x.forEach((W,Y)=>{W.visible=L&&h>=0&&Y===h}),m.visible=L&&h<0),N==="units"&&(s.units.visible=L),S(),i.invalidate()}return _t(-1,{fly:!1}),{setPhase:_t,setBeat:Vt,setLayer:kt,overview:N=>_t(-1,N||{}),partsAt:T,spots:F,showSpots:z,get phase(){return h},get beat(){return u},phases:Xn.length,beats:qn.length,dispose(){H(),a.remove(),i.scene.remove(n),nd(n)}}}var Qt=.05,wt=Et.F2+.04,zt=Et.F3+.04,pi=-.45+.03,Yn=Et.F2/2+.04,Ji=(Et.F2+Et.F3)/2+.04,$e=-7.79,pe=-4.99;function ye(){let i=[],t=0,e=0,n=0,s=0,r={at(a,o,c,l,h="idle",u){return t=a,e=o,n=c,s=l,i.push([t,e,n,s,h,u]),r},to(a,o="idle",c){return t=Math.max(t,a),i.push([t,e,n,s,o,c]),r},go(a,o=4,c="run",l){for(let h of a){let u=Math.hypot(h[0]-e,h[1]-n,h[2]-s);t=+(t+u/o).toFixed(3),[e,n,s]=h,i.push([t,e,n,s,c,l])}return r},mv(a,o,c,l,h,u){return t=a,e=o,n=c,s=l,i.push([t,e,n,s,h,u]),r},get t(){return t},keys:i};return r}var _e=(i,t)=>({k:i,keys:t.keys}),M_=(()=>{let i=ye().at(0,4.4,zt,-7.75,"talk",{face:[3.2,-7.75]}).to(3,"talk").to(3.4,"dodge").to(4.6,"push").to(6,"push").go([[6,zt,$e],[8.8,Ji,$e],[10.2,Ji,$e],[10.2,Ji,pe],[8.8,Ji,pe],[6,wt,pe],[5.23,wt,pe]],4.2,"run").to(9.75,"push",{face:[6,pe]}).to(10.6,"push").go([[1,wt,pe],[-2.6,wt,pe],[-4.6,wt,pe]],4,"run").to(14,"look",{face:[-8,pe]}),t=ye().at(0,3.2,zt,-7.75,"talk",{face:[4.4,-7.75]}).to(3,"talk").to(3.6,"swing").to(4.6,"swing").to(5.2,"stumble").to(6.2,"idle").go([[6,zt,$e],[8.8,Ji,$e],[10.2,Ji,$e],[10.2,Ji,pe],[8.8,Ji,pe],[5.93,wt,pe]],3.6,"run").to(14,"push",{face:[5,pe]}),e=ye().at(0,-3.5,zt,-3.62,"sit",{face:[-3.5,-2]}).to(5.2,"sit").go([[-4.3,zt,-5.8],[-4.3,zt,-7.4],[2.23,zt,-7.75]],4,"run").to(7.7,"push",{face:[3,-7.75]}).go([[4.2,zt,-7.75],[6.2,zt,-7.3]],3.6,"run").to(14,"look",{face:[9,-7.8]}),n=ye().at(0,-2.5,zt,-2,"sit",{face:[-2.5,-3.6]}).to(5.4,"sit").go([[-2.9,zt,-5.6],[-4.3,zt,-6.6],[-4.3,zt,-7.6],[1.2,zt,-8.3]],4,"run").go([[4.6,zt,-8.5]],3.6,"run").to(14,"look",{face:[7,-7.8]});return{dur:14,init:-1,mode:lr,scale:1,dr:{gate:0,f2s:1,tdoor:0},modes:[[8.6,bs]],act:{p:_e("p",i),d:_e("d",t),g1:_e("g",e),g2:_e("g",n)},doors:[[7.2,7.7,"gate",0,1],[9.8,10.5,"f2s",1,0]],lab:[[0,3,"\u5148\u548C\u5B88\u95E8\u4EBA\u4EA4\u8C08",3.8,zt+2.4,-7.75,"note"],[3,6.2,"\u95E8\u53E3\u53D1\u751F\u51B2\u7A81","d",2.6,null,"warn"],[6.2,9.6,"\u9000\u56DE\u521A\u8D70\u8FC7\u7684\u697C\u68AF","p",2.4,null,"item"],[9.6,11.6,"\u5173\u4E0A\u697C\u68AF\u95E8\uFF0C\u6321\u4F4F\u8EAB\u540E\u7684\u4EBA",5,wt+2.3,pe,"item"],[11.6,14,"\u6CBF\u4E8C\u697C\u8FC7\u9053\u7EE7\u7EED\u64A4\u79BB","p",2.4,null,"note"]],cam:[[0,{t:[3.8,zt+.6,-7.6],r:10.5,ph:.9,th:-.3}],[3,{t:[3.8,zt+.6,-7.6],r:10.5,ph:.9,th:-.15}],[6,{t:[6.2,zt,-7],r:14,ph:.95,th:.6}],[8.4,{t:[7,wt+1,-6],r:14,ph:.95,th:.45}],[10.6,{t:[4.4,wt+.6,-5.4],r:13,ph:.95,th:.35}],[14,{t:[-.6,wt+.6,-5.2],r:15,ph:.98,th:.3}]],ch:[0,3,6.2,9.6,11.6]}})(),b_=(()=>{let i=ye().at(0,-4.4,zt,-7.75,"walk",{face:[-7,-7.75]}).go([[-6.4,zt,-7.75],[-8.3,zt,-7.7]],1.6,"walk").to(2.6,"look",{face:[-9.5,-7.1]}).to(3.6,"look").to(4,"dodge",{face:[-8.2,-6.7]}).to(5.4,"push").to(6.6,"push",{face:[-9.2,-8.1]}).to(8.2,"push").go([[-8.6,zt,-8.75]],3,"run").mv(9.5,-8.6,zt+.95,-9.3,"vault").mv(10.1,-8.6,zt,-10.3,"run",{arc:.4}).go([[-2,zt,-10.3],[2.8,zt,-10.3]],3.6,"run").mv(14.3,2.8,zt,-10.3,"fall").mv(14.95,2.9,wt,-10.9,"fall",{fall:!0}).to(15.8,"down").to(16.4,"idle",{face:[3.9,-9]}).go([[3.9,wt,-10.05]],3,"run").to(17.4,"run").go([[3.9,wt,-8.4],[1.6,wt,-6.9],[1.6,wt,pe]],3.4,"run").to(21,"run"),t=ye().at(0,-8,zt,-5.7,"crouch",{face:[-8,-9]}).to(3.2,"crouch").go([[-8.2,zt,-6.7]],2.4,"run").to(4.2,"swing",{face:[-8.3,-7.7]}).to(6.2,"swing").to(6.8,"stumble").to(7.2,"down").to(21,"down"),e=ye().at(0,-10.7,zt,-8.6,"crouch",{face:[-8,-8]}).to(3.4,"crouch").go([[-9.2,zt,-8.1]],2.4,"run").to(6.6,"swing",{face:[-8.3,-7.7]}).to(7.8,"swing").to(8.3,"stumble").to(8.8,"down").to(21,"down"),n=ye().at(0,3.4,zt,-8.7,"look",{face:[0,-7.75]}).to(2.2,"look").go([[-4.9,zt,-7.75]],3.4,"run").to(5.2,"block",{face:[-8,-7.75]}).to(9.6,"block").go([[-7.6,zt,-7.9],[-8.6,zt,-8.7]],3.2,"run").to(11.6,"point",{face:[-6,-10.5]}).to(21,"point"),s=ye().at(0,-3.5,zt,-3.62,"sit",{face:[-3.5,-2]}).to(3.2,"sit").go([[-4.3,zt,-5.6],[-4.3,zt,-6.8],[-3.7,zt,-7.3]],3.6,"run").to(11,"look",{face:[-6,-7.75]}).go([[-2.6,zt,-8.4],[-2.6,zt,-9.6]],3.6,"run").to(12.2,"idle",{face:[-2.6,-11]}).go([[-2.6,zt,-10.4],[.3,zt,-10.4]],3.6,"run").to(14.1,"run").to(14.5,"cower",{face:[3,-10.4]}).to(21,"cower"),r=ye().at(0,-2.5,zt,-2,"sit",{face:[-2.5,-3.6]}).to(3.4,"sit").go([[-2.9,zt,-5.4],[-4.3,zt,-6.6],[-2.8,zt,-8]],3.6,"run").to(21,"look",{face:[-6,-7.75]});return{dur:21,init:-1,mode:lr,scale:1,dr:{gate:1,tdoor:1,rear:0,dg:0,cb:0},modes:[[14.2,Eh],[17.4,bs]],act:{p:_e("p",i),a1:_e("g",t),a2:_e("g",e),d:_e("d",n),g3:_e("g",s),g4:_e("g",r)},doors:[[11.6,12.2,"cb",0,1],[16.6,17.2,"rear",0,1],[18,18.5,"dg",0,1]],brk:[[14.2,"blast"]],fx:[[14.2,15.2,"shock",2.8,zt+.4,-10.3,4.2],[14.25,21,"fire",1.7,wt+.06,-10.5,1]],lab:[[0,3,"\u8D70\u8FDB\u201C\u75C5\u4EBA\u6240\u5728\u623F\u95F4\u201D",-8.6,zt+2.4,-7.2,"note"],[3,5.2,"\u5C4B\u91CC\u6CA1\u6709\u75C5\u4EBA\uFF1A\u906D\u5230\u57CB\u4F0F",-9.2,zt+2.7,-6.8,"warn"],[5.2,8.6,"\u623F\u95E8\u88AB\u5835\uFF1A\u5148\u5728\u5C0F\u623F\u95F4\u91CC\u6253\u5F00\u5C40\u9762","p",2.4,null,"note"],[8.6,10.4,"\u4ECE\u7A97\u6237\u9003\u51FA","p",2.4,null,"item"],[10.4,14.2,"\u6CBF\u5916\u4FA7\u8D70\u5ECA\u5954\u8DD1","p",2.4,null,"item"],[14.2,16.6,"\u7206\u70B8\u6253\u65AD\u4E86\u539F\u6765\u7684\u65B9\u5411",2.8,zt+2.6,-10.4,"warn"],[16.6,21,"\u6389\u8FDB\u8D70\u5ECA\u4E0B\u65B9\u7684\u6742\u7269\u95F4\uFF0C\u4ECE\u540E\u95E8\u56DE\u5230\u697C\u5185","p",2.4,null,"item"]],cam:[[0,{t:[-7.4,zt+.8,-7.3],r:13,ph:.95,th:.95}],[8.4,{t:[-7.6,zt+.8,-7.8],r:13,ph:.95,th:.95}],[10.2,{t:[-5.6,zt,-10.1],r:18,ph:.86,th:2.75}],[13.8,{t:[1,zt-.2,-10.2],r:19,ph:.92,th:2.6}],[16.6,{t:[2.9,4.6,-10.4],r:14,ph:.66,th:3}],[17.6,{t:[2.6,wt+.6,-7.6],r:15,ph:.9,th:2.5}],[21,{t:[1.8,wt+.6,-6.2],r:15,ph:.9,th:2.2}]],shake:[[14.2,15,.35]],ch:[0,3,8.6,14.2,16.6]}})(),Ah=[[0,wt,-4.2],[0,wt,-2.6],[-1.8,wt,.8],[-3,wt,2.4],[-4.4,wt,2.4],[-4.6,wt,0],[-4.6,wt,-3.2]],S_=[0,.4,1.35,1.85,2.25,2.9,3.7],Th=(i,t,e=Ah.length)=>{for(let n=1;n<e;n++)i.mv(t+S_[n],...Ah[n],"run");return i};function sd(i){let t=ye().at(0,1.6,wt,-6,"run",{face:[1.6,-4]}).mv(.35,1.6,wt,pe,"run").mv(.6,.8,wt,pe,"run").to(2,"look",{face:[-3,pe]}).mv(2.25,0,wt,-4.2,"run");Th(t,2.25).to(6.6,"push",{face:[-4.6,-5]}).mv(7,-4.6,wt,-4,"run").to(7.7,"push",{face:[-4.6,-3]}).mv(7.95,-4.9,wt,-4.95,"dodge",{face:[-8,pe]}).to(9.4,"push").to(10.2,"push").go([[-6,wt,pe],[-8.8,Yn,pe],[-10.2,Yn,pe],[-10.2,Yn,$e],[-8.8,Yn,$e],[-6,Qt,$e],[-5.2,Qt,$e]],4,"run").to(15,"look",{face:[-3,-7]});let e=(i?ye().at(0,-4.86,wt+.45,-8.85,"sleep",{face:[-2,-8.85]}).to(.4,"sleep").mv(.8,-4,wt,-8.4,"wake").mv(1.4,-2.8,wt,-7.2,"run"):ye().at(0,-2,wt,-7.6,"idle",{face:[-2.8,-6.4]}).to(.8,"look").mv(1.4,-2.8,wt,-7.2,"run")).mv(1.9,-2.8,wt,-5.3,"run").to(3.1,"block",{face:[1,-5]}).mv(3.9,0,wt,-4.2,"run");Th(e,3.9).to(15,"push",{face:[-4.6,-5]});let n=i?ye().at(0,-.74,wt+.45,-8.85,"sleep",{face:[-3.5,-8.85]}).to(1.6,"sleep").mv(2.1,-1.6,wt,-8.4,"wake").mv(3.2,-2.8,wt,-7.2,"run").mv(3.7,-2.8,wt,-5.4,"run").mv(4.6,0,wt,-4.2,"run"):ye().at(0,7.6,wt+1.03,pe,"run",{hide:!0,face:[6,pe]}).mv(2.5,7.6,wt+1.03,pe,"run",{show:!0}).mv(3,6,wt,pe,"run").mv(4.05,2.2,wt,pe,"run").mv(4.6,0,wt,-4.2,"run");Th(n,4.6,Ah.length-1).mv(8.1,-4.6,wt,-2.2,"run").to(15,"look",{face:[-4.6,-5]});let s=ye().at(0,-5.2,Qt,$e,"run",{hide:!0,face:[-6,$e]}).mv(4.6,-5.2,Qt,$e,"run",{show:!0}).go([[-6,Qt,$e],[-8.8,Yn,$e],[-10.2,Yn,$e],[-10.2,Yn,pe],[-8.8,Yn,pe],[-6,wt,pe],[-6.1,wt,pe]],4,"run").to(8,"swing",{face:[-4.9,-4.95]}).to(9.3,"swing").to(9.7,"stumble").mv(10.1,-5.5,wt,-4.1,"down").to(15,"down"),r={p:_e("p",t),c1:_e("g",n),c2:_e("g",e),c3:_e("g",s)},a=[[2.8,7,"\u4E24\u5934\u88AB\u5835\uFF1A\u7A7F\u8FC7\u75C5\u623F\u7ED5\u4E00\u5708","p",2.4,null,"note"],[7,7.9,"\u5173\u95E8\uFF1A\u628A\u8FFD\u5175\u5173\u5728\u75C5\u623F\u91CC",-4.6,wt+2.4,-3.6,"item"],[7.9,10.2,"\u697C\u68AF\u53E3\uFF1A\u6218\u6597\u6446\u8131","p",2.4,null,"warn"],[10.2,15,"\u4E0B\u5230\u4E00\u697C","p",2.4,null,"note"]];return i?(r.n1=_e("n",ye().at(0,-2.1,wt+.45,5.07,"sleep",{face:[-2.1,2.5]}).to(15,"sleep")),r.n2=_e("n",ye().at(0,2.3,wt+.45,5.07,"sleep",{face:[2.3,2.5]}).to(15,"sleep")),r.n3=_e("n",ye().at(0,-11,wt+.45,.5,"sleep",{face:[-8,.5]}).to(15,"sleep")),a.unshift([0,2.8,"\u591C\u91CC\uFF1A\u7761\u7740\u7684\u5B88\u536B\u88AB\u5435\u9192",-2.8,wt+2.5,-7.4,"warn"])):(r.n1=_e("n",ye().at(0,2.5,wt,.9,"look",{face:[0,0]}).to(3,"look").go([[3,wt,2.6]],2.4,"run").to(4.4,"cower",{face:[0,0]}).to(15,"cower")),r.n2=_e("n",ye().at(0,-.37,wt,4.93,"sitbed",{face:[1,4.93]}).to(3.4,"sitbed").to(3.8,"cower",{face:[-1.8,.8]}).to(15,"cower")),r.n3=_e("n",ye().at(0,-10.6,wt,-1.7,"sitbed",{face:[-6,-1.7]}).to(4.6,"sitbed").to(5,"point",{face:[-4.4,1]}).to(15,"point")),r.n4=_e("n",ye().at(0,-1.6,wt,-4.6,"walk",{face:[1,pe]}).to(.8,"look").go([[-2.2,wt,-3.95]],2,"run").to(15,"cower",{face:[1,pe]})),a.unshift([0,2.8,"\u767D\u5929\uFF1A\u533B\u9986\u91CC\u7684\u4EBA\u770B\u5230\u73A9\u5BB6\u7684\u53CD\u5E94",1.2,wt+2.6,1.2,"warn"])),{dur:15,init:15,mode:bs,scale:1,night:i,dr:{rear:1,dg:1,gd:0,f2a:1,f2b:0,f2s:1},modes:[[12.9,mo]],act:r,lab:a,doors:[[i?.7:1,i?1.2:1.4,"gd",0,1],[6.2,6.6,"f2b",0,1],[7.1,7.6,"f2b",1,0]],cam:[[0,{t:[-.6,wt+.6,-3],r:16,ph:.98,th:.45}],[4.4,{t:[-2.2,wt+.6,-1.2],r:16,ph:.98,th:.5}],[7,{t:[-4.4,wt+.6,-4],r:14,ph:.98,th:.6}],[10.2,{t:[-7.2,wt,-5.6],r:15,ph:1,th:.55}],[12.9,{t:[-7.2,1.2,-6.4],r:15,ph:1,th:.55}],[15,{t:[-6,1,-6.8],r:15,ph:1,th:.55}]],ch:[0,2.8,7,7.9,10.2]}}var E_=(()=>{let i=ye().at(0,-5.4,Qt,$e,"run",{face:[-4,$e]}).go([[-4.6,Qt,-7.5]],3.4,"run").to(1,"run",{face:[-4.6,-5]}).go([[-4.6,Qt,-6]],3.4,"run").to(2.1,"push",{face:[-4.6,-7]}).to(2.8,"push").go([[-3.1,Qt,-4.2]],3,"run").to(3.9,"look",{face:[-4.6,-3]}).to(4,"push",{face:[-3.9,-3.4]}).to(4.9,"push").go([[-2.9,Qt,-1.6],[-5,Qt,-1.3],[-6.3,Qt,-1.3],[-8,Qt,-.4],[-8.6,Qt,.6],[-8.6,Qt,1.7],[-7,Qt,3],[-4.6,Qt,3.4],[-2.6,Qt,3.6]],3.6,"run").to(9.8,"dodge",{face:[0,1.6]}).to(11,"push").to(12.3,"push").go([[-.8,Qt,4.6],[0,Qt,5.48]],3.2,"run").to(13.4,"hold",{face:[0,7]}).to(17.4,"hold").to(17.6,"push").go([[0,Qt,7.4],[0,pi,9.6]],3.6,"run").to(19.6,"block",{face:[0,13]}).to(26,"block"),t=(x,m,p,y,v)=>ye().at(0,x,Qt,3.6+m,"run",{face:[0,-3]}).to(p,"run").go([[x*.8,Qt,-1],[x*.8,Qt,-6.6],[y,Qt,v]],4,"run").to(3.4+p,"push",{face:[-4.6,-6.4]}).to(5.2+p,"push").go([[0,Qt,-6.6],[0,Qt,-1],[x*.6,Qt,1.8+m*.3]],4.4,"run"),e=t(0,0,0,-4.3,-6.75).to(10.4,"swing",{face:[-2.6,3.6]}).to(11.2,"swing").to(11.6,"stumble").mv(12,.2,Qt,2.2,"down").to(26,"down"),n=t(.7,.9,.3,-3.6,-7.3).to(11.4,"swing",{face:[-2.6,3.6]}).to(12,"stumble").mv(12.4,-1.2,Qt,2.6,"down").to(26,"down"),s=t(-.7,1.4,.6,-3,-6.8).to(12.6,"look",{face:[-2.6,3.6]}).go([[-.6,Qt,3.6]],2.4,"run").to(15.4,"swing",{face:[0,5.2]}).to(26,"look",{face:[0,8]}),r=ye().at(0,0,Qt,-5.5,"run",{face:[0,2]}).to(11.6,"run").go([[.6,Qt,1.6],[.9,Qt,3.8]],3,"run").to(17.4,"swing",{face:[0,5.2]}).to(26,"look",{face:[0,8]}),a=ye().at(0,-.4,Qt,-6.4,"run",{face:[0,2]}).to(12.4,"run").go([[-.5,Qt,1.2],[-1.6,Qt,4]],3,"run").to(17.8,"swing",{face:[0,5.2]}).to(26,"look",{face:[0,8]}),o=ye().at(0,-8.6,Qt,-1.4,"idle",{face:[-6,-1.3]}).to(2.2,"idle").go([[-6,Qt,-1.3],[-4.6,Qt,-2],[-4.6,Qt,-3.1]],3,"run").to(4.3,"swing",{face:[-4.6,-5]}).to(4.7,"fall").mv(5,-4.7,Qt,-2.9,"down").to(26,"down"),c=ye().at(0,-8.8,Yn,pe,"run",{face:[-10.2,pe]}).go([[-10.2,Yn,pe],[-10.2,Yn,$e],[-8.8,Yn,$e],[-6,Qt,$e],[-4.9,Qt,-6.77]],3.6,"run").to(5,"push",{face:[-4.6,-6]}).to(26,"push"),l=ye().at(0,0,pi,12.4,"look",{face:[0,8]}).to(18.6,"look").to(19.2,"point").to(22.6,"point").to(23.4,"look",{face:[6,12]}).to(26,"look"),h=ye().at(0,-1.8,pi,12.8,"look",{face:[0,8]}).to(26,"look"),u=ye().at(0,1.9,pi,12.7,"look",{face:[0,8]}).to(22.4,"look").to(23,"look",{face:[6,12]}).to(26,"look"),f=ye().at(0,24,pi,12,"run",{face:[0,12]}).to(20.2,"run").go([[5.6,pi,11.4]],5.2,"run").to(26,"point",{face:[0,13]}),d=ye().at(0,25.5,pi,13,"run",{face:[0,12]}).to(20.4,"run").go([[7.6,pi,12.6]],5.2,"run").to(26,"look",{face:[0,13]}),g=ye().at(0,25.5,pi,10.8,"run",{face:[0,12]}).to(20.6,"run").go([[7.4,pi,10.4]],5.2,"run").to(26,"look",{face:[0,12]});return{dur:26,init:17,mode:mo,scale:1,dr:{f1a:0,f1s:0,f1b:0,main:0,bar:0,shelf:0},modes:[[17.6,Ac]],act:{p:_e("p",i),g1:_e("g",e),g2:_e("g",n),g3:_e("g",s),g4:_e("g",r),g5:_e("g",a),b:_e("g",o),s:_e("g",c),x:_e("x",l),x1:_e("g",h),x2:_e("g",u),bb:_e("b",f),t1:_e("t",d),t2:_e("t",g)},doors:[[.8,1.3,"f1a",0,1],[2.1,2.7,"f1a",1,0],[2,2.4,"f1s",0,1],[4.2,4.85,"shelf",0,1],[7,7.4,"f1b",0,1],[17.4,17.45,"bar",0,1],[17.45,18.1,"main",0,1]],lab:[[0,2.1,"\u9ED1\u5E2E\u4ECE\u524D\u5385\u6D8C\u8FDB\u4E2D\u901A\u9053",0,2.8,-3.2,"warn"],[2.1,3.8,"\u8FDB\u5E93\u623F\uFF0C\u5173\u95E8\u6321\u4F4F\u8FFD\u5175",-4.6,2.8,-6.4,"item"],[3.8,5.4,"\u63A8\u5012\u8D27\u67B6\uFF0C\u653E\u5012\u6321\u8DEF\u7684\u4EBA",-3.6,2.6,-3.4,"item"],[5.4,9.4,"\u7ECF\u8BCA\u5BA4\u3001\u4FA7\u5385\u7ED5\u5411\u524D\u5385","p",2.4,null,"note"],[9.4,13.2,"\u524D\u5385\uFF1A\u6218\u6597\u6446\u8131\uFF0C\u9ED1\u5E2E\u7EE7\u7EED\u6D8C\u5165","p",2.4,null,"warn"],[13.4,17.4,"\u957F\u6309\uFF1A\u6253\u5F00\u88AB\u5C01\u7684\u5927\u95E8",0,3.3,5.8,"qte"],[17.8,21.2,"\u9003\u51FA\u5927\u95E8\uFF0C\u5BF9\u5934\u5835\u5728\u5916\u9762",0,3.1,12.5,"warn"],[21.2,26,"\u5E2E\u4F1A\u5934\u76EE\u8D76\u6765\u8425\u6551","bb",2.6,null,"item"]],cam:[[0,{t:[-3.6,.9,-5.8],r:17,ph:.95,th:.55}],[3.4,{t:[-3.6,.9,-3.8],r:13,ph:.9,th:.95}],[5.4,{t:[-6.2,.9,-.8],r:17,ph:.95,th:.45}],[9.4,{t:[-1.4,.9,3.2],r:15,ph:.98,th:-1.25}],[13.2,{t:[0,.9,3.6],r:14,ph:1,th:-1.4}],[17.6,{t:[1,1,9.4],r:16,ph:1.1,th:1.2}],[21,{t:[3,1,11],r:15.5,ph:1.1,th:1.38}],[26,{t:[3,1,11],r:15.5,ph:1.1,th:1.38}]],ch:[0,3.8,5.4,9.4,13.4,17.8]}})(),w_=1.2,T_=1.3,xn=i=>+(i*w_).toFixed(3),rd=i=>[i[0]*1.5,i[1],i[2]*1.5,...i.slice(3)],A_=i=>i&&i.face?{...i,face:[i.face[0]*1.5,i.face[1]*1.5]}:i;function R_(i){let t={...i,dur:xn(i.dur)};return t.act=Object.fromEntries(Object.entries(i.act).map(([e,n])=>[e,{...n,keys:n.keys.map(s=>[xn(s[0]),s[1]*1.5,s[2],s[3]*1.5,s[4],A_(s[5])])}])),i.modes&&(t.modes=i.modes.map(([e,n])=>[xn(e),n])),i.doors&&(t.doors=i.doors.map(([e,n,...s])=>[xn(e),xn(n),...s])),i.brk&&(t.brk=i.brk.map(([e,...n])=>[xn(e),...n])),i.fx&&(t.fx=i.fx.map(([e,n,s,r,a,o,...c])=>[xn(e),xn(n),s,r*1.5,a,o*1.5,...c])),i.lab&&(t.lab=i.lab.map(([e,n,s,r,a,o,...c])=>typeof r=="number"?[xn(e),xn(n),s,r*1.5,a,o*1.5,...c]:[xn(e),xn(n),s,r,a,o,...c])),i.cam&&(t.cam=i.cam.map(([e,n])=>[xn(e),{...n,t:rd(n.t),r:n.r*T_}])),i.shake&&(t.shake=i.shake.map(([e,n,s])=>[xn(e),xn(n),s])),i.ch&&(t.ch=i.ch.map(xn)),i.trk&&(t.trk=i.trk.map(e=>e.map(rd))),t}var _o=Object.fromEntries(Object.entries({gate:M_,ambush:b_,f2d:sd(!1),f2n:sd(!0),floor1:E_}).map(([i,t])=>[i,R_(t)]));var Ri=i=>Math.max(0,Math.min(1,i)),Rh=i=>i*i*(3-2*i),ws=(i,t,e)=>i+(t-i)*e,od=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*e},C_=["fall","fly","held"];function I_(i){let t=[],e=0;return i.forEach((n,s)=>{let r=n[5]||{};if(r.face!=null)e=typeof r.face=="number"?r.face:Math.atan2(r.face[0]-n[1],r.face[1]-n[3]);else if(s>0){let a=i[s-1],o=n[1]-a[1],c=n[3]-a[3];Math.hypot(o,c)>.05&&(e=Math.atan2(o,c))}t.push(e)}),n=>{let s=i.length,r=0;for(;r<s&&i[r][0]<=n;)r++;let a=!0;for(let d=0;d<r;d++){let g=i[d][5];g&&g.hide&&(a=!1),g&&g.show&&(a=!0)}if(r===0)return{x:i[0][1],y:i[0][2],z:i[0][3],pose:i[0][4],yaw:t[0],vis:a,air:!1};if(r>=s){let d=i[s-1];return{x:d[1],y:d[2],z:d[3],pose:d[4],yaw:t[s-1],vis:a,air:!1}}let o=i[r-1],c=i[r],l=c[5]||{},h=c[0]-o[0],u=h>0?Ri((n-o[0])/h):1;l.ease&&(u=Rh(u));let f=ws(o[2],c[2],l.fall?u*u:u);return l.arc&&(f+=4*l.arc*u*(1-u)),{x:ws(o[1],c[1],u),y:f,z:ws(o[3],c[3],u),pose:c[4],yaw:od(t[r-1],t[r],Ri((n-o[0])/.2)),vis:a,air:!!(l.arc||l.fall)}}}function P_(i,t){let e=0;for(;e<i.length&&i[e][0]<=t;)e++;if(e===0)return i[0][1];if(e>=i.length)return i[i.length-1][1];let[n,s]=i[e-1],[r,a]=i[e],o=Rh(Ri((t-n)/(r-n)));return{t:s.t.map((c,l)=>ws(c,a.t[l],o)),r:Math.exp(ws(Math.log(s.r),Math.log(a.r),o)),ph:ws(s.ph,a.ph,o),th:od(s.th,a.th,o)}}var Bc=(i,t,e)=>i>=t&&i<e;function ad(i,t,e={}){let n=Uc(i),s=Nc(i,t),r=new we;r.name="stage",i.scene.add(r);let a=document.createElement("div");a.className="bs-mask",a.innerHTML="<span></span>",t.appendChild(a);let o=null,c=null,l=0,h=!1,u=!0,f="",d="",g=0,x={},m=[],p=[],y=[],v={},_=null,b=-1,S=1/0,T=new Ke(new U(0,-1,0),1e5),C=Z=>Z.traverse(ot=>{ot.material&&(ot.material.clippingPlanes=[T])}),E=Z=>Z.kind==="plan"?Et[Z.floor]+2.3:Z.kind==="ov"?Et.F3+2.3:1/0,M=(Z,ot=0)=>typeof Z=="string"?()=>{let at=x[Z];return new U(at.F.root.position.x,at.F.root.position.y+ot,at.F.root.position.z)}:null,R=(Z,ot=0)=>{if(typeof Z!="string")return new U(...Z);let at=x[Z];return new U(at.F.root.position.x,at.F.root.position.y+ot,at.F.root.position.z)};function F(){for(let Z of[...r.children])r.remove(Z),Z.traverse(ot=>{ot.geometry&&ot.geometry.dispose()});for(let Z of y)s.remove(Z.m);for(let Z of Object.values(v))Z&&Z.dispose();x={},m=[],p=[],y=[],v={},_=null,f="",d="",b=-1,S=1/0}function z(){var ot;let Z=(ot=o.scale)!=null?ot:1;for(let[at,_t]of Object.entries(o.act)){let Vt=Cc(_t.k);Vt.root.scale.setScalar(Z),r.add(Vt.root),x[at]={F:Vt,at:I_(_t.keys)}}if(o.route!==!1&&o.act.p){let at=[[]];o.act.p.keys.forEach((_t,Vt)=>{let kt=_t[5]||{};kt.cut&&at.push([]);let $=at[at.length-1],N=$[$.length-1];(!N||Math.hypot(N[0]-_t[1],N[1]-_t[2]-.12,N[2]-_t[3])>.05)&&$.push([_t[1],_t[2]+.12,_t[3],Vt&&(kt.arc||kt.fall)?1:0])}),_=new we,r.add(_);for(let _t of at)_t.length>1&&_.add(Es(_t,oi.route,.16,{every:6,xray:.18,opacity:.5}));C(_)}for(let[at,_t]of o.trk||[]){let Vt=Es(at,_t||oi.team,.14,{every:6,xray:.18,opacity:.5});C(Vt),r.add(Vt)}for(let at of o.fx||[]){let[_t,Vt,kt,$,N,L,W]=at,Y=null;kt==="fire"?Y=Ic(W||1.5,(typeof $=="number"?$:3)+(L||0)):kt==="spark"?Y=Pc(W||1):kt==="shock"&&(Y=Dc(W||4)),Y&&(typeof $!="string"&&Y.position.set($,N,L),Y.visible=!1,r.add(Y),m.push({t0:_t,t1:Vt,kind:kt,g:Y,ref:typeof $=="string"?$:null,dy:typeof $=="string"?N:0}))}for(let[at,_t,Vt,kt,$,N]of o.arr||[]){let L=$==="mg",W=L?[.5,.35]:null,Y=oi[$]||oi.atk,k=Array.isArray(Vt[0])?hr(Vt,.2,Y,{dash:W,every:999,last:!0,xray:.3}):Fc(Vt,kt,Y,{dash:W,r:L?.08:.14,arc:L?0:.12,...N||{}});k.visible=!1,r.add(k),p.push({t0:at,t1:_t,g:k})}for(let at of o.lab||[]){let[_t,Vt,kt,$,N,L,W]=at,Y=W==="qte",k=s.add("bs-lab k-"+(W||"note"),(W==="item"||Y?"<i>\u25C6</i>":"")+kt+(Y?"<s></s>":""),typeof $=="string"?M($,N):[$,N,L]);y.push({t0:_t,t1:Vt,m:k,q:Y,ref:typeof $=="string"?$:null})}for(let at of o.brk||[])v[at[1]]||(v[at[1]]=n.burst(at[1]))}function B(){if(!o)return;let Z=l,ot=o.mode;for(let[L,W]of o.modes||[])Z>=L&&(ot=W);let at=JSON.stringify(ot);at!==d&&(d=at,i.setMode(ot),S=E(ot),T.constant=S===1/0?1e5:S-1.2);let _t=[];for(let[L,W]of o.brk||[])Z>=L&&_t.push([W,1,Z<L+.5]);let Vt=JSON.stringify(_t.map(L=>[L[0],typeof L[1]=="number"?+L[1].toFixed(3):L[1],L[2]]));if(Vt!==f){f=Vt,n.at(o.init);for(let[L,W,Y]of _t)n.set(L,W,Y)}for(let[L,W]of o.brk||[])v[W]&&v[W].at(Z-L);let kt={...go,...o.dr||{}};for(let[L,W,Y,k,pt]of o.doors||[])Z>=L&&(kt[Y]=Z>=W?pt:ws(k,pt,Rh((Z-L)/(W-L))));for(let[L,W]of Object.entries(kt))n.set(L,W);for(let L of Object.values(x)){let W=L.at(Z),Y=L.F;Y.root.visible=W.vis&&W.y<S,Y.root.position.set(W.x,W.y,W.z),Y.root.rotation.y=W.yaw,Y.pose(W.pose||"idle",Z),Y.ring.visible=!C_.includes(W.pose)&&!W.air}for(let L of m){let W=Bc(Z,L.t0,L.t1);if(L.g.visible=W,!W)continue;let Y=Z-L.t0,k=L.g;if(L.ref){let pt=R(L.ref,L.dy);k.position.copy(pt)}L.kind==="fire"?(k.scale.setScalar(.25+.75*Ri(Y/.4)),k.userData.tick&&k.userData.tick(Z)):k.userData.at(Ri(Y/(L.t1-L.t0)))}for(let L of p)L.g.visible=Bc(Z,L.t0,L.t1);for(let L of y)L.m.on=Bc(Z,L.t0,L.t1)&&(!L.ref||x[L.ref].F.root.visible),L.q&&L.m.on&&L.m.e.style.setProperty("--q",(1-Ri((Z-L.t0)/(L.t1-L.t0))).toFixed(3));let $=0,N="";for(let[L,W,Y]of o.mask||[])Z>=L-.25&&Z<W+.25&&($=Math.max($,Math.min(Ri((Z-L+.25)/.25),Ri((W+.25-Z)/.25))),N=Y);if(a.style.opacity=$.toFixed(3),a.style.display=$>0?"":"none",N&&a.firstChild.textContent!==N&&(a.firstChild.textContent=N),o.cnt){let L=o.cnt[0][1];for(let[W,Y]of o.cnt)Z>=W&&(L=Y);L!==b&&(b=L,e.onCount&&e.onCount(L))}else b!==null&&(b=null,e.onCount&&e.onCount(null));u&&o.cam&&performance.now()>g&&H(Z,!0),i.shadowDirty(),e.onT&&e.onT(o.dur?Z/o.dur:0)}let q=Z=>{let ot=t.clientWidth/Math.max(1,t.clientHeight),at=ot<1.25?Math.pow(1.25/ot,.75):1;return{...Z,r:Z.r*at}};function H(Z,ot){let at=q(P_(o.cam,Z)),_t=at.t[0],Vt=at.t[1],kt=at.t[2];for(let[N,L,W]of o.shake||[])if(Bc(Z,N,L)){let Y=Math.sin(Math.PI*(Z-N)/(L-N))*W;_t+=Math.sin(Z*53)*Y,Vt+=Math.sin(Z*41+1)*Y*.6,kt+=Math.cos(Z*47)*Y}let $={th:at.th,ph:at.ph,r:at.r,t:new U(_t,Vt,kt)};ot?i.controls.set($,!0):i.controls.flyTo($,.9)}i.onFrame(Z=>{!h||!o||(l=Math.min(o.dur,l+Z),B(),l>=o.dur&&(G(),e.onEnd&&e.onEnd()))});function tt(){o&&(l>=o.dur-.001&&(l=0),h=!0,i.animating=!0,e.onPlay&&e.onPlay(!0))}function G(){h=!1,i.animating=!1,i.invalidate(),e.onPlay&&e.onPlay(!1)}i.onUserStart(()=>{u&&(u=!1,e.onFollow&&e.onFollow(!1))});function st(Z,ot={}){_o[Z]&&(G(),F(),c=Z,o=_o[Z],l=0,u=!0,e.onFollow&&e.onFollow(!0),o.sb&&i.setShadowBox(o.sb),i.setNight&&i.setNight(!!o.night),z(),ot.fly&&o.cam?(H(0,!1),g=performance.now()+950,i.animUntil=g+150):g=0,B())}return{load:st,play:tt,pause:G,isPlaying:()=>h,setT(Z){o&&(l=Ri(Z)*o.dur,B(),i.invalidate())},get t(){return o?l/o.dur:0},get id(){return c},get follow(){return u},setFollow(Z){u=Z,Z&&o&&(H(l,!1),g=performance.now()+950,i.animUntil=g+150),e.onFollow&&e.onFollow(Z)},resetView(){this.setFollow(!0)},info:Z=>{let ot=_o[Z||c];return ot?{dur:ot.dur,ch:ot.ch,cnt:ot.cnt}:null},scenes:Object.keys(_o),dispose(){G(),F(),a.remove(),s.lay.remove(),i.scene.remove(r)}}}return yd(D_);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
