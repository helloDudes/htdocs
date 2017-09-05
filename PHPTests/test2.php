<?php

require 'regExp.php';
use PHPUnit\Framework\TestCase;

class regTest extends TestCase
{
	private $reg;

	protected function setUp()
	{
		$this->reg = New reg();
	}

	public function testReg1()
	{
		$option = $this->reg->test1();
		$reg_string = "/<\/?.?>/";
		$success = preg_replace($reg_string, "", $option);
		var_dump($success);
		$this->assertEquals(10, 10);
	}
}
?>