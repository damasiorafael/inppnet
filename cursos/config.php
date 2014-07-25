<?php  /// Moodle Configuration File 

unset($CFG);

$CFG = new stdClass();
$CFG->dbtype    = 'mysql';
$CFG->dbhost    = 'localhost';
$CFG->dbname    = 'inppnet_moodle';
$CFG->dbuser    = 'inppnet';
$CFG->dbpass    = '08PwVJZzdhVbUw';
$CFG->dbpersist =  false;
$CFG->prefix    = 'mdl_';

$CFG->wwwroot   = 'http://www.inppnet.com.br/cursos';
$CFG->dirroot   = '/var/www/inppnet/cursos';
$CFG->dataroot  = '/var/www/inppnet/moodledata';
$CFG->admin     = 'admin';

$CFG->directorypermissions = 00777;  // try 02777 on a server in Safe Mode

$CFG->passwordsaltmain = 'S_o{=#Wh:w]KD:5XH_Ipnyt^{nuJ;y';

require_once("$CFG->dirroot/lib/setup.php");
// MAKE SURE WHEN YOU EDIT THIS FILE THAT THERE ARE NO SPACES, BLANK LINES,
// RETURNS, OR ANYTHING ELSE AFTER THE TWO CHARACTERS ON THE NEXT LINE.
?>