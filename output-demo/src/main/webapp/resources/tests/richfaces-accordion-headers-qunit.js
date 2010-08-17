/*
 * JBoss, Home of Professional Open Source
 * Copyright ${year}, Red Hat, Inc. and individual contributors
 * by the @authors tag. See the copyright.txt in the distribution for a
 * full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

RichFaces.QUnit.run(function() {
    module("richfaces-accordion");

    var ACCORDION_ID = "f:panel";

    test("RichFaces.ui.Accordion change headers", function () {
        var c = RichFaces.$(ACCORDION_ID);

        ok(c instanceof RichFaces.ui.Accordion, "inctance of RichFaces.ui.Accordion");
        equals(c.id, ACCORDION_ID, "id");

        equals(c.getItems().length, 3, "getItems().length");

        var items = c.getItems();
        ok( items[0].__header("active"  ).is(":visible"), "1 item: active visible");
        ok(!items[0].__header("inactive").is(":visible"), "1 item: inactive unvisible");
        ok(!items[0].__header("disable" ).is(":visible"), "1 item: disabled unvisible");

        ok(!items[1].__header("active"  ).is(":visible"), "2 item: active unvisible");
        ok(!items[1].__header("inactive").is(":visible"), "2 item: inactive unvisible");
        ok( items[1].__header("disable" ).is(":visible"), "2 item: disabled visible");

        ok(!items[2].__header("active"  ).is(":visible"), "3 item: active unvisible");
        ok( items[2].__header("inactive").is(":visible"), "3 item: inactive visible");
        ok(!items[2].__header("disable" ).is(":visible"), "3 item: disabled unvisible");

        c.switchToItem(items[2].getName());
        ok(!items[0].__header("active"  ).is(":visible"), "1 item: active unvisible");
        ok( items[0].__header("inactive").is(":visible"), "1 item: inactive visible");
        ok(!items[0].__header("disable" ).is(":visible"), "1 item: disabled unvisible");

        ok(!items[1].__header("active"  ).is(":visible"), "2 item: active unvisible");
        ok(!items[1].__header("inactive").is(":visible"), "2 item: inactive unvisible");
        ok( items[1].__header("disable" ).is(":visible"), "2 item: disabled visible");

        ok( items[2].__header("active"  ).is(":visible"), "3 item: active visible");
        ok(!items[2].__header("inactive").is(":visible"), "3 item: inactive unvisible");
        ok(!items[2].__header("disable" ).is(":visible"), "3 item: disabled unvisible");

        c.switchToItem(items[0].getName());
    });
});