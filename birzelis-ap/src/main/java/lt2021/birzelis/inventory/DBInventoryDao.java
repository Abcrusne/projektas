package lt2021.birzelis.inventory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DBInventoryDao extends JpaRepository<Inventory, Long> {

	@Query("select i from Inventory i order by i.weight ")
	List<Inventory> findAllByOrderByIdAsc(double weight);
//	List<Country> findByTitleFragment(String title);
//
//	@Query("select i from Inventory i order by i.title asc")
//	List<Country> findAll();
}
