//package pers.lmw.reins.sys.backend;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
///**
// * @author linmingwen
// * @date 2019年3月18日下午5:37:22
// */
//@Configuration
//@EnableWebMvc
//public class AppConfig implements WebMvcConfigurer {
// 
//  @Override
//  public void addCorsMappings(CorsRegistry registry) {
//
////	  registry.addMapping("/**")
////      .allowedOrigins("*")// 1 设置访问源地址
////      .allowCredentials(true)// 2 设置访问源请求头
////      .allowedMethods("GET", "POST", "DELETE", "PUT") // 3 设置访问源请求方法
////      .maxAge(3600);
//	  registry.addMapping("/**")
//      //设置允许跨域请求的域名
//      .allowedOrigins("*")  //也可以指定域名 .allowedOrigins("http://192.168.0.0:8080","http://192.168.0.1:8081")
//      //是否允许证书 不再默认开启
//      .allowCredentials(true)
//      //设置允许的方法
//      .allowedMethods("*")
//      //跨域允许时间
//      .maxAge(3600);
//
//  }
//}