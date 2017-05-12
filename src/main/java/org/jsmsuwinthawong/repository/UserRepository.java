package org.jsmsuwinthawong.repository;

import org.jsmsuwinthawong.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by exodus on 5/12/17.
 */
public interface UserRepository extends JpaRepository<User,Long> {
}
