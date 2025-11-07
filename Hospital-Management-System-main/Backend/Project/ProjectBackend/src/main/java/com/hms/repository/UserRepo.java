package com.hms.repository;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.hms.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {	
    @Query("SELECT u FROM User u WHERE u.username = :username")
    Optional<User> findByUsername(@Param("username") String username);
	
    boolean existsByUsername(String username);
    List<User> findByRole(User.UserRole role);
}
