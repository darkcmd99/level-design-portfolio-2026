var CM3D=(()=>{var ml=Object.defineProperty;var sf=Object.getOwnPropertyDescriptor;var rf=Object.getOwnPropertyNames;var of=Object.prototype.hasOwnProperty;var af=(i,t)=>{for(var e in t)ml(i,e,{get:t[e],enumerable:!0})},lf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of rf(t))!of.call(i,s)&&s!==e&&ml(i,s,{get:()=>t[s],enumerable:!(n=sf(t,s))||n.enumerable});return i};var cf=i=>lf(ml({},"__esModule",{value:!0}),i);var zx={};af(zx,{SCENES:()=>ts,VIEWS:()=>ks,createShow:()=>qd,createStage:()=>$d,ft:()=>Zt,mount:()=>kd});var Uh=0,Ql=1,Fh=2;var jl=1,Ko=2,Wn=3,ei=0,Je=1,$e=2,ii=0,ki=1,tc=2,ec=3,nc=4,Nh=5,xi=100,Bh=101,Oh=102,kh=103,zh=104,Hh=200,Vh=201,Gh=202,Wh=203,bo=204,So=205,Xh=206,qh=207,Yh=208,Zh=209,Jh=210,$h=211,Kh=212,Qh=213,jh=214,Qo=0,jo=1,ta=2,zi=3,ea=4,na=5,ia=6,sa=7,ic=0,tu=1,eu=2,si=0,nu=1,iu=2,su=3,ru=4,ou=5,au=6,ra=7;var sc=300,Yi=301,Zi=302,oa=303,aa=304,Ar=306,gs=1e3,gi=1001,Eo=1002,nn=1003,lu=1004;var Rr=1005;var Cn=1006,la=1007;var Si=1008;var Un=1009,rc=1010,oc=1011,ws=1012,ca=1013,Ei=1014,Fn=1015,Ts=1016,ha=1017,ua=1018,As=1020,ac=35902,lc=35899,cc=1021,hc=1022,bn=1023,xs=1026,Rs=1027,da=1028,fa=1029,uc=1030,pa=1031;var ma=1033,Cr=33776,Ir=33777,Pr=33778,Dr=33779,ga=35840,xa=35841,_a=35842,ya=35843,va=36196,Ma=37492,ba=37496,Sa=37808,Ea=37809,wa=37810,Ta=37811,Aa=37812,Ra=37813,Ca=37814,Ia=37815,Pa=37816,Da=37817,La=37818,Ua=37819,Fa=37820,Na=37821,Ba=36492,Oa=36494,ka=36495,za=36283,Ha=36284,Va=36285,Ga=36286;var js=2300,wo=2301,Mo=2302,Gl=2400,Wl=2401,Xl=2402;var cu=3200,hu=3201;var dc=0,uu=1,ri="",Ye="srgb",Hi="srgb-linear",tr="linear",ue="srgb";var Oi=7680;var ql=519,du=512,fu=513,pu=514,fc=515,mu=516,gu=517,xu=518,_u=519,Yl=35044;var pc="300 es",Rn=2e3,er=2001;var ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gl=Math.PI/180,To=180/Math.PI;function Lr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function hf(i,t){return(i%t+t)%t}function xl(i,t,e){return(1-e)*i+e*t}function Ws(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let v=Math.sqrt(x),S=Math.atan2(v,f*y);m=Math.sin(m*S)/v,a=Math.sin(a*S)/v}let M=a*y;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-a){let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new k,hh=new In,$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],x=s[4],M=s[7],v=s[2],S=s[5],w=s[8];return r[0]=o*_+a*y+l*v,r[3]=o*m+a*x+l*S,r[6]=o*f+a*M+l*w,r[1]=c*_+h*y+u*v,r[4]=c*m+h*x+u*S,r[7]=c*f+h*M+u*w,r[2]=d*_+p*y+g*v,r[5]=d*m+p*x+g*S,r[8]=d*f+p*M+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yl.makeScale(t,e)),this}rotate(t){return this.premultiply(yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yl=new $t;function mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yu(){let i=nr("canvas");return i.style.display="block",i}var uh={};function _s(i){i in uh||(uh[i]=!0,console.warn(i))}function vu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uf(){let i={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hi]:{primaries:t,whitePoint:n,transfer:tr,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}var ae=uf();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Ao=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=nr("canvas")),ns.width=t.width,ns.height=t.height;let s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},df=0,ys=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vl(s[o].image)):r.push(vl(s[o]))}else r=vl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function vl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ff=0,Ml=new k,Ze=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gi,s=gi,r=Cn,o=Si,a=bn,l=Un,c=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Lr(),this.name="",this.source=new ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ml).x}get height(){return this.source.getSize(Ml).y}get depth(){return this.source.getSize(Ml).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=sc;Ze.DEFAULT_ANISOTROPY=1;var we=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,M=(p+1)/2,v=(f+1)/2,S=(h+d)/4,w=(u+_)/4,A=(g+m)/4;return x>M&&x>v?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=w/n):M>v?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=A/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=w/r,s=A/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ro=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ze(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ys(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends Ro{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ir=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),eo.subVectors(this.max,Xs),is.subVectors(t.a,Xs),ss.subVectors(t.b,Xs),rs.subVectors(t.c,Xs),ci.subVectors(ss,is),hi.subVectors(rs,ss),Ui.subVectors(is,rs);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ui.z,Ui.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ui.z,0,-Ui.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ui.y,Ui.x,0];return!bl(e,is,ss,rs,eo)||(e=[1,0,0,0,1,0,0,0,1],!bl(e,is,ss,rs,eo))?!1:(no.crossVectors(ci,hi),e=[no.x,no.y,no.z],bl(e,is,ss,rs,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new k,new k,new k,new k,new k,new k,new k,new k],wn=new k,to=new Hn,is=new k,ss=new k,rs=new k,ci=new k,hi=new k,Ui=new k,Xs=new k,eo=new k,no=new k,Fi=new k;function bl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);let a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var pf=new Hn,qs=new k,Sl=new k,_i=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);let e=qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(Sl)),this.expandByPoint(qs.copy(t.center).sub(Sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$n=new k,El=new k,io=new k,ui=new k,wl=new k,so=new k,Tl=new k,sr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){El.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(El);let r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=ui.dot(this.direction),l=-ui.dot(io),c=ui.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(El).addScaledVector(io,d),p}intersectSphere(t,e){$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){wl.subVectors(e,t),so.subVectors(n,t),Tl.crossVectors(wl,so);let o=this.direction.dot(Tl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);let l=a*this.direction.dot(so.crossVectors(ui,so));if(l<0)return null;let c=a*this.direction.dot(wl.cross(ui));if(c<0||l+c>o)return null;let h=-a*ui.dot(Tl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mf,t,gf)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),di.crossVectors(n,un),di.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),di.crossVectors(n,un)),di.normalize(),ro.crossVectors(un,di),s[0]=di.x,s[4]=ro.x,s[8]=un.x,s[1]=di.y,s[5]=ro.y,s[9]=un.y,s[2]=di.z,s[6]=ro.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],M=n[11],v=n[15],S=s[0],w=s[4],A=s[8],b=s[12],E=s[1],I=s[5],U=s[9],B=s[13],N=s[2],F=s[6],C=s[10],P=s[14],D=s[3],W=s[7],z=s[11],X=s[15];return r[0]=o*S+a*E+l*N+c*D,r[4]=o*w+a*I+l*F+c*W,r[8]=o*A+a*U+l*C+c*z,r[12]=o*b+a*B+l*P+c*X,r[1]=h*S+u*E+d*N+p*D,r[5]=h*w+u*I+d*F+p*W,r[9]=h*A+u*U+d*C+p*z,r[13]=h*b+u*B+d*P+p*X,r[2]=g*S+_*E+m*N+f*D,r[6]=g*w+_*I+m*F+f*W,r[10]=g*A+_*U+m*C+f*z,r[14]=g*b+_*B+m*P+f*X,r[3]=y*S+x*E+M*N+v*D,r[7]=y*w+x*I+M*F+v*W,r[11]=y*A+x*U+M*C+v*z,r[15]=y*b+x*B+M*P+v*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,x=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,M=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,v=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,S=e*y+n*x+s*M+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return t[0]=y*w,t[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*w,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*w,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*w,t[4]=x*w,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*w,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*w,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*w,t[8]=M*w,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*w,t[12]=v*w,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,y=l*c,x=l*h,M=l*u,v=n.x,S=n.y,w=n.z;return s[0]=(1-(_+f))*v,s[1]=(p+M)*v,s[2]=(g-x)*v,s[3]=0,s[4]=(p-M)*S,s[5]=(1-(d+f))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+x)*w,s[9]=(m-y)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);let c=1/r,h=1/o,u=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Rn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Rn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===er)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Rn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===er)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},os=new k,Tn=new he,mf=new k(0,0,0),gf=new k(1,1,1),di=new k,ro=new k,un=new k,ph=new he,mh=new In,Pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xf=0,gh=new k,as=new In,Kn=new he,oo=new k,Ys=new k,_f=new k,yf=new In,xh=new k(1,0,0),_h=new k(0,1,0),yh=new k(0,0,1),vh={type:"added"},vf={type:"removed"},ls={type:"childadded",child:null},Al={type:"childremoved",child:null},Ge=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Pn,n=new In,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new $t}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(xh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(yh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ys,oo,this.up):Kn.lookAt(oo,Ys,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Kn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vf),Al.child=t,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new k(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new k,Qn=new k,Rl=new k,jn=new k,cs=new k,hs=new k,Mh=new k,Cl=new k,Il=new k,Pl=new k,Dl=new we,Ll=new we,Ul=new we,mi=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Qn.subVectors(n,e),Rl.subVectors(t,e);let o=An.dot(An),a=An.dot(Qn),l=An.dot(Rl),c=Qn.dot(Qn),h=Qn.dot(Rl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Dl.setScalar(0),Ll.setScalar(0),Ul.setScalar(0),Dl.fromBufferAttribute(t,e),Ll.fromBufferAttribute(t,n),Ul.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Ll,r.y),o.addScaledVector(Ul,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Qn.subVectors(t,e),An.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),An.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,n),hs.subVectors(r,n),Cl.subVectors(t,n);let l=cs.dot(Cl),c=hs.dot(Cl);if(l<=0&&c<=0)return e.copy(n);Il.subVectors(t,s);let h=cs.dot(Il),u=hs.dot(Il);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(cs,o);Pl.subVectors(t,r);let p=cs.dot(Pl),g=hs.dot(Pl);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(hs,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Mh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Mh,a);let f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=hf(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fl(o,r,t+1/3),this.g=Fl(o,r,t),this.b=Fl(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=Mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return ae.workingToColorSpace(He.copy(this),t),Math.round(ne(He.r*255,0,255))*65536+Math.round(ne(He.g*255,0,255))*256+Math.round(ne(He.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ye){ae.workingToColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(ao);let n=xl(fi.h,ao.h,e),s=xl(fi.s,ao.s,e),r=xl(fi.l,ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Yt;Yt.NAMES=Mu;var Mf=0,yi=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=ki,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bo,this.blendDst=So,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bo&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_e=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Le=new k,lo=new Dt,bf=0,Ee=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yl&&(t.usage=this.usage),t}};var rr=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sf=0,yn=new he,Nl=new Ge,us=new k,dn=new Hn,Zs=new Hn,Oe=new k,Me=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?or:rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(dn.min,Zs.min),dn.expandByPoint(Oe),Oe.addVectors(dn.max,Zs.max),dn.expandByPoint(Oe)):(dn.expandByPoint(Zs.min),dn.expandByPoint(Zs.max))}dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),Oe.add(us)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new k,l[A]=new k;let c=new k,h=new k,u=new k,d=new Dt,p=new Dt,g=new Dt,_=new k,m=new k;function f(A,b,E){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,E),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[A].add(_),a[b].add(_),a[E].add(_),l[A].add(m),l[b].add(m),l[E].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,b=y.length;A<b;++A){let E=y[A],I=E.start,U=E.count;for(let B=I,N=I+U;B<N;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new k,M=new k,v=new k,S=new k;function w(A){v.fromBufferAttribute(s,A),S.copy(v);let b=a[A];x.copy(b),x.sub(v.multiplyScalar(v.dot(b))).normalize(),M.crossVectors(S,b);let I=M.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,I)}for(let A=0,b=y.length;A<b;++A){let E=y[A],I=E.start,U=E.count;for(let B=I,N=I+U;B<N;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Ee(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bh=new he,Ni=new sr,co=new _i,Sh=new k,ho=new k,uo=new k,fo=new k,Bl=new k,po=new k,Eh=new k,mo=new k,Xt=class extends Ge{constructor(t=new Me,e=new _e){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Bl.fromBufferAttribute(u,t),o?po.addScaledVector(Bl,h):po.addScaledVector(Bl.sub(e),h))}e.add(po)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(co.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(co,Sh)===null||Ni.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(bh.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(bh),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,v=x;M<v;M+=3){let S=a.getX(M),w=a.getX(M+1),A=a.getX(M+2);s=go(this,f,t,n,c,h,u,S,w,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let y=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=go(this,o,t,n,c,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,v=x;M<v;M+=3){let S=M,w=M+1,A=M+2;s=go(this,f,t,n,c,h,u,S,w,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let y=m,x=m+1,M=m+2;s=go(this,o,t,n,c,h,u,y,x,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ef(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(mo);return c<e.near||c>e.far?null:{distance:c,point:mo.clone(),object:i}}function go(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ho),i.getVertexPosition(l,uo),i.getVertexPosition(c,fo);let h=Ef(i,t,e,n,ho,uo,fo,Eh);if(h){let u=new k;mi.getBarycoord(Eh,ho,uo,fo,u),s&&(h.uv=mi.getInterpolatedAttribute(s,a,l,c,u,new Dt)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,l,c,u,new Dt)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new k,materialIndex:0};mi.getNormal(ho,uo,fo,d.normal),h.face=d,h.barycoord=u}return h}var sn=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(_,m,f,y,x,M,v,S,w,A,b){let E=M/w,I=v/A,U=M/2,B=v/2,N=S/2,F=w+1,C=A+1,P=0,D=0,W=new k;for(let z=0;z<C;z++){let X=z*I-B;for(let Z=0;Z<F;Z++){let tt=Z*E-U;W[_]=tt*y,W[m]=X*x,W[f]=N,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[f]=S>0?1:-1,h.push(W.x,W.y,W.z),u.push(Z/w),u.push(1-z/A),P+=1}}for(let z=0;z<A;z++)for(let X=0;X<w;X++){let Z=d+X+F*z,tt=d+X+F*(z+1),at=d+(X+1)+F*(z+1),rt=d+(X+1)+F*z;l.push(Z,tt,rt),l.push(tt,at,rt),D+=6}a.addGroup(p,D,b),p+=D,d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){let t={};for(let e=0;e<i.length;e++){let n=Ji(i[e]);for(let s in n)t[s]=n[s]}return t}function wf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var bu={clone:Ji,merge:We},Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dn=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ar=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new k,wh=new Dt,Th=new Dt,Ve=class extends ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=To*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return To*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,wh,Th),e.subVectors(Th,wh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ds=-90,fs=1,Io=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(ds,fs,t,e);s.layers=this.layers,this.add(s);let r=new Ve(ds,fs,t,e);r.layers=this.layers,this.add(r);let o=new Ve(ds,fs,t,e);o.layers=this.layers,this.add(o);let a=new Ve(ds,fs,t,e);a.layers=this.layers,this.add(a);let l=new Ve(ds,fs,t,e);l.layers=this.layers,this.add(l);let c=new Ve(ds,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},lr=class extends Ze{constructor(t=[],e=Yi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Po=class extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:ii});r.uniforms.tEquirect.value=e;let o=new Xt(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Cn),new Io(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},oe=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rf={type:"move"},Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var cr=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Do=class extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,l,c=nn,h=nn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=class extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new he,Ah=new he,xo=[],Rh=new Hn,Cf=new he,Js=new Xt,$s=new _i,ur=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),Rh.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(Rh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),$s.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union($s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),Ah.multiplyMatrices(n,ps),Js.matrixWorld=Ah,Js.raycast(t,xo);for(let o=0,a=xo.length;o<a;o++){let l=xo[o];l.instanceId=r,l.object=this,e.push(l)}xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Do(new Float32Array(s*this.count),s,this.count,da,Fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ol=new k,If=new k,Pf=new $t,vn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ol.subVectors(n,e).cross(If.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ol),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pf.getNormalMatrix(t),s=this.coplanarPoint(Ol).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bi=new _i,Df=new Dt(.5,.5),_o=new k,bs=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,o=new vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],y=r[12],x=r[13],M=r[14],v=r[15];if(s[0].setComponents(c-o,p-h,f-g,v-y).normalize(),s[1].setComponents(c+o,p+h,f+g,v+y).normalize(),s[2].setComponents(c+a,p+u,f+_,v+x).normalize(),s[3].setComponents(c-a,p-u,f-_,v-x).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,p-d,f-m,v-M).normalize();else if(s[4].setComponents(c-l,p-d,f-m,v-M).normalize(),e===Rn)s[5].setComponents(c+l,p+d,f+m,v+M).normalize();else if(e===er)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);let e=Df.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_o.x=s.normal.x>0?t.max.x:t.min.x,_o.y=s.normal.y>0?t.max.y:t.min.y,_o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dr=class extends Ze{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fr=class extends Ze{constructor(t,e,n=Ei,s,r,o,a=nn,l=nn,c,h=xs,u=1){if(h!==xs&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},pr=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},mr=class i extends Me{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,p=2*u+d,g=n*2+r,_=s+1,m=new k,f=new k;for(let y=0;y<=g;y++){let x=0,M=0,v=0,S=0;if(y<=n){let b=y/n,E=b*Math.PI/2;M=-h-t*Math.cos(E),v=t*Math.sin(E),S=-t*Math.cos(E),x=b*u}else if(y<=n+r){let b=(y-n)/r;M=-h+b*e,v=t,S=0,x=u+b*d}else{let b=(y-n-r)/n,E=b*Math.PI/2;M=h+t*Math.sin(E),v=t*Math.cos(E),S=t*Math.sin(E),x=u+d+b*u}let w=Math.max(0,Math.min(1,x/p)),A=0;y===0?A=.5/s:y===g&&(A=-.5/s);for(let b=0;b<=s;b++){let E=b/s,I=E*Math.PI*2,U=Math.sin(I),B=Math.cos(I);f.x=-v*B,f.y=M,f.z=v*U,a.push(f.x,f.y,f.z),m.set(-v*B,S,v*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+A,w)}if(y>0){let b=(y-1)*_;for(let E=0;E<s;E++){let I=b+E,U=b+E+1,B=y*_+E,N=y*_+E+1;o.push(I,U,B),o.push(U,N,B)}}}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},gr=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new k,h=new Dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Vn=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,_=[],m=n/2,f=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2));function y(){let M=new k,v=new k,S=0,w=(e-t)/n;for(let A=0;A<=r;A++){let b=[],E=A/r,I=E*(e-t)+t;for(let U=0;U<=s;U++){let B=U/s,N=B*l+a,F=Math.sin(N),C=Math.cos(N);v.x=I*F,v.y=-E*n+m,v.z=I*C,u.push(v.x,v.y,v.z),M.set(F,w,C).normalize(),d.push(M.x,M.y,M.z),p.push(B,1-E),b.push(g++)}_.push(b)}for(let A=0;A<s;A++)for(let b=0;b<r;b++){let E=_[b][A],I=_[b+1][A],U=_[b+1][A+1],B=_[b][A+1];(t>0||b!==0)&&(h.push(E,I,B),S+=3),(e>0||b!==r-1)&&(h.push(I,U,B),S+=3)}c.addGroup(f,S,0),f+=S}function x(M){let v=g,S=new Dt,w=new k,A=0,b=M===!0?t:e,E=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;let I=g;for(let U=0;U<=s;U++){let N=U/s*l+a,F=Math.cos(N),C=Math.sin(N);w.x=b*C,w.y=m*E,w.z=b*F,u.push(w.x,w.y,w.z),d.push(0,E,0),S.x=F*.5+.5,S.y=C*.5*E+.5,p.push(S.x,S.y),g++}for(let U=0;U<s;U++){let B=v+U,N=I+U;M===!0?h.push(N,N+1,B):h.push(N+1,N,B),A+=3}c.addGroup(f,A,M===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ln=class i extends Vn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xr=class i extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new k,M=new k,v=new k;for(let S=0;S<e.length;S+=3)p(e[S+0],x),p(e[S+1],M),p(e[S+2],v),l(x,M,v,y)}function l(y,x,M,v){let S=v+1,w=[];for(let A=0;A<=S;A++){w[A]=[];let b=y.clone().lerp(M,A/S),E=x.clone().lerp(M,A/S),I=S-A;for(let U=0;U<=I;U++)U===0&&A===S?w[A][U]=b:w[A][U]=b.clone().lerp(E,U/I)}for(let A=0;A<S;A++)for(let b=0;b<2*(S-A)-1;b++){let E=Math.floor(b/2);b%2===0?(d(w[A][E+1]),d(w[A+1][E]),d(w[A][E])):(d(w[A][E+1]),d(w[A+1][E+1]),d(w[A+1][E]))}}function c(y){let x=new k;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){let y=new k;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let M=m(y)/2/Math.PI+.5,v=f(y)/Math.PI+.5;o.push(M,1-v)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],M=o[y+2],v=o[y+4],S=Math.max(x,M,v),w=Math.min(x,M,v);S>.9&&w<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),v<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,x){let M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let y=new k,x=new k,M=new k,v=new k,S=new Dt,w=new Dt,A=new Dt;for(let b=0,E=0;b<r.length;b+=9,E+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),S.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),A.set(o[E+4],o[E+5]),v.copy(y).add(x).add(M).divideScalar(3);let I=m(v);_(S,E+0,y,I),_(w,E+2,x,I),_(A,E+4,M,I)}}function _(y,x,M,v){v<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=v/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Dt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],r=[],o=[],a=new k,l=new he;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ne(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ne(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_r=class extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Lo=class extends _r{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var yo=new k,kl=new xc,zl=new xc,Hl=new xc,Vi=class extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(yo.subVectors(s[0],s[1]).add(s[0]),c=yo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),kl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),zl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Hl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(kl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),zl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(kl.calc(l),zl.calc(l),Hl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ch(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Lf(i,t){let e=1-i;return e*e*t}function Uf(i,t){return 2*(1-i)*i*t}function Ff(i,t){return i*i*t}function Ks(i,t,e,n){return Lf(i,t)+Uf(i,e)+Ff(i,n)}function Nf(i,t){let e=1-i;return e*e*e*t}function Bf(i,t){let e=1-i;return 3*e*e*i*t}function Of(i,t){return 3*(1-i)*i*i*t}function kf(i,t){return i*i*i*t}function Qs(i,t,e,n,s){return Nf(i,t)+Bf(i,e)+Of(i,n)+kf(i,s)}var Uo=class extends Mn{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,s.x,r.x,o.x,a.x),Qs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fo=class extends Mn{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Qs(t,s.x,r.x,o.x,a.x),Qs(t,s.y,r.y,o.y,a.y),Qs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},No=class extends Mn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ss=class extends Mn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends Mn{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(t,s.x,r.x,o.x),Ks(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yr=class extends Mn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(t,s.x,r.x,o.x),Ks(t,s.y,r.y,o.y),Ks(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ch(a,l.x,c.x,h.x,u.x),Ch(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}},zf=Object.freeze({__proto__:null,ArcCurve:Lo,CatmullRomCurve3:Vi,CubicBezierCurve:Uo,CubicBezierCurve3:Fo,EllipseCurve:_r,LineCurve:No,LineCurve3:Ss,QuadraticBezierCurve:Bo,QuadraticBezierCurve3:yr,SplineCurve:Oo});var Gn=class i extends xr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Gi=class i extends xr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},vr=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let y=f*d-o;for(let x=0;x<c;x++){let M=x*u-r;g.push(M,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let x=y+c*f,M=y+c*(f+1),v=y+1+c*(f+1),S=y+1+c*f;p.push(x,M,S),p.push(M,v,S)}this.setIndex(p),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},vi=class i extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,p=new k,g=new Dt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let f=0;f<n;f++){let y=f+m,x=y,M=y+n+1,v=y+n+2,S=y+1;a.push(x,M,S),a.push(M,v,S)}}this.setIndex(a),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Wi=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,d=new k,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let y=[],x=f/n,M=0;f===0&&o===0?M=.5/e:f===n&&l===Math.PI&&(M=-.5/e);for(let v=0;v<=e;v++){let S=v/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(S+M,1-x),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let x=h[f][y+1],M=h[f][y],v=h[f+1][y],S=h[f+1][y+1];(f!==0||o>0)&&p.push(x,M,S),(f!==n-1||l<Math.PI)&&p.push(M,v,S)}this.setIndex(p),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Mr=class i extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new k,u=new k,d=new k;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(_,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Es=class i extends Me{constructor(t=new yr(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,l=new k,c=new Dt,h=new k,u=[],d=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),f()}function m(x){h=t.getPointAt(x/e,h);let M=o.normals[x],v=o.binormals[x];for(let S=0;S<=s;S++){let w=S/s*Math.PI*2,A=Math.sin(w),b=-Math.cos(w);l.x=b*M.x+A*v.x,l.y=b*M.y+A*v.y,l.z=b*M.z+A*v.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=e;x++)for(let M=1;M<=s;M++){let v=(s+1)*(x-1)+(M-1),S=(s+1)*x+(M-1),w=(s+1)*x+M,A=(s+1)*(x-1)+M;g.push(v,S,A),g.push(S,w,A)}}function y(){for(let x=0;x<=e;x++)for(let M=0;M<=s;M++)c.x=x/e,c.y=M/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new zf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var fn=class extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ko=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zo=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ho=class extends Xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gl,endingEnd:Gl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wl:r=t,a=2*e-n;break;case Xl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wl:o=t,l=2*n-e;break;case Xl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let v=0;v!==a;++v)r[v]=f*o[h+v]+y*o[c+v]+x*o[l+v]+M*o[u+v];return r}},Vo=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Go=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vo(e,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vo(t.times,Array),values:vo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ho(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case js:e=this.InterpolantFactoryMethodDiscrete;break;case wo:e=this.InterpolantFactoryMethodLinear;break;case Mo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Hf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=wo;var Mi=class extends pn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=js;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Wo.prototype.ValueTypeName="color";var Xo=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Xo.prototype.ValueTypeName="number";var qo=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},br=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.getValueSize(),t)}};br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends pn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=js;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Yo.prototype.ValueTypeName="vector";var Zo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Su=new Zo,Jo=class{constructor(t){this.manager=t!==void 0?t:Su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Er=class extends Sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Vl=new he,Ih=new k,Ph=new k,Zl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ih),Ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ph),e.updateMatrixWorld(),Vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var wr=class extends ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jl=class extends Zl{constructor(){super(new wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tr=class extends Sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Jl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var $o=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var _c="\\[\\]\\.:\\/",Vf=new RegExp("["+_c+"]","g"),yc="[^"+_c+"]",Gf="[^"+_c.replace("\\.","")+"]",Wf=/((?:WC+[\/:])*)/.source.replace("WC",yc),Xf=/(WCOD+)?/.source.replace("WCOD",Gf),qf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),Yf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),Zf=new RegExp("^"+Wf+Xf+qf+Yf+"$"),Jf=["material","materials","bones","map"],$l=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vf,"")}static parseTrackName(t){let e=Zf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=$l;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vx=new Float32Array(1);var Dh=new he,qi=class{constructor(t,e,n=0,s=1/0){this.ray=new sr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(t,e=!0,n=[]){return Kl(t,this,n,e),n.sort(Lh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Kl(t[s],this,n,e);return n.sort(Lh),n}};function Lh(i,t){return i.distance-t.distance}function Kl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Kl(r[o],t,e,!0)}}function vc(i,t,e,n){let s=$f(n);switch(e){case cc:return i*t;case da:return i*t/s.components*s.byteLength;case fa:return i*t/s.components*s.byteLength;case uc:return i*t*2/s.components*s.byteLength;case pa:return i*t*2/s.components*s.byteLength;case hc:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case ma:return i*t*4/s.components*s.byteLength;case Cr:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case ya:return Math.max(i,16)*Math.max(t,8)/4;case ga:case _a:return Math.max(i,8)*Math.max(t,8)/2;case va:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ba:case Oa:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case za:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $f(i){switch(i){case Un:case rc:return{byteLength:1,components:1};case ws:case oc:case Ts:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case Ei:case ca:case Fn:return{byteLength:4,components:1};case ac:case lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Yu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qf(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tp=`#ifdef USE_ALPHAHASH
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
#endif`,ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rp=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dp=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,bp=`#define PI 3.141592653589793
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
} // validated`,Sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ep=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
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
}`,Hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wp=`uniform bool receiveShadow;
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
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$p=`PhysicalMaterial material;
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
#endif`,Kp=`struct PhysicalMaterial {
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
}`,Qp=`
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lm=`#if defined( USE_POINTS_UV )
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
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
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
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bm=`float getShadowMask() {
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
}`,Om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`#include <common>
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
}`,r0=`#if DEPTH_PACKING == 3200
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
}`,o0=`#define DISTANCE
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
}`,a0=`#define DISTANCE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`uniform float scale;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#define LAMBERT
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
}`,m0=`#define LAMBERT
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
}`,g0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,_0=`#define NORMAL
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
}`,y0=`#define NORMAL
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
}`,v0=`#define PHONG
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
}`,M0=`#define PHONG
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
}`,b0=`#define STANDARD
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
}`,S0=`#define STANDARD
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
}`,E0=`#define TOON
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
}`,w0=`#define TOON
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
}`,T0=`uniform float size;
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
}`,A0=`uniform vec3 diffuse;
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
}`,R0=`#include <common>
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
}`,C0=`uniform vec3 color;
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
}`,I0=`uniform float rotation;
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
}`,P0=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:jf,alphahash_pars_fragment:tp,alphamap_fragment:ep,alphamap_pars_fragment:np,alphatest_fragment:ip,alphatest_pars_fragment:sp,aomap_fragment:rp,aomap_pars_fragment:op,batching_pars_vertex:ap,batching_vertex:lp,begin_vertex:cp,beginnormal_vertex:hp,bsdfs:up,iridescence_fragment:dp,bumpmap_pars_fragment:fp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:mp,clipping_planes_pars_vertex:gp,clipping_planes_vertex:xp,color_fragment:_p,color_pars_fragment:yp,color_pars_vertex:vp,color_vertex:Mp,common:bp,cube_uv_reflection_fragment:Sp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:wp,displacementmap_vertex:Tp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Rp,colorspace_fragment:Cp,colorspace_pars_fragment:Ip,envmap_fragment:Pp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Lp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Xp,envmap_vertex:Fp,fog_vertex:Np,fog_pars_vertex:Bp,fog_fragment:Op,fog_pars_fragment:kp,gradientmap_pars_fragment:zp,lightmap_pars_fragment:Hp,lights_lambert_fragment:Vp,lights_lambert_pars_fragment:Gp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Yp,lights_phong_fragment:Zp,lights_phong_pars_fragment:Jp,lights_physical_fragment:$p,lights_physical_pars_fragment:Kp,lights_fragment_begin:Qp,lights_fragment_maps:jp,lights_fragment_end:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:hm,morphinstance_vertex:um,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:xm,normal_pars_fragment:_m,normal_pars_vertex:ym,normal_vertex:vm,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:bm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:wm,opaque_fragment:Tm,packing:Am,premultiplied_alpha_fragment:Rm,project_vertex:Cm,dithering_fragment:Im,dithering_pars_fragment:Pm,roughnessmap_fragment:Dm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Um,shadowmap_pars_vertex:Fm,shadowmap_vertex:Nm,shadowmask_pars_fragment:Bm,skinbase_vertex:Om,skinning_pars_vertex:km,skinning_vertex:zm,skinnormal_vertex:Hm,specularmap_fragment:Vm,specularmap_pars_fragment:Gm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:Zm,uv_pars_vertex:Jm,uv_vertex:$m,worldpos_vertex:Km,background_vert:Qm,background_frag:jm,backgroundCube_vert:t0,backgroundCube_frag:e0,cube_vert:n0,cube_frag:i0,depth_vert:s0,depth_frag:r0,distanceRGBA_vert:o0,distanceRGBA_frag:a0,equirect_vert:l0,equirect_frag:c0,linedashed_vert:h0,linedashed_frag:u0,meshbasic_vert:d0,meshbasic_frag:f0,meshlambert_vert:p0,meshlambert_frag:m0,meshmatcap_vert:g0,meshmatcap_frag:x0,meshnormal_vert:_0,meshnormal_frag:y0,meshphong_vert:v0,meshphong_frag:M0,meshphysical_vert:b0,meshphysical_frag:S0,meshtoon_vert:E0,meshtoon_frag:w0,points_vert:T0,points_frag:A0,shadow_vert:R0,shadow_frag:C0,sprite_vert:I0,sprite_frag:P0},gt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Xn={basic:{uniforms:We([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:We([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:We([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:We([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:We([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:We([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:We([gt.points,gt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:We([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:We([gt.common,gt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:We([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:We([gt.sprite,gt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:We([gt.common,gt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:We([gt.lights,gt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Xn.physical={uniforms:We([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Wa={r:0,b:0,g:0},$i=new Pn,D0=new he;function L0(i,t,e,n,s,r,o){let a=new Yt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function _(x){let M=!1,v=g(x);v===null?f(a,l):v&&v.isColor&&(f(v,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===Ar)?(h===void 0&&(h=new Xt(new sn(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ji(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$i.copy(M.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(D0.makeRotationFromEuler($i)),h.material.toneMapped=ae.getTransfer(v.colorSpace)!==ue,(u!==v||d!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xt(new vr(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ji(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ae.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,M){x.getRGB(Wa,gc(i)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,M,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:_,addToRenderList:m,dispose:y}}function U0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(E,I,U,B,N){let F=!1,C=u(B,U,I);r!==C&&(r=C,c(r.object)),F=p(E,B,U,N),F&&g(E,B,U,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,M(E,I,U,B),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,I,U){let B=U.wireframe===!0,N=n[E.id];N===void 0&&(N={},n[E.id]=N);let F=N[I.id];F===void 0&&(F={},N[I.id]=F);let C=F[B];return C===void 0&&(C=d(l()),F[B]=C),C}function d(E){let I=[],U=[],B=[];for(let N=0;N<e;N++)I[N]=0,U[N]=0,B[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:B,object:E,attributes:{},index:null}}function p(E,I,U,B){let N=r.attributes,F=I.attributes,C=0,P=U.getAttributes();for(let D in P)if(P[D].location>=0){let z=N[D],X=F[D];if(X===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(X=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(X=E.instanceColor)),z===void 0||z.attribute!==X||X&&z.data!==X.data)return!0;C++}return r.attributesNum!==C||r.index!==B}function g(E,I,U,B){let N={},F=I.attributes,C=0,P=U.getAttributes();for(let D in P)if(P[D].location>=0){let z=F[D];z===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(z=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(z=E.instanceColor));let X={};X.attribute=z,z&&z.data&&(X.data=z.data),N[D]=X,C++}r.attributes=N,r.attributesNum=C,r.index=B}function _(){let E=r.newAttributes;for(let I=0,U=E.length;I<U;I++)E[I]=0}function m(E){f(E,0)}function f(E,I){let U=r.newAttributes,B=r.enabledAttributes,N=r.attributeDivisors;U[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),N[E]!==I&&(i.vertexAttribDivisor(E,I),N[E]=I)}function y(){let E=r.newAttributes,I=r.enabledAttributes;for(let U=0,B=I.length;U<B;U++)I[U]!==E[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function x(E,I,U,B,N,F,C){C===!0?i.vertexAttribIPointer(E,I,U,N,F):i.vertexAttribPointer(E,I,U,B,N,F)}function M(E,I,U,B){_();let N=B.attributes,F=U.getAttributes(),C=I.defaultAttributeValues;for(let P in F){let D=F[P];if(D.location>=0){let W=N[P];if(W===void 0&&(P==="instanceMatrix"&&E.instanceMatrix&&(W=E.instanceMatrix),P==="instanceColor"&&E.instanceColor&&(W=E.instanceColor)),W!==void 0){let z=W.normalized,X=W.itemSize,Z=t.get(W);if(Z===void 0)continue;let tt=Z.buffer,at=Z.type,rt=Z.bytesPerElement,O=at===i.INT||at===i.UNSIGNED_INT||W.gpuType===ca;if(W.isInterleavedBufferAttribute){let $=W.data,it=$.stride,xt=W.offset;if($.isInstancedInterleavedBuffer){for(let _t=0;_t<D.locationSize;_t++)f(D.location+_t,$.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _t=0;_t<D.locationSize;_t++)m(D.location+_t);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let _t=0;_t<D.locationSize;_t++)x(D.location+_t,X/D.locationSize,at,z,it*rt,(xt+X/D.locationSize*_t)*rt,O)}else{if(W.isInstancedBufferAttribute){for(let $=0;$<D.locationSize;$++)f(D.location+$,W.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let $=0;$<D.locationSize;$++)m(D.location+$);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let $=0;$<D.locationSize;$++)x(D.location+$,X/D.locationSize,at,z,X*rt,X/D.locationSize*$*rt,O)}}else if(C!==void 0){let z=C[P];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(D.location,z);break;case 3:i.vertexAttrib3fv(D.location,z);break;case 4:i.vertexAttrib4fv(D.location,z);break;default:i.vertexAttrib1fv(D.location,z)}}}}y()}function v(){A();for(let E in n){let I=n[E];for(let U in I){let B=I[U];for(let N in B)h(B[N].object),delete B[N];delete I[U]}delete n[E]}}function S(E){if(n[E.id]===void 0)return;let I=n[E.id];for(let U in I){let B=I[U];for(let N in B)h(B[N].object),delete B[N];delete I[U]}delete n[E.id]}function w(E){for(let I in n){let U=n[I];if(U[E.id]===void 0)continue;let B=U[E.id];for(let N in B)h(B[N].object),delete B[N];delete U[E.id]}}function A(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function F0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function N0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let A=w===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Un&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fn&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:v,maxSamples:S}}function B0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new vn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,x=y*4,M=f.clippingState||null;l.value=M,M=h(g,d,x,p);for(let v=0;v!==x;++v)M[v]=e[v];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,M=p;x!==_;++x,M+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function O0(i){let t=new WeakMap;function e(o,a){return a===oa?o.mapping=Yi:a===aa&&(o.mapping=Zi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===oa||a===aa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Po(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Is=4,Eu=[.125,.215,.35,.446,.526,.582],ji=20,Mc=new wr,wu=new Yt,bc=null,Sc=0,Ec=0,wc=!1,Qi=(1+Math.sqrt(5))/2,Cs=1/Qi,Tu=[new k(-Qi,Cs,0),new k(Qi,Cs,0),new k(-Cs,0,Qi),new k(Cs,0,Qi),new k(0,Qi,-Cs),new k(0,Qi,Cs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],k0=new k,Ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=k0}=r;bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bc,Sc,Ec),this._renderer.xr.enabled=wc,t.scissorTest=!1,Xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ts,format:bn,colorSpace:Hi,depthBuffer:!1},s=Au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z0(r)),this._blurMaterial=H0(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Mc)}_sceneToCubeUV(t,e,n,s,r){let l=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(wu),u.toneMapping=si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new _e({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),m=new Xt(new sn,_),f=!1,y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,f=!0):(_.color.copy(wu),f=!0);for(let x=0;x<6;x++){let M=x%3;M===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):M===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));let v=this._cubeSize;Xa(s,M*v,x>2?v:0,v,v),u.setRenderTarget(s),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Yi||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Xa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Mc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Tu[(s-r-1)%Tu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Xt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);let f=[],y=0;for(let w=0;w<ji;++w){let A=w/_,b=Math.exp(-A*A/2);f.push(b),w===0?y+=b:w<m&&(y+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let M=this._sizeLods[s],v=3*M*(s>x-Is?s-x+Is:0),S=4*(this._cubeSize-M);Xa(e,v,S,3*M,2*M),l.setRenderTarget(e),l.render(u,Mc)}};function z0(i){let t=[],e=[],n=[],s=i,r=i-Is+1+Eu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Is?l=Eu[o-i+Is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let S=0;S<p;S++){let w=S%3*2/3-1,A=S>2?0:-1,b=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];y.set(b,_*g*S),x.set(d,m*g*S);let E=[S,S,S,S,S,S];M.set(E,f*g*S)}let v=new Me;v.setAttribute("position",new Ee(y,_)),v.setAttribute("uv",new Ee(x,m)),v.setAttribute("faceIndex",new Ee(M,f)),t.push(v),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Au(i,t,e){let n=new zn(i,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function H0(i,t,e){let n=new Float32Array(ji),s=new k(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ru(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Cu(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Fc(){return`

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
	`}function V0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===oa||l===aa,h=l===Yi||l===Zi;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ya(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ya(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function G0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&_s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function W0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let x=0,M=y.length;x<M;x+=3){let v=y[x+0],S=y[x+1],w=y[x+2];d.push(v,S,S,w,w,v)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,M=y.length/3-1;x<M;x+=3){let v=x+0,S=x+1,w=x+2;d.push(v,S,S,w,w,v)}}else return;let m=new(mc(d)?or:rr)(d,1);m.version=_;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function X0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function q0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Y0(i,t,e){let n=new WeakMap,s=new we;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let M=a.attributes.position.count*x,v=1;M>t.maxTextureSize&&(v=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let S=new Float32Array(M*v*4*u),w=new ir(S,M,v,u);w.type=Fn,w.needsUpdate=!0;let A=x*4;for(let E=0;E<u;E++){let I=m[E],U=f[E],B=y[E],N=M*v*4*E;for(let F=0;F<I.count;F++){let C=F*A;p===!0&&(s.fromBufferAttribute(I,F),S[N+C+0]=s.x,S[N+C+1]=s.y,S[N+C+2]=s.z,S[N+C+3]=0),g===!0&&(s.fromBufferAttribute(U,F),S[N+C+4]=s.x,S[N+C+5]=s.y,S[N+C+6]=s.z,S[N+C+7]=0),_===!0&&(s.fromBufferAttribute(B,F),S[N+C+8]=s.x,S[N+C+9]=s.y,S[N+C+10]=s.z,S[N+C+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Dt(M,v)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Z0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Zu=new Ze,Iu=new fr(1,1),Ju=new ir,$u=new Co,Ku=new lr,Pu=[],Du=[],Lu=new Float32Array(16),Uu=new Float32Array(9),Fu=new Float32Array(4);function Ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Pu[s];if(r===void 0&&(r=new Float32Array(s),Pu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ja(i,t){let e=Du[t];e===void 0&&(e=new Int32Array(t),Du[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function J0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function j0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Fu.set(n),i.uniformMatrix2fv(this.addr,!1,Fu),Fe(e,n)}}function tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Uu.set(n),i.uniformMatrix3fv(this.addr,!1,Uu),Fe(e,n)}}function eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;Lu.set(n),i.uniformMatrix4fv(this.addr,!1,Lu),Fe(e,n)}}function ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Iu.compareFunction=fc,r=Iu):r=Zu,e.setTexture2D(t||r,s)}function ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$u,s)}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ku,s)}function fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ju,s)}function pg(i){switch(i){case 5126:return J0;case 35664:return $0;case 35665:return K0;case 35666:return Q0;case 35674:return j0;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(i,t){i.uniform1fv(this.addr,t)}function gg(i,t){let e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function xg(i,t){let e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function _g(i,t){let e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function yg(i,t){let e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function vg(i,t){let e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Mg(i,t){let e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bg(i,t){i.uniform1iv(this.addr,t)}function Sg(i,t){i.uniform2iv(this.addr,t)}function Eg(i,t){i.uniform3iv(this.addr,t)}function wg(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function Ag(i,t){i.uniform2uiv(this.addr,t)}function Rg(i,t){i.uniform3uiv(this.addr,t)}function Cg(i,t){i.uniform4uiv(this.addr,t)}function Ig(i,t,e){let n=this.cache,s=t.length,r=Ja(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zu,r[o])}function Pg(i,t,e){let n=this.cache,s=t.length,r=Ja(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$u,r[o])}function Dg(i,t,e){let n=this.cache,s=t.length,r=Ja(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ku,r[o])}function Lg(i,t,e){let n=this.cache,s=t.length,r=Ja(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ju,r[o])}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return xg;case 35666:return _g;case 35674:return yg;case 35675:return vg;case 35676:return Mg;case 5124:case 35670:return bg;case 35667:case 35671:return Sg;case 35668:case 35672:return Eg;case 35669:case 35673:return wg;case 5125:return Tg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Lg}}var Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pg(e.type)}},Rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ug(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function Nu(i,t){i.seq.push(t),i.map[t.id]=t}function Fg(i,t,e){let n=i.name,s=n.length;for(Tc.lastIndex=0;;){let r=Tc.exec(n),o=Tc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nu(e,c===void 0?new Ac(a,i,t):new Rc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Cc(a),Nu(e,u)),e=u}}}var Ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Fg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Bu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ng=37297,Bg=0;function Og(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ou=new $t;function kg(i){ae._getMatrix(Ou,ae.workingColorSpace,i);let t=`mat3( ${Ou.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case tr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ku(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Og(i.getShaderSource(t),a)}else return r}function zg(i,t){let e=kg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hg(i,t){let e;switch(t){case nu:e="Linear";break;case iu:e="Reinhard";break;case su:e="Cineon";break;case ru:e="ACESFilmic";break;case au:e="AgX";break;case ra:e="Neutral";break;case ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qa=new k;function Vg(){ae.getLuminanceCoefficients(qa);let i=qa.x.toFixed(4),t=qa.y.toFixed(4),e=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Wg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ur(i){return i!==""}function zu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(i){return i.replace(qg,Zg)}var Yg=new Map;function Zg(i,t){let e=ee[t];if(e===void 0){let n=Yg.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}var Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(i){return i.replace(Jg,$g)}function $g(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Kg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ko?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Qg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Zi:t="ENVMAP_TYPE_CUBE";break;case Ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function t1(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ic:t="ENVMAP_BLENDING_MULTIPLY";break;case tu:t="ENVMAP_BLENDING_MIX";break;case eu:t="ENVMAP_BLENDING_ADD";break}return t}function e1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function n1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Kg(e),c=Qg(e),h=jg(e),u=t1(e),d=e1(e),p=Gg(e),g=Wg(r),_=s.createProgram(),m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),f.length>0&&(f+=`
`)):(m=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),f=[Gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?ee.tonemapping_pars_fragment:"",e.toneMapping!==si?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,zg("linearToOutputTexel",e.outputColorSpace),Vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),o=Ic(o),o=zu(o,e),o=Hu(o,e),a=Ic(a),a=zu(a,e),a=Hu(a,e),o=Vu(o),a=Vu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=y+m+o,M=y+f+a,v=Bu(s,s.VERTEX_SHADER,x),S=Bu(s,s.FRAGMENT_SHADER,M);s.attachShader(_,v),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(v)||"",N=s.getShaderInfoLog(S)||"",F=U.trim(),C=B.trim(),P=N.trim(),D=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,S);else{let z=ku(s,v,"vertex"),X=ku(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+z+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(C===""||P==="")&&(W=!1);W&&(I.diagnostics={runnable:D,programLog:F,vertexShader:{log:C,prefix:m},fragmentShader:{log:P,prefix:f}})}s.deleteShader(v),s.deleteShader(S),A=new Ps(s,_),b=Xg(s,_)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,Ng)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=S,this}var i1=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Dc(t),e.set(t,n)),n}},Dc=class{constructor(t){this.id=i1++,this.code=t,this.usedTimes=0}};function s1(i,t,e,n,s,r,o){let a=new vs,l=new Pc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,E,I,U,B){let N=U.fog,F=B.geometry,C=b.isMeshStandardMaterial?U.environment:null,P=(b.isMeshStandardMaterial?e:t).get(b.envMap||C),D=P&&P.mapping===Ar?P.image.height:null,W=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,X=z!==void 0?z.length:0,Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let tt,at,rt,O;if(W){let ce=Xn[W];tt=ce.vertexShader,at=ce.fragmentShader}else tt=b.vertexShader,at=b.fragmentShader,l.update(b),rt=l.getVertexShaderID(b),O=l.getFragmentShaderID(b);let $=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),xt=B.isInstancedMesh===!0,_t=B.isBatchedMesh===!0,kt=!!b.map,Ae=!!b.matcap,H=!!P,fe=!!b.aoMap,zt=!!b.lightMap,Ht=!!b.bumpMap,Tt=!!b.normalMap,ge=!!b.displacementMap,It=!!b.emissiveMap,te=!!b.metalnessMap,Be=!!b.roughnessMap,Ce=b.anisotropy>0,L=b.clearcoat>0,T=b.dispersion>0,J=b.iridescence>0,et=b.sheen>0,ot=b.transmission>0,j=Ce&&!!b.anisotropyMap,Ft=L&&!!b.clearcoatMap,ft=L&&!!b.clearcoatNormalMap,Pt=L&&!!b.clearcoatRoughnessMap,Lt=J&&!!b.iridescenceMap,ut=J&&!!b.iridescenceThicknessMap,bt=et&&!!b.sheenColorMap,Wt=et&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,yt=!!b.specularColorMap,Kt=!!b.specularIntensityMap,V=ot&&!!b.transmissionMap,dt=ot&&!!b.thicknessMap,pt=!!b.gradientMap,Et=!!b.alphaMap,lt=b.alphaTest>0,st=!!b.alphaHash,Rt=!!b.extensions,Jt=si;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Jt=i.toneMapping);let xe={shaderID:W,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:at,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:O,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:_t,batchingColor:_t&&B._colorsTexture!==null,instancing:xt,instancingColor:xt&&B.instanceColor!==null,instancingMorph:xt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Hi,alphaToCoverage:!!b.alphaToCoverage,map:kt,matcap:Ae,envMap:H,envMapMode:H&&P.mapping,envMapCubeUVHeight:D,aoMap:fe,lightMap:zt,bumpMap:Ht,normalMap:Tt,displacementMap:d&&ge,emissiveMap:It,normalMapObjectSpace:Tt&&b.normalMapType===uu,normalMapTangentSpace:Tt&&b.normalMapType===dc,metalnessMap:te,roughnessMap:Be,anisotropy:Ce,anisotropyMap:j,clearcoat:L,clearcoatMap:Ft,clearcoatNormalMap:ft,clearcoatRoughnessMap:Pt,dispersion:T,iridescence:J,iridescenceMap:Lt,iridescenceThicknessMap:ut,sheen:et,sheenColorMap:bt,sheenRoughnessMap:Wt,specularMap:Ut,specularColorMap:yt,specularIntensityMap:Kt,transmission:ot,transmissionMap:V,thicknessMap:dt,gradientMap:pt,opaque:b.transparent===!1&&b.blending===ki&&b.alphaToCoverage===!1,alphaMap:Et,alphaTest:lt,alphaHash:st,combine:b.combine,mapUv:kt&&_(b.map.channel),aoMapUv:fe&&_(b.aoMap.channel),lightMapUv:zt&&_(b.lightMap.channel),bumpMapUv:Ht&&_(b.bumpMap.channel),normalMapUv:Tt&&_(b.normalMap.channel),displacementMapUv:ge&&_(b.displacementMap.channel),emissiveMapUv:It&&_(b.emissiveMap.channel),metalnessMapUv:te&&_(b.metalnessMap.channel),roughnessMapUv:Be&&_(b.roughnessMap.channel),anisotropyMapUv:j&&_(b.anisotropyMap.channel),clearcoatMapUv:Ft&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ft&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&_(b.sheenRoughnessMap.channel),specularMapUv:Ut&&_(b.specularMap.channel),specularColorMapUv:yt&&_(b.specularColorMap.channel),specularIntensityMapUv:Kt&&_(b.specularIntensityMap.channel),transmissionMapUv:V&&_(b.transmissionMap.channel),thicknessMapUv:dt&&_(b.thicknessMap.channel),alphaMapUv:Et&&_(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Tt||Ce),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(kt||Et),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:it,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:Z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:kt&&b.map.isVideoTexture===!0&&ae.getTransfer(b.map.colorSpace)===ue,decodeVideoTextureEmissive:It&&b.emissiveMap.isVideoTexture===!0&&ae.getTransfer(b.emissiveMap.colorSpace)===ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$e,flipSided:b.side===Je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Rt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&b.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function f(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)E.push(I),E.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(y(E,b),x(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function y(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function M(b){let E=g[b.type],I;if(E){let U=Xn[E];I=bu.clone(U.uniforms)}else I=b.uniforms;return I}function v(b,E){let I;for(let U=0,B=h.length;U<B;U++){let N=h[U];if(N.cacheKey===E){I=N,++I.usedTimes;break}}return I===void 0&&(I=new n1(i,E,b,r),h.push(I)),I}function S(b){if(--b.usedTimes===0){let E=h.indexOf(b);h[E]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:A}}function r1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function o1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||o1),n.length>1&&n.sort(d||Wu),s.length>1&&s.sort(d||Wu)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function a1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xu,i.set(n,[o])):s>=r.length?(o=new Xu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function l1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Yt};break;case"SpotLight":e={position:new k,direction:new k,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function c1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var h1=0;function u1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function d1(i){let t=new l1,e=c1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new he,o=new he;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,x=0,M=0,v=0,S=0,w=0;c.sort(u1);for(let b=0,E=c.length;b<E;b++){let I=c[b],U=I.color,B=I.intensity,N=I.distance,F=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*B,u+=U.g*B,d+=U.b*B;else if(I.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(I.sh.coefficients[C],B);w++}else if(I.isDirectionalLight){let C=t.get(I);if(C.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,D=e.get(I);D.shadowIntensity=P.intensity,D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=F,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=C,p++}else if(I.isSpotLight){let C=t.get(I);C.position.setFromMatrixPosition(I.matrixWorld),C.color.copy(U).multiplyScalar(B),C.distance=N,C.coneCos=Math.cos(I.angle),C.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),C.decay=I.decay,n.spot[_]=C;let P=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,P.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[_]=P.matrix,I.castShadow){let D=e.get(I);D.shadowIntensity=P.intensity,D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=F,M++}_++}else if(I.isRectAreaLight){let C=t.get(I);C.color.copy(U).multiplyScalar(B),C.halfWidth.set(I.width*.5,0,0),C.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=C,m++}else if(I.isPointLight){let C=t.get(I);if(C.color.copy(I.color).multiplyScalar(I.intensity),C.distance=I.distance,C.decay=I.decay,I.castShadow){let P=I.shadow,D=e.get(I);D.shadowIntensity=P.intensity,D.shadowBias=P.bias,D.shadowNormalBias=P.normalBias,D.shadowRadius=P.radius,D.shadowMapSize=P.mapSize,D.shadowCameraNear=P.camera.near,D.shadowCameraFar=P.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=C,g++}else if(I.isHemisphereLight){let C=t.get(I);C.skyColor.copy(I.color).multiplyScalar(B),C.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[f]=C,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==y||A.numPointShadows!==x||A.numSpotShadows!==M||A.numSpotMaps!==v||A.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+v-S,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=y,A.numPointShadows=x,A.numSpotShadows=M,A.numSpotMaps=v,A.numLightProbes=w,n.version=h1++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let x=c[f];if(x.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function qu(i){let t=new d1(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function f1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qu(i),t.set(s,[a])):r>=o.length?(a=new qu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var p1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m1=`uniform sampler2D shadow_pass;
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
}`;function g1(i,t,e){let n=new bs,s=new Dt,r=new Dt,o=new we,a=new ko({depthPacking:hu}),l=new zo,c={},h=e.maxTextureSize,u={[ei]:Je,[Je]:ei,[$e]:$e},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let f=this.type;this.render=function(S,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let b=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ii),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let B=f!==Wn&&this.type===Wn,N=f===Wn&&this.type!==Wn;for(let F=0,C=S.length;F<C;F++){let P=S[F],D=P.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let W=D.getFrameExtents();if(s.multiply(W),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,D.mapSize.y=r.y)),D.map===null||B===!0||N===!0){let X=this.type!==Wn?{minFilter:nn,magFilter:nn}:{};D.map!==null&&D.map.dispose(),D.map=new zn(s.x,s.y,X),D.map.texture.name=P.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let z=D.getViewportCount();for(let X=0;X<z;X++){let Z=D.getViewport(X);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),U.viewport(o),D.updateMatrices(P,X),n=D.getFrustum(),M(w,A,D.camera,P,this.type)}D.isPointLightShadow!==!0&&this.type===Wn&&y(D,A),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,E,I)};function y(S,w){let A=t.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new zn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,A,d,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,A,p,_,null)}function x(S,w,A,b){let E=null,I=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)E=I;else if(E=A.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let U=E.uuid,B=w.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let F=N[B];F===void 0&&(F=E.clone(),N[B]=F,w.addEventListener("dispose",v)),E=F}if(E.visible=w.visible,E.wireframe=w.wireframe,b===Wn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let U=i.properties.get(E);U.light=A}return E}function M(S,w,A,b,E){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Wn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);let B=t.update(S),N=S.material;if(Array.isArray(N)){let F=B.groups;for(let C=0,P=F.length;C<P;C++){let D=F[C],W=N[D.materialIndex];if(W&&W.visible){let z=x(S,W,b,E);S.onBeforeShadow(i,S,w,A,B,z,D),i.renderBufferDirect(A,null,B,z,S,D),S.onAfterShadow(i,S,w,A,B,z,D)}}}else if(N.visible){let F=x(S,N,b,E);S.onBeforeShadow(i,S,w,A,B,F,null),i.renderBufferDirect(A,null,B,F,S,null),S.onAfterShadow(i,S,w,A,B,F,null)}}let U=S.children;for(let B=0,N=U.length;B<N;B++)M(U[B],w,A,b,E)}function v(S){S.target.removeEventListener("dispose",v);for(let A in c){let b=c[A],E=S.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var x1={[Qo]:jo,[ta]:ia,[ea]:sa,[zi]:na,[jo]:Qo,[ia]:ta,[sa]:ea,[na]:zi};function _1(i,t){function e(){let V=!1,dt=new we,pt=null,Et=new we(0,0,0,0);return{setMask:function(lt){pt!==lt&&!V&&(i.colorMask(lt,lt,lt,lt),pt=lt)},setLocked:function(lt){V=lt},setClear:function(lt,st,Rt,Jt,xe){xe===!0&&(lt*=Jt,st*=Jt,Rt*=Jt),dt.set(lt,st,Rt,Jt),Et.equals(dt)===!1&&(i.clearColor(lt,st,Rt,Jt),Et.copy(dt))},reset:function(){V=!1,pt=null,Et.set(-1,0,0,0)}}}function n(){let V=!1,dt=!1,pt=null,Et=null,lt=null;return{setReversed:function(st){if(dt!==st){let Rt=t.get("EXT_clip_control");st?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),dt=st;let Jt=lt;lt=null,this.setClear(Jt)}},getReversed:function(){return dt},setTest:function(st){st?$(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(st){pt!==st&&!V&&(i.depthMask(st),pt=st)},setFunc:function(st){if(dt&&(st=x1[st]),Et!==st){switch(st){case Qo:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=st}},setLocked:function(st){V=st},setClear:function(st){lt!==st&&(dt&&(st=1-st),i.clearDepth(st),lt=st)},reset:function(){V=!1,pt=null,Et=null,lt=null,dt=!1}}}function s(){let V=!1,dt=null,pt=null,Et=null,lt=null,st=null,Rt=null,Jt=null,xe=null;return{setTest:function(ce){V||(ce?$(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(ce){dt!==ce&&!V&&(i.stencilMask(ce),dt=ce)},setFunc:function(ce,Zn,kn){(pt!==ce||Et!==Zn||lt!==kn)&&(i.stencilFunc(ce,Zn,kn),pt=ce,Et=Zn,lt=kn)},setOp:function(ce,Zn,kn){(st!==ce||Rt!==Zn||Jt!==kn)&&(i.stencilOp(ce,Zn,kn),st=ce,Rt=Zn,Jt=kn)},setLocked:function(ce){V=ce},setClear:function(ce){xe!==ce&&(i.clearStencil(ce),xe=ce)},reset:function(){V=!1,dt=null,pt=null,Et=null,lt=null,st=null,Rt=null,Jt=null,xe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,x=null,M=null,v=null,S=null,w=new Yt(0,0,0),A=0,b=!1,E=null,I=null,U=null,B=null,N=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),C=!1,P=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(D)[1]),C=P>=1):D.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),C=P>=2);let W=null,z={},X=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),tt=new we().fromArray(X),at=new we().fromArray(Z);function rt(V,dt,pt,Et){let lt=new Uint8Array(4),st=i.createTexture();i.bindTexture(V,st),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<pt;Rt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(dt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return st}let O={};O[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),O[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),O[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(zi),Ht(!1),Tt(Ql),$(i.CULL_FACE),fe(ii);function $(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function it(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function xt(V,dt){return u[V]!==dt?(i.bindFramebuffer(V,dt),u[V]=dt,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function _t(V,dt){let pt=p,Et=!1;if(V){pt=d.get(dt),pt===void 0&&(pt=[],d.set(dt,pt));let lt=V.textures;if(pt.length!==lt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Rt=lt.length;st<Rt;st++)pt[st]=i.COLOR_ATTACHMENT0+st;pt.length=lt.length,Et=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(pt)}function kt(V){return g!==V?(i.useProgram(V),g=V,!0):!1}let Ae={[xi]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[Oh]:i.FUNC_REVERSE_SUBTRACT};Ae[kh]=i.MIN,Ae[zh]=i.MAX;let H={[Hh]:i.ZERO,[Vh]:i.ONE,[Gh]:i.SRC_COLOR,[bo]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Yh]:i.DST_COLOR,[Xh]:i.DST_ALPHA,[Wh]:i.ONE_MINUS_SRC_COLOR,[So]:i.ONE_MINUS_SRC_ALPHA,[Zh]:i.ONE_MINUS_DST_COLOR,[qh]:i.ONE_MINUS_DST_ALPHA,[$h]:i.CONSTANT_COLOR,[Kh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[jh]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(V,dt,pt,Et,lt,st,Rt,Jt,xe,ce){if(V===ii){_===!0&&(it(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),V!==Nh){if(V!==m||ce!==b){if((f!==xi||M!==xi)&&(i.blendEquation(i.FUNC_ADD),f=xi,M=xi),ce)switch(V){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tc:i.blendFunc(i.ONE,i.ONE);break;case ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ec:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}y=null,x=null,v=null,S=null,w.set(0,0,0),A=0,m=V,b=ce}return}lt=lt||dt,st=st||pt,Rt=Rt||Et,(dt!==f||lt!==M)&&(i.blendEquationSeparate(Ae[dt],Ae[lt]),f=dt,M=lt),(pt!==y||Et!==x||st!==v||Rt!==S)&&(i.blendFuncSeparate(H[pt],H[Et],H[st],H[Rt]),y=pt,x=Et,v=st,S=Rt),(Jt.equals(w)===!1||xe!==A)&&(i.blendColor(Jt.r,Jt.g,Jt.b,xe),w.copy(Jt),A=xe),m=V,b=!1}function zt(V,dt){V.side===$e?it(i.CULL_FACE):$(i.CULL_FACE);let pt=V.side===Je;dt&&(pt=!pt),Ht(pt),V.blending===ki&&V.transparent===!1?fe(ii):fe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Et=V.stencilWrite;a.setTest(Et),Et&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),It(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(V){E!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),E=V)}function Tt(V){V!==Uh?($(i.CULL_FACE),V!==I&&(V===Ql?i.cullFace(i.BACK):V===Fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),I=V}function ge(V){V!==U&&(C&&i.lineWidth(V),U=V)}function It(V,dt,pt){V?($(i.POLYGON_OFFSET_FILL),(B!==dt||N!==pt)&&(i.polygonOffset(dt,pt),B=dt,N=pt)):it(i.POLYGON_OFFSET_FILL)}function te(V){V?$(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Be(V){V===void 0&&(V=i.TEXTURE0+F-1),W!==V&&(i.activeTexture(V),W=V)}function Ce(V,dt,pt){pt===void 0&&(W===null?pt=i.TEXTURE0+F-1:pt=W);let Et=z[pt];Et===void 0&&(Et={type:void 0,texture:void 0},z[pt]=Et),(Et.type!==V||Et.texture!==dt)&&(W!==pt&&(i.activeTexture(pt),W=pt),i.bindTexture(V,dt||O[V]),Et.type=V,Et.texture=dt)}function L(){let V=z[W];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(V){tt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),tt.copy(V))}function Wt(V){at.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),at.copy(V))}function Ut(V,dt){let pt=c.get(dt);pt===void 0&&(pt=new WeakMap,c.set(dt,pt));let Et=pt.get(V);Et===void 0&&(Et=i.getUniformBlockIndex(dt,V.name),pt.set(V,Et))}function yt(V,dt){let Et=c.get(dt).get(V);l.get(dt)!==Et&&(i.uniformBlockBinding(dt,Et,V.__bindingPointIndex),l.set(dt,Et))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,z={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,x=null,M=null,v=null,S=null,w=new Yt(0,0,0),A=0,b=!1,E=null,I=null,U=null,B=null,N=null,tt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:it,bindFramebuffer:xt,drawBuffers:_t,useProgram:kt,setBlending:fe,setMaterial:zt,setFlipSided:Ht,setCullFace:Tt,setLineWidth:ge,setPolygonOffset:It,setScissorTest:te,activeTexture:Be,bindTexture:Ce,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:Lt,texImage3D:ut,updateUBOMapping:Ut,uniformBlockBinding:yt,texStorage2D:ft,texStorage3D:Pt,texSubImage2D:et,texSubImage3D:ot,compressedTexSubImage2D:j,compressedTexSubImage3D:Ft,scissor:bt,viewport:Wt,reset:Kt}}function y1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return p?new OffscreenCanvas(L,T):nr("canvas")}function _(L,T,J){let et=1,ot=Ce(L);if((ot.width>J||ot.height>J)&&(et=J/Math.max(ot.width,ot.height)),et<1)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap||typeof VideoFrame!="undefined"&&L instanceof VideoFrame){let j=Math.floor(et*ot.width),Ft=Math.floor(et*ot.height);u===void 0&&(u=g(j,Ft));let ft=T?g(j,Ft):u;return ft.width=j,ft.height=Ft,ft.getContext("2d").drawImage(L,0,0,j,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+j+"x"+Ft+")."),ft}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){i.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,T,J,et,ot=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=T;if(T===i.RED&&(J===i.FLOAT&&(j=i.R32F),J===i.HALF_FLOAT&&(j=i.R16F),J===i.UNSIGNED_BYTE&&(j=i.R8)),T===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(j=i.R8UI),J===i.UNSIGNED_SHORT&&(j=i.R16UI),J===i.UNSIGNED_INT&&(j=i.R32UI),J===i.BYTE&&(j=i.R8I),J===i.SHORT&&(j=i.R16I),J===i.INT&&(j=i.R32I)),T===i.RG&&(J===i.FLOAT&&(j=i.RG32F),J===i.HALF_FLOAT&&(j=i.RG16F),J===i.UNSIGNED_BYTE&&(j=i.RG8)),T===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(j=i.RG8UI),J===i.UNSIGNED_SHORT&&(j=i.RG16UI),J===i.UNSIGNED_INT&&(j=i.RG32UI),J===i.BYTE&&(j=i.RG8I),J===i.SHORT&&(j=i.RG16I),J===i.INT&&(j=i.RG32I)),T===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(j=i.RGB8UI),J===i.UNSIGNED_SHORT&&(j=i.RGB16UI),J===i.UNSIGNED_INT&&(j=i.RGB32UI),J===i.BYTE&&(j=i.RGB8I),J===i.SHORT&&(j=i.RGB16I),J===i.INT&&(j=i.RGB32I)),T===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),J===i.UNSIGNED_INT&&(j=i.RGBA32UI),J===i.BYTE&&(j=i.RGBA8I),J===i.SHORT&&(j=i.RGBA16I),J===i.INT&&(j=i.RGBA32I)),T===i.RGB&&(J===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),T===i.RGBA){let Ft=ot?tr:ae.getTransfer(et);J===i.FLOAT&&(j=i.RGBA32F),J===i.HALF_FLOAT&&(j=i.RGBA16F),J===i.UNSIGNED_BYTE&&(j=Ft===ue?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(L,T){let J;return L?T===null||T===Ei||T===As?J=i.DEPTH24_STENCIL8:T===Fn?J=i.DEPTH32F_STENCIL8:T===ws&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ei||T===As?J=i.DEPTH_COMPONENT24:T===Fn?J=i.DEPTH_COMPONENT32F:T===ws&&(J=i.DEPTH_COMPONENT16),J}function v(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==nn&&L.minFilter!==Cn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function S(L){let T=L.target;T.removeEventListener("dispose",S),A(T),T.isVideoTexture&&h.delete(T)}function w(L){let T=L.target;T.removeEventListener("dispose",w),E(T)}function A(L){let T=n.get(L);if(T.__webglInit===void 0)return;let J=L.source,et=d.get(J);if(et){let ot=et[T.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&b(L),Object.keys(et).length===0&&d.delete(J)}n.remove(L)}function b(L){let T=n.get(L);i.deleteTexture(T.__webglTexture);let J=L.source,et=d.get(J);delete et[T.__cacheKey],o.memory.textures--}function E(L){let T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(T.__webglFramebuffer[et]))for(let ot=0;ot<T.__webglFramebuffer[et].length;ot++)i.deleteFramebuffer(T.__webglFramebuffer[et][ot]);else i.deleteFramebuffer(T.__webglFramebuffer[et]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[et])}else{if(Array.isArray(T.__webglFramebuffer))for(let et=0;et<T.__webglFramebuffer.length;et++)i.deleteFramebuffer(T.__webglFramebuffer[et]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let et=0;et<T.__webglColorRenderbuffer.length;et++)T.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[et]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let J=L.textures;for(let et=0,ot=J.length;et<ot;et++){let j=n.get(J[et]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(J[et])}n.remove(L)}let I=0;function U(){I=0}function B(){let L=I;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function N(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function F(L,T){let J=n.get(L);if(L.isVideoTexture&&te(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){let et=L.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(J,L,T);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+T)}function C(L,T){let J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){O(J,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+T)}function P(L,T){let J=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){O(J,L,T);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+T)}function D(L,T){let J=n.get(L);if(L.version>0&&J.__version!==L.version){$(J,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+T)}let W={[gs]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},z={[nn]:i.NEAREST,[lu]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[la]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},X={[du]:i.NEVER,[_u]:i.ALWAYS,[fu]:i.LESS,[fc]:i.LEQUAL,[pu]:i.EQUAL,[xu]:i.GEQUAL,[mu]:i.GREATER,[gu]:i.NOTEQUAL};function Z(L,T){if(T.type===Fn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Cn||T.magFilter===la||T.magFilter===Rr||T.magFilter===Si||T.minFilter===Cn||T.minFilter===la||T.minFilter===Rr||T.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,W[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,W[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,W[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,z[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,z[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,X[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===nn||T.minFilter!==Rr&&T.minFilter!==Si||T.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function tt(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",S));let et=T.source,ot=d.get(et);ot===void 0&&(ot={},d.set(et,ot));let j=N(T);if(j!==L.__cacheKey){ot[j]===void 0&&(ot[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ot[j].usedTimes++;let Ft=ot[L.__cacheKey];Ft!==void 0&&(ot[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&b(T)),L.__cacheKey=j,L.__webglTexture=ot[j].texture}return J}function at(L,T,J){return Math.floor(Math.floor(L/J)/T)}function rt(L,T,J,et){let j=L.updateRanges;if(j.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,J,et,T.data);else{j.sort((ut,bt)=>ut.start-bt.start);let Ft=0;for(let ut=1;ut<j.length;ut++){let bt=j[Ft],Wt=j[ut],Ut=bt.start+bt.count,yt=at(Wt.start,T.width,4),Kt=at(bt.start,T.width,4);Wt.start<=Ut+1&&yt===Kt&&at(Wt.start+Wt.count-1,T.width,4)===yt?bt.count=Math.max(bt.count,Wt.start+Wt.count-bt.start):(++Ft,j[Ft]=Wt)}j.length=Ft+1;let ft=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ut=0,bt=j.length;ut<bt;ut++){let Wt=j[ut],Ut=Math.floor(Wt.start/4),yt=Math.ceil(Wt.count/4),Kt=Ut%T.width,V=Math.floor(Ut/T.width),dt=yt,pt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,Kt,V,dt,pt,J,et,T.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function O(L,T,J){let et=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(et=i.TEXTURE_3D);let ot=tt(L,T),j=T.source;e.bindTexture(et,L.__webglTexture,i.TEXTURE0+J);let Ft=n.get(j);if(j.version!==Ft.__version||ot===!0){e.activeTexture(i.TEXTURE0+J);let ft=ae.getPrimaries(ae.workingColorSpace),Pt=T.colorSpace===ri?null:ae.getPrimaries(T.colorSpace),Lt=T.colorSpace===ri||ft===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ut=_(T.image,!1,s.maxTextureSize);ut=Be(T,ut);let bt=r.convert(T.format,T.colorSpace),Wt=r.convert(T.type),Ut=x(T.internalFormat,bt,Wt,T.colorSpace,T.isVideoTexture);Z(et,T);let yt,Kt=T.mipmaps,V=T.isVideoTexture!==!0,dt=Ft.__version===void 0||ot===!0,pt=j.dataReady,Et=v(T,ut);if(T.isDepthTexture)Ut=M(T.format===Rs,T.type),dt&&(V?e.texStorage2D(i.TEXTURE_2D,1,Ut,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,bt,Wt,null));else if(T.isDataTexture)if(Kt.length>0){V&&dt&&e.texStorage2D(i.TEXTURE_2D,Et,Ut,Kt[0].width,Kt[0].height);for(let lt=0,st=Kt.length;lt<st;lt++)yt=Kt[lt],V?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,bt,Wt,yt.data):e.texImage2D(i.TEXTURE_2D,lt,Ut,yt.width,yt.height,0,bt,Wt,yt.data);T.generateMipmaps=!1}else V?(dt&&e.texStorage2D(i.TEXTURE_2D,Et,Ut,ut.width,ut.height),pt&&rt(T,ut,bt,Wt)):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,bt,Wt,ut.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ut,Kt[0].width,Kt[0].height,ut.depth);for(let lt=0,st=Kt.length;lt<st;lt++)if(yt=Kt[lt],T.format!==bn)if(bt!==null)if(V){if(pt)if(T.layerUpdates.size>0){let Rt=vc(yt.width,yt.height,T.format,T.type);for(let Jt of T.layerUpdates){let xe=yt.data.subarray(Jt*Rt/yt.data.BYTES_PER_ELEMENT,(Jt+1)*Rt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Jt,yt.width,yt.height,1,bt,xe)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,ut.depth,bt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Ut,yt.width,yt.height,ut.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,ut.depth,bt,Wt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Ut,yt.width,yt.height,ut.depth,0,bt,Wt,yt.data)}else{V&&dt&&e.texStorage2D(i.TEXTURE_2D,Et,Ut,Kt[0].width,Kt[0].height);for(let lt=0,st=Kt.length;lt<st;lt++)yt=Kt[lt],T.format!==bn?bt!==null?V?pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,bt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,yt.width,yt.height,bt,Wt,yt.data):e.texImage2D(i.TEXTURE_2D,lt,Ut,yt.width,yt.height,0,bt,Wt,yt.data)}else if(T.isDataArrayTexture)if(V){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Ut,ut.width,ut.height,ut.depth),pt)if(T.layerUpdates.size>0){let lt=vc(ut.width,ut.height,T.format,T.type);for(let st of T.layerUpdates){let Rt=ut.data.subarray(st*lt/ut.data.BYTES_PER_ELEMENT,(st+1)*lt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ut.width,ut.height,1,bt,Wt,Rt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,bt,Wt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ut.width,ut.height,ut.depth,0,bt,Wt,ut.data);else if(T.isData3DTexture)V?(dt&&e.texStorage3D(i.TEXTURE_3D,Et,Ut,ut.width,ut.height,ut.depth),pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,bt,Wt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ut.width,ut.height,ut.depth,0,bt,Wt,ut.data);else if(T.isFramebufferTexture){if(dt)if(V)e.texStorage2D(i.TEXTURE_2D,Et,Ut,ut.width,ut.height);else{let lt=ut.width,st=ut.height;for(let Rt=0;Rt<Et;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Ut,lt,st,0,bt,Wt,null),lt>>=1,st>>=1}}else if(Kt.length>0){if(V&&dt){let lt=Ce(Kt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Ut,lt.width,lt.height)}for(let lt=0,st=Kt.length;lt<st;lt++)yt=Kt[lt],V?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,bt,Wt,yt):e.texImage2D(i.TEXTURE_2D,lt,Ut,bt,Wt,yt);T.generateMipmaps=!1}else if(V){if(dt){let lt=Ce(ut);e.texStorage2D(i.TEXTURE_2D,Et,Ut,lt.width,lt.height)}pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Wt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Ut,bt,Wt,ut);m(T)&&f(et),Ft.__version=j.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function $(L,T,J){if(T.image.length!==6)return;let et=tt(L,T),ot=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+J);let j=n.get(ot);if(ot.version!==j.__version||et===!0){e.activeTexture(i.TEXTURE0+J);let Ft=ae.getPrimaries(ae.workingColorSpace),ft=T.colorSpace===ri?null:ae.getPrimaries(T.colorSpace),Pt=T.colorSpace===ri||Ft===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Lt=T.isCompressedTexture||T.image[0].isCompressedTexture,ut=T.image[0]&&T.image[0].isDataTexture,bt=[];for(let st=0;st<6;st++)!Lt&&!ut?bt[st]=_(T.image[st],!0,s.maxCubemapSize):bt[st]=ut?T.image[st].image:T.image[st],bt[st]=Be(T,bt[st]);let Wt=bt[0],Ut=r.convert(T.format,T.colorSpace),yt=r.convert(T.type),Kt=x(T.internalFormat,Ut,yt,T.colorSpace),V=T.isVideoTexture!==!0,dt=j.__version===void 0||et===!0,pt=ot.dataReady,Et=v(T,Wt);Z(i.TEXTURE_CUBE_MAP,T);let lt;if(Lt){V&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Kt,Wt.width,Wt.height);for(let st=0;st<6;st++){lt=bt[st].mipmaps;for(let Rt=0;Rt<lt.length;Rt++){let Jt=lt[Rt];T.format!==bn?Ut!==null?V?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,0,0,Jt.width,Jt.height,Ut,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,Kt,Jt.width,Jt.height,0,Jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,0,0,Jt.width,Jt.height,Ut,yt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,Kt,Jt.width,Jt.height,0,Ut,yt,Jt.data)}}}else{if(lt=T.mipmaps,V&&dt){lt.length>0&&Et++;let st=Ce(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Kt,st.width,st.height)}for(let st=0;st<6;st++)if(ut){V?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,bt[st].width,bt[st].height,Ut,yt,bt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,bt[st].width,bt[st].height,0,Ut,yt,bt[st].data);for(let Rt=0;Rt<lt.length;Rt++){let xe=lt[Rt].image[st].image;V?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,0,0,xe.width,xe.height,Ut,yt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,Kt,xe.width,xe.height,0,Ut,yt,xe.data)}}else{V?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,yt,bt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,Ut,yt,bt[st]);for(let Rt=0;Rt<lt.length;Rt++){let Jt=lt[Rt];V?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,0,0,Ut,yt,Jt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,Kt,Ut,yt,Jt.image[st])}}}m(T)&&f(i.TEXTURE_CUBE_MAP),j.__version=ot.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function it(L,T,J,et,ot,j){let Ft=r.convert(J.format,J.colorSpace),ft=r.convert(J.type),Pt=x(J.internalFormat,Ft,ft,J.colorSpace),Lt=n.get(T),ut=n.get(J);if(ut.__renderTarget=T,!Lt.__hasExternalTextures){let bt=Math.max(1,T.width>>j),Wt=Math.max(1,T.height>>j);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,j,Pt,bt,Wt,T.depth,0,Ft,ft,null):e.texImage2D(ot,j,Pt,bt,Wt,0,Ft,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),It(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ot,ut.__webglTexture,0,ge(T)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ot,ut.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(L,T,J){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){let et=T.depthTexture,ot=et&&et.isDepthTexture?et.type:null,j=M(T.stencilBuffer,ot),Ft=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=ge(T);It(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,j,T.width,T.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,L)}else{let et=T.textures;for(let ot=0;ot<et.length;ot++){let j=et[ot],Ft=r.convert(j.format,j.colorSpace),ft=r.convert(j.type),Pt=x(j.internalFormat,Ft,ft,j.colorSpace),Lt=ge(T);J&&It(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Pt,T.width,T.height):It(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Pt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(T.depthTexture);et.__renderTarget=T,(!et.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);let ot=et.__webglTexture,j=ge(T);if(T.depthTexture.format===xs)It(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(T.depthTexture.format===Rs)It(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function kt(L){let T=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let et=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),et){let ot=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,et.removeEventListener("dispose",ot)};et.addEventListener("dispose",ot),T.__depthDisposeCallback=ot}T.__boundDepthTexture=et}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");let et=L.texture.mipmaps;et&&et.length>0?_t(T.__webglFramebuffer[0],L):_t(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[et]),T.__webglDepthbuffer[et]===void 0)T.__webglDepthbuffer[et]=i.createRenderbuffer(),xt(T.__webglDepthbuffer[et],L,!1);else{let ot=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,j)}}else{let et=L.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),xt(T.__webglDepthbuffer,L,!1);else{let ot=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,j)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(L,T,J){let et=n.get(L);T!==void 0&&it(et.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&kt(L)}function H(L){let T=L.texture,J=n.get(L),et=n.get(T);L.addEventListener("dispose",w);let ot=L.textures,j=L.isWebGLCubeRenderTarget===!0,Ft=ot.length>1;if(Ft||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=T.version,o.memory.textures++),j){J.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[ft]=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)J.__webglFramebuffer[ft][Pt]=i.createFramebuffer()}else J.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let ft=0;ft<T.mipmaps.length;ft++)J.__webglFramebuffer[ft]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let ft=0,Pt=ot.length;ft<Pt;ft++){let Lt=n.get(ot[ft]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&It(L)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ft=0;ft<ot.length;ft++){let Pt=ot[ft];J.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ft]);let Lt=r.convert(Pt.format,Pt.colorSpace),ut=r.convert(Pt.type),bt=x(Pt.internalFormat,Lt,ut,Pt.colorSpace,L.isXRRenderTarget===!0),Wt=ge(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,bt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,J.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(J.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Z(i.TEXTURE_CUBE_MAP,T);for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)it(J.__webglFramebuffer[ft][Pt],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt);else it(J.__webglFramebuffer[ft],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(T)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let ft=0,Pt=ot.length;ft<Pt;ft++){let Lt=ot[ft],ut=n.get(Lt),bt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(bt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,ut.__webglTexture),Z(bt,Lt),it(J.__webglFramebuffer,L,Lt,i.COLOR_ATTACHMENT0+ft,bt,0),m(Lt)&&f(bt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ft=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,et.__webglTexture),Z(ft,T),T.mipmaps&&T.mipmaps.length>0)for(let Pt=0;Pt<T.mipmaps.length;Pt++)it(J.__webglFramebuffer[Pt],L,T,i.COLOR_ATTACHMENT0,ft,Pt);else it(J.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,ft,0);m(T)&&f(ft),e.unbindTexture()}L.depthBuffer&&kt(L)}function fe(L){let T=L.textures;for(let J=0,et=T.length;J<et;J++){let ot=T[J];if(m(ot)){let j=y(L),Ft=n.get(ot).__webglTexture;e.bindTexture(j,Ft),f(j),e.unbindTexture()}}}let zt=[],Ht=[];function Tt(L){if(L.samples>0){if(It(L)===!1){let T=L.textures,J=L.width,et=L.height,ot=i.COLOR_BUFFER_BIT,j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(L),ft=T.length>1;if(ft)for(let Lt=0;Lt<T.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);let Pt=L.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);let ut=n.get(T[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,J,et,0,0,J,et,ot,i.NEAREST),l===!0&&(zt.length=0,Ht.length=0,zt.push(i.COLOR_ATTACHMENT0+Lt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(zt.push(j),Ht.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Lt=0;Lt<T.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);let ut=n.get(T[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ge(L){return Math.min(s.maxSamples,L.samples)}function It(L){let T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function te(L){let T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function Be(L,T){let J=L.colorSpace,et=L.format,ot=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Hi&&J!==ri&&(ae.getTransfer(J)===ue?(et!==bn||ot!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Ce(L){return typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame!="undefined"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=F,this.setTexture2DArray=C,this.setTexture3D=P,this.setTextureCube=D,this.rebindTextures=Ae,this.setupRenderTarget=H,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=It}function v1(i,t){function e(n,s=ri){let r,o=ae.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===rc)return i.BYTE;if(n===oc)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===ca)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===cc)return i.ALPHA;if(n===hc)return i.RGB;if(n===bn)return i.RGBA;if(n===xs)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===da)return i.RED;if(n===fa)return i.RED_INTEGER;if(n===uc)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ma)return i.RGBA_INTEGER;if(n===Cr||n===Ir||n===Pr||n===Dr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===xa||n===_a||n===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===Ma||n===ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===Ma)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===Da||n===La||n===Ua||n===Fa||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Da)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ua)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===Oa||n===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ba)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===Ha||n===Va||n===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var M1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b1=`
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

}`,Lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new pr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Dn({vertexShader:M1,fragmentShader:b1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uc=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new Lc,f={},y=e.getContextAttributes(),x=null,M=null,v=[],S=[],w=new Dt,A=null,b=new Ve;b.viewport=new we;let E=new Ve;E.viewport=new we;let I=[b,E],U=new $o,B=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=v[O];return $===void 0&&($=new Ms,v[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=v[O];return $===void 0&&($=new Ms,v[O]=$),$.getGripSpace()},this.getHand=function(O){let $=v[O];return $===void 0&&($=new Ms,v[O]=$),$.getHandSpace()};function F(O){let $=S.indexOf(O.inputSource);if($===-1)return;let it=v[$];it!==void 0&&(it.update(O.inputSource,O.frame,c||o),it.dispatchEvent({type:O.type,data:O.inputSource}))}function C(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",P);for(let O=0;O<v.length;O++){let $=S[O];$!==null&&(S[O]=null,v[O].disconnect($))}B=null,N=null,m.reset();for(let O in f)delete f[O];t.setRenderTarget(x),p=null,d=null,u=null,s=null,M=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",C),s.addEventListener("inputsourceschange",P),y.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,xt=null,_t=null;y.depth&&(_t=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=y.stencil?Rs:xs,xt=y.stencil?As:Ei);let kt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new zn(d.textureWidth,d.textureHeight,{format:bn,type:Un,depthTexture:new fr(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let it={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new zn(p.framebufferWidth,p.framebufferHeight,{format:bn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function P(O){for(let $=0;$<O.removed.length;$++){let it=O.removed[$],xt=S.indexOf(it);xt>=0&&(S[xt]=null,v[xt].disconnect(it))}for(let $=0;$<O.added.length;$++){let it=O.added[$],xt=S.indexOf(it);if(xt===-1){for(let kt=0;kt<v.length;kt++)if(kt>=S.length){S.push(it),xt=kt;break}else if(S[kt]===null){S[kt]=it,xt=kt;break}if(xt===-1)break}let _t=v[xt];_t&&_t.connect(it)}}let D=new k,W=new k;function z(O,$,it){D.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(it.matrixWorld);let xt=D.distanceTo(W),_t=$.projectionMatrix.elements,kt=it.projectionMatrix.elements,Ae=_t[14]/(_t[10]-1),H=_t[14]/(_t[10]+1),fe=(_t[9]+1)/_t[5],zt=(_t[9]-1)/_t[5],Ht=(_t[8]-1)/_t[0],Tt=(kt[8]+1)/kt[0],ge=Ae*Ht,It=Ae*Tt,te=xt/(-Ht+Tt),Be=te*-Ht;if($.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Be),O.translateZ(te),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),_t[10]===-1)O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Ce=Ae+te,L=H+te,T=ge-Be,J=It+(xt-Be),et=fe*H/L*Ce,ot=zt*H/L*Ce;O.projectionMatrix.makePerspective(T,J,et,ot,Ce,L),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function X(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let $=O.near,it=O.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(it=m.depthFar)),U.near=E.near=b.near=$,U.far=E.far=b.far=it,(B!==U.near||N!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),B=U.near,N=U.far),U.layers.mask=O.layers.mask|6,b.layers.mask=U.layers.mask&3,E.layers.mask=U.layers.mask&5;let xt=O.parent,_t=U.cameras;X(U,xt);for(let kt=0;kt<_t.length;kt++)X(_t[kt],xt);_t.length===2?z(U,b,E):U.projectionMatrix.copy(b.projectionMatrix),Z(O,U,xt)};function Z(O,$,it){it===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(it.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=To*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(O){return f[O]};let tt=null;function at(O,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let it=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let xt=!1;it.length!==U.cameras.length&&(U.cameras.length=0,xt=!0);for(let H=0;H<it.length;H++){let fe=it[H],zt=null;if(p!==null)zt=p.getViewport(fe);else{let Tt=u.getViewSubImage(d,fe);zt=Tt.viewport,H===0&&(t.setRenderTargetTextures(M,Tt.colorTexture,Tt.depthStencilTexture),t.setRenderTarget(M))}let Ht=I[H];Ht===void 0&&(Ht=new Ve,Ht.layers.enable(H),Ht.viewport=new we,I[H]=Ht),Ht.matrix.fromArray(fe.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(fe.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(zt.x,zt.y,zt.width,zt.height),H===0&&(U.matrix.copy(Ht.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),xt===!0&&U.cameras.push(Ht)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let H=u.getDepthInformation(it[0]);H&&H.isValid&&H.texture&&m.init(H,s.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let H=0;H<it.length;H++){let fe=it[H].camera;if(fe){let zt=f[fe];zt||(zt=new pr,f[fe]=zt);let Ht=u.getCameraImage(fe);zt.sourceTexture=Ht}}}}for(let it=0;it<v.length;it++){let xt=S[it],_t=v[it];xt!==null&&_t!==void 0&&_t.update(xt,$,c||o)}tt&&tt(O,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let rt=new Yu;rt.setAnimationLoop(at),this.setAnimationLoop=function(O){tt=O},this.dispose=function(){}}},Ki=new Pn,S1=new he;function E1(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,gc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),x=y.envMap,M=y.envMapRotation;x&&(m.envMap.value=x,Ki.copy(M),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(S1.makeRotationFromEuler(Ki)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w1(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let v=x.program;n.updateUBOMapping(y,v);let S=t.render.frame;r[y.id]!==S&&(d(y),r[y.id]=S)}function h(y){let x=u();y.__bindingPointIndex=x;let M=i.createBuffer(),v=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=s[y.id],M=y.uniforms,v=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,w=M.length;S<w;S++){let A=Array.isArray(M[S])?M[S]:[M[S]];for(let b=0,E=A.length;b<E;b++){let I=A[b];if(p(I,S,b,v)===!0){let U=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],N=0;for(let F=0;F<B.length;F++){let C=B[F],P=_(C);typeof C=="number"||typeof C=="boolean"?(I.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,U+N,I.__data)):C.isMatrix3?(I.__data[0]=C.elements[0],I.__data[1]=C.elements[1],I.__data[2]=C.elements[2],I.__data[3]=0,I.__data[4]=C.elements[3],I.__data[5]=C.elements[4],I.__data[6]=C.elements[5],I.__data[7]=0,I.__data[8]=C.elements[6],I.__data[9]=C.elements[7],I.__data[10]=C.elements[8],I.__data[11]=0):(C.toArray(I.__data,N),N+=P.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,M,v){let S=y.value,w=x+"_"+M;if(v[w]===void 0)return typeof S=="number"||typeof S=="boolean"?v[w]=S:v[w]=S.clone(),!0;{let A=v[w];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return v[w]=S,!0}else if(A.equals(S)===!1)return A.copy(S),!0}return!1}function g(y){let x=y.uniforms,M=0,v=16;for(let w=0,A=x.length;w<A;w++){let b=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,I=b.length;E<I;E++){let U=b[E],B=Array.isArray(U.value)?U.value:[U.value];for(let N=0,F=B.length;N<F;N++){let C=B[N],P=_(C),D=M%v,W=D%P.boundary,z=D+W;M+=W,z!==0&&v-z<P.storage&&(M+=v-z),U.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=P.storage}}}let S=M%v;return S>0&&(M+=v-S),y.__size=M,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Za=class{constructor(t={}){let{canvas:e=yu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,v=!1;this._outputColorSpace=Ye;let S=0,w=0,A=null,b=-1,E=null,I=new we,U=new we,B=null,N=new Yt(0),F=0,C=e.width,P=e.height,D=1,W=null,z=null,X=new we(0,0,C,P),Z=new we(0,0,C,P),tt=!1,at=new bs,rt=!1,O=!1,$=new he,it=new k,xt=new we,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function Ae(){return A===null?D:1}let H=n;function fe(R,q){return e.getContext(R,q)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",lt,!1),H===null){let q="webgl2";if(H=fe(q,R),H===null)throw fe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let zt,Ht,Tt,ge,It,te,Be,Ce,L,T,J,et,ot,j,Ft,ft,Pt,Lt,ut,bt,Wt,Ut,yt,Kt;function V(){zt=new G0(H),zt.init(),Ut=new v1(H,zt),Ht=new N0(H,zt,t,Ut),Tt=new _1(H,zt),Ht.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ge=new q0(H),It=new r1,te=new y1(H,zt,Tt,It,Ht,Ut,ge),Be=new O0(M),Ce=new V0(M),L=new Qf(H),yt=new U0(H,L),T=new W0(H,L,ge,yt),J=new Z0(H,T,L,ge),ut=new Y0(H,Ht,te),ft=new B0(It),et=new s1(M,Be,Ce,zt,Ht,yt,ft),ot=new E1(M,It),j=new a1,Ft=new f1(zt),Lt=new L0(M,Be,Ce,Tt,J,p,l),Pt=new g1(M,J,Ht),Kt=new w1(H,ge,Ht,Tt),bt=new F0(H,zt,ge),Wt=new X0(H,zt,ge),ge.programs=et.programs,M.capabilities=Ht,M.extensions=zt,M.properties=It,M.renderLists=j,M.shadowMap=Pt,M.state=Tt,M.info=ge}V();let dt=new Uc(M,H);this.xr=dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=zt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=zt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(R){R!==void 0&&(D=R,this.setSize(C,P,!1))},this.getSize=function(R){return R.set(C,P)},this.setSize=function(R,q,K=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=R,P=q,e.width=Math.floor(R*D),e.height=Math.floor(q*D),K===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(C*D,P*D).floor()},this.setDrawingBufferSize=function(R,q,K){C=R,P=q,D=K,e.width=Math.floor(R*K),e.height=Math.floor(q*K),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(X)},this.setViewport=function(R,q,K,Q){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,q,K,Q),Tt.viewport(I.copy(X).multiplyScalar(D).round())},this.getScissor=function(R){return R.copy(Z)},this.setScissor=function(R,q,K,Q){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,q,K,Q),Tt.scissor(U.copy(Z).multiplyScalar(D).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(R){Tt.setScissorTest(tt=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){z=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,K=!0){let Q=0;if(R){let Y=!1;if(A!==null){let ht=A.texture.format;Y=ht===ma||ht===pa||ht===fa}if(Y){let ht=A.texture.type,vt=ht===Un||ht===Ei||ht===ws||ht===As||ht===ha||ht===ua,At=Lt.getClearColor(),St=Lt.getClearAlpha(),Vt=At.r,qt=At.g,Nt=At.b;vt?(g[0]=Vt,g[1]=qt,g[2]=Nt,g[3]=St,H.clearBufferuiv(H.COLOR,0,g)):(_[0]=Vt,_[1]=qt,_[2]=Nt,_[3]=St,H.clearBufferiv(H.COLOR,0,_))}else Q|=H.COLOR_BUFFER_BIT}q&&(Q|=H.DEPTH_BUFFER_BIT),K&&(Q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Lt.dispose(),j.dispose(),Ft.dispose(),It.dispose(),Be.dispose(),Ce.dispose(),J.dispose(),yt.dispose(),Kt.dispose(),et.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",kn),dt.removeEventListener("sessionend",sh),Di.stop()};function pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let R=ge.autoReset,q=Pt.enabled,K=Pt.autoUpdate,Q=Pt.needsUpdate,Y=Pt.type;V(),ge.autoReset=R,Pt.enabled=q,Pt.autoUpdate=K,Pt.needsUpdate=Q,Pt.type=Y}function lt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function st(R){let q=R.target;q.removeEventListener("dispose",st),Rt(q)}function Rt(R){Jt(R),It.remove(R)}function Jt(R){let q=It.get(R).programs;q!==void 0&&(q.forEach(function(K){et.releaseProgram(K)}),R.isShaderMaterial&&et.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,K,Q,Y,ht){q===null&&(q=_t);let vt=Y.isMesh&&Y.matrixWorld.determinant()<0,At=Kd(R,q,K,Q,Y);Tt.setMaterial(Q,vt);let St=K.index,Vt=1;if(Q.wireframe===!0){if(St=T.getWireframeAttribute(K),St===void 0)return;Vt=2}let qt=K.drawRange,Nt=K.attributes.position,se=qt.start*Vt,pe=(qt.start+qt.count)*Vt;ht!==null&&(se=Math.max(se,ht.start*Vt),pe=Math.min(pe,(ht.start+ht.count)*Vt)),St!==null?(se=Math.max(se,0),pe=Math.min(pe,St.count)):Nt!=null&&(se=Math.max(se,0),pe=Math.min(pe,Nt.count));let Re=pe-se;if(Re<0||Re===1/0)return;yt.setup(Y,Q,At,K,St);let ye,me=bt;if(St!==null&&(ye=L.get(St),me=Wt,me.setIndex(ye)),Y.isMesh)Q.wireframe===!0?(Tt.setLineWidth(Q.wireframeLinewidth*Ae()),me.setMode(H.LINES)):me.setMode(H.TRIANGLES);else if(Y.isLine){let Bt=Q.linewidth;Bt===void 0&&(Bt=1),Tt.setLineWidth(Bt*Ae()),Y.isLineSegments?me.setMode(H.LINES):Y.isLineLoop?me.setMode(H.LINE_LOOP):me.setMode(H.LINE_STRIP)}else Y.isPoints?me.setMode(H.POINTS):Y.isSprite&&me.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))me.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Bt=Y._multiDrawStarts,be=Y._multiDrawCounts,le=Y._multiDrawCount,cn=St?L.get(St).bytesPerElement:1,es=It.get(Q).currentProgram.getUniforms();for(let hn=0;hn<le;hn++)es.setValue(H,"_gl_DrawID",hn),me.render(Bt[hn]/cn,be[hn])}else if(Y.isInstancedMesh)me.renderInstances(se,Re,Y.count);else if(K.isInstancedBufferGeometry){let Bt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,be=Math.min(K.instanceCount,Bt);me.renderInstances(se,Re,be)}else me.render(se,Re)};function xe(R,q,K){R.transparent===!0&&R.side===$e&&R.forceSinglePass===!1?(R.side=Je,R.needsUpdate=!0,jr(R,q,K),R.side=ei,R.needsUpdate=!0,jr(R,q,K),R.side=$e):jr(R,q,K)}this.compile=function(R,q,K=null){K===null&&(K=R),f=Ft.get(K),f.init(q),x.push(f),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),R!==K&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights();let Q=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ht=Y.material;if(ht)if(Array.isArray(ht))for(let vt=0;vt<ht.length;vt++){let At=ht[vt];xe(At,K,Y),Q.add(At)}else xe(ht,K,Y),Q.add(ht)}),f=x.pop(),Q},this.compileAsync=function(R,q,K=null){let Q=this.compile(R,q,K);return new Promise(Y=>{function ht(){if(Q.forEach(function(vt){It.get(vt).currentProgram.isReady()&&Q.delete(vt)}),Q.size===0){Y(R);return}setTimeout(ht,10)}zt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ce=null;function Zn(R){ce&&ce(R)}function kn(){Di.stop()}function sh(){Di.start()}let Di=new Yu;Di.setAnimationLoop(Zn),typeof self!="undefined"&&Di.setContext(self),this.setAnimationLoop=function(R){ce=R,dt.setAnimationLoop(R),R===null?Di.stop():Di.start()},dt.addEventListener("sessionstart",kn),dt.addEventListener("sessionend",sh),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(q),q=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,q,A),f=Ft.get(R,x.length),f.init(q),x.push(f),$.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),at.setFromProjectionMatrix($,Rn,q.reversedDepth),O=this.localClippingEnabled,rt=ft.init(this.clippingPlanes,O),m=j.get(R,y.length),m.init(),y.push(m),dt.enabled===!0&&dt.isPresenting===!0){let ht=M.xr.getDepthSensingMesh();ht!==null&&fl(ht,q,-1/0,M.sortObjects)}fl(R,q,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(W,z),kt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,kt&&Lt.addToRenderList(m,R),this.info.render.frame++,rt===!0&&ft.beginShadows();let K=f.state.shadowsArray;Pt.render(K,R,q),rt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,Y=m.transmissive;if(f.setupLights(),q.isArrayCamera){let ht=q.cameras;if(Y.length>0)for(let vt=0,At=ht.length;vt<At;vt++){let St=ht[vt];oh(Q,Y,R,St)}kt&&Lt.render(R);for(let vt=0,At=ht.length;vt<At;vt++){let St=ht[vt];rh(m,R,St,St.viewport)}}else Y.length>0&&oh(Q,Y,R,q),kt&&Lt.render(R),rh(m,R,q);A!==null&&w===0&&(te.updateMultisampleRenderTarget(A),te.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(M,R,q),yt.resetDefaultState(),b=-1,E=null,x.pop(),x.length>0?(f=x[x.length-1],rt===!0&&ft.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function fl(R,q,K,Q){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||at.intersectsSprite(R)){Q&&xt.setFromMatrixPosition(R.matrixWorld).applyMatrix4($);let vt=J.update(R),At=R.material;At.visible&&m.push(R,vt,At,K,xt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||at.intersectsObject(R))){let vt=J.update(R),At=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),xt.copy(R.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),xt.copy(vt.boundingSphere.center)),xt.applyMatrix4(R.matrixWorld).applyMatrix4($)),Array.isArray(At)){let St=vt.groups;for(let Vt=0,qt=St.length;Vt<qt;Vt++){let Nt=St[Vt],se=At[Nt.materialIndex];se&&se.visible&&m.push(R,vt,se,K,xt.z,Nt)}}else At.visible&&m.push(R,vt,At,K,xt.z,null)}}let ht=R.children;for(let vt=0,At=ht.length;vt<At;vt++)fl(ht[vt],q,K,Q)}function rh(R,q,K,Q){let Y=R.opaque,ht=R.transmissive,vt=R.transparent;f.setupLightsView(K),rt===!0&&ft.setGlobalState(M.clippingPlanes,K),Q&&Tt.viewport(I.copy(Q)),Y.length>0&&Qr(Y,q,K),ht.length>0&&Qr(ht,q,K),vt.length>0&&Qr(vt,q,K),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function oh(R,q,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Q.id]===void 0&&(f.state.transmissionRenderTarget[Q.id]=new zn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Ts:Un,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let ht=f.state.transmissionRenderTarget[Q.id],vt=Q.viewport||I;ht.setSize(vt.z*M.transmissionResolutionScale,vt.w*M.transmissionResolutionScale);let At=M.getRenderTarget(),St=M.getActiveCubeFace(),Vt=M.getActiveMipmapLevel();M.setRenderTarget(ht),M.getClearColor(N),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),kt&&Lt.render(K);let qt=M.toneMapping;M.toneMapping=si;let Nt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),f.setupLightsView(Q),rt===!0&&ft.setGlobalState(M.clippingPlanes,Q),Qr(R,K,Q),te.updateMultisampleRenderTarget(ht),te.updateRenderTargetMipmap(ht),zt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let pe=0,Re=q.length;pe<Re;pe++){let ye=q[pe],me=ye.object,Bt=ye.geometry,be=ye.material,le=ye.group;if(be.side===$e&&me.layers.test(Q.layers)){let cn=be.side;be.side=Je,be.needsUpdate=!0,ah(me,K,Q,Bt,be,le),be.side=cn,be.needsUpdate=!0,se=!0}}se===!0&&(te.updateMultisampleRenderTarget(ht),te.updateRenderTargetMipmap(ht))}M.setRenderTarget(At,St,Vt),M.setClearColor(N,F),Nt!==void 0&&(Q.viewport=Nt),M.toneMapping=qt}function Qr(R,q,K){let Q=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,ht=R.length;Y<ht;Y++){let vt=R[Y],At=vt.object,St=vt.geometry,Vt=vt.group,qt=vt.material;qt.allowOverride===!0&&Q!==null&&(qt=Q),At.layers.test(K.layers)&&ah(At,q,K,St,qt,Vt)}}function ah(R,q,K,Q,Y,ht){R.onBeforeRender(M,q,K,Q,Y,ht),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(M,q,K,Q,R,ht),Y.transparent===!0&&Y.side===$e&&Y.forceSinglePass===!1?(Y.side=Je,Y.needsUpdate=!0,M.renderBufferDirect(K,q,Q,Y,R,ht),Y.side=ei,Y.needsUpdate=!0,M.renderBufferDirect(K,q,Q,Y,R,ht),Y.side=$e):M.renderBufferDirect(K,q,Q,Y,R,ht),R.onAfterRender(M,q,K,Q,Y,ht)}function jr(R,q,K){q.isScene!==!0&&(q=_t);let Q=It.get(R),Y=f.state.lights,ht=f.state.shadowsArray,vt=Y.state.version,At=et.getParameters(R,Y.state,ht,q,K),St=et.getProgramCacheKey(At),Vt=Q.programs;Q.environment=R.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(R.isMeshStandardMaterial?Ce:Be).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Vt===void 0&&(R.addEventListener("dispose",st),Vt=new Map,Q.programs=Vt);let qt=Vt.get(St);if(qt!==void 0){if(Q.currentProgram===qt&&Q.lightsStateVersion===vt)return ch(R,At),qt}else At.uniforms=et.getUniforms(R),R.onBeforeCompile(At,M),qt=et.acquireProgram(At,St),Vt.set(St,qt),Q.uniforms=At.uniforms;let Nt=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Nt.clippingPlanes=ft.uniform),ch(R,At),Q.needsLights=jd(R),Q.lightsStateVersion=vt,Q.needsLights&&(Nt.ambientLightColor.value=Y.state.ambient,Nt.lightProbe.value=Y.state.probe,Nt.directionalLights.value=Y.state.directional,Nt.directionalLightShadows.value=Y.state.directionalShadow,Nt.spotLights.value=Y.state.spot,Nt.spotLightShadows.value=Y.state.spotShadow,Nt.rectAreaLights.value=Y.state.rectArea,Nt.ltc_1.value=Y.state.rectAreaLTC1,Nt.ltc_2.value=Y.state.rectAreaLTC2,Nt.pointLights.value=Y.state.point,Nt.pointLightShadows.value=Y.state.pointShadow,Nt.hemisphereLights.value=Y.state.hemi,Nt.directionalShadowMap.value=Y.state.directionalShadowMap,Nt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Nt.spotShadowMap.value=Y.state.spotShadowMap,Nt.spotLightMatrix.value=Y.state.spotLightMatrix,Nt.spotLightMap.value=Y.state.spotLightMap,Nt.pointShadowMap.value=Y.state.pointShadowMap,Nt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=qt,Q.uniformsList=null,qt}function lh(R){if(R.uniformsList===null){let q=R.currentProgram.getUniforms();R.uniformsList=Ps.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function ch(R,q){let K=It.get(R);K.outputColorSpace=q.outputColorSpace,K.batching=q.batching,K.batchingColor=q.batchingColor,K.instancing=q.instancing,K.instancingColor=q.instancingColor,K.instancingMorph=q.instancingMorph,K.skinning=q.skinning,K.morphTargets=q.morphTargets,K.morphNormals=q.morphNormals,K.morphColors=q.morphColors,K.morphTargetsCount=q.morphTargetsCount,K.numClippingPlanes=q.numClippingPlanes,K.numIntersection=q.numClipIntersection,K.vertexAlphas=q.vertexAlphas,K.vertexTangents=q.vertexTangents,K.toneMapping=q.toneMapping}function Kd(R,q,K,Q,Y){q.isScene!==!0&&(q=_t),te.resetTextureUnits();let ht=q.fog,vt=Q.isMeshStandardMaterial?q.environment:null,At=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,St=(Q.isMeshStandardMaterial?Ce:Be).get(Q.envMap||vt),Vt=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qt=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Nt=!!K.morphAttributes.position,se=!!K.morphAttributes.normal,pe=!!K.morphAttributes.color,Re=si;Q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Re=M.toneMapping);let ye=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,me=ye!==void 0?ye.length:0,Bt=It.get(Q),be=f.state.lights;if(rt===!0&&(O===!0||R!==E)){let qe=R===E&&Q.id===b;ft.setState(Q,R,qe)}let le=!1;Q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==be.state.version||Bt.outputColorSpace!==At||Y.isBatchedMesh&&Bt.batching===!1||!Y.isBatchedMesh&&Bt.batching===!0||Y.isBatchedMesh&&Bt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Bt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Bt.instancing===!1||!Y.isInstancedMesh&&Bt.instancing===!0||Y.isSkinnedMesh&&Bt.skinning===!1||!Y.isSkinnedMesh&&Bt.skinning===!0||Y.isInstancedMesh&&Bt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Bt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Bt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Bt.instancingMorph===!1&&Y.morphTexture!==null||Bt.envMap!==St||Q.fog===!0&&Bt.fog!==ht||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ft.numPlanes||Bt.numIntersection!==ft.numIntersection)||Bt.vertexAlphas!==Vt||Bt.vertexTangents!==qt||Bt.morphTargets!==Nt||Bt.morphNormals!==se||Bt.morphColors!==pe||Bt.toneMapping!==Re||Bt.morphTargetsCount!==me)&&(le=!0):(le=!0,Bt.__version=Q.version);let cn=Bt.currentProgram;le===!0&&(cn=jr(Q,q,Y));let es=!1,hn=!1,Gs=!1,Se=cn.getUniforms(),xn=Bt.uniforms;if(Tt.useProgram(cn.program)&&(es=!0,hn=!0,Gs=!0),Q.id!==b&&(b=Q.id,hn=!0),es||E!==R){Tt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Se.setValue(H,"projectionMatrix",R.projectionMatrix),Se.setValue(H,"viewMatrix",R.matrixWorldInverse);let tn=Se.map.cameraPosition;tn!==void 0&&tn.setValue(H,it.setFromMatrixPosition(R.matrixWorld)),Ht.logarithmicDepthBuffer&&Se.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Se.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,hn=!0,Gs=!0)}if(Y.isSkinnedMesh){Se.setOptional(H,Y,"bindMatrix"),Se.setOptional(H,Y,"bindMatrixInverse");let qe=Y.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Se.setValue(H,"boneTexture",qe.boneTexture,te))}Y.isBatchedMesh&&(Se.setOptional(H,Y,"batchingTexture"),Se.setValue(H,"batchingTexture",Y._matricesTexture,te),Se.setOptional(H,Y,"batchingIdTexture"),Se.setValue(H,"batchingIdTexture",Y._indirectTexture,te),Se.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Se.setValue(H,"batchingColorTexture",Y._colorsTexture,te));let _n=K.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ut.update(Y,K,cn),(hn||Bt.receiveShadow!==Y.receiveShadow)&&(Bt.receiveShadow=Y.receiveShadow,Se.setValue(H,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(xn.envMap.value=St,xn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(xn.envMapIntensity.value=q.environmentIntensity),hn&&(Se.setValue(H,"toneMappingExposure",M.toneMappingExposure),Bt.needsLights&&Qd(xn,Gs),ht&&Q.fog===!0&&ot.refreshFogUniforms(xn,ht),ot.refreshMaterialUniforms(xn,Q,D,P,f.state.transmissionRenderTarget[R.id]),Ps.upload(H,lh(Bt),xn,te)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ps.upload(H,lh(Bt),xn,te),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Se.setValue(H,"center",Y.center),Se.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Se.setValue(H,"normalMatrix",Y.normalMatrix),Se.setValue(H,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let qe=Q.uniformsGroups;for(let tn=0,pl=qe.length;tn<pl;tn++){let Li=qe[tn];Kt.update(Li,cn),Kt.bind(Li,cn)}}return cn}function Qd(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function jd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,q,K){let Q=It.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),It.get(R.texture).__webglTexture=q,It.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){let K=It.get(R);K.__webglFramebuffer=q,K.__useDefaultFramebuffer=q===void 0};let tf=H.createFramebuffer();this.setRenderTarget=function(R,q=0,K=0){A=R,S=q,w=K;let Q=!0,Y=null,ht=!1,vt=!1;if(R){let St=It.get(R);if(St.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(H.FRAMEBUFFER,null),Q=!1;else if(St.__webglFramebuffer===void 0)te.setupRenderTarget(R);else if(St.__hasExternalTextures)te.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Nt=R.depthTexture;if(St.__boundDepthTexture!==Nt){if(Nt!==null&&It.has(Nt)&&(R.width!==Nt.image.width||R.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(R)}}let Vt=R.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(vt=!0);let qt=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[q])?Y=qt[q][K]:Y=qt[q],ht=!0):R.samples>0&&te.useMultisampledRTT(R)===!1?Y=It.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?Y=qt[K]:Y=qt,I.copy(R.viewport),U.copy(R.scissor),B=R.scissorTest}else I.copy(X).multiplyScalar(D).floor(),U.copy(Z).multiplyScalar(D).floor(),B=tt;if(K!==0&&(Y=tf),Tt.bindFramebuffer(H.FRAMEBUFFER,Y)&&Q&&Tt.drawBuffers(R,Y),Tt.viewport(I),Tt.scissor(U),Tt.setScissorTest(B),ht){let St=It.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,St.__webglTexture,K)}else if(vt){let St=q;for(let Vt=0;Vt<R.textures.length;Vt++){let qt=It.get(R.textures[Vt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Vt,qt.__webglTexture,K,St)}}else if(R!==null&&K!==0){let St=It.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,St.__webglTexture,K)}b=-1},this.readRenderTargetPixels=function(R,q,K,Q,Y,ht,vt,At=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){Tt.bindFramebuffer(H.FRAMEBUFFER,St);try{let Vt=R.textures[At],qt=Vt.format,Nt=Vt.type;if(!Ht.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-Q&&K>=0&&K<=R.height-Y&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+At),H.readPixels(q,K,Q,Y,Ut.convert(qt),Ut.convert(Nt),ht))}finally{let Vt=A!==null?It.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(H.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(R,q,K,Q,Y,ht,vt,At=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St)if(q>=0&&q<=R.width-Q&&K>=0&&K<=R.height-Y){Tt.bindFramebuffer(H.FRAMEBUFFER,St);let Vt=R.textures[At],qt=Vt.format,Nt=Vt.type;if(!Ht.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,se),H.bufferData(H.PIXEL_PACK_BUFFER,ht.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+At),H.readPixels(q,K,Q,Y,Ut.convert(qt),Ut.convert(Nt),0);let pe=A!==null?It.get(A).__webglFramebuffer:null;Tt.bindFramebuffer(H.FRAMEBUFFER,pe);let Re=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await vu(H,Re,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,se),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ht),H.deleteBuffer(se),H.deleteSync(Re),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,K=0){let Q=Math.pow(2,-K),Y=Math.floor(R.image.width*Q),ht=Math.floor(R.image.height*Q),vt=q!==null?q.x:0,At=q!==null?q.y:0;te.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,K,0,0,vt,At,Y,ht),Tt.unbindTexture()};let ef=H.createFramebuffer(),nf=H.createFramebuffer();this.copyTextureToTexture=function(R,q,K=null,Q=null,Y=0,ht=null){ht===null&&(Y!==0?(_s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=Y,Y=0):ht=0);let vt,At,St,Vt,qt,Nt,se,pe,Re,ye=R.isCompressedTexture?R.mipmaps[ht]:R.image;if(K!==null)vt=K.max.x-K.min.x,At=K.max.y-K.min.y,St=K.isBox3?K.max.z-K.min.z:1,Vt=K.min.x,qt=K.min.y,Nt=K.isBox3?K.min.z:0;else{let _n=Math.pow(2,-Y);vt=Math.floor(ye.width*_n),At=Math.floor(ye.height*_n),R.isDataArrayTexture?St=ye.depth:R.isData3DTexture?St=Math.floor(ye.depth*_n):St=1,Vt=0,qt=0,Nt=0}Q!==null?(se=Q.x,pe=Q.y,Re=Q.z):(se=0,pe=0,Re=0);let me=Ut.convert(q.format),Bt=Ut.convert(q.type),be;q.isData3DTexture?(te.setTexture3D(q,0),be=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(te.setTexture2DArray(q,0),be=H.TEXTURE_2D_ARRAY):(te.setTexture2D(q,0),be=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);let le=H.getParameter(H.UNPACK_ROW_LENGTH),cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),es=H.getParameter(H.UNPACK_SKIP_PIXELS),hn=H.getParameter(H.UNPACK_SKIP_ROWS),Gs=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ye.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ye.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Vt),H.pixelStorei(H.UNPACK_SKIP_ROWS,qt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Nt);let Se=R.isDataArrayTexture||R.isData3DTexture,xn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){let _n=It.get(R),qe=It.get(q),tn=It.get(_n.__renderTarget),pl=It.get(qe.__renderTarget);Tt.bindFramebuffer(H.READ_FRAMEBUFFER,tn.__webglFramebuffer),Tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,pl.__webglFramebuffer);for(let Li=0;Li<St;Li++)Se&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.get(R).__webglTexture,Y,Nt+Li),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.get(q).__webglTexture,ht,Re+Li)),H.blitFramebuffer(Vt,qt,vt,At,se,pe,vt,At,H.DEPTH_BUFFER_BIT,H.NEAREST);Tt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||It.has(R)){let _n=It.get(R),qe=It.get(q);Tt.bindFramebuffer(H.READ_FRAMEBUFFER,ef),Tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,nf);for(let tn=0;tn<St;tn++)Se?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_n.__webglTexture,Y,Nt+tn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_n.__webglTexture,Y),xn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qe.__webglTexture,ht,Re+tn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qe.__webglTexture,ht),Y!==0?H.blitFramebuffer(Vt,qt,vt,At,se,pe,vt,At,H.COLOR_BUFFER_BIT,H.NEAREST):xn?H.copyTexSubImage3D(be,ht,se,pe,Re+tn,Vt,qt,vt,At):H.copyTexSubImage2D(be,ht,se,pe,Vt,qt,vt,At);Tt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else xn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(be,ht,se,pe,Re,vt,At,St,me,Bt,ye.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(be,ht,se,pe,Re,vt,At,St,me,ye.data):H.texSubImage3D(be,ht,se,pe,Re,vt,At,St,me,Bt,ye):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ht,se,pe,vt,At,me,Bt,ye.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ht,se,pe,ye.width,ye.height,me,ye.data):H.texSubImage2D(H.TEXTURE_2D,ht,se,pe,vt,At,me,Bt,ye);H.pixelStorei(H.UNPACK_ROW_LENGTH,le),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,es),H.pixelStorei(H.UNPACK_SKIP_ROWS,hn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Gs),ht===0&&q.generateMipmaps&&H.generateMipmap(be),Tt.unbindTexture()},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&te.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?te.setTextureCube(R,0):R.isData3DTexture?te.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?te.setTexture2DArray(R,0):te.setTexture2D(R,0),Tt.unbindTexture()},this.resetState=function(){S=0,w=0,A=null,Tt.reset(),yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};function Qu(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,x=a.length;y<x;y++){let M=a[y],v=i.attributes[M];l[M]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let S=i.morphAttributes[M];S&&(c[M]||(c[M]=[]),S.forEach((w,A)=>{let b=new w.array.constructor(w.count*w.itemSize);c[M][A]=new w.constructor(b,w.itemSize,w.normalized)}))}let p=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=p*_;for(let y=0;y<r;y++){let x=n?n.getX(y):y,M="";for(let v=0,S=a.length;v<S;v++){let w=a[v],A=i.getAttribute(w),b=A.itemSize;for(let E=0;E<b;E++)M+=`${~~(A[u[E]](x)*_+m)},`}if(M in e)h.push(e[M]);else{for(let v=0,S=a.length;v<S;v++){let w=a[v],A=i.getAttribute(w),b=i.morphAttributes[w],E=A.itemSize,I=l[w],U=c[w];for(let B=0;B<E;B++){let N=u[B],F=d[B];if(I[F](o,A[N](x)),b)for(let C=0,P=b.length;C<P;C++)U[C][F](o,b[C][N](x))}}e[M]=o,h.push(o),o++}}let f=i.clone();for(let y in i.attributes){let x=l[y];if(f.setAttribute(y,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),y in c)for(let M=0;M<c[y].length;M++){let v=c[y][M];f.morphAttributes[y][M]=new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)}}return f.setIndex(h),f}var Fr=class{constructor(){this.G={}}g(t){return this.G[t]||(this.G[t]={p:[],n:[],c:[],uv:[]})}tri(t,e,n,s,r=[1,1,1],o=null){let a=this.g(t),l=n[0]-e[0],c=n[1]-e[1],h=n[2]-e[2],u=s[0]-e[0],d=s[1]-e[1],p=s[2]-e[2],g=c*p-h*d,_=h*u-l*p,m=l*d-c*u,f=Math.hypot(g,_,m)||1;g/=f,_/=f,m/=f;let y=Array.isArray(r[0])?r:[r,r,r];for(let x=0;x<3;x++){let M=[e,n,s][x];a.p.push(M[0],M[1],M[2]),a.n.push(g,_,m),a.c.push(y[x][0],y[x][1],y[x][2]),o?a.uv.push(o[x][0],o[x][1]):a.uv.push(0,0)}}quad(t,e,n,s,r,o,a){let l=Array.isArray(o==null?void 0:o[0])?o:[o,o,o,o];this.tri(t,e,n,s,[l[0],l[1],l[2]],a&&[a[0],a[1],a[2]]),this.tri(t,e,s,r,[l[0],l[2],l[3]],a&&[a[0],a[2],a[3]])}obox(t,e,n,s,r,o=[1,1,1],a={}){var _;let l=(m,f,y)=>[e[0]+n[0]*m+s[0]*f+r[0]*y,e[1]+n[1]*m+s[1]*f+r[1]*y,e[2]+n[2]*m+s[2]*f+r[2]*y],c=[l(-1,-1,-1),l(1,-1,-1),l(1,1,-1),l(-1,1,-1),l(-1,-1,1),l(1,-1,1),l(1,1,1),l(-1,1,1)],h=(_=a.ao)!=null?_:0,u=o.map(m=>m),d=o.map(m=>m*(1-h)),p=m=>m===2||m===3||m===6||m===7?u:d;[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].forEach((m,f)=>{a.skipBottom&&f===2||this.quad(t,c[m[0]],c[m[1]],c[m[2]],c[m[3]],m.map(p))})}box(t,e,n,s,r,o,a,l=0,c=[1,1,1],h={}){let u=Math.cos(l),d=Math.sin(l);this.obox(t,[e,n+o/2,s],[u*r/2,0,d*r/2],[0,o/2,0],[-d*a/2,0,u*a/2],c,h)}cyl(t,e,n,s,r,o,a=10,l=[1,1,1],c={}){var u;let h=(u=c.r2)!=null?u:r;for(let d=0;d<a;d++){let p=d/a*Math.PI*2,g=(d+1)/a*Math.PI*2,_=[e+Math.cos(p)*r,n,s+Math.sin(p)*r],m=[e+Math.cos(g)*r,n,s+Math.sin(g)*r],f=[e+Math.cos(g)*h,n+o,s+Math.sin(g)*h],y=[e+Math.cos(p)*h,n+o,s+Math.sin(p)*h];this.quad(t,_,y,f,m,l),c.open||this.tri(t,[e,n+o,s],f,y,l)}}rod(t,e,n,s,r=6,o=[1,1,1]){let a=[n[0]-e[0],n[1]-e[1],n[2]-e[2]],l=Math.hypot(...a);if(l<1e-6)return;let c=a.map(g=>g/l),h=Math.abs(c[1])<.9?[0,1,0]:[1,0,0],u=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]],d=Math.hypot(...u);u=u.map(g=>g/d);let p=[c[1]*u[2]-c[2]*u[1],c[2]*u[0]-c[0]*u[2],c[0]*u[1]-c[1]*u[0]];for(let g=0;g<r;g++){let _=g/r*Math.PI*2,m=(g+1)/r*Math.PI*2,f=[0,1,2].map(x=>(u[x]*Math.cos(_)+p[x]*Math.sin(_))*s),y=[0,1,2].map(x=>(u[x]*Math.cos(m)+p[x]*Math.sin(m))*s);this.quad(t,[e[0]+f[0],e[1]+f[1],e[2]+f[2]],[e[0]+y[0],e[1]+y[1],e[2]+y[2]],[n[0]+y[0],n[1]+y[1],n[2]+y[2]],[n[0]+f[0],n[1]+f[1],n[2]+f[2]],o)}}geometry(t){let e=this.G[t];if(!e||!e.p.length)return null;let n=new Me;return n.setAttribute("position",new Qt(e.p,3)),n.setAttribute("normal",new Qt(e.n,3)),n.setAttribute("color",new Qt(e.c,3)),n.setAttribute("uv",new Qt(e.uv,2)),n.computeBoundingSphere(),n.computeBoundingBox(),n}},nt=i=>{let t=parseInt(i.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255].map(e=>Math.pow(e,2.2))};var mt={x0:-84,x1:116,z0:-90,z1:46,base:-6},Gt={zo0:-46,zo1:-47,zi0:-58,zi1:-57,h:11,gate:{x:-8,hw:3.2,spring:4.6,crown:6.8},bastions:[{x:-62,hw:6.5,d:8}],breach:{x0:33.5,x1:46.5}},jt=i=>Gt.zo0+(Gt.zo1-Gt.zo0)*Math.max(0,Math.min(1,i/Gt.h)),Ne=[[33.5,11],[34.4,9.8],[35.6,8.9],[37,7.8],[38.6,7],[40.4,6.6],[42.4,6.7],[44,7.2],[45.2,8.4],[46.5,11]],Nr={cx:-8,cz:-52,w:20,d:7.8},Ie={fence:[[12,-45.7],[12,-20],[16,-16],[66,-16],[70,-20],[70,-45.7]],fh:2.3,gateW:{x:12,z0:-31,z1:-25},gateE:{x:70,z0:-31.5,z1:-27.5},gateS:{z:-16,x0:37.4,x1:40.4}},ju=[{id:"E",x0:47.5,x1:60,lv:[2.3,4.6,6.9],top:[50,57.5]},{id:"W",x0:21,x1:33.2,lv:[2.3,4.6,6.9],top:[28,33.2]}],td=[-45.5,-43.3],ed={x0:49,x1:61.6,z0:-43.3,z1:-37.2,y:4.6},nd={x0:62.8,x1:69.2,z0:-42,z1:-32,low:2.35,high:4.75},id={x0:70.3,x1:73.6,z0:-37.6,z1:-33.4},$a={x:57,z:-21,y:5.6},sd={x:41.5,z:-38.6},Sn={x0:70,x1:80,z0:-45.6,z1:-4},Ke={x0:80.5,x1:101.5,z0:-45.4,z1:-35.4},rd={x0:72,x1:73.2,z0:-32.2,z1:-28.8,h:2.1},rn={x0:76,x1:79,z0:-44,z1:-37,y:-2.6},Br=[[-31,-21.4],[10.6,-21],[16,-16],[70,-16],[74.6,-11],[74.6,5.4],[-31,6]],Nc=[[16.4,-15.9],[57.9,-15.9],[57.9,-1.6],[23.4,-1.6],[22.6,-12],[16.4,-12.6]],Nn={x0:58.2,x1:69.8,z0:-11.05,z1:-7.1},Bc={mats:[42.6,-14.3],shed:[26.8,-6.4],well:[40.8,-7.4],stove:[55.2,-4.4],rack:[33.6,-4.2],bellS:[30.75,.8],bellB:[37.6,-3.6],table:[48.6,-5.4]},od=[[-27.4,-15.6,1.2,1],[-22.6,-16.4,1.6,.9],[-3.6,-16.8,1.4,1],[1.4,-15.6,1.8,.9],[6.2,-14.2,2.2,1],[-29.8,-6.4,1.4,.95],[-19.8,-4.4,-.4,.9],[-4.4,-4.2,1.6,.9],[.6,-3.2,2.6,.9],[5.8,-6.6,2.9,1],[-27.2,1.2,.6,.9],[-9.6,1.4,-1.2,1],[-2.4,2.4,-1.6,.9],[14.4,1,-1.6,.9],[19.4,.4,-1.4,1],[36.6,2,-1.6,.9],[-30.4,-27.6,.9,.85],[-31.6,-38.6,.2,.85],[-26.4,-38.8,-.1,.8],[-21.6,-39.4,.3,.85],[3.2,-39.6,2.9,.8],[7.6,-38.2,3.3,.85],[-33.6,-33,.5,.8],[-1.2,-22.6,1.9,.8]],on={x0:-17.2,x1:-9.4,z0:-19.8,z1:-15},Or=[[-36.5,-45.8],[10.6,-45.8],[10.6,-21],[-2,-20.2],[-24,-21.6],[-37.4,-30]],kr=[{id:"road",k:"road",w:8,p:[[-88,10.5],[-72,7],[-58,1.5],[-45,-6.5],[-34,-15.6],[-23.4,-25.4],[-13.6,-35.4],[-9,-41.6],[-8,-47]]},{id:"camp",k:"path",w:3.4,p:[[6.4,-21.6],[10.4,-19],[13.6,-15.6],[18,-14.2],[24,-13.8]]},{id:"back",k:"lane",w:7.5,p:[[74.8,-4],[74.8,-45.4]]},{id:"slane",k:"path",w:3,p:[[-44.6,-6],[-33,4.4],[-12,7.6],[12,8.4],[34,8.6],[56,8.6],[68,7.4],[74.8,3.2],[74.8,-4]]},{id:"strip",k:"path",w:5.5,p:[[79.5,-31],[100.6,-31.4]]},{id:"hill",k:"path",w:2.4,p:[[12,8.4],[11.4,16],[8,26]]},{id:"well",k:"path",w:2.4,p:[[56,8.6],[57.2,17],[62,27]]},{id:"inner",k:"street",w:6.5,p:[[mt.x0-4,-61.6],[mt.x1+4,-61.6]]},{id:"inner2",k:"street",w:6,p:[[mt.x0-4,-80.5],[mt.x1+4,-80.5]]},{id:"gateSt",k:"street",w:6.4,p:[[Gt.gate.x,-58],[Gt.gate.x,-100]]},{id:"in3",k:"street",w:4,p:[[-60,-64],[-60,-100]]},{id:"in4",k:"street",w:4,p:[[28,-64],[28,-100]]},{id:"in5",k:"street",w:4,p:[[64,-64],[64,-100]]},{id:"in6",k:"street",w:4,p:[[98,-64],[98,-100]]}],T1=Math.PI/180,Ka=[],Xe=(i,t,e,n,s,r,o={})=>{Ka.push({id:i,cx:t,cz:e,w:n,d:s,rot:r*T1,fl:1,fh:3,roof:"gable",ridge:"w",kind:"house",tone:Ka.length%4,eave:.7,...o})};Xe("inn",-44.2,-37,12,9,0,{fl:2,fh:2.8,doors:[[0,0,2.2]],ridge:"d",bal:"e"});Xe("w2",-58,-27,10,8,0,{fl:2,fh:2.8,doors:[[0,1.5]]});Xe("w3",-50.4,-16.6,8,7,8,{fl:1,fh:2.8,doors:[[0,0]]});Xe("w4",-70,-9,9,7,12,{fl:1,fh:2.8,doors:[[2,0]]});Xe("w5",-58.6,13.4,9,7,-6,{fl:1,fh:2.8,doors:[[3,0]]});Xe("stallH",-13.2,-9.6,8.6,5.2,0,{fl:1,fh:2.8,doors:[[3,1.6,1.2]]});for(let[i,t,e,n,s,r,o]of[["o1",-21,14.2,9,7,0,1],["o2",1.6,14.8,9,7,-3,2],["o3",24,15,10,7,0,1],["o4",44.6,15.2,9,7,2,2],["o5",66,14.4,8,7,4,1]])Xe(i,t,e,n,s,r,{fl:o,fh:2.8,doors:[[3,0]]});Xe("booth",16.4,-21.2,3.4,3,0,{fl:1,fh:2.6,roof:"gable",kind:"shed",doors:[[1,0,.9]]});Xe("restShed",30.4,-18.4,9,3.6,0,{fl:1,fh:2.4,roof:"lean",kind:"shed",eave:.5,doors:[[2,-2.2,1],[2,2.2,1]]});Xe("ware",(Ke.x0+Ke.x1)/2,(Ke.z0+Ke.z1)/2,Ke.x1-Ke.x0,Ke.z1-Ke.z0,0,{fl:1,fh:6.2,kind:"warehouse",roof:"xs",eave:1,doors:[[2,3,3.6]]});Xe("e1",90.6,-23.8,12,7,0,{fl:1,fh:2.8,doors:[[3,-2.5],[3,3.4]]});Xe("e2",86.6,-10.6,9,8,0,{fl:1,fh:2.8,doors:[[1,0]]});Xe("e3",96.4,-9.4,8,9,0,{fl:2,fh:2.8,ridge:"d",doors:[[1,1.5]]});Xe("e4",90.2,3.6,10,7,0,{fl:1,fh:2.8,doors:[[1,-1]]});var A1=["#A48B6C","#988061","#AE9576"].map(nt),R1=["#C9B78C","#BEAE88","#D3C8AA"].map(nt),En=(i,t,e,n,s,r,o={})=>{let a=Ka.length;Xe(i,t,e,n,s,r,{fl:1,fh:2.25,roof:"lean",kind:"shed",eave:.45,wc:A1[a%3],rc:R1[a%3],rk:"solid",lowBase:!0,...o})};En("lt1",28.8,-14.6,5.6,2.6,0,{doors:[[2,0,1.1]]});En("lt2",47,-14.6,5.2,2.6,0,{doors:[[2,-.8,1.1]]});En("lt3",53.6,-14.6,5.6,2.6,0,{doors:[[2,.6,1.1]]});En("pn",64,-13.5,11.6,4.8,0,{fh:2.5,doors:[[2,-3.4,1.1],[2,2.6,1.1]]});Xe("ps",64,-3,11.6,8,0,{fl:1,fh:2.8,doors:[[3,-2.6,1.1],[1,1,1.1]]});En("s1",27.2,1.5,6.2,4.6,180,{doors:[[2,1,1.1]]});En("s3",44.4,1.7,7,4.8,180,{doors:[[2,-1.5,1.1]]});En("s4",53.8,1.5,6.2,4.6,180,{doors:[[2,0,1.1]]});En("w1",16.8,-5.2,7,5.6,90,{doors:[[3,1,1.1],[2,-1.6,1.1]]});En("cw1",-3.4,-10.6,7,5,0,{doors:[[2,0,1.1]]});En("cw2",-23.6,-9.4,6,5,0,{doors:[[2,1,1.1]]});En("cw3",-16.6,2.6,7,5,180,{doors:[[2,0,1.1]]});En("cw4",7.4,1.6,6,5,180,{doors:[[2,0,1.1]]});var zr=Ka,Ls=[];{let i=[-60,Gt.gate.x,28,64,98],t=[[-64.8,-77.4,3],[-83.6,-90.2,2]],e=0;for(let[n,s]of t){let r=mt.x0;for(;r<mt.x1;){let o=8+e*37%5,a=i.find(h=>h>r-3.5&&h<r+o+3.5);if(a!=null){r=a+3.6;continue}let l=Math.min(9+e%3,n-s-.6),c=n-l/2-.3-e%2*.4;r+o<=mt.x1&&Ls.push({id:"c"+e,cx:r+o/2,cz:c,w:o-.2,d:l,rot:0,fl:1+(e*7%3===0?1:0)+(e%5===0?1:0),fh:2.9,roof:e%4===0?"xs":"gable",ridge:"w",kind:"house",tone:e%4,eave:.7,doors:[[3,0]]}),r+=o+.1,e++}}}var ad={start:[-84,9.6],plaza:[-14,-30],stall:[-13.4,-17.4],gate:[-8,-40],gateW:[9.6,-28],gateE:[72.6,-29.4],gateS:[38.9,-16],watch:[$a.x,$a.z],cellar:[77.5,-40.5],cellarDoor:[79.1,-43.3],pass:[64,-9.1],yard:[40,-8],debris:[72,-35.5],shedTop:[65.6,-37.4],plat:[55,-40],scafTop:[53,-44.4],breach:[40.4,-50.5]},ld=[[-84,9.6],[-72,7],[-58,1.5],[-45,-6.5],[-34,-15.6],[-26.4,-22.4],[-19,-23.4],[-13.4,-21.4],[-6,-25],[2,-27.6],[7.6,-27.8],[9.4,-23],[12.6,-17.8],[17.6,-14.4],[24,-13.2],[36,-11.2],[50,-9.4],[58.2,-9.1],[70,-9.1],[74.8,-12],[74.8,-20],[74.6,-27.8],[74.8,-14],[74.8,-10],[70,-9.1],[58.4,-9.1],[51.6,-10.6]],Hr=[[51.6,-10.6],[58.4,-9.1],[70,-9.1],[74.6,-12],[73.9,-28],[73.6,-33],[73.2,-35.4,1.6],[70.4,-35.6,2.5],[68.4,-36.4,2.9],[64.4,-38.4,4.2],[62.8,-40.4,4.75],[60.4,-40.6,4.6],[56.4,-41.2,4.6],[56.2,-44.4,4.6],[56.2,-44.4,6.9],[52,-44.6,6.9],[50,-45.2,6.9],[48,-45.8,7.4],[46.2,-46.6,7.6],[43.4,-47.6,6.9],[40.4,-51,6.8],[39.6,-56,7.2]];function Qa(i,t){let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function ja(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Qa(e,n),c=Qa(e+1,n),h=Qa(e,n+1),u=Qa(e+1,n+1);return(l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a)*2-1}function C1(i,t,e=4){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*ja(i*r,t*r),r*=2.03,s*=.5;return n}var Bn=(i,t,e)=>{let n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)},I1=i=>19+2.5*Math.sin(i*.061+.4)+1.5*Math.sin(i*.17)+(i<-66?4*Bn(-66,-88,i):0),P1=i=>34.5+3*Math.sin(i*.043+1.1)+1.5*Math.sin(i*.13),D1=i=>11+4*Math.sin(i*.029+.6)+2*Math.sin(i*.091+2)+3*Bn(50,110,i);function cd(i,t){let e=I1(i),n=P1(i);if(t<=e)return 0;let s=Math.pow(Bn(e,n,t),1.15),r=1-.32*Bn(n,mt.z1+8,t);return D1(i)*s*r}function hd(i,t){let e=104+1.5*Math.sin(t*.09);if(i<=e)return 0;let n=Math.pow(Bn(e,e+10.5,i),1.1);return(11+3*Math.sin(t*.05+1.3)+4*Bn(-10,40,t))*n*(1-.45*Bn(-38,-47,t))}function ie(i,t){let e=.95*Bn(-6,26,t)*(1-Bn(-80,-100,i)*.3),n=cd(i,t),s=hd(i,t),r=Math.max(n,s)+.25*Math.min(n,s);return r>0&&(e+=r+C1(i*.07,t*.07,3)*1.6*Bn(0,4,r)),e}var Oc=(i,t)=>Bn(.6,3.5,Math.max(cd(i,t),hd(i,t))),Ti=1,L1=(i,t)=>i>rn.x0+1e-6&&i<rn.x1-1e-6&&t>rn.z0+1e-6&&t<rn.z1-1e-6;function ud(){let i=Math.round((mt.x1-mt.x0)/Ti)+1,t=Math.round((mt.z1-mt.z0)/Ti)+1,e=i*t,n=new Float32Array(e*3),s=new Float32Array(e*2);for(let f=0,y=0;f<t;f++)for(let x=0;x<i;x++,y++){let M=mt.x0+x*Ti,v=mt.z0+f*Ti;n[y*3]=M,n[y*3+1]=ie(M,v),n[y*3+2]=v,s[y*2]=(M-mt.x0)/(mt.x1-mt.x0),s[y*2+1]=(v-mt.z0)/(mt.z1-mt.z0)}let r=[];for(let f=0;f<t-1;f++)for(let y=0;y<i-1;y++){let x=f*i+y,M=x+1,v=x+i,S=v+1,w=mt.x0+(y+.5)*Ti,A=mt.z0+(f+.5)*Ti;L1(w,A)||r.push(x,v,M,M,v,S)}let o={p:[],c:[]},a=[.47,.41,.34],l=[.6,.55,.48],c=[.53,.48,.42],h=f=>f.map(y=>Math.pow(y,2.2)),[u,d,p]=[h(a),h(l),h(c)],g=(f,y)=>{for(let x=0;x<f.length-1;x++){let M=f[x],v=f[x+1],S=ie(M[0],M[1]),w=ie(v[0],v[1]),A=[[S,w,u],[S-1.1,w-1.1,d],[mt.base,mt.base,p]];for(let b=0;b<2;b++){let[E,I,U]=A[b],[B,N,F]=A[b+1],C=[M[0],B,M[1]],P=[v[0],N,v[1]],D=[v[0],I,v[1]],W=[M[0],E,M[1]],z=y?[C,P,D,C,D,W]:[P,C,W,P,W,D];for(let Z of z)o.p.push(...Z);let X=y?[F,F,U,F,U,U]:[F,F,U,F,U,U];for(let Z of X)o.c.push(...Z)}}},_=[],m=[];for(let f=0;f<i;f++)_.push(mt.x0+f*Ti);for(let f=0;f<t;f++)m.push(mt.z0+f*Ti);return g(_.map(f=>[f,mt.z1]),!0),g(_.map(f=>[f,mt.z0]).reverse(),!0),g(m.map(f=>[mt.x1,f]).reverse(),!0),g(m.map(f=>[mt.x0,f]),!0),{pos:n,uv:s,idx:r,nx:i,nz:t,skirt:o}}var Ot={brick:nt("#B3AEA4"),brickD:nt("#A29D93"),top:nt("#C3BDB1"),cap:nt("#8E8A84"),stone:nt("#BDB6A8"),stoneD:nt("#A9A294"),wood:nt("#8A6E55"),door:nt("#7C4A3A"),plaque:nt("#3F4A4E"),gold:nt("#B99A5E"),rubble:nt("#A7A196"),rubbleD:nt("#958F84"),stud:nt("#4B4A47"),ironD:nt("#4B5054"),paper:nt("#EAE4D6")},wt=Gt.h,re=-1.2,ke=i=>Gt.zi0+(Gt.zi1-Gt.zi0)*Math.max(0,Math.min(1,i/wt)),Pe=(i,t)=>[i/4,t/2];function Us(i,t,e,n,s,r,o,a,l=Ot.brick){let c=t>0?jt:ke,h=(f,y)=>[f,y,c(y)],u=h(e,s),d=h(n,r),p=h(n,a),g=h(e,o),_=l.map(f=>f*.82),m=[_,_,l,l];t>0?i.quad("brick",u,d,p,g,m,[Pe(e,s),Pe(n,r),Pe(n,a),Pe(e,o)]):i.quad("brick",d,u,g,p,[m[1],m[0],m[3],m[2]],[Pe(-n,r),Pe(-e,s),Pe(-e,o),Pe(-n,a)])}function dd(i,t,e,n,s){let r=l=>jt(l),o=[[t,e,ke(e)],[t,e,r(e)],[t,n,r(n)],[t,n,ke(n)]],a=o.map(l=>Pe(l[2]*s,l[1]));s<0?i.quad("brick",o[0],o[1],o[2],o[3],Ot.brick,a):i.quad("brick",o[1],o[0],o[3],o[2],Ot.brick,[a[1],a[0],a[3],a[2]])}function fd(i,t,e,n,s=n){i.quad("solid",[t,n,jt(n)],[e,s,jt(s)],[e,s,ke(s)],[t,n,ke(n)],Ot.top)}var kc=[];function tl(i,t,e,n={}){for(let[h,u]of kc)if(t<u&&e>h){t<h&&tl(i,t,h,n),e>u&&tl(i,u,e,n);return}let s=t,r=e,o=r-s;if(o<.6)return;let a=jt(wt),l=.62;if(n.outer!==!1){i.box("solid",(s+r)/2,wt,a+l/2-l,o,1.05,l,0,Ot.brickD,{ao:.1}),i.box("solid",(s+r)/2,wt+1.05,a-l/2,o+.02,.1,l+.12,0,Ot.cap);let h=Math.max(1,Math.round(o/2.5)),u=o/h;for(let d=0;d<h;d++){let p=s+u*(d+.5);i.box("solid",p,wt+1.15,a-l/2,u-.78,.8,l,0,Ot.brickD),i.box("solid",p,wt+1.95,a-l/2,u-.7,.1,l+.1,0,Ot.cap)}}let c=ke(wt);i.box("solid",(s+r)/2,wt,c+.22,o,1,.44,0,Ot.brickD,{ao:.1}),i.box("solid",(s+r)/2,wt+1,c+.22,o+.02,.1,.54,0,Ot.cap)}function el(i,t,e,n){let s=n>0?jt(0)+.06:ke(0)-.06;i.box("solid",(t+e)/2,re,s,e-t,1.2-re,.36,0,Ot.stone,{ao:.25}),i.box("solid",(t+e)/2,1.2,s+(n>0?-.02:.02),e-t,.1,.3,0,Ot.stoneD)}function Vr(i,t,e,n={}){e-t<.05||(n.noOut||Us(i,1,t,e,re,re,wt,wt),Us(i,-1,t,e,re,re,wt,wt),fd(i,t,e,wt),tl(i,t,e,{outer:!n.noOutPar}),n.noOut||el(i,t,e,1),el(i,t,e,-1))}function U1(i){let{x:t,hw:e,spring:n,crown:s}=Gt.gate,r=t-e,o=t+e,a=12,l=g=>{let _=Math.PI*g/a;return[t-Math.cos(_)*e,n+Math.sin(_)*(s-n)]};Us(i,1,r,o,s,s,wt,wt),Us(i,-1,r,o,s,s,wt,wt),fd(i,r,o,wt),tl(i,r,o);for(let g of[1,-1]){let _=g>0?jt:ke;for(let m=0;m<a;m++){let[f,y]=l(m),[x,M]=l(m+1),v=[f,y,_(y)],S=[x,M,_(M)],w=[x,s,_(s)],A=[f,s,_(s)];g>0?i.quad("brick",v,S,w,A,Ot.brick,[Pe(f,y),Pe(x,M),Pe(x,s),Pe(f,s)]):i.quad("brick",S,v,A,w,Ot.brick,[Pe(-x,M),Pe(-f,y),Pe(-f,s),Pe(-x,s)])}}for(let g=0;g<a;g++){let[_,m]=l(g),[f,y]=l(g+1);i.quad("solid",[_,m,ke(m)],[f,y,ke(y)],[f,y,jt(y)],[_,m,jt(m)],Ot.brickD.map(x=>x*.8))}for(let[g,_]of[[r,1],[o,-1]]){let m=[[g,re,ke(re)],[g,re,jt(re)],[g,n,jt(n)],[g,n,ke(n)]];_<0?i.quad("brick",m[0],m[1],m[2],m[3],Ot.brickD,m.map(f=>Pe(f[2],f[1]))):i.quad("brick",m[1],m[0],m[3],m[2],Ot.brickD,[m[1],m[0],m[3],m[2]].map(f=>Pe(-f[2],f[1])))}for(let g=0;g<a;g++){let[_,m]=l(g),[f,y]=l(g+1),x=(_+f)/2,M=(m+y)/2,v=Math.atan2(y-m,f-_),S=Math.hypot(f-_,y-m)+.05,w=-Math.sin(v),A=Math.cos(v),b=jt(M)+.1;i.obox("solid",[x+w*.28,M+A*.28,b],[Math.cos(v)*S/2,Math.sin(v)*S/2,0],[w*.28,A*.28,0],[0,0,.12],Ot.stone)}for(let g of[-1,1])i.box("solid",t+g*(e+.28),re,jt(0)+.1,.56,n-re,.24,0,Ot.stone);i.box("solid",t,s+.9,jt(s+1.6)+.12,3.6,1.5,.16,0,Ot.plaque),i.box("solid",t,s+.78,jt(s+1.6)+.16,3.9,.12,.1,0,Ot.gold),i.box("solid",t,s+2.4,jt(s+1.6)+.16,3.9,.12,.1,0,Ot.gold);let c=Gt.zo0-2.2,h=.24,u=c+h/2;for(let g of[-1,1]){i.box("solid",t+g*e/2,0,c,e-.03,n+.05,h,0,Ot.door),i.box("solid",t+g*.03,0,u+.02,.06,n,.04,0,Ot.door.map(_=>_*.7));for(let _=0;_<6;_++)for(let m=0;m<3;m++)i.box("solid",t+g*(.55+m*.95),.7+_*.68,u+.03,.11,.11,.06,0,Ot.stud);i.box("solid",t+g*.45,2.05,u+.04,.34,.34,.05,0,Ot.gold),i.box("solid",t+g*.45,1.8,u+.09,.26,.05,.05,0,Ot.gold);for(let _ of[.35,2.3,4.2])i.box("solid",t+g*e/2,_,c-h/2-.03,e-.3,.16,.06,0,Ot.door.map(m=>m*.8))}let d=c-h/2,p=Ot.door.map(g=>g*.9);for(let g=0;g<a;g++){let[_,m]=l(g),[f,y]=l(g+1);i.quad("solid",[_,n,u],[f,n,u],[f,y+.02,u],[_,m+.02,u],p),i.quad("solid",[f,n,d],[_,n,d],[_,m+.02,d],[f,y+.02,d],p)}i.box("solid",t,n+.02,c,e*2,.14,h+.06,0,Ot.door.map(g=>g*.75));for(let g of[-1,1])i.obox("solid",[t,2.75,u+.07],[1.15,g*.62,0],[-.07*g,.13,0],[0,0,.012],Ot.paper);i.box("solid",t,2.1,c-h/2-.2,e*2-.4,.32,.3,0,Ot.wood);for(let g of[-1,1])for(let _ of[.9,2.3])i.box("solid",t+g*_,1.95,c-h/2-.08,.14,.62,.18,0,Ot.ironD);i.box("solid",t,0,(jt(0)+ke(0))/2,e*2,.14,Gt.zi0-Gt.zo0+.2,0,Ot.stone)}function F1(i,t){let e=t.x-t.hw,n=t.x+t.hw,s=Gt.zo0,r=s+t.d,o=.9,a=(v,S,w)=>[v,S,w],l=[e,s],c=[n,s],h=v=>o*v/wt,u=v=>r-h(v),d=v=>e+h(v),p=v=>n-h(v);[[[d(re),re,u(re)],[p(re),re,u(re)],[p(wt),wt,u(wt)],[d(wt),wt,u(wt)]],[[n-h(re),re,u(re)],[n-h(re),re,s-.5],[n-h(wt),wt,jt(wt)-.2],[n-h(wt),wt,u(wt)]],[[e+h(re),re,s-.5],[e+h(re),re,u(re)],[e+h(wt),wt,u(wt)],[e+h(wt),wt,jt(wt)-.2]]].forEach((v,S)=>{let w=v.map(A=>Pe(S===0?A[0]:A[2]*(S===1?-1:1),A[1]));i.quad("brick",v[0],v[1],v[2],v[3],[Ot.brick.map(A=>A*.82),Ot.brick.map(A=>A*.82),Ot.brick,Ot.brick],w)}),i.quad("solid",[d(wt),wt,u(wt)],[p(wt),wt,u(wt)],[p(wt),wt,jt(wt)],[d(wt),wt,jt(wt)],Ot.top),i.box("solid",t.x,re,(s+r)/2,n-e+.24,1.2-re,r-s+.1,0,Ot.stone,{ao:.25});let _=.62,m=wt,f=d(wt),y=p(wt),x=u(wt),M=(v,S,w,A)=>{let b=Math.hypot(w-v,A-S),E=Math.atan2(A-S,w-v),I=Math.max(1,Math.round(b/2.5)),U=b/I,B=(w-v)/b,N=(A-S)/b,F=N,C=-B;i.box("solid",(v+w)/2+F*_/2,m,(S+A)/2+C*_/2,b,1.05,_,E,Ot.brickD,{ao:.1}),i.box("solid",(v+w)/2+F*_/2,m+1.05,(S+A)/2+C*_/2,b,.1,_+.12,E,Ot.cap);for(let P=0;P<I;P++){let D=U*(P+.5);i.box("solid",v+B*D+F*_/2,m+1.15,S+N*D+C*_/2,U-.78,.8,_,E,Ot.brickD),i.box("solid",v+B*D+F*_/2,m+1.95,S+N*D+C*_/2,U-.7,.1,_+.1,E,Ot.cap)}};M(f,jt(wt),f,x),M(f,x,y,x),M(y,x,y,jt(wt))}function N1(i,t){for(let n=0;n<Ne.length-1;n++){let[s,r]=Ne[n],[o,a]=Ne[n+1];Us(i,1,s,o,re,re,r,a,Ot.brick),Us(i,-1,s,o,re,re,r,a,Ot.brick),i.quad("solid",[s,r,jt(r)],[o,a,jt(a)],[o,a,ke(a)],[s,r,ke(r)],Ot.rubble)}el(i,Ne[0][0],Ne[Ne.length-1][0],1),el(i,Ne[0][0],Ne[Ne.length-1][0],-1);for(let[n,s,r]of[[Ne[0][0],1,[[11,9.8,.9],[9.8,8.9,1.2]]],[Ne[Ne.length-1][0],-1,[[11,8.4,1.3]]]])for(let[o,a,l]of r)i.box("solid",n+s*l/2,a,(jt(a)+ke(a))/2,l,o-a,Math.abs(ke(a)-jt(a))-.1,0,Ot.brickD);let e=(n,s,r,o)=>i.box("solid",n,s,r,o*(.8+t()*.7),o*(.45+t()*.4),o*(.7+t()*.6),t()*3,t()<.5?Ot.rubble:Ot.rubbleD);for(let n=0;n<70;n++){let s=35+t()*10.5,r=-56.5+t()*9,o=Ne.reduce((a,l,c)=>c&&s>=Ne[c-1][0]&&s<=l[0]?Ne[c-1][1]+(l[1]-Ne[c-1][1])*(s-Ne[c-1][0])/(l[0]-Ne[c-1][0]):a,7);e(s,o-.15,r,.5+t()*.5)}for(let n=0;n<46;n++){let s=t(),r=36+t()*9,o=-58-s*3.2,a=6.6*(1-s)*(1-s)-.3;e(r,Math.max(-.1,a+t()*.4-.6),o,.5+t()*.7)}for(let n=0;n<16;n++)e(36+t()*9,-.1,-45.6+t()*1.4,.35+t()*.4)}function pd(i,t,e=[]){kc.length=0,kc.push(...e);let n=Gt.gate,s=Gt.bastions[0],r=Gt.breach;Vr(i,mt.x0,s.x-s.hw+.9),Vr(i,s.x-s.hw+.9,s.x+s.hw-.9,{noOut:!0,noOutPar:!0}),F1(i,s),Vr(i,s.x+s.hw-.9,n.x-n.hw),U1(i),Vr(i,n.x+n.hw,r.x0),N1(i,t),Vr(i,r.x1,mt.x1),dd(i,mt.x0,re,wt,-1),dd(i,mt.x1,re,wt,1);for(let o of[-74,-40,20,64,92])Math.abs(o-r.x0)>6&&(i.cyl("solid",o,wt,jt(wt)-1.2,.08,5.2,6,Ot.wood),i.box("solid",o+.55,wt+4,jt(wt)-1.2,1.1,1.2,.04,0,nt("#9B5A45")))}var Gr=(i,t,e)=>Math.max(t,Math.min(e,i)),zc=(i,t,e)=>i+(t-i)*e;var nM=Math.PI/180;function oi(i){let t=i>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.r=(n,s)=>n+(s-n)*e(),e.i=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e}function Hc(i,t){let e=!1,n=i[0],s=i[1];for(let r=0,o=t.length-1;r<t.length;o=r++){let a=t[r][0],l=t[r][1],c=t[o][0],h=t[o][1];l>s!=h>s&&n<(c-a)*(s-l)/(h-l)+a&&(e=!e)}return e}function B1(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?((i[0]-t[0])*n+(i[1]-t[1])*s)/r:0;return o=Gr(o,0,1),Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-s*o)}function md(i,t){let e=1e9;for(let n=1;n<t.length;n++)e=Math.min(e,B1(i,t[n-1],t[n]));return e}function Wr(i,t,e,n,s=0){let r=Math.cos(s),o=Math.sin(s),a=e/2,l=n/2;return[[-a,-l],[a,-l],[a,l],[-a,l]].map(([c,h])=>[i+c*r-h*o,t+c*o+h*r])}var Mt={wall:["#EEE8DE","#E8E2D6","#F2EDE5","#E3DDD1"].map(nt),twall:nt("#C9A08B"),tbase:nt("#BDB4A7"),roof:nt("#727A7E"),roofT:nt("#596166"),ridge:nt("#585F63"),plinth:nt("#BDB4A6"),wood:nt("#A58C70"),woodD:nt("#7D6A56"),awn:["#B4705D","#C49C64","#8F9D8D","#A9745F","#C8B07F"].map(nt),red:nt("#A85B4B"),metal:nt("#6C7276"),dark:nt("#474C4F"),stone:nt("#BDB5A8"),stoneD:nt("#A59D90"),crate:nt("#B49C7B"),canvas:nt("#DAD3C4"),hull:nt("#6F5B48"),copper:nt("#A27A57")},gd=Math.tan(27*Math.PI/180),O1=i=>{let t=Math.cos(i.rot),e=Math.sin(i.rot);return(n,s,r)=>[i.cx+n*t-r*e,s,i.cz+n*e+r*t]};function xd(i,t,e,n,s,r,o,a,l,c={}){var x,M;let[h,u]=Array.isArray(o)?o:[o,o],d=.22,p=e*gd,g=n+p,_=n-r*gd,m=-t-h,f=t+u,y=e+r;for(let v of[-1,1]){let S=s(m,_,v*y),w=s(f,_,v*y),A=s(f,g,0),b=s(m,g,0),E=s(m,_-d,v*y),I=s(f,_-d,v*y),U=s(f,g-d,0),B=s(m,g-d,0),N=[[m/3,y],[f/3,y],[f/3,0],[m/3,0]];v>0?(i.quad("roof",S,w,A,b,a,N),i.quad("roofu",B,U,I,E,a),i.quad("roofe",E,I,w,S,l),i.quad("roofe",E,S,b,B,l),i.quad("roofe",w,I,U,A,l)):(i.quad("roof",w,S,b,A,a,N),i.quad("roofu",U,B,E,I,a),i.quad("roofe",I,E,S,w,l),i.quad("roofe",I,w,A,U,l),i.quad("roofe",S,E,B,b,l))}for(let v of[-1,1]){let S=v*t,w=s(S,n,-e),A=s(S,n,e),b=s(S,g-d,0);v>0?i.tri("wall",w,b,A,c.wallCol):i.tri("wall",A,b,w,c.wallCol)}return yd(i,s,m+.1,f-.1,g-.05,(x=c.ridgeH)!=null?x:.28,.34,l,(M=c.horn)!=null?M:.2),g}function yd(i,t,e,n,s,r,o,a,l){let c=n-e,h=(e+n)/2,u=t(h,s+r/2,0),d=t(h+1,s,0),p=t(h,s,1),g=[(d[0]-u[0])*c/2,0,(d[2]-u[2])*c/2],_=[(p[0]-u[0])*o/2,0,(p[2]-u[2])*o/2];if(i.obox("roofe",u,g,[0,r/2,0],_,a),l>0)for(let m of[-1,1])i.obox("roofe",t(m>0?n-.2:e+.2,s+r+l/2-.05,0),g.map(f=>f/c*.4),[0,l/2+.05,0],_.map(f=>f*.9),a)}function k1(i,t,e,n,s,r,o,a,l,c="roof"){let u=n+2*e*.35,d=n-r*.35,p=s(-t-.3,d,e+r),g=s(t+.3,d,e+r),_=s(t+.3,u,-e),m=s(-t-.3,u,-e);i.quad(c,p,g,_,m,o,[[0,0],[1,0],[1,1],[0,1]]),i.quad("roofu",s(-t-.3,u-.18,-e),s(t+.3,u-.18,-e),s(t+.3,d-.18,e+r),s(-t-.3,d-.18,e+r),o),i.quad("roofe",s(-t-.3,d-.18,e+r),s(t+.3,d-.18,e+r),g,p,a);for(let f of[-1,1]){let y=f*t,x=s(y,n,-e),M=s(y,n,e),v=s(y,u-.18,-e);f>0?i.tri("wall",x,v,M,l):i.tri("wall",M,v,x,l)}return u}function mn(i,t,e,n,s,r,o,a,l={}){var I,U,B,N,F;let h=(I=l.pitch)!=null?I:Math.tan(30*Math.PI/180),u=t+r,d=e+r,p=n-r*h,g=d*h*((U=l.riseK)!=null?U:1.05),_=p+g,m=!!l.xs,f=Math.max(.6,u-d*(m?.55:1)),y=(B=l.lift)!=null?B:Math.min(1.2,d*.1),x=d*.45,M=_-x*g/d,v=(C,P,D)=>!D&&Math.abs(C)<=f+1e-6?[C,_,0]:m?[Math.sign(C)*f,M,D?Gr(P,-x,x):Math.sign(P)*x]:[Math.sign(C)*f,_,0],S=[],w=8,A=(C,P,D)=>{let W=[];for(let z=0;z<w;z++)W.push(z/w);if(!D)for(let z of[-f,f]){let X=(z-C[0])/(P[0]-C[0]);X>1e-4&&X<1-1e-4&&W.push(X)}W.sort((z,X)=>z-X);for(let z of W){let X=zc(C[0],P[0],z),Z=zc(C[1],P[1],z),tt=D?Math.abs(Z)/d:Math.abs(X)/u;S.push({e:[X,p+y*tt*tt*tt,Z],r:v(X,Z,D)})}};A([-u,-d],[u,-d],0),A([u,-d],[u,d],1),A([u,d],[-u,d],0),A([-u,d],[-u,-d],1);let b=C=>s(C[0],C[1],C[2]),E=(C,P)=>Math.abs(C[0]-P[0])+Math.abs(C[1]-P[1])+Math.abs(C[2]-P[2])<1e-6;for(let C=0;C<S.length;C++){let P=S[C],D=S[(C+1)%S.length],W=b(P.e),z=b(D.e);E(P.r,D.r)?i.tri("roof",W,b(P.r),z,o,[[P.e[0]/3+P.e[2]/3,0],[P.r[0]/3,2],[D.e[0]/3+D.e[2]/3,0]]):i.quad("roof",W,b(P.r),b(D.r),z,o,[[P.e[0]/3,0],[P.r[0]/3,2],[D.r[0]/3,2],[D.e[0]/3,0]]),i.quad("roofe",b([P.e[0],P.e[1]-.3,P.e[2]]),W,z,b([D.e[0],D.e[1]-.3,D.e[2]]),a),i.tri("roofu",b([P.e[0],P.e[1]-.3,P.e[2]]),b([D.e[0],D.e[1]-.3,D.e[2]]),s(0,n-.05,0),o)}if(m)for(let C of[-1,1]){let P=C*f,D=s(P,M,-x),W=s(P,M,x),z=s(P,_,0);C>0?i.tri("gable",D,z,W,a):i.tri("gable",W,z,D,a)}return yd(i,s,-f-.2,f+.2,_-.05,(N=l.ridgeH)!=null?N:.6,.6,a,(F=l.horn)!=null?F:.9),_}function Vc(i,t,e,n,s){let r=[t,e];for(let a of s)r.push(Math.max(t,Math.min(e,a.a0)),Math.max(t,Math.min(e,a.a1)));let o=[...new Set(r.map(a=>Math.round(a*1e4)/1e4))].sort((a,l)=>a-l);for(let a=0;a<o.length-1;a++){let l=o[a],c=o[a+1];if(c-l<.001)continue;let h=(l+c)/2,u=s.filter(p=>p.a0<h&&p.a1>h).map(p=>[p.y0,p.y1]).sort((p,g)=>p[0]-g[0]),d=0;for(let[p,g]of u)p>d+.001&&i(h,c-l,d,p-d),d=Math.max(d,g);n>d+.001&&i(h,c-l,d,n-d)}}var z1=(i,t,e)=>(n,s,r,o,a,l,c,h,u,d)=>{let p=e(s,0,r);i.box(n,p[0],o,p[2],a,l,c,t.rot+(h||0),u,d)},Gc=(i,t,e)=>{let n=t<2,s=t%2===0?1:-1;return(r,o,a,l,c,h,u,d,p)=>n?i(r,s*(e+o),a,l,c,u,h,0,d,p):i(r,a,s*(e+o),l,h,u,c,0,d,p)};function H1(i,t,e,n,s,r,o,a){let l=t.kind==="temple";for(let[c,h,u,d=7]of t.dr){let p=c<2,g=p?t.d:t.w,_=p?n:s,m=Gc(e,c,_),f=l?"temple":t.kind,y=u!=null?u:f==="shop"?Math.min(g-1.4,3.6):f==="warehouse"?Math.min(g-2.4,4.2):f==="temple"?Gr(g*.22,2.2,3.4):f==="shed"||f==="annex"?.95:1.15,x=f==="warehouse"?Math.min(t.fh-1,4):f==="temple"?Math.min(t.fh-1.6,y*1.25+.6):f==="shop"?2.6:Math.min(2.2,t.fh-.55),M=f==="temple"?Mt.red:f==="shop"||f==="warehouse"?Mt.woodD:Mt.wood,v=f==="temple"?Mt.ridge:Mt.woodD;if(m("wood",.02,h,o,.08,y,x,M.map(b=>b*.86)),(f==="temple"||f==="warehouse")&&m("wood",.06,h,o,.04,.06,x,v),f==="shop")for(let b of[-1,1])m("wood",.06,h+b*y/6,o,.04,.07,x,Mt.wood);for(let b of[-1,1])m("wood",.04,h+b*(y/2+.07),o,.12,.14,x+.14,v);m("wood",.04,h,o+x,.12,y+.28,f==="temple"?.3:.16,v);let S=o-r,w=Gr(Math.round(S/(f==="temple"?.2:.17)),1,7),A=y+(f==="temple"?1.2:.5);vd(m,h,A,r,o,a,w,f==="temple"?Mt.tbase:Mt.plinth,d)}}function vd(i,t,e,n,s,r,o,a,l=7){let c=(s-n)/o,h=.3;for(let u=1;u<=Math.min(o,l);u++){let d=s-u*c;if(d<n+.04)break;i("plinth",r+(u-.5)*h-.01,t,n-.35,h+.02,e,d-(n-.35),a)}}function V1(i,t,e,n,s,r,o,a,l,c,h){let[u,d,p]=t.pass,g=d/2,_=(y,x,M,v,S,w,A)=>u===1?e(y,(x+M)/2,0,v,M-x,S,w,0,A,{ao:.2}):e(y,0,(x+M)/2,v,w,S,M-x,0,A,{ao:.2}),m=u===1?n:s,f=u===1?s:n;for(let y of[-1,1])_("plinth",y>0?g:-m-l,y>0?m+l:-g,r-1,o-r+1,2*(f+l),h),_("wall",y>0?g:-m,y>0?m:-g,o,a-o,2*f,c);_("wall",-g,g,r+p,a-r-p,2*f,c),_("wood",-g-.02,g+.02,r+p-.32,.32,2*f+.08,Mt.ridge);for(let y of[-1,1]){let x=y*(g-.07),M=f-.25-(g-.1)/2;u===1?e("wood",x,M,r,.1,p-.4,g-.1,0,Mt.red.map(v=>v*.86)):e("wood",M,x,r,g-.1,p-.4,.1,0,Mt.red.map(v=>v*.86))}}function G1(i,t,e,n,s,r){let o=r+t.fh,a=t.bal==="e",l=t.bal==="f"&&t.front||1,c=a?0:l>0?2:3,h=a?n:s,u=a?t.d*.8:t.w*.82,d=.95,p=Gc(e,c,h);p("wood",d/2-.02,0,o-.14,d+.04,u,.14,Mt.woodD);let g=Math.max(2,Math.round(u/1.8)+1);for(let m=0;m<g;m++)p("wood",.3,-u/2+.3+(u-.6)*m/(g-1),o-.62,.6,.12,.48,Mt.woodD);let _=Math.max(3,Math.round(u/.9)+1);for(let m=0;m<_;m++)p("wood",d-.07,-u/2+.05+(u-.1)*m/(_-1),o,.08,.08,1.02,Mt.wood);p("wood",d-.07,0,o+.94,.1,u,.08,Mt.wood),p("wood",d-.07,0,o+.45,.05,u,.05,Mt.wood);for(let m of[-1,1])p("wood",d/2-.02,m*(u/2-.05),o+.94,d-.1,.1,.08,Mt.wood),p("wood",d/2-.02,m*(u/2-.05),o+.45,d-.1,.05,.05,Mt.wood);if(!t.int){p("wood",.02,0,o,.08,1.1,2.1,Mt.woodD.map(m=>m*.9));for(let m of[-1,1])p("wood",.04,m*.62,o,.12,.12,2.2,Mt.woodD);p("wood",.04,0,o+2.1,.12,1.36,.14,Mt.woodD)}}var _d={door:[0,2.2],dbl:[0,2.45],big:[0,3.8],win:[.9,2.1],high:[3.1,4.15],bal:[0,2.15]};function W1(i,t,e,n,s,r,o){let a=t.int,l=.24,c=t.fh,h=t.fl;for(let u=0;u<h;u++){let d=r+u*c;for(let p=0;p<4;p++){let g=p<2,_=p%2===0?1:-1,m=g?-s:-n+l,f=-m,y=g?n:s,x=a.open.filter(v=>v[0]===p&&v[3]===u).map(([,v,S,,w])=>({a0:v-S/2,a1:v+S/2,y0:_d[w][0],y1:_d[w][1],kind:w,at:v,w:S}));Vc((v,S,w,A)=>g?e("wall",_*(y-l/2),v,d+w,l,A,S,0,o,{ao:u===0&&w<.01?.3:0}):e("wall",v,_*(y-l/2),d+w,S,A,l,0,o,{ao:u===0&&w<.01?.3:0}),m,f,c,x);let M=Gc(e,p,y);for(let v of x){let S=d+v.y0,w=d+v.y1,A=v.kind==="win"||v.kind==="high";for(let b of[-1,1])M("wood",.03,v.at+b*(v.w/2+.05),S-(A?.02:0),.1,.1,w-S+.1,Mt.woodD);if(M("wood",.03,v.at,w,.1,v.w+.2,.12,Mt.woodD),A&&(M("plinth",.04,v.at,S-.1,.14,v.w+.3,.1,Mt.stone),M("wood",-l/2,v.at,S,.05,.06,w-S,Mt.woodD),M("wood",-l/2,v.at,S+(w-S)*.55,.05,v.w,.05,Mt.woodD)),u===0&&!A&&v.kind!=="bal"&&vd(M,v.at,v.w+.5,t.y,r,.12,Math.max(1,Math.round((r-t.y)/.17)),Mt.plinth),v.kind==="dbl"&&u===0)for(let b of[-1,1]){let E=v.at+b*(v.w/2-.05),I=-(l+(v.w/2-.1)/2);g?e("wood",_*(y+I),E,S,v.w/2-.1,w-S-.1,.06,0,Mt.woodD):e("wood",E,_*(y+I),S,.06,w-S-.1,v.w/2-.1,0,Mt.woodD)}}}if(u>0){let p=a.stairs.filter(g=>g[0]===u-1).map(([,g,_,m,f,y])=>Math.abs(m-g)>Math.abs(f-_)?{a0:Math.min(g,m),a1:Math.max(g,m),y0:(_+f)/2-y/2+s-l,y1:(_+f)/2+y/2+s-l}:{a0:(g+m)/2-y/2,a1:(g+m)/2+y/2,y0:Math.min(_,f)+s-l,y1:Math.max(_,f)+s-l});Vc((g,_,m,f)=>e("slab",g,-s+l+m+f/2,d-.2,_,.2,f,0,Mt.plinth.map(y=>y*.97)),-n+l,n-l,2*(s-l),p);for(let[,g,_,m,f,y]of a.stairs.filter(x=>x[0]===u-1)){let x=Math.abs(m-g)>Math.abs(f-_),M=Math.abs(x?m-g:f-_),v=(g+m)/2,S=(_+f)/2;for(let w of[-1,1]){let A=(x?S:v)+w*(y/2+.03);if((x?s-l:n-l)-Math.abs(A)<.35)continue;((I,U)=>x?e("wood",v,A,I,M,U,.06,0,Mt.wood):e("wood",A,S,I,.06,U,M,0,Mt.wood))(d+.9,.06);for(let I of[-.5,0,.5]){let U=(x?v:S)+I*(M-.1);x?e("wood",U,A,d,.06,.9,.06,0,Mt.wood):e("wood",A,U,d,.06,.9,.06,0,Mt.wood)}}}}}for(let[u,d,p,g,_,m,f]of a.walls){let y=Math.hypot(g-d,_-p),x=(g-d)/y,M=(_-p)/y,v=Math.atan2(M,x),S=u<h-1?c-.2:c,w=r+u*c;Vc((A,b,E,I)=>e("wall",d+x*A,p+M*A,w+E,b,I,.12,v,o),0,y,S,m!=null?[{a0:m-f/2,a1:m+f/2,y0:0,y1:2.1}]:[])}for(let[u,d,p,g,_,m]of a.stairs){let f=Math.hypot(g-d,_-p),y=(g-d)/f,x=(_-p)/f,M=Math.atan2(x,y),v=Math.ceil(c/.19),S=c/v,w=f/v,A=r+u*c;for(let W=0;W<v;W++){let z=w*(W+.5);e("wood",d+y*z,p+x*z,A,w,S*(W+1),m,M,Mt.wood.map(X=>X*(W%2?.97:1)))}let b=-x,E=y,I=[1,-1].map(W=>({s:W,d:Math.min(n-l-Math.abs(d+b*W*m/2),s-l-Math.abs(p+E*W*m/2))})).sort((W,z)=>z.d-W.d)[0].s,U=b*I*(m/2-.04),B=E*I*(m/2-.04),N=[(d+g)/2+U,0,(p+_)/2+B],F=(W,z,X)=>{let Z=Math.cos(t.rot),tt=Math.sin(t.rot);return[t.cx+W*Z-X*tt,z,t.cz+W*tt+X*Z]},C=F(N[0],A+c/2+.9,N[2]),P=F(N[0]+y*f/2,0,N[2]+x*f/2),D=F(N[0],0,N[2]);i.obox("wood",C,[P[0]-D[0],c/2,P[2]-D[2]],[0,.03,0],[-(P[2]-D[2])/(f/2)*.03,0,(P[0]-D[0])/(f/2)*.03],Mt.wood);for(let W of[.04,.5,.96]){let z=f*W,X=d+y*z+U,Z=p+x*z+B,tt=A+Math.min(v,Math.ceil(v*W))*S;e("wood",X,Z,tt,.06,.9,.06,0,Mt.wood)}}for(let u of a.furn)X1(i,t,e,r,u)}function X1(i,t,e,n,[s,r,o,a,l,c,h,u=0,d=0]){let p=n+s*t.fh+d,g=Math.cos(u),_=Math.sin(u),m=(v,S)=>[o+v*g-S*_,a+v*_+S*g],f=(v,S,w,A,b,E,I,U)=>{let[B,N]=m(S,w);e(v,B,N,p+A,b,E,I,u,U)},y=(v,S,w,A,b,E)=>{let[I,U]=m(v,S),B=Math.cos(t.rot),N=Math.sin(t.rot);i.cyl("wood",t.cx+I*B-U*N,p+w,t.cz+I*N+U*B,A,b,10,E)},x=Mt.wood,M=Mt.woodD;switch(r){case"cab":f("wood",0,0,0,l,h,c,M),f("wood",0,0,h,l+.06,.05,c+.06,x);for(let v of[-1,1])f("wood",v*l/4,c/2+.01,.12,l/2-.08,h-.3,.03,x);break;case"table":case"desk":f("wood",0,0,h-.06,l,.06,c,x);for(let v of[-1,1])for(let S of[-1,1])f("wood",v*(l/2-.08),S*(c/2-.08),0,.07,h-.06,.07,M);r==="desk"&&f("wood",l/4,0,h-.3,l/2-.1,.24,c-.1,M);break;case"rtable":y(0,0,h-.05,l/2,.05,x),y(0,0,0,.06,h-.05,M),y(0,0,0,.25,.04,M);for(let v=0;v<3;v++){let S=v*2.09+.5;y(Math.cos(S)*(l/2+.3),Math.sin(S)*(l/2+.3),0,.16,.45,x)}break;case"bench":f("wood",0,0,h-.05,l,.05,c,x);for(let v of[-1,1])f("wood",v*(l/2-.08),0,0,.05,h-.05,c-.04,M);break;case"shelf":case"rack":{let v=r==="rack"?Mt.metal:M,S=r==="rack"?3:4;for(let w of[-1,1])for(let A of r==="rack"?[-1,1]:[0])f("wood",w*(l/2-.03),A*(c/2-.03),0,.06,h,r==="rack"?.06:c,v);for(let w=0;w<S;w++)f("wood",0,0,.12+(h-.2)*w/(S-1),l-.06,.04,c,x);if(r==="rack")for(let w=0;w<S-1;w++)for(let A of[-l/3,0,l/3])(w+Math.round(A))%2===0&&f("wood",A,0,.16+(h-.2)*w/(S-1),l/3-.2,.5,c-.15,Mt.crate);break}case"stove":f("plinth",0,0,0,l,h,c,Mt.stone),y(l/4,0,h,.22,.12,Mt.metal),y(-l/2+.3,-c/2+.25,h,.1,2.2,Mt.dark);break;case"crate":f("wood",0,0,0,l,h,c,Mt.crate),f("wood",0,0,h*.45,l+.02,.08,c+.02,Mt.crate.map(v=>v*.86));break;case"barrel":y(0,0,0,l/2,h,Mt.wood);for(let v of[.15,h-.21])y(0,0,v,l/2+.02,.06,Mt.dark);break;case"chest":f("wood",0,0,0,l,h-.1,c,M),f("wood",0,0,h-.1,l+.04,.1,c+.04,x);break;case"bed":f("wood",0,0,0,l,.32,c,M),f("wood",0,0,.32,l-.1,.14,c-.1,Mt.canvas),f("wood",-l/2+.3,0,.46,.36,.1,c-.3,Mt.canvas.map(v=>v*.94)),f("wood",-l/2+.03,0,0,.06,.8,c,M);break;case"counter":f("wood",0,0,0,l,h-.05,c,M),f("wood",0,-.04,h-.05,l+.08,.05,c+.12,x);break;case"stage":f("wood",0,0,0,l,h,c,M.map(v=>v*1.05)),f("wood",-l/2-.2,0,0,.4,h/2,c*.4,M);break;case"screen":for(let v=-1;v<=1;v++)f("wood",v*l/3,v%2*.08,0,l/3-.03,h,c,v===0?Mt.canvas:x);break;case"boom":for(let[v,S]of[[-l/4,-c/4],[l/6,-c/4],[-l/4+.1,c/4]])y(v,S,0,.3,h*.95,Mt.red),y(v,S,.2,.32,.07,Mt.dark);f("wood",l/4,c/4,0,.7,.6,.6,Mt.crate),f("wood",l/4,c/4,.26,.72,.1,.62,nt("#E7A537"));break}}function Wc(i,t){var n,s,r;let e=(o,a)=>{let l=Math.imul(Math.round(o*100),374761393)^Math.imul(Math.round(a*100),668265263);return l=Math.imul(l^l>>>13,1274126177),((l^l>>>16)>>>0)/4294967296};for(let o of t){let a=O1(o),l=o.w/2,c=o.d/2,h=z1(i,o,a),u=o.kind==="temple"||o.kind==="corridor",d=.95+e(o.cx,o.cz)*.1,p=o.wc?o.wc.map(B=>B*d):u?Mt.twall:Mt.wall[o.tone%4],g=(o.rc||(u?Mt.roofT:Mt.roof)).map(B=>B*d),_=(o.rc?o.rc.map(B=>B*.85):Mt.ridge).map(B=>B*d),m=o.y,f=u?m+1.2:o.lowBase?Math.max(m+.12,((n=o.yhi)!=null?n:m)+.06):Math.max(m+.45,((s=o.yhi)!=null?s:m)+.15),y=u?.9:.12,x=o.nb||0,M=x&1?0:y,v=x&2?0:y,S=x&4?0:y,w=x&8?0:y,A=u?Mt.tbase:Mt.plinth,b=f+o.fl*o.fh;if(o.pass)V1(i,o,h,l,c,m,f,b,y,p,A);else{let B=a((M-v)/2,0,(S-w)/2);i.box("plinth",B[0],m-1,B[2],o.w+M+v,f-m+1,o.d+S+w,o.rot,A,{ao:.18}),o.int?W1(i,o,h,l,c,f,p):o.roof!=="tower"&&o.roof!=="pagoda"&&i.box("wall",o.cx,f,o.cz,o.w,b-f,o.d,o.rot,p,{ao:.3})}let E=(r=o.eave)!=null?r:.7,I=b,U=(B,N,F)=>a(F,N,-B);if(o.roof==="gable")I=o.ridge==="d"?xd(i,c,l,b,U,E,[x&4?0:E*.55,x&8?0:E*.55],g,_,{wallCol:p}):xd(i,l,c,b,a,E,[x&2?0:E*.55,x&1?0:E*.55],g,_,{wallCol:p});else if(o.roof==="lean")I=k1(i,l,c,b,a,E,g,_,p,o.rk||"roof");else if(o.roof==="xs"||o.roof==="hip")I=o.ridge==="d"?mn(i,c,l,b,U,E,g,_,{xs:o.roof==="xs"}):mn(i,l,c,b,a,E,g,_,{xs:o.roof==="xs"});else if(o.roof==="hip2"){let B=f+o.fh*.62,N=Math.min(o.w,o.d)*.11;mn(i,l,c,B,a,E*1.1,g,_,{riseK:.42,lift:.8,horn:0,ridgeH:.01}),i.box("wall",o.cx,B,o.cz,o.w-N*2,b+3-B,o.d-N*2,o.rot,p),I=mn(i,l-N,c-N,b+3,a,E*1.1,g,_,{lift:1.3,horn:1.5,ridgeH:.9})}else if(o.roof==="tower"){let B=f,N=o.w,F=o.d;for(let C=0;C<o.fl;C++){if(i.box("wall",o.cx,B,o.cz,N,o.fh,F,o.rot,p,{ao:C===0?.25:0}),B+=o.fh,C<o.fl-1){let P=N/o.w,D=F/o.d;mn(i,l*P,c*D,B,a,1.2,g,_,{riseK:.3,lift:.5,horn:0,ridgeH:.01}),B+=.8}N*=.86,F*=.86}I=B}else if(o.roof==="pagoda"){let B=f,N=o.w,F=o.fh;for(let D=0;D<o.fl;D++){let W=D?B-.9:B;i.box("wall",o.cx,W,o.cz,N,B+F-W,N,o.rot,p,{ao:D===0?.25:0}),B+=F,D<o.fl-1?(mn(i,N/2,N/2,B,a,E,g,_,{riseK:.3,lift:.55,horn:0,ridgeH:.01}),B+=.55):I=mn(i,N/2,N/2,B,a,E*.9,g,_,{pitch:Math.tan(40*Math.PI/180),lift:.5,horn:0,ridgeH:.2}),N*=.86,F*=.93}let C=a(0,0,0),P=(D,W,z,X)=>i.cyl("roofe",C[0],D,C[2],W,z,10,Mt.copper,{r2:X});P(I-.3,.55,.55,.38);for(let D=0;D<5;D++)P(I+.4+D*.42,.36-D*.03,.1);P(I+.2,.07,3.1),P(I+3.3,.22,.2,.3),P(I+3.5,.3,.25,.05),I+=3.75}else if(o.roof==="lou"){let B=b+.45;mn(i,l,c,B,a,E,g,_,{riseK:.3,lift:.55,horn:0,ridgeH:.01});let N=l-.5,F=c-.5,C=B+.55,P=o.fh*.8;i.box("wall",o.cx,b-.1,o.cz,N*2,C+P-b+.1,F*2,o.rot,p),I=o.ridge==="d"?mn(i,F,N,C+P,U,E,g,_,{xs:!0}):mn(i,N,F,C+P,a,E,g,_,{xs:!0})}if(o.awn&&o.front){let B=o.front,N=Mt.awn[((o.tone+Math.round(o.cx))%5+5)%5],F=f+2.7,C=1.5,P=a(-l+.4,F,B*c),D=a(l-.4,F,B*c),W=a(l-.4,F-.5,B*(c+C)),z=a(-l+.4,F-.5,B*(c+C));B>0?(i.quad("awn",P,D,W,z,N),i.quad("awn",z,W,D,P,N.map(X=>X*.7))):(i.quad("awn",D,P,z,W,N),i.quad("awn",W,z,P,D,N.map(X=>X*.7)))}o.bal&&o.fl>=2&&G1(i,o,h,l,c,f),o.dr&&!o.int&&!o.pass&&H1(i,o,h,l,c,m,f,y),o.top=I,o.ytop0=f}}var q1=Gt.h,ct={board:nt("#B7A283"),boardD:nt("#A28C6D"),post:nt("#7F6750"),pole:nt("#A08667"),plank:nt("#BCA67F"),plankD:nt("#A9926C"),rope:nt("#8C7B62"),brick:nt("#A9887A"),brickG:nt("#9A968E"),stone:nt("#C6BFB1"),lime:nt("#E3DED3"),crate:nt("#B49C7B"),metal:nt("#5E6468"),roof:nt("#857560"),canvas:nt("#D6CDB9"),mark:nt("#E9E2C9"),markR:nt("#C7643F")};function Y1(i){let t=Ie.fence,e=Ie.fh,n=[[Ie.gateW.x,Ie.gateW.z0,Ie.gateW.z1],[Ie.gateE.x,Ie.gateE.z0,Ie.gateE.z1]];for(let c=0;c<t.length-1;c++){let h=t[c],u=t[c+1],d=Math.hypot(u[0]-h[0],u[1]-h[1]),p=(u[0]-h[0])/d,g=(u[1]-h[1])/d,_=Math.atan2(g,p),m=[];for(let[x,M,v]of n)if(Math.abs(h[0]-x)<.01&&Math.abs(u[0]-x)<.01){let S=(M-h[1])/g,w=(v-h[1])/g;m.push([Math.min(S,w),Math.max(S,w)])}let f=Ie.gateS;if(Math.abs(h[1]-f.z)<.01&&Math.abs(u[1]-f.z)<.01){let x=(f.x0-h[0])/p,M=(f.x1-h[0])/p;m.push([Math.min(x,M),Math.max(x,M)])}let y=[0,d];for(let x of m)y.push(...x);y.sort((x,M)=>x-M);for(let x=0;x<y.length-1;x++){let M=y[x],v=y[x+1],S=(M+v)/2;if(m.some(A=>S>A[0]&&S<A[1]))continue;let w=Math.max(1,Math.round((v-M)/2.5));for(let A=0;A<w;A++){let b=M+(v-M)*A/w,E=M+(v-M)*(A+1)/w,I=(b+E)/2,U=h[0]+p*I,B=h[1]+g*I,N=ie(U,B);if(Math.abs(U-70)<.01&&B>-37.4&&B<-33.8){i.box("solid",U,N-.3,B,E-b-.04,1.75,.07,_,ct.board.map(P=>P*.92),{ao:.25}),i.box("solid",U,N+.55,B- -p*.07,E-b,.1,.06,_,ct.boardD);continue}let C=(c*7+A*3)%5/40;i.box("solid",U,N-.3,B,E-b-.04,e+.3,.07,_,ct.board.map(P=>P*(.94+C)),{ao:.25}),i.box("solid",U,N+.55,B- -p*.07,E-b,.1,.06,_,ct.boardD),i.box("solid",U,N+e-.45,B- -p*.07,E-b,.1,.06,_,ct.boardD)}for(let A=0;A<=w;A++){let b=M+(v-M)*A/w,E=h[0]+p*b,I=h[1]+g*b;i.box("solid",E,ie(E,I)-.3,I,.16,e+.48,.16,_,ct.post)}}}let s=Ie.gateW;for(let c of[s.z0,s.z1])i.box("solid",s.x,-.3,c,.32,3.9,.32,0,ct.post);i.box("solid",s.x,3.35,(s.z0+s.z1)/2,.3,.34,s.z1-s.z0+.9,0,ct.post),i.box("solid",s.x-.2,2.62,(s.z0+s.z1)/2,.08,.62,1.9,0,nt("#4A4F50"));let r=Ie.gateE;for(let c of[r.z0,r.z1])i.box("solid",r.x,-.3,c,.26,3.1,.26,0,ct.post);let o=Ie.gateS,a=(o.x0+o.x1)/2,l=o.x1-o.x0;for(let c of[o.x0,o.x1])i.box("solid",c,-.3,o.z,.24,3.05,.24,0,ct.post);i.box("solid",a,2.6,o.z,l+.5,.2,.26,0,ct.post)}function Z1(i,t){let e=Ie.gateE,n=(e.z0+e.z1)/2,s=e.z1-e.z0,r=i("~geO"),o=i("geO"),a=(c,h)=>c.box("solid",e.x-s/4,-.02,h<0?e.z0+.16:e.z1-.16,s/2-.1,2.45,.08,0,ct.boardD),l=n-s/4;r.box("solid",e.x,-.02,l,.08,2.45,s/2-.1,0,ct.boardD);for(let c of[.35,1.9])r.box("solid",e.x-.07,c,l,.05,.14,s/2-.3,0,ct.post);a(t,1),a(o,-1)}function J1(i){let t=Ie.gateS,e=(t.x0+t.x1)/2,n=t.x1-t.x0,s=i("~gsO"),r=i("gsO");s.box("solid",e,-.02,t.z,n-.08,2.5,.08,0,ct.boardD);for(let o of[.35,1.85])s.box("solid",e,o,t.z+.07,n-.2,.14,.05,0,ct.post);s.box("solid",e,1.05,t.z-.1,n+.3,.16,.12,0,ct.post),r.box("solid",t.x1-.12,-.02,t.z-n/2,.08,2.5,n-.1,0,ct.boardD),r.box("solid",t.x1-.26,.4,t.z-n/2,.05,.14,n-.3,0,ct.post)}function Xr(i,t,e,n,s=3.2){let r=Math.cos(n),o=Math.sin(n),a=ie(t,e);i.rod("solid",[t-r*s/2,a+.75,e-o*s/2],[t+r*s/2,a+.75,e+o*s/2],.07,6,ct.post);for(let l of[-.42,0,.42]){let c=t+r*s*l,h=e+o*s*l,u=-o,d=r;i.rod("solid",[c-u*.7,a,h-d*.7],[c+u*.55,a+1.35,h+d*.55],.055,5,ct.post),i.rod("solid",[c+u*.7,a,h+d*.7],[c-u*.55,a+1.35,h-d*.55],.055,5,ct.post)}}function $1(i,t,e){let[n,s]=td,r=[];for(let l=t.x0;l<=t.x1+1e-6;l+=2.5)r.push(l);let o=t.lv[t.lv.length-1],a=l=>l>=t.top[0]-1e-6&&l<=t.top[1]+1e-6;for(let l of r)for(let c of[n,s]){let h=(a(l)?o:t.lv[t.lv.length-2])+1.2;i.rod("solid",[l,-.2,c],[l,h,c],.065,6,ct.pole),i.box("solid",l,-.05,c,.4,.1,.4,0,ct.plankD)}t.lv.forEach((l,c)=>{let h=c===t.lv.length-1,u=h?t.top[0]:t.x0,d=h?t.top[1]:t.x1;for(let g of[n,s])i.rod("solid",[u-.15,l-.08,g],[d+.15,l-.08,g],.05,5,ct.pole);for(let g of r)g>=u-1e-6&&g<=d+1e-6&&i.rod("solid",[g,l-.14,n-.2],[g,l-.14,s+.2],.045,5,ct.pole);let p=Math.round((d-u)/1.25);for(let g=0;g<p;g++){let _=u+(d-u)*g/p,m=u+(d-u)*(g+1)/p;i.box("solid",(_+m)/2,l-.06,(n+s)/2,m-_-.03,.06,s-n+.3,0,g%2?ct.plank:ct.plankD)}i.rod("solid",[u,l+1,s],[d,l+1,s],.035,5,ct.pole),i.rod("solid",[u,l+.5,s],[d,l+.5,s],.03,5,ct.pole)});for(let l=0;l<r.length-1;l+=2){let c=r[l],h=r[Math.min(r.length-1,l+2)];i.rod("solid",[c,.2,s+.08],[h,t.lv[1],s+.08],.04,5,ct.pole)}for(let[l,c,h]of t.ladders)Md(i,l,(n+s)/2+.55,c,h,0)}function Md(i,t,e,n,s,r,o=.7){let a=Math.cos(r),l=Math.sin(r),c=.55,h=s-n+1;for(let d of[-1,1])i.rod("solid",[t+a*d*o/2+l*c,n,e-l*0+a*0+c*(r===0?1:0)],[t+a*d*o/2,s+1,e],.035,5,ct.post);let u=Math.round(h/.3);for(let d=1;d<u;d++){let p=d/u,g=n+(s+1-n)*p,_=c*(1-p);i.rod("solid",[t-a*o/2,g,e+_],[t+a*o/2,g,e+_],.025,4,ct.post)}}function K1(i){let{x0:t,x1:e,z0:n,z1:s,y:r}=ed,o=Math.round((e-t)/.9);for(let h=0;h<o;h++){let u=t+(e-t)*h/o,d=t+(e-t)*(h+1)/o;i.box("solid",(u+d)/2,r-.12,(n+s)/2,d-u-.03,.12,s-n,0,h%3?ct.plank:ct.plankD)}for(let h of[n+.3,(n+s)/2,s-.2])i.box("solid",(t+e)/2,r-.42,h,e-t,.3,.2,0,ct.post);let a=[t+.2,(t+e)/2,e-.2],l=[s-.2,(n+s)/2];for(let h of a)for(let u of l)i.box("solid",h,-.2,u,.26,r-.2,.26,0,ct.post),i.box("solid",h,-.05,u,.5,.12,.5,0,ct.stone);for(let h=0;h<a.length-1;h++)i.rod("solid",[a[h],.3,s-.2],[a[h+1],r-.5,s-.2],.05,5,ct.post),i.rod("solid",[a[h+1],.3,s-.2],[a[h],r-.5,s-.2],.05,5,ct.post);let c=(h,u,d,p)=>{i.rod("solid",[h,r+1,u],[d,r+1,p],.04,5,ct.pole),i.rod("solid",[h,r+.5,u],[d,r+.5,p],.03,5,ct.pole);let g=Math.hypot(d-h,p-u),_=Math.max(1,Math.round(g/1.6));for(let m=0;m<=_;m++)i.box("solid",h+(d-h)*m/_,r,u+(p-u)*m/_,.08,1.02,.08,0,ct.pole)};c(t,s,e-2.6,s),c(t,n+.8,t,s),Fs(i,t+1.6,s-1.4,r,2,2,3),Fs(i,t+4.2,s-1.1,r,2,1,2),i.box("solid",t+7.4,r,s-.9,1.6,.5,.9,0,ct.post),i.cyl("solid",t+7.4,r+.55,s-.9,.32,.02,10,ct.metal)}function Fs(i,t,e,n,s,r,o,a=ct.brick){for(let l=0;l<s;l++)for(let c=0;c<r;c++)for(let h=0;h<o;h++)i.box("solid",t+(l-(s-1)/2)*1.02,n+h*.34,e+(c-(r-1)/2)*.82,.98,.32,.78,0,a.map(u=>u*(.96+(l+c+h)%3*.03)))}function Q1(i){let{x0:t,x1:e,z0:n,z1:s,low:r,high:o}=nd,a=.55,l=u=>o+(r-o)*(u-t)/(e-t),c=(u,d,p,g,_,m,f)=>{let y=Math.hypot(p-u,g-d),x=Math.max(2,Math.round(y/.9)),M=(p-u)/y,v=(g-d)/y;for(let S=0;S<x;S++){let w=y*S/x,A=y*(S+1)/x,b=(w+A)/2,E=u+M*b,I=d+v*b,U=Math.min(_+(m-_)*w/y,_+(m-_)*A/y)-.12;if(f&&b>f[0]&&b<f[1]){i.box("solid",E,2.1,I,A-w-.03,U-2.1,.06,Math.atan2(v,M),ct.board);continue}i.box("solid",E,-.1,I,A-w-.03,U+.1,.06,Math.atan2(v,M),ct.board.map(B=>B*(.93+S%3*.03)))}};c(t,n,e,n,o,r),c(t,s,e,s,o,r,[2.2,3.8]),c(e,n,e,s,r,r),c(t,n,t,s,o,o);for(let[u,d]of[[t,n],[e,n],[t,s],[e,s],[t,(n+s)/2],[e,(n+s)/2]])i.box("solid",u,-.2,d,.18,l(u)+.1,.18,0,ct.post);let h=l(e)-a*(o-r)/(e-t);i.quad("roof",[e+a,h,s+.3],[e+a,h,n-.3],[t,o+.02,n-.3],[t,o+.02,s+.3],ct.roof,[[0,0],[3.6,0],[3.6,2.3],[0,2.3]]),i.quad("solid",[t,o-.1,s+.3],[t,o-.1,n-.3],[e+a,h-.1,n-.3],[e+a,h-.1,s+.3],ct.roof.map(u=>u*.7)),i.box("solid",t-.06,o-.1,(n+s)/2,.2,.14,s-n+.6,0,ct.post)}function j1(i){let{x0:t,x1:e,z0:n,z1:s}=id;i.box("solid",t+1.9,0,n+1.1,1.2,.95,1.2,.1,ct.crate),i.box("solid",t+1.9,.95,n+1.1,1.1,.1,1.1,.1,ct.crate.map(r=>r*.85)),i.box("solid",t+.75,0,n+1.2,1.1,1.55,1.3,0,ct.crate.map(r=>r*.95));for(let[r,o]of[[2.4,3.2],[2.95,3],[3.5,3.3]])i.obox("solid",[t+1.3,1.15,n+r],[-.95,.9,0].map(a=>a*o/2.6),[.03,.04,0],[0,0,.24],ct.plank);for(let r of[.25,.55])i.rod("solid",[e-.2,.2,n+r],[t+.1,.32,n+r+.3],.12,6,ct.post);i.box("solid",e-.7,0,s-.6,.9,.45,.7,.3,ct.crate.map(r=>r*.9))}function tx(i){let{x:t,z:e}=sd;i.box("solid",t,0,e,2.4,.3,2.4,0,ct.post),i.rod("solid",[t,0,e],[t,9.6,e],.16,8,ct.post);for(let[s,r]of[[1.1,1.1],[-1.1,1.1],[1.1,-1.1],[-1.1,-1.1]])i.rod("solid",[t+s,.2,e+r],[t,3.4,e],.07,5,ct.post);let n=[t-1.2,11.2,e-6.2];i.rod("solid",[t,2.2,e],n,.1,6,ct.post),i.rod("solid",[t,9.6,e],n,.025,4,ct.rope),i.rod("solid",n,[n[0],6.6,n[2]],.02,4,ct.rope),i.box("solid",n[0],5.9,n[2],1.3,.1,.9,0,ct.plankD),Fs(i,n[0],n[2],6,1,1,2,ct.brickG),i.box("solid",t+.9,.3,e+.9,1.1,.7,.7,0,ct.post),i.cyl("solid",t+.9,1,e+.9,.3,.02,10,ct.metal)}function ex(i){let{x:t,z:e,y:n}=$a,s=1.8;for(let[r,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.box("solid",t+r*s,-.2,e+o*s,.24,n+2.6,.24,0,ct.post);for(let r of[1.8,3.7])for(let[o,a]of[[[-1,-1],[1,-1]],[[-1,1],[1,1]],[[-1,-1],[-1,1]],[[1,-1],[1,1]]])i.rod("solid",[t+o[0]*s,r-1.6,e+o[1]*s],[t+a[0]*s,r,e+a[1]*s],.05,5,ct.post);i.box("solid",t,n-.14,e,s*2+.5,.14,s*2+.5,0,ct.plank);for(let r of[-1,1])i.box("solid",t+r*(s+.2),n,e,.08,1,s*2+.4,0,ct.board),i.box("solid",t,n,e+r*(s+.2),s*2+.4,1,.08,0,ct.board);i.quad("roof",[t-s-.6,n+2.5,e+s+.6],[t+s+.6,n+2.5,e+s+.6],[t,n+3.6,e],[t,n+3.6,e],ct.roof),i.quad("roof",[t+s+.6,n+2.5,e-s-.6],[t-s-.6,n+2.5,e-s-.6],[t,n+3.6,e],[t,n+3.6,e],ct.roof),i.quad("roof",[t+s+.6,n+2.5,e+s+.6],[t+s+.6,n+2.5,e-s-.6],[t,n+3.6,e],[t,n+3.6,e],ct.roof),i.quad("roof",[t-s-.6,n+2.5,e-s-.6],[t-s-.6,n+2.5,e+s+.6],[t,n+3.6,e],[t,n+3.6,e],ct.roof),Md(i,t,e-s-.6,0,n-.05,0)}function nx(i){Fs(i,24.5,-24.2,0,3,2,3),Fs(i,29.6,-24.2,0,2,2,2),Fs(i,46.8,-29.4,0,3,2,3,ct.brickG);for(let t=0;t<6;t++)i.box("solid",38.4,t*.3,-27+t%2*.1,6.4,.28,.28+.02*(t%3),0,ct.plankD);for(let t=0;t<5;t++)i.box("solid",38.4,0,-25.6+t*.32,6.4,.3,.3,0,ct.post);for(let[t,e,n]of[[32.6,-32.2,.2],[34.6,-33.4,-.3],[33.2,-34.6,.5],[27.4,-31.2,.1]])i.box("solid",t,0,e,1.7,.85,.9,n,ct.stone);i.box("solid",22.6,0,-35.2,4.2,.25,3,0,ct.stone.map(t=>t*.9)),i.box("solid",22.6,.25,-35.2,3.8,.02,2.6,0,ct.lime),qr(i,49.4,-19.6,.4),qr(i,18.2,-38.4,1.7)}function qr(i,t,e,n,s="none"){let r=Math.cos(n),o=Math.sin(n),a=ie(t,e)+.62;i.box("solid",t,a,e,2,.12,1.2,n,ct.plankD);for(let l of[-1,1])i.box("solid",t-o*l*.58,a+.12,e+r*l*.58,2,.3,.06,n,ct.plankD);for(let l of[-1,1])i.rod("solid",[t+r*1-o*l*.45,a+.02,e+o*1+r*l*.45],[t+r*2.3-o*l*.4,a-.1,e+o*2.3+r*l*.4],.04,5,ct.post);for(let l of[-1,1]){let c=t-o*l*.72,h=e+r*l*.72;for(let u=0;u<10;u++){let d=u/10*Math.PI*2,p=(u+1)/10*Math.PI*2;i.rod("solid",[c+r*Math.cos(d)*.55,a-.02+Math.sin(d)*.55,h+o*Math.cos(d)*.55],[c+r*Math.cos(p)*.55,a-.02+Math.sin(p)*.55,h+o*Math.cos(p)*.55],.05,4,ct.post)}}}function bd(i,t){Y1(i),Xr(i,9.2,-29.6,Math.PI/2,2.4),Xr(i,9.2,-26.4,Math.PI/2,2.4);for(let m of ju)$1(i,{...m,ladders:m.id==="E"?[[48.75,0,2.3],[56.25,4.6,6.9]]:[[22.25,0,2.3],[27.5,2.3,4.6],[31.9,4.6,6.9]]});K1(i),Q1(i),j1(i),tx(i),ex(i),nx(i),J1(t),Z1(t,i);let e=t("marks"),n=46.3,s=50.7,r=6.95,o=8.5,a=Math.round((s-n)/.31),l=(s-n)/a,c=1/q1;for(let m=0;m<a;m++){let f=n+(m+.5)*l,y=o-r+(m*7%3-1)*.07,x=r+y/2,M=jt(x)+.05;e.obox("solid",[f,x,M],[l/2-.015,0,0],[0,y/2,-y/2*c],[0,.03*c,.03],m%2?ct.plank:ct.board)}for(let m of[7.3,8.15])e.obox("solid",[(n+s)/2,m,jt(m)+.11],[(s-n)/2+.12,0,0],[0,.07,-.07*c],[0,.03*c,.03],ct.post);let h=[nt("#EFECE4"),nt("#E4E0D6"),nt("#D3CFC4")],u=[0,c/Math.hypot(1,c),1/Math.hypot(1,c)],d=m=>jt(m)+.089,p=(m,f,y,x,M,v)=>{let S=y-m,w=x-f,A=Math.hypot(S,w),b=-w/A*M/2,E=S/A*M/2,I=(f+x)/2;e.obox("solid",[(m+y)/2,I,d(I)],[S/2,w/2,(d(x)-d(f))/2],[b,E,-E*c],[u[0]*.004,u[1]*.004,u[2]*.004],v)},g=m=>7.74+.035*Math.sin((m-46.3)*1.9)-(50.5-m)*.006,_=(m,f,y,x,M,v)=>{let S=Math.max(2,Math.round((m-f)/.3));for(let w=0;w<S;w++){let A=m-(m-f)*w/S,b=m-(m-f)*(w+1)/S;p(A+.012,g(A)+y,b-.012,g(b)+y,x+(M-x)*(w+.5)/S,h[v])}};_(50.3,46.55,0,.03,.1,0),_(50.45,49.2,.05,.014,.02,2),_(48.95,46.6,.052,.024,.036,1),_(50.4,48.7,-.048,.012,.022,2),_(48.45,46.62,-.05,.026,.038,1),_(50.55,49.6,.09,.01,.012,2),_(50.5,49.75,-.085,.01,.012,2);for(let[m,f,y,x]of[[46.9,46.4,0,.12],[46.8,46.45,.045,.08],[46.75,46.48,-.05,.07]])p(m,g(m)+y,f,g(f)+y,x,h[0]);for(let[m,f,y]of[[46.36,.12,.03],[46.5,-.13,.026],[46.72,.14,.02],[46.98,-.12,.018]])p(m-y/2,g(m)+f,m+y/2,g(m)+f,y,h[1]);for(let[m,f]of[[46.55,.21],[46.78,.13],[47.4,.16],[48.6,.08]]){let y=g(m)-.05;p(m,y,m+.01,y-f,.026,h[1]),p(m+.01,y-f+.02,m+.01,y-f-.024,.046,h[1])}e.obox("solid",[69.4,2.47,-35.55],[-.85,.13,0],[0,0,.17],[0,.025,0],ct.plank)}var G={wood:nt("#9C8166"),woodD:nt("#7D6A56"),woodL:nt("#B59C7C"),log:nt("#A88964"),logEnd:nt("#D3BC97"),bark:nt("#806A54"),canvas:nt("#DCD3C1"),canvasD:nt("#C9BFAA"),cloth:["#C9B9A0","#B7C1BE","#D7CCB8","#BFA58F","#AEB7A6"].map(nt),red:nt("#A85B4B"),redD:nt("#8E4A3D"),hay:nt("#D2B97F"),hayD:nt("#BFA36A"),straw:nt("#D8C48E"),stone:nt("#BDB5A8"),stoneD:nt("#A59D90"),iron:nt("#5E6468"),ironD:nt("#4B5054"),water:nt("#7FA0A6"),jar:nt("#9A7B5E"),jarD:nt("#7E634B"),clay:nt("#B98F6E"),oil:nt("#6F6A55"),brass:nt("#B0925C"),paper:nt("#EDE6D6"),thatch:nt("#BFAE86"),flame:[1.6,.95,.38],glow:[1.25,.95,.6],warn:nt("#C9A13B"),bamboo:nt("#B0A27A"),green:nt("#8E9C74")},Sd={straw:nt("#C6BC9C"),hay:nt("#BCB08F"),hayD:nt("#A99D7F")},Ed={straw:nt("#F2C24A"),hay:nt("#E8A938"),hayD:nt("#CF8D2A")},Ct=(i,t)=>ie(i,t);function ix(i,t,e,n=0,s={}){var h,u;let r=Ct(t,e),o=Math.cos(n),a=Math.sin(n),l=(h=s.w)!=null?h:1.1,c=(u=s.d)!=null?u:.8;i.box("solid",t,r+.74,e,l,.06,c,n,G.woodL);for(let d of[-1,1])for(let p of[-1,1])i.box("solid",t+o*d*(l/2-.08)-a*p*(c/2-.08),r,e+a*d*(l/2-.08)+o*p*(c/2-.08),.07,.74,.07,n,G.woodD);if(s.benches!==!1)for(let d of[-1,1]){let p=t-a*d*(c/2+.38),g=e+o*d*(c/2+.38);i.box("solid",p,r+.4,g,l+.1,.05,.26,n,G.wood);for(let _ of[-1,1])i.box("solid",p+o*_*(l/2-.05),r,g+a*_*(l/2-.05),.05,.4,.22,n,G.woodD)}if(s.cups)for(let d=0;d<s.cups;d++)i.cyl("solid",t+(d-(s.cups-1)/2)*.22*o,r+.8,e+(d-(s.cups-1)/2)*.22*a,.045,.07,6,G.paper)}function qc(i,t,e,n=.32,s=.85,r=G.wood,o){let a=o!=null?o:Ct(t,e);i.cyl("solid",t,a,e,n*.92,s,10,r,{r2:n*.92}),i.cyl("solid",t,a+s*.2,e,n,s*.6,10,r);for(let l of[.12,.82])i.cyl("solid",t,a+s*l,e,n*.97,.05,10,G.ironD)}function nl(i,t,e,n=.3,s=.7,r=G.jar,o){let a=o!=null?o:Ct(t,e);i.cyl("solid",t,a,e,n*.7,s*.5,9,r,{r2:n}),i.cyl("solid",t,a+s*.5,e,n,s*.38,9,r,{r2:n*.5}),i.cyl("solid",t,a+s*.88,e,n*.5,s*.12,9,r.map(l=>l*.85))}function Ai(i,t,e,n=.7,s=0,r){let o=r!=null?r:Ct(t,e);i.box("solid",t,o,e,n,n*.85,n,s,Mt.crate,{ao:.2}),i.box("solid",t,o+n*.38,e,n+.02,.07,n+.02,s,Mt.crate.map(a=>a*.85))}function gn(i,t,e,n=0,s){let r=s!=null?s:Ct(t,e);i.box("solid",t,r,e,.75,.38,.5,n,G.canvasD,{ao:.2}),i.box("solid",t,r+.38,e,.6,.08,.4,n,G.canvasD)}function qn(i,t,e,n=.28,s){let r=s!=null?s:Ct(t,e);i.cyl("solid",t,r,e,n*.8,.36,8,G.bamboo,{r2:n,open:!0}),i.cyl("solid",t,r+.02,e,n*.78,.02,8,G.bamboo.map(o=>o*.8))}function ai(i,t,e,n,s,r=!0,o=G.red){i.rod("solid",[t,e,n],[t,e-.18,n],.01,4,G.ironD),i.cyl("solid",t,e-.6,n,.17,.42,8,o,{r2:.17}),i.cyl("solid",t,e-.64,n,.12,.05,8,G.ironD),i.cyl("solid",t,e-.2,n,.12,.04,8,G.ironD),r&&s&&s.cyl("glow",t,e-.56,n,.12,.32,8,G.glow)}function wd(i,t,e,n,s,r=!0){i.cyl("solid",t,e,n,.1,.05,8,G.ironD),i.cyl("solid",t,e+.05,n,.085,.16,8,G.paper.map(o=>o*.95)),i.cyl("solid",t,e+.21,n,.1,.06,8,G.ironD,{r2:.05}),i.rod("solid",[t-.08,e+.2,n],[t,e+.34,n],.008,3,G.ironD),i.rod("solid",[t+.08,e+.2,n],[t,e+.34,n],.008,3,G.ironD),r&&s&&s.cyl("glow",t,e+.08,n,.06,.1,6,G.glow)}function Td(i,t,e,n=3,s){let r=s!=null?s:Ct(t,e);for(let o=0;o<n;o++){let a=[0,.34,.14][o],l=[0,.08,.34][o];i.cyl("solid",t+a,r,e+l,.14,.38,8,G.oil),i.cyl("solid",t+a,r+.38,e+l,.06,.07,6,G.ironD),i.box("solid",t+a,r+.3,e+l,.3,.02,.02,0,G.ironD)}}function Yc(i,t,e,n=1.25){let s=Math.hypot(e[0]-t[0],e[1]-t[1]),r=(e[0]-t[0])/s,o=(e[1]-t[1])/s,a=Math.max(1,Math.round(s/1.6)),l=Math.atan2(o,r);for(let h=0;h<=a;h++){let u=t[0]+r*s*h/a,d=t[1]+o*s*h/a;i.cyl("solid",u,Ct(u,d)-.1,d,.06,n+.1,5,G.bamboo.map(p=>p*.85))}for(let h of[.35,.8,n-.08]){let u=[(t[0]+e[0])/2,(t[1]+e[1])/2];i.box("solid",u[0],Ct(u[0],u[1])+h,u[1],s,.05,.04,l,G.bamboo)}let c=Math.round(s/.14);for(let h=0;h<c;h++){let u=(h+.5)/c,d=t[0]+(e[0]-t[0])*u,p=t[1]+(e[1]-t[1])*u;i.box("solid",d,Ct(d,p),p,.05,n-.1-h%3*.05,.03,l,G.bamboo.map(g=>g*(.92+h%4*.03)))}}function Ns(i,t,e,n,s=0,r=!0){let o=Ct(e,n);i.box("solid",e,o-.2,n,.16,3.3,.16,0,G.woodD),i.box("solid",e+Math.cos(s)*.35,o+3.05,n+Math.sin(s)*.35,.8,.08,.08,s,G.woodD),ai(i,e+Math.cos(s)*.62,o+3.05,n+Math.sin(s)*.62,t,r)}function Xc(i,t,e,n,s,r=!0){for(let o=0;o<3;o++){let a=o*2.094;i.rod("solid",[t+Math.cos(a)*.3,e,n+Math.sin(a)*.3],[t+Math.cos(a)*.18,e+.42,n+Math.sin(a)*.18],.025,4,G.ironD)}i.cyl("solid",t,e+.4,n,.2,.18,10,G.ironD,{r2:.34}),r&&s&&(s.cyl("glow",t,e+.52,n,.27,.05,10,G.flame),s.cyl("glow",t,e+.55,n,.12,.14,6,G.flame,{r2:.01}))}function sx(i,t){let e=Gt.gate.x,n=jt(0)+6.2;Xr(i,e-3.4,n,0,3.4),Xr(i,e+3.4,n,0,3.4);let s=e+9.6,r=jt(0)+2.6;for(let a of[-1,1])i.box("solid",s+a*1.1,-.1,r,.14,2.5,.14,0,G.woodD);i.box("solid",s,1,r,2.5,1.2,.08,0,G.wood),i.box("solid",s,2.25,r,2.9,.12,.3,0,G.woodD);for(let[a,l,c]of[[-.6,.7,.9],[.3,.6,.75],[.85,.3,.5]])i.box("solid",s+a,1.12,r+.05,l,c,.02,0,G.paper);for(let a of[-1,1])ai(i,e+a*4.6,5.2,jt(5.2)+.45,t,!0);let o=oi(17);for(let[a,l]of[[-31,-15.5],[-.6,9]])for(let c=0;c<7;c++){let h=a+(l-a)*(c+.5)/7+(o()-.5)*.6,u=jt(0)+1.4+o()*.9;o()<.55?i.box("solid",h,0,u,1.8,.14,.8,(o()-.5)*.3,G.cloth[c%5],{ao:.2}):gn(i,h,u,o()*2),o()<.5&&qn(i,h+.9,u+.7,.26)}for(let[a,l,c]of[[-21.4,-34.6,1.9],[5.6,-33.4,1.2],[-26.6,-40.4,.2]]){let h=Ct(a,l);i.box("solid",a,h+.55,l,2,.12,1.1,c,G.woodD);for(let u of[-1,1])i.cyl("solid",a-Math.sin(c)*u*.66,h,l+Math.cos(c)*u*.66,.5,.1,10,G.woodD);i.box("solid",a,h+.67,l,1.3,.5,.9,c,G.canvasD)}qn(i,-17.2,-30.6),qn(i,-16.8,-31.2,.24),gn(i,2.4,-30.4,.4),gn(i,3,-30.9,-.3)}function rx(i,t){let{x0:e,x1:n,z0:s,z1:r}=on,o=Ct((e+n)/2,(s+r)/2),a=[e+.3,(e+n)/2,n-.3];for(let f of a)i.box("solid",f,o-.1,s+.3,.14,2.55,.14,0,G.woodD),i.box("solid",f,o-.1,r-.3,.14,3.1,.14,0,G.woodD);i.box("solid",(e+n)/2,o+2.4,s+.3,n-e,.14,.16,0,G.woodD),i.box("solid",(e+n)/2,o+2.95,r-.3,n-e,.14,.16,0,G.woodD);let l=.35,c=[e-l,o+2.5,s-l],h=[n+l,o+2.5,s-l],u=[n+l,o+3.12,r-.1],d=[e-l,o+3.12,r-.1];i.quad("roof",d,u,h,c,G.canvas,[[0,0],[3,0],[3,2],[0,2]]),i.quad("solid",c,h,u,d,G.canvasD.map(f=>f*.8)),i.box("solid",(e+n)/2,o+2.2,s-l,n-e+2*l,.3,.03,0,G.cloth[3]);let p=Ct((e+n)/2,s+1.1);i.box("solid",(e+n)/2,p+.74,s+1.1,5.2,.06,.8,0,G.woodL);for(let f of[-1,1])for(let y of[-1,1])i.box("solid",(e+n)/2+f*2.45,p,s+1.1+y*.33,.07,.74,.07,0,G.woodD);for(let f=0;f<9;f++)i.cyl("solid",(e+n)/2-2.2+f*.55,p+.8,s+1+f%2*.2,.1,.07,7,G.paper,{r2:.13});for(let f of[-1,1]){let y=(e+n)/2+f*1.7,x=r-1.3;i.box("solid",y,p,x,1.6,.75,1.3,0,G.stone,{ao:.2}),i.cyl("solid",y,p+.75,x,.5,.32,12,G.ironD,{r2:.62}),i.cyl("solid",y,p+1.05,x,.56,.02,12,G.canvas)}i.rod("solid",[(e+n)/2+1.5,p+1.1,r-1.2],[(e+n)/2+1,p+1.9,r-1.5],.03,4,G.woodD),nl(i,e+.9,r-.9,.4,.85,G.clay),nl(i,n-.8,r-.9,.36,.8,G.clay),gn(i,n-.9,s+2.4,.3),gn(i,n-1.1,s+2.9,-.2);let g=n+.7,_=s-.6,m=Ct(g,_);i.cyl("solid",g,m-.2,_,.07,5.6,6,G.woodD),i.box("solid",g,m+5.1,_+.4,.05,.05,.9,0,G.woodD),i.box("solid",g,m+3.4,_+.45,.03,1.7,.7,0,G.cloth[0]),ai(i,(e+n)/2,o+2.4,s+.3,t,!0)}function ox(i,t){let{x0:e,x1:n}=Nn,s=Nn.z0,r=Nn.z1,o=Ct((e+n)/2,(s+r)/2),a=o+2.95;for(let l=e+.3;l<=n;l+=1.7)i.box("solid",l,a,(s+r)/2,.12,.14,r-s+.3,0,G.woodD);i.quad("roof",[e,a+.22,r+.1],[n,a+.22,r+.1],[n,a+.42,s-.1],[e,a+.42,s-.1],G.woodL,[[0,0],[3,0],[3,1],[0,1]]),i.quad("solid",[e,a+.14,s-.1],[n,a+.14,s-.1],[n,a+.14,r+.1],[e,a+.14,r+.1],G.woodD),qn(i,n-.9,s+.45),qn(i,n-1.5,s+.4,.24),Ai(i,e+1.8,r-.4,.6),Ai(i,e+2.5,r-.45,.5,.3),gn(i,e+4.4,r-.4,0);for(let l=0;l<5;l++)i.cyl("solid",e+5+l*.18,o+1.6-l%2*.1,s+.08,.05,.5,5,G.redD);ai(i,(e+n)/2,a,(s+r)/2,t,!0)}function ax(i,t,e,n,s=1,r=0){let o=3*s,a=2.4*s,l=1.85*s,c=Math.cos(n),h=Math.sin(n),u=Ct(t,e)+.02,d=(g,_,m)=>[t+c*g-h*m,u+_,e+h*g+c*m],p=[G.canvas,G.canvasD,G.cloth[0],G.cloth[2]][r%4];i.quad("solid",d(o/2,0,a/2),d(o/2,l,0),d(-o/2,l,0),d(-o/2,0,a/2),p),i.quad("solid",d(-o/2,0,-a/2),d(-o/2,l,0),d(o/2,l,0),d(o/2,0,-a/2),p.map(g=>g*.93)),i.quad("solid",d(-o/2,0,a/2),d(-o/2,l,0),d(o/2,l,0),d(o/2,0,a/2),p.map(g=>g*.8)),i.quad("solid",d(o/2,0,-a/2),d(o/2,l,0),d(-o/2,l,0),d(-o/2,0,-a/2),p.map(g=>g*.8)),i.tri("solid",d(-o/2,0,-a/2),d(-o/2,0,a/2),d(-o/2,l,0),p.map(g=>g*.88)),i.tri("solid",d(-o/2,0,a/2),d(-o/2,0,-a/2),d(-o/2,l,0),p.map(g=>g*.88)),i.tri("solid",d(o/2+.01,0,-a*.28),d(o/2+.01,0,a*.28),d(o/2+.01,l*.78,0),nt("#5E574D")),i.tri("solid",d(o/2-.01,0,a*.28),d(o/2-.01,0,-a*.28),d(o/2-.01,l*.78,0),nt("#5E574D")),i.rod("solid",d(o/2+.05,-.05,0),d(o/2+.05,l+.15,0),.035,4,G.woodD),i.rod("solid",d(-o/2-.05,-.05,0),d(-o/2-.05,l+.15,0),.035,4,G.woodD),i.rod("solid",d(o/2+.05,l+.02,0),d(-o/2-.05,l+.02,0),.03,4,G.woodD)}function lx(i,t,e,n,s=0){let r=Ct(t,e);i.box("solid",t,r,e,1.9,.12,.8,n,G.cloth[s%5],{ao:.2}),i.rod("solid",[t-Math.cos(n)*.85,r+.2,e-Math.sin(n)*.85],[t-Math.cos(n)*.85-Math.sin(n)*.3,r+.2,e-Math.sin(n)*.85+Math.cos(n)*.3],.14,6,G.cloth[(s+2)%5])}function cx(i,t,e,n,s=!1){let r=Ct(e,n),o=oi(Math.round(e*7+n));for(let a=0;a<9;a++){let l=a/9*6.283;i.box("solid",e+Math.cos(l)*.62,r-.05,n+Math.sin(l)*.62,.3,.22,.24,l,G.stoneD)}for(let a=0;a<3;a++){let l=a*2.094+.3;i.rod("solid",[e+Math.cos(l)*.85,r,n+Math.sin(l)*.85],[e,r+1.6,n],.03,4,G.woodD)}i.rod("solid",[e,r+1.55,n],[e,r+.95,n],.01,3,G.ironD),i.cyl("solid",e,r+.6,n,.2,.32,9,G.ironD,{r2:.26});for(let a=0;a<4;a++)i.rod("solid",[e-.3+o()*.6,r+.05,n-.3+o()*.6],[e-.3+o()*.6,r+.08,n-.3+o()*.6],.05,4,G.bark);s&&t&&t.cyl("glow",e,r+.05,n,.24,.1,8,G.flame,{r2:.05})}function Bs(i,t,e,n=2.1,s=3,r=0){for(let h of[t,e]){let u=Ct(h[0],h[1]);i.cyl("solid",h[0],u-.1,h[1],.05,n+.15,5,G.bamboo)}let o=Ct(t[0],t[1])+n,a=Ct(e[0],e[1])+n;i.rod("solid",[t[0],o,t[1]],[e[0],a,e[1]],.015,3,G.bamboo);let l=Math.hypot(e[0]-t[0],e[1]-t[1]),c=Math.atan2(e[1]-t[1],e[0]-t[0]);for(let h=0;h<s;h++){let u=(h+.5)/s,d=t[0]+(e[0]-t[0])*u,p=t[1]+(e[1]-t[1])*u,g=o+(a-o)*u,_=.8+(h+r)%2*.3;i.box("solid",d,g-_,p,l/s-.3,_,.02,c,G.cloth[(h+r)%5])}}function Ad(i,t,e,n,s){let a=Ct(t,e),l=oi(9),c=s?10:7,h=s?5:4,u=a+.14+c*.12;for(let d of[-.5,.5])i.box("solid",t,a,e+d*1.5*.7,3.2+.2,.14,.16,0,G.woodD);for(let d=0;d<c;d++)i.box("solid",t+(l()-.5)*.14,a+.14+d*.12,e+(l()-.5)*.1,3.2-.1+(l()-.5)*.2,.11,1.5,(l()-.5)*.04,d%2?n.straw:n.hayD,{ao:.2});for(let d=0;d<h;d++){let p=e-.75+.22+d*1.06/(h-1);i.rod("solid",[t-3.2/2+.2,u+.14,p],[t+3.2/2-.2,u+.14,p],.17,8,d%2?n.hay:n.straw)}if(s)for(let d=0;d<2;d++)i.rod("solid",[t-3.2/2+.5,u+.43,e-.2+d*.4],[t+3.2/2-.5,u+.43,e-.2+d*.4],.16,8,d%2?n.straw:n.hay);for(let d of[0,1])i.rod("solid",[t+3.2/2+.3+d*.25,a,e+.7],[t+3.2/2-.1+d*.25,a+3.2,e-.55],.03,4,G.bamboo)}function hx(i,t,e){let n=Ct(t,e),s=5.4,r=3.8,o=3.3,a=2.5,l=[t+r/2,t-r/2],c=[e-s/2,e,e+s/2];for(let _ of c)i.box("solid",l[0],n-.1,_,.16,a+.1,.16,0,G.woodD),i.box("solid",l[1],n-.1,_,.16,o+.1,.16,0,G.woodD);i.box("solid",l[0],n+a-.14,e,.16,.16,s+.3,0,G.woodD),i.box("solid",l[1],n+o-.14,e,.16,.16,s+.3,0,G.woodD);let h=.5,u=[l[0]+h,n+a-.1,e+s/2+.3],d=[l[0]+h,n+a-.1,e-s/2-.3],p=[l[1]-.2,n+o+.14,e-s/2-.3],g=[l[1]-.2,n+o+.14,e+s/2+.3];i.quad("solid",u,d,p,g,G.thatch),i.quad("solid",g,p,d,u,G.thatch.map(_=>_*.7));for(let _=0;_<12;_++){let m=e-s/2+(_+.5)*s/12;i.box("solid",l[1]-.1,n-.05,m,.05,o-.1,s/12-.03,0,G.wood.map(f=>f*(.92+_%3*.03)))}i.rod("solid",[t-.6,n+2.7,e-s/2],[t-.6,n+2.7,e+s/2],.04,5,G.woodD)}function Rd(i,t,e,n,s){let r=Ct(t,e),o=5.4,a=oi(3);for(let c=0;c<6;c++)i.box("solid",t-.6,r+.55,e-2.1+c*.84,.05,2.1,.72,0,c%2?n.straw:n.hay);i.box("solid",t-1.05,r,e,.9,s?1.6:1.1,o-.7,0,n.hayD,{ao:.25});for(let c=0;c<8;c++)i.box("solid",t+.2+a()*1,r,e-2+a()*4,.8,.48,.55,a()*3,a()<.5?n.hay:n.hayD,{ao:.2});let l=s?[[2.75,-1.7,0],[2.75,-.75,0],[2.75,.2,0],[2.75,1.15,0],[3.35,-1.25,0],[3.35,-.3,0],[3.35,.65,0],[2.75,-1.22,1],[2.75,-.27,1],[2.75,.68,1],[3.35,-.78,1],[3.05,-.75,2]]:[[2.8,-1.6,0],[2.8,-.6,0],[2.8,-1.1,1]];for(let[c,h,u]of l)i.box("solid",t+c,r+u*.5,e+h,.55,.5,.95,0,n.hay,{ao:.2})}function ux(i,t,e){let n=Ct(t,e);i.cyl("solid",t,n-.1,e,1.35,.25,14,G.stoneD),i.cyl("solid",t,n+.15,e,.85,.62,14,G.stone,{open:!0}),i.cyl("solid",t,n+.15,e,.62,.62,14,G.stoneD,{open:!0}),i.cyl("solid",t,n+.4,e,.6,.02,12,G.water.map(s=>s*.7));for(let s of[-1,1])i.box("solid",t+s*1.05,n+.1,e,.16,2.05,.16,0,G.woodD);i.cyl("solid",t-.9,n+1.62,e,.14,1.8,10,G.wood),i.rod("solid",[t-.95,n+1.7,e],[t+.95,n+1.7,e],.14,10,G.wood),i.rod("solid",[t+1.15,n+1.7,e],[t+1.15,n+1.3,e+.35],.03,4,G.ironD),i.rod("solid",[t+.1,n+1.62,e],[t+.1,n+.9,e],.012,3,G.wood),i.cyl("solid",t+.1,n+.68,e,.17,.26,9,G.wood,{r2:.2}),i.box("solid",t+1.9,n,e+.9,1.6,.45,.55,.2,G.stoneD),i.box("solid",t+1.9,n+.45,e+.9,1.4,.02,.4,.2,G.water);for(let[s,r]of[[1.7,-1.1],[-1.7,1.1],[2.4,-.4],[-1.9,-.7]]){let o=t+s,a=e+r;i.cyl("solid",o,Ct(o,a),a,.2,.34,9,G.wood,{r2:.24}),i.box("solid",o,Ct(o,a)+.44,a,.46,.02,.02,0,G.ironD)}}function dx(i,t,e,n){for(let o of[-1.8,0,1.8])for(let a of[-.7,.7]){let l=t+o,c=e+a;i.cyl("solid",l,Ct(l,c)-.1,c,.05,1.95,5,G.bamboo)}for(let o of[-.7,.7])i.rod("solid",[t-2,Ct(t,e)+1.8,e+o],[t+2,Ct(t,e)+1.8,e+o],.035,4,G.bamboo);for(let o of[-1.8,0,1.8])i.rod("solid",[t+o,Ct(t,e)+1.8,e-.75],[t+o,Ct(t,e)+1.8,e+.75],.03,4,G.bamboo);let s=n("straw"),r=Ct(t,e)+1.82;s.box("solid",t-.85,r-.7,e-.74,1.5,.7,.03,0,G.hayD),s.box("solid",t-.85,r,e-.44,1.5,.03,.62,0,G.hayD);for(let[o,a,l,c,h]of[[-1.15,.05,.72,.46,.3],[-.25,-.3,.56,.4,-.25],[.55,.25,.5,.34,.55]])s.box("solid",t+o,Ct(t+o,e+a),e+a,l,.09,c,h,G.straw,{ao:.2})}function fx(i){let t=(n,s,r,o=G.straw)=>{let a=Ct(n,s)+.13,l=Math.cos(r)*.36,c=Math.sin(r)*.36;i.rod("solid",[n-l,a,s-c],[n+l,a,s+c],.13,7,o),i.rod("solid",[n-l*.1,a,s-c*.1],[n+l*.1,a,s+c*.1],.14,7,G.woodD)},e=(n,s,r)=>{let o=Ct(n,s),a=Math.cos(r)*.45,l=Math.sin(r)*.45;for(let c=0;c<5;c++){let h=(c-2)*.05;i.rod("solid",[n-a-l*h*2,o+.05+c%2*.07,s-l+a*h*2],[n+a-l*h*2,o+.05+c%2*.07,s+l+a*h*2],.025,4,G.log)}};t(40.2,-12.3,.4),t(41,-12.1,-.2,G.hay),t(47.1,-4.3,1.2),t(50.3,-6.6,.1,G.hayD),e(51.6,-6.9,.5),e(53.6,-5.9,-.3),qn(i,46.9,-6.5),i.box("solid",46.9,Ct(46.9,-6.5)+.3,-6.5,.34,.04,.34,0,G.hay),gn(i,45.6,-9.2,.6),gn(i,39.1,-9.6,-.4);{let n=Ct(38.4,-11.6);i.box("solid",38.4,n,-11.6,1.1,.22,.8,.3,G.hay,{ao:.2})}qn(i,57,-12.6),Bs(i,[35.6,-11.2],[35.6,-14.9],2.2,2,3)}function px(i,t,e){let n=Ct(t,e);i.box("solid",t,n,e,2.2,.85,1.3,0,G.clay,{ao:.25}),i.box("solid",t,n+.85,e,2.3,.08,1.4,0,G.clay.map(s=>s*.9)),i.cyl("solid",t-.45,n+.8,e,.42,.3,12,G.ironD,{r2:.55}),i.cyl("solid",t-.45,n+1.08,e,.5,.02,12,G.canvasD),i.box("solid",t+.75,n+.85,e-.35,.4,1.2,.4,0,G.clay.map(s=>s*.85)),i.box("solid",t-.45,n+.1,e+.66,.5,.4,.04,0,nt("#3E3A35"));for(let s=0;s<6;s++)i.rod("solid",[t+1.35,n+.1+s%3*.16,e-.5+Math.floor(s/3)*.3],[t+2.25,n+.1+s%3*.16,e-.5+Math.floor(s/3)*.3],.07,5,G.log)}function Cd(i,t,e,n,s){let r=Ct(e,n);if(s){for(let[o,a]of[[-.9,-.6],[.9,-.6],[-.9,.6],[.9,.6]])i.box("solid",e+o,r-.1,n+a,.16,3.9,.16,0,G.woodD);i.box("solid",e,r+3.7,n,2.3,.2,1.5,0,G.woodD),i.box("solid",e,r+3.9,n,2.7,.12,1.8,0,Mt.roof);for(let o of[-1,1])i.rod("solid",[e+o*.9,r+.3,n-.6],[e+o*.9,r+1.6,n+.6],.04,4,G.woodD);i.cyl("solid",e,r+2.2,n,.42,1.15,14,G.brass,{r2:.32}),i.cyl("solid",e,r+2.15,n,.48,.12,14,G.brass.map(o=>o*.85)),i.rod("solid",[e,r+3.35,n],[e,r+3.7,n],.06,5,G.ironD),i.rod("solid",[e-1.4,r+2.5,n],[e-.5,r+2.6,n],.07,6,G.wood),i.rod("solid",[e-1.4,r+2.5,n],[e-1.4,r+3.7,n],.01,3,G.wood),i.box("solid",e,r+1.15,n+.7,1.5,.62,.04,0,G.warn),i.box("solid",e,r+1.2,n+.73,1.2,.12,.02,0,nt("#3F3A33"))}else i.box("solid",e,r-.1,n,.16,2.6,.16,0,G.woodD),i.box("solid",e,r+2.35,n+.3,.1,.1,.7,0,G.woodD),i.cyl("solid",e,r+1.95,n+.55,.2,.32,10,G.brass,{r2:.13}),i.rod("solid",[e,r+2.27,n+.55],[e,r+2.37,n+.55],.02,3,G.ironD),i.rod("solid",[e,r+1.9,n+.55],[e+.05,r+.9,n+.62],.01,3,G.wood)}function mx(i,t){let e=Bc;ix(i,e.table[0],e.table[1],0,{benches:!0,w:1.8,d:.8,cups:2});for(let[n,s]of[[50.6,-2.6],[51.3,-2.4],[51.9,-2.9]])nl(i,n,s,.32,.72,G.jarD);for(let[n,s]of[[22.8,-12.4],[23.4,-12.1]])qn(i,n,s);i.box("solid",31.6,Ct(31.6,-11.6),-11.6,1.4,.8,1,0,G.bamboo.map(r=>r*.9),{ao:.2}),i.box("solid",31.6,Ct(31.6,-11.6)+.8,-11.6,1.55,.06,1.15,0,G.woodD);{let r=Ct(22.4,-3.2);i.cyl("solid",22.4,r,-3.2,1,.45,14,G.stone),i.cyl("solid",22.4,r+.45,-3.2,.62,.32,14,G.stoneD),i.cyl("solid",22.4,r+.77,-3.2,.6,.26,14,G.stone),i.box("solid",22.4+.85,r+.85,-3.2,1.1,.08,.08,0,G.woodD)}{let o=Ct(35.2,-12.4)+.62,a=Math.cos(.25),l=Math.sin(.25);i.box("solid",35.2,o,-12.4,2,.12,1.2,.25,G.woodD);for(let c of[-1,1])i.box("solid",35.2-l*c*.58,o+.12,-12.4+a*c*.58,2,.3,.06,.25,G.woodD);for(let c of[-1,1])i.cyl("solid",35.2-l*c*.72,Ct(35.2,-12.4),-12.4+a*c*.72,.55,.08,12,G.woodD);i.rod("solid",[35.2+a,o,-12.4+l],[35.2+a*2.3,Ct(35.2,-12.4)+.05,-12.4+l*2.3],.05,5,G.woodD),gn(i,35.2-.3,-12.4,.4,o+.12),gn(i,35.2+.4,-12.4+.1,-.2,o+.12)}Bs(i,[24.6,-12.9],[24.6,-15.7],2.1,2,0),Bs(i,[33,-15.7],[33,-12.9],2,2,1),Yc(i,[57.9,-1.4],[57.9,1]),Yc(i,[21.6,-1.4],[23.7,-1.4],1.1)}function Yr(i,t,e,n,s,r=-1,o=0){let a=Ct((t+e)/2,n),l=n+r*s,c=G.cloth[o%5];for(let g of[t+.15,e-.15])i.cyl("solid",g,Ct(g,l)-.1,l,.05,2.05,5,G.woodD);let h=[t,a+2.35,n],u=[e,a+2.35,n],d=[e,a+1.95,l],p=[t,a+1.95,l];r<0?(i.quad("solid",u,h,p,d,c),i.quad("solid",h,u,d,p,c.map(g=>g*.75))):(i.quad("solid",h,u,d,p,c),i.quad("solid",u,h,p,d,c.map(g=>g*.75))),i.box("solid",(t+e)/2,a+1.62,l,e-t,.34,.02,0,c.map(g=>g*.92))}function gx(i,t){let e=oi(31);for(let[n,s,r]of[[-20,-13.8,.2],[-17.6,-13,-.1],[-7.4,-14.4,.4],[3.4,-11,1.4],[9.4,-9.4,1.7],[-29.4,-11.4,1.5],[-12.4,-2.8,.1],[3.8,3.4,.3],[-26,4.2,-.2]])lx(i,n,s,r,Math.floor(e()*5));for(let[n,s,r]of[[-14.6,-4.2,!0],[2.6,-8.2,!1],[-28,-3.4,!1],[10.6,-2.6,!0]])cx(i,t,n,s,r);Bs(i,[-24.2,-12.6],[-19.4,-12.4],2,3,2),Bs(i,[-1.6,-13.4],[3.6,-12.2],2,3,4),Bs(i,[-7.6,1.4],[-3.4,-1],2,2,1);for(let[n,s]of[[-9.6,-13.8],[8,-12],[-22,-1.6],[12.4,3.6]])gn(i,n,s,e()*2),e()<.6&&qn(i,n+.7,s+.5,.25);qr(i,-6.4,-1.6,2.4),qr(i,11.8,-6,1.2),Yr(i,24.6,29.8,-.8,1.8,-1,0),Yr(i,41.4,47.4,-.75,1.9,-1,3),Yr(i,51.2,56.4,-.8,1.7,-1,1),Yr(i,-6.4,-.4,-8.1,1.6,1,2),Yr(i,-26.2,-21,-6.9,1.6,1,4)}function xx(i,t,e){let{x0:n,x1:s,z0:r,z1:o,y:a}=rn,l=0,c=.4,h=14,u=.34,d=o,p=d-h*u,g=(v,S,w,A,b,E,I=G.stone)=>i.box("solid",v,b,S,w,E-b,A,0,I,{ao:.3});g(n-c/2,(r+o)/2,c,o-r+c*2,a-.3,l+.45),g(s+c/2,(r+o)/2,c,o-r+c*2,a-.3,l+.45),g((n+s)/2,r-c/2,s-n,c,a-.3,l+.45);for(let[v,S,w,A]of[[n-c/2,(r+o)/2,c+.12,o-r+c*2+.12],[s+c/2,(r+o)/2,c+.12,o-r+c*2+.12],[(n+s)/2,r-c/2,s-n,c+.12]])i.box("solid",v,l+.45,S,w,.08,A,0,G.stoneD);i.box("solid",(n+s)/2,a-.3,(r+p)/2,s-n,.3,p-r,0,G.stoneD);let _=(l-a)/h;for(let v=0;v<h;v++){let S=d-(v+.5)*u,w=l-_*(v+1);i.box("solid",(n+s)/2,a-.3,S,s-n,w-(a-.3),u+.01,0,v%2?G.stone:G.stone.map(A=>A*.97))}let m=(r+p)/2,f=1.4;for(let v of[-1,1])i.box("solid",s-.04,a,m+v*(f/2+.08),.14,2.35,.16,0,G.woodD);i.box("solid",s-.04,a+2.2,m,.16,.2,f+.4,0,G.woodD);for(let v of[n-c/2,s+c/2]){for(let S of[r-.1,(r+o)/2,o+.2])i.box("solid",v,l+.53,S,.08,.5,.08,0,G.woodD);i.box("solid",v,l+1,(r+o)/2,.08,.07,o-r+.4,0,G.wood)}let y=e("cellarLit"),x=t.v("cellarLit");Ns(y,x,n-.9,o+.6,0,!0),ai(y,s-.45,a+2.65,m,x,!0),y.box("solid",s+.02,a,m+f/4,.1,2.2,f/2,0,G.woodD.map(v=>v*.8)),y.box("solid",s-.06,a+1,m+f/4,.04,.06,f/2-.15,0,G.ironD),x.box("glow",s-.02,a,m-f/4,.02,2.2,f/2-.02,0,[1.05,.74,.42]),y.box("solid",s-.3,a+.005,m-f/4+.05,.55,.01,f/2-.1,0,G.stone.map((v,S)=>v*[1.12,1.04,.9][S])),y.box("solid",80.2,0,-37,.1,4.2,.1,0,G.woodD),y.box("solid",79.7,3.9,-37,1,.06,.06,0,G.woodD),y.box("solid",79.4,3.05,-37,.8,.55,.05,0,G.wood),y.box("solid",79.4,3.1,-36.97,.62,.4,.02,0,G.warn);let M=e("cellarDark");M.box("solid",s+.02,a,m,.1,2.2,f,0,G.woodD.map(v=>v*.8)),M.box("solid",s-.06,a+1,m,.04,.06,f-.2,0,G.ironD)}function _x(i){let t=(Ke.x0+Ke.x1)/2+3,e=Ke.z1+.9;for(let n=0;n<4;n++)qc(i,t-4.6+n*.78,e+.1,.36,.92,G.oil);for(let n=0;n<3;n++)qc(i,t-4.2+n*.78,e+.1,.36,.92,G.oil,.92+.02);Ai(i,t+3.2,e,.9),Ai(i,t+4.1,e+.1,.8,.2),Ai(i,t+3.6,e,.7,-.1,.78);for(let n=0;n<5;n++)i.box("solid",Ke.x0+3.4,n*.3,e+.3+n%2*.05,4.6,.28,.3,0,G.log);gn(i,Ke.x0+1.2,e+.4,.3),gn(i,Ke.x0+1.9,e+.5,-.2)}function yx(i){let{x0:t,x1:e,z0:n,z1:s}=rd,r=(t+e)/2,o=e-t,a=[G.wood,G.woodD],l=0,c=Math.max(1,Math.round((s-n)/1.15)),h=(s-n)/c;for(let d=0;d<c;d++,l++){let p=n+h*(d+.5),g=Ct(r,p),_=1.05,m=d%2?.85:1;i.box("solid",r,g,p,o,_,h-.06,0,a[l%2],{ao:.2}),i.box("solid",r+(l%2?.05:-.05),g+_,p,o-.1,m,h-.1,0,a[(l+1)%2],{ao:.2})}let u=Ct(r,(n+s)/2);i.box("solid",r,u+2.05,(n+s)/2-.3,o+.16,.12,s-n-1.4,0,G.log)}function vx(i){yx(i),nl(i,78.9,-20.6,.45,.9,G.clay),qc(i,78.8,-24.6,.34,.85),Ai(i,79,-26,.7),i.cyl("solid",71.4,.55,-22.4,.55,.1,12,G.woodD),i.rod("solid",[71.1,0,-22.2],[71.3,1.1,-22.4],.05,4,G.woodD),qn(i,79.1,-14.6)}function Mx(i,t){for(let[e,n,s]of[[-66,7.6,-Math.PI/2],[-46.6,-1.4,-Math.PI/2],[-30.6,-20.6,0],[9.4,-23.6,Math.PI],[-12,9.8,-Math.PI/2],[34,10.6,-Math.PI/2],[70.8,-1.6,0]])Ns(i,t,e,n,s,!0);for(let[e,n]of[[[-36,10],[-36,17.6]],[[-36,17.6],[-27,17.6]],[[30.4,10.6],[30.4,18]],[[30.4,18],[39.4,18]],[[50.8,10.6],[50.8,18]],[[50.8,18],[60.6,18]]])Yc(i,e,n,1);for(let[e,n]of[[-27.6,11.2],[8.2,18.8],[26.6,19.6],[61.6,10.4]]){let s=Ct(e,n);i.box("solid",e,s,n,2.4,.9,.9,0,G.log,{ao:.2}),i.box("solid",e,s+.9,n,2.6,.05,1.1,0,G.woodD)}}function Id(i,t,e){sx(i,t),rx(i,t),ox(i,t),od.forEach(([l,c,h,u],d)=>ax(i,l,c,h,u,d));let n=Bc;hx(i,n.shed[0],n.shed[1]),ux(i,n.well[0],n.well[1]),dx(i,n.rack[0],n.rack[1],e),px(i,n.stove[0],n.stove[1]),mx(i,t),gx(i,t),xx(i,t,e),_x(i),vx(i),Mx(i,t),Cd(e("alarmBig"),t.v("alarmBig"),n.bellB[0],n.bellB[1],!0),Cd(e("alarmSmall"),t.v("alarmSmall"),n.bellS[0],n.bellS[1],!1);let s=e("fuel1"),r=e("fuel2"),o=t.v("fuel1"),a=t.v("fuel2");Ad(s,n.mats[0],n.mats[1],Sd,!1),Rd(s,n.shed[0],n.shed[1],Sd,!1),Ad(r,n.mats[0],n.mats[1],Ed,!0),Rd(r,n.shed[0],n.shed[1],Ed,!0),fx(s),Xc(s,n.stove[0]-1.9,Ct(n.stove[0]-1.9,n.stove[1]+1.2),n.stove[1]+1.2,o),Xc(s,37,Ct(37,-6.6),-6.6,o),wd(s,n.table[0]-.62,Ct(n.table[0],n.table[1])+.8,n.table[1]+.05,o,!0),ai(s,27.4,Ct(27.4,-13.05)+2.05,-13.05,o,!0),Ai(s,19.9,-15.1,.8),Ai(s,20.8,-15.2,.7,.2),Td(s,21.9,-15.5,3),ai(s,57.6,Ct(57.6,-11.6)+3,-11.6,o,!0,G.paper),Ns(s,o,51.2,-9.6,Math.PI,!0),Ns(s,o,30.2,-3,0,!0),Ns(r,null,51.2,-9.6,Math.PI,!1),Ns(r,null,30.2,-3,0,!1);{let l=n.mats[0]-1.1,c=n.mats[1]+1.55;Xc(r,l,Ct(l,c),c,a)}Td(r,n.mats[0]+.6,n.mats[1]+1.2,3),r.box("solid",n.mats[0]+.78,Ct(n.mats[0]+.78,n.mats[1]+1.35),n.mats[1]+1.35,.9,.02,.7,0,G.woodD),wd(r,n.shed[0]+2.1,Ct(n.shed[0]+2.1,n.shed[1]-2.85),n.shed[1]-2.85,a,!0)}var de={col:nt("#94503F"),wall:nt("#B98D74"),lat:nt("#6E4536"),wall2:nt("#C8A48D"),beam:nt("#7A4A3C"),rail:nt("#8C5444"),stone:nt("#BDB6A8"),stoneD:nt("#A9A294"),gold:nt("#B99A5E"),plaque:nt("#3F4A4E")};function Pd(i,t){let{cx:e,cz:n}=Nr,s=Gt.h,r=(v,S,w)=>[e+v,S,n+w],o=(v,S,w,A,b,E,I,U)=>i.box("solid",e+v,S,n+w,A,b,E,0,I,U),a=jt(s),l=Gt.zi1,c=21.6,h=l>a?0:a-l-.4,u=(a+l)/2-n;o(0,s,u,c,.55,h,de.stone,{ao:.2}),o(0,s+.55,u,c+.2,.08,h+.2,de.stoneD);let d=s+.63,p=4.1,g=[-9,-5.4,-1.8,1.8,5.4,9],_=[-3.75,3.75];for(let v of g)for(let S of _)i.cyl("solid",e+v,d,n+S,.24,p,10,de.col);for(let v of[-9,9])for(let S of[-1.25,1.25])i.cyl("solid",e+v,d,n+S,.24,p,10,de.col);for(let v of _)o(0,d+p-.45,v,18.6,.45,.3,de.beam);for(let v of[-9,9])o(v,d+p-.45,0,.3,.45,7.8,de.beam);let m=(v,S,w,A)=>{let b=Math.hypot(w-v,A-S),E=(v+w)/2,I=(S+A)/2,U=Math.abs(A-S)<1e-6;o(E,d+.95,I,U?b:.1,.08,U?.1:b,de.rail),o(E,d+.35,I,U?b:.06,.06,U?.06:b,de.rail);let B=Math.round(b/.3);for(let N=1;N<B;N++){let F=N/B;o(v+(w-v)*F,d,S+(A-S)*F,.05,.95,.05,de.rail)}};for(let v=0;v<g.length-1;v++)v!==2&&(m(g[v]+.25,-3.75,g[v+1]-.25,-3.75),m(g[v]+.25,3.75,g[v+1]-.25,3.75));m(-9,-3.5,-9,-1.5),m(-9,1.5,-9,3.5),m(9,-3.5,9,-1.5),m(9,1.5,9,3.5);let f=7.2,y=2.45;o(0,d,-y,f*2,p-.45,.24,de.wall),o(-f,d,0,.24,p-.45,y*2,de.wall),o(f,d,0,.24,p-.45,y*2,de.wall);for(let v=0;v<5;v++){let S=-5.76+v*2.88,w=v>=1&&v<=3;o(S,d,y,2.7,p-.45,.16,w?de.lat.map(A=>A*1.15):de.wall);for(let A=1;A<6;A++)o(S-1.35+A*.45,d+(w?.1:1),y+.1,.04,p-(w?.7:1.6),.04,de.lat);for(let A of[1,2.1,3.2])o(S,d+A,y+.1,2.6,.04,.04,de.lat);o(S+1.42,d,y+.02,.12,p-.45,.2,de.col)}o(-7.2,d,y+.02,.12,p-.45,.2,de.col),mn(i,9.4,4.05,d+p+.1,r,1.25,Mt.roofT,Mt.ridge,{riseK:.3,lift:.55,horn:0,ridgeH:.01});let x=d+p+.85,M=3.3;o(0,x-.25,0,17.2,.25,7.4,de.beam);for(let[v,S,w,A]of[[-8.4,-3.5,8.4,-3.5],[-8.4,3.5,8.4,3.5],[-8.4,-3.5,-8.4,3.5],[8.4,-3.5,8.4,3.5]]){let b=Math.hypot(w-v,A-S),E=(v+w)/2,I=(S+A)/2,U=Math.abs(A-S)<1e-6;o(E,x+.95,I,U?b:.1,.08,U?.1:b,de.rail);let B=Math.round(b/.35);for(let N=0;N<=B;N++){let F=N/B;o(v+(w-v)*F,x,S+(A-S)*F,.05,.95,.05,de.rail)}}o(0,x,0,15.6,M,5.6,de.wall2,{ao:.2});for(let v of[-7.8,-3.9,0,3.9,7.8])for(let S of[-2.82,2.82])o(v,x,S,.26,M,.1,de.col);for(let v=0;v<4;v++){let S=-5.85+v*3.9;o(S,x+.9,2.86,2.6,1.5,.06,de.lat.map(w=>w*1.1));for(let w=1;w<6;w++)o(S-1.3+w*.433,x+.9,2.9,.03,1.5,.03,de.wall)}if(o(0,x+M-.35,0,15.8,.35,5.8,de.beam),mn(i,7.9,2.9,x+M,r,1.4,Mt.roofT,Mt.ridge,{xs:!0,horn:1.1,ridgeH:.7}),o(0,d+p+1.1,3,2.6,.9,.1,de.plaque),o(0,d+p+1.05,3.06,2.8,.08,.06,de.gold),o(0,d+p+2.05,3.06,2.8,.08,.06,de.gold),t)for(let v of[-5.4,-1.8,1.8,5.4])t(e+v,d+p-.45,n+3.75)}var Ri=mt.x1-mt.x0,il=mt.z1-mt.z0,Dd={road:["#BCAF97","#D4C8B2"],lane:["#C2B6A0","#D6CBB6"],path:[null,"#CDBFA4"],street:["#C1B8A8","#DDD6CA"]};function On(i,t){i.beginPath(),t.forEach(([e,n],s)=>s?i.lineTo(e,n):i.moveTo(e,n)),i.closePath()}function sl(i,t){i.beginPath(),t.forEach(([e,n],s)=>s?i.lineTo(e,n):i.moveTo(e,n))}function bx(i,t,e,n){let s=new Float32Array(i.length);for(let r=0;r<3;r++){for(let o=0;o<e;o++){let a=0,l=o*t;for(let c=-n;c<=n;c++)a+=i[l+Math.min(t-1,Math.max(0,c))];for(let c=0;c<t;c++)s[l+c]=a/(2*n+1),a+=i[l+Math.min(t-1,c+n+1)]-i[l+Math.max(0,c-n)]}for(let o=0;o<t;o++){let a=0;for(let l=-n;l<=n;l++)a+=s[Math.min(e-1,Math.max(0,l))*t+o];for(let l=0;l<e;l++)i[l*t+o]=a/(2*n+1),a+=s[Math.min(e-1,l+n+1)*t+o]-s[Math.max(0,l-n)*t+o]}}}var De=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},Zc=[[[-36,10],[-36,17.6],[-27,17.6],[-27,10.6]],[[30.4,10.6],[30.4,18],[39.4,18],[39.4,11]],[[50.8,10.6],[50.8,18],[60.6,18],[60.6,11.2]]];function Ld(i=.2,t=[]){let e=Math.ceil(Ri/i),n=Math.ceil(il/i),s=document.createElement("canvas");s.width=e,s.height=n;let r=s.getContext("2d"),o=(x,M)=>x.setTransform(1/M,0,0,1/M,-mt.x0/M,-mt.z0/M);o(r,i),r.lineJoin="round",r.lineCap="round",r.fillStyle="#BDBE9B",r.fillRect(mt.x0,mt.z0,Ri,il);for(let x=0;x<520;x++){let M=mt.x0+De(x,1)*Ri,v=mt.z0+De(x,2)*il,S=2+De(x,3)*7;r.fillStyle=De(x,4)<.5?"rgba(150,160,118,.16)":"rgba(214,208,170,.18)",r.beginPath(),r.ellipse(M,v,S*1.4,S,De(x,5)*3,0,Math.PI*2),r.fill()}r.fillStyle="#D2C8B7",r.fillRect(mt.x0,mt.z0,Ri,Gt.zi0-mt.z0+.5);for(let x of Zc){r.fillStyle="#BCA88A",On(r,x),r.fill(),r.save(),On(r,x),r.clip();let M=x.map(S=>S[0]),v=x.map(S=>S[1]);for(let S=Math.min(...v)+.5,w=0;S<Math.max(...v);S+=.9,w++)r.strokeStyle=w%2?"rgba(128,146,98,.85)":"rgba(150,128,96,.5)",r.lineWidth=w%2?.5:.25,r.beginPath(),r.moveTo(Math.min(...M),S),r.lineTo(Math.max(...M),S),r.stroke();r.restore()}r.fillStyle="#CDBFA5",On(r,[...Ie.fence,[70,-46.5],[12,-46.5]]),r.fill(),r.save(),On(r,[...Ie.fence,[70,-46.5],[12,-46.5]]),r.clip();for(let x=0;x<90;x++){let M=12+De(x,7)*58,v=-46+De(x,8)*30,S=.6+De(x,9)*2.4;r.fillStyle=De(x,6)<.22?"rgba(232,228,216,.3)":"rgba(150,132,104,.09)",r.beginPath(),r.ellipse(M,v,S*1.3,S,De(x,10)*3,0,Math.PI*2),r.fill()}r.strokeStyle="rgba(140,122,96,.22)",r.lineWidth=.35;for(let x of[-.7,.7])sl(r,[[12,-28+x],[26,-30+x],[40,-33+x],[52,-36+x]]),r.stroke();r.restore(),r.fillStyle="#D9D2C4",On(r,Or),r.fill(),r.save(),On(r,Or),r.clip(),r.strokeStyle="rgba(96,86,70,.10)",r.lineWidth=.06,r.beginPath();for(let x=-40;x<12;x+=1.4)r.moveTo(x,-48),r.lineTo(x,-19);for(let x=-48,M=0;x<-19;x+=.9,M++)r.moveTo(-40,x),r.lineTo(12,x);r.stroke(),r.restore(),r.fillStyle="#D6CEC0",r.fillRect(Gt.gate.x-Gt.gate.hw,Gt.zi0-.5,Gt.gate.hw*2,Gt.zi0-Gt.zo0>0?0:Gt.zo0-Gt.zi0+1),r.fillStyle="#CFC4AD",On(r,Br),r.fill(),r.save(),On(r,Br),r.clip();for(let x=0;x<160;x++){let M=-31+De(x,31)*106,v=-22+De(x,32)*28,S=.5+De(x,33)*2;r.fillStyle=De(x,34)<.45?"rgba(160,170,124,.2)":"rgba(150,132,104,.1)",r.beginPath(),r.arc(M,v,S,0,Math.PI*2),r.fill()}r.restore();for(let x of[0,1])for(let M of kr){let[v,S]=Dd[M.k]||Dd.lane;x===0&&!v||(r.strokeStyle=x?S:v,r.lineWidth=M.w+(x?0:.7),sl(r,M.p),r.stroke())}let a=kr.find(x=>x.id==="road");r.strokeStyle="rgba(128,112,90,.16)",r.lineWidth=.5;for(let x of[-1.1,1.1])sl(r,a.p.map(([M,v],S,w)=>{let A=w[Math.min(w.length-1,S+1)],b=w[Math.max(0,S-1)],E=A[0]-b[0],I=A[1]-b[1],U=Math.hypot(E,I)||1;return[M-I/U*x,v+E/U*x]})),r.stroke();r.fillStyle="#D6CBB5",On(r,Nc),r.fill(),r.save(),On(r,Nc),r.clip();for(let x=0;x<60;x++){let M=16+De(x,21)*42,v=-16+De(x,22)*15,S=.4+De(x,23)*1.6;r.fillStyle=De(x,24)<.5?"rgba(160,170,124,.18)":"rgba(150,132,104,.12)",r.beginPath(),r.arc(M,v,S,0,Math.PI*2),r.fill()}r.restore(),r.fillStyle="#D3C7B1",r.fillRect(on.x0-1.6,on.z0-2.4,on.x1-on.x0+3.2,on.z1-on.z0+2.6),r.fillRect(Nn.x0,Nn.z0,Nn.x1-Nn.x0+2,Nn.z1-Nn.z0),r.fillStyle="#CFC3AC",r.fillRect(Sn.x0,Sn.z0,Sn.x1-Sn.x0,Sn.z1-Sn.z0),r.fillStyle="#C9BCA4",r.fillRect(rn.x0-.6,rn.z0-.6,rn.x1-rn.x0+1.2,rn.z1-rn.z0+1.6),r.fillStyle="#C8C0B0",r.fillRect(mt.x0,Gt.zo0-.2,Ri,1.6);let l=i*2,c=Math.ceil(Ri/l),h=Math.ceil(il/l),u=document.createElement("canvas");u.width=c,u.height=h;let d=u.getContext("2d");o(d,l),d.fillStyle=d.strokeStyle="#000";for(let x of[...zr,...Ls])x.id!=="tower"&&(d.globalAlpha=.6,On(d,Wr(x.cx,x.cz,x.w+1.1,x.d+1.1,x.rot)),d.fill());d.globalAlpha=.55,d.fillRect(mt.x0,Gt.zo0-.4,Ri,1.4),d.fillRect(mt.x0,Gt.zi0-1,Ri,1.4),d.globalAlpha=.42,d.fillRect(Gt.bastions[0].x-Gt.bastions[0].hw-.5,Gt.zo0,Gt.bastions[0].hw*2+1,Gt.bastions[0].d+.6),d.globalAlpha=.3,d.lineWidth=.8,sl(d,Ie.fence),d.stroke();for(let x of t)d.globalAlpha=.26,d.beginPath(),d.arc(x.x,x.z,1.8*x.s,0,Math.PI*2),d.fill();let p=d.getImageData(0,0,c,h),g=p.data,_=new Float32Array(c*h);for(let x=0;x<_.length;x++)_[x]=g[x*4+3]/255;bx(_,c,h,Math.max(1,Math.round(.8/l)));for(let x=0;x<_.length;x++){let M=Math.round(255*(1-.5*Math.min(1,_[x])));g[x*4]=g[x*4+1]=g[x*4+2]=M,g[x*4+3]=255}d.setTransform(1,0,0,1,0,0),d.putImageData(p,0,0),r.setTransform(1,0,0,1,0,0),r.globalCompositeOperation="multiply",r.drawImage(u,0,0,e,n);let m=document.createElement("canvas");m.width=m.height=128;let f=m.getContext("2d"),y=f.createImageData(128,128);for(let x=0;x<16384;x++){let M=234+Math.floor(De(x%128,x>>7)*22);y.data[x*4]=y.data[x*4+1]=y.data[x*4+2]=M,y.data[x*4+3]=255}return f.putImageData(y,0,0),r.globalAlpha=.5,r.fillStyle=r.createPattern(m,"repeat"),r.fillRect(0,0,e,n),r.globalAlpha=1,r.globalCompositeOperation="source-over",s}function Ud(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d");t.fillStyle="#FFFFFF",t.fillRect(0,0,256,128);let e=6,n=128/e;for(let s=0;s<e;s++){let r=s%2?21:0;for(let o=-1;o<7;o++){let a=r+o*42.7,l=De(s,o+9);t.fillStyle=`rgba(${l<.5?"0,0,0":"255,255,255"},${.03+De(o,s)*.05})`,t.fillRect(a+1,s*n+1,41,n-2)}t.fillStyle="rgba(70,60,50,.16)",t.fillRect(0,s*n,256,1.6);for(let o=-1;o<7;o++)t.fillRect(r+o*42.7,s*n,1.4,n)}return i}function Fd(){let i=document.createElement("canvas");i.width=64,i.height=8;let t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,64,8);for(let e=0;e<12;e++)t.fillStyle="rgba(0,0,0,.13)",t.fillRect(e*64/12,0,1.6,8);return i}var Bd=mt.x1-mt.x0,Sx=mt.z1-mt.z0;function Nd(i){for(let t of i){if(t.y!=null)continue;let e=Wr(t.cx,t.cz,t.w,t.d,t.rot).map(([r,o])=>ie(r,o)),n=Math.min(...e,ie(t.cx,t.cz)),s=Math.max(...e,ie(t.cx,t.cz));t.y=n,t.yhi=s,t.doors&&!t.dr&&(t.dr=t.doors)}return i}function Ex(){let i=oi(23),t=[],e=[...zr,...Ls].map(a=>Wr(a.cx,a.cz,a.w+3.4,a.d+3.4,a.rot)),n=[...Ie.fence,[70,-47],[12,-47]],s=(a,l,c=1.6)=>{if(l<Gt.zo0+3&&l>Gt.zi0-4||l<Gt.zi0-4)return!1;for(let h of kr)if(md([a,l],h.p)<h.w/2+c+.6)return!1;for(let h of e)if(Hc([a,l],h))return!1;for(let h of[Or,n,Br,...Zc])if(Hc([a,l],h))return!1;if(a>Sn.x0-2&&a<Sn.x1+2&&l>Sn.z0&&l<Sn.z1+2||a>on.x0-4&&a<on.x1+3&&l>on.z0-4&&l<on.z1+1||a>78&&a<104&&l>-48&&l<-28)return!1;for(let h of t)if(Math.hypot(h.x-a,h.z-l)<(h.s+.9)*2.1)return!1;return!0},r=(a,l,c,h)=>{a<mt.x0+1.5||a>mt.x1-1.5||l<mt.z0+1.5||l>mt.z1-1.5||s(a,l)&&t.push({x:a,z:l,y:ie(a,l),s:c,k:h})};for(let a=0;a<2600&&t.length<420;a++){let l=mt.x0+i()*Bd,c=-30+i()*(mt.z1+30),h=Oc(l,c);if(h<.25)continue;let u=.35+.65*(ja(l*.06,c*.06)*.5+.5);i()>u*h||r(l,c,.85+i()*.45,ie(l,c)>9&&i()<.65?"pine":"broad")}let o=[[-78,3.4],[-64,-4.6],[-52,5.6],[-76,-20],[-66,-36],[-54,-40.6],[-38.6,-8],[-36.6,2.6],[-8.4,10.6],[14.4,11.2],[36.2,11.6],[54.6,11.6],[72.6,10.6],[80.6,-2.4],[82.6,-17.6],[100.4,-17.6],[101.6,-2],[96.4,10.6],[-44,18.6],[-6,19.4],[40,20.6],[-80,-44],[-78,-30]];for(let[a,l]of o)r(a+(i()-.5),l+(i()-.5),.9+i()*.35,"broad");return t}var Os=(i,t)=>{let e=i.attributes.position.count,n=new Float32Array(e*3);for(let s=0;s<e;s++)n.set(t,s*3);return i.setAttribute("color",new Ee(n,3)),i},Zr=i=>(i=i.index?i.toNonIndexed():i,i.deleteAttribute("uv"),i.computeVertexNormals(),i);function Jc(i){let t=new Me;for(let e of["position","normal","color"]){let n=i.reduce((o,a)=>o+a.attributes[e].array.length,0),s=new Float32Array(n),r=0;for(let o of i)s.set(o.attributes[e].array,r),r+=o.attributes[e].array.length;t.setAttribute(e,new Ee(s,3))}return t}function wx(){let i=(n,s,r,o)=>{let a=Qu(new Gn(n,1).deleteAttribute("normal").deleteAttribute("uv"));return a.computeVertexNormals(),a.translate(s,r,o).toNonIndexed()},t=Jc([i(1.45,0,4.1,0),i(1.1,1,3.5,.4),i(1.05,-.8,3.65,-.6),i(.95,.1,4.95,-.25)].map(n=>Os(n,[1,1,1]))),e=new Yt("#7A6A58");return Jc([t,Os(Zr(new Vn(.17,.27,3,5,1,!0).translate(0,1.5,0)),[e.r,e.g,e.b])])}function Tx(){let i=new Yt("#6E5F4F");return Jc([Os(Zr(new Ln(1.6,3.4,7).translate(0,3.2,0)),[1,1,1]),Os(Zr(new Ln(1.2,2.8,7).translate(0,4.9,0)),[1,1,1]),Os(Zr(new Ln(.72,2,7).translate(0,6.3,0)),[1,1,1]),Os(Zr(new Vn(.14,.22,2,5,1,!0).translate(0,1,0)),[i.r,i.g,i.b])])}function Od(i,t={}){let e=new oe,n=Ex(),s=(N,F)=>{let C=new dr(N);return C.colorSpace=Ye,F&&(C.wrapS=C.wrapT=gs),C.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),C},r=s(Ld(t.mobile?.3:.2,n));r.flipY=!1;let o=N=>new fn({roughness:.92,metalness:0,...N}),a={terrain:o({map:r,vertexColors:!0}),solid:o({vertexColors:!0}),brick:o({vertexColors:!0,map:s(Ud(),!0)}),roof:o({vertexColors:!0,map:s(Fd(),!0),roughness:.8}),skirt:o({vertexColors:!0,roughness:1}),glow:new _e({vertexColors:!0,toneMapped:!1})},l=N=>N==="roof"?a.roof:N==="brick"?a.brick:N==="glow"?a.glow:N==="skirt"||N==="base"?a.skirt:a.solid,c=(N,F)=>{for(let C of Object.keys(N.G)){let P=N.geometry(C);if(!P)continue;let D=new Xt(P,l(C));D.castShadow=!["skirt","base","roofu","glow"].includes(C),D.receiveShadow=C!=="glow"&&C!=="base",F.add(D)}},h=ud(),u=new Me;u.setAttribute("position",new Ee(h.pos,3)),u.setAttribute("uv",new Ee(h.uv,2)),u.setIndex(new Ee(new Uint32Array(h.idx),1)),u.computeVertexNormals();let d=h.pos.length/3,p=new Float32Array(d*3),g=u.attributes.normal.array,_=new Yt("#9FAE84"),m=new Yt("#B4BC94"),f=new Yt("#C9C0AE"),y=new Yt(1,1,1),x=new Yt;for(let N=0;N<d;N++){let F=h.pos[N*3],C=h.pos[N*3+2],P=Oc(F,C),D=1-g[N*3+1];if(x.copy(y),P>0){let W=ja(F*.08,C*.08)*.5+.5;x.lerp(new Yt().copy(_).lerp(m,W).multiplyScalar(1.12),P*.75),x.lerp(f,Math.max(0,Math.min(1,(D-.2)*3))*P*.6)}p[N*3]=x.r,p[N*3+1]=x.g,p[N*3+2]=x.b}u.setAttribute("color",new Ee(p,3));let M=new Xt(u,a.terrain);M.receiveShadow=!0,M.name="terrain",e.add(M);let v=new Me;v.setAttribute("position",new Ee(new Float32Array(h.skirt.p),3)),v.setAttribute("color",new Ee(new Float32Array(h.skirt.c),3)),v.computeVertexNormals(),e.add(new Xt(v,a.skirt));let S=new Fr,w={},A=N=>w[N]||(w[N]=new Fr);pd(S,oi(5),[[Nr.cx-11,Nr.cx+11]]),Pd(S,(N,F,C)=>ai(S,N,F,C,S,!0)),Wc(S,Nd(zr)),Wc(S,Nd(Ls)),bd(S,A),Id(S,{cyl:(...N)=>S.cyl(...N),v:A},A),S.box("base",(mt.x0+mt.x1)/2,mt.base-2.2,(mt.z0+mt.z1)/2,Bd+2.8,2.2,Sx+2.8,0,nt("#4B4741"));let b=new oe;b.name="main",c(S,b),e.add(b);let E={},I={};for(let[N,F]of Object.entries(w)){let C=new oe;C.name="v:"+N,c(F,C),e.add(C),N[0]==="~"?(C.visible=!0,I[N.slice(1)]=C):(C.visible=!1,E[N]=C)}let U={broad:wx(),pine:Tx()},B=new fn({vertexColors:!0,roughness:.95});for(let N of["broad","pine"]){let F=n.filter(rt=>rt.k===N);if(!F.length)continue;let C=new ur(U[N],B,F.length),P=new he,D=new In,W=new k,z=new k,X=new Yt,Z=new k(0,1,0),tt=new Yt(N==="pine"?"#6F846A":"#86996C"),at=new Yt(N==="pine"?"#8A9C78":"#A6B183");F.forEach((rt,O)=>{let $=Math.sin(rt.x*12.9898+rt.z*78.233)*43758.5453,it=$-Math.floor($);D.setFromAxisAngle(Z,it*6.28),W.set(rt.s*(.9+it*.2),rt.s*(.92+it*.25),rt.s*(.9+it*.2)),z.set(rt.x,rt.y-.15,rt.z),P.compose(z,D,W),C.setMatrixAt(O,P),X.copy(tt).lerp(at,it),C.setColorAt(O,X)}),C.castShadow=!0,C.receiveShadow=!0,C.frustumCulled=!1,C.name="trees-"+N,e.add(C)}return{root:e,M:a,variants:E,inverse:I,trees:n,groundTex:r}}var rl=class{constructor(t,e,n={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{}},n),this.cur={th:0,ph:.9,r:500,fov:30,t:new k},this.goal={th:0,ph:.9,r:500,fov:30,t:new k},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){let n=this.goal;t.th!==void 0&&(n.th=t.th),t.ph!==void 0&&(n.ph=t.ph),t.r!==void 0&&(n.r=t.r),t.fov!==void 0&&(n.fov=t.fov),t.t&&n.t.copy(t.t),this._clamp(),t.ph!==void 0&&t.ph>this.o.maxPhi&&(n.ph=Math.min(1.75,t.ph)),e&&(this.cur.th=n.th,this.cur.ph=n.ph,this.cur.r=n.r,this.cur.fov=n.fov,this.cur.t.copy(n.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var o,a,l,c;let n={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,fov:this.cur.fov,t:this.cur.t.clone()},s=(o=t.th)!=null?o:n.th;for(;s-n.th>Math.PI;)s-=Math.PI*2;for(;s-n.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(a=t.ph)!=null?a:n.ph,r:(l=t.r)!=null?l:n.r,fov:(c=t.fov)!=null?c:n.fov,t:(t.t||n.t).clone()};this.fly={from:n,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r,fov:r.fov}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let n=e.bounds;t.t.x=Math.min(n.x1,Math.max(n.x0,t.t.x)),t.t.z=Math.min(n.z1,Math.max(n.z0,t.t.z))}}update(t){let e=this.cur,n=this.goal;if(this.fly){let s=this.fly,r=Math.min(1,(this.now()-s.t0)/s.dur),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.th=s.from.th+(s.to.th-s.from.th)*o,e.ph=s.from.ph+(s.to.ph-s.from.ph)*o;let a=Math.sin(Math.PI*o)*Math.min(.35,s.from.t.distanceTo(s.to.t)/900);e.r=Math.exp(Math.log(s.from.r)+(Math.log(s.to.r)-Math.log(s.from.r))*o)*(1+a),e.t.lerpVectors(s.from.t,s.to.t,o),e.fov=s.from.fov+(s.to.fov-s.from.fov)*o,r>=1&&(this.fly=null)}else{let s=1-Math.exp(-t*12);e.th+=(n.th-e.th)*s,e.ph+=(n.ph-e.ph)*s,e.r=Math.exp(Math.log(e.r)+(Math.log(n.r)-Math.log(e.r))*s),e.t.lerp(n.t,s),e.fov+=(n.fov-e.fov)*s}return this._apply(),!!this.fly||Math.abs(n.th-e.th)>1e-4||Math.abs(n.ph-e.ph)>1e-4||Math.abs(n.r-e.r)>.01||n.t.distanceToSquared(e.t)>1e-4||Math.abs(n.fov-e.fov)>.01}_apply(){let t=this.cur,e=Math.sin(t.ph);this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t),Math.abs(this.cam.fov-t.fov)>.001&&(this.cam.fov=t.fov,this.cam.updateProjectionMatrix())}_ground(t,e,n){let s=this.dom.getBoundingClientRect(),r=new Dt((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),o=new qi;o.setFromCamera(r,this.cam);let a=new k;return o.ray.intersectPlane(new vn(new k(0,1,0),-n),a)?a:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.fov=this.cur.fov,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,n){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let o=this._ground(e,n,s.t.y);if(o){let a=1-s.r/r;s.t.x+=(o.x-s.t.x)*a,s.t.z+=(o.z-s.t.z)*a}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let n=this.goal,s=this.dom.clientHeight||600,r=2*n.r*Math.tan(this.cam.fov*Math.PI/360)/s,o=this.cur.th,a=Math.cos(o),l=-Math.sin(o),c=-Math.sin(o),h=-Math.cos(o),u=1/Math.max(.35,Math.cos(this.cur.ph));n.t.x+=(-t*a+e*c*Math.min(u,2.2))*r,n.t.z+=(-t*l+e*h*Math.min(u,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(n.pointerId,{x:n.clientX,y:n.clientY,b:n.button,sh:n.shiftKey,t:n.pointerType});try{t.setPointerCapture(n.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=n=>{var s,r;this.ptrs.delete(n.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",n=>{let s=this.ptrs.get(n.pointerId);if(!s||!this.enabled)return;let r=n.clientX-s.x,o=n.clientY-s.y;if(s.x=n.clientX,s.y=n.clientY,this.ptrs.size>=2){let[a,l]=[...this.ptrs.values()],c=(a.x+l.x)/2,h=(a.y+l.y)/2,u=Math.hypot(a.x-l.x,a.y-l.y),d=Math.atan2(l.y-a.y,l.x-a.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,u),c,h),this.pan(c-this._pinch.mx,h-this._pinch.my);let p=d-this._pinch.a;p>Math.PI&&(p-=Math.PI*2),p<-Math.PI&&(p+=Math.PI*2),this.rotate(p,0)}this._pinch={d:u,mx:c,my:h,a:d};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||n.shiftKey?this.pan(r,o):this.rotate(-r*.0055,-o*.0045)}),t.addEventListener("wheel",n=>{var r,o;if(!this.enabled)return;if(!this.wheelOn){(o=(r=this.o).onWheelHint)==null||o.call(r);return}n.preventDefault();let s=n.deltaMode===1?n.deltaY*16:n.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),n.clientX,n.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};var ks={ov:{t:[16,1,-20],r:286,ph:.74,th:-.04},top:{t:[16,0,-20],r:262,ph:.05,th:0},site:{t:[42,4,-31],r:76,ph:.66,th:.32},yard:{t:[37,1,-10],r:58,ph:.86,th:.3},gate:{t:[-6,3,-33],r:74,ph:.64,th:.36}};function kd(i,t={}){var at,rt;let e=(at=t.mobile)!=null?at:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),n=new Za({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=Ko,n.shadowMap.autoUpdate=!1,n.toneMapping=ra,n.toneMappingExposure=(rt=t.exposure)!=null?rt:1,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",i.appendChild(n.domElement);let s=new cr,r=new Ve(30,1,.3,4e3),o=Od(n,t);s.add(o.root),s.add(new Er("#EEF2F5","#B5AB9A",1.25));let a=new Tr("#FFF2DF",2.7),l=new k(-.5,.78,.38).normalize(),c=new k(12,5,-19);a.position.copy(c).addScaledVector(l,400),a.target.position.copy(c),s.add(a,a.target),a.castShadow=!0;let h=e?2048:4096;a.shadow.mapSize.set(h,h),a.shadow.bias=-4e-4,a.shadow.normalBias=.05,a.shadow.radius=2;let u=O=>{let $=a.shadow.camera,it=new he().lookAt(a.position,a.target.position,new k(0,1,0)).setPosition(a.position).invert(),xt=1e9,_t=-1e9,kt=1e9,Ae=-1e9,H=1e9,fe=-1e9,zt=new k;for(let Ht of[O.x0,O.x1])for(let Tt of[O.y0,O.y1])for(let ge of[O.z0,O.z1])zt.set(Ht,Tt,ge).applyMatrix4(it),xt=Math.min(xt,zt.x),_t=Math.max(_t,zt.x),kt=Math.min(kt,zt.y),Ae=Math.max(Ae,zt.y),H=Math.min(H,zt.z),fe=Math.max(fe,zt.z);Object.assign($,{left:xt,right:_t,bottom:kt,top:Ae,near:-fe-5,far:-H+5}),$.updateProjectionMatrix(),n.shadowMap.needsUpdate=!0},d=t.shadowBox||{x0:mt.x0,x1:mt.x1,z0:mt.z0,z1:mt.z1,y0:mt.base,y1:24};u(d);let p=!0,g=!0,_=!0,m=performance.now(),f=[],y=[],x=new rl(r,n.domElement,{minR:3,maxR:700,minPhi:.04,maxPhi:1.5,bounds:{x0:mt.x0+8,x1:mt.x1-8,z0:mt.z0+8,z1:mt.z1-8},onChange:()=>{p=!0},onStart:()=>{for(let O of f)O()},onWheelHint:()=>{for(let O of y)O()},...t.controls||{}}),M=(O,$)=>{var _t,kt;let it=typeof O=="string"?ks[O]:O,xt={th:it.th,ph:it.ph,r:it.r,fov:(_t=it.fov)!=null?_t:30,t:new k(...it.t)};it.mode&&S(it.mode),$?x.set(xt,!0):x.flyTo(xt,(kt=it.dur)!=null?kt:1.3)},v=null;function S(O){v=O,p=!0}let w=new Set;function A(O,$){let it=o.variants[O];if(!it)return;let xt=o.inverse&&o.inverse[O];xt&&(xt.visible=!$),it.visible!==!!$&&(it.visible=!!$,$?w.add(O):w.delete(O),n.shadowMap.needsUpdate=!0,p=!0)}S(t.mode||"cut"),M(t.view||"ov",!0);let b={x:.5,y:.5,tx:.5,ty:.5},E=()=>{let O=i.clientWidth||800,$=i.clientHeight||500;Math.abs(b.x-.5)<1e-4&&Math.abs(b.y-.5)<1e-4?r.clearViewOffset():r.setViewOffset(O,$,(.5-b.x)*O,(.5-b.y)*$,O,$)},I=O=>{if(b.x===b.tx&&b.y===b.ty)return!1;let $=1-Math.exp(-O*5);return b.x+=(b.tx-b.x)*$,b.y+=(b.ty-b.y)*$,Math.abs(b.tx-b.x)+Math.abs(b.ty-b.y)<.001&&(b.x=b.tx,b.y=b.ty),E(),!0},U=()=>{let O=i.clientWidth||800,$=i.clientHeight||500;n.setSize(O,$,!1),r.aspect=O/$,r.updateProjectionMatrix(),E(),p=!0},B=new ResizeObserver(U);B.observe(i),U();let N=new IntersectionObserver(O=>{g=O[0].isIntersecting,g&&(p=!0)});N.observe(i);let F=[],C=[],P=[],D=()=>{for(let O of P)O(r);n.render(s,r);for(let O of F)O(r)},W=0,z=!1,X=0,Z=O=>{if(!_||(requestAnimationFrame(Z),z))return;let $=Math.max(0,Math.min(.05,(O-m)/1e3));if(m=O,!g||document.hidden)return;let it=tt.animating||O<tt.animUntil,xt=!it&&tt.ambient&&O-W>50;if(it||xt){for(let Ae of C)Ae($,O/1e3);xt&&(W=O)}let _t=x.update($),kt=I($);(p||_t||kt||it||xt)&&(D(),p=!1)};requestAnimationFrame(Z);let tt={renderer:n,scene:s,camera:r,controls:x,world:o,setView:M,VIEWS:ks,setMode:S,mode:()=>v,setVariant:A,variants:()=>[...w],animating:!1,animUntil:0,ambient:!1,mobile:e,invalidate:()=>{p=!0},setCenter:(O,$,it)=>{b.tx=O,b.ty=$,it&&(b.x=O,b.y=$,E(),p=!0)},hold:O=>{z=O,O?(X=performance.now()/1e3,x.now=()=>X*1e3):x.now=()=>performance.now()},step:O=>{X+=O;for(let $ of C)$(O,X);x.update(O),D()},setShadowBox:O=>{u(O||d),p=!0},shadowDirty:()=>{n.shadowMap.needsUpdate=!0,p=!0},renderNow:()=>{x.update(1),D()},onRender:O=>F.push(O),onBeforeRender:O=>P.push(O),onFrame:O=>C.push(O),onUserStart:O=>f.push(O),onWheelHint:O=>y.push(O),dispose:()=>{_=!1,B.disconnect(),N.disconnect(),n.dispose(),n.domElement.remove()}};return tt}function Yn(i,t,e,n,s={}){var f,y,x,M,v,S,w;let r=(f=s.back)!=null?f:9,o=(y=s.up)!=null?y:3.6,a=(x=s.py)!=null?x:ie(i,t),l=Math.hypot(e-i,n-t)||1,c=(e-i)/l,h=(n-t)/l,u=(M=s.side)!=null?M:1.4,d=(v=s.ahead)!=null?v:r*.7,p=[i-c*r-h*u,a+o,t-h*r+c*u],g=[i+c*d,a+((S=s.ty)!=null?S:1.4),t+h*d],_=[p[0]-g[0],p[1]-g[1],p[2]-g[2]],m=Math.hypot(..._);return{t:g,r:m,ph:Math.acos(_[1]/m),th:Math.atan2(_[0],_[2]),fov:(w=s.fov)!=null?w:50}}function Zt(i,t,e=50){let n=[i[0]-t[0],i[1]-t[1],i[2]-t[2]],s=Math.hypot(...n);return{t,r:s,ph:Math.acos(n[1]/s),th:Math.atan2(n[0],n[2]),fov:e}}var ol={mats:[42.6,-14.3,1.5,1.3],shed:[26.6,-6.4,1.7,1.8],cellar:[77.5,-42.6,.9,-1.6]},zd=[13.6,-29.8],Ax=[13.6,-25.6];var $c=[57,-21],Kc=[["v",41.8,-5.4,40.8,-7.4,"idle"],["v2",39.2,-5.6,40.8,-7.4,"idle"],["v",48.6,-6.8,48.6,-5.4,"idle"],["v2",54,-6.6,55.4,-4.2,"idle"],["v",29.4,-10.6,26.6,-6.4,"idle"]],Qc=[["mc",-13.4,-16.6,-13.4,-22,"idle"],["v2",-15.2,-20.9,-11.8,-21,"idle"],["v",-11.8,-21.1,-15.2,-20.9,"idle"]],Hd=[["s",-11.6,-39.2,-8,-30,"idle"],["s",-4.4,-39.2,-8,-30,"idle"],["v",-15,-42,-8,-46,"idle"],["v2",-2.2,-42.2,-8,-46,"idle"],["v",-19,-36.8,-9,-44,"idle"],["v2",1.6,-37.2,-6,-44,"idle"],["v",-26.4,-35.6,-22,-39,"idle"]],zs=(i,t,e="idle")=>{let n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n;return["a",i[0]-s*1.9+r*1.3,i[1]-r*1.9-s*1.3,t[0],t[1],e]},Ci=[{b:[0,1,2],cam:{t:[-10,3,-28],r:96,ph:.9,th:-.32},at:[-12,-27]},{b:[3,4,5],cam:{t:[42,3,-22],r:112,ph:.84,th:.28},at:[40,-20]},{b:[6,7],cam:{t:[68,1,-14],r:64,ph:.86,th:.55},at:[70,-16]},{b:[8,9,10,11],cam:{t:[40,1,-9],r:60,ph:.84,th:.22},at:[40,-4]},{b:[12,13,14],cam:{t:[56,1,-20],r:104,ph:.86,th:.4},at:[60,-24]},{b:[15,16,17,18,19],cam:{t:[57,5,-40],r:54,ph:.92,th:.62},at:[62,-30]}],Hs=[{p:[-24,-24],pl:[-8,-46],path:[ad.start,[-72,7],[-58,1.5],[-45,-6.5],[-34,-15.6],[-24,-24]],u:[zs([-24,-24],[-8,-46]),...Hd,...Qc],lab:[["\u5821\u95E8\u7D27\u95ED\uFF1A\u95E8\u95E9\u843D\u4E0B\uFF0C\u95E8\u524D\u6A2A\u7740\u62D2\u9A6C",-8,-44.6,9.4,"warn"],["\u95E8\u697C\uFF1A\u8FDC\u5904\u5C31\u80FD\u8BA4\u51FA\u65B9\u5411",-8,-50,15,"item"],["\u8FDB\u4E0D\u4E86\u95E8\u7684\u4EBA\u6324\u5728\u95E8\u524D",-21,-40,3.2,"note"],["\u7A7A\u5730\u5357\u6CBF\u7684\u7CA5\u68DA",-13.4,-17.4,3.6,"note"]],cam:Yn(-24,-24,-8,-42,{back:8,up:2.2,ty:5,ahead:16})},{p:[-13.6,-23.6],pl:[-13.4,-17.4],path:[[-24,-24],[-18,-24.8],[-13.6,-23.6]],u:[...Qc,...Hd.slice(0,2),["a",-16.2,-22.4,-13.4,-17.4,"idle"]],ar:[[[-15.2,-20.9,1.7],[-11.8,-21.1,1.7],"talk"]],lab:[["\u6392\u7CA5\u7684\u4EBA\u5728\u804A\uFF1A\u6CB9\u574A\u5E95\u4E0B\u5B58\u7740\u6850\u6CB9",-13.4,-20.8,3,"talk"],["\u68DA\u4E0B\u770B\u5F97\u89C1\u5821\u95E8\u548C\u4E1C\u8FB9\u7684\u77F3\u573A",-13.4,-15.6,3.6,"note"]],cam:Zt([-9.8,2.9,-29.4],[-13.6,1.3,-18.6])},{p:[2,-26],pl:[40.4,-48],path:[[-13.6,-23.6],[-6,-25],[2,-26]],u:[...Qc,["s",...zd,7.6,-27.8,"idle"],["s",...Ax,7.6,-27.8,"idle"],zs([2,-26],[40.4,-48])],sight:[[2,-26,1.75],[40.4,-46.4,8.4]],lab:[["\u5821\u5899\u8C41\u53E3\uFF1A\u6700\u7EC8\u8981\u5230\u7684\u5730\u65B9\uFF0C\u79BB\u5821\u95E8\u4E0D\u5230\u4E94\u5341\u7C73",40.4,-47.6,3.4,"item"],["\u8C41\u53E3\u4E0B\u9762\u5C31\u662F\u4FEE\u5899\u7684\u77F3\u573A",30,-32,4,"note"],["\u77F3\u573A\u5927\u95E8\u5F00\u5728\u7A7A\u5730\u8FB9\u4E0A\uFF0C\u6709\u5B88\u536B",12,-28,3.6,"warn"]],cam:Yn(2,-26,40,-46,{back:8,up:3.4,ty:5,ahead:30,side:2})},{p:[7.6,-27.8],pl:[14,-28],path:[[2,-26],[7.6,-27.8]],u:[["s",...zd,7.6,-27.8,"idle"],["s",11.2,-26.6,7.6,-27.8,"idle"],["r",...$c,20,-24,"idle",5.6],["w",25,-42,25,-46,"idle"],["w",29.6,-44.4,29.6,-46,"idle",4.6],zs([7.6,-27.8],[14,-28])],ar:[[[11,-26.6,1.4],[8.4,-27.6,1.4],"warn"]],zone:[[12,-28,7,"warn"]],lab:[["\u5927\u95E8\uFF1A\u62D2\u9A6C\u548C\u4E24\u540D\u5B88\u536B\uFF0C\u9760\u8FD1\u5C31\u88AB\u8B66\u544A",12,-28,3.2,"warn"],["\u770B\u5F97\u89C1\u91CC\u9762\u7684\u6728\u5E73\u53F0\u548C\u811A\u624B\u67B6",54,-40,7.6,"item"],["\u671B\u697C\u4E0A\u7684\u5F13\u624B",57,-21,8.2,"warn"]],cam:Yn(7.6,-27.8,40,-36,{back:9,up:3.8,ty:3.2,side:-2})},{p:[22.4,-12.6],pl:[44,-15],path:[[7.6,-27.8],[9.4,-23],[12.6,-17.8],[17.6,-14.4],[22.4,-12.6]],u:[["r",...$c,28.8,-14.6,"idle",5.6],["s",36,-26,30,-24,"walk"],...Kc,zs([22.4,-12.6],[44,-15])],sight:[[57,-21,7.3],[28.8,-14.4,3.6]],lab:[["\u9760\u5728\u56F4\u6321\u4E0A\u7684\u77EE\u68DA\uFF1A\u770B\u7740\u80FD\u8E29\u7740\u68DA\u9876\u7FFB\u8FDB\u53BB",28.8,-14.6,4.6,"note"],["\u671B\u697C\u4E0A\u7684\u5F13\u624B\u6B63\u5BF9\u7740\u8FD9\u7247\u6652\u573A",57,-21,8.4,"warn"],["\u56F4\u6321\u5916\u5C31\u662F\u68DA\u5BEE\uFF0C\u4EBA\u6765\u4EBA\u5F80",41,-6.4,2.6,"note"]],cam:Yn(22.4,-12.6,44,-15,{back:7,up:3.2,ty:3.2,side:-1.2})},{p:[75,-28.6],pl:[69,-29.4],path:[[22.4,-12.6],[30,-11.6],[44,-10.6],[57.6,-9.1],[70,-9.1],[74.8,-12],[75,-28.6]],u:[["s",69.3,-28.4,75,-28.6,"idle"],["s",67.6,-29.8,69.3,-28.4,"idle"],["r",...$c,44,-8,"idle",5.6],zs([75,-28.6],[69,-29.4])],ar:[[[69.6,-28.4,1.4],[74.2,-28.8,1.4],"warn"]],zone:[[70.4,-28.6,4.6,"warn"],[70.4,-28.6,8.2,"talk"]],lab:[["\u504F\u95E8\u534A\u5F00\uFF0C\u5B88\u536B\u5C31\u7AD9\u5728\u95E8\u53E3",70,-28.4,3.4,"warn"],["\u5B88\u536B\u95F2\u804A\uFF1A\u6CB9\u574A\u5E95\u4E0B\u5B58\u7740\u6850\u6CB9",68.4,-30.6,2.6,"talk"],["\u4E0B\u6C89\u697C\u68AF\uFF08\u5730\u7A96\u5165\u53E3\uFF09\uFF1A\u8D27\u5806\u6321\u4F4F\u4E86\u95E8\u53E3\u7684\u89C6\u7EBF",77.5,-38.6,1.6,"note"]],cam:Yn(75,-28.6,72,-37,{back:10,up:5,ty:1.2,side:3})},{p:[76.6,-21],pl:[74.4,-22.6],path:[[75,-28.6],[76.2,-24],[76.6,-21]],u:[["a",74.4,-22.6,76.6,-21,"idle"],["s",69.3,-28.4,75,-28.6,"idle"]],ar:[[[74.4,-22.6,1.7],[76.3,-21.2,1.7],"talk"]],lab:[["\u95EE\u540C\u4F34\uFF1A\u95F9\u51FA\u70B9\u4E71\u5B50\uFF0C\u5B88\u536B\u5C31\u4F1A\u79BB\u5F00",74.4,-22.6,2.6,"talk"],["\u76EE\u6807\u6536\u675F\uFF1A\u5728\u68DA\u5BEE\u627E\u80FD\u5F15\u706B\u7684\u4E1C\u897F",73.4,-27.6,3.4,"item"]],cam:Zt([77.6,3,-13],[75.5,1.4,-21.8])},{p:[57.6,-9.1],pl:[42.6,-13.6],path:[[75.6,-21.6],[74.8,-14],[74.8,-10],[70,-9.1],[57.6,-9.1]],u:[...Kc,zs([57.6,-9.1],[42.6,-13.6])],lab:[["\u642D\u68DA\u7684\u7A84\u9053\uFF0C\u51C0\u5BBD\u7EA6 3.8m",64.6,-9.1,3.4,"note"],["\u51FA\u53E3\u6B63\u5BF9\u6652\u573A\uFF1A\u8349\u5E2D\u5806\u3001\u6C34\u4E95\u3001\u6765\u5F80\u7684\u4EBA",44,-12,3,"item"]],cam:Yn(57.6,-9.1,46,-11.4,{back:6.4,up:2.1,ty:1.6,side:.5})},{p:[52.4,-10.6],pl:[42.6,-14.3],path:[[57.6,-9.1],[52.4,-10.6]],u:Kc,lab:[["\u8349\u5E2D\u5806\uFF1A\u7B2C\u4E00\u5904\u5927\u706B\uFF0C\u989C\u8272\u548C\u5468\u56F4\u683C\u683C\u4E0D\u5165",42.6,-14.3,3,"item"],["\u8349\u5E18\u68DA\uFF1A\u7B2C\u4E8C\u5904\u5927\u706B",26.6,-6.4,4.2,"item"],["\u6C34\u4E95\uFF1A\u5C45\u6C11\u4F1A\u6765\u6551\u706B",40.8,-7.4,2.6,"warn"],["\u8349\u5E2D\u5806\u8DDF\u524D\u7684\u706B\u76C6\u548C\u6CB9\u58F6\uFF1A\u5F15\u706B\u7269\u5C31\u5728\u8981\u70B9\u7684\u5927\u5806\u65C1\u8FB9",42.4,-12.6,1.6,"note"]],cam:Zt([55.6,6.4,1.6],[40,.8,-11])},{p:[44.6,-11.8],pl:[42.6,-14.3],pose:"cast",path:[[52.4,-10.6],[44.6,-11.8]],u:[["v",41.4,-9.8,42.4,-13.4,"run"],["v2",39.6,-6,40.8,-7.4,"idle"],["v",48.6,-6.8,42.6,-13,"idle"],["v2",29.4,-10.6,26.6,-6.4,"idle"]],fx:[["fire",...ol.mats]],ar:[[[40.8,-8.2,.3],[42,-12.4,.3],"move"]],lab:[["\u7B2C\u4E00\u5904\u70B9\u71C3\uFF1A\u4EFB\u52A1\u66F4\u65B0\u4E3A\u201C\u8BA9\u706B\u518D\u5927\u4E00\u4E9B\uFF081/2\uFF09\u201D",42.6,-14.3,4.4,"item"],["\u5C45\u6C11\u63D0\u7740\u6C34\u6876\u4ECE\u4E95\u8FB9\u8DD1\u8FC7\u6765",41.4,-9.8,2.6,"warn"]],cam:Yn(48,-9.8,42.6,-14.3,{back:6,up:3,ty:1.2,side:1.6})},{p:[30.2,-6.8],pl:[26.6,-6.4],pose:"cast",path:[[44.6,-11.8],[36,-9.6],[30.2,-6.8]],u:[["v",41.8,-12.4,42.6,-14.3,"idle"],["v2",43.6,-12.2,42.6,-14.3,"idle"],["v",40.6,-5.6,40.8,-7.4,"idle"]],fx:[["fire",...ol.shed],["smoke",42.6,-14.3,1.4,2]],lab:[["\u7B2C\u4E8C\u5904\uFF1A\u8349\u5E18\u68DA",26.6,-6.4,5.2,"item"],["\u77F3\u573A\u91CC\u4F20\u6765\u5B88\u536B\u6551\u706B\u7684\u547C\u558A",46,-22,6,"warn"],["\u4EFB\u52A1\u5207\u6362\uFF1A\u8D81\u4E71\u7FFB\u4E0A\u5821\u5899\u8C41\u53E3",30.2,-6.8,3.2,"item"]],cam:Yn(36.4,-8.4,26.6,-6.4,{back:7,up:3.2,ty:1.4,side:-1.4})},{p:[37.4,-10.4],pl:[40.8,-7.4],path:[],u:[["v",41.8,-5.4,40.8,-7.4,"idle"],["v2",42.6,-6,40.8,-7.4,"idle"],["v",42.2,-12.2,42.6,-14.3,"idle"]],fx:[["fire",...ol.mats]],ar:[[[40.8,-8.4,.3],[42.2,-12.6,.3],"move"]],lab:[["\u706B\u4F1A\u88AB\u5C45\u6C11\u538B\u4E0B\u53BB\uFF1A\u6C34\u4E95\u662F\u5173\u952E",40.8,-7.4,2.8,"warn"],["\u5F04\u574F\u4E95\u4E0A\u7684\u8F98\u8F73\uFF1A\u6253\u4E0D\u4E0A\u6C34\uFF0C\u706B\u80FD\u70E7\u5F97\u66F4\u4E45",38.6,-5.6,3.4,"note"]],cam:Zt([33.6,3.4,-1.4],[40,1,-10.6])},{p:[77.5,-42.8],py:-2.6,pl:[79,-42.8],path:[[77,-27],[77.4,-31],[77.5,-36.4],[77.5,-37.4],[77.5,-42.2,-2.6],[77.5,-42.8,-2.6]],u:[["s",69.3,-28.4,75,-27,"idle"],["s",67.6,-29.8,69.3,-28.4,"idle"]],lab:[["\u8D27\u5806\u6321\u4F4F\u95E8\u53E3\u5B88\u536B\u7684\u89C6\u7EBF\uFF1A\u4E0B\u697C\u68AF\u8FD9\u4E00\u8DEF\u770B\u4E0D\u5230",72.6,-30.4,2.9,"note"],["\u542C\u8BF4\uFF1A\u627E\u5230\u5730\u7A96\u91CC\u7684\u6850\u6CB9\uFF08\u4E0D\u7ED9\u6807\u8BB0\uFF09",77.5,-37.8,2.8,"note"],["\u8D70\u5230\u6CB9\u524D\uFF1A\u70B9\u71C3\u6850\u6CB9\uFF08\u8FD9\u65F6\u624D\u7ED9\u4EA4\u4E92\u6807\u8BB0\uFF09",79,-42.8,1.2,"item"]],cam:Zt([76.6,5.4,-32.8],[78.2,-1.8,-42.6])},{p:[74.6,-24],pl:[72,-36],path:[[77.5,-42.8,-2.6],[77.5,-37.4],[77.4,-31],[76.8,-26.6],[74.6,-24]],u:[["s",77.6,-28.4,80,-32,"run"],["s",73.4,-28.1,77,-28,"run"]],fx:[["smoke",...ol.cellar],["smoke",77.5,-37.6,1.2,0]],gv:1,ar:[[[13.6,-28,.4],[68.6,-29.8,.4],"guard"],[[70.6,-28.4,.4],[79.6,-31.4,.4],"guard"]],lab:[["\u5730\u7A96\u8D77\u706B\uFF0C\u6D53\u70DF\u5192\u51FA\u6765",77.5,-40,4,"item"],["\u5B88\u536B\u4ECE\u504F\u95E8\u51B2\u51FA\u6765\uFF0C\u8D76\u53BB\u6CB9\u574A",76,-28.4,2.8,"warn"],["\u8C03\u6574\u65B9\u5411\uFF1A\u8BA9\u90E8\u5206\u5B88\u536B\u4ECE\u73A9\u5BB6\u56DE\u53BB\u7684\u8DEF\u4E0A\u7ECF\u8FC7",74.6,-24,3.4,"note"]],cam:Yn(74.6,-22,74.6,-36,{back:7,up:3.4,ty:1.4,side:1.6})},{p:[39.2,-4.2],pl:[30.75,.8],path:[[52.4,-8.6],[46,-8.4],[43.6,-4.6],[39.2,-4.2]],u:[["v",37,-2.4,37.9,-1.6,"idle"],["v2",37.9,-1.6,37,-2.4,"idle"],["v",41.8,-9,40.8,-7.4,"idle"],["v2",44.2,-8.4,42.6,-14.3,"idle"]],ar:[[[37,-2.4,1.7],[37.8,-1.7,1.7],"talk"]],lab:[["\u5C45\u6C11\u95F2\u804A\uFF1A\u4E0A\u6B21\u949F\u4E00\u54CD\uFF0C\u536B\u5175\u90FD\u8DD1\u6765\u4E86",37.4,-2,2.9,"talk"],["\u8B66\u949F\uFF1A\u6652\u573A\u5357\u8FB9\u5C0F\u5DF7\u7684\u5899\u89D2",30.75,1.35,2.9,"item"]],cam:Zt([42.6,3,-7.2],[31.2,1.5,.8],40)},{p:[73.6,-33.6],pl:[72,-35.4],path:[[52.4,-10.6],[57.6,-9.1],[70,-9.1],[74.8,-12],[73.9,-27],[73.6,-33.6]],u:[["s",36,-26,30,-24,"walk"],["s",41.2,-12.8,42.6,-14.3,"run"],["s",39.6,-12.2,42.6,-14.3,"run"]],lab:[["\u504F\u95E8\u53E3\u7684\u5B88\u536B\u8D70\u4E86",69.6,-29.6,2.4,"item"],["\u6742\u7269\u548C\u6728\u677F\uFF1A\u56F4\u6321\u5728\u8FD9\u91CC\u77EE\u4E86\u4E00\u622A",72,-35.4,2.8,"item"],["\u77F3\u573A\u91CC\u8FD8\u6709\u5B88\u536B\uFF0C\u4E0D\u662F\u6574\u7247\u6E05\u7A7A",36,-26,3,"note"]],cam:Yn(76.4,-28,69,-38,{back:6,up:3,ty:1.6,side:1.4})},{p:[66.6,-37.6],py:3.5,pl:[62.8,-40.4],path:Hr.slice(4,10),lab:[["\u8F83\u4F4E\u7684\u68DA\u9876\uFF08\u4E1C\u6A90\u7EA6 2.3m\uFF09",68.6,-36.4,1.4,"item"],["\u987A\u7740\u5761\u5F80\u4E0A\u8D70\u5230\u9AD8\u6A90",64,-38.6,2.2,"note"]],cam:Zt([72.4,7.4,-29.6],[62.4,4,-39.6])},{p:[56.2,-44.4],py:6.9,pl:[50,-45.2],path:Hr.slice(9,16),u:[["s",36,-26,30,-24,"idle"]],lab:[["\u6728\u5E73\u53F0\uFF084.6m\uFF09",58,-39.6,1.6,"item"],["\u68AF\u5B50\u4E0A\u811A\u624B\u67B6\u9876\u5C42\uFF086.9m\uFF09",56.2,-44.4,2,"note"],["\u56DE\u5934\u770B\u5F97\u89C1\u68DA\u5BEE\u65B9\u5411\u7684\u70DF",36,-10,9,"note"]],fx:[["smoke",42.6,-14.3,1.4,2],["smoke",26.6,-6.4,1.6,2.2]],cam:{t:[55.4,6.4,-42.4],r:14,ph:1.06,th:.95}},{p:[46.2,-46.6],py:7.6,pl:[40.4,-50],pose:"run",path:Hr.slice(15,20),lab:[["\u6CBF\u5899\u8DD1\uFF1A\u987A\u7740\u6321\u677F\u4E0A\u7684\u767D\u6F06\u8DD1\u5230\u8C41\u53E3",48.4,-46.4,9.4,"item"],["\u8C41\u53E3",40.4,-46.4,9.6,"item"]],cam:Zt([51.6,9,-38.8],[42.4,7,-46.2])},{p:[40.4,-51],py:6.8,pl:[39.6,-60],path:Hr.slice(19),lab:[["\u5230\u8FBE\u8C41\u53E3\uFF1A\u5821\u5185\u7684\u8857\u5DF7\u5C31\u5728\u4E0B\u9762",39.8,-58,1,"item"]],cam:Zt([38.4,10.4,-42.6],[39.8,4.6,-58])}];var li=(i,t={})=>new fn({color:i,roughness:.75,metalness:0,...t}),jc={p:{H:1.8,body:"#C47A22",head:"#E3BC93",limb:"#A8661C",blade:1},b:{H:3.4,body:"#2B3331",head:"#46504D",limb:"#232A28",club:"#6E5A45"},m:{H:3.4,body:"#2B3331",head:"#46504D",limb:"#232A28",arm:"#6B3B2C"},g:{H:17,body:"#343B39",head:"#4B5552",limb:"#2A302E",arm:"#6B3B2C"},s:{H:1.8,body:"#4A5560",head:"#66717A",limb:"#38424B",blade:1,foe:1},r:{H:1.8,body:"#4A5560",head:"#66717A",limb:"#38424B",bow:1,foe:1},a:{H:1.8,body:"#3E7C76",head:"#E3BC93",limb:"#2F625D",staff:1,ally:1},k:{H:2.6,body:"#2B3331",head:"#46504D",limb:"#232A28",blade:2,foe:1},e:{H:2,body:"#6A3E33",head:"#7E5A50",limb:"#4F2E26",blade:1,foe:1},v:{H:1.74,body:"#8D7B63",head:"#E3BC93",limb:"#6E604E",civ:1},v2:{H:1.7,body:"#7F8C8D",head:"#E3BC93",limb:"#636E6F",civ:1},mc:{H:1.76,body:"#7A6A86",head:"#E3BC93",limb:"#5F5269",civ:1},w:{H:1.76,body:"#A08A66",head:"#E3BC93",limb:"#7E6C50",civ:1}},Rx=i=>i==="p"?"#E7A537":jc[i].ally?"#3E9C90":jc[i].civ?"#8E8A80":"#B5462F";function al(i){let t=null,e=jc[i],n=e.H,s=new oe,r=new oe;s.add(r),r.position.y=n*.5;let o=li(e.body),a=li(e.head),l=li(e.limb),c=new Xt(new mr(n*.13,n*.26,4,10),o);c.position.y=n*.2,r.add(c);let h=new Xt(new Wi(n*.1,14,10),a);h.position.y=n*.44,r.add(h);let u=(y,x,M)=>{let v=new oe,S=new Xt(new sn(y,x,y),M);return S.position.y=-x/2,v.add(S),v},d=u(n*.07,n*.34,l),p=i==="m"||i==="g"?u(n*.17,n*.5,li(e.arm)):u(n*.07,n*.34,l);d.position.set(-n*.17,n*.33,0),p.position.set(i==="m"||i==="g"?-(-n*.23):n*.17,n*.33,0);let g=u(n*.085,n*.46,l),_=u(n*.085,n*.46,l);if(g.position.set(-n*.07,0,0),_.position.set(n*.07,0,0),r.add(d,p,g,_),e.club){let y=new Xt(new Vn(n*.03,n*.05,n*.55,8),li(e.club));y.position.set(0,-n*.34,n*.12),y.rotation.x=Math.PI/2.4,p.add(y)}if(e.blade){let y=new Xt(new sn(n*.03,n*(e.blade>1?.62:.44),n*.07),li("#C9CED1",{roughness:.4,metalness:.3}));y.position.set(0,-n*.34-n*(e.blade>1?.28:.2),n*.05),p.add(y),t=y}if(e.bow){let y=new Xt(new Mr(n*.26,n*.018,4,12,Math.PI*1.1),li("#6E5A45"));y.rotation.set(0,Math.PI/2,Math.PI/2-.55),y.position.set(0,-n*.34,0),d.add(y)}if(e.staff){let y=new Xt(new Vn(n*.022,n*.022,n*.95,6),li("#7A6A58"));y.position.set(0,-n*.3,n*.04),p.add(y);let x=new Xt(new Gi(n*.055),new _e({color:"#7FD3C4"}));x.position.set(0,-n*.3-n*.5,n*.04),p.add(x)}if(i==="m"||i==="g"){let y=new Xt(new Ln(n*.11,n*.16,6),li("#4E2A20"));y.position.y=-n*.55,y.rotation.x=Math.PI,p.children[0].parent.add(y)}let m=new Xt(new vi(n*.32,n*.42,28),new _e({color:Rx(i),transparent:!0,opacity:.85,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.y=.04,m.renderOrder=2,s.add(m),s.traverse(y=>{y.isMesh&&y!==m&&(y.castShadow=!0,y.receiveShadow=!1)});let f={root:s,hips:r,torso:c,armL:d,armR:p,legL:g,legR:_,H:n,kind:i,ring:m,pose(y="idle",x=0){r.rotation.set(0,0,0),r.position.set(0,n*.5,0);for(let S of[d,p,g,_])S.rotation.set(0,0,0);let M=Math.sin(x*9),v=i==="m"||i==="g";switch(y){case"walk":{let S=Math.sin(x*5.5);g.rotation.x=.38*S,_.rotation.x=-.38*S,d.rotation.x=-.3*S,p.rotation.x=v?-.15:.3*S;break}case"run":r.rotation.x=.22,g.rotation.x=.7*M,_.rotation.x=-.7*M,d.rotation.x=-.6*M,p.rotation.x=v?-.3:.6*M;break;case"stumble":r.rotation.x=.5,g.rotation.x=.5*M,_.rotation.x=-.5*M,d.rotation.z=-1.1,p.rotation.z=1.1,r.position.y=n*.46;break;case"throw":p.rotation.x=-2.1,d.rotation.x=.5,g.rotation.x=-.35,_.rotation.x=.3;break;case"cast":d.rotation.set(-2.7,0,-.35),p.rotation.set(-2.7,0,.35);break;case"slam":r.rotation.x=-.15,d.rotation.x=-3,p.rotation.x=-3;break;case"charge":r.rotation.x=.55,p.rotation.x=-1.35,d.rotation.x=-.6,g.rotation.x=.8*M,_.rotation.x=-.8*M;break;case"fly":r.rotation.x=.35,g.rotation.x=.7,_.rotation.x=.5,d.rotation.z=-.9,p.rotation.z=.9;break;case"fall":r.rotation.x=-.4,d.rotation.z=-2.2,p.rotation.z=2.2,g.rotation.x=-.6,_.rotation.x=.4;break;case"down":r.rotation.x=-1.45,r.position.y=n*.14,d.rotation.z=-.5,p.rotation.z=.5,g.rotation.x=.1;break;case"grab":r.rotation.x=.3,d.rotation.x=-1.5,v?p.rotation.x=-1.5:p.rotation.set(.45,0,.5);break;case"held":r.rotation.x=-.3,g.rotation.x=.5,_.rotation.x=.2,d.rotation.z=-1.2,p.rotation.z=1.2,r.position.y=n*.62;break;case"burn":d.rotation.set(-.6+.4*M,0,-1.1),p.rotation.set(-.6-.4*M,0,1.1),r.rotation.z=.1*M;break;case"dodge":r.rotation.z=.5,r.position.y=n*.4,g.rotation.x=-.9,_.rotation.x=.6,d.rotation.z=-1;break;case"draw":p.rotation.set(-.9,0,.25),d.rotation.z=-.3,g.rotation.x=-.25,_.rotation.x=.2;break;case"slash":{let S=Math.sin(x*7);r.rotation.y=-.35+.3*S,p.rotation.set(-1.9+.6*S,0,.35),d.rotation.x=-.4,g.rotation.x=-.35,_.rotation.x=.3;break}case"shoot":d.rotation.set(-1.55,0,0),p.rotation.set(-1.45,0,.55),r.rotation.y=.15,g.rotation.x=-.2,_.rotation.x=.25;break;case"knocked":r.rotation.x=-.9,r.position.y=n*.62,d.rotation.z=-1.6,p.rotation.z=1.6,g.rotation.x=-.7,_.rotation.x=-.2;break;case"dead":r.rotation.x=-1.5,r.position.y=n*.11,d.rotation.z=-.9,p.rotation.z=.4,g.rotation.x=.15,_.rotation.x=-.1;break;case"push":r.rotation.x=-.35,g.rotation.x=-.5,_.rotation.x=.4,d.rotation.x=-1.4,p.rotation.x=-1.4;break;default:d.rotation.z=-.08,p.rotation.z=.08}}};return f.pose("idle"),f}function Jr(i=1.5,t=1,e={}){let n=new oe,s=new _e({color:"#EC6E2A",transparent:!0,opacity:.9}),r=new _e({color:"#F6B63E",transparent:!0,opacity:.95}),o=Math.max(3,Math.round(i*3.2));for(let a=0;a<o;a++){let l=a*2.39996+t,c=i*Math.sqrt((a+.5)/o)*.8,h=.9+(a*7+t*3)%5*.22,u=new Xt(new Ln(.28+.1*(a%2),h,6),a%3?s:r);u.position.set(Math.cos(l)*c,h/2,Math.sin(l)*c),u.userData.h=h,u.userData.k=a*1.7+t,n.add(u)}if(e.spot!==!1){let a=new Xt(new gr(i*1.15,28),new _e({color:"#EC6E2A",transparent:!0,opacity:.28,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.05,n.add(a)}return n.userData.tick=a=>{for(let l of n.children)l.userData.h&&(l.scale.y=.8+.35*Math.abs(Math.sin(a*6+l.userData.k)))},n}function ll(i=1.2,t=1){let e=new oe,n=7;for(let s=0;s<n;s++){let r=new Xt(new Gn(1,1),new _e({color:s%2?"#6F6D68":"#85837C",transparent:!0,opacity:.6,depthWrite:!1}));r.userData.k=s/n,r.userData.a=s*2.4+t,e.add(r)}return e.userData.tick=s=>{for(let r of e.children){let o=(r.userData.k+s*.09)%1,a=i*(.5+o*1.6);r.position.set(Math.cos(r.userData.a)*i*.5*o+o*1.4,.6+o*6,Math.sin(r.userData.a)*i*.5*o),r.scale.setScalar(a),r.material.opacity=.62*(1-o*.85)}},e.userData.tick(0),e}function Vd(i=1){let t=new _e({color:"#FFD27A",transparent:!0,opacity:.9,depthWrite:!1}),e=new Xt(new Gn(i,1),t);return e.userData.at=n=>{e.scale.setScalar(.3+1.2*n),t.opacity=.9*(1-n)},e}function th(i=4){let t=new _e({color:"#F3E3C2",transparent:!0,opacity:.8,depthWrite:!1,side:$e}),e=new Xt(new vi(.86,1,48),t);return e.rotation.x=-Math.PI/2,e.userData.at=n=>{e.scale.setScalar(.4+i*n),t.opacity=.8*(1-n)},e}function Gd(){let i=new oe,t=new _e({color:"#EC6E2A",transparent:!0,opacity:.85}),e=new _e({color:"#FFD27A"}),n=new Xt(new Gn(.42,1),e);i.add(n);let s=[0,1,2,3].map(r=>{let o=new Xt(new Gn(.36-r*.07,1),t);return i.add(o),o});return i.userData.tail=s,i.userData.head=n,i}function an(i,t,e,n={}){var d,p;let s=i.map(g=>new k(...g)),r=s.length>2?new Vi(s,!1,"centripetal",.2):new Ss(s[0],s[1]||s[0].clone().add(new k(0,.01,0))),o=r.getLength(),a=Math.max(8,Math.round(o*3)),l=[];if(n.dash){let[g,_]=n.dash,m=Math.max(1,Math.floor(o/(g+_)));for(let f=0;f<m;f++){let y=f*(g+_)/o,x=Math.min(1,(f*(g+_)+g)/o),M=[];for(let v=0;v<=4;v++)M.push(r.getPointAt(y+(x-y)*v/4));l.push(new Es(new Vi(M),4,t,6,!1))}}else l.push(new Es(r,a,t,7,!1));let c=new oe,h=new _e({color:e,transparent:!!n.opacity,opacity:(d=n.opacity)!=null?d:1}),u=new _e({color:e,transparent:!0,opacity:(p=n.xray)!=null?p:.22,depthTest:!1,depthWrite:!1});for(let g of l){let _=new Xt(g,h),m=new Xt(g,u);m.renderOrder=5,c.add(_,m)}if(n.every){let g=new Ln(t*2.6,t*5,10);g.rotateX(Math.PI/2);let _=Math.max(1,Math.floor(o/n.every));for(let m=1;m<=_;m++){let f=Math.min(.999,(m-(n.last?0:.5))/_),y=r.getPointAt(f),x=r.getTangentAt(f);for(let M of[h,u]){let v=new Xt(g,M);v.position.copy(y),v.lookAt(y.clone().add(x)),M===u&&(v.renderOrder=5),c.add(v)}}}return c.userData.length=o,c.userData.curve=r,c}function cl(i,t,e,n={}){var l,c;let s=new k(...i),r=new k(...t),o=s.clone().lerp(r,.5);o.y+=s.distanceTo(r)*((l=n.arc)!=null?l:.12);let a=[];for(let h=0;h<=10;h++){let u=h/10,d=s.clone().multiplyScalar((1-u)*(1-u)).add(o.clone().multiplyScalar(2*u*(1-u))).add(r.clone().multiplyScalar(u*u));a.push([d.x,d.y,d.z])}return an(a,(c=n.r)!=null?c:.12,e,{dash:n.dash,every:999,last:!0,xray:.3})}function hl(i,t){let e=document.createElement("div");e.className="bs-lay",t.appendChild(e);let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("aria-hidden","true"),n.style.cssText="width:100%;height:100%;overflow:visible;pointer-events:none;will-change:auto",e.appendChild(n);let s=[],r=new k,o=[];for(let m=8;m<=48;m+=8)o.push([0,-m],[0,m],[m,0],[-m,0]);let a="",l=".sbx-nda,.sbx-tb .grp,.sbx-tour,.sbx-hint,.sbx-cap,.sbx-x,.sbx-pop,.stg-cap,.stg-tl,.stg-next",c=[],h=-1e9,u=()=>{let m=t.getBoundingClientRect();c=[...t.querySelectorAll(l)].filter(f=>f.offsetWidth&&!f.hidden&&getComputedStyle(f).visibility!=="hidden"&&+getComputedStyle(f).opacity>.1).map(f=>{let y=f.getBoundingClientRect();return[y.left-m.left-3,y.top-m.top-3,y.right-m.left+3,y.bottom-m.top+3]})};function d(m,f,y,x){let M=document.createElement(x?"button":"span");x&&(M.type="button"),M.className=m,M.innerHTML=f,M.style.display="none",e.appendChild(M);let v={e:M,p:typeof y=="function"?null:new k(...y),fn:typeof y=="function"?y:null,on:!1,shown:!1,lab:/\bbs-lab\b/.test(m),w:0,h:0};return s.push(v),v}function p(m){let f=s.indexOf(m);f>=0&&s.splice(f,1),m.e.remove()}let g=m=>{m.shown&&(m.e.style.display="none",m.shown=!1)},_=(m,f,y)=>{m.e.style.transform=`translate(${f.toFixed(1)}px,${y.toFixed(1)}px)`};return i.onRender(m=>{let f=performance.now();f-h>400&&(u(),h=f);let y=t.clientWidth,x=t.clientHeight,M=c.slice(),v=[],S=[];for(let E of s){if(!E.on){g(E);continue}if(r.copy(E.fn?E.fn():E.p).project(m),r.z>1||r.z<-1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2){g(E);continue}E.shown||(E.e.style.display="",E.shown=!0);let I=(r.x+1)/2*y,U=(1-r.y)/2*x;(E.lab?v:S).push([E,I,U])}let w=(E,I,U)=>{let B=E.bw||(E.bw=E.e.offsetWidth);return B>40?[I-16,U-16,I-16+B,U+16]:[I-15,U-15,I+15,U+15]},A=E=>!M.some(I=>E[0]<I[2]&&E[2]>I[0]&&E[1]<I[3]&&E[3]>I[1]);S.sort((E,I)=>I[0].e.classList.contains("on")-E[0].e.classList.contains("on"));let b="";for(let[E,I,U]of S){let B=I,N=U,F=w(E,I,U);if(!A(F))for(let[C,P]of o){let D=w(E,I+C,U+P);if(D[0]>=0&&D[2]<=y&&D[1]>=0&&D[3]<=x&&A(D)){B=I+C,N=U+P,F=D;break}}_(E,B,N),M.push(F),Math.hypot(B-I,N-U)>13&&(b+=`<line x1="${I.toFixed(1)}" y1="${U.toFixed(1)}" x2="${B.toFixed(1)}" y2="${N.toFixed(1)}"/><circle cx="${I.toFixed(1)}" cy="${U.toFixed(1)}" r="3"/>`)}b!==a&&(a=b,n.innerHTML=b?`<g stroke="#1F2725" stroke-opacity=".75" stroke-width="1.5" fill="#D2872C">${b}</g>`:""),v.sort((E,I)=>I[2]-E[2]);for(let[E,I,U]of v){E.w||(E.w=E.e.offsetWidth,E.h=E.e.offsetHeight);let B=U;for(let N=0;N<10;N++){let F=I-E.w/2,C=B-11-E.h,P=I+E.w/2,D=B-11,W=M.find(z=>F<z[2]&&P>z[0]&&C<z[3]&&D>z[1]);if(!W||W[1]+11-3-11-E.h<0)break;B=W[1]+11-3}M.push([I-E.w/2,B-11-E.h,I+E.w/2,B-11]),_(E,I,B)}}),{lay:e,add:d,remove:p,marks:s}}var Te={route:"#D2872C",hit:"#D2452F",shot:"#B5462F",knock:"#8B6B4A",aggro:"#C2412E",chase:"#B5462F",follow:"#3E9C90",move:"#7D8C93",charge:"#B5462F",wall:"#7FAFD3",edge:"#5E93BF",zone:"#3E9C90",see:"#3F8F5E",blocked:"#C2412E",cam:"#2F6F8F",trig:"#D2872C",talk:"#3E7FA6",warn:"#C2412E",guard:"#56636D"},Cx=i=>String(i+1).padStart(2,"0"),$r=(i,t,e=0)=>[i,ie(i,t)+e,t],Wd=i=>i.traverse(t=>{t.geometry&&t.geometry.dispose()});function Xd(i,t=.18,e=1.2){let n=[],s=(r,o,a)=>r[2]!=null?r[2]+t:ie(o,a)+t;for(let r=0;r<i.length;r++){let o=i[r];if(r===0){n.push([o[0],s(o,o[0],o[1]),o[1]]);continue}let a=i[r-1],l=Math.max(1,Math.ceil(Math.hypot(o[0]-a[0],o[1]-a[1])/e));for(let c=1;c<=l;c++){let h=c/l,u=a[0]+(o[0]-a[0])*h,d=a[1]+(o[1]-a[1])*h,p=o[2]!=null&&a[2]!=null?a[2]+(o[2]-a[2])*h+t:o[2]!=null&&c===l?o[2]+t:a[2]!=null&&o[2]==null?Math.max(ie(u,d),a[2]*(1-h))+t:ie(u,d)+t;n.push([u,p,d])}}return n}var Ii=(i,t,e,n={})=>{var s,r,o;return an(Xd(i,(s=n.dy)!=null?s:.2),e,t,{every:(r=n.every)!=null?r:7,xray:(o=n.xray)!=null?o:.22,opacity:n.opacity,dash:n.dash})};function eh(i,t,e){let n=new oe,s=e==="edge"?Te.edge:Te.wall;if(e==="off")return n.add(Ii(i,s,.07,{dash:[.6,.5],every:0,xray:.15,dy:.12})),n;let r=[],o=Xd(i,0,.8);for(let c=0;c<o.length-1;c++){let h=o[c],u=o[c+1],d=Math.min(h[1],u[1])-.2;r.push(h[0],h[1]-.2,h[2],u[0],u[1]-.2,u[2],u[0],u[1]+t,u[2],h[0],h[1]-.2,h[2],u[0],u[1]+t,u[2],h[0],h[1]+t,h[2])}let a=new Me;a.setAttribute("position",new Qt(r,3));let l=new Xt(a,new _e({color:s,transparent:!0,opacity:e==="edge"?.2:.26,side:$e,depthWrite:!1}));l.renderOrder=3,n.add(l),n.add(an(o.map(c=>[c[0],c[1]+t,c[2]]),.06,s,{every:0,xray:.25}));for(let c=0;c<o.length;c+=3)n.add(an([[o[c][0],o[c][1],o[c][2]],[o[c][0],o[c][1]+t,o[c][2]]],.025,s,{every:0,xray:.15,opacity:.7}));return n}function nh(i,t,e,n){let s=[];for(let a=0;a<=48;a++){let l=a/48*Math.PI*2;s.push([i+Math.cos(l)*e,t+Math.sin(l)*e])}let r=n==="warn"?Te.warn:n==="talk"?Te.talk:Te.zone,o=new oe;return o.add(Ii(s,r,n?.09:.07,{dash:[.8,.6],every:0,xray:.12,dy:.14})),o}var ul=new qi;function Ix(i,t,e){let n=new k(i[0],ie(i[0],i[1])+i[2],i[1]),s=new k(t[0],ie(t[0],t[1])+t[2],t[1]),r=null,o=240;for(let c=4;c<o;c++){let h=n.clone().lerp(s,c/o);if(ie(h.x,h.z)>h.y){r=h;break}}if(e){let c=s.clone().sub(n),h=c.length();ul.set(n,c.normalize()),ul.near=.6,ul.far=h-.8;let u=ul.intersectObjects(e,!1)[0];u&&(!r||u.distance<n.distanceTo(r))&&(r=u.point.clone())}let a=new oe,l=new Xt(new Wi(.16,12,8),new _e({color:r?Te.blocked:Te.see}));if(l.position.copy(n),a.add(l),r){a.add(an([n.toArray(),r.toArray()],.09,Te.see,{every:0,xray:.3})),a.add(an([r.toArray(),s.toArray()],.07,Te.blocked,{dash:[.8,.7],every:0,xray:.35}));let c=new Xt(new Gi(.5),new _e({color:Te.blocked}));c.position.copy(r),a.add(c)}else a.add(an([n.toArray(),s.toArray()],.09,Te.see,{every:999,last:!0,xray:.35}));return{g:a,hit:r}}function Px(i,t){let e=new oe,n=new _e({color:Te.cam}),s=new k(...i),r=new k(...t),o=r.clone().sub(s).normalize(),a=new Xt(new sn(1.1,.8,1.5),n);a.position.copy(s),a.lookAt(r),e.add(a);let l=new k(0,1,0),c=o.clone().cross(l).normalize(),h=c.clone().cross(o).normalize(),u=s.clone().addScaledVector(o,9),d=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([p,g])=>u.clone().addScaledVector(c,p*4).addScaledVector(h,g*2.4));for(let p of d)e.add(an([s.toArray(),p.toArray()],.05,Te.cam,{every:0,xray:.3}));return e.add(an([...d,d[0]].map(p=>p.toArray()),.05,Te.cam,{every:0,xray:.3})),e.add(an([s.toArray(),r.toArray()],.05,Te.cam,{dash:[.9,.9],every:0,xray:.25,opacity:.8})),e}function Dx(i,t,e){let n=new oe,s=ie(i,t),r=new fn({color:"#A3825C",roughness:.9});for(let a=0;a<9;a++){let l=a*2.4,c=e*(.4+.6*(a*.37%1)),h=new Xt(new sn(.32,.08,.18),r);h.position.set(i+Math.cos(l)*c,s+.1+a%3*.35,t+Math.sin(l)*c),h.rotation.set(a,a*.7,a*1.3),h.castShadow=!0,n.add(h)}let o=new Xt(new vi(e*.8,e,32),new _e({color:"#F3C76A",transparent:!0,opacity:.8,depthWrite:!1,side:$e}));return o.rotation.x=-Math.PI/2,o.position.set(i,s+.08,t),n.add(o),n}function qd(i,t,e={}){var F;let n=new oe;n.name="show",i.scene.add(n);let s={route:new oe,units:new oe,fires:new oe};n.add(s.route,s.units,s.fires);let r=hl(i,t),o=(F=e.scale)!=null?F:1.1,a=-1,l=-1,c={route:!0,marks:!0,units:!0,labels:!0},h=[],u=[];i.world.root.traverse(C=>{C.isMesh&&!C.isInstancedMesh&&C.name!=="terrain"&&C.parent&&C.parent.name==="main"&&u.push(C)});let d=C=>C.py!=null?C.py:ie(C.p[0],C.p[1]),p=Ci.map(C=>{let P=[];for(let D of C.b)for(let W of Hs[D].path){let z=P[P.length-1];(!z||Math.hypot(z[0]-W[0],z[1]-W[1])>.05)&&P.push(W)}return P}),g=Ii(ld,Te.route,.26,{every:9});s.route.add(g);let _=p.map(C=>{let P=C.length>1?Ii(C,Te.route,.26,{every:8}):new oe;return P.visible=!1,s.route.add(P),P}),m=(C,P,D,W)=>r.add(C,P,D,W),f=Ci.map((C,P)=>{let D=m("bs-phm",`<b>${P+1}</b><span>${(e.phaseNames||[])[P]||""}</span>`,$r(C.at[0],C.at[1],4.2),1);return D.e.dataset.k=P,D.e.addEventListener("click",W=>{W.stopPropagation(),e.onPhase&&e.onPhase(P)}),D}),y=Hs.map((C,P)=>{let D=m("bs-pin",`<span>${Cx(P)}</span>`,[C.p[0],d(C)+4.6,C.p[1]],1);return D.e.dataset.i=P,D.e.title=(e.names||[])[P]||"",D.e.addEventListener("click",W=>{W.stopPropagation(),e.onPick&&e.onPick(P)}),D}),x=[],M=()=>{f.forEach((C,P)=>{C.on=c.marks&&a<0,C.e.classList.toggle("on",P===a)}),y.forEach((C,P)=>{let D=a>=0&&Ci[a].b.includes(P);C.on=c.marks&&D&&P!==l,C.e.classList.toggle("on",P===l),C.e.setAttribute("aria-pressed",P===l)});for(let C of x)C.on=c.labels;i.invalidate()},v=[],S=(C,P)=>Math.atan2(P[0]-C[0],P[2]-C[2]);function w(){for(let C of[...s.units.children])s.units.remove(C),Wd(C);for(let C of x)r.remove(C);x=[],v=[],i.ambient=!1}let A=(C,P,D,W,z,X,Z,tt)=>{let at=al(C),rt=$r(P,D);return tt!=null&&(rt[1]=tt),at.root.position.set(...rt),at.root.rotation.y=S(rt,[W,0,z]),at.root.scale.setScalar(o),at.pose(X||"idle"),at.ring.visible=X!=="dead"&&X!=="knocked",X==="knocked"&&(at.root.position.y+=.5),s.units.add(at.root),["run","walk","slash"].includes(X)&&Z.push(O=>at.pose(X,O+P)),at};function b(C){var W,z;if(w(),C<0)return;let P=Hs[C],D=[];if(P.ghost&&s.units.add(Ii(P.ghost,Te.route,.16,{every:0,opacity:.45,xray:.12})),P.path.length>1){let X=P.path.reduce((tt,at,rt)=>rt?tt+Math.hypot(at[0]-P.path[rt-1][0],at[1]-P.path[rt-1][1]):0,0),Z=Math.max(.07,Math.min(.24,(P.cam?P.cam.r:40)*.009));X>2.5&&s.units.add(Ii(P.path,Te.route,Z,{every:5,xray:.35}))}P.alt&&s.units.add(Ii(P.alt,Te.route,.2,{dash:[.9,.7],every:0,xray:.3})),A("p",P.p[0],P.p[1],P.pl[0],P.pl[1],P.pose||"idle",D,P.py);for(let[X,Z,tt,at,rt,O,$]of P.u||[])A(X,Z,tt,at,rt,O,D,$);for(let[X,Z,tt]of P.ar||[]){let at=$r(X[0],X[1],(W=X[2])!=null?W:1),rt=$r(Z[0],Z[1],(z=Z[2])!=null?z:1),O=["shot","aggro","chase","follow","move","charge","talk","guard"].includes(tt)?[.8,.5]:null;s.units.add(cl(at,rt,Te[tt]||Te.hit,{dash:O,r:tt==="talk"?.09:.13,arc:tt==="talk"?.12:tt==="shot"?.1:.03}))}for(let[X,Z,tt]of P.walls||[])s.units.add(eh(X,Z,tt));for(let[X,Z,tt,at]of P.zone||[])s.units.add(nh(X,Z,tt,at));P.sight&&s.units.add(Ix(P.sight[0],[P.sight[1][0],P.sight[1][1],P.sight[1][2]-ie(P.sight[1][0],P.sight[1][1])],u).g),P.camg&&s.units.add(Px(...P.camg)),P.trig&&s.units.add(Ii(P.trig,Te.trig,.1,{dash:[.6,.4],every:0,xray:.3,dy:.1}));for(let[X,Z,tt,at,rt]of P.fx||[])if(X==="fire"){let O=Jr(at,Z+tt);O.position.set(Z,ie(Z,tt)+(rt!=null?rt:.9),tt),s.units.add(O),D.push(O.userData.tick)}else if(X==="smoke"){let O=ll(at,Z+tt);O.position.set(Z,ie(Z,tt)+(rt!=null?rt:1),tt),s.units.add(O),D.push(O.userData.tick)}else X==="burst"&&s.units.add(Dx(Z,tt,at));for(let[X,Z,tt,at,rt]of P.lab||[])x.push(m("bs-lab k-"+(rt||"note"),(rt==="item"?"<i>\u25C6</i>":rt==="talk"?"<i>\u201C</i>":"")+X,$r(Z,tt,at)));D.push(...h),v=D,i.ambient=!0}i.onFrame((C,P)=>{for(let D of v)D(P)});let E=C=>{let P=t.clientWidth/Math.max(1,t.clientHeight),D=P<1.25?Math.pow(1.25/P,.75):1;return{...C,r:C.r*D}};function I(C,P){i.setView(E(C),P),i.animUntil=performance.now()+1600}function U(C,P={}){a=C,l=-1,b(-1),i.setVariant("geO",!1),g.visible=c.route&&C<0,_.forEach((D,W)=>{D.visible=c.route&&W===C}),P.fly!==!1&&I(C<0?ks.ov:Ci[C].cam,P.instant),M()}function B(C,P={}){if(C<0){U(a,{fly:!1});return}let D=Ci.findIndex(z=>z.b.includes(C));a=D,l=C;let W=Hs[C];i.setVariant("geO",!!W.gv),g.visible=!1,_.forEach(z=>{z.visible=!1}),b(C),s.units.visible=c.units,P.fly!==!1&&I(W.cam||Ci[D].cam,P.instant),M()}function N(C,P){c[C]=P,C==="route"&&(g.visible=P&&a<0,_.forEach((D,W)=>{D.visible=P&&W===a&&l<0})),C==="units"&&(s.units.visible=P),M(),i.invalidate()}return U(-1,{fly:!1}),{setPhase:U,setBeat:B,setLayer:N,overview:C=>U(-1,C||{}),get phase(){return a},get beat(){return l},phases:Ci.length,beats:Hs.length,dispose(){w(),r.lay.remove(),i.scene.remove(n),Wd(n)}}}function ln(){let i=[],t=0,e=0,n=0,s=0,r=(a,l)=>+(ie(a,l)+.02).toFixed(3),o={at(a,l,c,h="idle",u){return t=a,e=l,n=c,s=r(e,n),i.push([t,e,s,n,h,u]),o},to(a,l="idle",c){return t=Math.max(t,a),s=r(e,n),i.push([t,e,s,n,l,c]),o},go(a,l=5,c="run",h){for(let u of a){let d=Math.hypot(u[0]-e,u[1]-n),p=Math.max(1,Math.ceil(d/1.5)),g=e,_=n,m=t;for(let f=1;f<=p;f++)e=g+(u[0]-g)*f/p,n=_+(u[1]-_)*f/p,t=+(m+d/l*f/p).toFixed(3),s=r(e,n),i.push([t,e,s,n,c,f===p?h:void 0])}return o},ay(a,l,c,h,u="run",d){return t=a,e=l,n=h,s=c,i.push([t,e,s,n,u,d]),o},hold(a,l="idle",c){return t=Math.max(t,a),i.push([t,e,s,n,l,c]),o},get t(){return t},keys:i};return o}var Qe=(i,t,e=0)=>ie(i,t)+e,dl=i=>i.flatMap((t,e)=>t[2]==="cut"&&e?[[t[0]-.02,i[e-1][1]],[t[0],t[1]]]:[[t[0],t[1]]]),Vs=[[69.3,-28.4],[67.6,-29.8]];var Yd=[[69,-29.6],[61,-27.2],[48,-23.6],[40.6,-19.6],[38.9,-16.6]],Lx=(()=>{let i=ln().at(0,57.6,-9.1,"idle",{face:[44,-13]}).to(.9,"idle",{face:[44,-13]}).go([[45.2,-11.9]],6).to(3.1,"cast",{face:[42.6,-14.3]}).to(3.9,"cast").to(4,"idle",{face:[30,-7]}).go([[38,-9.8],[30.4,-6.9]],6.4).to(6.6,"cast",{face:[26.6,-6.4]}).to(7.4,"cast").to(7.5,"idle",{face:[40,-9]}).go([[38,-9.4],[50,-9.6],[57.6,-9.1],[70,-9.1],[74.8,-12.4],[74.6,-22]],6.6).to(17,"idle",{face:[72,-30]}),t=ln().at(0,41.8,-5.4,"idle",{face:[40.8,-7.4]}).to(3.6,"idle",{face:[42.6,-14.3]}).go([[43.4,-8.4],[42.2,-12.4]],4.2).to(5.9,"slash",{face:[42.6,-14.3]}).to(6.5,"slash").to(6.6,"idle",{face:[40.8,-7.4]}).go([[43.4,-8.4],[43,-5.2]],4.2).to(10,"idle").go([[43.4,-8.4],[42.4,-12.4]],4.2).to(12.4,"slash",{face:[42.6,-14.3]}).to(17,"slash"),e=ln().at(0,39.2,-5.6,"idle",{face:[40.8,-7.4]}).to(4.2,"idle",{face:[41,-13]}).go([[38.4,-8.6],[40.8,-12.2]],4).to(6.6,"slash",{face:[42.6,-14.3]}).to(17,"slash"),n=ln().at(0,31.8,-10.8,"idle",{face:[26.6,-6.4]}).to(7,"idle").go([[38.6,-6.6]],4.4).to(9.4,"idle",{face:[40.8,-7.4]}).go([[30.8,-8.8]],4).to(11.8,"slash",{face:[26.6,-6.4]}).to(17,"slash"),s=(r,o)=>ln().at(0,...Vs[r],"idle",{face:Vs[1-r]}).to(7.2+o,"idle",{face:[66,-28]}).go([...Yd,[38.9+r*.3,-14.6],[41.2+r*1.6,-12.6+r*.4]],7.2).to(17,"slash",{face:[42.6,-14.3]});return{dur:17,mode:"full",routeR:.07,vars:["fuel2","cellarLit","alarmSmall","marks"],vt:[[11.6,"gsO",!0]],act:{p:{k:"p",keys:i.keys},r1:{k:"v",keys:t.keys},r2:{k:"v2",keys:e.keys},r3:{k:"v",keys:n.keys},g1:{k:"s",keys:s(0,0).keys},g2:{k:"s",keys:s(1,.25).keys},ar:{k:"r",keys:ln().ay(0,57,5.6,-21,"idle",{face:[42.6,-14.3]}).hold(17,"idle",{face:[42.6,-14.3]}).keys}},fx:[[3.4,17,"fire",42.6,0,-14.3,1.5],[6.9,17,"fire",26.6,0,-6.4,1.7],[6,17,"smoke",42.6,Qe(42.6,-14.3,2.4),-14.3,1.4],[9.4,17,"smoke",26.6,Qe(26.6,-6.4,3),-6.4,1.6],[3,3.6,"spark","p",1.2,null,.7],[6.5,7.1,"spark","p",1.2,null,.7]],lab:[[.2,2.2,"\u4ECE\u7A84\u9053\u51FA\u6765\uFF1A\u8349\u5E2D\u5806\u5C31\u5728\u56F4\u6321\u4E0B","p",2.9,null,"note"],[2.6,5.4,"\u7B2C\u4E00\u5904\uFF1A\u8349\u5E2D\u5806\u3002\u4EFB\u52A1\u680F\u66F4\u65B0\u4E3A\u201C\u8BA9\u706B\u518D\u5927\u4E00\u4E9B\uFF081/2\uFF09\u201D",42.6,Qe(42.6,-14.3,3.6),-14.3,"item"],[3.8,7,"\u5C45\u6C11\u4ECE\u4E95\u8FB9\u63D0\u6C34\u6551\u706B","r1",2.9,null,"warn"],[5.8,8.6,"\u7B2C\u4E8C\u5904\uFF1A\u8349\u5E18\u68DA\u3002\u4EFB\u52A1\u5207\u6362\u4E3A\u201C\u8D81\u4E71\u7FFB\u4E0A\u5821\u5899\u8C41\u53E3\u201D",26.6,Qe(26.6,-6.4,4.6),-6.4,"item"],[7.3,10,"\u671B\u697C\u4E0A\u7684\u5F13\u624B\u558A\u4EBA\uFF0C\u504F\u95E8\u7684\u5B88\u536B\u7A7F\u8FC7\u77F3\u573A\u8D76\u6765","g1",2.9,null,"warn"],[11.2,13,"\u5B88\u536B\u6253\u5F00\u5357\u8FB9\u7684\u5C0F\u95E8\uFF0C\u76F4\u63A5\u8FDB\u4E86\u6652\u573A",38.9,3.6,-16,"warn"],[13,17,"\u56DE\u5230\u80CC\u8857\uFF1A\u504F\u95E8\u5DF2\u7ECF\u6CA1\u4EBA","p",2.9,null,"item"]],cam:dl([[0,Zt([62.8,2.3,-9.2],[46,1.2,-12.6])],[2.2,Zt([47,3.4,-3.4],[42.4,1.2,-13.6]),"cut"],[4.6,Zt([39.6,3.6,-11.4],[28.4,1.4,-6.4])],[6.6,Zt([37.6,8.8,6.4],[38.6,1,-11.6])],[7.2,Zt([63.4,5.6,-17.6],[64.4,1.2,-28.6]),"cut"],[9.4,Zt([36.8,4.4,-18.6],[50,1.4,-24.4]),"cut"],[11,Zt([36.8,4.4,-18.6],[48,1.2,-22.6])],[12.2,Zt([35.6,4.8,-21.4],[39.8,.8,-13.6])],[13,Zt([76.8,3.6,-5.4],[74.6,1.4,-22]),"cut"],[17,Zt([76.6,3.4,-8.6],[74.2,1.4,-27])]]),ch:[0,2.2,7.2,13],ctl:[[0,"play"]],sb:{x0:18,x1:82,z0:-34,z1:6,y0:-1,y1:8}}})(),Ux=(()=>{let i=ln().at(0,75.8,-25.2,"idle",{face:[71,-30.8]}).to(2.6,"idle",{face:[71,-30.8]}).go([[76.9,-30.2],[77.5,-35.8],[77.5,-37.3]],3.4,"walk").ay(7.4,77.5,-2.58,-42.2,"walk").ay(7.9,78.6,-2.58,-42.8,"walk").hold(8.1,"cast",{face:[79.8,-43.3]}).hold(8.9,"cast").hold(9.1,"idle",{face:[77.5,-38]}).hold(11.6,"idle").ay(11.9,77.5,-2.58,-42.2,"walk").ay(13,77.5,.02,-37.3,"walk").go([[76.4,-37.1],[74.3,-36.6]],3.2,"walk").to(15,"idle",{face:[72.6,-35.4]}),t=e=>ln().at(0,...Vs[e],"idle",{face:Vs[1-e]}).to(9.5+e*.3,"idle",{face:[77,-36]}).go([[70.6,-28.2],[73.6,-27.9],[76.8,-28],[79.4,-30.4],[80.4,-32.6],[93.6,-33.6],[94,-35]],6.4).to(14.2+e*.3,"idle",{hide:!0}).to(15,"idle");return{dur:15,mode:"full",routeR:.07,vars:["fuel2","cellarLit","alarmSmall","marks"],vt:[[9.4,"geO",!0]],act:{p:{k:"p",keys:i.keys},g1:{k:"s",keys:t(0).keys},g2:{k:"s",keys:t(1).keys}},fx:[[8.6,15,"flame",79.4,-1.9,-43.1,.8],[9.2,15,"smoke",77.6,.6,-41.4,1.1],[8.3,8.9,"spark","p",1.1,null,.6],[9.4,10.8,"shock",80,1.2,-36,5],[10.8,12.2,"shock",80,1.2,-36,5]],lab:[[.2,2.6,"\u5B88\u536B\u95F2\u804A\uFF1A\u6CB9\u574A\u5E95\u4E0B\u5B58\u7740\u6850\u6CB9","g1",2.9,null,"talk"],[1.4,5.2,"\u4EFB\u52A1\u680F\u591A\u4E00\u6761\u53EF\u9009\uFF1A\u627E\u5230\u5730\u7A96\u91CC\u7684\u6850\u6CB9\uFF08\u4E0D\u7ED9\u6807\u8BB0\uFF09","p",2.9,null,"note"],[6.6,9.2,"\u8D70\u5230\u6CB9\u524D\u624D\u51FA\u73B0\u4EA4\u4E92\uFF1A\u70B9\u71C3\u6850\u6CB9",79.2,-.6,-43,"item"],[9.4,12.6,"\u5730\u7A96\u8D77\u706B\u5192\u51FA\u6D53\u70DF\uFF0C\u5B88\u536B\u8D76\u53BB\u6CB9\u574A",86,Qe(86,-32.6,3.2),-32.6,"warn"],[10.2,13,"\u8C03\u6574\u540E\uFF1A\u5B88\u536B\u4ECE\u73A9\u5BB6\u56DE\u53BB\u7684\u8DEF\u4E0A\u7ECF\u8FC7\uFF0C\u8981\u7B49\u4ED6\u4EEC\u8FC7\u53BB",77.5,2.4,-36.6,"note"],[13,15,"\u504F\u95E8\u7A7A\u4E86\uFF1A\u4ECE\u6742\u7269\u5806\u722C\u4E0A\u68DA\u9876",72.6,3.2,-35.2,"item"]],cam:dl([[0,Zt([79,3.2,-20.4],[73.6,1.5,-29.8])],[2.8,Zt([79.6,3.4,-24.6],[77.2,0,-36.4])],[6.2,Zt([76.6,5.4,-32.8],[78.2,-1.8,-42.6])],[9.3,Zt([85.2,6,-26.6],[80,-.4,-36.2]),"cut"],[12.8,Zt([79.6,3.6,-28.6],[72.6,1.6,-36])],[15,Zt([79.2,3.6,-29],[72.2,1.6,-36.2])]]),ch:[0,2.6,9.3,12.8],ctl:[[0,"play"]],sb:{x0:66,x1:98,z0:-46,z1:-18,y0:-3,y1:8}}})(),Fx=(()=>{let i=[30.75,1.35],t=ln().at(0,45.4,-8.6,"idle",{face:[48.6,-6.6]}).to(2.6,"idle",{face:[48.6,-6.6]}).go([[44,-4.6],[38.6,-2.4],[33.6,-1.2],[31.9,.2]],4.2,"walk").to(6.6,"cast",{face:i}).to(7.2,"cast").to(7.3,"idle",{face:[40,-6]}).go([[34.6,-1.6],[43.6,-4.4],[46,-8.6],[52,-9.4],[57.6,-9.1],[70,-9.1],[74.8,-12.6]],6.6).to(15,"idle",{face:[74.6,-26]}),e=(s,r,o,a)=>ln().at(0,s,r,"idle",{face:[o,a]}).to(6.8,"idle",{face:[o,a]}).to(7.2,"idle",{face:i}).to(15,"idle",{face:i}),n=s=>ln().at(0,...Vs[s],"idle",{face:Vs[1-s]}).to(7+s*.3,"idle",{face:[66,-28]}).go([...Yd,[38.9,-14],[37.8,-8.4],[38.2,-2],[33.4+s*1.3,-.6+s*.3]],6.8).to(15,"idle",{face:i});return{dur:15,mode:"full",routeR:.07,vars:["fuel2","cellarLit","alarmSmall","marks"],vt:[[11.6,"gsO",!0]],act:{p:{k:"p",keys:t.keys},r1:{k:"v",keys:e(47.8,-6.6,49.4,-6.8).keys},r2:{k:"v2",keys:e(49.4,-6.8,47.8,-6.6).keys},g1:{k:"s",keys:n(0).keys},g2:{k:"s",keys:n(1).keys}},fx:[[6.6,7.2,"spark",30.75,Qe(30.75,1.35,2.1),1.35,.8],[6.9,8.5,"shock",30.75,Qe(30.75,1.35,1.8),1.35,6],[8.5,10.1,"shock",30.75,Qe(30.75,1.35,1.8),1.35,6],[10.1,11.7,"shock",30.75,Qe(30.75,1.35,1.8),1.35,6]],lab:[[.2,2.6,"\u5C45\u6C11\u95F2\u804A\uFF1A\u4E0A\u6B21\u949F\u4E00\u54CD\uFF0C\u536B\u5175\u90FD\u8DD1\u6765\u4E86","r1",2.9,null,"talk"],[2.8,5.2,"\u8B66\u949F\u5728\u6652\u573A\u5357\u8FB9\u5C0F\u5DF7\u7684\u5899\u89D2",30.75,Qe(30.75,1,3.4),1,"item"],[5.2,7.4,"\u8C03\u6574\u540E\uFF1A\u949F\u6539\u5C0F\u3001\u6302\u5230\u5DF7\u5B50\u5899\u89D2\uFF0C\u4E0D\u518D\u4E00\u8FDB\u6652\u573A\u5C31\u770B\u5230",30.75,Qe(30.75,1,3.6),1,"note"],[6.6,7.4,"\u6572\u54CD\u8B66\u949F",30.75,Qe(30.75,1,2.5),1,"warn"],[7.6,11,"\u504F\u95E8\u7684\u5B88\u536B\u7A7F\u8FC7\u77F3\u573A\uFF0C\u4ECE\u5C0F\u95E8\u8D76\u5F80\u949F\u58F0\u5904","g1",2.9,null,"warn"],[11.4,12.6,"\u5B88\u536B\u6253\u5F00\u5357\u8FB9\u7684\u5C0F\u95E8",38.9,3.6,-16,"warn"],[12.6,15,"\u73A9\u5BB6\u5DF2\u7ECF\u4ECE\u7A84\u9053\u56DE\u5230\u80CC\u8857","p",2.9,null,"item"]],cam:dl([[0,Zt([41.4,2.8,-11.8],[48.6,1.4,-6.4])],[2.6,Zt([47.4,4.2,-6.4],[36.4,1.2,-1.8])],[5.2,Zt([39,3.1,-.6],[30.75,1.7,1]),"cut"],[7.4,Zt([63.4,5.6,-17.6],[64.4,1.2,-28.6]),"cut"],[9.6,Zt([36.8,4.4,-18.6],[50,1.4,-24.4]),"cut"],[11,Zt([36.8,4.4,-18.6],[48,1.2,-22.6])],[12.2,Zt([35.6,4.8,-21.4],[39.8,.8,-13.6])],[12.6,Zt([50.2,3.4,-10.4],[66,1.4,-9.4]),"cut"],[15,Zt([77.4,3.4,-4.6],[74.8,1.4,-18])]]),ch:[0,2.6,7.2],ctl:[[0,"play"]],sb:{x0:24,x1:82,z0:-34,z1:6,y0:-1,y1:8}}})(),Nx=(()=>{let i=ln().at(0,73.9,-28.4,"idle",{face:[73,-35]}).to(.8,"idle").go([[73.8,-33]],5).ay(2.1,73.2,1.6,-35.4,"run",{arc:.5}).ay(2.7,70.4,2.5,-35.6,"run",{arc:.6}).ay(3.3,68.4,2.9,-36.4,"walk").ay(4.9,64.4,4.2,-38.4,"walk").ay(5.6,62.8,4.75,-40.4,"walk").ay(6.2,60.4,4.6,-40.6,"run",{arc:.4}).ay(6.9,56.4,4.6,-41.2,"run").ay(7.5,56.2,4.6,-44.1,"run").ay(8.9,56.2,6.9,-44.4,"walk").ay(9.5,52,6.9,-44.6,"run").ay(9.9,50,6.9,-45.2,"run").ay(10.3,48,7.4,-45.8,"run").ay(10.65,46.2,7.6,-46.6,"run").ay(11.1,43.4,6.9,-47.6,"run",{arc:.3}).ay(11.6,40.4,6.8,-51,"run").ay(12.4,39.6,7.2,-56,"walk").hold(15,"idle",{face:[39.6,-64]}),t=ln().at(0,36,-26,"walk",{face:[30,-24]}).go([[30,-24]],1.4,"walk").to(5.2,"idle",{face:[40,-30]}).go([[38,-28]],1.4,"walk").to(15,"idle",{face:[30,-24]}),e=ln().ay(0,57,5.6,-21,"idle",{face:[50,-11]}).hold(15,"idle",{face:[50,-11]});return{dur:15,mode:"full",routeR:.07,vars:["fuel2","cellarLit","alarmSmall","marks"],act:{p:{k:"p",keys:i.keys},g5:{k:"s",keys:t.keys},r:{k:"r",keys:e.keys}},fx:[[0,15,"smoke",42.6,Qe(42.6,-14.3,3),-14.3,1.6],[0,15,"smoke",26.6,Qe(26.6,-6.4,3.4),-6.4,1.8]],lab:[[.2,2,"\u504F\u95E8\u7684\u5B88\u536B\u8D70\u4E86",70.6,Qe(70.6,-30.4,2.6),-30.4,"item"],[1.2,3.2,"\u6742\u7269\u548C\u6728\u677F\uFF1A\u56F4\u6321\u5728\u8FD9\u91CC\u77EE\u4E86\u4E00\u622A",72.6,3.2,-35.2,"item"],[2.8,5.8,"\u987A\u7740\u5355\u5761\u68DA\u9876\u5F80\u4E0A\u8D70\uFF08\u4E1C\u6A90 2.35m \u2192 \u897F\u6A90 4.75m\uFF09",66,6.6,-37.2,"note"],[3,8.6,"\u77F3\u573A\u91CC\u8FD8\u6709\u5B88\u536B\u5728\u5DE1\u903B","g5",2.9,null,"warn"],[6,9.2,"\u6728\u5E73\u53F0 4.6m\uFF0C\u68AF\u5B50\u4E0A\u811A\u624B\u67B6\u9876\u5C42 6.9m",56.2,8.8,-42.6,"note"],[9.6,11.8,"\u6CBF\u5899\u8DD1\uFF1A\u987A\u7740\u6321\u677F\u4E0A\u7684\u767D\u6F06\u8DD1",47,9.8,-46,"item"],[11.8,15,"\u5230\u8FBE\u8C41\u53E3\uFF1A\u5821\u5185\u7684\u8857\u5DF7\u5C31\u5728\u4E0B\u9762",39.6,9.6,-55,"item"]],cam:dl([[0,Zt([79.6,3.8,-22.4],[72.4,1.8,-34.4])],[2.6,Zt([72.4,7.4,-29.6],[62.4,4,-39.6])],[6,Zt([62.6,9.4,-33.8],[54.4,5.6,-42.6])],[8.6,Zt([60.4,10.2,-36.6],[53.2,6.6,-45.2])],[10,Zt([52.8,9.4,-38.2],[44.4,7,-46.6])],[11.8,Zt([38.4,10.4,-42.6],[39.8,4.6,-58])],[15,Zt([38.2,10.6,-42.4],[39.8,4.6,-58.4])]]),ch:[0,2.4,5.8,9.6,11.6],ctl:[[0,"play"]],sb:{x0:34,x1:80,z0:-60,z1:-16,y0:-1,y1:14}}})(),ts={yard:Lx,cellar:Ux,alarm:Fx,climb:Nx};var ih={fire:"#EC6E2A",throw:"#8B6B4A",atk:"#D2452F",dash:"#C2412E",fix:"#4F7FA6",route:"#D2872C",aggro:"#C2412E",follow:"#3E9C90",shot:"#B5462F"},je=i=>Math.max(0,Math.min(1,i)),Zd=i=>i*i*(3-2*i),Pi=(i,t,e)=>i+(t-i)*e,Jd=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*e},Bx=["fall","fly","held"];function Ox(i){let t=[],e=0;return i.forEach((n,s)=>{let r=n[5]||{};if(r.face!=null)e=typeof r.face=="number"?r.face:Math.atan2(r.face[0]-n[1],r.face[1]-n[3]);else if(s>0){let o=i[s-1],a=n[1]-o[1],l=n[3]-o[3];Math.hypot(a,l)>.05&&(e=Math.atan2(a,l))}t.push(e)}),n=>{let s=i.length,r=0;for(;r<s&&i[r][0]<=n;)r++;let o=!0;for(let p=0;p<r;p++){let g=i[p][5];g&&g.hide&&(o=!1),g&&g.show&&(o=!0)}if(r===0)return{x:i[0][1],y:i[0][2],z:i[0][3],pose:i[0][4],yaw:t[0],vis:o,air:!1};if(r>=s){let p=i[s-1];return{x:p[1],y:p[2],z:p[3],pose:p[4],yaw:t[s-1],vis:o,air:!1}}let a=i[r-1],l=i[r],c=l[5]||{},h=l[0]-a[0],u=h>0?je((n-a[0])/h):1;c.ease&&(u=Zd(u));let d=Pi(a[2],l[2],c.fall?u*u:u);return c.arc&&(d+=4*c.arc*u*(1-u)),{x:Pi(a[1],l[1],u),y:d,z:Pi(a[3],l[3],u),pose:l[4],yaw:Jd(t[r-1],t[r],je((n-a[0])/.2)),vis:o,air:!!(c.arc||c.fall)}}}function kx(i,t){var l,c;let e=0;for(;e<i.length&&i[e][0]<=t;)e++;if(e===0)return i[0][1];if(e>=i.length)return i[i.length-1][1];let[n,s]=i[e-1],[r,o]=i[e],a=Zd(je((t-n)/(r-n)));return{t:s.t.map((h,u)=>Pi(h,o.t[u],a)),r:Math.exp(Pi(Math.log(s.r),Math.log(o.r),a)),ph:Pi(s.ph,o.ph,a),th:Jd(s.th,o.th,a),fov:Pi((l=s.fov)!=null?l:30,(c=o.fov)!=null?c:30,a)}}var Kr=(i,t,e)=>i>=t&&i<e;function $d(i,t,e={}){let n=hl(i,t),s=new oe;s.name="stage",i.scene.add(s);let r=document.createElement("div");r.className="bs-mask",r.innerHTML="<span></span>",t.appendChild(r);let o=null,a=null,l=0,c=!1,h=!0,u="",d="",p=0,g={},_=[],m=[],f=[],y=[],x=[],M=null,v=(F,C=0)=>typeof F=="string"?()=>{let P=g[F];return new k(P.F.root.position.x,P.F.root.position.y+C,P.F.root.position.z)}:null,S=(F,C=0)=>{if(typeof F!="string")return new k(...F);let P=g[F];return new k(P.F.root.position.x,P.F.root.position.y+C,P.F.root.position.z)};function w(){for(let F of[...s.children])s.remove(F),F.traverse(C=>{C.geometry&&C.geometry.dispose()});for(let F of y)n.remove(F.m);for(let F of x)n.remove(F.m);g={},_=[],m=[],f=[],y=[],x=[],M=null,u="",d=""}function A(){var C,P;let F=(C=o.scale)!=null?C:1.2;for(let[D,W]of Object.entries(o.act)){let z=al(W.k);z.root.scale.setScalar(W.k==="k"?1.15:F),s.add(z.root),g[D]={F:z,at:Ox(W.keys)}}if(o.route!==!1&&o.act.p){let D=[[]];o.act.p.keys.forEach((W,z)=>{let X=W[5]||{};X.cut&&D.push([]);let Z=D[D.length-1],tt=Z[Z.length-1];(!tt||Math.hypot(tt[0]-W[1],tt[1]-W[2]-.12,tt[2]-W[3])>.05)&&Z.push([W[1],W[2]+.12,W[3],z&&(X.arc||X.fall)?1:0])}),M=new oe,s.add(M);for(let W of D)W.length>1&&M.add(an(W.map(z=>z.slice(0,3)),(P=o.routeR)!=null?P:.16,ih.route,{every:6,xray:.18,opacity:.5}))}for(let D of o.fx||[]){let[W,z,X,Z,tt,at,rt]=D,O=null;if(X==="fire")O=Jr(rt||1.5,(typeof Z=="number"?Z:3)+(at||0));else if(X==="flame")O=Jr(rt||.8,5,{spot:!1});else if(X==="smoke")O=ll(rt||1.4,(typeof Z=="number"?Z:3)+(at||0));else if(X==="spark")O=Vd(rt||1);else if(X==="shock")O=th(rt||4);else if(X==="wall")O=eh(Z,tt||3,"on"),O.userData.mats=[],O.traverse($=>{$.material&&(O.userData.mats.push([$.material,$.material.opacity]),$.material.transparent=!0)});else if(X==="ring")O=nh(Z,tt,at,!1);else if(X==="burst"){O=new oe;let $=new fn({color:"#A3825C",roughness:.9}),it=[];for(let _t=0;_t<10;_t++){let kt=new Xt(new sn(.34,.1,.2),$);kt.castShadow=!0,O.add(kt),it.push([kt,_t*2.4,(rt||1)*(.5+.6*(_t*.37%1)),1.2+_t%4*.5])}O.userData.pcs=it;let xt=th(rt?rt*2:2);O.add(xt),O.userData.ring=xt}O&&(X==="burst"?O.position.set(Z,ie(Z,at),at):X==="ring"||X==="wall"||typeof Z=="number"&&O.position.set(Z,X==="fire"?ie(Z,at)+.3:tt,at),O.visible=!1,s.add(O),_.push({t0:W,t1:z,kind:X,g:O,ref:typeof Z=="string"?Z:null,dy:typeof Z=="string"?tt:0,fade:D[7]}))}for(let[D,W,z,X,Z,tt]of o.proj||[]){let at=Gd();(Z==="throw"||Z==="shot")&&(at.userData.head.material=new fn({color:Z==="shot"?"#4A3A2C":"#8B6B4A"}),Z==="shot"&&at.userData.head.scale.set(.45,.45,.45),at.userData.tail.forEach(rt=>{rt.visible=!1})),at.visible=!1,s.add(at),m.push({t0:D,t1:W,from:z,to:X,arc:tt!=null?tt:.15,g:at})}for(let[D,W,z,X,Z,tt]of o.arr||[]){let at=Z==="dash"||Z==="fix"?[.9,.5]:null,rt=ih[Z]||ih.atk,O=Array.isArray(z[0])?an(z,.2,rt,{dash:at,every:999,last:!0,xray:.3}):cl(z,X,rt,{dash:at,r:Z==="dash"?.2:.14,arc:at?.04:.12,...tt||{}});O.visible=!1,s.add(O),f.push({t0:D,t1:W,g:O})}for(let D of o.lab||[]){let[W,z,X,Z,tt,at,rt]=D,O=rt==="qte",$=n.add("bs-lab k-"+(rt||"note"),(rt==="item"||O?"<i>\u25C6</i>":"")+X+(O?"<s></s>":""),typeof Z=="string"?v(Z,tt):[Z,tt,at]);y.push({t0:W,t1:z,m:$,q:O})}for(let[D,W,z,X]of o.hp||[]){let Z=n.add("bs-lab k-hp"+(X?" c-"+X:""),`<em>${z}</em><s><u></u></s><b></b>`,v(D,3.1));x.push({m:Z,keys:W,ref:D})}}function b(){if(!o)return;let F=l,C=o.mode||"full";for(let[z,X]of o.modes||[])F>=z&&(C=X);if(C!==d&&(d=C,i.setMode(C)),o.vt&&i.world){let z={};for(let[X,Z,tt]of o.vt)Z in z||(z[Z]=(o.vars||[]).includes(Z)),F>=X&&(z[Z]=tt);for(let X in z)i.world.variants[X]&&i.world.variants[X].visible!==z[X]&&(i.setVariant(X,z[X]),i.shadowDirty&&i.shadowDirty())}for(let z of Object.values(g)){let X=z.at(F),Z=z.F;Z.root.visible=X.vis,Z.root.position.set(X.x,X.y,X.z),Z.root.rotation.y=X.yaw,Z.pose(X.pose||"idle",F),Z.ring.visible=!Bx.includes(X.pose)&&!X.air}for(let z of _){let X=Kr(F,z.t0,z.t1);if(z.g.visible=X,!X)continue;let Z=F-z.t0,tt=z.g;if(z.ref){let at=S(z.ref,z.dy);tt.position.copy(at)}if(z.kind==="fire"||z.kind==="flame"||z.kind==="smoke"||z.kind==="aura"||z.kind==="drip")tt.scale.setScalar(.25+.75*je(Z/.4)),tt.userData.tick&&tt.userData.tick(F);else if(z.kind==="spark"||z.kind==="shock")tt.userData.at(je(Z/(z.t1-z.t0)));else if(z.kind==="wall"){let at=z.fade?1-je((F-(z.t1-z.fade))/z.fade):1;for(let[rt,O]of tt.userData.mats)rt.opacity=O*at}else if(z.kind==="burst"){let at=je(Z/.9);for(let[rt,O,$,it]of tt.userData.pcs)rt.position.set(Math.cos(O)*$*(.2+.8*at),.1+it*4*at*(1-at)+.05,Math.sin(O)*$*(.2+.8*at)),rt.rotation.set(O*at*3,O,O*at*2);tt.userData.ring.userData.at(je(Z/.5)),tt.userData.ring.visible=Z<.5}else if(z.kind==="debris"){let O=je((Z-.6)/.55),$=tt.userData.b,it=tt.userData.fl,xt=tt.userData.ring,_t=Z<.6?7:7*(1-O*O);if($.visible=it.visible=Z>=.6-.05,$.position.y=_t+.16,it.position.y=_t+.3,$.rotation.set(O<1?Z*3.2:.05,.6,O<1?Z*2.1:0),it.userData.tick(F),xt.visible=O<1,O<1){let kt=Z*2.4%1;xt.scale.setScalar(.6+.9*kt),xt.material.opacity=.9*(1-kt)}}}for(let z of m){let X=Kr(F,z.t0,z.t1);if(z.g.visible=X,!X)continue;let Z=it=>typeof it[0]=="string"?S(it[0],it[1]||0):S(it),tt=Z(z.from),at=Z(z.to),rt=tt.distanceTo(at),O=it=>{let xt=tt.clone().lerp(at,it);return xt.y+=4*z.arc*rt*it*(1-it)*.25,xt},$=je((F-z.t0)/(z.t1-z.t0));z.g.userData.head.position.copy(O($)),z.g.userData.tail.forEach((it,xt)=>it.position.copy(O(Math.max(0,$-.035*(xt+1)))))}for(let z of f)z.g.visible=Kr(F,z.t0,z.t1);for(let z of y)z.m.on=Kr(F,z.t0,z.t1),z.q&&z.m.on&&z.m.e.style.setProperty("--q",(1-je((F-z.t0)/(z.t1-z.t0))).toFixed(3));for(let z of x){let X=z.keys,Z=0;for(;Z<X.length&&X[Z][0]<=F;)Z++;let tt=X[Math.max(0,Z-1)],at=X[Math.min(X.length-1,Z)],rt=Z===0?X[0][1]:Z>=X.length?tt[1]:Pi(tt[1],at[1],je((F-tt[0])/Math.max(.01,at[0]-tt[0]))),O=Z===0?X[0][2]:tt[2],$=g[z.ref];z.m.on=!!($&&$.F.root.visible)&&O!=="hide",z.m.e.style.setProperty("--q",rt.toFixed(3)),z.m.e.dataset.st=O||"";let it=(Z===0?X[0][3]:tt[3])||(O==="lock"?"\u9501\u8840":O==="free"?"\u9501\u8840\u89E3\u9664":rt<=.001?"\u5012\u4E0B":""),xt=z.m.e.lastChild;xt.textContent!==it&&(xt.textContent=it)}let P=0,D="",W="";for(let[z,X,Z,tt]of o.mask||[])F>=z-.25&&F<X+.25&&(P=Math.max(P,Math.min(je((F-z+.25)/.25),je((X+.25-F)/.25))),D=Z,W=tt||"");r.dataset.s!==W&&(r.dataset.s=W),r.style.opacity=P.toFixed(3),r.style.display=P>0?"":"none",D&&r.firstChild.textContent!==D&&(r.firstChild.textContent=D),h&&o.cam&&performance.now()>p&&I(F,!0),i.shadowDirty(),e.onT&&e.onT(o.dur?F/o.dur:0)}let E=F=>{let C=t.clientWidth/Math.max(1,t.clientHeight),P=C<1.25?Math.pow(1.25/C,.75):1;return{...F,r:F.r*P}};function I(F,C){let P=E(kx(o.cam,F)),D=P.t[0],W=P.t[1],z=P.t[2];for(let[Z,tt,at]of o.shake||[])if(Kr(F,Z,tt)){let rt=Math.sin(Math.PI*(F-Z)/(tt-Z))*at;D+=Math.sin(F*53)*rt,W+=Math.sin(F*41+1)*rt*.6,z+=Math.cos(F*47)*rt}let X={th:P.th,ph:P.ph,r:P.r,fov:P.fov,t:new k(D,W,z)};C?i.controls.set(X,!0):i.controls.flyTo(X,.9)}i.onFrame(F=>{!c||!o||(l=Math.min(o.dur,l+F),b(),l>=o.dur&&(B(),e.onEnd&&e.onEnd()))});function U(){o&&(l>=o.dur-.001&&(l=0),c=!0,i.animating=!0,e.onPlay&&e.onPlay(!0))}function B(){c=!1,i.animating=!1,i.invalidate(),e.onPlay&&e.onPlay(!1)}i.onUserStart(()=>{h&&(h=!1,e.onFollow&&e.onFollow(!1))});function N(F,C={}){if(ts[F]){if(B(),w(),a=F,o=ts[F],l=0,h=!0,e.onFollow&&e.onFollow(!0),o.sb&&i.setShadowBox(o.sb),o.vars&&i.world&&i.world.variants)for(let P of Object.keys(i.world.variants))i.setVariant(P,o.vars.includes(P));A(),i.setMode(o.mode||"full"),C.fly&&o.cam?(I(0,!1),p=performance.now()+950,i.animUntil=p+150):p=0,b()}}return{load:N,play:U,pause:B,isPlaying:()=>c,setT(F){o&&(l=je(F)*o.dur,p=0,b(),i.invalidate())},get t(){return o?l/o.dur:0},get id(){return a},get follow(){return h},setFollow(F){h=F,F&&o&&(I(l,!1),p=performance.now()+950,i.animUntil=p+150),e.onFollow&&e.onFollow(F)},resetView(){this.setFollow(!0)},info:F=>{let C=ts[F||a];return C?{dur:C.dur,ch:C.ch,ctl:C.ctl}:null},scenes:Object.keys(ts),dispose(){B(),w(),r.remove(),n.lay.remove(),i.scene.remove(s)}}}return cf(zx);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
