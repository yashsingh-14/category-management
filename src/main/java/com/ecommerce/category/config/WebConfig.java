package com.ecommerce.category.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // Forward all non-API, non-static single-segment routes to index.html for React Router
        registry.addViewController("/{path:[^\\.]*}").setViewName("forward:/index.html");
    }
}
