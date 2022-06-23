package com.example.scottross123.microbakery.configuration;

import javax.sql.DataSource;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JpaConfiguration {
    
    @Bean
    public DataSource getDataSource() {
        return DataSourceBuilder.create()
                .driverClassName(System.getenv("PRING_DATASOURCE_DRIVER-CLASS-NAME"))
                .url(System.getenv("SPRING_DATASOURCE_URL"))
                .username(System.getenv("SPRING_DATASOURCE_USERNAME"))
                .password(System.getenv("SPRING_DATASOURCE_PASSWORD"))
                .build();
    }

}
