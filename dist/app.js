var Nd=0,au=1,Fd=2;var lu=1,Od=2,Ui=3,$i=0,sn=1,Ni=2,ji=0,Yr=1,cu=2,hu=3,uu=4,Bd=5,Mr=100,zd=101,kd=102,Vd=103,Hd=104,Gd=200,Wd=201,Xd=202,Yd=203,ul=204,fl=205,qd=206,Zd=207,$d=208,Jd=209,Kd=210,Qd=211,jd=212,tp=213,ep=214,Fl=0,Ol=1,Bl=2,qr=3,zl=4,kl=5,Vl=6,Hl=7,Gl=0,np=1,ip=2,tr=0,rp=1,sp=2,op=3,Wl=4,ap=5,lp=6,cp=7;var fu=300,Qr=301,jr=302,Xl=303,Yl=304,sa=306,dl=1e3,yr=1001,pl=1002,Fn=1003,hp=1004;var oa=1005;var Mi=1006,ql=1007;var Er=1008;var bi=1009,du=1010,pu=1011,Zs=1012,Zl=1013,Ar=1014,Ti=1015,$s=1016,$l=1017,Jl=1018,Js=1020,mu=35902,gu=35899,_u=1021,xu=1022,li=1023,Vs=1026,Ks=1027,Kl=1028,Ql=1029,vu=1030,jl=1031;var tc=1033,aa=33776,la=33777,ca=33778,ha=33779,ec=35840,nc=35841,ic=35842,rc=35843,sc=36196,oc=37492,ac=37496,lc=37808,cc=37809,hc=37810,uc=37811,fc=37812,dc=37813,pc=37814,mc=37815,gc=37816,_c=37817,xc=37818,vc=37819,yc=37820,Mc=37821,Sc=36492,bc=36494,Tc=36495,wc=36283,Ec=36284,Ac=36285,Cc=36286;var No=2300,ml=2301,hl=2302,Qh=2400,jh=2401,tu=2402;var up=3200,fp=3201;var Rc=0,dp=1,er="",Tn="srgb",Zr="srgb-linear",Fo="linear",xe="srgb";var Xr=7680;var eu=519,pp=512,mp=513,gp=514,yu=515,_p=516,xp=517,vp=518,yp=519,nu=35044;var Mu="300 es",yi=2e3,Oo=2001;var Ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ah=Math.PI/180,gl=180/Math.PI;function ua(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function oe(r,t,e){return Math.max(t,Math.min(e,r))}function o_(r,t){return(r%t+t)%t}function Ch(r,t,e){return(1-e)*r+e*t}function Ao(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Un(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ot=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ki=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-a,p=l*d+c*f+h*_+u*g,M=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){let w=Math.sqrt(T),E=Math.atan2(w,p*M);m=Math.sin(m*E)/w,a=Math.sin(a*E)/w}let x=a*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+_*x,u=u*m+g*x,m===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ud.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ud.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rh.copy(this).projectOnVector(t),this.sub(Rh)}reflect(t){return this.sub(Rh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rh=new V,ud=new Ki,Zt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],T=i[4],x=i[7],w=i[2],E=i[5],A=i[8];return s[0]=o*g+a*M+l*w,s[3]=o*m+a*T+l*E,s[6]=o*p+a*x+l*A,s[1]=c*g+h*M+u*w,s[4]=c*m+h*T+u*E,s[7]=c*p+h*x+u*A,s[2]=d*g+f*M+_*w,s[5]=d*m+f*T+_*E,s[8]=d*p+f*x+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ph.makeScale(t,e)),this}rotate(t){return this.premultiply(Ph.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ph.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ph=new Zt;function Su(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Bo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mp(){let r=Bo("canvas");return r.style.display="block",r}var fd={};function Hs(r){r in fd||(fd[r]=!0,console.warn(r))}function Sp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var dd=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pd=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a_(){let r={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xe&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===er?Fo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zr]:{primaries:t,whitePoint:n,transfer:Fo,toXYZ:dd,fromXYZ:pd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:dd,fromXYZ:pd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),r}var he=a_();function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var As,_l=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=Bo("canvas")),As.width=t.width,As.height=t.height;let i=As.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Bo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zi(e[n]/255)*255):e[n]=Zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},l_=0,Gs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=ua(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ih(i[o].image)):s.push(Ih(i[o]))}else s=Ih(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ih(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_l.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var c_=0,Dh=new V,On=class r extends Ji{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=yr,i=yr,s=Mi,o=Er,a=li,l=bi,c=r.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=ua(),this.name="",this.source=new Gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dl:t.x=t.x-Math.floor(t.x);break;case yr:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dl:t.y=t.y-Math.floor(t.y);break;case yr:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=fu;On.DEFAULT_ANISOTROPY=1;var _e=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,x=(f+1)/2,w=(p+1)/2,E=(h+d)/4,A=(u+g)/4,P=(_+m)/4;return T>x&&T>w?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=E/n,s=A/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=P/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=A/s,i=P/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xl=class extends Ji{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let i={width:t,height:e,depth:n.depth},s=new On(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Gs(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},zo=class extends On{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var vl=class extends On{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_i):_i.fromBufferAttribute(s,o),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(t.matrixWorld),this.union(Xa)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),Ya.subVectors(this.max,Co),Cs.subVectors(t.a,Co),Rs.subVectors(t.b,Co),Ps.subVectors(t.c,Co),dr.subVectors(Rs,Cs),pr.subVectors(Ps,Rs),Vr.subVectors(Cs,Ps);let e=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-Vr.z,Vr.y,dr.z,0,-dr.x,pr.z,0,-pr.x,Vr.z,0,-Vr.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-Vr.y,Vr.x,0];return!Lh(e,Cs,Rs,Ps,Ya)||(e=[1,0,0,0,1,0,0,0,1],!Lh(e,Cs,Rs,Ps,Ya))?!1:(qa.crossVectors(dr,pr),e=[qa.x,qa.y,qa.z],Lh(e,Cs,Rs,Ps,Ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gi=[new V,new V,new V,new V,new V,new V,new V,new V],_i=new V,Xa=new Ii,Cs=new V,Rs=new V,Ps=new V,dr=new V,pr=new V,Vr=new V,Co=new V,Ya=new V,qa=new V,Hr=new V;function Lh(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Hr.fromArray(r,s);let a=i.x*Math.abs(Hr.x)+i.y*Math.abs(Hr.y)+i.z*Math.abs(Hr.z),l=t.dot(Hr),c=e.dot(Hr),h=n.dot(Hr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var h_=new Ii,Ro=new V,Uh=new V,Sr=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):h_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);let e=Ro.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ro,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(Uh)),this.expandByPoint(Ro.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wi=new V,Nh=new V,Za=new V,mr=new V,Fh=new V,$a=new V,Oh=new V,ko=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Nh.copy(t).add(e).multiplyScalar(.5),Za.copy(e).sub(t).normalize(),mr.copy(this.origin).sub(Nh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Za),a=mr.dot(this.direction),l=-mr.dot(Za),c=mr.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=s*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Nh).addScaledVector(Za,d),f}intersectSphere(t,e){Wi.subVectors(t.center,this.origin);let n=Wi.dot(this.direction),i=Wi.dot(Wi)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,n,i,s){Fh.subVectors(e,t),$a.subVectors(n,t),Oh.crossVectors(Fh,$a);let o=this.direction.dot(Oh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mr.subVectors(this.origin,t);let l=a*this.direction.dot($a.crossVectors(mr,$a));if(l<0)return null;let c=a*this.direction.dot(Fh.cross(mr));if(c<0||l+c>o)return null;let h=-a*mr.dot(Oh);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,_,g,m)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Is.setFromMatrixColumn(t,0).length(),s=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(u_,t,f_)}lookAt(t,e,n){let i=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),gr.crossVectors(n,Yn),gr.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),gr.crossVectors(n,Yn)),gr.normalize(),Ja.crossVectors(Yn,gr),i[0]=gr.x,i[4]=Ja.x,i[8]=Yn.x,i[1]=gr.y,i[5]=Ja.y,i[9]=Yn.y,i[2]=gr.z,i[6]=Ja.z,i[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],T=n[7],x=n[11],w=n[15],E=i[0],A=i[4],P=i[8],v=i[12],y=i[1],D=i[5],U=i[9],G=i[13],z=i[2],X=i[6],H=i[10],W=i[14],k=i[3],nt=i[7],I=i[11],at=i[15];return s[0]=o*E+a*y+l*z+c*k,s[4]=o*A+a*D+l*X+c*nt,s[8]=o*P+a*U+l*H+c*I,s[12]=o*v+a*G+l*W+c*at,s[1]=h*E+u*y+d*z+f*k,s[5]=h*A+u*D+d*X+f*nt,s[9]=h*P+u*U+d*H+f*I,s[13]=h*v+u*G+d*W+f*at,s[2]=_*E+g*y+m*z+p*k,s[6]=_*A+g*D+m*X+p*nt,s[10]=_*P+g*U+m*H+p*I,s[14]=_*v+g*G+m*W+p*at,s[3]=M*E+T*y+x*z+w*k,s[7]=M*A+T*D+x*X+w*nt,s[11]=M*P+T*U+x*H+w*I,s[15]=M*v+T*G+x*W+w*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+g*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=u*m*c-g*d*c+g*l*f-a*m*f-u*l*p+a*d*p,T=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,x=h*g*c-_*u*c+_*a*f-o*g*f-h*a*p+o*u*p,w=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,E=e*M+n*T+i*x+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=M*A,t[1]=(g*d*s-u*m*s-g*i*f+n*m*f+u*i*p-n*d*p)*A,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*A,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*A,t[4]=T*A,t[5]=(h*m*s-_*d*s+_*i*f-e*m*f-h*i*p+e*d*p)*A,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*A,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*A,t[8]=x*A,t[9]=(_*u*s-h*g*s-_*n*f+e*g*f+h*n*p-e*u*p)*A,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*A,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*A,t[12]=w*A,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*A,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,_=s*u,g=o*h,m=o*u,p=a*u,M=l*c,T=l*h,x=l*u,w=n.x,E=n.y,A=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+x)*w,i[2]=(_-T)*w,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+p))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(_+T)*A,i[9]=(m-M)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Is.set(i[0],i[1],i[2]).length(),o=Is.set(i[4],i[5],i[6]).length(),a=Is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],xi.copy(this);let c=1/s,h=1/o,u=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=h,xi.elements[5]*=h,xi.elements[6]*=h,xi.elements[8]*=u,xi.elements[9]*=u,xi.elements[10]*=u,e.setFromRotationMatrix(xi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=yi,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),_,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===yi)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Oo)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=yi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),_,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===yi)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Oo)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Is=new V,xi=new be,u_=new V(0,0,0),f_=new V(1,1,1),gr=new V,Ja=new V,Yn=new V,md=new be,gd=new Ki,ai=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return md.makeRotationFromQuaternion(t),this.setFromRotationMatrix(md,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gd.setFromEuler(this),this.setFromQuaternion(gd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},d_=0,_d=new V,Ds=new Ki,Xi=new be,Ka=new V,Po=new V,p_=new V,m_=new Ki,xd=new V(1,0,0),vd=new V(0,1,0),yd=new V(0,0,1),Md={type:"added"},g_={type:"removed"},Ls={type:"childadded",child:null},Bh={type:"childremoved",child:null},rn=class r extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new V,e=new ai,n=new Ki,i=new V(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new Zt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(xd,t)}rotateY(t){return this.rotateOnAxis(vd,t)}rotateZ(t){return this.rotateOnAxis(yd,t)}translateOnAxis(t,e){return _d.copy(t).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xd,t)}translateY(t){return this.translateOnAxis(vd,t)}translateZ(t){return this.translateOnAxis(yd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ka.copy(t):Ka.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Po,Ka,this.up):Xi.lookAt(Ka,Po,this.up),this.quaternion.setFromRotationMatrix(Xi),i&&(Xi.extractRotation(i.matrixWorld),Ds.setFromRotationMatrix(Xi),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Md),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(g_),Bh.child=t,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Md),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,p_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,m_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};rn.DEFAULT_UP=new V(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vi=new V,Yi=new V,zh=new V,qi=new V,Us=new V,Ns=new V,Sd=new V,kh=new V,Vh=new V,Hh=new V,Gh=new _e,Wh=new _e,Xh=new _e,vr=class r{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vi.subVectors(t,e),i.cross(vi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){vi.subVectors(i,e),Yi.subVectors(n,e),zh.subVectors(t,e);let o=vi.dot(vi),a=vi.dot(Yi),l=vi.dot(zh),c=Yi.dot(Yi),h=Yi.dot(zh),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Gh.setScalar(0),Wh.setScalar(0),Xh.setScalar(0),Gh.fromBufferAttribute(t,e),Wh.fromBufferAttribute(t,n),Xh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Gh,s.x),o.addScaledVector(Wh,s.y),o.addScaledVector(Xh,s.z),o}static isFrontFacing(t,e,n,i){return vi.subVectors(n,e),Yi.subVectors(t,e),vi.cross(Yi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),vi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Us.subVectors(i,n),Ns.subVectors(s,n),kh.subVectors(t,n);let l=Us.dot(kh),c=Ns.dot(kh);if(l<=0&&c<=0)return e.copy(n);Vh.subVectors(t,i);let h=Us.dot(Vh),u=Ns.dot(Vh);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Us,o);Hh.subVectors(t,s);let f=Us.dot(Hh),_=Ns.dot(Hh);if(_>=0&&f<=_)return e.copy(s);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Ns,a);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Sd.subVectors(s,i),a=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(Sd,a);let p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Yh(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=o_(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Yh(o,s,t+1/3),this.g=Yh(o,s,t),this.b=Yh(o,s,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){let n=bp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return he.workingToColorSpace(fn.copy(this),t),Math.round(oe(fn.r*255,0,255))*65536+Math.round(oe(fn.g*255,0,255))*256+Math.round(oe(fn.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(fn.copy(this),e);let n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Tn){he.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,i=fn.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_r),this.setHSL(_r.h+t,_r.s+e,_r.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_r),t.getHSL(Qa);let n=Ch(_r.h,Qa.h,e),i=Ch(_r.s,Qa.s,e),s=Ch(_r.l,Qa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new ae;ae.NAMES=bp;var __=0,Qi=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=Yr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=fl,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ul&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==Mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Vo=class extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ge=new V,ja=new Ot,x_=0,Nn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ja.fromBufferAttribute(this,e),ja.applyMatrix3(t),this.setXY(e,ja.x,ja.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ao(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ao(e,this.array)),e}setX(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ao(e,this.array)),e}setY(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ao(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ao(e,this.array)),e}setW(t,e){return this.normalized&&(e=Un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),n=Un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),n=Un(n,this.array),i=Un(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Un(e,this.array),n=Un(n,this.array),i=Un(i,this.array),s=Un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nu&&(t.usage=this.usage),t}};var Ho=class extends Nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Go=class extends Nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var dn=class extends Nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},v_=0,oi=new be,qh=new rn,Fs=new V,qn=new Ii,Io=new Ii,je=new V,Di=class r extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?Go:Ho)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,n){return oi.makeTranslation(t,e,n),this.applyMatrix4(oi),this}scale(t,e,n){return oi.makeScale(t,e,n),this.applyMatrix4(oi),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(qn.min,Io.min),qn.expandByPoint(je),je.addVectors(qn.max,Io.max),qn.expandByPoint(je)):(qn.expandByPoint(Io.min),qn.expandByPoint(Io.max))}qn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(t,c),je.add(Fs)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new V,l[P]=new V;let c=new V,h=new V,u=new V,d=new Ot,f=new Ot,_=new Ot,g=new V,m=new V;function p(P,v,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,v),_.fromBufferAttribute(s,y),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(D),a[P].add(g),a[v].add(g),a[y].add(g),l[P].add(m),l[v].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,v=M.length;P<v;++P){let y=M[P],D=y.start,U=y.count;for(let G=D,z=D+U;G<z;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let T=new V,x=new V,w=new V,E=new V;function A(P){w.fromBufferAttribute(i,P),E.copy(w);let v=a[P];T.copy(v),T.sub(w.multiplyScalar(w.dot(v))).normalize(),x.crossVectors(E,v);let D=x.dot(l[P])<0?-1:1;o.setXYZW(P,T.x,T.y,T.z,D)}for(let P=0,v=M.length;P<v;++P){let y=M[P],D=y.start,U=y.count;for(let G=D,z=D+U;G<z;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new V,s=new V,o=new V,a=new V,l=new V,c=new V,h=new V,u=new V;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new Nn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bd=new be,Gr=new ko,tl=new Sr,Td=new V,el=new V,nl=new V,il=new V,Zh=new V,rl=new V,wd=new V,sl=new V,Re=class extends rn{constructor(t=new Di,e=new Vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Zh.fromBufferAttribute(u,t),o?rl.addScaledVector(Zh,h):rl.addScaledVector(Zh.sub(e),h))}e.add(rl)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(s),Gr.copy(t.ray).recast(t.near),!(tl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(tl,Td)===null||Gr.origin.distanceToSquared(Td)>(t.far-t.near)**2))&&(bd.copy(s).invert(),Gr.copy(t.ray).applyMatrix4(bd),!(n.boundingBox!==null&&Gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gr)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,w=T;x<w;x+=3){let E=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);i=ol(this,p,t,n,c,h,u,E,A,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let M=a.getX(m),T=a.getX(m+1),x=a.getX(m+2);i=ol(this,o,t,n,c,h,u,M,T,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,w=T;x<w;x+=3){let E=x,A=x+1,P=x+2;i=ol(this,p,t,n,c,h,u,E,A,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let M=m,T=m+1,x=m+2;i=ol(this,o,t,n,c,h,u,M,T,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function y_(r,t,e,n,i,s,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===$i,a),l===null)return null;sl.copy(a),sl.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(sl);return c<e.near||c>e.far?null:{distance:c,point:sl.clone(),object:r}}function ol(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,el),r.getVertexPosition(l,nl),r.getVertexPosition(c,il);let h=y_(r,t,e,n,el,nl,il,wd);if(h){let u=new V;vr.getBarycoord(wd,el,nl,il,u),i&&(h.uv=vr.getInterpolatedAttribute(i,a,l,c,u,new Ot)),s&&(h.uv1=vr.getInterpolatedAttribute(s,a,l,c,u,new Ot)),o&&(h.normal=vr.getInterpolatedAttribute(o,a,l,c,u,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new V,materialIndex:0};vr.getNormal(el,nl,il,d.normal),h.face=d,h.barycoord=u}return h}var br=class r extends Di{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(u,2));function _(g,m,p,M,T,x,w,E,A,P,v){let y=x/A,D=w/P,U=x/2,G=w/2,z=E/2,X=A+1,H=P+1,W=0,k=0,nt=new V;for(let I=0;I<H;I++){let at=I*D-G;for(let Nt=0;Nt<X;Nt++){let ne=Nt*y-U;nt[g]=ne*M,nt[m]=at*T,nt[p]=z,c.push(nt.x,nt.y,nt.z),nt[g]=0,nt[m]=0,nt[p]=E>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Nt/A),u.push(1-I/P),W+=1}}for(let I=0;I<P;I++)for(let at=0;at<A;at++){let Nt=d+at+X*I,ne=d+at+X*(I+1),Wt=d+(at+1)+X*(I+1),Gt=d+(at+1)+X*I;l.push(Nt,ne,Gt),l.push(ne,Wt,Gt),k+=6}a.addGroup(f,k,v),f+=k,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ts(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pn(r){let t={};for(let e=0;e<r.length;e++){let n=ts(r[e]);for(let i in n)t[i]=n[i]}return t}function M_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function bu(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Tp={clone:ts,merge:pn},S_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S_,this.fragmentShader=b_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=M_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Wo=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xr=new V,Ed=new Ot,Ad=new Ot,nn=class extends Wo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=gl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ah*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(Ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xr.x,xr.y).multiplyScalar(-t/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-t/xr.z)}getViewSize(t,e){return this.getViewBounds(t,Ed,Ad),e.subVectors(Ad,Ed)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ah*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Os=-90,Bs=1,yl=class extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new nn(Os,Bs,t,e);i.layers=this.layers,this.add(i);let s=new nn(Os,Bs,t,e);s.layers=this.layers,this.add(s);let o=new nn(Os,Bs,t,e);o.layers=this.layers,this.add(o);let a=new nn(Os,Bs,t,e);a.layers=this.layers,this.add(a);let l=new nn(Os,Bs,t,e);l.layers=this.layers,this.add(l);let c=new nn(Os,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Xo=class extends On{constructor(t=[],e=Qr,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ml=class extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new br(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:ji});s.uniforms.tEquirect.value=e;let o=new Re(i,s),a=e.minFilter;return e.minFilter===Er&&(e.minFilter=Mi),new yl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Ri=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},T_={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var $r=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Sl=class extends On{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Fn,h=Fn,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yo=class extends Nn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},zs=new be,Cd=new be,al=[],Rd=new Ii,w_=new be,Do=new Re,Lo=new Sr,qo=class extends Re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,w_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),Rd.copy(t.boundingBox).applyMatrix4(zs),this.boundingBox.union(Rd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zs),Lo.copy(t.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Lo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Do.geometry=this.geometry,Do.material=this.material,Do.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lo.copy(this.boundingSphere),Lo.applyMatrix4(n),t.ray.intersectsSphere(Lo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,zs),Cd.multiplyMatrices(n,zs),Do.matrixWorld=Cd,Do.raycast(t,al);for(let o=0,a=al.length;o<a;o++){let l=al[o];l.instanceId=s,l.object=this,e.push(l)}al.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sl(new Float32Array(i*this.count),i,this.count,Kl,Ti));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$h=new V,E_=new V,A_=new Zt,Ci=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=$h.subVectors(n,e).cross(E_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($h),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||A_.getNormalMatrix(t),i=this.coplanarPoint($h).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wr=new Sr,C_=new Ot(.5,.5),ll=new V,Ys=class{constructor(t=new Ci,e=new Ci,n=new Ci,i=new Ci,s=new Ci,o=new Ci){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],M=s[12],T=s[13],x=s[14],w=s[15];if(i[0].setComponents(c-o,f-h,p-_,w-M).normalize(),i[1].setComponents(c+o,f+h,p+_,w+M).normalize(),i[2].setComponents(c+a,f+u,p+g,w+T).normalize(),i[3].setComponents(c-a,f-u,p-g,w-T).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,p-m,w-x).normalize();else if(i[4].setComponents(c-l,f-d,p-m,w-x).normalize(),e===yi)i[5].setComponents(c+l,f+d,p+m,w+x).normalize();else if(e===Oo)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){Wr.center.set(0,0,0);let e=C_.distanceTo(t.center);return Wr.radius=.7071067811865476+e,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ll.x=i.normal.x>0?t.max.x:t.min.x,ll.y=i.normal.y>0?t.max.y:t.min.y,ll.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ll)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zo=class extends On{constructor(t,e,n=Ar,i,s,o,a=Fn,l=Fn,c,h=Vs,u=1){if(h!==Vs&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$o=class extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Jo=class r extends Di{constructor(t=[new Ot(0,-.5),new Ot(.5,0),new Ot(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=oe(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new V,d=new Ot,f=new V,_=new V,g=new V,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(_)}for(let M=0;M<=e;M++){let T=n+M*h*i,x=Math.sin(T),w=Math.cos(T);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*x,u.y=t[E].y,u.z=t[E].x*w,o.push(u.x,u.y,u.z),d.x=M/e,d.y=E/(t.length-1),a.push(d.x,d.y);let A=l[3*E+0]*x,P=l[3*E+1],v=l[3*E+0]*w;c.push(A,P,v)}}for(let M=0;M<e;M++)for(let T=0;T<t.length-1;T++){let x=T+M*t.length,w=x,E=x+t.length,A=x+t.length+1,P=x+1;s.push(w,E,P),s.push(A,P,E)}this.setIndex(s),this.setAttribute("position",new dn(o,3)),this.setAttribute("uv",new dn(a,2)),this.setAttribute("normal",new dn(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var Ko=class r extends Di{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let T=0;T<c;T++){let x=T*u-s;_.push(x,-M,0),g.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let T=M+c*p,x=M+c*(p+1),w=M+1+c*(p+1),E=M+1+c*p;f.push(T,x,E),f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(g,3)),this.setAttribute("uv",new dn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qo=class r extends Di{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new V,d=new V,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){let M=[],T=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let w=0;w<=e;w++){let E=w/e;u.x=-t*Math.cos(i+E*s)*Math.sin(o+T*a),u.y=t*Math.cos(o+T*a),u.z=t*Math.sin(i+E*s)*Math.sin(o+T*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+x,1-T),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let T=h[p][M+1],x=h[p][M],w=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&f.push(T,x,E),(p!==n-1||l<Math.PI)&&f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(g,3)),this.setAttribute("uv",new dn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Li=class extends Qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var jo=class extends Qi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bl=class extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tl=class extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function cl(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function R_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Jr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wl=class extends Jr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case jh:s=t,a=2*e-n;break;case tu:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jh:o=t,l=2*n-e;break;case tu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,M=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,T=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let w=0;w!==a;++w)s[w]=p*o[h+w]+M*o[c+w]+T*o[l+w]+x*o[u+w];return s}},El=class extends Jr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},Al=class extends Jr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cl(e,this.TimeBufferType),this.values=cl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cl(t.times,Array),values:cl(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new El(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case No:e=this.InterpolantFactoryMethodDiscrete;break;case ml:e=this.InterpolantFactoryMethodLinear;break;case hl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return hl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&R_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===hl,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=ml;var Tr=class extends Zn{constructor(t,e,n){super(t,e,n)}};Tr.prototype.ValueTypeName="bool";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=No;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};Cl.prototype.ValueTypeName="color";var Rl=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};Rl.prototype.ValueTypeName="number";var Pl=class extends Jr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ki.slerpFlat(s,0,o,c-a,o,c,l);return s}},ta=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Pl(this.times,this.values,this.getValueSize(),t)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var wr=class extends Zn{constructor(t,e,n){super(t,e,n)}};wr.prototype.ValueTypeName="string";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=No;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};Il.prototype.ValueTypeName="vector";var Dl=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},wp=new Dl,Ll=class{constructor(t){this.manager=t!==void 0?t:wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Jh=new be,Pd=new V,Id=new V,Ul=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Pd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pd),Id.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Id),e.updateMatrixWorld(),Jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Dd=new be,Uo=new V,Kh=new V,iu=class extends Ul{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Uo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Uo),Kh.copy(n.position),Kh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Kh),n.updateMatrixWorld(),i.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd,n.coordinateSystem,n.reversedDepth)}},ea=class extends qs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new iu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},na=class extends Wo{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ru=class extends Ul{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new ru}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ia=class extends qs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Nl=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Tu="\\[\\]\\.:\\/",P_=new RegExp("["+Tu+"]","g"),wu="[^"+Tu+"]",I_="[^"+Tu.replace("\\.","")+"]",D_=/((?:WC+[\/:])*)/.source.replace("WC",wu),L_=/(WCOD+)?/.source.replace("WCOD",I_),U_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wu),N_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wu),F_=new RegExp("^"+D_+L_+U_+N_+"$"),O_=["material","materials","bones","map"],su=class{constructor(t,e,n){let i=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(P_,"")}static parseTrackName(t){let e=F_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);O_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=su;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pb=new Float32Array(1);var Ld=new be,ra=class{constructor(t,e,n=0,i=1/0){this.ray=new ko(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ws,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ld.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ld),this}intersectObject(t,e=!0,n=[]){return ou(t,this,n,e),n.sort(Ud),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ou(t[i],this,n,e);return n.sort(Ud),n}};function Ud(r,t){return r.distance-t.distance}function ou(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)ou(s[o],t,e,!0)}}function Eu(r,t,e,n){let i=B_(n);switch(e){case _u:return r*t;case Kl:return r*t/i.components*i.byteLength;case Ql:return r*t/i.components*i.byteLength;case vu:return r*t*2/i.components*i.byteLength;case jl:return r*t*2/i.components*i.byteLength;case xu:return r*t*3/i.components*i.byteLength;case li:return r*t*4/i.components*i.byteLength;case tc:return r*t*4/i.components*i.byteLength;case aa:case la:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ca:case ha:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nc:case rc:return Math.max(r,16)*Math.max(t,8)/4;case ec:case ic:return Math.max(r,8)*Math.max(t,8)/2;case sc:case oc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ac:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case uc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case dc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case pc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case mc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case gc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case _c:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Sc:case bc:case Tc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case wc:case Ec:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ac:case Cc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B_(r){switch(r){case bi:case du:return{byteLength:1,components:1};case Zs:case pu:case $s:return{byteLength:2,components:1};case $l:case Jl:return{byteLength:2,components:4};case Ar:case Zl:case Ti:return{byteLength:4,components:1};case mu:case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function $p(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function k_(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var V_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
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
#endif`,G_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
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
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$_=`#ifdef USE_BATCHING
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
#endif`,J_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,h0=`#define PI 3.141592653589793
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
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f0=`vec3 transformedNormal = objectNormal;
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
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
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
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
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
#endif`,z0=`struct PhysicalMaterial {
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
}`,k0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`#ifdef USE_MORPHTARGETS
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
#endif`,ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
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
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wx=`float getShadowMask() {
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
}`,Ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ax=`#ifdef USE_SKINNING
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
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`#include <common>
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
}`,qx=`#if DEPTH_PACKING == 3200
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
}`,Zx=`#define DISTANCE
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
}`,$x=`#define DISTANCE
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
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
}`,jx=`uniform vec3 diffuse;
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
}`,tv=`#include <common>
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
}`,ev=`uniform vec3 diffuse;
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
}`,nv=`#define LAMBERT
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
}`,iv=`#define LAMBERT
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
}`,rv=`#define MATCAP
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
}`,sv=`#define MATCAP
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
}`,ov=`#define NORMAL
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
}`,av=`#define NORMAL
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
}`,lv=`#define PHONG
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
}`,cv=`#define PHONG
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
}`,hv=`#define STANDARD
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
}`,uv=`#define STANDARD
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
}`,fv=`#define TOON
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
}`,dv=`#define TOON
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
}`,pv=`uniform float size;
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
}`,mv=`uniform vec3 diffuse;
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
}`,gv=`#include <common>
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
}`,_v=`uniform vec3 color;
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
}`,xv=`uniform float rotation;
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
}`,vv=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:V_,alphahash_pars_fragment:H_,alphamap_fragment:G_,alphamap_pars_fragment:W_,alphatest_fragment:X_,alphatest_pars_fragment:Y_,aomap_fragment:q_,aomap_pars_fragment:Z_,batching_pars_vertex:$_,batching_vertex:J_,begin_vertex:K_,beginnormal_vertex:Q_,bsdfs:j_,iridescence_fragment:t0,bumpmap_pars_fragment:e0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:s0,color_fragment:o0,color_pars_fragment:a0,color_pars_vertex:l0,color_vertex:c0,common:h0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:f0,displacementmap_pars_vertex:d0,displacementmap_vertex:p0,emissivemap_fragment:m0,emissivemap_pars_fragment:g0,colorspace_fragment:_0,colorspace_pars_fragment:x0,envmap_fragment:v0,envmap_common_pars_fragment:y0,envmap_pars_fragment:M0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:L0,envmap_vertex:b0,fog_vertex:T0,fog_pars_vertex:w0,fog_fragment:E0,fog_pars_fragment:A0,gradientmap_pars_fragment:C0,lightmap_pars_fragment:R0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:I0,lights_pars_begin:D0,lights_toon_fragment:U0,lights_toon_pars_fragment:N0,lights_phong_fragment:F0,lights_phong_pars_fragment:O0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:k0,lights_fragment_maps:V0,lights_fragment_end:H0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:Y0,map_fragment:q0,map_pars_fragment:Z0,map_particle_fragment:$0,map_particle_pars_fragment:J0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:j0,morphcolor_vertex:tx,morphnormal_vertex:ex,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:rx,normal_fragment_maps:sx,normal_pars_fragment:ox,normal_pars_vertex:ax,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:fx,iridescence_pars_fragment:dx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:_x,dithering_fragment:xx,dithering_pars_fragment:vx,roughnessmap_fragment:yx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:bx,shadowmap_vertex:Tx,shadowmask_pars_fragment:wx,skinbase_vertex:Ex,skinning_pars_vertex:Ax,skinning_vertex:Cx,skinnormal_vertex:Rx,specularmap_fragment:Px,specularmap_pars_fragment:Ix,tonemapping_fragment:Dx,tonemapping_pars_fragment:Lx,transmission_fragment:Ux,transmission_pars_fragment:Nx,uv_pars_fragment:Fx,uv_pars_vertex:Ox,uv_vertex:Bx,worldpos_vertex:zx,background_vert:kx,background_frag:Vx,backgroundCube_vert:Hx,backgroundCube_frag:Gx,cube_vert:Wx,cube_frag:Xx,depth_vert:Yx,depth_frag:qx,distanceRGBA_vert:Zx,distanceRGBA_frag:$x,equirect_vert:Jx,equirect_frag:Kx,linedashed_vert:Qx,linedashed_frag:jx,meshbasic_vert:tv,meshbasic_frag:ev,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:rv,meshmatcap_frag:sv,meshnormal_vert:ov,meshnormal_frag:av,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:hv,meshphysical_frag:uv,meshtoon_vert:fv,meshtoon_frag:dv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:_v,sprite_vert:xv,sprite_frag:vv},mt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Fi={basic:{uniforms:pn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:pn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ae(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:pn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:pn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:pn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new ae(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:pn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:pn([mt.points,mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:pn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:pn([mt.common,mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:pn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:pn([mt.sprite,mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:pn([mt.common,mt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:pn([mt.lights,mt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Fi.physical={uniforms:pn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Pc={r:0,b:0,g:0},es=new ai,yv=new be;function Mv(r,t,e,n,i,s,o){let a=new ae(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?e:t).get(x)),x}function g(T){let x=!1,w=_(T);w===null?p(a,l):w&&w.isColor&&(p(w,1),x=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,x){let w=_(x);w&&(w.isCubeTexture||w.mapping===sa)?(h===void 0&&(h=new Re(new br(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:ts(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),es.copy(x.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yv.makeRotationFromEuler(es)),h.material.toneMapped=he.getTransfer(w.colorSpace)!==xe,(u!==w||d!==w.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Re(new Ko(2,2),new Si({name:"BackgroundMaterial",uniforms:ts(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=he.getTransfer(w.colorSpace)!==xe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,x){T.getRGB(Pc,bu(r)),n.buffers.color.setClear(Pc.r,Pc.g,Pc.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,x=1){a.set(T),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:g,addToRenderList:m,dispose:M}}function Sv(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(y,D,U,G,z){let X=!1,H=u(G,U,D);s!==H&&(s=H,c(s.object)),X=f(y,G,U,z),X&&_(y,G,U,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(y,D,U,G),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,D,U){let G=U.wireframe===!0,z=n[y.id];z===void 0&&(z={},n[y.id]=z);let X=z[D.id];X===void 0&&(X={},z[D.id]=X);let H=X[G];return H===void 0&&(H=d(l()),X[G]=H),H}function d(y){let D=[],U=[],G=[];for(let z=0;z<e;z++)D[z]=0,U[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:G,object:y,attributes:{},index:null}}function f(y,D,U,G){let z=s.attributes,X=D.attributes,H=0,W=U.getAttributes();for(let k in W)if(W[k].location>=0){let I=z[k],at=X[k];if(at===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),I===void 0||I.attribute!==at||at&&I.data!==at.data)return!0;H++}return s.attributesNum!==H||s.index!==G}function _(y,D,U,G){let z={},X=D.attributes,H=0,W=U.getAttributes();for(let k in W)if(W[k].location>=0){let I=X[k];I===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(I=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(I=y.instanceColor));let at={};at.attribute=I,I&&I.data&&(at.data=I.data),z[k]=at,H++}s.attributes=z,s.attributesNum=H,s.index=G}function g(){let y=s.newAttributes;for(let D=0,U=y.length;D<U;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){let U=s.newAttributes,G=s.enabledAttributes,z=s.attributeDivisors;U[y]=1,G[y]===0&&(r.enableVertexAttribArray(y),G[y]=1),z[y]!==D&&(r.vertexAttribDivisor(y,D),z[y]=D)}function M(){let y=s.newAttributes,D=s.enabledAttributes;for(let U=0,G=D.length;U<G;U++)D[U]!==y[U]&&(r.disableVertexAttribArray(U),D[U]=0)}function T(y,D,U,G,z,X,H){H===!0?r.vertexAttribIPointer(y,D,U,z,X):r.vertexAttribPointer(y,D,U,G,z,X)}function x(y,D,U,G){g();let z=G.attributes,X=U.getAttributes(),H=D.defaultAttributeValues;for(let W in X){let k=X[W];if(k.location>=0){let nt=z[W];if(nt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){let I=nt.normalized,at=nt.itemSize,Nt=t.get(nt);if(Nt===void 0)continue;let ne=Nt.buffer,Wt=Nt.type,Gt=Nt.bytesPerElement,$=Wt===r.INT||Wt===r.UNSIGNED_INT||nt.gpuType===Zl;if(nt.isInterleavedBufferAttribute){let Q=nt.data,ft=Q.stride,Et=nt.offset;if(Q.isInstancedInterleavedBuffer){for(let bt=0;bt<k.locationSize;bt++)p(k.location+bt,Q.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<k.locationSize;bt++)m(k.location+bt);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let bt=0;bt<k.locationSize;bt++)T(k.location+bt,at/k.locationSize,Wt,I,ft*Gt,(Et+at/k.locationSize*bt)*Gt,$)}else{if(nt.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)p(k.location+Q,nt.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let Q=0;Q<k.locationSize;Q++)T(k.location+Q,at/k.locationSize,Wt,I,at*Gt,at/k.locationSize*Q*Gt,$)}}else if(H!==void 0){let I=H[W];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(k.location,I);break;case 3:r.vertexAttrib3fv(k.location,I);break;case 4:r.vertexAttrib4fv(k.location,I);break;default:r.vertexAttrib1fv(k.location,I)}}}}M()}function w(){P();for(let y in n){let D=n[y];for(let U in D){let G=D[U];for(let z in G)h(G[z].object),delete G[z];delete D[U]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let D=n[y.id];for(let U in D){let G=D[U];for(let z in G)h(G[z].object),delete G[z];delete D[U]}delete n[y.id]}function A(y){for(let D in n){let U=n[D];if(U[y.id]===void 0)continue;let G=U[y.id];for(let z in G)h(G[z].object),delete G[z];delete U[y.id]}}function P(){v(),o=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function bv(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Tv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==li&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==bi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ti&&!P)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:w,maxSamples:E}}function wv(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ci,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{let M=s?0:n,T=M*4,x=p.clippingState||null;l.value=x,x=h(_,d,T,f);for(let w=0;w!==T;++w)x[w]=e[w];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=f;T!==g;++T,x+=4)o.copy(u[T]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ev(r){let t=new WeakMap;function e(o,a){return a===Xl?o.mapping=Qr:a===Yl&&(o.mapping=jr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xl||a===Yl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ml(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var js=4,Ep=[.125,.215,.35,.446,.526,.582],rs=20,Au=new na,Ap=new ae,Cu=null,Ru=0,Pu=0,Iu=!1,is=(1+Math.sqrt(5))/2,Qs=1/is,Cp=[new V(-is,Qs,0),new V(is,Qs,0),new V(-Qs,0,is),new V(Qs,0,is),new V(0,is,-Qs),new V(0,is,Qs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Av=new V,eo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=Av}=s;Cu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cu,Ru,Pu),this._renderer.xr.enabled=Iu,t.scissorTest=!1,Ic(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qr||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:$s,format:li,colorSpace:Zr,depthBuffer:!1},i=Rp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rp(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cv(s)),this._blurMaterial=Rv(s,t,e)}return i}_compileMaterial(t){let e=new Re(this._lodPlanes[0],t);this._renderer.compile(e,Au)}_sceneToCubeUV(t,e,n,i,s){let l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ap),u.toneMapping=tr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let g=new Vo({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new Re(new br,g),p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(Ap),p=!0);for(let T=0;T<6;T++){let x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[T],s.y,s.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[T]));let w=this._cubeSize;Ic(i,x*w,T>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Qr||t.mapping===jr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Re(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Ic(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Au)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Cp[(i-s-1)%Cp.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Re(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*rs-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):rs;m>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);let p=[],M=0;for(let A=0;A<rs;++A){let P=A/g,v=Math.exp(-P*P/2);p.push(v),A===0?M+=v:A<m&&(M+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;let x=this._sizeLods[i],w=3*x*(i>T-js?i-T+js:0),E=4*(this._cubeSize-x);Ic(e,w,E,3*x,2*x),l.setRenderTarget(e),l.render(u,Au)}};function Cv(r){let t=[],e=[],n=[],i=r,s=r-js+1+Ep.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-js?l=Ep[o-r+js-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),T=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,P=E>2?0:-1,v=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];M.set(v,g*_*E),T.set(d,m*_*E);let y=[E,E,E,E,E,E];x.set(y,p*_*E)}let w=new Di;w.setAttribute("position",new Nn(M,g)),w.setAttribute("uv",new Nn(T,m)),w.setAttribute("faceIndex",new Nn(x,p)),t.push(w),i>js&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rp(r,t,e){let n=new Pi(r,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ic(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Rv(r,t,e){let n=new Float32Array(rs),i=new V(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Pp(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ip(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Vu(){return`

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
	`}function Pv(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xl||l===Yl,h=l===Qr||l===jr;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new eo(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new eo(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Iv(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dv(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let M=f.array;g=f.version;for(let T=0,x=M.length;T<x;T+=3){let w=M[T+0],E=M[T+1],A=M[T+2];d.push(w,E,E,A,A,w)}}else if(_!==void 0){let M=_.array;g=_.version;for(let T=0,x=M.length/3-1;T<x;T+=3){let w=T+0,E=T+1,A=T+2;d.push(w,E,E,A,A,w)}}else return;let m=new(Su(d)?Go:Ho)(d,1);m.version=g;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Lv(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Uv(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Nv(r,t,e){let n=new WeakMap,i=new _e;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let v=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),_===!0&&(T=2),g===!0&&(T=3);let x=a.attributes.position.count*T,w=1;x>t.maxTextureSize&&(w=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let E=new Float32Array(x*w*4*u),A=new zo(E,x,w,u);A.type=Ti,A.needsUpdate=!0;let P=T*4;for(let y=0;y<u;y++){let D=m[y],U=p[y],G=M[y],z=x*w*4*y;for(let X=0;X<D.count;X++){let H=X*P;f===!0&&(i.fromBufferAttribute(D,X),E[z+H+0]=i.x,E[z+H+1]=i.y,E[z+H+2]=i.z,E[z+H+3]=0),_===!0&&(i.fromBufferAttribute(U,X),E[z+H+4]=i.x,E[z+H+5]=i.y,E[z+H+6]=i.z,E[z+H+7]=0),g===!0&&(i.fromBufferAttribute(G,X),E[z+H+8]=i.x,E[z+H+9]=i.y,E[z+H+10]=i.z,E[z+H+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Ot(x,w)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Fv(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Jp=new On,Dp=new Zo(1,1),Kp=new zo,Qp=new vl,jp=new Xo,Lp=[],Up=[],Np=new Float32Array(16),Fp=new Float32Array(9),Op=new Float32Array(4);function no(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Lp[i];if(s===void 0&&(s=new Float32Array(i),Lp[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ze(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function $e(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Uc(r,t){let e=Up[t];e===void 0&&(e=new Int32Array(t),Up[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Ov(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Bv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2fv(this.addr,t),$e(e,t)}}function zv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;r.uniform3fv(this.addr,t),$e(e,t)}}function kv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4fv(this.addr,t),$e(e,t)}}function Vv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;Op.set(n),r.uniformMatrix2fv(this.addr,!1,Op),$e(e,n)}}function Hv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;Fp.set(n),r.uniformMatrix3fv(this.addr,!1,Fp),$e(e,n)}}function Gv(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;Np.set(n),r.uniformMatrix4fv(this.addr,!1,Np),$e(e,n)}}function Wv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Xv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2iv(this.addr,t),$e(e,t)}}function Yv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3iv(this.addr,t),$e(e,t)}}function qv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4iv(this.addr,t),$e(e,t)}}function Zv(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function $v(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2uiv(this.addr,t),$e(e,t)}}function Jv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3uiv(this.addr,t),$e(e,t)}}function Kv(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4uiv(this.addr,t),$e(e,t)}}function Qv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Dp.compareFunction=yu,s=Dp):s=Jp,e.setTexture2D(t||s,i)}function jv(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Qp,i)}function ty(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||jp,i)}function ey(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Kp,i)}function ny(r){switch(r){case 5126:return Ov;case 35664:return Bv;case 35665:return zv;case 35666:return kv;case 35674:return Vv;case 35675:return Hv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return Yv;case 35669:case 35673:return qv;case 5125:return Zv;case 36294:return $v;case 36295:return Jv;case 36296:return Kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ey}}function iy(r,t){r.uniform1fv(this.addr,t)}function ry(r,t){let e=no(t,this.size,2);r.uniform2fv(this.addr,e)}function sy(r,t){let e=no(t,this.size,3);r.uniform3fv(this.addr,e)}function oy(r,t){let e=no(t,this.size,4);r.uniform4fv(this.addr,e)}function ay(r,t){let e=no(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ly(r,t){let e=no(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function cy(r,t){let e=no(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function hy(r,t){r.uniform1iv(this.addr,t)}function uy(r,t){r.uniform2iv(this.addr,t)}function fy(r,t){r.uniform3iv(this.addr,t)}function dy(r,t){r.uniform4iv(this.addr,t)}function py(r,t){r.uniform1uiv(this.addr,t)}function my(r,t){r.uniform2uiv(this.addr,t)}function gy(r,t){r.uniform3uiv(this.addr,t)}function _y(r,t){r.uniform4uiv(this.addr,t)}function xy(r,t,e){let n=this.cache,i=t.length,s=Uc(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Jp,s[o])}function vy(r,t,e){let n=this.cache,i=t.length,s=Uc(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Qp,s[o])}function yy(r,t,e){let n=this.cache,i=t.length,s=Uc(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||jp,s[o])}function My(r,t,e){let n=this.cache,i=t.length,s=Uc(e,i);Ze(n,s)||(r.uniform1iv(this.addr,s),$e(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Kp,s[o])}function Sy(r){switch(r){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return oy;case 35674:return ay;case 35675:return ly;case 35676:return cy;case 5124:case 35670:return hy;case 35667:case 35671:return uy;case 35668:case 35672:return fy;case 35669:case 35673:return dy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return _y;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return My}}var Lu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ny(e.type)}},Uu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sy(e.type)}},Nu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Du=/(\w+)(\])?(\[|\.)?/g;function Bp(r,t){r.seq.push(t),r.map[t.id]=t}function by(r,t,e){let n=r.name,i=n.length;for(Du.lastIndex=0;;){let s=Du.exec(n),o=Du.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Bp(e,c===void 0?new Lu(a,r,t):new Uu(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Nu(a),Bp(e,u)),e=u}}}var to=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);by(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function zp(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Ty=37297,wy=0;function Ey(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var kp=new Zt;function Ay(r){he._getMatrix(kp,he.workingColorSpace,r);let t=`mat3( ${kp.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case Fo:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Vp(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ey(r.getShaderSource(t),a)}else return s}function Cy(r,t){let e=Ay(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ry(r,t){let e;switch(t){case rp:e="Linear";break;case sp:e="Reinhard";break;case op:e="Cineon";break;case Wl:e="ACESFilmic";break;case lp:e="AgX";break;case cp:e="Neutral";break;case ap:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dc=new V;function Py(){he.getLuminanceCoefficients(Dc);let r=Dc.x.toFixed(4),t=Dc.y.toFixed(4),e=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function Dy(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ly(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function fa(r){return r!==""}function Hp(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gp(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(r){return r.replace(Uy,Fy)}var Ny=new Map;function Fy(r,t){let e=Qt[t];if(e===void 0){let n=Ny.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fu(e)}var Oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(r){return r.replace(Oy,By)}function By(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xp(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Od?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function ky(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qr:case jr:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Vy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case jr:t="ENVMAP_MODE_REFRACTION";break}return t}function Hy(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gl:t="ENVMAP_BLENDING_MULTIPLY";break;case np:t="ENVMAP_BLENDING_MIX";break;case ip:t="ENVMAP_BLENDING_ADD";break}return t}function Gy(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wy(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zy(e),c=ky(e),h=Vy(e),u=Hy(e),d=Gy(e),f=Iy(e),_=Dy(s),g=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[Xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[Xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==tr?"#define TONE_MAPPING":"",e.toneMapping!==tr?Qt.tonemapping_pars_fragment:"",e.toneMapping!==tr?Ry("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Cy("linearToOutputTexel",e.outputColorSpace),Py(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fa).join(`
`)),o=Fu(o),o=Hp(o,e),o=Gp(o,e),a=Fu(a),a=Hp(a,e),a=Gp(a,e),o=Wp(o),a=Wp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=M+m+o,x=M+p+a,w=zp(i,i.VERTEX_SHADER,T),E=zp(i,i.FRAGMENT_SHADER,x);i.attachShader(g,w),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(D){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(g)||"",G=i.getShaderInfoLog(w)||"",z=i.getShaderInfoLog(E)||"",X=U.trim(),H=G.trim(),W=z.trim(),k=!0,nt=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,E);else{let I=Vp(i,w,"vertex"),at=Vp(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+I+`
`+at)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||W==="")&&(nt=!1);nt&&(D.diagnostics={runnable:k,programLog:X,vertexShader:{log:H,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(w),i.deleteShader(E),P=new to(i,g),v=Ly(i,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Ty)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=E,this}var Xy=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Bu(t),e.set(t,n)),n}},Bu=class{constructor(t){this.id=Xy++,this.code=t,this.usedTimes=0}};function Yy(r,t,e,n,i,s,o){let a=new Ws,l=new Ou,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,D,U,G){let z=U.fog,X=G.geometry,H=v.isMeshStandardMaterial?U.environment:null,W=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),k=W&&W.mapping===sa?W.image.height:null,nt=_[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let I=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,at=I!==void 0?I.length:0,Nt=0;X.morphAttributes.position!==void 0&&(Nt=1),X.morphAttributes.normal!==void 0&&(Nt=2),X.morphAttributes.color!==void 0&&(Nt=3);let ne,Wt,Gt,$;if(nt){let gt=Fi[nt];ne=gt.vertexShader,Wt=gt.fragmentShader}else ne=v.vertexShader,Wt=v.fragmentShader,l.update(v),Gt=l.getVertexShaderID(v),$=l.getFragmentShaderID(v);let Q=r.getRenderTarget(),ft=r.state.buffers.depth.getReversed(),Et=G.isInstancedMesh===!0,bt=G.isBatchedMesh===!0,kt=!!v.map,de=!!v.matcap,R=!!W,Xt=!!v.aoMap,It=!!v.lightMap,At=!!v.bumpMap,N=!!v.normalMap,ie=!!v.displacementMap,_t=!!v.emissiveMap,Vt=!!v.metalnessMap,$t=!!v.roughnessMap,pe=v.anisotropy>0,C=v.clearcoat>0,S=v.dispersion>0,B=v.iridescence>0,J=v.sheen>0,K=v.transmission>0,Z=pe&&!!v.anisotropyMap,xt=C&&!!v.clearcoatMap,st=C&&!!v.clearcoatNormalMap,Tt=C&&!!v.clearcoatRoughnessMap,ut=B&&!!v.iridescenceMap,rt=B&&!!v.iridescenceThicknessMap,ht=J&&!!v.sheenColorMap,Lt=J&&!!v.sheenRoughnessMap,wt=!!v.specularMap,ct=!!v.specularColorMap,Ht=!!v.specularIntensityMap,L=K&&!!v.transmissionMap,it=K&&!!v.thicknessMap,ot=!!v.gradientMap,pt=!!v.alphaMap,et=v.alphaTest>0,j=!!v.alphaHash,yt=!!v.extensions,Ft=tr;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ft=r.toneMapping);let ue={shaderID:nt,shaderType:v.type,shaderName:v.name,vertexShader:ne,fragmentShader:Wt,defines:v.defines,customVertexShaderID:Gt,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:bt,batchingColor:bt&&G._colorsTexture!==null,instancing:Et,instancingColor:Et&&G.instanceColor!==null,instancingMorph:Et&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Zr,alphaToCoverage:!!v.alphaToCoverage,map:kt,matcap:de,envMap:R,envMapMode:R&&W.mapping,envMapCubeUVHeight:k,aoMap:Xt,lightMap:It,bumpMap:At,normalMap:N,displacementMap:d&&ie,emissiveMap:_t,normalMapObjectSpace:N&&v.normalMapType===dp,normalMapTangentSpace:N&&v.normalMapType===Rc,metalnessMap:Vt,roughnessMap:$t,anisotropy:pe,anisotropyMap:Z,clearcoat:C,clearcoatMap:xt,clearcoatNormalMap:st,clearcoatRoughnessMap:Tt,dispersion:S,iridescence:B,iridescenceMap:ut,iridescenceThicknessMap:rt,sheen:J,sheenColorMap:ht,sheenRoughnessMap:Lt,specularMap:wt,specularColorMap:ct,specularIntensityMap:Ht,transmission:K,transmissionMap:L,thicknessMap:it,gradientMap:ot,opaque:v.transparent===!1&&v.blending===Yr&&v.alphaToCoverage===!1,alphaMap:pt,alphaTest:et,alphaHash:j,combine:v.combine,mapUv:kt&&g(v.map.channel),aoMapUv:Xt&&g(v.aoMap.channel),lightMapUv:It&&g(v.lightMap.channel),bumpMapUv:At&&g(v.bumpMap.channel),normalMapUv:N&&g(v.normalMap.channel),displacementMapUv:ie&&g(v.displacementMap.channel),emissiveMapUv:_t&&g(v.emissiveMap.channel),metalnessMapUv:Vt&&g(v.metalnessMap.channel),roughnessMapUv:$t&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:xt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&g(v.sheenRoughnessMap.channel),specularMapUv:wt&&g(v.specularMap.channel),specularColorMapUv:ct&&g(v.specularColorMap.channel),specularIntensityMapUv:Ht&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:it&&g(v.thicknessMap.channel),alphaMapUv:pt&&g(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(N||pe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!X.attributes.uv&&(kt||pt),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ft,skinning:G.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:kt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:_t&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ni,flipSided:v.side===sn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function p(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let D in v.defines)y.push(D),y.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(M(y,v),T(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function M(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function T(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){let y=_[v.type],D;if(y){let U=Fi[y];D=Tp.clone(U.uniforms)}else D=v.uniforms;return D}function w(v,y){let D;for(let U=0,G=h.length;U<G;U++){let z=h[U];if(z.cacheKey===y){D=z,++D.usedTimes;break}}return D===void 0&&(D=new Wy(r,y,v,s),h.push(D)),D}function E(v){if(--v.usedTimes===0){let y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function A(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:P}}function qy(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Zy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Yp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function qp(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function a(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Zy),n.length>1&&n.sort(d||Yp),i.length>1&&i.sort(d||Yp)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function $y(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new qp,r.set(n,[o])):i>=s.length?(o=new qp,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Jy(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new ae};break;case"SpotLight":e={position:new V,direction:new V,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=e,e}}}function Ky(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Qy=0;function jy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function tM(r){let t=new Jy,e=Ky(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let i=new V,s=new be,o=new be;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,T=0,x=0,w=0,E=0,A=0;c.sort(jy);for(let v=0,y=c.length;v<y;v++){let D=c[v],U=D.color,G=D.intensity,z=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=U.r*G,u+=U.g*G,d+=U.b*G;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],G);A++}else if(D.isDirectionalLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let W=D.shadow,k=e.get(D);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=D.shadow.matrix,M++}n.directional[f]=H,f++}else if(D.isSpotLight){let H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(U).multiplyScalar(G),H.distance=z,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[g]=H;let W=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,W.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[g]=W.matrix,D.castShadow){let k=e.get(D);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=X,x++}g++}else if(D.isRectAreaLight){let H=t.get(D);H.color.copy(U).multiplyScalar(G),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=H,m++}else if(D.isPointLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let W=D.shadow,k=e.get(D);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=D.shadow.matrix,T++}n.point[_]=H,_++}else if(D.isHemisphereLight){let H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(G),H.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==T||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.directionalLength=f,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=T,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=A,n.version=Qy++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let T=c[p];if(T.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(T.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(T.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Zp(r){let t=new tM(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function eM(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Zp(r),t.set(i,[a])):s>=o.length?(a=new Zp(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
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
}`;function rM(r,t,e){let n=new Ys,i=new Ot,s=new Ot,o=new _e,a=new bl({depthPacking:fp}),l=new Tl,c={},h=e.maxTextureSize,u={[$i]:sn,[sn]:$i,[Ni]:Ni},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Di;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Re(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let p=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let v=r.getRenderTarget(),y=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),U=r.state;U.setBlending(ji),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=p!==Ui&&this.type===Ui,z=p===Ui&&this.type!==Ui;for(let X=0,H=E.length;X<H;X++){let W=E[X],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let nt=k.getFrameExtents();if(i.multiply(nt),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/nt.x),i.x=s.x*nt.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/nt.y),i.y=s.y*nt.y,k.mapSize.y=s.y)),k.map===null||G===!0||z===!0){let at=this.type!==Ui?{minFilter:Fn,magFilter:Fn}:{};k.map!==null&&k.map.dispose(),k.map=new Pi(i.x,i.y,at),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();let I=k.getViewportCount();for(let at=0;at<I;at++){let Nt=k.getViewport(at);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),U.viewport(o),k.updateMatrices(W,at),n=k.getFrustum(),x(A,P,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Ui&&M(k,P),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,y,D)};function M(E,A){let P=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Pi(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,P,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,P,f,g,null)}function T(E,A,P,v){let y=null,D=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)y=D;else if(y=P.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=y.uuid,G=A.uuid,z=c[U];z===void 0&&(z={},c[U]=z);let X=z[G];X===void 0&&(X=y.clone(),z[G]=X,A.addEventListener("dispose",w)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,v===Ui?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=r.properties.get(y);U.light=P}return y}function x(E,A,P,v,y){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Ui)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let G=t.update(E),z=E.material;if(Array.isArray(z)){let X=G.groups;for(let H=0,W=X.length;H<W;H++){let k=X[H],nt=z[k.materialIndex];if(nt&&nt.visible){let I=T(E,nt,v,y);E.onBeforeShadow(r,E,A,P,G,I,k),r.renderBufferDirect(P,null,G,I,E,k),E.onAfterShadow(r,E,A,P,G,I,k)}}}else if(z.visible){let X=T(E,z,v,y);E.onBeforeShadow(r,E,A,P,G,X,null),r.renderBufferDirect(P,null,G,X,E,null),E.onAfterShadow(r,E,A,P,G,X,null)}}let U=E.children;for(let G=0,z=U.length;G<z;G++)x(U[G],A,P,v,y)}function w(E){E.target.removeEventListener("dispose",w);for(let P in c){let v=c[P],y=E.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}var sM={[Fl]:Ol,[Bl]:Vl,[zl]:Hl,[qr]:kl,[Ol]:Fl,[Vl]:Bl,[Hl]:zl,[kl]:qr};function oM(r,t){function e(){let L=!1,it=new _e,ot=null,pt=new _e(0,0,0,0);return{setMask:function(et){ot!==et&&!L&&(r.colorMask(et,et,et,et),ot=et)},setLocked:function(et){L=et},setClear:function(et,j,yt,Ft,ue){ue===!0&&(et*=Ft,j*=Ft,yt*=Ft),it.set(et,j,yt,Ft),pt.equals(it)===!1&&(r.clearColor(et,j,yt,Ft),pt.copy(it))},reset:function(){L=!1,ot=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,ot=null,pt=null,et=null;return{setReversed:function(j){if(it!==j){let yt=t.get("EXT_clip_control");j?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),it=j;let Ft=et;et=null,this.setClear(Ft)}},getReversed:function(){return it},setTest:function(j){j?Q(r.DEPTH_TEST):ft(r.DEPTH_TEST)},setMask:function(j){ot!==j&&!L&&(r.depthMask(j),ot=j)},setFunc:function(j){if(it&&(j=sM[j]),pt!==j){switch(j){case Fl:r.depthFunc(r.NEVER);break;case Ol:r.depthFunc(r.ALWAYS);break;case Bl:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case zl:r.depthFunc(r.EQUAL);break;case kl:r.depthFunc(r.GEQUAL);break;case Vl:r.depthFunc(r.GREATER);break;case Hl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=j}},setLocked:function(j){L=j},setClear:function(j){et!==j&&(it&&(j=1-j),r.clearDepth(j),et=j)},reset:function(){L=!1,ot=null,pt=null,et=null,it=!1}}}function i(){let L=!1,it=null,ot=null,pt=null,et=null,j=null,yt=null,Ft=null,ue=null;return{setTest:function(gt){L||(gt?Q(r.STENCIL_TEST):ft(r.STENCIL_TEST))},setMask:function(gt){it!==gt&&!L&&(r.stencilMask(gt),it=gt)},setFunc:function(gt,Ct,qt){(ot!==gt||pt!==Ct||et!==qt)&&(r.stencilFunc(gt,Ct,qt),ot=gt,pt=Ct,et=qt)},setOp:function(gt,Ct,qt){(j!==gt||yt!==Ct||Ft!==qt)&&(r.stencilOp(gt,Ct,qt),j=gt,yt=Ct,Ft=qt)},setLocked:function(gt){L=gt},setClear:function(gt){ue!==gt&&(r.clearStencil(gt),ue=gt)},reset:function(){L=!1,it=null,ot=null,pt=null,et=null,j=null,yt=null,Ft=null,ue=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,T=null,x=null,w=null,E=null,A=new ae(0,0,0),P=0,v=!1,y=null,D=null,U=null,G=null,z=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,W=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=W>=2);let nt=null,I={},at=r.getParameter(r.SCISSOR_BOX),Nt=r.getParameter(r.VIEWPORT),ne=new _e().fromArray(at),Wt=new _e().fromArray(Nt);function Gt(L,it,ot,pt){let et=new Uint8Array(4),j=r.createTexture();r.bindTexture(L,j),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<ot;yt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(it,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,et):r.texImage2D(it+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,et);return j}let $={};$[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(r.DEPTH_TEST),o.setFunc(qr),At(!1),N(au),Q(r.CULL_FACE),Xt(ji);function Q(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function ft(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Et(L,it){return u[L]!==it?(r.bindFramebuffer(L,it),u[L]=it,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=it),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=it),!0):!1}function bt(L,it){let ot=f,pt=!1;if(L){ot=d.get(it),ot===void 0&&(ot=[],d.set(it,ot));let et=L.textures;if(ot.length!==et.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let j=0,yt=et.length;j<yt;j++)ot[j]=r.COLOR_ATTACHMENT0+j;ot.length=et.length,pt=!0}}else ot[0]!==r.BACK&&(ot[0]=r.BACK,pt=!0);pt&&r.drawBuffers(ot)}function kt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}let de={[Mr]:r.FUNC_ADD,[zd]:r.FUNC_SUBTRACT,[kd]:r.FUNC_REVERSE_SUBTRACT};de[Vd]=r.MIN,de[Hd]=r.MAX;let R={[Gd]:r.ZERO,[Wd]:r.ONE,[Xd]:r.SRC_COLOR,[ul]:r.SRC_ALPHA,[Kd]:r.SRC_ALPHA_SATURATE,[$d]:r.DST_COLOR,[qd]:r.DST_ALPHA,[Yd]:r.ONE_MINUS_SRC_COLOR,[fl]:r.ONE_MINUS_SRC_ALPHA,[Jd]:r.ONE_MINUS_DST_COLOR,[Zd]:r.ONE_MINUS_DST_ALPHA,[Qd]:r.CONSTANT_COLOR,[jd]:r.ONE_MINUS_CONSTANT_COLOR,[tp]:r.CONSTANT_ALPHA,[ep]:r.ONE_MINUS_CONSTANT_ALPHA};function Xt(L,it,ot,pt,et,j,yt,Ft,ue,gt){if(L===ji){g===!0&&(ft(r.BLEND),g=!1);return}if(g===!1&&(Q(r.BLEND),g=!0),L!==Bd){if(L!==m||gt!==v){if((p!==Mr||x!==Mr)&&(r.blendEquation(r.FUNC_ADD),p=Mr,x=Mr),gt)switch(L){case Yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cu:r.blendFunc(r.ONE,r.ONE);break;case hu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case uu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case cu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case hu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,T=null,w=null,E=null,A.set(0,0,0),P=0,m=L,v=gt}return}et=et||it,j=j||ot,yt=yt||pt,(it!==p||et!==x)&&(r.blendEquationSeparate(de[it],de[et]),p=it,x=et),(ot!==M||pt!==T||j!==w||yt!==E)&&(r.blendFuncSeparate(R[ot],R[pt],R[j],R[yt]),M=ot,T=pt,w=j,E=yt),(Ft.equals(A)===!1||ue!==P)&&(r.blendColor(Ft.r,Ft.g,Ft.b,ue),A.copy(Ft),P=ue),m=L,v=!1}function It(L,it){L.side===Ni?ft(r.CULL_FACE):Q(r.CULL_FACE);let ot=L.side===sn;it&&(ot=!ot),At(ot),L.blending===Yr&&L.transparent===!1?Xt(ji):Xt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let pt=L.stencilWrite;a.setTest(pt),pt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(L){y!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),y=L)}function N(L){L!==Nd?(Q(r.CULL_FACE),L!==D&&(L===au?r.cullFace(r.BACK):L===Fd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ft(r.CULL_FACE),D=L}function ie(L){L!==U&&(H&&r.lineWidth(L),U=L)}function _t(L,it,ot){L?(Q(r.POLYGON_OFFSET_FILL),(G!==it||z!==ot)&&(r.polygonOffset(it,ot),G=it,z=ot)):ft(r.POLYGON_OFFSET_FILL)}function Vt(L){L?Q(r.SCISSOR_TEST):ft(r.SCISSOR_TEST)}function $t(L){L===void 0&&(L=r.TEXTURE0+X-1),nt!==L&&(r.activeTexture(L),nt=L)}function pe(L,it,ot){ot===void 0&&(nt===null?ot=r.TEXTURE0+X-1:ot=nt);let pt=I[ot];pt===void 0&&(pt={type:void 0,texture:void 0},I[ot]=pt),(pt.type!==L||pt.texture!==it)&&(nt!==ot&&(r.activeTexture(ot),nt=ot),r.bindTexture(L,it||$[L]),pt.type=L,pt.texture=it)}function C(){let L=I[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(L){ne.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function Lt(L){Wt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Wt.copy(L))}function wt(L,it){let ot=c.get(it);ot===void 0&&(ot=new WeakMap,c.set(it,ot));let pt=ot.get(L);pt===void 0&&(pt=r.getUniformBlockIndex(it,L.name),ot.set(L,pt))}function ct(L,it){let pt=c.get(it).get(L);l.get(it)!==pt&&(r.uniformBlockBinding(it,pt,L.__bindingPointIndex),l.set(it,pt))}function Ht(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,I={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,T=null,x=null,w=null,E=null,A=new ae(0,0,0),P=0,v=!1,y=null,D=null,U=null,G=null,z=null,ne.set(0,0,r.canvas.width,r.canvas.height),Wt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ft,bindFramebuffer:Et,drawBuffers:bt,useProgram:kt,setBlending:Xt,setMaterial:It,setFlipSided:At,setCullFace:N,setLineWidth:ie,setPolygonOffset:_t,setScissorTest:Vt,activeTexture:$t,bindTexture:pe,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:ut,texImage3D:rt,updateUBOMapping:wt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:Tt,texSubImage2D:J,texSubImage3D:K,compressedTexSubImage2D:Z,compressedTexSubImage3D:xt,scissor:ht,viewport:Lt,reset:Ht}}function aM(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return f?new OffscreenCanvas(C,S):Bo("canvas")}function g(C,S,B){let J=1,K=pe(C);if((K.width>B||K.height>B)&&(J=B/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z=Math.floor(J*K.width),xt=Math.floor(J*K.height);u===void 0&&(u=_(Z,xt));let st=S?_(Z,xt):u;return st.width=Z,st.height=xt,st.getContext("2d").drawImage(C,0,0,Z,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+xt+")."),st}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(C,S,B,J,K=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=S;if(S===r.RED&&(B===r.FLOAT&&(Z=r.R32F),B===r.HALF_FLOAT&&(Z=r.R16F),B===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.R8UI),B===r.UNSIGNED_SHORT&&(Z=r.R16UI),B===r.UNSIGNED_INT&&(Z=r.R32UI),B===r.BYTE&&(Z=r.R8I),B===r.SHORT&&(Z=r.R16I),B===r.INT&&(Z=r.R32I)),S===r.RG&&(B===r.FLOAT&&(Z=r.RG32F),B===r.HALF_FLOAT&&(Z=r.RG16F),B===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.RG8UI),B===r.UNSIGNED_SHORT&&(Z=r.RG16UI),B===r.UNSIGNED_INT&&(Z=r.RG32UI),B===r.BYTE&&(Z=r.RG8I),B===r.SHORT&&(Z=r.RG16I),B===r.INT&&(Z=r.RG32I)),S===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),B===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),B===r.UNSIGNED_INT&&(Z=r.RGB32UI),B===r.BYTE&&(Z=r.RGB8I),B===r.SHORT&&(Z=r.RGB16I),B===r.INT&&(Z=r.RGB32I)),S===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),B===r.UNSIGNED_INT&&(Z=r.RGBA32UI),B===r.BYTE&&(Z=r.RGBA8I),B===r.SHORT&&(Z=r.RGBA16I),B===r.INT&&(Z=r.RGBA32I)),S===r.RGB&&(B===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),B===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),S===r.RGBA){let xt=K?Fo:he.getTransfer(J);B===r.FLOAT&&(Z=r.RGBA32F),B===r.HALF_FLOAT&&(Z=r.RGBA16F),B===r.UNSIGNED_BYTE&&(Z=xt===xe?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(C,S){let B;return C?S===null||S===Ar||S===Js?B=r.DEPTH24_STENCIL8:S===Ti?B=r.DEPTH32F_STENCIL8:S===Zs&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ar||S===Js?B=r.DEPTH_COMPONENT24:S===Ti?B=r.DEPTH_COMPONENT32F:S===Zs&&(B=r.DEPTH_COMPONENT16),B}function w(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fn&&C.minFilter!==Mi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){let S=C.target;S.removeEventListener("dispose",E),P(S),S.isVideoTexture&&h.delete(S)}function A(C){let S=C.target;S.removeEventListener("dispose",A),y(S)}function P(C){let S=n.get(C);if(S.__webglInit===void 0)return;let B=C.source,J=d.get(B);if(J){let K=J[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&v(C),Object.keys(J).length===0&&d.delete(B)}n.remove(C)}function v(C){let S=n.get(C);r.deleteTexture(S.__webglTexture);let B=C.source,J=d.get(B);delete J[S.__cacheKey],o.memory.textures--}function y(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let K=0;K<S.__webglFramebuffer[J].length;K++)r.deleteFramebuffer(S.__webglFramebuffer[J][K]);else r.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)r.deleteFramebuffer(S.__webglFramebuffer[J]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let B=C.textures;for(let J=0,K=B.length;J<K;J++){let Z=n.get(B[J]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(B[J])}n.remove(C)}let D=0;function U(){D=0}function G(){let C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function z(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function X(C,S){let B=n.get(C);if(C.isVideoTexture&&Vt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,C,S);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}function H(C,S){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){$(B,C,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)}function W(C,S){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){$(B,C,S);return}e.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)}function k(C,S){let B=n.get(C);if(C.version>0&&B.__version!==C.version){Q(B,C,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)}let nt={[dl]:r.REPEAT,[yr]:r.CLAMP_TO_EDGE,[pl]:r.MIRRORED_REPEAT},I={[Fn]:r.NEAREST,[hp]:r.NEAREST_MIPMAP_NEAREST,[oa]:r.NEAREST_MIPMAP_LINEAR,[Mi]:r.LINEAR,[ql]:r.LINEAR_MIPMAP_NEAREST,[Er]:r.LINEAR_MIPMAP_LINEAR},at={[pp]:r.NEVER,[yp]:r.ALWAYS,[mp]:r.LESS,[yu]:r.LEQUAL,[gp]:r.EQUAL,[vp]:r.GEQUAL,[_p]:r.GREATER,[xp]:r.NOTEQUAL};function Nt(C,S){if(S.type===Ti&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Mi||S.magFilter===ql||S.magFilter===oa||S.magFilter===Er||S.minFilter===Mi||S.minFilter===ql||S.minFilter===oa||S.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,nt[S.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,nt[S.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,nt[S.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,I[S.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,I[S.minFilter]),S.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fn||S.minFilter!==oa&&S.minFilter!==Er||S.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));let J=S.source,K=d.get(J);K===void 0&&(K={},d.set(J,K));let Z=z(S);if(Z!==C.__cacheKey){K[Z]===void 0&&(K[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[Z].usedTimes++;let xt=K[C.__cacheKey];xt!==void 0&&(K[C.__cacheKey].usedTimes--,xt.usedTimes===0&&v(S)),C.__cacheKey=Z,C.__webglTexture=K[Z].texture}return B}function Wt(C,S,B){return Math.floor(Math.floor(C/B)/S)}function Gt(C,S,B,J){let Z=C.updateRanges;if(Z.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,B,J,S.data);else{Z.sort((rt,ht)=>rt.start-ht.start);let xt=0;for(let rt=1;rt<Z.length;rt++){let ht=Z[xt],Lt=Z[rt],wt=ht.start+ht.count,ct=Wt(Lt.start,S.width,4),Ht=Wt(ht.start,S.width,4);Lt.start<=wt+1&&ct===Ht&&Wt(Lt.start+Lt.count-1,S.width,4)===ct?ht.count=Math.max(ht.count,Lt.start+Lt.count-ht.start):(++xt,Z[xt]=Lt)}Z.length=xt+1;let st=r.getParameter(r.UNPACK_ROW_LENGTH),Tt=r.getParameter(r.UNPACK_SKIP_PIXELS),ut=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let rt=0,ht=Z.length;rt<ht;rt++){let Lt=Z[rt],wt=Math.floor(Lt.start/4),ct=Math.ceil(Lt.count/4),Ht=wt%S.width,L=Math.floor(wt/S.width),it=ct,ot=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ht),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),e.texSubImage2D(r.TEXTURE_2D,0,Ht,L,it,ot,B,J,S.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,st),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Tt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ut)}}function $(C,S,B){let J=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=r.TEXTURE_3D);let K=ne(C,S),Z=S.source;e.bindTexture(J,C.__webglTexture,r.TEXTURE0+B);let xt=n.get(Z);if(Z.version!==xt.__version||K===!0){e.activeTexture(r.TEXTURE0+B);let st=he.getPrimaries(he.workingColorSpace),Tt=S.colorSpace===er?null:he.getPrimaries(S.colorSpace),ut=S.colorSpace===er||st===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let rt=g(S.image,!1,i.maxTextureSize);rt=$t(S,rt);let ht=s.convert(S.format,S.colorSpace),Lt=s.convert(S.type),wt=T(S.internalFormat,ht,Lt,S.colorSpace,S.isVideoTexture);Nt(J,S);let ct,Ht=S.mipmaps,L=S.isVideoTexture!==!0,it=xt.__version===void 0||K===!0,ot=Z.dataReady,pt=w(S,rt);if(S.isDepthTexture)wt=x(S.format===Ks,S.type),it&&(L?e.texStorage2D(r.TEXTURE_2D,1,wt,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,wt,rt.width,rt.height,0,ht,Lt,null));else if(S.isDataTexture)if(Ht.length>0){L&&it&&e.texStorage2D(r.TEXTURE_2D,pt,wt,Ht[0].width,Ht[0].height);for(let et=0,j=Ht.length;et<j;et++)ct=Ht[et],L?ot&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ct.width,ct.height,ht,Lt,ct.data):e.texImage2D(r.TEXTURE_2D,et,wt,ct.width,ct.height,0,ht,Lt,ct.data);S.generateMipmaps=!1}else L?(it&&e.texStorage2D(r.TEXTURE_2D,pt,wt,rt.width,rt.height),ot&&Gt(S,rt,ht,Lt)):e.texImage2D(r.TEXTURE_2D,0,wt,rt.width,rt.height,0,ht,Lt,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&it&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,wt,Ht[0].width,Ht[0].height,rt.depth);for(let et=0,j=Ht.length;et<j;et++)if(ct=Ht[et],S.format!==li)if(ht!==null)if(L){if(ot)if(S.layerUpdates.size>0){let yt=Eu(ct.width,ct.height,S.format,S.type);for(let Ft of S.layerUpdates){let ue=ct.data.subarray(Ft*yt/ct.data.BYTES_PER_ELEMENT,(Ft+1)*yt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,Ft,ct.width,ct.height,1,ht,ue)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ct.width,ct.height,rt.depth,ht,ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,wt,ct.width,ct.height,rt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ot&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ct.width,ct.height,rt.depth,ht,Lt,ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,wt,ct.width,ct.height,rt.depth,0,ht,Lt,ct.data)}else{L&&it&&e.texStorage2D(r.TEXTURE_2D,pt,wt,Ht[0].width,Ht[0].height);for(let et=0,j=Ht.length;et<j;et++)ct=Ht[et],S.format!==li?ht!==null?L?ot&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(r.TEXTURE_2D,et,wt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ot&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ct.width,ct.height,ht,Lt,ct.data):e.texImage2D(r.TEXTURE_2D,et,wt,ct.width,ct.height,0,ht,Lt,ct.data)}else if(S.isDataArrayTexture)if(L){if(it&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,wt,rt.width,rt.height,rt.depth),ot)if(S.layerUpdates.size>0){let et=Eu(rt.width,rt.height,S.format,S.type);for(let j of S.layerUpdates){let yt=rt.data.subarray(j*et/rt.data.BYTES_PER_ELEMENT,(j+1)*et/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,rt.width,rt.height,1,ht,Lt,yt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ht,Lt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,wt,rt.width,rt.height,rt.depth,0,ht,Lt,rt.data);else if(S.isData3DTexture)L?(it&&e.texStorage3D(r.TEXTURE_3D,pt,wt,rt.width,rt.height,rt.depth),ot&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ht,Lt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,wt,rt.width,rt.height,rt.depth,0,ht,Lt,rt.data);else if(S.isFramebufferTexture){if(it)if(L)e.texStorage2D(r.TEXTURE_2D,pt,wt,rt.width,rt.height);else{let et=rt.width,j=rt.height;for(let yt=0;yt<pt;yt++)e.texImage2D(r.TEXTURE_2D,yt,wt,et,j,0,ht,Lt,null),et>>=1,j>>=1}}else if(Ht.length>0){if(L&&it){let et=pe(Ht[0]);e.texStorage2D(r.TEXTURE_2D,pt,wt,et.width,et.height)}for(let et=0,j=Ht.length;et<j;et++)ct=Ht[et],L?ot&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ht,Lt,ct):e.texImage2D(r.TEXTURE_2D,et,wt,ht,Lt,ct);S.generateMipmaps=!1}else if(L){if(it){let et=pe(rt);e.texStorage2D(r.TEXTURE_2D,pt,wt,et.width,et.height)}ot&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,Lt,rt)}else e.texImage2D(r.TEXTURE_2D,0,wt,ht,Lt,rt);m(S)&&p(J),xt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,B){if(S.image.length!==6)return;let J=ne(C,S),K=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+B);let Z=n.get(K);if(K.version!==Z.__version||J===!0){e.activeTexture(r.TEXTURE0+B);let xt=he.getPrimaries(he.workingColorSpace),st=S.colorSpace===er?null:he.getPrimaries(S.colorSpace),Tt=S.colorSpace===er||xt===st?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ut=S.isCompressedTexture||S.image[0].isCompressedTexture,rt=S.image[0]&&S.image[0].isDataTexture,ht=[];for(let j=0;j<6;j++)!ut&&!rt?ht[j]=g(S.image[j],!0,i.maxCubemapSize):ht[j]=rt?S.image[j].image:S.image[j],ht[j]=$t(S,ht[j]);let Lt=ht[0],wt=s.convert(S.format,S.colorSpace),ct=s.convert(S.type),Ht=T(S.internalFormat,wt,ct,S.colorSpace),L=S.isVideoTexture!==!0,it=Z.__version===void 0||J===!0,ot=K.dataReady,pt=w(S,Lt);Nt(r.TEXTURE_CUBE_MAP,S);let et;if(ut){L&&it&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ht,Lt.width,Lt.height);for(let j=0;j<6;j++){et=ht[j].mipmaps;for(let yt=0;yt<et.length;yt++){let Ft=et[yt];S.format!==li?wt!==null?L?ot&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,0,0,Ft.width,Ft.height,wt,Ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,Ht,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,0,0,Ft.width,Ft.height,wt,ct,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,Ht,Ft.width,Ft.height,0,wt,ct,Ft.data)}}}else{if(et=S.mipmaps,L&&it){et.length>0&&pt++;let j=pe(ht[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(rt){L?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ht[j].width,ht[j].height,wt,ct,ht[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,ht[j].width,ht[j].height,0,wt,ct,ht[j].data);for(let yt=0;yt<et.length;yt++){let ue=et[yt].image[j].image;L?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,0,0,ue.width,ue.height,wt,ct,ue.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,Ht,ue.width,ue.height,0,wt,ct,ue.data)}}else{L?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,wt,ct,ht[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,wt,ct,ht[j]);for(let yt=0;yt<et.length;yt++){let Ft=et[yt];L?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,0,0,wt,ct,Ft.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,Ht,wt,ct,Ft.image[j])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Z.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ft(C,S,B,J,K,Z){let xt=s.convert(B.format,B.colorSpace),st=s.convert(B.type),Tt=T(B.internalFormat,xt,st,B.colorSpace),ut=n.get(S),rt=n.get(B);if(rt.__renderTarget=S,!ut.__hasExternalTextures){let ht=Math.max(1,S.width>>Z),Lt=Math.max(1,S.height>>Z);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,Z,Tt,ht,Lt,S.depth,0,xt,st,null):e.texImage2D(K,Z,Tt,ht,Lt,0,xt,st,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),_t(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,K,rt.__webglTexture,0,ie(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,K,rt.__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(C,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,C),S.depthBuffer){let J=S.depthTexture,K=J&&J.isDepthTexture?J.type:null,Z=x(S.stencilBuffer,K),xt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,st=ie(S);_t(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,st,Z,S.width,S.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,st,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,C)}else{let J=S.textures;for(let K=0;K<J.length;K++){let Z=J[K],xt=s.convert(Z.format,Z.colorSpace),st=s.convert(Z.type),Tt=T(Z.internalFormat,xt,st,Z.colorSpace),ut=ie(S);B&&_t(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,Tt,S.width,S.height):_t(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,Tt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Tt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);let K=J.__webglTexture,Z=ie(S);if(S.depthTexture.format===Vs)_t(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(S.depthTexture.format===Ks)_t(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function kt(C){let S=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let J=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=J}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");let J=C.texture.mipmaps;J&&J.length>0?bt(S.__webglFramebuffer[0],C):bt(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=r.createRenderbuffer(),Et(S.__webglDepthbuffer[J],C,!1);else{let K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Z)}}else{let J=C.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Et(S.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Z)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function de(C,S,B){let J=n.get(C);S!==void 0&&ft(J.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&kt(C)}function R(C){let S=C.texture,B=n.get(C),J=n.get(S);C.addEventListener("dispose",A);let K=C.textures,Z=C.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=S.version,o.memory.textures++),Z){B.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[st]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)B.__webglFramebuffer[st][Tt]=r.createFramebuffer()}else B.__webglFramebuffer[st]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)B.__webglFramebuffer[st]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(xt)for(let st=0,Tt=K.length;st<Tt;st++){let ut=n.get(K[st]);ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&_t(C)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let st=0;st<K.length;st++){let Tt=K[st];B.__webglColorRenderbuffer[st]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[st]);let ut=s.convert(Tt.format,Tt.colorSpace),rt=s.convert(Tt.type),ht=T(Tt.internalFormat,ut,rt,Tt.colorSpace,C.isXRRenderTarget===!0),Lt=ie(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,ht,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,B.__webglColorRenderbuffer[st])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Et(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)ft(B.__webglFramebuffer[st][Tt],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt);else ft(B.__webglFramebuffer[st],C,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,Tt=K.length;st<Tt;st++){let ut=K[st],rt=n.get(ut),ht=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,rt.__webglTexture),Nt(ht,ut),ft(B.__webglFramebuffer,C,ut,r.COLOR_ATTACHMENT0+st,ht,0),m(ut)&&p(ht)}e.unbindTexture()}else{let st=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(st,J.__webglTexture),Nt(st,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)ft(B.__webglFramebuffer[Tt],C,S,r.COLOR_ATTACHMENT0,st,Tt);else ft(B.__webglFramebuffer,C,S,r.COLOR_ATTACHMENT0,st,0);m(S)&&p(st),e.unbindTexture()}C.depthBuffer&&kt(C)}function Xt(C){let S=C.textures;for(let B=0,J=S.length;B<J;B++){let K=S[B];if(m(K)){let Z=M(C),xt=n.get(K).__webglTexture;e.bindTexture(Z,xt),p(Z),e.unbindTexture()}}}let It=[],At=[];function N(C){if(C.samples>0){if(_t(C)===!1){let S=C.textures,B=C.width,J=C.height,K=r.COLOR_BUFFER_BIT,Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(C),st=S.length>1;if(st)for(let ut=0;ut<S.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let Tt=C.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<S.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),st){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let rt=n.get(S[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,rt,0)}r.blitFramebuffer(0,0,B,J,0,0,B,J,K,r.NEAREST),l===!0&&(It.length=0,At.length=0,It.push(r.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.resolveDepthBuffer===!1&&(It.push(Z),At.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,At)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),st)for(let ut=0;ut<S.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let rt=n.get(S[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ie(C){return Math.min(i.maxSamples,C.samples)}function _t(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Vt(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function $t(C,S){let B=C.colorSpace,J=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Zr&&B!==er&&(he.getTransfer(B)===xe?(J!==li||K!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=de,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=_t}function lM(r,t){function e(n,i=er){let s,o=he.getTransfer(i);if(n===bi)return r.UNSIGNED_BYTE;if(n===$l)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===mu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===du)return r.BYTE;if(n===pu)return r.SHORT;if(n===Zs)return r.UNSIGNED_SHORT;if(n===Zl)return r.INT;if(n===Ar)return r.UNSIGNED_INT;if(n===Ti)return r.FLOAT;if(n===$s)return r.HALF_FLOAT;if(n===_u)return r.ALPHA;if(n===xu)return r.RGB;if(n===li)return r.RGBA;if(n===Vs)return r.DEPTH_COMPONENT;if(n===Ks)return r.DEPTH_STENCIL;if(n===Kl)return r.RED;if(n===Ql)return r.RED_INTEGER;if(n===vu)return r.RG;if(n===jl)return r.RG_INTEGER;if(n===tc)return r.RGBA_INTEGER;if(n===aa||n===la||n===ca||n===ha)if(o===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ec||n===nc||n===ic||n===rc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sc||n===oc||n===ac)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sc||n===oc)return o===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ac)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Mc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===lc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sc||n===bc||n===Tc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Sc)return o===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===Ec||n===Ac||n===Cc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===wc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var cM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hM=`
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

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $o(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Si({vertexShader:cM,fragmentShader:hM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ku=class extends Ji{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=typeof XRWebGLBinding<"u",m=new zu,p={},M=e.getContextAttributes(),T=null,x=null,w=[],E=[],A=new Ot,P=null,v=new nn;v.viewport=new _e;let y=new nn;y.viewport=new _e;let D=[v,y],U=new Nl,G=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=w[$];return Q===void 0&&(Q=new Xs,w[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=w[$];return Q===void 0&&(Q=new Xs,w[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=w[$];return Q===void 0&&(Q=new Xs,w[$]=Q),Q.getHandSpace()};function X($){let Q=E.indexOf($.inputSource);if(Q===-1)return;let ft=w[Q];ft!==void 0&&(ft.update($.inputSource,$.frame,c||o),ft.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",W);for(let $=0;$<w.length;$++){let Q=E[$];Q!==null&&(E[$]=null,w[$].disconnect(Q))}G=null,z=null,m.reset();for(let $ in p)delete p[$];t.setRenderTarget(T),f=null,d=null,u=null,i=null,x=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",H),i.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Et=null,bt=null;M.depth&&(bt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=M.stencil?Ks:Vs,Et=M.stencil?Js:Ar);let kt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(kt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Pi(d.textureWidth,d.textureHeight,{format:li,type:bi,depthTexture:new Zo(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ft={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ft),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Pi(f.framebufferWidth,f.framebufferHeight,{format:li,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W($){for(let Q=0;Q<$.removed.length;Q++){let ft=$.removed[Q],Et=E.indexOf(ft);Et>=0&&(E[Et]=null,w[Et].disconnect(ft))}for(let Q=0;Q<$.added.length;Q++){let ft=$.added[Q],Et=E.indexOf(ft);if(Et===-1){for(let kt=0;kt<w.length;kt++)if(kt>=E.length){E.push(ft),Et=kt;break}else if(E[kt]===null){E[kt]=ft,Et=kt;break}if(Et===-1)break}let bt=w[Et];bt&&bt.connect(ft)}}let k=new V,nt=new V;function I($,Q,ft){k.setFromMatrixPosition(Q.matrixWorld),nt.setFromMatrixPosition(ft.matrixWorld);let Et=k.distanceTo(nt),bt=Q.projectionMatrix.elements,kt=ft.projectionMatrix.elements,de=bt[14]/(bt[10]-1),R=bt[14]/(bt[10]+1),Xt=(bt[9]+1)/bt[5],It=(bt[9]-1)/bt[5],At=(bt[8]-1)/bt[0],N=(kt[8]+1)/kt[0],ie=de*At,_t=de*N,Vt=Et/(-At+N),$t=Vt*-At;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX($t),$.translateZ(Vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),bt[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let pe=de+Vt,C=R+Vt,S=ie-$t,B=_t+(Et-$t),J=Xt*R/C*pe,K=It*R/C*pe;$.projectionMatrix.makePerspective(S,B,J,K,pe,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function at($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,ft=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),U.near=y.near=v.near=Q,U.far=y.far=v.far=ft,(G!==U.near||z!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,z=U.far),U.layers.mask=$.layers.mask|6,v.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;let Et=$.parent,bt=U.cameras;at(U,Et);for(let kt=0;kt<bt.length;kt++)at(bt[kt],Et);bt.length===2?I(U,v,y):U.projectionMatrix.copy(v.projectionMatrix),Nt($,U,Et)};function Nt($,Q,ft){ft===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ft.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=gl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function($){return p[$]};let ne=null;function Wt($,Q){if(h=Q.getViewerPose(c||o),_=Q,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Et=!1;ft.length!==U.cameras.length&&(U.cameras.length=0,Et=!0);for(let R=0;R<ft.length;R++){let Xt=ft[R],It=null;if(f!==null)It=f.getViewport(Xt);else{let N=u.getViewSubImage(d,Xt);It=N.viewport,R===0&&(t.setRenderTargetTextures(x,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(x))}let At=D[R];At===void 0&&(At=new nn,At.layers.enable(R),At.viewport=new _e,D[R]=At),At.matrix.fromArray(Xt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(Xt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(It.x,It.y,It.width,It.height),R===0&&(U.matrix.copy(At.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Et===!0&&U.cameras.push(At)}let bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let R=u.getDepthInformation(ft[0]);R&&R.isValid&&R.texture&&m.init(R,i.renderState)}if(bt&&bt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let R=0;R<ft.length;R++){let Xt=ft[R].camera;if(Xt){let It=p[Xt];It||(It=new $o,p[Xt]=It);let At=u.getCameraImage(Xt);It.sourceTexture=At}}}}for(let ft=0;ft<w.length;ft++){let Et=E[ft],bt=w[ft];Et!==null&&bt!==void 0&&bt.update(Et,Q,c||o)}ne&&ne($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}let Gt=new $p;Gt.setAnimationLoop(Wt),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}},ns=new ai,uM=new be;function fM(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,T,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),T=M.envMap,x=M.envMapRotation;T&&(m.envMap.value=T,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(uM.makeRotationFromEuler(ns)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dM(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){let x=T.program;n.uniformBlockBinding(M,x)}function c(M,T){let x=i[M.id];x===void 0&&(_(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));let w=T.program;n.updateUBOMapping(M,w);let E=t.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function h(M){let T=u();M.__bindingPointIndex=T;let x=r.createBuffer(),w=M.__size,E=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let T=i[M.id],x=M.uniforms,w=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let E=0,A=x.length;E<A;E++){let P=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,y=P.length;v<y;v++){let D=P[v];if(f(D,E,v,w)===!0){let U=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],z=0;for(let X=0;X<G.length;X++){let H=G[X],W=g(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,U+z,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,z),z+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,T,x,w){let E=M.value,A=T+"_"+x;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:w[A]=E.clone(),!0;{let P=w[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return w[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function _(M){let T=M.uniforms,x=0,w=16;for(let A=0,P=T.length;A<P;A++){let v=Array.isArray(T[A])?T[A]:[T[A]];for(let y=0,D=v.length;y<D;y++){let U=v[y],G=Array.isArray(U.value)?U.value:[U.value];for(let z=0,X=G.length;z<X;z++){let H=G[z],W=g(H),k=x%w,nt=k%W.boundary,I=k+nt;x+=nt,I!==0&&w-I<W.storage&&(x+=w-I),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=W.storage}}}let E=x%w;return E>0&&(x+=w-E),M.__size=x,M.__cache={},this}function g(M){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),T}function m(M){let T=M.target;T.removeEventListener("dispose",m);let x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Lc=class{constructor(t={}){let{canvas:e=Mp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,M=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,w=!1;this._outputColorSpace=Tn;let E=0,A=0,P=null,v=-1,y=null,D=new _e,U=new _e,G=null,z=new ae(0),X=0,H=e.width,W=e.height,k=1,nt=null,I=null,at=new _e(0,0,H,W),Nt=new _e(0,0,H,W),ne=!1,Wt=new Ys,Gt=!1,$=!1,Q=new be,ft=new V,Et=new _e,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function de(){return P===null?k:1}let R=n;function Xt(b,F){return e.getContext(b,F)}try{let b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",et,!1),R===null){let F="webgl2";if(R=Xt(F,b),R===null)throw Xt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let It,At,N,ie,_t,Vt,$t,pe,C,S,B,J,K,Z,xt,st,Tt,ut,rt,ht,Lt,wt,ct,Ht;function L(){It=new Iv(R),It.init(),wt=new lM(R,It),At=new Tv(R,It,t,wt),N=new oM(R,It),At.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),ie=new Uv(R),_t=new qy,Vt=new aM(R,It,N,_t,At,wt,ie),$t=new Ev(x),pe=new Pv(x),C=new k_(R),ct=new Sv(R,C),S=new Dv(R,C,ie,ct),B=new Fv(R,S,C,ie),rt=new Nv(R,At,Vt),st=new wv(_t),J=new Yy(x,$t,pe,It,At,ct,st),K=new fM(x,_t),Z=new $y,xt=new eM(It),ut=new Mv(x,$t,pe,N,B,f,l),Tt=new rM(x,B,At),Ht=new dM(R,ie,At,N),ht=new bv(R,It,ie),Lt=new Lv(R,It,ie),ie.programs=J.programs,x.capabilities=At,x.extensions=It,x.properties=_t,x.renderLists=Z,x.shadowMap=Tt,x.state=N,x.info=ie}L();let it=new ku(x,R);this.xr=it,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=It.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=It.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(H,W,!1))},this.getSize=function(b){return b.set(H,W)},this.setSize=function(b,F,Y=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,W=F,e.width=Math.floor(b*k),e.height=Math.floor(F*k),Y===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(H*k,W*k).floor()},this.setDrawingBufferSize=function(b,F,Y){H=b,W=F,k=Y,e.width=Math.floor(b*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(at)},this.setViewport=function(b,F,Y,q){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,F,Y,q),N.viewport(D.copy(at).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Nt)},this.setScissor=function(b,F,Y,q){b.isVector4?Nt.set(b.x,b.y,b.z,b.w):Nt.set(b,F,Y,q),N.scissor(U.copy(Nt).multiplyScalar(k).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){N.setScissorTest(ne=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){I=b},this.getClearColor=function(b){return b.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,Y=!0){let q=0;if(b){let O=!1;if(P!==null){let tt=P.texture.format;O=tt===tc||tt===jl||tt===Ql}if(O){let tt=P.texture.type,lt=tt===bi||tt===Ar||tt===Zs||tt===Js||tt===$l||tt===Jl,Mt=ut.getClearColor(),vt=ut.getClearAlpha(),Ut=Mt.r,Pt=Mt.g,Rt=Mt.b;lt?(_[0]=Ut,_[1]=Pt,_[2]=Rt,_[3]=vt,R.clearBufferuiv(R.COLOR,0,_)):(g[0]=Ut,g[1]=Pt,g[2]=Rt,g[3]=vt,R.clearBufferiv(R.COLOR,0,g))}else q|=R.COLOR_BUFFER_BIT}F&&(q|=R.DEPTH_BUFFER_BIT),Y&&(q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",et,!1),ut.dispose(),Z.dispose(),xt.dispose(),_t.dispose(),$t.dispose(),pe.dispose(),B.dispose(),ct.dispose(),Ht.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",qt),it.removeEventListener("sessionend",dt),Bt.stop()};function ot(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=ie.autoReset,F=Tt.enabled,Y=Tt.autoUpdate,q=Tt.needsUpdate,O=Tt.type;L(),ie.autoReset=b,Tt.enabled=F,Tt.autoUpdate=Y,Tt.needsUpdate=q,Tt.type=O}function et(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function j(b){let F=b.target;F.removeEventListener("dispose",j),yt(F)}function yt(b){Ft(b),_t.remove(b)}function Ft(b){let F=_t.get(b).programs;F!==void 0&&(F.forEach(function(Y){J.releaseProgram(Y)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,Y,q,O,tt){F===null&&(F=bt);let lt=O.isMesh&&O.matrixWorld.determinant()<0,Mt=ge(b,F,Y,q,O);N.setMaterial(q,lt);let vt=Y.index,Ut=1;if(q.wireframe===!0){if(vt=S.getWireframeAttribute(Y),vt===void 0)return;Ut=2}let Pt=Y.drawRange,Rt=Y.attributes.position,Jt=Pt.start*Ut,se=(Pt.start+Pt.count)*Ut;tt!==null&&(Jt=Math.max(Jt,tt.start*Ut),se=Math.min(se,(tt.start+tt.count)*Ut)),vt!==null?(Jt=Math.max(Jt,0),se=Math.min(se,vt.count)):Rt!=null&&(Jt=Math.max(Jt,0),se=Math.min(se,Rt.count));let Fe=se-Jt;if(Fe<0||Fe===1/0)return;ct.setup(O,q,Mt,Y,vt);let Ae,ye=ht;if(vt!==null&&(Ae=C.get(vt),ye=Lt,ye.setIndex(Ae)),O.isMesh)q.wireframe===!0?(N.setLineWidth(q.wireframeLinewidth*de()),ye.setMode(R.LINES)):ye.setMode(R.TRIANGLES);else if(O.isLine){let zt=q.linewidth;zt===void 0&&(zt=1),N.setLineWidth(zt*de()),O.isLineSegments?ye.setMode(R.LINES):O.isLineLoop?ye.setMode(R.LINE_LOOP):ye.setMode(R.LINE_STRIP)}else O.isPoints?ye.setMode(R.POINTS):O.isSprite&&ye.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))ye.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let zt=O._multiDrawStarts,De=O._multiDrawCounts,fe=O._multiDrawCount,Wn=vt?C.get(vt).bytesPerElement:1,Es=_t.get(q).currentProgram.getUniforms();for(let Xn=0;Xn<fe;Xn++)Es.setValue(R,"_gl_DrawID",Xn),ye.render(zt[Xn]/Wn,De[Xn])}else if(O.isInstancedMesh)ye.renderInstances(Jt,Fe,O.count);else if(Y.isInstancedBufferGeometry){let zt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,De=Math.min(Y.instanceCount,zt);ye.renderInstances(Jt,Fe,De)}else ye.render(Jt,Fe)};function ue(b,F,Y){b.transparent===!0&&b.side===Ni&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,Ve(b,F,Y),b.side=$i,b.needsUpdate=!0,Ve(b,F,Y),b.side=Ni):Ve(b,F,Y)}this.compile=function(b,F,Y=null){Y===null&&(Y=b),p=xt.get(Y),p.init(F),T.push(p),Y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==Y&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let q=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let tt=O.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){let Mt=tt[lt];ue(Mt,Y,O),q.add(Mt)}else ue(tt,Y,O),q.add(tt)}),p=T.pop(),q},this.compileAsync=function(b,F,Y=null){let q=this.compile(b,F,Y);return new Promise(O=>{function tt(){if(q.forEach(function(lt){_t.get(lt).currentProgram.isReady()&&q.delete(lt)}),q.size===0){O(b);return}setTimeout(tt,10)}It.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let gt=null;function Ct(b){gt&&gt(b)}function qt(){Bt.stop()}function dt(){Bt.start()}let Bt=new $p;Bt.setAnimationLoop(Ct),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(b){gt=b,it.setAnimationLoop(b),b===null?Bt.stop():Bt.start()},it.addEventListener("sessionstart",qt),it.addEventListener("sessionend",dt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(F),F=it.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,P),p=xt.get(b,T.length),p.init(F),T.push(p),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Wt.setFromProjectionMatrix(Q,yi,F.reversedDepth),$=this.localClippingEnabled,Gt=st.init(this.clippingPlanes,$),m=Z.get(b,M.length),m.init(),M.push(m),it.enabled===!0&&it.isPresenting===!0){let tt=x.xr.getDepthSensingMesh();tt!==null&&Dt(tt,F,-1/0,x.sortObjects)}Dt(b,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(nt,I),kt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,kt&&ut.addToRenderList(m,b),this.info.render.frame++,Gt===!0&&st.beginShadows();let Y=p.state.shadowsArray;Tt.render(Y,b,F),Gt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){let tt=F.cameras;if(O.length>0)for(let lt=0,Mt=tt.length;lt<Mt;lt++){let vt=tt[lt];ke(q,O,b,vt)}kt&&ut.render(b);for(let lt=0,Mt=tt.length;lt<Mt;lt++){let vt=tt[lt];Yt(m,b,vt,vt.viewport)}}else O.length>0&&ke(q,O,b,F),kt&&ut.render(b),Yt(m,b,F);P!==null&&A===0&&(Vt.updateMultisampleRenderTarget(P),Vt.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(x,b,F),ct.resetDefaultState(),v=-1,y=null,T.pop(),T.length>0?(p=T[T.length-1],Gt===!0&&st.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Dt(b,F,Y,q){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Wt.intersectsSprite(b)){q&&Et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Q);let lt=B.update(b),Mt=b.material;Mt.visible&&m.push(b,lt,Mt,Y,Et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Wt.intersectsObject(b))){let lt=B.update(b),Mt=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Et.copy(b.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Et.copy(lt.boundingSphere.center)),Et.applyMatrix4(b.matrixWorld).applyMatrix4(Q)),Array.isArray(Mt)){let vt=lt.groups;for(let Ut=0,Pt=vt.length;Ut<Pt;Ut++){let Rt=vt[Ut],Jt=Mt[Rt.materialIndex];Jt&&Jt.visible&&m.push(b,lt,Jt,Y,Et.z,Rt)}}else Mt.visible&&m.push(b,lt,Mt,Y,Et.z,null)}}let tt=b.children;for(let lt=0,Mt=tt.length;lt<Mt;lt++)Dt(tt[lt],F,Y,q)}function Yt(b,F,Y,q){let O=b.opaque,tt=b.transmissive,lt=b.transparent;p.setupLightsView(Y),Gt===!0&&st.setGlobalState(x.clippingPlanes,Y),q&&N.viewport(D.copy(q)),O.length>0&&Kt(O,F,Y),tt.length>0&&Kt(tt,F,Y),lt.length>0&&Kt(lt,F,Y),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function ke(b,F,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Pi(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?$s:bi,minFilter:Er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let tt=p.state.transmissionRenderTarget[q.id],lt=q.viewport||D;tt.setSize(lt.z*x.transmissionResolutionScale,lt.w*x.transmissionResolutionScale);let Mt=x.getRenderTarget(),vt=x.getActiveCubeFace(),Ut=x.getActiveMipmapLevel();x.setRenderTarget(tt),x.getClearColor(z),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),kt&&ut.render(Y);let Pt=x.toneMapping;x.toneMapping=tr;let Rt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Gt===!0&&st.setGlobalState(x.clippingPlanes,q),Kt(b,Y,q),Vt.updateMultisampleRenderTarget(tt),Vt.updateRenderTargetMipmap(tt),It.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let se=0,Fe=F.length;se<Fe;se++){let Ae=F[se],ye=Ae.object,zt=Ae.geometry,De=Ae.material,fe=Ae.group;if(De.side===Ni&&ye.layers.test(q.layers)){let Wn=De.side;De.side=sn,De.needsUpdate=!0,Pe(ye,Y,q,zt,De,fe),De.side=Wn,De.needsUpdate=!0,Jt=!0}}Jt===!0&&(Vt.updateMultisampleRenderTarget(tt),Vt.updateRenderTargetMipmap(tt))}x.setRenderTarget(Mt,vt,Ut),x.setClearColor(z,X),Rt!==void 0&&(q.viewport=Rt),x.toneMapping=Pt}function Kt(b,F,Y){let q=F.isScene===!0?F.overrideMaterial:null;for(let O=0,tt=b.length;O<tt;O++){let lt=b[O],Mt=lt.object,vt=lt.geometry,Ut=lt.group,Pt=lt.material;Pt.allowOverride===!0&&q!==null&&(Pt=q),Mt.layers.test(Y.layers)&&Pe(Mt,F,Y,vt,Pt,Ut)}}function Pe(b,F,Y,q,O,tt){b.onBeforeRender(x,F,Y,q,O,tt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(x,F,Y,q,b,tt),O.transparent===!0&&O.side===Ni&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,x.renderBufferDirect(Y,F,q,O,b,tt),O.side=$i,O.needsUpdate=!0,x.renderBufferDirect(Y,F,q,O,b,tt),O.side=Ni):x.renderBufferDirect(Y,F,q,O,b,tt),b.onAfterRender(x,F,Y,q,O,tt)}function Ve(b,F,Y){F.isScene!==!0&&(F=bt);let q=_t.get(b),O=p.state.lights,tt=p.state.shadowsArray,lt=O.state.version,Mt=J.getParameters(b,O.state,tt,F,Y),vt=J.getProgramCacheKey(Mt),Ut=q.programs;q.environment=b.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(b.isMeshStandardMaterial?pe:$t).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ut===void 0&&(b.addEventListener("dispose",j),Ut=new Map,q.programs=Ut);let Pt=Ut.get(vt);if(Pt!==void 0){if(q.currentProgram===Pt&&q.lightsStateVersion===lt)return ve(b,Mt),Pt}else Mt.uniforms=J.getUniforms(b),b.onBeforeCompile(Mt,x),Pt=J.acquireProgram(Mt,vt),Ut.set(vt,Pt),q.uniforms=Mt.uniforms;let Rt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=st.uniform),ve(b,Mt),q.needsLights=Ee(b),q.lightsStateVersion=lt,q.needsLights&&(Rt.ambientLightColor.value=O.state.ambient,Rt.lightProbe.value=O.state.probe,Rt.directionalLights.value=O.state.directional,Rt.directionalLightShadows.value=O.state.directionalShadow,Rt.spotLights.value=O.state.spot,Rt.spotLightShadows.value=O.state.spotShadow,Rt.rectAreaLights.value=O.state.rectArea,Rt.ltc_1.value=O.state.rectAreaLTC1,Rt.ltc_2.value=O.state.rectAreaLTC2,Rt.pointLights.value=O.state.point,Rt.pointLightShadows.value=O.state.pointShadow,Rt.hemisphereLights.value=O.state.hemi,Rt.directionalShadowMap.value=O.state.directionalShadowMap,Rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Rt.spotShadowMap.value=O.state.spotShadowMap,Rt.spotLightMatrix.value=O.state.spotLightMatrix,Rt.spotLightMap.value=O.state.spotLightMap,Rt.pointShadowMap.value=O.state.pointShadowMap,Rt.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Pt,q.uniformsList=null,Pt}function we(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=to.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function ve(b,F){let Y=_t.get(b);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function ge(b,F,Y,q,O){F.isScene!==!0&&(F=bt),Vt.resetTextureUnits();let tt=F.fog,lt=q.isMeshStandardMaterial?F.environment:null,Mt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zr,vt=(q.isMeshStandardMaterial?pe:$t).get(q.envMap||lt),Ut=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Pt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Rt=!!Y.morphAttributes.position,Jt=!!Y.morphAttributes.normal,se=!!Y.morphAttributes.color,Fe=tr;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Fe=x.toneMapping);let Ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ye=Ae!==void 0?Ae.length:0,zt=_t.get(q),De=p.state.lights;if(Gt===!0&&($===!0||b!==y)){let bn=b===y&&q.id===v;st.setState(q,b,bn)}let fe=!1;q.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==De.state.version||zt.outputColorSpace!==Mt||O.isBatchedMesh&&zt.batching===!1||!O.isBatchedMesh&&zt.batching===!0||O.isBatchedMesh&&zt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&zt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&zt.instancing===!1||!O.isInstancedMesh&&zt.instancing===!0||O.isSkinnedMesh&&zt.skinning===!1||!O.isSkinnedMesh&&zt.skinning===!0||O.isInstancedMesh&&zt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&zt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&zt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&zt.instancingMorph===!1&&O.morphTexture!==null||zt.envMap!==vt||q.fog===!0&&zt.fog!==tt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==st.numPlanes||zt.numIntersection!==st.numIntersection)||zt.vertexAlphas!==Ut||zt.vertexTangents!==Pt||zt.morphTargets!==Rt||zt.morphNormals!==Jt||zt.morphColors!==se||zt.toneMapping!==Fe||zt.morphTargetsCount!==ye)&&(fe=!0):(fe=!0,zt.__version=q.version);let Wn=zt.currentProgram;fe===!0&&(Wn=Ve(q,F,O));let Es=!1,Xn=!1,Eo=!1,Le=Wn.getUniforms(),ri=zt.uniforms;if(N.useProgram(Wn.program)&&(Es=!0,Xn=!0,Eo=!0),q.id!==v&&(v=q.id,Xn=!0),Es||y!==b){N.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Le.setValue(R,"projectionMatrix",b.projectionMatrix),Le.setValue(R,"viewMatrix",b.matrixWorldInverse);let Ln=Le.map.cameraPosition;Ln!==void 0&&Ln.setValue(R,ft.setFromMatrixPosition(b.matrixWorld)),At.logarithmicDepthBuffer&&Le.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Le.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Xn=!0,Eo=!0)}if(O.isSkinnedMesh){Le.setOptional(R,O,"bindMatrix"),Le.setOptional(R,O,"bindMatrixInverse");let bn=O.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Le.setValue(R,"boneTexture",bn.boneTexture,Vt))}O.isBatchedMesh&&(Le.setOptional(R,O,"batchingTexture"),Le.setValue(R,"batchingTexture",O._matricesTexture,Vt),Le.setOptional(R,O,"batchingIdTexture"),Le.setValue(R,"batchingIdTexture",O._indirectTexture,Vt),Le.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&Le.setValue(R,"batchingColorTexture",O._colorsTexture,Vt));let si=Y.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&rt.update(O,Y,Wn),(Xn||zt.receiveShadow!==O.receiveShadow)&&(zt.receiveShadow=O.receiveShadow,Le.setValue(R,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ri.envMap.value=vt,ri.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(ri.envMapIntensity.value=F.environmentIntensity),Xn&&(Le.setValue(R,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&Gn(ri,Eo),tt&&q.fog===!0&&K.refreshFogUniforms(ri,tt),K.refreshMaterialUniforms(ri,q,k,W,p.state.transmissionRenderTarget[b.id]),to.upload(R,we(zt),ri,Vt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(to.upload(R,we(zt),ri,Vt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Le.setValue(R,"center",O.center),Le.setValue(R,"modelViewMatrix",O.modelViewMatrix),Le.setValue(R,"normalMatrix",O.normalMatrix),Le.setValue(R,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let bn=q.uniformsGroups;for(let Ln=0,Eh=bn.length;Ln<Eh;Ln++){let kr=bn[Ln];Ht.update(kr,Wn),Ht.bind(kr,Wn)}}return Wn}function Gn(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Ee(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,F,Y){let q=_t.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),_t.get(b.texture).__webglTexture=F,_t.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let Y=_t.get(b);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0};let Sn=R.createFramebuffer();this.setRenderTarget=function(b,F=0,Y=0){P=b,E=F,A=Y;let q=!0,O=null,tt=!1,lt=!1;if(b){let vt=_t.get(b);if(vt.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(R.FRAMEBUFFER,null),q=!1;else if(vt.__webglFramebuffer===void 0)Vt.setupRenderTarget(b);else if(vt.__hasExternalTextures)Vt.rebindTextures(b,_t.get(b.texture).__webglTexture,_t.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Rt=b.depthTexture;if(vt.__boundDepthTexture!==Rt){if(Rt!==null&&_t.has(Rt)&&(b.width!==Rt.image.width||b.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(b)}}let Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(lt=!0);let Pt=_t.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pt[F])?O=Pt[F][Y]:O=Pt[F],tt=!0):b.samples>0&&Vt.useMultisampledRTT(b)===!1?O=_t.get(b).__webglMultisampledFramebuffer:Array.isArray(Pt)?O=Pt[Y]:O=Pt,D.copy(b.viewport),U.copy(b.scissor),G=b.scissorTest}else D.copy(at).multiplyScalar(k).floor(),U.copy(Nt).multiplyScalar(k).floor(),G=ne;if(Y!==0&&(O=Sn),N.bindFramebuffer(R.FRAMEBUFFER,O)&&q&&N.drawBuffers(b,O),N.viewport(D),N.scissor(U),N.setScissorTest(G),tt){let vt=_t.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,Y)}else if(lt){let vt=F;for(let Ut=0;Ut<b.textures.length;Ut++){let Pt=_t.get(b.textures[Ut]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ut,Pt.__webglTexture,Y,vt)}}else if(b!==null&&Y!==0){let vt=_t.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,vt.__webglTexture,Y)}v=-1},this.readRenderTargetPixels=function(b,F,Y,q,O,tt,lt,Mt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(vt=vt[lt]),vt){N.bindFramebuffer(R.FRAMEBUFFER,vt);try{let Ut=b.textures[Mt],Pt=Ut.format,Rt=Ut.type;if(!At.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-q&&Y>=0&&Y<=b.height-O&&(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Mt),R.readPixels(F,Y,q,O,wt.convert(Pt),wt.convert(Rt),tt))}finally{let Ut=P!==null?_t.get(P).__webglFramebuffer:null;N.bindFramebuffer(R.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(b,F,Y,q,O,tt,lt,Mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(vt=vt[lt]),vt)if(F>=0&&F<=b.width-q&&Y>=0&&Y<=b.height-O){N.bindFramebuffer(R.FRAMEBUFFER,vt);let Ut=b.textures[Mt],Pt=Ut.format,Rt=Ut.type;if(!At.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Jt),R.bufferData(R.PIXEL_PACK_BUFFER,tt.byteLength,R.STREAM_READ),b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Mt),R.readPixels(F,Y,q,O,wt.convert(Pt),wt.convert(Rt),0);let se=P!==null?_t.get(P).__webglFramebuffer:null;N.bindFramebuffer(R.FRAMEBUFFER,se);let Fe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Sp(R,Fe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Jt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,tt),R.deleteBuffer(Jt),R.deleteSync(Fe),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,Y=0){let q=Math.pow(2,-Y),O=Math.floor(b.image.width*q),tt=Math.floor(b.image.height*q),lt=F!==null?F.x:0,Mt=F!==null?F.y:0;Vt.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,Y,0,0,lt,Mt,O,tt),N.unbindTexture()};let ii=R.createFramebuffer(),qe=R.createFramebuffer();this.copyTextureToTexture=function(b,F,Y=null,q=null,O=0,tt=null){tt===null&&(O!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=O,O=0):tt=0);let lt,Mt,vt,Ut,Pt,Rt,Jt,se,Fe,Ae=b.isCompressedTexture?b.mipmaps[tt]:b.image;if(Y!==null)lt=Y.max.x-Y.min.x,Mt=Y.max.y-Y.min.y,vt=Y.isBox3?Y.max.z-Y.min.z:1,Ut=Y.min.x,Pt=Y.min.y,Rt=Y.isBox3?Y.min.z:0;else{let si=Math.pow(2,-O);lt=Math.floor(Ae.width*si),Mt=Math.floor(Ae.height*si),b.isDataArrayTexture?vt=Ae.depth:b.isData3DTexture?vt=Math.floor(Ae.depth*si):vt=1,Ut=0,Pt=0,Rt=0}q!==null?(Jt=q.x,se=q.y,Fe=q.z):(Jt=0,se=0,Fe=0);let ye=wt.convert(F.format),zt=wt.convert(F.type),De;F.isData3DTexture?(Vt.setTexture3D(F,0),De=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Vt.setTexture2DArray(F,0),De=R.TEXTURE_2D_ARRAY):(Vt.setTexture2D(F,0),De=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);let fe=R.getParameter(R.UNPACK_ROW_LENGTH),Wn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Es=R.getParameter(R.UNPACK_SKIP_PIXELS),Xn=R.getParameter(R.UNPACK_SKIP_ROWS),Eo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ae.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ae.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ut),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Rt);let Le=b.isDataArrayTexture||b.isData3DTexture,ri=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let si=_t.get(b),bn=_t.get(F),Ln=_t.get(si.__renderTarget),Eh=_t.get(bn.__renderTarget);N.bindFramebuffer(R.READ_FRAMEBUFFER,Ln.__webglFramebuffer),N.bindFramebuffer(R.DRAW_FRAMEBUFFER,Eh.__webglFramebuffer);for(let kr=0;kr<vt;kr++)Le&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(b).__webglTexture,O,Rt+kr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(F).__webglTexture,tt,Fe+kr)),R.blitFramebuffer(Ut,Pt,lt,Mt,Jt,se,lt,Mt,R.DEPTH_BUFFER_BIT,R.NEAREST);N.bindFramebuffer(R.READ_FRAMEBUFFER,null),N.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||_t.has(b)){let si=_t.get(b),bn=_t.get(F);N.bindFramebuffer(R.READ_FRAMEBUFFER,ii),N.bindFramebuffer(R.DRAW_FRAMEBUFFER,qe);for(let Ln=0;Ln<vt;Ln++)Le?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,si.__webglTexture,O,Rt+Ln):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,si.__webglTexture,O),ri?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,bn.__webglTexture,tt,Fe+Ln):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,bn.__webglTexture,tt),O!==0?R.blitFramebuffer(Ut,Pt,lt,Mt,Jt,se,lt,Mt,R.COLOR_BUFFER_BIT,R.NEAREST):ri?R.copyTexSubImage3D(De,tt,Jt,se,Fe+Ln,Ut,Pt,lt,Mt):R.copyTexSubImage2D(De,tt,Jt,se,Ut,Pt,lt,Mt);N.bindFramebuffer(R.READ_FRAMEBUFFER,null),N.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ri?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(De,tt,Jt,se,Fe,lt,Mt,vt,ye,zt,Ae.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(De,tt,Jt,se,Fe,lt,Mt,vt,ye,Ae.data):R.texSubImage3D(De,tt,Jt,se,Fe,lt,Mt,vt,ye,zt,Ae):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,tt,Jt,se,lt,Mt,ye,zt,Ae.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,tt,Jt,se,Ae.width,Ae.height,ye,Ae.data):R.texSubImage2D(R.TEXTURE_2D,tt,Jt,se,lt,Mt,ye,zt,Ae);R.pixelStorei(R.UNPACK_ROW_LENGTH,fe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Wn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Es),R.pixelStorei(R.UNPACK_SKIP_ROWS,Xn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Eo),tt===0&&F.generateMipmaps&&R.generateMipmap(De),N.unbindTexture()},this.initRenderTarget=function(b){_t.get(b).__webglFramebuffer===void 0&&Vt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Vt.setTextureCube(b,0):b.isData3DTexture?Vt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Vt.setTexture2DArray(b,0):Vt.setTexture2D(b,0),N.unbindTexture()},this.resetState=function(){E=0,A=0,P=null,N.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Nc=class extends $r{constructor(){super();let t=new br;t.deleteAttribute("uv");let e=new Li({side:sn}),n=new Li,i=new ea(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Re(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new qo(t,n,6),a=new rn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Re(t,io(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Re(t,io(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Re(t,io(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Re(t,io(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Re(t,io(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Re(t,io(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function io(r){return new jo({color:0,emissive:16777215,emissiveIntensity:r})}function nr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function am(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},so={duration:.5,overwrite:!1,delay:0},af,an,Ie,hi=1e8,Se=1/hi,$u=Math.PI*2,mM=$u/4,gM=0,lm=Math.sqrt,_M=Math.cos,xM=Math.sin,Je=function(t){return typeof t=="string"},Oe=function(t){return typeof t=="function"},rr=function(t){return typeof t=="number"},Xc=function(t){return typeof t>"u"},zi=function(t){return typeof t=="object"},kn=function(t){return t!==!1},lf=function(){return typeof window<"u"},Fc=function(t){return Oe(t)||Je(t)},cm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,Ju=/(?:-?\.?\d|\.)+/gi,cf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hf=/[+-]=-?[.\d]+/,hm=/[^,'"\[\]\s]+/gi,vM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,Oi,Ku,uf,Jn={},kc={},um,fm=function(t){return(kc=oo(t,Jn))&&gn},Yc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},xa=function(t,e){return!e&&console.warn(t)},dm=function(t,e){return t&&(Jn[t]=e)&&kc&&(kc[t]=e)||Jn},va=function(){return 0},yM={suppressEvents:!0,isStart:!0,kill:!1},Oc={suppressEvents:!0,kill:!1},MM={suppressEvents:!0},ff={},Rr=[],Qu={},pm,Bn={},Gu={},tm=30,Bc=[],df="",pf=function(t){var e=t[0],n,i;if(zi(e)||Oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Bc.length;i--&&!Bc[i].targetTest(e););n=Bc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new xf(t[i],n)))||t.splice(i,1);return t},Pr=function(t){return t._gsap||pf(ui(t))[0]._gsap},mf=function(t,e,n){return(n=t[e])&&Oe(n)?t[e]():Xc(n)&&t.getAttribute&&t.getAttribute(e)||n},wn=function(t,e){return(t=t.split(",")).forEach(e)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},We=function(t){return Math.round(t*1e7)/1e7||0},cs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},SM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Vc=function(){var t=Rr.length,e=Rr.slice(0),n,i;for(Qu={},Rr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gf=function(t){return!!(t._initted||t._startAt||t.add)},mm=function(t,e,n,i){Rr.length&&!an&&Vc(),t.render(e,n,i||!!(an&&e<0&&gf(t))),Rr.length&&!an&&Vc()},gm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(hm).length<2?e:Je(t)?t.trim():t},_m=function(t){return t},Kn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},bM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},oo=function(t,e){for(var n in e)t[n]=e[n];return t},em=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=zi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Hc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ma=function(t){var e=t.parent||Ue,n=t.keyframes?bM(mn(t.keyframes)):Kn;if(kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},TM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},xm=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},qc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ir=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ss=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},wM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ju=function(t,e,n,i){return t._startAt&&(an?t._startAt.revert(Oc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},EM=function r(t){return!t||t._ts&&r(t.parent)},nm=function(t){return t._repeat?ao(t._tTime,t=t.duration()+t._rDelay)*t:0},ao=function(t,e){var n=Math.floor(t=We(t/e));return t&&n===t?n-1:n},Gc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Zc=function(t){return t._end=We(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},$c=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=We(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Zc(t),n._dirty||ss(n,t)),t},vm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Gc(t.rawTime(),e),(!e._dur||Sa(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),ss(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Bi=function(t,e,n,i){return e.parent&&Ir(e),e._start=We((rr(n)?n:n||t!==Ue?ci(t,n,e):t._time)+e._delay),e._end=We(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),xm(t,e,"_first","_last",t._sort?"_start":0),tf(e)||(t._recent=e),i||vm(t,e),t._ts<0&&$c(t,t._tTime),t},ym=function(t,e){return(Jn.ScrollTrigger||Yc("scrollTrigger",e))&&Jn.ScrollTrigger.create(e,t)},Mm=function(t,e,n,i,s){if(Mf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!an&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&pm!==zn.frame)return Rr.push(t),t._lazy=[s,i],1},AM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},tf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},CM=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&AM(t)&&!(!t._initted&&tf(t))||(t._ts<0||t._dp._ts<0)&&!tf(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Sa(0,t._tDur,e),h=ao(l,a),t._yoyo&&h&1&&(o=1-o),h!==ao(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||an||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&Mm(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&ju(t,e,n,!0),t._onUpdate&&!n&&$n(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&$n(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ir(t,1),!n&&!an&&($n(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},RM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},lo=function(t,e,n,i){var s=t._repeat,o=We(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:We(o*(s+1)+t._rDelay*s):o,a>0&&!i&&$c(t,t._tTime=t._tDur*a),t.parent&&Zc(t),n||ss(t.parent,t),t},im=function(t){return t instanceof on?ss(t):lo(t,t._dur)},PM={_start:0,endTime:va,totalDuration:va},ci=function r(t,e,n){var i=t.labels,s=t._recent||PM,o=t.duration()>=hi?s.endTime(!1):t._dur,a,l,c;return Je(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(mn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ga=function(t,e,n){var i=rr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=kn(l.vars.inherit)&&l.parent;o.immediateRender=kn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new He(e[0],o,e[s+1])},Dr=function(t,e){return t||t===0?e(t):e},Sa=function(t,e,n){return n<t?t:n>e?e:n},ln=function(t,e){return!Je(t)||!(e=vM.exec(t))?"":e[1]},IM=function(t,e,n){return Dr(n,function(i){return Sa(t,e,i)})},ef=[].slice,Sm=function(t,e){return t&&zi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&zi(t[0]))&&!t.nodeType&&t!==Oi},DM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Je(i)&&!e||Sm(i,1)?(s=n).push.apply(s,ui(i)):n.push(i)})||n},ui=function(t,e,n){return Ie&&!e&&Ie.selector?Ie.selector(t):Je(t)&&!n&&(Ku||!co())?ef.call((e||uf).querySelectorAll(t),0):mn(t)?DM(t,n):Sm(t)?ef.call(t,0):t?[t]:[]},nf=function(t){return t=ui(t)[0]||xa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ui(e,n.querySelectorAll?n:n===t?xa("Invalid scope")||uf.createElement("div"):t)}},bm=function(t){return t.sort(function(){return .5-Math.random()})},Tm=function(t){if(Oe(t))return t;var e=zi(t)?t:{each:t},n=os(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Je(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=o[g],p,M,T,x,w,E,A,P,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,hi])[1],!v){for(A=-hi;A<(A=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=o[g]=[],p=l?Math.min(v,g)*h-.5:i%v,M=v===hi?0:l?g*u/v-.5:i/v|0,A=0,P=hi,E=0;E<g;E++)T=E%v-p,x=M-(E/v|0),m[E]=w=c?Math.abs(c==="y"?x:T):lm(T*T+x*x),w>A&&(A=w),w<P&&(P=w);i==="random"&&bm(m),m.max=A-P,m.min=P,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=ln(e.amount||e.each)||0,n=n&&g<0?Lm(n):n}return g=(m[d]-m.min)/m.max||0,We(m.b+(n?n(g):g)*m.v)+m.u}},rf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=We(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(rr(n)?0:ln(n))}},wm=function(t,e){var n=mn(t),i,s;return!n&&zi(t)&&(i=n=t.radius||hi,t.values?(t=ui(t.values),(s=!rr(t[0]))&&(i*=i)):t=rf(t.increment)),Dr(e,n?Oe(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=hi,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,s||h===o||rr(o)?h:h+ln(o)}:rf(t))},Em=function(t,e,n,i){return Dr(mn(t)?!e:n===!0?!!(n=0):!i,function(){return mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},LM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},UM=function(t,e){return function(n){return t(parseFloat(n))+(e||ln(n))}},NM=function(t,e,n){return Cm(t,e,0,1,n)},Am=function(t,e,n){return Dr(n,function(i){return t[~~e(i)]})},FM=function r(t,e,n){var i=e-t;return mn(t)?Am(t,r(0,t.length),e):Dr(n,function(s){return(i+(s-t)%i)%i+t})},OM=function r(t,e,n){var i=e-t,s=i*2;return mn(t)?Am(t,r(0,t.length-1),e):Dr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},ho=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?hm:Ju),n+=t.substr(e,i-e)+Em(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Cm=function(t,e,n,i,s){var o=e-t,a=i-n;return Dr(s,function(l){return n+((l-t)/o*a||0)})},BM=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Je(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(mn(t)&&!mn(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=oo(mn(t)?[]:{},t));if(!h){for(l in e)vf.call(a,t,l,"get",e[l]);s=function(_){return Tf(_,a)||(o?t.p:t)}}}return Dr(n,s)},rm=function(t,e,n){var i=t.labels,s=hi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},$n=function(t,e,n){var i=t.vars,s=i[e],o=Ie,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Rr.length&&Vc(),a&&(Ie=a),h=l?s.apply(c,l):s.call(c),Ie=o,h},da=function(t){return Ir(t),t.scrollTrigger&&t.scrollTrigger.kill(!!an),t.progress()<1&&$n(t,"onInterrupt"),t},ro,Rm=[],Pm=function(t){if(t)if(t=!t.name&&t.default||t,lf()||t.headless){var e=t.name,n=Oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:va,render:Tf,add:vf,kill:tS,modifier:jM,rawVars:0},o={targetTest:0,get:0,getSetter:Jc,aliases:{},register:0};if(co(),t!==i){if(Bn[e])return;Kn(i,Kn(Hc(t,s),o)),oo(i.prototype,oo(s,Hc(t,o))),Bn[i.prop=e]=i,t.targetTest&&(Bc.push(i),ff[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}dm(e,i),t.register&&t.register(gn,i,En)}else Rm.push(t)},Me=255,pa={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},Wu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},Im=function(t,e,n){var i=t?rr(t)?[t>>16,t>>8&Me,t&Me]:0:pa.black,s,o,a,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),pa[t])i=pa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Me,i&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Ju),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Wu(l+1/3,s,o),i[1]=Wu(l,s,o),i[2]=Wu(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(cf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ju)||pa.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Me,o=i[1]/Me,a=i[2]/Me,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Dm=function(t){var e=[],n=[],i=-1;return t.split(ir).forEach(function(s){var o=s.match(ls)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},sm=function(t,e,n){var i="",s=(t+i).match(ir),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=Im(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Dm(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ir,"1").split(ls),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ir),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},ir=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in pa)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),zM=/hsl[a]?\(/,_f=function(t){var e=t.join(" "),n;if(ir.lastIndex=0,ir.test(e))return n=zM.test(e),t[1]=sm(t[1],n),t[0]=sm(t[0],n,Dm(t[1])),!0},ya,zn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,_=function g(m){var p=r()-i,M=m===!0,T,x,w,E;if((p>t||p<0)&&(n+=p-e),i+=p,w=i-n,T=w-o,(T>0||M)&&(E=++u.frame,d=w-u.time*1e3,u.time=w=w/1e3,o+=T+(T>=s?4:s-T),x=1),M||(l=c(g)),x)for(f=0;f<a.length;f++)a[f](w,d,E,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){um&&(!Ku&&lf()&&(Oi=Ku=window,uf=Oi.document||{},Jn.gsap=gn,(Oi.gsapVersions||(Oi.gsapVersions=[])).push(gn.version),fm(kc||Oi.GreenSockGlobals||!Oi.gsap&&Oi||{}),Rm.forEach(Pm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},ya=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ya=0,c=va},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,M){var T=p?function(x,w,E,A){m(x,w,E,A),u.remove(T)}:m;return u.remove(m),a[M?"unshift":"push"](T),co(),T},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),co=function(){return!ya&&zn.wake()},le={},kM=/^[\d.\-M][\d.\-,\s]/,VM=/["']/g,HM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(VM,"").trim():+c,i=l.substr(a+1).trim();return e},GM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},WM=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[HM(e[1])]:GM(t).split(",").map(gm)):le._CE&&kM.test(t)?le._CE("",t):n},Lm=function(t){return function(e){return 1-t(1-e)}},Um=function r(t,e){for(var n=t._first,i;n;)n instanceof on?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},os=function(t,e){return t&&(Oe(t)?t:le[t]||WM(t))||e},hs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return wn(t,function(a){le[a]=Jn[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},Nm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Xu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/$u*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*xM((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Nm(a);return s=$u/s,l.config=function(c,h){return r(t,c,h)},l},Yu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Nm(n);return i.config=function(s){return r(t,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;hs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;hs("Elastic",Xu("in"),Xu("out"),Xu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};hs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);hs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});hs("Circ",function(r){return-(lm(1-r*r)-1)});hs("Sine",function(r){return r===1?1:-_M(r*mM)+1});hs("Back",Yu("in"),Yu("out"),Yu());le.SteppedEase=le.steps=Jn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Se;return function(a){return((i*Sa(0,o,a)|0)+s)*n}}};so.ease=le["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return df+=r+","+r+"Params,"});var xf=function(t,e){this.id=gM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:mf,this.set=e?e.getSetter:Jc},Ma=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,lo(this,+e.duration,1,1),this.data=e.data,Ie&&(this._ctx=Ie,Ie.data.push(this)),ya||zn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,lo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(co(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($c(this,n),!s._dp||s.parent||vm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),mm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ao(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Gc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(Sa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Zc(this),wM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(co(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Gc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=MM);var i=an;return an=n,gf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,im(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,im(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ci(this,n),kn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kn(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Oe(n)?n:_m,a=function(){var c=i.then;i.then=null,Oe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){da(this)},r})();Kn(Ma.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var on=(function(r){am(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kn(n.sortChildren),Ue&&Bi(n.parent||Ue,nr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ym(nr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ga(0,arguments,this),this},e.from=function(i,s,o){return ga(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ga(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,ma(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,ci(this,o),1),this},e.call=function(i,s,o){return Bi(this,He.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new He(i,o,ci(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,ma(o).immediateRender=kn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,ma(a).immediateRender=kn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:We(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,M,T,x,w,E,A;if(this!==Ue&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,T=this._ts,p=!T,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=We(h%m),h===l?(g=this._repeat,d=c):(w=We(h/m),g=~~w,g&&g===w&&(d=c,g--),d>c&&(d=c)),w=ao(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),E&&g&1&&(d=c-d,A=1),g!==w&&!this._lock){var P=E&&w&1,v=P===(E&&g&1);if(g<w&&(P=!P),a=P?0:h%c?c:h,this._lock=1,this.render(a||(A?0:We(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&$n(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Um(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=RM(this,We(a),We(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!w&&($n(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=-Se);break}}f=_}else{f=this._last;for(var y=i<0?i:d;f;){if(_=f._prev,(f._act||y<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||an&&gf(f)),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=y?-Se:Se);break}}f=_}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-Se)._zTime=d>=a?1:-1,this._ts))return this._start=x,Zc(this),this.render(i,s,o);this._onUpdate&&!s&&$n(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ir(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&($n(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(rr(s)||(s=ci(this,s,i)),!(i instanceof Ma)){if(mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Je(i))return this.addLabel(i,s);if(Oe(i))i=He.delayedCall(0,i);else return this}return this!==i?Bi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof He?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Je(i)?this.removeLabel(i):Oe(i)?this.killTweensOf(i):(i.parent===this&&qc(this,i),i===this._recent&&(this._recent=this._last),ss(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=We(zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ci(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=He.delayedCall(0,s||va,o);return a.data="isPause",this._hasPause=1,Bi(this,a,ci(this,i))},e.removePause=function(i){var s=this._first;for(i=ci(this,i);s;)s._start===i&&s.data==="isPause"&&Ir(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Cr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ui(i),l=this._first,c=rr(s),h;l;)l instanceof He?SM(l._targets,a)&&(c?(!Cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ci(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=He.to(o,Kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&lo(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Kn({startAt:{time:ci(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),rm(this,ci(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),rm(this,ci(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ss(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ss(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=hi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;lo(o,o===Ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ue._ts&&(mm(Ue,Gc(i,Ue)),pm=zn.frame),zn.frame>=tm){tm+=Vn.autoSleep||120;var s=Ue._first;if((!s||!s._ts)&&Vn.autoSleep&&zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||zn.sleep()}}},t})(Ma);Kn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var XM=function(t,e,n,i,s,o,a){var l=new En(this._pt,t,e,0,1,bf,null,s),c=0,h=0,u,d,f,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ho(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(Hu)||[];u=Hu.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?cs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Hu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(hf.test(i)||p)&&(l.e=0),this._pt=l,l},vf=function(t,e,n,i,s,o,a,l,c,h){Oe(i)&&(i=i(s||0,t,o));var u=t[e],d=n!=="get"?n:Oe(u)?c?t[e.indexOf("set")||!Oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Oe(u)?c?JM:Bm:Sf,_;if(Je(i)&&(~i.indexOf("random(")&&(i=ho(i)),i.charAt(1)==="="&&(_=cs(d,i)+(ln(d)||0),(_||_===0)&&(i=_))),!h||d!==i||sf)return!isNaN(d*i)&&i!==""?(_=new En(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?QM:zm,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&Yc(e,i),XM.call(this,t,e,d,i,f,l||Vn.stringFilter,c))},YM=function(t,e,n,i,s){if(Oe(t)&&(t=_a(t,s,e,n,i)),!zi(t)||t.style&&t.nodeType||mn(t)||cm(t))return Je(t)?_a(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=_a(t[a],s,e,n,i);return o},yf=function(t,e,n,i,s,o){var a,l,c,h;if(Bn[t]&&(a=new Bn[t]).init(s,a.rawVars?e[t]:YM(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new En(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ro))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Cr,sf,Mf=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,T=t._overwrite==="auto"&&!af,x=t.timeline,w,E,A,P,v,y,D,U,G,z,X,H,W;if(x&&(!d||!s)&&(s="none"),t._ease=os(s,so.ease),t._yEase=u?Lm(os(u===!0?s:u,so.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(U=m[0]?Pr(m[0]).harness:0,H=U&&i[U.prop],w=Hc(i,ff),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Oc:yM),g._lazy=0),o){if(Ir(t._startAt=He.set(m,Kn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&kn(l),startAt:null,delay:0,onUpdate:c&&function(){return $n(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(an||!a&&!f)&&t._startAt.revert(Oc),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),A=Kn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&kn(l),immediateRender:a,stagger:0,parent:p},w),H&&(A[U.prop]=H),Ir(t._startAt=He.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(an?t._startAt.revert(Oc):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&kn(l)||l&&!_,E=0;E<m.length;E++){if(v=m[E],D=v._gsap||pf(m)[E]._gsap,t._ptLookup[E]=z={},Qu[D.id]&&Rr.length&&Vc(),X=M===m?E:M.indexOf(v),U&&(G=new U).init(v,H||w,t,X,M)!==!1&&(t._pt=P=new En(t._pt,v,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(k){z[k]=P}),G.priority&&(y=1)),!U||H)for(A in w)Bn[A]&&(G=yf(A,w,t,X,v,M))?G.priority&&(y=1):z[A]=P=vf.call(t,v,A,"get",w[A],X,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),T&&t._pt&&(Cr=t,Ue.killTweensOf(v,z,t.globalTime(e)),W=!t.parent,Cr=0),t._pt&&l&&(Qu[D.id]=1)}y&&wf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!W,d&&e<=0&&x.render(hi,!0,!0)},qM=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return sf=1,t.vars[e]="+=0",Mf(t,a),sf=0,l?xa(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Be(n)+ln(u.e)),u.b&&(u.b=h.s+ln(u.b))},ZM=function(t,e){var n=t[0]?Pr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=oo({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},$M=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},_a=function(t,e,n,i,s){return Oe(t)?t.call(e,n,i,s):Je(t)&&~t.indexOf("random(")?ho(t):t},Fm=df+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Om={};wn(Fm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Om[r]=1});var He=(function(r){am(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ma(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||Ue,T=(mn(n)||cm(n)?rr(n[0]):"length"in i)?[n]:ui(n),x,w,E,A,P,v,y,D;if(a._targets=T.length?pf(T):xa("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Fc(c)||Fc(h)){if(i=a.vars,x=a.timeline=new on({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:T}),x.kill(),x.parent=x._dp=nr(a),x._start=0,d||Fc(c)||Fc(h)){if(A=T.length,y=d&&Tm(d),zi(d))for(P in d)~Fm.indexOf(P)&&(D||(D={}),D[P]=d[P]);for(w=0;w<A;w++)E=Hc(i,Om),E.stagger=0,p&&(E.yoyoEase=p),D&&oo(E,D),v=T[w],E.duration=+_a(c,nr(a),w,v,T),E.delay=(+_a(h,nr(a),w,v,T)||0)-a._delay,!d&&A===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),x.to(v,E,y?y(w,v,T):0),x._ease=le.none;x.duration()?c=h=0:a.timeline=0}else if(_){ma(Kn(x.vars.defaults,{ease:"none"})),x._ease=os(_.ease||i.ease||"none");var U=0,G,z,X;if(mn(_))_.forEach(function(H){return x.to(T,H,">")}),x.duration();else{E={};for(P in _)P==="ease"||P==="easeEach"||$M(P,_[P],E,_.easeEach);for(P in E)for(G=E[P].sort(function(H,W){return H.t-W.t}),U=0,w=0;w<G.length;w++)z=G[w],X={ease:z.e,duration:(z.t-(w?G[w-1].t:0))/100*c},X[P]=z.v,x.to(T,X,U),U+=X.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!af&&(Cr=nr(a),Ue.killTweensOf(T),Cr=0),Bi(M,nr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===We(M._time)&&kn(u)&&EM(nr(a))&&M.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-h)||0)),m&&ym(nr(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Se&&!h?l:i<Se?0:i,d,f,_,g,m,p,M,T,x;if(!c)CM(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(d=We(u%g),u===l?(_=this._repeat,d=c):(m=We(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,d=c-d),m=ao(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(T&&this._yEase&&Um(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(We(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Mm(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!a&&u&&!s&&!m&&($n(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&ju(this,i,s,o),$n(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&$n(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ju(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ir(this,1),!s&&!(h&&!a)&&(u||a||p)&&($n(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ya||zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Mf(this,c),h=this._ease(c/this._dur),qM(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):($c(this,0),this.parent||xm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!an),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Cr&&Cr.vars.overwrite!==!0)._first||da(this),this.parent&&o!==this.timeline.totalDuration()&&lo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ui(i):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&TM(a,l))return s==="all"&&(this._pt=0),da(this);for(u=this._op=this._op||[],s!=="all"&&(Je(s)&&(g={},wn(s,function(M){return g[M]=1}),s=g),s=ZM(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&qc(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&da(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ga(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ga(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ue.killTweensOf(i,s,o)},t})(Ma);Kn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new on,e=ef.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Sf=function(t,e,n){return t[e]=n},Bm=function(t,e,n){return t[e](n)},JM=function(t,e,n,i){return t[e](i.fp,n)},KM=function(t,e,n){return t.setAttribute(e,n)},Jc=function(t,e){return Oe(t[e])?Bm:Xc(t[e])&&t.setAttribute?KM:Sf},zm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},QM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},bf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Tf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},jM=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},tS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?qc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},eS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},wf=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},En=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||zm,this.d=l||this,this.set=c||Sf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=eS,this.m=n,this.mt=s,this.tween=i},r})();wn(df+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ff[r]=1});Jn.TweenMax=Jn.TweenLite=He;Jn.TimelineLite=Jn.TimelineMax=on;Ue=new on({sortChildren:!1,defaults:so,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=_f;var as=[],zc={},nS=[],om=0,iS=0,qu=function(t){return(zc[t]||nS).map(function(e){return e()})},of=function(){var t=Date.now(),e=[];t-om>2&&(qu("matchMediaInit"),as.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Oi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),qu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),om=t,qu("matchMedia"))},km=(function(){function r(e,n){this.selector=n&&nf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=iS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Oe(n)&&(s=i,i=n,n=Oe);var o=this,a=function(){var c=Ie,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=nf(s)),Ie=o,u=i.apply(o,arguments),Oe(u)&&o._r.push(u),Ie=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Oe?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ie;Ie=null,n(this),Ie=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof on?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof He)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=as.length;o--;)as[o].id===this.id&&as.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),rS=(function(){function r(e){this.contexts=[],this.scope=e,Ie&&Ie.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){zi(n)||(n={matches:n});var o=new km(0,s||this.scope),a=o.conditions={},l,c,h;Ie&&!o.selector&&(o.selector=Ie.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Oi.matchMedia(n[c]),l&&(as.indexOf(o)<0&&as.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(of):l.addEventListener("change",of)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Wc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Pm(i)})},timeline:function(t){return new on(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){Je(t)&&(t=ui(t)[0]);var s=Pr(t||{}).get,o=n?_m:gm;return n==="native"&&(n=""),t&&(e?o((Bn[e]&&Bn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Bn[a]&&Bn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ui(t),t.length>1){var i=t.map(function(h){return gn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=Bn[e],a=Pr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;ro._pt=0,u.init(t,n?h+n:h,ro,0,[t]),u.render(1,u),ro._pt&&Tf(1,ro)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=gn.to(t,Kn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=os(t.ease,so.ease)),em(so,t||{})},config:function(t){return em(Vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Bn[a]&&!Jn[a]&&xa(e+" effect requires "+a+" plugin.")}),Gu[e]=function(a,l,c){return n(ui(a),Kn(l||{},s),c)},o&&(on.prototype[e]=function(a,l,c){return this.add(Gu[e](a,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=os(e)},parseEase:function(t,e){return arguments.length?os(t,e):le},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new on(t),i,s;for(n.smoothChildTiming=kn(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&Bi(n,i,i._start-i._delay),i=s;return Bi(Ue,n,0),n},context:function(t,e){return t?new km(t,e):Ie},matchMedia:function(t){return new rS(t)},matchMediaRefresh:function(){return as.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||of()},addEventListener:function(t,e){var n=zc[t]||(zc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=zc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:FM,wrapYoyo:OM,distribute:Tm,random:Em,snap:wm,normalize:NM,getUnit:ln,clamp:IM,splitColor:Im,toArray:ui,selector:nf,mapRange:Cm,pipe:LM,unitize:UM,interpolate:BM,shuffle:bm},install:fm,effects:Gu,ticker:zn,updateRoot:on.updateRoot,plugins:Bn,globalTimeline:Ue,core:{PropTween:En,globals:dm,Tween:He,Timeline:on,Animation:Ma,getCache:Pr,_removeLinkedListItem:qc,reverting:function(){return an},context:function(t){return t&&Ie&&(Ie.data.push(t),t._ctx=Ie),Ie},suppressOverwrites:function(t){return af=t}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Wc[r]=He[r]});zn.add(on.updateRoot);ro=Wc.to({},{duration:0});var sS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},oS=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=sS(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Zu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Je(s)&&(l={},wn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}oS(a,s)}}}},gn=Wc.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Zu("roundProps",rf),Zu("modifiers"),Zu("snap",wm))||Wc;He.version=on.version=gn.version="3.13.0";um=1;lf()&&co();var aS=le.Power0,lS=le.Power1,cS=le.Power2,hS=le.Power3,uS=le.Power4,fS=le.Linear,dS=le.Quad,pS=le.Cubic,mS=le.Quart,gS=le.Quint,_S=le.Strong,xS=le.Elastic,vS=le.Back,yS=le.SteppedEase,MS=le.Bounce,SS=le.Sine,bS=le.Expo,TS=le.Circ;var Vm,Lr,fo,If,ps,wS,Hm,Df,ES=function(){return typeof window<"u"},or={},ds=180/Math.PI,po=Math.PI/180,uo=Math.atan2,Gm=1e8,Lf=/([A-Z])/g,AS=/(left|right|width|margin|padding|x)/i,CS=/[\s,\(]\S/,ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Af=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},RS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},PS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},IS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Km=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Qm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},DS=function(t,e,n){return t.style[e]=n},LS=function(t,e,n){return t.style.setProperty(e,n)},US=function(t,e,n){return t._gsap[e]=n},NS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},FS=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},OS=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ne="transform",Hn=Ne+"Origin",BS=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in or&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ki[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=sr(i,a)}):this.tfm[t]=o.x?o[t]:sr(i,t),t===Hn&&(this.tfm.zOrigin=o.zOrigin);else return ki.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Hn,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},jm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zS=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Lf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Df(),(!s||!s.isStart)&&!n[Ne]&&(jm(n),i.zOrigin&&n[Hn]&&(n[Hn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},tg=function(t,e){var n={target:t,props:[],revert:zS,save:BS};return t._gsap||gn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},eg,Cf=function(t,e){var n=Lr.createElementNS?Lr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Lr.createElement(t);return n&&n.style?n:Lr.createElement(t)},fi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Lf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,mo(e)||e,1)||""},Wm="O,Moz,ms,Ms,Webkit".split(","),mo=function(t,e,n){var i=e||ps,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Wm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Wm[o]:"")+t},Rf=function(){ES()&&window.document&&(Vm=window,Lr=Vm.document,fo=Lr.documentElement,ps=Cf("div")||{style:{}},wS=Cf("div"),Ne=mo(Ne),Hn=Ne+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",eg=!!mo("perspective"),Df=gn.core.reverting,If=1)},Xm=function(t){var e=t.ownerSVGElement,n=Cf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),fo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),fo.removeChild(n),s},Ym=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ng=function(t){var e,n;try{e=t.getBBox()}catch{e=Xm(t),n=1}return e&&(e.width||e.height)||n||(e=Xm(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ym(t,["x","cx","x1"])||0,y:+Ym(t,["y","cy","y1"])||0,width:0,height:0}:e},ig=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ng(t))},ms=function(t,e){if(e){var n=t.style,i;e in or&&e!==Hn&&(e=Ne),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Lf,"-$1").toLowerCase())):n.removeAttribute(e)}},Ur=function(t,e,n,i,s,o){var a=new En(t._pt,e,n,0,1,o?Qm:Km);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},qm={deg:1,rad:1,turn:1},kS={grid:1,flex:1},Nr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ps.style,l=AS.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===o||!s||qm[i]||qm[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&ig(t),(f||o==="%")&&(or[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Be(f?s/_*u:s/100*_);if(a[l?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Lr||!g.appendChild)&&(g=Lr.body),m=g._gsap,m&&f&&m.width&&l&&m.time===zn.time&&!m.uncache)return Be(s/m.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,_=t[h],M?t.style[e]=M:ms(t,e)}else(f||o==="%")&&!kS[fi(g,"display")]&&(a.position=fi(t,"position")),g===t&&(a.position="static"),g.appendChild(ps),_=ps[h],g.removeChild(ps),a.position="absolute";return l&&f&&(m=Pr(g),m.time=zn.time,m.width=g[h]),Be(d?_*s/u:_&&s?u/_*s:0)},sr=function(t,e,n,i){var s;return If||Rf(),e in ki&&e!=="transform"&&(e=ki[e],~e.indexOf(",")&&(e=e.split(",")[0])),or[e]&&e!=="transform"?(s=wa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Qc(fi(t,Hn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Kc[e]&&Kc[e](t,e,n)||fi(t,e)||mf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Nr(t,e,s,n)+n:s},VS=function(t,e,n,i){if(!n||n==="none"){var s=mo(e,t,1),o=s&&fi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=fi(t,"borderTopColor"))}var a=new En(this._pt,t.style,e,0,1,bf),l=0,c=0,h,u,d,f,_,g,m,p,M,T,x,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=fi(t,e)||i,g?t.style[e]=g:ms(t,e)),h=[n,i],_f(h),n=h[0],i=h[1],d=n.match(ls)||[],w=i.match(ls)||[],w.length){for(;u=ls.exec(i);)m=u[0],M=i.substring(l,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=cs(f,m)+x),p=parseFloat(m),T=m.substr((p+"").length),l=ls.lastIndex-T.length,T||(T=T||Vn.units[e]||x,l===i.length&&(i+=T,a.e+=T)),x!==T&&(f=Nr(t,e,g,T)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Qm:Km;return hf.test(i)&&(a.e=0),this._pt=a,a},Zm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},HS=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Zm[n]||n,e[1]=Zm[i]||i,e.join(" ")},GS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],or[a]&&(l=1,a=a==="transformOrigin"?Hn:Ne),ms(n,a);l&&(ms(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",wa(n,1),o.uncache=1,jm(i)))}},Kc={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new En(t._pt,e,n,0,0,GS);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Ta=[1,0,0,1,0,0],rg={},sg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},$m=function(t){var e=fi(t,Ne);return sg(e)?Ta:e.substr(7).match(cf).map(Be)},Uf=function(t,e){var n=t._gsap||Pr(t),i=t.style,s=$m(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ta:s):(s===Ta&&!t.offsetParent&&t!==fo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,fo.appendChild(t)),s=$m(t),l?i.display=l:ms(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):fo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Pf=function(t,e,n,i,s,o){var a=t._gsap,l=s||Uf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],T=e.split(" "),x=parseFloat(T[0])||0,w=parseFloat(T[1])||0,E,A,P,v;n?l!==Ta&&(A=f*m-_*g)&&(P=x*(m/A)+w*(-g/A)+(g*M-m*p)/A,v=x*(-_/A)+w*(f/A)-(f*M-_*p)/A,x=P,w=v):(E=ng(t),x=E.x+(~T[0].indexOf("%")?x/100*E.width:x),w=E.y+(~(T[1]||T[0]).indexOf("%")?w/100*E.height:w)),i||i!==!1&&a.smooth?(p=x-c,M=w-h,a.xOffset=u+(p*f+M*g)-p,a.yOffset=d+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Hn]="0px 0px",o&&(Ur(o,a,"xOrigin",c,x),Ur(o,a,"yOrigin",h,w),Ur(o,a,"xOffset",u,a.xOffset),Ur(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+w)},wa=function(t,e){var n=t._gsap||new xf(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=fi(t,Hn)||"0",h,u,d,f,_,g,m,p,M,T,x,w,E,A,P,v,y,D,U,G,z,X,H,W,k,nt,I,at,Nt,ne,Wt,Gt;return h=u=d=g=m=p=M=T=x=0,f=_=1,n.svg=!!(t.getCTM&&ig(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),i.scale=i.rotate=i.translate="none"),A=Uf(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),Pf(t,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,A)),w=n.xOrigin||0,E=n.yOrigin||0,A!==Ta&&(D=A[0],U=A[1],G=A[2],z=A[3],h=X=A[4],u=H=A[5],A.length===6?(f=Math.sqrt(D*D+U*U),_=Math.sqrt(z*z+G*G),g=D||U?uo(U,D)*ds:0,M=G||z?uo(G,z)*ds+g:0,M&&(_*=Math.abs(Math.cos(M*po))),n.svg&&(h-=w-(w*D+E*G),u-=E-(w*U+E*z))):(Gt=A[6],ne=A[7],I=A[8],at=A[9],Nt=A[10],Wt=A[11],h=A[12],u=A[13],d=A[14],P=uo(Gt,Nt),m=P*ds,P&&(v=Math.cos(-P),y=Math.sin(-P),W=X*v+I*y,k=H*v+at*y,nt=Gt*v+Nt*y,I=X*-y+I*v,at=H*-y+at*v,Nt=Gt*-y+Nt*v,Wt=ne*-y+Wt*v,X=W,H=k,Gt=nt),P=uo(-G,Nt),p=P*ds,P&&(v=Math.cos(-P),y=Math.sin(-P),W=D*v-I*y,k=U*v-at*y,nt=G*v-Nt*y,Wt=z*y+Wt*v,D=W,U=k,G=nt),P=uo(U,D),g=P*ds,P&&(v=Math.cos(P),y=Math.sin(P),W=D*v+U*y,k=X*v+H*y,U=U*v-D*y,H=H*v-X*y,D=W,X=k),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Be(Math.sqrt(D*D+U*U+G*G)),_=Be(Math.sqrt(H*H+Gt*Gt)),P=uo(X,H),M=Math.abs(P)>2e-4?P*ds:0,x=Wt?1/(Wt<0?-Wt:Wt):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!sg(fi(t,Ne)),W&&t.setAttribute("transform",W))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Be(f),n.scaleY=Be(_),n.rotation=Be(g)+a,n.rotationX=Be(m)+a,n.rotationY=Be(p)+a,n.skewX=M+a,n.skewY=T+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Hn]=Qc(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?XS:eg?og:WS,n.uncache=0,n},Qc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ef=function(t,e,n){var i=ln(e);return Be(parseFloat(e)+parseFloat(Nr(t,"x",n+"px",i)))+i},WS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,og(t,e)},us="0deg",ba="0px",fs=") ",og=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,T=n.zOrigin,x="",w=p==="auto"&&t&&t!==1||p===!0;if(T&&(u!==us||h!==us)){var E=parseFloat(h)*po,A=Math.sin(E),P=Math.cos(E),v;E=parseFloat(u)*po,v=Math.cos(E),o=Ef(M,o,A*v*-T),a=Ef(M,a,-Math.sin(E)*-T),l=Ef(M,l,P*v*-T+T)}m!==ba&&(x+="perspective("+m+fs),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(w||o!==ba||a!==ba||l!==ba)&&(x+=l!==ba||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fs),c!==us&&(x+="rotate("+c+fs),h!==us&&(x+="rotateY("+h+fs),u!==us&&(x+="rotateX("+u+fs),(d!==us||f!==us)&&(x+="skew("+d+", "+f+fs),(_!==1||g!==1)&&(x+="scale("+_+", "+g+fs),M.style[Ne]=x||"translate(0, 0)"},XS=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,T=parseFloat(o),x=parseFloat(a),w,E,A,P,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=po,c*=po,w=Math.cos(l)*u,E=Math.sin(l)*u,A=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(h*=po,v=Math.tan(c-h),v=Math.sqrt(1+v*v),A*=v,P*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),w*=v,E*=v)),w=Be(w),E=Be(E),A=Be(A),P=Be(P)):(w=u,P=d,E=A=0),(T&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(T=Nr(f,"x",o,"px"),x=Nr(f,"y",a,"px")),(_||g||m||p)&&(T=Be(T+_-(_*w+g*A)+m),x=Be(x+g-(_*E+g*P)+p)),(i||s)&&(v=f.getBBox(),T=Be(T+i/100*v.width),x=Be(x+s/100*v.height)),v="matrix("+w+","+E+","+A+","+P+","+T+","+x+")",f.setAttribute("transform",v),M&&(f.style[Ne]=v)},YS=function(t,e,n,i,s){var o=360,a=Je(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ds:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Gm)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Gm)%o-~~(c/o)*o)),t._pt=d=new En(t._pt,e,n,i,c,RS),d.e=h,d.u="deg",t._props.push(n),d},Jm=function(t,e){for(var n in e)t[n]=e[n];return t},qS=function(t,e,n){var i=Jm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=e,a=wa(n,1),ms(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],o[Ne]=e,a=wa(n,1),o[Ne]=c);for(l in or)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=ln(c),_=ln(h),u=f!==_?Nr(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new En(t._pt,a,l,u,d-u,Af),t._pt.u=_||0,t._props.push(l));Jm(a,i)};wn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Kc[t>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return sr(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var Nf={name:"css",register:Rf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,M,T,x,w,E,A,P;If||Rf(),this.styles=this.styles||tg(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Bn[g]&&yf(g,e,n,i,t,s)))){if(f=typeof h,_=Kc[g],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ho(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",ir.lastIndex=0,ir.test(c)||(m=ln(c),p=ln(h)),p?m!==p&&(c=Nr(t,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Je(c)&&~c.indexOf("random(")&&(c=ho(c)),ln(c+"")||c==="auto"||(c+=Vn.units[g]||ln(sr(t,g))||""),(c+"").charAt(1)==="="&&(c=sr(t,g))):c=sr(t,g),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in ki&&(g==="autoAlpha"&&(d===1&&sr(t,"visibility")==="hidden"&&u&&(d=0),P.push("visibility",0,a.visibility),Ur(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=ki[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in or,T){if(this.styles.save(g),f==="string"&&h.substring(0,6)==="var(--"&&(h=fi(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(w=t._gsap,w.renderTransform&&!e.parseTransform||wa(t,e.parseTransform),E=e.smoothOrigin!==!1&&w.smooth,x=this._pt=new En(this._pt,a,Ne,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new En(this._pt,w,"scaleY",w.scaleY,(M?cs(w.scaleY,M+u):u)-w.scaleY||0,Af),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Hn,0,a[Hn]),h=HS(h),w.svg?Pf(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&Ur(this,w,"zOrigin",w.zOrigin,p),Ur(this,a,g,Qc(c),Qc(h)));continue}else if(g==="svgOrigin"){Pf(t,h,1,E,0,this);continue}else if(g in rg){YS(this,w,g,d,M?cs(d,M+h):h);continue}else if(g==="smoothOrigin"){Ur(this,w,"smooth",w.smooth,h);continue}else if(g==="force3D"){w[g]=h;continue}else if(g==="transform"){qS(this,h,t);continue}}else g in a||(g=mo(g)||g);if(T||(u||u===0)&&(d||d===0)&&!CS.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),p=ln(h)||(g in Vn.units?Vn.units[g]:m),m!==p&&(d=Nr(t,g,c,p)),this._pt=new En(this._pt,T?w:a,g,d,(M?cs(d,M+u):u)-d,!T&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?IS:Af),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=PS);else if(g in a)VS.call(this,t,g,c,M?M+h:h);else if(g in t)this.add(t,g,c||t[g],M?M+h:h,i,s);else if(g!=="parseTransform"){Yc(g,h);continue}T||(g in a?P.push(g,0,a[g]):typeof t[g]=="function"?P.push(g,2,t[g]()):P.push(g,1,c||t[g])),o.push(g)}}A&&wf(this)},render:function(t,e){if(e.tween._time||!Df())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:sr,aliases:ki,getSetter:function(t,e,n){var i=ki[e];return i&&i.indexOf(",")<0&&(e=i),e in or&&e!==Hn&&(t._gsap.x||sr(t,"x"))?n&&Hm===n?e==="scale"?NS:US:(Hm=n||{})&&(e==="scale"?FS:OS):t.style&&!Xc(t.style[e])?DS:~e.indexOf("-")?LS:Jc(t,e)},core:{_removeProperty:ms,_getMatrix:Uf}};gn.utils.checkPrefix=mo;gn.core.getStyleSaver=tg;(function(r,t,e,n){var i=wn(r+","+t+","+e,function(s){or[s]=1});wn(t,function(s){Vn.units[s]="deg",rg[s]=1}),ki[i[13]]=r+","+t,wn(n,function(s){var o=s.split(":");ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Vn.units[r]="px"});gn.registerPlugin(Nf);var Ke=gn.registerPlugin(Nf)||gn,c1=Ke.core.Tween;function ag(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ZS(r,t,e){return t&&ag(r.prototype,t),e&&ag(r,e),r}var cn,eh,$S,Qn,Fr,Or,_o,cg,gs,Aa,hg,ar,wi,ug,fg=function(){return cn||typeof window<"u"&&(cn=window.gsap)&&cn.registerPlugin&&cn},dg=1,go=[],te=[],Ei=[],Ca=Date.now,Ff=function(t,e){return e},JS=function(){var t=Aa.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,te),i.push.apply(i,Ei),te=n,Ei=i,Ff=function(o,a){return e[o](a)}},cr=function(t,e){return~Ei.indexOf(t)&&Ei[Ei.indexOf(t)+1][e]},Ra=function(t){return!!~hg.indexOf(t)},Cn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},An=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},jc="scrollLeft",th="scrollTop",Of=function(){return ar&&ar.isPressed||te.cache++},nh=function(t,e){var n=function i(s){if(s||s===0){dg&&(Qn.history.scrollRestoration="manual");var o=ar&&ar.isPressed;s=i.v=Math.round(s)||(ar&&ar.iOS?1:0),t(s),i.cacheID=te.cache,o&&Ff("ss",s)}else(e||te.cache!==i.cacheID||Ff("ref"))&&(i.cacheID=te.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},_n={s:jc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nh(function(r){return arguments.length?Qn.scrollTo(r,Xe.sc()):Qn.pageXOffset||Fr[jc]||Or[jc]||_o[jc]||0})},Xe={s:th,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:nh(function(r){return arguments.length?Qn.scrollTo(_n.sc(),r):Qn.pageYOffset||Fr[th]||Or[th]||_o[th]||0})},Rn=function(t,e){return(e&&e._ctx&&e._ctx.selector||cn.utils.toArray)(t)[0]||(typeof t=="string"&&cn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},KS=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},lr=function(t,e){var n=e.s,i=e.sc;Ra(t)&&(t=Fr.scrollingElement||Or);var s=te.indexOf(t),o=i===Xe.sc?1:2;!~s&&(s=te.push(t)-1),te[s+o]||Cn(t,"scroll",Of);var a=te[s+o],l=a||(te[s+o]=nh(cr(t,n),!0)||(Ra(t)?i:nh(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=cn.getProperty(t,"scrollBehavior")==="smooth"),l},ih=function(t,e,n){var i=t,s=t,o=Ca(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=Ca();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},d=function(_){var g=a,m=s,p=Ca();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:u,getVelocity:d}},Ea=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},lg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},pg=function(){Aa=cn.core.globals().ScrollTrigger,Aa&&Aa.core&&JS()},mg=function(t){return cn=t||fg(),!eh&&cn&&typeof document<"u"&&document.body&&(Qn=window,Fr=document,Or=Fr.documentElement,_o=Fr.body,hg=[Qn,Fr,Or,_o],$S=cn.utils.clamp,ug=cn.core.context||function(){},gs="onpointerenter"in _o?"pointer":"mouse",cg=ze.isTouch=Qn.matchMedia&&Qn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Qn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,wi=ze.eventTypes=("ontouchstart"in Or?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Or?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return dg=0},500),pg(),eh=1),eh};_n.op=Xe;te.cache=0;var ze=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){eh||mg(cn)||console.warn("Please gsap.registerPlugin(Observer)"),Aa||pg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,T=n.onPress,x=n.onRelease,w=n.onRight,E=n.onLeft,A=n.onUp,P=n.onDown,v=n.onChangeX,y=n.onChangeY,D=n.onChange,U=n.onToggleX,G=n.onToggleY,z=n.onHover,X=n.onHoverEnd,H=n.onMove,W=n.ignoreCheck,k=n.isNormalizer,nt=n.onGestureStart,I=n.onGestureEnd,at=n.onWheel,Nt=n.onEnable,ne=n.onDisable,Wt=n.onClick,Gt=n.scrollSpeed,$=n.capture,Q=n.allowClicks,ft=n.lockAxis,Et=n.onLockAxis;this.target=a=Rn(a)||Or,this.vars=n,f&&(f=cn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,Gt=Gt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Qn.getComputedStyle(_o).lineHeight)||22);var bt,kt,de,R,Xt,It,At,N=this,ie=0,_t=0,Vt=n.passive||!h&&n.passive!==!1,$t=lr(a,_n),pe=lr(a,Xe),C=$t(),S=pe(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&wi[0]==="pointerdown",J=Ra(a),K=a.ownerDocument||Fr,Z=[0,0,0],xt=[0,0,0],st=0,Tt=function(){return st=Ca()},ut=function(Ct,qt){return(N.event=Ct)&&f&&KS(Ct.target,f)||qt&&B&&Ct.pointerType!=="touch"||W&&W(Ct,qt)},rt=function(){N._vx.reset(),N._vy.reset(),kt.pause(),u&&u(N)},ht=function(){var Ct=N.deltaX=lg(Z),qt=N.deltaY=lg(xt),dt=Math.abs(Ct)>=i,Bt=Math.abs(qt)>=i;D&&(dt||Bt)&&D(N,Ct,qt,Z,xt),dt&&(w&&N.deltaX>0&&w(N),E&&N.deltaX<0&&E(N),v&&v(N),U&&N.deltaX<0!=ie<0&&U(N),ie=N.deltaX,Z[0]=Z[1]=Z[2]=0),Bt&&(P&&N.deltaY>0&&P(N),A&&N.deltaY<0&&A(N),y&&y(N),G&&N.deltaY<0!=_t<0&&G(N),_t=N.deltaY,xt[0]=xt[1]=xt[2]=0),(R||de)&&(H&&H(N),de&&(m&&de===1&&m(N),M&&M(N),de=0),R=!1),It&&!(It=!1)&&Et&&Et(N),Xt&&(at(N),Xt=!1),bt=0},Lt=function(Ct,qt,dt){Z[dt]+=Ct,xt[dt]+=qt,N._vx.update(Ct),N._vy.update(qt),c?bt||(bt=requestAnimationFrame(ht)):ht()},wt=function(Ct,qt){ft&&!At&&(N.axis=At=Math.abs(Ct)>Math.abs(qt)?"x":"y",It=!0),At!=="y"&&(Z[2]+=Ct,N._vx.update(Ct,!0)),At!=="x"&&(xt[2]+=qt,N._vy.update(qt,!0)),c?bt||(bt=requestAnimationFrame(ht)):ht()},ct=function(Ct){if(!ut(Ct,1)){Ct=Ea(Ct,h);var qt=Ct.clientX,dt=Ct.clientY,Bt=qt-N.x,Dt=dt-N.y,Yt=N.isDragging;N.x=qt,N.y=dt,(Yt||(Bt||Dt)&&(Math.abs(N.startX-qt)>=s||Math.abs(N.startY-dt)>=s))&&(de=Yt?2:1,Yt||(N.isDragging=!0),wt(Bt,Dt))}},Ht=N.onPress=function(gt){ut(gt,1)||gt&&gt.button||(N.axis=At=null,kt.pause(),N.isPressed=!0,gt=Ea(gt),ie=_t=0,N.startX=N.x=gt.clientX,N.startY=N.y=gt.clientY,N._vx.reset(),N._vy.reset(),Cn(k?a:K,wi[1],ct,Vt,!0),N.deltaX=N.deltaY=0,T&&T(N))},L=N.onRelease=function(gt){if(!ut(gt,1)){An(k?a:K,wi[1],ct,!0);var Ct=!isNaN(N.y-N.startY),qt=N.isDragging,dt=qt&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Bt=Ea(gt);!dt&&Ct&&(N._vx.reset(),N._vy.reset(),h&&Q&&cn.delayedCall(.08,function(){if(Ca()-st>300&&!gt.defaultPrevented){if(gt.target.click)gt.target.click();else if(K.createEvent){var Dt=K.createEvent("MouseEvents");Dt.initMouseEvent("click",!0,!0,Qn,1,Bt.screenX,Bt.screenY,Bt.clientX,Bt.clientY,!1,!1,!1,!1,0,null),gt.target.dispatchEvent(Dt)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,u&&qt&&!k&&kt.restart(!0),de&&ht(),p&&qt&&p(N),x&&x(N,dt)}},it=function(Ct){return Ct.touches&&Ct.touches.length>1&&(N.isGesturing=!0)&&nt(Ct,N.isDragging)},ot=function(){return(N.isGesturing=!1)||I(N)},pt=function(Ct){if(!ut(Ct)){var qt=$t(),dt=pe();Lt((qt-C)*Gt,(dt-S)*Gt,1),C=qt,S=dt,u&&kt.restart(!0)}},et=function(Ct){if(!ut(Ct)){Ct=Ea(Ct,h),at&&(Xt=!0);var qt=(Ct.deltaMode===1?l:Ct.deltaMode===2?Qn.innerHeight:1)*_;Lt(Ct.deltaX*qt,Ct.deltaY*qt,0),u&&!k&&kt.restart(!0)}},j=function(Ct){if(!ut(Ct)){var qt=Ct.clientX,dt=Ct.clientY,Bt=qt-N.x,Dt=dt-N.y;N.x=qt,N.y=dt,R=!0,u&&kt.restart(!0),(Bt||Dt)&&wt(Bt,Dt)}},yt=function(Ct){N.event=Ct,z(N)},Ft=function(Ct){N.event=Ct,X(N)},ue=function(Ct){return ut(Ct)||Ea(Ct,h)&&Wt(N)};kt=N._dc=cn.delayedCall(d||.25,rt).pause(),N.deltaX=N.deltaY=0,N._vx=ih(0,50,!0),N._vy=ih(0,50,!0),N.scrollX=$t,N.scrollY=pe,N.isDragging=N.isGesturing=N.isPressed=!1,ug(this),N.enable=function(gt){return N.isEnabled||(Cn(J?K:a,"scroll",Of),o.indexOf("scroll")>=0&&Cn(J?K:a,"scroll",pt,Vt,$),o.indexOf("wheel")>=0&&Cn(a,"wheel",et,Vt,$),(o.indexOf("touch")>=0&&cg||o.indexOf("pointer")>=0)&&(Cn(a,wi[0],Ht,Vt,$),Cn(K,wi[2],L),Cn(K,wi[3],L),Q&&Cn(a,"click",Tt,!0,!0),Wt&&Cn(a,"click",ue),nt&&Cn(K,"gesturestart",it),I&&Cn(K,"gestureend",ot),z&&Cn(a,gs+"enter",yt),X&&Cn(a,gs+"leave",Ft),H&&Cn(a,gs+"move",j)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=R=de=!1,N._vx.reset(),N._vy.reset(),C=$t(),S=pe(),gt&&gt.type&&Ht(gt),Nt&&Nt(N)),N},N.disable=function(){N.isEnabled&&(go.filter(function(gt){return gt!==N&&Ra(gt.target)}).length||An(J?K:a,"scroll",Of),N.isPressed&&(N._vx.reset(),N._vy.reset(),An(k?a:K,wi[1],ct,!0)),An(J?K:a,"scroll",pt,$),An(a,"wheel",et,$),An(a,wi[0],Ht,$),An(K,wi[2],L),An(K,wi[3],L),An(a,"click",Tt,!0),An(a,"click",ue),An(K,"gesturestart",it),An(K,"gestureend",ot),An(a,gs+"enter",yt),An(a,gs+"leave",Ft),An(a,gs+"move",j),N.isEnabled=N.isPressed=N.isDragging=!1,ne&&ne(N))},N.kill=N.revert=function(){N.disable();var gt=go.indexOf(N);gt>=0&&go.splice(gt,1),ar===N&&(ar=0)},go.push(N),k&&Ra(a)&&(ar=N),N.enable(g)},ZS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();ze.version="3.13.0";ze.create=function(r){return new ze(r)};ze.register=mg;ze.getAll=function(){return go.slice()};ze.getById=function(r){return go.filter(function(t){return t.vars.id===r})[0]};fg()&&cn.registerPlugin(ze);var St,yo,re,Te,ei,me,Qf,vh,Ha,Fa,Ia,rh,xn,bh,Xf,In,gg,_g,Mo,Lg,Bf,Ug,Pn,Yf,Ng,Fg,Br,qf,jf,So,td,yh,Zf,zf,sh=1,vn=Date.now,kf=vn(),mi=0,Da=0,xg=function(t,e,n){var i=ti(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},vg=function(t,e){return e&&(!ti(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},QS=function r(){return Da&&requestAnimationFrame(r)},yg=function(){return bh=1},Mg=function(){return bh=0},Vi=function(t){return t},La=function(t){return Math.round(t*1e5)/1e5||0},Og=function(){return typeof window<"u"},Bg=function(){return St||Og()&&(St=window.gsap)&&St.registerPlugin&&St},Ss=function(t){return!!~Qf.indexOf(t)},zg=function(t){return(t==="Height"?td:re["inner"+t])||ei["client"+t]||me["client"+t]},kg=function(t){return cr(t,"getBoundingClientRect")||(Ss(t)?function(){return xh.width=re.innerWidth,xh.height=td,xh}:function(){return hr(t)})},jS=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=cr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?zg(s):t["client"+s])||0}},tb=function(t,e){return!e||~Ei.indexOf(t)?kg(t):function(){return xh}},Hi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=cr(t,n))?o()-kg(t)()[s]:Ss(t)?(ei[n]||me[n])-zg(i):t[n]-t["offset"+i])},oh=function(t,e){for(var n=0;n<Mo.length;n+=3)(!e||~e.indexOf(Mo[n+1]))&&t(Mo[n],Mo[n+1],Mo[n+2])},ti=function(t){return typeof t=="string"},yn=function(t){return typeof t=="function"},Ua=function(t){return typeof t=="number"},_s=function(t){return typeof t=="object"},Pa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Vf=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},xo=Math.abs,Vg="left",Hg="top",ed="right",nd="bottom",vs="width",ys="height",Oa="Right",Ba="Left",za="Top",ka="Bottom",Ye="padding",di="margin",To="Width",id="Height",Qe="px",pi=function(t){return re.getComputedStyle(t)},eb=function(t){var e=pi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Sg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},hr=function(t,e){var n=e&&pi(t)[Xf]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Mh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Gg=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},nb=function(t){return function(e){return St.utils.snap(Gg(t),e)}},rd=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},ib=function(t){return function(e,n){return rd(Gg(t))(e,n.direction)}},ah=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},en=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},tn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},lh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},bg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ch={toggleActions:"play",anticipatePin:0},Sh={top:0,left:0,center:.5,bottom:1,right:1},ph=function(t,e){if(ti(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Sh?Sh[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},hh=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,d=s.indent,f=s.fontWeight,_=Te.createElement("div"),g=Ss(n)||cr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?me:n,M=t.indexOf("start")!==-1,T=M?c:h,x="border-color:"+T+";font-size:"+u+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===Xe?ed:nd)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=x,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],mh(_,0,i,M),_},mh=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+To]=1,s["border"+a+To]=0,s[n.p]=e+"px",St.set(t,s)},ee=[],$f={},Ga,Tg=function(){return vn()-mi>34&&(Ga||(Ga=requestAnimationFrame(ur)))},vo=function(){(!Pn||!Pn.isPressed||Pn.startX>me.clientWidth)&&(te.cache++,Pn?Ga||(Ga=requestAnimationFrame(ur)):ur(),mi||Ts("scrollStart"),mi=vn())},Hf=function(){Fg=re.innerWidth,Ng=re.innerHeight},Na=function(t){te.cache++,(t===!0||!xn&&!Ug&&!Te.fullscreenElement&&!Te.webkitFullscreenElement&&(!Yf||Fg!==re.innerWidth||Math.abs(re.innerHeight-Ng)>re.innerHeight*.25))&&vh.restart(!0)},bs={},rb=[],Wg=function r(){return tn(jt,"scrollEnd",r)||xs(!0)},Ts=function(t){return bs[t]&&bs[t].map(function(e){return e()})||rb},jn=[],Xg=function(t){for(var e=0;e<jn.length;e+=5)(!t||jn[e+4]&&jn[e+4].query===t)&&(jn[e].style.cssText=jn[e+1],jn[e].getBBox&&jn[e].setAttribute("transform",jn[e+2]||""),jn[e+3].uncache=1)},sd=function(t,e){var n;for(In=0;In<ee.length;In++)n=ee[In],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));yh=!0,e&&Xg(e),e||Ts("revert")},Yg=function(t,e){te.cache++,(e||!Dn)&&te.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),ti(t)&&(re.history.scrollRestoration=jf=t)},Dn,Ms=0,wg,sb=function(){if(wg!==Ms){var t=wg=Ms;requestAnimationFrame(function(){return t===Ms&&xs(!0)})}},qg=function(){me.appendChild(So),td=!Pn&&So.offsetHeight||re.innerHeight,me.removeChild(So)},Eg=function(t){return Ha(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},xs=function(t,e){if(ei=Te.documentElement,me=Te.body,Qf=[re,Te,ei,me],mi&&!t&&!yh){en(jt,"scrollEnd",Wg);return}qg(),Dn=jt.isRefreshing=!0,te.forEach(function(i){return yn(i)&&++i.cacheID&&(i.rec=i())});var n=Ts("refreshInit");Lg&&jt.sort(),e||sd(),te.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),yh=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Zf=1,Eg(!0),ee.forEach(function(i){var s=Hi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Eg(!1),Zf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Yg(jf,1),vh.pause(),Ms++,Dn=2,ur(2),ee.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=jt.isRefreshing=!1,Ts("refresh")},Jf=0,gh=1,Va,ur=function(t){if(t===2||!Dn&&!yh){jt.isUpdating=!0,Va&&Va.update(0);var e=ee.length,n=vn(),i=n-kf>=50,s=e&&ee[0].scroll();if(gh=Jf>s?-1:1,Dn||(Jf=s),i&&(mi&&!bh&&n-mi>200&&(mi=0,Ts("scrollEnd")),Ia=kf,kf=n),gh<0){for(In=e;In-- >0;)ee[In]&&ee[In].update(0,i);gh=1}else for(In=0;In<e;In++)ee[In]&&ee[In].update(0,i);jt.isUpdating=!1}Ga=0},Kf=[Vg,Hg,nd,ed,di+ka,di+Oa,di+za,di+Ba,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],_h=Kf.concat([vs,ys,"boxSizing","max"+To,"max"+id,"position",di,Ye,Ye+za,Ye+Oa,Ye+ka,Ye+Ba]),ob=function(t,e,n){bo(n);var i=t._gsap;if(i.spacerIsNative)bo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Gf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Kf.length,o=e.style,a=t.style,l;s--;)l=Kf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[nd]=a[ed]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[vs]=Mh(t,_n)+Qe,o[ys]=Mh(t,Xe)+Qe,o[Ye]=a[di]=a[Hg]=a[Vg]="0",bo(i),a[vs]=a["max"+To]=n[vs],a[ys]=a["max"+id]=n[ys],a[Ye]=n[Ye],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},ab=/([A-Z])/g,bo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(ab,"-$1").toLowerCase())}},uh=function(t){for(var e=_h.length,n=t.style,i=[],s=0;s<e;s++)i.push(_h[s],n[_h[s]]);return i.t=t,i},lb=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},xh={left:0,top:0},Ag=function(t,e,n,i,s,o,a,l,c,h,u,d,f,_){yn(t)&&(t=t(l)),ti(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?ph("0"+t.substr(3),n):0));var g=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(t)||(t=+t),Ua(t))f&&(t=St.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),a&&mh(a,n,i,!0);else{yn(e)&&(e=e(l));var T=(t||"0").split(" "),x,w,E,A;M=Rn(e,l)||me,x=hr(M)||{},(!x||!x.left&&!x.top)&&pi(M).display==="none"&&(A=M.style.display,M.style.display="block",x=hr(M),A?M.style.display=A:M.style.removeProperty("display")),w=ph(T[0],x[i.d]),E=ph(T[1]||"0",n),t=x[i.p]-c[i.p]-h+w+s-E,a&&mh(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var P=t+n,v=o._isStart;m="scroll"+i.d2,mh(o,P,i,v&&P>20||!v&&(u?Math.max(me[m],ei[m]):o.parentNode[m])<=P+1),u&&(c=hr(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Qe))}return f&&M&&(m=hr(M),f.seek(d),p=hr(M),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(g),f?t:Math.round(t)},cb=/(webkit|moz|length|cssText|inset)/i,Cg=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===me){t._stOrig=s.cssText,a=pi(t);for(o in a)!+o&&!cb.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},Zg=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},fh=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},Rg=function(t,e){var n=lr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var d=o.tween,f=l.onComplete,_={};c=c||n();var g=Zg(n,c,function(){d.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){te.cache++,o.tween&&ur()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=St.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},en(t,"wheel",n.wheelHandler),jt.isTouch&&en(t,"touchmove",n.wheelHandler),s},jt=(function(){function r(e,n){yo||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),qf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Da){this.update=this.refresh=this.kill=Vi;return}n=Sg(ti(n)||Ua(n)||n.nodeType?{trigger:n}:n,ch);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,T=s.once,x=s.snap,w=s.pinReparent,E=s.pinSpacer,A=s.containerAnimation,P=s.fastScrollEnd,v=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:Xe,D=!u&&u!==0,U=Rn(n.scroller||re),G=St.core.getCache(U),z=Ss(U),X=("pinType"in n?n.pinType:cr(U,"pinType")||z&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=D&&n.toggleActions.split(" "),k="markers"in n?n.markers:ch.markers,nt=z?0:parseFloat(pi(U)["border"+y.p2+To])||0,I=this,at=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Nt=jS(U,z,y),ne=tb(U,z),Wt=0,Gt=0,$=0,Q=lr(U,y),ft,Et,bt,kt,de,R,Xt,It,At,N,ie,_t,Vt,$t,pe,C,S,B,J,K,Z,xt,st,Tt,ut,rt,ht,Lt,wt,ct,Ht,L,it,ot,pt,et,j,yt,Ft;if(I._startClamp=I._endClamp=!1,I._dir=y,m*=45,I.scroller=U,I.scroll=A?A.time.bind(A):Q,kt=Q(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Lg=1,n.refreshPriority===-9999&&(Va=I)),G.tweenScroll=G.tweenScroll||{top:Rg(U,Xe),left:Rg(U,_n)},I.tweenTo=ft=G.tweenScroll[y.p],I.scrubDuration=function(dt){it=Ua(dt)&&dt,it?L?L.duration(dt):L=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:it,paused:!0,onComplete:function(){return p&&p(I)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(u),ct=0,l||(l=i.vars.id)),x&&((!_s(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in me.style&&St.set(z?[me,ei]:U,{scrollBehavior:"auto"}),te.forEach(function(dt){return yn(dt)&&dt.target===(z?Te.scrollingElement||ei:U)&&(dt.smooth=!1)}),bt=yn(x.snapTo)?x.snapTo:x.snapTo==="labels"?nb(i):x.snapTo==="labelsDirectional"?ib(i):x.directional!==!1?function(dt,Bt){return rd(x.snapTo)(dt,vn()-Gt<500?0:Bt.direction)}:St.utils.snap(x.snapTo),ot=x.duration||{min:.1,max:2},ot=_s(ot)?Fa(ot.min,ot.max):Fa(ot,ot),pt=St.delayedCall(x.delay||it/2||.1,function(){var dt=Q(),Bt=vn()-Gt<500,Dt=ft.tween;if((Bt||Math.abs(I.getVelocity())<10)&&!Dt&&!bh&&Wt!==dt){var Yt=(dt-R)/$t,ke=i&&!D?i.totalProgress():Yt,Kt=Bt?0:(ke-Ht)/(vn()-Ia)*1e3||0,Pe=St.utils.clamp(-Yt,1-Yt,xo(Kt/2)*Kt/.185),Ve=Yt+(x.inertia===!1?0:Pe),we,ve,ge=x,Gn=ge.onStart,Ee=ge.onInterrupt,Sn=ge.onComplete;if(we=bt(Ve,I),Ua(we)||(we=Ve),ve=Math.max(0,Math.round(R+we*$t)),dt<=Xt&&dt>=R&&ve!==dt){if(Dt&&!Dt._initted&&Dt.data<=xo(ve-dt))return;x.inertia===!1&&(Pe=we-Yt),ft(ve,{duration:ot(xo(Math.max(xo(Ve-ke),xo(we-ke))*.185/Kt/.05||0)),ease:x.ease||"power3",data:xo(ve-dt),onInterrupt:function(){return pt.restart(!0)&&Ee&&Ee(I)},onComplete:function(){I.update(),Wt=Q(),i&&!D&&(L?L.resetTo("totalProgress",we,i._tTime/i._tDur):i.progress(we)),ct=Ht=i&&!D?i.totalProgress():I.progress,M&&M(I),Sn&&Sn(I)}},dt,Pe*$t,ve-dt-Pe*$t),Gn&&Gn(I,ft.tween)}}else I.isActive&&Wt!==dt&&pt.restart(!0)}).pause()),l&&($f[l]=I),d=I.trigger=Rn(d||f!==!0&&f),Ft=d&&d._gsap&&d._gsap.stRevert,Ft&&(Ft=Ft(I)),f=f===!0?d:Rn(f),ti(a)&&(a={targets:d,className:a}),f&&(_===!1||_===di||(_=!_&&f.parentNode&&f.parentNode.style&&pi(f.parentNode).display==="flex"?!1:Ye),I.pin=f,Et=St.core.getCache(f),Et.spacer?pe=Et.pinState:(E&&(E=Rn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Et.spacerIsNative=!!E,E&&(Et.spacerState=uh(E))),Et.spacer=B=E||Te.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),Et.pinState=pe=uh(f)),n.force3D!==!1&&St.set(f,{force3D:!0}),I.spacer=B=Et.spacer,wt=pi(f),Tt=wt[_+y.os2],K=St.getProperty(f),Z=St.quickSetter(f,y.a,Qe),Gf(f,B,wt),S=uh(f)),k){_t=_s(k)?Sg(k,bg):bg,N=hh("scroller-start",l,U,y,_t,0),ie=hh("scroller-end",l,U,y,_t,0,N),J=N["offset"+y.op.d2];var ue=Rn(cr(U,"content")||U);It=this.markerStart=hh("start",l,ue,y,_t,J,0,A),At=this.markerEnd=hh("end",l,ue,y,_t,J,0,A),A&&(yt=St.quickSetter([It,At],y.a,Qe)),!X&&!(Ei.length&&cr(U,"fixedMarkers")===!0)&&(eb(z?me:U),St.set([N,ie],{force3D:!0}),rt=St.quickSetter(N,y.a,Qe),Lt=St.quickSetter(ie,y.a,Qe))}if(A){var gt=A.vars.onUpdate,Ct=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){I.update(0,0,1),gt&&gt.apply(A,Ct||[])})}if(I.previous=function(){return ee[ee.indexOf(I)-1]},I.next=function(){return ee[ee.indexOf(I)+1]},I.revert=function(dt,Bt){if(!Bt)return I.kill(!0);var Dt=dt!==!1||!I.enabled,Yt=xn;Dt!==I.isReverted&&(Dt&&(et=Math.max(Q(),I.scroll.rec||0),$=I.progress,j=i&&i.progress()),It&&[It,At,N,ie].forEach(function(ke){return ke.style.display=Dt?"none":"block"}),Dt&&(xn=I,I.update(Dt)),f&&(!w||!I.isActive)&&(Dt?ob(f,B,pe):Gf(f,B,pi(f),ut)),Dt||I.update(Dt),xn=Yt,I.isReverted=Dt)},I.refresh=function(dt,Bt,Dt,Yt){if(!((xn||!I.enabled)&&!Bt)){if(f&&dt&&mi){en(r,"scrollEnd",Wg);return}!Dn&&at&&at(I),xn=I,ft.tween&&!Dt&&(ft.tween.kill(),ft.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(se){return se.vars.immediateRender&&se.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var ke=Nt(),Kt=ne(),Pe=A?A.duration():Hi(U,y),Ve=$t<=.01||!$t,we=0,ve=Yt||0,ge=_s(Dt)?Dt.end:n.end,Gn=n.endTrigger||d,Ee=_s(Dt)?Dt.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Sn=I.pinnedContainer=n.pinnedContainer&&Rn(n.pinnedContainer,I),ii=d&&Math.max(0,ee.indexOf(I))||0,qe=ii,b,F,Y,q,O,tt,lt,Mt,vt,Ut,Pt,Rt,Jt;for(k&&_s(Dt)&&(Rt=St.getProperty(N,y.p),Jt=St.getProperty(ie,y.p));qe-- >0;)tt=ee[qe],tt.end||tt.refresh(0,1)||(xn=I),lt=tt.pin,lt&&(lt===d||lt===f||lt===Sn)&&!tt.isReverted&&(Ut||(Ut=[]),Ut.unshift(tt),tt.revert(!0,!0)),tt!==ee[qe]&&(ii--,qe--);for(yn(Ee)&&(Ee=Ee(I)),Ee=xg(Ee,"start",I),R=Ag(Ee,d,ke,y,Q(),It,N,I,Kt,nt,X,Pe,A,I._startClamp&&"_startClamp")||(f?-.001:0),yn(ge)&&(ge=ge(I)),ti(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(ti(Ee)?Ee.split(" ")[0]:"")+ge:(we=ph(ge.substr(2),ke),ge=ti(Ee)?Ee:(A?St.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,R):R)+we,Gn=d)),ge=xg(ge,"end",I),Xt=Math.max(R,Ag(ge||(Gn?"100% 0":Pe),Gn,ke,y,Q()+we,At,ie,I,Kt,nt,X,Pe,A,I._endClamp&&"_endClamp"))||-.001,we=0,qe=ii;qe--;)tt=ee[qe],lt=tt.pin,lt&&tt.start-tt._pinPush<=R&&!A&&tt.end>0&&(b=tt.end-(I._startClamp?Math.max(0,tt.start):tt.start),(lt===d&&tt.start-tt._pinPush<R||lt===Sn)&&isNaN(Ee)&&(we+=b*(1-tt.progress)),lt===f&&(ve+=b));if(R+=we,Xt+=we,I._startClamp&&(I._startClamp+=we),I._endClamp&&!Dn&&(I._endClamp=Xt||-.001,Xt=Math.min(Xt,Hi(U,y))),$t=Xt-R||(R-=.01)&&.001,Ve&&($=St.utils.clamp(0,1,St.utils.normalize(R,Xt,et))),I._pinPush=ve,It&&we&&(b={},b[y.a]="+="+we,Sn&&(b[y.p]="-="+Q()),St.set([It,At],b)),f&&!(Zf&&I.end>=Hi(U,y)))b=pi(f),q=y===Xe,Y=Q(),xt=parseFloat(K(y.a))+ve,!Pe&&Xt>1&&(Pt=(z?Te.scrollingElement||ei:U).style,Pt={style:Pt,value:Pt["overflow"+y.a.toUpperCase()]},z&&pi(me)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Pt.style["overflow"+y.a.toUpperCase()]="scroll")),Gf(f,B,b),S=uh(f),F=hr(f,!0),Mt=X&&lr(U,q?_n:Xe)(),_?(ut=[_+y.os2,$t+ve+Qe],ut.t=B,qe=_===Ye?Mh(f,y)+$t+ve:0,qe&&(ut.push(y.d,qe+Qe),B.style.flexBasis!=="auto"&&(B.style.flexBasis=qe+Qe)),bo(ut),Sn&&ee.forEach(function(se){se.pin===Sn&&se.vars.pinSpacing!==!1&&(se._subPinOffset=!0)}),X&&Q(et)):(qe=Mh(f,y),qe&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=qe+Qe)),X&&(O={top:F.top+(q?Y-R:Mt)+Qe,left:F.left+(q?Mt:Y-R)+Qe,boxSizing:"border-box",position:"fixed"},O[vs]=O["max"+To]=Math.ceil(F.width)+Qe,O[ys]=O["max"+id]=Math.ceil(F.height)+Qe,O[di]=O[di+za]=O[di+Oa]=O[di+ka]=O[di+Ba]="0",O[Ye]=b[Ye],O[Ye+za]=b[Ye+za],O[Ye+Oa]=b[Ye+Oa],O[Ye+ka]=b[Ye+ka],O[Ye+Ba]=b[Ye+Ba],C=lb(pe,O,w),Dn&&Q(0)),i?(vt=i._initted,Bf(1),i.render(i.duration(),!0,!0),st=K(y.a)-xt+$t+ve,ht=Math.abs($t-st)>1,X&&ht&&C.splice(C.length-2,2),i.render(0,!0,!0),vt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Bf(0)):st=$t,Pt&&(Pt.value?Pt.style["overflow"+y.a.toUpperCase()]=Pt.value:Pt.style.removeProperty("overflow-"+y.a));else if(d&&Q()&&!A)for(F=d.parentNode;F&&F!==me;)F._pinOffset&&(R-=F._pinOffset,Xt-=F._pinOffset),F=F.parentNode;Ut&&Ut.forEach(function(se){return se.revert(!1,!0)}),I.start=R,I.end=Xt,kt=de=Dn?et:Q(),!A&&!Dn&&(kt<et&&Q(et),I.scroll.rec=0),I.revert(!1,!0),Gt=vn(),pt&&(Wt=-1,pt.restart(!0)),xn=0,i&&D&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Ve||$!==I.progress||A||g||i&&!i._initted)&&(i&&!D&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(A&&R<-.001&&!$?St.utils.normalize(R,Xt,0):$,!0),I.progress=Ve||(kt-R)/$t===$?0:$),f&&_&&(B._pinOffset=Math.round(I.progress*st)),L&&L.invalidate(),isNaN(Rt)||(Rt-=St.getProperty(N,y.p),Jt-=St.getProperty(ie,y.p),fh(N,y,Rt),fh(It,y,Rt-(Yt||0)),fh(ie,y,Jt),fh(At,y,Jt-(Yt||0))),Ve&&!Dn&&I.update(),h&&!Dn&&!Vt&&(Vt=!0,h(I),Vt=!1)}},I.getVelocity=function(){return(Q()-de)/(vn()-Ia)*1e3||0},I.endAnimation=function(){Pa(I.callbackAnimation),i&&(L?L.progress(1):i.paused()?D||Pa(i,I.direction<0,1):Pa(i,i.reversed()))},I.labelToScroll=function(dt){return i&&i.labels&&(R||I.refresh()||R)+i.labels[dt]/i.duration()*$t||0},I.getTrailing=function(dt){var Bt=ee.indexOf(I),Dt=I.direction>0?ee.slice(0,Bt).reverse():ee.slice(Bt+1);return(ti(dt)?Dt.filter(function(Yt){return Yt.vars.preventOverlaps===dt}):Dt).filter(function(Yt){return I.direction>0?Yt.end<=R:Yt.start>=Xt})},I.update=function(dt,Bt,Dt){if(!(A&&!Dt&&!dt)){var Yt=Dn===!0?et:I.scroll(),ke=dt?0:(Yt-R)/$t,Kt=ke<0?0:ke>1?1:ke||0,Pe=I.progress,Ve,we,ve,ge,Gn,Ee,Sn,ii;if(Bt&&(de=kt,kt=A?Q():Yt,x&&(Ht=ct,ct=i&&!D?i.totalProgress():Kt)),m&&f&&!xn&&!sh&&mi&&(!Kt&&R<Yt+(Yt-de)/(vn()-Ia)*m?Kt=1e-4:Kt===1&&Xt>Yt+(Yt-de)/(vn()-Ia)*m&&(Kt=.9999)),Kt!==Pe&&I.enabled){if(Ve=I.isActive=!!Kt&&Kt<1,we=!!Pe&&Pe<1,Ee=Ve!==we,Gn=Ee||!!Kt!=!!Pe,I.direction=Kt>Pe?1:-1,I.progress=Kt,Gn&&!xn&&(ve=Kt&&!Pe?0:Kt===1?1:Pe===1?2:3,D&&(ge=!Ee&&W[ve+1]!=="none"&&W[ve+1]||W[ve],ii=i&&(ge==="complete"||ge==="reset"||ge in i))),v&&(Ee||ii)&&(ii||u||!i)&&(yn(v)?v(I):I.getTrailing(v).forEach(function(Y){return Y.endAnimation()})),D||(L&&!xn&&!sh?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",Kt,i._tTime/i._tDur):(L.vars.totalProgress=Kt,L.invalidate().restart())):i&&i.totalProgress(Kt,!!(xn&&(Gt||dt)))),f){if(dt&&_&&(B.style[_+y.os2]=Tt),!X)Z(La(xt+st*Kt));else if(Gn){if(Sn=!dt&&Kt>Pe&&Xt+1>Yt&&Yt+1>=Hi(U,y),w)if(!dt&&(Ve||Sn)){var qe=hr(f,!0),b=Yt-R;Cg(f,me,qe.top+(y===Xe?b:0)+Qe,qe.left+(y===Xe?0:b)+Qe)}else Cg(f,B);bo(Ve||Sn?C:S),ht&&Kt<1&&Ve||Z(xt+(Kt===1&&!Sn?st:0))}}x&&!ft.tween&&!xn&&!sh&&pt.restart(!0),a&&(Ee||T&&Kt&&(Kt<1||!zf))&&Ha(a.targets).forEach(function(Y){return Y.classList[Ve||T?"add":"remove"](a.className)}),o&&!D&&!dt&&o(I),Gn&&!xn?(D&&(ii&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),o&&o(I)),(Ee||!zf)&&(c&&Ee&&Vf(I,c),H[ve]&&Vf(I,H[ve]),T&&(Kt===1?I.kill(!1,1):H[ve]=0),Ee||(ve=Kt===1?1:3,H[ve]&&Vf(I,H[ve]))),P&&!Ve&&Math.abs(I.getVelocity())>(Ua(P)?P:2500)&&(Pa(I.callbackAnimation),L?L.progress(1):Pa(i,ge==="reverse"?1:!Kt,1))):D&&o&&!xn&&o(I)}if(Lt){var F=A?Yt/A.duration()*(A._caScrollDist||0):Yt;rt(F+(N._isFlipped?1:0)),Lt(F)}yt&&yt(-Yt/A.duration()*(A._caScrollDist||0))}},I.enable=function(dt,Bt){I.enabled||(I.enabled=!0,en(U,"resize",Na),z||en(U,"scroll",vo),at&&en(r,"refreshInit",at),dt!==!1&&(I.progress=$=0,kt=de=Wt=Q()),Bt!==!1&&I.refresh())},I.getTween=function(dt){return dt&&ft?ft.tween:L},I.setPositions=function(dt,Bt,Dt,Yt){if(A){var ke=A.scrollTrigger,Kt=A.duration(),Pe=ke.end-ke.start;dt=ke.start+Pe*dt/Kt,Bt=ke.start+Pe*Bt/Kt}I.refresh(!1,!1,{start:vg(dt,Dt&&!!I._startClamp),end:vg(Bt,Dt&&!!I._endClamp)},Yt),I.update()},I.adjustPinSpacing=function(dt){if(ut&&dt){var Bt=ut.indexOf(y.d)+1;ut[Bt]=parseFloat(ut[Bt])+dt+Qe,ut[1]=parseFloat(ut[1])+dt+Qe,bo(ut)}},I.disable=function(dt,Bt){if(I.enabled&&(dt!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Bt||L&&L.pause(),et=0,Et&&(Et.uncache=1),at&&tn(r,"refreshInit",at),pt&&(pt.pause(),ft.tween&&ft.tween.kill()&&(ft.tween=0)),!z)){for(var Dt=ee.length;Dt--;)if(ee[Dt].scroller===U&&ee[Dt]!==I)return;tn(U,"resize",Na),z||tn(U,"scroll",vo)}},I.kill=function(dt,Bt){I.disable(dt,Bt),L&&!Bt&&L.kill(),l&&delete $f[l];var Dt=ee.indexOf(I);Dt>=0&&ee.splice(Dt,1),Dt===In&&gh>0&&In--,Dt=0,ee.forEach(function(Yt){return Yt.scroller===I.scroller&&(Dt=1)}),Dt||Dn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,dt&&i.revert({kill:!1}),Bt||i.kill()),It&&[It,At,N,ie].forEach(function(Yt){return Yt.parentNode&&Yt.parentNode.removeChild(Yt)}),Va===I&&(Va=0),f&&(Et&&(Et.uncache=1),Dt=0,ee.forEach(function(Yt){return Yt.pin===f&&Dt++}),Dt||(Et.spacer=0)),n.onKill&&n.onKill(I)},ee.push(I),I.enable(!1,!1),Ft&&Ft(I),i&&i.add&&!$t){var qt=I.update;I.update=function(){I.update=qt,te.cache++,R||Xt||I.refresh()},St.delayedCall(.01,I.update),$t=.01,R=Xt=0}else I.refresh();f&&sb()},r.register=function(n){return yo||(St=n||Bg(),Og()&&window.document&&r.enable(),yo=Da),yo},r.defaults=function(n){if(n)for(var i in n)ch[i]=n[i];return ch},r.disable=function(n,i){Da=0,ee.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(re,"wheel",vo),tn(Te,"scroll",vo),clearInterval(rh),tn(Te,"touchcancel",Vi),tn(me,"touchstart",Vi),ah(tn,Te,"pointerdown,touchstart,mousedown",yg),ah(tn,Te,"pointerup,touchend,mouseup",Mg),vh.kill(),oh(tn);for(var s=0;s<te.length;s+=3)lh(tn,te[s],te[s+1]),lh(tn,te[s],te[s+2])},r.enable=function(){if(re=window,Te=document,ei=Te.documentElement,me=Te.body,St&&(Ha=St.utils.toArray,Fa=St.utils.clamp,qf=St.core.context||Vi,Bf=St.core.suppressOverwrites||Vi,jf=re.history.scrollRestoration||"auto",Jf=re.pageYOffset||0,St.core.globals("ScrollTrigger",r),me)){Da=1,So=document.createElement("div"),So.style.height="100vh",So.style.position="absolute",qg(),QS(),ze.register(St),r.isTouch=ze.isTouch,Br=ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Yf=ze.isTouch===1,en(re,"wheel",vo),Qf=[re,Te,ei,me],St.matchMedia?(r.matchMedia=function(c){var h=St.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},St.addEventListener("matchMediaInit",function(){return sd()}),St.addEventListener("matchMediaRevert",function(){return Xg()}),St.addEventListener("matchMedia",function(){xs(0,1),Ts("matchMedia")}),St.matchMedia().add("(orientation: portrait)",function(){return Hf(),Hf})):console.warn("Requires GSAP 3.11.0 or later"),Hf(),en(Te,"scroll",vo);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,o=St.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=hr(me),Xe.m=Math.round(a.top+Xe.sc())||0,_n.m=Math.round(a.left+_n.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),rh=setInterval(Tg,250),St.delayedCall(.5,function(){return sh=0}),en(Te,"touchcancel",Vi),en(me,"touchstart",Vi),ah(en,Te,"pointerdown,touchstart,mousedown",yg),ah(en,Te,"pointerup,touchend,mouseup",Mg),Xf=St.utils.checkPrefix("transform"),_h.push(Xf),yo=vn(),vh=St.delayedCall(.2,xs).pause(),Mo=[Te,"visibilitychange",function(){var c=re.innerWidth,h=re.innerHeight;Te.hidden?(gg=c,_g=h):(gg!==c||_g!==h)&&Na()},Te,"DOMContentLoaded",xs,re,"load",xs,re,"resize",Na],oh(en),ee.forEach(function(c){return c.enable(0,1)}),l=0;l<te.length;l+=3)lh(tn,te[l],te[l+1]),lh(tn,te[l],te[l+2])}},r.config=function(n){"limitCallbacks"in n&&(zf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(rh)||(rh=i)&&setInterval(Tg,i),"ignoreMobileResize"in n&&(Yf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(oh(tn)||oh(en,n.autoRefreshEvents||"none"),Ug=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Rn(n),o=te.indexOf(s),a=Ss(s);~o&&te.splice(o,a?6:2),i&&(a?Ei.unshift(re,i,me,i,ei,i):Ei.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ti(n)?Rn(n):n).getBoundingClientRect(),a=o[s?vs:ys]*i||0;return s?o.right-a>0&&o.left+a<re.innerWidth:o.bottom-a>0&&o.top+a<re.innerHeight},r.positionInViewport=function(n,i,s){ti(n)&&(n=Rn(n));var o=n.getBoundingClientRect(),a=o[s?vs:ys],l=i==null?a/2:i in Sh?Sh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/re.innerWidth:(o.top+l)/re.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=bs.killAll||[];bs={},i.forEach(function(s){return s()})}},r})();jt.version="3.13.0";jt.saveStyles=function(r){return r?Ha(r).forEach(function(t){if(t&&t.style){var e=jn.indexOf(t);e>=0&&jn.splice(e,5),jn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),qf())}}):jn};jt.revert=function(r,t){return sd(!r,t)};jt.create=function(r,t){return new jt(r,t)};jt.refresh=function(r){return r?Na(!0):(yo||jt.register())&&xs(!0)};jt.update=function(r){return++te.cache&&ur(r===!0?2:0)};jt.clearScrollMemory=Yg;jt.maxScroll=function(r,t){return Hi(r,t?_n:Xe)};jt.getScrollFunc=function(r,t){return lr(Rn(r),t?_n:Xe)};jt.getById=function(r){return $f[r]};jt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};jt.isScrolling=function(){return!!mi};jt.snapDirectional=rd;jt.addEventListener=function(r,t){var e=bs[r]||(bs[r]=[]);~e.indexOf(t)||e.push(t)};jt.removeEventListener=function(r,t){var e=bs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],d=[],f=St.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(_){u.length||f.restart(!0),u.push(_.trigger),d.push(_),s<=u.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&yn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return yn(s)&&(s=s(),en(jt,"refresh",function(){return s=t.batchMax()})),Ha(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(jt.create(c))}),e};var Pg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Wf=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ze.isTouch?" pinch-zoom":""):"none",t===ei&&r(me,e)},dh={auto:1,scroll:1},hb=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||St.core.getCache(s),a=vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(dh[(l=pi(s)).overflowY]||dh[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ss(s)&&(dh[(l=pi(s)).overflowY]||dh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},$g=function(t,e,n,i){return ze.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&hb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&en(Te,ze.eventTypes[0],Dg,!1,!0)},onDisable:function(){return tn(Te,ze.eventTypes[0],Dg,!0)}})},ub=/(input|label|select|textarea)/i,Ig,Dg=function(t){var e=ub.test(t.target.tagName);(e||Ig)&&(t._gsapAllow=!0,Ig=e)},fb=function(t){_s(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Rn(t.target)||ei,h=St.core.globals().ScrollSmoother,u=h&&h.get(),d=Br&&(t.content&&Rn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),f=lr(c,Xe),_=lr(c,_n),g=1,m=(ze.isTouch&&re.visualViewport?re.visualViewport.scale*re.visualViewport.width:re.outerWidth)/re.innerWidth,p=0,M=yn(i)?function(){return i(a)}:function(){return i||2.8},T,x,w=$g(c,t.type,!0,s),E=function(){return x=!1},A=Vi,P=Vi,v=function(){l=Hi(c,Xe),P=Fa(Br?1:0,l),n&&(A=Fa(0,Hi(c,_n))),T=Ms},y=function(){d._gsap.y=La(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(x){requestAnimationFrame(E);var k=La(a.deltaY/2),nt=P(f.v-k);if(d&&nt!==f.v+f.offset){f.offset=nt-f.v;var I=La((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",f.cacheID=te.cache,ur()}return!0}f.offset&&y(),x=!0},U,G,z,X,H=function(){v(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&St.set(d,{y:"+=0"}),t.ignoreCheck=function(W){return Br&&W.type==="touchmove"&&D(W)||g>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},t.onPress=function(){x=!1;var W=g;g=La((re.visualViewport&&re.visualViewport.scale||1)/m),U.pause(),W!==g&&Wf(c,g>1.01?!0:n?!1:"x"),G=_(),z=f(),v(),T=Ms},t.onRelease=t.onGestureStart=function(W,k){if(f.offset&&y(),!k)X.restart(!0);else{te.cache++;var nt=M(),I,at;n&&(I=_(),at=I+nt*.05*-W.velocityX/.227,nt*=Pg(_,I,at,Hi(c,_n)),U.vars.scrollX=A(at)),I=f(),at=I+nt*.05*-W.velocityY/.227,nt*=Pg(f,I,at,Hi(c,Xe)),U.vars.scrollY=P(at),U.invalidate().duration(nt).play(.01),(Br&&U.vars.scrollY>=l||I>=l-1)&&St.to({},{onUpdate:H,duration:nt})}o&&o(W)},t.onWheel=function(){U._ts&&U.pause(),vn()-p>1e3&&(T=0,p=vn())},t.onChange=function(W,k,nt,I,at){if(Ms!==T&&v(),k&&n&&_(A(I[2]===k?G+(W.startX-W.x):_()+k-I[1])),nt){f.offset&&y();var Nt=at[2]===nt,ne=Nt?z+W.startY-W.y:f()+nt-at[1],Wt=P(ne);Nt&&ne!==Wt&&(z+=Wt-ne),f(Wt)}(nt||k)&&ur()},t.onEnable=function(){Wf(c,n?!1:"x"),jt.addEventListener("refresh",H),en(re,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),w.enable()},t.onDisable=function(){Wf(c,!0),tn(re,"resize",H),jt.removeEventListener("refresh",H),w.kill()},t.lockAxis=t.lockAxis!==!1,a=new ze(t),a.iOS=Br,Br&&!f()&&f(1),Br&&St.ticker.add(Vi),X=a._dc,U=St.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Zg(f,f(),function(){return U.pause()})},onUpdate:ur,onComplete:X.vars.onComplete}),a};jt.sort=function(r){if(yn(r))return ee.sort(r);var t=re.pageYOffset||0;return jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+re.innerHeight}),ee.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};jt.observe=function(r){return new ze(r)};jt.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var t=r instanceof ze?r:fb(r);return Pn&&Pn.target===t.target&&Pn.kill(),Ss(t.target)&&(Pn=t),t};jt.core={_getVelocityProp:ih,_inputObserver:$g,_scrollers:te,_proxies:Ei,bridge:{ss:function(){mi||Ts("scrollStart"),mi=vn()},ref:function(){return xn}}};Bg()&&St.registerPlugin(jt);var db="1.3.11";function Qg(r,t,e){return Math.max(r,Math.min(t,e))}function pb(r,t,e){return(1-e)*r+e*t}function mb(r,t,e,n){return pb(r,t,1-Math.exp(-e*n))}function gb(r,t){return(r%t+t)%t}var _b=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Qg(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=mb(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function xb(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var vb=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=r,this.content=t,e&&(this.debouncedResize=xb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},jg=class{events={};emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?.push(t)||(this.events[r]=[t]),()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},Jg=100/6,zr={passive:!1},yb=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zr),this.element.addEventListener("touchstart",this.onTouchStart,zr),this.element.addEventListener("touchmove",this.onTouchMove,zr),this.element.addEventListener("touchend",this.onTouchEnd,zr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new jg;on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,zr),this.element.removeEventListener("touchstart",this.onTouchStart,zr),this.element.removeEventListener("touchmove",this.onTouchMove,zr),this.element.removeEventListener("touchend",this.onTouchEnd,zr)}onTouchStart=r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=n===1?Jg:n===2?this.window.width:1,s=n===1?Jg:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Kg=r=>Math.min(1,1.001-Math.pow(2,-10*r)),t_=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new _b;emitter=new jg;dimensions;virtualScroll;constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d=u==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:M=!0,autoRaf:T=!1,anchors:x=!1,autoToggle:w=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:A=!1}={}){window.lenisVersion=db,(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Kg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:f,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:M,autoRaf:T,anchors:x,autoToggle:w,allowNestedScroll:E,__experimental__naiveDimensions:A},this.dimensions=new vb(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new yb(e,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};onTransitionEnd=r=>{if(r.propertyName.includes("overflow")){let t=this.isHorizontal?"overflow-x":"overflow-y",e=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(e)?this.internalStop():this.internalStart()}};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{let e=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(e){let n=e.getAttribute("href");if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(s=0),this.scrollTo(s,i)}}};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof h=="function"&&h?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,g=i&&n.type==="touchend";g&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:u}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){let _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}let f=d.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite){if(h){this.targetScroll=this.animatedScroll=this.scroll;let d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=Qg(0,r,this.limit);if(r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=u??{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=Kg:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(d,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),h&&(this.targetScroll=d),f||this.emit(),f&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now(),i=r._lenis??={},s,o,a,l,c,h,u,d,f=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();let w=window.getComputedStyle(r);i.computedStyle=w;let E=w.overflowX,A=w.overflowY;if(s=["auto","overlay","scroll"].includes(E),o=["auto","overlay","scroll"].includes(A),i.hasOverflowX=s,i.hasOverflowY=o,!s&&!o||f==="vertical"&&!o||f==="horizontal"&&!s)return!1;c=r.scrollWidth,h=r.scrollHeight,u=r.clientWidth,d=r.clientHeight,a=c>u,l=h>d,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=h,i.clientWidth=u,i.clientHeight=d}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,h=i.scrollHeight,u=i.clientWidth,d=i.clientHeight;if(!s&&!o||!a&&!l||f==="vertical"&&(!o||!l)||f==="horizontal"&&(!s||!a))return!1;let _;if(f==="horizontal")_="x";else if(f==="vertical")_="y";else{let w=t!==0,E=e!==0;w&&s&&a&&(_="x"),E&&o&&l&&(_="y")}if(!_)return!1;let g,m,p,M,T;if(_==="x")g=r.scrollLeft,m=c-u,p=t,M=s,T=a;else if(_==="y")g=r.scrollTop,m=h-d,p=e,M=o,T=l;else return!1;return(p>0?g<m:g>0)&&M&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?gb(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};Ke.registerPlugin(jt);var ce=(r,t=document)=>t.querySelector(r),hn=(r,t=document)=>[...t.querySelectorAll(r)],ld=matchMedia("(prefers-reduced-motion: reduce)"),ni=ld.matches,wh=[["oryzo_ai","Oryzo AI","Concept \u2022 Web \u2022 Design \u2022 Development \u2022 3D \u2022 Animation"],["atlas_motion","Atlas Motion","Concept \u2022 Web \u2022 Design \u2022 Development \u2022 3D \u2022 Animation"],["devin_ai","Devin AI","Web \u2022 Design \u2022 Development \u2022 3D"],["of_the_oak","Of The Oak","Web \u2022 Design \u2022 Development \u2022 3D \u2022 Animation"],["everswap","Everswap","Concept \u2022 Web \u2022 Design \u2022 Development \u2022 3D \u2022 Animation"],["porsche_dream_machine","Porsche: Dream Machine","Concept \u2022 3D Illustration \u2022 Motion \u2022 Video"],["synthetic_human","Synthetic Human","Web \u2022 Design \u2022 Development \u2022 3D"],["spatial_fusion","Spatial Fusion","Web \u2022 Design \u2022 Development \u2022 3D"],["spaace","Spaace","Web \u2022 Design \u2022 Development \u2022 3D"],["ddd_2024","DDD 2024","Web \u2022 Design \u2022 Development \u2022 3D"],["choo_choo_world","Choo Choo World","Concept \u2022 Web \u2022 Game Design \u2022 3D"],["soda_experience","Soda Experience","AR \u2022 Development \u2022 3D"]];ce("#project-grid").innerHTML=wh.map(([r,t,e],n)=>`<article class="project"><button class="project-image" data-project="${n}" aria-label="Explore ${t}, visual reference"><img src="/assets/${r}.webp" alt="${t} \u2014 immersive digital visual by Lusion" width="1000" height="650" loading="lazy" decoding="async"><span class="project-arrow" aria-hidden="true">\u2197</span></button><p class="project-meta">${e}</p><h3 class="project-title">${t}<small>VISUAL REFERENCE</small></h3></article>`).join("");var fr;ni||(fr=new t_({duration:1.15,smoothWheel:!0,syncTouch:!1}),fr.on("scroll",jt.update),Ke.ticker.add(r=>fr.raf(r*1e3)),Ke.ticker.lagSmoothing(0));var Mb=r=>fr?fr.scrollTo(r,{offset:0}):ce(r)?.scrollIntoView({behavior:ni?"instant":"smooth"}),gi={enabled:!1,music:new Audio("/assets/ambient.ogg"),hover:new Audio("/assets/hover.ogg"),click:new Audio("/assets/click.ogg"),play(r){if(!this.enabled||document.hidden)return;let t=this[r].cloneNode();t.volume=r==="hover"?.24:.4,t.play().catch(()=>{})},async toggle(){if(this.enabled=!this.enabled,this.enabled)try{await this.music.play()}catch{this.enabled=!1}else this.music.pause();ce(".sound").setAttribute("aria-pressed",String(this.enabled)),ce(".sound").setAttribute("aria-label",this.enabled?"Disable sound":"Enable sound"),ce(".sound").title=this.enabled?"Sound on":"Sound off"}};gi.music.loop=!0;gi.music.volume=.3;ce(".sound").addEventListener("click",()=>gi.toggle());document.addEventListener("pointerover",r=>{let t=r.target.closest("a,button");t&&!t.contains(r.relatedTarget)&&gi.play("hover")});document.addEventListener("click",r=>{r.target.closest("a,button")&&gi.play("click")});document.addEventListener("visibilitychange",()=>{document.hidden?gi.music.pause():gi.enabled&&!ce("#media-dialog").open&&gi.music.play().catch(()=>{})});var wo=ce("#menu-dialog"),Sb=ce("#contact-dialog"),ws=ce("#media-dialog");hn("dialog").forEach(r=>r.setAttribute("data-lenis-prevent",""));wo.insertAdjacentHTML("afterbegin",'<a class="menu-logo logo" href="#home">ZEL</a><button class="dialog-close pill menu-close" aria-label="Close menu">CLOSE \u2022\u2022</button>');var n_,bb=()=>{fr?.stop(),document.body.style.overflow="hidden"},cd=()=>{hn("dialog[open]").length||(fr?.start(),document.body.style.overflow="",n_?.focus())};function Wa(r){n_=document.activeElement,r.showModal(),bb()}function hd(){wo.close(),ce(".menu-button").setAttribute("aria-expanded","false"),cd()}ce(".menu-button").addEventListener("click",()=>{Wa(wo),ce(".menu-button").setAttribute("aria-expanded","true")});ce(".menu-close").addEventListener("click",hd);wo.addEventListener("close",()=>{ce(".menu-button").setAttribute("aria-expanded","false"),cd()});hn('a[href^="#"]').forEach(r=>r.addEventListener("click",t=>{let e=r.getAttribute("href");ce(e)&&(t.preventDefault(),wo.open&&hd(),Mb(e))}));hn("[data-contact]").forEach(r=>r.addEventListener("click",()=>{wo.open&&hd(),Wa(Sb)}));hn("[data-close]").forEach(r=>r.addEventListener("click",()=>r.closest("dialog").close()));hn("dialog").forEach(r=>{r.addEventListener("click",t=>{if(t.target===r){let e=r.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&r.close()}}),r.addEventListener("close",cd)});var Th;ce("#contact-form").addEventListener("submit",r=>{r.preventDefault();let t=new FormData(r.target);Th&&URL.revokeObjectURL(Th);let e=`ZEL \u2014 Project brief

Name: ${t.get("name")}
Email: ${t.get("email")}

Project
${t.get("project")}
`;Th=URL.createObjectURL(new Blob([e],{type:"text/plain;charset=utf-8"})),ce(".form-status").innerHTML='Your project brief is ready to download. <br><a class="brief-download" download="ZEL-project-brief.txt">Download your brief \u2197</a>',ce(".brief-download").href=Th});ws.addEventListener("close",()=>{ce("video",ws)?.pause(),ce(".media-dialog-content").replaceChildren(),gi.enabled&&gi.music.play().catch(()=>{})});function Tb(r){let[t,e]=wh[r];ce(".media-dialog-content").innerHTML=`<img src="/assets/${t}.webp" alt="${e} visual reference"><h2>${e}</h2><p class="media-credit">Visual reference by Lusion. Shown here as a design study, rather than ZEL client work.<br><a href="https://lusion.co/projects/${t}" target="_blank" rel="noopener">Explore the original project \u2197</a></p>`,Wa(ws)}hn("[data-project]").forEach(r=>r.addEventListener("click",()=>Tb(Number(r.dataset.project))));ce("#all-projects").addEventListener("click",()=>{ce(".media-dialog-content").innerHTML='<h2>Explore the visual collection</h2><div class="gallery-grid">'+wh.map(([r,t],e)=>`<button data-gallery-project="${e}"><img src="/assets/${r}.webp" alt="${t}" loading="lazy"><span>${t} \u2197</span></button>`).join("")+'</div><p class="media-credit">Reference imagery by Lusion \xB7 ZEL visual study</p>',Wa(ws),hn("[data-gallery-project]",ws).forEach(r=>r.addEventListener("click",()=>{let[t,e]=wh[Number(r.dataset.galleryProject)];ce(".media-dialog-content").innerHTML=`<img src="/assets/${t}.webp" alt="${e}"><h2>${e}</h2><p class="media-credit">Visual reference by Lusion.<br><a href="https://lusion.co/projects/${t}" target="_blank" rel="noopener">Explore the original project \u2197</a></p>`}))});hn("[data-reel]").forEach(r=>r.addEventListener("click",()=>{ce(".media-dialog-content").innerHTML='<video src="/assets/reel.mp4" controls playsinline loop aria-label="Lusion creative reference reel"></video><p class="media-credit">Creative reference reel by <a href="https://lusion.co/" target="_blank" rel="noopener">Lusion</a> \xB7 ZEL visual study</p>',Wa(ws),gi.music.pause();let t=ce("video",ws);t.muted=!gi.enabled,t.play().catch(()=>{})}));var wb=new IntersectionObserver(r=>r.forEach(({target:t,isIntersecting:e})=>{e&&!ni?(t.src||(t.addEventListener("loadedmetadata",()=>{t.dataset.start&&(t.currentTime=Number(t.dataset.start))},{once:!0}),t.src=t.dataset.src),t.play().catch(()=>{})):t.pause()}),{rootMargin:"150px"});hn(".ambient-video").forEach(r=>wb.observe(r));var Eb=Ke.matchMedia();Eb.add("(prefers-reduced-motion: no-preference)",()=>(Ke.from(".hero h1",{y:30,opacity:.65,duration:1.15,ease:"power3.out"}),Ke.from(".hero-visual",{scale:.97,duration:1.5,ease:"power3.out"}),Ke.to(".hero h1",{y:-70,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}}),hn(".about-title .line").forEach((r,t)=>Ke.from(r,{x:t?-90:100,rotate:t?1.2:-1.2,ease:"power2.out",scrollTrigger:{trigger:".about",start:"top 85%",end:"top 20%",scrub:1}})),hn(".ribbon path").forEach(r=>{let t=r.getTotalLength();Ke.fromTo(r,{strokeDasharray:t,strokeDashoffset:t},{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:r.closest("section"),start:"top 90%",end:"bottom 70%",scrub:1.2}})}),Ke.from(".flower-frame",{y:90,rotation:-3,ease:"none",scrollTrigger:{trigger:".about-content",start:"top bottom",end:"bottom 30%",scrub:1}}),Ke.from(".reel-frame",{scale:.86,borderRadius:50,ease:"power1.inOut",scrollTrigger:{trigger:".reel",start:"top bottom",end:"top 5%",scrub:1}}),hn(".project-image").forEach(r=>Ke.from(r,{y:55,rotateX:4,ease:"power2.out",scrollTrigger:{trigger:r,start:"top 95%",end:"top 55%",scrub:.6}})),hn("#ideas-title .line").forEach((r,t)=>Ke.from(r,{x:t===1?-65:65,ease:"power1.out",scrollTrigger:{trigger:"#ideas",start:"top 90%",end:"top 10%",scrub:1}})),Ke.fromTo(".device",{rotationY:15,rotationX:12,rotationZ:-5},{rotationY:-7,rotationX:0,rotationZ:2,ease:"none",scrollTrigger:{trigger:".ideas-content",start:"top bottom",end:"bottom 30%",scrub:1}}),()=>{}));var e_=ce(".reel-frame"),Ab=ce(".reel-cursor");e_.addEventListener("pointermove",r=>{if(ni)return;let t=e_.getBoundingClientRect();Ke.to(Ab,{x:r.clientX-t.left,y:r.clientY-t.top,rotation:(r.movementX||0)*.5,duration:.35,ease:"power2.out",overwrite:!0})});hn(".pill").forEach(r=>{r.addEventListener("pointermove",t=>{if(ni||t.pointerType!=="mouse")return;let e=r.getBoundingClientRect();Ke.to(r,{x:(t.clientX-e.left-e.width/2)*.12,y:(t.clientY-e.top-e.height/2)*.2,duration:.35,ease:"power3.out",overwrite:!0})}),r.addEventListener("pointerleave",()=>Ke.to(r,{x:0,y:0,duration:.5,ease:"power3.out",overwrite:!0}))});var Cb=ce(".scroll-indicator i");function i_(){let r=document.documentElement.scrollHeight-innerHeight;Cb.style.transform=`translateY(${Math.max(0,(innerHeight*.2-35)*scrollY/Math.max(1,r))}px)`}window.addEventListener("scroll",i_,{passive:!0});var od=ce("#fluid-canvas"),Mn=od.getContext("2d"),Ai=[],ad;function r_(){let r=Math.min(devicePixelRatio,1.5);od.width=innerWidth*r,od.height=innerHeight*r,Mn.setTransform(r,0,0,r,0,0)}r_();window.addEventListener("resize",r_);window.addEventListener("pointermove",r=>{ni||r.pointerType!=="mouse"||innerWidth<813||r.target.closest(".hero-visual,.media-frame,dialog,.project-image")||(Ai.push({x:r.clientX,y:r.clientY,t:performance.now()}),Ai.length>75&&Ai.shift(),ad||(ad=requestAnimationFrame(s_)))});function s_(r){if(Mn.clearRect(0,0,innerWidth,innerHeight),Ai=Ai.filter(t=>r-t.t<950),Ai.length>2){for(let t=0;t<4;t++){Mn.lineWidth=42-t*8,Mn.lineCap="round",Mn.lineJoin="round",Mn.shadowBlur=t===0?18:6;for(let e=1;e<Ai.length;e++){let n=Ai[e],i=Ai[e-1],s=(1-(r-n.t)/950)*.12,o=["#acdfff","#eaccc0","#b9fff4","#ffffff"][t];Mn.strokeStyle=o,Mn.shadowColor=o,Mn.globalAlpha=s,Mn.beginPath(),Mn.moveTo(i.x,i.y+t*3),Mn.lineTo(n.x,n.y+t*3),Mn.stroke()}}Mn.globalAlpha=1,Mn.shadowBlur=0}ad=Ai.length?requestAnimationFrame(s_):null}function Rb(){let r=ce("#hero-canvas"),t=ce("#hero-visual"),e;try{e=new Lc({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}e.setPixelRatio(Math.min(devicePixelRatio,1.5)),e.outputColorSpace=Tn,e.toneMapping=Wl,e.toneMappingExposure=.83;let n=new $r,i=new nn(35,1,.1,100);i.position.set(0,0,14);let s=new eo(e),o=new Nc,a=s.fromScene(o,.04);n.environment=a.texture,o.dispose(),s.dispose(),n.add(new ia(16777215,.3));let l=new Kr(16777215,4);l.position.set(-4,7,9),n.add(l);let c=new Kr(6452479,2);c.position.set(5,-2,-4),n.add(c);let h=new Kr(16777215,1.5);h.position.set(7,3,1),n.add(h);let u=[new Li({color:526603,metalness:.45,roughness:.29,envMapIntensity:.45}),new Li({color:1119428,metalness:.35,roughness:.26,envMapIntensity:.5}),new Li({color:14277087,metalness:.4,roughness:.32,envMapIntensity:.65})],d=[new Ot(.17,-.8),new Ot(.43,-.8),new Ot(.49,-.76),new Ot(.5,-.69),new Ot(.5,.69),new Ot(.49,.76),new Ot(.43,.8),new Ot(.17,.8),new Ot(.14,.74),new Ot(.14,-.74),new Ot(.17,-.8)],f=new Jo(d,40),_=new Qo(.51,20,16),g=new Ri;n.add(g);let m=[],p=209,M=()=>(p=p*16807%2147483647,(p-1)/2147483646);for(let z=0;z<3;z++)for(let X=0;X<4;X++)for(let H=0;H<4;H++){if(M()<.13)continue;let W=new Ri,k=u[z===2?0:Math.floor(M()*3)];for(let I=0;I<3;I++){let at=new Re(f,k);I===1&&(at.rotation.z=Math.PI/2),I===2&&(at.rotation.x=Math.PI/2),W.add(at)}W.add(new Re(_,k));let nt=.85+M()*.18;W.scale.setScalar(nt),W.position.set((H-1.5)*1.65+(M()-.5)*.9,(X-1.5)*1.63+(M()-.5)*.7,(z-1)*1.45),W.rotation.set(M()*3,M()*3,M()*3),W.userData={origin:W.position.clone(),rotation:W.rotation.clone(),v:new V,spin:new V((M()-.5)*.05,(M()-.5)*.05,(M()-.5)*.05),phase:M()*6},g.add(W),m.push(W)}g.rotation.z=-.12;let T=new Ot,x=new Ot,w=new ra,E=!0,A=performance.now(),P=0,v=!1,y=new Ot,D=0;function U(){let z=t.clientWidth,X=t.clientHeight;e.setSize(z,X,!1),i.aspect=z/X,i.updateProjectionMatrix(),g.scale.setScalar(i.aspect<1.2?.64:1.12),ni&&e.render(n,i)}new ResizeObserver(U).observe(t),U(),new IntersectionObserver(([z])=>{E=z.isIntersecting},{rootMargin:"100px"}).observe(t),t.addEventListener("pointermove",z=>{let X=t.getBoundingClientRect();T.set((z.clientX-X.left)/X.width*2-1,-((z.clientY-X.top)/X.height*2-1)),v&&!ni&&(g.rotation.y+=(z.clientX-y.x)*.004,g.rotation.x+=(z.clientY-y.y)*.002,y.set(z.clientX,z.clientY))}),t.addEventListener("pointerdown",z=>{v=!0,y.set(z.clientX,z.clientY)}),window.addEventListener("pointerup",()=>{v=!1}),t.addEventListener("pointerleave",()=>{T.set(0,0),v=!1}),t.addEventListener("click",()=>{if(ni)return;w.setFromCamera(T,i);let X=w.intersectObjects(g.children,!0)[0]?.point||new V(0,0,1),H=g.worldToLocal(X.clone());m.forEach(W=>{let k=W.position.clone().sub(H);k.z+=2,k.normalize().multiplyScalar(.09+M()*.06),W.userData.v.add(k)}),D=1});function G(z){requestAnimationFrame(G);let X=Math.min((z-A)/1e3,.033);A=z,!(!E||document.hidden||ni)&&(P+=X,x.lerp(T,.04),D*=.96,v||(g.rotation.y+=(x.x*.24-g.rotation.y)*.025,g.rotation.x+=(-x.y*.12-g.rotation.x)*.025),m.forEach(H=>{let W=H.userData,k=W.origin.clone();k.y+=Math.sin(P*.55+W.phase)*.08,W.v.add(k.sub(H.position).multiplyScalar(.012)),W.v.multiplyScalar(.93),H.position.add(W.v),H.rotation.x=W.rotation.x+Math.sin(P*.2+W.phase)*.09+D*W.spin.x*8,H.rotation.y=W.rotation.y+Math.cos(P*.22+W.phase)*.1}),e.render(n,i))}e.render(n,i),r.classList.add("ready"),ce(".hero-fallback").style.visibility="hidden",requestAnimationFrame(G),r.addEventListener("webglcontextlost",()=>{r.classList.remove("ready"),ce(".hero-fallback").style.visibility="visible"}),ld.addEventListener("change",()=>{ni&&e.render(n,i)})}Rb();ld.addEventListener("change",r=>{ni=r.matches,ni?(fr?.destroy(),fr=null,hn(".ambient-video").forEach(t=>t.pause()),Ai=[],Mn.clearRect(0,0,innerWidth,innerHeight)):hn(".ambient-video").forEach(t=>{t.getBoundingClientRect().bottom>0&&t.getBoundingClientRect().top<innerHeight&&(t.src||(t.src=t.dataset.src),t.play().catch(()=>{}))})});window.addEventListener("load",()=>{jt.refresh(),i_()});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
